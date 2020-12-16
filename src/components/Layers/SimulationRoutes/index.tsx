import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";

import { compact, round } from "lodash";
import SimulationSettings from "components/SimulationSettings";
import {
  convertCoord2LongLat,
  convertHeadingtoDegree,
  convertLongLat2Coords,
  getDistanceBetweenPoints,
  convertKnotToMeter,
} from "core/model/Map";
import { formatDateTimeUTC, YYYY_MM_DD_HH_MM_SS } from "core/utils/datetime";
import moment from "moment";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { simulationFormatMessage } from "core/model/Vessel";
import Map from "ol/Map";
import { BaseFunctions } from "services/vessel/actions";
import VesselServices from "services/vessel/api";

const vectorSource = new ol.source.Vector({
  format: new ol.format.GeoJSON(),
});

const getRotation = (startPoint: any, endPoint: any) => {
  const dx = endPoint[0] - startPoint[0];
  const dy = endPoint[1] - startPoint[1];
  return -Math.atan2(dy, dx);
};

const styleFunction = (feature: any) => {
  const geometry = feature.getGeometry();
  const styles = [
    // linestring
    new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: "#ffcc33",
        width: 2,
      }),
    }),
  ];

  geometry.forEachSegment(function (start: any, end: any) {
    const rotation = getRotation(start, end);
    // arrows
    styles.push(
      new ol.style.Style({
        geometry: new ol.geom.Point(end),
        image: new ol.style.Icon({
          src: "icons/arrow.png",
          anchor: [0.75, 0.5],
          rotateWithView: true,
          rotation,
        }),
      })
    );
  });

  return styles;
};

const simulationLayer = new ol.layer.Vector({
  source: vectorSource,
  style: styleFunction,
});

interface SimulationRoutesProps {
  guardianMap: Map;
  selectedVessel: any;
}

const DEFAULT_SPEED = 25;

function Index({ guardianMap, selectedVessel }: SimulationRoutesProps) {
  const dispatch = useDispatch();
  const [currentFeature, setCurrentFeature] = useState(new ol.Feature());
  const [firstCoord, setFirstCoord] = useState(null);
  const {
    simulationRoutes: {
      update,
      data: SimulationRoutesData,
      show: showSimulationRoutes,
    },
    mmsi,
    last_position_updated_at: lastPositionUpdatedAt,
  } = selectedVessel;
  const createdAtTime = moment(lastPositionUpdatedAt);
  const [openDialog, setOpenDialog] = React.useState(false);

  const draw = new ol.interaction.Draw({
    source: vectorSource,
    type: "LineString",
  });

  const handleDrawEnd = () => {
    draw.on("drawend", function (evt: any) {
      const { feature } = evt;
      const coords = feature.getGeometry().getCoordinates();
      setFirstCoord(coords[0]);

      const simulationData = coords.map((coordinate: any, index: number) => {
        if (index !== 0) {
          const heading = convertHeadingtoDegree(
            getRotation(coords[index - 1], coordinate)
          );

          const longLatCoord = convertCoord2LongLat(coordinate);
          const distance = round(
            getDistanceBetweenPoints(
              convertCoord2LongLat(coords[index - 1]),
              longLatCoord
            )
          );

          const movingTime = round(
            distance / convertKnotToMeter(DEFAULT_SPEED)
          );
          const timeStamp = formatDateTimeUTC(
            createdAtTime.add(movingTime, "seconds").toString(),
            YYYY_MM_DD_HH_MM_SS
          );
          const createdAt = formatDateTimeUTC(
            moment().toString(),
            YYYY_MM_DD_HH_MM_SS
          );

          return simulationFormatMessage({
            mmsi,
            heading,
            distance,
            longLatCoord,
            timeStamp,
            createdAt,
            movingTime: round(movingTime / 3600, 2),
          });
        }
        return null;
      });

      dispatch(
        BaseFunctions.setState({
          field: "selectedVessel",
          simulationRoutes: {
            ...selectedVessel.simulationRoutes,
            data: compact(simulationData),
          },
        })
      );

      setCurrentFeature(feature);

      guardianMap.removeInteraction(draw);
    });
  };

  useEffect(() => {
    if (showSimulationRoutes && selectedVessel.name) {
      guardianMap.removeLayer(simulationLayer);
      guardianMap.addLayer(simulationLayer);
      guardianMap.addInteraction(draw);
    }
    if (!showSimulationRoutes) {
      guardianMap.removeInteraction(draw);
      simulationLayer.getSource().clear();
      guardianMap.removeLayer(simulationLayer);
    }
    handleDrawEnd();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showSimulationRoutes, selectedVessel.name]);

  useEffect(() => {
    if (currentFeature && update) {
      const source = simulationLayer.getSource();
      const coords = SimulationRoutesData.map((record: any) => {
        return convertLongLat2Coords([record.longitude, record.latitude]);
      });
      const updateCoords = [firstCoord].concat(coords);
      const geometry = currentFeature.getGeometry();
      geometry.setCoordinates(updateCoords);
      source.clear();
      source.addFeature(currentFeature);

      const simulationData = geometry
        .getCoordinates()
        .map((coordinate: any, index: number) => {
          if (index !== 0) {
            const heading = convertHeadingtoDegree(
              getRotation(updateCoords[index - 1], coordinate)
            );
            const longLatCoord = convertCoord2LongLat(coordinate);
            const {
              speed,
              distance,
              timeStamp,
              createdAt,
              movingTime,
            } = SimulationRoutesData[index - 1];
            return simulationFormatMessage({
              mmsi,
              heading,
              distance,
              longLatCoord,
              timeStamp,
              speed,
              createdAt,
              movingTime,
            });
          }
          return null;
        });

      dispatch(
        BaseFunctions.setState({
          field: "selectedVessel",
          simulationRoutes: {
            ...selectedVessel.simulationRoutes,
            update: !update,
            data: compact(simulationData),
          },
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

  const handleClickClearDraw = () => {
    const isDelete = guardianMap.removeInteraction(draw);
    return isDelete && guardianMap.addInteraction(draw);
  };

  const handleClickClearDrawLayer = () => {
    simulationLayer.getSource().clear();
    guardianMap.removeInteraction(draw);
    guardianMap.addInteraction(draw);

    dispatch(
      BaseFunctions.setState({
        field: "selectedVessel",
        simulationRoutes: {
          ...selectedVessel.simulationRoutes,
          data: [],
        },
      })
    );
    handleDrawEnd();
  };

  const handleClickSend = () => {
    simulationLayer.getSource().clear();
    guardianMap.removeLayer(simulationLayer);
    guardianMap.addLayer(simulationLayer);

    dispatch(
      BaseFunctions.setState({
        field: "selectedVessel",
        simulationRoutes: {
          ...selectedVessel.simulationRoutes,
          data: [],
        },
      })
    );
    VesselServices.simulate(selectedVessel.imo, { data: SimulationRoutesData });

    setOpenDialog(false);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  return (
    <>
      <SimulationSettings
        handleClickClearDraw={handleClickClearDraw}
        handleClickClearDrawLayer={handleClickClearDrawLayer}
        handleClickSend={handleOpenDialog}
        show={showSimulationRoutes}
      />
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Create Simulation Data Confirmation?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please be aware that this simulation data will effect to voyage of
            current vessel, it is recommended to use on a fake vessel which is
            not belong to our customer, will you continue?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClickSend} color="primary" autoFocus>
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Index;

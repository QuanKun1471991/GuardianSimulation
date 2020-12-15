import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback, useEffect, useState } from "react";
import "assets/styles/dashboard.scss";
import { useInjectReducer } from "core/hooks/useInjectReducer";
import useInjectSaga from "core/hooks/useInjectSaga";
import vesselReducer, {
  initialSimulationRoutes,
} from "services/vessel/reducers";
import portReducer from "services/port/reducers";
import vesselSaga from "services/vessel/sagas";
import portSaga from "services/port/sagas";
import { SagaInjectionModes } from "core/constants/common";
import { VesselSelector } from "services/vessel/selectors";
import { PortSelector } from "services/port/selectors";
import {
  fetchAll as fetchAllVessel,
  BaseFunctions,
} from "services/vessel/actions";
import { fetchAll as fetchAllPort } from "services/port/actions";
import { notification } from "antd";
import { get } from "lodash";
import Drawer from "components/Drawer";
import dynamic from "next/dynamic";
import { LayoutSelector } from "services/layout/selectors";

const BaseMap = dynamic(() => import("components/BaseMap"), { ssr: false });
const VesselLayer = dynamic(() => import("components/Layers/Vessel"), {
  ssr: false,
});
const PortLayer = dynamic(() => import("components/Layers/Port"), {
  ssr: false,
});
const SelectedLayer = dynamic(
  () => import("components/Layers/SelectedFeature"),
  { ssr: false }
);
const SimulationRoutesLayer = dynamic(
  () => import("components/Layers/SimulationRoutes"),
  { ssr: false }
);
const SimulationReSult = dynamic(() => import("components/SimulationResults"), {
  ssr: false,
});
const VesselSettings = dynamic(() => import("components/VesselSettings"), {
  ssr: false,
});
const errorMessage = {
  vessel: {
    fetching: "Fetching Cargo Data ",
    fetched: "Fetched Cargo Data successfully",
  },
  port: {
    fetching: "Fetching Port Data",
    fetched: "Fetched Port Data successfully",
  },
};

const Index: NextPage = () => {
  useInjectReducer({ key: "vessel", reducer: vesselReducer });
  useInjectSaga({
    key: "vessel",
    saga: vesselSaga,
    mode: SagaInjectionModes.RESTART_ON_REMOUNT,
  });
  useInjectReducer({ key: "port", reducer: portReducer });
  useInjectSaga({
    key: "port",
    saga: portSaga,
    mode: SagaInjectionModes.RESTART_ON_REMOUNT,
  });

  const { data: veselList, selectedVessel } = useSelector(VesselSelector);
  const { data: portList } = useSelector(PortSelector);
  const { isCollapsed } = useSelector(LayoutSelector);
  const dispatch = useDispatch();
  const [guardianMap, setGuardianMap] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [isShowVesselInfo, setIsShowVesselInfo] = useState(false);
  const {
    name,
    imo,
    simulationRoutes: { show },
  } = selectedVessel;

  const zoomAfterClick = useCallback(
    (coordinates: []) => {
      const view = guardianMap.getView();

      view.animate({
        zoom: 10,
        center: coordinates,
        duration: 0,
      });
    },
    [guardianMap]
  );

  useEffect(() => {
    dispatch(
      fetchAllVessel({
        onStart: () => {
          notification.info({
            message: "Info",
            description: errorMessage.vessel.fetching,
          });
        },
        onSuccess: () => {
          notification.success({
            message: "Success",
            description: errorMessage.vessel.fetched,
          });
        },
        onError: (e) => {
          notification.error({
            message: "Error",
            description: get(e, "data.message"),
          });
        },
      })
    );
    dispatch(
      fetchAllPort({
        onStart: () => {
          notification.info({
            message: "Info",
            description: errorMessage.port.fetching,
          });
        },
        onSuccess: () => {
          notification.success({
            message: "Success",
            description: errorMessage.port.fetched,
          });
        },
        onError: (e) => {
          notification.error({
            message: "Error",
            description: get(e, "data.message"),
          });
        },
      })
    );
  }, [dispatch]);
  useEffect(() => {
    const handleClickMap = (e) => {
      const { pixel } = e;
      const features = guardianMap.getFeaturesAtPixel(pixel);
      const featureClicked = features[0];
      if (featureClicked) {
        if (
          featureClicked.get("click_disabled") ||
          !featureClicked.get("name")
        ) {
          return null;
        }

        zoomAfterClick(e.coordinate);
        setSelectedFeature(featureClicked);
        setIsShowVesselInfo(true);

        dispatch(
          BaseFunctions.setState({
            field: "selectedVessel",
            name: featureClicked.get("name"),
            imo: featureClicked.get("imo"),
            mmsi: featureClicked.get("mmsi"),
            simulationRoutes: initialSimulationRoutes,
          })
        );
      } else {
        setIsShowVesselInfo(false);
      }
      return null;
    };
    if (guardianMap) {
      guardianMap.on("click", handleClickMap);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [guardianMap, zoomAfterClick, dispatch]);

  const handleClickSimulation = () => {
    dispatch(
      BaseFunctions.setState({
        field: "selectedVessel",
        simulationRoutes: {
          ...initialSimulationRoutes,
          show: !show,
        },
      })
    );
  };

  return (
    <div className="root">
      <div id="screenshot">
        <BaseMap guardianMap={guardianMap} onSetMap={setGuardianMap} />
        <Drawer
          isCollapsed={isCollapsed}
          placement="bottom"
          visible={isShowVesselInfo}
          title="Simulation Points"
        >
          <SimulationReSult selectedVessel={selectedVessel} />
        </Drawer>
      </div>
      {guardianMap && (
        <>
          <VesselLayer
            selectedVessel={null}
            vesselList={veselList}
            guardianMap={guardianMap}
          />
          <PortLayer
            selectedPort={null}
            portList={portList}
            guardianMap={guardianMap}
          />
          <SelectedLayer
            selectedFeature={selectedFeature}
            guardianMap={guardianMap}
          />
          <SimulationRoutesLayer
            guardianMap={guardianMap}
            selectedVessel={selectedVessel}
          />
          <VesselSettings
            show={name}
            handleClickSimulation={() => handleClickSimulation()}
          />
        </>
      )}
    </div>
  );
};

export default memo(Index);

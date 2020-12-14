/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from "react";
import Map from "ol/Map";
import VectorSource from "ol/source/Vector";
import { Icon, Text, Fill, Stroke, Style } from "ol/style";
import GeoJSON from "ol/format/GeoJSON";
import VectorLayer from "ol/layer/Vector";
import LayerGroup from "ol/layer/Group";
import {
  getHeadingRad,
  MapLayers,
  formatVesselFeatures,
  FeaturesProfile,
} from "core/model/Map";
import { get } from "lodash";
import produce from "immer";
import { Feature } from "ol";

const vesselLayerScaleZoomLevel = 5;
const labelLayerScaleZoomLevel = 3;

const getImageStyle = () =>
  new Icon({
    src: "/icons/com_icons.png",
    color: "#0692d5",
    size: [56, 31],
    offset: [3, 11],
    scale: 1,
  });
const textStyle = {
  number: new Text({
    textAlign: "center",
    textBaseline: "bottom",
    font: "Bold 12px/3 arial",
    fill: new Fill(),
    offsetY: -5,
  }),
  name: new Text({
    textAlign: "center",
    textBaseline: "bottom",
    font: "Bold 15px/3 arial",
    fill: new Fill({ color: "black" }),
    backgroundFill: new Fill({ color: "white" }),
    backgroundStroke: new Stroke({ color: [63, 144, 255] }),
    padding: [0, 5, 0, 5],
    offsetY: 38,
  }),
};
const vesselStyle = new Style({
  text: textStyle.number,
  image: getImageStyle(),
});
const labelStyle = new Style({
  text: textStyle.name,
});

const vesselLayer = new VectorLayer({
  source: new VectorSource({
    format: new GeoJSON(),
  }),
});

const labelLayer = new VectorLayer({
  source: new VectorSource({
    format: new GeoJSON(),
  }),
});
const layer = new LayerGroup({
  layers: [vesselLayer, labelLayer],
});

interface VesselLayerProps {
  guardianMap: Map;
  vesselList: [];
  selectedVessel: Feature;
}

const Index = ({
  selectedVessel,
  vesselList,
  guardianMap,
}: VesselLayerProps) => {
  const [currentZoom, setCurrentZoom] = useState(
    guardianMap.getView().getZoom()
  );
  useEffect(() => {
    if (vesselList.length === 0) {
      return;
    }

    const vesselSource = vesselLayer.getSource();
    const labelSource = labelLayer.getSource();
    const vesselDataFeatures = selectedVessel
      ? vesselList.filter(
          ({ properties: { id } }: any) => id === selectedVessel.get("id")
        )
      : vesselList;

    const labelDataFeatures = vesselDataFeatures.map((item: FeaturesProfile) =>
      produce(item, (draft) => {
        draft.properties.click_disabled = true;
      })
    );

    const vesselFeatures = formatVesselFeatures(vesselDataFeatures);
    const labelFeatures = formatVesselFeatures(labelDataFeatures);

    vesselSource.clear();
    labelSource.clear();
    vesselSource.addFeatures(vesselFeatures);
    labelSource.addFeatures(labelFeatures);

    // eslint-disable-next-line consistent-return
    return function clearUp() {
      vesselSource.clear();
      labelSource.clear();
    };
  }, [selectedVessel, vesselList]);

  const reStylesVesselLayer = () => {
    const source = vesselLayer.getSource();
    const features = source.getFeatures();
    features.map((feature) => {
      const zoom = guardianMap.getView().getZoom();
      const type = feature.get("type");
      const imageStyle = getImageStyle();
      const newVesselStyle = vesselStyle.clone();
      newVesselStyle.setImage(imageStyle);
      const image = newVesselStyle.getImage();
      image.setScale(zoom > vesselLayerScaleZoomLevel ? 0.5 : 0.3);
      image.setRotation(feature.get("heading"));

      return feature.setStyle(newVesselStyle);
    });
  };

  const reStylesLabelLayer = () => {
    const labelSource = labelLayer.getSource();
    const features = labelSource.getFeatures();
    features.map((feature) => {
      const zoom = guardianMap.getView().getZoom();
      const scale = zoom > labelLayerScaleZoomLevel ? 0.32 : 0.3;
      const newText = textStyle.name.clone();
      const newLabelStyle = labelStyle.clone();
      newLabelStyle.setText(newText);
      const label = newLabelStyle.getText();

      label.setText(feature.get("name"));
      label.setScale(scale * 1.7);

      newLabelStyle.setText(label);
      return feature.setStyle(newLabelStyle);
    });
  };

  useEffect(() => {
    reStylesVesselLayer();
  }, [vesselList, guardianMap, reStylesVesselLayer]);

  useEffect(() => {
    reStylesLabelLayer();
  }, [vesselList, guardianMap]);

  guardianMap.on("moveend", () => {
    const zoom = guardianMap.getView().getZoom();
    if (
      (zoom > vesselLayerScaleZoomLevel &&
        currentZoom < vesselLayerScaleZoomLevel) ||
      (zoom < vesselLayerScaleZoomLevel &&
        currentZoom > vesselLayerScaleZoomLevel)
    ) {
      reStylesVesselLayer();
    }
    if (
      (zoom > labelLayerScaleZoomLevel &&
        currentZoom < labelLayerScaleZoomLevel) ||
      (zoom < labelLayerScaleZoomLevel &&
        currentZoom > labelLayerScaleZoomLevel)
    ) {
      reStylesLabelLayer();
    }
    setCurrentZoom(zoom);
  });

  useEffect(() => {
    guardianMap.addLayer(layer);
  }, [guardianMap]);

  return null;
};

export default Index;

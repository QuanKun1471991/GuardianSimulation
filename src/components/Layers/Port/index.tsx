/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Map from "ol/Map";
import VectorSource from "ol/source/Vector";
import { Icon, Text, Fill, Stroke, Style, Circle } from "ol/style";
import GeoJSON from "ol/format/GeoJSON";
import VectorLayer from "ol/layer/Vector";
import LayerGroup from "ol/layer/Group";
import { formatPortFeatures, FeaturesProfile } from "core/model/Map";
import produce from "immer";
import { Feature } from "ol";

const labelLayerDisplayZoomLevel = 5;
const labelLayerScaleZoomLevel = 5;
const portLayerScaleZoomLevel = 5;

const portForecastStyle = new Style({
  image: new Icon({
    src: "/icons/com_icons.png",
    size: [29, 29],
    offset: [123, 12],
    scale: 0.2,
  }),
});
const portNonForecastStyle = new Style({
  image: new Circle({
    radius: 2,
    fill: new Fill({ color: [63, 144, 255] }),
  }),
});

const labelStyle = new Style({
  text: new Text({
    textAlign: "center",
    textBaseline: "bottom",
    font: "Bold 15px/3 arial",
    fill: new Fill({ color: "white" }),
    backgroundFill: new Fill({ color: [63, 144, 255] }),
    backgroundStroke: new Stroke({ color: "white" }),
    padding: [0, 5, 0, 5],
    offsetY: -15,
  }),
});

const portLayer = new VectorLayer({
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
  layers: [portLayer, labelLayer],
});

interface PortLayerProps {
  guardianMap: Map;
  portList: [];
  selectedPort: Record<string, unknown>;
}

const Index = ({ selectedPort, portList, guardianMap }: PortLayerProps) => {
  const [currentZoom, setCurrentZoom] = useState(
    guardianMap.getView().getZoom()
  );
  useEffect(() => {
    if (portList.length === 0) {
      return;
    }

    const portSource = portLayer.getSource();
    const labelSource = labelLayer.getSource();

    const portDataFeatures = selectedPort
      ? portList.filter(({ properties: { id } }: any) => id === selectedPort.id)
      : portList;

    const labelDataFeatures = portDataFeatures.map((item: FeaturesProfile) =>
      produce(item, (draft) => {
        draft.properties.click_disabled = true;
      })
    );

    portSource.addFeatures(formatPortFeatures(portDataFeatures));
    labelSource.addFeatures(formatPortFeatures(labelDataFeatures));

    // eslint-disable-next-line consistent-return
    return function clearUp() {
      portSource.clear();
      labelSource.clear();
    };
  }, [selectedPort, portList]);

  const reStylesPortLayer = () => {
    const source = portLayer.getSource();
    const features = source.getFeatures();
    features.map((feature) => {
      const zoom = guardianMap.getView().getZoom();
      const scale = zoom > portLayerScaleZoomLevel ? 0.5 : 0.4;
      const newPortForecastStyle = portForecastStyle.clone();
      newPortForecastStyle.getImage().setScale(scale);
      const newPortNonForecastStyle = portNonForecastStyle.clone();
      return feature.setStyle(
        feature.get("has_port_forecast")
          ? newPortForecastStyle
          : newPortNonForecastStyle
      );
    });
  };

  const reStylesLabelLayer = () => {
    const labelSource = labelLayer.getSource();
    const features = labelSource.getFeatures();
    features.map((feature) => {
      const zoom = guardianMap.getView().getZoom();
      const scale = zoom > labelLayerScaleZoomLevel ? 0.4 : 0.2;
      const newLabelStyle = labelStyle.clone();
      const text = newLabelStyle.getText();
      text.setText(
        zoom > labelLayerDisplayZoomLevel ? feature.getProperties().name : ""
      );
      text.setScale(scale * 1.5);
      return feature.setStyle(newLabelStyle);
    });
  };

  useEffect(() => {
    reStylesPortLayer();
  }, [portList, guardianMap, reStylesPortLayer]);

  useEffect(() => {
    reStylesLabelLayer();
  }, [portList, guardianMap]);

  guardianMap.on("moveend", () => {
    const zoom = guardianMap.getView().getZoom();
    if (
      (zoom > labelLayerDisplayZoomLevel &&
        currentZoom < labelLayerDisplayZoomLevel) ||
      (zoom < labelLayerDisplayZoomLevel &&
        currentZoom > labelLayerDisplayZoomLevel)
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

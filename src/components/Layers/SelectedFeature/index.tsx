import { useEffect } from "react";
import Map from "ol/Map";
import VectorSource from "ol/source/Vector";
import { Icon, Text, Fill, Stroke, Style, Circle } from "ol/style";
import GeoJSON from "ol/format/GeoJSON";
import VectorLayer from "ol/layer/Vector";
import LayerGroup from "ol/layer/Group";
import { Feature } from "ol";

const selectedLayer = new VectorLayer({
  source: new VectorSource({
    format: new GeoJSON(),
  }),
  updateWhileAnimating: true,
});
const selectedStyled = new Style({
  image: new Circle({
    radius: 10,
    stroke: new Stroke({
      color: "rgba(255, 0, 0, 0.8)",
      width: 2,
    }),
  }),
});

interface SelectedFeatureProps {
  guardianMap: Map;
  selectedFeature: Feature;
}

const Index = ({ selectedFeature, guardianMap }: SelectedFeatureProps) => {
  useEffect(() => {
    const selectedSource = selectedLayer.getSource();
    if (selectedFeature) {
      selectedSource.clear();
      const circleSelected = selectedFeature.clone();
      circleSelected.setStyle(selectedStyled);
      selectedSource.addFeature(circleSelected);
    } else {
      selectedSource.clear();
    }
  }, [selectedFeature]);

  useEffect(() => {
    guardianMap.addLayer(selectedLayer);
  }, [guardianMap]);

  return null;
};

export default Index;

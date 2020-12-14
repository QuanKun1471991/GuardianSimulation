import { useEffect } from "react";
import View from "ol/View";
import Map from "ol/Map";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { transformExtent } from "ol/proj";

interface BaseMapProps {
  onSetMap: (map) => void;
  guardianMap: Map;
}

const mapLayer = new TileLayer({
  source: new OSM(),
});

const view = new View({
  center: [0, 0],
  zoom: 2,
  maxZoom: 10,
  minZoom: 3,
  extent: transformExtent(
    [-180 * 2, -90, 180 * 2, 85],
    "EPSG:4326",
    "EPSG:3857"
  ),
});

const BaseMap = ({ guardianMap, onSetMap }: BaseMapProps) => {
  useEffect(() => {
    if (!guardianMap && onSetMap) {
      const map = new Map({
        layers: [mapLayer],
        target: "map",
        view,
      });
      onSetMap(map);
    }
    return function cleanUp() {
      return guardianMap && guardianMap.setTarget(null);
    };
  }, [onSetMap, guardianMap]);
  return <div id="map" className="map" />;
};

export default BaseMap;

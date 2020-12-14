import produce from "immer";
import GeoJSON from "ol/format/GeoJSON";
import { round } from "lodash";

export enum MapLayers {
  Vessel = "vessel",
  Port = "port",
}

export interface GeometryProfile {
  type: "Point" | string;
  coordinates: Array<number>;
}

export interface FeaturesProfile {
  type: "Feature";
  geometry: GeometryProfile;
  properties?: any;
}

const defaultGeojsonObject = {
  type: "FeatureCollection",
  crs: {
    type: "name",
    properties: {
      name: "EPSG:4326",
    },
  },
};
export function deg2Rad(_degree: any): number {
  const degree = Number(_degree);
  return degree ? (degree / 180) * Math.PI : 0;
}

export const CONVERT_PROJECTION = {
  featureProjection: "EPSG:3857",
  dataProjection: "EPSG:4326",
};

export const convertCoord2LongLat = (data: number[]) => {
  return ol.proj.transform(data, "EPSG:3857", "EPSG:4326");
};
export const convertLongLat2Coords = (data: number[]) => {
  return ol.proj.transform(data, "EPSG:4326", "EPSG:3857");
};

export function convertHeadingtoDegree(heading: number, offset = Math.PI / 2) {
  return round((heading * 180) / Math.PI + offset);
}

export const getHeadingRad = (_degree: any, offset = Math.PI / 2): number => {
  const degree = deg2Rad(_degree);
  return degree - offset;
};

export const formatPortFeatures = (features: FeaturesProfile[]) => {
  const geoJson = { ...defaultGeojsonObject, features };
  return new GeoJSON(CONVERT_PROJECTION).readFeatures(geoJson);
};

export const formatVesselFeatures = (dataFeatures: FeaturesProfile[]) => {
  const features = dataFeatures.map((feature: any) => ({
    properties: feature.properties,
    geometry: feature.geometry,
    type: "Feature",
  }));
  const geoJson = { ...defaultGeojsonObject, features };

  return new GeoJSON(CONVERT_PROJECTION).readFeatures(geoJson);
};

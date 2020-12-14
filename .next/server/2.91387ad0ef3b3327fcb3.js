exports.ids = [2];
exports.modules = {

/***/ "DhIt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MapLayers */
/* unused harmony export deg2Rad */
/* unused harmony export CONVERT_PROJECTION */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return convertCoord2LongLat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return convertLongLat2Coords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return convertHeadingtoDegree; });
/* unused harmony export getHeadingRad */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return formatPortFeatures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return formatVesselFeatures; });
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("XC/c");
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tuX4");
/* harmony import */ var ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


let MapLayers;

(function (MapLayers) {
  MapLayers["Vessel"] = "vessel";
  MapLayers["Port"] = "port";
})(MapLayers || (MapLayers = {}));

const defaultGeojsonObject = {
  type: "FeatureCollection",
  crs: {
    type: "name",
    properties: {
      name: "EPSG:4326"
    }
  }
};
function deg2Rad(_degree) {
  const degree = Number(_degree);
  return degree ? degree / 180 * Math.PI : 0;
}
const CONVERT_PROJECTION = {
  featureProjection: "EPSG:3857",
  dataProjection: "EPSG:4326"
};
const convertCoord2LongLat = data => {
  return ol.proj.transform(data, 'EPSG:3857', 'EPSG:4326');
};
const convertLongLat2Coords = data => {
  return ol.proj.transform(data, 'EPSG:4326', 'EPSG:3857');
};
function convertHeadingtoDegree(heading, offset = Math.PI / 2) {
  return lodash_round__WEBPACK_IMPORTED_MODULE_0___default()(heading * 180 / Math.PI + offset);
}
const getHeadingRad = (_degree, offset = Math.PI / 2) => {
  const degree = deg2Rad(_degree);
  return degree - offset;
};
const formatPortFeatures = features => {
  const geoJson = _objectSpread(_objectSpread({}, defaultGeojsonObject), {}, {
    features
  });

  return new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_1___default.a(CONVERT_PROJECTION).readFeatures(geoJson);
};
const formatVesselFeatures = dataFeatures => {
  const features = dataFeatures.map(feature => ({
    properties: feature.properties,
    geometry: feature.geometry,
    type: "Feature"
  }));

  const geoJson = _objectSpread(_objectSpread({}, defaultGeojsonObject), {}, {
    features
  });

  return new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_1___default.a(CONVERT_PROJECTION).readFeatures(geoJson);
};

/***/ }),

/***/ "aWHX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ol_source_Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fKNI");
/* harmony import */ var ol_source_Vector__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ol_source_Vector__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2gOU");
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ol_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tuX4");
/* harmony import */ var ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ol_layer_Vector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("yidt");
/* harmony import */ var ol_layer_Vector__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ol_layer_Vector__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ol_layer_Group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("H0CQ");
/* harmony import */ var ol_layer_Group__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ol_layer_Group__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_model_Map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("DhIt");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_7__);
/* eslint-disable react-hooks/exhaustive-deps */








const vesselLayerScaleZoomLevel = 5;
const labelLayerScaleZoomLevel = 3;

const getImageStyle = () => new ol_style__WEBPACK_IMPORTED_MODULE_2__["Icon"]({
  src: "/icons/com_icons.png",
  color: "#0692d5",
  size: [56, 31],
  offset: [3, 11],
  scale: 1
});

const textStyle = {
  number: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Text"]({
    textAlign: "center",
    textBaseline: "bottom",
    font: "Bold 12px/3 arial",
    fill: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Fill"](),
    offsetY: -5
  }),
  name: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Text"]({
    textAlign: "center",
    textBaseline: "bottom",
    font: "Bold 15px/3 arial",
    fill: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Fill"]({
      color: "black"
    }),
    backgroundFill: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Fill"]({
      color: "white"
    }),
    backgroundStroke: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Stroke"]({
      color: [63, 144, 255]
    }),
    padding: [0, 5, 0, 5],
    offsetY: 38
  })
};
const vesselStyle = new ol_style__WEBPACK_IMPORTED_MODULE_2__["Style"]({
  text: textStyle.number,
  image: getImageStyle()
});
const labelStyle = new ol_style__WEBPACK_IMPORTED_MODULE_2__["Style"]({
  text: textStyle.name
});
const vesselLayer = new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_4___default.a({
  source: new ol_source_Vector__WEBPACK_IMPORTED_MODULE_1___default.a({
    format: new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_3___default.a()
  })
});
const labelLayer = new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_4___default.a({
  source: new ol_source_Vector__WEBPACK_IMPORTED_MODULE_1___default.a({
    format: new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_3___default.a()
  })
});
const layer = new ol_layer_Group__WEBPACK_IMPORTED_MODULE_5___default.a({
  layers: [vesselLayer, labelLayer]
});

const Index = ({
  selectedVessel,
  vesselList,
  guardianMap
}) => {
  const {
    0: currentZoom,
    1: setCurrentZoom
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(guardianMap.getView().getZoom());
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (vesselList.length === 0) {
      return;
    }

    const vesselSource = vesselLayer.getSource();
    const labelSource = labelLayer.getSource();
    const vesselDataFeatures = selectedVessel ? vesselList.filter(({
      properties: {
        id
      }
    }) => id === selectedVessel.get('id')) : vesselList;
    const labelDataFeatures = vesselDataFeatures.map(item => immer__WEBPACK_IMPORTED_MODULE_7___default()(item, draft => {
      draft.properties.click_disabled = true;
    }));
    const vesselFeatures = Object(core_model_Map__WEBPACK_IMPORTED_MODULE_6__[/* formatVesselFeatures */ "e"])(vesselDataFeatures);
    const labelFeatures = Object(core_model_Map__WEBPACK_IMPORTED_MODULE_6__[/* formatVesselFeatures */ "e"])(labelDataFeatures);
    vesselSource.clear();
    labelSource.clear();
    vesselSource.addFeatures(vesselFeatures);
    labelSource.addFeatures(labelFeatures); // eslint-disable-next-line consistent-return

    return function clearUp() {
      vesselSource.clear();
      labelSource.clear();
    };
  }, [selectedVessel, vesselList]);

  const reStylesVesselLayer = () => {
    const source = vesselLayer.getSource();
    const features = source.getFeatures();
    features.map(feature => {
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
    features.map(feature => {
      const zoom = guardianMap.getView().getZoom();
      const scale = zoom > labelLayerScaleZoomLevel ? 0.32 : 0.3;
      const newText = textStyle.name.clone();
      const newLabelStyle = labelStyle.clone();
      newLabelStyle.setText(newText);
      const label = newLabelStyle.getText();
      label.setText(feature.get("name"));
      label.setScale(scale * 1.7);
      newLabelStyle.setText(label);
      feature.setStyle(newLabelStyle);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    reStylesVesselLayer();
  }, [vesselList, guardianMap, reStylesVesselLayer]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    reStylesLabelLayer();
  }, [vesselList, guardianMap]);
  guardianMap.on("moveend", () => {
    const zoom = guardianMap.getView().getZoom();

    if (zoom > vesselLayerScaleZoomLevel && currentZoom < vesselLayerScaleZoomLevel || zoom < vesselLayerScaleZoomLevel && currentZoom > vesselLayerScaleZoomLevel) {
      reStylesVesselLayer();
    }

    if (zoom > labelLayerScaleZoomLevel && currentZoom < labelLayerScaleZoomLevel || zoom < labelLayerScaleZoomLevel && currentZoom > labelLayerScaleZoomLevel) {
      reStylesLabelLayer();
    }

    setCurrentZoom(zoom);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    guardianMap.addLayer(layer);
  }, [guardianMap]);
  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

};;
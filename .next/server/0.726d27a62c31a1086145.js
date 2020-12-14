exports.ids = [0];
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

/***/ "OIZf":
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








const labelLayerDisplayZoomLevel = 5;
const labelLayerScaleZoomLevel = 5;
const portLayerScaleZoomLevel = 5;
const portForecastStyle = new ol_style__WEBPACK_IMPORTED_MODULE_2__["Style"]({
  image: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Icon"]({
    src: "/icons/com_icons.png",
    size: [29, 29],
    offset: [123, 12],
    scale: 0.2
  })
});
const portNonForecastStyle = new ol_style__WEBPACK_IMPORTED_MODULE_2__["Style"]({
  image: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Circle"]({
    radius: 2,
    fill: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Fill"]({
      color: [63, 144, 255]
    })
  })
});
const labelStyle = new ol_style__WEBPACK_IMPORTED_MODULE_2__["Style"]({
  text: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Text"]({
    textAlign: "center",
    textBaseline: "bottom",
    font: "Bold 15px/3 arial",
    fill: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Fill"]({
      color: "white"
    }),
    backgroundFill: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Fill"]({
      color: [63, 144, 255]
    }),
    backgroundStroke: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Stroke"]({
      color: "white"
    }),
    padding: [0, 5, 0, 5],
    offsetY: -15
  })
});
const portLayer = new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_4___default.a({
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
  layers: [portLayer, labelLayer]
});

const Index = ({
  selectedPort,
  portList,
  guardianMap
}) => {
  const {
    0: currentZoom,
    1: setCurrentZoom
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(guardianMap.getView().getZoom());
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (portList.length === 0) {
      return;
    }

    const portSource = portLayer.getSource();
    const labelSource = labelLayer.getSource();
    const portDataFeatures = selectedPort ? portList.filter(({
      properties: {
        id
      }
    }) => id === selectedPort.id) : portList;
    const labelDataFeatures = portDataFeatures.map(item => immer__WEBPACK_IMPORTED_MODULE_7___default()(item, draft => {
      draft.properties.click_disabled = true;
    }));
    portSource.addFeatures(Object(core_model_Map__WEBPACK_IMPORTED_MODULE_6__[/* formatPortFeatures */ "d"])(portDataFeatures));
    labelSource.addFeatures(Object(core_model_Map__WEBPACK_IMPORTED_MODULE_6__[/* formatPortFeatures */ "d"])(labelDataFeatures)); // eslint-disable-next-line consistent-return

    return function clearUp() {
      portSource.clear();
      labelSource.clear();
    };
  }, [selectedPort, portList]);

  const reStylesPortLayer = () => {
    const source = portLayer.getSource();
    const features = source.getFeatures();
    features.map(feature => {
      const zoom = guardianMap.getView().getZoom();
      const scale = zoom > portLayerScaleZoomLevel ? 0.5 : 0.4;
      const newPortForecastStyle = portForecastStyle.clone();
      newPortForecastStyle.getImage().setScale(scale);
      const newPortNonForecastStyle = portNonForecastStyle.clone();
      feature.setStyle(feature.get("has_port_forecast") ? newPortForecastStyle : newPortNonForecastStyle);
    });
  };

  const reStylesLabelLayer = () => {
    const labelSource = labelLayer.getSource();
    const features = labelSource.getFeatures();
    features.map(feature => {
      const zoom = guardianMap.getView().getZoom();
      const scale = zoom > labelLayerScaleZoomLevel ? 0.4 : 0.2;
      const newLabelStyle = labelStyle.clone();
      const text = newLabelStyle.getText();
      text.setText(zoom > labelLayerDisplayZoomLevel ? feature.getProperties().name : "");
      text.setScale(scale * 1.5);
      feature.setStyle(newLabelStyle);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    reStylesPortLayer();
  }, [portList, guardianMap, reStylesPortLayer]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    reStylesLabelLayer();
  }, [portList, guardianMap]);
  guardianMap.on("moveend", () => {
    const zoom = guardianMap.getView().getZoom();

    if (zoom > labelLayerDisplayZoomLevel && currentZoom < labelLayerDisplayZoomLevel || zoom < labelLayerDisplayZoomLevel && currentZoom > labelLayerDisplayZoomLevel) {
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
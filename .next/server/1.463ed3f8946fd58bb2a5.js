exports.ids = [1];
exports.modules = {

/***/ "45+l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "lodash/compact"
var compact_ = __webpack_require__("DEef");
var compact_default = /*#__PURE__*/__webpack_require__.n(compact_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/icons/Clear"
var Clear_ = __webpack_require__("hrAA");
var Clear_default = /*#__PURE__*/__webpack_require__.n(Clear_);

// EXTERNAL MODULE: external "@material-ui/icons/LayersClear"
var LayersClear_ = __webpack_require__("EcFF");
var LayersClear_default = /*#__PURE__*/__webpack_require__.n(LayersClear_);

// EXTERNAL MODULE: external "@material-ui/icons/Send"
var Send_ = __webpack_require__("6Av6");
var Send_default = /*#__PURE__*/__webpack_require__.n(Send_);

// CONCATENATED MODULE: ./src/components/SimulationSettings/index.tsx
var __jsx = external_react_default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const styles = theme => {
  return {
    root: {
      position: 'fixed',
      top: 100,
      right: 0
    }
  };
};

const useStyles = Object(styles_["makeStyles"])(styles);

function Index(_ref) {
  let {
    showSimulationRoutes,
    handleClickClearDraw,
    handleClickClearDrawLayer,
    handleClickSend,
    show
  } = _ref,
      props = _objectWithoutProperties(_ref, ["showSimulationRoutes", "handleClickClearDraw", "handleClickClearDrawLayer", "handleClickSend", "show"]);

  const classes = useStyles();
  return __jsx(external_react_default.a.Fragment, null, show && __jsx("div", {
    className: classes.root
  }, __jsx("div", {
    onClick: handleClickClearDraw
  }, __jsx(IconButton_default.a, {
    color: "secondary"
  }, __jsx(Clear_default.a, {
    color: "action"
  }))), __jsx("div", {
    onClick: handleClickClearDrawLayer
  }, __jsx(IconButton_default.a, {
    color: "secondary"
  }, __jsx(LayersClear_default.a, {
    color: "action"
  }))), __jsx("div", {
    onClick: handleClickSend
  }, __jsx(IconButton_default.a, {
    color: "secondary"
  }, __jsx(Send_default.a, {
    color: "action"
  })))));
}

/* harmony default export */ var SimulationSettings = (Index);
// EXTERNAL MODULE: ./src/core/model/Map/index.tsx
var Map = __webpack_require__("DhIt");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./src/core/utils/datetime.ts

const YYYY_MM_DD_HH_MM = 'YYYY/MM/DD HH:mm';
const MM_DD = 'MMMM DD';
const YYYY_MM_DD = 'YYYY-MM-DD';
const YYYY_MM_DD_HH = 'YYYY-MM-DD-HH';
const DEFAULT_TIMEZONE = 'Greenwich';
const YYYY_MM_DD_HH_MM_Z = 'YYYY/MM/DD HH:mmZ';
const MM_DD_YYYY = 'MM-DD-YYYY';
const YYYY_MM_DD_HH_MM_SS = 'YYYY-MM-DDTHH:mm:ss';
function formatDateTimeUTC(data, format = YYYY_MM_DD_HH_MM) {
  const _data = external_moment_default()(data);

  return _data.isValid() ? external_moment_default()(data).utc().format(format) : null;
}
// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/Dialog"
var Dialog_ = __webpack_require__("fEgT");
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);

// EXTERNAL MODULE: external "@material-ui/core/DialogActions"
var DialogActions_ = __webpack_require__("1gBk");
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions_);

// EXTERNAL MODULE: external "@material-ui/core/DialogContent"
var DialogContent_ = __webpack_require__("iTUb");
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_);

// EXTERNAL MODULE: external "@material-ui/core/DialogContentText"
var DialogContentText_ = __webpack_require__("MbIc");
var DialogContentText_default = /*#__PURE__*/__webpack_require__.n(DialogContentText_);

// EXTERNAL MODULE: external "@material-ui/core/DialogTitle"
var DialogTitle_ = __webpack_require__("0Jp5");
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle_);

// CONCATENATED MODULE: ./src/core/model/Vessel/index.tsx
const simulationFormatMessage = data => {
  const {
    mmsi,
    heading,
    longLatCoord,
    timeStamp,
    speed,
    created_at
  } = data;
  return {
    id: '996db34a-d55b-5781-bd56-06ebd9ab1716',
    rot: 0,
    flag: 'Cyprus',
    mmsi: 199318573,
    nmea: '!AIVDM,1,1,,B,137g`F001T1ud71dQgh2nR480000,0*2A',
    speed: speed || Math.floor(Math.random() * 21),
    course: 73,
    msg_id: '1594941958_209447000',
    source: 'FM107',
    status: 0,
    heading,
    accuracy: 0,
    latitude: longLatCoord[1],
    maneuver: 0,
    msg_type: 1,
    position: {
      type: 'point',
      coordinates: longLatCoord
    },
    longitude: longLatCoord[0],
    timestamp: timeStamp,
    created_at: created_at || timeStamp,
    collection_type: 'satellite',
    flag_short_code: 'CY'
  };
};
const aisFakeMessage = data => {
  return {
    paging: {
      limit: 5000,
      latest_id: 111111111,
      total: data.length
    },
    data
  };
};
// EXTERNAL MODULE: ./src/services/vessel/actions.ts
var actions = __webpack_require__("7aiV");

// EXTERNAL MODULE: ./src/services/vessel/api.ts
var api = __webpack_require__("Cqe7");

// CONCATENATED MODULE: ./src/components/Layers/SimulationRoutes/index.tsx

var SimulationRoutes_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const vectorSource = new ol.source.Vector({
  format: new ol.format.GeoJSON()
});

const getRotation = (startPoint, endPoint) => {
  const dx = endPoint[0] - startPoint[0];
  const dy = endPoint[1] - startPoint[1];
  return -Math.atan2(dy, dx);
};

const styleFunction = feature => {
  const geometry = feature.getGeometry();
  const styles = [// linestring
  new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: '#ffcc33',
      width: 2
    })
  })];
  geometry.forEachSegment(function (start, end) {
    const rotation = getRotation(start, end);
    console.log('rotation' + rotation); // arrows

    styles.push(new ol.style.Style({
      geometry: new ol.geom.Point(end),
      image: new ol.style.Icon({
        src: 'icons/arrow.png',
        anchor: [0.75, 0.5],
        rotateWithView: true,
        rotation: rotation
      })
    }));
  });
  return styles;
};

function SimulationRoutes_Index({
  guardianMap,
  selectedVessel
}) {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: currentFeature,
    1: setCurrentFeature
  } = Object(external_react_["useState"])(new ol.Feature());
  const {
    0: firstCoord,
    1: setFirstCoord
  } = Object(external_react_["useState"])(null);
  const {
    simulationRoutes: {
      update,
      data: SimulationRoutesData,
      show: showSimulationRoutes
    }
  } = selectedVessel;
  const createdAtTime = external_moment_default()().toString();
  const [openDialog, setOpenDialog] = external_react_default.a.useState(false);
  const draw = new ol.interaction.Draw({
    source: vectorSource,
    type: 'LineString'
  });
  const simulationLayer = new ol.layer.Vector({
    source: vectorSource,
    style: styleFunction
  });
  Object(external_react_["useEffect"])(() => {
    let increaseMinutes = 0;

    if (showSimulationRoutes && selectedVessel.name) {
      guardianMap.addLayer(simulationLayer);
      guardianMap.addInteraction(draw);
    }

    if (!showSimulationRoutes) {
      guardianMap.getInteractions().pop();
      simulationLayer.getSource().clear();
      guardianMap.removeLayer(simulationLayer);
    }

    draw.on('drawend', function (evt) {
      const feature = evt.feature;
      const coords = feature.getGeometry().getCoordinates();
      setFirstCoord(coords[0]);
      debugger;
      const simulationData = coords.map((coordinate, index) => {
        if (index !== 0) {
          const heading = Object(Map["b" /* convertHeadingtoDegree */])(getRotation(coords[index - 1], coordinate));
          const longLatCoord = Object(Map["a" /* convertCoord2LongLat */])(coordinate);
          const timeStamp = formatDateTimeUTC(external_moment_default()(createdAtTime).add(increaseMinutes, 'minutes').toString(), YYYY_MM_DD_HH_MM_SS);
          const message = simulationFormatMessage({
            heading,
            longLatCoord,
            timeStamp
          });
          increaseMinutes += 5;
          return message;
        }
      });
      dispatch(actions["b" /* BaseFunctions */].setState({
        field: "selectedVessel",
        simulationRoutes: _objectSpread(_objectSpread({}, selectedVessel.simulationRoutes), {}, {
          data: compact_default()(simulationData)
        })
      }));
      setCurrentFeature(feature);
      guardianMap.removeInteraction(draw);
    });
  }, [showSimulationRoutes, selectedVessel.name]);
  Object(external_react_["useEffect"])(() => {
    if (currentFeature && update) {
      const source = simulationLayer.getSource();
      const coords = SimulationRoutesData.map(record => {
        return Object(Map["c" /* convertLongLat2Coords */])([record.longitude, record.latitude]);
      });
      const updateCoords = [firstCoord].concat(coords);
      const geometry = currentFeature.getGeometry();
      geometry.setCoordinates(updateCoords);
      source.clear();
      source.addFeature(currentFeature);
      const simulationData = geometry.getCoordinates().map((coordinate, index) => {
        if (index !== 0) {
          const heading = Object(Map["b" /* convertHeadingtoDegree */])(getRotation(updateCoords[index - 1], coordinate));
          const longLatCoord = Object(Map["a" /* convertCoord2LongLat */])(coordinate);
          const timeStamp = SimulationRoutesData[index - 1].timestamp;
          const speed = SimulationRoutesData[index - 1].speed;
          const created_at = SimulationRoutesData[index - 1].created_at;
          const mmsi = currentFeature.get('mmsi');
          const message = simulationFormatMessage({
            mmsi,
            heading,
            longLatCoord,
            timeStamp,
            speed,
            created_at
          });
          return message;
        }
      });
      dispatch(actions["b" /* BaseFunctions */].setState({
        field: "selectedVessel",
        simulationRoutes: _objectSpread(_objectSpread({}, selectedVessel.simulationRoutes), {}, {
          update: !update,
          data: compact_default()(simulationData)
        })
      }));
    }
  }, [update]);

  const handleClickClearDraw = () => {
    guardianMap.getInteractions().pop();
    guardianMap.addInteraction(draw);
  };

  const handleClickClearDrawLayer = () => {
    simulationLayer.getSource().clear();
    dispatch(actions["b" /* BaseFunctions */].setState({
      field: "selectedVessel",
      simulationRoutes: _objectSpread(_objectSpread({}, selectedVessel.simulationRoutes), {}, {
        data: []
      })
    }));
  };

  const handleClickSend = () => {
    simulationLayer.getSource().clear();
    guardianMap.removeLayer(simulationLayer);
    guardianMap.addLayer(simulationLayer);
    dispatch(actions["b" /* BaseFunctions */].setState({
      field: "selectedVessel",
      simulationRoutes: _objectSpread(_objectSpread({}, selectedVessel.simulationRoutes), {}, {
        data: []
      })
    }));
    api["a" /* default */].simulate(selectedVessel.imo, {
      data: SimulationRoutesData
    });
    setOpenDialog(false);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  return SimulationRoutes_jsx(external_react_default.a.Fragment, null, SimulationRoutes_jsx(SimulationSettings, {
    handleClickClearDraw: handleClickClearDraw,
    handleClickClearDrawLayer: handleClickClearDrawLayer,
    handleClickSend: handleOpenDialog,
    show: showSimulationRoutes
  }), SimulationRoutes_jsx(Dialog_default.a, {
    open: openDialog,
    onClose: handleCloseDialog,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, SimulationRoutes_jsx(DialogTitle_default.a, {
    id: "alert-dialog-title"
  }, 'Create Simulation Data Confirmation?'), SimulationRoutes_jsx(DialogContent_default.a, null, SimulationRoutes_jsx(DialogContentText_default.a, {
    id: "alert-dialog-description"
  }, "Please be aware that this simulation data will effect to voyage of current vessel, it is recommended to use on a fake vessel which is not belong to our customer, will you continue?")), SimulationRoutes_jsx(DialogActions_default.a, null, SimulationRoutes_jsx(Button_default.a, {
    onClick: handleCloseDialog,
    color: "primary"
  }, "Cancel"), SimulationRoutes_jsx(Button_default.a, {
    onClick: handleClickSend,
    color: "primary",
    autoFocus: true
  }, "Send"))));
}

/* harmony default export */ var SimulationRoutes = __webpack_exports__["default"] = (SimulationRoutes_Index);

/***/ }),

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

/***/ })

};;
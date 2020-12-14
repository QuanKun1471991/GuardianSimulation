exports.ids = [3];
exports.modules = {

/***/ "IH2A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+1go");
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ol_View__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("RVkr");
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ol_Map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("b7xN");
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ol_layer_Tile__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ol_source_OSM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("bMIZ");
/* harmony import */ var ol_source_OSM__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ol_source_OSM__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ywV7");
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ol_proj__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const mapLayer = new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_3___default.a({
  source: new ol_source_OSM__WEBPACK_IMPORTED_MODULE_4___default.a()
});
const view = new ol_View__WEBPACK_IMPORTED_MODULE_1___default.a({
  center: [0, 0],
  zoom: 2,
  maxZoom: 10,
  minZoom: 3,
  extent: Object(ol_proj__WEBPACK_IMPORTED_MODULE_5__["transformExtent"])([-180 * 2, -90, 180 * 2, 85], "EPSG:4326", "EPSG:3857")
});

const BaseMap = ({
  guardianMap,
  onSetMap
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!guardianMap && onSetMap) {
      const map = new ol_Map__WEBPACK_IMPORTED_MODULE_2___default.a({
        layers: [mapLayer],
        target: "map",
        view
      });
      onSetMap(map);
    }

    return function cleanUp() {
      return guardianMap && guardianMap.setTarget(null);
    };
  }, [onSetMap, guardianMap]);
  return __jsx("div", {
    id: "map",
    className: "map"
  });
};

/* harmony default export */ __webpack_exports__["default"] = (BaseMap);

/***/ })

};;
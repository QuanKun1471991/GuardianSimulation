exports.ids = [4];
exports.modules = {

/***/ "ZgI7":
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





const selectedLayer = new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_4___default.a({
  source: new ol_source_Vector__WEBPACK_IMPORTED_MODULE_1___default.a({
    format: new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_3___default.a()
  }),
  updateWhileAnimating: true
});
const selectedStyled = new ol_style__WEBPACK_IMPORTED_MODULE_2__["Style"]({
  image: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Circle"]({
    radius: 10,
    stroke: new ol_style__WEBPACK_IMPORTED_MODULE_2__["Stroke"]({
      color: "rgba(255, 0, 0, 0.8)",
      width: 2
    })
  })
});

const Index = ({
  selectedFeature,
  guardianMap
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    guardianMap.addLayer(selectedLayer);
  }, [guardianMap]);
  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

};;
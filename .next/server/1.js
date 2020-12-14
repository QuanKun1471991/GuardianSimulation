exports.ids = [1];
exports.modules = {

/***/ "./src/components/Layers/Port/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/Layers/Port/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ol_source_Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/source/Vector */ \"ol/source/Vector\");\n/* harmony import */ var ol_source_Vector__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ol_source_Vector__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/style */ \"ol/style\");\n/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ol_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/format/GeoJSON */ \"ol/format/GeoJSON\");\n/* harmony import */ var ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ol_layer_Vector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/layer/Vector */ \"ol/layer/Vector\");\n/* harmony import */ var ol_layer_Vector__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ol_layer_Vector__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var ol_layer_Group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/layer/Group */ \"ol/layer/Group\");\n/* harmony import */ var ol_layer_Group__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ol_layer_Group__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_model_Map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/model/Map */ \"./src/core/model/Map/index.tsx\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! immer */ \"immer\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_7__);\n/* eslint-disable react-hooks/exhaustive-deps */\n\n\n\n\n\n\n\n\nconst labelLayerDisplayZoomLevel = 5;\nconst labelLayerScaleZoomLevel = 5;\nconst portLayerScaleZoomLevel = 5;\nconst portForecastStyle = new ol_style__WEBPACK_IMPORTED_MODULE_2__[\"Style\"]({\n  image: new ol_style__WEBPACK_IMPORTED_MODULE_2__[\"Icon\"]({\n    src: \"/icons/com_icons.png\",\n    size: [29, 29],\n    offset: [123, 12],\n    scale: 0.2\n  })\n});\nconst portNonForecastStyle = new ol_style__WEBPACK_IMPORTED_MODULE_2__[\"Style\"]({\n  image: new ol_style__WEBPACK_IMPORTED_MODULE_2__[\"Circle\"]({\n    radius: 2,\n    fill: new ol_style__WEBPACK_IMPORTED_MODULE_2__[\"Fill\"]({\n      color: [63, 144, 255]\n    })\n  })\n});\nconst labelStyle = new ol_style__WEBPACK_IMPORTED_MODULE_2__[\"Style\"]({\n  text: new ol_style__WEBPACK_IMPORTED_MODULE_2__[\"Text\"]({\n    textAlign: \"center\",\n    textBaseline: \"bottom\",\n    font: \"Bold 15px/3 arial\",\n    fill: new ol_style__WEBPACK_IMPORTED_MODULE_2__[\"Fill\"]({\n      color: \"white\"\n    }),\n    backgroundFill: new ol_style__WEBPACK_IMPORTED_MODULE_2__[\"Fill\"]({\n      color: [63, 144, 255]\n    }),\n    backgroundStroke: new ol_style__WEBPACK_IMPORTED_MODULE_2__[\"Stroke\"]({\n      color: \"white\"\n    }),\n    padding: [0, 5, 0, 5],\n    offsetY: -15\n  })\n});\nconst portLayer = new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_4___default.a({\n  source: new ol_source_Vector__WEBPACK_IMPORTED_MODULE_1___default.a({\n    format: new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_3___default.a()\n  })\n});\nconst labelLayer = new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_4___default.a({\n  source: new ol_source_Vector__WEBPACK_IMPORTED_MODULE_1___default.a({\n    format: new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_3___default.a()\n  })\n});\nconst layer = new ol_layer_Group__WEBPACK_IMPORTED_MODULE_5___default.a({\n  layers: [portLayer, labelLayer]\n});\n\nconst Index = ({\n  selectedPort,\n  portList,\n  guardianMap\n}) => {\n  const {\n    0: currentZoom,\n    1: setCurrentZoom\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(guardianMap.getView().getZoom());\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (portList.length === 0) {\n      return;\n    }\n\n    const portSource = portLayer.getSource();\n    const labelSource = labelLayer.getSource();\n    const portDataFeatures = selectedPort ? portList.filter(({\n      properties: {\n        id\n      }\n    }) => id === selectedPort.id) : portList;\n    const labelDataFeatures = portDataFeatures.map(item => immer__WEBPACK_IMPORTED_MODULE_7___default()(item, draft => {\n      draft.properties.click_disabled = true;\n    }));\n    portSource.addFeatures(Object(core_model_Map__WEBPACK_IMPORTED_MODULE_6__[\"formatPortFeatures\"])(portDataFeatures));\n    labelSource.addFeatures(Object(core_model_Map__WEBPACK_IMPORTED_MODULE_6__[\"formatPortFeatures\"])(labelDataFeatures)); // eslint-disable-next-line consistent-return\n\n    return function clearUp() {\n      portSource.clear();\n      labelSource.clear();\n    };\n  }, [selectedPort, portList]);\n\n  const reStylesPortLayer = () => {\n    const source = portLayer.getSource();\n    const features = source.getFeatures();\n    features.map(feature => {\n      const zoom = guardianMap.getView().getZoom();\n      const scale = zoom > portLayerScaleZoomLevel ? 0.5 : 0.4;\n      const newPortForecastStyle = portForecastStyle.clone();\n      newPortForecastStyle.getImage().setScale(scale);\n      const newPortNonForecastStyle = portNonForecastStyle.clone();\n      return feature.setStyle(feature.get(\"has_port_forecast\") ? newPortForecastStyle : newPortNonForecastStyle);\n    });\n  };\n\n  const reStylesLabelLayer = () => {\n    const labelSource = labelLayer.getSource();\n    const features = labelSource.getFeatures();\n    features.map(feature => {\n      const zoom = guardianMap.getView().getZoom();\n      const scale = zoom > labelLayerScaleZoomLevel ? 0.4 : 0.2;\n      const newLabelStyle = labelStyle.clone();\n      const text = newLabelStyle.getText();\n      text.setText(zoom > labelLayerDisplayZoomLevel ? feature.getProperties().name : \"\");\n      text.setScale(scale * 1.5);\n      return feature.setStyle(newLabelStyle);\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    reStylesPortLayer();\n  }, [portList, guardianMap, reStylesPortLayer]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    reStylesLabelLayer();\n  }, [portList, guardianMap]);\n  guardianMap.on(\"moveend\", () => {\n    const zoom = guardianMap.getView().getZoom();\n\n    if (zoom > labelLayerDisplayZoomLevel && currentZoom < labelLayerDisplayZoomLevel || zoom < labelLayerDisplayZoomLevel && currentZoom > labelLayerDisplayZoomLevel) {\n      reStylesLabelLayer();\n    }\n\n    setCurrentZoom(zoom);\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    guardianMap.addLayer(layer);\n  }, [guardianMap]);\n  return null;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXllcnMvUG9ydC9pbmRleC50c3g/Mzg4NiJdLCJuYW1lcyI6WyJsYWJlbExheWVyRGlzcGxheVpvb21MZXZlbCIsImxhYmVsTGF5ZXJTY2FsZVpvb21MZXZlbCIsInBvcnRMYXllclNjYWxlWm9vbUxldmVsIiwicG9ydEZvcmVjYXN0U3R5bGUiLCJTdHlsZSIsImltYWdlIiwiSWNvbiIsInNyYyIsInNpemUiLCJvZmZzZXQiLCJzY2FsZSIsInBvcnROb25Gb3JlY2FzdFN0eWxlIiwiQ2lyY2xlIiwicmFkaXVzIiwiZmlsbCIsIkZpbGwiLCJjb2xvciIsImxhYmVsU3R5bGUiLCJ0ZXh0IiwiVGV4dCIsInRleHRBbGlnbiIsInRleHRCYXNlbGluZSIsImZvbnQiLCJiYWNrZ3JvdW5kRmlsbCIsImJhY2tncm91bmRTdHJva2UiLCJTdHJva2UiLCJwYWRkaW5nIiwib2Zmc2V0WSIsInBvcnRMYXllciIsIlZlY3RvckxheWVyIiwic291cmNlIiwiVmVjdG9yU291cmNlIiwiZm9ybWF0IiwiR2VvSlNPTiIsImxhYmVsTGF5ZXIiLCJsYXllciIsIkxheWVyR3JvdXAiLCJsYXllcnMiLCJJbmRleCIsInNlbGVjdGVkUG9ydCIsInBvcnRMaXN0IiwiZ3VhcmRpYW5NYXAiLCJjdXJyZW50Wm9vbSIsInNldEN1cnJlbnRab29tIiwidXNlU3RhdGUiLCJnZXRWaWV3IiwiZ2V0Wm9vbSIsInVzZUVmZmVjdCIsImxlbmd0aCIsInBvcnRTb3VyY2UiLCJnZXRTb3VyY2UiLCJsYWJlbFNvdXJjZSIsInBvcnREYXRhRmVhdHVyZXMiLCJmaWx0ZXIiLCJwcm9wZXJ0aWVzIiwiaWQiLCJsYWJlbERhdGFGZWF0dXJlcyIsIm1hcCIsIml0ZW0iLCJwcm9kdWNlIiwiZHJhZnQiLCJjbGlja19kaXNhYmxlZCIsImFkZEZlYXR1cmVzIiwiZm9ybWF0UG9ydEZlYXR1cmVzIiwiY2xlYXJVcCIsImNsZWFyIiwicmVTdHlsZXNQb3J0TGF5ZXIiLCJmZWF0dXJlcyIsImdldEZlYXR1cmVzIiwiZmVhdHVyZSIsInpvb20iLCJuZXdQb3J0Rm9yZWNhc3RTdHlsZSIsImNsb25lIiwiZ2V0SW1hZ2UiLCJzZXRTY2FsZSIsIm5ld1BvcnROb25Gb3JlY2FzdFN0eWxlIiwic2V0U3R5bGUiLCJnZXQiLCJyZVN0eWxlc0xhYmVsTGF5ZXIiLCJuZXdMYWJlbFN0eWxlIiwiZ2V0VGV4dCIsInNldFRleHQiLCJnZXRQcm9wZXJ0aWVzIiwibmFtZSIsIm9uIiwiYWRkTGF5ZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsTUFBTUEsMEJBQTBCLEdBQUcsQ0FBbkM7QUFDQSxNQUFNQyx3QkFBd0IsR0FBRyxDQUFqQztBQUNBLE1BQU1DLHVCQUF1QixHQUFHLENBQWhDO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsSUFBSUMsOENBQUosQ0FBVTtBQUNsQ0MsT0FBSyxFQUFFLElBQUlDLDZDQUFKLENBQVM7QUFDZEMsT0FBRyxFQUFFLHNCQURTO0FBRWRDLFFBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBRlE7QUFHZEMsVUFBTSxFQUFFLENBQUMsR0FBRCxFQUFNLEVBQU4sQ0FITTtBQUlkQyxTQUFLLEVBQUU7QUFKTyxHQUFUO0FBRDJCLENBQVYsQ0FBMUI7QUFRQSxNQUFNQyxvQkFBb0IsR0FBRyxJQUFJUCw4Q0FBSixDQUFVO0FBQ3JDQyxPQUFLLEVBQUUsSUFBSU8sK0NBQUosQ0FBVztBQUNoQkMsVUFBTSxFQUFFLENBRFE7QUFFaEJDLFFBQUksRUFBRSxJQUFJQyw2Q0FBSixDQUFTO0FBQUVDLFdBQUssRUFBRSxDQUFDLEVBQUQsRUFBSyxHQUFMLEVBQVUsR0FBVjtBQUFULEtBQVQ7QUFGVSxHQUFYO0FBRDhCLENBQVYsQ0FBN0I7QUFP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K0QsT0FBTCxDQUNFWCxJQUFJLEdBQUd0RSwwQkFBUCxHQUFvQ3FFLE9BQU8sQ0FBQ2EsYUFBUixHQUF3QkMsSUFBNUQsR0FBbUUsRUFEckU7QUFHQWpFLFVBQUksQ0FBQ3dELFFBQUwsQ0FBY2hFLEtBQUssR0FBRyxHQUF0QjtBQUNBLGFBQU8yRCxPQUFPLENBQUNPLFFBQVIsQ0FBaUJHLGFBQWpCLENBQVA7QUFDRCxLQVZEO0FBV0QsR0FkRDs7QUFnQkFoQyx5REFBUyxDQUFDLE1BQU07QUFDZG1CLHFCQUFpQjtBQUNsQixHQUZRLEVBRU4sQ0FBQzFCLFFBQUQsRUFBV0MsV0FBWCxFQUF3QnlCLGlCQUF4QixDQUZNLENBQVQ7QUFJQW5CLHlEQUFTLENBQUMsTUFBTTtBQUNkK0Isc0JBQWtCO0FBQ25CLEdBRlEsRUFFTixDQUFDdEMsUUFBRCxFQUFXQyxXQUFYLENBRk0sQ0FBVDtBQUlBQSxhQUFXLENBQUMyQyxFQUFaLENBQWUsU0FBZixFQUEwQixNQUFNO0FBQzlCLFVBQU1kLElBQUksR0FBRzdCLFdBQVcsQ0FBQ0ksT0FBWixHQUFzQkMsT0FBdEIsRUFBYjs7QUFDQSxRQUNHd0IsSUFBSSxHQUFHdEUsMEJBQVAsSUFDQzBDLFdBQVcsR0FBRzFDLDBCQURoQixJQUVDc0UsSUFBSSxHQUFHdEUsMEJBQVAsSUFDQzBDLFdBQVcsR0FBRzFDLDBCQUpsQixFQUtFO0FBQ0E4RSx3QkFBa0I7QUFDbkI7O0FBQ0RuQyxrQkFBYyxDQUFDMkIsSUFBRCxDQUFkO0FBQ0QsR0FYRDtBQWFBdkIseURBQVMsQ0FBQyxNQUFNO0FBQ2ROLGVBQVcsQ0FBQzRDLFFBQVosQ0FBcUJsRCxLQUFyQjtBQUNELEdBRlEsRUFFTixDQUFDTSxXQUFELENBRk0sQ0FBVDtBQUlBLFNBQU8sSUFBUDtBQUNELENBM0ZEOztBQTZGZUgsb0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXllcnMvUG9ydC9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgKi9cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNYXAgZnJvbSBcIm9sL01hcFwiO1xuaW1wb3J0IFZlY3RvclNvdXJjZSBmcm9tIFwib2wvc291cmNlL1ZlY3RvclwiO1xuaW1wb3J0IHsgSWNvbiwgVGV4dCwgRmlsbCwgU3Ryb2tlLCBTdHlsZSwgQ2lyY2xlIH0gZnJvbSBcIm9sL3N0eWxlXCI7XG5pbXBvcnQgR2VvSlNPTiBmcm9tIFwib2wvZm9ybWF0L0dlb0pTT05cIjtcbmltcG9ydCBWZWN0b3JMYXllciBmcm9tIFwib2wvbGF5ZXIvVmVjdG9yXCI7XG5pbXBvcnQgTGF5ZXJHcm91cCBmcm9tIFwib2wvbGF5ZXIvR3JvdXBcIjtcbmltcG9ydCB7IGZvcm1hdFBvcnRGZWF0dXJlcywgRmVhdHVyZXNQcm9maWxlIH0gZnJvbSBcImNvcmUvbW9kZWwvTWFwXCI7XG5pbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tIFwib2xcIjtcblxuY29uc3QgbGFiZWxMYXllckRpc3BsYXlab29tTGV2ZWwgPSA1O1xuY29uc3QgbGFiZWxMYXllclNjYWxlWm9vbUxldmVsID0gNTtcbmNvbnN0IHBvcnRMYXllclNjYWxlWm9vbUxldmVsID0gNTtcblxuY29uc3QgcG9ydEZvcmVjYXN0U3R5bGUgPSBuZXcgU3R5bGUoe1xuICBpbWFnZTogbmV3IEljb24oe1xuICAgIHNyYzogXCIvaWNvbnMvY29tX2ljb25zLnBuZ1wiLFxuICAgIHNpemU6IFsyOSwgMjldLFxuICAgIG9mZnNldDogWzEyMywgMTJdLFxuICAgIHNjYWxlOiAwLjIsXG4gIH0pLFxufSk7XG5jb25zdCBwb3J0Tm9uRm9yZWNhc3RTdHlsZSA9IG5ldyBTdHlsZSh7XG4gIGltYWdlOiBuZXcgQ2lyY2xlKHtcbiAgICByYWRpdXM6IDIsXG4gICAgZmlsbDogbmV3IEZpbGwoeyBjb2xvcjogWzYzLCAxNDQsIDI1NV0gfSksXG4gIH0pLFxufSk7XG5cbmNvbnN0IGxhYmVsU3R5bGUgPSBuZXcgU3R5bGUoe1xuICB0ZXh0OiBuZXcgVGV4dCh7XG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIHRleHRCYXNlbGluZTogXCJib3R0b21cIixcbiAgICBmb250OiBcIkJvbGQgMTVweC8zIGFyaWFsXCIsXG4gICAgZmlsbDogbmV3IEZpbGwoeyBjb2xvcjogXCJ3aGl0ZVwiIH0pLFxuICAgIGJhY2tncm91bmRGaWxsOiBuZXcgRmlsbCh7IGNvbG9yOiBbNjMsIDE0NCwgMjU1XSB9KSxcbiAgICBiYWNrZ3JvdW5kU3Ryb2tlOiBuZXcgU3Ryb2tlKHsgY29sb3I6IFwid2hpdGVcIiB9KSxcbiAgICBwYWRkaW5nOiBbMCwgNSwgMCwgNV0sXG4gICAgb2Zmc2V0WTogLTE1LFxuICB9KSxcbn0pO1xuXG5jb25zdCBwb3J0TGF5ZXIgPSBuZXcgVmVjdG9yTGF5ZXIoe1xuICBzb3VyY2U6IG5ldyBWZWN0b3JTb3VyY2Uoe1xuICAgIGZvcm1hdDogbmV3IEdlb0pTT04oKSxcbiAgfSksXG59KTtcblxuY29uc3QgbGFiZWxMYXllciA9IG5ldyBWZWN0b3JMYXllcih7XG4gIHNvdXJjZTogbmV3IFZlY3RvclNvdXJjZSh7XG4gICAgZm9ybWF0OiBuZXcgR2VvSlNPTigpLFxuICB9KSxcbn0pO1xuY29uc3QgbGF5ZXIgPSBuZXcgTGF5ZXJHcm91cCh7XG4gIGxheWVyczogW3BvcnRMYXllciwgbGFiZWxMYXllcl0sXG59KTtcblxuaW50ZXJmYWNlIFBvcnRMYXllclByb3BzIHtcbiAgZ3VhcmRpYW5NYXA6IE1hcDtcbiAgcG9ydExpc3Q6IFtdO1xuICBzZWxlY3RlZFBvcnQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xufVxuXG5jb25zdCBJbmRleCA9ICh7IHNlbGVjdGVkUG9ydCwgcG9ydExpc3QsIGd1YXJkaWFuTWFwIH06IFBvcnRMYXllclByb3BzKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50Wm9vbSwgc2V0Q3VycmVudFpvb21dID0gdXNlU3RhdGUoXG4gICAgZ3VhcmRpYW5NYXAuZ2V0VmlldygpLmdldFpvb20oKVxuICApO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwb3J0TGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwb3J0U291cmNlID0gcG9ydExheWVyLmdldFNvdXJjZSgpO1xuICAgIGNvbnN0IGxhYmVsU291cmNlID0gbGFiZWxMYXllci5nZXRTb3VyY2UoKTtcblxuICAgIGNvbnN0IHBvcnREYXRhRmVhdHVyZXMgPSBzZWxlY3RlZFBvcnRcbiAgICAgID8gcG9ydExpc3QuZmlsdGVyKCh7IHByb3BlcnRpZXM6IHsgaWQgfSB9OiBhbnkpID0+IGlkID09PSBzZWxlY3RlZFBvcnQuaWQpXG4gICAgICA6IHBvcnRMaXN0O1xuXG4gICAgY29uc3QgbGFiZWxEYXRhRmVhdHVyZXMgPSBwb3J0RGF0YUZlYXR1cmVzLm1hcCgoaXRlbTogRmVhdHVyZXNQcm9maWxlKSA9PlxuICAgICAgcHJvZHVjZShpdGVtLCAoZHJhZnQpID0+IHtcbiAgICAgICAgZHJhZnQucHJvcGVydGllcy5jbGlja19kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBwb3J0U291cmNlLmFkZEZlYXR1cmVzKGZvcm1hdFBvcnRGZWF0dXJlcyhwb3J0RGF0YUZlYXR1cmVzKSk7XG4gICAgbGFiZWxTb3VyY2UuYWRkRmVhdHVyZXMoZm9ybWF0UG9ydEZlYXR1cmVzKGxhYmVsRGF0YUZlYXR1cmVzKSk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgICByZXR1cm4gZnVuY3Rpb24gY2xlYXJVcCgpIHtcbiAgICAgIHBvcnRTb3VyY2UuY2xlYXIoKTtcbiAgICAgIGxhYmVsU291cmNlLmNsZWFyKCk7XG4gICAgfTtcbiAgfSwgW3NlbGVjdGVkUG9ydCwgcG9ydExpc3RdKTtcblxuICBjb25zdCByZVN0eWxlc1BvcnRMYXllciA9ICgpID0+IHtcbiAgICBjb25zdCBzb3VyY2UgPSBwb3J0TGF5ZXIuZ2V0U291cmNlKCk7XG4gICAgY29uc3QgZmVhdHVyZXMgPSBzb3VyY2UuZ2V0RmVhdHVyZXMoKTtcbiAgICBmZWF0dXJlcy5tYXAoKGZlYXR1cmUpID0+IHtcbiAgICAgIGNvbnN0IHpvb20gPSBndWFyZGlhbk1hcC5nZXRWaWV3KCkuZ2V0Wm9vbSgpO1xuICAgICAgY29uc3Qgc2NhbGUgPSB6b29tID4gcG9ydExheWVyU2NhbGVab29tTGV2ZWwgPyAwLjUgOiAwLjQ7XG4gICAgICBjb25zdCBuZXdQb3J0Rm9yZWNhc3RTdHlsZSA9IHBvcnRGb3JlY2FzdFN0eWxlLmNsb25lKCk7XG4gICAgICBuZXdQb3J0Rm9yZWNhc3RTdHlsZS5nZXRJbWFnZSgpLnNldFNjYWxlKHNjYWxlKTtcbiAgICAgIGNvbnN0IG5ld1BvcnROb25Gb3JlY2FzdFN0eWxlID0gcG9ydE5vbkZvcmVjYXN0U3R5bGUuY2xvbmUoKTtcbiAgICAgIHJldHVybiBmZWF0dXJlLnNldFN0eWxlKFxuICAgICAgICBmZWF0dXJlLmdldChcImhhc19wb3J0X2ZvcmVjYXN0XCIpXG4gICAgICAgICAgPyBuZXdQb3J0Rm9yZWNhc3RTdHlsZVxuICAgICAgICAgIDogbmV3UG9ydE5vbkZvcmVjYXN0U3R5bGVcbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVTdHlsZXNMYWJlbExheWVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGxhYmVsU291cmNlID0gbGFiZWxMYXllci5nZXRTb3VyY2UoKTtcbiAgICBjb25zdCBmZWF0dXJlcyA9IGxhYmVsU291cmNlLmdldEZlYXR1cmVzKCk7XG4gICAgZmVhdHVyZXMubWFwKChmZWF0dXJlKSA9PiB7XG4gICAgICBjb25zdCB6b29tID0gZ3VhcmRpYW5NYXAuZ2V0VmlldygpLmdldFpvb20oKTtcbiAgICAgIGNvbnN0IHNjYWxlID0gem9vbSA+IGxhYmVsTGF5ZXJTY2FsZVpvb21MZXZlbCA/IDAuNCA6IDAuMjtcbiAgICAgIGNvbnN0IG5ld0xhYmVsU3R5bGUgPSBsYWJlbFN0eWxlLmNsb25lKCk7XG4gICAgICBjb25zdCB0ZXh0ID0gbmV3TGFiZWxTdHlsZS5nZXRUZXh0KCk7XG4gICAgICB0ZXh0LnNldFRleHQoXG4gICAgICAgIHpvb20gPiBsYWJlbExheWVyRGlzcGxheVpvb21MZXZlbCA/IGZlYXR1cmUuZ2V0UHJvcGVydGllcygpLm5hbWUgOiBcIlwiXG4gICAgICApO1xuICAgICAgdGV4dC5zZXRTY2FsZShzY2FsZSAqIDEuNSk7XG4gICAgICByZXR1cm4gZmVhdHVyZS5zZXRTdHlsZShuZXdMYWJlbFN0eWxlKTtcbiAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlU3R5bGVzUG9ydExheWVyKCk7XG4gIH0sIFtwb3J0TGlzdCwgZ3VhcmRpYW5NYXAsIHJlU3R5bGVzUG9ydExheWVyXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZVN0eWxlc0xhYmVsTGF5ZXIoKTtcbiAgfSwgW3BvcnRMaXN0LCBndWFyZGlhbk1hcF0pO1xuXG4gIGd1YXJkaWFuTWFwLm9uKFwibW92ZWVuZFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgem9vbSA9IGd1YXJkaWFuTWFwLmdldFZpZXcoKS5nZXRab29tKCk7XG4gICAgaWYgKFxuICAgICAgKHpvb20gPiBsYWJlbExheWVyRGlzcGxheVpvb21MZXZlbCAmJlxuICAgICAgICBjdXJyZW50Wm9vbSA8IGxhYmVsTGF5ZXJEaXNwbGF5Wm9vbUxldmVsKSB8fFxuICAgICAgKHpvb20gPCBsYWJlbExheWVyRGlzcGxheVpvb21MZXZlbCAmJlxuICAgICAgICBjdXJyZW50Wm9vbSA+IGxhYmVsTGF5ZXJEaXNwbGF5Wm9vbUxldmVsKVxuICAgICkge1xuICAgICAgcmVTdHlsZXNMYWJlbExheWVyKCk7XG4gICAgfVxuICAgIHNldEN1cnJlbnRab29tKHpvb20pO1xuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGd1YXJkaWFuTWFwLmFkZExheWVyKGxheWVyKTtcbiAgfSwgW2d1YXJkaWFuTWFwXSk7XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Layers/Port/index.tsx\n");

/***/ }),

/***/ "./src/core/model/Map/index.tsx":
/*!**************************************!*\
  !*** ./src/core/model/Map/index.tsx ***!
  \**************************************/
/*! exports provided: MapLayers, deg2Rad, CONVERT_PROJECTION, convertCoord2LongLat, convertLongLat2Coords, convertHeadingtoDegree, getHeadingRad, formatPortFeatures, formatVesselFeatures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MapLayers\", function() { return MapLayers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deg2Rad\", function() { return deg2Rad; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CONVERT_PROJECTION\", function() { return CONVERT_PROJECTION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertCoord2LongLat\", function() { return convertCoord2LongLat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertLongLat2Coords\", function() { return convertLongLat2Coords; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertHeadingtoDegree\", function() { return convertHeadingtoDegree; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHeadingRad\", function() { return getHeadingRad; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatPortFeatures\", function() { return formatPortFeatures; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatVesselFeatures\", function() { return formatVesselFeatures; });\n/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/round */ \"lodash/round\");\n/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/format/GeoJSON */ \"ol/format/GeoJSON\");\n/* harmony import */ var ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nlet MapLayers;\n\n(function (MapLayers) {\n  MapLayers[\"Vessel\"] = \"vessel\";\n  MapLayers[\"Port\"] = \"port\";\n})(MapLayers || (MapLayers = {}));\n\nconst defaultGeojsonObject = {\n  type: \"FeatureCollection\",\n  crs: {\n    type: \"name\",\n    properties: {\n      name: \"EPSG:4326\"\n    }\n  }\n};\nfunction deg2Rad(_degree) {\n  const degree = Number(_degree);\n  return degree ? degree / 180 * Math.PI : 0;\n}\nconst CONVERT_PROJECTION = {\n  featureProjection: \"EPSG:3857\",\n  dataProjection: \"EPSG:4326\"\n};\nconst convertCoord2LongLat = data => {\n  return ol.proj.transform(data, \"EPSG:3857\", \"EPSG:4326\");\n};\nconst convertLongLat2Coords = data => {\n  return ol.proj.transform(data, \"EPSG:4326\", \"EPSG:3857\");\n};\nfunction convertHeadingtoDegree(heading, offset = Math.PI / 2) {\n  return lodash_round__WEBPACK_IMPORTED_MODULE_0___default()(heading * 180 / Math.PI + offset);\n}\nconst getHeadingRad = (_degree, offset = Math.PI / 2) => {\n  const degree = deg2Rad(_degree);\n  return degree - offset;\n};\nconst formatPortFeatures = features => {\n  const geoJson = _objectSpread(_objectSpread({}, defaultGeojsonObject), {}, {\n    features\n  });\n\n  return new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_1___default.a(CONVERT_PROJECTION).readFeatures(geoJson);\n};\nconst formatVesselFeatures = dataFeatures => {\n  const features = dataFeatures.map(feature => ({\n    properties: feature.properties,\n    geometry: feature.geometry,\n    type: \"Feature\"\n  }));\n\n  const geoJson = _objectSpread(_objectSpread({}, defaultGeojsonObject), {}, {\n    features\n  });\n\n  return new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_1___default.a(CONVERT_PROJECTION).readFeatures(geoJson);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tb2RlbC9NYXAvaW5kZXgudHN4PzBlMTIiXSwibmFtZXMiOlsiTWFwTGF5ZXJzIiwiZGVmYXVsdEdlb2pzb25PYmplY3QiLCJ0eXBlIiwiY3JzIiwicHJvcGVydGllcyIsIm5hbWUiLCJkZWcyUmFkIiwiX2RlZ3JlZSIsImRlZ3JlZSIsIk51bWJlciIsIk1hdGgiLCJQSSIsIkNPTlZFUlRfUFJPSkVDVElPTiIsImZlYXR1cmVQcm9qZWN0aW9uIiwiZGF0YVByb2plY3Rpb24iLCJjb252ZXJ0Q29vcmQyTG9uZ0xhdCIsImRhdGEiLCJvbCIsInByb2oiLCJ0cmFuc2Zvcm0iLCJjb252ZXJ0TG9uZ0xhdDJDb29yZHMiLCJjb252ZXJ0SGVhZGluZ3RvRGVncmVlIiwiaGVhZGluZyIsIm9mZnNldCIsImdldEhlYWRpbmdSYWQiLCJmb3JtYXRQb3J0RmVhdHVyZXMiLCJmZWF0dXJlcyIsImdlb0pzb24iLCJHZW9KU09OIiwicmVhZEZlYXR1cmVzIiwiZm9ybWF0VmVzc2VsRmVhdHVyZXMiLCJkYXRhRmVhdHVyZXMiLCJtYXAiLCJmZWF0dXJlIiwiZ2VvbWV0cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUdPLElBQUtBLFNBQVo7O1dBQVlBLFM7QUFBQUEsVztBQUFBQSxXO0dBQUFBLFMsS0FBQUEsUzs7QUFnQlosTUFBTUMsb0JBQW9CLEdBQUc7QUFDM0JDLE1BQUksRUFBRSxtQkFEcUI7QUFFM0JDLEtBQUcsRUFBRTtBQUNIRCxRQUFJLEVBQUUsTUFESDtBQUVIRSxjQUFVLEVBQUU7QUFDVkMsVUFBSSxFQUFFO0FBREk7QUFGVDtBQUZzQixDQUE3QjtBQVNPLFNBQVNDLE9BQVQsQ0FBaUJDLE9BQWpCLEVBQXVDO0FBQzVDLFFBQU1DLE1BQU0sR0FBR0MsTUFBTSxDQUFDRixPQUFELENBQXJCO0FBQ0EsU0FBT0MsTUFBTSxHQUFJQSxNQUFNLEdBQUcsR0FBVixHQUFpQkUsSUFBSSxDQUFDQyxFQUF6QixHQUE4QixDQUEzQztBQUNEO0FBRU0sTUFBTUMsa0JBQWtCLEdBQUc7QUFDaENDLG1CQUFpQixFQUFFLFdBRGE7QUFFaENDLGdCQUFjLEVBQUU7QUFGZ0IsQ0FBM0I7QUFLQSxNQUFNQyxvQkFBb0IsR0FBSUMsSUFBRCxJQUFvQjtBQUN0RCxTQUFPQyxFQUFFLENBQUNDLElBQUgsQ0FBUUMsU0FBUixDQUFrQkgsSUFBbEIsRUFBd0IsV0FBeEIsRUFBcUMsV0FBckMsQ0FBUDtBQUNELENBRk07QUFHQSxNQUFNSSxxQkFBcUIsR0FBSUosSUFBRCxJQUFvQjtBQUN2RCxTQUFPQyxFQUFFLENBQUNDLElBQUgsQ0FBUUMsU0FBUixDQUFrQkgsSUFBbEIsRUFBd0IsV0FBeEIsRUFBcUMsV0FBckMsQ0FBUDtBQUNELENBRk07QUFJQSxTQUFTSyxzQkFBVCxDQUFnQ0MsT0FBaEMsRUFBaURDLE1BQU0sR0FBR2IsSUFBSSxDQUFDQyxFQUFMLEdBQVUsQ0FBcEUsRUFBdUU7QUFDNUUsU0FBTyxvREFBT1csT0FBTyxHQUFHLEdBQVgsR0FBa0JaLElBQUksQ0FBQ0MsRUFBdkIsR0FBNEJZLE1BQWxDLENBQVA7QUFDRDtBQUVNLE1BQU1DLGFBQWEsR0FBRyxDQUFDakIsT0FBRCxFQUFlZ0IsTUFBTSxHQUFHYixJQUFJLENBQUNDLEVBQUwsR0FBVSxDQUFsQyxLQUFnRDtBQUMzRSxRQUFNSCxNQUFNLEdBQUdGLE9BQU8sQ0FBQ0MsT0FBRCxDQUF0QjtBQUNBLFNBQU9DLE1BQU0sR0FBR2UsTUFBaEI7QUFDRCxDQUhNO0FBS0EsTUFBTUUsa0JBQWtCLEdBQUlDLFFBQUQsSUFBaUM7QUFDakUsUUFBTUMsT0FBTyxtQ0FBUTFCLG9CQUFSO0FBQThCeUI7QUFBOUIsSUFBYjs7QUFDQSxTQUFPLElBQUlFLHdEQUFKLENBQVloQixrQkFBWixFQUFnQ2lCLFlBQWhDLENBQTZDRixPQUE3QyxDQUFQO0FBQ0QsQ0FITTtBQUtBLE1BQU1HLG9CQUFvQixHQUFJQyxZQUFELElBQXFDO0FBQ3ZFLFFBQU1MLFFBQVEsR0FBR0ssWUFBWSxDQUFDQyxHQUFiLENBQWtCQyxPQUFELEtBQW1CO0FBQ25EN0IsY0FBVSxFQUFFNkIsT0FBTyxDQUFDN0IsVUFEK0I7QUFFbkQ4QixZQUFRLEVBQUVELE9BQU8sQ0FBQ0MsUUFGaUM7QUFHbkRoQyxRQUFJLEVBQUU7QUFINkMsR0FBbkIsQ0FBakIsQ0FBakI7O0FBS0EsUUFBTXlCLE9BQU8sbUNBQVExQixvQkFBUjtBQUE4QnlCO0FBQTlCLElBQWI7O0FBRUEsU0FBTyxJQUFJRSx3REFBSixDQUFZaEIsa0JBQVosRUFBZ0NpQixZQUFoQyxDQUE2Q0YsT0FBN0MsQ0FBUDtBQUNELENBVE0iLCJmaWxlIjoiLi9zcmMvY29yZS9tb2RlbC9NYXAvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XG5pbXBvcnQgR2VvSlNPTiBmcm9tIFwib2wvZm9ybWF0L0dlb0pTT05cIjtcbmltcG9ydCB7IHJvdW5kIH0gZnJvbSBcImxvZGFzaFwiO1xuXG5leHBvcnQgZW51bSBNYXBMYXllcnMge1xuICBWZXNzZWwgPSBcInZlc3NlbFwiLFxuICBQb3J0ID0gXCJwb3J0XCIsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VvbWV0cnlQcm9maWxlIHtcbiAgdHlwZTogXCJQb2ludFwiIHwgc3RyaW5nO1xuICBjb29yZGluYXRlczogQXJyYXk8bnVtYmVyPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlc1Byb2ZpbGUge1xuICB0eXBlOiBcIkZlYXR1cmVcIjtcbiAgZ2VvbWV0cnk6IEdlb21ldHJ5UHJvZmlsZTtcbiAgcHJvcGVydGllcz86IGFueTtcbn1cblxuY29uc3QgZGVmYXVsdEdlb2pzb25PYmplY3QgPSB7XG4gIHR5cGU6IFwiRmVhdHVyZUNvbGxlY3Rpb25cIixcbiAgY3JzOiB7XG4gICAgdHlwZTogXCJuYW1lXCIsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgbmFtZTogXCJFUFNHOjQzMjZcIixcbiAgICB9LFxuICB9LFxufTtcbmV4cG9ydCBmdW5jdGlvbiBkZWcyUmFkKF9kZWdyZWU6IGFueSk6IG51bWJlciB7XG4gIGNvbnN0IGRlZ3JlZSA9IE51bWJlcihfZGVncmVlKTtcbiAgcmV0dXJuIGRlZ3JlZSA/IChkZWdyZWUgLyAxODApICogTWF0aC5QSSA6IDA7XG59XG5cbmV4cG9ydCBjb25zdCBDT05WRVJUX1BST0pFQ1RJT04gPSB7XG4gIGZlYXR1cmVQcm9qZWN0aW9uOiBcIkVQU0c6Mzg1N1wiLFxuICBkYXRhUHJvamVjdGlvbjogXCJFUFNHOjQzMjZcIixcbn07XG5cbmV4cG9ydCBjb25zdCBjb252ZXJ0Q29vcmQyTG9uZ0xhdCA9IChkYXRhOiBudW1iZXJbXSkgPT4ge1xuICByZXR1cm4gb2wucHJvai50cmFuc2Zvcm0oZGF0YSwgXCJFUFNHOjM4NTdcIiwgXCJFUFNHOjQzMjZcIik7XG59O1xuZXhwb3J0IGNvbnN0IGNvbnZlcnRMb25nTGF0MkNvb3JkcyA9IChkYXRhOiBudW1iZXJbXSkgPT4ge1xuICByZXR1cm4gb2wucHJvai50cmFuc2Zvcm0oZGF0YSwgXCJFUFNHOjQzMjZcIiwgXCJFUFNHOjM4NTdcIik7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydEhlYWRpbmd0b0RlZ3JlZShoZWFkaW5nOiBudW1iZXIsIG9mZnNldCA9IE1hdGguUEkgLyAyKSB7XG4gIHJldHVybiByb3VuZCgoaGVhZGluZyAqIDE4MCkgLyBNYXRoLlBJICsgb2Zmc2V0KTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldEhlYWRpbmdSYWQgPSAoX2RlZ3JlZTogYW55LCBvZmZzZXQgPSBNYXRoLlBJIC8gMik6IG51bWJlciA9PiB7XG4gIGNvbnN0IGRlZ3JlZSA9IGRlZzJSYWQoX2RlZ3JlZSk7XG4gIHJldHVybiBkZWdyZWUgLSBvZmZzZXQ7XG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0UG9ydEZlYXR1cmVzID0gKGZlYXR1cmVzOiBGZWF0dXJlc1Byb2ZpbGVbXSkgPT4ge1xuICBjb25zdCBnZW9Kc29uID0geyAuLi5kZWZhdWx0R2VvanNvbk9iamVjdCwgZmVhdHVyZXMgfTtcbiAgcmV0dXJuIG5ldyBHZW9KU09OKENPTlZFUlRfUFJPSkVDVElPTikucmVhZEZlYXR1cmVzKGdlb0pzb24pO1xufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFZlc3NlbEZlYXR1cmVzID0gKGRhdGFGZWF0dXJlczogRmVhdHVyZXNQcm9maWxlW10pID0+IHtcbiAgY29uc3QgZmVhdHVyZXMgPSBkYXRhRmVhdHVyZXMubWFwKChmZWF0dXJlOiBhbnkpID0+ICh7XG4gICAgcHJvcGVydGllczogZmVhdHVyZS5wcm9wZXJ0aWVzLFxuICAgIGdlb21ldHJ5OiBmZWF0dXJlLmdlb21ldHJ5LFxuICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxuICB9KSk7XG4gIGNvbnN0IGdlb0pzb24gPSB7IC4uLmRlZmF1bHRHZW9qc29uT2JqZWN0LCBmZWF0dXJlcyB9O1xuXG4gIHJldHVybiBuZXcgR2VvSlNPTihDT05WRVJUX1BST0pFQ1RJT04pLnJlYWRGZWF0dXJlcyhnZW9Kc29uKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/core/model/Map/index.tsx\n");

/***/ })

};;
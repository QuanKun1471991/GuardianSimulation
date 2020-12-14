webpackHotUpdate_N_E(2,{

/***/ "./src/components/LoginForm/index.tsx":
/*!********************************************!*\
  !*** ./src/components/LoginForm/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ \"./node_modules/antd/lib/button/style/index.js\");\n/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ \"./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ant_design_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons/LockOutlined */ \"./node_modules/@ant-design/icons/LockOutlined.js\");\n/* harmony import */ var _ant_design_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form/style */ \"./node_modules/antd/lib/form/style/index.js\");\n/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/form */ \"./node_modules/antd/lib/form/index.js\");\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/input/style */ \"./node_modules/antd/lib/input/style/index.js\");\n/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/input */ \"./node_modules/antd/lib/input/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _ant_design_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons/UserOutlined */ \"./node_modules/@ant-design/icons/UserOutlined.js\");\n/* harmony import */ var _ant_design_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/tonysan/Desktop/FE-TEAM/reactjs-project-template/src/components/LoginForm/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\n\nvar LoginForm = function LoginForm(_ref) {\n  _s();\n\n  var onSubmit = _ref.onSubmit,\n      loading = _ref.loading;\n  var handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_8__[\"useCallback\"])(function (values) {\n    return onSubmit(values);\n  }, [onSubmit]);\n  return __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    onFinish: handleSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {\n    name: \"email\",\n    label: \"Email\" // labelCol={{ span: 24 }}\n    ,\n    className: \"title\",\n    rules: [{\n      required: true,\n      message: \"Please input your email!\"\n    }],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    prefix: __jsx(_ant_design_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      style: {\n        color: \"rgba(0,0,0,.25)\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 19\n      }\n    }),\n    placeholder: \"Email\",\n    size: \"large\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {\n    name: \"password\",\n    label: \"Password\" // labelCol={{ span: 24 }}\n    ,\n    className: \"title\",\n    rules: [{\n      required: true,\n      message: \"Please input your password!\"\n    }],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    prefix: __jsx(_ant_design_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      style: {\n        color: \"rgba(0,0,0,.25)\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 19\n      }\n    }),\n    type: \"password\",\n    placeholder: \"Password\",\n    size: \"large\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"buttons-w\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    htmlType: \"submit\",\n    type: \"primary\",\n    disabled: loading,\n    loading: loading,\n    className: \"login-form-button\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, \"LOGIN\")));\n};\n\n_s(LoginForm, \"tzNB2ES70+wfA7yeR5/qpxBoorU=\");\n\n_c = LoginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_8__[\"memo\"])(LoginForm));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"LoginForm\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9naW5Gb3JtL2luZGV4LnRzeD9hMTEyIl0sIm5hbWVzIjpbIkxvZ2luRm9ybSIsIm9uU3VibWl0IiwibG9hZGluZyIsImhhbmRsZVN1Ym1pdCIsInVzZUNhbGxiYWNrIiwidmFsdWVzIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwiY29sb3IiLCJtZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFPQSxJQUFNQSxTQUEyQixHQUFHLFNBQTlCQSxTQUE4QixPQUEyQjtBQUFBOztBQUFBLE1BQXhCQyxRQUF3QixRQUF4QkEsUUFBd0I7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDN0QsTUFBTUMsWUFBWSxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLE1BQUQ7QUFBQSxXQUFZSixRQUFRLENBQUNJLE1BQUQsQ0FBcEI7QUFBQSxHQUFELEVBQStCLENBQUNKLFFBQUQsQ0FBL0IsQ0FBaEM7QUFDQSxTQUNFO0FBQU0sWUFBUSxFQUFFRSxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMkRBQU0sSUFBTjtBQUNFLFFBQUksRUFBQyxPQURQO0FBRUUsU0FBSyxFQUFDLE9BRlIsQ0FHRTtBQUhGO0FBSUUsYUFBUyxFQUFDLE9BSlo7QUFLRSxTQUFLLEVBQUUsQ0FDTDtBQUNFRyxjQUFRLEVBQUUsSUFEWjtBQUVFQyxhQUFPLEVBQUU7QUFGWCxLQURLLENBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVlFO0FBQ0UsVUFBTSxFQUFFO0FBQWMsV0FBSyxFQUFFO0FBQUVDLGFBQUssRUFBRTtBQUFULE9BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEVjtBQUVFLGVBQVcsRUFBQyxPQUZkO0FBR0UsUUFBSSxFQUFDLE9BSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLENBREYsRUFtQkUsMkRBQU0sSUFBTjtBQUNFLFFBQUksRUFBQyxVQURQO0FBRUUsU0FBSyxFQUFDLFVBRlIsQ0FHRTtBQUhGO0FBSUUsYUFBUyxFQUFDLE9BSlo7QUFLRSxTQUFLLEVBQUUsQ0FBQztBQUFFRixjQUFRLEVBQUUsSUFBWjtBQUFrQkMsYUFBTyxFQUFFO0FBQTNCLEtBQUQsQ0FMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0U7QUFDRSxVQUFNLEVBQUU7QUFBYyxXQUFLLEVBQUU7QUFBRUMsYUFBSyxFQUFFO0FBQVQsT0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURWO0FBRUUsUUFBSSxFQUFDLFVBRlA7QUFHRSxlQUFXLEVBQUMsVUFIZDtBQUlFLFFBQUksRUFBQyxPQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQW5CRixFQWlDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFlBQVEsRUFBQyxRQURYO0FBRUUsUUFBSSxFQUFDLFNBRlA7QUFHRSxZQUFRLEVBQUVOLE9BSFo7QUFJRSxXQUFPLEVBQUVBLE9BSlg7QUFLRSxhQUFTLEVBQUMsbUJBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLENBakNGLENBREY7QUErQ0QsQ0FqREQ7O0dBQU1GLFM7O0tBQUFBLFM7QUFtRFMsa0ZBQUFTLGtEQUFJLENBQUNULFNBQUQsQ0FBbkIiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Mb2dpbkZvcm0vaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9ja091dGxpbmVkLCBVc2VyT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIlxuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCB9IGZyb20gXCJhbnRkXCJcbmltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBvblN1Ym1pdDogKHZhbHVlczogeyBlbWFpbDogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nIH0pID0+IHZvaWRcbiAgbG9hZGluZzogYm9vbGVhblxufVxuXG5jb25zdCBMb2dpbkZvcm06IFJlYWN0LkZDPElQcm9wcz4gPSAoeyBvblN1Ym1pdCwgbG9hZGluZyB9KSA9PiB7XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IHVzZUNhbGxiYWNrKCh2YWx1ZXMpID0+IG9uU3VibWl0KHZhbHVlcyksIFtvblN1Ym1pdF0pXG4gIHJldHVybiAoXG4gICAgPEZvcm0gb25GaW5pc2g9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8Rm9ybS5JdGVtXG4gICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAvLyBsYWJlbENvbD17eyBzcGFuOiAyNCB9fVxuICAgICAgICBjbGFzc05hbWU9XCJ0aXRsZVwiXG4gICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBpbnB1dCB5b3VyIGVtYWlsIVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICA+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHByZWZpeD17PFVzZXJPdXRsaW5lZCBzdHlsZT17eyBjb2xvcjogXCJyZ2JhKDAsMCwwLC4yNSlcIiB9fSAvPn1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAvPlxuICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICA8Rm9ybS5JdGVtXG4gICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAvLyBsYWJlbENvbD17eyBzcGFuOiAyNCB9fVxuICAgICAgICBjbGFzc05hbWU9XCJ0aXRsZVwiXG4gICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJQbGVhc2UgaW5wdXQgeW91ciBwYXNzd29yZCFcIiB9XX1cbiAgICAgID5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgcHJlZml4PXs8TG9ja091dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiBcInJnYmEoMCwwLDAsLjI1KVwiIH19IC8+fVxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zLXdcIj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICBjbGFzc05hbWU9XCJsb2dpbi1mb3JtLWJ1dHRvblwiXG4gICAgICAgID5cbiAgICAgICAgICBMT0dJTlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvRm9ybT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKExvZ2luRm9ybSlcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/LoginForm/index.tsx\n");

/***/ })

})
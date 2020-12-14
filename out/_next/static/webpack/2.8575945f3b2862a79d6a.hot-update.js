webpackHotUpdate_N_E(2,{

/***/ "./src/components/LoginForm/index.tsx":
/*!********************************************!*\
  !*** ./src/components/LoginForm/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ \"./node_modules/antd/lib/button/style/index.js\");\n/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ \"./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ant_design_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons/LockOutlined */ \"./node_modules/@ant-design/icons/LockOutlined.js\");\n/* harmony import */ var _ant_design_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form/style */ \"./node_modules/antd/lib/form/style/index.js\");\n/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/form */ \"./node_modules/antd/lib/form/index.js\");\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/input/style */ \"./node_modules/antd/lib/input/style/index.js\");\n/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/input */ \"./node_modules/antd/lib/input/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _ant_design_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons/UserOutlined */ \"./node_modules/@ant-design/icons/UserOutlined.js\");\n/* harmony import */ var _ant_design_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/tonysan/Desktop/FE-TEAM/reactjs-project-template/src/components/LoginForm/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\n\nvar LoginForm = function LoginForm(_ref) {\n  _s();\n\n  var onSubmit = _ref.onSubmit,\n      loading = _ref.loading,\n      style = _ref.style;\n  var handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_8__[\"useCallback\"])(function (values) {\n    return onSubmit(values);\n  }, [onSubmit]);\n  debugger;\n  return __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    onFinish: handleSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {\n    name: \"email\",\n    label: \"Email\",\n    labelCol: {\n      span: 24\n    },\n    className: styles.container.title,\n    rules: [{\n      required: true,\n      message: \"Please input your email!\"\n    }],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    prefix: __jsx(_ant_design_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      style: {\n        color: \"rgba(0,0,0,.25)\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 24\n      }\n    }),\n    placeholder: \"Email\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {\n    name: \"password\",\n    label: \"Password\",\n    labelCol: {\n      span: 24\n    },\n    rules: [{\n      required: true,\n      message: \"Please input your password!\"\n    }],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    prefix: __jsx(_ant_design_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      style: {\n        color: \"rgba(0,0,0,.25)\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 19\n      }\n    }),\n    type: \"password\",\n    placeholder: \"Password\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"buttons-w\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    htmlType: \"submit\",\n    type: \"primary\",\n    disabled: loading,\n    loading: loading,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, \"Log me in\")));\n};\n\n_s(LoginForm, \"tzNB2ES70+wfA7yeR5/qpxBoorU=\");\n\n_c = LoginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_8__[\"memo\"])(LoginForm));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"LoginForm\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9naW5Gb3JtL2luZGV4LnRzeD9hMTEyIl0sIm5hbWVzIjpbIkxvZ2luRm9ybSIsIm9uU3VibWl0IiwibG9hZGluZyIsInN0eWxlIiwiaGFuZGxlU3VibWl0IiwidXNlQ2FsbGJhY2siLCJ2YWx1ZXMiLCJzcGFuIiwic3R5bGVzIiwiY29udGFpbmVyIiwidGl0bGUiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJjb2xvciIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQU9BLElBQU1BLFNBQTJCLEdBQUcsU0FBOUJBLFNBQThCLE9BQWtDO0FBQUE7O0FBQUEsTUFBL0JDLFFBQStCLFFBQS9CQSxRQUErQjtBQUFBLE1BQXJCQyxPQUFxQixRQUFyQkEsT0FBcUI7QUFBQSxNQUFYQyxLQUFXLFFBQVhBLEtBQVc7QUFDcEUsTUFBTUMsWUFBWSxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLE1BQUQ7QUFBQSxXQUFZTCxRQUFRLENBQUNLLE1BQUQsQ0FBcEI7QUFBQSxHQUFELEVBQStCLENBQUNMLFFBQUQsQ0FBL0IsQ0FBaEM7QUFDQTtBQUNBLFNBQ0U7QUFBTSxZQUFRLEVBQUVHLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwyREFBTSxJQUFOO0FBQ0UsUUFBSSxFQUFDLE9BRFA7QUFFRSxTQUFLLEVBQUMsT0FGUjtBQUdFLFlBQVEsRUFBRTtBQUFFRyxVQUFJLEVBQUU7QUFBUixLQUhaO0FBSUUsYUFBUyxFQUFFQyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLEtBSjlCO0FBS0UsU0FBSyxFQUFFLENBQ0w7QUFDRUMsY0FBUSxFQUFFLElBRFo7QUFFRUMsYUFBTyxFQUFFO0FBRlgsS0FESyxDQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FZRTtBQUFPLFVBQU0sRUFBRTtBQUFjLFdBQUssRUFBRTtBQUFFQyxhQUFLLEVBQUU7QUFBVCxPQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQWY7QUFBc0UsZUFBVyxFQUFDLE9BQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixDQURGLEVBZUUsMkRBQU0sSUFBTjtBQUNFLFFBQUksRUFBQyxVQURQO0FBRUUsU0FBSyxFQUFDLFVBRlI7QUFHRSxZQUFRLEVBQUU7QUFBRU4sVUFBSSxFQUFFO0FBQVIsS0FIWjtBQUlFLFNBQUssRUFBRSxDQUFDO0FBQUVJLGNBQVEsRUFBRSxJQUFaO0FBQWtCQyxhQUFPLEVBQUU7QUFBM0IsS0FBRCxDQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUNFLFVBQU0sRUFBRTtBQUFjLFdBQUssRUFBRTtBQUFFQyxhQUFLLEVBQUU7QUFBVCxPQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFY7QUFFRSxRQUFJLEVBQUMsVUFGUDtBQUdFLGVBQVcsRUFBQyxVQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQWZGLEVBMkJFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsWUFBUSxFQUFDLFFBQWpCO0FBQTBCLFFBQUksRUFBQyxTQUEvQjtBQUF5QyxZQUFRLEVBQUVYLE9BQW5EO0FBQTRELFdBQU8sRUFBRUEsT0FBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixDQTNCRixDQURGO0FBbUNELENBdENEOztHQUFNRixTOztLQUFBQSxTO0FBd0NTLGtGQUFBYyxrREFBSSxDQUFDZCxTQUFELENBQW5CIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTG9naW5Gb3JtL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2tPdXRsaW5lZCwgVXNlck91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCJcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiXG5pbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIlxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgb25TdWJtaXQ6ICh2YWx1ZXM6IHsgZW1haWw6IHN0cmluZzsgcGFzc3dvcmQ6IHN0cmluZyB9KSA9PiB2b2lkXG4gIGxvYWRpbmc6IGJvb2xlYW5cbn1cblxuY29uc3QgTG9naW5Gb3JtOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgb25TdWJtaXQsIGxvYWRpbmcgLCBzdHlsZX0pID0+IHtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gdXNlQ2FsbGJhY2soKHZhbHVlcykgPT4gb25TdWJtaXQodmFsdWVzKSwgW29uU3VibWl0XSlcbiAgZGVidWdnZXJcbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBvbkZpbmlzaD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgIGxhYmVsQ29sPXt7IHNwYW46IDI0IH19XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lci50aXRsZX1cbiAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGlucHV0IHlvdXIgZW1haWwhXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgID5cbiAgICAgICAgPElucHV0IHByZWZpeD17PFVzZXJPdXRsaW5lZCBzdHlsZT17eyBjb2xvcjogXCJyZ2JhKDAsMCwwLC4yNSlcIiB9fSAvPn0gcGxhY2Vob2xkZXI9XCJFbWFpbFwiIC8+XG4gICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgIGxhYmVsQ29sPXt7IHNwYW46IDI0IH19XG4gICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJQbGVhc2UgaW5wdXQgeW91ciBwYXNzd29yZCFcIiB9XX1cbiAgICAgID5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgcHJlZml4PXs8TG9ja091dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiBcInJnYmEoMCwwLDAsLjI1KVwiIH19IC8+fVxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgIC8+XG4gICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucy13XCI+XG4gICAgICAgIDxCdXR0b24gaHRtbFR5cGU9XCJzdWJtaXRcIiB0eXBlPVwicHJpbWFyeVwiIGRpc2FibGVkPXtsb2FkaW5nfSBsb2FkaW5nPXtsb2FkaW5nfT5cbiAgICAgICAgICBMb2cgbWUgaW5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L0Zvcm0+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhMb2dpbkZvcm0pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/LoginForm/index.tsx\n");

/***/ })

})
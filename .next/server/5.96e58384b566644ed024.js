exports.ids = [5];
exports.modules = {

/***/ "vv6I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "lodash/get"
var get_ = __webpack_require__("lCf4");
var get_default = /*#__PURE__*/__webpack_require__.n(get_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/Table"
var Table_ = __webpack_require__("BjFw");
var Table_default = /*#__PURE__*/__webpack_require__.n(Table_);

// EXTERNAL MODULE: external "@material-ui/core/TableBody"
var TableBody_ = __webpack_require__("30mr");
var TableBody_default = /*#__PURE__*/__webpack_require__.n(TableBody_);

// EXTERNAL MODULE: external "@material-ui/core/TableCell"
var TableCell_ = __webpack_require__("Ai9N");
var TableCell_default = /*#__PURE__*/__webpack_require__.n(TableCell_);

// EXTERNAL MODULE: external "@material-ui/core/TableHead"
var TableHead_ = __webpack_require__("TWtx");
var TableHead_default = /*#__PURE__*/__webpack_require__.n(TableHead_);

// EXTERNAL MODULE: external "@material-ui/core/TableRow"
var TableRow_ = __webpack_require__("iDDF");
var TableRow_default = /*#__PURE__*/__webpack_require__.n(TableRow_);

// CONCATENATED MODULE: ./src/components/SimulationResults/styles.tsx
const styles = () => ({
  tableWrapper: {
    overflowY: 'auto',
    height: '100%'
  },
  table: {
    '& thead': {
      '& th': {
        backgroundColor: '#303030',
        color: '#fff'
      }
    },
    paddingBottom: '10px'
  },
  tableCell: {// padding: '16px 5px',
  }
});

/* harmony default export */ var SimulationResults_styles = (styles);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__("IbbU");
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: ./src/services/vessel/actions.ts
var actions = __webpack_require__("7aiV");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__("T5ka");
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);

// CONCATENATED MODULE: ./src/components/SimulationResults/index.tsx

var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











 // import update from 'immutability-helper';




const useStyles = Object(styles_["makeStyles"])(SimulationResults_styles);

function Index({
  selectedVessel
}) {
  const classes = useStyles();
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    simulationRoutes,
    simulationRoutes: {
      loading,
      data
    }
  } = selectedVessel;
  const {
    0: rows,
    1: setRows
  } = Object(external_react_["useState"])(data);
  Object(external_react_["useEffect"])(() => {
    setRows(data);
  }, [data]);
  const handleUpdateRow = Object(external_react_["useCallback"])((index, key, value) => {
    setRows(prevRows => external_immer_default()(prevRows, draft => {
      draft[index][key] = value;
    }));
  }, []);

  const handleUpdate = () => {
    dispatch(actions["b" /* BaseFunctions */].setState({
      field: "selectedVessel",
      simulationRoutes: _objectSpread(_objectSpread({}, simulationRoutes), {}, {
        data: rows,
        update: true
      })
    }));
  };

  const resultData = Object(external_react_["useCallback"])(() => {
    return __jsx(core_["Grid"], {
      item: true,
      xs: 12,
      className: classes.tableWrapper
    }, __jsx(Table_default.a, {
      className: classes.table,
      stickyHeader: true,
      "aria-label": "sticky table"
    }, __jsx(TableHead_default.a, null, __jsx(TableRow_default.a, null, __jsx(TableCell_default.a, {
      align: "center"
    }, "Longitude"), __jsx(TableCell_default.a, {
      align: "center"
    }, "Latitude"), __jsx(TableCell_default.a, {
      align: "center"
    }, "Heading"), __jsx(TableCell_default.a, {
      align: "center"
    }, "Speed"), __jsx(TableCell_default.a, {
      align: "center"
    }, "Timestamp"), __jsx(TableCell_default.a, {
      align: "center"
    }, "Created_at"), __jsx(TableCell_default.a, {
      align: "center"
    }, rows.length !== 0 && __jsx(external_react_default.a.Fragment, null, __jsx(Button_default.a, {
      size: "small",
      variant: "contained",
      color: "primary",
      disableElevation: true,
      onClick: () => handleUpdate()
    }, "Update"))))), __jsx(TableBody_default.a, null, rows.map((row, index) => __jsx(TableRow_default.a, {
      key: row.id,
      style: {
        whiteSpace: 'normal',
        wordWrap: 'break-word',
        backgroundColor: 'white'
      }
    }, __jsx(TableCell_default.a, {
      className: classes.tableCell,
      align: "center"
    }, __jsx(TextField_default.a, {
      id: "standard-basic",
      value: get_default()(row, 'longitude'),
      onChange: e => handleUpdateRow(index, 'longitude', e.currentTarget.value)
    })), __jsx(TableCell_default.a, {
      className: classes.tableCell,
      align: "center"
    }, __jsx(TextField_default.a, {
      id: "standard-basic",
      value: get_default()(row, 'latitude'),
      onChange: e => handleUpdateRow(index, 'latitude', e.currentTarget.value)
    })), __jsx(TableCell_default.a, {
      className: classes.tableCell,
      align: "center"
    }, __jsx(TextField_default.a, {
      id: "standard-basic",
      value: get_default()(row, 'heading'),
      disabled: true
    })), __jsx(TableCell_default.a, {
      className: classes.tableCell,
      align: "center"
    }, __jsx(TextField_default.a, {
      id: "standard-basic",
      value: get_default()(row, 'speed'),
      onChange: e => handleUpdateRow(index, 'speed', e.currentTarget.value)
    })), __jsx(TableCell_default.a, {
      className: classes.tableCell,
      align: "center"
    }, __jsx(TextField_default.a, {
      id: "standard-basic",
      value: get_default()(row, 'timestamp'),
      onChange: e => handleUpdateRow(index, 'timestamp', e.currentTarget.value)
    })), __jsx(TableCell_default.a, {
      className: classes.tableCell,
      align: "center"
    }, __jsx(TextField_default.a, {
      id: "standard-basic",
      value: get_default()(row, 'created_at'),
      onChange: e => handleUpdateRow(index, 'created_at', e.currentTarget.value)
    })), __jsx(TableCell_default.a, null))))));
  }, [simulationRoutes, rows]);
  return __jsx(external_react_default.a.Fragment, null, !loading && resultData());
}

/* harmony default export */ var SimulationResults = __webpack_exports__["default"] = (Index);

/***/ })

};;
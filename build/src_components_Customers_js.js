"use strict";
(self["webpackChunkbooking_calendar_2"] = self["webpackChunkbooking_calendar_2"] || []).push([["src_components_Customers_js"],{

/***/ "./src/components/Customers.js":
/*!*************************************!*\
  !*** ./src/components/Customers.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var material_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-react-table */ "./node_modules/material-react-table/dist/esm/material-react-table.esm.js");
/* harmony import */ var _custom_API__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom/API */ "./src/components/custom/API.js");
/* harmony import */ var _custom_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom/Spinner */ "./src/components/custom/Spinner.js");





class Customers extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      columns: [],
      isLoading: false
    };
  }
  componentDidMount() {
    this.setState({
      isLoading: true
    });
    _custom_API__WEBPACK_IMPORTED_MODULE_3__["default"].get('wpcb/customers').then(res => {
      let column_data = res.data.columns;
      let booking_data = Object.values(res.data.bookings);
      let tblColumns = [];
      let tblData = [];
      for (let key in column_data) {
        tblColumns.push({
          accessorKey: key,
          header: column_data[key]
        });
      }
      console.log(tblColumns);
      for (let _data of booking_data) {
        _data.is_registered = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
          className: 'fa fa-1-5x fa-circle-' + (_data.is_registered.status ? 'check text-success' : 'xmark text-danger')
        });
        tblData.push(_data);
      }
      this.setState({
        columns: tblColumns,
        data: tblData,
        isLoading: false
      });
    }).catch(err => {
      console.log('Error in retrieving of customers');
      console.log(err);
      this.setState({
        isLoading: true
      });
    });
  }
  render() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(material_react_table__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: this.state.data,
      columns: this.state.columns,
      state: {
        isLoading: this.state.isLoading
      },
      initialState: {
        density: 'compact'
      },
      enableHiding: false,
      enableFullScreenToggle: false
    }));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default().memo(Customers));

/***/ }),

/***/ "./src/components/custom/Spinner.js":
/*!******************************************!*\
  !*** ./src/components/custom/Spinner.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_windows_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/windows.png */ "./src/images/windows.png");


const Spinner = ({
  isVisible
}) => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'modal ' + (isVisible ? 'd-block' : ''),
    tabindex: "-1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "modal-dialog modal-dialog-centered w-100 text-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "modal-content modal-content bg-transparent border-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "modal-body"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    style: {
      backgroundColor: '#f6f6f6f7'
    },
    className: "w-24 p-3",
    src: _images_windows_png__WEBPACK_IMPORTED_MODULE_1__
  }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),

/***/ "./src/images/windows.png":
/*!********************************!*\
  !*** ./src/images/windows.png ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/windows.5c6b6a5a.png";

/***/ })

}]);
//# sourceMappingURL=src_components_Customers_js.js.map
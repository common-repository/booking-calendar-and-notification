"use strict";
(self["webpackChunkbooking_calendar_2"] = self["webpackChunkbooking_calendar_2"] || []).push([["src_components_Statistics_js"],{

/***/ "./src/components/Statistics.js":
/*!**************************************!*\
  !*** ./src/components/Statistics.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_API__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom/API */ "./src/components/custom/API.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/dist/index.js");
/* harmony import */ var _custom_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom/Spinner */ "./src/components/custom/Spinner.js");
/* harmony import */ var _custom_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom/Loading */ "./src/components/custom/Loading.js");







chart_js__WEBPACK_IMPORTED_MODULE_5__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_5__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_5__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_5__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_5__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_5__.Title, chart_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_5__.Legend);
class Statistics extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      showLoading: false,
      moStatistics: '',
      yrStatistics: '',
      monthlyTotal: 0,
      yearlyTotal: 0,
      summary: {
        daily: 0,
        weekly: 0,
        monthly: 0,
        yearly: 0
      },
      moConfig: {
        labels: [],
        datasets: [{
          label: 'Booking',
          data: [],
          borderColor: '#3f83f8',
          backgroundColor: '#3f83f878',
          pointStyle: 'circle',
          pointRadius: 8,
          pointHoverRadius: 10
        }]
      },
      yrConfig: {
        labels: [],
        datasets: [{
          label: 'Booking',
          data: [],
          borderColor: '#3f83f8',
          backgroundColor: '#3f83f878',
          pointStyle: 'circle',
          pointRadius: 8,
          pointHoverRadius: 10
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: false
          }
        }
      }
    };
  }
  componentDidMount() {
    this.setState({
      showLoading: true
    });
    _custom_API__WEBPACK_IMPORTED_MODULE_2__["default"].get('wpcb/statistics').then(res => {
      let statistics = res.data.statistics;
      let summary = res.data.summary;
      let moData = this.state.moConfig;
      for (let mo in statistics.monthly) {
        moData.labels.push(mo);
        moData.datasets[0].data.push(statistics.monthly[mo]);
      }
      let yrData = this.state.yrConfig;
      for (let yr in statistics.yearly) {
        yrData.labels.push(yr);
        yrData.datasets[0].data.push(statistics.yearly[yr]);
      }
      this.setState({
        showLoading: false,
        summary,
        moStatistics: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__.Line, {
          options: this.state.options,
          data: moData
        }),
        yrStatistics: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__.Line, {
          options: this.state.options,
          data: yrData
        }),
        monthlyTotal: res.data.monthly_total,
        yearlyTotal: res.data.yearly_total
      });
    }).catch(err => {
      console.log('Error in retrieving of statistics');
      console.log(err);
    });
  }
  render() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_custom_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {
      isVisible: this.state.showLoading
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'mt-2 p-4 ' + (this.state.showLoading ? 'd-none' : '')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "summary",
      className: "mb-5 pb-5"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "daily",
      className: "col-md-3 col-sm-6"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "data d-flex align-items-center p-3 rounded"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "icon flex-shrink-1 p-3 ms-1 me-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "fa fa-book text-center w-9"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      class: "label text-left"
    }, "Today"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      class: "count text-left"
    }, this.state.summary.daily, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "fa fa-caret-up"
    }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "weekly",
      className: "col-md-3 col-sm-6"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "data d-flex align-items-center p-3 rounded"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "icon flex-shrink-1 p-3 ms-1 me-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "fa fa-book text-center w-9"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      class: "label text-left"
    }, "This Week"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      class: "count text-left"
    }, this.state.summary.weekly, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "fa fa-caret-up"
    }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "monthly",
      className: "col-md-3 col-sm-6"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "data d-flex align-items-center p-3 rounded"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "icon flex-shrink-1 p-3 ms-1 me-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "fa fa-book text-center w-9"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      class: "label text-left"
    }, "This Month"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      class: "count text-left"
    }, this.state.summary.monthly, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "fa fa-caret-up"
    }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "yearly",
      className: "col-md-3 col-sm-6"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "data d-flex align-items-center p-3 rounded"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "icon flex-shrink-1 p-3 ms-1 me-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "fa fa-book text-center w-9"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      class: "label text-left"
    }, "This Year"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      class: "count text-left"
    }, this.state.summary.yearly, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "fa fa-caret-up"
    }))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "statistics",
      className: "mt-5"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-sm-6 p-2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shadow p-2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "text-center h6 mb-2"
    }, "MONTHLY"), this.state.moStatistics, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "text-center h6 mt-4"
    }, "TOTAL: ", this.state.monthlyTotal))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-sm-6 p-2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "shadow p-2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "text-center h6 mb-2"
    }, "YEARLY"), this.state.yrStatistics, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "text-center h6 mt-4"
    }, "TOTAL: ", this.state.yearlyTotal)))))));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Statistics);

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
//# sourceMappingURL=src_components_Statistics_js.js.map
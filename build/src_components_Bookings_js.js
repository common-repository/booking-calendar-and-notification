"use strict";
(self["webpackChunkbooking_calendar_2"] = self["webpackChunkbooking_calendar_2"] || []).push([["src_components_Bookings_js"],{

/***/ "./src/components/Bookings.js":
/*!************************************!*\
  !*** ./src/components/Bookings.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _custom_API__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom/API */ "./src/components/custom/API.js");
/* harmony import */ var material_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-react-table */ "./node_modules/material-react-table/dist/esm/material-react-table.esm.js");
/* harmony import */ var react_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-notifications */ "./node_modules/react-notifications/lib/index.js");
/* harmony import */ var _custom_Confirm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom/Confirm */ "./src/components/custom/Confirm.js");







const Bookings = () => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [columns, setColumns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [rowSelection, setRowSelection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const [selectedIds, setSelectedIds] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const [showConfirm, setShowConfirm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const confirmDeletion = ids => {
    setShowConfirm(false);
    deleteBookings(ids);
  };
  const deleteBookings = ids => {
    setIsLoading(true);
    _custom_API__WEBPACK_IMPORTED_MODULE_2__["default"].post('wpcb/delete_posts', {
      ids
    }).then(res => {
      setIsLoading(false);
      getBookingsData();
      react_notifications__WEBPACK_IMPORTED_MODULE_4__.NotificationManager.success('Delete successfully.');
      setSelectedIds([]);
      setRowSelection([]);
    }).catch(err => {
      console.log('Error in deteling calendar');
      console.log(err);
      setIsLoading(false);
    });
  };
  const deleteHandle = bookId => {
    setSelectedIds([bookId]);
    setShowConfirm(true);
  };
  const getBookingsData = () => {
    Promise.all([_custom_API__WEBPACK_IMPORTED_MODULE_2__["default"].get('wpcb/booking_list_columns'), _custom_API__WEBPACK_IMPORTED_MODULE_2__["default"].get('wpcb/bookings')]).then(res => {
      let cols = res[0].data;
      let bookings = res[1].data.bookings;
      let booking_ids = res[1].data.booking_ids;
      let _columns = [{
        accessorKey: 'actions',
        header: 'Actions',
        size: 1
      }];
      let _data = [];
      for (let col in cols) {
        _columns.push({
          accessorKey: col,
          header: cols[col],
          Cell: col == 'wpcb_booking_status' ? ({
            cell
          }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
            className: "badge bg-primary p-1 px-2"
          }, cell.getValue()) : ({
            cell
          }) => cell.getValue()
        });
      }
      for (let id of booking_ids) {
        let itemData = {
          id: id,
          actions: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
            to: '/booking/' + id,
            className: "text-secondary ",
            title: "Edit",
            style: {
              fontSize: '20px'
            }
          }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
            className: "fa fa-pencil"
          })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
            className: "text-danger mx-2",
            title: "Delete",
            role: "button",
            style: {
              fontSize: '20px'
            },
            onClick: () => deleteHandle(id)
          }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
            className: "fa fa-trash"
          })))
        };
        for (let key of Object.keys(bookings[id])) {
          let colData = bookings[id][key];
          if (key == 'booked_dates') {
            let newColData = colData.map((_date, idx) => {
              return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
                className: "rounded small booked-dates text-dark bg-light px-2"
              }, _date), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null));
            });
            colData = newColData;
          }
          itemData[key] = colData;
        }
        _data.push(itemData);
      }
      setColumns(_columns);
      setData(_data);
      setIsLoading(false);
    }).catch(err => {
      console.log('Error in bookings');
      console.log(err);
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    getBookingsData();
  }, []);
  const bulkDelete = () => {
    if (!selectedIds.length) {
      react_notifications__WEBPACK_IMPORTED_MODULE_4__.NotificationManager.error('Please select booking(s) to delete.');
      return false;
    }
    setShowConfirm(true);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "booking-list table-valign-top"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_custom_Confirm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isVisible: showConfirm,
    id: selectedIds,
    confirmAction: confirmDeletion,
    setVisibility: setShowConfirm,
    type: "booking(s)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_notifications__WEBPACK_IMPORTED_MODULE_4__.NotificationContainer, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(material_react_table__WEBPACK_IMPORTED_MODULE_3__["default"], {
    columns: columns,
    data: data,
    enableRowSelection: true,
    enableSelectAll: false,
    state: {
      rowSelection,
      isLoading: isLoading
    },
    initialState: {
      density: 'compact'
    },
    enableHiding: false,
    enableFullScreenToggle: false
    // getRowId={(originalRow) => originalRow.boodId}
    ,
    muiSelectCheckboxProps: tbl => ({
      // table items selected
      onClick: () => {
        let _selectedIds = selectedIds;
        let idx = tbl.row.id;
        let id = tbl.row.original.id;
        setRowSelection(prev => ({
          ...prev,
          [idx]: !prev[idx]
        }));
        if (_selectedIds.indexOf(id) != -1) {
          _selectedIds.splice(_selectedIds.indexOf(id), 1);
        } else {
          _selectedIds.push(id);
        }
        setSelectedIds(_selectedIds);
      },
      selected: () => {
        let row = tbl.row;
        rowSelection[row.id];
      },
      sx: {
        cursor: 'pointer'
      }
    }),
    renderTopToolbarCustomActions: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "btn btn-sm btn-danger",
      onClick: bulkDelete
    }, " Bulk Delete "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
      to: "/booking",
      className: "btn btn-sm btn-outline-primary ms-2",
      title: "New"
    }, "Add New ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "fa fa-plus"
    }))),
    renderBottomToolbarCustomActions: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "btn btn-sm btn-danger",
      onClick: bulkDelete
    }, "Bulk Delete")
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Bookings);

/***/ }),

/***/ "./src/components/custom/Confirm.js":
/*!******************************************!*\
  !*** ./src/components/custom/Confirm.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class Confirm extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'modal ' + (this.props.isVisible ? 'd-block' : ''),
      style: {
        backgroundColor: '#86868640'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "modal-dialog w-100 text-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "modal-content modal-content bg-white border-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
      className: "modal-header justify-content-start h5 m-0 border-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "fa fa-info-circle text-danger"
    }, "\xA0"), " Are you sure to delete selected ", this.props.type ? this.props.type : 'item', "?"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "modal-footer p-2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "button",
      class: "btn btn-outline-danger",
      "data-mdb-dismiss": "modal",
      onClick: () => this.props.setVisibility(false)
    }, "Cancel"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "button",
      class: "btn btn-danger confirm",
      onClick: () => this.props.confirmAction(this.props.id)
    }, "Confirm"))))));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Confirm);

/***/ })

}]);
//# sourceMappingURL=src_components_Bookings_js.js.map
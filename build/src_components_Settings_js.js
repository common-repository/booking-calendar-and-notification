"use strict";
(self["webpackChunkbooking_calendar_2"] = self["webpackChunkbooking_calendar_2"] || []).push([["src_components_Settings_js"],{

/***/ "./src/components/SettingShortcodes.js":
/*!*********************************************!*\
  !*** ./src/components/SettingShortcodes.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class SettingShortcodes extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);
  }
  render() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'card border-0 shadow xw-100 p-0 pb-2 ' + this.props.className
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-header h6 m-0"
    }, "Shortcode List"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-body p-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "table table-bordered m-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: "px-3"
    }, "Shortcode"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: "px-3"
    }, "Description"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, Object.values(this.props.shortcodes)?.map((section, idx) => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
        colSpan: 2,
        className: "fw-semibold text-center"
      }, section.heading)), Object.keys(section.fields)?.map((key, idx) => {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
          className: "px-3"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          style: {
            backgroundColor: '#dde1e5'
          },
          className: "p-1 rounded-1"
        }, key)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
          className: "px-3"
        }, section.fields[key]));
      }));
    })))));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (SettingShortcodes);

/***/ }),

/***/ "./src/components/Settings.js":
/*!************************************!*\
  !*** ./src/components/Settings.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_API__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom/API */ "./src/components/custom/API.js");
/* harmony import */ var _forms_SettingForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms/SettingForm */ "./src/components/forms/SettingForm.js");
/* harmony import */ var _SettingShortcodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SettingShortcodes */ "./src/components/SettingShortcodes.js");
/* harmony import */ var _custom_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom/Loading */ "./src/components/custom/Loading.js");







const Settings = () => {
  const [showLoading, setShowLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [fields, setFields] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const [sections, setSections] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const [activeMenu, setActiveMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('general');
  const [shortcodes, setShortcodes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const menuClick = e => {
    setActiveMenu(e.target.value);
  };
  const getSettingsData = () => {
    setShowLoading(true);
    _custom_API__WEBPACK_IMPORTED_MODULE_2__["default"].get('wpcb/setting_fields').then(res => {
      let data = res.data;
      setFields(data.fields);
      setSections(data.labels);
      setShortcodes(data.shortcodes);
      setShowLoading(false);
    }).catch(err => {
      console.log('Error in retrieving setting fields');
      console.log(err);
      setShowLoading(false);
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setShowLoading(true);
    getSettingsData();
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_custom_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isVisible: showLoading
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-12 col-md-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "card card-body bg-light h-100 min-vh-100 m-0 border-bottom border-light shadow rounded-0 p-0"
  }, Object.keys(sections)?.map((key, idx) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: idx
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "w-100 h6 m-0 p-3 border rounded-0 nav-link btn-outline-secondary " + (activeMenu == key ? 'bg-secondary text-white' : ''),
      value: key,
      onClick: e => menuClick(e)
    }, sections[key]));
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-12 col-md-10"
  }, Object.keys(fields)?.map((key, idx) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'row ' + (activeMenu == key ? '' : 'd-none'),
      key: idx
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-12 col-md-6"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_forms_SettingForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
      formData: fields[key],
      setting: key,
      getSettingsData: getSettingsData,
      setShowLoading: setShowLoading
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-12 col-md-6"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: key == 'general' ? '' : 'd-none'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card border-0 shadow pb-4 pt-2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
      className: "h4"
    }, "Our Services"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "border border-info p-3 rounded"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h6", {
      className: "h6 text-info"
    }, "Web Development"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "m-0"
    }, "We offer comprehensive web development services that are tailored to meet the unique need of your business.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "border border-info p-3 rounded mt-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h6", {
      className: "h6 text-info"
    }, "Plugin Development"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "m-0"
    }, "We have a competent WordPress plugin developer team with years of experience. Our team understands the bespoke client requisites to formulate a well-planned WordPress plugin development strategy from ideation to its execution and seamless integration with the website.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "border border-info p-3 rounded mt-3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h6", {
      className: "h6 text-info"
    }, "System Development"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "m-0"
    }, "We build applications to help your business become more efficient, innovative, and successful by providing solutions that are customized to your specific needs and challenges."))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card border-0 shadow pb-4 pt-2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
      className: "h4 mb-3"
    }, "Website & Contacts"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "mb-2"
    }, "Demo: ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://wpshiptrack.com/demo/booking/"
    }, "wpshiptrack.com/demo/booking")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "mb-2"
    }, "Skype: ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://join.skype.com/invite/qewWsgXncsLk"
    }, "Booking Calendy")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "mb-2"
    }, "Email: ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "mailto:bookingcalendy@gmail.com"
    }, "bookingcalendy@gmail.com")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SettingShortcodes__WEBPACK_IMPORTED_MODULE_4__["default"], {
      shortcodes: shortcodes,
      className: ['email_client', 'email_admin'].includes(key) ? '' : 'd-none'
    })));
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ }),

/***/ "./src/components/forms/SettingForm.js":
/*!*********************************************!*\
  !*** ./src/components/forms/SettingForm.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_GenField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../custom/GenField */ "./src/components/custom/GenField.js");
/* harmony import */ var _custom_API__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom/API */ "./src/components/custom/API.js");
/* harmony import */ var react_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-notifications */ "./node_modules/react-notifications/lib/index.js");





class SettingForm extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      formData: this.props.formData
    };
    this.setFieldValue = this.setFieldValue.bind(this);
    this.submitHandle = this.submitHandle.bind(this);
  }
  submitHandle(e) {
    e.preventDefault();
    this.props.setShowLoading(true);
    let formFields = {};
    for (let section of this.state.formData) {
      for (let field of section.fields) {
        formFields[field.key] = field.value;
      }
    }
    _custom_API__WEBPACK_IMPORTED_MODULE_3__["default"].post('wpcb/save_setting', {
      setting: this.props.setting,
      fields_data: formFields
    }).then(res => {
      this.props.setShowLoading(false);
      this.props.getSettingsData();
      react_notifications__WEBPACK_IMPORTED_MODULE_4__.NotificationManager.success('Save successfully.');
    }).catch(err => {
      console.log('Error in setting form submission');
      console.log(err);
    });
  }
  setFieldValue(key, value) {
    if (key == 'width') {
      console.log('setFieldValue: ' + value);
    }
    let formData = this.state.formData;
    for (let s_idx in formData) {
      for (let f_idx in formData[s_idx].fields) {
        let field = formData[s_idx].fields[f_idx];
        if (field.key == key) {
          field.value = value;
          if (field.options && typeof value == 'object' && Object.values(field.options).length < Object.values(value).length && field.type == 'select' && field.multiple) {
            field.options = value;
          }
        }
      }
    }
    this.setState({
      formData
    });
  }
  render() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_notifications__WEBPACK_IMPORTED_MODULE_4__.NotificationContainer, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
      onSubmit: this.submitHandle
    }, this.state.formData?.map((section, idx) => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: 'card border-0 shadow p-0 xw-100 ' + this.props.className,
        key: idx
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: 'card-header h6 ' + (section.hasOwnProperty('heading') ? '' : 'd-none')
      }, section.heading), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "card-body"
      }, section.fields?.map((field, idx) => {
        if (field.hasOwnProperty('show_in_form') && !field.show_in_form) {
          return false;
        }
        // Append Calendar Width
        let addFieldHtml = '';
        if (field.key == 'day_name_font_size') {
          let wField = {};
          let uField = {};
          for (let _section of this.state.formData) {
            for (let _field of _section.fields) {
              if (_field.key == 'width') {
                wField = _field;
              } else if (_field.key == 'width_unit') {
                uField = _field;
              }
            }
          }
          let html = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
            className: "mb-2"
          }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
            className: "form-label mb-1 fw-semibold"
          }, "Width"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
            className: "d-flex"
          }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_custom_GenField__WEBPACK_IMPORTED_MODULE_2__["default"], {
            field: wField,
            setFieldValue: this.setFieldValue
          }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_custom_GenField__WEBPACK_IMPORTED_MODULE_2__["default"], {
            field: uField,
            setFieldValue: this.setFieldValue
          })));
          addFieldHtml = html;
        }
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, addFieldHtml, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          key: idx,
          className: "mb-2"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
          className: "form-label mb-1 fw-semibold"
        }, field.label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
          className: "small text-muted m-0",
          dangerouslySetInnerHTML: {
            __html: field.description
          }
        }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_custom_GenField__WEBPACK_IMPORTED_MODULE_2__["default"], {
          field: field,
          setFieldValue: this.setFieldValue
        })));
      })));
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card card-body border-0 shadow p-0 mb-4 xw-100"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "btn btn-primary w-100"
    }, "Save Setting"))));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (SettingForm);

/***/ })

}]);
//# sourceMappingURL=src_components_Settings_js.js.map
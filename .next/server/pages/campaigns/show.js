(function() {
var exports = {};
exports.id = "pages/campaigns/show";
exports.ids = ["pages/campaigns/show"];
exports.modules = {

/***/ "./components/ContributeForm.js":
/*!**************************************!*\
  !*** ./components/ContributeForm.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/campaign */ "./ethereum/campaign.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\yash\\Desktop\\Study\\kickstart\\components\\ContributeForm.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class ContributeForm extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      value: "",
      errorMessage: "",
      loading: false
    });

    _defineProperty(this, "onSubmit", async event => {
      event.preventDefault();
      const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__.default)(this.props.address);
      this.setState({
        loading: true,
        errorMessage: ""
      });

      try {
        const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__.default.eth.getAccounts();
        await campaign.methods.contribute().send({
          from: accounts[0],
          value: _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__.default.utils.toWei(this.state.value, "ether")
        });
        _routes__WEBPACK_IMPORTED_MODULE_5__.Router.replaceRoute(`/campaigns/${this.props.address}`);
      } catch (err) {
        this.setState({
          errorMessage: err.message
        });
      }

      this.setState({
        loading: false,
        value: ''
      });
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
      onSubmit: this.onSubmit,
      error: !!this.state.errorMessage,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: "Amount to Contribute"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
          value: this.state.value,
          onChange: event => this.setState({
            value: event.target.value
          }),
          label: "ether",
          labelPosition: "right"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
        error: true,
        header: "Oops!",
        content: this.state.errorMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
        primary: true,
        loading: this.state.loading,
        children: "Contribute!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ContributeForm);

/***/ }),

/***/ "./pages/campaigns/show.js":
/*!*********************************!*\
  !*** ./pages/campaigns/show.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/campaign */ "./ethereum/campaign.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _components_ContributeForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ContributeForm */ "./components/ContributeForm.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\yash\\Desktop\\Study\\kickstart\\pages\\campaigns\\show.js";








class CampaignShow extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static async getInitialProps(props) {
    const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__.default)(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;
    const items = [{
      header: manager,
      meta: "Address of Manager",
      description: "The manager created this campaign and can create requests to withdraw money",
      style: {
        overflowWrap: "break-word"
      }
    }, {
      header: minimumContribution,
      meta: "Minimum Contribution (wei)",
      description: "You must contribute at least this much wei to become an approver"
    }, {
      header: requestsCount,
      meta: "Number of Requests",
      description: "A request tries to withdraw money from the contract. Requests must be approved by approvers"
    }, {
      header: approversCount,
      meta: "Number of Approvers",
      description: "Number of people who have already donated to this campaign"
    }, {
      header: _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__.default.utils.fromWei(balance, "ether"),
      meta: "Campaign Balance (ether)",
      description: "The balance is how much money this campaign has left to spend."
    }];
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Group, {
      items: items
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 12
    }, this);
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Campaign Show"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Row, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
            width: 10,
            children: this.renderCards()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
            width: 6,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContributeForm__WEBPACK_IMPORTED_MODULE_6__.default, {
              address: this.props.address
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Row, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_7__.Link, {
              route: `/campaigns/${this.props.address}/requests`,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                  primary: true,
                  children: "View Requests"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CampaignShow);

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-routes");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("web3");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_Layout_js-ethereum_campaign_js"], function() { return __webpack_exec__("./pages/campaigns/show.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtLmpzIiwid2VicGFjazovL2tpY2tzdGFydC8uL3BhZ2VzL2NhbXBhaWducy9zaG93LmpzIiwid2VicGFjazovL2tpY2tzdGFydC9leHRlcm5hbCBcIm5leHQtcm91dGVzXCIiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9raWNrc3RhcnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9raWNrc3RhcnQvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIiwid2VicGFjazovL2tpY2tzdGFydC9leHRlcm5hbCBcIndlYjNcIiJdLCJuYW1lcyI6WyJDb250cmlidXRlRm9ybSIsIkNvbXBvbmVudCIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjYW1wYWlnbiIsIkNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwic2V0U3RhdGUiLCJhY2NvdW50cyIsIndlYjMiLCJtZXRob2RzIiwiY29udHJpYnV0ZSIsInNlbmQiLCJmcm9tIiwic3RhdGUiLCJSb3V0ZXIiLCJlcnIiLCJtZXNzYWdlIiwicmVuZGVyIiwib25TdWJtaXQiLCJ0YXJnZXQiLCJDYW1wYWlnblNob3ciLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsInN1bW1hcnkiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsIm1pbmltdW1Db250cmlidXRpb24iLCJiYWxhbmNlIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwibWFuYWdlciIsInJlbmRlckNhcmRzIiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNB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Q0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2NhbXBhaWducy9zaG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgTWVzc2FnZSwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vZXRoZXJldW0vY2FtcGFpZ25cIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uL2V0aGVyZXVtL3dlYjNcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vcm91dGVzJztcclxuXHJcbmNsYXNzIENvbnRyaWJ1dGVGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgZXJyb3JNZXNzYWdlOiBcIlwiLFxyXG4gICAgbG9hZGluZzogZmFsc2VcclxuICB9O1xyXG5cclxuICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHRoaXMucHJvcHMuYWRkcmVzcyk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiBcIlwiIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmNvbnRyaWJ1dGUoKS5zZW5kKHtcclxuICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcclxuICAgICAgICB2YWx1ZTogd2ViMy51dGlscy50b1dlaSh0aGlzLnN0YXRlLnZhbHVlLCBcImV0aGVyXCIpLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFJvdXRlci5yZXBsYWNlUm91dGUoYC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmFkZHJlc3N9YClcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOmZhbHNlLCB2YWx1ZTogJycgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cclxuICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgIDxsYWJlbD5BbW91bnQgdG8gQ29udHJpYnV0ZTwvbGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICBsYWJlbD1cImV0aGVyXCJcclxuICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vcHMhXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XHJcbiAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30+Q29udHJpYnV0ZSE8L0J1dHRvbj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRyaWJ1dGVGb3JtO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENhcmQsIEdyaWQsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uLy4uL2V0aGVyZXVtL2NhbXBhaWduXCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi9ldGhlcmV1bS93ZWIzXCI7XHJcbmltcG9ydCBDb250cmlidXRlRm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybVwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uLy4uL3JvdXRlc1wiO1xyXG5cclxuY2xhc3MgQ2FtcGFpZ25TaG93IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XHJcbiAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xyXG5cclxuICAgIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYWRkcmVzczogcHJvcHMucXVlcnkuYWRkcmVzcyxcclxuICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbjogc3VtbWFyeVswXSxcclxuICAgICAgYmFsYW5jZTogc3VtbWFyeVsxXSxcclxuICAgICAgcmVxdWVzdHNDb3VudDogc3VtbWFyeVsyXSxcclxuICAgICAgYXBwcm92ZXJzQ291bnQ6IHN1bW1hcnlbM10sXHJcbiAgICAgIG1hbmFnZXI6IHN1bW1hcnlbNF0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ2FyZHMoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGJhbGFuY2UsXHJcbiAgICAgIG1hbmFnZXIsXHJcbiAgICAgIG1pbmltdW1Db250cmlidXRpb24sXHJcbiAgICAgIHJlcXVlc3RzQ291bnQsXHJcbiAgICAgIGFwcHJvdmVyc0NvdW50LFxyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IG1hbmFnZXIsXHJcbiAgICAgICAgbWV0YTogXCJBZGRyZXNzIG9mIE1hbmFnZXJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiVGhlIG1hbmFnZXIgY3JlYXRlZCB0aGlzIGNhbXBhaWduIGFuZCBjYW4gY3JlYXRlIHJlcXVlc3RzIHRvIHdpdGhkcmF3IG1vbmV5XCIsXHJcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiBtaW5pbXVtQ29udHJpYnV0aW9uLFxyXG4gICAgICAgIG1ldGE6IFwiTWluaW11bSBDb250cmlidXRpb24gKHdlaSlcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiWW91IG11c3QgY29udHJpYnV0ZSBhdCBsZWFzdCB0aGlzIG11Y2ggd2VpIHRvIGJlY29tZSBhbiBhcHByb3ZlclwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiByZXF1ZXN0c0NvdW50LFxyXG4gICAgICAgIG1ldGE6IFwiTnVtYmVyIG9mIFJlcXVlc3RzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIkEgcmVxdWVzdCB0cmllcyB0byB3aXRoZHJhdyBtb25leSBmcm9tIHRoZSBjb250cmFjdC4gUmVxdWVzdHMgbXVzdCBiZSBhcHByb3ZlZCBieSBhcHByb3ZlcnNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogYXBwcm92ZXJzQ291bnQsXHJcbiAgICAgICAgbWV0YTogXCJOdW1iZXIgb2YgQXBwcm92ZXJzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIk51bWJlciBvZiBwZW9wbGUgd2hvIGhhdmUgYWxyZWFkeSBkb25hdGVkIHRvIHRoaXMgY2FtcGFpZ25cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogd2ViMy51dGlscy5mcm9tV2VpKGJhbGFuY2UsIFwiZXRoZXJcIiksXHJcbiAgICAgICAgbWV0YTogXCJDYW1wYWlnbiBCYWxhbmNlIChldGhlcilcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiVGhlIGJhbGFuY2UgaXMgaG93IG11Y2ggbW9uZXkgdGhpcyBjYW1wYWlnbiBoYXMgbGVmdCB0byBzcGVuZC5cIixcclxuICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMz5DYW1wYWlnbiBTaG93PC9oMz5cclxuICAgICAgICA8R3JpZD5cclxuICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMH0+e3RoaXMucmVuZGVyQ2FyZHMoKX08L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezZ9PlxyXG4gICAgICAgICAgICAgIDxDb250cmlidXRlRm9ybSBhZGRyZXNzPXt0aGlzLnByb3BzLmFkZHJlc3N9IC8+XHJcbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICA8L0dyaWQuUm93PlxyXG5cclxuICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHNgfT5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnk+VmlldyBSZXF1ZXN0czwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnblNob3c7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcm91dGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2ViM1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==
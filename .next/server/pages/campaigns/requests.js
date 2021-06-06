(function() {
var exports = {};
exports.id = "pages/campaigns/requests";
exports.ids = ["pages/campaigns/requests"];
exports.modules = {

/***/ "./components/RequestRow.js":
/*!**********************************!*\
  !*** ./components/RequestRow.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/campaign */ "./ethereum/campaign.js");

var _jsxFileName = "C:\\Users\\yash\\Desktop\\Study\\kickstart\\components\\RequestRow.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class RequestRow extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onApprove", async () => {
      const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__.default)(this.props.address);
      const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__.default.eth.getAccounts();
      await campaign.methods.approveRequest(this.props.id).send({
        from: accounts[0]
      });
    });

    _defineProperty(this, "onFinalize", async () => {
      const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__.default)(this.props.address);
      const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__.default.eth.getAccounts();
      await campaign.methods.finalizeRequest(this.props.id).send({
        from: accounts[0]
      });
    });
  }

  render() {
    const {
      Row,
      Cell
    } = semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table;
    const {
      id,
      request,
      approversCount
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {
      disabled: request.complete,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
        children: id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
        children: request.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
        children: _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__.default.utils.fromWei(request.value, "ether")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
        children: request.recipient
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
        children: [request.approvalCount, "/", approversCount]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
        children: request.complete ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          color: "green",
          basic: true,
          onClick: this.onApprove,
          children: "Approve"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
        children: request.complete ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          primary: true,
          onClick: this.onFinalize,
          children: "Finalize"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (RequestRow);

/***/ }),

/***/ "./pages/campaigns/requests/index.js":
/*!*******************************************!*\
  !*** ./pages/campaigns/requests/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ethereum/campaign */ "./ethereum/campaign.js");
/* harmony import */ var _components_RequestRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/RequestRow */ "./components/RequestRow.js");

var _jsxFileName = "C:\\Users\\yash\\Desktop\\Study\\kickstart\\pages\\campaigns\\requests\\index.js";







class RequestIndex extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static async getInitialProps(props) {
    const {
      address
    } = props.query;
    const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__.default)(address);
    const requestCount = await campaign.methods.getRequestsCount().call();
    const approversCount = await campaign.methods.approversCount().call();
    const requests = await Promise.all(Array(parseInt(requestCount)).fill().map((element, index) => {
      return campaign.methods.requests(index).call();
    }));
    return {
      address,
      requests,
      requestCount,
      approversCount
    };
  }

  renderRows() {
    return this.props.requests.map((request, index) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequestRow__WEBPACK_IMPORTED_MODULE_6__.default, {
        id: index,
        request: request,
        address: this.props.address,
        approversCount: this.props.approversCount
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this);
    });
  }

  render() {
    const {
      Header,
      Row,
      HeaderCell,
      Body
    } = semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Requests"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_3__.Link, {
        route: `/campaigns/${this.props.address}/requests/new`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
            primary: true,
            children: "Add Request"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Table, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {
              children: "ID"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {
              children: "Description"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {
              children: "Amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {
              children: "Recipient"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {
              children: "Approval Count"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {
              children: "Approve"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {
              children: "Finalize"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Body, {
          children: this.renderRows()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (RequestIndex);

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
var __webpack_exports__ = __webpack_require__.X(0, ["components_Layout_js-ethereum_campaign_js"], function() { return __webpack_exec__("./pages/campaigns/requests/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanMiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0Ly4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL2luZGV4LmpzIiwid2VicGFjazovL2tpY2tzdGFydC9leHRlcm5hbCBcIm5leHQtcm91dGVzXCIiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9raWNrc3RhcnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9raWNrc3RhcnQvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIiwid2VicGFjazovL2tpY2tzdGFydC9leHRlcm5hbCBcIndlYjNcIiJdLCJuYW1lcyI6WyJSZXF1ZXN0Um93IiwiQ29tcG9uZW50IiwiY2FtcGFpZ24iLCJDYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImFjY291bnRzIiwid2ViMyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJmaW5hbGl6ZVJlcXVlc3QiLCJyZW5kZXIiLCJSb3ciLCJDZWxsIiwiVGFibGUiLCJyZXF1ZXN0IiwiYXBwcm92ZXJzQ291bnQiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwidmFsdWUiLCJyZWNpcGllbnQiLCJhcHByb3ZhbENvdW50Iiwib25BcHByb3ZlIiwib25GaW5hbGl6ZSIsIlJlcXVlc3RJbmRleCIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwicmVxdWVzdENvdW50IiwiZ2V0UmVxdWVzdHNDb3VudCIsImNhbGwiLCJyZXF1ZXN0cyIsIlByb21pc2UiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsInJlbmRlclJvd3MiLCJIZWFkZXIiLCJIZWFkZXJDZWxsIiwiQm9keSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsVUFBTixTQUF5QkMsNENBQXpCLENBQW1DO0FBQUE7QUFBQTs7QUFBQSx1Q0FDbkIsWUFBWTtBQUNwQixZQUFNQyxRQUFRLEdBQUdDLDJEQUFRLENBQUMsS0FBS0MsS0FBTCxDQUFXQyxPQUFaLENBQXpCO0FBQ0EsWUFBTUMsUUFBUSxHQUFHLE1BQU1DLG1FQUFBLEVBQXZCO0FBQ0EsWUFBTUwsUUFBUSxDQUFDTSxPQUFULENBQWlCQyxjQUFqQixDQUFnQyxLQUFLTCxLQUFMLENBQVdNLEVBQTNDLEVBQStDQyxJQUEvQyxDQUFvRDtBQUN0REMsWUFBSSxFQUFFTixRQUFRLENBQUMsQ0FBRDtBQUR3QyxPQUFwRCxDQUFOO0FBR0gsS0FQOEI7O0FBQUEsd0NBUWxCLFlBQVk7QUFDckIsWUFBTUosUUFBUSxHQUFHQywyREFBUSxDQUFDLEtBQUtDLEtBQUwsQ0FBV0MsT0FBWixDQUF6QjtBQUNBLFlBQU1DLFFBQVEsR0FBRyxNQUFNQyxtRUFBQSxFQUF2QjtBQUNBLFlBQU1MLFFBQVEsQ0FBQ00sT0FBVCxDQUFpQkssZUFBakIsQ0FBaUMsS0FBS1QsS0FBTCxDQUFXTSxFQUE1QyxFQUFnREMsSUFBaEQsQ0FBcUQ7QUFDdkRDLFlBQUksRUFBRU4sUUFBUSxDQUFDLENBQUQ7QUFEeUMsT0FBckQsQ0FBTjtBQUdILEtBZDhCO0FBQUE7O0FBZWpDUSxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUVDLFNBQUY7QUFBT0M7QUFBUCxRQUFnQkMsb0RBQXRCO0FBQ0EsVUFBTTtBQUFFUCxRQUFGO0FBQU1RLGFBQU47QUFBZUM7QUFBZixRQUFrQyxLQUFLZixLQUE3QztBQUVBLHdCQUNFLDhEQUFDLEdBQUQ7QUFBSyxjQUFRLEVBQUVjLE9BQU8sQ0FBQ0UsUUFBdkI7QUFBQSw4QkFDRSw4REFBQyxJQUFEO0FBQUEsa0JBQU9WO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsSUFBRDtBQUFBLGtCQUFPUSxPQUFPLENBQUNHO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0UsOERBQUMsSUFBRDtBQUFBLGtCQUFPZCxpRUFBQSxDQUFtQlcsT0FBTyxDQUFDSSxLQUEzQixFQUFrQyxPQUFsQztBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQUlFLDhEQUFDLElBQUQ7QUFBQSxrQkFBT0osT0FBTyxDQUFDSztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQUtFLDhEQUFDLElBQUQ7QUFBQSxtQkFBT0wsT0FBTyxDQUFDTSxhQUFmLE9BQStCTCxjQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQU1FLDhEQUFDLElBQUQ7QUFBQSxrQkFDS0QsT0FBTyxDQUFDRSxRQUFSLEdBQW1CLElBQW5CLGdCQUNELDhEQUFDLHFEQUFEO0FBQVEsZUFBSyxFQUFDLE9BQWQ7QUFBc0IsZUFBSyxNQUEzQjtBQUE0QixpQkFBTyxFQUFFLEtBQUtLLFNBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBYUUsOERBQUMsSUFBRDtBQUFBLGtCQUNDUCxPQUFPLENBQUNFLFFBQVIsR0FBbUIsSUFBbkIsZ0JBQ0csOERBQUMscURBQUQ7QUFBUSxpQkFBTyxNQUFmO0FBQWdCLGlCQUFPLEVBQUUsS0FBS00sVUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFxQkQ7O0FBeENnQzs7QUEyQ25DLCtEQUFlMUIsVUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNMkIsWUFBTixTQUEyQjFCLDRDQUEzQixDQUFxQztBQUNuQyxlQUFhMkIsZUFBYixDQUE2QnhCLEtBQTdCLEVBQW9DO0FBQ2xDLFVBQU07QUFBRUM7QUFBRixRQUFjRCxLQUFLLENBQUN5QixLQUExQjtBQUNBLFVBQU0zQixRQUFRLEdBQUdDLDJEQUFRLENBQUNFLE9BQUQsQ0FBekI7QUFDQSxVQUFNeUIsWUFBWSxHQUFHLE1BQU01QixRQUFRLENBQUNNLE9BQVQsQ0FBaUJ1QixnQkFBakIsR0FBb0NDLElBQXBDLEVBQTNCO0FBQ0EsVUFBTWIsY0FBYyxHQUFHLE1BQU1qQixRQUFRLENBQUNNLE9BQVQsQ0FBaUJXLGNBQWpCLEdBQWtDYSxJQUFsQyxFQUE3QjtBQUVBLFVBQU1DLFFBQVEsR0FBRyxNQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FDckJDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDUCxZQUFELENBQVQsQ0FBTCxDQUNHUSxJQURILEdBRUdDLEdBRkgsQ0FFTyxDQUFDQyxPQUFELEVBQVVDLEtBQVYsS0FBb0I7QUFDdkIsYUFBT3ZDLFFBQVEsQ0FBQ00sT0FBVCxDQUFpQnlCLFFBQWpCLENBQTBCUSxLQUExQixFQUFpQ1QsSUFBakMsRUFBUDtBQUNELEtBSkgsQ0FEcUIsQ0FBdkI7QUFPQSxXQUFPO0FBQUUzQixhQUFGO0FBQVc0QixjQUFYO0FBQXFCSCxrQkFBckI7QUFBbUNYO0FBQW5DLEtBQVA7QUFDRDs7QUFFRHVCLFlBQVUsR0FBRztBQUNYLFdBQU8sS0FBS3RDLEtBQUwsQ0FBVzZCLFFBQVgsQ0FBb0JNLEdBQXBCLENBQXdCLENBQUNyQixPQUFELEVBQVV1QixLQUFWLEtBQW9CO0FBQ2pELDBCQUNFLDhEQUFDLDJEQUFEO0FBRUUsVUFBRSxFQUFFQSxLQUZOO0FBR0UsZUFBTyxFQUFFdkIsT0FIWDtBQUlFLGVBQU8sRUFBRSxLQUFLZCxLQUFMLENBQVdDLE9BSnRCO0FBS0Usc0JBQWMsRUFBRSxLQUFLRCxLQUFMLENBQVdlO0FBTDdCLFNBQ09zQixLQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQVNELEtBVk0sQ0FBUDtBQVdEOztBQUVEM0IsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFFNkIsWUFBRjtBQUFVNUIsU0FBVjtBQUFlNkIsZ0JBQWY7QUFBMkJDO0FBQTNCLFFBQW9DNUIsb0RBQTFDO0FBQ0Esd0JBQ0UsOERBQUMsdURBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMseUNBQUQ7QUFBTSxhQUFLLEVBQUcsY0FBYSxLQUFLYixLQUFMLENBQVdDLE9BQVEsZUFBOUM7QUFBQSwrQkFDRTtBQUFBLGlDQUNFLDhEQUFDLHFEQUFEO0FBQVEsbUJBQU8sTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFPRSw4REFBQyxvREFBRDtBQUFBLGdDQUNFLDhEQUFDLE1BQUQ7QUFBQSxpQ0FDRSw4REFBQyxHQUFEO0FBQUEsb0NBQ0UsOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFLDhEQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkYsZUFHRSw4REFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhGLGVBSUUsOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRixlQUtFLDhEQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTEYsZUFNRSw4REFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5GLGVBT0UsOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBWUUsOERBQUMsSUFBRDtBQUFBLG9CQUFPLEtBQUtxQyxVQUFMO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQXdCRDs7QUF6RGtDOztBQTREckMsK0RBQWVmLFlBQWYsRTs7Ozs7Ozs7Ozs7QUNuRUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUYWJsZSwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi9ldGhlcmV1bS93ZWIzXCI7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vZXRoZXJldW0vY2FtcGFpZ25cIjtcclxuXHJcbmNsYXNzIFJlcXVlc3RSb3cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgb25BcHByb3ZlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24odGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5hcHByb3ZlUmVxdWVzdCh0aGlzLnByb3BzLmlkKS5zZW5kKHtcclxuICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBvbkZpbmFsaXplID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24odGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5maW5hbGl6ZVJlcXVlc3QodGhpcy5wcm9wcy5pZCkuc2VuZCh7XHJcbiAgICAgICAgICAgIGZyb206IGFjY291bnRzWzBdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgUm93LCBDZWxsIH0gPSBUYWJsZTtcclxuICAgIGNvbnN0IHsgaWQsIHJlcXVlc3QsIGFwcHJvdmVyc0NvdW50IH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSb3cgZGlzYWJsZWQ9e3JlcXVlc3QuY29tcGxldGV9PlxyXG4gICAgICAgIDxDZWxsPntpZH08L0NlbGw+XHJcbiAgICAgICAgPENlbGw+e3JlcXVlc3QuZGVzY3JpcHRpb259PC9DZWxsPlxyXG4gICAgICAgIDxDZWxsPnt3ZWIzLnV0aWxzLmZyb21XZWkocmVxdWVzdC52YWx1ZSwgXCJldGhlclwiKX08L0NlbGw+XHJcbiAgICAgICAgPENlbGw+e3JlcXVlc3QucmVjaXBpZW50fTwvQ2VsbD5cclxuICAgICAgICA8Q2VsbD57cmVxdWVzdC5hcHByb3ZhbENvdW50fS97YXBwcm92ZXJzQ291bnR9PC9DZWxsPlxyXG4gICAgICAgIDxDZWxsPlxyXG4gICAgICAgICAgICB7cmVxdWVzdC5jb21wbGV0ZSA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJncmVlblwiIGJhc2ljIG9uQ2xpY2s9e3RoaXMub25BcHByb3ZlfT5cclxuICAgICAgICAgICAgICAgIEFwcHJvdmVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvQ2VsbD5cclxuICAgICAgICA8Q2VsbD5cclxuICAgICAgICB7cmVxdWVzdC5jb21wbGV0ZSA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBvbkNsaWNrPXt0aGlzLm9uRmluYWxpemV9PkZpbmFsaXplPC9CdXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvQ2VsbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFJvdztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIFRhYmxlIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vLi4vLi4vcm91dGVzXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vLi4vLi4vZXRoZXJldW0vY2FtcGFpZ25cIjtcclxuaW1wb3J0IFJlcXVlc3RSb3cgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvUmVxdWVzdFJvd1wiO1xyXG5cclxuY2xhc3MgUmVxdWVzdEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XHJcbiAgICBjb25zdCB7IGFkZHJlc3MgfSA9IHByb3BzLnF1ZXJ5O1xyXG4gICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihhZGRyZXNzKTtcclxuICAgIGNvbnN0IHJlcXVlc3RDb3VudCA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0UmVxdWVzdHNDb3VudCgpLmNhbGwoKTtcclxuICAgIGNvbnN0IGFwcHJvdmVyc0NvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5hcHByb3ZlcnNDb3VudCgpLmNhbGwoKTtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICBBcnJheShwYXJzZUludChyZXF1ZXN0Q291bnQpKVxyXG4gICAgICAgIC5maWxsKClcclxuICAgICAgICAubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGNhbXBhaWduLm1ldGhvZHMucmVxdWVzdHMoaW5kZXgpLmNhbGwoKTtcclxuICAgICAgICB9KVxyXG4gICAgKTtcclxuICAgIHJldHVybiB7IGFkZHJlc3MsIHJlcXVlc3RzLCByZXF1ZXN0Q291bnQsIGFwcHJvdmVyc0NvdW50IH07XHJcbiAgfVxyXG5cclxuICByZW5kZXJSb3dzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMucmVxdWVzdHMubWFwKChyZXF1ZXN0LCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZXF1ZXN0Um93XHJcbiAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgaWQ9e2luZGV4fVxyXG4gICAgICAgICAgcmVxdWVzdD17cmVxdWVzdH1cclxuICAgICAgICAgIGFkZHJlc3M9e3RoaXMucHJvcHMuYWRkcmVzc31cclxuICAgICAgICAgIGFwcHJvdmVyc0NvdW50PXt0aGlzLnByb3BzLmFwcHJvdmVyc0NvdW50fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgSGVhZGVyLCBSb3csIEhlYWRlckNlbGwsIEJvZHkgfSA9IFRhYmxlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8aDM+UmVxdWVzdHM8L2gzPlxyXG4gICAgICAgIDxMaW5rIHJvdXRlPXtgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHMvbmV3YH0+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PkFkZCBSZXF1ZXN0PC9CdXR0b24+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxUYWJsZT5cclxuICAgICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgPEhlYWRlckNlbGw+SUQ8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgICAgPEhlYWRlckNlbGw+RGVzY3JpcHRpb248L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgICAgPEhlYWRlckNlbGw+QW1vdW50PC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgIDxIZWFkZXJDZWxsPlJlY2lwaWVudDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5BcHByb3ZhbCBDb3VudDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5BcHByb3ZlPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkZpbmFsaXplPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgPEJvZHk+e3RoaXMucmVuZGVyUm93cygpfTwvQm9keT5cclxuICAgICAgICA8L1RhYmxlPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0SW5kZXg7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcm91dGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2ViM1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==
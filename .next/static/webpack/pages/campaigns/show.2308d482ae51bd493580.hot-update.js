self["webpackHotUpdate_N_E"]("pages/campaigns/show",{

/***/ "./pages/campaigns/show.js":
/*!*********************************!*\
  !*** ./pages/campaigns/show.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_yash_Desktop_Study_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_yash_Desktop_Study_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_yash_Desktop_Study_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_yash_Desktop_Study_kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_yash_Desktop_Study_kickstart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_yash_Desktop_Study_kickstart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_yash_Desktop_Study_kickstart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_yash_Desktop_Study_kickstart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_yash_Desktop_Study_kickstart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ethereum/campaign */ "./ethereum/campaign.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _components_ContributeForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/ContributeForm */ "./components/ContributeForm.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_13__);
/* module decorator */ module = __webpack_require__.hmd(module);








var _jsxFileName = "C:\\Users\\yash\\Desktop\\Study\\kickstart\\pages\\campaigns\\show.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_yash_Desktop_Study_kickstart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_yash_Desktop_Study_kickstart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_yash_Desktop_Study_kickstart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var CampaignShow = /*#__PURE__*/function (_Component) {
  (0,C_Users_yash_Desktop_Study_kickstart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.default)(CampaignShow, _Component);

  var _super = _createSuper(CampaignShow);

  function CampaignShow() {
    (0,C_Users_yash_Desktop_Study_kickstart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, CampaignShow);

    return _super.apply(this, arguments);
  }

  (0,C_Users_yash_Desktop_Study_kickstart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(CampaignShow, [{
    key: "renderCards",
    value: function renderCards() {
      var _this$props = this.props,
          balance = _this$props.balance,
          manager = _this$props.manager,
          minimumContribution = _this$props.minimumContribution,
          requestsCount = _this$props.requestsCount,
          approversCount = _this$props.approversCount;
      var items = [{
        header: manager,
        meta: 'Address of Manager',
        description: 'The manager created this campaign and can create withdraw requests.',
        style: {
          overflowWrap: 'break-word'
        }
      }, {
        header: _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__.default.utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance (ether)',
        description: 'This is the current balance of the campaign.',
        style: {
          overflowWrap: 'break-word'
        }
      }, {
        header: minimumContribution,
        meta: 'Minimum Contribution',
        description: 'This is the minimum amount of wei required to become a backer.',
        style: {
          overflowWrap: 'break-word'
        }
      }, {
        header: approversCount,
        meta: 'Number of Approvers',
        description: 'Number of approvers',
        style: {
          overflowWrap: 'break-word'
        }
      }, {
        header: requestsCount,
        meta: 'Number of Requests',
        description: 'The number of withdraw requests created by the manager.',
        style: {
          overflowWrap: 'break-word'
        }
      }];
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Card.Group, {
        items: items
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 16
      }, this);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_9__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
          children: " Campaign Show"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Grid, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Grid.Column, {
            width: 10,
            children: [this.renderCards(), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_13__.Link, {
              route: "/campaigns/".concat(this.props.address, "/requests"),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Button, {
                  primary: true,
                  children: "View Requests"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Grid.Column, {
            width: 6,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_ContributeForm__WEBPACK_IMPORTED_MODULE_12__.default, {
              address: this.props.address
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0,C_Users_yash_Desktop_Study_kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_yash_Desktop_Study_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(props) {
        var campaign, summary;
        return C_Users_yash_Desktop_Study_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_10__.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt("return", {
                  address: props.query.address,
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4]
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignShow;
}(react__WEBPACK_IMPORTED_MODULE_8__.Component);

/* harmony default export */ __webpack_exports__["default"] = (CampaignShow);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanMiXSwibmFtZXMiOlsiQ2FtcGFpZ25TaG93IiwicHJvcHMiLCJiYWxhbmNlIiwibWFuYWdlciIsIm1pbmltdW1Db250cmlidXRpb24iLCJyZXF1ZXN0c0NvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwid2ViMyIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsImNhbXBhaWduIiwiQ2FtcGFpZ24iLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLFk7Ozs7Ozs7Ozs7Ozs7a0NBY1k7QUFBQSx3QkFHTixLQUFLQyxLQUhDO0FBQUEsVUFFTkMsT0FGTSxlQUVOQSxPQUZNO0FBQUEsVUFFR0MsT0FGSCxlQUVHQSxPQUZIO0FBQUEsVUFFWUMsbUJBRlosZUFFWUEsbUJBRlo7QUFBQSxVQUVpQ0MsYUFGakMsZUFFaUNBLGFBRmpDO0FBQUEsVUFFZ0RDLGNBRmhELGVBRWdEQSxjQUZoRDtBQUlWLFVBQU1DLEtBQUssR0FBRyxDQUNWO0FBQ0lDLGNBQU0sRUFBRUwsT0FEWjtBQUVJTSxZQUFJLEVBQUUsb0JBRlY7QUFHSUMsbUJBQVcsRUFBRSxxRUFIakI7QUFJSUMsYUFBSyxFQUFFO0FBQUNDLHNCQUFZLEVBQUU7QUFBZjtBQUpYLE9BRFUsRUFPVjtBQUNJSixjQUFNLEVBQUVLLGtFQUFBLENBQW1CWCxPQUFuQixFQUE0QixPQUE1QixDQURaO0FBRUlPLFlBQUksRUFBRSwwQkFGVjtBQUdJQyxtQkFBVyxFQUFFLDhDQUhqQjtBQUlJQyxhQUFLLEVBQUU7QUFBQ0Msc0JBQVksRUFBRTtBQUFmO0FBSlgsT0FQVSxFQWFWO0FBQ0lKLGNBQU0sRUFBRUosbUJBRFo7QUFFSUssWUFBSSxFQUFFLHNCQUZWO0FBR0lDLG1CQUFXLEVBQUUsZ0VBSGpCO0FBSUlDLGFBQUssRUFBRTtBQUFDQyxzQkFBWSxFQUFFO0FBQWY7QUFKWCxPQWJVLEVBbUJWO0FBQ0lKLGNBQU0sRUFBRUYsY0FEWjtBQUVJRyxZQUFJLEVBQUUscUJBRlY7QUFHSUMsbUJBQVcsRUFBRSxxQkFIakI7QUFJSUMsYUFBSyxFQUFFO0FBQUNDLHNCQUFZLEVBQUU7QUFBZjtBQUpYLE9BbkJVLEVBeUJWO0FBQ0lKLGNBQU0sRUFBRUgsYUFEWjtBQUVJSSxZQUFJLEVBQUUsb0JBRlY7QUFHSUMsbUJBQVcsRUFBRSx5REFIakI7QUFJSUMsYUFBSyxFQUFFO0FBQUNDLHNCQUFZLEVBQUU7QUFBZjtBQUpYLE9BekJVLENBQWQ7QUFpQ0EsMEJBQU8sOERBQUMsMERBQUQ7QUFBWSxhQUFLLEVBQUVMO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUDtBQUNIOzs7NkJBRVE7QUFDTiwwQkFDQyw4REFBQyx1REFBRDtBQUFBLGdDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLGVBRUksOERBQUMsb0RBQUQ7QUFBQSxrQ0FDSSw4REFBQywyREFBRDtBQUFhLGlCQUFLLEVBQUUsRUFBcEI7QUFBQSx1QkFDUyxLQUFLTyxXQUFMLEVBRFQsZUFFUSw4REFBQywwQ0FBRDtBQUFNLG1CQUFLLHVCQUFnQixLQUFLYixLQUFMLENBQVdjLE9BQTNCLGNBQVg7QUFBQSxxQ0FDSTtBQUFBLHVDQUNJLDhEQUFDLE1BQUQ7QUFBUSx5QkFBTyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBVUksOERBQUMsMkRBQUQ7QUFBYSxpQkFBSyxFQUFFLENBQXBCO0FBQUEsbUNBQ1EsOERBQUMsZ0VBQUQ7QUFBZ0IscUJBQU8sRUFBRSxLQUFLZCxLQUFMLENBQVdjO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERDtBQW1CRjs7OzswVEF6RTRCZCxLOzs7Ozs7QUFDbkJlLHdCLEdBQVdDLDREQUFRLENBQUNoQixLQUFLLENBQUNpQixLQUFOLENBQVlILE9BQWIsQzs7dUJBQ0hDLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQkMsVUFBakIsR0FBOEJDLElBQTlCLEU7OztBQUFoQkMsdUI7aURBQ0M7QUFDSFAseUJBQU8sRUFBRWQsS0FBSyxDQUFDaUIsS0FBTixDQUFZSCxPQURsQjtBQUVIWCxxQ0FBbUIsRUFBRWtCLE9BQU8sQ0FBQyxDQUFELENBRnpCO0FBR0hwQix5QkFBTyxFQUFFb0IsT0FBTyxDQUFDLENBQUQsQ0FIYjtBQUlIakIsK0JBQWEsRUFBRWlCLE9BQU8sQ0FBQyxDQUFELENBSm5CO0FBS0hoQixnQ0FBYyxFQUFFZ0IsT0FBTyxDQUFDLENBQUQsQ0FMcEI7QUFNSG5CLHlCQUFPLEVBQUVtQixPQUFPLENBQUMsQ0FBRDtBQU5iLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBSllDLDRDOztBQTZFM0IsK0RBQWV2QixZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhbXBhaWducy9zaG93LjIzMDhkNDgyYWU1MWJkNDkzNTgwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi8uLi9ldGhlcmV1bS9jYW1wYWlnbidcclxuaW1wb3J0IHsgQ2FyZCwgR3JpZCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IENvbnRyaWJ1dGVGb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0nO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vcm91dGVzJztcclxuXHJcbmNsYXNzIENhbXBhaWduU2hvdyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihwcm9wcy5xdWVyeS5hZGRyZXNzKTtcclxuICAgICAgICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGFkZHJlc3M6IHByb3BzLnF1ZXJ5LmFkZHJlc3MsXHJcbiAgICAgICAgICAgIG1pbmltdW1Db250cmlidXRpb246IHN1bW1hcnlbMF0sXHJcbiAgICAgICAgICAgIGJhbGFuY2U6IHN1bW1hcnlbMV0sXHJcbiAgICAgICAgICAgIHJlcXVlc3RzQ291bnQ6IHN1bW1hcnlbMl0sXHJcbiAgICAgICAgICAgIGFwcHJvdmVyc0NvdW50OiBzdW1tYXJ5WzNdLFxyXG4gICAgICAgICAgICBtYW5hZ2VyOiBzdW1tYXJ5WzRdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDYXJkcygpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGJhbGFuY2UsIG1hbmFnZXIsIG1pbmltdW1Db250cmlidXRpb24sIHJlcXVlc3RzQ291bnQsIGFwcHJvdmVyc0NvdW50XHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogbWFuYWdlcixcclxuICAgICAgICAgICAgICAgIG1ldGE6ICdBZGRyZXNzIG9mIE1hbmFnZXInLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgbWFuYWdlciBjcmVhdGVkIHRoaXMgY2FtcGFpZ24gYW5kIGNhbiBjcmVhdGUgd2l0aGRyYXcgcmVxdWVzdHMuJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7b3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHdlYjMudXRpbHMuZnJvbVdlaShiYWxhbmNlLCAnZXRoZXInKSxcclxuICAgICAgICAgICAgICAgIG1ldGE6ICdDYW1wYWlnbiBCYWxhbmNlIChldGhlciknLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIHRoZSBjdXJyZW50IGJhbGFuY2Ugb2YgdGhlIGNhbXBhaWduLicsXHJcbiAgICAgICAgICAgICAgICBzdHlsZToge292ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBtaW5pbXVtQ29udHJpYnV0aW9uLFxyXG4gICAgICAgICAgICAgICAgbWV0YTogJ01pbmltdW0gQ29udHJpYnV0aW9uJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyB0aGUgbWluaW11bSBhbW91bnQgb2Ygd2VpIHJlcXVpcmVkIHRvIGJlY29tZSBhIGJhY2tlci4nLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogYXBwcm92ZXJzQ291bnQsXHJcbiAgICAgICAgICAgICAgICBtZXRhOiAnTnVtYmVyIG9mIEFwcHJvdmVycycsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ051bWJlciBvZiBhcHByb3ZlcnMnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogcmVxdWVzdHNDb3VudCxcclxuICAgICAgICAgICAgICAgIG1ldGE6ICdOdW1iZXIgb2YgUmVxdWVzdHMnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgbnVtYmVyIG9mIHdpdGhkcmF3IHJlcXVlc3RzIGNyZWF0ZWQgYnkgdGhlIG1hbmFnZXIuJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7b3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz5cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMz4gQ2FtcGFpZ24gU2hvdzwvaDM+XHJcbiAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNhcmRzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHNgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeT5WaWV3IFJlcXVlc3RzPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cmlidXRlRm9ybSBhZGRyZXNzPXt0aGlzLnByb3BzLmFkZHJlc3N9IC8+ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnblNob3c7Il0sInNvdXJjZVJvb3QiOiIifQ==
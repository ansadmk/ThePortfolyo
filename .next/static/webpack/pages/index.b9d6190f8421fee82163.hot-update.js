"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Handles.js":
/*!***********************************!*\
  !*** ./src/components/Handles.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Redux_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Redux/selectors */ \"./Redux/selectors.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/luffy/Downloads/kura/src/components/Handles.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Handles = function Handles() {\n  _s();\n\n  var socials = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_Redux_selectors__WEBPACK_IMPORTED_MODULE_2__.social);\n  console.log(socials, \"socials\");\n\n  if (socials.length) {}\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    style: {\n      listStyle: \"none\"\n    },\n    className: \"form\",\n    children: socials.filter(function (item) {\n      return item.enabled == true;\n    }).map(function (items) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n        className: \"button-log\",\n        href: items.url,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n          src: items.image.url\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 7\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 5\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 4\n  }, _this);\n};\n\n_s(Handles, \"W4EFRdFcRK6fEm8HNZIgdlv72hs=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector];\n});\n\n_c = Handles;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Handles);\n\nvar _c;\n\n$RefreshReg$(_c, \"Handles\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IYW5kbGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBTUcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNwQixNQUFNQyxPQUFPLEdBQUNILHdEQUFXLENBQUNDLG9EQUFELENBQXpCO0FBQ0FHLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaLEVBQW9CLFNBQXBCOztBQUNBLE1BQUlBLE9BQU8sQ0FBQ0csTUFBWixFQUFvQixDQUVuQjs7QUFDRCxzQkFDQztBQUFLLFNBQUssRUFBRTtBQUFDQyxNQUFBQSxTQUFTLEVBQUM7QUFBWCxLQUFaO0FBQWdDLGFBQVMsRUFBQyxNQUExQztBQUFBLGNBQ0VKLE9BQU8sQ0FBQ0ssTUFBUixDQUFlLFVBQUNDLElBQUQ7QUFBQSxhQUFRQSxJQUFJLENBQUNDLE9BQUwsSUFBYyxJQUF0QjtBQUFBLEtBQWYsRUFBMkNDLEdBQTNDLENBQStDLFVBQUNDLEtBQUQ7QUFBQSwwQkFDaEQ7QUFBRyxpQkFBUyxFQUFDLFlBQWI7QUFBMEIsWUFBSSxFQUFFQSxLQUFLLENBQUNDLEdBQXRDO0FBQUEsK0JBQ0U7QUFBSyxhQUFHLEVBQUVELEtBQUssQ0FBQ0UsS0FBTixDQUFZRDtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURnRDtBQUFBLEtBQS9DO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBU0QsQ0FmRDs7R0FBTVg7VUFDVUY7OztLQURWRTtBQWlCTiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IYW5kbGVzLmpzPzdjZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHNvY2lhbCB9IGZyb20gJy4uLy4uL1JlZHV4L3NlbGVjdG9ycydcbmNvbnN0IEhhbmRsZXMgPSAoKSA9PiB7XG4gIGNvbnN0IHNvY2lhbHM9dXNlU2VsZWN0b3Ioc29jaWFsKVxuICBjb25zb2xlLmxvZyhzb2NpYWxzLFwic29jaWFsc1wiKTtcbiAgaWYgKHNvY2lhbHMubGVuZ3RoKSB7XG4gICAgXG4gIH1cbiAgcmV0dXJuIChcbiAgIDxkaXYgc3R5bGU9e3tsaXN0U3R5bGU6XCJub25lXCJ9fSBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAge3NvY2lhbHMuZmlsdGVyKChpdGVtKT0+aXRlbS5lbmFibGVkPT10cnVlKS5tYXAoKGl0ZW1zKT0+KFxuICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbi1sb2dcIiBocmVmPXtpdGVtcy51cmx9ID5cbiAgICAgIDxpbWcgc3JjPXtpdGVtcy5pbWFnZS51cmx9Lz5cbiAgICA8L2E+KSl9XG4gICA8L2Rpdj5cblxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhhbmRsZXMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTZWxlY3RvciIsInNvY2lhbCIsIkhhbmRsZXMiLCJzb2NpYWxzIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImxpc3RTdHlsZSIsImZpbHRlciIsIml0ZW0iLCJlbmFibGVkIiwibWFwIiwiaXRlbXMiLCJ1cmwiLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Handles.js\n");

/***/ })

});
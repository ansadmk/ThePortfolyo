"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_Parallax_js",{

/***/ "./src/components/Parallax.js":
/*!************************************!*\
  !*** ./src/components/Parallax.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Parallax; }\n/* harmony export */ });\n/* harmony import */ var jarallax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jarallax */ \"./node_modules/jarallax/index.js\");\n/* harmony import */ var jarallax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jarallax__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jarallax_dist_jarallax_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jarallax/dist/jarallax.css */ \"./node_modules/jarallax/dist/jarallax.css\");\n/* harmony import */ var jarallax_dist_jarallax_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jarallax_dist_jarallax_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Redux_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Redux/selectors */ \"./Redux/selectors.js\");\n/* harmony import */ var _Redux_axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Redux/axios */ \"./Redux/axios.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/luffy/Downloads/kura/src/components/Parallax.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n // import \"./styles.css\";\n\n\nfunction Parallax() {\n  _s();\n\n  var youtubeVid = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_Redux_selectors__WEBPACK_IMPORTED_MODULE_4__.youtubeFirst);\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    dispatch((0,_Redux_axios__WEBPACK_IMPORTED_MODULE_5__.FetchData)());\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    (0,jarallax__WEBPACK_IMPORTED_MODULE_0__.jarallaxVideo)();\n    setTimeout(function () {\n      return (0,jarallax__WEBPACK_IMPORTED_MODULE_0__.jarallax)(document.querySelectorAll(\".jarallax\"), {\n        speed: 0.2,\n        videoSrc: \"https://www.youtube.com/watch?v=\".concat(youtubeVid.embedId)\n      });\n    });\n  }, [youtubeVid]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n    className: \"jarallax\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 10\n  }, this);\n}\n\n_s(Parallax, \"kNtDInEQ88HYlEDK/ZmJK//ThFU=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch];\n});\n\n_c = Parallax;\n\nvar _c;\n\n$RefreshReg$(_c, \"Parallax\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QYXJhbGxheC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOzs7QUFFZSxTQUFTTyxRQUFULEdBQW9CO0FBQUE7O0FBQ2pDLE1BQU1DLFVBQVUsR0FBQ0osd0RBQVcsQ0FBQ0MsMERBQUQsQ0FBNUI7QUFDQSxNQUFNSSxRQUFRLEdBQUNOLHdEQUFXLEVBQTFCO0FBQ0FELEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkTyxJQUFBQSxRQUFRLENBQUNILHVEQUFTLEVBQVYsQ0FBUjtBQUVELEdBSFEsRUFHUCxFQUhPLENBQVQ7QUFLQUosRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RELElBQUFBLHVEQUFhO0FBQ2JTLElBQUFBLFVBQVUsQ0FBQztBQUFBLGFBQUlWLGtEQUFRLENBQUNXLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsV0FBMUIsQ0FBRCxFQUF5QztBQUM5REMsUUFBQUEsS0FBSyxFQUFFLEdBRHVEO0FBRTlEQyxRQUFBQSxRQUFRLDRDQUFxQ04sVUFBVSxDQUFDTyxPQUFoRDtBQUZzRCxPQUF6QyxDQUFaO0FBQUEsS0FBRCxDQUFWO0FBSUQsR0FOUSxFQU1QLENBQUNQLFVBQUQsQ0FOTyxDQUFUO0FBT0Esc0JBQU87QUFBSyxhQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7R0FoQnVCRDtVQUNMSCxzREFDRkQ7OztLQUZPSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9QYXJhbGxheC5qcz9jZDQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGphcmFsbGF4LCBqYXJhbGxheFZpZGVvIH0gZnJvbSBcImphcmFsbGF4XCI7XHJcbmltcG9ydCBcImphcmFsbGF4L2Rpc3QvamFyYWxsYXguY3NzXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgeW91dHViZUZpcnN0IH0gZnJvbSBcIi4uLy4uL1JlZHV4L3NlbGVjdG9yc1wiO1xyXG5pbXBvcnQgeyBGZXRjaERhdGEgfSBmcm9tIFwiLi4vLi4vUmVkdXgvYXhpb3NcIjtcclxuLy8gaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXJhbGxheCgpIHtcclxuICBjb25zdCB5b3V0dWJlVmlkPXVzZVNlbGVjdG9yKHlvdXR1YmVGaXJzdClcclxuICBjb25zdCBkaXNwYXRjaD11c2VEaXNwYXRjaCgpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKEZldGNoRGF0YSgpKVxyXG4gICAgXHJcbiAgfSxbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGphcmFsbGF4VmlkZW8oKTtcclxuICAgIHNldFRpbWVvdXQoKCk9PmphcmFsbGF4KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuamFyYWxsYXhcIiksIHtcclxuICAgICAgc3BlZWQ6IDAuMixcclxuICAgICAgdmlkZW9TcmM6IGBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PSR7eW91dHViZVZpZC5lbWJlZElkfWAsXHJcbiAgICB9KSlcclxuICB9LFt5b3V0dWJlVmlkXSk7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiamFyYWxsYXhcIiAvPjtcclxufVxyXG4iXSwibmFtZXMiOlsiamFyYWxsYXgiLCJqYXJhbGxheFZpZGVvIiwidXNlRWZmZWN0IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInlvdXR1YmVGaXJzdCIsIkZldGNoRGF0YSIsIlBhcmFsbGF4IiwieW91dHViZVZpZCIsImRpc3BhdGNoIiwic2V0VGltZW91dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInNwZWVkIiwidmlkZW9TcmMiLCJlbWJlZElkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Parallax.js\n");

/***/ })

});
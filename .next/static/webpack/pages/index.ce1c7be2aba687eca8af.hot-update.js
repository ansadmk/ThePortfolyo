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

/***/ "./Redux/selectors.js":
/*!****************************!*\
  !*** ./Redux/selectors.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"about\": function() { return /* binding */ about; },\n/* harmony export */   \"services\": function() { return /* binding */ services; },\n/* harmony export */   \"projects\": function() { return /* binding */ projects; },\n/* harmony export */   \"skills\": function() { return /* binding */ skills; },\n/* harmony export */   \"timeline\": function() { return /* binding */ timeline; },\n/* harmony export */   \"testimonials\": function() { return /* binding */ testimonials; },\n/* harmony export */   \"email\": function() { return /* binding */ email; },\n/* harmony export */   \"youtubeFirst\": function() { return /* binding */ youtubeFirst; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar about = function about(s) {\n  return s.items.userAbout;\n};\nvar services = function services(s) {\n  return s.items.services;\n};\nvar projects = function projects(s) {\n  return s.items.Projects;\n};\nvar skills = function skills(s) {\n  return s.items.skills;\n};\nvar timeline = function timeline(s) {\n  return s.items.timeline;\n};\nvar testimonials = function testimonials(s) {\n  return s.items.testimonials;\n};\nvar email = function email(s) {\n  return s.items.email;\n};\nvar youtubeFirst = function youtubeFirst(s) {\n  return s.items.youtube[0];\n};\nsocial_handles;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWR1eC9zZWxlY3RvcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsS0FBSyxHQUFDLFNBQU5BLEtBQU0sQ0FBQ0MsQ0FBRDtBQUFBLFNBQUtBLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxTQUFiO0FBQUEsQ0FBWjtBQUNBLElBQU1DLFFBQVEsR0FBQyxTQUFUQSxRQUFTLENBQUNILENBQUQ7QUFBQSxTQUFLQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUUsUUFBYjtBQUFBLENBQWY7QUFDQSxJQUFNQyxRQUFRLEdBQUMsU0FBVEEsUUFBUyxDQUFDSixDQUFEO0FBQUEsU0FBS0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFJLFFBQWI7QUFBQSxDQUFmO0FBQ0EsSUFBTUMsTUFBTSxHQUFDLFNBQVBBLE1BQU8sQ0FBQ04sQ0FBRDtBQUFBLFNBQUtBLENBQUMsQ0FBQ0MsS0FBRixDQUFRSyxNQUFiO0FBQUEsQ0FBYjtBQUNBLElBQU1DLFFBQVEsR0FBQyxTQUFUQSxRQUFTLENBQUNQLENBQUQ7QUFBQSxTQUFLQSxDQUFDLENBQUNDLEtBQUYsQ0FBUU0sUUFBYjtBQUFBLENBQWY7QUFDQSxJQUFNQyxZQUFZLEdBQUMsU0FBYkEsWUFBYSxDQUFDUixDQUFEO0FBQUEsU0FBS0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFPLFlBQWI7QUFBQSxDQUFuQjtBQUNBLElBQU1DLEtBQUssR0FBQyxTQUFOQSxLQUFNLENBQUNULENBQUQ7QUFBQSxTQUFLQSxDQUFDLENBQUNDLEtBQUYsQ0FBUVEsS0FBYjtBQUFBLENBQVo7QUFDQSxJQUFNQyxZQUFZLEdBQUMsU0FBYkEsWUFBYSxDQUFDVixDQUFEO0FBQUEsU0FBS0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFVLE9BQVIsQ0FBZ0IsQ0FBaEIsQ0FBTDtBQUFBLENBQW5CO0FBQ1BDLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vUmVkdXgvc2VsZWN0b3JzLmpzPzcwNDYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFib3V0PShzKT0+cy5pdGVtcy51c2VyQWJvdXRcbmV4cG9ydCBjb25zdCBzZXJ2aWNlcz0ocyk9PnMuaXRlbXMuc2VydmljZXNcbmV4cG9ydCBjb25zdCBwcm9qZWN0cz0ocyk9PnMuaXRlbXMuUHJvamVjdHNcbmV4cG9ydCBjb25zdCBza2lsbHM9KHMpPT5zLml0ZW1zLnNraWxsc1xuZXhwb3J0IGNvbnN0IHRpbWVsaW5lPShzKT0+cy5pdGVtcy50aW1lbGluZVxuZXhwb3J0IGNvbnN0IHRlc3RpbW9uaWFscz0ocyk9PnMuaXRlbXMudGVzdGltb25pYWxzXG5leHBvcnQgY29uc3QgZW1haWw9KHMpPT5zLml0ZW1zLmVtYWlsXG5leHBvcnQgY29uc3QgeW91dHViZUZpcnN0PShzKT0+cy5pdGVtcy55b3V0dWJlWzBdXG5zb2NpYWxfaGFuZGxlc1xuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOlsiYWJvdXQiLCJzIiwiaXRlbXMiLCJ1c2VyQWJvdXQiLCJzZXJ2aWNlcyIsInByb2plY3RzIiwiUHJvamVjdHMiLCJza2lsbHMiLCJ0aW1lbGluZSIsInRlc3RpbW9uaWFscyIsImVtYWlsIiwieW91dHViZUZpcnN0IiwieW91dHViZSIsInNvY2lhbF9oYW5kbGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Redux/selectors.js\n");

/***/ })

});
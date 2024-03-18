"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./Redux/slice.js":
/*!************************!*\
  !*** ./Redux/slice.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axios */ \"./Redux/axios.js\");\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors */ \"./Redux/selectors.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\"use client\";\n\n\n\n\nvar slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSlice)({\n  name: \"user\",\n  initialState: {\n    userAbout: {},\n    services: [],\n    Projects: [],\n    skills: [],\n    timeline: [],\n    testimonials: [],\n    email: [],\n    youtube: [],\n    social_handles: []\n  },\n  extraReducers: function extraReducers(builder) {\n    builder.addCase(_axios__WEBPACK_IMPORTED_MODULE_0__.FetchData.fulfilled, function (state, action) {\n      console.log(action.payload.user.about);\n      state.userAbout = action.payload.user.about;\n      state.services = action.payload.user.services;\n      state.Projects = action.payload.user.projects;\n      state.skills = action.payload.user.skills;\n      state.timeline = action.payload.user.timeline;\n      state.testimonials = action.payload.user.testimonials;\n      state.email = action.payload.user.email;\n      state.youtube = action.payload.user.youtube;\n      state.social_handles = action.payload.user.social_handles;\n    });\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (slice.reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWR1eC9zbGljZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1HLEtBQUssR0FBR0gsNkRBQVcsQ0FBQztBQUN4QkksRUFBQUEsSUFBSSxFQUFFLE1BRGtCO0FBRXhCQyxFQUFBQSxZQUFZLEVBQUU7QUFDZEMsSUFBQUEsU0FBUyxFQUFDLEVBREk7QUFFZEMsSUFBQUEsUUFBUSxFQUFDLEVBRks7QUFHZEMsSUFBQUEsUUFBUSxFQUFDLEVBSEs7QUFJZEMsSUFBQUEsTUFBTSxFQUFDLEVBSk87QUFLZEMsSUFBQUEsUUFBUSxFQUFDLEVBTEs7QUFNZEMsSUFBQUEsWUFBWSxFQUFDLEVBTkM7QUFPZEMsSUFBQUEsS0FBSyxFQUFDLEVBUFE7QUFRZFYsSUFBQUEsT0FBTyxFQUFDLEVBUk07QUFTaEJXLElBQUFBLGNBQWMsRUFBQztBQVRDLEdBRlU7QUFjeEJDLEVBQUFBLGFBQWEsRUFBRSx1QkFBQ0MsT0FBRCxFQUFhO0FBQzFCQSxJQUFBQSxPQUFPLENBRUpDLE9BRkgsQ0FFV2YsdURBRlgsRUFFZ0MsVUFBQ2lCLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUMvQ0MsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQU0sQ0FBQ0csT0FBUCxDQUFlQyxJQUFmLENBQW9CQyxLQUFoQztBQUNBTixNQUFBQSxLQUFLLENBQUNaLFNBQU4sR0FBa0JhLE1BQU0sQ0FBQ0csT0FBUCxDQUFlQyxJQUFmLENBQW9CQyxLQUF0QztBQUNBTixNQUFBQSxLQUFLLENBQUNYLFFBQU4sR0FBaUJZLE1BQU0sQ0FBQ0csT0FBUCxDQUFlQyxJQUFmLENBQW9CaEIsUUFBckM7QUFDQVcsTUFBQUEsS0FBSyxDQUFDVixRQUFOLEdBQWlCVyxNQUFNLENBQUNHLE9BQVAsQ0FBZUMsSUFBZixDQUFvQkUsUUFBckM7QUFDQVAsTUFBQUEsS0FBSyxDQUFDVCxNQUFOLEdBQWVVLE1BQU0sQ0FBQ0csT0FBUCxDQUFlQyxJQUFmLENBQW9CZCxNQUFuQztBQUNBUyxNQUFBQSxLQUFLLENBQUNSLFFBQU4sR0FBaUJTLE1BQU0sQ0FBQ0csT0FBUCxDQUFlQyxJQUFmLENBQW9CYixRQUFyQztBQUNBUSxNQUFBQSxLQUFLLENBQUNQLFlBQU4sR0FBcUJRLE1BQU0sQ0FBQ0csT0FBUCxDQUFlQyxJQUFmLENBQW9CWixZQUF6QztBQUNBTyxNQUFBQSxLQUFLLENBQUNOLEtBQU4sR0FBY08sTUFBTSxDQUFDRyxPQUFQLENBQWVDLElBQWYsQ0FBb0JYLEtBQWxDO0FBQ0FNLE1BQUFBLEtBQUssQ0FBQ2hCLE9BQU4sR0FBZ0JpQixNQUFNLENBQUNHLE9BQVAsQ0FBZUMsSUFBZixDQUFvQnJCLE9BQXBDO0FBQ0FnQixNQUFBQSxLQUFLLENBQUNMLGNBQU4sR0FBc0JNLE1BQU0sQ0FBQ0csT0FBUCxDQUFlQyxJQUFmLENBQW9CVixjQUExQztBQVFELEtBcEJIO0FBd0JEO0FBdkN1QixDQUFELENBQXpCO0FBMENBLCtEQUFlVixLQUFLLENBQUN1QixPQUFyQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9SZWR1eC9zbGljZS5qcz9lZWRiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgRmV0Y2hEYXRhIH0gZnJvbSBcIi4vYXhpb3NcIjtcbmltcG9ydCB7IHlvdXR1YmUgfSBmcm9tIFwiLi9zZWxlY3RvcnNcIjtcblxuXG5jb25zdCBzbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJ1c2VyXCIsXG4gIGluaXRpYWxTdGF0ZToge1xuICB1c2VyQWJvdXQ6e30sXG4gIHNlcnZpY2VzOltdLFxuICBQcm9qZWN0czpbXSxcbiAgc2tpbGxzOltdLFxuICB0aW1lbGluZTpbXSxcbiAgdGVzdGltb25pYWxzOltdLFxuICBlbWFpbDpbXSxcbiAgeW91dHViZTpbXSxcbnNvY2lhbF9oYW5kbGVzOltdXG5cbiAgfSxcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICBidWlsZGVyXG4gICAgICBcbiAgICAgIC5hZGRDYXNlKEZldGNoRGF0YS5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkLnVzZXIuYWJvdXQpXG4gICAgICAgIHN0YXRlLnVzZXJBYm91dCA9IGFjdGlvbi5wYXlsb2FkLnVzZXIuYWJvdXRcbiAgICAgICAgc3RhdGUuc2VydmljZXMgPSBhY3Rpb24ucGF5bG9hZC51c2VyLnNlcnZpY2VzXG4gICAgICAgIHN0YXRlLlByb2plY3RzID0gYWN0aW9uLnBheWxvYWQudXNlci5wcm9qZWN0c1xuICAgICAgICBzdGF0ZS5za2lsbHMgPSBhY3Rpb24ucGF5bG9hZC51c2VyLnNraWxsc1xuICAgICAgICBzdGF0ZS50aW1lbGluZSA9IGFjdGlvbi5wYXlsb2FkLnVzZXIudGltZWxpbmVcbiAgICAgICAgc3RhdGUudGVzdGltb25pYWxzID0gYWN0aW9uLnBheWxvYWQudXNlci50ZXN0aW1vbmlhbHNcbiAgICAgICAgc3RhdGUuZW1haWwgPSBhY3Rpb24ucGF5bG9hZC51c2VyLmVtYWlsXG4gICAgICAgIHN0YXRlLnlvdXR1YmUgPSBhY3Rpb24ucGF5bG9hZC51c2VyLnlvdXR1YmVcbiAgICAgICAgc3RhdGUuc29jaWFsX2hhbmRsZXM9IGFjdGlvbi5wYXlsb2FkLnVzZXIuc29jaWFsX2hhbmRsZXNcblxuXG5cblxuXG5cblxuICAgICAgfSlcbiAgICAgXG4gICAgICBcbiAgICAgIFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJGZXRjaERhdGEiLCJ5b3V0dWJlIiwic2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwidXNlckFib3V0Iiwic2VydmljZXMiLCJQcm9qZWN0cyIsInNraWxscyIsInRpbWVsaW5lIiwidGVzdGltb25pYWxzIiwiZW1haWwiLCJzb2NpYWxfaGFuZGxlcyIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsImZ1bGZpbGxlZCIsInN0YXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJ1c2VyIiwiYWJvdXQiLCJwcm9qZWN0cyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Redux/slice.js\n");

/***/ })

});
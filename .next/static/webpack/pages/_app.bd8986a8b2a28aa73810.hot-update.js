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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axios */ \"./Redux/axios.js\");\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors */ \"./Redux/selectors.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\"use client\";\n\n\n\n\nvar slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSlice)({\n  name: \"user\",\n  initialState: {\n    userAbout: {},\n    services: [],\n    Projects: [],\n    skills: [],\n    timeline: [],\n    testimonials: [],\n    email: [],\n    youtube: []\n  },\n  extraReducers: function extraReducers(builder) {\n    builder.addCase(_axios__WEBPACK_IMPORTED_MODULE_0__.FetchData.fulfilled, function (state, action) {\n      console.log(action.payload.user.about);\n      state.userAbout = action.payload.user.about;\n      state.services = action.payload.user.services;\n      state.Projects = action.payload.user.projects;\n      state.skills = action.payload.user.skills;\n      state.timeline = action.payload.user.timeline;\n      state.testimonials = action.payload.user.testimonials;\n      state.email = action.payload.user.email;\n      state.youtube = action.payload.user.youtube;\n      state.youtube = action.payload.user.youtube;\n      social_handles;\n    });\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (slice.reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWR1eC9zbGljZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1HLEtBQUssR0FBR0gsNkRBQVcsQ0FBQztBQUN4QkksRUFBQUEsSUFBSSxFQUFFLE1BRGtCO0FBRXhCQyxFQUFBQSxZQUFZLEVBQUU7QUFDZEMsSUFBQUEsU0FBUyxFQUFDLEVBREk7QUFFZEMsSUFBQUEsUUFBUSxFQUFDLEVBRks7QUFHZEMsSUFBQUEsUUFBUSxFQUFDLEVBSEs7QUFJZEMsSUFBQUEsTUFBTSxFQUFDLEVBSk87QUFLZEMsSUFBQUEsUUFBUSxFQUFDLEVBTEs7QUFNZEMsSUFBQUEsWUFBWSxFQUFDLEVBTkM7QUFPZEMsSUFBQUEsS0FBSyxFQUFDLEVBUFE7QUFRZFYsSUFBQUEsT0FBTyxFQUFDO0FBUk0sR0FGVTtBQVl4QlcsRUFBQUEsYUFBYSxFQUFFLHVCQUFDQyxPQUFELEVBQWE7QUFDMUJBLElBQUFBLE9BQU8sQ0FFSkMsT0FGSCxDQUVXZCx1REFGWCxFQUVnQyxVQUFDZ0IsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQy9DQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBTSxDQUFDRyxPQUFQLENBQWVDLElBQWYsQ0FBb0JDLEtBQWhDO0FBQ0FOLE1BQUFBLEtBQUssQ0FBQ1gsU0FBTixHQUFrQlksTUFBTSxDQUFDRyxPQUFQLENBQWVDLElBQWYsQ0FBb0JDLEtBQXRDO0FBQ0FOLE1BQUFBLEtBQUssQ0FBQ1YsUUFBTixHQUFpQlcsTUFBTSxDQUFDRyxPQUFQLENBQWVDLElBQWYsQ0FBb0JmLFFBQXJDO0FBQ0FVLE1BQUFBLEtBQUssQ0FBQ1QsUUFBTixHQUFpQlUsTUFBTSxDQUFDRyxPQUFQLENBQWVDLElBQWYsQ0FBb0JFLFFBQXJDO0FBQ0FQLE1BQUFBLEtBQUssQ0FBQ1IsTUFBTixHQUFlUyxNQUFNLENBQUNHLE9BQVAsQ0FBZUMsSUFBZixDQUFvQmIsTUFBbkM7QUFDQVEsTUFBQUEsS0FBSyxDQUFDUCxRQUFOLEdBQWlCUSxNQUFNLENBQUNHLE9BQVAsQ0FBZUMsSUFBZixDQUFvQlosUUFBckM7QUFDQU8sTUFBQUEsS0FBSyxDQUFDTixZQUFOLEdBQXFCTyxNQUFNLENBQUNHLE9BQVAsQ0FBZUMsSUFBZixDQUFvQlgsWUFBekM7QUFDQU0sTUFBQUEsS0FBSyxDQUFDTCxLQUFOLEdBQWNNLE1BQU0sQ0FBQ0csT0FBUCxDQUFlQyxJQUFmLENBQW9CVixLQUFsQztBQUNBSyxNQUFBQSxLQUFLLENBQUNmLE9BQU4sR0FBZ0JnQixNQUFNLENBQUNHLE9BQVAsQ0FBZUMsSUFBZixDQUFvQnBCLE9BQXBDO0FBQ0FlLE1BQUFBLEtBQUssQ0FBQ2YsT0FBTixHQUFnQmdCLE1BQU0sQ0FBQ0csT0FBUCxDQUFlQyxJQUFmLENBQW9CcEIsT0FBcEM7QUFFUnVCLE1BQUFBLGNBQWM7QUFNUCxLQXBCSDtBQXdCRDtBQXJDdUIsQ0FBRCxDQUF6QjtBQXdDQSwrREFBZXRCLEtBQUssQ0FBQ3VCLE9BQXJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL1JlZHV4L3NsaWNlLmpzP2VlZGIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBGZXRjaERhdGEgfSBmcm9tIFwiLi9heGlvc1wiO1xuaW1wb3J0IHsgeW91dHViZSB9IGZyb20gXCIuL3NlbGVjdG9yc1wiO1xuXG5cbmNvbnN0IHNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcInVzZXJcIixcbiAgaW5pdGlhbFN0YXRlOiB7XG4gIHVzZXJBYm91dDp7fSxcbiAgc2VydmljZXM6W10sXG4gIFByb2plY3RzOltdLFxuICBza2lsbHM6W10sXG4gIHRpbWVsaW5lOltdLFxuICB0ZXN0aW1vbmlhbHM6W10sXG4gIGVtYWlsOltdLFxuICB5b3V0dWJlOltdXG4gIH0sXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgYnVpbGRlclxuICAgICAgXG4gICAgICAuYWRkQ2FzZShGZXRjaERhdGEuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24ucGF5bG9hZC51c2VyLmFib3V0KVxuICAgICAgICBzdGF0ZS51c2VyQWJvdXQgPSBhY3Rpb24ucGF5bG9hZC51c2VyLmFib3V0XG4gICAgICAgIHN0YXRlLnNlcnZpY2VzID0gYWN0aW9uLnBheWxvYWQudXNlci5zZXJ2aWNlc1xuICAgICAgICBzdGF0ZS5Qcm9qZWN0cyA9IGFjdGlvbi5wYXlsb2FkLnVzZXIucHJvamVjdHNcbiAgICAgICAgc3RhdGUuc2tpbGxzID0gYWN0aW9uLnBheWxvYWQudXNlci5za2lsbHNcbiAgICAgICAgc3RhdGUudGltZWxpbmUgPSBhY3Rpb24ucGF5bG9hZC51c2VyLnRpbWVsaW5lXG4gICAgICAgIHN0YXRlLnRlc3RpbW9uaWFscyA9IGFjdGlvbi5wYXlsb2FkLnVzZXIudGVzdGltb25pYWxzXG4gICAgICAgIHN0YXRlLmVtYWlsID0gYWN0aW9uLnBheWxvYWQudXNlci5lbWFpbFxuICAgICAgICBzdGF0ZS55b3V0dWJlID0gYWN0aW9uLnBheWxvYWQudXNlci55b3V0dWJlXG4gICAgICAgIHN0YXRlLnlvdXR1YmUgPSBhY3Rpb24ucGF5bG9hZC51c2VyLnlvdXR1YmVcblxuc29jaWFsX2hhbmRsZXNcblxuXG5cblxuXG4gICAgICB9KVxuICAgICBcbiAgICAgIFxuICAgICAgXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc2xpY2UucmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsIkZldGNoRGF0YSIsInlvdXR1YmUiLCJzbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJ1c2VyQWJvdXQiLCJzZXJ2aWNlcyIsIlByb2plY3RzIiwic2tpbGxzIiwidGltZWxpbmUiLCJ0ZXN0aW1vbmlhbHMiLCJlbWFpbCIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsImZ1bGZpbGxlZCIsInN0YXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJ1c2VyIiwiYWJvdXQiLCJwcm9qZWN0cyIsInNvY2lhbF9oYW5kbGVzIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Redux/slice.js\n");

/***/ })

});
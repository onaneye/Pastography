"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/Components/constant.js":
/*!************************************!*\
  !*** ./app/Components/constant.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   heroSlider: function() { return /* binding */ heroSlider; },\n/* harmony export */   navList: function() { return /* binding */ navList; },\n/* harmony export */   servicesData: function() { return /* binding */ servicesData; }\n/* harmony export */ });\n/* harmony import */ var _public_images_portrait_person_wearing_yellow_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../public/images/portrait-person-wearing-yellow.jpg */ \"(app-pages-browser)/./public/images/portrait-person-wearing-yellow.jpg\");\n/* harmony import */ var _public_images_black_white_portrait_professional_tennis_player_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../public/images/black-white-portrait-professional-tennis-player.jpg */ \"(app-pages-browser)/./public/images/black-white-portrait-professional-tennis-player.jpg\");\n// images for services\n// event coverage\n// birthday shoot\n// Personal Branding Photography\"\n// Drone Photography and Videography\"\n//  Family Photography\n\n\nconst heroSlider = [\n    {\n        title: \"Capturing Moments\",\n        description: \"Every picture tells a story. Let us capture your special moments with our professional photography services.\",\n        buttonText: \"View Portfolio\",\n        bgImage: \"./images/slider1.jpg\",\n        buttonLink: \"/portfolio\"\n    },\n    {\n        title: \"Creative Photography\",\n        description: \"Bringing creativity to life through the lens. Our innovative techniques make your photos stand out.\",\n        buttonText: \"Learn More\",\n        bgImage: \"./images/slider2.jpg\",\n        buttonLink: \"/about\"\n    },\n    {\n        title: \"Timeless Memories\",\n        description: \"Create timeless memories with our expert photography. We capture the essence of every moment.\",\n        buttonText: \"Contact Us\",\n        bgImage: \"./images/slider3.jpg\",\n        buttonLink: \"/contact\"\n    }\n];\nconst navList = [\n    \"Home\",\n    \"About\",\n    \"Services\",\n    \"Portfolio\",\n    \"Gallery\",\n    \"Contact\"\n];\nconst servicesData = [\n    {\n        id: 1,\n        image: _public_images_portrait_person_wearing_yellow_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        paragraph: \"Explore our\",\n        headingText: \"Branding Photography\",\n        button: \"Learn More\"\n    },\n    {\n        id: 2,\n        image: _public_images_black_white_portrait_professional_tennis_player_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        paragraph: \"Celebrate your special day with a personalized birthday shoot.\",\n        headingText: \"Birthday Shoot\",\n        button: \"Book Now\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Db21wb25lbnRzL2NvbnN0YW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0JBQXNCO0FBQ3RCLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakIsaUNBQWlDO0FBQ2pDLHFDQUFxQztBQUNyQyxzQkFBc0I7QUFFd0Q7QUFDZ0I7QUFFdkYsTUFBTUUsYUFBYTtJQUN0QjtRQUNFQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsWUFBWTtRQUNaQyxTQUFTO1FBQ1RDLFlBQVk7SUFDZDtJQUNBO1FBQ0VKLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxZQUFZO1FBQ1pDLFNBQVM7UUFDVEMsWUFBWTtJQUNkO0lBQ0E7UUFDRUosT0FBTztRQUNQQyxhQUFhO1FBQ2JDLFlBQVk7UUFDWkMsU0FBUztRQUNUQyxZQUFZO0lBQ2Q7Q0FDRCxDQUFDO0FBRUcsTUFBTUMsVUFBVTtJQUFDO0lBQVE7SUFBUztJQUFZO0lBQWE7SUFBVztDQUFVO0FBRWhGLE1BQU1DLGVBQWU7SUFDMUI7UUFDRUMsSUFBSTtRQUNKQyxPQUFPWCx5RkFBY0E7UUFDckJZLFdBQVc7UUFDWEMsYUFBYTtRQUNiQyxRQUFRO0lBQ1Y7SUFDQTtRQUNFSixJQUFJO1FBQ0pDLE9BQU9WLDBHQUFhQTtRQUNwQlcsV0FBVztRQUNYQyxhQUFhO1FBQ2JDLFFBQVE7SUFDVjtDQXVFRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9Db21wb25lbnRzL2NvbnN0YW50LmpzP2I2YzMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1hZ2VzIGZvciBzZXJ2aWNlc1xyXG4vLyBldmVudCBjb3ZlcmFnZVxyXG4vLyBiaXJ0aGRheSBzaG9vdFxyXG4vLyBQZXJzb25hbCBCcmFuZGluZyBQaG90b2dyYXBoeVwiXHJcbi8vIERyb25lIFBob3RvZ3JhcGh5IGFuZCBWaWRlb2dyYXBoeVwiXHJcbi8vICBGYW1pbHkgUGhvdG9ncmFwaHlcclxuXHJcbmltcG9ydCBwb3J0cmFpdEltYWdlcyBmcm9tIFwiL3B1YmxpYy9pbWFnZXMvcG9ydHJhaXQtcGVyc29uLXdlYXJpbmcteWVsbG93LmpwZ1wiXHJcbmltcG9ydCBiaXJ0aGRheVNob290IGZyb20gXCIvcHVibGljL2ltYWdlcy9ibGFjay13aGl0ZS1wb3J0cmFpdC1wcm9mZXNzaW9uYWwtdGVubmlzLXBsYXllci5qcGdcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGhlcm9TbGlkZXIgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkNhcHR1cmluZyBNb21lbnRzXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkV2ZXJ5IHBpY3R1cmUgdGVsbHMgYSBzdG9yeS4gTGV0IHVzIGNhcHR1cmUgeW91ciBzcGVjaWFsIG1vbWVudHMgd2l0aCBvdXIgcHJvZmVzc2lvbmFsIHBob3RvZ3JhcGh5IHNlcnZpY2VzLlwiLFxyXG4gICAgICBidXR0b25UZXh0OiBcIlZpZXcgUG9ydGZvbGlvXCIsXHJcbiAgICAgIGJnSW1hZ2U6IFwiLi9pbWFnZXMvc2xpZGVyMS5qcGdcIixcclxuICAgICAgYnV0dG9uTGluazogXCIvcG9ydGZvbGlvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkNyZWF0aXZlIFBob3RvZ3JhcGh5XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkJyaW5naW5nIGNyZWF0aXZpdHkgdG8gbGlmZSB0aHJvdWdoIHRoZSBsZW5zLiBPdXIgaW5ub3ZhdGl2ZSB0ZWNobmlxdWVzIG1ha2UgeW91ciBwaG90b3Mgc3RhbmQgb3V0LlwiLFxyXG4gICAgICBidXR0b25UZXh0OiBcIkxlYXJuIE1vcmVcIixcclxuICAgICAgYmdJbWFnZTogXCIuL2ltYWdlcy9zbGlkZXIyLmpwZ1wiLFxyXG4gICAgICBidXR0b25MaW5rOiBcIi9hYm91dFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJUaW1lbGVzcyBNZW1vcmllc1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJDcmVhdGUgdGltZWxlc3MgbWVtb3JpZXMgd2l0aCBvdXIgZXhwZXJ0IHBob3RvZ3JhcGh5LiBXZSBjYXB0dXJlIHRoZSBlc3NlbmNlIG9mIGV2ZXJ5IG1vbWVudC5cIixcclxuICAgICAgYnV0dG9uVGV4dDogXCJDb250YWN0IFVzXCIsXHJcbiAgICAgIGJnSW1hZ2U6IFwiLi9pbWFnZXMvc2xpZGVyMy5qcGdcIixcclxuICAgICAgYnV0dG9uTGluazogXCIvY29udGFjdFwiXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbmV4cG9ydCBjb25zdCBuYXZMaXN0ID0gW1wiSG9tZVwiLCBcIkFib3V0XCIsIFwiU2VydmljZXNcIiwgXCJQb3J0Zm9saW9cIiwgXCJHYWxsZXJ5XCIsIFwiQ29udGFjdFwiXVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZpY2VzRGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGltYWdlOiBwb3J0cmFpdEltYWdlcyxcclxuICAgIHBhcmFncmFwaDogXCJFeHBsb3JlIG91clwiLFxyXG4gICAgaGVhZGluZ1RleHQ6IFwiQnJhbmRpbmcgUGhvdG9ncmFwaHlcIixcclxuICAgIGJ1dHRvbjogXCJMZWFybiBNb3JlXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGltYWdlOiBiaXJ0aGRheVNob290LFxyXG4gICAgcGFyYWdyYXBoOiBcIkNlbGVicmF0ZSB5b3VyIHNwZWNpYWwgZGF5IHdpdGggYSBwZXJzb25hbGl6ZWQgYmlydGhkYXkgc2hvb3QuXCIsXHJcbiAgICBoZWFkaW5nVGV4dDogXCJCaXJ0aGRheSBTaG9vdFwiLFxyXG4gICAgYnV0dG9uOiBcIkJvb2sgTm93XCIsXHJcbiAgfSxcclxuICAvLyB7XHJcbiAgLy8gICBpZDogMyxcclxuICAvLyAgIGltYWdlOiBcIi4vaW1hZ2VzL2ZhbWlseS1wb3J0cmFpdC5qcGdcIixcclxuICAvLyAgIHBhcmFncmFwaDogXCJDcmVhdGUgbGFzdGluZyBtZW1vcmllcyB3aXRoIGEgZmFtaWx5IHBvcnRyYWl0IHNlc3Npb24uXCIsXHJcbiAgLy8gICBoZWFkaW5nVGV4dDogXCJGYW1pbHkgUG9ydHJhaXRzXCIsXHJcbiAgLy8gICBidXR0b246IFwiU2VlIERldGFpbHNcIixcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIGlkOiA0LFxyXG4gIC8vICAgaW1hZ2U6IFwiLi9pbWFnZXMvY29ycG9yYXRlLWV2ZW50LmpwZ1wiLFxyXG4gIC8vICAgcGFyYWdyYXBoOiBcIlByb2Zlc3Npb25hbCBwaG90b2dyYXBoeSBmb3IgeW91ciBjb3Jwb3JhdGUgZXZlbnRzIGFuZCBnYXRoZXJpbmdzLlwiLFxyXG4gIC8vICAgaGVhZGluZ1RleHQ6IFwiQ29ycG9yYXRlIEV2ZW50IFBob3RvZ3JhcGh5XCIsXHJcbiAgLy8gICBidXR0b246IFwiR2V0IGEgUXVvdGVcIixcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIGlkOiA1LFxyXG4gIC8vICAgaW1hZ2U6IFwiLi9pbWFnZXMvd2VkZGluZy1waG90b2dyYXBoeS5qcGdcIixcclxuICAvLyAgIHBhcmFncmFwaDogXCJDaGVyaXNoIHlvdXIgc3BlY2lhbCBkYXkgd2l0aCBlbGVnYW50IHdlZGRpbmcgcGhvdG9ncmFwaHkuXCIsXHJcbiAgLy8gICBoZWFkaW5nVGV4dDogXCJXZWRkaW5nIFBob3RvZ3JhcGh5XCIsXHJcbiAgLy8gICBidXR0b246IFwiSW5xdWlyZSBOb3dcIixcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIGlkOiA2LFxyXG4gIC8vICAgaW1hZ2U6IFwiLi9pbWFnZXMvcHJvZHVjdC1waG90b2dyYXBoeS5qcGdcIixcclxuICAvLyAgIHBhcmFncmFwaDogXCJTaG93Y2FzZSB5b3VyIHByb2R1Y3RzIHdpdGggaGlnaC1xdWFsaXR5IHByb2R1Y3QgcGhvdG9ncmFwaHkuXCIsXHJcbiAgLy8gICBoZWFkaW5nVGV4dDogXCJQcm9kdWN0IFBob3RvZ3JhcGh5XCIsXHJcbiAgLy8gICBidXR0b246IFwiTGVhcm4gTW9yZVwiLFxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgaWQ6IDcsXHJcbiAgLy8gICBpbWFnZTogXCIuL2ltYWdlcy9yZWFsLWVzdGF0ZS1waG90b2dyYXBoeS5qcGdcIixcclxuICAvLyAgIHBhcmFncmFwaDogXCJIaWdobGlnaHQgdGhlIGJlc3QgZmVhdHVyZXMgb2YgeW91ciBwcm9wZXJ0eSB3aXRoIHByb2Zlc3Npb25hbCByZWFsIGVzdGF0ZSBwaG90b2dyYXBoeS5cIixcclxuICAvLyAgIGhlYWRpbmdUZXh0OiBcIlJlYWwgRXN0YXRlIFBob3RvZ3JhcGh5XCIsXHJcbiAgLy8gICBidXR0b246IFwiR2V0IFN0YXJ0ZWRcIixcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIGlkOiA4LFxyXG4gIC8vICAgaW1hZ2U6IFwiLi9pbWFnZXMvbWF0ZXJuaXR5LXBob3RvZ3JhcGh5LmpwZ1wiLFxyXG4gIC8vICAgcGFyYWdyYXBoOiBcIkNlbGVicmF0ZSB0aGlzIHNwZWNpYWwgbW9tZW50IHdpdGggYmVhdXRpZnVsIG1hdGVybml0eSBwaG90b2dyYXBoeS5cIixcclxuICAvLyAgIGhlYWRpbmdUZXh0OiBcIk1hdGVybml0eSBQaG90b2dyYXBoeVwiLFxyXG4gIC8vICAgYnV0dG9uOiBcIkJvb2sgU2Vzc2lvblwiLFxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgaWQ6IDksXHJcbiAgLy8gICBpbWFnZTogXCIuL2ltYWdlcy9uZXdib3JuLXBob3RvZ3JhcGh5LmpwZ1wiLFxyXG4gIC8vICAgcGFyYWdyYXBoOiBcIkNhcHR1cmUgdGhlIGVhcmx5IG1vbWVudHMgb2YgeW91ciBuZXdib3Ju4oCZcyBsaWZlIHdpdGggZ2VudGxlIG5ld2Jvcm4gcGhvdG9ncmFwaHkuXCIsXHJcbiAgLy8gICBoZWFkaW5nVGV4dDogXCJOZXdib3JuIFBob3RvZ3JhcGh5XCIsXHJcbiAgLy8gICBidXR0b246IFwiQ29udGFjdCBVc1wiLFxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgaWQ6IDEwLFxyXG4gIC8vICAgaW1hZ2U6IFwiLi9pbWFnZXMvZXZlbnQtcGhvdG9ncmFwaHkuanBnXCIsXHJcbiAgLy8gICBwYXJhZ3JhcGg6IFwiRG9jdW1lbnQgeW91ciBldmVudHMgd2l0aCBkeW5hbWljIGFuZCBlbmdhZ2luZyBldmVudCBwaG90b2dyYXBoeS5cIixcclxuICAvLyAgIGhlYWRpbmdUZXh0OiBcIkV2ZW50IFBob3RvZ3JhcGh5XCIsXHJcbiAgLy8gICBidXR0b246IFwiU2VlIFBvcnRmb2xpb1wiLFxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgaWQ6IDExLFxyXG4gIC8vICAgaW1hZ2U6IFwiLi9pbWFnZXMvZWRpdG9yaWFsLXBob3RvZ3JhcGh5LmpwZ1wiLFxyXG4gIC8vICAgcGFyYWdyYXBoOiBcIlByb2Zlc3Npb25hbCBlZGl0b3JpYWwgcGhvdG9ncmFwaHkgZm9yIG1hZ2F6aW5lcywgYmxvZ3MsIGFuZCBtb3JlLlwiLFxyXG4gIC8vICAgaGVhZGluZ1RleHQ6IFwiRWRpdG9yaWFsIFBob3RvZ3JhcGh5XCIsXHJcbiAgLy8gICBidXR0b246IFwiUmVxdWVzdCBhIFF1b3RlXCIsXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICBpZDogMTIsXHJcbiAgLy8gICBpbWFnZTogXCIuL2ltYWdlcy9lbmdhZ2VtZW50LXBob3RvZ3JhcGh5LmpwZ1wiLFxyXG4gIC8vICAgcGFyYWdyYXBoOiBcIkNhcHR1cmUgdGhlIGpveSBvZiB5b3VyIGVuZ2FnZW1lbnQgd2l0aCBzdHVubmluZyBwaG90b2dyYXBoeS5cIixcclxuICAvLyAgIGhlYWRpbmdUZXh0OiBcIkVuZ2FnZW1lbnQgUGhvdG9ncmFwaHlcIixcclxuICAvLyAgIGJ1dHRvbjogXCJCb29rIE5vd1wiLFxyXG4gIC8vIH0sXHJcbl07XHJcbiJdLCJuYW1lcyI6WyJwb3J0cmFpdEltYWdlcyIsImJpcnRoZGF5U2hvb3QiLCJoZXJvU2xpZGVyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImJ1dHRvblRleHQiLCJiZ0ltYWdlIiwiYnV0dG9uTGluayIsIm5hdkxpc3QiLCJzZXJ2aWNlc0RhdGEiLCJpZCIsImltYWdlIiwicGFyYWdyYXBoIiwiaGVhZGluZ1RleHQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Components/constant.js\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   heroSlider: function() { return /* binding */ heroSlider; },\n/* harmony export */   navList: function() { return /* binding */ navList; },\n/* harmony export */   servicesData: function() { return /* binding */ servicesData; }\n/* harmony export */ });\n/* harmony import */ var _public_images_portrait_person_wearing_yellow_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../public/images/portrait-person-wearing-yellow.jpg */ \"(app-pages-browser)/./public/images/portrait-person-wearing-yellow.jpg\");\n/* harmony import */ var _public_images_black_white_portrait_professional_tennis_player_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../public/images/black-white-portrait-professional-tennis-player.jpg */ \"(app-pages-browser)/./public/images/black-white-portrait-professional-tennis-player.jpg\");\n// images for services\n// event coverage\n// birthday shoot\n// Personal Branding Photography\"\n// Drone Photography and Videography\"\n//  Family Photography\n\n\nconst heroSlider = [\n    {\n        title: \"Capturing Moments\",\n        description: \"Every picture tells a story. Let us capture your special moments with our professional photography services.\",\n        buttonText: \"View Portfolio\",\n        bgImage: \"./images/slider1.jpg\",\n        buttonLink: \"/portfolio\"\n    },\n    {\n        title: \"Creative Photography\",\n        description: \"Bringing creativity to life through the lens. Our innovative techniques make your photos stand out.\",\n        buttonText: \"Learn More\",\n        bgImage: \"./images/slider2.jpg\",\n        buttonLink: \"/about\"\n    },\n    {\n        title: \"Timeless Memories\",\n        description: \"Create timeless memories with our expert photography. We capture the essence of every moment.\",\n        buttonText: \"Contact Us\",\n        bgImage: \"./images/slider3.jpg\",\n        buttonLink: \"/contact\"\n    }\n];\nconst navList = [\n    \"Home\",\n    \"About\",\n    \"Services\",\n    \"Portfolio\",\n    \"Gallery\",\n    \"Contact\"\n];\nconst servicesData = [\n    {\n        id: 1,\n        image: _public_images_portrait_person_wearing_yellow_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        paragraph: \"Explore our\",\n        headingText: \"Branding Photography\",\n        button: \"Learn More\"\n    },\n    {\n        id: 2,\n        image: _public_images_black_white_portrait_professional_tennis_player_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        paragraph: \"Explore our\",\n        headingText: \"Creative BirthdayShot\",\n        button: \"Book Now\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Db21wb25lbnRzL2NvbnN0YW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0JBQXNCO0FBQ3RCLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakIsaUNBQWlDO0FBQ2pDLHFDQUFxQztBQUNyQyxzQkFBc0I7QUFFd0Q7QUFDZ0I7QUFFdkYsTUFBTUUsYUFBYTtJQUN0QjtRQUNFQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsWUFBWTtRQUNaQyxTQUFTO1FBQ1RDLFlBQVk7SUFDZDtJQUNBO1FBQ0VKLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxZQUFZO1FBQ1pDLFNBQVM7UUFDVEMsWUFBWTtJQUNkO0lBQ0E7UUFDRUosT0FBTztRQUNQQyxhQUFhO1FBQ2JDLFlBQVk7UUFDWkMsU0FBUztRQUNUQyxZQUFZO0lBQ2Q7Q0FDRCxDQUFDO0FBRUcsTUFBTUMsVUFBVTtJQUFDO0lBQVE7SUFBUztJQUFZO0lBQWE7SUFBVztDQUFVO0FBRWhGLE1BQU1DLGVBQWU7SUFDMUI7UUFDRUMsSUFBSTtRQUNKQyxPQUFPWCx5RkFBY0E7UUFDckJZLFdBQVc7UUFDWEMsYUFBYTtRQUNiQyxRQUFRO0lBQ1Y7SUFDQTtRQUNFSixJQUFJO1FBQ0pDLE9BQU9WLDBHQUFhQTtRQUNwQlcsV0FBVztRQUNYQyxhQUFhO1FBQ2JDLFFBQVE7SUFDVjtDQXVFRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9Db21wb25lbnRzL2NvbnN0YW50LmpzP2I2YzMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1hZ2VzIGZvciBzZXJ2aWNlc1xyXG4vLyBldmVudCBjb3ZlcmFnZVxyXG4vLyBiaXJ0aGRheSBzaG9vdFxyXG4vLyBQZXJzb25hbCBCcmFuZGluZyBQaG90b2dyYXBoeVwiXHJcbi8vIERyb25lIFBob3RvZ3JhcGh5IGFuZCBWaWRlb2dyYXBoeVwiXHJcbi8vICBGYW1pbHkgUGhvdG9ncmFwaHlcclxuXHJcbmltcG9ydCBwb3J0cmFpdEltYWdlcyBmcm9tIFwiL3B1YmxpYy9pbWFnZXMvcG9ydHJhaXQtcGVyc29uLXdlYXJpbmcteWVsbG93LmpwZ1wiXHJcbmltcG9ydCBiaXJ0aGRheVNob290IGZyb20gXCIvcHVibGljL2ltYWdlcy9ibGFjay13aGl0ZS1wb3J0cmFpdC1wcm9mZXNzaW9uYWwtdGVubmlzLXBsYXllci5qcGdcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGhlcm9TbGlkZXIgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkNhcHR1cmluZyBNb21lbnRzXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkV2ZXJ5IHBpY3R1cmUgdGVsbHMgYSBzdG9yeS4gTGV0IHVzIGNhcHR1cmUgeW91ciBzcGVjaWFsIG1vbWVudHMgd2l0aCBvdXIgcHJvZmVzc2lvbmFsIHBob3RvZ3JhcGh5IHNlcnZpY2VzLlwiLFxyXG4gICAgICBidXR0b25UZXh0OiBcIlZpZXcgUG9ydGZvbGlvXCIsXHJcbiAgICAgIGJnSW1hZ2U6IFwiLi9pbWFnZXMvc2xpZGVyMS5qcGdcIixcclxuICAgICAgYnV0dG9uTGluazogXCIvcG9ydGZvbGlvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkNyZWF0aXZlIFBob3RvZ3JhcGh5XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkJyaW5naW5nIGNyZWF0aXZpdHkgdG8gbGlmZSB0aHJvdWdoIHRoZSBsZW5zLiBPdXIgaW5ub3ZhdGl2ZSB0ZWNobmlxdWVzIG1ha2UgeW91ciBwaG90b3Mgc3RhbmQgb3V0LlwiLFxyXG4gICAgICBidXR0b25UZXh0OiBcIkxlYXJuIE1vcmVcIixcclxuICAgICAgYmdJbWFnZTogXCIuL2ltYWdlcy9zbGlkZXIyLmpwZ1wiLFxyXG4gICAgICBidXR0b25MaW5rOiBcIi9hYm91dFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJUaW1lbGVzcyBNZW1vcmllc1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJDcmVhdGUgdGltZWxlc3MgbWVtb3JpZXMgd2l0aCBvdXIgZXhwZXJ0IHBob3RvZ3JhcGh5LiBXZSBjYXB0dXJlIHRoZSBlc3NlbmNlIG9mIGV2ZXJ5IG1vbWVudC5cIixcclxuICAgICAgYnV0dG9uVGV4dDogXCJDb250YWN0IFVzXCIsXHJcbiAgICAgIGJnSW1hZ2U6IFwiLi9pbWFnZXMvc2xpZGVyMy5qcGdcIixcclxuICAgICAgYnV0dG9uTGluazogXCIvY29udGFjdFwiXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbmV4cG9ydCBjb25zdCBuYXZMaXN0ID0gW1wiSG9tZVwiLCBcIkFib3V0XCIsIFwiU2VydmljZXNcIiwgXCJQb3J0Zm9saW9cIiwgXCJHYWxsZXJ5XCIsIFwiQ29udGFjdFwiXVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZpY2VzRGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGltYWdlOiBwb3J0cmFpdEltYWdlcyxcclxuICAgIHBhcmFncmFwaDogXCJFeHBsb3JlIG91clwiLFxyXG4gICAgaGVhZGluZ1RleHQ6IFwiQnJhbmRpbmcgUGhvdG9ncmFwaHlcIixcclxuICAgIGJ1dHRvbjogXCJMZWFybiBNb3JlXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGltYWdlOiBiaXJ0aGRheVNob290LFxyXG4gICAgcGFyYWdyYXBoOiBcIkV4cGxvcmUgb3VyXCIsXHJcbiAgICBoZWFkaW5nVGV4dDogXCJDcmVhdGl2ZSBCaXJ0aGRheVNob3RcIixcclxuICAgIGJ1dHRvbjogXCJCb29rIE5vd1wiLFxyXG4gIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgaWQ6IDMsXHJcbiAgLy8gICBpbWFnZTogXCIuL2ltYWdlcy9mYW1pbHktcG9ydHJhaXQuanBnXCIsXHJcbiAgLy8gICBwYXJhZ3JhcGg6IFwiQ3JlYXRlIGxhc3RpbmcgbWVtb3JpZXMgd2l0aCBhIGZhbWlseSBwb3J0cmFpdCBzZXNzaW9uLlwiLFxyXG4gIC8vICAgaGVhZGluZ1RleHQ6IFwiRmFtaWx5IFBvcnRyYWl0c1wiLFxyXG4gIC8vICAgYnV0dG9uOiBcIlNlZSBEZXRhaWxzXCIsXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICBpZDogNCxcclxuICAvLyAgIGltYWdlOiBcIi4vaW1hZ2VzL2NvcnBvcmF0ZS1ldmVudC5qcGdcIixcclxuICAvLyAgIHBhcmFncmFwaDogXCJQcm9mZXNzaW9uYWwgcGhvdG9ncmFwaHkgZm9yIHlvdXIgY29ycG9yYXRlIGV2ZW50cyBhbmQgZ2F0aGVyaW5ncy5cIixcclxuICAvLyAgIGhlYWRpbmdUZXh0OiBcIkNvcnBvcmF0ZSBFdmVudCBQaG90b2dyYXBoeVwiLFxyXG4gIC8vICAgYnV0dG9uOiBcIkdldCBhIFF1b3RlXCIsXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICBpZDogNSxcclxuICAvLyAgIGltYWdlOiBcIi4vaW1hZ2VzL3dlZGRpbmctcGhvdG9ncmFwaHkuanBnXCIsXHJcbiAgLy8gICBwYXJhZ3JhcGg6IFwiQ2hlcmlzaCB5b3VyIHNwZWNpYWwgZGF5IHdpdGggZWxlZ2FudCB3ZWRkaW5nIHBob3RvZ3JhcGh5LlwiLFxyXG4gIC8vICAgaGVhZGluZ1RleHQ6IFwiV2VkZGluZyBQaG90b2dyYXBoeVwiLFxyXG4gIC8vICAgYnV0dG9uOiBcIklucXVpcmUgTm93XCIsXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICBpZDogNixcclxuICAvLyAgIGltYWdlOiBcIi4vaW1hZ2VzL3Byb2R1Y3QtcGhvdG9ncmFwaHkuanBnXCIsXHJcbiAgLy8gICBwYXJhZ3JhcGg6IFwiU2hvd2Nhc2UgeW91ciBwcm9kdWN0cyB3aXRoIGhpZ2gtcXVhbGl0eSBwcm9kdWN0IHBob3RvZ3JhcGh5LlwiLFxyXG4gIC8vICAgaGVhZGluZ1RleHQ6IFwiUHJvZHVjdCBQaG90b2dyYXBoeVwiLFxyXG4gIC8vICAgYnV0dG9uOiBcIkxlYXJuIE1vcmVcIixcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIGlkOiA3LFxyXG4gIC8vICAgaW1hZ2U6IFwiLi9pbWFnZXMvcmVhbC1lc3RhdGUtcGhvdG9ncmFwaHkuanBnXCIsXHJcbiAgLy8gICBwYXJhZ3JhcGg6IFwiSGlnaGxpZ2h0IHRoZSBiZXN0IGZlYXR1cmVzIG9mIHlvdXIgcHJvcGVydHkgd2l0aCBwcm9mZXNzaW9uYWwgcmVhbCBlc3RhdGUgcGhvdG9ncmFwaHkuXCIsXHJcbiAgLy8gICBoZWFkaW5nVGV4dDogXCJSZWFsIEVzdGF0ZSBQaG90b2dyYXBoeVwiLFxyXG4gIC8vICAgYnV0dG9uOiBcIkdldCBTdGFydGVkXCIsXHJcbiAgLy8gfSxcclxuICAvLyB7XHJcbiAgLy8gICBpZDogOCxcclxuICAvLyAgIGltYWdlOiBcIi4vaW1hZ2VzL21hdGVybml0eS1waG90b2dyYXBoeS5qcGdcIixcclxuICAvLyAgIHBhcmFncmFwaDogXCJDZWxlYnJhdGUgdGhpcyBzcGVjaWFsIG1vbWVudCB3aXRoIGJlYXV0aWZ1bCBtYXRlcm5pdHkgcGhvdG9ncmFwaHkuXCIsXHJcbiAgLy8gICBoZWFkaW5nVGV4dDogXCJNYXRlcm5pdHkgUGhvdG9ncmFwaHlcIixcclxuICAvLyAgIGJ1dHRvbjogXCJCb29rIFNlc3Npb25cIixcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIGlkOiA5LFxyXG4gIC8vICAgaW1hZ2U6IFwiLi9pbWFnZXMvbmV3Ym9ybi1waG90b2dyYXBoeS5qcGdcIixcclxuICAvLyAgIHBhcmFncmFwaDogXCJDYXB0dXJlIHRoZSBlYXJseSBtb21lbnRzIG9mIHlvdXIgbmV3Ym9ybuKAmXMgbGlmZSB3aXRoIGdlbnRsZSBuZXdib3JuIHBob3RvZ3JhcGh5LlwiLFxyXG4gIC8vICAgaGVhZGluZ1RleHQ6IFwiTmV3Ym9ybiBQaG90b2dyYXBoeVwiLFxyXG4gIC8vICAgYnV0dG9uOiBcIkNvbnRhY3QgVXNcIixcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIGlkOiAxMCxcclxuICAvLyAgIGltYWdlOiBcIi4vaW1hZ2VzL2V2ZW50LXBob3RvZ3JhcGh5LmpwZ1wiLFxyXG4gIC8vICAgcGFyYWdyYXBoOiBcIkRvY3VtZW50IHlvdXIgZXZlbnRzIHdpdGggZHluYW1pYyBhbmQgZW5nYWdpbmcgZXZlbnQgcGhvdG9ncmFwaHkuXCIsXHJcbiAgLy8gICBoZWFkaW5nVGV4dDogXCJFdmVudCBQaG90b2dyYXBoeVwiLFxyXG4gIC8vICAgYnV0dG9uOiBcIlNlZSBQb3J0Zm9saW9cIixcclxuICAvLyB9LFxyXG4gIC8vIHtcclxuICAvLyAgIGlkOiAxMSxcclxuICAvLyAgIGltYWdlOiBcIi4vaW1hZ2VzL2VkaXRvcmlhbC1waG90b2dyYXBoeS5qcGdcIixcclxuICAvLyAgIHBhcmFncmFwaDogXCJQcm9mZXNzaW9uYWwgZWRpdG9yaWFsIHBob3RvZ3JhcGh5IGZvciBtYWdhemluZXMsIGJsb2dzLCBhbmQgbW9yZS5cIixcclxuICAvLyAgIGhlYWRpbmdUZXh0OiBcIkVkaXRvcmlhbCBQaG90b2dyYXBoeVwiLFxyXG4gIC8vICAgYnV0dG9uOiBcIlJlcXVlc3QgYSBRdW90ZVwiLFxyXG4gIC8vIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgaWQ6IDEyLFxyXG4gIC8vICAgaW1hZ2U6IFwiLi9pbWFnZXMvZW5nYWdlbWVudC1waG90b2dyYXBoeS5qcGdcIixcclxuICAvLyAgIHBhcmFncmFwaDogXCJDYXB0dXJlIHRoZSBqb3kgb2YgeW91ciBlbmdhZ2VtZW50IHdpdGggc3R1bm5pbmcgcGhvdG9ncmFwaHkuXCIsXHJcbiAgLy8gICBoZWFkaW5nVGV4dDogXCJFbmdhZ2VtZW50IFBob3RvZ3JhcGh5XCIsXHJcbiAgLy8gICBidXR0b246IFwiQm9vayBOb3dcIixcclxuICAvLyB9LFxyXG5dO1xyXG4iXSwibmFtZXMiOlsicG9ydHJhaXRJbWFnZXMiLCJiaXJ0aGRheVNob290IiwiaGVyb1NsaWRlciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJidXR0b25UZXh0IiwiYmdJbWFnZSIsImJ1dHRvbkxpbmsiLCJuYXZMaXN0Iiwic2VydmljZXNEYXRhIiwiaWQiLCJpbWFnZSIsInBhcmFncmFwaCIsImhlYWRpbmdUZXh0IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Components/constant.js\n"));

/***/ })

});
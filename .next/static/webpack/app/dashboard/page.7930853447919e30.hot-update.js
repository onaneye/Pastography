"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./app/Components/UserTable.jsx":
/*!**************************************!*\
  !*** ./app/Components/UserTable.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _UserTable_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/UserTable.module.css */ \"(app-pages-browser)/./UserTable.module.css\");\n/* harmony import */ var _UserTable_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_UserTable_module_css__WEBPACK_IMPORTED_MODULE_3__);\n// components/UserTable.js\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n // Import the CSS module\nconst UserTable = (param)=>{\n    let { users } = param;\n    _s();\n    const [userList, setUserList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(users);\n    const handleRemove = (id)=>{\n        setUserList(userList.filter((user)=>user.id !== id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-x-auto mb-7 bg-gray-800 rounded-lg shadow-lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-white m-5 px-auto font-poppins font-bold text-2xl\",\n                children: \"Workforce\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pjbro\\\\OneDrive\\\\Desktop\\\\Pastography\\\\app\\\\Components\\\\UserTable.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"min-w-full divide-y divide-gray-700\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            className: \"text-white bg-gray-900\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"px-4 py-2 text-left\",\n                                    children: \"Picture\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pjbro\\\\OneDrive\\\\Desktop\\\\Pastography\\\\app\\\\Components\\\\UserTable.jsx\",\n                                    lineNumber: 21,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"px-4 py-2 text-left\",\n                                    children: \"Name\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pjbro\\\\OneDrive\\\\Desktop\\\\Pastography\\\\app\\\\Components\\\\UserTable.jsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"px-4 py-2 text-left\",\n                                    children: \"Date Joined\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pjbro\\\\OneDrive\\\\Desktop\\\\Pastography\\\\app\\\\Components\\\\UserTable.jsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"px-4 py-2 text-left\",\n                                    children: \"Actions\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pjbro\\\\OneDrive\\\\Desktop\\\\Pastography\\\\app\\\\Components\\\\UserTable.jsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\pjbro\\\\OneDrive\\\\Desktop\\\\Pastography\\\\app\\\\Components\\\\UserTable.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pjbro\\\\OneDrive\\\\Desktop\\\\Pastography\\\\app\\\\Components\\\\UserTable.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        className: \"divide-y divide-gray-700 nth:child(even):bg-gray-800\",\n                        children: userList.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                className: (_UserTable_module_css__WEBPACK_IMPORTED_MODULE_3___default().tableRow),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"px-4 py-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                src: user.picture,\n                                                alt: user.name,\n                                                width: 50,\n                                                height: 50,\n                                                className: \"rounded-full w-[70px] h-[70px]\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\pjbro\\\\OneDrive\\\\Desktop\\\\Pastography\\\\app\\\\Components\\\\UserTable.jsx\",\n                                                lineNumber: 31,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"px-4 py-2 text-white\",\n                                                children: user.name\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\pjbro\\\\OneDrive\\\\Desktop\\\\Pastography\\\\app\\\\Components\\\\UserTable.jsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 18\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\pjbro\\\\OneDrive\\\\Desktop\\\\Pastography\\\\app\\\\Components\\\\UserTable.jsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"px-4 py-2 text-white\",\n                                        children: user.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\pjbro\\\\OneDrive\\\\Desktop\\\\Pastography\\\\app\\\\Components\\\\UserTable.jsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"px-4 py-2 text-white\",\n                                        children: new Date(user.dateJoined).toLocaleDateString()\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\pjbro\\\\OneDrive\\\\Desktop\\\\Pastography\\\\app\\\\Components\\\\UserTable.jsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"px-4 py-2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>handleRemove(user.id),\n                                            className: \"bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition\",\n                                            children: \"Remove\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\pjbro\\\\OneDrive\\\\Desktop\\\\Pastography\\\\app\\\\Components\\\\UserTable.jsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\pjbro\\\\OneDrive\\\\Desktop\\\\Pastography\\\\app\\\\Components\\\\UserTable.jsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, user.id, true, {\n                                fileName: \"C:\\\\Users\\\\pjbro\\\\OneDrive\\\\Desktop\\\\Pastography\\\\app\\\\Components\\\\UserTable.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pjbro\\\\OneDrive\\\\Desktop\\\\Pastography\\\\app\\\\Components\\\\UserTable.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\pjbro\\\\OneDrive\\\\Desktop\\\\Pastography\\\\app\\\\Components\\\\UserTable.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\pjbro\\\\OneDrive\\\\Desktop\\\\Pastography\\\\app\\\\Components\\\\UserTable.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UserTable, \"ep5qnW4eduXZntXnSo2LVbsGnHY=\");\n_c = UserTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserTable);\nvar _c;\n$RefreshReg$(_c, \"UserTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Db21wb25lbnRzL1VzZXJUYWJsZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLDBCQUEwQjs7O0FBR0s7QUFDRTtBQUNXLENBQUMsd0JBQXdCO0FBRXJFLE1BQU1HLFlBQVk7UUFBQyxFQUFFQyxLQUFLLEVBQUU7O0lBQzFCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQ0c7SUFFekMsTUFBTUcsZUFBZSxDQUFDQztRQUNwQkYsWUFBWUQsU0FBU0ksTUFBTSxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLRixFQUFFLEtBQUtBO0lBQ2xEO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBeUQ7Ozs7OzswQkFDdkUsOERBQUNFO2dCQUFNRixXQUFVOztrQ0FDZiw4REFBQ0c7a0NBQ0MsNEVBQUNDOzRCQUFHSixXQUFVOzs4Q0FDWiw4REFBQ0s7b0NBQUdMLFdBQVU7OENBQXNCOzs7Ozs7OENBQ3BDLDhEQUFDSztvQ0FBR0wsV0FBVTs4Q0FBc0I7Ozs7Ozs4Q0FDcEMsOERBQUNLO29DQUFHTCxXQUFVOzhDQUFzQjs7Ozs7OzhDQUNwQyw4REFBQ0s7b0NBQUdMLFdBQVU7OENBQXNCOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHeEMsOERBQUNNO3dCQUFNTixXQUFVO2tDQUNkUCxTQUFTYyxHQUFHLENBQUNULENBQUFBLHFCQUNaLDhEQUFDTTtnQ0FBaUJKLFdBQVdWLHVFQUFlOztrREFDMUMsOERBQUNtQjt3Q0FBR1QsV0FBVTs7MERBQ1osOERBQUNaLGtEQUFLQTtnREFDSnNCLEtBQUtaLEtBQUthLE9BQU87Z0RBQ2pCQyxLQUFLZCxLQUFLZSxJQUFJO2dEQUNkQyxPQUFPO2dEQUNQQyxRQUFRO2dEQUNSZixXQUFVOzs7Ozs7MERBRVgsOERBQUNTO2dEQUFHVCxXQUFVOzBEQUF3QkYsS0FBS2UsSUFBSTs7Ozs7Ozs7Ozs7O2tEQUVsRCw4REFBQ0o7d0NBQUdULFdBQVU7a0RBQXdCRixLQUFLZSxJQUFJOzs7Ozs7a0RBQy9DLDhEQUFDSjt3Q0FBR1QsV0FBVTtrREFBd0IsSUFBSWdCLEtBQUtsQixLQUFLbUIsVUFBVSxFQUFFQyxrQkFBa0I7Ozs7OztrREFDbEYsOERBQUNUO3dDQUFHVCxXQUFVO2tEQUNaLDRFQUFDbUI7NENBQ0NDLFNBQVMsSUFBTXpCLGFBQWFHLEtBQUtGLEVBQUU7NENBQ25DSSxXQUFVO3NEQUNYOzs7Ozs7Ozs7Ozs7K0JBakJJRixLQUFLRixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkI1QjtHQWhETUw7S0FBQUE7QUFrRE4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL0NvbXBvbmVudHMvVXNlclRhYmxlLmpzeD8yZTZmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvVXNlclRhYmxlLmpzXHJcbid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICdAL1VzZXJUYWJsZS5tb2R1bGUuY3NzJzsgLy8gSW1wb3J0IHRoZSBDU1MgbW9kdWxlXHJcblxyXG5jb25zdCBVc2VyVGFibGUgPSAoeyB1c2VycyB9KSA9PiB7XHJcbiAgY29uc3QgW3VzZXJMaXN0LCBzZXRVc2VyTGlzdF0gPSB1c2VTdGF0ZSh1c2Vycyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlbW92ZSA9IChpZCkgPT4ge1xyXG4gICAgc2V0VXNlckxpc3QodXNlckxpc3QuZmlsdGVyKHVzZXIgPT4gdXNlci5pZCAhPT0gaWQpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWF1dG8gbWItNyBiZy1ncmF5LTgwMCByb3VuZGVkLWxnIHNoYWRvdy1sZ1wiPlxyXG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtLTUgcHgtYXV0byBmb250LXBvcHBpbnMgZm9udC1ib2xkIHRleHQtMnhsXCI+V29ya2ZvcmNlPC9oMz5cclxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbi13LWZ1bGwgZGl2aWRlLXkgZGl2aWRlLWdyYXktNzAwXCI+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMiB0ZXh0LWxlZnRcIj5QaWN0dXJlPC90aD5cclxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMiB0ZXh0LWxlZnRcIj5OYW1lPC90aD5cclxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMiB0ZXh0LWxlZnRcIj5EYXRlIEpvaW5lZDwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTIgdGV4dC1sZWZ0XCI+QWN0aW9uczwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImRpdmlkZS15IGRpdmlkZS1ncmF5LTcwMCBudGg6Y2hpbGQoZXZlbik6YmctZ3JheS04MDBcIj5cclxuICAgICAgICAgIHt1c2VyTGlzdC5tYXAodXNlciA9PiAoXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e3VzZXIuaWR9IGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlUm93fT5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0yXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgc3JjPXt1c2VyLnBpY3R1cmV9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17dXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17NTB9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCB3LVs3MHB4XSBoLVs3MHB4XVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTIgdGV4dC13aGl0ZVwiPnt1c2VyLm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTIgdGV4dC13aGl0ZVwiPnt1c2VyLm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0yIHRleHQtd2hpdGVcIj57bmV3IERhdGUodXNlci5kYXRlSm9pbmVkKS50b0xvY2FsZURhdGVTdHJpbmcoKX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlKHVzZXIuaWQpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQgaG92ZXI6YmctcmVkLTYwMCB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgUmVtb3ZlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyVGFibGU7XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVN0YXRlIiwic3R5bGVzIiwiVXNlclRhYmxlIiwidXNlcnMiLCJ1c2VyTGlzdCIsInNldFVzZXJMaXN0IiwiaGFuZGxlUmVtb3ZlIiwiaWQiLCJmaWx0ZXIiLCJ1c2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwidGFibGVSb3ciLCJ0ZCIsInNyYyIsInBpY3R1cmUiLCJhbHQiLCJuYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJEYXRlIiwiZGF0ZUpvaW5lZCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Components/UserTable.jsx\n"));

/***/ })

});
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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_app_nlw_copa_preview_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/app-nlw-copa-preview.png */ \"./src/assets/app-nlw-copa-preview.png\");\n/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/logo.svg */ \"./src/assets/logo.svg\");\n/* harmony import */ var _assets_users_avatar_example_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/users-avatar-example.png */ \"./src/assets/users-avatar-example.png\");\n/* harmony import */ var _assets_icon_check_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icon-check.svg */ \"./src/assets/icon-check.svg\");\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/axios */ \"./src/lib/axios.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(props) {\n    _s();\n    const [poolTitle, setPoolTitle] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\");\n    async function createPool(event) {\n        event.preventDefault();\n        try {\n            const response = await _lib_axios__WEBPACK_IMPORTED_MODULE_6__.api.post(\"/pools\", {\n                title: poolTitle\n            });\n            const { code  } = response.data;\n            navigator.clipboard.writeText(code);\n            alert(\"Bol\\xe3o criado com sucesso, o c\\xf3digo foi copiado para a \\xe1rea de transfer\\xeancia!\");\n        } catch (err) {\n            alert(\"Falha ao criar o bol\\xe3o, tente novamente!\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-[1124px] h-screen mx-auto grid grid-cols-2 gap-28 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: _assets_logo_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"NLW COPA\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\paulo\\\\Documents\\\\nlwcopa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"mt-14 text-white text-5xl font-bold leading-tight\",\n                        children: \"Crie seu pr\\xf3prio bol\\xe3o da copa e compartilhe entre amigos!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\paulo\\\\Documents\\\\nlwcopa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-10 flex items-center gap-2 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: _assets_users_avatar_example_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\paulo\\\\Documents\\\\nlwcopa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                className: \"text-gray-100 text-xl\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-ignite-500\",\n                                        children: [\n                                            \"+\",\n                                            props.userCount\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\paulo\\\\Documents\\\\nlwcopa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 13\n                                    }, this),\n                                    \" pessoas j\\xe1 est\\xe3o usando\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\paulo\\\\Documents\\\\nlwcopa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\paulo\\\\Documents\\\\nlwcopa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: createPool,\n                        className: \"mt-10 flex gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm\",\n                                type: \"text\",\n                                required: true,\n                                placeholder: \"Qual nome do seu bot\\xe3o?\",\n                                onChange: (event)=>setPoolTitle(event.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\paulo\\\\Documents\\\\nlwcopa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700\",\n                                type: \"submit\",\n                                children: \"Criar meu bol\\xe3o\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\paulo\\\\Documents\\\\nlwcopa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\paulo\\\\Documents\\\\nlwcopa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mt-4 text-sm text-gray-300 leading-relaxed\",\n                        children: \"Ap\\xf3s criar seu bol\\xe3o, voc\\xea receber\\xe1 um c\\xf3digo \\xfanico que poder\\xe1 usar para convidar outras pessoas \\uD83D\\uDE80\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\paulo\\\\Documents\\\\nlwcopa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-10 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: _assets_icon_check_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\paulo\\\\Documents\\\\nlwcopa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-bold text-2xl\",\n                                                children: [\n                                                    \"+\",\n                                                    props.poolCount\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\paulo\\\\Documents\\\\nlwcopa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"Bol\\xf5es criados\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\paulo\\\\Documents\\\\nlwcopa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\paulo\\\\Documents\\\\nlwcopa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\paulo\\\\Documents\\\\nlwcopa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-px h-14 bg-gray-600\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\paulo\\\\Documents\\\\nlwcopa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: _assets_icon_check_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\paulo\\\\Documents\\\\nlwcopa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-bold text-2xl\",\n                                                children: [\n                                                    \"+\",\n                                                    props.guessCount\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\paulo\\\\Documents\\\\nlwcopa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"Palpites enviados\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\paulo\\\\Documents\\\\nlwcopa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                                lineNumber: 83,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\paulo\\\\Documents\\\\nlwcopa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\paulo\\\\Documents\\\\nlwcopa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\paulo\\\\Documents\\\\nlwcopa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\paulo\\\\Documents\\\\nlwcopa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: _assets_app_nlw_copa_preview_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                alt: \"Dois celulares exibindo uma pr\\xe9via da aplica\\xe7\\xe3o m\\xf3vel do nlw copa\",\n                quality: 100\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\paulo\\\\Documents\\\\nlwcopa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\paulo\\\\Documents\\\\nlwcopa\\\\web\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"2PkG/mnadCMIAW1vosX9Nle11yE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBOEI7QUFDZ0M7QUFDdEI7QUFDOEI7QUFDbkI7QUFDakI7QUFDUzs7QUFRNUIsU0FBU08sS0FBS0MsS0FBZ0IsRUFBRTs7SUFDN0MsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQSxDQUFDO0lBRTNDLGVBQWVLLFdBQVdDLEtBQWdCLEVBQUU7UUFDMUNBLE1BQU1DLGNBQWM7UUFFcEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTVQsZ0RBQVEsQ0FBQyxVQUFVO2dCQUN4Q1csT0FBT1A7WUFDVDtZQUNBLE1BQU0sRUFBRVEsS0FBSSxFQUFFLEdBQUdILFNBQVNJLElBQUk7WUFFOUJDLFVBQVVDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDSjtZQUU5QkssTUFBTTtRQUNSLEVBQUUsT0FBT0MsS0FBSztZQUNaRCxNQUFNO1FBQ1I7SUFDRjtJQUVBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7O2tDQUNDLDhEQUFDMUIsbURBQUtBO3dCQUFDMkIsS0FBS3pCLHdEQUFPQTt3QkFBRTBCLEtBQUk7Ozs7OztrQ0FFekIsOERBQUNDO3dCQUFHSixXQUFVO2tDQUFvRDs7Ozs7O2tDQUVsRSw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDekIsbURBQUtBO2dDQUFDMkIsS0FBS3hCLHdFQUFxQkE7Z0NBQUV5QixLQUFJOzs7Ozs7MENBQ3ZDLDhEQUFDRTtnQ0FBT0wsV0FBVTs7a0RBQ2hCLDhEQUFDTTt3Q0FBS04sV0FBVTs7NENBQWtCOzRDQUFFakIsTUFBTXdCLFNBQVM7Ozs7Ozs7b0NBQVE7Ozs7Ozs7Ozs7Ozs7a0NBSy9ELDhEQUFDQzt3QkFBS0MsVUFBVXZCO3dCQUFZYyxXQUFVOzswQ0FDcEMsOERBQUNVO2dDQUNDVixXQUFVO2dDQUNWVyxNQUFLO2dDQUNMQyxRQUFRO2dDQUNSQyxhQUFZO2dDQUNaQyxVQUFVM0IsQ0FBQUEsUUFBUUYsYUFBYUUsTUFBTTRCLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7OzBDQUNuRCw4REFBQ0M7Z0NBQ0NqQixXQUFVO2dDQUNWVyxNQUFLOzBDQUNOOzs7Ozs7Ozs7Ozs7a0NBS0gsOERBQUNPO3dCQUFFbEIsV0FBVTtrQ0FBNkM7Ozs7OztrQ0FHMUQsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDekIsbURBQUtBO3dDQUFDMkIsS0FBS3ZCLDhEQUFZQTt3Q0FBRXdCLEtBQUk7Ozs7OztrREFDOUIsOERBQUNKO3dDQUFJQyxXQUFVOzswREFDYiw4REFBQ007Z0RBQUtOLFdBQVU7O29EQUFxQjtvREFBRWpCLE1BQU1vQyxTQUFTOzs7Ozs7OzBEQUN0RCw4REFBQ2I7MERBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJViw4REFBQ1A7Z0NBQUlDLFdBQVU7Ozs7OzswQ0FFZiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDekIsbURBQUtBO3dDQUFDMkIsS0FBS3ZCLDhEQUFZQTt3Q0FBRXdCLEtBQUk7Ozs7OztrREFDOUIsOERBQUNKO3dDQUFJQyxXQUFVOzswREFDYiw4REFBQ007Z0RBQUtOLFdBQVU7O29EQUFxQjtvREFBRWpCLE1BQU1xQyxVQUFVOzs7Ozs7OzBEQUN2RCw4REFBQ2Q7MERBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLZCw4REFBQy9CLG1EQUFLQTtnQkFDSjJCLEtBQUsxQix3RUFBYUE7Z0JBQ2xCMkIsS0FBSTtnQkFDSmtCLFNBQVM7Ozs7Ozs7Ozs7OztBQUlqQixDQUFDO0dBaEZ1QnZDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBhcHBQcmV2aWV3SW1nIGZyb20gJy4uL2Fzc2V0cy9hcHAtbmx3LWNvcGEtcHJldmlldy5wbmcnXG5pbXBvcnQgbG9nb0ltZyBmcm9tICcuLi9hc3NldHMvbG9nby5zdmcnXG5pbXBvcnQgdXNlcnNBdmF0YXJFeGFtcGxlSW1nIGZyb20gJy4uL2Fzc2V0cy91c2Vycy1hdmF0YXItZXhhbXBsZS5wbmcnXG5pbXBvcnQgaWNvbkNoZWNrSW1nIGZyb20gJy4uL2Fzc2V0cy9pY29uLWNoZWNrLnN2ZydcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uL2xpYi9heGlvcydcbmltcG9ydCB7IEZvcm1FdmVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XG4gIHBvb2xDb3VudDogbnVtYmVyO1xuICBndWVzc0NvdW50OiBudW1iZXI7XG4gIHVzZXJDb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzOiBIb21lUHJvcHMpIHtcbiAgY29uc3QgW3Bvb2xUaXRsZSwgc2V0UG9vbFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcblxuICBhc3luYyBmdW5jdGlvbiBjcmVhdGVQb29sKGV2ZW50OiBGb3JtRXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdCgnL3Bvb2xzJywge1xuICAgICAgICB0aXRsZTogcG9vbFRpdGxlLFxuICAgICAgfSk7XG4gICAgICBjb25zdCB7IGNvZGUgfSA9IHJlc3BvbnNlLmRhdGFcblxuICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29kZSlcblxuICAgICAgYWxlcnQoJ0JvbMOjbyBjcmlhZG8gY29tIHN1Y2Vzc28sIG8gY8OzZGlnbyBmb2kgY29waWFkbyBwYXJhIGEgw6FyZWEgZGUgdHJhbnNmZXLDqm5jaWEhJylcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KCdGYWxoYSBhbyBjcmlhciBvIGJvbMOjbywgdGVudGUgbm92YW1lbnRlIScpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LVsxMTI0cHhdIGgtc2NyZWVuIG14LWF1dG8gZ3JpZCBncmlkLWNvbHMtMiBnYXAtMjggaXRlbXMtY2VudGVyXCI+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPEltYWdlIHNyYz17bG9nb0ltZ30gYWx0PVwiTkxXIENPUEFcIiAvPlxuXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJtdC0xNCB0ZXh0LXdoaXRlIHRleHQtNXhsIGZvbnQtYm9sZCBsZWFkaW5nLXRpZ2h0XCI+Q3JpZSBzZXUgcHLDs3ByaW8gYm9sw6NvIGRhIGNvcGEgZSBjb21wYXJ0aWxoZSBlbnRyZSBhbWlnb3MhPC9oMT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIFwiPlxuICAgICAgICAgIDxJbWFnZSBzcmM9e3VzZXJzQXZhdGFyRXhhbXBsZUltZ30gYWx0PVwiXCIgLz5cbiAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtZ3JheS0xMDAgdGV4dC14bFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1pZ25pdGUtNTAwXCI+K3twcm9wcy51c2VyQ291bnR9PC9zcGFuPiBwZXNzb2FzIGrDoSBlc3TDo28gdXNhbmRvXG4gICAgICAgICAgPC9zdHJvbmc+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2NyZWF0ZVBvb2x9IGNsYXNzTmFtZT1cIm10LTEwIGZsZXggZ2FwLTJcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBweC02IHB5LTQgcm91bmRlZCBiZy1ncmF5LTgwMCBib3JkZXIgYm9yZGVyLWdyYXktNjAwIHRleHQtc21cIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUXVhbCBub21lIGRvIHNldSBib3TDo28/XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PnNldFBvb2xUaXRsZShldmVudC50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXllbGxvdy01MDAgcHgtNiBweS00IHJvdW5kZWQgdGV4dC1ncmF5LTkwMCBmb250LWJvbGQgdGV4dC1zbSB1cHBlcmNhc2UgaG92ZXI6YmcteWVsbG93LTcwMFwiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBDcmlhciBtZXUgYm9sw6NvXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC00IHRleHQtc20gdGV4dC1ncmF5LTMwMCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICBBcMOzcyBjcmlhciBzZXUgYm9sw6NvLCB2b2PDqiByZWNlYmVyw6EgdW0gY8OzZGlnbyDDum5pY28gcXVlIHBvZGVyw6EgdXNhciBwYXJhIGNvbnZpZGFyIG91dHJhcyBwZXNzb2FzIPCfmoA8L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMCBwdC0xMCBib3JkZXItdCBib3JkZXItZ3JheS02MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQtZ3JheS0xMDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC02XCI+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpY29uQ2hlY2tJbWd9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtMnhsXCI+K3twcm9wcy5wb29sQ291bnR9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3Bhbj5Cb2zDtWVzIGNyaWFkb3M8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1weCBoLTE0IGJnLWdyYXktNjAwXCIgLz5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTZcIj5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ljb25DaGVja0ltZ30gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0yeGxcIj4re3Byb3BzLmd1ZXNzQ291bnR9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3Bhbj5QYWxwaXRlcyBlbnZpYWRvczwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxJbWFnZVxuICAgICAgICBzcmM9e2FwcFByZXZpZXdJbWd9XG4gICAgICAgIGFsdD1cIkRvaXMgY2VsdWxhcmVzIGV4aWJpbmRvIHVtYSBwcsOpdmlhIGRhIGFwbGljYcOnw6NvIG3Ds3ZlbCBkbyBubHcgY29wYVwiXG4gICAgICAgIHF1YWxpdHk9ezEwMH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgW1xuICAgIHBvb2xDb3VudFJlc3BvbnNlLFxuICAgIGd1ZXNzQ291bnRSZXNwb25zZSxcbiAgICB1c2VyQ291bnRSZXNwb25zZVxuICBdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGFwaS5nZXQoJy9wb29scy9jb3VudCcpLFxuICAgIGFwaS5nZXQoJy9ndWVzc2VzL2NvdW50JyksXG4gICAgYXBpLmdldCgnL3VzZXJzL2NvdW50JyksXG4gIF0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9vbENvdW50OiBwb29sQ291bnRSZXNwb25zZS5kYXRhLmNvdW50LFxuICAgICAgZ3Vlc3NDb3VudDogZ3Vlc3NDb3VudFJlc3BvbnNlLmRhdGEuY291bnQsXG4gICAgICB1c2VyQ291bnQ6IHVzZXJDb3VudFJlc3BvbnNlLmRhdGEuY291bnQsXG4gICAgfVxuICB9XG5cbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsImFwcFByZXZpZXdJbWciLCJsb2dvSW1nIiwidXNlcnNBdmF0YXJFeGFtcGxlSW1nIiwiaWNvbkNoZWNrSW1nIiwiYXBpIiwidXNlU3RhdGUiLCJIb21lIiwicHJvcHMiLCJwb29sVGl0bGUiLCJzZXRQb29sVGl0bGUiLCJjcmVhdGVQb29sIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwicG9zdCIsInRpdGxlIiwiY29kZSIsImRhdGEiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJhbGVydCIsImVyciIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJzcmMiLCJhbHQiLCJoMSIsInN0cm9uZyIsInNwYW4iLCJ1c2VyQ291bnQiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsInAiLCJwb29sQ291bnQiLCJndWVzc0NvdW50IiwicXVhbGl0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});
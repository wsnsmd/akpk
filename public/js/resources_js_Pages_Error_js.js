/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Error_js"],{

/***/ "./resources/js/Pages/Error.js":
/*!*************************************!*\
  !*** ./resources/js/Pages/Error.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/lib/Helmet.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n // import { usePage } from '@inertiajs/inertia-react';\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {\n  var status = _ref.status;\n  // const { status } = usePage().props;\n  var title = {\n    503: '503: Service Unavailable',\n    500: '500: Server Error',\n    404: '404: Page Not Found',\n    403: '403: Forbidden'\n  }[status];\n  var description = {\n    503: 'Sorry, we are doing some maintenance. Please check back soon.',\n    500: 'Whoops, something went wrong on our servers.',\n    404: 'Sorry, the page you are looking for could not be found.',\n    403: 'Sorry, you are forbidden from accessing this page.'\n  }[status];\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(\"div\", {\n    className: \"flex items-center justify-center min-h-screen p-5 text-indigo-100 bg-indigo-800\",\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.default, {\n      title: title\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(\"div\", {\n      className: \"w-full max-w-md\",\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"h1\", {\n        className: \"text-3xl\",\n        children: title\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"p\", {\n        className: \"mt-3 text-lg leading-tight\",\n        children: description\n      })]\n    })]\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvUGFnZXMvRXJyb3IuanM/MDNkMiJdLCJuYW1lcyI6WyJzdGF0dXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Q0FFQTs7OztBQUVBLGlFQUFlLGdCQUFnQjtBQUFBLE1BQWJBLE1BQWEsUUFBYkEsTUFBYTtBQUM3QjtBQUVBLE1BQU1DLEtBQUssR0FBRztBQUNaLFNBQUssMEJBRE87QUFFWixTQUFLLG1CQUZPO0FBR1osU0FBSyxxQkFITztBQUlaLFNBQUs7QUFKTyxJQUtaRCxNQUxZLENBQWQ7QUFPQSxNQUFNRSxXQUFXLEdBQUc7QUFDbEIsU0FBSywrREFEYTtBQUVsQixTQUFLLDhDQUZhO0FBR2xCLFNBQUsseURBSGE7QUFJbEIsU0FBSztBQUphLElBS2xCRixNQUxrQixDQUFwQjtBQU9BLHNCQUNFO0FBQUssYUFBUyxFQUFDLGlGQUFmO0FBQUEsNEJBQ0UsdURBQUMsaURBQUQ7QUFBUSxXQUFLLEVBQUVDO0FBQWYsTUFERixlQUVFO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLFVBQWQ7QUFBQSxrQkFBMEJBO0FBQTFCLFFBREYsZUFFRTtBQUFHLGlCQUFTLEVBQUMsNEJBQWI7QUFBQSxrQkFBMkNDO0FBQTNDLFFBRkY7QUFBQSxNQUZGO0FBQUEsSUFERjtBQVNELENBMUJEIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL1BhZ2VzL0Vycm9yLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnO1xyXG4vLyBpbXBvcnQgeyB1c2VQYWdlIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IHN0YXR1cyB9KSA9PiB7XHJcbiAgLy8gY29uc3QgeyBzdGF0dXMgfSA9IHVzZVBhZ2UoKS5wcm9wcztcclxuXHJcbiAgY29uc3QgdGl0bGUgPSB7XHJcbiAgICA1MDM6ICc1MDM6IFNlcnZpY2UgVW5hdmFpbGFibGUnLFxyXG4gICAgNTAwOiAnNTAwOiBTZXJ2ZXIgRXJyb3InLFxyXG4gICAgNDA0OiAnNDA0OiBQYWdlIE5vdCBGb3VuZCcsXHJcbiAgICA0MDM6ICc0MDM6IEZvcmJpZGRlbidcclxuICB9W3N0YXR1c107XHJcblxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0ge1xyXG4gICAgNTAzOiAnU29ycnksIHdlIGFyZSBkb2luZyBzb21lIG1haW50ZW5hbmNlLiBQbGVhc2UgY2hlY2sgYmFjayBzb29uLicsXHJcbiAgICA1MDA6ICdXaG9vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIG9uIG91ciBzZXJ2ZXJzLicsXHJcbiAgICA0MDQ6ICdTb3JyeSwgdGhlIHBhZ2UgeW91IGFyZSBsb29raW5nIGZvciBjb3VsZCBub3QgYmUgZm91bmQuJyxcclxuICAgIDQwMzogJ1NvcnJ5LCB5b3UgYXJlIGZvcmJpZGRlbiBmcm9tIGFjY2Vzc2luZyB0aGlzIHBhZ2UuJ1xyXG4gIH1bc3RhdHVzXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIHAtNSB0ZXh0LWluZGlnby0xMDAgYmctaW5kaWdvLTgwMFwiPlxyXG4gICAgICA8SGVsbWV0IHRpdGxlPXt0aXRsZX0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbWRcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj57dGl0bGV9PC9oMT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0zIHRleHQtbGcgbGVhZGluZy10aWdodFwiPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/Pages/Error.js\n");

/***/ })

}]);
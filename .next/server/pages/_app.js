module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/bootstrap/dist/css/bootstrap.min.css\n");

/***/ }),

/***/ "./src/components/auth/public-pages.js":
/*!*********************************************!*\
  !*** ./src/components/auth/public-pages.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\"/_error\", \"/\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdXRoL3B1YmxpYy1wYWdlcy5qcz80ZGU0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQWUsZ0VBQUMsU0FBRCxFQUFZLEdBQVosQ0FBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2F1dGgvcHVibGljLXBhZ2VzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgW1wiL19lcnJvclwiLCBcIi9cIl07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/auth/public-pages.js\n");

/***/ }),

/***/ "./src/contexts/useAuth.js":
/*!*********************************!*\
  !*** ./src/contexts/useAuth.js ***!
  \*********************************/
/*! exports provided: AuthContext, AuthProvider, useAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthContext\", function() { return AuthContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthProvider\", function() { return AuthProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAuth\", function() { return useAuth; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var components_auth_public_pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/auth/public-pages */ \"./src/components/auth/public-pages.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/home/ajay/web/projects/dm-frontend/src/contexts/useAuth.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__[\"createContext\"])();\nconst RESET_USER_STATE = \"RESET_USER_STATE\";\nconst initialState = {\n  isLoading: true,\n  isAuthenticated: false,\n  pic: null,\n  fullname: null\n};\n\nconst userReducer = (state, action) => {\n  switch (action.type) {\n    case RESET_USER_STATE:\n      const appCookies = action.payload;\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isAuthenticated: appCookies.authenticated,\n        pic: appCookies.pic,\n        fullname: appCookies.fullname && appCookies.fullname.split(\"_\").join(\" \"),\n        isLoading: false\n      });\n\n    default:\n      return state;\n  }\n};\n\nconst AuthProvider = props => {\n  const {\n    0: state,\n    1: dispatch\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useReducer\"])(userReducer, initialState);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(() => {\n    refreshAuthContext();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(() => {\n    if (!state.isLoading) {\n      const path = props.appProps.router.route;\n\n      if (path != \"/\" && !state.isAuthenticated && !components_auth_public_pages__WEBPACK_IMPORTED_MODULE_4__[\"default\"].includes(path)) {\n        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(\"/\");\n      }\n    }\n  }, [state.isAuthenticated, state.isLoading]);\n\n  const refreshAuthContext = () => {\n    dispatch({\n      type: RESET_USER_STATE,\n      payload: js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get()\n    });\n  };\n\n  const logout = () => {\n    axios__WEBPACK_IMPORTED_MODULE_5___default()({\n      url: process.env.NEXT_PUBLIC_MIDDLEWARE_URL + \"/session/logout\",\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      withCredentials: true\n    }).then(res => {\n      refreshAuthContext();\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AuthContext.Provider, {\n    value: {\n      refreshAuthContext,\n      logout,\n      isLoading: state.isLoading,\n      isAuthenticated: state.isAuthenticated,\n      pic: state.pic,\n      fullname: state.fullname\n    },\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 72,\n    columnNumber: 5\n  }, undefined);\n};\nconst useAuth = () => {\n  return Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(AuthContext);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvdXNlQXV0aC5qcz85YzY1Il0sIm5hbWVzIjpbIkF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlJFU0VUX1VTRVJfU1RBVEUiLCJpbml0aWFsU3RhdGUiLCJpc0xvYWRpbmciLCJpc0F1dGhlbnRpY2F0ZWQiLCJwaWMiLCJmdWxsbmFtZSIsInVzZXJSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiYXBwQ29va2llcyIsInBheWxvYWQiLCJhdXRoZW50aWNhdGVkIiwic3BsaXQiLCJqb2luIiwiQXV0aFByb3ZpZGVyIiwicHJvcHMiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJ1c2VFZmZlY3QiLCJyZWZyZXNoQXV0aENvbnRleHQiLCJwYXRoIiwiYXBwUHJvcHMiLCJyb3V0ZXIiLCJyb3V0ZSIsInB1YmxpY1BhZ2VzIiwiaW5jbHVkZXMiLCJSb3V0ZXIiLCJwdXNoIiwiQ29va2llcyIsImdldCIsImxvZ291dCIsImF4aW9zIiwidXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX01JRERMRVdBUkVfVVJMIiwibWV0aG9kIiwiaGVhZGVycyIsIndpdGhDcmVkZW50aWFscyIsInRoZW4iLCJyZXMiLCJjaGlsZHJlbiIsInVzZUF1dGgiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTUEsV0FBVyxnQkFBR0MsMkRBQWEsRUFBakM7QUFDUCxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFFQSxNQUFNQyxZQUFZLEdBQUc7QUFDbkJDLFdBQVMsRUFBRSxJQURRO0FBRW5CQyxpQkFBZSxFQUFFLEtBRkU7QUFHbkJDLEtBQUcsRUFBRSxJQUhjO0FBSW5CQyxVQUFRLEVBQUU7QUFKUyxDQUFyQjs7QUFPQSxNQUFNQyxXQUFXLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ3JDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtULGdCQUFMO0FBQ0UsWUFBTVUsVUFBVSxHQUFHRixNQUFNLENBQUNHLE9BQTFCO0FBQ0EsNkNBQ0tKLEtBREw7QUFFRUosdUJBQWUsRUFBRU8sVUFBVSxDQUFDRSxhQUY5QjtBQUdFUixXQUFHLEVBQUVNLFVBQVUsQ0FBQ04sR0FIbEI7QUFJRUMsZ0JBQVEsRUFDTkssVUFBVSxDQUFDTCxRQUFYLElBQXVCSyxVQUFVLENBQUNMLFFBQVgsQ0FBb0JRLEtBQXBCLENBQTBCLEdBQTFCLEVBQStCQyxJQUEvQixDQUFvQyxHQUFwQyxDQUwzQjtBQU1FWixpQkFBUyxFQUFFO0FBTmI7O0FBUUY7QUFDRSxhQUFPSyxLQUFQO0FBWko7QUFjRCxDQWZEOztBQWlCTyxNQUFNUSxZQUFZLEdBQUlDLEtBQUQsSUFBVztBQUNyQyxRQUFNO0FBQUEsT0FBQ1QsS0FBRDtBQUFBLE9BQVFVO0FBQVIsTUFBb0JDLHdEQUFVLENBQUNaLFdBQUQsRUFBY0wsWUFBZCxDQUFwQztBQUVBa0IseURBQVMsQ0FBQyxNQUFNO0FBQ2RDLHNCQUFrQjtBQUNuQixHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUFELHlEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUksQ0FBQ1osS0FBSyxDQUFDTCxTQUFYLEVBQXNCO0FBQ3BCLFlBQU1tQixJQUFJLEdBQUdMLEtBQUssQ0FBQ00sUUFBTixDQUFlQyxNQUFmLENBQXNCQyxLQUFuQzs7QUFDQSxVQUNFSCxJQUFJLElBQUksR0FBUixJQUNBLENBQUNkLEtBQUssQ0FBQ0osZUFEUCxJQUVBLENBQUNzQixvRUFBVyxDQUFDQyxRQUFaLENBQXFCTCxJQUFyQixDQUhILEVBSUU7QUFDQU0sMERBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDRDtBQUNGO0FBQ0YsR0FYUSxFQVdOLENBQUNyQixLQUFLLENBQUNKLGVBQVAsRUFBd0JJLEtBQUssQ0FBQ0wsU0FBOUIsQ0FYTSxDQUFUOztBQWFBLFFBQU1rQixrQkFBa0IsR0FBRyxNQUFNO0FBQy9CSCxZQUFRLENBQUM7QUFBRVIsVUFBSSxFQUFFVCxnQkFBUjtBQUEwQlcsYUFBTyxFQUFFa0IsZ0RBQU8sQ0FBQ0MsR0FBUjtBQUFuQyxLQUFELENBQVI7QUFDRCxHQUZEOztBQUlBLFFBQU1DLE1BQU0sR0FBRyxNQUFNO0FBQ25CQyxnREFBSyxDQUFDO0FBQ0pDLFNBQUcsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLDBCQUFaLEdBQXlDLGlCQUQxQztBQUVKQyxZQUFNLEVBQUUsTUFGSjtBQUdKQyxhQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVCxPQUhMO0FBTUpDLHFCQUFlLEVBQUU7QUFOYixLQUFELENBQUwsQ0FPR0MsSUFQSCxDQU9TQyxHQUFELElBQVM7QUFDZnJCLHdCQUFrQjtBQUNuQixLQVREO0FBVUQsR0FYRDs7QUFhQSxzQkFDRSxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUNFLFNBQUssRUFBRTtBQUNMQSx3QkFESztBQUVMVyxZQUZLO0FBR0w3QixlQUFTLEVBQUVLLEtBQUssQ0FBQ0wsU0FIWjtBQUlMQyxxQkFBZSxFQUFFSSxLQUFLLENBQUNKLGVBSmxCO0FBS0xDLFNBQUcsRUFBRUcsS0FBSyxDQUFDSCxHQUxOO0FBTUxDLGNBQVEsRUFBRUUsS0FBSyxDQUFDRjtBQU5YLEtBRFQ7QUFBQSxjQVVHVyxLQUFLLENBQUMwQjtBQVZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWNELENBbkRNO0FBcURBLE1BQU1DLE9BQU8sR0FBRyxNQUFNO0FBQzNCLFNBQU9DLHdEQUFVLENBQUM5QyxXQUFELENBQWpCO0FBQ0QsQ0FGTSIsImZpbGUiOiIuL3NyYy9jb250ZXh0cy91c2VBdXRoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHB1YmxpY1BhZ2VzIGZyb20gXCJjb21wb25lbnRzL2F1dGgvcHVibGljLXBhZ2VzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcbmNvbnN0IFJFU0VUX1VTRVJfU1RBVEUgPSBcIlJFU0VUX1VTRVJfU1RBVEVcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc0xvYWRpbmc6IHRydWUsXG4gIGlzQXV0aGVudGljYXRlZDogZmFsc2UsXG4gIHBpYzogbnVsbCxcbiAgZnVsbG5hbWU6IG51bGwsXG59O1xuXG5jb25zdCB1c2VyUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFU0VUX1VTRVJfU1RBVEU6XG4gICAgICBjb25zdCBhcHBDb29raWVzID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiBhcHBDb29raWVzLmF1dGhlbnRpY2F0ZWQsXG4gICAgICAgIHBpYzogYXBwQ29va2llcy5waWMsXG4gICAgICAgIGZ1bGxuYW1lOlxuICAgICAgICAgIGFwcENvb2tpZXMuZnVsbG5hbWUgJiYgYXBwQ29va2llcy5mdWxsbmFtZS5zcGxpdChcIl9cIikuam9pbihcIiBcIiksXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHVzZXJSZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmVmcmVzaEF1dGhDb250ZXh0KCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc3RhdGUuaXNMb2FkaW5nKSB7XG4gICAgICBjb25zdCBwYXRoID0gcHJvcHMuYXBwUHJvcHMucm91dGVyLnJvdXRlO1xuICAgICAgaWYgKFxuICAgICAgICBwYXRoICE9IFwiL1wiICYmXG4gICAgICAgICFzdGF0ZS5pc0F1dGhlbnRpY2F0ZWQgJiZcbiAgICAgICAgIXB1YmxpY1BhZ2VzLmluY2x1ZGVzKHBhdGgpXG4gICAgICApIHtcbiAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW3N0YXRlLmlzQXV0aGVudGljYXRlZCwgc3RhdGUuaXNMb2FkaW5nXSk7XG5cbiAgY29uc3QgcmVmcmVzaEF1dGhDb250ZXh0ID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogUkVTRVRfVVNFUl9TVEFURSwgcGF5bG9hZDogQ29va2llcy5nZXQoKSB9KTtcbiAgfTtcblxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgYXhpb3Moe1xuICAgICAgdXJsOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NSURETEVXQVJFX1VSTCArIFwiL3Nlc3Npb24vbG9nb3V0XCIsXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICByZWZyZXNoQXV0aENvbnRleHQoKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgcmVmcmVzaEF1dGhDb250ZXh0LFxuICAgICAgICBsb2dvdXQsXG4gICAgICAgIGlzTG9hZGluZzogc3RhdGUuaXNMb2FkaW5nLFxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IHN0YXRlLmlzQXV0aGVudGljYXRlZCxcbiAgICAgICAgcGljOiBzdGF0ZS5waWMsXG4gICAgICAgIGZ1bGxuYW1lOiBzdGF0ZS5mdWxsbmFtZSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/useAuth.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var contexts_useAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! contexts/useAuth */ \"./src/contexts/useAuth.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/home/ajay/web/projects/dm-frontend/src/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nfunction MyApp(props) {\n  const {\n    Component,\n    pageProps\n  } = props;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(contexts_useAuth__WEBPACK_IMPORTED_MODULE_3__[\"AuthProvider\"], {\n    appProps: props,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"script\", {\n        src: \"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js\",\n        integrity: \"sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==\",\n        crossorigin: \"anonymous\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC5qcz8yMjU0Il0sIm5hbWVzIjpbIk15QXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFDcEIsUUFBTTtBQUFFQyxhQUFGO0FBQWFDO0FBQWIsTUFBMkJGLEtBQWpDO0FBRUEsc0JBQ0UscUVBQUMsNkRBQUQ7QUFBYyxZQUFRLEVBQUVBLEtBQXhCO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDQTtBQUFRLFdBQUcsRUFBQyxtRUFBWjtBQUFnRixpQkFBUyxFQUFDLGlHQUExRjtBQUE0TCxtQkFBVyxFQUFDO0FBQXhNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRSxxRUFBQyxTQUFELG9CQUFlRSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEOztBQUVjSCxvRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwic3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwiY29udGV4dHMvdXNlQXV0aFwiO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuZnVuY3Rpb24gTXlBcHAocHJvcHMpIHtcbiAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aFByb3ZpZGVyIGFwcFByb3BzPXtwcm9wc30+XG4gICAgICA8SGVhZD5cbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzMuNi4wL2pxdWVyeS5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGE1MTItODk0WUU2UVdENUk1OUhnWk9HUmVGWW00ZG5XYzFRdDVOdHZZU2FOY09QK3UxVDlxWWR2ZGloejBQUFNpaXFuLysvM2U3Sm80RWFHN1R1YmZXR1VyTVE9PVwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9BdXRoUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/globals.css\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"js-cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIj8wM2MxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImpzLWNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///js-cookie\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });
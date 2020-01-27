(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/axios.js":
/*!**********************!*\
  !*** ./src/axios.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default */ "./src/default.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./src/common.js");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request */ "./src/request.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Axios =
/*#__PURE__*/
function () {
  function Axios() {
    _classCallCheck(this, Axios);

    var _this = this; //return a proxy object


    return new Proxy(_request__WEBPACK_IMPORTED_MODULE_2__["default"], {
      // set a get methond
      get: function get(data, name) {
        return _this[name];
      },
      // set a set method
      set: function set(data, name, val) {
        _this[name] = val;
        return true;
      },
      apply: function apply(fn, thisArg, args) {
        console.log(fn, thisArg, args);
      }
    });
  }

  _createClass(Axios, [{
    key: "_preprocessArgs",
    value: function _preprocessArgs(method) {
      var options;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (args.length === 1 && typeof args[0] === "string") {
        options = {
          method: method,
          url: args[0]
        };
      } else if (args.length === 1 && args[0].constructor === Object) {
        options = _objectSpread({}, args, {
          method: method
        });
      } else {
        return undefined;
      }

      return options;
    }
  }, {
    key: "get",
    value: function get() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var options = this._preprocessArgs("get", args);

      console.log(args[0]);
      console.log(args[1]);

      if (!options) {
        Object(_common__WEBPACK_IMPORTED_MODULE_1__["assert"])(typeof args[0] === "string", "args[0] must is string");
        Object(_common__WEBPACK_IMPORTED_MODULE_1__["assert"])(_typeof(args[1]) == 'object' && args[1] && args[1].constructor == Object, 'args[1] must is JSON');
        options = _objectSpread({}, args[1], {
          url: args[0],
          method: "get"
        });
        console.log(options);
      } else {
        Object(_common__WEBPACK_IMPORTED_MODULE_1__["assert"])(false, "invaild args");
      }
    }
  }, {
    key: "post",
    value: function post() {
      var options = this._preprocessArgs("post", args);

      if (!options) {
        if (args.length === 2) {
          Object(_common__WEBPACK_IMPORTED_MODULE_1__["assert"])(typeof args[0] === "string", "args[0] must is string");
        } else if (args.length === 3) {
          Object(_common__WEBPACK_IMPORTED_MODULE_1__["assert"])(typeof args[0] === "string", "args[0] must is string");
          Object(_common__WEBPACK_IMPORTED_MODULE_1__["assert"])(_typeof(args[1]) == 'object' && args[1] && args[1].constructor == Object, 'args[1] must is JSON');
          options = _objectSpread({}, args[2], {
            url: args[0],
            data: args[1],
            method: 'post'
          });
          console.log(options);
        } else {
          Object(_common__WEBPACK_IMPORTED_MODULE_1__["assert"])(false, "invaild arguments");
        }
      }
    }
  }, {
    key: "delete",
    value: function _delete() {
      var options = this._preprocessArgs("delete", args);

      if (!options) {
        Object(_common__WEBPACK_IMPORTED_MODULE_1__["assert"])(typeof args[0] === "string", "args[0] must is string");
        Object(_common__WEBPACK_IMPORTED_MODULE_1__["assert"])(_typeof(args[1]) == 'object' && args[1] && args[1].constructor == Object, 'args[1] must is JSON');
        options = _objectSpread({}, args[1], {
          url: args[0],
          method: 'get'
        });
        console.log(options);
      }
    }
  }]);

  return Axios;
}(); //将默认方法和协议天剑进入


Axios.create = Axios.prototype.create = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var axios = new Axios();

  var res = _objectSpread({}, JSON.parse(JSON.stringify(_default__WEBPACK_IMPORTED_MODULE_0__["default"]))); //递归确定传进来的默认参数


  Object(_common__WEBPACK_IMPORTED_MODULE_1__["merge"])(res, options);
  axios["default"] = res;
  return axios;
};

/* harmony default export */ __webpack_exports__["default"] = (Axios.create());

/***/ }),

/***/ "./src/common.js":
/*!***********************!*\
  !*** ./src/common.js ***!
  \***********************/
/*! exports provided: assert, merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function assert(exp) {
  var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "assert faild";

  if (!exp) {
    throw new Error(msg);
  }
}
function merge(dest, src) {
  for (var name in src) {
    if (_typeof(src[name]) === "object") {
      if (!dest[name]) {
        dest[name] = {};
      }

      merge(dest[name], src[name]);
    } else {
      dest[name] = src[name];
    }
  }
}

/***/ }),

/***/ "./src/default.js":
/*!************************!*\
  !*** ./src/default.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  method: 'get',
  baseUrl: '',
  headers: {
    common: {
      'X-Request-By': 'XMLHttpRequest'
    },
    get: {},
    post: {},
    "delete": {}
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axios */ "./src/axios.js");

_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('1.json');
_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('1.json', {
  headers: {
    a: 12
  }
});
_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('1.php');
_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('1.php', {
  a: 12,
  b: 5
});
_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('1.php', [12, 5, 6]);
var form = new FormData();
_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('1.txt', form);
_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('1.txt', 'dw1ewdq');
_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('1.json', form, {
  headers: {
    a: 213,
    b: 132
  }
});
_axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]('1.json');
_axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]('1.json', {
  parmas: {
    id: 1
  }
});

/***/ }),

/***/ "./src/request.js":
/*!************************!*\
  !*** ./src/request.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return request; });
function request() {}

/***/ })

/******/ });
});
//# sourceMappingURL=axios.map
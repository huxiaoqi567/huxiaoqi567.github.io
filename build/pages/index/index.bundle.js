(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 77);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createContext = exports.Children = exports.version = exports.setNativeProps = exports.findComponentInstance = exports.unmountComponentAtNode = exports.findDOMNode = exports.createPortal = exports.hydrate = exports.render = exports.PropTypes = exports.PureComponent = exports.Component = exports.createFactory = exports.isValidElement = exports.cloneElement = exports.createElement = undefined;

__webpack_require__(78);

var _element = __webpack_require__(29);

var _component = __webpack_require__(13);

var _component2 = _interopRequireDefault(_component);

var _purecomponent = __webpack_require__(80);

var _purecomponent2 = _interopRequireDefault(_purecomponent);

var _proptypes = __webpack_require__(45);

var _proptypes2 = _interopRequireDefault(_proptypes);

var _render2 = __webpack_require__(32);

var _render3 = _interopRequireDefault(_render2);

var _hydrate2 = __webpack_require__(101);

var _hydrate3 = _interopRequireDefault(_hydrate2);

var _createPortal2 = __webpack_require__(102);

var _createPortal3 = _interopRequireDefault(_createPortal2);

var _findDOMNode2 = __webpack_require__(50);

var _findDOMNode3 = _interopRequireDefault(_findDOMNode2);

var _unmountComponentAtNode2 = __webpack_require__(30);

var _unmountComponentAtNode3 = _interopRequireDefault(_unmountComponentAtNode2);

var _findComponentInstance2 = __webpack_require__(103);

var _findComponentInstance3 = _interopRequireDefault(_findComponentInstance2);

var _setNativeProps2 = __webpack_require__(104);

var _setNativeProps3 = _interopRequireDefault(_setNativeProps2);

var _version2 = __webpack_require__(105);

var _version3 = _interopRequireDefault(_version2);

var _children = __webpack_require__(106);

var _children2 = _interopRequireDefault(_children);

var _createContext2 = __webpack_require__(107);

var _createContext3 = _interopRequireDefault(_createContext2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.createElement = _element.createElement;
exports.cloneElement = _element.cloneElement;
exports.isValidElement = _element.isValidElement;
exports.createFactory = _element.createFactory;
exports.Component = _component2.default;
exports.PureComponent = _purecomponent2.default;
exports.PropTypes = _proptypes2.default;
exports.render = _render3.default;
exports.hydrate = _hydrate3.default;
exports.createPortal = _createPortal3.default;
exports.findDOMNode = _findDOMNode3.default;
exports.unmountComponentAtNode = _unmountComponentAtNode3.default;
exports.findComponentInstance = _findComponentInstance3.default;
exports.setNativeProps = _setNativeProps3.default;
exports.version = _version3.default;
exports.Children = _children2.default;
exports.createContext = _createContext3.default;
exports['default'] = module.exports;
exports.default = module.exports;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

// https://www.w3.org/TR/html5/webappapis.html#dom-navigator-appcodename
var isWeb = exports.isWeb = (typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) === 'object' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko');
var isNode = exports.isNode = typeof process !== 'undefined' && !!(process.versions && process.versions.node);
var isWeex = exports.isWeex = typeof callNative === 'function';
var isReactNative = exports.isReactNative = typeof __fbBatchedBridgeConfig !== 'undefined';
exports['default'] = module.exports;
exports.default = module.exports;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var View = function (_Component) {
  _inherits(View, _Component);

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).apply(this, arguments));
  }

  _createClass(View, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      if (_universalEnv.isWeex) {
        // TODO: do not pass object value in props
        return (0, _rax.createElement)('div', props);
      } else {
        var styleProps = _extends({}, styles.initial, props.style);
        return (0, _rax.createElement)('div', _extends({}, props, { style: styleProps }));
      }
    }
  }]);

  return View;
}(_rax.Component);

View.propTypes = {};

var styles = {
  initial: {
    border: '0 solid black',
    position: 'relative',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-start',
    flexShrink: 0
  }
};

exports.default = View;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Text = function (_Component) {
  _inherits(Text, _Component);

  function Text() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Text);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Text.__proto__ || Object.getPrototypeOf(Text)).call.apply(_ref, [this].concat(args))), _this), _this.renderText = function () {
      var props = _this.props;
      var nativeProps = _extends({}, props, {
        style: props.style || {}
      });

      var textString = '';
      if (props.children != null) {
        if (!Array.isArray(props.children)) {
          textString = props.children.toString();
        } else {
          textString = props.children.join('');
        }
      }

      if (_this.context.isInAParentText) {
        return (0, _rax.createElement)('span', nativeProps, textString);
      }

      if (props.onPress) {
        nativeProps.onClick = props.onPress;
      }

      if (_universalEnv.isWeex) {
        if (props.numberOfLines) {
          nativeProps.style.lines = props.numberOfLines;
        }

        nativeProps.value = textString;

        return (0, _rax.createElement)('text', nativeProps);
      } else {
        var styleProps = _extends({}, styles.text, nativeProps.style);
        var numberOfLines = props.numberOfLines;
        if (numberOfLines) {
          if (parseInt(numberOfLines) === 1) {
            styleProps.whiteSpace = 'nowrap';
          } else {
            styleProps.display = '-webkit-box';
            styleProps.webkitBoxOrient = 'vertical';
            styleProps.webkitLineClamp = String(numberOfLines);
          }

          styleProps.overflow = 'hidden';
        }

        return (0, _rax.createElement)('span', _extends({}, nativeProps, { style: styleProps }), textString);
      }
    }, _this.renderRichText = function () {
      var props = _this.props;
      var children = props.children;

      var nativeProps = _extends({}, props, {
        style: props.style || {}
      });
      var styleProps = _extends({}, styles.richtext, nativeProps.style);

      if (_universalEnv.isWeex) {
        children = transformChildren(children, _this);
      }

      return (0, _rax.createElement)('p', _extends({}, nativeProps, { style: styleProps }), children);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Text, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        isInAParentText: true
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var children = props.children;

      if (!Array.isArray(children)) {
        children = [children];
      }

      var nested = false;
      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (child && (typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object') {
          nested = true;
          break;
        }
      }

      return nested ? this.renderRichText() : this.renderText();
    }
  }]);

  return Text;
}(_rax.Component);

Text.propTypes = {};
Text.contextTypes = {
  isInAParentText: _rax.PropTypes.bool
};
Text.childContextTypes = {
  isInAParentText: _rax.PropTypes.bool
};

function transformChild(child, instance) {
  var ChildComponent = child.type,
      props = child.props;
  var children = props.children;

  if (typeof ChildComponent === 'function') {
    var childInstance = new ChildComponent();
    childInstance.props = props;
    if (children) {
      childInstance.props.children = transformChildren(children, instance);
    }
    childInstance.context = instance.getChildContext();

    return childInstance.render();
  } else {
    return child;
  }
}

function transformChildren(children, instance) {
  var elements = [];
  if (!Array.isArray(children)) {
    children = [children];
  }

  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    if (typeof child === 'string') {
      elements.push(child);
    } else if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object') {
      elements.push(transformChild(child, instance));
    }
  }

  return elements;
}

var styles = {
  text: {
    border: '0 solid black',
    position: 'relative',
    boxSizing: 'border-box',
    display: 'block',
    flexDirection: 'column',
    alignContent: 'flex-start',
    flexShrink: 0,
    fontSize: 32
  },
  richtext: {
    marginTop: 0,
    marginBottom: 0
  }
};

exports.default = Text;
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Stateful things in runtime
 */
exports.default = {
  component: null,
  mountID: 1,
  sandbox: true,
  // Roots
  rootComponents: {},
  rootInstances: {},
  // Inject
  hook: null,
  driver: null,
  monitor: null
};
module.exports = exports["default"];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bottomBarHeight = exports.statusBarHeight = exports.pick = exports.isNavigator = exports.cloneObj = exports.getLast = exports.animate = exports.resolveFn = exports.clamp = exports.Detection = exports.forbidSwipeBack = exports.noop = exports.registGuid = exports.existGuid = exports.uuid = exports.matchRoute = exports.matchRouteByNameOrPath = exports.matchRouteByPath = exports.matchRouteByName = exports.matchRestfulPath = exports.urlMatch = exports.urlFormat = undefined;

var _pathToRegexp = __webpack_require__(116);

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

var _Url = __webpack_require__(117);

var _Url2 = _interopRequireDefault(_Url);

var _simpleLodash = __webpack_require__(17);

var _simpleLodash2 = _interopRequireDefault(_simpleLodash);

var _universalEnv = __webpack_require__(1);

var _objectAssign = __webpack_require__(11);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _universalTransition = __webpack_require__(36);

var _universalTransition2 = _interopRequireDefault(_universalTransition);

var _rax = __webpack_require__(0);

var _universalIphonexHelper = __webpack_require__(121);

var _universalIphonexHelper2 = _interopRequireDefault(_universalIphonexHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var statusBarHeight = _universalIphonexHelper2.default.statusBarHeight;
var bottomBarHeight = _universalIphonexHelper2.default.bottomBarHeight;

var QUERY_STRING = 'queryString';
var DEFAULT_DURATION = 350;
var DEFAULT_EASING = 'ease-out';

exports.urlFormat = urlFormat;
exports.urlMatch = urlMatch;
exports.matchRestfulPath = matchRestfulPath;
exports.matchRouteByName = matchRouteByName;
exports.matchRouteByPath = matchRouteByPath;
exports.matchRouteByNameOrPath = matchRouteByNameOrPath;
exports.matchRoute = matchRoute;
exports.uuid = uuid;
exports.existGuid = existGuid;
exports.registGuid = registGuid;
exports.noop = noop;
exports.forbidSwipeBack = forbidSwipeBack;
exports.Detection = Detection;
exports.clamp = clamp;
exports.resolveFn = resolveFn;
exports.animate = animate;
exports.getLast = getLast;
exports.cloneObj = cloneObj;
exports.isNavigator = isNavigator;
exports.pick = pick;
exports.statusBarHeight = statusBarHeight;
exports.bottomBarHeight = bottomBarHeight;


var __i = 1;

var __uuids = [];

function uuid() {
  var id = __i++;
  return id;
}

function registGuid(id) {
  __uuids.push(id);
}

function existGuid(id) {
  return _simpleLodash2.default.findIndex(__uuids, function (o) {
    return o === id;
  }) >= 0;
}

function urlFormat(url) {
  var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (param === undefined || param === null || Object.keys(param).length === 0 || !url) {
    return url;
  }
  return _pathToRegexp2.default.compile(url)(param);
};

function urlMatch(url, options) {
  var keys = [];
  var reg = (0, _pathToRegexp2.default)(url, keys, options);
  return { reg: reg, keys: keys };
}

// 匹配navigator嵌套的路由
function matchRoute(routerConfig, options) {
  var result = matchRouteByNameOrPath(routerConfig, options);
  if (result && result.name) return result;
  _simpleLodash2.default.map(routerConfig, function (conf, name) {
    if (conf && conf.screen && conf.screen.routerConfig) {
      var matchedResult = matchRoute(conf.screen.routerConfig, {
        path: options.path
      });
      if (matchedResult && matchedResult.route) {
        result = {
          route: matchedResult.route,
          name: name
        };
      }
    }
  });
  return result;
}

function matchRouteByName(routerConfig, name) {
  var route = void 0;
  if (name) {
    route = routerConfig[name];
    if (route) {
      route.name = name;
    }
  }
  return route;
}

/**
 * matchRestfulPath
 * @param restfulPath
 * @param realPath
 * @returns {*}
 * @example matchRestfulPath('/demo/:id','/demo/123?a=1&b=2')
 */
function matchRestfulPath(restfulPath, realPath) {
  if (!restfulPath || !realPath) return;

  var _urlMatch = urlMatch(_Url2.default.parse(restfulPath).pathname),
      keys = _urlMatch.keys,
      reg = _urlMatch.reg;

  var _Url$parse = _Url2.default.parse(realPath, true),
      pathname = _Url$parse.pathname,
      query = _Url$parse.query;

  var params = null;
  if (restfulPath && reg.test(pathname)) {
    params = {};
    var execResult = reg.exec(pathname);
    if (execResult) {
      execResult.slice(1).map(function (v, i) {
        if (keys[i] && keys[i].name) {
          params[keys[i].name] = v;
        }
      });
    }
    params[QUERY_STRING] = query;
  }
  return params;
}

function matchRouteByPath(routerConfig, path) {
  var params = null;
  var route = null;
  var name = null;

  _simpleLodash2.default.map(routerConfig, function (config, routeName) {
    var res = matchRestfulPath(config.path, path);
    if (res) {
      params = res;
      route = config;
      route.name = routeName;
      name = routeName;
    }
  });
  return { params: params, route: route, name: name };
}

// TODO to be deprecated
function matchRouteByNameOrPath(routerConfig, options) {
  var name = options.name,
      path = options.path;

  var params = void 0;
  var route = void 0;
  if (name) {
    route = matchRouteByName(routerConfig, name);
  } else if (path) {
    return matchRouteByPath(routerConfig, path);
  }
  return { params: params, route: route, name: name };
}

function noop() {}

// forbid swipe back on IOS
function forbidSwipeBack(isForbid) {
  if (_universalEnv.isWeex) {
    var swipeBack = {};
    try {
      swipeBack = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@weex-module/swipeBack\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    } catch (e) {
      console.warn('require weex module SwipeBack error');
    }
    swipeBack.forbidSwipeBack && swipeBack.forbidSwipeBack(isForbid);
  }
}

var Detection = {};

if (_universalEnv.isWeex) {
  var deviceInfo = typeof WXEnvironment !== 'undefined' ? WXEnvironment : {}; // eslint-disable-line
  exports.Detection = Detection = (0, _objectAssign2.default)(Detection, {
    Android: deviceInfo.platform === 'android',
    iOS: deviceInfo.platform === 'iOS'
  });
} else {
  var ua = window.navigator.userAgent;
  exports.Detection = Detection = (0, _objectAssign2.default)(Detection, {
    Android: /Android/ig.test(ua),
    iOS: /iPhone|iPad|iPod/ig.test(ua)
  });
}

function clamp(value, min, max) {
  return min < max ? value < min ? min : value > max ? max : value : value < max ? max : value > min ? min : value;
};

// function interpolate(inputRange=[],outputRange =[]){}


function resolveFn() {
  var fnOrObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var result = fnOrObj;
  if (typeof fnOrObj === 'function') {
    result = fnOrObj(args);
  }
  return result || {};
}

function animate(ref, property) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;

  try {
    if (ref) {
      var el = (0, _rax.findDOMNode)(ref);
      if (!el) return;
      var _options$timingFuncti = options.timingFunction,
          timingFunction = _options$timingFuncti === undefined ? DEFAULT_EASING : _options$timingFuncti,
          _options$duration = options.duration,
          duration = _options$duration === undefined ? DEFAULT_DURATION : _options$duration;

      if (el) {
        (0, _universalTransition2.default)(el, property, {
          timingFunction: timingFunction,
          duration: duration
        }, callback);
      }
    }
  } catch (err) {}
}

function getLast(array) {
  if (array && array.length > 0) {
    return array[array.length - 1];
  }
  return;
}

function cloneObj(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function isNavigator(component) {
  return component && component.navigatorType && component.routerConfig;
}

function pick() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!obj) return;
  if (typeof keys == 'string') {
    keys = [keys];
  }
  var result = {};
  keys.forEach(function (key) {
    if (undefined !== obj[key]) {
      result[key] = obj[key];
    }
  });
  return result;
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HEIGHT_STACK_HEADER_DEFAULT = exports.HEIGHT_TAB_BAR_DEFAULT = exports.TYPE_NAVIGATOR_STACK = exports.TYPE_NAVIGATOR_TAB = exports.EVENT_CELL_PAN_START = exports.EVENT_NAVIGATE = undefined;

var _Detection = __webpack_require__(126);

var EVENT_NAVIGATE = 'navigate';
var EVENT_CELL_PAN_START = 'navigation:pan:start';

var TYPE_NAVIGATOR_TAB = 'tab';
var TYPE_NAVIGATOR_STACK = 'stack';

var HEIGHT_TAB_BAR_DEFAULT = 100;
var HEIGHT_STACK_HEADER_DEFAULT = _Detection.iOS ? 88 : 100;

exports.EVENT_NAVIGATE = EVENT_NAVIGATE;
exports.EVENT_CELL_PAN_START = EVENT_CELL_PAN_START;
exports.TYPE_NAVIGATOR_TAB = TYPE_NAVIGATOR_TAB;
exports.TYPE_NAVIGATOR_STACK = TYPE_NAVIGATOR_STACK;
exports.HEIGHT_TAB_BAR_DEFAULT = HEIGHT_TAB_BAR_DEFAULT;
exports.HEIGHT_STACK_HEADER_DEFAULT = HEIGHT_STACK_HEADER_DEFAULT;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Image = function (_Component) {
  _inherits(Image, _Component);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
  }

  _createClass(Image, [{
    key: 'render',
    value: function render() {
      var nativeProps = _extends({}, this.props);
      var source = nativeProps.source;

      // Source must a object
      if (source && source.uri) {
        var style = nativeProps.style;
        var width = source.width,
            height = source.height,
            uri = source.uri;

        // Default is 0

        if (width == null && height == null && style.height == null && style.width == null) {
          width = 0;
          height = 0;
        }

        nativeProps.style = _extends(_extends({}, !this.context.isInAParentText && { display: 'flex' }, {
          width: width,
          height: height
        }), style);
        nativeProps.src = uri;

        delete nativeProps.source;

        var NativeImage = void 0;
        if (_universalEnv.isWeex) {
          NativeImage = 'image';
        } else {
          NativeImage = 'img';
        }

        // for cover and contain
        var resizeMode = nativeProps.resizeMode || nativeProps.style.resizeMode;
        if (resizeMode) {
          if (_universalEnv.isWeex) {
            nativeProps.resize = resizeMode;
            nativeProps.style.resizeMode = resizeMode;
          } else {
            nativeProps.style.objectFit = resizeMode;
          }
        }

        if (this.props.children) {
          nativeProps.children = null;
          return (0, _rax.createElement)(_raxView2.default, { style: nativeProps.style }, (0, _rax.createElement)(NativeImage, nativeProps), (0, _rax.createElement)(_raxView2.default, { style: styles.absoluteImage }, this.props.children));
        } else {
          return (0, _rax.createElement)(NativeImage, nativeProps);
        }
      }
      return null;
    }
  }]);

  return Image;
}(_rax.Component);

Image.propTypes = {};
Image.resizeMode = {
  contain: 'contain',
  cover: 'cover',
  stretch: 'stretch',
  center: 'center',
  repeat: 'repeat'
};
Image.contextTypes = {
  isInAParentText: _rax.PropTypes.bool
};

var styles = {
  absoluteImage: {
    left: 0,
    top: 0,
    position: 'absolute'
  }
};

exports.default = Image;
module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.I18nView = exports.I18nText = exports.intl = undefined;

var _intl2 = __webpack_require__(42);

var _intl3 = _interopRequireDefault(_intl2);

var _I18nText2 = __webpack_require__(181);

var _I18nText3 = _interopRequireDefault(_I18nText2);

var _I18nView2 = __webpack_require__(182);

var _I18nView3 = _interopRequireDefault(_I18nView2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.intl = _intl3.default;
exports.I18nText = _I18nText3.default;
exports.I18nView = _I18nView3.default;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _host = __webpack_require__(4);

var _host2 = _interopRequireDefault(_host);

var _element = __webpack_require__(29);

var _unmountComponentAtNode = __webpack_require__(30);

var _unmountComponentAtNode2 = _interopRequireDefault(_unmountComponentAtNode);

var _instantiateComponent = __webpack_require__(21);

var _instantiateComponent2 = _interopRequireDefault(_instantiateComponent);

var _shouldUpdateComponent = __webpack_require__(31);

var _shouldUpdateComponent2 = _interopRequireDefault(_shouldUpdateComponent);

var _root = __webpack_require__(79);

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Instance manager
 */
var KEY = '$$instance';

exports.default = {
  set: function set(node, instance) {
    if (!node[KEY]) {
      node[KEY] = instance;
      // Record root instance to roots map
      if (instance.rootID) {
        _host2.default.rootInstances[instance.rootID] = instance;
        _host2.default.rootComponents[instance.rootID] = instance._internal;
      }
    }
  },
  get: function get(node) {
    return node[KEY];
  },
  remove: function remove(node) {
    var instance = this.get(node);
    if (instance) {
      node[KEY] = null;
      if (instance.rootID) {
        delete _host2.default.rootComponents[instance.rootID];
        delete _host2.default.rootInstances[instance.rootID];
      }
    }
  },
  mount: function mount(element, container, parentInstance) {
    if (process.env.NODE_ENV !== 'production') {
      _host2.default.measurer && _host2.default.measurer.beforeRender();
    }

    // Before render callback
    _host2.default.driver.beforeRender && _host2.default.driver.beforeRender();

    // Real native root node is body
    if (container == null) {
      container = _host2.default.driver.createBody();
    }

    // Get the context from the conceptual parent component.
    var parentContext = void 0;
    if (parentInstance) {
      var parentInternal = parentInstance._internal;
      parentContext = parentInternal._processChildContext(parentInternal._context);
    }

    var prevRootInstance = this.get(container);
    var hasPrevRootInstance = prevRootInstance && prevRootInstance.isRootComponent;

    if (hasPrevRootInstance) {
      var prevRenderedComponent = prevRootInstance.getRenderedComponent();
      var prevElement = prevRenderedComponent._currentElement;
      if ((0, _shouldUpdateComponent2.default)(prevElement, element)) {
        var prevUnmaskedContext = prevRenderedComponent._context;
        prevRenderedComponent.updateComponent(prevElement, element, prevUnmaskedContext, parentContext || prevUnmaskedContext);

        return prevRootInstance;
      } else {
        _host2.default.hook.Reconciler.unmountComponent(prevRootInstance);
        (0, _unmountComponentAtNode2.default)(container);
      }
    }

    var wrappedElement = (0, _element.createElement)(_root2.default, null, element);
    var renderedComponent = (0, _instantiateComponent2.default)(wrappedElement);
    var defaultContext = parentContext || {};
    var rootInstance = renderedComponent.mountComponent(container, null, defaultContext);
    this.set(container, rootInstance);

    // After render callback
    _host2.default.driver.afterRender && _host2.default.driver.afterRender(rootInstance);

    // Devtool render new root hook
    _host2.default.hook.Mount._renderNewRootComponent(rootInstance._internal);

    if (process.env.NODE_ENV !== 'production') {
      _host2.default.measurer && _host2.default.measurer.afterRender();
    }

    return rootInstance;
  }
};
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(125);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/**
 * Base component class.
 */
var Component = function () {
  function Component(props, context, updater) {
    _classCallCheck(this, Component);

    this.props = props;
    this.context = context;
    this.refs = {};
    this.updater = updater;
  }

  _createClass(Component, [{
    key: "isComponentClass",
    value: function isComponentClass() {}
  }, {
    key: "setState",
    value: function setState(partialState, callback) {
      this.updater.setState(this, partialState, callback);
    }
  }, {
    key: "forceUpdate",
    value: function forceUpdate(callback) {
      this.updater.forceUpdate(this, callback);
    }
  }]);

  return Component;
}();

exports.default = Component;
module.exports = exports["default"];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(108);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = exports.hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = exports.stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;

  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(120);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _universalEnv = __webpack_require__(1);

var _objectAssign = __webpack_require__(11);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _universalBinding = __webpack_require__(37);

var _universalBinding2 = _interopRequireDefault(_universalBinding);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Detection = {};
Detection.isWeex = _universalEnv.isWeex;
Detection.isWeb = _universalEnv.isWeb;
Detection.isEnableSlider = true;

if (_universalEnv.isWeex) {
  var deviceInfo = typeof WXEnvironment !== 'undefined' ? WXEnvironment : {}; // eslint-disable-line
  Detection = (0, _objectAssign2.default)(Detection, {
    Android: deviceInfo.platform === 'android',
    iOS: deviceInfo.platform === 'iOS',
    isAliApp: true,
    isTB: deviceInfo.appName === 'TB',
    isTM: deviceInfo.appName === 'TM' || deviceInfo.appName === 'tmall', // 猫客中，appName是tmall
    appVersion: deviceInfo.appVersion,
    weexVersion: deviceInfo.weexVersion,
    osVersion: deviceInfo.osVersion
  });
} else {
  var ua = window.navigator.userAgent;
  Detection = (0, _objectAssign2.default)(Detection, {
    Android: /Android/ig.test(ua),
    iOS: /iPhone|iPad|iPod/ig.test(ua),
    isAliApp: /AliApp\([A-Z-_]+\/[0-9.]+\)/ig.test(ua),
    isTB: /AliApp\(TB+\/[0-9.]+\)/ig.test(ua),
    isTM: /AliApp\(TM+\/[0-9.]+\)/ig.test(ua)
  });
  Detection.getVersion = function () {
    var matched = ua.match(/AliApp\(([A-Z\-]+)\/([\d\.]+)\)/i);
    if (matched) {
      var appname = matched[1];
      if (appname === 'TB' || appname === 'TM') {
        return matched[2];
      }
    }
    return '';
  };
  Detection.appVersion = Detection.getVersion();
}

Detection.checkVersion = function (params) {
  if (!Detection.appVersion) {
    return false;
  }
  var version = Detection.iOS ? params.iosVer : params.andVer;
  var checkVer = params.isCheckOS ? Detection.osVersion : Detection.appVersion;
  if (checkVer === version) {
    return true;
  }
  if (!version) {
    version = '0.0';
  }
  checkVer = checkVer.split('.');
  version = version.split('.');
  for (var i = 0; i < checkVer.length; i++) {
    var len = i + 1;
    for (var j = 0; j < len; j++) {
      var ver1 = +checkVer[j];
      var ver2 = version[j];
      if (ver1 > ver2) {
        return true;
      } else if (ver1 < ver2) {
        return false;
      } else if (ver1 === ver2 && checkVer.length === version.length && j === 3) {
        return true;
      }
    }
  }
  return false;
};

if (_universalEnv.isWeex) {
  // 判断系统版本，用于探测动画
  Detection.isHighOS = Detection.checkVersion({
    andVer: '4.3', // 针对4.3以下版本的android，不使用expressionBinding
    isCheckOS: true
  });
  // 判断app版本，低版本手淘不使用expressionBinding
  Detection.isHighApp = Detection.checkVersion({
    iosVer: '6.4.1',
    andVer: '6.4.1'
  });
  // 判断是否支持expressionBinding
  Detection.isEnableSlider = _universalBinding2.default && _universalBinding2.default.isSupportBinding && Detection.isHighOS && Detection.isHighApp;
  // 判断设备是iOS并支持expressionBinding
  Detection.isEnableSliderIOS = Detection.isEnableSlider && Detection.iOS;
  // 判断设备是android并支持expressionBinding
  Detection.isEnableSliderAndroid = Detection.isEnableSlider && Detection.Android;
}

exports.default = Detection;
module.exports = exports['default'];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxRefreshcontrol = __webpack_require__(69);

var _raxRefreshcontrol2 = _interopRequireDefault(_raxRefreshcontrol);

var _timer = __webpack_require__(166);

var _timer2 = _interopRequireDefault(_timer);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var DEFAULT_END_REACHED_THRESHOLD = 500;
var DEFAULT_SCROLL_CALLBACK_THROTTLE = 50;
var FULL_WIDTH = 750;
var STYLE_NODE_ID = 'rax-scrollview-style';

var ScrollView = function (_Component) {
  _inherits(ScrollView, _Component);

  function ScrollView(props) {
    _classCallCheck(this, ScrollView);

    var _this = _possibleConstructorReturn(this, (ScrollView.__proto__ || Object.getPrototypeOf(ScrollView)).call(this, props));

    _this.lastScrollDistance = 0;
    _this.lastScrollContentSize = 0;
    _this.loadmoreretry = 1;

    _this.handleScroll = function (e) {
      if (_universalEnv.isWeb) {
        if (_this.props.onScroll) {
          e.nativeEvent = {
            get contentOffset() {
              return {
                x: e.target.scrollLeft,
                y: e.target.scrollTop
              };
            }
          };
          _this.props.onScroll(e);
        }

        if (_this.props.onEndReached) {
          if (!_this.scrollerNode) {
            _this.scrollerNode = (0, _rax.findDOMNode)(_this.refs.scroller);
            _this.scrollerContentNode = (0, _rax.findDOMNode)(_this.refs.contentContainer);

            _this.scrollerNodeSize = _this.props.horizontal ? _this.scrollerNode.offsetWidth : _this.scrollerNode.offsetHeight;
          }

          // NOTE：in iOS7/8 offsetHeight/Width is is inaccurate （ use scrollHeight/Width ）
          var scrollContentSize = _this.props.horizontal ? _this.scrollerNode.scrollWidth : _this.scrollerNode.scrollHeight;
          var scrollDistance = _this.props.horizontal ? _this.scrollerNode.scrollLeft : _this.scrollerNode.scrollTop;
          var isEndReached = scrollContentSize - scrollDistance - _this.scrollerNodeSize < _this.props.onEndReachedThreshold;

          var isScrollToEnd = scrollDistance > _this.lastScrollDistance;
          var isLoadedMoreContent = scrollContentSize != _this.lastScrollContentSize;

          if (isEndReached && isScrollToEnd && isLoadedMoreContent) {
            _this.lastScrollContentSize = scrollContentSize;
            _this.props.onEndReached(e);
          }

          _this.lastScrollDistance = scrollDistance;
        }
      }
      if (_universalEnv.isWeex) {
        e.nativeEvent = {
          contentOffset: {
            // HACK: weex scroll event value is opposite of web
            x: -e.contentOffset.x,
            y: -e.contentOffset.y
          }
        };
        _this.props.onScroll(e);
      }
    };

    _this.resetScroll = function () {
      if (_universalEnv.isWeb) {
        _this.lastScrollContentSize = 0;
        _this.lastScrollDistance = 0;
      } else {
        _this.setState({
          loadmoreretry: _this.loadmoreretry++
        });
      }
    };

    _this.scrollTo = function (options) {
      var x = parseInt(options.x);
      var y = parseInt(options.y);
      var animated = options && typeof options.animated !== 'undefined' ? options.animated : true;

      if (_universalEnv.isWeex) {
        var dom = __weex_require__('@weex-module/dom');
        var contentContainer = (0, _rax.findDOMNode)(_this.refs.contentContainer);
        dom.scrollToElement(contentContainer.ref, {
          offset: x || y || 0,
          animated: animated
        });
      } else {
        var pixelRatio = document.documentElement.clientWidth / FULL_WIDTH;
        var scrollView = (0, _rax.findDOMNode)(_this.refs.scroller);
        var scrollLeft = scrollView.scrollLeft;
        var scrollTop = scrollView.scrollTop;

        if (animated) {
          var timer = new _timer2.default({
            duration: 400,
            easing: 'easeOutSine',
            onRun: function onRun(e) {
              if (x >= 0) {
                scrollView.scrollLeft = scrollLeft + e.percent * (x * pixelRatio - scrollLeft);
              }
              if (y >= 0) {
                scrollView.scrollTop = scrollTop + e.percent * (y * pixelRatio - scrollTop);
              }
            }
          });
          timer.run();
        } else {
          if (x >= 0) {
            (0, _rax.findDOMNode)(_this.refs.scroller).scrollLeft = pixelRatio * x;
          }

          if (y >= 0) {
            (0, _rax.findDOMNode)(_this.refs.scroller).scrollTop = pixelRatio * y;
          }
        }
      }
    };

    _this.state = {
      loadmoreretry: 0
    };
    return _this;
  }

  _createClass(ScrollView, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          id = _props.id,
          style = _props.style,
          scrollEventThrottle = _props.scrollEventThrottle,
          showsHorizontalScrollIndicator = _props.showsHorizontalScrollIndicator,
          showsVerticalScrollIndicator = _props.showsVerticalScrollIndicator,
          onEndReached = _props.onEndReached,
          onEndReachedThreshold = _props.onEndReachedThreshold,
          onScroll = _props.onScroll,
          children = _props.children;

      // In weex must be int value

      onEndReachedThreshold = parseInt(onEndReachedThreshold, 10);

      var contentContainerStyle = [this.props.horizontal && styles.contentContainerHorizontal, this.props.contentContainerStyle];

      // bugfix: fix scrollview flex in ios 78
      if (!_universalEnv.isWeex && !this.props.horizontal) {
        contentContainerStyle.push(styles.containerWebStyle);
      }

      if (this.props.style) {
        var childLayoutProps = ['alignItems', 'justifyContent'].filter(function (prop) {
          return _this2.props.style[prop] !== undefined;
        });

        if (childLayoutProps.length !== 0) {
          console.warn('ScrollView child layout (' + JSON.stringify(childLayoutProps) + ') must be applied through the contentContainerStyle prop.');
        }
      }

      var refreshContainer = (0, _rax.createElement)(_raxView2.default, null),
          contentChild = void 0;
      if (Array.isArray(children)) {
        contentChild = children.map(function (child, index) {
          if (child && child.type == _raxRefreshcontrol2.default) {
            refreshContainer = child;
          } else {
            return child;
          }
        });
      } else {
        contentChild = children;
      }

      var contentContainer = (0, _rax.createElement)(_raxView2.default, {
        ref: 'contentContainer',
        style: contentContainerStyle }, contentChild);

      var baseStyle = this.props.horizontal ? styles.baseHorizontal : styles.baseVertical;

      var scrollerStyle = _extends({}, baseStyle, this.props.style);

      var showsScrollIndicator = this.props.horizontal ? showsHorizontalScrollIndicator : showsVerticalScrollIndicator;

      if (_universalEnv.isWeex) {
        return (0, _rax.createElement)('scroller', _extends({}, this.props, {
          style: scrollerStyle,
          showScrollbar: showsScrollIndicator,
          onLoadmore: onEndReached,
          onScroll: onScroll ? this.handleScroll : null,
          loadmoreoffset: onEndReachedThreshold,
          loadmoreretry: this.state.loadmoreretry,
          scrollDirection: this.props.horizontal ? 'horizontal' : 'vertical'
        }), refreshContainer, contentContainer);
      } else {
        var handleScroll = this.handleScroll;
        if (scrollEventThrottle) {
          handleScroll = throttle(handleScroll, scrollEventThrottle);
        }
        if (!showsScrollIndicator && typeof document !== 'undefined' && !document.getElementById(STYLE_NODE_ID)) {
          var styleNode = document.createElement('style');
          styleNode.id = STYLE_NODE_ID;
          document.head.appendChild(styleNode);
          styleNode.innerHTML = '.' + this.props.className + '::-webkit-scrollbar{display: none;}';
        }

        scrollerStyle.webkitOverflowScrolling = 'touch';
        scrollerStyle.overflow = 'scroll';

        var webProps = _extends({}, this.props, {
          ref: 'scroller',
          style: scrollerStyle,
          onScroll: handleScroll
        });
        delete webProps.onEndReachedThreshold;

        return (0, _rax.createElement)(_raxView2.default, webProps, contentContainer);
      }
    }
  }]);

  return ScrollView;
}(_rax.Component);

ScrollView.propTypes = {};
ScrollView.defaultProps = {
  scrollEventThrottle: DEFAULT_SCROLL_CALLBACK_THROTTLE,
  onEndReachedThreshold: DEFAULT_END_REACHED_THRESHOLD,
  showsHorizontalScrollIndicator: true,
  showsVerticalScrollIndicator: true,
  className: 'rax-scrollview'
};

function throttle(func, wait) {
  var ctx, args, rtn, timeoutID;
  var last = 0;

  function call() {
    timeoutID = 0;
    last = +new Date();
    rtn = func.apply(ctx, args);
    ctx = null;
    args = null;
  }

  return function throttled() {
    ctx = this;
    args = arguments;
    var delta = new Date() - last;
    if (!timeoutID) if (delta >= wait) call();else timeoutID = setTimeout(call, wait - delta);
    return rtn;
  };
}

var styles = {
  baseVertical: {
    flex: 1,
    flexDirection: 'column'
  },
  baseHorizontal: {
    flex: 1,
    flexDirection: 'row'
  },
  contentContainerHorizontal: {
    flexDirection: 'row'
  },
  containerWebStyle: {
    display: 'block'
  }
};

exports.default = ScrollView;
module.exports = exports['default'];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _zhCN = __webpack_require__(184);

var _zhCN2 = _interopRequireDefault(_zhCN);

var _zhTW = __webpack_require__(185);

var _zhTW2 = _interopRequireDefault(_zhTW);

var _enUS = __webpack_require__(186);

var _enUS2 = _interopRequireDefault(_enUS);

var _frFR = __webpack_require__(187);

var _frFR2 = _interopRequireDefault(_frFR);

var _jaJP = __webpack_require__(188);

var _jaJP2 = _interopRequireDefault(_jaJP);

var _arEG = __webpack_require__(189);

var _arEG2 = _interopRequireDefault(_arEG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 这是一个调试用文件

var locale = _enUS2.default;
// let locale = arEG;

exports.default = locale;
module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _host = __webpack_require__(4);

var _host2 = _interopRequireDefault(_host);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function instantiateComponent(element) {
  var instance = void 0;

  if (element === undefined || element === null || element === false || element === true) {
    instance = new _host2.default.EmptyComponent();
  } else if (Array.isArray(element)) {
    instance = new _host2.default.FragmentComponent(element);
  } else if ((typeof element === 'undefined' ? 'undefined' : _typeof(element)) === 'object' && element.type) {
    // Special case string values
    if (typeof element.type === 'string') {
      instance = new _host2.default.NativeComponent(element);
    } else {
      instance = new _host2.default.CompositeComponent(element);
    }
  } else if (typeof element === 'string' || typeof element === 'number') {
    instance = new _host2.default.TextComponent(element);
  } else {
    throw new Error('Invalid element type: ' + element + '. (keys: ' + Object.keys(element) + ')');
  }

  instance._mountIndex = 0;

  return instance;
}

exports.default = instantiateComponent;
module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleBack = exports.createHistory = undefined;

var _universalEnv = __webpack_require__(1);

var _history = __webpack_require__(110);

var globalHistory = null;
var globalKey = void 0;

function createHistory(options) {
  if (!globalHistory) {
    globalHistory = _universalEnv.isWeex ? (0, _history.createMemoryHistory)(options) : (0, _history.createBrowserHistory)(options);
    globalKey = globalHistory.location.key;
  }
  return globalHistory;
}

function handleBack() {
  if (_universalEnv.isWeex) {
    if (globalHistory.location.key === globalKey) {
      var weexNavigator = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@weex-module/navigator\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
      weexNavigator.pop();
    } else {
      globalHistory.goBack();
    }
  } else {
    if (globalHistory.location.key === globalKey) {
      return;
    } else {
      globalHistory.goBack();
    }
  }
}

exports.createHistory = createHistory;
exports.handleBack = handleBack;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locationsAreEqual = exports.createLocation = undefined;

var _resolvePathname = __webpack_require__(111);

var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

var _valueEqual = __webpack_require__(112);

var _valueEqual2 = _interopRequireDefault(_valueEqual);

var _PathUtils = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = (0, _PathUtils.parsePath)(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function warning() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function warning(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.length < 10 || /^[s\W]*$/.test(format)) {
      throw new Error('The warning format should be able to uniquely identify this ' + 'warning. Please, use a more descriptive format than: ' + format);
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Touchable = function (_Component) {
  _inherits(Touchable, _Component);

  function Touchable() {
    _classCallCheck(this, Touchable);

    return _possibleConstructorReturn(this, (Touchable.__proto__ || Object.getPrototypeOf(Touchable)).apply(this, arguments));
  }

  _createClass(Touchable, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var nativeProps = _extends({}, props, {
        style: _extends({}, styles.initial, props.style),
        onClick: props.onPress
      });

      delete nativeProps.onPress;

      return (0, _rax.createElement)(_raxView2.default, nativeProps);
    }
  }]);

  return Touchable;
}(_rax.Component);

Touchable.propTypes = {};

var styles = {
  initial: {
    cursor: 'pointer'
  }
};

exports.default = Touchable;
module.exports = exports['default'];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forbidSwipeBack = exports.noop = exports.userTrack = exports.resolveURL = exports.generateSpmD = exports.callWindvane = exports.goto = exports.clamp = undefined;

var _Detection = __webpack_require__(18);

var _Detection2 = _interopRequireDefault(_Detection);

var _universalEnv = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var h = new window.URL(location.href);
var protocol = h.protocol === 'http:' ? 'http:' : 'https:';
/**
 * @fileoverview Generate Spm D 位.
 */
var store = {};

function resolveURL(url) {
  if (!url) return url;
  var matches = url.match(/^(\/\/)?/);
  if (matches && matches[0] === '//') {
    url = protocol + url;
  }
  return url;
}

function generateSpmD(identity) {
  var key = identity || 'pub';
  if (store[key]) {
    return ++store[key];
  }
  store[key] = 1;
  return store[key];
};

function noop() {};

function goto(url) {
  if (_universalEnv.isWeb) {
    location.href = url;
  } else if (_universalEnv.isWeex) {
    var Event = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@weex-module/event\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    if (Event.openURL) {
      Event.openURL(url);
    }
  }
}

function callWindvane(params, callback) {
  if (_Detection2.default.isWeex) {
    var Windvane = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@weex-module/windvane\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    Windvane.call(params, callback);
  } else if (window.WindVane && window.WindVane.isAvailable) {
    window.WindVane.call(params.class, params.method, params.data, callback);
  }
}

var userTrack = {
  pageDisAppear: noop,
  pageAppear: noop,
  setIgnoreTagForExposureView: noop,
  clearIgnoreTagForExposureView: noop
};

if (_universalEnv.isWeex) {
  try {
    exports.userTrack = userTrack = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@weex-module/userTrack\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    userTrack.setIgnoreTagForExposureView = userTrack && typeof userTrack.setIgnoreTagForExposureView === 'function' ? userTrack.setIgnoreTagForExposureView : noop;
    userTrack.clearIgnoreTagForExposureView = userTrack && typeof userTrack.clearIgnoreTagForExposureView === 'function' ? userTrack.clearIgnoreTagForExposureView : noop;
    userTrack.pageDisAppear = userTrack && typeof userTrack.pageDisAppear === 'function' ? userTrack.pageDisAppear : noop;
    userTrack.pageAppear = userTrack && typeof userTrack.pageAppear === 'function' ? userTrack.pageAppear : noop;
  } catch (err) {}
}

function clamp(value, min, max) {
  return min < max ? value < min ? min : value > max ? max : value : value < max ? max : value > min ? min : value;
};

// forbid swipe back on IOS
function forbidSwipeBack(isForbid) {
  if (_universalEnv.isWeex) {
    var swipeBack = {};
    try {
      swipeBack = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@weex-module/swipeBack\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    } catch (e) {
      console.warn('require weex module SwipeBack error');
    }
    swipeBack.forbidSwipeBack && swipeBack.forbidSwipeBack(isForbid);
  }
}

exports.clamp = clamp;
exports.goto = goto;
exports.callWindvane = callWindvane;
exports.generateSpmD = generateSpmD;
exports.resolveURL = resolveURL;
exports.userTrack = userTrack;
exports.noop = noop;
exports.forbidSwipeBack = forbidSwipeBack;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isDev = !!location.port;

function genPath(pageName) {
  return isDev ? "/" + pageName + ".html" : "/" + pageName + ".html";
}

exports.genPath = genPath;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var itemWidth = 166;

// default style for tabheader
exports.default = {

  container: {
    height: 80,
    backgroundColor: '#ffffff',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#e7e7e7',
    position: 'relative'
  },
  item: {
    height: 80,
    width: itemWidth,
    textAlign: 'center',
    float: 'left',
    position: 'relative'
  },
  itemText: {
    color: '#000000',
    paddingTop: 24,
    textAlign: 'center'
  },
  selectItemText: {
    color: '#ff4200',
    paddingTop: 24,
    textAlign: 'center'
  },

  borderBottom: {
    left: 0,
    height: 0,
    width: 0,
    position: 'absolute'
  },
  borderRun: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    height: 4,
    width: 166,
    backgroundColor: '#fc511f'
  },

  drop: {
    height: 81,
    marginBottom: '-81rem',
    position: 'relative'
  },
  dropBtn: {
    height: 80,
    width: 71,
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#ffffff',
    borderLeftWidth: '1px',
    borderLeftStyle: 'solid',
    borderLeftColor: '#e7e7e7',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#e7e7e7'
  },
  dropBoxTtem: {
    height: 80,
    textAlign: 'center'
  },
  dropBoxText: {
    paddingTop: 27,
    textAlign: 'center',
    color: '#000000'
  },
  dropBoxSelectText: {
    paddingTop: 27,
    textAlign: 'center',
    color: '#ff4200'
  },

  iconContainer: {
    boxShadow: 'inset 0px -1px 0px 0px rgba(0,0,0,0.10)',
    height: 112,
    fontFamily: 'PingFangSC-Regular'
  },
  iconItem: {
    width: itemWidth,
    textAlign: 'center',
    float: 'left',
    position: 'relative',
    height: 112
  },
  iconText: {
    textAlign: 'center',
    fontSize: 28,
    height: 112,
    color: '#000000'
  },
  selectedIconText: {
    textAlign: 'center',
    fontSize: 28,
    height: 112,
    color: '#FFFFFF'
  },
  iconBox: {
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 63
  },
  icon: {
    width: 48,
    height: 48,
    marginTop: 12,
    display: 'inline-block',
    position: 'relative'
  },
  iconBackgroundRun: {
    left: 0,
    height: 0,
    width: 0,
    position: 'absolute'
  }

};
module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

exports.createElement = createElement;
exports.createFactory = createFactory;
exports.cloneElement = cloneElement;
exports.isValidElement = isValidElement;

var _host = __webpack_require__(4);

var _host2 = _interopRequireDefault(_host);

var _flattenChildren = __webpack_require__(44);

var _flattenChildren2 = _interopRequireDefault(_flattenChildren);

var _universalEnv = __webpack_require__(1);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var RESERVED_PROPS = {
  key: true,
  ref: true
};

function getRenderErrorInfo() {
  if (_host2.default.component) {
    var name = _host2.default.component.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';
    }
  }
  return '';
}

function Element(type, key, ref, props, owner) {
  if (_universalEnv.isWeex) {
    props = filterProps(type, props);
  }

  return {
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };
};

exports.default = Element;

function flattenStyle(style) {
  if (!style) {
    return undefined;
  }

  if (!Array.isArray(style)) {
    return style;
  } else {
    var result = {};
    for (var i = 0; i < style.length; ++i) {
      var computedStyle = flattenStyle(style[i]);
      if (computedStyle) {
        for (var key in computedStyle) {
          result[key] = computedStyle[key];
        }
      }
    }
    return result;
  }
}

// TODO: move to weex-drvier
function filterProps(type, props) {
  // Only for weex text
  if (type === 'text') {
    var children = props.children;
    var value = props.value;

    // Value is first
    if (value == null && children != null) {
      if (Array.isArray(children)) {
        children = children.map(function (val) {
          if (typeof val === 'number' || typeof val === 'string') {
            return val;
          } else {
            return '';
          }
        }).join('');
      } else if (typeof children !== 'number' && typeof children !== 'string') {
        children = '';
      }

      props.value = String(children);
    }

    props.children = null;
  }

  return props;
}

function createElement(type, config, children) {
  if (type == null) {
    throw Error('createElement: type should not be null or undefined.' + getRenderErrorInfo());
  }
  // Reserved names are extracted
  var props = {};
  var propName = void 0;
  var key = null;
  var ref = null;

  if (config != null) {
    ref = config.ref === undefined ? null : config.ref;
    key = config.key === undefined ? null : String(config.key);
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (!RESERVED_PROPS[propName]) {
        props[propName] = config[propName];
      }
    }
  }

  var childrenLength = arguments.length - 2;
  if (childrenLength > 0) {
    if (childrenLength === 1 && !Array.isArray(children)) {
      props.children = children;
    } else {
      var childArray = children;
      if (childrenLength > 1) {
        childArray = new Array(childrenLength);
        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }
      }
      props.children = (0, _flattenChildren2.default)(childArray);
    }
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  if (props.style && (Array.isArray(props.style) || _typeof(props.style) === 'object')) {
    props.style = flattenStyle(props.style);
  }

  return new Element(type, key, ref, props, _host2.default.component);
}

function createFactory(type) {
  var factory = createElement.bind(null, type);
  // Expose the type on the factory and the prototype so that it can be
  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
  // This should not be named `constructor` since this may not be the function
  // that created the element, and it may not even be a constructor.
  factory.type = type;
  return factory;
}

function cloneElement(element, config) {
  if (!isValidElement(element)) {
    throw Error('cloneElement: not a valid element.' + getRenderErrorInfo());
  }

  // Original props are copied
  var props = Object.assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config) {
    // Should reset ref and owner if has a new ref
    if (config.ref !== undefined) {
      ref = config.ref;
      owner = _host2.default.component;
    }

    if (config.key !== undefined) {
      key = String(config.key);
    }

    // Resolve default props
    var defaultProps = void 0;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    // Remaining properties override existing props
    var propName = void 0;
    for (propName in config) {
      if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  if (children.length) {
    props.children = (0, _flattenChildren2.default)(children);
  }

  return new Element(element.type, key, ref, props, owner);
};

function isValidElement(object) {
  return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.type && object.props;
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unmountComponentAtNode;

var _instance = __webpack_require__(10);

var _instance2 = _interopRequireDefault(_instance);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function unmountComponentAtNode(node) {
  var component = _instance2.default.get(node);

  if (!component) {
    return false;
  }

  _instance2.default.remove(node);
  component._internal.unmountComponent();

  return true;
};
module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

function shouldUpdateComponent(prevElement, nextElement) {
  // TODO: prevElement and nextElement could be array
  var prevEmpty = prevElement === null;
  var nextEmpty = nextElement === null;
  if (prevEmpty || nextEmpty) {
    return prevEmpty === nextEmpty;
  }

  var prevType = typeof prevElement === 'undefined' ? 'undefined' : _typeof(prevElement);
  var nextType = typeof nextElement === 'undefined' ? 'undefined' : _typeof(nextElement);
  if (prevType === 'string' || prevType === 'number') {
    return nextType === 'string' || nextType === 'number';
  } else {
    return prevType === 'object' && nextType === 'object' && prevElement.type === nextElement.type && prevElement.key === nextElement.key;
  }
}

exports.default = shouldUpdateComponent;
module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inject = __webpack_require__(81);

var _inject2 = _interopRequireDefault(_inject);

var _instance = __webpack_require__(10);

var _instance2 = _interopRequireDefault(_instance);

var _host = __webpack_require__(4);

var _host2 = _interopRequireDefault(_host);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function render(element, container, options, callback) {
  // Compatible with `render(element, container, callback)`
  if (typeof options === 'function') {
    callback = options;
    options = null;
  }

  options = options || {};
  // Init inject
  (0, _inject2.default)(options);

  var rootComponent = _instance2.default.mount(element, container, options.parent);
  var componentInstance = rootComponent.getPublicInstance();

  if (callback) {
    callback.call(componentInstance);
  }

  return componentInstance;
}

exports.default = render;
module.exports = exports['default'];

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

exports.isRem = isRem;
exports.calcRem = calcRem;
exports.getRem = getRem;
exports.setRem = setRem;
exports.isUnitNumber = isUnitNumber;
exports.convertUnit = convertUnit;
/**
 * CSS properties which accept numbers but are not in units of "px".
 */
var UNITLESS_NUMBER_PROPS = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridColumn: true,
  fontWeight: true,
  lineClamp: true,
  // We make lineHeight default is px that is diff with w3c spec
  // lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // Weex only
  lines: true
};
var SUFFIX = 'rem';
var REM_REG = /[-+]?\d*\.?\d+rem/g;
var GLOBAL_REM_UNIT = '__global_rem_unit__';
var global = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' ? window : (typeof global === 'undefined' ? 'undefined' : _typeof(global)) === 'object' ? global : {};
// Default 1 rem to 1 px
if (global[GLOBAL_REM_UNIT] == null) {
  global[GLOBAL_REM_UNIT] = 1;
}

/**
 * Is string contains rem
 * @param {String} str
 * @returns {Boolean}
 */
function isRem(str) {
  return typeof str === 'string' && str.indexOf(SUFFIX) !== -1;
}

/**
 * Calculate rem to pixels: '1.2rem' => 1.2 * rem
 * @param {String} str
 * @param {Number} rem
 * @returns {number}
 */
function calcRem(str) {
  var remUnit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : global[GLOBAL_REM_UNIT];

  return str.replace(REM_REG, function (rem) {
    return parseFloat(rem) * remUnit + 'px';
  });
}

function getRem() {
  return global[GLOBAL_REM_UNIT];
}

function setRem(rem) {
  global[GLOBAL_REM_UNIT] = rem;
}

function isUnitNumber(val, prop) {
  return typeof val === 'number' && !UNITLESS_NUMBER_PROPS[prop];
}

function convertUnit(val, prop) {
  var remUnit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : global[GLOBAL_REM_UNIT];

  if (prop && isUnitNumber(val, prop)) {
    return val * remUnit + 'px';
  } else if (isRem(val)) {
    return calcRem(val, remUnit);
  }

  return val;
}
exports['default'] = module.exports;
exports.default = module.exports;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _warning = __webpack_require__(24);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

exports.default = createTransitionManager;
module.exports = exports['default'];

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _universalEnv = __webpack_require__(1);

var _styleUnit = __webpack_require__(33);

function transition(node, styles, options, callback) {
  if (typeof options == 'function' || options == null) {
    callback = options;
    options = {
      timingFunction: 'ease',
      duration: 0,
      delay: 0
    };
  }

  for (var prop in styles) {
    styles[prop] = (0, _styleUnit.convertUnit)(styles[prop], prop);
  }

  if (_universalEnv.isWeex) {
    var animation = __weex_require__('@weex-module/animation');
    animation.transition(node.ref, {
      styles: styles,
      timingFunction: options.timingFunction || 'linear',
      delay: options.delay || 0,
      duration: options.duration || 0,
      needLayout: options.needLayout || false
    }, callback || function () {});
  } else if (_universalEnv.isWeb) {
    var duration = options.duration || 0; // ms
    var timingFunction = options.timingFunction || 'linear';
    var delay = options.delay || 0; // ms
    var transitionValue = 'all ' + duration + 'ms ' + timingFunction + ' ' + delay + 'ms';

    node.style.transition = transitionValue;
    node.style.webkitTransition = transitionValue;

    if (callback) {
      var transitionEndHandler = function transitionEndHandler(e) {
        e.stopPropagation();
        node.removeEventListener('webkitTransitionEnd', transitionEndHandler);
        node.removeEventListener('transitionend', transitionEndHandler);
        node.style.transition = '';
        node.style.webkitTransition = '';
        callback();
      };
      node.addEventListener('webkitTransitionEnd', transitionEndHandler);
      node.addEventListener('transitionend', transitionEndHandler);
    }

    for (var key in styles) {
      // TODO add vendor prefix
      var value = styles[key];
      node.style[key] = value;
    }
  }
}
module.exports = exports['default'];

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(128);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxText = __webpack_require__(3);

var _raxText2 = _interopRequireDefault(_raxText);

var _HeaderBackTitle = __webpack_require__(56);

var _HeaderBackTitle2 = _interopRequireDefault(_HeaderBackTitle);

var _HeaderRight = __webpack_require__(57);

var _HeaderRight2 = _interopRequireDefault(_HeaderRight);

var _HeaderLeft = __webpack_require__(58);

var _HeaderLeft2 = _interopRequireDefault(_HeaderLeft);

var _Util = __webpack_require__(5);

var _Constant = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StackHeader = function (_PureComponent) {
  _inherits(StackHeader, _PureComponent);

  function StackHeader() {
    _classCallCheck(this, StackHeader);

    return _possibleConstructorReturn(this, (StackHeader.__proto__ || Object.getPrototypeOf(StackHeader)).apply(this, arguments));
  }

  _createClass(StackHeader, [{
    key: 'resolveTitle',
    value: function resolveTitle() {
      var _props = this.props,
          title = _props.title,
          params = _props.params,
          headerTintColor = _props.headerTintColor,
          headerTitleStyle = _props.headerTitleStyle;


      if (typeof title === 'function') {
        title = title({ params: params });
      }
      // 如果是文本则直接返回
      if (typeof title === 'string') {
        title = (0, _rax.createElement)(
          _raxText2.default,
          { style: [styles.navTitle, { color: headerTintColor }, headerTitleStyle] },
          title
        );
      }
      // 如果是component则渲染
      return (0, _rax.createElement)(
        _raxView2.default,
        { style: styles.title },
        title
      );
    }

    // shouldComponentUpdate() {
    //   return false;
    // }

  }, {
    key: 'resolveHeaderLeft',
    value: function resolveHeaderLeft() {
      var _props2 = this.props,
          headerMode = _props2.headerMode,
          headerLeft = _props2.headerLeft,
          index = _props2.index;

      return headerMode !== 'float' ? headerLeft && headerLeft.props ? (0, _rax.createElement)(headerLeft.type, headerLeft.props) : index > 0 ? (0, _rax.createElement)(_HeaderBackTitle2.default, this.props) : null : null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          headerStyle = _props3.headerStyle,
          headerMode = _props3.headerMode,
          header = _props3.header;

      if (header === null) return (0, _rax.createElement)(_raxView2.default, null);
      if (header !== undefined) return header;
      return (0, _rax.createElement)(
        _raxView2.default,
        { style: [styles.nav, _extends({}, this.props.style), { top: _Util.statusBarHeight }, headerStyle] },
        headerMode !== 'float' ? (0, _rax.createElement)(_HeaderLeft2.default, this.props) : null,
        this.resolveTitle(),
        headerMode !== 'float' ? (0, _rax.createElement)(_HeaderRight2.default, this.props) : null
      );
    }
  }]);

  return StackHeader;
}(_rax.PureComponent);

StackHeader.defaultProps = {
  title: '',
  index: 0,
  headerTitle: null,
  params: {},
  headerBackTitle: 'Back',
  headerLeft: null,
  headerRight: null,
  header: undefined,
  // Style object for the header
  headerStyle: {},
  // Style object for the title component
  headerTitleStyle: {},
  // Style object for the back title
  headerBackTitleStyle: {
    color: 'rgb(12, 66, 253)'
  },
  // Tint color for the header
  headerTintColor: '#333',
  // float | screen | none
  headerMode: 'screen'
};


var styles = {
  nav: {
    height: _Constant.HEIGHT_STACK_HEADER_DEFAULT,
    width: 750,
    position: 'absolute',
    top: 0,
    backgroundColor: '#fefefe',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    transform: 'translateX(0rem)'
  },
  navTitle: {
    textAlign: 'center',
    width: 450,
    fontSize: 32
  },
  title: {
    position: 'absolute',
    width: 450,
    overflow: 'hidden',
    top: 0,
    bottom: 0,
    left: 150,
    fontWeight: 'bolder',
    justifyContent: 'center'
  },
  headerRight: {
    position: 'absolute',
    top: 0,
    width: 150,
    bottom: 0,
    right: 0
  }
};

exports.default = StackHeader;
module.exports = exports['default'];

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(60);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  pageContainer: {
    flex: 1,
    width: 750,
    backgroundColor: '#EEE'
  }
};

var TabPanel = function (_Component) {
  _inherits(TabPanel, _Component);

  function TabPanel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TabPanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TabPanel.__proto__ || Object.getPrototypeOf(TabPanel)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isAppear: false
    }, _this.show = function () {
      _this.setState({ isAppear: true });
    }, _this.hide = function () {
      _this.setState({ isAppear: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TabPanel, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        isInATabPanel: true
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(
        _raxView2.default,
        _extends({}, this.props, { style: [styles.pageContainer, this.props.style] }),
        this.state.isAppear ? this.props.children : null
      );
    }
  }]);

  return TabPanel;
}(_rax.Component);

exports.default = TabPanel;
module.exports = exports['default'];

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

exports.createIconSet = createIconSet;

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxText = __webpack_require__(3);

var _raxText2 = _interopRequireDefault(_raxText);

var _raxImage = __webpack_require__(7);

var _raxImage2 = _interopRequireDefault(_raxImage);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var style = this.props.style || {};

      // for images
      if (this.props.source.uri && !this.props.source.codePoint) {
        return (0, _rax.createElement)(_raxImage2.default, {
          source: { uri: this.props.source.uri },
          style: style
        });
      }

      // for iconfont
      var uri = this.props.source.uri;
      var fontFamily = this.props.fontFamily;
      var iconStyle = _extends({}, style, {
        fontFamily: fontFamily
      });

      if (_universalEnv.isWeb) {
        var FontFace = window.FontFace;
        var iconfont = new FontFace(fontFamily, 'url(' + uri + ')');
        document.fonts.add(iconfont);
      }

      if (_universalEnv.isWeex) {
        var domModule = __weex_require__('@weex-module/dom');
        domModule.addRule('fontFace', {
          'fontFamily': fontFamily,
          'src': "url('" + uri + "')" // single quotes are required around uri, and double quotes can not work
        });
      }
      return (0, _rax.createElement)(_raxText2.default, { style: iconStyle }, this.props.source.codePoint);
    }
  }]);

  return Icon;
}(_rax.Component);

Icon.propTypes = {
  fontFamily: _rax.PropTypes.string,
  source: _rax.PropTypes.object
};
exports.default = Icon;
function createIconSet(glyphMap, fontFamily, uri) {
  var IconFont = function (_Component2) {
    _inherits(IconFont, _Component2);

    function IconFont() {
      _classCallCheck(this, IconFont);

      return _possibleConstructorReturn(this, (IconFont.__proto__ || Object.getPrototypeOf(IconFont)).apply(this, arguments));
    }

    _createClass(IconFont, [{
      key: 'render',
      value: function render() {
        var codePoint = '';
        if (this.props.codePoint) {
          codePoint = this.props.codePoint;
        } else if (this.props.name) {
          codePoint = glyphMap[this.props.name];
        }
        return (0, _rax.createElement)(Icon, {
          style: this.props.style,
          fontFamily: fontFamily,
          source: {
            uri: uri,
            codePoint: codePoint
          } });
      }
    }]);

    return IconFont;
  }(_rax.Component);

  return IconFont;
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _intlMessageformat = __webpack_require__(171);

var _intlMessageformat2 = _interopRequireDefault(_intlMessageformat);

var _constants = __webpack_require__(180);

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/yahoo/intl-messageformat
/* global escapeHtml */
var data = {};
var intl = {
  init: function init(d) {
    data = d;
  },
  getDir: function getDir() {
    // dir = LTR | RTL
    // LTR: 从左到右文本.
    // RTL: 从右到左文本.
    return data.dir || 'LTR';
  },
  getText: function getText(key, variables) {

    if (variables) {
      variables = Object.assign({}, variables);
      // HTML message with variables. Escape it to avoid XSS attack.
      for (var i in variables) {
        var value = variables[i];
        if (typeof value === 'string' && value.indexOf('<') >= 0 && value.indexOf('>') >= 0) {
          value = escapeHtml(value);
        }
        variables[i] = value;
      }
    }
    var currentLocale = data.currentLocale || 'en-US';

    var msg = new _intlMessageformat2.default(data.texts[key], currentLocale, constants.defaultFormats); // TODO memorize
    msg = msg.format(variables);

    return msg;
  }
};

exports.default = intl;
module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _instance = __webpack_require__(10);

var _instance2 = _interopRequireDefault(_instance);

var _host = __webpack_require__(4);

var _host2 = _interopRequireDefault(_host);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  ComponentTree: {
    getClosestInstanceFromNode: function getClosestInstanceFromNode(node) {
      return _instance2.default.get(node);
    },
    getNodeFromInstance: function getNodeFromInstance(inst) {
      // inst is an internal instance (but could be a composite)
      while (inst._renderedComponent) {
        inst = inst._renderedComponent;
      }

      if (inst) {
        return inst._nativeNode;
      } else {
        return null;
      }
    }
  },
  Mount: {
    _instancesByReactRootID: _host2.default.rootComponents,

    // Stub - React DevTools expects to find this method and replace it
    // with a wrapper in order to observe new root components being added
    _renderNewRootComponent: function _renderNewRootComponent() {}
  },
  Reconciler: {
    // Stubs - React DevTools expects to find these methods and replace them
    // with wrappers in order to observe components being mounted, updated and
    // unmounted
    mountComponent: function mountComponent() {},
    receiveComponent: function receiveComponent() {},
    unmountComponent: function unmountComponent() {}
  },
  // monitor the info of all components
  monitor: null
};
module.exports = exports['default'];

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flattenChildren;
function traverseChildren(children, result) {
  if (Array.isArray(children)) {
    for (var i = 0, l = children.length; i < l; i++) {
      traverseChildren(children[i], result);
    }
  } else {
    result.push(children);
  }
}

function flattenChildren(children) {
  if (children == null) {
    return children;
  }
  var result = [];
  traverseChildren(children, result);

  if (result.length === 1) {
    result = result[0];
  }

  return result;
}
module.exports = exports["default"];

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Current PropTypes only export some api with react, not validate in runtime.
 */

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    return typeChecker;
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}

function createTypeChecker(expectedType) {
  function validate(props, propName, componentName, location, propFullName) {
    // Noop
  }
  return createChainableTypeChecker(validate);
}

var typeChecker = createTypeChecker();

exports.default = {
  array: typeChecker,
  bool: typeChecker,
  func: typeChecker,
  number: typeChecker,
  object: typeChecker,
  string: typeChecker,
  symbol: typeChecker,
  element: typeChecker,
  node: typeChecker,
  any: typeChecker,
  arrayOf: typeChecker,
  instanceOf: typeChecker,
  objectOf: typeChecker,
  oneOf: typeChecker,
  oneOfType: typeChecker,
  shape: typeChecker
};
module.exports = exports["default"];

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _host = __webpack_require__(4);

var _host2 = _interopRequireDefault(_host);

var _ref = __webpack_require__(47);

var _ref2 = _interopRequireDefault(_ref);

var _instantiateComponent = __webpack_require__(21);

var _instantiateComponent2 = _interopRequireDefault(_instantiateComponent);

var _shouldUpdateComponent = __webpack_require__(31);

var _shouldUpdateComponent2 = _interopRequireDefault(_shouldUpdateComponent);

var _getElementKeyName = __webpack_require__(48);

var _getElementKeyName2 = _interopRequireDefault(_getElementKeyName);

var _instance = __webpack_require__(10);

var _instance2 = _interopRequireDefault(_instance);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var STYLE = 'style';
var CHILDREN = 'children';
var TREE = 'tree';
var EVENT_PREFIX_REGEXP = /on[A-Z]/;

/**
 * Native Component
 */

var NativeComponent = function () {
  function NativeComponent(element) {
    _classCallCheck(this, NativeComponent);

    this._currentElement = element;
  }

  _createClass(NativeComponent, [{
    key: 'mountComponent',
    value: function mountComponent(parent, parentInstance, context, childMounter) {
      // Parent native element
      this._parent = parent;
      this._parentInstance = parentInstance;
      this._context = context;
      this._mountID = _host2.default.mountID++;

      var props = this._currentElement.props;
      var type = this._currentElement.type;
      var instance = {
        _internal: this,
        type: type,
        props: props
      };
      var appendType = props.append; // Default is node

      this._instance = instance;

      // Clone a copy for style diff
      this._prevStyleCopy = Object.assign({}, props.style);

      var nativeNode = this.getNativeNode();

      if (appendType !== TREE) {
        if (childMounter) {
          childMounter(nativeNode, parent);
        } else {
          _host2.default.driver.appendChild(nativeNode, parent);
        }
      }

      if (this._currentElement && this._currentElement.ref) {
        _ref2.default.attach(this._currentElement._owner, this._currentElement.ref, this);
      }

      // Process children
      var children = props.children;
      if (children != null) {
        this.mountChildren(children, context);
      }

      if (appendType === TREE) {
        if (childMounter) {
          childMounter(nativeNode, parent);
        } else {
          _host2.default.driver.appendChild(nativeNode, parent);
        }
      }

      _host2.default.hook.Reconciler.mountComponent(this);

      return instance;
    }
  }, {
    key: 'mountChildren',
    value: function mountChildren(children, context) {
      var _this = this;

      if (!Array.isArray(children)) {
        children = [children];
      }

      var renderedChildren = this._renderedChildren = {};

      var renderedChildrenImage = children.map(function (element, index) {
        var renderedChild = (0, _instantiateComponent2.default)(element);
        var name = (0, _getElementKeyName2.default)(renderedChildren, element, index);
        renderedChildren[name] = renderedChild;
        renderedChild._mountIndex = index;
        // Mount
        var mountImage = renderedChild.mountComponent(_this.getNativeNode(), _this._instance, context, null);
        return mountImage;
      });

      return renderedChildrenImage;
    }
  }, {
    key: 'unmountChildren',
    value: function unmountChildren(notRemoveChild) {
      var renderedChildren = this._renderedChildren;

      if (renderedChildren) {
        for (var name in renderedChildren) {
          var renderedChild = renderedChildren[name];
          renderedChild.unmountComponent(notRemoveChild);
        }
        this._renderedChildren = null;
      }
    }
  }, {
    key: 'unmountComponent',
    value: function unmountComponent(notRemoveChild) {
      if (this._nativeNode) {
        var ref = this._currentElement.ref;
        if (ref) {
          _ref2.default.detach(this._currentElement._owner, ref, this);
        }

        _instance2.default.remove(this._nativeNode);
        if (!notRemoveChild) {
          _host2.default.driver.removeChild(this._nativeNode, this._parent);
        }
        _host2.default.driver.removeAllEventListeners(this._nativeNode);
      }

      this.unmountChildren(notRemoveChild);

      _host2.default.hook.Reconciler.unmountComponent(this);

      this._currentElement = null;
      this._nativeNode = null;
      this._parent = null;
      this._parentInstance = null;
      this._context = null;
      this._instance = null;
      this._prevStyleCopy = null;
    }
  }, {
    key: 'updateComponent',
    value: function updateComponent(prevElement, nextElement, prevContext, nextContext) {
      // Replace current element
      this._currentElement = nextElement;

      _ref2.default.update(prevElement, nextElement, this);

      var prevProps = prevElement.props;
      var nextProps = nextElement.props;

      this.updateProperties(prevProps, nextProps);
      this.updateChildren(nextProps.children, nextContext);

      _host2.default.hook.Reconciler.receiveComponent(this);
    }
  }, {
    key: 'updateProperties',
    value: function updateProperties(prevProps, nextProps) {
      var propKey = void 0;
      var styleName = void 0;
      var styleUpdates = void 0;
      for (propKey in prevProps) {
        if (propKey === CHILDREN || nextProps.hasOwnProperty(propKey) || !prevProps.hasOwnProperty(propKey) || prevProps[propKey] == null) {
          continue;
        }
        if (propKey === STYLE) {
          var lastStyle = this._prevStyleCopy;
          for (styleName in lastStyle) {
            if (lastStyle.hasOwnProperty(styleName)) {
              styleUpdates = styleUpdates || {};
              styleUpdates[styleName] = '';
            }
          }
          this._prevStyleCopy = null;
        } else if (EVENT_PREFIX_REGEXP.test(propKey)) {
          if (typeof prevProps[propKey] === 'function') {
            _host2.default.driver.removeEventListener(this.getNativeNode(), propKey.slice(2).toLowerCase(), prevProps[propKey]);
          }
        } else {
          _host2.default.driver.removeAttribute(this.getNativeNode(), propKey, prevProps[propKey]);
        }
      }

      for (propKey in nextProps) {
        var nextProp = nextProps[propKey];
        var prevProp = propKey === STYLE ? this._prevStyleCopy : prevProps != null ? prevProps[propKey] : undefined;
        if (propKey === CHILDREN || !nextProps.hasOwnProperty(propKey) || nextProp === prevProp || nextProp == null && prevProp == null) {
          continue;
        }
        // Update style
        if (propKey === STYLE) {
          if (nextProp) {
            // Clone property
            nextProp = this._prevStyleCopy = Object.assign({}, nextProp);
          } else {
            this._prevStyleCopy = null;
          }

          if (prevProp != null) {
            // Unset styles on `prevProp` but not on `nextProp`.
            for (styleName in prevProp) {
              if (prevProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
                styleUpdates = styleUpdates || {};
                styleUpdates[styleName] = '';
              }
            }
            // Update styles that changed since `prevProp`.
            for (styleName in nextProp) {
              if (nextProp.hasOwnProperty(styleName) && prevProp[styleName] !== nextProp[styleName]) {
                styleUpdates = styleUpdates || {};
                styleUpdates[styleName] = nextProp[styleName];
              }
            }
          } else {
            // Assign next prop when prev style is null
            styleUpdates = nextProp;
          }

          // Update event binding
        } else if (EVENT_PREFIX_REGEXP.test(propKey)) {
          var eventName = propKey.slice(2).toLowerCase();

          if (typeof prevProp === 'function') {
            _host2.default.driver.removeEventListener(this.getNativeNode(), eventName, prevProp, nextProps);
          }

          if (typeof nextProp === 'function') {
            _host2.default.driver.addEventListener(this.getNativeNode(), eventName, nextProp, nextProps);
          }
          // Update other property
        } else {
          var payload = {};
          payload[propKey] = nextProp;
          if (nextProp != null) {
            _host2.default.driver.setAttribute(this.getNativeNode(), propKey, nextProp);
          } else {
            _host2.default.driver.removeAttribute(this.getNativeNode(), propKey, prevProps[propKey]);
          }
          if (process.env.NODE_ENV !== 'production') {
            _host2.default.measurer && _host2.default.measurer.recordOperation({
              instanceID: this._mountID,
              type: 'update attribute',
              payload: payload
            });
          }
        }
      }

      if (styleUpdates) {
        if (process.env.NODE_ENV !== 'production') {
          _host2.default.measurer && _host2.default.measurer.recordOperation({
            instanceID: this._mountID,
            type: 'update style',
            payload: styleUpdates
          });
        }
        _host2.default.driver.setStyles(this.getNativeNode(), styleUpdates);
      }
    }
  }, {
    key: 'updateChildren',
    value: function updateChildren(nextChildrenElements, context) {
      var _this2 = this;

      // prev rendered children
      var prevChildren = this._renderedChildren;

      if (nextChildrenElements == null && prevChildren == null) {
        return;
      }

      var nextChildren = {};
      var oldNodes = {};

      if (nextChildrenElements != null) {
        if (!Array.isArray(nextChildrenElements)) {
          nextChildrenElements = [nextChildrenElements];
        }

        // Update next children elements
        for (var index = 0, length = nextChildrenElements.length; index < length; index++) {
          var nextElement = nextChildrenElements[index];
          var name = (0, _getElementKeyName2.default)(nextChildren, nextElement, index);
          var prevChild = prevChildren && prevChildren[name];
          var prevElement = prevChild && prevChild._currentElement;

          if (prevChild != null && (0, _shouldUpdateComponent2.default)(prevElement, nextElement)) {
            // Pass the same context when updating chidren
            prevChild.updateComponent(prevElement, nextElement, context, context);
            nextChildren[name] = prevChild;
          } else {
            // Unmount the prevChild when nextChild is different element type.
            if (prevChild) {
              var oldNativeNode = prevChild.getNativeNode();
              // Delay remove child
              prevChild.unmountComponent(true);
              oldNodes[name] = oldNativeNode;
            }
            // The child must be instantiated before it's mounted.
            nextChildren[name] = (0, _instantiateComponent2.default)(nextElement);
          }
        }
      }

      var firstPrevChild = void 0;
      var delayRemoveFirstPrevChild = void 0;
      // Unmount children that are no longer present.
      if (prevChildren != null) {
        for (var _name in prevChildren) {
          if (!prevChildren.hasOwnProperty(_name)) {
            continue;
          }

          var _prevChild = prevChildren[_name];
          var shouldRemove = !nextChildren[_name];

          // Store old first child ref for append node ahead and maybe delay remove it
          if (!firstPrevChild) {
            firstPrevChild = _prevChild;
            delayRemoveFirstPrevChild = shouldRemove;
          } else if (shouldRemove) {
            _prevChild.unmountComponent();
          }
        }
      }

      if (nextChildren != null) {
        (function () {
          // `nextIndex` will increment for each child in `nextChildren`, but
          // `lastIndex` will be the last index visited in `prevChildren`.
          var lastIndex = 0;
          var nextIndex = 0;
          var lastPlacedNode = null;
          var nextNativeNode = [];

          var _loop = function _loop(_name2) {
            if (!nextChildren.hasOwnProperty(_name2)) {
              return 'continue';
            }

            var nextChild = nextChildren[_name2];
            var prevChild = prevChildren && prevChildren[_name2];

            if (prevChild === nextChild) {
              var prevChildNativeNode = prevChild.getNativeNode();
              // Convert to array type
              if (!Array.isArray(prevChildNativeNode)) {
                prevChildNativeNode = [prevChildNativeNode];
              }

              // If the index of `child` is less than `lastIndex`, then it needs to
              // be moved. Otherwise, we do not need to move it because a child will be
              // inserted or moved before `child`.
              if (prevChild._mountIndex < lastIndex) {
                // Get the last child
                if (Array.isArray(lastPlacedNode)) {
                  lastPlacedNode = lastPlacedNode[lastPlacedNode.length - 1];
                }

                for (var _i = prevChildNativeNode.length - 1; _i >= 0; _i--) {
                  _host2.default.driver.insertAfter(prevChildNativeNode[_i], lastPlacedNode);
                }
              }

              nextNativeNode = nextNativeNode.concat(prevChildNativeNode);

              lastIndex = Math.max(prevChild._mountIndex, lastIndex);
              prevChild._mountIndex = nextIndex;
            } else {
              if (prevChild != null) {
                // Update `lastIndex` before `_mountIndex` gets unset by unmounting.
                lastIndex = Math.max(prevChild._mountIndex, lastIndex);
              }

              var parent = _this2.getNativeNode();
              // Fragment extended native component, so if parent is fragment should get this._parent
              if (Array.isArray(parent)) {
                parent = _this2._parent;
              }

              nextChild.mountComponent(parent, _this2._instance, context, function (newChild, parent) {
                // TODO: Rework the duplicate code
                var oldChild = oldNodes[_name2];
                if (!Array.isArray(newChild)) {
                  newChild = [newChild];
                }

                if (oldChild) {
                  // The oldChild or newChild all maybe fragment
                  if (!Array.isArray(oldChild)) {
                    oldChild = [oldChild];
                  }

                  // If newChild count large then oldChild
                  var lastNewChild = void 0;
                  for (var _i2 = 0; _i2 < newChild.length; _i2++) {
                    var child = newChild[_i2];
                    if (oldChild[_i2]) {
                      _host2.default.driver.replaceChild(child, oldChild[_i2]);
                    } else {
                      _host2.default.driver.insertAfter(child, lastNewChild);
                    }
                    lastNewChild = child;
                  }

                  // If newChild count less then oldChild
                  if (newChild.length < oldChild.length) {
                    for (var _i3 = newChild.length; _i3 < oldChild.length; _i3++) {
                      _host2.default.driver.removeChild(oldChild[_i3]);
                    }
                  }
                } else {
                  // Insert child at a specific index

                  // Get the last child
                  if (Array.isArray(lastPlacedNode)) {
                    lastPlacedNode = lastPlacedNode[lastPlacedNode.length - 1];
                  }

                  var prevFirstNativeNode = void 0;

                  if (firstPrevChild && !lastPlacedNode) {
                    prevFirstNativeNode = firstPrevChild.getNativeNode();
                    if (Array.isArray(prevFirstNativeNode)) {
                      prevFirstNativeNode = prevFirstNativeNode[0];
                    }
                  }

                  for (var _i4 = newChild.length - 1; _i4 >= 0; _i4--) {
                    var _child = newChild[_i4];
                    if (lastPlacedNode) {
                      _host2.default.driver.insertAfter(_child, lastPlacedNode);
                    } else if (prevFirstNativeNode) {
                      _host2.default.driver.insertBefore(_child, prevFirstNativeNode);
                    } else {
                      _host2.default.driver.appendChild(_child, parent);
                    }
                  }
                }

                nextNativeNode = nextNativeNode.concat(newChild);
              });
              nextChild._mountIndex = nextIndex;
            }

            nextIndex++;
            lastPlacedNode = nextChild.getNativeNode();
          };

          for (var _name2 in nextChildren) {
            var _ret2 = _loop(_name2);

            if (_ret2 === 'continue') continue;
          }

          // Sync update native refs
          if (Array.isArray(_this2._nativeNode)) {
            // Clear all and push the new array
            _this2._nativeNode.splice(0, _this2._nativeNode.length);
            for (var i = 0; i < nextNativeNode.length; i++) {
              _this2._nativeNode.push(nextNativeNode[i]);
            }
          }
        })();
      }

      if (delayRemoveFirstPrevChild) {
        firstPrevChild.unmountComponent();
      }

      this._renderedChildren = nextChildren;
    }
  }, {
    key: 'getNativeNode',
    value: function getNativeNode() {
      if (this._nativeNode == null) {
        this._nativeNode = _host2.default.driver.createElement(this._instance);
        _instance2.default.set(this._nativeNode, this._instance);
      }

      return this._nativeNode;
    }
  }, {
    key: 'getPublicInstance',
    value: function getPublicInstance() {
      return this.getNativeNode();
    }
  }, {
    key: 'getName',
    value: function getName() {
      return this._currentElement.type;
    }
  }]);

  return NativeComponent;
}();

exports.default = NativeComponent;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Ref manager
 */

exports.default = {
  update: function update(prevElement, nextElement, component) {
    var prevRef = prevElement != null && prevElement.ref;
    var nextRef = nextElement != null && nextElement.ref;

    // Update refs in owner component
    if (prevRef !== nextRef) {
      // Detach prev RenderedElement's ref
      prevRef != null && this.detach(prevElement._owner, prevRef, component);
      // Attach next RenderedElement's ref
      nextRef != null && this.attach(nextElement._owner, nextRef, component);
    }
  },
  attach: function attach(ownerComponent, ref, component) {
    if (!ownerComponent) {
      throw new Error('You might be adding a ref to a component that was not created inside a component\'s ' + '`render` method, or you have multiple copies of Rax loaded.');
    }

    var instance = component.getPublicInstance();
    if (typeof ref === 'function') {
      ref(instance);
    } else {
      ownerComponent._instance.refs[ref] = instance;
    }
  },
  detach: function detach(ownerComponent, ref, component) {
    if (typeof ref === 'function') {
      // When the referenced component is unmounted and whenever the ref changes, the old ref will be called with null as an argument.
      ref(null);
    } else {
      // Must match component and ref could detach the ref on owner when A's before ref is B's current ref
      var instance = component.getPublicInstance();
      if (ownerComponent._instance.refs[ref] === instance) {
        delete ownerComponent._instance.refs[ref];
      }
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (children, element, index) {
  var elementKey = element && element.key;
  var hasKey = typeof elementKey === 'string';
  var defaultName = '.' + index.toString(36);

  if (hasKey) {
    var keyName = '$' + elementKey;
    // Child keys must be unique.
    var keyUnique = children[keyName] === undefined;
    // Only the first child will be used when encountered two children with the same key
    if (!keyUnique) console.warn('Encountered two children with the same key "' + elementKey + '".');

    return keyUnique ? keyName : defaultName;
  } else {
    return defaultName;
  }
};

module.exports = exports['default'];

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformPropsAttrsToStyle = transformPropsAttrsToStyle;
exports.renamePropsAttr = renamePropsAttr;
/**
 * transformPropAttrsToStyle
 *
 * @param {Object} props
 * @param {Array} attrs
 */
function transformPropsAttrsToStyle(props, attrs) {
  props.style = props.style || {};

  attrs.forEach(function (attr) {
    if (props[attr] && !props.style[attr]) {
      props.style[attr] = props[attr];
      delete props[attr];
    }
  });

  return props;
};

/**
 * renamePropsAttr
 *
 * @param {Object} props
 * @param {String} originalAttrName
 * @param {String} newAttrName
 */
function renamePropsAttr(props, originalAttrName, newAttrName) {
  if (props[originalAttrName] && !props[newAttrName]) {
    props[newAttrName] = props[originalAttrName];
    delete props[originalAttrName];
  }

  return props;
}
exports["default"] = module.exports;
exports.default = module.exports;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _host = __webpack_require__(4);

var _host2 = _interopRequireDefault(_host);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function findDOMNode(instance) {
  if (instance == null) {
    return null;
  }

  // If a native node, weex may not export ownerDocument property
  if (instance.ownerDocument || instance.nodeType) {
    return instance;
  }

  // Native component
  if (instance._nativeNode) {
    return instance._nativeNode;
  }

  if (typeof instance == 'string') {
    return _host2.default.driver.getElementById(instance);
  }

  if (typeof instance.render !== 'function') {
    throw new Error('findDOMNode: find by neither component nor DOM node.');
  }

  // Composite component
  var internal = instance._internal;

  if (internal) {
    while (!internal._nativeNode) {
      internal = internal._renderedComponent;
      // If not mounted
      if (internal == null) {
        return null;
      }
    }
    return internal._nativeNode;
  } else {
    throw new Error('findDOMNode: find on an unmounted component.');
  }
}

exports.default = findDOMNode;
module.exports = exports['default'];

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function invariant(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = exports.supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),
/* 53 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryRoute = exports.Navigation = exports.createNavigation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _universalEmitter = __webpack_require__(12);

var _universalEmitter2 = _interopRequireDefault(_universalEmitter);

var _Constant = __webpack_require__(6);

var _simpleLodash = __webpack_require__(17);

var _simpleLodash2 = _interopRequireDefault(_simpleLodash);

var _universalEnv = __webpack_require__(1);

var _Util = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var globalNavigation = null;

/**
 * transform
 * @param routerConfig
 * @returns {Array}
 * @example
 *
 * {
     type:'stack',
     routes:[{
        type:'tab',
        routes:[
           {  name:'cate' },
           {  name:'cate2' },
       ]
     },{
       name:'profile'
     }]
 }
 */
function transformRouterConfig() {
  var routerConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var routes = [];
  _simpleLodash2.default.map(routerConfig, function (config, name) {
    var screen = config.screen,
        path = config.path;

    var route = {};
    if (screen && screen.routerConfig && screen.navigatorType && screen.subNavigation) {
      route.name = name;
      route.type = screen.navigatorType;
      route.subNavigation = screen.subNavigation;
      route.routes = transformRouterConfig(screen.routerConfig);
    } else {
      route.name = name;
      route.screen = screen;
      if (path) {
        route.path = path;
      }
    }
    routes.push(route);
  });
  return routes;
}

function queryRoutes(routeObj) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var name = query.name,
      path = query.path;

  var results = [];

  if (routeObj && routeObj.routes) {
    _simpleLodash2.default.map(routeObj.routes, function (route) {
      if (route && route.routes) {
        if (name && route.name === name) {
          results.push({
            name: name,
            subNavigation: routeObj.subNavigation
          });
        }
        var res = queryRoutes(route, query);
        if (res && res.length) {
          results = results.concat(res);
        }
      } else {
        if (name && route.name === name) {
          results.push({
            name: name,
            type: routeObj.type,
            subNavigation: routeObj.subNavigation
          });
        } else if (path) {
          var params = (0, _Util.matchRestfulPath)(route.path, path);
          if (params) {
            results.push({
              params: params,
              name: route.name,
              type: routeObj.type,
              subNavigation: routeObj.subNavigation
            });
          }
        }
      }
    });
  }
  return results;
}

function queryRoute(routeObj) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return queryRoutes(routeObj, query)[0];
}

function formatRoutes(routeObj) {
  var results = [];
  if (routeObj && routeObj.routes) {
    _simpleLodash2.default.map(routeObj.routes, function (route) {
      if (route.subNavigation) {
        results = results.concat(formatRoutes(route));
      }
    });
    results.push({
      id: routeObj.subNavigation.id,
      state: (0, _Util.cloneObj)(routeObj.subNavigation.state)
    });
  }
  return results;
}

/*
 {id: "__navigation__1", state: {routeName,params,path}}
 {id: "__navigation__2", state: {…}}
 {id: "__navigation__3", state: {…}}
 */

function diffChangeHistory(prevHistory, nextHistory, action) {
  if (!prevHistory || !nextHistory) return;
  var change = [];
  for (var i = 0; i < prevHistory.length; i++) {
    var prev = prevHistory[i];
    var next = nextHistory[i];
    if (JSON.stringify(prev) != JSON.stringify(next)) {
      change.push({
        id: prev.id,
        prevState: prev.state,
        nextState: next.state,
        action: action
      });
    }
  }

  return change;
}

function diffChangeRecord(prevRecord, nextRecord, action) {
  if (!prevRecord || !nextRecord) return;
  var change = null;
  if (JSON.stringify(prevRecord) !== JSON.stringify(nextRecord)) {
    change = {
      id: action === 'PUSH' ? nextRecord.id : prevRecord.id,
      prevState: {
        routeName: prevRecord.name,
        path: prevRecord.path,
        params: prevRecord.params
      },
      nextState: {
        routeName: nextRecord.name,
        path: nextRecord.path,
        params: nextRecord.params
      },
      action: action
    };
  }
  return change;
}

var NavigationManager = function () {
  function NavigationManager() {
    var _this = this;

    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, NavigationManager);

    this.routes = [];
    this.state = {};
    this.records = [];
    this._history = [];
    this._recordChange = [];
    this._historyChange = [];
    this.history = null;

    this._onHistoryChange = function (location, action) {
      if (action === 'POP') {
        var lastChange = (0, _Util.getLast)(_this._recordChange);
        if (!lastChange) return;
        if (lastChange.action !== 'POP' || !(0, _Util.matchRestfulPath)(lastChange.nextState.path, location.pathname)) {
          _this.goBack({ ignoreHistory: true });
        }
      }
    };

    this.navigate = function (name, params, action) {
      if (name === _this.state.routeName) return;
      var results = queryRoutes(_this.routes, { name: name });
      var subNavigation = null;
      if (results && results.length) {
        _simpleLodash2.default.map(results, function (res) {
          subNavigation = res.subNavigation;
          subNavigation.navigate(name, params, action);
          _this.state.routeName = subNavigation.state.routeName;
          _this.state.params = subNavigation.state.params;
          _this.state.path = subNavigation.state.path;
        });

        if (subNavigation) {
          var nextRecord = {
            name: subNavigation.state.routeName,
            params: subNavigation.state.params,
            path: subNavigation.state.path,
            id: subNavigation.id
          };
          var nextHistory = _this.formatRoutesState();
          _this._diffRecordChange((0, _Util.getLast)(_this.records), nextRecord, 'PUSH');
          _this._diffHistoryChange((0, _Util.getLast)(_this._history), nextHistory, 'PUSH');
          _this.records.push(nextRecord);
          _this._history.push(nextHistory);
        }
        // console.log('navigation.records:', this.records)
        // console.log('navigation history:', this._history)
        // console.log('navigation _recordChange:', this._recordChange)
        // console.log('navigation _historyChange:', this._historyChange)
      } else {
        console.error('can\'t find navigation by name:', name);
      }
    };

    this.state.routeName = config.initialRouteName;
    this.state.params = config.initialRouteParams;
  }

  // global history


  _createClass(NavigationManager, [{
    key: 'formatRoutesState',
    value: function formatRoutesState() {
      return formatRoutes(this.routes);
    }
  }, {
    key: '_diffRecordChange',
    value: function _diffRecordChange(prevRecord, nextRecord, action) {
      var change = diffChangeRecord(prevRecord, nextRecord, action);
      this._recordChange.push(change);
    }
  }, {
    key: '_diffHistoryChange',
    value: function _diffHistoryChange(prevHistory, nextHistory, action) {
      var change = diffChangeHistory(prevHistory, nextHistory, action);
      this._historyChange.push(change);
    }
  }, {
    key: 'addNavigation',
    value: function addNavigation(config) {
      var routerConfig = config.routerConfig,
          navigatorType = config.navigatorType,
          subNavigation = config.subNavigation,
          initialRouteName = config.initialRouteName,
          initialRouteParams = config.initialRouteParams,
          history = config.history;

      if (!this.history) {
        this.history = history;
        this.history.listen(this._onHistoryChange);
      }
      this.routes = {
        type: navigatorType,
        subNavigation: subNavigation,
        routes: transformRouterConfig(routerConfig)
      };
      this.records = [{
        name: initialRouteName,
        params: initialRouteParams,
        path: history.location.pathname + history.location.search
      }];
      this._history = [this.formatRoutesState()];
    }
  }, {
    key: 'navigateByPath',
    value: function navigateByPath(path, action) {
      var result = queryRoute(this.routes, { path: path });
      if (result && result.name) {
        this.navigate(result.name, result.params, action);
      } else {
        console.error('can\'t find route by path:', path);
      }
    }
  }, {
    key: 'goBack',
    value: function goBack() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (this.records.length <= 1) {
        // weex goback
        if (_universalEnv.isWeex) {
          var weexNavigator = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@weex-module/navigator\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
          weexNavigator.pop();
        }
        return;
      }
      var lastRoute = (0, _Util.getLast)(this.records);
      if (lastRoute && lastRoute.name) {
        var result = queryRoute(this.routes, { name: lastRoute && lastRoute.name });
        if (result) {
          var subNavigation = result.subNavigation;

          if (this._history.length > 1) {
            var prevRecord = this.records.pop();
            var prevHistory = this._history.pop();
            var last = (0, _Util.getLast)(this._history);
            this._diffRecordChange(prevRecord, (0, _Util.getLast)(this.records), 'POP');
            this._diffHistoryChange(prevHistory, last, 'POP');
            var lastChange = (0, _Util.getLast)(this._recordChange);
            if (lastChange && lastChange.action === 'POP') {
              this.state.routeName = lastChange.nextState.routeName;
              this.state.params = lastChange.nextState.params;
              this.state.path = lastChange.nextState.path;
            }
            subNavigation && subNavigation.goBack(options);
          }
        }
      }
    }
  }, {
    key: 'dispatch',
    value: function dispatch() {}
  }]);

  return NavigationManager;
}();

function createNavigation(config) {
  if (!globalNavigation) {
    globalNavigation = new NavigationManager(config);
  }
  globalNavigation.addNavigation(config);
  return globalNavigation;
}

var Navigation = function Navigation(config) {
  var _this2 = this;

  _classCallCheck(this, Navigation);

  this.routerConfig = {};
  this.config = {};
  this.navigateHandler = null;
  this.state = {};
  this.records = [];
  this.id = null;

  this.setNavigateHandler = function (handler) {
    if (_this2.navigateHandler) {
      _universalEmitter2.default.off(_Constant.EVENT_NAVIGATE, _this2.navigateHandler);
    }
    _universalEmitter2.default.on(_Constant.EVENT_NAVIGATE, handler);
    _this2.navigateHandler = handler;
  };

  this.navigate = function (name, params, action) {
    if (name === _this2.state.routeName) return;
    var routerConfig = _this2.routerConfig;
    _this2.state.routeName = name;
    _this2.state.params = params;
    _this2.state.path = routerConfig[name].path;
    _this2.records.push({
      name: name,
      params: params,
      path: routerConfig[name].path,
      id: _this2.id
    });
    _universalEmitter2.default.emit(_Constant.EVENT_NAVIGATE, {
      id: _this2.id,
      name: name,
      params: params,
      navigation: _this2,
      navigatorType: _this2.navigatorType,
      type: 'push'
    });
    return true;
  };

  this.navigateByPath = function (path) {
    var _matchRouteByPath = (0, _Util.matchRouteByPath)(_this2.routerConfig, path),
        name = _matchRouteByPath.name,
        _matchRouteByPath$par = _matchRouteByPath.params,
        params = _matchRouteByPath$par === undefined ? {} : _matchRouteByPath$par;

    _this2.navigate(name, params);
  };

  this.goBack = function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _options$ignoreHistor = options.ignoreHistory,
        ignoreHistory = _options$ignoreHistor === undefined ? false : _options$ignoreHistor;

    if (_this2.records.length > 1) {
      _this2.records.pop();
      _this2.state.routeName = _this2.records[_this2.records.length - 1].name;
      _this2.state.params = _this2.records[_this2.records.length - 1].params;
      _this2.state.path = _this2.records[_this2.records.length - 1].path;
      _universalEmitter2.default.emit(_Constant.EVENT_NAVIGATE, {
        id: _this2.id,
        type: 'goBack',
        navigation: _this2,
        navigatorType: _this2.navigatorType,
        ignoreHistory: ignoreHistory
      });
    }
  };

  this.goForward = function () {
    _universalEmitter2.default.emit(_Constant.EVENT_NAVIGATE, {
      id: _this2.id,
      type: 'goForward',
      navigation: _this2,
      navigatorType: _this2.navigatorType
    });
  };

  this.go = function (n) {
    _universalEmitter2.default.emit(_Constant.EVENT_NAVIGATE, {
      id: _this2.id,
      type: 'go',
      navigation: _this2,
      navigatorType: _this2.navigatorType,
      params: {
        n: n
      }
    });
  };

  this.setParams = function (params) {
    // TODO setParams

  };

  this.dispatch = function () {
    // TODO dispatch
  };

  this.id = '__navigation__' + (0, _Util.uuid)();
  this.config = config;
  this.routerConfig = config.routerConfig;
  this.navigatorType = config.navigatorType;
  this.state.routeName = config.initialRouteName;
  this.state.params = config.initialRouteParams;
  this.state.path = this.routerConfig[this.state.routeName].path;
  this.records = [{
    name: config.initialRouteName,
    params: config.initialRouteParams,
    path: this.state.path
  }];
  if (config.navigateHandler) {
    this.setNavigateHandler(config.navigateHandler);
  }
};

exports.createNavigation = createNavigation;
exports.Navigation = Navigation;
exports.queryRoute = queryRoute;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _objectAssign = __webpack_require__(11);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _Util = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseViewContainer = function (_Component) {
  _inherits(BaseViewContainer, _Component);

  function BaseViewContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BaseViewContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BaseViewContainer.__proto__ || Object.getPrototypeOf(BaseViewContainer)).call.apply(_ref, [this].concat(args))), _this), _this._resolvedViews = {}, _this.resolveNavigationOptions = function (view) {
      var navigationOptions = {};
      if (view && view.screen && view.screen.guid) {
        navigationOptions = _this._resolvedViews[view.screen.guid] || (0, _objectAssign2.default)((0, _Util.resolveFn)(_this.props.navigationOptions, view), (0, _Util.resolveFn)(view.screen.navigationOptions, view));
        _this._resolvedViews[view.screen.guid] = navigationOptions;
      }
      return navigationOptions;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BaseViewContainer, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        parentNavigation: this.props.subNavigation
      };
    }
  }]);

  return BaseViewContainer;
}(_rax.Component);

exports.default = BaseViewContainer;
module.exports = exports['default'];

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxButton = __webpack_require__(134);

var _raxButton2 = _interopRequireDefault(_raxButton);

var _raxText = __webpack_require__(3);

var _raxText2 = _interopRequireDefault(_raxText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderBackTitle = function (_PureComponent) {
  _inherits(HeaderBackTitle, _PureComponent);

  function HeaderBackTitle() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HeaderBackTitle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HeaderBackTitle.__proto__ || Object.getPrototypeOf(HeaderBackTitle)).call.apply(_ref, [this].concat(args))), _this), _this.handleGoBack = function () {
      var navigation = _this.props.navigation;

      navigation && navigation.goBack();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HeaderBackTitle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          headerBackTitle = _props.headerBackTitle,
          headerTintColor = _props.headerTintColor,
          headerBackTitleStyle = _props.headerBackTitleStyle;

      if (typeof headerBackTitle !== 'string') {
        headerBackTitle = 'Back';
      }
      return (0, _rax.createElement)(
        _raxButton2.default,
        { style: styles.goBack,
          onPress: this.handleGoBack },
        (0, _rax.createElement)(
          _raxText2.default,
          { style: [styles.headerBackTitle, { color: headerTintColor }, headerBackTitleStyle] },
          headerBackTitle
        )
      );
    }
  }]);

  return HeaderBackTitle;
}(_rax.PureComponent);

HeaderBackTitle.defaultProps = {
  headerBackTitle: 'Back'
};


var styles = {
  goBack: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 150,
    bottom: 0,
    overflow: 'hidden',
    opacity: 1,
    justifyContent: 'center'
  },
  headerBackTitle: {
    textAlign: 'center',
    fontSize: 32
  }
};

exports.default = HeaderBackTitle;
module.exports = exports['default'];

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _Util = __webpack_require__(5);

var _Constant = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderRight = function (_PureComponent) {
  _inherits(HeaderRight, _PureComponent);

  function HeaderRight() {
    _classCallCheck(this, HeaderRight);

    return _possibleConstructorReturn(this, (HeaderRight.__proto__ || Object.getPrototypeOf(HeaderRight)).apply(this, arguments));
  }

  _createClass(HeaderRight, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          headerRight = _props.headerRight,
          _props$style = _props.style,
          style = _props$style === undefined ? {} : _props$style,
          headerMode = _props.headerMode,
          headerStyle = _props.headerStyle;


      return (0, _rax.createElement)(
        _raxView2.default,
        { ref: 'headerRight',
          style: [styles.headerRightWrap, { opacity: undefined === style.opacity ? 1 : style.opacity }, { top: headerMode === 'float' ? headerStyle.top || _Util.statusBarHeight : 0 }, { height: (headerStyle.height || _Constant.HEIGHT_STACK_HEADER_DEFAULT) - 2 }] },
        headerRight
      );
    }
  }]);

  return HeaderRight;
}(_rax.PureComponent);

HeaderRight.defaultProps = {
  headerRight: null
};


var styles = {
  headerRightWrap: {
    position: 'absolute',
    justifyContent: 'center',
    width: 150,
    right: 0
  }
};

exports.default = HeaderRight;
module.exports = exports['default'];

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _HeaderBackTitle = __webpack_require__(56);

var _HeaderBackTitle2 = _interopRequireDefault(_HeaderBackTitle);

var _Util = __webpack_require__(5);

var _Constant = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderLeft = function (_PureComponent) {
  _inherits(HeaderLeft, _PureComponent);

  function HeaderLeft() {
    _classCallCheck(this, HeaderLeft);

    return _possibleConstructorReturn(this, (HeaderLeft.__proto__ || Object.getPrototypeOf(HeaderLeft)).apply(this, arguments));
  }

  _createClass(HeaderLeft, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          headerLeft = _props.headerLeft,
          index = _props.index,
          _props$style = _props.style,
          style = _props$style === undefined ? {} : _props$style,
          _props$headerStyle = _props.headerStyle,
          headerStyle = _props$headerStyle === undefined ? {} : _props$headerStyle,
          _props$headerMode = _props.headerMode,
          headerMode = _props$headerMode === undefined ? 'screen' : _props$headerMode;

      return (0, _rax.createElement)(
        _raxView2.default,
        {
          style: [styles.headerLeftWrap, { top: headerMode === 'float' ? headerStyle.top || _Util.statusBarHeight : 0 }, { height: (headerStyle.height || _Constant.HEIGHT_STACK_HEADER_DEFAULT) - 2 }, { opacity: undefined === style.opacity ? 1 : style.opacity }] },
        headerLeft && headerLeft.props ? (0, _rax.createElement)(headerLeft.type, _extends({}, headerLeft.props, { style: headerLeft.props.style })) : index > 0 ? (0, _rax.createElement)(_HeaderBackTitle2.default, this.props) : null
      );
    }
  }]);

  return HeaderLeft;
}(_rax.PureComponent);

HeaderLeft.defaultProps = {
  headerLeft: null
};


var styles = {
  headerLeftWrap: {
    position: 'absolute',
    justifyContent: 'center',
    width: 150
  }
};

exports.default = HeaderLeft;
module.exports = exports['default'];

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

var _History = __webpack_require__(22);

var _Util = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*

 1. 点击back回退

 navigate.goBack() -> history.pop() -> updateScreen ->  historyChange

 2. 浏览器默认按钮回退

 historyChange -> updateScreen


 */

var BaseNavigator = function (_Component) {
  _inherits(BaseNavigator, _Component);

  function BaseNavigator() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BaseNavigator);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BaseNavigator.__proto__ || Object.getPrototypeOf(BaseNavigator)).call.apply(_ref, [this].concat(args))), _this), _this.navigateHandler = function (config) {
      var _this$props = _this.props,
          subNavigation = _this$props.subNavigation,
          navigation = _this$props.navigation;
      var location = _this.props.history.location;
      var name = config.name,
          type = config.type,
          navigatorType = config.navigatorType,
          id = config.id,
          ignoreHistory = config.ignoreHistory;
      var routerConfig = _this.props.routerConfig;

      if (id !== subNavigation.id) return;
      switch (type) {
        case 'push':
          var route = void 0;
          var params = void 0;
          if (name) {
            params = config.params;
            route = (0, _Util.matchRouteByName)(routerConfig, name);
          }
          if (!route) return;
          if (route.path) {
            var pathname = (0, _Util.urlFormat)(route.path, config.params);
            var currentRoute = (0, _Util.matchRoute)(routerConfig, { path: location.pathname });
            // 当前页面和将要路由的页面是否一致，如果一致则返回
            if (currentRoute && currentRoute.route && currentRoute.route.path !== route.path) {
              _this.history.push(pathname, {
                params: params,
                name: route.name,
                navigatorType: navigatorType
              });
            }
            _this.updateScreen({
              name: route.name,
              action: 'PUSH',
              params: params
            });
          } else {
            _this.updateScreen({
              name: name,
              params: params,
              action: 'PUSH'
            });
          }
          break;
        case 'goBack':
          // 如果当前路由有path则pop history
          if (navigation.state.path && !ignoreHistory) {
            (0, _History.handleBack)();
          }
          var prevRecord = (0, _Util.getLast)(subNavigation.records);
          if (prevRecord) {
            _this.updateScreen({
              name: prevRecord.name,
              params: prevRecord.params,
              path: prevRecord.path,
              action: 'POP'
            });
          }
          break;
        case 'goForward':
          _this.history.goForward();
          break;
        case 'go':
          _this.history.go(config.params.n);
          break;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BaseNavigator, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        navigation: this.props.navigation
      };
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          _props$routerConfig = _props.routerConfig,
          routerConfig = _props$routerConfig === undefined ? {} : _props$routerConfig,
          _props$initialRouteNa = _props.initialRouteName,
          initialRouteName = _props$initialRouteNa === undefined ? Object.keys(routerConfig)[0] : _props$initialRouteNa,
          _props$initialRoutePa = _props.initialRouteParams,
          initialRouteParams = _props$initialRoutePa === undefined ? {} : _props$initialRoutePa,
          subNavigation = _props.subNavigation;

      initialRouteName = initialRouteName || Object.keys(routerConfig)[0];
      initialRouteParams = initialRouteParams || {};
      this.history = this.props.history;
      subNavigation.setNavigateHandler(this.navigateHandler);
      var route = (0, _Util.matchRouteByNameOrPath)(routerConfig, {
        name: initialRouteName,
        path: this.history.location.pathname + this.history.location.search
      });
      if (route && route.name) {
        this.updateScreen({ name: route.name, params: route.params || initialRouteParams || {}, action: 'PUSH' });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (_universalEnv.isWeex) {
        document.body.addEvent('clickbackitem', _History.handleBack);
      }
      this.resolveAllScreens();
    }
  }, {
    key: 'resolveAllScreens',
    value: function resolveAllScreens() {}
  }, {
    key: 'getScreenComponentFromRoute',
    value: function getScreenComponentFromRoute(route) {
      if (!route) return;
      if (route.screen) {
        return route.screen;
      }
      if (typeof route.getScreen === 'function' && !(route.getScreen() instanceof Promise)) {
        return route.getScreen();
      }
    }
  }, {
    key: 'asyncGetScreenComponentFromRoute',
    value: function asyncGetScreenComponentFromRoute(route) {
      if (!route) return Promise.resolve();
      return new Promise(function (resolve) {
        if (route.screen) {
          resolve(route.screen);
        } else if (route.getScreen) {
          resolve(route.getScreen());
        }
      }).then(function (screen) {
        screen.guid = '__screen__' + (0, _Util.uuid)();
        return screen;
      });
    }
  }]);

  return BaseNavigator;
}(_rax.Component);

exports.default = BaseNavigator;
module.exports = exports['default'];

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Utils = exports.Detection = exports.TabPanelLink = exports.TabPanelView = exports.TabPanel = exports.TabController = undefined;

var _TabController = __webpack_require__(140);

var _TabController2 = _interopRequireDefault(_TabController);

var _TabPanel = __webpack_require__(40);

var _TabPanel2 = _interopRequireDefault(_TabPanel);

var _TabPanelView = __webpack_require__(148);

var _TabPanelView2 = _interopRequireDefault(_TabPanelView);

var _TabPanelLink = __webpack_require__(149);

var _TabPanelLink2 = _interopRequireDefault(_TabPanelLink);

var _Detection = __webpack_require__(18);

var _Detection2 = _interopRequireDefault(_Detection);

var _Utils = __webpack_require__(26);

var Utils = _interopRequireWildcard(_Utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.TabController = _TabController2.default;
exports.TabPanel = _TabPanel2.default;
exports.TabPanelView = _TabPanelView2.default;
exports.TabPanelLink = _TabPanelLink2.default;
exports.Detection = _Detection2.default;
exports.Utils = Utils;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(141);

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _universalEnv = __webpack_require__(1);

var _universalSpm = __webpack_require__(63);

var _universalSpm2 = _interopRequireDefault(_universalSpm);

var _utils = __webpack_require__(64);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (_universalEnv.isNode) {
  global.window = {}; // eslint-disable-line
}

var DEFAULT_WEEX_GM_KEY = 'click';
var WEEX_GM_KEY_MAP = {
  CLK: 'click',
  EXP: 'expose',
  OTHER: 'other'
};

var goldlog = {
  record: function record(logkey, gmkey, gokey, chksum) {

    if (_universalEnv.isWeex) {
      var logkeyargs = (0, _utils.paramsToObj)(gokey);
      logkeyargs.weex = logkeyargs.weex ? logkeyargs.weex : '1';
      logkeyargs.autosend = '1';

      var weexGmKey = WEEX_GM_KEY_MAP[gmkey];
      weexGmKey = weexGmKey || DEFAULT_WEEX_GM_KEY;

      var params = {
        logkey: logkey,
        // http://velocity.alibaba-inc.com/issues/2883
        // logkeyargs: objToParams(logkeyargs),
        weex: 1,
        autosend: 1,
        urlpagename: '',
        url: logkeyargs.url || location && location.href || '', // 完整 url
        'spm-cnt': _universalSpm2.default.getSPM().join('.'),
        cna: '', // 访客 id
        extendargs: JSON.stringify({}),
        isonepage: 0,
        _lka: JSON.stringify({
          gmkey: gmkey,
          gokey: gokey
        }),
        gokey: gokey
      };

      var UserTrack = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@weex-module/userTrack\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

      // new API from ut module
      if (UserTrack.commitut) {

        var pageName = logkeyargs.name || params.url;
        var arg1 = logkey;
        var arg2 = '';
        var arg3 = '';

        switch (weexGmKey) {
          case 'expose':
            UserTrack.commitut(weexGmKey, 2201, pageName, '', arg1, arg2, arg3, params);
            break;
          case 'other':
            UserTrack.commitut(weexGmKey, 19999, pageName, '', arg1, '', '', params);
            break;
          case 'click':
          default:
            // call this API to avoid arg1 to be pageName_logkey
            if (UserTrack.customAdvance) {
              UserTrack.customAdvance(pageName, 2101, arg1, arg2, arg3, params);
            } else {
              UserTrack.commitut(weexGmKey, 2101, pageName, arg1, '', '', '', params);
            }
            break;
        }
      } else if (UserTrack.commit) {
        // old story
        UserTrack.commit(weexGmKey, logkey, logkey, params);
      }
    } else if (_universalEnv.isWeb && window.goldlog) {
      window.goldlog.record(logkey, gmkey, gokey, chksum);
    } else {
      // Noop
    }
  },
  launch: function launch() {
    var pageSPM = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _universalSpm2.default.getPageSPM();
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


    var checksum = (0, _utils.makeChkSum)(pageSPM.join('.'));
    // handle logConfig
    var logConfig = {
      // checksum: http://on.alibaba.net/
      checksum: checksum,
      is_auto: false,
      page_id: ''
    };

    // special logic for logConfig
    if (params.page_id) {
      logConfig.page_id = params.page_id;
      delete params.page_id;
    }

    if (_universalEnv.isWeex) {

      // first of all, set spm-ab code for current page.
      _universalSpm2.default.setPageSPM(pageSPM[0], pageSPM[1]);

      var UserTrack = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@weex-module/userTrack\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

      params.url = params.url || location && location.href || '';
      params['spm-cnt'] = _universalSpm2.default.getPageSPM().join('.') + '.0.0';
      if ((0, _utils.getParamFromURL)(params.url, 'spm')) {
        params['spm-url'] = params['spm-url'] || (0, _utils.getParamFromURL)(params.url, 'spm');
      }
      params.scm = params.scm || (0, _utils.getParamFromURL)(params.url, 'scm') || '0.0.0.0';
      params.cna = '';
      params.weex = 1;

      var name = params.name || (0, _utils.simplifyURL)(params.url);

      if (UserTrack.enterEvent) {
        UserTrack.enterEvent(name, params);
      } else if (UserTrack.commit) {
        UserTrack.commit('enter', name, '', params);
      }
    } else if (_universalEnv.isWeb) {

      var waiting = !!(0, _utils.getMetaContentByName)('aplus-waiting');

      // only sendPV when aplus-waiting is already set in web
      if (waiting) {

        // http://groups.alidemo.cn/alilog/manual-for-f2e/api/goldlog.html
        var q = window.goldlog_queue || (window.goldlog_queue = []);

        q.push({
          action: 'goldlog.setPageSPM',
          arguments: [pageSPM[0], pageSPM[1]]
        });

        q.push({
          action: 'goldlog.sendPV',
          arguments: [logConfig, params]
        });
      } else if (window.goldlog && window.goldlog.setPageSPM) {
        // first of all, set spm-ab code for current page.
        window.goldlog.setPageSPM(pageSPM[0], pageSPM[1], function () {
          window.goldlog.sendPV && window.goldlog.sendPV({ checksum: checksum });
        });
      }
    } else {}
  },


  // https://lark.alipay.com/usertrackgroup/qtb7il/vg5d7e#424-weex
  updateNextProps: function updateNextProps() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (_universalEnv.isWeex && (typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object') {
      var UserTrack = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@weex-module/userTrack\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
      UserTrack.commitut && UserTrack.commitut('updateNextProp', -1, '', '', '', '', '', params);
    }
  },
  updatePageUtparam: function updatePageUtparam() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (_universalEnv.isWeex && (typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object') {
      var UserTrack = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@weex-module/userTrack\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
      // 透传json字符串，必须是字符串
      UserTrack.updatePageUtparam && UserTrack.updatePageUtparam(JSON.stringify(params));
    }
  },
  updateNextPageUtparam: function updateNextPageUtparam() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (_universalEnv.isWeex && (typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object') {
      var UserTrack = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@weex-module/userTrack\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
      // 透传json字符串，必须是字符串
      UserTrack.updateNextPageUtparam && UserTrack.updateNextPageUtparam(JSON.stringify(params));
    }
  }
};

goldlog.sendPV = goldlog.launch;

exports.default = goldlog;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(142);

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paramsToObj = paramsToObj;
exports.objToParams = objToParams;
exports.getParamFromURL = getParamFromURL;
exports.makeChkSum = makeChkSum;
exports.getMetaContentByName = getMetaContentByName;
exports.simplifyURL = simplifyURL;

var _universalEnv = __webpack_require__(1);

if (_universalEnv.isNode) {
  global.window = {}; // eslint-disable-line
}

function paramsToObj(str) {
  str = typeof str === 'string' ? str : '';

  var result = {};
  var splitStr = str.split('&');

  for (var i = 0; i < splitStr.length; i++) {
    var s = splitStr[i];
    var splitKV = s.split('=');
    var key = splitKV[0];
    var val = splitKV[1];
    if (key) {
      result[key] = val;
    }
  }

  return result;
}

function objToParams(obj) {
  var result = [];
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      var key = i;
      var val = obj[i];
      result.push(key + '=' + val);
    }
  }
  return result.join('&');
}

function getParamFromURL(url) {
  var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'spm';

  var search = url.split('?')[1] || '';
  var paramValue = '';

  search.split('&').forEach(function (o) {
    if (o.indexOf(param + '=') === 0) {
      paramValue = o.substr(param.length + 1);
    }
  });

  return paramValue;
}

function makeChkSum(s) {

  s = (s || '').split('#')[0].split('?')[0];

  var len = s.length;
  var hash = function hash(s) {
    var l = s.length;
    var key = 0;
    for (var i = 0; i < l; i++) {
      key = key * 31 + s.charCodeAt(i);
    }
    return key;
  };
  return len ? hash(len + '#' + s.charCodeAt(len - 1)) : -1;
}

function getMetaContentByName(metaName) {
  var meta = window && window.document && window.document.getElementsByTagName('meta')[metaName];
  return meta ? meta.getAttribute('content') : '';
}

function simplifyURL() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';


  var WEEX_PREFIX = '_wx_tpl=';
  var WEEX_SUFFIX = '.js';

  // http://wapp.wapa.taobao.com/crowd/index-wx/index.html?groupId=57&_wx_tpl=http://g-assets.daily.taobao.net/tb/m-crowd/0.1.1/p/index-wx/index.js
  // 截取 js 部分 http://g-assets.daily.taobao.net/tb/m-crowd/0.1.1/p/index-wx/index.js
  if (url.indexOf(WEEX_PREFIX) > -1) {
    url = url.substring(url.indexOf(WEEX_PREFIX) + WEEX_PREFIX.length, url.indexOf(WEEX_SUFFIX) + WEEX_SUFFIX.length);
  }

  return url.split('?')[0];
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @jsx createElement */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _simpleLodash = __webpack_require__(17);

var _simpleLodash2 = _interopRequireDefault(_simpleLodash);

var _TabPanel = __webpack_require__(40);

var _TabPanel2 = _interopRequireDefault(_TabPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseView = function (_Component) {
  _inherits(BaseView, _Component);

  function BaseView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BaseView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BaseView.__proto__ || Object.getPrototypeOf(BaseView)).call.apply(_ref, [this].concat(args))), _this), _this.itemWidth = 750, _this.itemCount = 0, _this.curIndex = null, _this.token = null, _this.prevIndex = null, _this.switchTo = function () {
      // no impl
    }, _this.renderPanel = function (index) {
      if (_this.refs['panel_' + index]) {
        _this.refs['panel_' + index].show();
      }
    }, _this.destroyPanel = function (index) {
      if (_this.refs['panel_' + index]) {
        _this.refs['panel_' + index].hide();
      }
    }, _this.handleScreens = function () {
      var screenNumbersPerSide = _this.props.screenNumbersPerSide;
      var _this2 = _this,
          itemCount = _this2.itemCount,
          curIndex = _this2.curIndex;

      var visibleIndexes = [];
      if (screenNumbersPerSide >= 0) {
        var max = curIndex + screenNumbersPerSide > itemCount - 1 ? itemCount - 1 : curIndex + screenNumbersPerSide;
        var min = curIndex - screenNumbersPerSide < 0 ? 0 : curIndex - screenNumbersPerSide;
        for (var i = min; i < curIndex; i++) {
          visibleIndexes.push(i);
        }
        for (var _i = curIndex; _i <= max; _i++) {
          visibleIndexes.push(_i);
        }

        var _loop = function _loop(_i2) {
          if (_simpleLodash2.default.findIndex(visibleIndexes, function (o) {
            return o === _i2;
          }) === -1) {
            _this.destroyPanel(_i2);
          }
        };

        for (var _i2 = 0; _i2 < itemCount; _i2++) {
          _loop(_i2);
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BaseView, [{
    key: 'countItems',
    value: function countItems() {
      var _this3 = this;

      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      this.itemCount = 0;
      var children = props.children.length > 0 ? props.children : [props.children];
      children.map(function (child) {
        if (child && child.type === _TabPanel2.default) {
          _this3.itemCount++;
        }
      });
    }
  }]);

  return BaseView;
}(_rax.Component);

exports.default = BaseView;
module.exports = exports['default'];

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @jsx createElement */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _universalEmitter = __webpack_require__(12);

var _universalEmitter2 = _interopRequireDefault(_universalEmitter);

var _raxTabPanel = __webpack_require__(39);

var _Util = __webpack_require__(5);

var _Constant = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PanView = function (_Component) {
  _inherits(PanView, _Component);

  function PanView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PanView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PanView.__proto__ || Object.getPrototypeOf(PanView)).call.apply(_ref, [this].concat(args))), _this), _this.isPanning = false, _this.onCellClick = function (e) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          onPress = _this$props.onPress;

      if (_this.isPanning) {
        return;
      }
      if (typeof onClick === 'function') {
        onClick(e);
      } else if (typeof onPress === 'function') {
        onPress(e);
      }
    }, _this.onHorizontalPan = function (e) {
      if (e.state === 'start') {
        _this.isPanning = true;
        _universalEmitter2.default.emit(_Constant.EVENT_CELL_PAN_START, {
          element: _this
        });
      } else if (e.state === 'end') {
        setTimeout(function () {
          _this.isPanning = false;
        }, 50);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PanView, [{
    key: 'render',
    value: function render() {
      var props = _extends({}, this.props, {
        preventMoveEvent: true,
        onClick: this.onCellClick
      });
      if (_Util.Detection.Android) {
        props.onHorizontalPan = this.onHorizontalPan;
      }

      return this.context.isInATabPanel ? (0, _rax.createElement)(_raxTabPanel.TabPanelView, props) : (0, _rax.createElement)(_raxView2.default, props);
    }
  }]);

  return PanView;
}(_rax.Component);

PanView.contextTypes = {
  isInATabPanel: _rax.PropTypes.bool
};
exports.default = PanView;
module.exports = exports['default'];

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = exports.Row = undefined;

var _Row2 = __webpack_require__(163);

var _Row3 = _interopRequireDefault(_Row2);

var _Col2 = __webpack_require__(164);

var _Col3 = _interopRequireDefault(_Col2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.Row = _Row3.default;
exports.Col = _Col3.default;
exports['default'] = module.exports;
exports.default = module.exports;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rax = __webpack_require__(0);

var _universalTransition = __webpack_require__(36);

var _universalTransition2 = _interopRequireDefault(_universalTransition);

var _universalEnv = __webpack_require__(1);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var fullWidthPx = 0;
if (_universalEnv.isWeex) {
  var weexEnv = typeof WXEnvironment !== 'undefined' ? WXEnvironment : {};
  fullWidthPx = weexEnv.deviceWidth;
} else {
  fullWidthPx = document.body.clientWidth;
}

var Animated = {

  transition: function transition(Node, style, callback) {
    (0, _universalTransition2.default)(Node, style, {
      timingFunction: 'ease',
      delay: 0,
      duration: 300
    }, function () {
      callback && callback();
    });
  },

  height: function height(Node, _height, callback) {
    var heightStr = _height * fullWidthPx / 750 + 'px';
    if (_universalEnv.isWeex) {
      heightStr = _height;
    }
    Animated.transition(Node, {
      height: heightStr
    }, callback);
  },

  rotate: function rotate(Node, _rotate, callback) {
    Animated.transition(Node, {
      transform: 'rotate(' + _rotate + 'deg)'
    }, callback);
  },

  scrollTo: function scrollTo(Node, options, callback) {
    var width = parseInt(options.x);
    var translateStr = 'translate(' + width * fullWidthPx / 750 + 'px, 0)';
    if (_universalEnv.isWeex) {
      translateStr = 'translate(' + width + 'px, 0)';
    }
    setTimeout(function () {
      Animated.transition(Node, {
        transform: translateStr
      }, callback);
    }, 0);
  }

};

exports.default = Animated;
module.exports = exports['default'];

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var RefreshControl = function (_Component) {
  _inherits(RefreshControl, _Component);

  function RefreshControl() {
    _classCallCheck(this, RefreshControl);

    return _possibleConstructorReturn(this, (RefreshControl.__proto__ || Object.getPrototypeOf(RefreshControl)).apply(this, arguments));
  }

  _createClass(RefreshControl, [{
    key: 'render',
    value: function render() {
      if (_universalEnv.isWeex) {
        var displayRefresh = this.props.refreshing ? 'show' : 'hide';
        return (0, _rax.createElement)('refresh', _extends({}, this.props, { display: displayRefresh }), this.props.children);
      } else {
        return null;
      }
    }
  }]);

  return RefreshControl;
}(_rax.Component);

exports.default = RefreshControl;
module.exports = exports['default'];

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */



exports.extend = extend;
var hop = Object.prototype.hasOwnProperty;

function extend(obj) {
    var sources = Array.prototype.slice.call(arguments, 1),
        i,
        len,
        source,
        key;

    for (i = 0, len = sources.length; i < len; i += 1) {
        source = sources[i];
        if (!source) {
            continue;
        }

        for (key in source) {
            if (hop.call(source, key)) {
                obj[key] = source[key];
            }
        }
    }

    return obj;
}
exports.hop = hop;

//# sourceMappingURL=utils.js.map

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxText = __webpack_require__(3);

var _raxText2 = _interopRequireDefault(_raxText);

var _raxImage = __webpack_require__(7);

var _raxImage2 = _interopRequireDefault(_raxImage);

var _raxIntl = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(
        _raxIntl.I18nView,
        { style: _extends({}, styles.appHeader, { flexDirection: 'row' }) },
        (0, _rax.createElement)(_raxView2.default, { style: styles.box1 }),
        (0, _rax.createElement)(
          _raxView2.default,
          { style: styles.box2 },
          (0, _rax.createElement)(_raxImage2.default, { source: {
              uri: 'http://my-live-02.slatic.net/homepage/images/local_mobile_api/newlogo/my@3x-31da1633d2.png'
            },
            style: {
              width: 180,
              height: 50
            } })
        ),
        (0, _rax.createElement)(
          _raxView2.default,
          { style: styles.box3 },
          (0, _rax.createElement)(_raxImage2.default, { source: {
              uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABCCAQAAAC1SOOpAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQffAgIIOwNU3XCLAAAGxUlEQVRo3s2ZXWwcVxXHf3c/Z9ZO7HwnbWI3pFZa0rhCKHxJaZEIiIdKoFZCokhNxRMSSiMhHhBPqQgKEuIhihC8lCcEygMFJATloW4qSupEqZpQpVITO46dQBJnbbf27s66+/HnYe6O1/HMrr3R7vqMdufeuboz//s/555z7r3oGY2qogeloiv6mpJ0SzSqeYWJp3fVD+oSrKKipKRHu0VWjD/ySURbnE3dgpXgFHM8SSzQVpn9PEYCEFuUMGXWh+hHmrFm/2253VLiSlkkZ0tbSa4fWAsBrH4S6wdWjrwtbQhKHTf5lTJvwRi+xR7NE+8gHkOZcV5PNFCi4Wme7gJVd9kZC2Ur11VXsJNjjU2+O1JmIdzkC12FledcuMkv2FKR73GRTCd8OGVOcwQXKPCvEFimqppbcJgwtzsWXbbhxxSPNxMRNNZkS4cgxTnIgK3cNtdjK9kEPCo1Py/Tfv0BCZ7FAWCO90O8vPFhzdvqJjoTrBM8a234DufDgw/kmbOlPjuGtjp2wOEr9kv3uBAFqxjMxY6wpSRPBSnnbTO5LtgCNnLYRt67fACKgLVkW/3thiWAXp7xdckYH0QlNuAF+X1/u5VofDd0yCIZ4z9gImAV+LhTsEAJ9tFvK2Pmf43Y6pASBfAoX6yZOxP+s3XAFrv4gi29z43opBkKgW11YiY+ErB1mXHf2kJhmVIAqxe3nQt+g5LsI2WrV839RmwRuFNw7WxplzzOAVua4FaNgliEGXpBtbfNBr+fg7Z6nvsNFmQGoMRMzQO3b2VtAIZ40lZHydY0E6XET4Pw07M2vrQmS5Th8WCuXzRzjZavy2FtZEMbLWuYQQCqfMjdxstXH9ZswFZmzYpB4JChFwcHl14yODj0kMHFIUMPLg5pBtlnVzvvkAfZ/lGwSgEs12dUSVKkcXBxSJG2r03jkCFFmjQuLilSZEiSIE6CFHESJEiSDEqJuns8WLFXeBtvac43Z+sAP9Q4PbgkSZImTZoUSRzSJEmRwrV3h3SkUTSTRUbrZn8DWHNWG0MMtd3Pe7zFpJGaslWysMxDOCVRDf6jSlUMJS5xkmqzHRuf1JlGPrDJ8yIFPHIs4FGgQI48HgUWyOOtbDFV/wWmKaxS4CBq9RweRfLk8PDwmKdAkYJ94rf4TxYsI0vXg/W6FrPq/S3ftpbY+j2/wqVChSoVylSpUKVk7+WgpULFVFvTt3nAXiJgGWmJrf+ay618Zq2+rtkmZW31U9v63txSrHsoiUVab5kZa8auUp3eS4pFjrbKXA1WsABY1ZRcy5RdEywbDu5bX+LQ12m2ovfdq8xZWEk2aoDv8CUGcchxg3f5k7ljUKQd1Vq0ixf4MnvZyCIT/Js/m5uN+jWfTZv0O3t6NqazeltTwVlaXhMa0XFtisqu/Kfq13GNaEJ526+oSb2jn2o31mm1AqtPv1TBvs4LOdab1EntJQIWaK9+psmQfvd0Wk/RMqwN+olyaiSeXl3JWMDUCTuosHPK32hHY+NPNDD57LLwWSVLjgpJNrAZAzgcZZpfmzCf9V2O2mRYzLJAiTi9bCUGJHiee5xQK/YlRy/ok7oRXtVL2i60W8c0Hpxu/8Mf9wN9t+vvwZn3uI5pt9B2vaSrKtnnl/VYa0pM6quasy+p6j0NKiVfSSkNa0xVSdJ1fT+k71F9ZPuNa7iu36Au2QHd0Y9b2pVVXAftcad0Uy8va0vpFc1KkhY1pVFdWHaNakqLkqRZvbI8Quhl3bTT6G9qJZMV2qWshXVRW4IZ5rft0ZSay5QGVNcPtFkXbdt1xVvw8gY+Dkx+0czUXKD93WI1Z9hlbtf1QZhZirYt00LwkZ+h1s5+kuo1y9hi26pOGeNsq2fLoJ5gG2ShheBjrfEWu4kDWzmiv5ilZC3FN+1oKxRCTmh7yBAHMnyDs3y6xBZfZ6tNMydb3AhSTL+w1lXSOdWFaw3oisqSpAkdB8XqL9BxTUiSyrqigWWR45x1EdM6odYWbzI6pGuBR39Lz8kF9elFjQb+Z0SDIT0HNRL4uwt6UX0gV89pJAhjH+pAIweRaDgZ3+NNHqEHcDjMDqa1iMsuPmNtcpp/mskQE5jUG3yWHUCCQ7zKD+SRZjtD9nvzvGGutuZO/f+Dej1y+pd1WnsiYuIenbZqDpM/aP9qE8Ko9OSI/qqFkFdn9ZqGG2QQw3ot8Hv1Mq+zOtxyBrHUUQf0W91QVgWVVVVZeU3rmk5pZ5N8a6dO6Zqmlbf9Csrqhs5o6CHyrWUfiOnzOqNLmlFRWZ3XST3ReIstGNIT+rnOK6uiZnRJZ/Q5xVbD1P8BhPUd7bJR8A0AAAAASUVORK5CYII='
            },
            style: {
              width: 75 / 3 * 2,
              height: 66 / 3 * 2
            } })
        )
      );
    }
  }]);

  return App;
}(_rax.Component);

var styles = {
  appHeader: {
    backgroundColor: '#274a60',
    height: 112
  },
  box1: {
    width: 100,
    height: 112
  },
  box2: {
    width: 550,
    height: 112,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box3: {
    width: 100,
    height: 112,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

exports.default = App;
module.exports = exports['default'];

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxText = __webpack_require__(3);

var _raxText2 = _interopRequireDefault(_raxText);

var _raxImage = __webpack_require__(7);

var _raxImage2 = _interopRequireDefault(_raxImage);

var _raxIntl = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(
        _raxView2.default,
        null,
        (0, _rax.createElement)(
          _raxIntl.I18nView,
          { style: _extends({}, styles.appHeader, { flexDirection: 'row' }) },
          (0, _rax.createElement)(
            _raxView2.default,
            { style: styles.box1 },
            (0, _rax.createElement)(_raxImage2.default, { source: {
                uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABFCAYAAAAcjSspAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphYmMxMWQ0Ni01YmIyLTRhMmUtYWFjMS1kZWE5MWMyNGIyNjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzQyMTY4Q0U5QUYyMTFFNEJGNDBDREVCRTZBOUQzMjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzQyMTY4Q0Q5QUYyMTFFNEJGNDBDREVCRTZBOUQzMjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMzgzMTVEQjk3RUIxMUU0ODAxMUJBMkI5NTU5OTZGMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMzgzMTVEQzk3RUIxMUU0ODAxMUJBMkI5NTU5OTZGMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnZ6cNsAAAkuSURBVHja7FwJcBRFFO1ErkggaAmCAgHEQJAoh4CoqOGIJaJAVYLKfSmKipYgUiCIICB4YBSwOOVQVI5IWaKAIBFF5NIAlgpEE0UFFEHOEDnW/2v/xuanZzI782dZSn/Vq+x2z9Hz5ve/ujcxgUBA/S/nSiknBw0dOlTiXpcAmgIaAa4D1AVcBqgCqEjHnAEcA/wFyCfsBHwB2Aw44ebGkyZNkifFgyQDOgHuANwIuKiE47E/gZAIuFXrQ8I2AZYCFgN+Pq+aEqaUA2QAHgDcLHhdJKwl4UXABsBUwCLAqWglBcl4EPAUoKqD408C8gB/AgpoasQDKtFUSyxBs0IEPQ94hQg6GU2k9ACMA9Sw6Edrvh2wGvApfd4DOGtzzTKAJMA1gNaAtoA6huOqk+Y8guaPptZ5JaUWYDogzaIfjeQ8wALAL2Fe+2/AN4R3qQ1J6kmoYRgLTqW1gH6kha4k1gMhvWnAJkI2kHGtD5jgghAr2QV4mgjoDNhiOCYVsAPQPZKkoFrPALwBKM/6vge0I0+zwkevhtNuGaAZ4E4iS5fypJ1oZ0r7TUoCPez9rL0QMILij9URjrU+BFwLGEXj0GUgYDnEWRX8IqUyGclU1p4LuAEwnuzA+RAkYyyNI5f1oeauBmISpEnBC35MmqALqnATQE6UROg5NJ4s1t4csMqpxpRIClwIbcj7BkLQrqQDjkZZ6oLj6UL2hBOTBc9TWkJTXgfcwtomAgZQ6B2NcobilvGsHWOdzJJOjrHLkoHV/vBnpkFDBlxASe8UwMM82IQk8c2wSQFCkmiOxjEbkh7FGmKVMy2muCYkxwEpQEyeY1KAkBj4s55yC93LNPHBhtQGTGYpwb0G9+pF0MB+ReWKkGDk2waICTi1KV0ZIYWU+fphVNGzddTQyWOkbaqnHKXxF7LIt6sjQwtagtEgr8qM9dHtmrxBmvRNgJgcg+GdQN61RE15HHAFS+pe8IGMFmTEPzH0zWIFJimZyII7TCr72pICrJWFP4+yYwYJRqqYlfcBbAN8CehPNRQuWKbMpviokaC2FNJL12U41xauKZhZXq593wgXWiU0puZUR5lDuYoTuQuwFTAGnYJgrpTDtCXDjpSH2PfRQgPBMsJnKlizdZO0jqRCkoS2BKggpktfIymgQvVUsNoekt1wAYn0vyYVicp4vM4TggYYc6PfdE8Ez1/bpCld2IlzhQYwkuIEU2Y7hTwbl2kW1xotpC1Yj9Ej2hgKSouR0pkFUAuEDGuGRW6SSkY9y9CP3m6Rob2lsq4DhysLrMKAWJo68SwL3g5s7hG4cV0Kzrh8pIIlSztZYePKJbQFS6l6mbQV8BAXepOhG+las0bobVgtdeQ7OPdrKmpxOSsYt+Bz9qLPZYmH7FKaWuqSLVgRM8lNNI8DNrkKus3bfE4W12mkKAoVskPakcQO3iF0U6sp2Jii2Uo2mW0khD9nA93QJmoduMomtU6Lc/ZXiz5cm9lL9RmTgY6E7HJKyo/ksqRklk0fLrU2M7RPpTKFrwLPeRj+/M5tYIgUXY3/FL43utfvXKQEGN6vjIBdOax9rqSTUoFVpSTlOMUAW12cm0bFoGzJxJDJUStSYh14DK+2BT3cYBsbYydYRthsSvOFSSltVU+J8+mN4B6Sl8l+tSW7sTfM6Bg9VivhccWzSL6IFH3KJPg8h89Q0IRLENUtch+7jHmGki1X6qbjiE7KPj6vIiTo5UyVt2dtol7cydBOcAwVtc8FOikHtI46kAOUijAxyhBRow3ab3FOW4kb0zJqVWb7ioKkXC3RQmNzlQrWZr2+gTE2tZGzusoaZB8Vg1419NUTeiFJpmAuRAqWCbtpnQ0FSMGHxY2ATQ19rwF+cHCNtQ7sgBdpaCIlNH22sc5UoZvOsWjv6PB8K6O/X2h8fMVgm07KJja32wjddKEy71gcppztoBxs0b5FaHytmTteV0QK5ACHVHDJocjCgxGqJXBT3Dn9jqG9MrnlJJuYBKdYZwuXvlTAyCaznA8Lawd58LaSnddT6G28ZFE3aUC2bJyhby7FMcqiL09gXD3Y9xXKEN4vYQf1ooV2r4Jlv/kWfVjtam9ov9Li+N02UyocLYk1kPJWMVJAdb5lUwg38t4upC2PETle86f2LKt1K3dTNF1kYOH5d5g0xVT7GC2YnqNHc7vamE3lhFyh8Yxg32fzXIJ7Cz3kbwGqJhVSHyDNw32vyx1k4yFvkEFeYq/EIOB5UNuuZ/Uja1JAhTD2n8iuk6lcbNC1EVzL7aCCP0rAqtsQwzG4cbkaxRFLlHWBO1xCylKmfo4jgOc+YacpKNOZtiRLGDeDFFC8YXKv4wQDNF2GsBQBS5HTTKm4MmjLMNY8yhAS+11eEBXQkhQV3Nevy5NUpy0WJJkEXWhv9W99NI7UGOfiMeHx4vXmGdokCcFCEm4GLKc1454+49Kw3e5IVDPcPHex1owXvkdqjkdIMNbCdel0NnUbg5bstKpkGYVO4PtV0BNMVheWZDJCUAZZEWJLChEz3xC7YCD2zAVCCFbw+Ha12fBcdmtRjmqdmIN8bgjqMpXclis/pkwmOQhenxlY4slOfqwN9uVSFdwBwD0QGt8+PhhfLxJPcQ6fMlgeSTN5GzeagnKQokqev6RTrJESJYSk0HhcExIOKSh/qGB5cT1rr0c3Ha6872tzK2Uon9mkitdvMd9q55SQcEkJJXZtDHFFOYpCt1uUAvyU9nTf51gcgoJ76joAIUfCuaCbRaVCCuxws8txg9ZgsrdR+bDHno27E2nGcoN2IAndyPOccnNxt4LuuillslwwzX9PBStkqEH1hcioT9fLo+ubtnF8QLZlodubeF302kmpAFaxcMtFFdZfk2wNIl8F67JIIhZ0din7HQ74w4kkekD8ZRougCXaHP+TCm4xX+aVeYmVwABpTRZFwLjQZarU11LB3Uv9tDaskRwil15AOVY8lRWqObx/PpU7cDlF5DcEksujx0hb0Lh1p/ilZQnnVAvj4fmLWEPxCOY1pyUNlh9rxvjGZxKuBtyngptvmnssVp2kcABXHd5Wcv8qICKk6ILV9zEEzLZbUVScTPYCd0/jmnMFIuw0uf3D9NC4LQz/VQCu3G1QQv8KRCTM/6/JPwIMADP/PdUJn5omAAAAAElFTkSuQmCC'
              },
              style: {
                width: 46,
                height: 46
              } }),
            (0, _rax.createElement)(
              _raxText2.default,
              { style: styles.text },
              _raxIntl.intl.getText('t29')
            )
          ),
          (0, _rax.createElement)(
            _raxView2.default,
            { style: styles.box2 },
            (0, _rax.createElement)(_raxImage2.default, { source: {
                uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAA/CAYAAACYcSQcAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphYmMxMWQ0Ni01YmIyLTRhMmUtYWFjMS1kZWE5MWMyNGIyNjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzQyMTY4RDI5QUYyMTFFNEJGNDBDREVCRTZBOUQzMjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzQyMTY4RDE5QUYyMTFFNEJGNDBDREVCRTZBOUQzMjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowM0M5NzQwQjk3RUIxMUU0ODAxMUJBMkI5NTU5OTZGMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowM0M5NzQwQzk3RUIxMUU0ODAxMUJBMkI5NTU5OTZGMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnlkArAAAAbXSURBVHja7FwJbBRVGH7b0iJQCraKJm0FrBdqlAajtSoK3qQWFUGJwdYjUSLxAFxAa4NYg66QqrQeiUeMIniQSgRF0RIiUURFMILxxLOisaLGAtYefn/mn/Tf19ndObrbobN/8qXzZvfNvvnm/e8/5n8NdXV1qbR4k4w0BWkSfSEDZCMcDmfiTxUwAzgRyPfhmPcB3wKrgSXAnlQPIBKJWJPIBK4CJvv8wQ8CTmBMB8qA3X5R5+sPAAJ1GQ3U+UmdK7XPvgR2AfsdXrMV+M/juMr4938HcrRx5gITRPsKngB7/UDiWHH8I1AC3bccGFS/rx/+y0yeeQ+k2h/6QZ0Hi+O1sQj0ibyitYf40cX51+droa/GJ9X5A6ADGAh87XMSKczawn8z/ETiaeK43uckhoBTRfsh4E+XD+M34FOgEdjp2dk+gKRNa5/s8XrTgFpgOXAT8E8Qwr5kGb2rgTeA7CDMxFjG5ldW0Xjq+5fmkRwJZIpzZ1JkB9wWNBIbOQR0Y7XzmbAFgsxbgY183X6rzlbOt1u3pwW4G5ikrbVPA0cEicQWB1Z9BDDKAhRm1ojvDgdeBLKCos5tCT4vAhYClwJ5Dq5bCiwG5gbFsMSS44B3gUNc9p/D6+Nr/V2d48mTHgg05VmgMKgz8VjgDNH+iR1qPYmbraITMCQFwA18fDD3m8ihcaBIHKe1Kem81WEwch0fj2c3qDZo6qyr8TaH/edybG0KGaeyoJEo748y7p0O++9hx9sUcsaXh8PhYUEzLKa0u+y3EnhdtMmnfCyoJHqRmTyTTZmO2VgZRBIzPfT9AajWzjWAyMKgkZjjsf8y4CPRHsKOeL8nUTckwzxcq4P9RuknXhsEEn/W2gvsJBTiyHY2NFEPpb872xuUUXxwELfnAbOVt8z4oKBFLH8A97OTbEqWR7UOZAJiEbA0mT8QhFRYF4dvlKm+SBnZmGy21oOVw5dSysh2lwSNRFN2KpfvlTWpAp5JRyxJDNDTkiYxTWKaxKCLV+tM7kEFcJ4ydhvkcbxK2eBPgDeB9Sp+aUcqhN43n62MV6b0yuBQjmLIGf8CWAe8pIydCSklsYod2SKLz6j8dwKHWJ/z33V9RCD5dE/pvh3LSD5/FfAAcAuTmVx1DofD9FTr2VcqstFljDIqrfqi0PsyZRSvltj47mHKqHhYnIqZeC9ws0VUsBnYwbHpOFZvKfSkW3hWpEJoDCtVz6wNOdwfK6N2hzSmlNXdlPm8HNUlhUTMwtOVkU6S0sjq+p12nipZG4BTxLmHgSZlbO1IptBavUIL6T5TRpp/k4VKPwhMFecoafGOMipoXatzrHiyTutDdXxTLAgkoZpqqvVbJc5RNvi+JJA2UGvPAo4W7SaecZss+n6vjErZGu3+bSctMjSVNKXQYhaeq6Lrutfz1I9neUllZvAsMIUGPMojaUO1dp5G6HzRpj05tOel1cYy9bxok8dxlsX3hscjsVkcTwFp+tO9RmsnItAUchvuEO1MtoZeRH8IFeJ4KrswpixU9jdR0jhlhdlMC74u6OE/mZvGQdoLyqg2NYVS6+8pY4sZ1aKco7qzul8Bxzj0AprZApLsZqvpRih9Nd5ChcmVolqbsYJE0gSqgnBSyE7VX+V83MaehanitEQcJSdeJBIpGKCtd1eK2VmgLbZStju88U5epM/n9uGq9zdjjmFI2eWQQPPeygVxk+PcU2WUOoNR2ht3o7JXKeBmA2S7Sr10uOjTZnNSzAJnb0epszAgxcwwqUUuW9TjVXTp2RbNyNgR2qVVLNpU3vsL/0Yip3+/6t7tSj4cvYDayA/TjDpK2RsYIfqRMclXzuq59WWNrrFNTAJaMupB4OYea2IC/zCfrXGJsOQj2fLZDb22akvH7CTNvnns58mo5VWbfXPYFuSKyTJJaTXh+s57W2EfOrVoYVuI42a7wb8eSjUkUYWf07yGe5T99yh3CQIVBxYJi+qdxM5N2syr4jU0kZBzfaFokxp8k0QSm1X0/pOTgEdt3Os0nsWm0F7B93s1AYHZ2Gkxox5Xxj+zGBojoF9hESbemQKDUq0ZCNqZv1pZ113Tml/LYw1p/qWt1JjTBMQTbPLlzJrDg1zDwX0WG6WLVXflgUxCbEgBieQz0mvSR8S5cnaU31JGYRKRTDsLLmE/WAr5hsvs/ljI6X9ogpHJZXWZ6PDGlvC6msoEbQ2viU5kLav23jha6S2fiAv8zTOxWtmraaHavss5pEp1hnsRzzQ7XsQ+fsgVymGtjtt3LO1sMEbzQK2iAgrtblfGNohG1XeyhkM1WnJ2WHzeyi5XMafEnNZ1O1fntPTeTEyLkP8FGABBfHlTap2rWgAAAABJRU5ErkJggg=='
              },
              style: {
                width: 54,
                height: 42
              } }),
            (0, _rax.createElement)(
              _raxText2.default,
              { style: styles.text },
              _raxIntl.intl.getText('t30')
            )
          ),
          (0, _rax.createElement)(
            _raxView2.default,
            { style: styles.box1 },
            (0, _rax.createElement)(_raxImage2.default, { source: {
                uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAA/CAYAAABO1P55AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphYmMxMWQ0Ni01YmIyLTRhMmUtYWFjMS1kZWE5MWMyNGIyNjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDNBMzc0REE5N0VCMTFFNDgwMTFCQTJCOTU1OTk2RjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDM5N0NGRkU5N0VCMTFFNDgwMTFCQTJCOTU1OTk2RjEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpjZWQwNjc5ZS01ZGU0LTRiNDMtOGI1Ni0xYjY0NzMzYzRhYzEiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1NTY0YmI2NS1iMDZkLTExNzctODRjYS05MGJjNzMyYTExZjAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4dwsPWAAAE/klEQVR42uyceWhUVxTGbybiFkkUElusIEhoRVEbEKVqKS6j0W7uFQSpERXTiqbLFCmVFsQ/nhuKS1FpG1KD4gJuSQ1RcWsNilFj2tBGUWxpMaUSjKMtlfE7vjMqz/PeLA7OfZl74GMy78y8efnl3XvPcidZkUhE6W6hUCjZt3aEvoamQ81QCVSf6Eksy3rqWEC1b1sEzYG6Qa9Cx6AhqThxewc32PE8D6qBigw4bzsuHOvB8AYZcO72DVQhHM+HaqEBBpxsEZ7jdgq+Aob3igEn231oFrRb8L0IHYEKDThvePsE30u82vY14GT7D5oBVQm+3tBRqI8B5w5vCnRY8PVheL0NONn+ZXi1gq8vD9teBpxsYehdlzivkBeMFww4d3hvQqcEXz+GV2DAyXYHegs6I/gG8HDON+Bka4WKoXOCj9KymlAo1MOAc4c3TsklpyKGl2fAyXaL4V0SfFSKqga83OiBLN0KmXxxn/AEnQ6jOW2Ui48WkgmWZbXpCO40HoZrfGf+CAW1AgdotPzf9MGwPqTbHNfKIYLuadsmrcBh7qCL+hC6qzG02bjOqiwdu1wYsl3x8DKUnYaPL1V2N8xp/0MzAW1P3KtqnO25ntDHyi4Obld2Xd9vNl/Z7cQsx/GH9TxAe1RJ7pCiDyRoJ9TjMjQVDV+HfvIRtBIPaHOehJaqAFiq3dMQm+QjaLOhLQI0Go7zAK0i1SlXd2UXBQcKvms+gfaesrth2QI0GrrfpjrJz2NoUnO3Dir3AbRpPB9L0Gh13+b2xmTB5VAQCA0VfBcoLVF2vUtnm+wCjayMYjWvNycDjkKFA9AIwdfIifItzaFRAXOHsjflOI0ig3WxTpAoOPqgvS5J8K/QWKhFc2jF/DtI0D6H1sRzkkCC0Cj4Gy/4rkBjoL80hzbWA9qX0Ip4TxQvOJoHKpVdZnbaDYb2u+bQ3lB2Q7qL4FsOfZXIyWKCQ9ZA0L6HpgruP6DR0HXNoY3kxayrlCJDXyR6wkAMaBQQbqUcTXDf5Fu/WXNorzG0HMG3FvosmZMGYkDbrOzdPk5rYWhNmkOjKnI1lCv41vMKqlIKjv8aC4TjrbxANPggwP2AA3WnUU66hAPd1IHD3UbjfrEHtHrlD+smHKP0qvRZoIngAI1Wl0+F14Z5Va3zUfJOd9a9J55/x/nnMxchOzigLcXDMg9op5S/rI5z6fG88u9LBTSyR4VMQCvziJpXQz+k6Ze/bFmWdoH1Q3CA9hF+XqWerkfpYG2UkANerU4XlR0Oh+ficYOm0KKpXv9gMLhVp4sKcOSvK7SoFeh2QQTufWi/5uC26TrHdeKqwUSX1x3ivPR5G7XkaMtBJea4iHbgeFXtzHdeUHhdE1cX0rI9Qfr2ng5DNXpxFChSZ+q4S85Xq+Nck3ZwDI8C3beV3A+lThY1Z7obbELKBXi3ld1skbZ2FnEgnGfAyXNKNJm/KLiHQQeVXBTMbHAM7x9eKBoF98hMhxeIsZq1MLzfBPco5d74yGxwDO9Pzi6uCm4azrsyEV68XS7qYFEn64bge0e5d8QzHhzZNb7zpAyC9mCUZxK8RDv5zTznSd162hO3xQcFg7SAI/uFh+3fgo82523MBHjJ7lZq4IWhVfAtVHbF2IBzsfMe8Mo4+zDgXKyOc9uwS5xnwHnYSQ5JnPDOGnCxjb5NTJv1flb2psKVSv4/H+3GHggwAJiQN1kupu2WAAAAAElFTkSuQmCC'
              },
              style: {
                width: 52,
                height: 42
              } }),
            (0, _rax.createElement)(
              _raxText2.default,
              { style: styles.text },
              _raxIntl.intl.getText('t31')
            )
          )
        )
      );
    }
  }]);

  return App;
}(_rax.Component);

// <View style={styles.textbox}>
//   <Text style={styles.text1}>{intl.getText('t32')}</Text>
//   <Text style={styles.text2}>{intl.getText('t33')}</Text>
//   <Text style={styles.text3}>{intl.getText('t34')}</Text>
// </View>

var styles = {
  appHeader: {
    backgroundColor: '#fcfbf1',
    height: 62 * 2,
    borderTopWidth: 1,
    borderTopColor: '#e8e8e8',
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8'
  },
  box1: {
    flex: 1,
    height: 62 * 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box2: {
    flex: 1,
    height: 62 * 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#e8e8e8',
    borderRightWidth: 1,
    borderRightColor: '#e8e8e8'
  },
  text: {
    color: '#757575',
    fontSize: 22
  },
  textbox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 76 * 2
  },
  text1: {
    color: '#707070',
    fontSize: 22
  },
  text2: {
    color: '#44b1c3',
    fontSize: 22
  },
  text3: {
    color: '#999999',
    fontSize: 22
  }
};

exports.default = App;
module.exports = exports['default'];

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxText = __webpack_require__(3);

var _raxText2 = _interopRequireDefault(_raxText);

var _raxImage = __webpack_require__(7);

var _raxImage2 = _interopRequireDefault(_raxImage);

var _raxSlider = __webpack_require__(191);

var _raxSlider2 = _interopRequireDefault(_raxSlider);

var _raxNavigation = __webpack_require__(14);

var _util = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderDemo = function (_Component) {
  _inherits(SliderDemo, _Component);

  function SliderDemo(props) {
    _classCallCheck(this, SliderDemo);

    var _this = _possibleConstructorReturn(this, (SliderDemo.__proto__ || Object.getPrototypeOf(SliderDemo)).call(this, props));

    _this.onchange = function (index) {
      console.log('change', index);
    };

    return _this;
  }

  _createClass(SliderDemo, [{
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(
        _raxSlider2.default,
        { width: '750rem', height: '500rem', style: styles.slider,
          autoPlay: false,
          loop: true,
          showsPagination: true,
          paginationStyle: styles.paginationStyle,
          autoplayTimeout: 3000,
          onChange: this.onchange },
        (0, _rax.createElement)(
          _raxNavigation.Link,
          { href: (0, _util.genPath)('items/12'), style: styles.itemWrap },
          (0, _rax.createElement)(_raxImage2.default, { style: styles.image, source: { uri: '//my-live-03.slatic.net/cms/teasers/api/categories/720x389_Merdeka_140817.jpg' } })
        ),
        (0, _rax.createElement)(
          _raxNavigation.Link,
          { href: (0, _util.genPath)('items/13'), style: styles.itemWrap },
          (0, _rax.createElement)(_raxImage2.default, { style: styles.image, source: { uri: '//my-live-01.slatic.net/cms/teasers/api/categories/MAS_MBB_030717.jpg' } })
        ),
        (0, _rax.createElement)(
          _raxView2.default,
          { href: (0, _util.genPath)('items/14'), style: styles.itemWrap },
          (0, _rax.createElement)(_raxImage2.default, { style: styles.image, source: { uri: '//my-live-01.slatic.net/cms/teasers/api/categories/720x289_MegaSportsExpo_31st.jpg' } })
        ),
        (0, _rax.createElement)(
          _raxNavigation.Link,
          { href: (0, _util.genPath)('items/15'), style: styles.itemWrap },
          (0, _rax.createElement)(_raxImage2.default, { style: styles.image, source: { uri: '//my-live-02.slatic.net/cms/teasers/api/categories/TBC_MAS.jpg' } })
        ),
        (0, _rax.createElement)(
          _raxNavigation.Link,
          { href: (0, _util.genPath)('items/16'), style: styles.itemWrap },
          (0, _rax.createElement)(_raxImage2.default, { style: styles.image, source: { uri: '//my-live-02.slatic.net/cms/teasers/api/categories/electrifying-deals2a.jpg' } })
        ),
        (0, _rax.createElement)(
          _raxNavigation.Link,
          { href: (0, _util.genPath)('items/17'), style: styles.itemWrap },
          (0, _rax.createElement)(_raxImage2.default, { style: styles.image, source: { uri: '//my-live-03.slatic.net/cms/teasers/api/categories/720x389_Merdeka_140817.jpg' } })
        )
      );
    }
  }]);

  return SliderDemo;
}(_rax.Component);

var styles = {
  slider: {
    width: 750,
    position: 'relative',
    overflow: 'hidden',
    height: 485,
    backgroundColor: '#ffffff'
  },
  itemWrap: {
    width: 750,
    height: 405
  },
  image: {
    width: 750,
    height: 405
  },
  button: {
    marginTop: 20,
    width: 340,
    height: 80
  },
  paginationStyle: {
    position: 'absolute',
    width: 750,
    height: 40,
    bottom: 30,
    left: 0,
    itemColor: '#d5d5d5',
    itemSelectedColor: '#2b4b62',
    itemSize: 16
  }
};

exports.default = SliderDemo;
module.exports = exports['default'];

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _universalEnv = __webpack_require__(1);

var _TouchHistoryMath = __webpack_require__(193);

var _TouchHistoryMath2 = _interopRequireDefault(_TouchHistoryMath);

var _ResponderTouchHistoryStore = __webpack_require__(194);

var _ResponderTouchHistoryStore2 = _interopRequireDefault(_ResponderTouchHistoryStore);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var currentCentroidXOfTouchesChangedAfter = _TouchHistoryMath2.default.currentCentroidXOfTouchesChangedAfter;
var currentCentroidYOfTouchesChangedAfter = _TouchHistoryMath2.default.currentCentroidYOfTouchesChangedAfter;
var previousCentroidXOfTouchesChangedAfter = _TouchHistoryMath2.default.previousCentroidXOfTouchesChangedAfter;
var previousCentroidYOfTouchesChangedAfter = _TouchHistoryMath2.default.previousCentroidYOfTouchesChangedAfter;
var currentCentroidX = _TouchHistoryMath2.default.currentCentroidX;
var currentCentroidY = _TouchHistoryMath2.default.currentCentroidY;

/**
 * `PanResponder` reconciles several touches into a single gesture. It makes
 * single-touch gestures resilient to extra touches, and can be used to
 * recognize simple multi-touch gestures.
 *
 * By default, `PanResponder` holds an `InteractionManager handle to block
 * long-running JS events from interrupting active gestures.
 *
 * It provides a predictable wrapper of the responder handlers provided by the
 * [gesture responder system](docs/gesture-responder-system.html).
 * For each handler, it provides a new `gestureState` object alongside the
 * native event object:
 *
 * ```
 * onPanResponderMove: (event, gestureState) => {}
 * ```
 *
 * A native event is a synthetic touch event with the following form:
 *
 *  - `nativeEvent`
 *      + `changedTouches` - Array of all touch events that have changed since the last event
 *      + `identifier` - The ID of the touch
 *      + `locationX` - The X position of the touch, relative to the element
 *      + `locationY` - The Y position of the touch, relative to the element
 *      + `pageX` - The X position of the touch, relative to the root element
 *      + `pageY` - The Y position of the touch, relative to the root element
 *      + `target` - The node id of the element receiving the touch event
 *      + `timestamp` - A time identifier for the touch, useful for velocity calculation
 *      + `touches` - Array of all current touches on the screen
 *
 * A `gestureState` object has the following:
 *
 *  - `stateID` - ID of the gestureState- persisted as long as there at least
 *     one touch on screen
 *  - `moveX` - the latest screen coordinates of the recently-moved touch
 *  - `moveY` - the latest screen coordinates of the recently-moved touch
 *  - `x0` - the screen coordinates of the responder grant
 *  - `y0` - the screen coordinates of the responder grant
 *  - `dx` - accumulated distance of the gesture since the touch started
 *  - `dy` - accumulated distance of the gesture since the touch started
 *  - `vx` - current velocity of the gesture
 *  - `vy` - current velocity of the gesture
 *  - `numberActiveTouches` - Number of touches currently on screen
 *
 * ### Basic Usage
 *
 * ```
 *   componentWillMount: function() {
 *     this._panResponder = PanResponder.create({
 *       // Ask to be the responder:
 *       onStartShouldSetPanResponder: (evt, gestureState) => true,
 *       onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
 *       onMoveShouldSetPanResponder: (evt, gestureState) => true,
 *       onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
 *
 *       onPanResponderGrant: (evt, gestureState) => {
 *         // The guesture has started. Show visual feedback so the user knows
 *         // what is happening!
 *
 *         // gestureState.{x,y}0 will be set to zero now
 *       },
 *       onPanResponderMove: (evt, gestureState) => {
 *         // The most recent move distance is gestureState.move{X,Y}
 *
 *         // The accumulated gesture distance since becoming responder is
 *         // gestureState.d{x,y}
 *       },
 *       onPanResponderTerminationRequest: (evt, gestureState) => true,
 *       onPanResponderRelease: (evt, gestureState) => {
 *         // The user has released all touches while this view is the
 *         // responder. This typically means a gesture has succeeded
 *       },
 *       onPanResponderTerminate: (evt, gestureState) => {
 *         // Another component has become the responder, so this gesture
 *         // should be cancelled
 *       },
 *       onShouldBlockNativeResponder: (evt, gestureState) => {
 *         // Returns whether this component should block native components from becoming the JS
 *         // responder. Returns true by default. Is currently only supported on android.
 *         return true;
 *       },
 *     });
 *   },
 *
 *   render: function() {
 *     return (
 *       <View {...this._panResponder.panHandlers} />
 *     );
 *   },
 *
 * ```
 *
 * ### Working Example
 *
 * To see it in action, try the
 * [PanResponder example in UIExplorer](https://github.com/facebook/react-native/blob/master/Examples/UIExplorer/PanResponderExample.js)
 */

var PanResponder = {

  /**
   *
   * A graphical explanation of the touch data flow:
   *
   * +----------------------------+             +--------------------------------+
   * | ResponderTouchHistoryStore |             |TouchHistoryMath                |
   * +----------------------------+             +----------+---------------------+
   * |Global store of touchHistory|             |Allocation-less math util       |
   * |including activeness, start |             |on touch history (centroids     |
   * |position, prev/cur position.|             |and multitouch movement etc)    |
   * |                            |             |                                |
   * +----^-----------------------+             +----^---------------------------+
   *      |                                          |
   *      | (records relevant history                |
   *      |  of touches relevant for                 |
   *      |  implementing higher level               |
   *      |  gestures)                               |
   *      |                                          |
   * +----+-----------------------+             +----|---------------------------+
   * | ResponderEventPlugin       |             |    |   Your App/Component      |
   * +----------------------------+             +----|---------------------------+
   * |Negotiates which view gets  | Low level   |    |             High level    |
   * |onResponderMove events.     | events w/   |  +-+-------+     events w/     |
   * |Also records history into   | touchHistory|  |   Pan   |     multitouch +  |
   * |ResponderTouchHistoryStore. +---------------->Responder+-----> accumulative|
   * +----------------------------+ attached to |  |         |     distance and  |
   *                                 each event |  +---------+     velocity.     |
   *                                            |                                |
   *                                            |                                |
   *                                            +--------------------------------+
   *
   *
   *
   * Gesture that calculates cumulative movement over time in a way that just
   * "does the right thing" for multiple touches. The "right thing" is very
   * nuanced. When moving two touches in opposite directions, the cumulative
   * distance is zero in each dimension. When two touches move in parallel five
   * pixels in the same direction, the cumulative distance is five, not ten. If
   * two touches start, one moves five in a direction, then stops and the other
   * touch moves fives in the same direction, the cumulative distance is ten.
   *
   * This logic requires a kind of processing of time "clusters" of touch events
   * so that two touch moves that essentially occur in parallel but move every
   * other frame respectively, are considered part of the same movement.
   *
   * Explanation of some of the non-obvious fields:
   *
   * - moveX/moveY: If no move event has been observed, then `(moveX, moveY)` is
   *   invalid. If a move event has been observed, `(moveX, moveY)` is the
   *   centroid of the most recently moved "cluster" of active touches.
   *   (Currently all move have the same timeStamp, but later we should add some
   *   threshold for what is considered to be "moving"). If a palm is
   *   accidentally counted as a touch, but a finger is moving greatly, the palm
   *   will move slightly, but we only want to count the single moving touch.
   * - x0/y0: Centroid location (non-cumulative) at the time of becoming
   *   responder.
   * - dx/dy: Cumulative touch distance - not the same thing as sum of each touch
   *   distance. Accounts for touch moves that are clustered together in time,
   *   moving the same direction. Only valid when currently responder (otherwise,
   *   it only represents the drag distance below the threshold).
   * - vx/vy: Velocity.
   */

  _initializeGestureState: function _initializeGestureState(gestureState) {
    gestureState.moveX = 0;
    gestureState.moveY = 0;
    gestureState.x0 = 0;
    gestureState.y0 = 0;
    gestureState.dx = 0;
    gestureState.dy = 0;
    gestureState.vx = 0;
    gestureState.vy = 0;
    gestureState.numberActiveTouches = 0;
    // All `gestureState` accounts for timeStamps up until:
    gestureState._accountsForMovesUpTo = 0;
  },

  /**
   * This is nuanced and is necessary. It is incorrect to continuously take all
   * active *and* recently moved touches, find the centroid, and track how that
   * result changes over time. Instead, we must take all recently moved
   * touches, and calculate how the centroid has changed just for those
   * recently moved touches, and append that change to an accumulator. This is
   * to (at least) handle the case where the user is moving three fingers, and
   * then one of the fingers stops but the other two continue.
   *
   * This is very different than taking all of the recently moved touches and
   * storing their centroid as `dx/dy`. For correctness, we must *accumulate
   * changes* in the centroid of recently moved touches.
   *
   * There is also some nuance with how we handle multiple moved touches in a
   * single event. With the way `ReactNativeEventEmitter` dispatches touches as
   * individual events, multiple touches generate two 'move' events, each of
   * them triggering `onResponderMove`. But with the way `PanResponder` works,
   * all of the gesture inference is performed on the first dispatch, since it
   * looks at all of the touches (even the ones for which there hasn't been a
   * native dispatch yet). Therefore, `PanResponder` does not call
   * `onResponderMove` passed the first dispatch. This diverges from the
   * typical responder callback pattern (without using `PanResponder`), but
   * avoids more dispatches than necessary.
   */
  _updateGestureStateOnMove: function _updateGestureStateOnMove(gestureState, touchHistory) {
    gestureState.numberActiveTouches = touchHistory.numberActiveTouches;
    gestureState.moveX = currentCentroidXOfTouchesChangedAfter(touchHistory, gestureState._accountsForMovesUpTo);
    gestureState.moveY = currentCentroidYOfTouchesChangedAfter(touchHistory, gestureState._accountsForMovesUpTo);
    var movedAfter = gestureState._accountsForMovesUpTo;
    var prevX = previousCentroidXOfTouchesChangedAfter(touchHistory, movedAfter);
    var x = currentCentroidXOfTouchesChangedAfter(touchHistory, movedAfter);
    var prevY = previousCentroidYOfTouchesChangedAfter(touchHistory, movedAfter);
    var y = currentCentroidYOfTouchesChangedAfter(touchHistory, movedAfter);
    var nextDX = gestureState.dx + (x - prevX);
    var nextDY = gestureState.dy + (y - prevY);

    // TODO: This must be filtered intelligently.
    var dt = touchHistory.mostRecentTimeStamp - gestureState._accountsForMovesUpTo;
    gestureState.vx = (nextDX - gestureState.dx) / dt;
    gestureState.vy = (nextDY - gestureState.dy) / dt;

    gestureState.dx = nextDX;
    gestureState.dy = nextDY;
    gestureState._accountsForMovesUpTo = touchHistory.mostRecentTimeStamp;
  },

  /**
   * @param {object} config Enhanced versions of all of the responder callbacks
   * that provide not only the typical `ResponderSyntheticEvent`, but also the
   * `PanResponder` gesture state.  Simply replace the word `Responder` with
   * `PanResponder` in each of the typical `onResponder*` callbacks. For
   * example, the `config` object would look like:
   *
   *  - `onMoveShouldSetPanResponder: (e, gestureState) => {...}`
   *  - `onMoveShouldSetPanResponderCapture: (e, gestureState) => {...}`
   *  - `onStartShouldSetPanResponder: (e, gestureState) => {...}`
   *  - `onStartShouldSetPanResponderCapture: (e, gestureState) => {...}`
   *  - `onPanResponderReject: (e, gestureState) => {...}`
   *  - `onPanResponderGrant: (e, gestureState) => {...}`
   *  - `onPanResponderStart: (e, gestureState) => {...}`
   *  - `onPanResponderEnd: (e, gestureState) => {...}`
   *  - `onPanResponderRelease: (e, gestureState) => {...}`
   *  - `onPanResponderMove: (e, gestureState) => {...}`
   *  - `onPanResponderTerminate: (e, gestureState) => {...}`
   *  - `onPanResponderTerminationRequest: (e, gestureState) => {...}`
   *  - `onShouldBlockNativeResponder: (e, gestureState) => {...}`
   *
   *  In general, for events that have capture equivalents, we update the
   *  gestureState once in the capture phase and can use it in the bubble phase
   *  as well.
   *
   *  Be careful with onStartShould* callbacks. They only reflect updated
   *  `gestureState` for start/end events that bubble/capture to the Node.
   *  Once the node is the responder, you can rely on every start/end event
   *  being processed by the gesture and `gestureState` being updated
   *  accordingly. (numberActiveTouches) may not be totally accurate unless you
   *  are the responder.
   */
  create: function create(config) {
    var gestureState = {
      // Useful for debugging
      stateID: Math.random()
    };
    PanResponder._initializeGestureState(gestureState);

    var setHandlers = {
      // Ask to be the responder:
      onStartShouldSetResponder: function onStartShouldSetResponder(e) {
        return config.onStartShouldSetPanResponder === undefined ? false : config.onStartShouldSetPanResponder(e, gestureState);
      },
      onMoveShouldSetResponder: function onMoveShouldSetResponder(e) {
        return config.onMoveShouldSetPanResponder === undefined ? false : config.onMoveShouldSetPanResponder(e, gestureState);
      },
      onStartShouldSetResponderCapture: function onStartShouldSetResponderCapture(e) {
        // TODO: Actually, we should reinitialize the state any time
        // touches.length increases from 0 active to > 0 active.
        if (e.nativeEvent.touches.length === 1) {
          PanResponder._initializeGestureState(gestureState);
        }
        gestureState.numberActiveTouches = _ResponderTouchHistoryStore2.default.touchHistory.numberActiveTouches;
        return config.onStartShouldSetPanResponderCapture !== undefined ? config.onStartShouldSetPanResponderCapture(e, gestureState) : false;
      },

      onMoveShouldSetResponderCapture: function onMoveShouldSetResponderCapture(e) {
        var touchHistory = _ResponderTouchHistoryStore2.default.touchHistory;
        // Responder system incorrectly dispatches should* to current responder
        // Filter out any touch moves past the first one - we would have
        // already processed multi-touch geometry during the first event.
        if (gestureState._accountsForMovesUpTo === touchHistory.mostRecentTimeStamp) {
          return false;
        }
        PanResponder._updateGestureStateOnMove(gestureState, touchHistory);
        return config.onMoveShouldSetPanResponderCapture ? config.onMoveShouldSetPanResponderCapture(e, gestureState) : false;
      }
    };

    var responderHandlers = {
      onResponderGrant: function onResponderGrant(e) {
        gestureState.x0 = currentCentroidX(_ResponderTouchHistoryStore2.default.touchHistory);
        gestureState.y0 = currentCentroidY(_ResponderTouchHistoryStore2.default.touchHistory);
        gestureState.dx = 0;
        gestureState.dy = 0;
        if (config.onPanResponderGrant) {
          config.onPanResponderGrant(e, gestureState);
        }
        // TODO: t7467124 investigate if this can be removed
        return config.onShouldBlockNativeResponder === undefined ? true : config.onShouldBlockNativeResponder();
      },

      onResponderReject: function onResponderReject(e) {
        config.onPanResponderReject && config.onPanResponderReject(e, gestureState);
      },

      onResponderRelease: function onResponderRelease(e) {
        config.onPanResponderRelease && config.onPanResponderRelease(e, gestureState);
        PanResponder._initializeGestureState(gestureState);
      },

      onResponderTerminate: function onResponderTerminate(e) {
        config.onPanResponderTerminate && config.onPanResponderTerminate(e, gestureState);
        PanResponder._initializeGestureState(gestureState);
      },

      onResponderTerminationRequest: function onResponderTerminationRequest(e) {
        return config.onPanResponderTerminationRequest === undefined ? true : config.onPanResponderTerminationRequest(e, gestureState);
      }
    };

    // Track for mouse event
    var isPanStart = false;

    // Default
    var panHandlers = {
      onTouchStart: function onTouchStart(e) {
        isPanStart = true;

        _ResponderTouchHistoryStore2.default.recordTouchTrack('start', e);

        responderHandlers.onResponderGrant(e);

        var touchHistory = _ResponderTouchHistoryStore2.default.touchHistory;
        gestureState.numberActiveTouches = touchHistory.numberActiveTouches;

        if (!setHandlers.onStartShouldSetResponder(e)) {
          return responderHandlers.onResponderReject(e);
        }

        if (config.onPanResponderStart) {
          config.onPanResponderStart(e, gestureState);
        }
      },

      onTouchMove: function onTouchMove(e) {
        if (!isPanStart) return;

        _ResponderTouchHistoryStore2.default.recordTouchTrack('move', e);

        var touchHistory = _ResponderTouchHistoryStore2.default.touchHistory;

        // Guard against the dispatch of two touch moves when there are two
        // simultaneously changed touches.
        if (gestureState._accountsForMovesUpTo === touchHistory.mostRecentTimeStamp) {
          return;
        }

        // Filter out any touch moves past the first one - we would have
        // already processed multi-touch geometry during the first event.
        PanResponder._updateGestureStateOnMove(gestureState, touchHistory);

        if (!setHandlers.onMoveShouldSetResponder(e)) {
          return;
        }

        if (config.onPanResponderMove) {
          config.onPanResponderMove(e, gestureState);
        }
      },

      onTouchEnd: function onTouchEnd(e) {
        isPanStart = false;

        _ResponderTouchHistoryStore2.default.recordTouchTrack('end', e);

        var touchHistory = _ResponderTouchHistoryStore2.default.touchHistory;
        gestureState.numberActiveTouches = touchHistory.numberActiveTouches;

        if (config.onPanResponderEnd) {
          config.onPanResponderEnd(e, gestureState);
        }

        responderHandlers.onResponderRelease(e);
      }
    };

    if (_universalEnv.isWeb) {
      if ('ontouchstart' in window) {
        panHandlers = {
          onTouchStart: panHandlers.onTouchStart,
          onTouchMove: panHandlers.onTouchMove,
          onTouchEnd: panHandlers.onTouchEnd
        };
      } else {
        panHandlers = {
          onMouseDown: panHandlers.onTouchStart,
          onMouseMove: panHandlers.onTouchMove,
          onMouseUp: panHandlers.onTouchEnd
        };
      }
    }

    return { panHandlers: panHandlers };
  }
};

module.exports = PanResponder;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxScrollview = __webpack_require__(19);

var _raxScrollview2 = _interopRequireDefault(_raxScrollview);

var _raxRefreshcontrol = __webpack_require__(69);

var _raxRefreshcontrol2 = _interopRequireDefault(_raxRefreshcontrol);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var DEFAULT_END_REACHED_THRESHOLD = 500;

var Cell = function (_PureComponent) {
  _inherits(Cell, _PureComponent);

  function Cell() {
    _classCallCheck(this, Cell);

    return _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).apply(this, arguments));
  }

  _createClass(Cell, [{
    key: 'render',
    value: function render() {
      if (_universalEnv.isWeex && this.context.isInARecyclerView) {
        return (0, _rax.createElement)('cell', _extends({}, this.props, { append: 'tree' }));
      } else {
        return (0, _rax.createElement)(_raxView2.default, this.props);
      }
    }
  }]);

  return Cell;
}(_rax.PureComponent);

Cell.contextTypes = {
  isInARecyclerView: _rax.PropTypes.bool
};

var Header = function (_PureComponent2) {
  _inherits(Header, _PureComponent2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      if (_universalEnv.isWeex && this.context.isInARecyclerView) {
        return (0, _rax.createElement)('header', _extends({}, this.props, { append: 'tree' }));
      } else {
        return (0, _rax.createElement)(_raxView2.default, this.props);
      }
    }
  }]);

  return Header;
}(_rax.PureComponent);

Header.contextTypes = {
  isInARecyclerView: _rax.PropTypes.bool
};

var RecyclerView = function (_Component) {
  _inherits(RecyclerView, _Component);

  function RecyclerView(props) {
    _classCallCheck(this, RecyclerView);

    var _this3 = _possibleConstructorReturn(this, (RecyclerView.__proto__ || Object.getPrototypeOf(RecyclerView)).call(this, props));

    _this3.loadmoreretry = 1;

    _this3.handleScroll = function (e) {
      e.nativeEvent = {
        contentOffset: {
          // HACK: weex scroll event value is opposite of web
          x: -e.contentOffset.x,
          y: -e.contentOffset.y
        }
      };
      _this3.props.onScroll(e);
    };

    _this3.resetScroll = function () {
      if (_universalEnv.isWeex) {
        _this3.setState({
          loadmoreretry: _this3.loadmoreretry++ // for weex 0.9-
        });
        _this3.refs.list.resetLoadmore && _this3.refs.list.resetLoadmore(); // for weex 0.9+
      } else {
        _this3.refs.scrollview.resetScroll();
      }
    };

    _this3.scrollTo = function (options) {
      var x = parseInt(options.x);
      var y = parseInt(options.y);

      if (_universalEnv.isWeex) {
        var dom = __weex_require__('@weex-module/dom');
        var firstNode = (0, _rax.findDOMNode)(_this3.refs.firstNodePlaceholder);
        dom.scrollToElement(firstNode.ref, {
          offset: x || y || 0,
          animated: options && typeof options.animated !== 'undefined' ? options.animated : true
        });
      } else {
        _this3.refs.scrollview.scrollTo(options);
      }
    };

    _this3.state = {
      loadmoreretry: 0
    };
    return _this3;
  }

  _createClass(RecyclerView, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        isInARecyclerView: true
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      if (_universalEnv.isWeex) {
        var children = props.children;
        if (!Array.isArray(children)) {
          children = [children];
        }

        var cells = children.map(function (child, index) {
          if (child) {
            var hasOnRefresh = child.props && typeof child.props.onRefresh == 'function';
            if (props._autoWrapCell && child.type != _raxRefreshcontrol2.default && child.type != Header && !hasOnRefresh) {
              return (0, _rax.createElement)(Cell, null, child);
            } else {
              return child;
            }
          } else {
            return (0, _rax.createElement)(Cell, null);
          }
        });

        // add firstNodePlaceholder after refreshcontrol
        var addIndex = cells[0].type == Cell || cells[0].type == Header ? 0 : 1;
        cells && cells.length && cells.splice(addIndex, 0, (0, _rax.createElement)(Cell, { ref: 'firstNodePlaceholder' }));

        return (0, _rax.createElement)('list', _extends({}, props, {
          ref: 'list',
          onLoadmore: props.onEndReached,
          onScroll: props.onScroll ? this.handleScroll : null,
          loadmoreretry: this.state.loadmoreretry,
          loadmoreoffset: props.onEndReachedThreshold
        }), cells);
      } else {
        return (0, _rax.createElement)(_raxScrollview2.default, _extends({}, props, { ref: 'scrollview' }));
      }
    }
  }]);

  return RecyclerView;
}(_rax.Component);

RecyclerView.defaultProps = {
  onEndReachedThreshold: DEFAULT_END_REACHED_THRESHOLD
};
RecyclerView.childContextTypes = {
  isInARecyclerView: _rax.PropTypes.bool
};

RecyclerView.Header = Header;
RecyclerView.Cell = Cell;

exports.default = RecyclerView;
module.exports = exports['default'];

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _rax = __webpack_require__(0);

var _raxNavigation = __webpack_require__(14);

var _util = __webpack_require__(27);

var _BottomBar = __webpack_require__(158);

var _BottomBar2 = _interopRequireDefault(_BottomBar);

var _index = __webpack_require__(190);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(199);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(202);

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(203);

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__(204);

var _index10 = _interopRequireDefault(_index9);

var _index11 = __webpack_require__(205);

var _index12 = _interopRequireDefault(_index11);

var _comment = __webpack_require__(206);

var _comment2 = _interopRequireDefault(_comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INDEX_PATH = location.pathname + location.search;

// function loadPage(pageName) {
//   return new Promise((resolve, reject) => {
//     let loadFunc;
//     switch (pageName) {
//       case 'search':
//         loadFunc = require('bundle-loader?name=[folder]/[name]!../search/index.js');
//         break;
//       case 'cart':
//         loadFunc = require('bundle-loader?name=[folder]/[name]!../cart/index.js');
//         break;
//       case 'wishlist':
//         loadFunc = require('bundle-loader?name=[folder]/[name]!../wishlist/index.js');
//         break;
//       case 'account':
//         loadFunc = require('bundle-loader?name=[folder]/[name]!../account/index.js');
//         break;
//       case 'item_detail':
//         loadFunc = require('bundle-loader?name=[folder]/[name]!../item_detail/index.js');
//         break;
//     }
//     try {
//       loadFunc((Page) => {
//         resolve(Page);
//       });
//     } catch (e) {
//       reject();
//     }
//   });
// }


var tabRouterConfig = {
  Home: {
    screen: _index2.default,
    path: INDEX_PATH
  },
  Search: {
    screen: _index4.default,
    path: (0, _util.genPath)('search')
  },
  Cart: {
    screen: _index6.default,
    path: (0, _util.genPath)('cart')
  },
  wishlist: {
    screen: _index8.default,
    path: (0, _util.genPath)('wishlist')
  },
  Account: {
    screen: _index10.default,
    path: (0, _util.genPath)('account')
  }
};

var HomeNavigator = (0, _raxNavigation.TabNavigator)(tabRouterConfig, {
  navigationOptions: function navigationOptions(_ref) {
    var navigation = _ref.navigation;

    return {
      header: null,
      headerTitle: navigation.state.routeName
    };
  },
  tabBarComponent: _BottomBar2.default
});

var stackRouterConfig = {
  Home: {
    screen: HomeNavigator,
    path: INDEX_PATH
  },
  ItemDetail: {
    screen: _index12.default,
    path: (0, _util.genPath)('items/:itemId')
  },
  Comment: {
    screen: _comment2.default,
    path: (0, _util.genPath)('items/:itemId/comment')
  }
};

var App = (0, _raxNavigation.StackNavigator)(stackRouterConfig);

(0, _rax.render)((0, _rax.createElement)(App, null));

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hook = __webpack_require__(43);

var _hook2 = _interopRequireDefault(_hook);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.inject(_hook2.default);
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _component = __webpack_require__(13);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var rootCounter = 1;

var Root = function (_Component) {
  _inherits(Root, _Component);

  function Root() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Root);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Root.__proto__ || Object.getPrototypeOf(Root)).call.apply(_ref, [this].concat(args))), _this), _this.rootID = rootCounter++, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Root, [{
    key: 'isRootComponent',
    value: function isRootComponent() {}
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }, {
    key: 'getPublicInstance',
    value: function getPublicInstance() {
      return this.getRenderedComponent().getPublicInstance();
    }
  }, {
    key: 'getRenderedComponent',
    value: function getRenderedComponent() {
      return this._internal._renderedComponent;
    }
  }]);

  return Root;
}(_component2.default);

exports.default = Root;
module.exports = exports['default'];

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _component = __webpack_require__(13);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * Pure component class.
 */
var PureComponent = function (_Component) {
  _inherits(PureComponent, _Component);

  function PureComponent(props, context) {
    _classCallCheck(this, PureComponent);

    return _possibleConstructorReturn(this, (PureComponent.__proto__ || Object.getPrototypeOf(PureComponent)).call(this, props, context));
  }

  _createClass(PureComponent, [{
    key: 'isPureComponentClass',
    value: function isPureComponentClass() {}
  }]);

  return PureComponent;
}(_component2.default);

exports.default = PureComponent;
module.exports = exports['default'];

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inject;

var _universalEnv = __webpack_require__(1);

var _host = __webpack_require__(4);

var _host2 = _interopRequireDefault(_host);

var _empty = __webpack_require__(82);

var _empty2 = _interopRequireDefault(_empty);

var _native = __webpack_require__(46);

var _native2 = _interopRequireDefault(_native);

var _text = __webpack_require__(83);

var _text2 = _interopRequireDefault(_text);

var _composite = __webpack_require__(84);

var _composite2 = _interopRequireDefault(_composite);

var _fragment = __webpack_require__(88);

var _fragment2 = _interopRequireDefault(_fragment);

var _driverWeex = __webpack_require__(89);

var _driverWeex2 = _interopRequireDefault(_driverWeex);

var _driverBrowser = __webpack_require__(99);

var _driverBrowser2 = _interopRequireDefault(_driverBrowser);

var _hook = __webpack_require__(43);

var _hook2 = _interopRequireDefault(_hook);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function inject(_ref) {
  var driver = _ref.driver,
      hook = _ref.hook,
      measurer = _ref.measurer,
      deviceWidth = _ref.deviceWidth,
      viewportWidth = _ref.viewportWidth,
      eventRegistry = _ref.eventRegistry,
      bodyType = _ref.bodyType,
      bodyProps = _ref.bodyProps;

  // Inject component class
  _host2.default.EmptyComponent = _empty2.default;
  _host2.default.NativeComponent = _native2.default;
  _host2.default.TextComponent = _text2.default;
  _host2.default.FragmentComponent = _fragment2.default;
  _host2.default.CompositeComponent = _composite2.default;

  // Inject devtool hook
  _host2.default.hook = hook || _hook2.default;

  // Inject performance measurer
  _host2.default.measurer = measurer;

  // Inject render driver
  if (!_host2.default.driver) {
    if (!driver) {
      if (_universalEnv.isWeex) {
        driver = _driverWeex2.default;
      } else if (_universalEnv.isWeb) {
        driver = _driverBrowser2.default;
      } else {
        throw Error('No builtin driver matched');
      }
    }
    _host2.default.driver = driver;
  }

  if (deviceWidth && _host2.default.driver.setDeviceWidth) {
    _host2.default.driver.setDeviceWidth(deviceWidth);
  }

  if (viewportWidth && _host2.default.driver.setViewportWidth) {
    _host2.default.driver.setViewportWidth(viewportWidth);
  }

  if (eventRegistry) {
    _host2.default.driver.eventRegistry = eventRegistry;
  }

  // Body custom type only works in weex
  if (bodyType) {
    _host2.default.driver.bodyType = bodyType;
  }

  if (bodyProps) {
    _host2.default.driver.bodyProps = bodyProps;
  }
}
module.exports = exports['default'];

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _host = __webpack_require__(4);

var _host2 = _interopRequireDefault(_host);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/**
 * Empty Component
 */
var EmptyComponent = function () {
  function EmptyComponent() {
    _classCallCheck(this, EmptyComponent);

    this._currentElement = null;
  }

  _createClass(EmptyComponent, [{
    key: 'mountComponent',
    value: function mountComponent(parent, parentInstance, context, childMounter) {
      this._parent = parent;
      this._parentInstance = parentInstance;
      this._context = context;

      var instance = {
        _internal: this
      };

      var nativeNode = this.getNativeNode();
      if (childMounter) {
        childMounter(nativeNode, parent);
      } else {
        _host2.default.driver.appendChild(nativeNode, parent);
      }

      return instance;
    }
  }, {
    key: 'unmountComponent',
    value: function unmountComponent(notRemoveChild) {
      if (this._nativeNode && !notRemoveChild) {
        _host2.default.driver.removeChild(this._nativeNode, this._parent);
      }

      this._nativeNode = null;
      this._parent = null;
      this._parentInstance = null;
      this._context = null;
    }
  }, {
    key: 'updateComponent',
    value: function updateComponent() {
      // Noop
    }
  }, {
    key: 'getNativeNode',
    value: function getNativeNode() {
      // Weex native node
      if (this._nativeNode == null) {
        this._nativeNode = _host2.default.driver.createEmpty();
      }

      return this._nativeNode;
    }
  }]);

  return EmptyComponent;
}();

exports.default = EmptyComponent;
module.exports = exports['default'];

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _host = __webpack_require__(4);

var _host2 = _interopRequireDefault(_host);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/**
 * Text Component
 */
var TextComponent = function () {
  function TextComponent(element) {
    _classCallCheck(this, TextComponent);

    this._currentElement = element;
    this._stringText = String(element);
  }

  _createClass(TextComponent, [{
    key: 'mountComponent',
    value: function mountComponent(parent, parentInstance, context, childMounter) {
      this._parent = parent;
      this._parentInstance = parentInstance;
      this._context = context;
      this._mountID = _host2.default.mountID++;

      // Weex dom operation
      var nativeNode = this.getNativeNode();

      if (childMounter) {
        childMounter(nativeNode, parent);
      } else {
        _host2.default.driver.appendChild(nativeNode, parent);
      }

      var instance = {
        _internal: this
      };

      _host2.default.hook.Reconciler.mountComponent(this);

      return instance;
    }
  }, {
    key: 'unmountComponent',
    value: function unmountComponent(notRemoveChild) {
      if (this._nativeNode && !notRemoveChild) {
        _host2.default.driver.removeChild(this._nativeNode, this._parent);
      }

      _host2.default.hook.Reconciler.unmountComponent(this);

      this._currentElement = null;
      this._nativeNode = null;
      this._parent = null;
      this._parentInstance = null;
      this._context = null;
      this._stringText = null;
    }
  }, {
    key: 'updateComponent',
    value: function updateComponent(prevElement, nextElement, context) {
      // If some text do noting
      if (prevElement !== nextElement) {
        // Replace current element
        this._currentElement = nextElement;
        // Devtool read the latest stringText value
        this._stringText = String(nextElement);
        _host2.default.driver.updateText(this.getNativeNode(), this._stringText);
        _host2.default.hook.Reconciler.receiveComponent(this);
      }
    }
  }, {
    key: 'getNativeNode',
    value: function getNativeNode() {
      if (this._nativeNode == null) {
        this._nativeNode = _host2.default.driver.createText(this._stringText);
      }
      return this._nativeNode;
    }
  }]);

  return TextComponent;
}();

exports.default = TextComponent;
module.exports = exports['default'];

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _stateless = __webpack_require__(85);

var _stateless2 = _interopRequireDefault(_stateless);

var _updater = __webpack_require__(86);

var _updater2 = _interopRequireDefault(_updater);

var _host = __webpack_require__(4);

var _host2 = _interopRequireDefault(_host);

var _ref = __webpack_require__(47);

var _ref2 = _interopRequireDefault(_ref);

var _instantiateComponent = __webpack_require__(21);

var _instantiateComponent2 = _interopRequireDefault(_instantiateComponent);

var _shouldUpdateComponent = __webpack_require__(31);

var _shouldUpdateComponent2 = _interopRequireDefault(_shouldUpdateComponent);

var _shallowEqual = __webpack_require__(87);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function performInSandbox(fn, instance, callback) {
  try {
    return fn();
  } catch (e) {
    if (callback) {
      callback(e);
    } else {
      handleError(instance, e);
    }
  }
}

function handleError(instance, error) {
  var boundary = void 0;

  while (instance) {
    if (typeof instance.componentDidCatch === 'function') {
      boundary = instance;
      break;
    } else if (instance._internal && instance._internal._parentInstance) {
      instance = instance._internal._parentInstance;
    } else {
      break;
    }
  }

  if (boundary) {
    boundary.componentDidCatch(error);
  } else {
    if (_host2.default.sandbox) {
      setTimeout(function () {
        throw error;
      }, 0);
    } else {
      throw error;
    }
  }
}

var measureLifeCycle = void 0;
if (process.env.NODE_ENV !== 'production') {
  measureLifeCycle = function measureLifeCycle(callback, instanceID, type) {
    _host2.default.measurer && _host2.default.measurer.beforeLifeCycle(instanceID, type);
    callback();
    _host2.default.measurer && _host2.default.measurer.afterLifeCycle(instanceID, type);
  };
}

/**
 * Composite Component
 */

var CompositeComponent = function () {
  function CompositeComponent(element) {
    _classCallCheck(this, CompositeComponent);

    this._currentElement = element;
  }

  _createClass(CompositeComponent, [{
    key: 'getName',
    value: function getName() {
      var type = this._currentElement.type;
      var constructor = this._instance && this._instance.constructor;
      return type.displayName || constructor && constructor.displayName || type.name || constructor && constructor.name || null;
    }
  }, {
    key: 'mountComponent',
    value: function mountComponent(parent, parentInstance, context, childMounter) {
      var _this = this;

      this._parent = parent;
      this._parentInstance = parentInstance;
      this._context = context;
      this._mountID = _host2.default.mountID++;
      this._updateCount = 0;

      if (process.env.NODE_ENV !== 'production') {
        _host2.default.measurer && _host2.default.measurer.beforeMountComponent(this._mountID, this);
      }

      var Component = this._currentElement.type;
      var publicProps = this._currentElement.props;
      var isClass = Component.prototype;
      var isComponentClass = isClass && Component.prototype.isComponentClass;
      // Class stateless component without state but have lifecycles
      var isStatelessClass = isClass && Component.prototype.render;

      // Context process
      var publicContext = this._processContext(context);

      // Initialize the public class
      var instance = void 0;
      var renderedElement = void 0;

      if (isComponentClass || isStatelessClass) {
        // Component instance
        instance = new Component(publicProps, publicContext, _updater2.default);
      } else if (typeof Component === 'function') {
        // Functional stateless component without state and lifecycles
        instance = new _stateless2.default(Component);
      } else {
        throw new Error('Invalid component type: ' + Component + '. (keys: ' + Object.keys(Component) + ')');
      }

      // These should be set up in the constructor, but as a convenience for
      // simpler class abstractions, we set them up after the fact.
      instance.props = publicProps;
      instance.context = publicContext;
      instance.refs = {};

      // Inject the updater into instance
      instance.updater = _updater2.default;
      instance._internal = this;
      this._instance = instance;

      // Init state, must be set to an object or null
      var initialState = instance.state;
      if (initialState === undefined) {
        // TODO clone the state?
        instance.state = initialState = null;
      }

      var error = null;
      var errorCallback = function errorCallback(e) {
        error = e;
      };

      if (instance.componentWillMount) {
        performInSandbox(function () {
          if (process.env.NODE_ENV !== 'production') {
            measureLifeCycle(function () {
              instance.componentWillMount();
            }, _this._mountID, 'componentWillMount');
          } else {
            instance.componentWillMount();
          }
        }, instance, errorCallback);
      }

      if (renderedElement == null) {
        _host2.default.component = this;
        // Process pending state when call setState in componentWillMount
        instance.state = this._processPendingState(publicProps, publicContext);

        performInSandbox(function () {
          if (process.env.NODE_ENV !== 'production') {
            measureLifeCycle(function () {
              renderedElement = instance.render();
            }, _this._mountID, 'render');
          } else {
            renderedElement = instance.render();
          }
        }, instance, errorCallback);

        _host2.default.component = null;
      }

      this._renderedComponent = (0, _instantiateComponent2.default)(renderedElement);
      this._renderedComponent.mountComponent(this._parent, instance, this._processChildContext(context), childMounter);

      if (error) {
        handleError(instance, error);
      }

      if (this._currentElement && this._currentElement.ref) {
        _ref2.default.attach(this._currentElement._owner, this._currentElement.ref, this);
      }

      if (instance.componentDidMount) {
        performInSandbox(function () {
          if (process.env.NODE_ENV !== 'production') {
            measureLifeCycle(function () {
              instance.componentDidMount();
            }, _this._mountID, 'componentDidMount');
          } else {
            instance.componentDidMount();
          }
        }, instance);
      }

      _host2.default.hook.Reconciler.mountComponent(this);

      if (process.env.NODE_ENV !== 'production') {
        _host2.default.measurer && _host2.default.measurer.afterMountComponent(this._mountID);
      }

      return instance;
    }
  }, {
    key: 'unmountComponent',
    value: function unmountComponent(notRemoveChild) {
      var instance = this._instance;

      if (instance.componentWillUnmount) {
        performInSandbox(function () {
          instance.componentWillUnmount();
        }, instance);
      }

      _host2.default.hook.Reconciler.unmountComponent(this);

      instance._internal = null;

      if (this._renderedComponent != null) {
        var ref = this._currentElement.ref;
        if (ref) {
          _ref2.default.detach(this._currentElement._owner, ref, this);
        }

        this._renderedComponent.unmountComponent(notRemoveChild);
        this._renderedComponent = null;
        this._instance = null;
      }

      this._currentElement = null;
      this._parentInstance = null;

      // Reset pending fields
      // Even if this component is scheduled for another update in ReactUpdates,
      // it would still be ignored because these fields are reset.
      this._pendingStateQueue = null;
      this._pendingForceUpdate = false;

      // These fields do not really need to be reset since this object is no
      // longer accessible.
      this._context = null;
    }

    /**
     * Filters the context object to only contain keys specified in
     * `contextTypes`
     */

  }, {
    key: '_processContext',
    value: function _processContext(context) {
      var Component = this._currentElement.type;
      var contextTypes = Component.contextTypes;
      if (!contextTypes) {
        return {};
      }
      var maskedContext = {};
      for (var contextName in contextTypes) {
        maskedContext[contextName] = context[contextName];
      }
      return maskedContext;
    }
  }, {
    key: '_processChildContext',
    value: function _processChildContext(currentContext) {
      var instance = this._instance;
      var childContext = instance.getChildContext && instance.getChildContext();
      if (childContext) {
        return Object.assign({}, currentContext, childContext);
      }
      return currentContext;
    }
  }, {
    key: '_processPendingState',
    value: function _processPendingState(props, context) {
      var instance = this._instance;
      var queue = this._pendingStateQueue;
      if (!queue) {
        return instance.state;
      }
      // Reset pending queue
      this._pendingStateQueue = null;
      var nextState = Object.assign({}, instance.state);
      for (var i = 0; i < queue.length; i++) {
        var partial = queue[i];
        Object.assign(nextState, typeof partial === 'function' ? partial.call(instance, nextState, props, context) : partial);
      }

      return nextState;
    }
  }, {
    key: 'updateComponent',
    value: function updateComponent(prevElement, nextElement, prevUnmaskedContext, nextUnmaskedContext) {
      var instance = this._instance;

      if (process.env.NODE_ENV !== 'production') {
        _host2.default.measurer && _host2.default.measurer.beforeUpdateComponent(this._mountID, this);
      }

      if (!instance) {
        console.error('Update component \'' + this.getName() + '\' that has already been unmounted (or failed to mount).');
      }

      var willReceive = false;
      var nextContext = void 0;
      var nextProps = void 0;

      // Determine if the context has changed or not
      if (this._context === nextUnmaskedContext) {
        nextContext = instance.context;
      } else {
        nextContext = this._processContext(nextUnmaskedContext);
        willReceive = true;
      }

      // Distinguish between a props update versus a simple state update
      if (prevElement === nextElement) {
        // Skip checking prop types again -- we don't read component.props to avoid
        // warning for DOM component props in this upgrade
        nextProps = nextElement.props;
      } else {
        nextProps = nextElement.props;
        willReceive = true;
      }

      var hasReceived = willReceive && instance.componentWillReceiveProps;

      if (hasReceived) {
        // Calling this.setState() within componentWillReceiveProps will not trigger an additional render.
        this._pendingState = true;
        performInSandbox(function () {
          instance.componentWillReceiveProps(nextProps, nextContext);
        }, instance);
        this._pendingState = false;
      }

      // Update refs
      _ref2.default.update(prevElement, nextElement, this);

      // Shoud update always default
      var shouldUpdate = true;
      var prevProps = instance.props;
      var prevState = instance.state;
      // TODO: could delay execution processPendingState
      var nextState = this._processPendingState(nextProps, nextContext);

      // ShouldComponentUpdate is not called when forceUpdate is used
      if (!this._pendingForceUpdate) {
        if (instance.shouldComponentUpdate) {
          shouldUpdate = performInSandbox(function () {
            return instance.shouldComponentUpdate(nextProps, nextState, nextContext);
          }, instance);
        } else if (instance.isPureComponentClass) {
          shouldUpdate = !(0, _shallowEqual2.default)(prevProps, nextProps) || !(0, _shallowEqual2.default)(prevState, nextState);
        }
      }

      if (shouldUpdate) {
        this._pendingForceUpdate = false;
        // Will set `this.props`, `this.state` and `this.context`.
        var prevContext = instance.context;

        // Cannot use this.setState() in componentWillUpdate.
        // If need to update state in response to a prop change, use componentWillReceiveProps instead.
        performInSandbox(function () {
          if (instance.componentWillUpdate) {
            instance.componentWillUpdate(nextProps, nextState, nextContext);
          }
        }, instance);

        // Replace with next
        this._currentElement = nextElement;
        this._context = nextUnmaskedContext;
        instance.props = nextProps;
        instance.state = nextState;
        instance.context = nextContext;

        this._updateRenderedComponent(nextUnmaskedContext);

        performInSandbox(function () {
          if (instance.componentDidUpdate) {
            instance.componentDidUpdate(prevProps, prevState, prevContext);
          }
        }, instance);

        this._updateCount++;
      } else {
        // If it's determined that a component should not update, we still want
        // to set props and state but we shortcut the rest of the update.
        this._currentElement = nextElement;
        this._context = nextUnmaskedContext;
        instance.props = nextProps;
        instance.state = nextState;
        instance.context = nextContext;
      }

      // Flush setState callbacks set in componentWillReceiveProps
      if (hasReceived) {
        var callbacks = this._pendingCallbacks;
        this._pendingCallbacks = null;
        _updater2.default.runCallbacks(callbacks, instance);
      }

      if (process.env.NODE_ENV !== 'production') {
        _host2.default.measurer && _host2.default.measurer.afterUpdateComponent(this._mountID);
      }

      _host2.default.hook.Reconciler.receiveComponent(this);
    }

    /**
     * Call the component's `render` method and update the DOM accordingly.
     */

  }, {
    key: '_updateRenderedComponent',
    value: function _updateRenderedComponent(context) {
      var _this2 = this;

      var prevRenderedComponent = this._renderedComponent;
      var prevRenderedElement = prevRenderedComponent._currentElement;

      var instance = this._instance;
      var nextRenderedElement = void 0;

      _host2.default.component = this;

      performInSandbox(function () {
        if (process.env.NODE_ENV !== 'production') {
          measureLifeCycle(function () {
            nextRenderedElement = instance.render();
          }, _this2._mountID, 'render');
        } else {
          nextRenderedElement = instance.render();
        }
      }, instance);

      _host2.default.component = null;

      if ((0, _shouldUpdateComponent2.default)(prevRenderedElement, nextRenderedElement)) {
        prevRenderedComponent.updateComponent(prevRenderedElement, nextRenderedElement, prevRenderedComponent._context, this._processChildContext(context));
        if (process.env.NODE_ENV !== 'production') {
          _host2.default.measurer && _host2.default.measurer.recordOperation({
            instanceID: this._mountID,
            type: 'update component',
            payload: {}
          });
        }
      } else {
        var oldChild = prevRenderedComponent.getNativeNode();
        prevRenderedComponent.unmountComponent(true);

        this._renderedComponent = (0, _instantiateComponent2.default)(nextRenderedElement);
        this._renderedComponent.mountComponent(this._parent, instance, this._processChildContext(context), function (newChild, parent) {
          // TODO: Duplicate code in native component file
          if (!Array.isArray(newChild)) {
            newChild = [newChild];
          }

          // oldChild or newChild all maybe fragment
          if (!Array.isArray(oldChild)) {
            oldChild = [oldChild];
          }

          // If newChild count large then oldChild
          var lastNewChild = void 0;
          for (var i = 0; i < newChild.length; i++) {
            var child = newChild[i];
            if (oldChild[i]) {
              _host2.default.driver.replaceChild(child, oldChild[i]);
            } else {
              _host2.default.driver.insertAfter(child, lastNewChild);
            }
            lastNewChild = child;
          }

          // If newChild count less then oldChild
          if (newChild.length < oldChild.length) {
            for (var _i = newChild.length; _i < oldChild.length; _i++) {
              _host2.default.driver.removeChild(oldChild[_i]);
            }
          }
        });
      }
    }
  }, {
    key: 'getNativeNode',
    value: function getNativeNode() {
      var renderedComponent = this._renderedComponent;
      if (renderedComponent) {
        return renderedComponent.getNativeNode();
      }
    }
  }, {
    key: 'getPublicInstance',
    value: function getPublicInstance() {
      var instance = this._instance;
      // The Stateless components cannot be given refs
      if (instance instanceof _stateless2.default) {
        return null;
      }
      return instance;
    }
  }]);

  return CompositeComponent;
}();

exports.default = CompositeComponent;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _host = __webpack_require__(4);

var _host2 = _interopRequireDefault(_host);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/**
 * Stateless Component Class Wrapper
 */
var StatelessComponent = function () {
  function StatelessComponent(pureRender) {
    _classCallCheck(this, StatelessComponent);

    // A stateless function
    this.pureRender = pureRender;
  }

  _createClass(StatelessComponent, [{
    key: 'render',
    value: function render() {
      if (process.env.NODE_ENV !== 'production') {
        _host2.default.measurer && _host2.default.measurer.beforeRender();
      }

      return this.pureRender(this.props, this.context);
    }
  }]);

  return StatelessComponent;
}();

exports.default = StatelessComponent;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function enqueueCallback(internal, callback) {
  if (callback) {
    var callbackQueue = internal._pendingCallbacks || (internal._pendingCallbacks = []);
    callbackQueue.push(callback);
  }
}

function enqueueState(internal, partialState) {
  if (partialState) {
    var stateQueue = internal._pendingStateQueue || (internal._pendingStateQueue = []);
    stateQueue.push(partialState);
  }
}

var Updater = {
  setState: function setState(component, partialState, callback) {
    var internal = component._internal;

    if (!internal) {
      return;
    }

    enqueueState(internal, partialState);
    enqueueCallback(internal, callback);

    // pending in componentWillReceiveProps and componentWillMount
    if (!internal._pendingState && internal._renderedComponent) {
      this.runUpdate(component);
    }
  },

  forceUpdate: function forceUpdate(component, callback) {
    var internal = component._internal;

    if (!internal) {
      return;
    }

    internal._pendingForceUpdate = true;

    enqueueCallback(internal, callback);
    // pending in componentWillMount
    if (internal._renderedComponent) {
      this.runUpdate(component);
    }
  },

  runUpdate: function runUpdate(component) {
    var internal = component._internal;

    // If updateComponent happens to enqueue any new updates, we
    // shouldn't execute the callbacks until the next render happens, so
    // stash the callbacks first
    var callbacks = internal._pendingCallbacks;
    internal._pendingCallbacks = null;

    var prevElement = internal._currentElement;
    var prevUnmaskedContext = internal._context;

    if (internal._pendingStateQueue || internal._pendingForceUpdate) {
      internal.updateComponent(prevElement, prevElement, prevUnmaskedContext, prevUnmaskedContext);
    }

    this.runCallbacks(callbacks, component);
  },

  runCallbacks: function runCallbacks(callbacks, context) {
    if (callbacks) {
      for (var i = 0; i < callbacks.length; i++) {
        callbacks[i].call(context);
      }
    }
  }
};

exports.default = Updater;
module.exports = exports["default"];

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return x !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

exports.default = shallowEqual;
module.exports = exports['default'];

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _host = __webpack_require__(4);

var _host2 = _interopRequireDefault(_host);

var _native = __webpack_require__(46);

var _native2 = _interopRequireDefault(_native);

var _instance = __webpack_require__(10);

var _instance2 = _interopRequireDefault(_instance);

var _instantiateComponent = __webpack_require__(21);

var _instantiateComponent2 = _interopRequireDefault(_instantiateComponent);

var _getElementKeyName = __webpack_require__(48);

var _getElementKeyName2 = _interopRequireDefault(_getElementKeyName);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * Fragment Component
 */
var FragmentComponent = function (_NativeComponent) {
  _inherits(FragmentComponent, _NativeComponent);

  function FragmentComponent(element) {
    _classCallCheck(this, FragmentComponent);

    return _possibleConstructorReturn(this, (FragmentComponent.__proto__ || Object.getPrototypeOf(FragmentComponent)).call(this, element));
  }

  _createClass(FragmentComponent, [{
    key: 'mountComponent',
    value: function mountComponent(parent, parentInstance, context, childMounter) {
      // Parent native element
      this._parent = parent;
      this._parentInstance = parentInstance;
      this._context = context;
      this._mountID = _host2.default.mountID++;

      var instance = {
        _internal: this
      };
      this._instance = instance;

      var fragment = this.getNativeNode();
      var children = this._currentElement;

      // Process children
      this.mountChildren(children, context);

      if (childMounter) {
        childMounter(fragment, parent);
      } else {
        var isFragmentParent = Array.isArray(parent);
        for (var i = 0; i < fragment.length; i++) {
          var child = fragment[i];
          // When the parent is also a fragment
          if (isFragmentParent) {
            parent.push(child);
          } else {
            _host2.default.driver.appendChild(child, parent);
          }
        }
      }

      return instance;
    }
  }, {
    key: 'mountChildren',
    value: function mountChildren(children, context) {
      var _this2 = this;

      var renderedChildren = this._renderedChildren = {};
      var fragment = this.getNativeNode();

      var renderedChildrenImage = children.map(function (element, index) {
        var renderedChild = (0, _instantiateComponent2.default)(element);
        var name = (0, _getElementKeyName2.default)(renderedChildren, element, index);
        renderedChildren[name] = renderedChild;
        renderedChild._mountIndex = index;
        // Mount
        var mountImage = renderedChild.mountComponent(_this2._parent, _this2._instance, context, function (nativeNode) {
          if (Array.isArray(nativeNode)) {
            for (var i = 0; i < nativeNode.length; i++) {
              fragment.push(nativeNode[i]);
            }
          } else {
            fragment.push(nativeNode);
          }
        });
        return mountImage;
      });

      return renderedChildrenImage;
    }
  }, {
    key: 'unmountComponent',
    value: function unmountComponent(notRemoveChild) {
      if (this._nativeNode) {
        _instance2.default.remove(this._nativeNode);
        if (!notRemoveChild) {
          for (var i = 0; i < this._nativeNode.length; i++) {
            _host2.default.driver.removeChild(this._nativeNode[i]);
          }
        }
      }

      // Do not need remove child when their parent is removed
      this.unmountChildren(true);

      this._currentElement = null;
      this._nativeNode = null;
      this._parent = null;
      this._parentInstance = null;
      this._context = null;
      this._instance = null;
    }
  }, {
    key: 'updateComponent',
    value: function updateComponent(prevElement, nextElement, prevContext, nextContext) {
      // Replace current element
      this._currentElement = nextElement;
      this.updateChildren(this._currentElement, nextContext);
    }
  }, {
    key: 'getNativeNode',
    value: function getNativeNode() {
      if (this._nativeNode == null) {
        this._nativeNode = [];
      }

      return this._nativeNode;
    }
  }, {
    key: 'getPublicInstance',
    value: function getPublicInstance() {
      return this.getNativeNode();
    }
  }, {
    key: 'getName',
    value: function getName() {
      return 'fragment';
    }
  }]);

  return FragmentComponent;
}(_native2.default);

exports.default = FragmentComponent;
module.exports = exports['default'];

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
}; /**
    * Weex driver
    */

var _styleUnit = __webpack_require__(33);

var _elements = __webpack_require__(90);

var _elements2 = _interopRequireDefault(_elements);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var STYLE = 'style';
var ID = 'id';
var TEXT = 'text';
var CHILDREN = 'children';
var EVENT_PREFIX_REGEXP = /^on[A-Z]/;
var ARIA_PREFIX_REGEXP = /^aria-/;

var nodeMaps = {};
/* global __weex_document__ */
var document = (typeof __weex_document__ === 'undefined' ? 'undefined' : _typeof(__weex_document__)) === 'object' ? __weex_document__ : (typeof document === 'undefined' ? 'undefined' : _typeof(document)) === 'object' ? document : null;

var Driver = {
  deviceWidth: 750,
  viewportWidth: 750,

  getDeviceWidth: function getDeviceWidth() {
    return this.deviceWidth;
  },
  setDeviceWidth: function setDeviceWidth(width) {
    this.deviceWidth = width;
  },
  getViewportWidth: function getViewportWidth() {
    return this.viewportWidth;
  },
  setViewportWidth: function setViewportWidth(width) {
    this.viewportWidth = width;
  },
  getElementById: function getElementById(id) {
    return nodeMaps[id];
  },
  createBody: function createBody() {
    if (document.body) {
      return document.body;
    }

    var documentElement = document.documentElement;
    var body = document.createBody(Driver.bodyType, Driver.bodyProps);
    documentElement.appendChild(body);

    return body;
  },
  createComment: function createComment(content) {
    return document.createComment(content);
  },
  createEmpty: function createEmpty() {
    return this.createComment(' empty ');
  },
  createText: function createText(text) {
    return Driver.createElement({
      type: TEXT,
      props: {
        value: text
      }
    });
  },
  updateText: function updateText(node, content) {
    this.setAttribute(node, 'value', content);
  },
  createElement: function createElement(component) {
    var htmlElement = _elements2.default[component.type];
    if (htmlElement) {
      component = htmlElement.parse(component);
    }

    var props = component.props;
    var events = [];
    var style = {};
    var originStyle = props[STYLE];
    for (var prop in originStyle) {
      style[prop] = (0, _styleUnit.convertUnit)(originStyle[prop], prop);
    }

    var node = document.createElement(component.type, {
      style: style
    });

    this.setNativeProps(node, props, true);

    return node;
  },
  appendChild: function appendChild(node, parent) {
    return parent.appendChild(node);
  },
  removeChild: function removeChild(node, parent) {
    parent = parent || node.parentNode;
    var id = node.attr && node.attr[ID];
    if (id != null) {
      nodeMaps[id] = null;
    }
    return parent.removeChild(node);
  },
  replaceChild: function replaceChild(newChild, oldChild, parent) {
    parent = parent || oldChild.parentNode;
    var previousSibling = oldChild.previousSibling;
    var nextSibling = oldChild.nextSibling;
    this.removeChild(oldChild, parent);

    if (previousSibling) {
      this.insertAfter(newChild, previousSibling, parent);
    } else if (nextSibling) {
      this.insertBefore(newChild, nextSibling, parent);
    } else {
      this.appendChild(newChild, parent);
    }
  },
  insertAfter: function insertAfter(node, after, parent) {
    parent = parent || after.parentNode;
    return parent.insertAfter(node, after);
  },
  insertBefore: function insertBefore(node, before, parent) {
    parent = parent || before.parentNode;
    return parent.insertBefore(node, before);
  },
  addEventListener: function addEventListener(node, eventName, eventHandler, props) {
    var params = props[eventName + 'EventParams'];
    return node.addEvent(eventName, eventHandler, params);
  },
  removeEventListener: function removeEventListener(node, eventName, eventHandler) {
    return node.removeEvent(eventName, eventHandler);
  },
  removeAllEventListeners: function removeAllEventListeners(node) {
    // Noop
  },
  removeAttribute: function removeAttribute(node, propKey, propValue) {
    if (propKey == ID) {
      nodeMaps[propValue] = null;
    }
    // Weex native will crash when pass null value
    return node.setAttr(propKey, undefined, false);
  },
  setAttribute: function setAttribute(node, propKey, propValue) {
    if (propKey == ID) {
      nodeMaps[propValue] = node;
    }

    // Weex only support `ariaLabel` format, convert `aria-label` format to camelcase
    if (ARIA_PREFIX_REGEXP.test(propKey)) {
      propKey = propKey.replace(/\-(\w)/, function (m, p1) {
        return p1.toUpperCase();
      });
    }

    return node.setAttr(propKey, propValue, false);
  },
  setStyles: function setStyles(node, styles) {
    // TODO if more then one style update, call setStyles will be better performance
    for (var key in styles) {
      var val = styles[key];
      val = (0, _styleUnit.convertUnit)(val, key);
      node.setStyle(key, val);
    }
  },
  beforeRender: function beforeRender() {
    // Turn off batched updates
    document.open();

    // Init rem unit
    (0, _styleUnit.setRem)(this.getDeviceWidth() / this.getViewportWidth());
  },
  afterRender: function afterRender() {
    if (document.listener && document.listener.createFinish) {
      document.listener.createFinish();
    }

    // Turn on batched updates
    document.close();
  },
  setNativeProps: function setNativeProps(node, props, skipSetStyles) {
    for (var prop in props) {
      var value = props[prop];
      if (prop === CHILDREN) {
        continue;
      }

      if (value != null) {
        if (prop === STYLE) {
          if (skipSetStyles) {
            continue;
          }
          this.setStyles(node, value);
        } else if (EVENT_PREFIX_REGEXP.test(prop)) {
          var eventName = prop.slice(2).toLowerCase();
          this.addEventListener(node, eventName, value, props);
        } else {
          this.setAttribute(node, prop, value);
        }
      }
    }
  }
};

exports.default = Driver;
module.exports = exports['default'];

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _img = __webpack_require__(91);

var _img2 = _interopRequireDefault(_img);

var _video = __webpack_require__(92);

var _video2 = _interopRequireDefault(_video);

var _textarea = __webpack_require__(93);

var _textarea2 = _interopRequireDefault(_textarea);

var _span = __webpack_require__(94);

var _span2 = _interopRequireDefault(_span);

var _p = __webpack_require__(95);

var _p2 = _interopRequireDefault(_p);

var _button = __webpack_require__(96);

var _button2 = _interopRequireDefault(_button);

var _heading = __webpack_require__(97);

var _heading2 = _interopRequireDefault(_heading);

var _block = __webpack_require__(98);

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  span: _span2.default,
  p: _p2.default,
  img: _img2.default,
  button: _button2.default,
  video: _video2.default,
  textarea: _textarea2.default,
  h1: _heading2.default,
  h2: _heading2.default,
  h3: _heading2.default,
  h4: _heading2.default,
  h5: _heading2.default,
  h6: _heading2.default,
  nav: _block2.default,
  article: _block2.default,
  section: _block2.default,
  // Conflict with weex header tag
  // header: block,
  footer: _block2.default,
  aside: _block2.default,
  main: _block2.default
};
module.exports = exports['default'];

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parseProps = __webpack_require__(49);

exports.default = {

  /**
   * parse w3c attrs to weex module attrs
   *
   * @param {Object} w3c component data
   * @return {Object} weex component data
   */
  parse: function parse(component) {
    var props = component.props;

    component.type = 'image';

    // modify props
    component.props = (0, _parseProps.transformPropsAttrsToStyle)(props, ['width', 'height']);

    return component;
  }
};
module.exports = exports['default'];

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parseProps = __webpack_require__(49);

exports.default = {

  /**
   * parse w3c attrs to weex module attrs
   *
   * @param {Object} w3c component data
   * @return {Object} weex component data
   */
  parse: function parse(component) {
    var props = component.props;

    // modify props

    component.props = (0, _parseProps.transformPropsAttrsToStyle)(props, ['width', 'height']);

    return component;
  }
};
module.exports = exports['default'];

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  /**
   * parse w3c attrs to weex module attrs
   *
   * @param {Object} w3c component data
   * @return {Object} weex component data
   */
  parse: function parse(component) {
    var props = component.props;

    if (typeof props.children === 'string' && !props.value) {
      props.value = props.children;
      props.children = null;
    }

    return component;
  }
};
module.exports = exports['default'];

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  parse: function parse(component) {
    var props = component.props;

    component.type = 'text';

    if (typeof props.children === 'string' && !props.value) {
      props.value = props.children;
      props.children = null;
    }

    return component;
  }
};
module.exports = exports['default'];

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var BASE_FONT_SIZE = 28;

var defaultParagraphStyle = {
  fontSize: BASE_FONT_SIZE,
  marginTop: BASE_FONT_SIZE,
  marginBottom: BASE_FONT_SIZE
};

var TypographyElements = {
  u: {
    textDecoration: 'underline'
  },
  s: {
    textDecoration: 'line-through'
  },
  i: {
    fontStyle: 'italic'
  },
  b: {
    fontWeight: 'bold'
  },
  del: {
    textDecoration: 'line-through'
  },
  em: {
    fontStyle: 'italic'
  },
  strong: {
    fontWeight: 'bold'
  },
  big: {
    fontSize: BASE_FONT_SIZE * 1.2
  },
  small: {
    fontSize: BASE_FONT_SIZE * 0.8
  }
};

function transformString(string) {
  return {
    type: 'span',
    attr: {
      value: string
    }
  };
}

function transformChild(child) {
  var type = child.type;
  var props = child.props;
  var style = props.style;
  var nestedChildren = props.children;
  // Alias img tag
  if (type === 'img') {
    type = 'image';
  }

  // Transfrom to span
  if (TypographyElements[type]) {
    style = _extends({}, TypographyElements[type], style);
    type = 'span';
  }

  props.style = null;
  props.children = null;

  var element = {
    type: type,
    style: style,
    attr: props || {}
  };

  if (nestedChildren) {
    if (type === 'span' && typeof nestedChildren === 'string') {
      element.attr.value = nestedChildren;
    } else {
      element.children = transformChildren(nestedChildren);
    }
  }

  return element;
}

function transformChildren(children) {
  var elements = [];
  if (!Array.isArray(children)) {
    children = [children];
  }

  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    if (typeof child === 'string') {
      elements.push(transformString(child));
    } else if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object') {
      elements.push(transformChild(child));
    }
  }

  return elements;
}

exports.default = {
  parse: function parse(component) {
    var props = component.props;

    var children = props.children;

    component.type = 'richtext';

    props.style = _extends({}, defaultParagraphStyle, props.style);

    props.value = transformChildren(children);;
    props.children = null;

    return component;
  }
};
module.exports = exports['default'];

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

/**
 * weex button
 *
 * props: disabled, style
 */

exports.default = {
  parse: function parse(component) {
    var props = component.props;

    component.type = 'text';

    var style = props.style,
        disabled = props.disabled,
        children = props.children;

    var textStyle = _extends({
      textAlign: 'center',
      fontSize: 22,
      paddingTop: 4,
      paddingRight: 12,
      paddingBottom: 6,
      paddingLeft: 12,
      borderWidth: 4,
      borderStyle: 'solid',
      borderColor: '#000000',
      backgroudColor: '#c0c0c0'
    }, style);

    if (disabled) {
      props.onClick = null;
      textStyle = _extends({}, textStyle, {
        color: '#7f7f7f',
        borderColor: '#7f7f7f'
      });
    }

    if (typeof children === 'string') {
      props.value = children;
      props.children = null;
    }

    return component;
  }
};
module.exports = exports['default'];

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var BASE_FONT_SIZE = 28;

function generateHeadingStyle(baseFontSize, fontMultiplier, marginMultiplier) {
  return {
    fontSize: baseFontSize * fontMultiplier,
    marginTop: baseFontSize * fontMultiplier * marginMultiplier,
    marginBottom: baseFontSize * fontMultiplier * marginMultiplier,
    fontWeight: 'bold'
  };
}

var HeadingElements = {
  h1: generateHeadingStyle(BASE_FONT_SIZE, 2, 0.67),
  h2: generateHeadingStyle(BASE_FONT_SIZE, 1.5, 0.83),
  h3: generateHeadingStyle(BASE_FONT_SIZE, 1.17, 1),
  h4: generateHeadingStyle(BASE_FONT_SIZE, 1, 1.33),
  h5: generateHeadingStyle(BASE_FONT_SIZE, 0.83, 1.67),
  h6: generateHeadingStyle(BASE_FONT_SIZE, 0.67, 2.33)
};

exports.default = {
  parse: function parse(component) {
    var type = component.type,
        props = component.props;

    component.type = 'text';
    props.style = _extends({}, HeadingElements[type] || HeadingElements.h6, props.style);

    if (typeof props.children === 'string' && !props.value) {
      props.value = props.children;
      props.children = null;
    }

    return component;
  }
};
module.exports = exports['default'];

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  /**
   * parse w3c attrs to weex module attrs
   *
   * @param {Object} w3c component data
   * @return {Object} weex component data
   */
  parse: function parse(component) {
    component.type = 'div';
    return component;
  }
};
module.exports = exports['default'];

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styleUnit = __webpack_require__(33);

var _flexbox = __webpack_require__(100);

var _flexbox2 = _interopRequireDefault(_flexbox);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Web Browser driver
 **/

/* global DEVICE_WIDTH, VIEWPORT_WIDTH */

var DANGEROUSLY_SET_INNER_HTML = 'dangerouslySetInnerHTML';
var CLASS_NAME = 'className';
var CLASS = 'class';
var STYLE = 'style';
var CHILDREN = 'children';
var EVENT_PREFIX_REGEXP = /^on[A-Z]/;

var ADD_EVENT = 'addEvent';
var REMOVE_EVENT = 'removeEvent';

var Driver = {

  deviceWidth: typeof DEVICE_WIDTH !== 'undefined' && DEVICE_WIDTH || null,
  viewportWidth: typeof VIEWPORT_WIDTH !== 'undefined' && VIEWPORT_WIDTH || 750,
  eventRegistry: {},

  getDeviceWidth: function getDeviceWidth() {
    return this.deviceWidth || document.documentElement.clientWidth;
  },
  setDeviceWidth: function setDeviceWidth(width) {
    this.deviceWidth = width;
  },
  getViewportWidth: function getViewportWidth() {
    return this.viewportWidth;
  },
  setViewportWidth: function setViewportWidth(width) {
    this.viewportWidth = width;
  },
  getElementById: function getElementById(id) {
    return document.getElementById(id);
  },
  createBody: function createBody() {
    return document.body;
  },
  createComment: function createComment(content) {
    return document.createComment(content);
  },
  createEmpty: function createEmpty() {
    return this.createComment(' empty ');
  },
  createText: function createText(text) {
    return document.createTextNode(text);
  },
  updateText: function updateText(node, text) {
    var textContentAttr = 'textContent' in document ? 'textContent' : 'nodeValue';
    node[textContentAttr] = text;
  },
  createElement: function createElement(component) {
    var node = document.createElement(component.type);
    var props = component.props;

    this.setNativeProps(node, props);

    return node;
  },
  appendChild: function appendChild(node, parent) {
    return parent.appendChild(node);
  },
  removeChild: function removeChild(node, parent) {
    parent = parent || node.parentNode;
    // Maybe has been removed when remove child
    if (parent) {
      parent.removeChild(node);
    }
  },
  replaceChild: function replaceChild(newChild, oldChild, parent) {
    parent = parent || oldChild.parentNode;
    parent.replaceChild(newChild, oldChild);
  },
  insertAfter: function insertAfter(node, after, parent) {
    parent = parent || after.parentNode;
    var nextSibling = after.nextSibling;
    if (nextSibling) {
      parent.insertBefore(node, nextSibling);
    } else {
      parent.appendChild(node);
    }
  },
  insertBefore: function insertBefore(node, before, parent) {
    parent = parent || before.parentNode;
    parent.insertBefore(node, before);
  },
  addEventListener: function addEventListener(node, eventName, eventHandler, props) {
    if (this.eventRegistry[eventName]) {
      return this.eventRegistry[eventName](ADD_EVENT, node, eventName, eventHandler, props);
    } else {
      return node.addEventListener(eventName, eventHandler);
    }
  },
  removeEventListener: function removeEventListener(node, eventName, eventHandler, props) {
    if (this.eventRegistry[eventName]) {
      return this.eventRegistry[eventName](REMOVE_EVENT, node, eventName, eventHandler, props);
    } else {
      return node.removeEventListener(eventName, eventHandler);
    }
  },
  removeAllEventListeners: function removeAllEventListeners(node) {
    // noop
  },
  removeAttribute: function removeAttribute(node, propKey) {
    if (propKey === DANGEROUSLY_SET_INNER_HTML) {
      return node.innerHTML = null;
    }

    if (propKey === CLASS_NAME) {
      propKey = CLASS;
    }

    if (propKey in node) {
      try {
        // Some node property is readonly when in strict mode
        node[propKey] = null;
      } catch (e) {}
    }

    node.removeAttribute(propKey);
  },
  setAttribute: function setAttribute(node, propKey, propValue) {
    if (propKey === DANGEROUSLY_SET_INNER_HTML) {
      return node.innerHTML = propValue.__html;
    }

    if (propKey === CLASS_NAME) {
      propKey = CLASS;
    }

    if (propKey in node) {
      try {
        // Some node property is readonly when in strict mode
        node[propKey] = propValue;
      } catch (e) {
        node.setAttribute(propKey, propValue);
      }
    } else {
      node.setAttribute(propKey, propValue);
    }
  },
  setStyles: function setStyles(node, styles) {
    var tranformedStyles = {};

    for (var prop in styles) {
      var val = styles[prop];
      if (_flexbox2.default.isFlexProp(prop)) {
        _flexbox2.default[prop](val, tranformedStyles);
      } else {
        tranformedStyles[prop] = (0, _styleUnit.convertUnit)(val, prop);
      }
    }

    for (var _prop in tranformedStyles) {
      var transformValue = tranformedStyles[_prop];
      // hack handle compatibility issue
      if (Array.isArray(transformValue)) {
        for (var i = 0; i < transformValue.length; i++) {
          node.style[_prop] = transformValue[i];
        }
      } else {
        node.style[_prop] = transformValue;
      }
    }
  },
  beforeRender: function beforeRender() {
    // Init rem unit
    (0, _styleUnit.setRem)(this.getDeviceWidth() / this.getViewportWidth());
  },
  setNativeProps: function setNativeProps(node, props) {
    for (var prop in props) {
      var value = props[prop];
      if (prop === CHILDREN) {
        continue;
      }

      if (value != null) {
        if (prop === STYLE) {
          this.setStyles(node, value);
        } else if (EVENT_PREFIX_REGEXP.test(prop)) {
          var eventName = prop.slice(2).toLowerCase();
          this.addEventListener(node, eventName, value);
        } else {
          this.setAttribute(node, prop, value);
        }
      }
    }
  }
};

exports.default = Driver;
module.exports = exports['default'];

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var BOX_ALIGN = {
  stretch: 'stretch',
  'flex-start': 'start',
  'flex-end': 'end',
  center: 'center'
};

var BOX_ORIENT = {
  row: 'horizontal',
  column: 'vertical'
};

var BOX_PACK = {
  'flex-start': 'start',
  'flex-end': 'end',
  center: 'center',
  'space-between': 'justify',
  'space-around': 'justify' // Just same as `space-between`
};

var FLEX_PROPS = {
  display: true,
  flex: true,
  alignItems: true,
  alignSelf: true,
  flexDirection: true,
  justifyContent: true,
  flexWrap: true
};

var Flexbox = {
  isFlexProp: function isFlexProp(prop) {
    return FLEX_PROPS[prop];
  },
  display: function display(value) {
    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (value === 'flex') {
      style.display = ['-webkit-box', '-webkit-flex', 'flex'];
    } else {
      style.display = value;
    }

    return style;
  },
  flex: function flex(value) {
    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    style.webkitBoxFlex = value;
    style.webkitFlex = value;
    style.flex = value;
    return style;
  },
  flexWrap: function flexWrap(value) {
    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    style.webkitFlexWrap = value;
    style.flexWrap = value;
    return style;
  },
  alignItems: function alignItems(value) {
    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    style.webkitBoxAlign = BOX_ALIGN[value];
    style.webkitAlignItems = value;
    style.alignItems = value;
    return style;
  },
  alignSelf: function alignSelf(value) {
    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    style.webkitAlignSelf = value;
    style.alignSelf = value;
    return style;
  },
  flexDirection: function flexDirection(value) {
    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    style.webkitBoxOrient = BOX_ORIENT[value];
    style.webkitFlexDirection = value;
    style.flexDirection = value;
    return style;
  },
  justifyContent: function justifyContent(value) {
    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    style.webkitBoxPack = BOX_PACK[value];
    style.webkitJustifyContent = value;
    style.justifyContent = value;
    return style;
  }
};

exports.default = Flexbox;
module.exports = exports['default'];

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _render = __webpack_require__(32);

var _render2 = _interopRequireDefault(_render);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
}

function hydrate(element, container, options, callback) {
  // Handle server rendered element
  if (container.childNodes) {
    // Clone childNodes, Because removeChild will causing change in childNodes length
    var childNodes = [].concat(_toConsumableArray(container.childNodes));

    for (var i = 0; i < childNodes.length; i++) {
      var rootChildNode = childNodes[i];
      container.removeChild(rootChildNode);
    }
  }

  return (0, _render2.default)(element, container, options, callback);;
}

exports.default = hydrate;
module.exports = exports['default'];

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

exports.default = createPortal;

var _component = __webpack_require__(13);

var _component2 = _interopRequireDefault(_component);

var _render = __webpack_require__(32);

var _render2 = _interopRequireDefault(_render);

var _unmountComponentAtNode = __webpack_require__(30);

var _unmountComponentAtNode2 = _interopRequireDefault(_unmountComponentAtNode);

var _element = __webpack_require__(29);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Portal = function (_Component) {
  _inherits(Portal, _Component);

  function Portal(props, context) {
    _classCallCheck(this, Portal);

    return _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).call(this, props, context));
  }

  _createClass(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderPortal();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.container !== this.props.container) {
        (0, _unmountComponentAtNode2.default)(prevProps.container);
      }

      this.renderPortal();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      (0, _unmountComponentAtNode2.default)(this.props.container);
    }
  }, {
    key: 'renderPortal',
    value: function renderPortal() {
      (0, _render2.default)(this.props.element, this.props.container, {
        parent: this
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Portal;
}(_component2.default);

function createPortal(element, container) {
  return (0, _element.createElement)(Portal, {
    element: element,
    container: container
  });
}
module.exports = exports['default'];

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _instance = __webpack_require__(10);

var _instance2 = _interopRequireDefault(_instance);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function findComponentInstance(node) {
  if (node == null) {
    return null;
  }
  return _instance2.default.get(node);
}

exports.default = findComponentInstance;
module.exports = exports['default'];

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setNativeProps;

var _host = __webpack_require__(4);

var _host2 = _interopRequireDefault(_host);

var _findDOMNode = __webpack_require__(50);

var _findDOMNode2 = _interopRequireDefault(_findDOMNode);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function setNativeProps(node, props) {
  node = (0, _findDOMNode2.default)(node);
  _host2.default.driver.setNativeProps(node, props);
}
module.exports = exports['default'];

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = '0.5.4';
module.exports = exports['default'];

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flattenChildren = __webpack_require__(44);

var _flattenChildren2 = _interopRequireDefault(_flattenChildren);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function convertChildrenToArray(children) {
  // flatten children
  children = (0, _flattenChildren2.default)(children, []);
  return Array.isArray(children) ? children : [].concat(children);
}

var Children = {
  map: function map(children, fn, ctx) {
    if (children == null) return null;
    children = convertChildrenToArray(children);
    return children.map(function (child, index) {
      return fn.call(ctx, child, index);
    });
  },
  forEach: function forEach(children, fn, ctx) {
    if (children == null) return null;
    children = convertChildrenToArray(children);
    children.forEach(function (child, index) {
      return fn.call(ctx, child, index);
    });
  },
  count: function count(children) {
    if (children == null) return 0;
    return convertChildrenToArray(children).length;
  },
  only: function only(children) {
    // `only` receive rax element child
    // null value is not acceptable
    children = Children.toArray(children);
    if (children.length !== 1) throw new Error('Children.only: expected to receive a single element child.');
    return children[0];
  },
  toArray: function toArray(children) {
    if (children == null) return [];
    // `toArray` filter null value
    return convertChildrenToArray(children).filter(function (child) {
      return child !== null;
    });
  }
};

exports.default = Children;
module.exports = exports['default'];

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

exports.default = createContext;

var _component = __webpack_require__(13);

var _component2 = _interopRequireDefault(_component);

var _proptypes = __webpack_require__(45);

var _proptypes2 = _interopRequireDefault(_proptypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var ValueEmitter = function () {
  function ValueEmitter(defaultValue) {
    _classCallCheck(this, ValueEmitter);

    this.handlers = [];
    this.value = defaultValue;
  }

  _createClass(ValueEmitter, [{
    key: 'on',
    value: function on(handler) {
      this.handlers.push(handler);
    }
  }, {
    key: 'off',
    value: function off(handler) {
      this.handlers = this.handlers.filter(function (h) {
        return h !== handler;
      });
    }
  }, {
    key: 'emit',
    value: function emit(value) {
      this.value = value;
      this.handlers.forEach(function (handler) {
        return handler(value);
      });
    }
  }]);

  return ValueEmitter;
}();

var uniqueId = 0;

function createContext(defaultValue) {
  var contextProp = '__context_' + uniqueId++ + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Provider.__proto__ || Object.getPrototypeOf(Provider)).call.apply(_ref, [this].concat(args))), _this), _this.emitter = new ValueEmitter(defaultValue), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Provider, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return _defineProperty({}, contextProp, this.emitter);
      }
    }, {
      key: 'componentWillMount',
      value: function componentWillMount() {
        if (this.props.value !== undefined) {
          this.emitter.value = this.props.value;
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.value !== nextProps.value) {
          this.emitter.emit(nextProps.value);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return this.props.children;
      }
    }]);

    return Provider;
  }(_component2.default);

  Provider.childContextTypes = _defineProperty({}, contextProp, _proptypes2.default.object);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _ref3;

      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref3 = Consumer.__proto__ || Object.getPrototypeOf(Consumer)).call.apply(_ref3, [this].concat(args))), _this2), _this2.state = {
        value: _this2.context[contextProp] ? _this2.context[contextProp].value : defaultValue
      }, _this2.onUpdate = function (value) {
        return _this2.setState({ value: value });
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    _createClass(Consumer, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.context[contextProp]) {
          this.context[contextProp].on(this.onUpdate);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.context[contextProp]) {
          this.context[contextProp].off(this.onUpdate);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var children = this.props.children;
        var consumer = Array.isArray(children) ? children[0] : children;
        if (typeof consumer === 'function') {
          return consumer(this.state.value);
        }
      }
    }]);

    return Consumer;
  }(_component2.default);

  Consumer.contextTypes = _defineProperty({}, contextProp, _proptypes2.default.object);

  return {
    Provider: Provider,
    Consumer: Consumer
  };
}
module.exports = exports['default'];

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHistory = exports.NavigationActions = exports.PanView = exports.Link = exports.TabNavigator = exports.StackNavigator = undefined;

var _StackNavigator = __webpack_require__(109);

var _StackNavigator2 = _interopRequireDefault(_StackNavigator);

var _TabNavigator = __webpack_require__(137);

var _TabNavigator2 = _interopRequireDefault(_TabNavigator);

var _ALink = __webpack_require__(156);

var _ALink2 = _interopRequireDefault(_ALink);

var _PanView = __webpack_require__(66);

var _PanView2 = _interopRequireDefault(_PanView);

var _NavigationActions = __webpack_require__(157);

var _NavigationActions2 = _interopRequireDefault(_NavigationActions);

var _History = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.StackNavigator = _StackNavigator2.default;
exports.TabNavigator = _TabNavigator2.default;
exports.Link = _ALink2.default;
exports.PanView = _PanView2.default;
exports.NavigationActions = _NavigationActions2.default;
exports.createHistory = _History.createHistory;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _History = __webpack_require__(22);

var _Util = __webpack_require__(5);

var _Navigation = __webpack_require__(54);

var _StackViewContainer = __webpack_require__(127);

var _StackViewContainer2 = _interopRequireDefault(_StackViewContainer);

var _BaseNavigator2 = __webpack_require__(59);

var _BaseNavigator3 = _interopRequireDefault(_BaseNavigator2);

var _Constant = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StackNavigatorComponent = function (_BaseNavigator) {
  _inherits(StackNavigatorComponent, _BaseNavigator);

  function StackNavigatorComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StackNavigatorComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StackNavigatorComponent.__proto__ || Object.getPrototypeOf(StackNavigatorComponent)).call.apply(_ref, [this].concat(args))), _this), _this.navigatorType = _Constant.TYPE_NAVIGATOR_STACK, _this.updateScreen = function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var name = options.name,
          action = options.action,
          params = options.params;
      var _this$props = _this.props,
          routerConfig = _this$props.routerConfig,
          navigation = _this$props.navigation,
          history = _this$props.history;
      // navigation.state.routeName = name;
      // navigation.state.params = params;
      // navigation.state.key = history.location.key;

      if (action === 'POP') {
        _this.refs.viewContainer.pop();
      } else if (action === 'PUSH') {
        var route = (0, _Util.matchRouteByName)(routerConfig, name);
        route && _this.asyncGetScreenComponentFromRoute(route).then(function (screen) {
          screen && _this.refs.viewContainer.push({
            screen: screen,
            screenParams: params,
            navigation: navigation,
            routeName: route.name,
            routePath: route.path
          });
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StackNavigatorComponent, [{
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(_StackViewContainer2.default, _extends({}, this.props, { ref: 'viewContainer', history: this.history }));
    }
  }]);

  return StackNavigatorComponent;
}(_BaseNavigator3.default);

StackNavigatorComponent.defaultProps = {
  initialRouteName: null,
  initialRouteParams: {},
  navigationOptions: function navigationOptions(_ref2) {
    var navigation = _ref2.navigation;
    return {
      // Whether you can use gestures to dismiss this screen. Defaults to true on iOS, false on Android.
      gesturesEnabled: true,
      // Object to override the distance of touch start from the edge of the screen to recognize gestures
      gestureResponseDistance: {
        horizontal: 25,
        vertical: 135
      }
    };
  },
  headerMode: 'screen',
  onTransitionStart: _Util.noop,
  onTransitionEnd: _Util.noop,
  transitionConfig: {
    transitionProps: {},
    prevTransitionProps: {},
    isModal: true
  }
};


function StackNavigator(routerConfig) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$initialRoute = options.initialRouteName,
      initialRouteName = _options$initialRoute === undefined ? Object.keys(routerConfig)[0] : _options$initialRoute,
      _options$initialRoute2 = options.initialRouteParams,
      initialRouteParams = _options$initialRoute2 === undefined ? {} : _options$initialRoute2;


  var initialRoute = routerConfig[initialRouteName];

  var history = (0, _History.createHistory)({
    initialEntries: initialRoute && initialRoute.path ? [initialRoute.path] : ['/']
  });

  var subNavigation = new _Navigation.Navigation({
    routerConfig: routerConfig,
    navigatorType: _Constant.TYPE_NAVIGATOR_STACK,
    history: history,
    options: options,
    initialRouteName: initialRouteName,
    initialRouteParams: initialRouteParams
  });

  var navigation = (0, _Navigation.createNavigation)({
    routerConfig: routerConfig,
    navigatorType: _Constant.TYPE_NAVIGATOR_STACK,
    history: history,
    subNavigation: subNavigation,
    initialRouteName: initialRouteName,
    initialRouteParams: initialRouteParams
  });

  var StackNavigatorContainer = function (_Component) {
    _inherits(StackNavigatorContainer, _Component);

    function StackNavigatorContainer() {
      _classCallCheck(this, StackNavigatorContainer);

      return _possibleConstructorReturn(this, (StackNavigatorContainer.__proto__ || Object.getPrototypeOf(StackNavigatorContainer)).apply(this, arguments));
    }

    _createClass(StackNavigatorContainer, [{
      key: 'render',
      value: function render() {
        var props = _extends({
          routerConfig: routerConfig
        }, options, {
          navigation: navigation,
          subNavigation: subNavigation,
          history: history
        });

        return (0, _rax.createElement)(StackNavigatorComponent, _extends({}, this.props, props));
      }
    }]);

    return StackNavigatorContainer;
  }(_rax.Component);

  StackNavigatorContainer.routerConfig = routerConfig;
  StackNavigatorContainer.navigatorType = _Constant.TYPE_NAVIGATOR_STACK;
  StackNavigatorContainer.subNavigation = subNavigation;
  StackNavigatorContainer.initialRouteName = initialRouteName;
  StackNavigatorContainer.initialRouteParams = initialRouteParams;


  return StackNavigatorContainer;
}

exports.default = StackNavigator;
module.exports = exports['default'];

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPath = exports.parsePath = exports.locationsAreEqual = exports.createLocation = exports.createMemoryHistory = exports.createHashHistory = exports.createBrowserHistory = undefined;

var _LocationUtils = __webpack_require__(23);

Object.defineProperty(exports, 'createLocation', {
  enumerable: true,
  get: function get() {
    return _LocationUtils.createLocation;
  }
});
Object.defineProperty(exports, 'locationsAreEqual', {
  enumerable: true,
  get: function get() {
    return _LocationUtils.locationsAreEqual;
  }
});

var _PathUtils = __webpack_require__(15);

Object.defineProperty(exports, 'parsePath', {
  enumerable: true,
  get: function get() {
    return _PathUtils.parsePath;
  }
});
Object.defineProperty(exports, 'createPath', {
  enumerable: true,
  get: function get() {
    return _PathUtils.createPath;
  }
});

var _createBrowserHistory2 = __webpack_require__(113);

var _createBrowserHistory3 = _interopRequireDefault(_createBrowserHistory2);

var _createHashHistory2 = __webpack_require__(114);

var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);

var _createMemoryHistory2 = __webpack_require__(115);

var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createBrowserHistory = _createBrowserHistory3.default;
exports.createHashHistory = _createHashHistory3.default;
exports.createMemoryHistory = _createMemoryHistory3.default;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

exports.default = resolvePathname;
module.exports = exports['default'];

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

exports.default = valueEqual;
module.exports = exports["default"];

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _warning = __webpack_require__(24);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(51);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(23);

var _PathUtils = __webpack_require__(15);

var _createTransitionManager = __webpack_require__(34);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = (0, _DOMUtils.supportsHistory)();
  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;

    var path = pathname + search + hash;

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + (0, _PathUtils.createPath)(location);
  };

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createBrowserHistory;
module.exports = exports["default"];

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _warning = __webpack_require__(24);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(51);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(23);

var _PathUtils = __webpack_require__(15);

var _createTransitionManager = __webpack_require__(34);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + (0, _PathUtils.stripLeadingSlash)(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: _PathUtils.stripLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  },
  slash: {
    encodePath: _PathUtils.addLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Hash history needs a DOM');

  var globalHistory = window.history;
  var canGoWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && (0, _LocationUtils.locationsAreEqual)(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === (0, _PathUtils.createPath)(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [(0, _PathUtils.createPath)(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + (0, _PathUtils.createPath)(location));
  };

  var push = function push(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot push state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        (0, _warning2.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot replace state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf((0, _PathUtils.createPath)(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    (0, _warning2.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createHashHistory;
module.exports = exports['default'];

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _warning = __webpack_require__(24);

var _warning2 = _interopRequireDefault(_warning);

var _PathUtils = __webpack_require__(15);

var _LocationUtils = __webpack_require__(23);

var _createTransitionManager = __webpack_require__(34);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};

/**
 * Creates a history object that stores locations in memory.
 */
var createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? (0, _LocationUtils.createLocation)(entry, undefined, createKey()) : (0, _LocationUtils.createLocation)(entry, undefined, entry.key || createKey());
  });

  // Public interface

  var createHref = _PathUtils.createPath;

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;

      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      history.entries[history.index] = location;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

    var action = 'POP';
    var location = history.entries[nextIndex];

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createMemoryHistory;
module.exports = exports["default"];

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp;
module.exports.parse = parse;
module.exports.compile = compile;
module.exports.tokensToFunction = tokensToFunction;
module.exports.tokensToRegExp = tokensToRegExp;

/**
 * Default configs.
 */
var DEFAULT_DELIMITER = '/';
var DEFAULT_DELIMITERS = './';

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?"]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined]
'(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || DEFAULT_DELIMITER;
  var delimiters = options && options.delimiters || DEFAULT_DELIMITERS;
  var pathEscaped = false;
  var res;

  while ((res = PATH_REGEXP.exec(str)) !== null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      pathEscaped = true;
      continue;
    }

    var prev = '';
    var next = str[index];
    var name = res[2];
    var capture = res[3];
    var group = res[4];
    var modifier = res[5];

    if (!pathEscaped && path.length) {
      var k = path.length - 1;

      if (delimiters.indexOf(path[k]) > -1) {
        prev = path[k];
        path = path.slice(0, k);
      }
    }

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
      pathEscaped = false;
    }

    var partial = prev !== '' && next !== undefined && next !== prev;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = prev || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prev,
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      pattern: pattern ? escapeGroup(pattern) : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Push any remaining characters.
  if (path || index < str.length) {
    tokens.push(path + str.substr(index));
  }

  return tokens;
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options));
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (_typeof(tokens[i]) === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (data, options) {
    var path = '';
    var encode = options && options.encode || encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      var value = data ? data[token.name] : undefined;
      var segment;

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but got array');
        }

        if (value.length === 0) {
          if (token.optional) continue;

          throw new TypeError('Expected "' + token.name + '" to not be empty');
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j], token);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '"');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        segment = encode(String(value), token);

        if (!matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"');
        }

        path += token.prefix + segment;
        continue;
      }

      if (token.optional) {
        // Prepend partial segment prefixes.
        if (token.partial) path += token.prefix;

        continue;
      }

      throw new TypeError('Expected "' + token.name + '" to be ' + (token.repeat ? 'an array' : 'a string'));
    }

    return path;
  };
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {Array=}  keys
 * @return {!RegExp}
 */
function regexpToRegexp(path, keys) {
  if (!keys) return path;

  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        pattern: null
      });
    }
  }

  return path;
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function arrayToRegexp(path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  return new RegExp('(?:' + parts.join('|') + ')', flags(options));
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function stringToRegexp(path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options);
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}  tokens
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function tokensToRegExp(tokens, keys, options) {
  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var delimiter = escapeString(options.delimiter || DEFAULT_DELIMITER);
  var delimiters = options.delimiters || DEFAULT_DELIMITERS;
  var endsWith = [].concat(options.endsWith || []).map(escapeString).concat('$').join('|');
  var route = '';
  var isEndDelimited = false;

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
      isEndDelimited = i === tokens.length - 1 && delimiters.indexOf(token[token.length - 1]) > -1;
    } else {
      var prefix = escapeString(token.prefix);
      var capture = token.repeat ? '(?:' + token.pattern + ')(?:' + prefix + '(?:' + token.pattern + '))*' : token.pattern;

      if (keys) keys.push(token);

      if (token.optional) {
        if (token.partial) {
          route += prefix + '(' + capture + ')?';
        } else {
          route += '(?:' + prefix + '(' + capture + '))?';
        }
      } else {
        route += prefix + '(' + capture + ')';
      }
    }
  }

  if (end) {
    if (!strict) route += '(?:' + delimiter + ')?';

    route += endsWith === '$' ? '$' : '(?=' + endsWith + ')';
  } else {
    if (!strict) route += '(?:' + delimiter + '(?=' + endsWith + '))?';
    if (!isEndDelimited) route += '(?=' + delimiter + '|' + endsWith + ')';
  }

  return new RegExp('^' + route, flags(options));
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {Array=}                keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys);
  }

  if (Array.isArray(path)) {
    return arrayToRegexp( /** @type {!Array} */path, keys, options);
  }

  return stringToRegexp( /** @type {string} */path, keys, options);
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var punycode = __webpack_require__(118);
var util = {
  isString: function isString(arg) {
    return typeof arg === 'string';
  },
  isObject: function isObject(arg) {
    return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
  },
  isNull: function isNull(arg) {
    return arg === null;
  },
  isNullOrUndefined: function isNullOrUndefined(arg) {
    return arg == null;
  }
};

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,


// Special case for a simple path URL
simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,


// RFC 2396: characters reserved for delimiting URLs.
// We actually just auto-escape these.
delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],


// RFC 2396: characters not allowed for various reasons.
unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),


// Allowed by RFCs, but cause of XSS attacks.  Always escape these.
autoEscape = ['\''].concat(unwise),

// Characters that are never ever allowed in a hostname.
// Note that any invalid chars are also handled, but these
// are the ones that are *expected* to be seen, so we fast-path
// them.
nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,

// protocols that can allow "unsafe" and "unwise" chars.
unsafeProtocol = {
  'javascript': true,
  'javascript:': true
},

// protocols that never have a hostname.
hostlessProtocol = {
  'javascript': true,
  'javascript:': true
},

// protocols that always contain a // bit.
slashedProtocol = {
  'http': true,
  'https': true,
  'ftp': true,
  'gopher': true,
  'file': true,
  'http:': true,
  'https:': true,
  'ftp:': true,
  'gopher:': true,
  'file:': true
},
    querystring = __webpack_require__(119);

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url();
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function (url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + (typeof url === 'undefined' ? 'undefined' : _typeof(url)));
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter = queryIndex !== -1 && queryIndex < url.indexOf('#') ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1) hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' && this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1) continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }

  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  // to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function () {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ? this.hostname : '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query && util.isObject(this.query) && Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || query && '?' + query || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function (match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function (relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function (relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol') result[rkey] = relative[rkey];
    }

    // urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift())) {}
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = result.pathname && result.pathname.charAt(0) === '/',
      isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === '/',
      mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname,
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = relative.host || relative.host === '' ? relative.host : result.host;
    result.hostname = relative.hostname || relative.hostname === '' ? relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      // occationaly the auth can get stuck only in host
      // this especially happens in cases like
      // url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    // to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    // to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === '.' || last === '..') || last === '';

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' && (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && srcPath.join('/').substr(-1) !== '/') {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' || srcPath[0] && srcPath[0].charAt(0) === '/';

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' : srcPath.length ? srcPath.shift() : '';
    // occationaly the auth can get stuck only in host
    // this especially happens in cases like
    // url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || result.host && srcPath.length;

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  // to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function () {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! https://mths.be/punycode v1.3.2 by @mathias */
;(function (root) {

  /** Detect free variables */
  var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
  var freeModule = ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;
  var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global;
  if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
    root = freeGlobal;
  }

  /**
   * The `punycode` object.
   * @name punycode
   * @type Object
   */
  var punycode,


  /** Highest positive signed 32-bit float value */
  maxInt = 2147483647,
      // aka. 0x7FFFFFFF or 2^31-1

  /** Bootstring parameters */
  base = 36,
      tMin = 1,
      tMax = 26,
      skew = 38,
      damp = 700,
      initialBias = 72,
      initialN = 128,
      // 0x80
  delimiter = '-',
      // '\x2D'

  /** Regular expressions */
  regexPunycode = /^xn--/,
      regexNonASCII = /[^\x20-\x7E]/,
      // unprintable ASCII chars + non-ASCII chars
  regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g,
      // RFC 3490 separators

  /** Error messages */
  errors = {
    'overflow': 'Overflow: input needs wider integers to process',
    'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
    'invalid-input': 'Invalid input'
  },


  /** Convenience shortcuts */
  baseMinusTMin = base - tMin,
      floor = Math.floor,
      stringFromCharCode = String.fromCharCode,


  /** Temporary variable */
  key;

  /* -------------------------------------------------------------------------- */

  /**
   * A generic error utility function.
   * @private
   * @param {String} type The error type.
   * @returns {Error} Throws a `RangeError` with the applicable error message.
   */
  function error(type) {
    throw RangeError(errors[type]); // eslint-disable-line
  }

  /**
   * A generic `Array#map` utility function.
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} callback The function that gets called for every array
   * item.
   * @returns {Array} A new array of values returned by the callback function.
   */
  function map(array, fn) {
    var length = array.length;
    var result = [];
    while (length--) {
      result[length] = fn(array[length]);
    }
    return result;
  }

  /**
   * A simple `Array#map`-like wrapper to work with domain name strings or email
   * addresses.
   * @private
   * @param {String} domain The domain name or email address.
   * @param {Function} callback The function that gets called for every
   * character.
   * @returns {Array} A new string of characters returned by the callback
   * function.
   */
  function mapDomain(string, fn) {
    var parts = string.split('@');
    var result = '';
    if (parts.length > 1) {
      // In email addresses, only the domain name should be punycoded. Leave
      // the local part (i.e. everything up to `@`) intact.
      result = parts[0] + '@';
      string = parts[1];
    }
    // Avoid `split(regex)` for IE8 compatibility. See #17.
    string = string.replace(regexSeparators, '\x2E');
    var labels = string.split('.');
    var encoded = map(labels, fn).join('.');
    return result + encoded;
  }

  /**
   * Creates an array containing the numeric code points of each Unicode
   * character in the string. While JavaScript uses UCS-2 internally,
   * this function will convert a pair of surrogate halves (each of which
   * UCS-2 exposes as separate characters) into a single code point,
   * matching UTF-16.
   * @see `punycode.ucs2.encode`
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode.ucs2
   * @name decode
   * @param {String} string The Unicode input string (UCS-2).
   * @returns {Array} The new array of code points.
   */
  function ucs2decode(string) {
    var output = [],
        counter = 0,
        length = string.length,
        value,
        extra;
    while (counter < length) {
      value = string.charCodeAt(counter++);
      if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
        // high surrogate, and there is a next character
        extra = string.charCodeAt(counter++);
        if ((extra & 0xFC00) == 0xDC00) {
          // low surrogate
          output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
        } else {
          // unmatched surrogate; only append this code unit, in case the next
          // code unit is the high surrogate of a surrogate pair
          output.push(value);
          counter--;
        }
      } else {
        output.push(value);
      }
    }
    return output;
  }

  /**
   * Creates a string based on an array of numeric code points.
   * @see `punycode.ucs2.decode`
   * @memberOf punycode.ucs2
   * @name encode
   * @param {Array} codePoints The array of numeric code points.
   * @returns {String} The new Unicode string (UCS-2).
   */
  function ucs2encode(array) {
    return map(array, function (value) {
      var output = '';
      if (value > 0xFFFF) {
        value -= 0x10000;
        output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
        value = 0xDC00 | value & 0x3FF;
      }
      output += stringFromCharCode(value);
      return output;
    }).join('');
  }

  /**
   * Converts a basic code point into a digit/integer.
   * @see `digitToBasic()`
   * @private
   * @param {Number} codePoint The basic numeric code point value.
   * @returns {Number} The numeric value of a basic code point (for use in
   * representing integers) in the range `0` to `base - 1`, or `base` if
   * the code point does not represent a value.
   */
  function basicToDigit(codePoint) {
    if (codePoint - 48 < 10) {
      return codePoint - 22;
    }
    if (codePoint - 65 < 26) {
      return codePoint - 65;
    }
    if (codePoint - 97 < 26) {
      return codePoint - 97;
    }
    return base;
  }

  /**
   * Converts a digit/integer into a basic code point.
   * @see `basicToDigit()`
   * @private
   * @param {Number} digit The numeric value of a basic code point.
   * @returns {Number} The basic code point whose value (when used for
   * representing integers) is `digit`, which needs to be in the range
   * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
   * used; else, the lowercase form is used. The behavior is undefined
   * if `flag` is non-zero and `digit` has no uppercase form.
   */
  function digitToBasic(digit, flag) {
    //  0..25 map to ASCII a..z or A..Z
    // 26..35 map to ASCII 0..9
    return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
  }

  /**
   * Bias adaptation function as per section 3.4 of RFC 3492.
   * http://tools.ietf.org/html/rfc3492#section-3.4
   * @private
   */
  function adapt(delta, numPoints, firstTime) {
    var k = 0;
    delta = firstTime ? floor(delta / damp) : delta >> 1;
    delta += floor(delta / numPoints);
    for (; /* no initialization */delta > baseMinusTMin * tMax >> 1; k += base) {
      delta = floor(delta / baseMinusTMin);
    }
    return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
  }

  /**
   * Converts a Punycode string of ASCII-only symbols to a string of Unicode
   * symbols.
   * @memberOf punycode
   * @param {String} input The Punycode string of ASCII-only symbols.
   * @returns {String} The resulting string of Unicode symbols.
   */
  function decode(input) {
    // Don't use UCS-2
    var output = [],
        inputLength = input.length,
        out,
        i = 0,
        n = initialN,
        bias = initialBias,
        basic,
        j,
        index,
        oldi,
        w,
        k,
        digit,
        t,

    /** Cached calculation results */
    baseMinusT;

    // Handle the basic code points: let `basic` be the number of input code
    // points before the last delimiter, or `0` if there is none, then copy
    // the first basic code points to the output.

    basic = input.lastIndexOf(delimiter);
    if (basic < 0) {
      basic = 0;
    }

    for (j = 0; j < basic; ++j) {
      // if it's not a basic code point
      if (input.charCodeAt(j) >= 0x80) {
        error('not-basic');
      }
      output.push(input.charCodeAt(j));
    }

    // Main decoding loop: start just after the last delimiter if any basic code
    // points were copied; start at the beginning otherwise.

    for (index = basic > 0 ? basic + 1 : 0; index < inputLength;) /* no final expression */{

      // `index` is the index of the next character to be consumed.
      // Decode a generalized variable-length integer into `delta`,
      // which gets added to `i`. The overflow checking is easier
      // if we increase `i` as we go, then subtract off its starting
      // value at the end to obtain `delta`.
      for (oldi = i, w = 1, k = base;; /* no condition */k += base) {

        if (index >= inputLength) {
          error('invalid-input');
        }

        digit = basicToDigit(input.charCodeAt(index++));

        if (digit >= base || digit > floor((maxInt - i) / w)) {
          error('overflow');
        }

        i += digit * w;
        t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

        if (digit < t) {
          break;
        }

        baseMinusT = base - t;
        if (w > floor(maxInt / baseMinusT)) {
          error('overflow');
        }

        w *= baseMinusT;
      }

      out = output.length + 1;
      bias = adapt(i - oldi, out, oldi == 0);

      // `i` was supposed to wrap around from `out` to `0`,
      // incrementing `n` each time, so we'll fix that now:
      if (floor(i / out) > maxInt - n) {
        error('overflow');
      }

      n += floor(i / out);
      i %= out;

      // Insert `n` at position `i` of the output
      output.splice(i++, 0, n);
    }

    return ucs2encode(output);
  }

  /**
   * Converts a string of Unicode symbols (e.g. a domain name label) to a
   * Punycode string of ASCII-only symbols.
   * @memberOf punycode
   * @param {String} input The string of Unicode symbols.
   * @returns {String} The resulting Punycode string of ASCII-only symbols.
   */
  function encode(input) {
    var n,
        delta,
        handledCPCount,
        basicLength,
        bias,
        j,
        m,
        q,
        k,
        t,
        currentValue,
        output = [],

    /** `inputLength` will hold the number of code points in `input`. */
    inputLength,

    /** Cached calculation results */
    handledCPCountPlusOne,
        baseMinusT,
        qMinusT;

    // Convert the input in UCS-2 to Unicode
    input = ucs2decode(input);

    // Cache the length
    inputLength = input.length;

    // Initialize the state
    n = initialN;
    delta = 0;
    bias = initialBias;

    // Handle the basic code points
    for (j = 0; j < inputLength; ++j) {
      currentValue = input[j];
      if (currentValue < 0x80) {
        output.push(stringFromCharCode(currentValue));
      }
    }

    handledCPCount = basicLength = output.length;

    // `handledCPCount` is the number of code points that have been handled;
    // `basicLength` is the number of basic code points.

    // Finish the basic string - if it is not empty - with a delimiter
    if (basicLength) {
      output.push(delimiter);
    }

    // Main encoding loop:
    while (handledCPCount < inputLength) {

      // All non-basic code points < n have been handled already. Find the next
      // larger one:
      for (m = maxInt, j = 0; j < inputLength; ++j) {
        currentValue = input[j];
        if (currentValue >= n && currentValue < m) {
          m = currentValue;
        }
      }

      // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
      // but guard against overflow
      handledCPCountPlusOne = handledCPCount + 1;
      if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
        error('overflow');
      }

      delta += (m - n) * handledCPCountPlusOne;
      n = m;

      for (j = 0; j < inputLength; ++j) {
        currentValue = input[j];

        if (currentValue < n && ++delta > maxInt) {
          error('overflow');
        }

        if (currentValue == n) {
          // Represent delta as a generalized variable-length integer
          for (q = delta, k = base;; /* no condition */k += base) {
            t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
            if (q < t) {
              break;
            }
            qMinusT = q - t;
            baseMinusT = base - t;
            output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
            q = floor(qMinusT / baseMinusT);
          }

          output.push(stringFromCharCode(digitToBasic(q, 0)));
          bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
          delta = 0;
          ++handledCPCount;
        }
      }

      ++delta;
      ++n;
    }
    return output.join('');
  }

  /**
   * Converts a Punycode string representing a domain name or an email address
   * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
   * it doesn't matter if you call it on a string that has already been
   * converted to Unicode.
   * @memberOf punycode
   * @param {String} input The Punycoded domain name or email address to
   * convert to Unicode.
   * @returns {String} The Unicode representation of the given Punycode
   * string.
   */
  function toUnicode(input) {
    return mapDomain(input, function (string) {
      return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
    });
  }

  /**
   * Converts a Unicode string representing a domain name or an email address to
   * Punycode. Only the non-ASCII parts of the domain name will be converted,
   * i.e. it doesn't matter if you call it with a domain that's already in
   * ASCII.
   * @memberOf punycode
   * @param {String} input The domain name or email address to convert, as a
   * Unicode string.
   * @returns {String} The Punycode representation of the given domain name or
   * email address.
   */
  function toASCII(input) {
    return mapDomain(input, function (string) {
      return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
    });
  }

  /* -------------------------------------------------------------------------- */

  /** Define the public API */
  punycode = {
    /**
     * A string representing the current Punycode.js version number.
     * @memberOf punycode
     * @type String
     */
    'version': '1.3.2',
    /**
     * An object of methods to convert from JavaScript's internal character
     * representation (UCS-2) to Unicode code points, and back.
     * @see <https://mathiasbynens.be/notes/javascript-encoding>
     * @memberOf punycode
     * @type Object
     */
    'ucs2': {
      'decode': ucs2decode,
      'encode': ucs2encode
    },
    'decode': decode,
    'encode': encode,
    'toASCII': toASCII,
    'toUnicode': toUnicode
  };

  /** Expose `punycode` */
  // Some AMD build optimizers, like r.js, check for specific condition patterns
  // like the following:
  if ("function" == 'function' && _typeof(__webpack_require__(53)) == 'object' && __webpack_require__(53)) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return punycode;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (freeExports && freeModule) {
    if (module.exports == freeExports) {
      // in Node.js or RingoJS v0.8.0+
      freeModule.exports = punycode;
    } else {
      // in Narwhal or RingoJS v0.7.0-
      for (key in punycode) {
        punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
      }
    }
  } else {
    // in Rhino or a web browser
    root.punycode = punycode;
  }
})(undefined);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)(module), __webpack_require__(16)))

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var decode = function decode(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr,
        vstr,
        k,
        v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (Array.isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var stringifyPrimitive = function stringifyPrimitive(v) {
  switch (typeof v === 'undefined' ? 'undefined' : _typeof(v)) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

var encode = function encode(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
    return Object.keys(obj).map(function (k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (Array.isArray(obj[k])) {
        return obj[k].map(function (v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);
  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
};

exports.decode = exports.parse = decode;
exports.encode = exports.stringify = encode;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function findIndex(o, condition) {
  return o.indexOf(find(o, condition));
}

function dropWhile(o, condition) {
  var result = [];
  map(o, function (v, k) {
    if (!condition(v, k)) {
      result.push(v);
    }
  });
  return result;
}

function filter(o, condition) {
  var result = [];
  forEach(o, function (v, k) {
    if (condition(v, k)) {
      result.push(v);
    }
  });
  return result;
}

function map(o, fn) {
  if (o instanceof Array) {
    return Array.prototype.map.call(o, fn);
  } else {
    var result = [];
    forEach(o, function (v, k) {
      result.push(fn(v, k));
    });
    return result;
  }
}

/*
 forEach({a: 1, b: 2}, (v, k) => {
 console.log({
 v, k
 })
 })

 forEach([1,2,3],(v,k)=>{
 console.log({
 v,k
 })
 })
 */

function forEach(o, fn) {
  if (o instanceof Array) {
    return Array.prototype.forEach.call(o, fn);
  }
  Object.keys(o).forEach(function (key) {
    fn(o[key], key);
  });
}

/* console.log(
 find([{name: 1}, {name: 2}], (o) => {
 return o.name === 2;
 }))

 console.log(find([{name: 1,age:2}, {name: 2}], {name:1}))
 */
function find(o, condition) {
  var result = null;
  forEach(o, function (v, k) {
    if (typeof condition === 'function') {
      if (condition(v, k)) {
        result = v;
      }
    } else {
      var propName = Object.keys(condition)[0];
      if (propName && v[propName] === condition[propName]) {
        result = v;
      }
    }
  });
  return result;
}

module.exports = {
  find: find,
  forEach: forEach,
  map: map,
  filter: filter,
  dropWhile: dropWhile,
  findIndex: findIndex
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(122);

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _universalEnv = __webpack_require__(123);

// TODO: should be custom setting

var iphonexhelper = {
  isIphoneX: false,
  statusBarHeight: 0,
  navBarHeight: 0,
  bottomBarHeight: 0
};
var env = (typeof WXEnvironment === 'undefined' ? 'undefined' : _typeof(WXEnvironment)) === 'object' ? WXEnvironment : {};

var isIOS = env && env.platform == 'iOS';
if (isIOS && env && env.deviceHeight == 2436) {
  iphonexhelper.isIphoneX = true;
} else if (_universalEnv.isWeb) {
  var isIphoneX = false;
  isIphoneX = window && window.screen && window.screen.width && window.screen.height && parseInt(window.screen.width, 10) == 375 && parseInt(window.screen.height, 10) == 812;
  if (isIphoneX) {
    iphonexhelper.isIphoneX = true;
    iphonexhelper.bottomBarHeight = 68;
  }
}

if (!_universalEnv.isWeex) {
  iphonexhelper.navBarHeight = 0;
  iphonexhelper.statusBarHeight = 0;
} else {
  if (!isIOS) {
    // android下weex的导航栏区域
    iphonexhelper.navBarHeight = 96;
    iphonexhelper.statusBarHeight = 0;
  } else {
    try {
      // 正常ios下weex导航栏区域
      iphonexhelper.navBarHeight = 44 * env.scale * 750 / env.deviceWidth;
      iphonexhelper.statusBarHeight = 20 * env.scale * 750 / env.deviceWidth;
      // iphoneX下的导航栏区域
      if (WXEnvironment.deviceHeight == 2436) {
        iphonexhelper.statusBarHeight = 44 * env.scale * 750 / env.deviceWidth;
        iphonexhelper.bottomBarHeight = 34 * env.scale * 750 / env.deviceWidth;
      }
    } catch (e) {
      console.log(e);
    }
  }
}

exports.default = iphonexhelper;
module.exports = exports['default'];

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(124);

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _universalEnv = __webpack_require__(1);

Object.keys(_universalEnv).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _universalEnv[key];
    }
  });
});

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixinEmitter = mixinEmitter;
/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter() {};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixinEmitter(clazz) {
  for (var key in Emitter.prototype) {
    clazz.prototype[key] = Emitter.prototype[key];
  }
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function (event, fn) {
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function (event) {
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1),
      callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function (event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function (event) {
  return !!this.listeners(event).length;
};

var newEmitter = new Emitter();

exports.default = {
  on: newEmitter.on,
  emit: newEmitter.emit,
  off: newEmitter.off
};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _universalEnv = __webpack_require__(1);

var _objectAssign = __webpack_require__(11);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Detection = {};

if (_universalEnv.isWeex) {
  var deviceInfo = typeof WXEnvironment !== 'undefined' ? WXEnvironment : {}; // eslint-disable-line
  Detection = (0, _objectAssign2.default)(Detection, {
    Android: deviceInfo.platform === 'android',
    iOS: deviceInfo.platform === 'iOS',
    appVersion: deviceInfo.appVersion,
    weexVersion: deviceInfo.weexVersion,
    osVersion: deviceInfo.osVersion
  });
} else {
  var ua = window.navigator.userAgent;
  Detection = (0, _objectAssign2.default)(Detection, {
    Android: /Android/ig.test(ua),
    iOS: /iPhone|iPad|iPod/ig.test(ua)
  });
}

exports.default = Detection;
module.exports = exports['default'];

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _universalEmitter = __webpack_require__(12);

var _universalEmitter2 = _interopRequireDefault(_universalEmitter);

var _universalBinding = __webpack_require__(37);

var _universalBinding2 = _interopRequireDefault(_universalBinding);

var _objectAssign = __webpack_require__(11);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _Constant = __webpack_require__(6);

var _Util = __webpack_require__(5);

var _BaseViewContainer2 = __webpack_require__(55);

var _BaseViewContainer3 = _interopRequireDefault(_BaseViewContainer2);

var _StackHeader = __webpack_require__(38);

var _StackHeader2 = _interopRequireDefault(_StackHeader);

var _StackHeaderContainer = __webpack_require__(135);

var _StackHeaderContainer2 = _interopRequireDefault(_StackHeaderContainer);

var _EdgePanView = __webpack_require__(136);

var _EdgePanView2 = _interopRequireDefault(_EdgePanView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_DURATION = 350;
var FULL_WIDTH = 750;
var DEFAULT_EASING = 'ease-out';
var PREV_VIEW_RATIO = 300 / FULL_WIDTH;

// class Position {
//
//   inputRange = [];
//
//   outputRange = [];
//
//
//   constructor() {
//
//   }
//
//   interpolate(params = {inputRange: [], outputRange: []}) {
//     let {inputRange, outputRange} = params;
//
//     this.inputRange = inputRange;
//     this.outputRange = outputRange;
//
//     return this;
//
//   }
// }


var StackViewContainer = function (_BaseViewContainer) {
  _inherits(StackViewContainer, _BaseViewContainer);

  function StackViewContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StackViewContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StackViewContainer.__proto__ || Object.getPrototypeOf(StackViewContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      views: [],
      isSingle: false,
      type: 'push',
      navigationOptionsArray: []
    }, _this.extraBindingProps = [], _this.bindCellPan = function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _this.bindPan(e.element);
    }, _this.getStackHeaderBindingProps = function () {
      return _this.refs.stackHeader && _this.refs.stackHeader.getBindingProps();
    }, _this.onEdgeHorizontalPan = function (e) {
      if (e.state === 'start') {
        _this.bindPan(_this.refs.currentPanView);
      }
    }, _this.slideIn = function (options) {
      options = (0, _objectAssign2.default)({ duration: DEFAULT_DURATION, timingFunction: DEFAULT_EASING, callback: _Util.noop }, options);
      var _options = options,
          duration = _options.duration,
          timingFunction = _options.timingFunction,
          callback = _options.callback;
      var _this$props = _this.props,
          onTransitionStart = _this$props.onTransitionStart,
          onTransitionEnd = _this$props.onTransitionEnd,
          navigation = _this$props.navigation;

      var animationConfig = {
        timingFunction: timingFunction,
        duration: duration
      };

      (0, _Util.animate)(_this.refs.prevView, { transform: 'translate(-' + PREV_VIEW_RATIO * FULL_WIDTH + 'rem,0)' }, animationConfig);

      (0, _Util.animate)(_this.refs.mask, { opacity: 0.25 }, animationConfig);

      var index = _this.state.views.length - 1;
      onTransitionStart({ navigation: navigation, index: index });
      (0, _Util.animate)(_this.refs.currentView, { transform: 'translate(0,0)' }, animationConfig, function (e) {
        callback && callback(e);
        onTransitionEnd({ navigation: navigation, index: index });
      });

      _this.refs.stackHeader && _this.refs.stackHeader.slideIn(options);
    }, _this.slideOut = function (options) {
      options = (0, _objectAssign2.default)({ duration: DEFAULT_DURATION, timingFunction: DEFAULT_EASING, callback: _Util.noop }, options);
      var _options2 = options,
          duration = _options2.duration,
          timingFunction = _options2.timingFunction,
          callback = _options2.callback;
      var _this$props2 = _this.props,
          onTransitionStart = _this$props2.onTransitionStart,
          onTransitionEnd = _this$props2.onTransitionEnd,
          navigation = _this$props2.navigation;

      var animationConfig = {
        timingFunction: timingFunction,
        duration: duration
      };

      (0, _Util.animate)(_this.refs.prevView, { transform: 'translate(0,0)' }, animationConfig);

      (0, _Util.animate)(_this.refs.mask, { opacity: 0 }, animationConfig);

      var index = _this.state.views.length - 2;
      onTransitionStart({ navigation: navigation, index: index });
      (0, _Util.animate)(_this.refs.currentView, { transform: 'translate(' + FULL_WIDTH + 'rem,0)' }, animationConfig, function (e) {
        callback && callback(e);
        onTransitionEnd({ navigation: navigation, index: index });
      });

      _this.refs.stackHeader && _this.refs.stackHeader.slideOut(options);
    }, _this.push = function (params) {
      var views = _this.state.views;
      var type = 'push';
      if (params) {
        views.push(params);
      }
      _this.setState({
        views: views,
        type: type,
        navigationOptionsArray: _this.resolveNavigationOptionsArray(),
        isSingle: views.length === 1 ? true : false
      });
      setTimeout(function () {
        _this.slideIn({
          callback: function callback() {
            _this.setState({
              isSingle: views.length === 1 ? true : false,
              type: type,
              navigationOptionsArray: _this.resolveNavigationOptionsArray()
            });
          }
        });
      }, 50);
    }, _this.pop = function () {
      var views = _this.state.views;
      var type = 'pop';
      // last view can't be closed
      if (views.length === 1) {
        _this.setState({
          views: views,
          isSingle: true,
          type: type,
          navigationOptionsArray: _this.resolveNavigationOptionsArray()
        });
        return;
      }
      setTimeout(function () {
        _this.slideOut({
          callback: function callback() {
            var views = _this.state.views;
            views.pop();
            _this.setState({
              views: views,
              isSingle: views.length === 1,
              type: type,
              navigationOptionsArray: _this.resolveNavigationOptionsArray()
            });
          }
        });
      }, 50);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StackViewContainer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (_Util.Detection.Android) {
        _universalEmitter2.default.on(_Constant.EVENT_CELL_PAN_START, this.bindCellPan);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      (0, _Util.forbidSwipeBack)(true);

      // setTimeout(() => {
      // this.getExtraBindingProps();
      // this.bindPan(this.refs.currentView);
      // }, 0);
    }

    // getExtraBindingProps = () => {
    //   this.extraBindingProps = this.transformInterpolateToBindingProps();
    //   return this.extraBindingProps;
    // }

  }, {
    key: 'bindPan',
    value: function bindPan(anchor) {
      var _this2 = this;

      if (!_universalBinding2.default.isSupportBinding) return;
      var views = this.state.views;
      if (views.length > 1) {
        this.startTime = Date.now();
        var result = _universalBinding2.default.bind({
          anchor: anchor,
          eventType: 'pan',
          options: {
            touchAction: 'pan-x'
          },
          props: [{
            element: this.refs.currentView,
            property: 'transform.translateX',
            expression: {
              origin: 'max(0,x)'
            }
          }, {
            element: this.refs.prevView,
            property: 'transform.translateX',
            expression: {
              origin: 'x*' + PREV_VIEW_RATIO + '-' + PREV_VIEW_RATIO * FULL_WIDTH
            }
          }, {
            element: this.refs.mask,
            property: 'opacity',
            expression: {
              origin: 'min(1,max(0,1-x/' + FULL_WIDTH + '))*0.25'
            }
          }].concat(_toConsumableArray(this.getStackHeaderBindingProps() || []))
        }, function (e) {
          if (e && e.state === 'end') {
            var duration = Date.now() - _this2.startTime;
            var dist = e.deltaX;
            if (_this2._bindingToken) {
              _universalBinding2.default.unbind({
                token: _this2._bindingToken,
                eventType: 'pan',
                anchor: anchor
              });
            }
            if (dist > 0) {
              if (dist > FULL_WIDTH / 2 || Math.abs(dist) / duration > 0.5 && duration < 200) {
                _this2.props.navigation.goBack();
              } else {
                _this2.slideIn();
              }
            }
          }
        });

        this._bindingToken = result && result.token;
      }
    }

    // 边缘侧滑

  }, {
    key: 'resolveNavigationOptionsArray',


    // transformInterpolateToBindingProps = () => {
    //   let screenInterpolator = this.resolveScreenInterpolator();
    //   let bindingProps = [];
    //   if (screenInterpolator && screenInterpolator.transform) {
    //     screenInterpolator.transform.forEach((v) => {
    //       let propertyName = Object.keys(v)[0];
    //       let propertyValue = v[propertyName];
    //       // console.log(propertyValue)
    //       bindingProps.push({
    //         element: this.refs.currentView,
    //         property: `transform.${propertyName}`,
    //         expression: {
    //           origin: 'max(0,x/750)'
    //         }
    //       });
    //     });
    //   }
    //
    //
    //   return [{
    //     element: this.refs.currentView,
    //     property: 'transform.translateY',
    //     expression: {
    //       origin: 'max(0,x)'
    //     }
    //   }];
    //
    // }

    // resolveScreenInterpolator = () => {
    //   let {transitionConfig} = this.props;
    //   let {screenInterpolator = noop} = resolveFn(transitionConfig);
    //   const viewsCount = this.state.views.length;
    //
    //   return screenInterpolator({
    //     layout: {
    //       initHeight: window.screen.height
    //     },
    //     position: new Position(),
    //     scene: {
    //       index: clamp(viewsCount - 1, 0, viewsCount)
    //     }
    //   });
    // }

    value: function resolveNavigationOptionsArray() {
      var _this3 = this;

      var navigationOptionsArray = [];
      if (this.state.views) {
        this.state.views.map(function (view) {
          var navigationOptions = _this3.resolveNavigationOptions(view);
          navigationOptionsArray.push(navigationOptions);
        });
      }
      return navigationOptionsArray;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          _props$headerMode = _props.headerMode,
          headerMode = _props$headerMode === undefined ? 'screen' : _props$headerMode,
          _props$cardStyle = _props.cardStyle,
          cardStyle = _props$cardStyle === undefined ? {} : _props$cardStyle;
      var _state = this.state,
          isSingle = _state.isSingle,
          type = _state.type;

      var l = this.state.views.length;
      var navigationOptionsArray = this.state.navigationOptionsArray;

      return (0, _rax.createElement)(
        _raxView2.default,
        { ref: 'stackContainer', style: [styles.container, _extends({}, this.props.style)] },
        this.state.views.map(function (view, i) {
          var isCurrent = i === l - 1;
          var isPrevView = i === l - 2;
          var prevView = _this4.state.views[i - 1];
          var navigationOptions = navigationOptionsArray[i];
          var _navigationOptions$he = navigationOptions.headerStyle,
              headerStyle = _navigationOptions$he === undefined ? {} : _navigationOptions$he,
              header = navigationOptions.header;

          var isNav = (0, _Util.isNavigator)(view.screen);
          var top = isNav ? 0 : (headerStyle.height || _Constant.HEIGHT_STACK_HEADER_DEFAULT) + _Util.statusBarHeight;
          if (header !== undefined) {
            if (header && header.props && header.props.style && header.props.style.height !== undefined) {
              top = header.props.style.height + (header.props.style.top || _Util.statusBarHeight);
            } else {
              top = 0; // header === null
            }
          } else if (headerMode === 'none') {
            top = 0;
          }
          var viewStyle = styles.screenContainer;
          if (isSingle) {
            viewStyle = styles.screenContainer;
          } else {
            if (type === 'push') {
              viewStyle = isCurrent ? _extends({}, styles.screenContainer, styles.current) : styles.screenContainer;
            } else if (type === 'pop') {
              viewStyle = isCurrent ? styles.screenContainer : _extends({}, styles.screenContainer, styles.prev);
            }
          }
          return (0, _rax.createElement)(
            _raxView2.default,
            { style: [viewStyle, { top: 0 }], ref: isCurrent ? 'currentView' : isPrevView ? 'prevView' : null },
            headerMode === 'screen' && !isNav ? (0, _rax.createElement)(_StackHeader2.default, _extends({ key: 'stack_header_' + i,
              index: i,
              title: view.routeName,
              headerBackTitle: prevView && prevView.routeName
            }, navigationOptions, {
              headerMode: headerMode,
              headerStyle: headerStyle,
              params: view.screenParams,
              navigation: view.navigation })) : null,
            (0, _rax.createElement)(
              _EdgePanView2.default,
              {
                key: i,
                ref: isCurrent ? 'currentPanView' : isPrevView ? 'prevPanView' : null,
                onEdgeHorizontalPan: _this4.onEdgeHorizontalPan,
                style: [styles.card, { top: top }, cardStyle] },
              (0, _rax.createElement)(view.screen, _extends({}, _this4.props, { params: view.screenParams, navigation: view.navigation }))
            ),
            isPrevView ? (0, _rax.createElement)(_raxView2.default, { ref: 'mask', style: styles.mask }) : null
          );
        }),
        headerMode === 'float' && navigationOptionsArray && navigationOptionsArray.length ? (0, _rax.createElement)(_StackHeaderContainer2.default, { type: type, isSingle: isSingle, ref: 'stackHeader', views: this.state.views,
          headerMode: headerMode, navigationOptionsArray: navigationOptionsArray }) : null
      );
    }
  }]);

  return StackViewContainer;
}(_BaseViewContainer3.default);

StackViewContainer.defaultProps = {
  mode: 'card', // modal
  headerMode: 'screen', // screen or none
  onTransitionStart: _Util.noop,
  onTransitionEnd: _Util.noop,
  transitionConfig: _Util.noop,
  navigationOptions: null
};


var styles = {
  fullScreen: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  card: {
    position: 'absolute',
    backgroundColor: '#E9E9EF',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  view: {
    width: 750,
    position: 'absolute',
    top: 0,
    bottom: 0,
    transform: 'translateX(0rem)'
  },
  container: {
    position: 'absolute',
    width: 750,
    top: 0,
    bottom: _Util.bottomBarHeight,
    backgroundColor: '#fff',
    overflow: 'hidden'
  },
  screenContainer: {
    position: 'absolute',
    width: 750,
    bottom: 0,
    // backgroundColor: '#E9E9EF',
    backgroundColor: '#fff',
    transform: 'translateX(0rem)'
    // boxShadow: '0rem 0rem 20rem 0rem #ccc'
  },
  stackHeader: {
    position: 'absolute',
    transform: 'translateX(0rem)'
  },
  mask: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000',
    opacity: 0
  },
  current: {
    transform: 'translateX(750rem)'
  },
  prev: {
    transform: 'translateX(-' + PREV_VIEW_RATIO * FULL_WIDTH + 'rem)'
  }
};

exports.default = StackViewContainer;
module.exports = exports['default'];

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @jsx createElement */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

var _bindingxParser = __webpack_require__(129);

var isSupportNewBinding = true;
var isSupportBinding = true;
var WeexBinding = void 0;
var WeexOldBinding = void 0;
var WebBinding = {};
if (_universalEnv.isWeb) {
  WebBinding = __webpack_require__(131);
}
try {
  WeexBinding = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@weex-module/binding\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
  isSupportNewBinding = typeof WeexBinding.bind === 'function' && typeof WeexBinding.unbind === 'function' && typeof WeexBinding.unbindAll === 'function' && typeof WeexBinding.getComputedStyle === 'function';
} catch (e) {
  isSupportNewBinding = false;
}

if (_universalEnv.isWeex) {
  try {
    WeexOldBinding = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@weex-module/expressionBinding\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
  } catch (err) {
    isSupportBinding = false;
  }
}

// findDOMNode 在web和weex下有区别
function getEl(el) {
  if (typeof el === 'string' || typeof el === 'number') return el;
  return _universalEnv.isWeex ? (0, _rax.findDOMNode)(el).ref : (0, _rax.findDOMNode)(el);
}

function formatExpression(expression) {
  if (expression === undefined) return;
  try {
    expression = JSON.parse(expression);
  } catch (err) {}
  var resultExpression = {};
  if (typeof expression === 'string') {
    resultExpression.origin = expression;
  } else if (expression) {
    resultExpression.origin = expression.origin;
    resultExpression.transformed = expression.transformed;
  }
  if (!resultExpression.transformed && !resultExpression.origin) return;
  resultExpression.transformed = resultExpression.transformed || (0, _bindingxParser.parse)(resultExpression.origin);
  return resultExpression;
}

// 统一回调参数
function fixCallback(callback) {
  return function () {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (typeof callback === 'function') {
      return callback({
        state: params.state === 'end' ? 'exit' : params.state,
        t: params.t !== undefined ? params.t : params.deltaT
      });
    }
  };
}

exports.default = {
  // 是否支持新版本的binding
  isSupportNewBinding: isSupportNewBinding,
  // 是否支持binding
  isSupportBinding: isSupportBinding,
  _bindingInstances: [],
  /**
   * 绑定
   * @param options 参数
   * @example
   {
     anchor:blockRef,
     eventType:'pan',
     props: [
     {
       element:blockRef,
       property:'transform.translateX',
       expression:{
         origin:"x+1",
         transformed:"{\"type\":\"+\",\"children\":[{\"type\":\"Identifier\",\"value\":\"x\"},{\"type\":\"NumericLiteral\",\"value\":1}]}"
       }
     }
    ]
   }
   */
  bind: function bind(options) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

    if (!options) {
      throw new Error('should pass options for binding');
    }
    var _options$useOldVersio = options.useOldVersion,
        useOldVersion = _options$useOldVersio === undefined ? false : _options$useOldVersio;

    if (options.anchor) {
      options.anchor = getEl(options.anchor);
    }
    if (options.props) {
      options.props.forEach(function (prop) {
        prop.element = getEl(prop.element);
      });
    }

    options.exitExpression = formatExpression(options.exitExpression);

    if (options.props) {
      options.props.forEach(function (prop) {
        prop.expression = formatExpression(prop.expression);
      });
    }

    if (_universalEnv.isWeex) {
      if (WeexBinding || WeexOldBinding) {
        if (isSupportNewBinding && !useOldVersion) {
          return WeexBinding.bind(options, options && options.eventType === 'timing' ? fixCallback(callback) : callback);
        } else {
          WeexOldBinding.enableBinding(options.anchor, options.eventType);
          // 处理expression的参数格式
          var expressionArgs = options.props.map(function (prop) {
            return {
              element: prop.element,
              property: prop.property,
              expression: prop.expression.transformed
            };
          });
          WeexOldBinding.createBinding(options.anchor, options.eventType, '', expressionArgs, callback);
        }
      }
    } else {
      return WebBinding.bind(options, callback);
    }
  },

  /**
   *  @param {object} options
   *  @example
   *  {eventType:'pan',
   *   token:self.gesToken}
   */
  unbind: function unbind(options) {
    if (!options) {
      throw new Error('should pass options for binding');
    }
    var _options$useOldVersio2 = options.useOldVersion,
        useOldVersion = _options$useOldVersio2 === undefined ? false : _options$useOldVersio2;

    if (options.anchor) {
      options.anchor = getEl(options.anchor);
    }
    if (_universalEnv.isWeex) {
      if (WeexBinding || WeexOldBinding) {
        if (isSupportNewBinding && !useOldVersion) {
          return WeexBinding.unbind(options);
        } else {
          return WeexOldBinding.disableBinding(options.anchor, options.eventType);
        }
      }
    } else {
      return WebBinding.unbind(options);
    }
  },
  unbindAll: function unbindAll() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _options$useOldVersio3 = options.useOldVersion,
        useOldVersion = _options$useOldVersio3 === undefined ? false : _options$useOldVersio3;

    if (_universalEnv.isWeex) {
      if (WeexBinding || WeexOldBinding) {
        if (isSupportNewBinding && !useOldVersion) {
          return WeexBinding.unbindAll();
        } else {
          return WeexOldBinding.disableAll();
        }
      }
    } else {
      return WebBinding.unbindAll();
    }
  },
  prepare: function prepare() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (_universalEnv.isWeex) {
      if (options.anchor) {
        options.anchor = getEl(options.anchor);
      }
      if (WeexBinding && isSupportBinding) {
        if (isSupportNewBinding) {
          return WeexBinding.prepare(options);
        } else {
          return WeexOldBinding.enableBinding(options.anchor, options.eventType);
        }
      }
    }
  },
  getComputedStyle: function getComputedStyle(el) {
    var elRef = getEl(el);
    if (_universalEnv.isWeex) {
      if (isSupportNewBinding) {
        return WeexBinding.getComputedStyle(elRef);
      } else {
        return {};
      }
    } else {
      return WebBinding.getComputedStyle(elRef);
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(130);

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var lex = {
  InputElementDiv: '<WhiteSpace>|<LineTerminator>|<ReservedWord>|<Identifier>|<NumericLiteral>|<Punctuator>|<StringLiteral>',
  InputElementRegExp: '<WhiteSpace>|<LineTerminator>|<ReservedWord>|<Identifier>|<NumericLiteral>|<Punctuator>|<StringLiteral>',
  ReservedWord: '<Keyword>|<NullLiteral>|<BooleanLiteral>',
  WhiteSpace: /[\t\v\f\u0020\u00A0\u1680\u180E\u2000-\u200A\u202F\u205f\u3000\uFEFF]/,
  LineTerminator: /[\n\r\u2028\u2029]/,
  Keyword: /new(?![_$a-zA-Z0-9])|void(?![_$a-zA-Z0-9])|delete(?![_$a-zA-Z0-9])|in(?![_$a-zA-Z0-9])|instanceof(?![_$a-zA-Z0-9])|typeof(?![_$a-zA-Z0-9])/,
  NullLiteral: /null(?![_$a-zA-Z0-9])/,
  BooleanLiteral: /(?:true|false)(?![_$a-zA-Z0-9])/,
  Identifier: /[_$a-zA-Z][_$a-zA-Z0-9]*/,
  Punctuator: /\/|=>|\*\*|>>>=|>>=|<<=|===|!==|>>>|<<|%=|\*=|-=|\+=|<=|>=|==|!=|\^=|\|=|\|\||&&|&=|>>|\+\+|--|\:|}|\*|&|\||\^|!|~|-|\+|\?|%|=|>|<|,|;|\.(?![0-9])|\]|\[|\)|\(|{/,
  DivPunctuator: /\/=|\//,
  NumericLiteral: /(?:0[xX][0-9a-fA-F]*|\.[0-9]+|(?:[1-9]+[0-9]*|0)(?:\.[0-9]*|\.)?)(?:[eE][+-]{0,1}[0-9]+)?(?![_$a-zA-Z0-9])/,
  StringLiteral: /"(?:[^"\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*"|'(?:[^'\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*'/,
  RegularExpressionLiteral: /\/(?:\[(?:\\[\s\S]|[^\]])*\]|[^*\/\\\n\r\u2028\u2029]|\\[^\n\r\u2028\u2029])(?:\[(?:\\[\s\S]|[^\]])*\]|[^\/\\\n\r\u2028\u2029]|\\[^\n\r\u2028\u2029])*\/[0-9a-zA-Z]*/
};

function XRegExp(xregexps, rootname, flag) {
  var expnames = [rootname];

  function buildRegExp(source) {
    var regexp = new RegExp();
    regexp.compile(source.replace(/<([^>]+)>/g, function (all, expname) {
      if (!xregexps[expname]) return '';
      expnames.push(expname);
      if (xregexps[expname] instanceof RegExp) return '(' + xregexps[expname].source + ')';
      return '(' + buildRegExp(xregexps[expname]).source + ')';
    }), flag);
    return regexp;
  }

  var regexp = buildRegExp(xregexps[rootname]);
  this.exec = function (string) {
    var matches = regexp.exec(string);
    if (matches == null) return null;
    var result = new String(matches[0]);
    for (var i = 0; i < expnames.length; i++) {
      if (matches[i]) result[expnames[i]] = matches[i];
    }return result;
  };
  Object.defineProperty(this, 'lastIndex', {
    'get': function get() {
      return regexp.lastIndex;
    },
    'set': function set(v) {
      regexp.lastIndex = v;
    }
  });
}

function LexicalParser() {
  var inputElementDiv = new XRegExp(lex, 'InputElementDiv', 'g');
  var inputElementRegExp = new XRegExp(lex, 'InputElementRegExp', 'g');
  var source;
  Object.defineProperty(this, 'source', {
    'get': function get() {
      return source;
    },
    'set': function set(v) {
      source = v;
      inputElementDiv.lastIndex = 0;
      inputElementRegExp.lastIndex = 0;
    }
  });
  this.reset = function () {
    inputElementDiv.lastIndex = 0;
    inputElementRegExp.lastIndex = 0;
  };
  this.getNextToken = function (useDiv) {
    var lastIndex = inputElementDiv.lastIndex;
    var inputElement;
    if (useDiv) inputElement = inputElementDiv;else inputElement = inputElementRegExp;
    var token = inputElement.exec(source);
    if (token && inputElement.lastIndex - lastIndex > token.length) {
      throw new SyntaxError('Unexpected token ILLEGAL');
    }
    inputElementDiv.lastIndex = inputElement.lastIndex;
    inputElementRegExp.lastIndex = inputElement.lastIndex;
    return token;
  };
}

var rules = {
  'IdentifierName': [['Identifier']],
  'Literal': [['NullLiteral'], ['BooleanLiteral'], ['NumericLiteral'], ['StringLiteral'], ['RegularExpressionLiteral']],
  'PrimaryExpression': [['Identifier'], ['Literal'], ['(', 'Expression', ')']],
  'CallExpression': [['PrimaryExpression', 'Arguments'], ['CallExpression', 'Arguments']],
  'Arguments': [['(', ')'], ['(', 'ArgumentList', ')']],
  'ArgumentList': [['ConditionalExpression'], ['ArgumentList', ',', 'ConditionalExpression']],
  'LeftHandSideExpression': [['PrimaryExpression'], ['CallExpression']],
  'UnaryExpression': [['LeftHandSideExpression'], ['void', 'UnaryExpression'], ['+', 'UnaryExpression'], ['-', 'UnaryExpression'], ['~', 'UnaryExpression'], ['!', 'UnaryExpression']],
  'ExponentiationExpression': [['UnaryExpression'], ['ExponentiationExpression', '**', 'UnaryExpression']],
  'MultiplicativeExpression': [['MultiplicativeExpression', '/', 'ExponentiationExpression'], ['ExponentiationExpression'], ['MultiplicativeExpression', '*', 'ExponentiationExpression'], ['MultiplicativeExpression', '%', 'ExponentiationExpression']],
  'AdditiveExpression': [['MultiplicativeExpression'], ['AdditiveExpression', '+', 'MultiplicativeExpression'], ['AdditiveExpression', '-', 'MultiplicativeExpression']],
  'ShiftExpression': [['AdditiveExpression'], ['ShiftExpression', '<<', 'AdditiveExpression'], ['ShiftExpression', '>>', 'AdditiveExpression'], ['ShiftExpression', '>>>', 'AdditiveExpression']],
  'RelationalExpression': [['ShiftExpression'], ['RelationalExpression', '<', 'ShiftExpression'], ['RelationalExpression', '>', 'ShiftExpression'], ['RelationalExpression', '<=', 'ShiftExpression'], ['RelationalExpression', '>=', 'ShiftExpression'], ['RelationalExpression', 'instanceof', 'ShiftExpression'], ['RelationalExpression', 'in', 'ShiftExpression']],
  'EqualityExpression': [['RelationalExpression'], ['EqualityExpression', '==', 'RelationalExpression'], ['EqualityExpression', '!=', 'RelationalExpression'], ['EqualityExpression', '===', 'RelationalExpression'], ['EqualityExpression', '!==', 'RelationalExpression']],
  'BitwiseANDExpression': [['EqualityExpression'], ['BitwiseANDExpression', '&', 'EqualityExpression']],
  'BitwiseXORExpression': [['BitwiseANDExpression'], ['BitwiseXORExpression', '^', 'BitwiseANDExpression']],
  'BitwiseORExpression': [['BitwiseXORExpression'], ['BitwiseORExpression', '|', 'BitwiseXORExpression']],
  'LogicalANDExpression': [['BitwiseORExpression'], ['LogicalANDExpression', '&&', 'BitwiseORExpression']],
  'LogicalORExpression': [['LogicalANDExpression'], ['LogicalORExpression', '||', 'LogicalANDExpression']],
  'ConditionalExpression': [['LogicalORExpression'], ['LogicalORExpression', '?', 'LogicalORExpression', ':', 'LogicalORExpression']],
  'Expression': [['ConditionalExpression'], ['Expression', ',', 'ConditionalExpression']],
  'Program': [['Expression']]

};

function _Symbol(symbolName, token) {
  this.name = symbolName;
  this.token = token;
  this.childNodes = [];
  this.toString = function (indent) {
    if (!indent) indent = '';
    if (this.childNodes.length == 1) return this.childNodes[0].toString(indent);
    var str = indent + this.name + (this.token != undefined && this.name != this.token ? ':' + this.token : '') + '\n';
    for (var i = 0; i < this.childNodes.length; i++) {
      str += this.childNodes[i].toString(indent + '    ');
    }return str;
  };
}

function SyntacticalParser() {
  var currentRule;
  var root = {
    Program: '$'
  };
  var hash = {};

  function closureNode(node) {

    hash[JSON.stringify(node)] = node;

    var queue = Object.getOwnPropertyNames(node);
    while (queue.length) {
      var symbolName = queue.shift();
      if (!rules[symbolName]) continue;
      rules[symbolName].forEach(function (rule) {
        if (!node[rule[0]]) queue.push(rule[0]);
        var rulenode = node;
        var lastnode = null;
        rule.forEach(function (symbol) {
          if (!rulenode[symbol]) rulenode[symbol] = {};
          lastnode = rulenode;
          rulenode = rulenode[symbol];
        });
        if (node[symbolName].$div) rulenode.$div = true;
        rulenode.$reduce = symbolName;
        rulenode.$count = rule.length;
      });
    }

    for (var p in node) {
      if (_typeof(node[p]) != 'object' || p.charAt(0) == '$' || node[p].$closure) continue;
      if (hash[JSON.stringify(node[p])]) node[p] = hash[JSON.stringify(node[p])];else {
        closureNode(node[p]);
      }
    }
    node.$closure = true;
  }

  closureNode(root);
  var symbolStack = [];
  var statusStack = [root];
  var current = root;
  this.insertSymbol = function insertSymbol(symbol, haveLineTerminator) {
    while (!current[symbol.name] && current.$reduce) {
      var count = current.$count;
      var newsymbol = new _Symbol(current.$reduce);
      while (count--) {
        newsymbol.childNodes.push(symbolStack.pop()), statusStack.pop();
      }current = statusStack[statusStack.length - 1];
      this.insertSymbol(newsymbol);
    }
    current = current[symbol.name];
    symbolStack.push(symbol), statusStack.push(current);
    if (!current) throw new Error();
    return current.$div;
  };
  this.reset = function () {
    current = root;
    symbolStack = [];
    statusStack = [root];
  };
  Object.defineProperty(this, 'grammarTree', {
    'get': function get() {
      try {
        while (current.$reduce) {
          var count = current.$count;
          var newsymbol = new _Symbol(current.$reduce);
          while (count--) {
            newsymbol.childNodes.push(symbolStack.pop()), statusStack.pop();
          }current = statusStack[statusStack.length - 1];
          this.insertSymbol(newsymbol);
        }
        if (symbolStack.length > 0 && current[';']) {
          this.insertSymbol(new _Symbol(';', ';'));
          return this.grammarTree;
        }
        if (symbolStack.length != 1 || symbolStack[0].name != 'Program') throw new Error();
      } catch (e) {
        throw new SyntaxError('Unexpected end of input');
      }
      return symbolStack[0];
    }
  });
}

function Parser() {
  this.lexicalParser = new LexicalParser();
  this.syntacticalParser = new SyntacticalParser();
  var terminalSymbols = ['NullLiteral', 'BooleanLiteral', 'NumericLiteral', 'StringLiteral', 'RegularExpressionLiteral', 'Identifier', '**', '=>', '{', '}', '(', ')', '[', ']', '.', ';', ',', '<', '>', '<=', '>=', '==', '!=', '===', '!==', '+', '-', '*', '%', '++', '--', '<<', '>>', '>>>', '&', '|', '^', '!', '~', '&&', '||', '?', ':', '=', '+=', '-=', '*=', '%=', '<<=', '>>=', '>>>=', '&=', '|=', '^=', '/', '/=', 'instanceof', 'typeof', 'new', 'void', 'debugger', 'this', 'delete', 'in'];
  var terminalSymbolIndex = {};
  terminalSymbols.forEach(function (e) {
    Object.defineProperty(terminalSymbolIndex, e, {});
  });
  this.reset = function () {
    this.lexicalParser.reset();
    this.syntacticalParser.reset();
  };
  this.parse = function (source, onInputElement) {
    var _this = this;

    var token;
    var haveLineTerminator = false;
    this.lexicalParser.source = source;
    var useDiv = false;
    while (token = this.lexicalParser.getNextToken(useDiv)) {
      if (onInputElement) onInputElement(token);
      try {
        if (Object.getOwnPropertyNames(token).some(function (e) {
          if (terminalSymbolIndex.hasOwnProperty(e)) {
            useDiv = _this.syntacticalParser.insertSymbol(new _Symbol(e, token), haveLineTerminator);
            haveLineTerminator = false;
            return true;
          } else return false;
        })) continue;
        if ((token.Keyword || token.Punctuator || token.DivPunctuator) && terminalSymbolIndex.hasOwnProperty(token.toString())) {
          useDiv = this.syntacticalParser.insertSymbol(new _Symbol(token.toString(), token), haveLineTerminator);
        }
      } catch (e) {
        throw new SyntaxError('Unexpected token ' + token);
      }
    }
    return this.syntacticalParser.grammarTree;
  };
}

var parser = new Parser();

function JavaScriptExpression(text) {
  parser.reset();
  this.tree = parser.parse(text);
  this.paths = [];
  var context = Object.create(null);
  var me = this;
  var pathIndex = Object.create(null);
  this.isSimple;
  this.isConst;
  walk(this.tree);
  checkSimple(this.tree);
  if (this.paths.length === 0) {
    this.isConst = true;
  }
  this.setter = function (path) {
    var curr = context;
    for (var i = 0; i < path.length - 1; i++) {
      if (!curr[path[i]]) curr[path[i]] = Object.create(null);
      curr = curr[path[i]];
    }
    return {
      isCompleted: function isCompleted() {
        for (var p in pathIndex) {
          if (!pathIndex[p]) return false;
        }return true;
      },
      set: function set(value) {
        if (!pathIndex[path.join('.')]) {
          pathIndex[path.join('.')] = true;
        }
        curr[path[i]] = value;
        if (this.isCompleted()) {
          return me.exec();
        } else {
          return undefined;
        }
      }
    };
  };

  this.valueOf = this.exec = function () {
    try {
      return function () {
        return eval(text);
      }.call(context);
    } catch (e) {}
  };

  function checkSimple(symbol) {

    var curr = symbol;
    while (curr.childNodes.length <= 1 && curr.name !== 'MemberExpression') {
      curr = curr.childNodes[0];
    }
    // TODO: need to point out "[……]"
    if (curr.name === 'MemberExpression') {
      me.isSimple = true;
    } else {
      me.isSimple = false;
    }
  }

  function walk(symbol) {
    if (symbol.name === 'CallExpression' && symbol.childNodes[symbol.childNodes.length - 1].name !== 'CallExpression') {
      var path = getPath(symbol.childNodes[1]);
      walk(symbol.childNodes[0]);
    } else if (symbol.name === 'NewExpression' && symbol.childNodes.length === 1) {
      var path = getPath(symbol.childNodes[0]);
    } else if (symbol.name === 'MemberExpression' && symbol.childNodes.length === 1) {
      var path = getPath(symbol);
    } else {
      for (var i = 0; i < symbol.childNodes.length; i++) {
        walk(symbol.childNodes[i]);
      }
    }
  }

  function getPath(symbol) {
    // [["PrimaryExpression"], ["MemberExpression", "[", "Expression", "]"], ["MemberExpression", ".", "IdentifierName"], ["new", "MemberExpression", "Arguments"]],

    if (symbol.childNodes[0].name === 'IdentifierName') {
      // MemberExpression : MemberExpression "." IdentifierName
      var path = getPath(symbol.childNodes[2]);
      if (path) path = path.concat(symbol.childNodes[0].childNodes[0].token.toString());
      createPath(path);
      return path;
    } else if (symbol.childNodes[0].name === 'PrimaryExpression') {
      // MemberExpression : PrimaryExpression
      if (symbol.childNodes[0].childNodes[0].name === 'Identifier') {
        var path = [symbol.childNodes[0].childNodes[0].token.toString()];
        createPath(path);
        return path;
      } else {
        return null;
      }
    } else if (symbol.childNodes[0].name === ']') {
      // MemberExpression : MemberExpression "[" Expression "]"
      getPath(symbol.childNodes[3]);
      walk(symbol.childNodes[1]);
      return null;
    } else if (symbol.childNodes[0].name === 'Arguments') {
      // MemberExpression : "new" MemberExpression Arguments
      walk(symbol.childNodes[0]);
      walk(symbol.childNodes[1]);
      return null;
    } else {
      for (var i = 0; i < symbol.childNodes.length; i++) {
        walk(symbol.childNodes[i]);
      }
    }
  }

  function createPath(path) {
    var curr = context;
    for (var i = 0; i < path.length - 1; i++) {
      if (!curr[path[i]]) curr[path[i]] = Object.create(null);
      curr = curr[path[i]];
    }
    me.paths.push(path);
    pathIndex[path.join('.')] = false;
  }
}

function visit(tree) {
  var childNodes = tree.childNodes.slice().reverse();
  var children = childNodes.filter(function (e) {
    return !e.token || !e.token.Punctuator;
  });
  if (tree.name === 'UnaryExpression') {
    // negative number support
    if (childNodes.length === 2 && childNodes[0].name === '-' && children.length === 1) {
      var res = visit(children[0]);
      res.value = -res.value;
      return res;
    }
  }

  if (tree.name === 'Arguments') {
    var argumentList = [];
    var listNode = children[0];
    while (listNode) {
      if (listNode.childNodes.length === 3) {
        argumentList.unshift(listNode.childNodes[0]);
        listNode = listNode.childNodes[2];
      }
      if (listNode.childNodes.length === 1) {
        argumentList.unshift(listNode.childNodes[0]);
        listNode = null;
      }
    }
    return {
      type: 'Arguments',
      children: argumentList.map(function (e) {
        return visit(e);
      })
    };
  }

  if (children && children.length === 1) {
    var res = visit(children[0]);
    return res;
  }

  if (tree.token && ['NullLiteral', 'BooleanLiteral', 'NumericLiteral', 'StringLiteral', 'Identifier'].some(function (e) {
    return tree.token[e];
  })) {
    var type = Object.keys(tree.token).filter(function (e) {
      return e.match(/Literal/) || e.match(/Identifier/);
    })[0];
    var value = {
      'NullLiteral': null,
      'BooleanLiteral': Boolean(tree.token),
      'NumericLiteral': Number(tree.token),
      'StringLiteral': tree.token,
      'Identifier': tree.token
    }[type];

    return {
      type: type,
      value: value
    };
  }

  if (tree.name === 'CallExpression') return {
    type: 'CallExpression',
    children: [visit(childNodes[0]), visit(childNodes[1])]
  };

  return {
    type: childNodes.filter(function (e) {
      return e.token && e.token.Punctuator;
    })[0].name,
    children: childNodes.filter(function (e) {
      return !e.token || !e.token.Punctuator;
    }).map(function (e) {
      return visit(e);
    })
  };
}

function parse(originExp) {
  var exp = new JavaScriptExpression(originExp);
  return JSON.stringify(visit(exp.tree), null);
}

module.exports = {
  parse: parse
};

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(132);

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _universalEnv = __webpack_require__(1);

module.exports = _universalEnv.isWeb ? __webpack_require__(133) : {};

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
    var a = factory();
    for (var i in a) {
      ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' ? exports : root)[i] = a[i];
    }
  }
})(typeof self !== 'undefined' ? self : undefined, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 8);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /*
      object-assign
      (c) Sindre Sorhus
      @license MIT
      */

      /* eslint-disable no-unused-vars */

      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var propIsEnumerable = Object.prototype.propertyIsEnumerable;

      function toObject(val) {
        if (val === null || val === undefined) {
          throw new TypeError('Object.assign cannot be called with null or undefined');
        }

        return Object(val);
      }

      function shouldUseNative() {
        try {
          if (!Object.assign) {
            return false;
          }

          // Detect buggy property enumeration order in older V8 versions.

          // https://bugs.chromium.org/p/v8/issues/detail?id=4118
          var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
          test1[5] = 'de';
          if (Object.getOwnPropertyNames(test1)[0] === '5') {
            return false;
          }

          // https://bugs.chromium.org/p/v8/issues/detail?id=3056
          var test2 = {};
          for (var i = 0; i < 10; i++) {
            test2['_' + String.fromCharCode(i)] = i;
          }
          var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
            return test2[n];
          });
          if (order2.join('') !== '0123456789') {
            return false;
          }

          // https://bugs.chromium.org/p/v8/issues/detail?id=3056
          var test3 = {};
          'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
            test3[letter] = letter;
          });
          if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
            return false;
          }

          return true;
        } catch (err) {
          // We don't expect any of the above to throw, but better to be safe.
          return false;
        }
      }

      module.exports = shouldUseNative() ? Object.assign : function (target, source) {
        var from;
        var to = toObject(target);
        var symbols;

        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);

          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          }

          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }

        return to;
      };

      /***/
    },
    /* 1 */
    /***/function (module, exports, __webpack_require__) {

      (function webpackUniversalModuleDefinition(root, factory) {
        if (true) module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else {
          var a = factory();
          for (var i in a) {
            ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' ? exports : root)[i] = a[i];
          }
        }
      })(typeof self !== 'undefined' ? self : this, function () {
        return (/******/function (modules) {
            // webpackBootstrap
            /******/ // The module cache
            /******/var installedModules = {};
            /******/
            /******/ // The require function
            /******/function __webpack_require__(moduleId) {
              /******/
              /******/ // Check if module is in cache
              /******/if (installedModules[moduleId]) {
                /******/return installedModules[moduleId].exports;
                /******/
              }
              /******/ // Create a new module (and put it into the cache)
              /******/var module = installedModules[moduleId] = {
                /******/i: moduleId,
                /******/l: false,
                /******/exports: {}
                /******/ };
              /******/
              /******/ // Execute the module function
              /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
              /******/
              /******/ // Flag the module as loaded
              /******/module.l = true;
              /******/
              /******/ // Return the exports of the module
              /******/return module.exports;
              /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/__webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/__webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/__webpack_require__.d = function (exports, name, getter) {
              /******/if (!__webpack_require__.o(exports, name)) {
                /******/Object.defineProperty(exports, name, {
                  /******/configurable: false,
                  /******/enumerable: true,
                  /******/get: getter
                  /******/ });
                /******/
              }
              /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/__webpack_require__.n = function (module) {
              /******/var getter = module && module.__esModule ?
              /******/function getDefault() {
                return module['default'];
              } :
              /******/function getModuleExports() {
                return module;
              };
              /******/__webpack_require__.d(getter, 'a', getter);
              /******/return getter;
              /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/__webpack_require__.o = function (object, property) {
              return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/
            /******/ // __webpack_public_path__
            /******/__webpack_require__.p = "";
            /******/
            /******/ // Load entry module and return exports
            /******/return __webpack_require__(__webpack_require__.s = 0);
            /******/
          }(
          /************************************************************************/
          /******/[
          /* 0 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";

            function findIndex(o, condition) {
              return o.indexOf(find(o, condition));
            }

            function dropWhile(o, condition) {
              var result = [];
              map(o, function (v, k) {
                if (!condition(v, k)) {
                  result.push(v);
                }
              });
              return result;
            }

            function filter(o, condition) {
              var result = [];
              forEach(o, function (v, k) {
                if (condition(v, k)) {
                  result.push(v);
                }
              });
              return result;
            }

            function map(o, fn) {
              if (o instanceof Array) {
                return Array.prototype.map.call(o, fn);
              } else {
                var result = [];
                forEach(o, function (v, k) {
                  result.push(fn(v, k));
                });
                return result;
              }
            }

            /*
             forEach({a: 1, b: 2}, (v, k) => {
             console.log({
             v, k
             })
             })
            
             forEach([1,2,3],(v,k)=>{
             console.log({
             v,k
             })
             })
             */

            function forEach(o, fn) {
              if (o instanceof Array) {
                return Array.prototype.forEach.call(o, fn);
              }
              Object.keys(o).forEach(function (key) {
                fn(o[key], key);
              });
            }

            /* console.log(
             find([{name: 1}, {name: 2}], (o) => {
             return o.name === 2;
             }))
            
             console.log(find([{name: 1,age:2}, {name: 2}], {name:1}))
             */
            function find(o, condition) {
              var result = null;
              forEach(o, function (v, k) {
                if (typeof condition === 'function') {
                  if (condition(v, k)) {
                    result = v;
                  }
                } else {
                  var propName = Object.keys(condition)[0];
                  if (propName && v[propName] === condition[propName]) {
                    result = v;
                  }
                }
              });
              return result;
            }

            module.exports = {
              find: find,
              forEach: forEach,
              map: map,
              filter: filter,
              dropWhile: dropWhile,
              findIndex: findIndex
            };

            /***/
          }]
          /******/)
        );
      });

      /***/
    },
    /* 2 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _slicedToArray = function () {
        function sliceIterator(arr, i) {
          var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;_e = err;
          } finally {
            try {
              if (!_n && _i["return"]) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }return _arr;
        }return function (arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();

      /**
       Copyright 2018 Alibaba Group
      
       Licensed under the Apache License, Version 2.0 (the "License");
       you may not use this file except in compliance with the License.
       You may obtain a copy of the License at
      
       http://www.apache.org/licenses/LICENSE-2.0
      
       Unless required by applicable law or agreed to in writing, software
       distributed under the License is distributed on an "AS IS" BASIS,
       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       See the License for the specific language governing permissions and
       limitations under the License.
       */

      /**
       * Transforms matrix into an object
       *
       * @param string matrix
       * @return object
       */

      // TODO matrix4 for 3D
      var matrixToTransformObj = function matrixToTransformObj(matrix) {
        // this happens when there was no rotation yet in CSS
        if (matrix === 'none') {
          matrix = 'matrix(0,0,0,0,0)';
        }
        var obj = {},
            values = matrix.match(/([-+]?[\d\.]+)/g);

        var _values = _slicedToArray(values, 6),
            a = _values[0],
            b = _values[1],
            c = _values[2],
            d = _values[3],
            e = _values[4],
            f = _values[5];

        obj.rotate = obj.rotateZ = Math.round(Math.atan2(parseFloat(b), parseFloat(a)) * (180 / Math.PI)) || 0;
        obj.translateX = e !== undefined ? pxTo750(e) : 0;
        obj.translateY = f !== undefined ? pxTo750(f) : 0;
        obj.scaleX = Math.sqrt(a * a + b * b);
        obj.scaleY = Math.sqrt(c * c + d * d);
        return obj;
      };

      function pxTo750(n) {
        return n / document.body.clientWidth * 750;
      }

      function px(n) {
        return n / 750 * document.body.clientWidth;
        // return Math.round(n / 750 * document.body.clientWidth);
      }

      function clamp(n, min, max) {
        return n < min ? min : n > max ? max : n;
      }

      var vendor = function () {
        var el = document.createElement('div').style;
        var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
            transform,
            i = 0,
            l = vendors.length;
        for (; i < l; i++) {
          transform = vendors[i] + 'ransform';
          if (transform in el) return vendors[i].substr(0, vendors[i].length - 1);
        }
        return false;
      }();

      /**
       *  add vendor to attribute
       *  @memberOf Util
       *  @param {String} attrName name of attribute
       *  @return { String }
       **/
      function prefixStyle(attrName) {
        if (vendor === false) return false;
        if (vendor === '') return attrName;
        return vendor + attrName.charAt(0).toUpperCase() + attrName.substr(1);
      }

      exports.matrixToTransformObj = matrixToTransformObj;
      exports.pxTo750 = pxTo750;
      exports.px = px;
      exports.clamp = clamp;
      exports.prefixStyle = prefixStyle;

      /***/
    },
    /* 3 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }(); /**
            Copyright 2018 Alibaba Group
           
            Licensed under the Apache License, Version 2.0 (the "License");
            you may not use this file except in compliance with the License.
            You may obtain a copy of the License at
           
            http://www.apache.org/licenses/LICENSE-2.0
           
            Unless required by applicable law or agreed to in writing, software
            distributed under the License is distributed on an "AS IS" BASIS,
            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            See the License for the specific language governing permissions and
            limitations under the License.
            */

      var _simpleLodash = __webpack_require__(1);

      var _simpleLodash2 = _interopRequireDefault(_simpleLodash);

      var _utils = __webpack_require__(2);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var TimingHandler = function () {
        function TimingHandler(binding) {
          _classCallCheck(this, TimingHandler);

          this.binding = null;

          this.binding = binding;
          var props = binding.options.props;

          _simpleLodash2.default.map(props, function (prop) {
            var element = prop.element,
                config = prop.config;

            if (config && element) {
              if (config.perspective) {
                if (element.parentNode) {
                  element.parentNode.style[(0, _utils.prefixStyle)('transformStyle')] = 'preserve-3d';
                  element.parentNode.style[(0, _utils.prefixStyle)('perspective')] = config.perspective + 'px';
                  element.parentNode.style[(0, _utils.prefixStyle)('perspectiveOrigin')] = '0 0';
                }
              }
              if (config.transformOrigin) {
                element.style[(0, _utils.prefixStyle)('transformOrigin')] = config.transformOrigin;
              }
            }
          });
        }

        _createClass(TimingHandler, [{
          key: 'destroy',
          value: function destroy() {}
        }]);

        return TimingHandler;
      }();

      exports.default = TimingHandler;
      ;

      /***/
    },
    /* 4 */
    /***/function (module, exports, __webpack_require__) {

      (function webpackUniversalModuleDefinition(root, factory) {
        if (true) module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else {
          var a = factory();
          for (var i in a) {
            ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' ? exports : root)[i] = a[i];
          }
        }
      })(this, function () {
        return (/******/function (modules) {
            // webpackBootstrap
            /******/ // The module cache
            /******/var installedModules = {};
            /******/
            /******/ // The require function
            /******/function __webpack_require__(moduleId) {
              /******/
              /******/ // Check if module is in cache
              /******/if (installedModules[moduleId]) {
                /******/return installedModules[moduleId].exports;
                /******/
              }
              /******/ // Create a new module (and put it into the cache)
              /******/var module = installedModules[moduleId] = {
                /******/i: moduleId,
                /******/l: false,
                /******/exports: {}
                /******/ };
              /******/
              /******/ // Execute the module function
              /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
              /******/
              /******/ // Flag the module as loaded
              /******/module.l = true;
              /******/
              /******/ // Return the exports of the module
              /******/return module.exports;
              /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/__webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/__webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/__webpack_require__.d = function (exports, name, getter) {
              /******/if (!__webpack_require__.o(exports, name)) {
                /******/Object.defineProperty(exports, name, {
                  /******/configurable: false,
                  /******/enumerable: true,
                  /******/get: getter
                  /******/ });
                /******/
              }
              /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/__webpack_require__.n = function (module) {
              /******/var getter = module && module.__esModule ?
              /******/function getDefault() {
                return module['default'];
              } :
              /******/function getModuleExports() {
                return module;
              };
              /******/__webpack_require__.d(getter, 'a', getter);
              /******/return getter;
              /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/__webpack_require__.o = function (object, property) {
              return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/
            /******/ // __webpack_public_path__
            /******/__webpack_require__.p = "";
            /******/
            /******/ // Load entry module and return exports
            /******/return __webpack_require__(__webpack_require__.s = 3);
            /******/
          }(
          /************************************************************************/
          /******/[
          /* 0 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";

            var PI = Math.PI,
                sin = Math.sin,
                cos = Math.cos,
                sqrt = Math.sqrt,
                pow = Math.pow;

            var c1 = 1.70158;
            var c2 = c1 * 1.525;
            var c3 = c1 + 1;
            var c4 = 2 * PI / 3;
            var c5 = 2 * PI / 4.5;

            // x is the fraction of animation progress, in the range 0..1
            function bounceOut(x) {
              var n1 = 7.5625,
                  d1 = 2.75;
              if (x < 1 / d1) {
                return n1 * x * x;
              } else if (x < 2 / d1) {
                return n1 * (x -= 1.5 / d1) * x + .75;
              } else if (x < 2.5 / d1) {
                return n1 * (x -= 2.25 / d1) * x + .9375;
              } else {
                return n1 * (x -= 2.625 / d1) * x + .984375;
              }
            }

            var Easing = {
              linear: function linear(x) {
                return x;
              },
              easeInQuad: function easeInQuad(x) {
                return x * x;
              },
              easeOutQuad: function easeOutQuad(x) {
                return 1 - (1 - x) * (1 - x);
              },
              easeInOutQuad: function easeInOutQuad(x) {
                return x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
              },
              easeInCubic: function easeInCubic(x) {
                return x * x * x;
              },
              easeOutCubic: function easeOutCubic(x) {
                return 1 - pow(1 - x, 3);
              },
              easeInOutCubic: function easeInOutCubic(x) {
                return x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2;
              },
              easeInQuart: function easeInQuart(x) {
                return x * x * x * x;
              },
              easeOutQuart: function easeOutQuart(x) {
                return 1 - pow(1 - x, 4);
              },
              easeInOutQuart: function easeInOutQuart(x) {
                return x < 0.5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2;
              },
              easeInQuint: function easeInQuint(x) {
                return x * x * x * x * x;
              },
              easeOutQuint: function easeOutQuint(x) {
                return 1 - pow(1 - x, 5);
              },
              easeInOutQuint: function easeInOutQuint(x) {
                return x < 0.5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2;
              },
              easeInSine: function easeInSine(x) {
                return 1 - cos(x * PI / 2);
              },
              easeOutSine: function easeOutSine(x) {
                return sin(x * PI / 2);
              },
              easeInOutSine: function easeInOutSine(x) {
                return -(cos(PI * x) - 1) / 2;
              },
              easeInExpo: function easeInExpo(x) {
                return x === 0 ? 0 : pow(2, 10 * x - 10);
              },
              easeOutExpo: function easeOutExpo(x) {
                return x === 1 ? 1 : 1 - pow(2, -10 * x);
              },
              easeInOutExpo: function easeInOutExpo(x) {
                return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? pow(2, 20 * x - 10) / 2 : (2 - pow(2, -20 * x + 10)) / 2;
              },
              easeInCirc: function easeInCirc(x) {
                return 1 - sqrt(1 - pow(x, 2));
              },
              easeOutCirc: function easeOutCirc(x) {
                return sqrt(1 - pow(x - 1, 2));
              },
              easeInOutCirc: function easeInOutCirc(x) {
                return x < 0.5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;
              },
              easeInElastic: function easeInElastic(x) {
                return x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);
              },
              easeOutElastic: function easeOutElastic(x) {
                return x === 0 ? 0 : x === 1 ? 1 : pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;
              },
              easeInOutElastic: function easeInOutElastic(x) {
                return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2 : pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1;
              },
              easeInBack: function easeInBack(x) {
                return c3 * x * x * x - c1 * x * x;
              },
              easeOutBack: function easeOutBack(x) {
                return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2);
              },
              easeInOutBack: function easeInOutBack(x) {
                return x < 0.5 ? pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
              },
              easeInBounce: function easeInBounce(x) {
                return 1 - bounceOut(1 - x);
              },
              easeOutBounce: bounceOut,
              easeInOutBounce: function easeInOutBounce(x) {
                return x < 0.5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2;
              },
              cubicBezier: function cubicBezier() {}
            };

            module.exports = Easing;

            /***/
          },
          /* 1 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";

            function Bezier(x1, y1, x2, y2, epsilon) {
              var curveX = function curveX(t) {
                var v = 1 - t;
                return 3 * v * v * t * x1 + 3 * v * t * t * x2 + t * t * t;
              };

              var curveY = function curveY(t) {
                var v = 1 - t;
                return 3 * v * v * t * y1 + 3 * v * t * t * y2 + t * t * t;
              };

              var derivativeCurveX = function derivativeCurveX(t) {
                var v = 1 - t;
                return 3 * (2 * (t - 1) * t + v * v) * x1 + 3 * (-t * t * t + 2 * v * t) * x2;
              };

              return function (t) {

                var x = t,
                    t0,
                    t1,
                    t2,
                    x2,
                    d2,
                    i;

                // First try a few iterations of Newton's method -- normally very fast.
                for (t2 = x, i = 0; i < 8; i++) {
                  x2 = curveX(t2) - x;
                  if (Math.abs(x2) < epsilon) return curveY(t2);
                  d2 = derivativeCurveX(t2);
                  if (Math.abs(d2) < 1e-6) break;
                  t2 = t2 - x2 / d2;
                }

                t0 = 0, t1 = 1, t2 = x;

                if (t2 < t0) return curveY(t0);
                if (t2 > t1) return curveY(t1);

                // Fallback to the bisection method for reliability.
                while (t0 < t1) {
                  x2 = curveX(t2);
                  if (Math.abs(x2 - x) < epsilon) return curveY(t2);
                  if (x > x2) t0 = t2;else t1 = t2;
                  t2 = (t1 - t0) * .5 + t0;
                }

                // Failure
                return curveY(t2);
              };
            };

            module.exports = Bezier;

            /***/
          },
          /* 2 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";

            var raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
              window.setTimeout(callback, 1000 / 60);
            };

            var cancelRAF = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || window.clearTimeout;

            module.exports = {
              raf: raf,
              cancelRAF: cancelRAF
            };

            /***/
          },
          /* 3 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";

            module.exports = __webpack_require__(4);

            /***/
          },
          /* 4 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";

            var easing = __webpack_require__(0);
            var bezier = __webpack_require__(1);

            var _require = __webpack_require__(2),
                raf = _require.raf,
                cancelRAF = _require.cancelRAF;

            var assign = __webpack_require__(5);

            var TYPES = {
              START: 'start',
              END: 'end',
              RUN: 'run',
              STOP: 'stop'
            };

            var noop = function noop() {};

            var MIN_DURATION = 1;

            function Timer(cfg) {
              this.init(cfg);
            }

            Timer.prototype = {
              init: function init(cfg) {
                this.cfg = assign({
                  easing: 'linear',
                  duration: Infinity,
                  onStart: noop,
                  onRun: noop,
                  onStop: noop,
                  onEnd: noop
                }, cfg);
              },
              run: function run() {
                var _cfg = this.cfg,
                    duration = _cfg.duration,
                    onStart = _cfg.onStart,
                    onRun = _cfg.onRun;

                if (duration <= MIN_DURATION) {
                  this.isfinished = true;
                  typeof onRun === 'function' ? onRun({ percent: 1 }) : null;
                  this.stop();
                }
                if (this.isfinished) return;
                this._hasFinishedPercent = this._stop && this._stop.percent || 0;
                this._stop = null;
                this.start = Date.now();
                this.percent = 0;
                typeof onStart === 'function' ? onStart({ percent: 0, type: TYPES.START }) : null;
                // epsilon determines the precision of the solved values
                var epsilon = 1000 / 60 / duration / 4;
                var b = this.cfg.bezierArgs;
                this.easingFn = b && b.length === 4 ? bezier(b[0], b[1], b[2], b[3], epsilon) : easing[this.cfg.easing];
                this._run();
              },

              _run: function _run() {
                var _this = this;

                var _cfg2 = this.cfg,
                    onRun = _cfg2.onRun,
                    onStop = _cfg2.onStop;

                cancelRAF(this._raf);
                this._raf = raf(function () {
                  _this.now = Date.now();
                  _this.t = _this.now - _this.start;
                  _this.duration = _this.now - _this.start >= _this.cfg.duration ? _this.cfg.duration : _this.now - _this.start;
                  _this.progress = _this.easingFn(_this.duration / _this.cfg.duration);
                  _this.percent = _this.duration / _this.cfg.duration + _this._hasFinishedPercent;
                  if (_this.percent >= 1 || _this._stop) {
                    _this.percent = _this._stop && _this._stop.percent ? _this._stop.percent : 1;
                    _this.duration = _this._stop && _this._stop.duration ? _this._stop.duration : _this.duration;

                    typeof onRun === 'function' ? onRun({
                      percent: _this.progress,
                      originPercent: _this.percent,
                      t: _this.t,
                      type: TYPES.RUN
                    }) : null;

                    typeof onStop === 'function' ? onStop({
                      percent: _this.percent,
                      t: _this.t,
                      type: TYPES.STOP
                    }) : null;

                    if (_this.percent >= 1) {
                      _this.isfinished = true;
                      _this.stop();
                    }
                    return;
                  }

                  typeof onRun === 'function' ? onRun({
                    percent: _this.progress,
                    originPercent: _this.percent,
                    t: _this.t,
                    type: TYPES.RUN
                  }) : null;

                  _this._run();
                });
              },

              stop: function stop() {
                var onEnd = this.cfg.onEnd;

                this._stop = {
                  percent: this.percent,
                  now: this.now
                };
                typeof onEnd === 'function' ? onEnd({
                  percent: 1,
                  t: this.t,
                  type: TYPES.END
                }) : null;
                cancelRAF(this._raf);
              }
            };

            Timer.Easing = easing;
            Timer.Bezier = bezier;
            Timer.raf = raf;
            Timer.cancelRAF = cancelRAF;
            module.exports = Timer;

            /***/
          },
          /* 5 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";
            /*
            object-assign
            (c) Sindre Sorhus
            @license MIT
            */

            /* eslint-disable no-unused-vars */

            var getOwnPropertySymbols = Object.getOwnPropertySymbols;
            var hasOwnProperty = Object.prototype.hasOwnProperty;
            var propIsEnumerable = Object.prototype.propertyIsEnumerable;

            function toObject(val) {
              if (val === null || val === undefined) {
                throw new TypeError('Object.assign cannot be called with null or undefined');
              }

              return Object(val);
            }

            function shouldUseNative() {
              try {
                if (!Object.assign) {
                  return false;
                }

                // Detect buggy property enumeration order in older V8 versions.

                // https://bugs.chromium.org/p/v8/issues/detail?id=4118
                var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
                test1[5] = 'de';
                if (Object.getOwnPropertyNames(test1)[0] === '5') {
                  return false;
                }

                // https://bugs.chromium.org/p/v8/issues/detail?id=3056
                var test2 = {};
                for (var i = 0; i < 10; i++) {
                  test2['_' + String.fromCharCode(i)] = i;
                }
                var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
                  return test2[n];
                });
                if (order2.join('') !== '0123456789') {
                  return false;
                }

                // https://bugs.chromium.org/p/v8/issues/detail?id=3056
                var test3 = {};
                'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
                  test3[letter] = letter;
                });
                if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
                  return false;
                }

                return true;
              } catch (err) {
                // We don't expect any of the above to throw, but better to be safe.
                return false;
              }
            }

            module.exports = shouldUseNative() ? Object.assign : function (target, source) {
              var from;
              var to = toObject(target);
              var symbols;

              for (var s = 1; s < arguments.length; s++) {
                from = Object(arguments[s]);

                for (var key in from) {
                  if (hasOwnProperty.call(from, key)) {
                    to[key] = from[key];
                  }
                }

                if (getOwnPropertySymbols) {
                  symbols = getOwnPropertySymbols(from);
                  for (var i = 0; i < symbols.length; i++) {
                    if (propIsEnumerable.call(from, symbols[i])) {
                      to[symbols[i]] = from[symbols[i]];
                    }
                  }
                }
              }

              return to;
            };

            /***/
          }]
          /******/)
        );
      });

      /***/
    },
    /* 5 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /**
       Copyright 2018 Alibaba Group
      
       Licensed under the Apache License, Version 2.0 (the "License");
       you may not use this file except in compliance with the License.
       You may obtain a copy of the License at
      
       http://www.apache.org/licenses/LICENSE-2.0
      
       Unless required by applicable law or agreed to in writing, software
       distributed under the License is distributed on an "AS IS" BASIS,
       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       See the License for the specific language governing permissions and
       limitations under the License.
       */

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _quaternion = __webpack_require__(6);

      var _quaternion2 = _interopRequireDefault(_quaternion);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function Vector3(x, y, z) {

        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
      }

      Vector3.prototype = {

        constructor: Vector3,

        isVector3: true,

        set: function set(x, y, z) {

          this.x = x;
          this.y = y;
          this.z = z;

          return this;
        },

        applyEuler: function () {

          var quaternion;

          return function applyEuler(euler) {

            if ((euler && euler.isEuler) === false) {

              console.error('THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.');
            }

            if (quaternion === undefined) quaternion = new _quaternion2.default();

            return this.applyQuaternion(quaternion.setFromEuler(euler));
          };
        }(),

        applyQuaternion: function applyQuaternion(q) {

          var x = this.x,
              y = this.y,
              z = this.z;
          var qx = q.x,
              qy = q.y,
              qz = q.z,
              qw = q.w;

          // calculate quat * vector

          var ix = qw * x + qy * z - qz * y;
          var iy = qw * y + qz * x - qx * z;
          var iz = qw * z + qx * y - qy * x;
          var iw = -qx * x - qy * y - qz * z;

          // calculate result * inverse quat

          this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
          this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
          this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

          return this;
        }

      };

      exports.default = Vector3;

      /***/
    },
    /* 6 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /**
       Copyright 2018 Alibaba Group
      
       Licensed under the Apache License, Version 2.0 (the "License");
       you may not use this file except in compliance with the License.
       You may obtain a copy of the License at
      
       http://www.apache.org/licenses/LICENSE-2.0
      
       Unless required by applicable law or agreed to in writing, software
       distributed under the License is distributed on an "AS IS" BASIS,
       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       See the License for the specific language governing permissions and
       limitations under the License.
       */

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _objectAssign = __webpack_require__(0);

      var _objectAssign2 = _interopRequireDefault(_objectAssign);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function Quaternion(x, y, z, w) {

        this._x = x || 0;
        this._y = y || 0;
        this._z = z || 0;
        this._w = w !== undefined ? w : 1;
      }

      Quaternion.prototype = {

        constructor: Quaternion,

        get x() {

          return this._x;
        },

        set x(value) {

          this._x = value;
          this.onChangeCallback();
        },

        get y() {

          return this._y;
        },

        set y(value) {

          this._y = value;
          this.onChangeCallback();
        },

        get z() {

          return this._z;
        },

        set z(value) {

          this._z = value;
          this.onChangeCallback();
        },

        get w() {

          return this._w;
        },

        set w(value) {

          this._w = value;
          this.onChangeCallback();
        },

        set: function set(x, y, z, w) {

          this._x = x;
          this._y = y;
          this._z = z;
          this._w = w;

          this.onChangeCallback();

          return this;
        },

        clone: function clone() {

          return new this.constructor(this._x, this._y, this._z, this._w);
        },

        copy: function copy(quaternion) {

          this._x = quaternion.x;
          this._y = quaternion.y;
          this._z = quaternion.z;
          this._w = quaternion.w;

          this.onChangeCallback();

          return this;
        },

        setFromEuler: function setFromEuler(euler, update) {

          if ((euler && euler.isEuler) === false) {

            throw new Error('THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.');
          }

          // http://www.mathworks.com/matlabcentral/fileexchange/
          //  20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
          //  content/SpinCalc.m

          var c1 = Math.cos(euler._x / 2);
          var c2 = Math.cos(euler._y / 2);
          var c3 = Math.cos(euler._z / 2);
          var s1 = Math.sin(euler._x / 2);
          var s2 = Math.sin(euler._y / 2);
          var s3 = Math.sin(euler._z / 2);

          var order = euler.order;

          if (order === 'XYZ') {

            this._x = s1 * c2 * c3 + c1 * s2 * s3;
            this._y = c1 * s2 * c3 - s1 * c2 * s3;
            this._z = c1 * c2 * s3 + s1 * s2 * c3;
            this._w = c1 * c2 * c3 - s1 * s2 * s3;
          } else if (order === 'YXZ') {

            this._x = s1 * c2 * c3 + c1 * s2 * s3;
            this._y = c1 * s2 * c3 - s1 * c2 * s3;
            this._z = c1 * c2 * s3 - s1 * s2 * c3;
            this._w = c1 * c2 * c3 + s1 * s2 * s3;
          } else if (order === 'ZXY') {

            this._x = s1 * c2 * c3 - c1 * s2 * s3;
            this._y = c1 * s2 * c3 + s1 * c2 * s3;
            this._z = c1 * c2 * s3 + s1 * s2 * c3;
            this._w = c1 * c2 * c3 - s1 * s2 * s3;
          } else if (order === 'ZYX') {

            this._x = s1 * c2 * c3 - c1 * s2 * s3;
            this._y = c1 * s2 * c3 + s1 * c2 * s3;
            this._z = c1 * c2 * s3 - s1 * s2 * c3;
            this._w = c1 * c2 * c3 + s1 * s2 * s3;
          } else if (order === 'YZX') {

            this._x = s1 * c2 * c3 + c1 * s2 * s3;
            this._y = c1 * s2 * c3 + s1 * c2 * s3;
            this._z = c1 * c2 * s3 - s1 * s2 * c3;
            this._w = c1 * c2 * c3 - s1 * s2 * s3;
          } else if (order === 'XZY') {

            this._x = s1 * c2 * c3 - c1 * s2 * s3;
            this._y = c1 * s2 * c3 - s1 * c2 * s3;
            this._z = c1 * c2 * s3 + s1 * s2 * c3;
            this._w = c1 * c2 * c3 + s1 * s2 * s3;
          }

          if (update !== false) this.onChangeCallback();

          return this;
        },

        setFromAxisAngle: function setFromAxisAngle(axis, angle) {

          // http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm

          // assumes axis is normalized

          var halfAngle = angle / 2,
              s = Math.sin(halfAngle);

          this._x = axis.x * s;
          this._y = axis.y * s;
          this._z = axis.z * s;
          this._w = Math.cos(halfAngle);

          this.onChangeCallback();

          return this;
        },

        // normalize: function() {
        //
        //   var l = this.length();
        //
        //   if (l === 0) {
        //
        //     this._x = 0;
        //     this._y = 0;
        //     this._z = 0;
        //     this._w = 1;
        //
        //   } else {
        //
        //     l = 1 / l;
        //
        //     this._x = this._x * l;
        //     this._y = this._y * l;
        //     this._z = this._z * l;
        //     this._w = this._w * l;
        //
        //   }
        //
        //   this.onChangeCallback();
        //
        //   return this;
        //
        // },

        multiply: function multiply(q, p) {

          if (p !== undefined) {

            console.warn('THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.');
            return this.multiplyQuaternions(q, p);
          }

          return this.multiplyQuaternions(this, q);
        },

        multiplyQuaternions: function multiplyQuaternions(a, b) {

          // from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm

          var qax = a._x,
              qay = a._y,
              qaz = a._z,
              qaw = a._w;
          var qbx = b._x,
              qby = b._y,
              qbz = b._z,
              qbw = b._w;

          this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
          this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
          this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
          this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;

          this.onChangeCallback();

          return this;
        },

        slerp: function slerp(qb, t) {

          if (t === 0) return this;
          if (t === 1) return this.copy(qb);

          var x = this._x,
              y = this._y,
              z = this._z,
              w = this._w;

          // http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

          var cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;

          if (cosHalfTheta < 0) {

            this._w = -qb._w;
            this._x = -qb._x;
            this._y = -qb._y;
            this._z = -qb._z;

            cosHalfTheta = -cosHalfTheta;
          } else {

            this.copy(qb);
          }

          if (cosHalfTheta >= 1.0) {

            this._w = w;
            this._x = x;
            this._y = y;
            this._z = z;

            return this;
          }

          var sinHalfTheta = Math.sqrt(1.0 - cosHalfTheta * cosHalfTheta);

          if (Math.abs(sinHalfTheta) < 0.001) {

            this._w = 0.5 * (w + this._w);
            this._x = 0.5 * (x + this._x);
            this._y = 0.5 * (y + this._y);
            this._z = 0.5 * (z + this._z);

            return this;
          }

          var halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
          var ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta,
              ratioB = Math.sin(t * halfTheta) / sinHalfTheta;

          this._w = w * ratioA + this._w * ratioB;
          this._x = x * ratioA + this._x * ratioB;
          this._y = y * ratioA + this._y * ratioB;
          this._z = z * ratioA + this._z * ratioB;

          this.onChangeCallback();

          return this;
        },

        onChange: function onChange(callback) {

          this.onChangeCallback = callback;

          return this;
        },

        onChangeCallback: function onChangeCallback() {}

      };

      (0, _objectAssign2.default)(Quaternion, {

        slerp: function slerp(qa, qb, qm, t) {

          return qm.copy(qa).slerp(qb, t);
        },

        slerpFlat: function slerpFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t) {

          // fuzz-free, array-based Quaternion SLERP operation

          var x0 = src0[srcOffset0 + 0],
              y0 = src0[srcOffset0 + 1],
              z0 = src0[srcOffset0 + 2],
              w0 = src0[srcOffset0 + 3],
              x1 = src1[srcOffset1 + 0],
              y1 = src1[srcOffset1 + 1],
              z1 = src1[srcOffset1 + 2],
              w1 = src1[srcOffset1 + 3];

          if (w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1) {

            var s = 1 - t,
                cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1,
                dir = cos >= 0 ? 1 : -1,
                sqrSin = 1 - cos * cos;

            // Skip the Slerp for tiny steps to avoid numeric problems:
            if (sqrSin > Number.EPSILON) {

              var sin = Math.sqrt(sqrSin),
                  len = Math.atan2(sin, cos * dir);

              s = Math.sin(s * len) / sin;
              t = Math.sin(t * len) / sin;
            }

            var tDir = t * dir;

            x0 = x0 * s + x1 * tDir;
            y0 = y0 * s + y1 * tDir;
            z0 = z0 * s + z1 * tDir;
            w0 = w0 * s + w1 * tDir;

            // Normalize in case we just did a lerp:
            if (s === 1 - t) {

              var f = 1 / Math.sqrt(x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0);

              x0 *= f;
              y0 *= f;
              z0 *= f;
              w0 *= f;
            }
          }

          dst[dstOffset] = x0;
          dst[dstOffset + 1] = y0;
          dst[dstOffset + 2] = z0;
          dst[dstOffset + 3] = w0;
        }

      });

      exports.default = Quaternion;

      /***/
    },
    /* 7 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /**
       Copyright 2018 Alibaba Group
      
       Licensed under the Apache License, Version 2.0 (the "License");
       you may not use this file except in compliance with the License.
       You may obtain a copy of the License at
      
       http://www.apache.org/licenses/LICENSE-2.0
      
       Unless required by applicable law or agreed to in writing, software
       distributed under the License is distributed on an "AS IS" BASIS,
       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       See the License for the specific language governing permissions and
       limitations under the License.
       */

      var _Math = {
        DEG2RAD: Math.PI / 180,
        RAD2DEG: 180 / Math.PI,
        degToRad: function degToRad(degrees) {
          return degrees * _Math.DEG2RAD;
        },
        radToDeg: function radToDeg(radians) {
          return radians * _Math.RAD2DEG;
        }
      };

      exports.default = _Math;

      /***/
    },
    /* 8 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /**
       Copyright 2018 Alibaba Group
      
       Licensed under the Apache License, Version 2.0 (the "License");
       you may not use this file except in compliance with the License.
       You may obtain a copy of the License at
      
       http://www.apache.org/licenses/LICENSE-2.0
      
       Unless required by applicable law or agreed to in writing, software
       distributed under the License is distributed on an "AS IS" BASIS,
       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       See the License for the specific language governing permissions and
       limitations under the License.
       */

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _simpleLodash = __webpack_require__(1);

      var _simpleLodash2 = _interopRequireDefault(_simpleLodash);

      var _expression = __webpack_require__(9);

      var _expression2 = _interopRequireDefault(_expression);

      var _handlers = __webpack_require__(10);

      var _utils = __webpack_require__(2);

      var _fn = __webpack_require__(18);

      var _fn2 = _interopRequireDefault(_fn);

      var _objectAssign = __webpack_require__(0);

      var _objectAssign2 = _interopRequireDefault(_objectAssign);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      // transform
      var vendorTransform = (0, _utils.prefixStyle)('transform');

      var Binding = function () {
        function Binding(options, callback) {
          _classCallCheck(this, Binding);

          this._eventHandler = null;
          this.elTransforms = [];
          this.token = null;

          this.options = options;
          this.callback = callback;
          this.token = this.genToken();
          this._initElTransforms();
          var eventType = options.eventType;

          switch (eventType) {
            case 'pan':
              this._eventHandler = new _handlers.PanHandler(this);
              break;
            case 'orientation':
              this._eventHandler = new _handlers.OrientationHandler(this);
              break;
            case 'timing':
              this._eventHandler = new _handlers.TimingHandler(this);
              break;
            case 'scroll':
              this._eventHandler = new _handlers.ScrollHandler(this);
              break;
          }
        }

        _createClass(Binding, [{
          key: 'genToken',
          value: function genToken() {
            return parseInt(Math.random() * 10000000);
          }
        }, {
          key: '_initElTransforms',
          value: function _initElTransforms() {
            var _options$props = this.options.props,
                props = _options$props === undefined ? [] : _options$props;

            var elTransforms = this.elTransforms;
            props.forEach(function (prop) {
              var element = prop.element;

              if (!_simpleLodash2.default.find(elTransforms, function (o) {
                return o.element === element;
              })) {
                elTransforms.push({
                  element: element,
                  transform: {
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    scaleX: 1,
                    scaleY: 1,
                    scaleZ: 1,
                    rotateX: 0,
                    rotateY: 0,
                    rotateZ: 0
                  }
                });
              }
            });
          }
        }, {
          key: 'getValue',
          value: function getValue(params, expression) {
            return _expression2.default.execute(expression, (0, _objectAssign2.default)(_fn2.default, params));
          }

          // TODO scroll.contentOffset 待确认及补全

        }, {
          key: 'setProperty',
          value: function setProperty(el, property, val) {
            var elTransform = _simpleLodash2.default.find(this.elTransforms, function (o) {
              return o.element === el;
            });
            switch (property) {
              case 'transform.translateX':
                elTransform.transform.translateX = (0, _utils.px)(val);
                break;
              case 'transform.translateY':
                elTransform.transform.translateY = (0, _utils.px)(val);
                break;
              case 'transform.translateZ':
                elTransform.transform.translateZ = (0, _utils.px)(val);
                break;
              case 'transform.rotateX':
                elTransform.transform.rotateX = val;
                break;
              case 'transform.rotateY':
                elTransform.transform.rotateY = val;
                break;
              case 'transform.rotateZ':
                elTransform.transform.rotateZ = val;
                break;
              case 'transform.rotate':
                elTransform.transform.rotateZ = val;
                break;
              case 'transform.scaleX':
                elTransform.transform.scaleX = val;
                break;
              case 'transform.scaleY':
                elTransform.transform.scaleY = val;
                break;
              case 'transform.scale':
                elTransform.transform.scaleX = val;
                elTransform.transform.scaleY = val;
                break;
              case 'width':
                el.style.width = (0, _utils.px)(val) + 'px';
                break;
              case 'height':
                el.style.height = (0, _utils.px)(val) + 'px';
                break;
              case 'opacity':
                el.style.opacity = val;
                break;
              case 'background-color':
                el.style['background-color'] = val;
                break;
              case 'color':
                el.style.color = val;
                break;
              case 'border-top-left-radius':
              case 'border-top-right-radius':
              case 'border-bottom-left-radius':
              case 'border-bottom-right-radius':
              case 'border-radius':
                el.style[property] = (0, _utils.px)(val) + 'px';
                break;
            }
            el.style[vendorTransform] = ['translateX(' + elTransform.transform.translateX + 'px)', 'translateY(' + elTransform.transform.translateY + 'px)', 'translateZ(' + elTransform.transform.translateZ + 'px)', 'scaleX(' + elTransform.transform.scaleX + ')', 'scaleY(' + elTransform.transform.scaleY + ')', 'rotateX(' + elTransform.transform.rotateX + 'deg)', 'rotateY(' + elTransform.transform.rotateY + 'deg)', 'rotateZ(' + elTransform.transform.rotateZ + 'deg)'].join(' ');
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            this._eventHandler.destroy();
          }
        }]);

        return Binding;
      }();

      module.exports = {
        _bindingInstances: [],
        /**
         * 绑定
         * @param options 参数
         * @example
         {
           anchor:blockRef,
           eventType:'pan',
           props: [
           {
             element:blockRef,
             property:'transform.translateX',
             expression:{
               origin:"x+1",
               transformed:"{\"type\":\"+\",\"children\":[{\"type\":\"Identifier\",\"value\":\"x\"},{\"type\":\"NumericLiteral\",\"value\":1}]}"
             }
           }
          ]
         }
         */
        bind: function bind(options) {
          var _this = this;

          var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

          if (!options) {
            throw new Error('should pass options for binding');
          }
          var existInstances = _simpleLodash2.default.filter(this._bindingInstances, function (instance) {
            if (options.anchor) {
              return instance.options.anchor === options.anchor && instance.options.eventType === options.eventType;
            }
          });
          // 销毁上次实例
          if (existInstances) {
            _simpleLodash2.default.forEach(existInstances, function (inst) {
              inst.destroy();
              _this._bindingInstances = _simpleLodash2.default.dropWhile(_this._bindingInstances, function (bindInst) {
                return bindInst === inst;
              });
            });
          }
          var binding = new Binding(options, callback);
          this._bindingInstances.push(binding);
          return { token: binding.token };
        },

        /**
         *  @param {object} options
         *  @example
         *  {eventType:'pan',
         *   token:self.gesToken}
         */
        unbind: function unbind(options) {
          if (!options) {
            throw new Error('should pass options for binding');
          }
          var inst = _simpleLodash2.default.find(this._bindingInstances, function (instance) {
            return instance.options.eventType === options.eventType && instance.token === options.token;
          });
          if (inst) {
            inst.destroy();
          }
        },
        unbindAll: function unbindAll() {
          this._bindingInstances.forEach(function (inst) {
            inst.destroy({
              eventType: inst.options.eventType,
              token: inst.token
            });
          });
        },
        getComputedStyle: function getComputedStyle(elRef) {
          var computedStyle = window.getComputedStyle(elRef);
          var style = (0, _utils.matrixToTransformObj)(computedStyle[vendorTransform]);
          style.opacity = Number(computedStyle.opacity);
          style.width = (0, _utils.pxTo750)(computedStyle.width.replace('px', ''));
          style.height = (0, _utils.pxTo750)(computedStyle.height.replace('px', ''));
          style['background-color'] = computedStyle['background-color'];
          style.color = computedStyle.color;
          style.width = (0, _utils.pxTo750)(computedStyle.width.replace('px', ''));
          style.height = (0, _utils.pxTo750)(computedStyle.height.replace('px', ''));
          style['border-top-left-radius'] = (0, _utils.pxTo750)(computedStyle['border-top-left-radius'].replace('px', ''));
          style['border-top-right-radius'] = (0, _utils.pxTo750)(computedStyle['border-top-right-radius'].replace('px', ''));
          style['border-bottom-left-radius'] = (0, _utils.pxTo750)(computedStyle['border-bottom-left-radius'].replace('px', ''));
          style['border-bottom-right-radius'] = (0, _utils.pxTo750)(computedStyle['border-bottom-right-radius'].replace('px', ''));
          return style;
        }
      };

      /***/
    },
    /* 9 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /**
       Copyright 2018 Alibaba Group
      
       Licensed under the Apache License, Version 2.0 (the "License");
       you may not use this file except in compliance with the License.
       You may obtain a copy of the License at
      
       http://www.apache.org/licenses/LICENSE-2.0
      
       Unless required by applicable law or agreed to in writing, software
       distributed under the License is distributed on an "AS IS" BASIS,
       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       See the License for the specific language governing permissions and
       limitations under the License.
       */

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function toNumber(value) {
        return Number(value);
      }

      function toBoolean(value) {
        return !!value;
      }

      function equal(v1, v2) {
        return v1 == v2;
      }

      function strictlyEqual(v1, v2) {
        return v1 === v2;
      }

      function execute(node, scope) {

        var type = node.type;
        var children = node.children;
        switch (type) {
          case 'StringLiteral':
            return String(node.value);
          case 'NumericLiteral':
            return parseFloat(node.value);
          case 'BooleanLiteral':
            return !!node.value;
          case 'Identifier':
            return scope[node.value];
          case 'CallExpression':
            var fn = execute(children[0], scope);
            // console.log('fn:',fn)
            var args = [];
            var jsonArguments = children[1].children;
            for (var i = 0; i < jsonArguments.length; i++) {
              args.push(execute(jsonArguments[i], scope));
            }
            return fn.apply(null, args);
          case '?':
            if (execute(children[0], scope)) {
              return execute(children[1], scope);
            }
            return execute(children[2], scope);
          case '+':
            return toNumber(execute(children[0], scope)) + toNumber(execute(children[1], scope));
          case '-':
            return toNumber(execute(children[0], scope)) - toNumber(execute(children[1], scope));
          case '*':
            return toNumber(execute(children[0], scope)) * toNumber(execute(children[1], scope));
          case '/':
            return toNumber(execute(children[0], scope)) / toNumber(execute(children[1], scope));
          case '%':
            return toNumber(execute(children[0], scope)) % toNumber(execute(children[1], scope));
          case '**':
            return Math.pow(toNumber(execute(children[0], scope)), toNumber(execute(children[1], scope)));

          case '>':
            return toNumber(execute(children[0], scope)) > toNumber(execute(children[1], scope));
          case '<':
            return toNumber(execute(children[0], scope)) < toNumber(execute(children[1], scope));
          case '>=':
            return toNumber(execute(children[0], scope)) >= toNumber(execute(children[1], scope));
          case '<=':
            return toNumber(execute(children[0], scope)) <= toNumber(execute(children[1], scope));

          case '==':
            return equal(execute(children[0], scope), execute(children[1], scope));
          case '===':
            return strictlyEqual(execute(children[0], scope), execute(children[1], scope));
          case '!=':
            return !equal(execute(children[0], scope), execute(children[1], scope));
          case '!==':
            return !strictlyEqual(execute(children[0], scope), execute(children[1], scope));

          case '&&':
            var result = void 0;
            result = execute(children[0], scope);
            if (!toBoolean(result)) return result;
            return execute(children[1], scope);
          case '||':
            result = execute(children[0], scope);
            if (toBoolean(result)) return result;
            return execute(children[1], scope);
          case '!':
            return !toBoolean(execute(children[0], scope));

        }
        return null;
      }

      exports.default = {
        execute: execute
      };

      /***/
    },
    /* 10 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /**
       Copyright 2018 Alibaba Group
      
       Licensed under the Apache License, Version 2.0 (the "License");
       you may not use this file except in compliance with the License.
       You may obtain a copy of the License at
      
       http://www.apache.org/licenses/LICENSE-2.0
      
       Unless required by applicable law or agreed to in writing, software
       distributed under the License is distributed on an "AS IS" BASIS,
       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       See the License for the specific language governing permissions and
       limitations under the License.
       */

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ScrollHandler = exports.TimingHandler = exports.OrientationHandler = exports.PanHandler = undefined;

      var _pan = __webpack_require__(11);

      var _pan2 = _interopRequireDefault(_pan);

      var _orientation = __webpack_require__(13);

      var _orientation2 = _interopRequireDefault(_orientation);

      var _timing = __webpack_require__(16);

      var _timing2 = _interopRequireDefault(_timing);

      var _scroll = __webpack_require__(17);

      var _scroll2 = _interopRequireDefault(_scroll);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.PanHandler = _pan2.default;
      exports.OrientationHandler = _orientation2.default;
      exports.TimingHandler = _timing2.default;
      exports.ScrollHandler = _scroll2.default;

      /***/
    },
    /* 11 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /**
       Copyright 2018 Alibaba Group
      
       Licensed under the Apache License, Version 2.0 (the "License");
       you may not use this file except in compliance with the License.
       You may obtain a copy of the License at
      
       http://www.apache.org/licenses/LICENSE-2.0
      
       Unless required by applicable law or agreed to in writing, software
       distributed under the License is distributed on an "AS IS" BASIS,
       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       See the License for the specific language governing permissions and
       limitations under the License.
       */

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _pan = __webpack_require__(12);

      var _pan2 = _interopRequireDefault(_pan);

      var _common = __webpack_require__(3);

      var _common2 = _interopRequireDefault(_common);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var PanHandler = function (_CommonHandler) {
        _inherits(PanHandler, _CommonHandler);

        function PanHandler(binding) {
          _classCallCheck(this, PanHandler);

          var _this = _possibleConstructorReturn(this, (PanHandler.__proto__ || Object.getPrototypeOf(PanHandler)).call(this, binding));

          _this._onPan = function (e) {
            var x = e.deltaX;
            var y = e.deltaY;
            var _this$binding$options = _this.binding.options.props,
                props = _this$binding$options === undefined ? [] : _this$binding$options;

            props.forEach(function (prop) {
              var element = prop.element,
                  property = prop.property,
                  expression = prop.expression;

              var transformed = JSON.parse(expression.transformed);
              var val = _this.binding.getValue({ x: x, y: y }, transformed);
              _this.binding.setProperty(element, property, val);
            });
          };

          _this._onPanStart = function () {
            _this.binding.callback({ deltaX: 0, state: 'start', deltaY: 0 });
          };

          _this._onPanEnd = function (e) {
            _this.binding.callback({ deltaX: parseInt(e.deltaX), state: 'end', deltaY: parseInt(e.deltaY) });
          };

          var anchor = binding.options.anchor;

          var panGesture = _this.panGesture = new _pan2.default(anchor, binding.options.options);
          panGesture.on('pan', _this._onPan);
          panGesture.on('panstart', _this._onPanStart);
          panGesture.on('panend', _this._onPanEnd);
          return _this;
        }

        _createClass(PanHandler, [{
          key: 'destroy',
          value: function destroy() {
            var panGesture = this.panGesture;
            panGesture.off('pan', this._onPan);
            panGesture.off('panstart', this._onPanStart);
            panGesture.off('panend', this._onPanEnd);
            panGesture.destroy();
          }
        }]);

        return PanHandler;
      }(_common2.default);

      exports.default = PanHandler;
      ;

      /***/
    },
    /* 12 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /**
       Copyright 2018 Alibaba Group
      
       Licensed under the Apache License, Version 2.0 (the "License");
       you may not use this file except in compliance with the License.
       You may obtain a copy of the License at
      
       http://www.apache.org/licenses/LICENSE-2.0
      
       Unless required by applicable law or agreed to in writing, software
       distributed under the License is distributed on an "AS IS" BASIS,
       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       See the License for the specific language governing permissions and
       limitations under the License.
       */

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _simpleLodash = __webpack_require__(1);

      var _simpleLodash2 = _interopRequireDefault(_simpleLodash);

      var _objectAssign = __webpack_require__(0);

      var _objectAssign2 = _interopRequireDefault(_objectAssign);

      var _utils = __webpack_require__(2);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var abs = Math.abs;

      var DEFAULT_CONFIG = {
        thresholdX: 10,
        thresholdY: 10,
        touchAction: 'auto',
        touchActionRatio: 1 / 2
      };

      var PanGesture = function () {
        function PanGesture(el, config) {
          var _this = this;

          _classCallCheck(this, PanGesture);

          this.startX = null;
          this.startY = null;
          this.panStartX = null;
          this.panStartY = null;
          this.deltaX = 0;
          this.deltaY = 0;
          this.events = {
            'panstart': [],
            'pan': [],
            'panend': [],
            'pancancel': []
          };

          this.onTouchStart = function (e) {
            // e.preventDefault();
          };

          this.handlePanStart = function (e) {
            e.preventDefault();
            if (_this.panStartX === null || _this.panStartY === null) {
              _this.panStartX = (0, _utils.pxTo750)(e.touches[0].pageX);
              _this.panStartY = (0, _utils.pxTo750)(e.touches[0].pageY);
              _this.events.panstart.forEach(function (handler) {
                handler(e);
              });
              return;
            }
          };

          this.onTouchMove = function (e) {
            var _config = _this.config,
                thresholdX = _config.thresholdX,
                thresholdY = _config.thresholdY,
                touchAction = _config.touchAction,
                touchActionRatio = _config.touchActionRatio;

            if (_this.startX === null || _this.startY === null) {
              _this.startX = e.touches[0].pageX;
              _this.startY = e.touches[0].pageY;
            }
            var dx = e.touches[0].pageX - _this.startX;
            var dy = e.touches[0].pageY - _this.startY;

            switch (touchAction) {
              case 'auto':
                e.preventDefault();
                if (abs(dx) >= thresholdX || abs(dy) >= thresholdY) {
                  _this.handlePanStart(e);
                }
                break;
              case 'pan-x':
                if (abs(dx) >= thresholdX && abs(dy / dx) < touchActionRatio && abs(dy) < thresholdY) {
                  _this.handlePanStart(e);
                }
                break;
              case 'pan-y':
                if (abs(dy) >= thresholdY && abs(dx / dy) < touchActionRatio && abs(dx) < thresholdX) {
                  _this.handlePanStart(e);
                }
                break;
            }

            if (_this.panStartX !== null && _this.panStartY !== null) {
              switch (touchAction) {
                case 'auto':
                  _this.deltaX = (0, _utils.pxTo750)(e.touches[0].pageX) - _this.panStartX;
                  _this.deltaY = (0, _utils.pxTo750)(e.touches[0].pageY) - _this.panStartY;
                  break;
                case 'pan-x':
                  _this.deltaX = (0, _utils.pxTo750)(e.touches[0].pageX) - _this.panStartX;
                  _this.deltaY = 0;
                  break;
                case 'pan-y':
                  _this.deltaX = 0;
                  _this.deltaY = (0, _utils.pxTo750)(e.touches[0].pageY) - _this.panStartY;
                  break;
              }
              e.deltaX = _this.deltaX;
              e.deltaY = _this.deltaY;
              _this.events.pan.forEach(function (handler) {
                handler(e);
              });
            }
          };

          this.onTouchEnd = function (e) {
            e.deltaX = _this.deltaX;
            e.deltaY = _this.deltaY;
            _this.events.panend.forEach(function (handler) {
              handler(e);
            });
          };

          this.onTouchCancel = function (e) {
            e.deltaX = _this.deltaX;
            e.deltaY = _this.deltaY;
            _this.events.pancancel.forEach(function (handler) {
              handler(e);
            });
          };

          this.el = el;
          this.config = (0, _objectAssign2.default)(DEFAULT_CONFIG, config);
          this.el.addEventListener('touchstart', this.onTouchStart);
          this.el.addEventListener('touchmove', this.onTouchMove);
          this.el.addEventListener('touchend', this.onTouchEnd);
          this.el.addEventListener('touchcancel', this.onTouchCancel);
        }

        _createClass(PanGesture, [{
          key: 'on',
          value: function on(fn, handler) {
            if (!this.events[fn]) return;
            this.events[fn].push(handler);
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            this.el.removeEventListener('touchstart', this.onTouchStart);
            this.el.removeEventListener('touchmove', this.onTouchMove);
            this.el.removeEventListener('touchend', this.onTouchEnd);
            this.el.removeEventListener('touchcancel', this.onTouchCancel);
            this.offAll();
            this.startX = null;
            this.startY = null;
            this.panStartX = null;
            this.panStartY = null;
          }
        }, {
          key: 'offAll',
          value: function offAll() {
            var _this2 = this;

            _simpleLodash2.default.map(this.events, function (handlers, fn) {
              _simpleLodash2.default.forEach(handlers, function (handler) {
                _this2.off(fn, handler);
              });
            });
          }
        }, {
          key: 'off',
          value: function off(fn, handler) {
            if (!fn) return;
            if (fn && this.events[fn] && this.events[fn].length) {
              if (!handler) return;
              var h = _simpleLodash2.default.find(this.events[fn], function (o) {
                return o === handler;
              });
              var i = _simpleLodash2.default.findIndex(this.events[fn], function (o) {
                return o === handler;
              });
              if (h) {
                this.events[fn].splice(i, 1);
              }
            }
          }
        }]);

        return PanGesture;
      }();

      exports.default = PanGesture;

      /***/
    },
    /* 13 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /**
       Copyright 2018 Alibaba Group
      
       Licensed under the Apache License, Version 2.0 (the "License");
       you may not use this file except in compliance with the License.
       You may obtain a copy of the License at
      
       http://www.apache.org/licenses/LICENSE-2.0
      
       Unless required by applicable law or agreed to in writing, software
       distributed under the License is distributed on an "AS IS" BASIS,
       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       See the License for the specific language governing permissions and
       limitations under the License.
       */

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _vector = __webpack_require__(5);

      var _vector2 = _interopRequireDefault(_vector);

      var _orientation_controls = __webpack_require__(14);

      var _orientation_controls2 = _interopRequireDefault(_orientation_controls);

      var _math = __webpack_require__(7);

      var _math2 = _interopRequireDefault(_math);

      var _animationUtil = __webpack_require__(4);

      var _common = __webpack_require__(3);

      var _common2 = _interopRequireDefault(_common);

      var _objectAssign = __webpack_require__(0);

      var _objectAssign2 = _interopRequireDefault(_objectAssign);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var OrientationHandler = function (_CommonHandler) {
        _inherits(OrientationHandler, _CommonHandler);

        function OrientationHandler(binding) {
          _classCallCheck(this, OrientationHandler);

          var _this = _possibleConstructorReturn(this, (OrientationHandler.__proto__ || Object.getPrototypeOf(OrientationHandler)).call(this, binding));

          _this.binding = null;
          _this.control = null;
          _this.start = null;
          _this.timer = null;

          _this._onOrientation = function (e) {
            var props = _this.binding.options.props;

            props.forEach(function (prop) {
              var element = prop.element,
                  property = prop.property,
                  expression = prop.expression;

              var transformed = JSON.parse(expression.transformed);
              var val = _this.binding.getValue(e, transformed);
              _this.binding.setProperty(element, property, val);
            });
          };

          _this.options = (0, _objectAssign2.default)({
            sceneType: '2d'
          }, binding.options.options);
          _this.binding = binding;
          if (_this.options.sceneType.toLowerCase() === '2d') {
            _this.controlX = new _orientation_controls2.default({ beta: 90 });
            _this.controlY = new _orientation_controls2.default({ gamma: 90, alpha: 0 });
          } else {
            _this.control = new _orientation_controls2.default();
          }
          _this.run();
          return _this;
        }

        _createClass(OrientationHandler, [{
          key: 'run',
          value: function run() {
            var _this2 = this;

            // 2d场景
            if (this.options.sceneType.toLowerCase() === '2d') {
              this.controlX.update();
              this.controlY.update();
              var _controlX$deviceOrien = this.controlX.deviceOrientation,
                  alpha = _controlX$deviceOrien.alpha,
                  beta = _controlX$deviceOrien.beta,
                  gamma = _controlX$deviceOrien.gamma,
                  dalpha = _controlX$deviceOrien.dalpha,
                  dbeta = _controlX$deviceOrien.dbeta,
                  dgamma = _controlX$deviceOrien.dgamma;

              var vecX = new _vector2.default(0, 0, 1);
              vecX.applyQuaternion(this.controlX.quaternion);
              var vecY = new _vector2.default(0, 1, 1);
              vecY.applyQuaternion(this.controlY.quaternion);
              // 0,180 -> -90,90
              var x = _math2.default.radToDeg(Math.acos(vecX.x)) - 90;
              var y = _math2.default.radToDeg(Math.acos(vecY.y)) - 90;
              if (!this.start && !isNaN(x) && !isNaN(y)) {
                this.start = {
                  x: x,
                  y: y
                };
              }
              if (this.start) {
                var dx = x - this.start.x;
                var dy = y - this.start.y;
                this._onOrientation({
                  x: x, y: y, dx: dx, dy: dy, alpha: alpha, beta: beta, gamma: gamma, dalpha: dalpha, dbeta: dbeta, dgamma: dgamma
                });
              }
            } else {
              // 3d场景
              this.control.update();
              var _control$deviceOrient = this.control.deviceOrientation,
                  _alpha = _control$deviceOrient.alpha,
                  _beta = _control$deviceOrient.beta,
                  _gamma = _control$deviceOrient.gamma,
                  _dalpha = _control$deviceOrient.dalpha,
                  _dbeta = _control$deviceOrient.dbeta,
                  _dgamma = _control$deviceOrient.dgamma;
              var _control$quaternion = this.control.quaternion,
                  _x = _control$quaternion.x,
                  _y = _control$quaternion.y,
                  z = _control$quaternion.z;

              this._onOrientation({ alpha: _alpha, beta: _beta, gamma: _gamma, dalpha: _dalpha, dbeta: _dbeta, dgamma: _dgamma, x: _x, y: _y, z: z });
            }
            this.timer = (0, _animationUtil.raf)(function () {
              _this2.run();
            });
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            if (this.timer) {
              (0, _animationUtil.cancelRAF)(this.timer);
              this.timer = null;
            }
          }
        }]);

        return OrientationHandler;
      }(_common2.default);

      exports.default = OrientationHandler;

      /***/
    },
    /* 14 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /**
       Copyright 2018 Alibaba Group
      
       Licensed under the Apache License, Version 2.0 (the "License");
       you may not use this file except in compliance with the License.
       You may obtain a copy of the License at
      
       http://www.apache.org/licenses/LICENSE-2.0
      
       Unless required by applicable law or agreed to in writing, software
       distributed under the License is distributed on an "AS IS" BASIS,
       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       See the License for the specific language governing permissions and
       limitations under the License.
       */

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _quaternion = __webpack_require__(6);

      var _quaternion2 = _interopRequireDefault(_quaternion);

      var _vector = __webpack_require__(5);

      var _vector2 = _interopRequireDefault(_vector);

      var _euler = __webpack_require__(15);

      var _euler2 = _interopRequireDefault(_euler);

      var _math = __webpack_require__(7);

      var _math2 = _interopRequireDefault(_math);

      var _objectAssign = __webpack_require__(0);

      var _objectAssign2 = _interopRequireDefault(_objectAssign);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function isNaNOrUndefined(n) {
        return n === undefined || isNaN(n) || n === null;
      }

      function DeviceOrientationControls(object) {
        var scope = this;
        this.object = (0, _objectAssign2.default)({
          alphaOffsetAngle: 0,
          betaOffsetAngle: 0,
          gammaOffsetAngle: 0
        }, object);

        this.alphaOffsetAngle = this.object.alphaOffsetAngle;
        this.betaOffsetAngle = this.object.betaOffsetAngle;
        this.gammaOffsetAngle = this.object.gammaOffsetAngle;

        this.quaternion = new _quaternion2.default(0, 0, 0, 1);
        this.enabled = true;
        this.deviceOrientation = {};
        this.screenOrientation = 0;
        this.start = null;

        this.recordsAlpha = [];

        function formatRecords(records, threshold) {
          var l = records.length;
          var times = 0;
          if (l > 1) {
            for (var i = 0; i < l; i++) {
              if (records[i - 1] != undefined && records[i] != undefined) {
                if (records[i] - records[i - 1] < -threshold / 2) {
                  times = Math.floor(records[i - 1] / threshold) + 1;
                  records[i] = records[i] + times * threshold;
                }
                if (records[i] - records[i - 1] > threshold / 2) {
                  records[i] = records[i] - threshold;
                }
              }
            }
          }
          return records;
        }

        var onDeviceOrientationChangeEvent = function onDeviceOrientationChangeEvent(e) {

          var alpha = e.alpha;
          var beta = e.beta;
          var gamma = e.gamma;
          var recordsAlpha = scope.recordsAlpha;

          if (!scope.start) {
            scope.start = {
              alpha: alpha,
              beta: beta,
              gamma: gamma
            };
          }
          recordsAlpha.push(alpha);
          if (recordsAlpha.length > 5) {
            recordsAlpha = formatRecords(recordsAlpha, 360);
            recordsAlpha.shift();
          }

          var formatAlpha = (recordsAlpha[recordsAlpha.length - 1] - scope.start.alpha) % 360;
          if (!isNaNOrUndefined(alpha) && !isNaNOrUndefined(beta) && !isNaNOrUndefined(gamma)) {
            scope.enabled = true;
          }

          scope.deviceOrientation = {
            alpha: alpha,
            beta: beta,
            gamma: gamma,
            formatAlpha: formatAlpha,
            dalpha: alpha - scope.start.alpha,
            dbeta: beta - scope.start.beta,
            dgamma: gamma - scope.start.gamma
          };
        };

        var onScreenOrientationChangeEvent = function onScreenOrientationChangeEvent() {

          scope.screenOrientation = window.orientation || 0;
        };

        // The angles alpha, beta and gamma form a set of intrinsic Tait-Bryan angles of type Z-X'-Y''

        var setObjectQuaternion = function () {

          var zee = new _vector2.default(0, 0, 1);

          var euler = new _euler2.default();

          var q0 = new _quaternion2.default();

          var q1 = new _quaternion2.default(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5)); // - PI/2 around the x-axis

          return function (quaternion, alpha, beta, gamma, orient) {

            euler.set(beta, alpha, -gamma, 'YXZ'); // 'ZXY' for the device, but 'YXZ' for us

            quaternion.setFromEuler(euler); // orient the device

            quaternion.multiply(q1); // camera looks out the back of the device, not the top

            quaternion.multiply(q0.setFromAxisAngle(zee, -orient)); // adjust for screen orientation
          };
        }();

        this.connect = function () {
          onScreenOrientationChangeEvent(); // run once on load
          window.addEventListener('orientationchange', onScreenOrientationChangeEvent, false);
          window.addEventListener('deviceorientation', onDeviceOrientationChangeEvent, false);
        };

        this.disconnect = function () {
          window.removeEventListener('orientationchange', onScreenOrientationChangeEvent, false);
          window.removeEventListener('deviceorientation', onDeviceOrientationChangeEvent, false);
          scope.enabled = false;
        };

        this.update = function () {
          if (scope.enabled === false) return;
          var alpha = !isNaNOrUndefined(scope.deviceOrientation.formatAlpha) ? _math2.default.degToRad(!isNaNOrUndefined(scope.object.alpha) ? scope.object.alpha : scope.deviceOrientation.formatAlpha + scope.alphaOffsetAngle) : 0; // Z
          var beta = !isNaNOrUndefined(scope.deviceOrientation.beta) ? _math2.default.degToRad(!isNaNOrUndefined(scope.object.beta) ? scope.object.beta : scope.deviceOrientation.beta + scope.betaOffsetAngle) : 0; // X'
          var gamma = !isNaNOrUndefined(scope.deviceOrientation.gamma) ? _math2.default.degToRad(!isNaNOrUndefined(scope.object.gamma) ? scope.object.gamma : scope.deviceOrientation.gamma + scope.gammaOffsetAngle) : 0; // Y''
          var orient = scope.screenOrientation ? _math2.default.degToRad(scope.screenOrientation) : 0; // O
          setObjectQuaternion(scope.quaternion, alpha, beta, gamma, orient);
        };

        this.updateAlphaOffsetAngle = function (angle) {
          this.alphaOffsetAngle = angle;
          this.update();
        };
        this.updateBetaOffsetAngle = function (angle) {
          this.betaOffsetAngle = angle;
          this.update();
        };
        this.updateGammaOffsetAngle = function (angle) {
          this.gammaOffsetAngle = angle;
          this.update();
        };

        this.dispose = function () {
          this.disconnect();
        };

        this.connect();
      };

      exports.default = DeviceOrientationControls;

      /***/
    },
    /* 15 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /**
       Copyright 2018 Alibaba Group
      
       Licensed under the Apache License, Version 2.0 (the "License");
       you may not use this file except in compliance with the License.
       You may obtain a copy of the License at
      
       http://www.apache.org/licenses/LICENSE-2.0
      
       Unless required by applicable law or agreed to in writing, software
       distributed under the License is distributed on an "AS IS" BASIS,
       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       See the License for the specific language governing permissions and
       limitations under the License.
       */

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var Euler = function () {
        function Euler(x, y, z, order) {
          _classCallCheck(this, Euler);

          this.isEuler = true;
          this._x = 0;
          this._y = 0;
          this._z = 0;

          this._x = x || 0;
          this._y = y || 0;
          this._z = z || 0;
          this._order = order || Euler.DefaultOrder;
        }

        _createClass(Euler, [{
          key: 'set',
          value: function set(x, y, z, order) {
            this._x = x;
            this._y = y;
            this._z = z;
            this._order = order || this._order;
            this.onChangeCallback();
            return this;
          }
        }, {
          key: 'onChange',
          value: function onChange(callback) {
            this.onChangeCallback = callback;
            return this;
          }
        }, {
          key: 'onChangeCallback',
          value: function onChangeCallback() {}
        }, {
          key: 'order',
          get: function get() {
            return this._order;
          },
          set: function set(value) {
            this._order = value;
            this.onChangeCallback();
          }
        }]);

        return Euler;
      }();

      Euler.RotationOrders = ['XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX'];
      Euler.DefaultOrder = 'XYZ';
      exports.default = Euler;

      /***/
    },
    /* 16 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /**
       Copyright 2018 Alibaba Group
      
       Licensed under the Apache License, Version 2.0 (the "License");
       you may not use this file except in compliance with the License.
       You may obtain a copy of the License at
      
       http://www.apache.org/licenses/LICENSE-2.0
      
       Unless required by applicable law or agreed to in writing, software
       distributed under the License is distributed on an "AS IS" BASIS,
       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       See the License for the specific language governing permissions and
       limitations under the License.
       */

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _animationUtil = __webpack_require__(4);

      var _animationUtil2 = _interopRequireDefault(_animationUtil);

      var _common = __webpack_require__(3);

      var _common2 = _interopRequireDefault(_common);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var TimingHandler = function (_CommonHandler) {
        _inherits(TimingHandler, _CommonHandler);

        function TimingHandler(binding) {
          _classCallCheck(this, TimingHandler);

          var _this = _possibleConstructorReturn(this, (TimingHandler.__proto__ || Object.getPrototypeOf(TimingHandler)).call(this, binding));

          var _this$binding$options = _this.binding.options,
              _this$binding$options2 = _this$binding$options.props,
              props = _this$binding$options2 === undefined ? [] : _this$binding$options2,
              exitExpression = _this$binding$options.exitExpression;

          props.forEach(function (prop) {
            var expression = prop.expression;

            if (expression && expression.transformed && typeof expression.transformed === 'string') {
              expression.transformed = JSON.parse(expression.transformed);
            }
          });

          var exitTransformed = void 0;
          if (exitExpression && exitExpression.transformed) {
            exitTransformed = JSON.parse(exitExpression.transformed);
          }

          var animation = _this.animation = new _animationUtil2.default({
            duration: Infinity,
            easing: 'linear',
            onStart: function onStart() {
              _this.binding.callback({ state: 'start', t: 0 });
            },
            onRun: function onRun(e) {
              if (exitTransformed && _this.binding.getValue({ t: e.t }, exitTransformed)) {
                _this.animation.stop();
              }
              props.forEach(function (prop) {
                _this.animate(_extends({
                  exitTransformed: exitTransformed,
                  t: e.t
                }, prop));
              });
            },
            onStop: function onStop(e) {
              _this.binding.callback({ state: 'exit', t: e.t - 1000 / 60 });
            }
          });
          animation.run();
          return _this;
        }

        _createClass(TimingHandler, [{
          key: 'animate',
          value: function animate(args) {
            var element = args.element,
                property = args.property,
                expression = args.expression,
                t = args.t;

            var value = this.binding.getValue({ t: t }, expression.transformed);
            this.binding.setProperty(element, property, value);
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            if (this.animation) {
              this.animation.stop();
            }
          }
        }]);

        return TimingHandler;
      }(_common2.default);

      exports.default = TimingHandler;

      /***/
    },
    /* 17 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /**
       Copyright 2018 Alibaba Group
      
       Licensed under the Apache License, Version 2.0 (the "License");
       you may not use this file except in compliance with the License.
       You may obtain a copy of the License at
      
       http://www.apache.org/licenses/LICENSE-2.0
      
       Unless required by applicable law or agreed to in writing, software
       distributed under the License is distributed on an "AS IS" BASIS,
       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       See the License for the specific language governing permissions and
       limitations under the License.
       */

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _common = __webpack_require__(3);

      var _common2 = _interopRequireDefault(_common);

      var _utils = __webpack_require__(2);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      function isTurner(prev, now) {

        return prev / now < 0;
      }

      var ScrollHandler = function (_CommonHandler) {
        _inherits(ScrollHandler, _CommonHandler);

        function ScrollHandler(binding) {
          _classCallCheck(this, ScrollHandler);

          var _this = _possibleConstructorReturn(this, (ScrollHandler.__proto__ || Object.getPrototypeOf(ScrollHandler)).call(this, binding));

          _this.dx = 0;
          _this.dy = 0;
          _this.prevX = null;
          _this.prevY = null;
          _this.tx = 0;
          _this.ty = 0;
          _this.tdx = 0;
          _this.tdy = 0;

          _this._onScroll = function (e) {
            var props = _this.binding.options.props;

            var callback = _this.binding.callback;
            var x = (0, _utils.pxTo750)(e.target.scrollLeft);
            var y = (0, _utils.pxTo750)(e.target.scrollTop);
            props.forEach(function (prop) {
              var element = prop.element,
                  property = prop.property,
                  expression = prop.expression;

              var transformed = JSON.parse(expression.transformed);
              var val = _this.binding.getValue({
                x: x,
                y: y,
                dx: _this.dx,
                dy: _this.dy,
                tdx: _this.tdx,
                tdy: _this.tdy
              }, transformed);

              _this.binding.setProperty(element, property, val);
            });

            if (_this.prevX !== null && _this.prevY !== null) {
              var dx = x - _this.prevX;
              var dy = y - _this.prevY;
              var cbParams = {
                x: x,
                y: y
              };
              // 拐点
              if (isTurner(_this.dx, dx)) {
                _this.tx = x;
                cbParams.state = 'turn';
              }
              if (isTurner(_this.dy, dy)) {
                _this.ty = y;
                cbParams.state = 'turn';
              }

              _this.dx = cbParams.dx = x - _this.prevX;
              _this.dy = cbParams.dy = y - _this.prevY;
              _this.tdx = cbParams.tdx = x - _this.tx;
              _this.tdy = cbParams.tdy = y - _this.ty;
              if (cbParams.state) {
                callback(cbParams);
              }
            }

            _this.prevX = x;
            _this.prevY = y;
          };

          var anchor = binding.options.anchor;

          _this.tx = (0, _utils.pxTo750)(anchor.scrollLeft);
          _this.ty = (0, _utils.pxTo750)(anchor.scrollTop);
          anchor.addEventListener('scroll', _this._onScroll);
          return _this;
        }

        _createClass(ScrollHandler, [{
          key: 'destroy',
          value: function destroy() {
            var anchor = this.binding.options.anchor;

            anchor.removeEventListener('scroll', this._onScroll);
          }
        }]);

        return ScrollHandler;
      }(_common2.default);

      exports.default = ScrollHandler;

      /***/
    },
    /* 18 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /**
       Copyright 2018 Alibaba Group
      
       Licensed under the Apache License, Version 2.0 (the "License");
       you may not use this file except in compliance with the License.
       You may obtain a copy of the License at
      
       http://www.apache.org/licenses/LICENSE-2.0
      
       Unless required by applicable law or agreed to in writing, software
       distributed under the License is distributed on an "AS IS" BASIS,
       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       See the License for the specific language governing permissions and
       limitations under the License.
       */

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _simpleLodash = __webpack_require__(1);

      var _simpleLodash2 = _interopRequireDefault(_simpleLodash);

      var _animationUtil = __webpack_require__(4);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      // inset function
      function colorToDecimal(hexColor) {
        var hex = hexColor.replace(/'|"|#/g, '');
        return parseInt(hex, 16);
      }

      function decToHex(dec) {
        var hex = dec.toString(16);
        var a = [];
        for (var i = 0; i < 6 - hex.length; i++) {
          a.push('0');
        }
        return a.join('') + hex;
      }

      function parseColor(hexColor) {
        var hex = hexColor.replace(/'|"|#/g, '');
        hex = hex.length === 3 ? [hex[0], hex[0], hex[1], hex[1], hex[2], hex[2]].join('') : hex;
        var r = '' + hex[0] + hex[1];
        var g = '' + hex[2] + hex[3];
        var b = '' + hex[4] + hex[5];
        return {
          r: r,
          g: g,
          b: b,
          dr: colorToDecimal(r),
          dg: colorToDecimal(g),
          db: colorToDecimal(b)
        };
      }

      var Fn = {
        max: Math.max,
        min: Math.min,
        sin: Math.sin,
        cos: Math.cos,
        tan: Math.tan,
        sqrt: Math.sqrt,
        cbrt: Math.cbrt,
        log: Math.log,
        abs: Math.abs,
        atan: Math.atan,
        floor: Math.floor,
        ceil: Math.ceil,
        pow: Math.pow,
        exp: Math.exp,
        PI: Math.PI,
        E: Math.E,
        acos: Math.acos,
        asin: Math.asin,
        sign: Math.sign,
        atan2: Math.atan2,
        round: Math.round,
        rgb: function rgb(r, g, b) {
          return 'rgb(' + parseInt(r) + ',' + parseInt(g) + ',' + parseInt(b) + ')';
        },
        rgba: function rgba(r, g, b, a) {
          return 'rgb(' + parseInt(r) + ',' + parseInt(g) + ',' + parseInt(b) + ',' + a + ')';
        },
        getArgs: function getArgs() {
          return arguments;
        },
        evaluateColor: function evaluateColor(colorFrom, colorTo, percent) {
          percent = percent > 1 ? 1 : percent;
          var from = parseColor(colorFrom);
          var to = parseColor(colorTo);
          var dr = parseInt((to.dr - from.dr) * percent + from.dr);
          var dg = parseInt((to.dg - from.dg) * percent + from.dg);
          var db = parseInt((to.db - from.db) * percent + from.db);
          var resDec = dr * 16 * 16 * 16 * 16 + dg * 16 * 16 + db;
          return '#' + decToHex(resDec);
        }
      };

      // inset all easing functions
      _simpleLodash2.default.map(_animationUtil.Easing, function (v, k) {
        if (k !== 'cubicBezier') {
          Fn[k] = function (t, begin, offset, duration) {
            t = Math.max(Math.min(t / duration, 1));
            return v(t) * offset + begin;
          };
        }
      });

      Fn.cubicBezier = function (t, begin, offset, duration, x1, y1, x2, y2) {
        t = Math.max(Math.min(t / duration, 1));
        var epsilon = 1000 / 60 / duration / 4;
        return (0, _animationUtil.Bezier)(x1, y1, x2, y2, epsilon)(t) * offset + begin; // eslint-disable-line
      };

      exports.default = Fn;

      /***/
    }]
    /******/)
  );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)(module)))

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

var _raxText = __webpack_require__(3);

var _raxText2 = _interopRequireDefault(_raxText);

var _raxTouchable = __webpack_require__(25);

var _raxTouchable2 = _interopRequireDefault(_raxTouchable);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var buttonStyles = [styles.button, props.style];
      var textStyles = [styles.text];

      if (props.color) {
        textStyles.push({ color: props.color });
      }

      if (props.disabled) {
        buttonStyles.push(styles.buttonDisabled);
        textStyles.push(styles.textDisabled);
      }

      var content = props.children || props.title;
      if (typeof content === 'string') {
        content = (0, _rax.createElement)(_raxText2.default, { style: textStyles }, content);
      }

      return (0, _rax.createElement)(_raxTouchable2.default, _extends({}, props, { style: buttonStyles }), content);
    }
  }]);

  return Button;
}(_rax.Component);

Button.propTypes = {};

var styles = {
  button: {},
  text: {
    color: '#0C42FD',
    textAlign: 'center',
    padding: 16,
    fontSize: 36
  },
  buttonDisabled: {},
  textDisabled: {
    color: '#cdcdcd'
  }
};

exports.default = Button;
module.exports = exports['default'];

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _StackHeader = __webpack_require__(38);

var _StackHeader2 = _interopRequireDefault(_StackHeader);

var _HeaderLeft = __webpack_require__(58);

var _HeaderLeft2 = _interopRequireDefault(_HeaderLeft);

var _HeaderRight = __webpack_require__(57);

var _HeaderRight2 = _interopRequireDefault(_HeaderRight);

var _Util = __webpack_require__(5);

var _Constant = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FULL_WIDTH = 750;

var StackHeaderContainer = function (_PureComponent) {
  _inherits(StackHeaderContainer, _PureComponent);

  function StackHeaderContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StackHeaderContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StackHeaderContainer.__proto__ || Object.getPrototypeOf(StackHeaderContainer)).call.apply(_ref, [this].concat(args))), _this), _this.getBindingProps = function () {
      var _this$props$headerMod = _this.props.headerMode,
          headerMode = _this$props$headerMod === undefined ? 'screen' : _this$props$headerMod;


      var bindingProps = [];

      switch (headerMode) {
        case 'float':
          bindingProps = [{
            element: _this.refs.current,
            property: 'transform.translateX',
            expression: {
              origin: 'max(0,x/2)'
            }
          }, {
            element: _this.refs.current,
            property: 'opacity',
            expression: {
              origin: 'max(0,1-x/' + FULL_WIDTH + ')'
            }
          }, {
            element: _this.refs.prev,
            property: 'transform.translateX',
            expression: {
              origin: 'x/2-' + FULL_WIDTH / 2
            }
          }, {
            element: _this.refs.prev,
            property: 'opacity',
            expression: {
              origin: 'x/' + FULL_WIDTH
            }
          }];

          if (_this.refs.currentBackTitle) {
            bindingProps.push({
              element: _this.refs.currentBackTitle,
              property: 'opacity',
              expression: {
                origin: 'max(0,1-x/' + FULL_WIDTH + '*3)'
              }
            });
          }

          if (_this.refs.prevBackTitle) {
            bindingProps.push({
              element: _this.refs.prevBackTitle,
              property: 'opacity',
              expression: {
                origin: 'x/' + FULL_WIDTH
              }
            });
          }

          if (_this.refs.currentRight) {
            bindingProps.push({
              element: _this.refs.currentRight,
              property: 'opacity',
              expression: {
                origin: 'max(0,1-x/' + FULL_WIDTH + ')'
              }
            });
          }

          if (_this.refs.prevRight) {
            bindingProps.push({
              element: _this.refs.prevRight,
              property: 'opacity',
              expression: {
                origin: 'x/' + FULL_WIDTH
              }
            });
          }

          break;
        case 'screen':
          // bindingProps = [{
          //   element: this.refs.current,
          //   property: 'transform.translateX',
          //   expression: {
          //     origin: 'max(0,x)'
          //   }
          // }, {
          //   element: this.refs.prev,
          //   property: 'transform.translateX',
          //   expression: {
          //     origin: `x*${PREV_VIEW_RATIO}-${PREV_VIEW_RATIO * FULL_WIDTH}`
          //   }
          // }];
          break;
        case 'none':
          break;
      }
      return bindingProps;
    }, _this.slideIn = function (options) {
      var _this$props$headerMod2 = _this.props.headerMode,
          headerMode = _this$props$headerMod2 === undefined ? 'screen' : _this$props$headerMod2;
      var timingFunction = options.timingFunction,
          duration = options.duration;

      var animationConfig = {
        timingFunction: timingFunction,
        duration: duration
      };

      switch (headerMode) {
        case 'float':

          (0, _Util.animate)(_this.refs.prev, { transform: 'translate(-' + FULL_WIDTH / 2 + 'rem,0)', opacity: 0 }, animationConfig);

          (0, _Util.animate)(_this.refs.current, { transform: 'translate(0,0)', opacity: 1 }, animationConfig);

          (0, _Util.animate)(_this.refs.prevBackTitle, { opacity: 0 }, animationConfig);

          (0, _Util.animate)(_this.refs.currentBackTitle, { opacity: 1 }, animationConfig);

          (0, _Util.animate)(_this.refs.prevRight, { opacity: 0 }, animationConfig);

          (0, _Util.animate)(_this.refs.currentRight, { opacity: 1 }, animationConfig);

          break;
        case 'screen':

          // animate(this.refs.prev, {transform: `translate(-${PREV_VIEW_RATIO * FULL_WIDTH}rem,0)`}, animationConfig);

          // animate(this.refs.current, {transform: 'translate(0,0)'}, animationConfig);

          break;
        case 'none':
          break;
      }
    }, _this.slideOut = function (options) {
      var _this$props$headerMod3 = _this.props.headerMode,
          headerMode = _this$props$headerMod3 === undefined ? 'screen' : _this$props$headerMod3;
      var timingFunction = options.timingFunction,
          duration = options.duration;

      var animationConfig = {
        timingFunction: timingFunction,
        duration: duration
      };
      switch (headerMode) {
        case 'float':

          (0, _Util.animate)(_this.refs.prev, { transform: 'translate(0,0)', opacity: 1 }, animationConfig);

          (0, _Util.animate)(_this.refs.current, { transform: 'translate(' + FULL_WIDTH / 2 + 'rem,0)', opacity: 0 }, animationConfig);

          (0, _Util.animate)(_this.refs.prevBackTitle, { opacity: 1 }, animationConfig);

          (0, _Util.animate)(_this.refs.currentBackTitle, { opacity: 0 }, animationConfig);

          (0, _Util.animate)(_this.refs.prevRight, { opacity: 1 }, animationConfig);

          (0, _Util.animate)(_this.refs.currentRight, { opacity: 0 }, animationConfig);

          break;
        case 'screen':

          // animate(this.refs.prev, {transform: 'translate(0,0)'}, animationConfig);
          //
          // animate(this.refs.current, {transform: `translate(${FULL_WIDTH}rem,0)`}, animationConfig);

          break;
        case 'none':
          break;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StackHeaderContainer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$navigationOpti = _props.navigationOptionsArray,
          navigationOptionsArray = _props$navigationOpti === undefined ? [] : _props$navigationOpti,
          _props$isSingle = _props.isSingle,
          isSingle = _props$isSingle === undefined ? false : _props$isSingle,
          _props$views = _props.views,
          views = _props$views === undefined ? [] : _props$views,
          headerMode = _props.headerMode,
          type = _props.type;

      if (headerMode === 'none') return null;
      var firstNavigationOptions = navigationOptionsArray[0] || {};
      var _firstNavigationOptio = firstNavigationOptions.headerStyle,
          headerStyle = _firstNavigationOptio === undefined ? {} : _firstNavigationOptio;

      var l = views.length;
      return (0, _rax.createElement)(
        _raxView2.default,
        { style: [styles.container, { height: (headerStyle.height || _Constant.HEIGHT_STACK_HEADER_DEFAULT) + _Util.statusBarHeight }] },
        views.map(function (view, i) {
          var isCurrent = i === l - 1;
          var isPrev = i === l - 2;
          var prevView = views[i - 1];
          var navigationOptions = navigationOptionsArray[i];
          var viewStyle = {};
          if (isSingle) {
            viewStyle = {};
          } else {
            if (type === 'push') {
              viewStyle = isCurrent ? styles.current : {};
            } else if (type === 'pop') {
              viewStyle = isCurrent ? {} : styles.prev;
            }
          }

          return (0, _rax.createElement)(_StackHeader2.default, _extends({
            key: 'stack_header_' + i,
            index: i,
            ref: isCurrent ? 'current' : isPrev ? 'prev' : null,
            title: view.routeName,
            headerBackTitle: prevView && prevView.routeName
          }, navigationOptions, {
            headerMode: headerMode,
            params: view.screenParams,
            style: viewStyle,
            navigation: view.navigation }));
        }),
        headerMode === 'float' ? views.map(function (view, i) {
          var isCurrent = i === l - 1;
          var isPrev = i === l - 2;
          var prevView = views[i - 1];
          var navigationOptions = navigationOptionsArray[i];
          var header = navigationOptions.header,
              _navigationOptions$he = navigationOptions.headerStyle,
              headerStyle = _navigationOptions$he === undefined ? {} : _navigationOptions$he;

          var opacity = 1;
          if (isSingle) {
            opacity = 1;
          } else {
            if (type === 'push') {
              opacity = isCurrent ? 0 : 1;
            } else if (type === 'pop') {
              opacity = isCurrent ? 1 : 0;
            }
          }
          if (header !== undefined) {
            return header;
          }

          return i >= l - 2 ? [(0, _rax.createElement)(_HeaderLeft2.default, _extends({
            key: 'header_back_title_' + i,
            index: i,
            ref: isCurrent ? 'currentBackTitle' : isPrev ? 'prevBackTitle' : null,
            headerBackTitle: prevView && prevView.routeName
          }, navigationOptions, {
            style: { opacity: opacity },
            headerStyle: headerStyle,
            headerMode: headerMode,
            navigation: view.navigation
          })), (0, _rax.createElement)(_HeaderRight2.default, _extends({
            key: 'header_right_' + i,
            ref: isCurrent ? 'currentRight' : isPrev ? 'prevRight' : null,
            headerBackTitle: prevView && prevView.routeName
          }, navigationOptions, {
            style: { opacity: opacity },
            headerStyle: headerStyle,
            headerMode: headerMode,
            navigation: view.navigation
          }))] : null;
        }) : null
      );
    }
  }]);

  return StackHeaderContainer;
}(_rax.PureComponent);

StackHeaderContainer.defaultProps = {
  navigationOptionsArray: [],
  headerMode: 'screen',
  isSingle: false,
  views: [],
  type: 'push'
};


var styles = {
  container: {
    position: 'absolute',
    width: 750,
    top: 0,
    backgroundColor: '#fff',
    overflow: 'hidden'
  },
  current: {
    transform: 'translateX(750rem)'
  },
  prev: {}
};

exports.default = StackHeaderContainer;
module.exports = exports['default'];

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 边缘侧滑事件
 */


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _universalEnv = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EDGE_PAN_THRESHOLD = 100;

var EdgePanView = function (_Component) {
  _inherits(EdgePanView, _Component);

  function EdgePanView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EdgePanView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EdgePanView.__proto__ || Object.getPrototypeOf(EdgePanView)).call.apply(_ref, [this].concat(args))), _this), _this.onHorizontalPan = function (e) {
      if (e && e.state === 'start') {
        _this.handleEdgePanStart(e);
      }
    }, _this.onTouchStart = function (e) {
      _this.handleEdgePanStart(e);
    }, _this.handleEdgePanStart = function (e) {
      e.state = 'start';
      var onEdgeHorizontalPan = _this.props.onEdgeHorizontalPan;

      if (e.changedTouches[0].screenX < EDGE_PAN_THRESHOLD) {
        onEdgeHorizontalPan && onEdgeHorizontalPan(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EdgePanView, [{
    key: 'render',
    value: function render() {

      var props = _extends({}, this.props);
      if (_universalEnv.isWeex) {
        props.onHorizontalPan = this.onHorizontalPan;
      } else {
        props.onTouchStart = this.onTouchStart;
      }

      return (0, _rax.createElement)(_raxView2.default, props);
    }
  }]);

  return EdgePanView;
}(_rax.Component);

EdgePanView.defaultProps = {
  onEdgeHorizontalPan: function onEdgeHorizontalPan() {}
};
exports.default = EdgePanView;
module.exports = exports['default'];

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _simpleLodash = __webpack_require__(17);

var _simpleLodash2 = _interopRequireDefault(_simpleLodash);

var _Util = __webpack_require__(5);

var _Constant = __webpack_require__(6);

var _History = __webpack_require__(22);

var _Navigation = __webpack_require__(54);

var _BaseNavigator2 = __webpack_require__(59);

var _BaseNavigator3 = _interopRequireDefault(_BaseNavigator2);

var _TabViewContainer = __webpack_require__(138);

var _TabViewContainer2 = _interopRequireDefault(_TabViewContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  fullScreen: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 750
  }
};

var TabNavigatorComponent = function (_BaseNavigator) {
  _inherits(TabNavigatorComponent, _BaseNavigator);

  function TabNavigatorComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TabNavigatorComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TabNavigatorComponent.__proto__ || Object.getPrototypeOf(TabNavigatorComponent)).call.apply(_ref, [this].concat(args))), _this), _this.navigatorType = _Constant.TYPE_NAVIGATOR_TAB, _this.state = {
      screen: null,
      screens: [],
      curIndex: 0
    }, _this.updateScreen = function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var name = options.name,
          action = options.action,
          params = options.params;
      var _this$props = _this.props,
          routerConfig = _this$props.routerConfig,
          navigation = _this$props.navigation,
          history = _this$props.history;

      var route = (0, _Util.matchRouteByName)(routerConfig, name);
      if (!route) return;

      // navigation.state.routeName = name;
      // navigation.state.params = params;
      // navigation.state.key = history.location.key;

      _this.asyncGetScreenComponentFromRoute(route).then(function (screen) {
        if (screen) {
          var index = _simpleLodash2.default.findIndex(Object.keys(routerConfig), function (routerName) {
            return routerName === route.name;
          });
          var screens = _this.state.screens;
          screens[index] = {
            name: route.name,
            screen: screen,
            screenParams: options.params || params, action: action,
            navigation: navigation,
            routeName: route.name,
            routePath: route.path
          };
          _this.setState({ screens: screens, curIndex: index });
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TabNavigatorComponent, [{
    key: 'resolveAllScreens',
    value: function resolveAllScreens() {
      var _this2 = this;

      var _props = this.props,
          _props$routerConfig = _props.routerConfig,
          routerConfig = _props$routerConfig === undefined ? {} : _props$routerConfig,
          navigation = _props.navigation,
          initialRouteName = _props.initialRouteName,
          initialRouteParams = _props.initialRouteParams;

      initialRouteName = initialRouteName || Object.keys(routerConfig)[0];
      initialRouteParams = initialRouteParams || {};
      _simpleLodash2.default.map(routerConfig, function (route, name) {
        var screen = _this2.getScreenComponentFromRoute(route);
        if (screen) {
          navigation.state.routeName = name;
          var index = _simpleLodash2.default.findIndex(Object.keys(routerConfig), function (routerName) {
            return routerName === name;
          });
          var screens = _this2.state.screens;
          screens[index] = {
            name: name,
            screen: screen,
            navigation: navigation,
            routeName: name,
            routePath: route.path
          };
          _this2.setState({ screens: screens });
        }
      });
      navigation.state.routeName = initialRouteName;
      navigation.state.params = initialRouteParams;
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(
        _raxView2.default,
        { style: styles.fullScreen },
        (0, _rax.createElement)(_TabViewContainer2.default, _extends({}, this.props, { ref: 'viewContainer', history: this.history, screens: this.state.screens,
          curIndex: this.state.curIndex }))
      );
    }
  }]);

  return TabNavigatorComponent;
}(_BaseNavigator3.default);

TabNavigatorComponent.contextTypes = {
  parentNavigator: _rax.PropTypes.Component
};
TabNavigatorComponent.defaultProps = {
  initialRouteName: null,
  initialRouteParams: {},
  tabBarOptions: null,
  navigationOptions: function navigationOptions(_ref2) {
    var navigation = _ref2.navigation;
    return {
      // Object to override the distance of touch start from the edge of the screen to recognize gestures
      gestureResponseDistance: {
        horizontal: 25,
        vertical: 135
      }
    };
  }
};


function TabNavigator(routerConfig) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$initialRoute = options.initialRouteName,
      initialRouteName = _options$initialRoute === undefined ? Object.keys(routerConfig)[0] : _options$initialRoute,
      _options$initialRoute2 = options.initialRouteParams,
      initialRouteParams = _options$initialRoute2 === undefined ? {} : _options$initialRoute2;


  var initialRoute = routerConfig[initialRouteName];

  var history = (0, _History.createHistory)({
    initialEntries: initialRoute && initialRoute.path ? [initialRoute.path] : ['/']
  });

  var subNavigation = new _Navigation.Navigation({
    routerConfig: routerConfig,
    navigatorType: _Constant.TYPE_NAVIGATOR_TAB,
    options: options,
    history: history,
    initialRouteName: initialRouteName,
    initialRouteParams: initialRouteParams
  });

  var navigation = (0, _Navigation.createNavigation)({
    routerConfig: routerConfig,
    navigatorType: _Constant.TYPE_NAVIGATOR_TAB,
    history: history,
    subNavigation: subNavigation,
    initialRouteName: initialRouteName,
    initialRouteParams: initialRouteParams
  });

  var TabNavigatorContainer = function (_Component) {
    _inherits(TabNavigatorContainer, _Component);

    function TabNavigatorContainer() {
      _classCallCheck(this, TabNavigatorContainer);

      return _possibleConstructorReturn(this, (TabNavigatorContainer.__proto__ || Object.getPrototypeOf(TabNavigatorContainer)).apply(this, arguments));
    }

    _createClass(TabNavigatorContainer, [{
      key: 'render',
      value: function render() {
        var props = _extends({
          routerConfig: routerConfig
        }, options, {
          navigation: navigation,
          subNavigation: subNavigation,
          history: history
        });
        return (0, _rax.createElement)(TabNavigatorComponent, _extends({}, this.props, props));
      }
    }]);

    return TabNavigatorContainer;
  }(_rax.Component);

  TabNavigatorContainer.routerConfig = routerConfig;
  TabNavigatorContainer.navigatorType = _Constant.TYPE_NAVIGATOR_TAB;
  TabNavigatorContainer.subNavigation = subNavigation;
  TabNavigatorContainer.initialRouteName = initialRouteName;
  TabNavigatorContainer.initialRouteParams = initialRouteParams;


  return TabNavigatorContainer;
}

exports.default = TabNavigator;
module.exports = exports['default'];

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _simpleLodash = __webpack_require__(17);

var _simpleLodash2 = _interopRequireDefault(_simpleLodash);

var _objectAssign = __webpack_require__(11);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _TabBar = __webpack_require__(139);

var _TabBar2 = _interopRequireDefault(_TabBar);

var _Util = __webpack_require__(5);

var _raxTabPanel = __webpack_require__(39);

var _BaseViewContainer2 = __webpack_require__(55);

var _BaseViewContainer3 = _interopRequireDefault(_BaseViewContainer2);

var _StackHeader = __webpack_require__(38);

var _StackHeader2 = _interopRequireDefault(_StackHeader);

var _Constant = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var inheritOptionKeys = ['headerLeft', 'headerRight', 'header', 'headerTitle', 'headerStyle'];

var styles = {
  view: {
    width: 750,
    position: 'absolute',
    top: 0,
    bottom: 0,
    backgroundColor: '#fff'
  },
  tabBarTop: {
    top: 0,
    borderBottomWidth: 1
  },
  tabBarBottom: {
    bottom: 0,
    borderTopWidth: 1
  }
};

var TabViewContainer = function (_BaseViewContainer) {
  _inherits(TabViewContainer, _BaseViewContainer);

  function TabViewContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TabViewContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TabViewContainer.__proto__ || Object.getPrototypeOf(TabViewContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      curIndex: 0
    }, _this.beforeTabControllerSwitch = function (e) {
      _this.setState({ curIndex: e.index });
    }, _this.afterTabControllerSwitch = function (e) {
      if (e.params.type === 'default' || e.params.type === 'historyChange' || e.prevIndex === e.index) return;
      var _this$props = _this.props,
          navigation = _this$props.navigation,
          routerConfig = _this$props.routerConfig;

      var routerName = Object.keys(routerConfig)[e.index];
      if (e.prevIndex >= 0) {
        navigation.navigate(routerName);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TabViewContainer, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.curIndex !== this.props.curIndex) {
        this.refs.tabBar.switchTo(nextProps.curIndex, { type: 'historyChange' });
        this.refs.tabController.switchTo(nextProps.curIndex, { params: { type: 'historyChange' } });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var parentNavigation = this.context.parentNavigation;
      var showStackHeader = false;
      var headerMode = parentNavigation && parentNavigation.config.options && parentNavigation.config.options.headerMode || 'screen';
      if (parentNavigation && parentNavigation.navigatorType === 'stack') {
        if (headerMode) {
          if (headerMode === 'screen' || headerMode === 'float') {
            showStackHeader = true;
          } else if (headerMode === 'none') {
            showStackHeader = false;
          }
        }
      }
      var _props = this.props,
          screens = _props.screens,
          navigation = _props.navigation,
          routerConfig = _props.routerConfig,
          animationEnabled = _props.animationEnabled,
          swipeEnabled = _props.swipeEnabled,
          tabBarOptions = _props.tabBarOptions,
          tabBarPosition = _props.tabBarPosition,
          tabBarComponent = _props.tabBarComponent;
      var curIndex = this.state.curIndex;

      var parentNavigationOptions = {};
      if (parentNavigation && parentNavigation.config.options) {
        parentNavigationOptions = (0, _Util.pick)((0, _Util.resolveFn)(parentNavigation.config.options.navigationOptions, { navigation: navigation }), [].concat(inheritOptionKeys, ['title'])) || {};
      }
      if (!this.parentNavigationTitle && parentNavigation) {
        // cache title
        this.parentNavigationTitle = parentNavigationOptions.title || parentNavigation.state.routeName;
      }
      var tabBarHeight = tabBarOptions && tabBarOptions.style && tabBarOptions.style.height || _Constant.HEIGHT_TAB_BAR_DEFAULT;
      var options = {
        tabBarComponent: tabBarComponent || _TabBar2.default
      };
      var tabBarNavigationOptions = [];
      var stackNavigationOptions = [];
      Object.keys(routerConfig).map(function (routerName) {
        var view = _simpleLodash2.default.find(screens, function (o) {
          return o.name === routerName;
        });
        if (view && view.screen) {
          stackNavigationOptions.push((0, _Util.pick)((0, _objectAssign2.default)(parentNavigationOptions, _this2.resolveNavigationOptions(view)), inheritOptionKeys));
          // screen的覆盖navigator里设置的配置
          tabBarNavigationOptions.push(_this2.resolveNavigationOptions(view));
        }
      });

      var tabBarProps = _extends({}, this.props, {
        style: {}
      }, tabBarOptions, {
        ref: 'tabBar',
        tabBarNavigationOptions: tabBarNavigationOptions
      });
      var curScreen = screens && screens[curIndex] || {};
      var navigationOptions = stackNavigationOptions && stackNavigationOptions[curIndex] || {};

      navigationOptions = _extends({}, navigationOptions, tabBarNavigationOptions[curIndex]);
      // 处理undefined被null覆盖的问题
      if (tabBarNavigationOptions[curIndex] && tabBarNavigationOptions[curIndex].header === undefined) {
        navigationOptions.header = undefined;
      }

      var _navigationOptions = navigationOptions,
          _navigationOptions$he = _navigationOptions.headerStyle,
          headerStyle = _navigationOptions$he === undefined ? {} : _navigationOptions$he;


      if (navigationOptions && navigationOptions.header === null) {
        showStackHeader = false;
      }
      return (0, _rax.createElement)(
        _raxView2.default,
        { style: [styles.view] },
        options.tabBarComponent && tabBarPosition === 'top' ? (0, _rax.createElement)(options.tabBarComponent, _extends({}, tabBarProps, { style: [styles.tabBarTop, _extends({}, tabBarProps.style)] })) : null,
        showStackHeader ? (0, _rax.createElement)(_StackHeader2.default
        // title={curScreen.routeName}
        // headerBackTitle={prevView && prevView.routeName}
        , _extends({}, navigationOptions, {
          title: navigationOptions.headerTitle || this.parentNavigationTitle,
          headerMode: 'screen',
          params: curScreen.screenParams,
          navigation: navigation
        })) : null,
        (0, _rax.createElement)(
          _raxTabPanel.TabController,
          {
            ref: 'tabController',
            style: {
              position: 'absolute',
              width: 750,
              top: (tabBarPosition === 'top' ? tabBarHeight : 0) + (showStackHeader ? (headerStyle.height || _Constant.HEIGHT_STACK_HEADER_DEFAULT) + (headerStyle.top || _Util.statusBarHeight) : 0),
              bottom: tabBarPosition === 'bottom' ? tabBarHeight : 0
            },
            forbidSwipeBackOnIOS: true,
            isPanEnabled: swipeEnabled,
            isSlideEnabled: animationEnabled,
            beforeSwitch: this.beforeTabControllerSwitch,
            afterSwitch: this.afterTabControllerSwitch
          },
          Object.keys(routerConfig).map(function (routerName, index) {
            var view = _simpleLodash2.default.find(screens, function (o) {
              return o.name === routerName;
            });
            return (0, _rax.createElement)(
              _raxTabPanel.TabPanel,
              { style: { backgroundColor: '#E9E9EF' }, key: index },
              view && view.screen ? (0, _rax.createElement)(view.screen, { navigation: _this2.props.navigation, params: screen.screenParams }) : null
            );
          })
        ),
        options.tabBarComponent && tabBarPosition === 'bottom' ? (0, _rax.createElement)(options.tabBarComponent, _extends({}, tabBarProps, { style: [styles.tabBarBottom, _extends({}, tabBarProps.style)] })) : null
      );
    }
  }]);

  return TabViewContainer;
}(_BaseViewContainer3.default);

TabViewContainer.contextTypes = {
  parentNavigation: _rax.PropTypes.Component
};
TabViewContainer.defaultProps = {
  tabBarComponent: null,
  tabBarPosition: 'bottom',
  configureTransition: {
    currentTransitionProps: {},
    nextTransitionProps: {}
  },
  animationEnabled: false,
  swipeEnabled: false,
  lazy: true,
  tabBarOptions: null,
  navigationOptions: null
};
exports.default = TabViewContainer;
module.exports = exports['default'];

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxText = __webpack_require__(3);

var _raxText2 = _interopRequireDefault(_raxText);

var _Util = __webpack_require__(5);

var _Constant = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabBar = function (_Component) {
  _inherits(TabBar, _Component);

  function TabBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TabBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TabBar.__proto__ || Object.getPrototypeOf(TabBar)).call.apply(_ref, [this].concat(args))), _this), _this.prevIndex = null, _this.state = {
      curIndex: 0
    }, _this.handleClick = function (_ref2) {
      var name = _ref2.name,
          index = _ref2.index;
      var navigation = _this.props.navigation;

      if (name && navigation) {
        navigation.navigate(name);
      }
      _this.switchTo(index, { type: 'click' });
    }, _this.switchTo = function (index) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _this$props = _this.props,
          afterSwitch = _this$props.afterSwitch,
          beforeSwitch = _this$props.beforeSwitch;

      beforeSwitch({
        index: index,
        prevIndex: _this.prevIndex,
        options: options
      });
      _this.setState({
        curIndex: index
      });
      afterSwitch({
        index: index,
        prevIndex: _this.prevIndex,
        options: options
      });
      _this.prevIndex = index;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TabBar, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var curIndex = this.state.curIndex;
      var _props = this.props,
          history = _props.history,
          routerConfig = _props.routerConfig,
          style = _props.style,
          tabStyle = _props.tabStyle,
          activeTintColor = _props.activeTintColor,
          activeBackgroundColor = _props.activeBackgroundColor,
          inactiveTintColor = _props.inactiveTintColor,
          inactiveBackgroundColor = _props.inactiveBackgroundColor,
          _props$tabBarNavigati = _props.tabBarNavigationOptions,
          tabBarNavigationOptions = _props$tabBarNavigati === undefined ? [] : _props$tabBarNavigati,
          showLabel = _props.showLabel,
          labelStyle = _props.labelStyle;

      return (0, _rax.createElement)(
        _raxView2.default,
        { style: [styles.tab, style] },
        history ? Object.keys(routerConfig).map(function (name, i) {
          var isActive = i === curIndex;
          var navigationOptions = tabBarNavigationOptions[i] || {};
          var tabBarLabel = navigationOptions.tabBarLabel,
              _navigationOptions$ti = navigationOptions.title,
              title = _navigationOptions$ti === undefined ? name : _navigationOptions$ti,
              tabBarIcon = navigationOptions.tabBarIcon;

          tabBarIcon = typeof tabBarIcon === 'function' ? tabBarIcon({ tintColor: isActive ? activeTintColor : inactiveTintColor }) : tabBarIcon;
          return (0, _rax.createElement)(
            _raxView2.default,
            { key: i,
              onClick: function onClick() {
                _this2.handleClick({ name: name, index: i });
              },
              style: [styles.tabItem, { backgroundColor: isActive ? activeBackgroundColor : inactiveBackgroundColor }, tabStyle] },
            tabBarIcon && tabBarIcon.type ? (0, _rax.createElement)(tabBarIcon.type, _extends({}, tabBarIcon.props, { style: [styles.tabBarIcon, tabBarIcon.props.style] })) : null,
            showLabel ? (0, _rax.createElement)(
              _raxText2.default,
              {
                style: [styles.tabItemTxt, { color: isActive ? activeTintColor : inactiveTintColor }, labelStyle] },
              tabBarLabel || title
            ) : null
          );
        }) : null
      );
    }
  }]);

  return TabBar;
}(_rax.Component);

TabBar.defaultProps = {
  afterSwitch: _Util.noop,
  beforeSwitch: _Util.noop,
  // Label and icon color of the active tab.
  activeTintColor: 'rgb(12, 66, 253)',
  // Background color of the active tab.
  activeBackgroundColor: 'rgba(0,0,0,0)',
  // Label and icon color of the inactive tab.
  inactiveTintColor: '#888',
  // Background color of the inactive tab
  inactiveBackgroundColor: 'rgba(0,0,0,0)',
  // Whether to show label for tab, default is true.
  showLabel: true,
  //   Style object for the tab bar.
  style: {},
  //   Style object for the tab label.
  labelStyle: {},
  // Style object for the tab.
  tabStyle: {},
  //   Whether label font should scale to respect Text Size accessibility settings, default is true.
  allowFontScaling: true
};


var styles = {
  tab: {
    position: 'absolute',
    width: 750,
    height: _Constant.HEIGHT_TAB_BAR_DEFAULT,
    flexDirection: 'row',
    backgroundColor: '#fefefe',
    borderColor: '#ccc'
  },
  tabItem: {
    height: _Constant.HEIGHT_TAB_BAR_DEFAULT,
    backgroundColor: 'rgba(0,0,0,0)',
    textAlign: 'center',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabItemTxt: {
    textAlign: 'center',
    color: '#ccc',
    fontSize: 32
  },
  tabItemActive: {
    backgroundColor: '#ccc'
  },
  tabBarIcon: {
    width: 60,
    height: 60
  }
};

exports.default = TabBar;
module.exports = exports['default'];

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @jsx createElement */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _universalGoldlog = __webpack_require__(61);

var _universalGoldlog2 = _interopRequireDefault(_universalGoldlog);

var _DefaultView = __webpack_require__(146);

var _DefaultView2 = _interopRequireDefault(_DefaultView);

var _SliderView = __webpack_require__(147);

var _SliderView2 = _interopRequireDefault(_SliderView);

var _universalEnv = __webpack_require__(1);

var _Utils = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DURATION = 250;
var FULL_WIDTH = 750;
var DEFAULT_EASING = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';

var styles = {
  container: {
    width: 750,
    position: 'absolute',
    top: 0,
    bottom: 0,
    overflow: 'hidden'
  },
  wrap: {
    position: 'absolute',
    flexDirection: 'row',
    top: 0,
    bottom: 0
  }
};

// 默认的黄金令箭参数获取
function getGoldLogParams(e) {
  var spmURL = void 0;
  var url = void 0;
  var name = void 0;
  var spmA = void 0;
  var spmB = void 0;
  if (e.prevIndex >= 0 && e.pageConfig && e.pageConfig[e.prevIndex]) {
    spmA = e.pageConfig[e.prevIndex].spmA;
    spmB = e.pageConfig[e.prevIndex].spmB;
    spmURL = spmA + '.' + spmB + '.0.0';
    url = '?spm=' + spmURL;
  }

  if (e.index >= 0 && e.pageConfig && e.pageConfig[e.index]) {
    name = e.pageConfig[e.index].name;
  }
  return {
    'name': name,
    'url': url,
    'spm-url': spmURL
  };
}

var TabController = function (_Component) {
  _inherits(TabController, _Component);

  function TabController() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TabController);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TabController.__proto__ || Object.getPrototypeOf(TabController)).call.apply(_ref, [this].concat(args))), _this), _this.itemCount = 0, _this.token = null, _this._goldlogLaunch = function (e) {
      var pageConfig = _this.props.pageConfig;

      var config = pageConfig[e.index] || {};
      // 默认使用getGoldLogParams作为黄金令箭的参数，可自定义
      var goldLogParams = config.goldLogParams === undefined ? getGoldLogParams : config.goldLogParams;
      goldLogParams = typeof goldLogParams === 'function' ? goldLogParams(e) : goldLogParams;
      if (undefined !== config.spmA && undefined !== config.spmB) {
        // console.log('goldlog launch ',[config.spmA, config.spmB], goldLogParams)
        _universalGoldlog2.default.launch([config.spmA, config.spmB], goldLogParams);
      }
    }, _this.handleExposureForPanel = function (e) {
      // 如果当前页面则return
      var _this$props$pageConfi = _this.props.pageConfig,
          pageConfig = _this$props$pageConfi === undefined ? [] : _this$props$pageConfi;

      if (e.prevIndex === e.index || !pageConfig || !pageConfig.length) return;
      // 设置pageConfig到event对象
      e.pageConfig = pageConfig;
      if (e.prevIndex !== null) {
        _Utils.userTrack.pageDisAppear();
      }
      try {
        for (var i = 0; i < _this.refs.container.itemCount; i++) {
          var v = _this.refs.container.refs['panel_' + i];
          if (!v) return;
          if (e.index === i) {
            _Utils.userTrack.clearIgnoreTagForExposureView((0, _rax.findDOMNode)(v).ref);
          } else {
            _Utils.userTrack.setIgnoreTagForExposureView((0, _rax.findDOMNode)(v).ref);
          }
        }
        _Utils.userTrack.pageAppear();
        _this._goldlogLaunch(e);
      } catch (err) {
        console.error('handleExposureForPanel error', err);
      }
    }, _this.handleBeforeSwitch = function (e) {
      var _this$props$beforeSwi = _this.props.beforeSwitch,
          beforeSwitch = _this$props$beforeSwi === undefined ? _Utils.noop : _this$props$beforeSwi;

      beforeSwitch(e);
    }, _this.handleAfterSwitch = function (e) {
      var _this$props$afterSwit = _this.props.afterSwitch,
          afterSwitch = _this$props$afterSwit === undefined ? _Utils.noop : _this$props$afterSwit;
      // 曝光埋点

      _this.handleExposureForPanel(e);
      afterSwitch(e);
    }, _this.switchTo = function (index) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { params: {} };

      _this.refs.container.switchTo(index, options);
    }, _this.handleAppear = function (e) {
      var _this$props = _this.props,
          defaultFocusIndex = _this$props.defaultFocusIndex,
          pageConfig = _this$props.pageConfig,
          onViewAppear = _this$props.onViewAppear;

      var index = _this.refs.container.curIndex !== null ? _this.refs.container.curIndex : defaultFocusIndex;
      _this._goldlogLaunch({ index: index, pageConfig: pageConfig, prevIndex: index });
      if (typeof onViewAppear === 'function') {
        onViewAppear(e);
      }
    }, _this.handleDisAppear = function (e) {
      var onViewDisAppear = _this.props.onViewDisAppear;

      if (typeof onViewDisAppear === 'function') {
        onViewDisAppear(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TabController, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          onViewDisAppear = _props.onViewDisAppear,
          onViewAppear = _props.onViewAppear;
      // 页面进入时的曝光

      if (_universalEnv.isWeex) {
        if (typeof onViewAppear === 'function') {
          document.body.addEvent('viewappear', this.handleAppear);
        }
        if (typeof onViewDisAppear === 'function') {
          document.body.addEvent('viewdisappear', this.handleDisAppear);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      // 使用slider作为容器
      var useSlider = this.props.useSlider;


      var props = _extends({}, this.props, {
        beforeSwitch: this.handleBeforeSwitch,
        afterSwitch: this.handleAfterSwitch,
        ref: 'container',
        style: [styles.container, this.props.style]
      });
      // 目前只有weex端可以换成slider  为了不直接依赖rax-slider
      return useSlider && _universalEnv.isWeex ? (0, _rax.createElement)(_SliderView2.default, props) : (0, _rax.createElement)(_DefaultView2.default, props);
    }
  }]);

  return TabController;
}(_rax.Component);

TabController.defaultProps = {
  duration: DURATION, // slide动画周期
  easing: DEFAULT_EASING, // 动画缓动函数
  isPanEnabled: true, // 是否可以pan来横向滑动
  isSlideEnabled: true, // 是否可以有滑动slide效果
  beforeExpressionBind: _Utils.noop,
  pageConfig: [],
  onViewAppear: _Utils.noop, // 页面可见时触发(document的onViewAppear事件透传)
  onViewDisAppear: _Utils.noop, // 页面可见时触发(document的onViewDisAppear事件透传)
  defaultFocusIndex: 0, // 默认聚焦的index
  useSlider: false // 是否使用slider作为容器
  // screenNumbersPerSide: null //每边保留的屏幕数量
};
exports.default = TabController;
module.exports = exports['default'];

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _goldlog = __webpack_require__(62);

var _goldlog2 = _interopRequireDefault(_goldlog);

var _tracker = __webpack_require__(143);

var _tracker2 = _interopRequireDefault(_tracker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _goldlog2.default, _tracker2.default);
module.exports = exports['default'];

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _universalEnv = __webpack_require__(1);

var GLOBAL_SPM = void 0;

if (_universalEnv.isNode) {
  global.window = {}; // eslint-disable-line
}

if (typeof window.__UNIVERSAL_SPM__ !== 'undefined') {
  GLOBAL_SPM = window.__UNIVERSAL_SPM__;
} else {
  var spmAB = ['0', '0'];
  GLOBAL_SPM = {
    getPageSPM: function getPageSPM() {
      if (_universalEnv.isWeb && window.goldlog) {
        var spm_ab = window.goldlog.spm_ab;
        spmAB = spm_ab && Array.isArray(spm_ab) && spm_ab.join('.') !== '0.0' ? spm_ab : spmAB;
      }
      return spmAB;
    },
    getSPM: function getSPM(c, d) {
      return [].concat(this.getPageSPM(), c || 0, d || 0);
    },
    getSPMQueryString: function getSPMQueryString(c, d) {
      return 'spm=' + this.getSPM(c, d).join('.');
    },
    setPageSPM: function setPageSPM(a, b) {
      spmAB[0] = a;
      spmAB[1] = b;

      if (_universalEnv.isWeex) {
        // pageInfo module is now deprecated
        // http://doc.weex.alibaba-inc.com/modules/oldModules.html
      } else if (_universalEnv.isWeb) {
        if (window.goldlog && window.goldlog.setPageSPM) {
          window.goldlog.setPageSPM(a, b);
        } else {
          var q = window.goldlog_queue || (window.goldlog_queue = []);
          q.push({
            action: 'goldlog.setPageSPM',
            arguments: [a, b]
          });
        }
      } else {}
    }
  };
  window.__UNIVERSAL_SPM__ = GLOBAL_SPM;
}

exports.default = GLOBAL_SPM;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @jsx createElement */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _universalEnv = __webpack_require__(1);

var _screen = __webpack_require__(144);

var _uri = __webpack_require__(145);

var _uri2 = _interopRequireDefault(_uri);

var _goldlog = __webpack_require__(62);

var _goldlog2 = _interopRequireDefault(_goldlog);

var _utils = __webpack_require__(64);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 用以标记发送的次数
var count = 0;

exports.default = {
  report: function report(userConfig) {

    // 最多发送 20 次, 避免将通道搞挂
    if (++count > 20) {
      return false;
    }

    var logkey = '/jstracker.3';
    var chksum = 'H46777406';

    var defaultConfig = {
      screen: _screen.width + 'x' + _screen.height,
      sampling: 1,
      url: _uri2.default.format(userConfig),
      version: 'universal-goldlog/2.1.0',
      native: _universalEnv.isWeex ? 1 : 0
    };

    var config = Object.assign({
      name: !_universalEnv.isNode ? location.href : ''
    }, defaultConfig, userConfig);

    //    // 调整 message 参数
    //    if (!('msg' in config) && ('message' in config)) {
    //      config.msg = config.message;
    //      delete config.message;
    //    }

    if (Math.random() * config.sampling < 1) {
      _goldlog2.default.record(logkey, 'OTHER', (0, _utils.objToParams)(config), chksum);
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**
 * @fileoverview Get screen info.
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.height = exports.width = undefined;

var _universalEnv = __webpack_require__(1);

if (_universalEnv.isNode) {
  global.window = {}; // eslint-disable-line
}

// assertion: the window won't resize

var _ref = window.screen || {},
    height = _ref.height,
    width = _ref.width;

exports.width = width = parseInt(width, 10);
exports.height = height = parseInt(height, 10);

exports.width = width;
exports.height = height;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _universalEnv = __webpack_require__(1);

var DEFAULT_ERROR_CODE = 'rx_user_define_err'; /**
                                                * @fileoverview URI.
                                                */


var errorCodeHash = {
  render: 'rx_render_err',
  data: 'rx_data_fetch_err'
};

exports.default = {
  format: function format(config) {

    var uri = _universalEnv.isNode ? '' : location.href || '';

    var errorCode = errorCodeHash[config.type || 'custom'] || DEFAULT_ERROR_CODE;

    // remove slash and params
    var pureURI = uri.replace(/[\?#].*$/, '').replace(/\/$/, '');

    var url = [pureURI, config.module || '', errorCode].join('/');

    if (_universalEnv.isWeex) {
      return encodeURIComponent(url);
    } else {
      // H5 下黄金令箭无需编码, 否则会导致请求无法接收
      return url;
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @jsx createElement */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _universalEnv = __webpack_require__(1);

var _universalBinding = __webpack_require__(37);

var _universalBinding2 = _interopRequireDefault(_universalBinding);

var _universalTransition = __webpack_require__(36);

var _universalTransition2 = _interopRequireDefault(_universalTransition);

var _universalEmitter = __webpack_require__(12);

var _universalEmitter2 = _interopRequireDefault(_universalEmitter);

var _Detection = __webpack_require__(18);

var _Detection2 = _interopRequireDefault(_Detection);

var _TabPanel = __webpack_require__(40);

var _TabPanel2 = _interopRequireDefault(_TabPanel);

var _Utils = __webpack_require__(26);

var _BaseView2 = __webpack_require__(65);

var _BaseView3 = _interopRequireDefault(_BaseView2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO solve for transition duration = 0 bug
var MIN_DURATION = 1;

var DURATION = 250;
var DEFAULT_EASING = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';

var styles = {
  container: {
    width: 750,
    position: 'absolute',
    top: 0,
    bottom: 0,
    overflow: 'hidden'
  },
  wrap: {
    position: 'absolute',
    flexDirection: 'row',
    top: 0,
    bottom: 0
  }
};

var DefaultView = function (_BaseView) {
  _inherits(DefaultView, _BaseView);

  function DefaultView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DefaultView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DefaultView.__proto__ || Object.getPrototypeOf(DefaultView)).call.apply(_ref, [this].concat(args))), _this), _this.x = 0, _this.itemWidth = 750, _this.itemCount = 0, _this.curIndex = null, _this.startTime = null, _this.token = null, _this.isScrolling = false, _this.bindCellPanExp = function (e) {
      _this.bindPanExp(e.element);
    }, _this.handleSwipeBack = function () {
      if (_universalEnv.isWeex && _Detection2.default.isEnableSlider) {
        var forbidSwipeBackOnIOS = _this.props.forbidSwipeBackOnIOS;
        // auto 模式下默认会在第0个tab的时候去除阻止

        if (forbidSwipeBackOnIOS === 'auto') {
          if (_this.curIndex === 0) {
            (0, _Utils.forbidSwipeBack)(false);
          } else {
            (0, _Utils.forbidSwipeBack)(true);
          }
        } else {
          (0, _Utils.forbidSwipeBack)(!!forbidSwipeBackOnIOS);
        }
      }
    }, _this.switchTo = function (index) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { params: {} };
      var _this$props = _this.props,
          _this$props$beforeSwi = _this$props.beforeSwitch,
          beforeSwitch = _this$props$beforeSwi === undefined ? _Utils.noop : _this$props$beforeSwi,
          _this$props$afterSwit = _this$props.afterSwitch,
          afterSwitch = _this$props$afterSwit === undefined ? _Utils.noop : _this$props$afterSwit;
      var _options$duration = options.duration,
          duration = _options$duration === undefined ? _this.props.duration : _options$duration,
          params = options.params;

      index = (0, _Utils.clamp)(index, 0, _this.itemCount - 1);
      var prevIndex = _this.curIndex;
      beforeSwitch({ index: index, params: params, prevIndex: prevIndex });
      _this.renderPanel(index);
      var itemWidth = _this.itemWidth;
      var end = -index * itemWidth;
      var wrap = (0, _rax.findDOMNode)(_this.refs.wrap); // 获取元素
      // 调用动画方法
      (0, _universalTransition2.default)(wrap, {
        transform: 'translateX(' + end + 'rem)',
        webkitTransform: 'translateX(' + end + 'rem)'
      }, {
        timingFunction: _this.props.easing,
        delay: 0,
        duration: Math.max(_this.props.isSlideEnabled ? duration : 0, MIN_DURATION)
      }, function () {
        _this.curIndex = index;
        afterSwitch({ index: index, params: params, prevIndex: prevIndex });
        _this.handleScreens();
        _this.handleSwipeBack();
      });
    }, _this.onTouchStart = function () {
      if (_universalEnv.isWeex || _this.isScrolling) return;
      _this.bindPanExp(_this.refs.wrap);
    }, _this.bindPanExp = function (anchor) {
      // 低版本或不支持binding降级
      if (!_Detection2.default.isEnableSlider) return;

      var _this$props$extraBind = _this.props.extraBindingProps,
          extraBindingProps = _this$props$extraBind === undefined ? [] : _this$props$extraBind;


      if (typeof extraBindingProps === 'function') {
        extraBindingProps = extraBindingProps();
      }

      if (!_this.props.isPanEnabled) {
        // 解绑已绑定的表达式
        if (_this.token) {
          _universalBinding2.default.unbind({
            token: _this.token,
            eventType: 'pan',
            anchor: anchor
          });
        }
        return;
      }

      _this.x = -_this.curIndex * _this.itemWidth;

      var expression = {
        origin: 'x+' + _this.x,
        transformed: '{"type":"+","children":[{"type":"Identifier","value":"x"},{"type":"NumericLiteral","value":' + _this.x + '}]}'
      };
      if (_this.curIndex === 0) {
        // 到达左边界 并且手指往右滑
        expression.origin = 'x > 0 ? (x/3+' + _this.x + ') : (x + ' + _this.x + ')';
        expression.transformed = ' {"type":"?","children":[{"type":">","children":[{"type":"Identifier","value":"x"},{"type":"NumericLiteral","value":0}]},{"type":"+","children":[{"type":"/","children":[{"type":"Identifier","value":"x"},{"type":"NumericLiteral","value":3}]},{"type":"NumericLiteral","value":' + _this.x + '}]},{"type":"+","children":[{"type":"Identifier","value":"x"},{"type":"NumericLiteral","value":' + _this.x + '}]}]}';
      }

      if (_this.curIndex === _this.itemCount - 1) {
        // 到达右边界 并且手指往左滑
        expression.origin = 'x < 0 ? (x/3+' + _this.x + ') : (x + ' + _this.x + ')';
        expression.transformed = '{"type":"?","children":[{"type":"<","children":[{"type":"Identifier","value":"x"},{"type":"NumericLiteral","value":0}]},{"type":"+","children":[{"type":"/","children":[{"type":"Identifier","value":"x"},{"type":"NumericLiteral","value":3}]},{"type":"NumericLiteral","value":' + _this.x + '}]},{"type":"+","children":[{"type":"Identifier","value":"x"},{"type":"NumericLiteral","value":' + _this.x + '}]}]}';
      }

      _this.startTime = Date.now();

      var props = [{
        element: _this.refs.wrap,
        property: 'transform.translateX',
        expression: expression
      }].concat(_toConsumableArray(extraBindingProps));

      var res = _universalBinding2.default.bind({
        anchor: anchor,
        eventType: 'pan',
        options: {
          touchAction: 'pan-x'
        },
        props: props
      }, _this.onPanCallback);

      _this.token = res && res.token;
    }, _this.onPanCallback = function (e) {
      // fix: 修复安卓手淘7.5.0下 pan手势被cancel的bug
      if (_universalEnv.isWeex && _Detection2.default.Android && _Detection2.default.appVersion === '7.5.0' && e.state === 'cancel') {
        _this.switchTo(_this.curIndex);
      }
      if (e.state === 'end') {
        var duration = Date.now() - _this.startTime;
        var dist = e.deltaX;
        var panDist = _this.props.panDist ? _this.props.panDist : _this.itemWidth / 2;
        var newIndex = _this.curIndex;
        if (Math.abs(dist) > panDist || Math.abs(dist) / duration > 0.5 && duration < 200) {
          if (dist > 0) {
            newIndex--;
          } else {
            newIndex++;
          }
        }
        if (_universalEnv.isWeex && _Detection2.default.iOS && !_universalBinding2.default.isSupportNewBinding) {
          setTimeout(function () {
            _this.switchTo(newIndex);
          }, 30);
        } else {
          _this.switchTo(newIndex);
        }
      }
    }, _this.onHorizontalPan = function (e) {
      if (e.state === 'start' && !_this.isScrolling) {
        _this.bindPanExp(_this.refs.wrap);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DefaultView, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var style = this.props.style;


      this.itemWidth = style.width || this.itemWidth;

      _universalEmitter2.default.on('scroll', function () {
        _this2.isScrolling = true;
        if (_this2.scrollTimer) {
          clearTimeout(_this2.scrollTimer);
        }
        _this2.scrollTimer = setTimeout(function () {
          _this2.isScrolling = false;
        }, 200);
      });
      if (_Detection2.default.isEnableSliderAndroid) {
        _universalEmitter2.default.on('tabpanelcell:panstart', this.bindCellPanExp);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      setTimeout(function () {
        _this3.countItems();
        var _props$defaultFocusIn = _this3.props.defaultFocusIndex,
            defaultFocusIndex = _props$defaultFocusIn === undefined ? 0 : _props$defaultFocusIn;

        _this3.switchTo(defaultFocusIndex, { duration: 0, params: { type: 'default' } });
      }, 0);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (props) {
        this.countItems(props);
      }
    }

    // ios下最左边禁止右滑

  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var isPanEnabled = this.props.isPanEnabled;


      var curIndex = this.curIndex;

      if (this.props.children && !(this.props.children instanceof Array)) {
        this.props.children = [this.props.children];
      }

      var children = this.props.children.map(function (child, index) {
        if (child && child.type === _TabPanel2.default) {
          return (0, _rax.createElement)(_TabPanel2.default, _extends({ index: index, curIndex: curIndex }, child.props, {
            style: [{ width: _this4.itemWidth }, _extends({}, child.props.style)],
            ref: 'panel_' + index }));
        } else {
          return child;
        }
      });

      var wrapProps = {};
      if (_universalEnv.isWeex) {
        wrapProps = !_Detection2.default.isEnableSliderAndroid && isPanEnabled ? { onHorizontalPan: this.onHorizontalPan } : {};
      } else {
        wrapProps = isPanEnabled ? { onTouchStart: this.onTouchStart } : {};
      }

      return (0, _rax.createElement)(
        _raxView2.default,
        _extends({}, this.props, { style: [styles.container, this.props.style] }),
        (0, _rax.createElement)(
          _raxView2.default,
          _extends({ ref: 'wrap' }, wrapProps, { style: styles.wrap }),
          children
        )
      );
    }
  }]);

  return DefaultView;
}(_BaseView3.default);

DefaultView.defaultProps = {
  panDist: null, // 默认超过屏宽一半即可决定slide方向
  duration: DURATION, // slide动画周期
  easing: DEFAULT_EASING, // 动画缓动函数
  isPanEnabled: true, // 是否可以pan来横向滑动
  isSlideEnabled: true, // 是否可以有滑动slide效果
  beforeExpressionBind: _Utils.noop,
  pageConfig: [],
  defaultFocusIndex: 0, // 默认聚焦的index
  forbidSwipeBackOnIOS: 'auto' // 阻止IOS下侧滑返回默认事件
  // screenNumbersPerSide: null //每边保留的屏幕数量
};
exports.default = DefaultView;
module.exports = exports['default'];

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @jsx createElement */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _BaseView2 = __webpack_require__(65);

var _BaseView3 = _interopRequireDefault(_BaseView2);

var _index = __webpack_require__(60);

var _Utils = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderView = function (_BaseView) {
  _inherits(SliderView, _BaseView);

  function SliderView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SliderView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SliderView.__proto__ || Object.getPrototypeOf(SliderView)).call.apply(_ref, [this].concat(args))), _this), _this.params = {
      params: {},
      prevIndex: null,
      index: _this.props.defaultFocusIndex
    }, _this.curIndex = _this.props.defaultFocusIndex, _this.isScrolling = false, _this.itemCount = 0, _this.state = {
      index: 0
    }, _this.onChange = function (e) {
      var _this$props$beforeSwi = _this.props.beforeSwitch,
          beforeSwitch = _this$props$beforeSwi === undefined ? _Utils.noop : _this$props$beforeSwi;

      _this.params = {
        params: {},
        index: e.index,
        prevIndex: _this.prevIndex >= 0 ? _this.prevIndex : null
      };
      beforeSwitch(_this.params);
      _this.curIndex = e.index;
      _this.renderPanel(_this.curIndex);
      _this.prevIndex = e.index;
    }, _this.afterSwitch = function () {
      var _this$props$afterSwit = _this.props.afterSwitch,
          afterSwitch = _this$props$afterSwit === undefined ? _Utils.noop : _this$props$afterSwit;

      afterSwitch(_this.params);
      _this.handleScreens();
    }, _this.switchTo = function (index) {

      if (_this.refs.container) {
        _this.setState({
          index: index
        });
      }
    }, _this.onScroll = function () {
      _this.isScrolling = true;
      if (_this.timeout) {
        clearTimeout(_this.timeout);
      }
      _this.timeout = setTimeout(function () {
        _this.isScrolling = false;
        _this.afterSwitch();
      }, 500);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SliderView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // TODO extraBindingProps 需要Slider实现ScrollableProtocol
      this.countItems();
      var _props$defaultFocusIn = this.props.defaultFocusIndex,
          defaultFocusIndex = _props$defaultFocusIn === undefined ? 0 : _props$defaultFocusIn;


      setTimeout(function () {
        if (defaultFocusIndex !== _this2.state.index) {
          _this2.switchTo(defaultFocusIndex);
        } else {
          // 需要手动触发一下
          _this2.onChange({
            index: defaultFocusIndex
          });
        }

        _this2.afterSwitch();
      }, 50);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var isPanEnabled = this.props.isPanEnabled;

      var curIndex = this.curIndex;

      if (this.props.children && !(this.props.children instanceof Array)) {
        this.props.children = [this.props.children];
      }

      var children = this.props.children.map(function (child, index) {
        if (child.type === _index.TabPanel) {
          return (0, _rax.createElement)(_index.TabPanel, _extends({ index: index, curIndex: curIndex, isAppear: index == _this3.curIndex ? true : false }, child.props, {
            ref: 'panel_' + index }));
        } else {
          return child;
        }
      });

      return (0, _rax.createElement)(
        'slider',
        _extends({}, this.props, {
          index: this.state.index,
          scrollable: isPanEnabled,
          autoPlay: false,
          infinite: false,
          showIndicators: false,
          onScroll: this.onScroll,
          ref: 'container',
          onChange: this.onChange }),
        children
      );
    }
  }]);

  return SliderView;
}(_BaseView3.default);

SliderView.defaultProps = {
  isPanEnabled: true, // 是否可以pan来横向滑动
  isSlideEnabled: true, // 是否可以有滑动slide效果
  pageConfig: [],
  defaultFocusIndex: 0 // 默认聚焦的index
  // screenNumbersPerSide: null //每边保留的屏幕数量
};
exports.default = SliderView;
module.exports = exports['default'];

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @jsx createElement */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _universalEmitter = __webpack_require__(12);

var _universalEmitter2 = _interopRequireDefault(_universalEmitter);

var _Detection = __webpack_require__(18);

var _Detection2 = _interopRequireDefault(_Detection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabPanelView = function (_Component) {
  _inherits(TabPanelView, _Component);

  function TabPanelView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TabPanelView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TabPanelView.__proto__ || Object.getPrototypeOf(TabPanelView)).call.apply(_ref, [this].concat(args))), _this), _this.isPanning = false, _this.onCellClick = function (e) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          onPress = _this$props.onPress;

      if (_this.isPanning) {
        return;
      }
      if (typeof onClick === 'function') {
        onClick(e);
      } else if (typeof onPress === 'function') {
        onPress(e);
      }
    }, _this.onHorizontalPan = function (e) {
      if (e.state === 'start') {
        _this.isPanning = true;
        _universalEmitter2.default.emit('tabpanelcell:panstart', {
          element: _this
        });
      } else if (e.state === 'end') {
        setTimeout(function () {
          _this.isPanning = false;
        }, 50);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TabPanelView, [{
    key: 'render',
    value: function render() {
      var props = _extends({}, this.props, {
        preventMoveEvent: true,
        onClick: this.onCellClick
      });
      if (_Detection2.default.isEnableSliderAndroid && this.context.isInATabPanel) {
        props.onHorizontalPan = this.onHorizontalPan;
      }

      return (0, _rax.createElement)(_raxView2.default, props);
    }
  }]);

  return TabPanelView;
}(_rax.Component);

TabPanelView.contextTypes = {
  isInATabPanel: _rax.PropTypes.bool
};
exports.default = TabPanelView;
module.exports = exports['default'];

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @jsx createElement */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _universalEmitter = __webpack_require__(12);

var _universalEmitter2 = _interopRequireDefault(_universalEmitter);

var _Detection = __webpack_require__(18);

var _Detection2 = _interopRequireDefault(_Detection);

var _raxSpmlinkPlus = __webpack_require__(150);

var _raxSpmlinkPlus2 = _interopRequireDefault(_raxSpmlinkPlus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabPanelLink = function (_Component) {
  _inherits(TabPanelLink, _Component);

  function TabPanelLink() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TabPanelLink);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TabPanelLink.__proto__ || Object.getPrototypeOf(TabPanelLink)).call.apply(_ref, [this].concat(args))), _this), _this.isPanning = false, _this.onCellClick = function (e) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          onPress = _this$props.onPress;

      if (_this.isPanning) {
        return;
      }
      if (typeof onClick === 'function') {
        onClick(e);
      } else if (typeof onPress === 'function') {
        onPress(e);
      }
    }, _this.onHorizontalPan = function (e) {
      if (e.state === 'start') {
        _this.isPanning = true;
        _universalEmitter2.default.emit('tabpanelcell:panstart', {
          element: _this
        });
      } else if (e.state === 'end') {
        setTimeout(function () {
          _this.isPanning = false;
        }, 50);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TabPanelLink, [{
    key: 'render',
    value: function render() {
      var props = _extends({}, this.props, {
        preventMoveEvent: true,
        onClick: this.onCellClick
      });
      if (_Detection2.default.isEnableSliderAndroid && this.context.isInATabPanel) {
        props.onHorizontalPan = this.onHorizontalPan;
      }
      return (0, _rax.createElement)(_raxSpmlinkPlus2.default, props);
    }
  }]);

  return TabPanelLink;
}(_rax.Component);

TabPanelLink.contextTypes = {
  isInATabPanel: _rax.PropTypes.bool
};
exports.default = TabPanelLink;
module.exports = exports['default'];

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(151);

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @jsx createElement */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxLink = __webpack_require__(152);

var _raxLink2 = _interopRequireDefault(_raxLink);

var _raxTouchable = __webpack_require__(25);

var _raxTouchable2 = _interopRequireDefault(_raxTouchable);

var _universalSpm = __webpack_require__(63);

var _universalSpm2 = _interopRequireDefault(_universalSpm);

var _universalExposure = __webpack_require__(153);

var _universalExposure2 = _interopRequireDefault(_universalExposure);

var _generateSpmD = __webpack_require__(155);

var _generateSpmD2 = _interopRequireDefault(_generateSpmD);

var _universalEnv = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpmLink = function (_PureComponent) {
  _inherits(SpmLink, _PureComponent);

  function SpmLink() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SpmLink);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SpmLink.__proto__ || Object.getPrototypeOf(SpmLink)).call.apply(_ref, [this].concat(args))), _this), _this.hasExposed = false, _this.onAppear = function (e) {
      var _this$props = _this.props,
          onAppear = _this$props.onAppear,
          exposure = _this$props.exposure,
          expInfo = _this$props.expInfo;

      if (exposure && !_this.hasExposed) {
        var spmC = _this.props['data-spm-c'];
        var spmD = _this.props['data-spm-d'];
        var spmAB = _universalSpm2.default.getPageSPM().concat([]);
        var sdm = _this.props['data-sdm'];
        _universalExposure2.default.send([].concat(_toConsumableArray(spmAB), [spmC, spmD]).join('.'), sdm, expInfo);
        _this.hasExposed = true;
      }
      if (onAppear) {
        onAppear(e);
      }
    }, _this.onPress = function (href, utParam, pressCallBack) {
      try {
        if (pressCallBack) pressCallBack();

        var userTrack = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@weex-module/userTrack\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
        userTrack.updateNextPageUtparam(JSON.stringify({
          'clickinfo': utParam
        }));
      } catch (e) {
        // console.log('updateNextPageUtparam error,error stack => ' + e);
      }

      if (window) window.open(href);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SpmLink, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.props;
      var useAsExpView = this.props.useAsExpView;


      var spm = [];

      // 先读取 c 位
      var spmC = props['data-spm-c'];
      var spmD = props['data-spm-d'];

      if (!spmC) {
        if (this.context.getSpm) {
          spm = this.context.getSpm() || [];
        } else {
          spm = [];
        }
        if (spm.length && spmD) {
          // 替换为自定义 D 位
          spm[3] = spmD;
        }
      } else {
        // 获取 a/b 位
        var spmAB = _universalSpm2.default.getPageSPM().concat([]);
        if (spmAB.length) {
          if (!spmD) {
            spmD = (0, _generateSpmD2.default)(spmC);
          }
          spm = spmAB.concat([spmC, spmD]);
        }
      }

      var href = (props.href || '').toString().trim();

      // only work on normal urls (non-anchor)
      // take effect in both weex and web
      if (spm.length && href && !(href.indexOf('#') === 0)) {
        href = SpmLink.decorateHref(href, spm);
      }

      var pressCallBack = props.onPress;
      // 无障碍属性
      var a11yProps = {};

      // accessible 之后，节点会被当作一个整体，故 aria-label 存在时才设置
      if (props['aria-label']) {
        a11yProps.accessible = true;
        a11yProps.role = 'link';
      }
      // to sent usertrack
      if (!!props['data-ut'] && _universalEnv.isWeex || useAsExpView) {
        var utParam = props['data-ut'];

        return (0, _rax.createElement)(
          _raxTouchable2.default,
          _extends({}, a11yProps, props, {
            onPress: function onPress() {
              return _this2.onPress(href, utParam, pressCallBack);
            },
            onAppear: this.onAppear }),
          props.children
        );
      } else {
        return (0, _rax.createElement)(
          _raxLink2.default,
          _extends({}, a11yProps, props, {
            'data-spm': spm[3],
            'data-spm-c': spm[2],
            'data-spm-d': spm[3],
            href: href,
            onAppear: this.onAppear }),
          props.children
        );
      }
    }
  }], [{
    key: 'decorateHref',
    value: function decorateHref(href, spm) {
      var spmQueryString = '&spm=' + spm.join('.');

      var _href$split = href.split('#'),
          _href$split2 = _slicedToArray(_href$split, 2),
          query = _href$split2[0],
          hash = _href$split2[1];

      var newHref = query;

      if (newHref.indexOf('?') < 0) {
        newHref += '?';
      }

      newHref += spmQueryString;

      if (hash) {
        newHref += '#' + hash;
      }

      return newHref;
    }
  }]);

  return SpmLink;
}(_rax.PureComponent);

SpmLink.contextTypes = {
  getSpm: _rax.PropTypes.func
};
exports.default = SpmLink;
module.exports = exports['default'];

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

var _raxText = __webpack_require__(3);

var _raxText2 = _interopRequireDefault(_raxText);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Link = function (_Component) {
  _inherits(Link, _Component);

  function Link() {
    _classCallCheck(this, Link);

    return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
  }

  _createClass(Link, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        isInAParentLink: true
      };
    }
  }, {
    key: 'render',
    value: function render() {
      // https://www.w3.org/TR/html4/struct/links.html#h-12.2.2
      if (this.context.isInAParentLink) {
        return console.error('Nested links are illegal');
      }

      var props = this.props;
      var children = props.children;
      var nativeProps = _extends({}, props);
      var style = _extends({}, styles.initial, nativeProps.style);
      var textStyle = {
        color: style.color,
        lines: style.lines,
        fontSize: style.fontSize,
        fontStyle: style.fontStyle,
        fontWeight: style.fontWeight,
        textDecoration: style.textDecoration,
        textAlign: style.textAlign,
        fontFamily: style.fontFamily,
        textOverflow: style.textOverflow
      };

      if (nativeProps.onPress) {
        nativeProps.onClick = nativeProps.onPress;
        delete nativeProps.onPress;
      }

      var content = children;
      if (typeof children === 'string' && !this.context.isInAParentText) {
        content = (0, _rax.createElement)(_raxText2.default, { style: textStyle }, children);
      }

      if (_universalEnv.isWeex) {
        return (0, _rax.createElement)('a', nativeProps, content);
      } else {
        return (0, _rax.createElement)('a', _extends({}, nativeProps, { style: style }), content);
      }
    }
  }]);

  return Link;
}(_rax.Component);

Link.contextTypes = {
  isInAParentLink: _rax.PropTypes.bool,
  isInAParentText: _rax.PropTypes.bool
};
Link.childContextTypes = {
  isInAParentLink: _rax.PropTypes.bool
};

var styles = {
  initial: {
    textDecoration: 'none'
  }
};

exports.default = Link;
module.exports = exports['default'];

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(154);

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _universalGoldlog = __webpack_require__(61);

var _universalGoldlog2 = _interopRequireDefault(_universalGoldlog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

  /**
   * spm 用于 pageview 曝光数据统计；
   * sdm 用于 sdm 产品集曝光统计；
   * goldlogStr 为自定义参数，用于个性化曝光统计；
   * goldlogStr 为黄金令箭编码串，JSON String类型，格式为 {logkey: str1, gmkey: str2, gokey: str3, chksum: str4} ，
   * 例如 {logkey: '/tbtest.expose.1', gmkey: 'EXP', gokey: 'foo=bar&name=digu', chksum: 'H01234567'}
   */

  send: send

};


var intervalTime = 100;
var prevTime = null;
var spmQueue = [];
var sdmQueue = [];
var otherQueue = []; // data-sdm 属性中携带的除 sdm 外的其他参数数组
var now;
var themeIdHasSendArr = [];

function send(spm, sdm, goldlogStr) {
  prevTime = prevTime === null ? Date.now() : prevTime;

  now = Date.now();

  if (spm) {
    spmQueue.push(spm);
  }

  if (sdm) {

    var tmpObj = paramsParser(sdm);

    var params = tmpObj.params;
    var themeId = tmpObj.themeId;

    if (themeId && themeIdHasSendArr.indexOf(themeId) === -1) {

      sdmQueue.push(themeId);

      themeIdHasSendArr.push(themeId);
    }

    var item;
    for (var i = 0; i < params.length; i++) {
      item = params[i];

      if (item.key === 'sdm') {

        sdmQueue.push(item.value);
      } else {

        otherQueue.push(item.key + '=' + item.value);
      }
    }
  }

  if (now - prevTime > intervalTime && spmQueue.length) {

    batchSend();
  }

  // 超过100ms没有请
  setTimeout(function () {

    batchSend();
  }, intervalTime);

  if (goldlogStr) {

    var obj = JSON.parse(goldlogStr);

    _universalGoldlog2.default.record(obj.logkey, obj.gmkey, obj.gokey, obj.chksum);
  }
}

// 处理 data-sdm 传参，兼容待 sdm= 和 没带 sdm= 两种情况
function paramsParser(str) {

  if (!str) {
    return false;
  }

  var arr1 = str.split('&');

  var params = [];
  var item,
      key,
      value,
      arr2,
      themeId = '';
  for (var i = 0; i < arr1.length; i++) {
    item = arr1[i];

    if (item.indexOf('=') === -1) {
      key = 'sdm';
      value = item;
    } else {

      arr2 = item.split('=');

      key = arr2[0];
      value = arr2[1];
    }

    if (key === 'sdm') {
      themeId = value && value.split('_')[0];
    }

    params.push({ key: key, value: value });
  }

  return {
    themeId: themeId,
    params: params
  };
}

// 清空数组并发送
function batchSend() {

  var gokeyArr = [];

  if (spmQueue.length) {
    gokeyArr.push('spm=' + spmQueue.join(';'));
  }

  if (sdmQueue.length) {
    gokeyArr.push('sdm=' + sdmQueue.join(';'));
  }

  if (otherQueue.length) {
    gokeyArr.push(otherQueue.join('&'));
  }

  if (spmQueue.length || sdmQueue.length || otherQueue.length) {

    _universalGoldlog2.default.record('/exp.1.1', 'EXP', gokeyArr.join('&'), 'H1703600');
  }

  spmQueue = [];
  sdmQueue = [];
  otherQueue = [];
  prevTime = now;
}
module.exports = exports['default'];

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (identity) {

  var key = identity || 'pub';

  if (store[key]) {
    return ++store[key];
  }

  store[key] = 1;

  return store[key];
};

/**
 * @fileoverview Generate Spm D 位.
 */
var store = {};

;
module.exports = exports['default'];

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _Util = __webpack_require__(5);

var _raxTabPanel = __webpack_require__(39);

var _PanView = __webpack_require__(66);

var _PanView2 = _interopRequireDefault(_PanView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  link: {}
};

var NavigationLink = function (_Component) {
  _inherits(NavigationLink, _Component);

  function NavigationLink() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NavigationLink);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NavigationLink.__proto__ || Object.getPrototypeOf(NavigationLink)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {
      var _this$props = _this.props,
          href = _this$props.href,
          _this$props$onClick = _this$props.onClick,
          onClick = _this$props$onClick === undefined ? _Util.noop : _this$props$onClick;
      var navigation = _this.context.navigation;

      onClick(e);
      if (navigation && href) {
        navigation.navigateByPath(href);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NavigationLink, [{
    key: 'render',
    value: function render() {
      var props = {
        style: [styles.link, _extends({}, this.props.style)],
        onClick: this.onClick,
        children: this.props.children
      };

      return this.context.isInATabPanel ? (0, _rax.createElement)(_raxTabPanel.TabPanelView, props) : (0, _rax.createElement)(_PanView2.default, props);
    }
  }]);

  return NavigationLink;
}(_rax.Component);

NavigationLink.contextTypes = {
  isInATabPanel: _rax.PropTypes.bool,
  navigation: _rax.PropTypes.Component
};
exports.default = NavigationLink;
module.exports = exports['default'];

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var BACK = 'Navigation/BACK';
var INIT = 'Navigation/INIT';
var NAVIGATE = 'Navigation/NAVIGATE';
var RESET = 'Navigation/RESET';
var SET_PARAMS = 'Navigation/SET_PARAMS';
var URI = 'Navigation/URI';

var createAction = function createAction(type, fn) {
  fn.toString = function () {
    return type;
  };
  return fn;
};

var back = createAction(BACK, function (payload) {
  return {
    type: BACK,
    key: payload.key
  };
});

var init = createAction(INIT, function (payload) {
  var action = {
    type: INIT
  };
  if (payload.params) {
    action.params = payload.params;
  }
  return action;
});

var navigate = createAction(NAVIGATE, function (payload) {
  var action = {
    type: NAVIGATE,
    routeName: payload.routeName
  };
  if (payload.params) {
    action.params = payload.params;
  }
  if (payload.action) {
    action.action = payload.action;
  }
  return action;
});
var reset = createAction(RESET, function (payload) {
  return {
    type: RESET,
    index: payload.index,
    key: payload.key,
    actions: payload.actions
  };
});
var setParams = createAction(SET_PARAMS, function (payload) {
  return {
    type: SET_PARAMS,
    key: payload.key,
    params: payload.params
  };
});
var uri = createAction(URI, function (payload) {
  return {
    type: URI,
    uri: payload.uri
  };
});

exports.default = {
  // Action constants
  BACK: BACK,
  INIT: INIT,
  NAVIGATE: NAVIGATE,
  RESET: RESET,
  SET_PARAMS: SET_PARAMS,
  URI: URI,

  // Action creators
  back: back,
  init: init,
  navigate: navigate,
  reset: reset,
  setParams: setParams,
  uri: uri
};
module.exports = exports['default'];

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxText = __webpack_require__(3);

var _raxText2 = _interopRequireDefault(_raxText);

var _raxIcon = __webpack_require__(41);

var _raxIcon2 = _interopRequireDefault(_raxIcon);

var _raxTabheader = __webpack_require__(159);

var _raxTabheader2 = _interopRequireDefault(_raxTabheader);

var _raxIntl = __webpack_require__(8);

var _simpleLodash = __webpack_require__(183);

var _simpleLodash2 = _interopRequireDefault(_simpleLodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_raxIntl.intl.init(__webpack_require__(20));

var IconFont = (0, _raxIcon.createIconSet)({
  f: '\uE60B',
  g: '\uE627',
  y: '\uE663',
  x: '\uE62D',
  h: '\uE62C'
}, 'iconfont', 'https://at.alicdn.com/t/font_408110_dfge6zmei4hlrf6r.ttf');

var BottomBar = function (_Component) {
  _inherits(BottomBar, _Component);

  function BottomBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BottomBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BottomBar.__proto__ || Object.getPrototypeOf(BottomBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      curIndex: 0
    }, _this.switchTo = function (options) {
      var name = options.name,
          index = options.index;
      var _this$props = _this.props,
          routerConfig = _this$props.routerConfig,
          navigation = _this$props.navigation;

      if (name) {
        index = _simpleLodash2.default.findIndex(Object.keys(routerConfig), function (v) {
          return v === name;
        });
      }
      _this.bottomBar.select(index);
      _this.props.onSelect && _this.props.onSelect(index);
      var routeName = Object.keys(routerConfig)[index];
      navigation.navigate(routeName);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BottomBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      var history = props.history;

      var name = history && history.location.state && history.location.state.name;
      this.switchTo({ name: name });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return (0, _rax.createElement)(
        _raxView2.default,
        { style: styles.container },
        (0, _rax.createElement)(_raxTabheader2.default, {
          ref: function ref(_ref2) {
            _this2.bottomBar = _ref2;
          },
          style: { height: 112 },
          dataSource: [{ text: _raxIntl.intl.getText('n101'), icon: 'h' }, { text: _raxIntl.intl.getText('n102'), icon: 'f' }, { text: _raxIntl.intl.getText('n103'), icon: 'g' }, { text: _raxIntl.intl.getText('n104'), icon: 'x' }, { text: _raxIntl.intl.getText('n105'), icon: 'y' }],
          renderItem: function renderItem(item, index) {
            return (0, _rax.createElement)(
              _raxView2.default,
              {
                onClick: function onClick() {
                  return _this2.switchTo({ index: index });
                },
                style: {
                  width: 750 / 5 + 'rem',
                  height: 112
                } },
              (0, _rax.createElement)(IconFont, { style: { color: '#8c8c8c', fontSize: 46, marginTop: 10, textAlign: 'center' },
                name: item.icon }),
              (0, _rax.createElement)(
                _raxText2.default,
                { style: { color: '#8c8c8c', fontSize: 24, height: 30, textAlign: 'center' } },
                item.text
              )
            );
          },
          renderSelect: function renderSelect(item, index) {
            return (0, _rax.createElement)(
              _raxView2.default,
              {
                style: {
                  width: 750 / 5 + 'rem',
                  height: 112
                } },
              (0, _rax.createElement)(IconFont, { style: { color: '#193447', fontSize: 46, marginTop: 10, textAlign: 'center' },
                name: item.icon }),
              (0, _rax.createElement)(
                _raxText2.default,
                { style: { color: '#193447', fontSize: 24, height: 30, textAlign: 'center' } },
                item.text
              )
            );
          },
          selected: this.state.curIndex,
          type: 'default-noAnim-scroll',
          itemWidth: 750 / 5 })
      );
    }
  }]);

  return BottomBar;
}(_rax.Component);

var styles = {
  container: {
    position: 'absolute',
    bottom: 0,
    width: 750,
    height: 112
  }

};

exports.default = BottomBar;
module.exports = exports['default'];

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _rax = __webpack_require__(0);

var _Container = __webpack_require__(160);

var _Container2 = _interopRequireDefault(_Container);

var _DropDown = __webpack_require__(161);

var _DropDown2 = _interopRequireDefault(_DropDown);

var _ItemList = __webpack_require__(165);

var _ItemList2 = _interopRequireDefault(_ItemList);

var _tools = __webpack_require__(169);

var _tools2 = _interopRequireDefault(_tools);

var _Emitter = __webpack_require__(170);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var THCONTAINER_REF = 'tabheaderContainer';

var TabHeader = function (_Component) {
  _inherits(TabHeader, _Component);

  function TabHeader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TabHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TabHeader.__proto__ || Object.getPrototypeOf(TabHeader)).call.apply(_ref, [this].concat(args))), _this), _this.select = function (index) {
      _this.refs[THCONTAINER_REF].select(index);
    }, _this.selectInternal = function (index) {
      _this.refs[THCONTAINER_REF].selectInternal(index);
    }, _this.scrollTo = function (options) {
      _this.refs[THCONTAINER_REF].scrollTo(options);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TabHeader, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        tabheader: this
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _tools2.default.initWebStyle();
    }
  }, {
    key: 'render',
    value: function render() {
      var typeArr = (this.props.type || 'default-noanim-scroll').toLowerCase().split('-');
      var styleType = typeArr[0];
      var animType = typeArr[1];
      var scrollType = typeArr[2];

      var dropDownCols = this.props.dropDownCols;

      return (0, _rax.createElement)(_Container2.default, {
        ref: THCONTAINER_REF,
        itemWidth: this.props.itemWidth,
        onSelect: this.props.onSelect
      }, (0, _rax.createElement)(_DropDown2.default, _extends({}, this.props, {
        dropDownCols: dropDownCols,
        styleType: styleType })), (0, _rax.createElement)(_ItemList2.default, _extends({}, this.props, {
        styleType: styleType,
        scrollType: scrollType,
        animType: animType })));
    }
  }]);

  return TabHeader;
}(_rax.Component);

TabHeader.childContextTypes = {
  tabheader: _rax.PropTypes.object
};

TabHeader.defaultProps = {};

(0, _Emitter.mixinEmitter)(TabHeader);

exports.default = TabHeader;
module.exports = exports['default'];

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var TABEHEADER_SCTOLLTO = 'tabheaderScrollTo';
var TABEHEADER_SELECT = 'tabheaderSelect';
var TABEHEADER_GOTOP = 'tabheaderGoTop';
var CONTAINER_REF = 'container';

var Container = function (_Component) {
  _inherits(Container, _Component);

  function Container() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Container);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Container.__proto__ || Object.getPrototypeOf(Container)).call.apply(_ref, [this].concat(args))), _this), _this.select = function (index, isPress) {
      if (_this.selected != index) {
        _this.props.onSelect && _this.props.onSelect(index);
      }
      _this.selectInternal(index);
    }, _this.selectInternal = function (index) {
      var tabheader = _this.context.tabheader;
      if (_this.animType != 'noanim') {
        _this.scrollTo({
          x: parseInt(_this.props.itemWidth) * index
        });
      }
      if (tabheader) {
        tabheader.emit(TABEHEADER_SELECT, index);
      }
    }, _this.scrollTo = function (options) {
      var tabheader = _this.context.tabheader;

      if (tabheader) {
        tabheader.emit(TABEHEADER_SCTOLLTO, options);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Container, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var tabheader = this.context.tabheader;
      if (tabheader && tabheader.on) {
        tabheader.on(TABEHEADER_GOTOP, function () {
          var dom = __weex_require__('@weex-module/dom');
          dom.scrollToElement((0, _rax.findDOMNode)(_this2.refs[CONTAINER_REF]), { offset: 0 });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(_raxView2.default, _extends({ ref: CONTAINER_REF }, this.props));
    }
  }]);

  return Container;
}(_rax.Component);

Container.contextTypes = {
  tabheader: _rax.PropTypes.object
};
exports.default = Container;
module.exports = exports['default'];

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxText = __webpack_require__(3);

var _raxText2 = _interopRequireDefault(_raxText);

var _raxImage = __webpack_require__(7);

var _raxImage2 = _interopRequireDefault(_raxImage);

var _raxTouchable = __webpack_require__(25);

var _raxTouchable2 = _interopRequireDefault(_raxTouchable);

var _universalEnv = __webpack_require__(1);

var _raxMultirow = __webpack_require__(162);

var _raxMultirow2 = _interopRequireDefault(_raxMultirow);

var _animation = __webpack_require__(68);

var _animation2 = _interopRequireDefault(_animation);

var _style = __webpack_require__(28);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var TABEHEADER_SCTOLLTO = 'tabheaderScrollTo';
var TABEHEADER_SELECT = 'tabheaderSelect';
var TABEHEADER_GOTOP = 'tabheaderGoTop';
var DROPDOWN_ROW_HEIGHT = 80;
var WINDOWWIDTH = 750;

var DropDown = function (_Component) {
  _inherits(DropDown, _Component);

  function DropDown(props) {
    _classCallCheck(this, DropDown);

    var _this = _possibleConstructorReturn(this, (DropDown.__proto__ || Object.getPrototypeOf(DropDown)).call(this, props));

    _this.changeGrid = function () {
      if (!_this.gridOpen) {
        if (_universalEnv.isWeex) {
          _this.openPop();
        } else {
          _this.openDrop();
        }
      } else {
        if (_universalEnv.isWeex) {
          _this.closePop();
        } else {
          _this.closeDrop();
        }
      }
      _this.gridOpen = !_this.gridOpen;
    };

    _this.openPop = function () {
      var tabheader = _this.context.tabheader;
      if (tabheader) {
        tabheader.emit(TABEHEADER_GOTOP);
      }

      var icon = (0, _rax.findDOMNode)(_this.refs.icon);
      _animation2.default.rotate(icon, 180);
      var dropDownHeight = parseInt(_this.dropDownHeight) / 750 * WINDOWWIDTH;
      var dropMultiRow = (0, _rax.findDOMNode)(_this.refs.dropMultiRow);
      _animation2.default.height(dropMultiRow, dropDownHeight);

      _this.state.weexGridTop = 0;
      _this.state.weexGridLeft = 0;
      _this.state.weexGridPosition = 'fixed';
      _this.state.weexGridHeight = 2000;
      _this.setState(_this.state);
    };

    _this.closePop = function () {
      var icon = (0, _rax.findDOMNode)(_this.refs.icon);
      _animation2.default.rotate(icon, 360);
      var dropMultiRow = (0, _rax.findDOMNode)(_this.refs.dropMultiRow);
      _animation2.default.height(dropMultiRow, 0);

      if (!_this.closePopIndex) {
        _this.closePopIndex = 1;
      }
      _this.closePopIndex++;

      _this.state.weexGridTop = -1000 - _this.closePopIndex; // fix for android
      _this.state.weexGridLeft = -1000 - _this.closePopIndex;
      _this.state.weexGridPosition = 'relative';
      _this.state.weexGridHeight = 0;
      _this.setState(_this.state);
    };

    _this.openDrop = function () {
      var dropDownHeight = parseInt(_this.dropDownHeight) / 750 * WINDOWWIDTH;
      var icon = (0, _rax.findDOMNode)(_this.refs.icon);
      _animation2.default.rotate(icon, 180);
      var dropMultiRow = (0, _rax.findDOMNode)(_this.refs.dropMultiRow);
      _animation2.default.height(dropMultiRow, dropDownHeight);
    };

    _this.closeDrop = function () {
      var icon = (0, _rax.findDOMNode)(_this.refs.icon);
      _animation2.default.rotate(icon, 360);
      var dropMultiRow = (0, _rax.findDOMNode)(_this.refs.dropMultiRow);
      _animation2.default.height(dropMultiRow, 0);
    };

    _this.gridItemSelect = function (index) {
      _this.changeGrid();

      var tabheader = _this.context.tabheader;

      if (_this.animType != 'noanim') {
        tabheader.emit(TABEHEADER_SCTOLLTO, {
          x: parseInt(_this.props.itemWidth) * index
        });
      }
      if (_this.selected != index) {
        _this.props.onSelect && _this.props.onSelect(index);
      }
      if (tabheader) {
        tabheader.emit(TABEHEADER_SELECT, index);
      }
    };

    _this.renderGridItemFun = function (item, index) {
      if (item == '') {
        return (0, _rax.createElement)(_raxView2.default, { style: _style2.default.dropBoxTtem });
      } else if (_this.state.selected == index) {
        return (0, _rax.createElement)(_raxTouchable2.default, {
          onPress: function onPress() {
            _this.gridItemSelect(index);
          },
          style: _style2.default.dropBoxTtem }, (0, _rax.createElement)(_raxText2.default, { style: _style2.default.dropBoxSelectText }, item));
      } else {
        return (0, _rax.createElement)(_raxTouchable2.default, {
          onPress: function onPress() {
            _this.gridItemSelect(index);
          },
          style: _style2.default.dropBoxTtem }, (0, _rax.createElement)(_raxText2.default, { style: _style2.default.dropBoxText }, item));
      }
    };

    _this.renderGridFun = function (dropData) {
      var weexGridStyle = {};
      var weexGridMaskerStyle = {};

      if (_universalEnv.isWeex) {
        weexGridStyle.top = _this.state.weexGridTop + 80;
        weexGridStyle.left = _this.state.weexGridLeft;
        weexGridStyle.position = _this.state.weexGridPosition;
        weexGridStyle.height = parseInt(_this.dropDownHeight) / 750 * WINDOWWIDTH;
        weexGridMaskerStyle.top = _this.state.weexGridTop;
        weexGridMaskerStyle.left = _this.state.weexGridLeft;
        weexGridMaskerStyle.position = _this.state.weexGridPosition;
        weexGridMaskerStyle.height = _this.state.weexGridHeight;
      }

      return (0, _rax.createElement)(_raxView2.default, { id: 'grid', ref: 'grid', style: _style2.default.drop }, (0, _rax.createElement)(_raxTouchable2.default, { style: _style2.default.dropBtn, onPress: _this.changeGrid }, (0, _rax.createElement)(_raxImage2.default, {
        ref: 'icon',
        source: { uri: '//gw.alicdn.com/tps/TB1H03wKVXXXXX_aXXXXXXXXXXX-40-40.png' },
        style: {
          width: '40rem',
          height: '40rem',
          position: 'absolute',
          top: '20rem',
          left: '15rem'
        }
      })), (0, _rax.createElement)(_raxTouchable2.default, {
        style: _extends({
          backgroundColor: '#000000',
          opacity: 0.1,
          width: 750,
          zIndex: 100
        }, weexGridMaskerStyle),
        onPress: _this.changeGrid }), (0, _rax.createElement)(_raxView2.default, {
        ref: 'dropMultiRow',
        style: _extends({
          backgroundColor: '#ffffff',
          position: 'absolute',
          top: 81,
          right: 0,
          width: 750,
          height: 0,
          paddingRight: 100,
          overflow: 'hidden',
          zIndex: 100
        }, weexGridStyle) }, (0, _rax.createElement)(_raxMultirow2.default, { dataSource: dropData, cells: _this.props.dropDownCols, renderCell: _this.renderGridItemFun })));
    };

    var itemNum = _this.props.dataSource ? _this.props.dataSource.length : 0;
    var cols = _this.props.dropDownCols;
    _this.dropDownHeight = Math.ceil(itemNum / cols) * DROPDOWN_ROW_HEIGHT;
    _this.state = {
      weexGridTop: -1000,
      weexGridLeft: -1000,
      weexGridPosition: 'fixed',
      weexGridHeight: 0,
      selected: props.selected
    };
    return _this;
  }

  _createClass(DropDown, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var tabheader = this.context.tabheader;
      if (tabheader && tabheader.on) {
        tabheader.on(TABEHEADER_SELECT, function (index) {
          _this2.setState({
            selected: index
          });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          styleType = _props.styleType,
          dropDownCols = _props.dropDownCols,
          dataSource = _props.dataSource;

      var dropData = [];
      var placeholderNum = dataSource.length % dropDownCols;
      if (placeholderNum) {
        placeholderNum = dropDownCols - placeholderNum;
      }
      for (var i = 0; i < dataSource.length + placeholderNum; i++) {
        if (i < dataSource.length) {
          dropData.push(dataSource[i]);
        } else {
          dropData.push('');
        }
      }

      if (styleType == 'dropdown') {
        return this.renderGridFun(dropData);
      } else {
        return null;
      }
    }
  }]);

  return DropDown;
}(_rax.Component);

DropDown.contextTypes = {
  tabheader: _rax.PropTypes.object
};

DropDown.defaultProps = {};

exports.default = DropDown;
module.exports = exports['default'];

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _rax = __webpack_require__(0);

var _raxGrid = __webpack_require__(67);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var List = function (_Component) {
  _inherits(List, _Component);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(_raxView2.default, null, this.getContent());
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      var props = this.props,
          list = props.dataSource,
          count = props.cells,
          renderCell = props.renderCell;

      var grids = [];

      var gridDataArr = [];
      for (var i = 0; i < list.length; i++) {
        var index = Math.floor(i / count);
        if (i % count == 0) {
          gridDataArr[index] = [];
        }
        gridDataArr[index].push((0, _rax.createElement)(_raxGrid.Col, { style: props.colStyle }, renderCell(list[i], i)));
        if (i % count == 0 && i != 0) {
          grids.push((0, _rax.createElement)(_raxGrid.Row, { style: props.rowStyle }, gridDataArr[index - 1]));
        }
        if (i == list.length - 1) {
          grids.push((0, _rax.createElement)(_raxGrid.Row, { style: props.rowStyle }, gridDataArr[index]));
        }
      };

      return (0, _rax.createElement)(_raxView2.default, null, grids);
    }
  }]);

  return List;
}(_rax.Component);

List.defaultProps = {
  colStyle: {},
  rowStyle: {},
  cells: 1,
  dataSource: [],
  renderCell: function renderCell() {}
};

exports.default = List;
module.exports = exports['default'];

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Row = function (_Component) {
  _inherits(Row, _Component);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
  }

  _createClass(Row, [{
    key: 'render',
    value: function render() {
      var moreStyle = {};
      var gridType = this.props.gridType;

      if (gridType == 'flex-start') {
        styles.initial.display = 'block';
      } else {
        moreStyle.justifyContent = gridType;
      }

      var style = _extends({}, styles.initial, this.props.style, moreStyle);

      return (0, _rax.createElement)(_raxView2.default, _extends({}, this.props, { style: style }));
    }
  }]);

  return Row;
}(_rax.Component);

var styles = {
  initial: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  }
};

exports.default = Row;
module.exports = exports['default'];

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Col = function (_Component) {
  _inherits(Col, _Component);

  function Col() {
    _classCallCheck(this, Col);

    return _possibleConstructorReturn(this, (Col.__proto__ || Object.getPrototypeOf(Col)).apply(this, arguments));
  }

  _createClass(Col, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          style = _props.style;

      return (0, _rax.createElement)(_raxView2.default, _extends({}, this.props, {
        style: _extends({
          flex: 1
        }, style, {
          width: '1%'
        })
      }));
    }
  }]);

  return Col;
}(_rax.Component);

exports.default = Col;
module.exports = exports['default'];

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _rax = __webpack_require__(0);

var _raxScrollview = __webpack_require__(19);

var _raxScrollview2 = _interopRequireDefault(_raxScrollview);

var _Item = __webpack_require__(167);

var _Item2 = _interopRequireDefault(_Item);

var _AnimBuoy = __webpack_require__(168);

var _AnimBuoy2 = _interopRequireDefault(_AnimBuoy);

var _raxGrid = __webpack_require__(67);

var _universalEnv = __webpack_require__(1);

var _style = __webpack_require__(28);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var SCROLLVIEW_REF = 'scrollview';
var TABEHEADER_SCTOLLTO = 'tabheaderScrollTo';
var TABEHEADER_SELECT = 'tabheaderSelect';

var ItemList = function (_Component) {
  _inherits(ItemList, _Component);

  function ItemList(props) {
    _classCallCheck(this, ItemList);

    var _this = _possibleConstructorReturn(this, (ItemList.__proto__ || Object.getPrototypeOf(ItemList)).call(this, props));

    _this.scrollTo = function (options) {
      var xNum = parseInt(options.x) - 300;
      if (_universalEnv.isWeex && xNum <= 0) {
        xNum = 0;
      }
      if (_this.refs[SCROLLVIEW_REF]) {
        _this.refs[SCROLLVIEW_REF].scrollTo({ x: xNum });
      }
    };

    _this.state = {
      selected: props.selected
    };
    return _this;
  }

  _createClass(ItemList, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var tabheader = this.context.tabheader;
      if (tabheader && tabheader.on) {
        tabheader.on(TABEHEADER_SCTOLLTO, function (options) {
          _this2.scrollTo(options);
        });
        tabheader.on(TABEHEADER_SELECT, function (index) {
          _this2.setState({
            selected: index
          });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          style = _props.style,
          dataSource = _props.dataSource,
          onSelect = _props.onSelect,
          animType = _props.animType,
          scrollType = _props.scrollType,
          styleType = _props.styleType,
          itemWidth = _props.itemWidth,
          renderItem = _props.renderItem,
          renderSelect = _props.renderSelect,
          itemStyle = _props.itemStyle,
          itemSelectedStyle = _props.itemSelectedStyle,
          containerStyle = _props.containerStyle,
          animBuoyStyle = _props.animBuoyStyle;

      var contentContainerWidth = 0;

      var childrens = [];
      dataSource.map(function (item, index) {
        // fix with bug for ios 78
        if (typeof itemWidth == 'function') {
          contentContainerWidth += parseInt(itemWidth(item, index));
        } else {
          contentContainerWidth += parseInt(itemWidth);
        }
        if (scrollType == 'scroll') {
          childrens.push((0, _rax.createElement)(_Item2.default, {
            index: index,
            selected: _this3.state.selected,
            data: item,
            itemWidth: itemWidth,
            onSelect: onSelect,
            renderItem: renderItem,
            renderSelect: renderSelect,
            itemStyle: itemStyle,
            itemSelectedStyle: itemSelectedStyle,
            styleType: styleType }));
        } else {
          itemWidth = 750 / dataSource.length;
          childrens.push((0, _rax.createElement)(_raxGrid.Col, null, (0, _rax.createElement)(_Item2.default, {
            index: index,
            selected: _this3.state.selected,
            data: item,
            itemWidth: itemWidth,
            onSelect: onSelect,
            renderItem: renderItem,
            renderSelect: renderSelect,
            itemStyle: itemStyle,
            itemSelectedStyle: itemSelectedStyle,
            styleType: styleType })));
        }
      });

      var thisContainerStyle = _extends({}, _style2.default.container, style, containerStyle);

      if (styleType == 'icon') {
        thisContainerStyle = _extends({}, thisContainerStyle, _style2.default.iconContainer);
      }

      if (styleType == 'dropdown') {
        thisContainerStyle.width = 750 - 71;
      }

      if (scrollType == 'scroll') {
        return (0, _rax.createElement)(_raxScrollview2.default, {
          ref: SCROLLVIEW_REF,
          style: _extends({}, thisContainerStyle, {
            display: 'block'
          }),
          contentContainerStyle: _extends({}, thisContainerStyle, {
            borderWidth: 0,
            margin: 0,
            padding: 0,
            justifyContent: 'center',
            flexDirection: 'row',
            width: contentContainerWidth
          }),
          showsHorizontalScrollIndicator: false,
          horizontal: true }, (0, _rax.createElement)(_AnimBuoy2.default, _extends({}, this.props, {
          itemWidth: itemWidth,
          style: animBuoyStyle })), childrens);
      } else {
        return (0, _rax.createElement)(_raxGrid.Row, { style: thisContainerStyle }, (0, _rax.createElement)(_AnimBuoy2.default, _extends({}, this.props, {
          itemWidth: itemWidth,
          style: animBuoyStyle })), childrens);
      }
    }
  }]);

  return ItemList;
}(_rax.Component);

ItemList.contextTypes = {
  tabheader: _rax.PropTypes.object
};

ItemList.defaultProps = {
  dataSource: []
};

exports.default = ItemList;
module.exports = exports['default'];

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var requestAnimationFrame = typeof requestAnimationFrame === 'undefined' ? typeof webkitRequestAnimationFrame === 'undefined' ? function (job) {
  return setTimeout(job, 16);
} : webkitRequestAnimationFrame : requestAnimationFrame;

var cancelAnimationFrame = typeof cancelAnimationFrame === 'undefined' ? typeof webkitCancelAnimationFrame === 'undefined' ? clearTimeout : webkitCancelAnimationFrame : cancelAnimationFrame;

var TYPES = {
  START: 'start',
  END: 'end',
  RUN: 'run',
  STOP: 'stop'
};

var easing = {
  easeOutSine: function easeOutSine(x) {
    return Math.sin(x * Math.PI / 2);
  }
};

var MIN_DURATION = 1;

var noop = function noop() {};

var Timer = function () {
  function Timer(config) {
    _classCallCheck(this, Timer);

    this.config = _extends({
      easing: 'linear',
      duration: Infinity,
      onStart: noop,
      onRun: noop,
      onStop: noop,
      onEnd: noop
    }, config);
  }

  _createClass(Timer, [{
    key: 'run',
    value: function run() {
      var _config = this.config,
          duration = _config.duration,
          onStart = _config.onStart,
          onRun = _config.onRun;

      if (duration <= MIN_DURATION) {
        this.isfinished = true;
        onRun({ percent: 1 });
        this.stop();
      }
      if (this.isfinished) return;
      this._hasFinishedPercent = this._stop && this._stop.percent || 0;
      this._stop = null;
      this.start = Date.now();
      this.percent = 0;
      onStart({ percent: 0, type: TYPES.START });
      // epsilon determines the precision of the solved values
      var epsilon = 1000 / 60 / duration / 4;
      this.easingFn = easing[this.config.easing];
      this._run();
    }
  }, {
    key: '_run',
    value: function _run() {
      var _this = this;

      var _config2 = this.config,
          onRun = _config2.onRun,
          onStop = _config2.onStop;

      this._raf && cancelAnimationFrame(this._raf);
      this._raf = requestAnimationFrame(function () {
        _this.now = Date.now();
        _this.t = _this.now - _this.start;
        _this.duration = _this.now - _this.start >= _this.config.duration ? _this.config.duration : _this.now - _this.start;
        _this.progress = _this.easingFn(_this.duration / _this.config.duration);
        _this.percent = _this.duration / _this.config.duration + _this._hasFinishedPercent;
        if (_this.percent >= 1 || _this._stop) {
          _this.percent = _this._stop && _this._stop.percent ? _this._stop.percent : 1;
          _this.duration = _this._stop && _this._stop.duration ? _this._stop.duration : _this.duration;

          onRun({
            percent: _this.progress,
            originPercent: _this.percent,
            t: _this.t,
            type: TYPES.RUN
          });

          onStop({
            percent: _this.percent,
            t: _this.t,
            type: TYPES.STOP
          });

          if (_this.percent >= 1) {
            _this.isfinished = true;
            _this.stop();
          }
          return;
        }

        onRun({
          percent: _this.progress,
          originPercent: _this.percent,
          t: _this.t,
          type: TYPES.RUN
        });

        _this._run();
      });
    }
  }, {
    key: 'stop',
    value: function stop() {
      var onEnd = this.config.onEnd;

      this._stop = {
        percent: this.percent,
        now: this.now
      };
      onEnd({
        percent: 1,
        t: this.t,
        type: TYPES.END
      });
      cancelAnimationFrame(this._raf);
    }
  }]);

  return Timer;
}();

exports.default = Timer;
module.exports = exports['default'];

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxText = __webpack_require__(3);

var _raxText2 = _interopRequireDefault(_raxText);

var _raxTouchable = __webpack_require__(25);

var _raxTouchable2 = _interopRequireDefault(_raxTouchable);

var _style = __webpack_require__(28);

var _style2 = _interopRequireDefault(_style);

var _raxIcon = __webpack_require__(41);

var _raxIcon2 = _interopRequireDefault(_raxIcon);

var _universalEnv = __webpack_require__(1);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var TABEHEADER_SCTOLLTO = 'tabheaderScrollTo';
var TABEHEADER_SELECT = 'tabheaderSelect';

var Item = function (_Component) {
  _inherits(Item, _Component);

  function Item() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Item);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Item.__proto__ || Object.getPrototypeOf(Item)).call.apply(_ref, [this].concat(args))), _this), _this.select = function (index, useAnim) {
      var tabheader = _this.context.tabheader;

      if (_this.animType != 'noanim' && useAnim) {
        tabheader.emit(TABEHEADER_SCTOLLTO, {
          x: parseInt(_this.props.itemWidth) * index
        });
      }
      if (_this.selected != index) {
        _this.props.onPress && _this.props.onPress(index);
        _this.props.onSelect && _this.props.onSelect(index);
      }
      if (tabheader) {
        tabheader.emit(TABEHEADER_SELECT, index);
      }
    }, _this.initStyle = function (styleType, itemStyle, itemSelectedStyle, itemWidth, selected) {
      var thisItemStyle = void 0,
          textStyle = void 0,
          iconStyle = void 0,
          iconTextStyle = void 0;

      thisItemStyle = _extends({}, _style2.default.item, { width: itemWidth });

      iconStyle = _style2.default.icon;
      iconTextStyle = _style2.default.iconText;

      if (selected) {
        thisItemStyle = _extends({}, thisItemStyle, itemStyle, itemSelectedStyle);
        textStyle = _style2.default.selectItemText;
        if (itemSelectedStyle) {
          textStyle = _extends({}, textStyle, itemSelectedStyle);
          iconTextStyle = _extends({}, iconTextStyle, itemSelectedStyle);
        }
      } else {
        thisItemStyle = _extends({}, thisItemStyle, itemStyle);
        textStyle = _extends({}, _style2.default.itemText, itemStyle);
      }

      if (styleType == 'icon') {
        thisItemStyle = _extends({}, _style2.default.iconItem, thisItemStyle);
        if (!_universalEnv.isWeex) {
          if (iconTextStyle.height) {
            iconTextStyle.height = 12;
          }
        }
      }

      return {
        container: thisItemStyle,
        text: textStyle,
        icon: iconStyle,
        iconText: iconTextStyle
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Item, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          index = _props.index,
          selected = _props.selected,
          data = _props.data,
          styleType = _props.styleType,
          itemWidth = _props.itemWidth,
          renderItem = _props.renderItem,
          renderSelect = _props.renderSelect,
          itemStyle = _props.itemStyle,
          itemSelectedStyle = _props.itemSelectedStyle;

      if (typeof this.props.itemWidth == 'function') {
        itemWidth = this.props.itemWidth(data, index);
      }

      renderSelect = renderSelect ? renderSelect : renderItem;
      var isSelected = index === selected;
      var thisStyles = this.initStyle(styleType, itemStyle, itemSelectedStyle, itemWidth, isSelected);

      if (styleType == 'icon') {
        return (0, _rax.createElement)(_raxTouchable2.default, {
          onPress: function onPress() {
            _this2.select(index, true);
          },
          style: thisStyles.container }, (0, _rax.createElement)(_raxView2.default, { style: _style2.default.iconBox }, (0, _rax.createElement)(_raxIcon2.default, { style: _style2.default.icon, source: { uri: data.icon } })), (0, _rax.createElement)(_raxView2.default, null, (0, _rax.createElement)(_raxText2.default, { style: thisStyles.iconText }, data.text)));
      } else if (styleType == 'normal' || styleType == 'dropdown') {
        return (0, _rax.createElement)(_raxTouchable2.default, {
          onPress: function onPress() {
            _this2.select(index, true);
          },
          style: thisStyles.container }, (0, _rax.createElement)(_raxText2.default, { style: thisStyles.text }, data));
      } else {
        if (isSelected) {
          return (0, _rax.createElement)(_raxTouchable2.default, {
            onPress: function onPress() {
              _this2.select(index);
            },
            style: thisStyles.container }, renderSelect(data, index));
        } else {
          return (0, _rax.createElement)(_raxTouchable2.default, {
            onPress: function onPress() {
              _this2.select(index);
            }, style: thisStyles.container }, renderItem(data, index));
        }
      }
    }
  }]);

  return Item;
}(_rax.Component);

Item.contextTypes = {
  tabheader: _rax.PropTypes.object
};

Item.defaultProps = {
  selected: 0,
  itemWidth: 166
};

exports.default = Item;
module.exports = exports['default'];

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _animation = __webpack_require__(68);

var _animation2 = _interopRequireDefault(_animation);

var _style = __webpack_require__(28);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var TABEHEADER_SCTOLLTO = 'tabheaderScrollTo';

var AnimBuoy = function (_Component) {
  _inherits(AnimBuoy, _Component);

  function AnimBuoy() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AnimBuoy);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AnimBuoy.__proto__ || Object.getPrototypeOf(AnimBuoy)).call.apply(_ref, [this].concat(args))), _this), _this.scrollTo = function (options) {
      if (_this.props.animType != 'noanim') {
        var animbuoy = (0, _rax.findDOMNode)(_this.refs.animbuoy);
        _animation2.default.scrollTo(animbuoy, options);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AnimBuoy, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var tabheader = this.context.tabheader;
      if (tabheader && tabheader.on) {
        tabheader.on(TABEHEADER_SCTOLLTO, function (options) {
          _this2.scrollTo(options);
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var left = this.props.itemWidth;
      if (typeof left == 'string') {
        left = parseInt(left.split('rem')[0]) * this.props.selected;
      } else {
        left = this.props.itemWidth * this.props.selected;
      }
      this.scrollTo({ x: left });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          itemWidth = _props.itemWidth,
          animType = _props.animType;

      var backgroundColor = '#fc511f';
      if (this.props.style) {
        backgroundColor = this.props.style.backgroundColor || this.props.style.borderColor || this.props.style.borderBottomColor || backgroundColor;
      }
      var top = 76;
      if (this.props.styleType == 'icon') {
        top = 107;
      }

      var thisStyle = _extends({}, this.props.style, {
        position: 'absolute',
        left: 0,
        top: top,
        height: 4,
        width: itemWidth,
        backgroundColor: backgroundColor
      });

      if (animType == 'bg') {
        thisStyle = _extends({}, thisStyle, {
          top: 0,
          height: 110
        });
      }

      if (animType == 'noanim') {
        return null;
      } else {
        return (0, _rax.createElement)(_raxView2.default, { style: _style2.default.borderBottom }, (0, _rax.createElement)(_raxView2.default, { ref: 'animbuoy', style: thisStyle }));
      }
    }
  }]);

  return AnimBuoy;
}(_rax.Component);

AnimBuoy.contextTypes = {
  tabheader: _rax.PropTypes.object
};

AnimBuoy.defaultProps = {
  itemWidth: 166
};

exports.default = AnimBuoy;
module.exports = exports['default'];

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _universalEnv = __webpack_require__(1);

exports.default = {
  initWebStyle: function initWebStyle() {
    if (!_universalEnv.isWeex && typeof document !== 'undefined') {
      if (!document.getElementById('rxtabheaderstyle')) {
        var node = document.createElement('style'),
            str = 'html{-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}';
        node.innerHTML = str;
        node.id = 'rxtabheaderstyle';
        document.getElementsByTagName('head')[0].appendChild(node);
      }
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixinEmitter = mixinEmitter;
/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter() {};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixinEmitter(clazz) {
  for (var key in Emitter.prototype) {
    clazz.prototype[key] = Emitter.prototype[key];
  }
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function (event, fn) {
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function (event) {
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1),
      callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function (event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function (event) {
  return !!this.listeners(event).length;
};

exports.default = Emitter;

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* jshint node:true */



var IntlMessageFormat = __webpack_require__(172)['default'];

// Add all locale data to `IntlMessageFormat`. This module will be ignored when
// bundling for the browser with Browserify/Webpack.
__webpack_require__(179);

// Re-export `IntlMessageFormat` as the CommonJS default exports with all the
// locale data registered, and with English set as the default locale. Define
// the `default` prop for use with other compiled ES6 Modules.
exports = module.exports = IntlMessageFormat;
exports['default'] = exports;

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* jslint esnext: true */



var src$core$$ = __webpack_require__(173),
    src$en$$ = __webpack_require__(178);

src$core$$["default"].__addLocaleData(src$en$$["default"]);
src$core$$["default"].defaultLocale = 'en';

exports["default"] = src$core$$["default"];

//# sourceMappingURL=main.js.map

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */



var src$utils$$ = __webpack_require__(70),
    src$es5$$ = __webpack_require__(174),
    src$compiler$$ = __webpack_require__(175),
    intl$messageformat$parser$$ = __webpack_require__(176);
exports["default"] = MessageFormat;

// -- MessageFormat --------------------------------------------------------

function MessageFormat(message, locales, formats) {
    // Parse string messages into an AST.
    var ast = typeof message === 'string' ? MessageFormat.__parse(message) : message;

    if (!(ast && ast.type === 'messageFormatPattern')) {
        throw new TypeError('A message must be provided as a String or AST.');
    }

    // Creates a new object with the specified `formats` merged with the default
    // formats.
    formats = this._mergeFormats(MessageFormat.formats, formats);

    // Defined first because it's used to build the format pattern.
    src$es5$$.defineProperty(this, '_locale', { value: this._resolveLocale(locales) });

    // Compile the `ast` to a pattern that is highly optimized for repeated
    // `format()` invocations. **Note:** This passes the `locales` set provided
    // to the constructor instead of just the resolved locale.
    var pluralFn = this._findPluralRuleFunction(this._locale);
    var pattern = this._compilePattern(ast, locales, formats, pluralFn);

    // "Bind" `format()` method to `this` so it can be passed by reference like
    // the other `Intl` APIs.
    var messageFormat = this;
    this.format = function (values) {
        try {
            return messageFormat._format(pattern, values);
        } catch (e) {
            if (e.variableId) {
                throw new Error('The intl string context variable \'' + e.variableId + '\'' + ' was not provided to the string \'' + message + '\'');
            } else {
                throw e;
            }
        }
    };
}

// Default format options used as the prototype of the `formats` provided to the
// constructor. These are used when constructing the internal Intl.NumberFormat
// and Intl.DateTimeFormat instances.
src$es5$$.defineProperty(MessageFormat, 'formats', {
    enumerable: true,

    value: {
        number: {
            'currency': {
                style: 'currency'
            },

            'percent': {
                style: 'percent'
            }
        },

        date: {
            'short': {
                month: 'numeric',
                day: 'numeric',
                year: '2-digit'
            },

            'medium': {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            },

            'long': {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            },

            'full': {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            }
        },

        time: {
            'short': {
                hour: 'numeric',
                minute: 'numeric'
            },

            'medium': {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            },

            'long': {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short'
            },

            'full': {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short'
            }
        }
    }
});

// Define internal private properties for dealing with locale data.
src$es5$$.defineProperty(MessageFormat, '__localeData__', { value: src$es5$$.objCreate(null) });
src$es5$$.defineProperty(MessageFormat, '__addLocaleData', { value: function value(data) {
        if (!(data && data.locale)) {
            throw new Error('Locale data provided to IntlMessageFormat is missing a ' + '`locale` property');
        }

        MessageFormat.__localeData__[data.locale.toLowerCase()] = data;
    } });

// Defines `__parse()` static method as an exposed private.
src$es5$$.defineProperty(MessageFormat, '__parse', { value: intl$messageformat$parser$$["default"].parse });

// Define public `defaultLocale` property which defaults to English, but can be
// set by the developer.
src$es5$$.defineProperty(MessageFormat, 'defaultLocale', {
    enumerable: true,
    writable: true,
    value: undefined
});

MessageFormat.prototype.resolvedOptions = function () {
    // TODO: Provide anything else?
    return {
        locale: this._locale
    };
};

MessageFormat.prototype._compilePattern = function (ast, locales, formats, pluralFn) {
    var compiler = new src$compiler$$["default"](locales, formats, pluralFn);
    return compiler.compile(ast);
};

MessageFormat.prototype._findPluralRuleFunction = function (locale) {
    var localeData = MessageFormat.__localeData__;
    var data = localeData[locale.toLowerCase()];

    // The locale data is de-duplicated, so we have to traverse the locale's
    // hierarchy until we find a `pluralRuleFunction` to return.
    while (data) {
        if (data.pluralRuleFunction) {
            return data.pluralRuleFunction;
        }

        data = data.parentLocale && localeData[data.parentLocale.toLowerCase()];
    }

    throw new Error('Locale data added to IntlMessageFormat is missing a ' + '`pluralRuleFunction` for :' + locale);
};

MessageFormat.prototype._format = function (pattern, values) {
    var result = '',
        i,
        len,
        part,
        id,
        value,
        err;

    for (i = 0, len = pattern.length; i < len; i += 1) {
        part = pattern[i];

        // Exist early for string parts.
        if (typeof part === 'string') {
            result += part;
            continue;
        }

        id = part.id;

        // Enforce that all required values are provided by the caller.
        if (!(values && src$utils$$.hop.call(values, id))) {
            err = new Error('A value must be provided for: ' + id);
            err.variableId = id;
            throw err;
        }

        value = values[id];

        // Recursively format plural and select parts' option — which can be a
        // nested pattern structure. The choosing of the option to use is
        // abstracted-by and delegated-to the part helper object.
        if (part.options) {
            result += this._format(part.getOption(value), values);
        } else {
            result += part.format(value);
        }
    }

    return result;
};

MessageFormat.prototype._mergeFormats = function (defaults, formats) {
    var mergedFormats = {},
        type,
        mergedType;

    for (type in defaults) {
        if (!src$utils$$.hop.call(defaults, type)) {
            continue;
        }

        mergedFormats[type] = mergedType = src$es5$$.objCreate(defaults[type]);

        if (formats && src$utils$$.hop.call(formats, type)) {
            src$utils$$.extend(mergedType, formats[type]);
        }
    }

    return mergedFormats;
};

MessageFormat.prototype._resolveLocale = function (locales) {
    if (typeof locales === 'string') {
        locales = [locales];
    }

    // Create a copy of the array so we can push on the default locale.
    locales = (locales || []).concat(MessageFormat.defaultLocale);

    var localeData = MessageFormat.__localeData__;
    var i, len, localeParts, data;

    // Using the set of locales + the default locale, we look for the first one
    // which that has been registered. When data does not exist for a locale, we
    // traverse its ancestors to find something that's been registered within
    // its hierarchy of locales. Since we lack the proper `parentLocale` data
    // here, we must take a naive approach to traversal.
    for (i = 0, len = locales.length; i < len; i += 1) {
        localeParts = locales[i].toLowerCase().split('-');

        while (localeParts.length) {
            data = localeData[localeParts.join('-')];
            if (data) {
                // Return the normalized locale string; e.g., we return "en-US",
                // instead of "en-us".
                return data.locale;
            }

            localeParts.pop();
        }
    }

    var defaultLocale = locales.pop();
    throw new Error('No locale data has been added to IntlMessageFormat for: ' + locales.join(', ') + ', or the default locale: ' + defaultLocale);
};

//# sourceMappingURL=core.js.map

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */



var src$utils$$ = __webpack_require__(70);

// Purposely using the same implementation as the Intl.js `Intl` polyfill.
// Copyright 2013 Andy Earnshaw, MIT License

var realDefineProp = function () {
    try {
        return !!Object.defineProperty({}, 'a', {});
    } catch (e) {
        return false;
    }
}();

var es3 = !realDefineProp && !Object.prototype.__defineGetter__;

var defineProperty = realDefineProp ? Object.defineProperty : function (obj, name, desc) {

    if ('get' in desc && obj.__defineGetter__) {
        obj.__defineGetter__(name, desc.get);
    } else if (!src$utils$$.hop.call(obj, name) || 'value' in desc) {
        obj[name] = desc.value;
    }
};

var objCreate = Object.create || function (proto, props) {
    var obj, k;

    function F() {}
    F.prototype = proto;
    obj = new F();

    for (k in props) {
        if (src$utils$$.hop.call(props, k)) {
            defineProperty(obj, k, props[k]);
        }
    }

    return obj;
};

exports.defineProperty = defineProperty, exports.objCreate = objCreate;

//# sourceMappingURL=es5.js.map

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */



exports["default"] = Compiler;

function Compiler(locales, formats, pluralFn) {
    this.locales = locales;
    this.formats = formats;
    this.pluralFn = pluralFn;
}

Compiler.prototype.compile = function (ast) {
    this.pluralStack = [];
    this.currentPlural = null;
    this.pluralNumberFormat = null;

    return this.compileMessage(ast);
};

Compiler.prototype.compileMessage = function (ast) {
    if (!(ast && ast.type === 'messageFormatPattern')) {
        throw new Error('Message AST is not of type: "messageFormatPattern"');
    }

    var elements = ast.elements,
        pattern = [];

    var i, len, element;

    for (i = 0, len = elements.length; i < len; i += 1) {
        element = elements[i];

        switch (element.type) {
            case 'messageTextElement':
                pattern.push(this.compileMessageText(element));
                break;

            case 'argumentElement':
                pattern.push(this.compileArgument(element));
                break;

            default:
                throw new Error('Message element does not have a valid type');
        }
    }

    return pattern;
};

Compiler.prototype.compileMessageText = function (element) {
    // When this `element` is part of plural sub-pattern and its value contains
    // an unescaped '#', use a `PluralOffsetString` helper to properly output
    // the number with the correct offset in the string.
    if (this.currentPlural && /(^|[^\\])#/g.test(element.value)) {
        // Create a cache a NumberFormat instance that can be reused for any
        // PluralOffsetString instance in this message.
        if (!this.pluralNumberFormat) {
            this.pluralNumberFormat = new Intl.NumberFormat(this.locales);
        }

        return new PluralOffsetString(this.currentPlural.id, this.currentPlural.format.offset, this.pluralNumberFormat, element.value);
    }

    // Unescape the escaped '#'s in the message text.
    return element.value.replace(/\\#/g, '#');
};

Compiler.prototype.compileArgument = function (element) {
    var format = element.format;

    if (!format) {
        return new StringFormat(element.id);
    }

    var formats = this.formats,
        locales = this.locales,
        pluralFn = this.pluralFn,
        options;

    switch (format.type) {
        case 'numberFormat':
            options = formats.number[format.style];
            return {
                id: element.id,
                format: new Intl.NumberFormat(locales, options).format
            };

        case 'dateFormat':
            options = formats.date[format.style];
            return {
                id: element.id,
                format: new Intl.DateTimeFormat(locales, options).format
            };

        case 'timeFormat':
            options = formats.time[format.style];
            return {
                id: element.id,
                format: new Intl.DateTimeFormat(locales, options).format
            };

        case 'pluralFormat':
            options = this.compileOptions(element);
            return new PluralFormat(element.id, format.ordinal, format.offset, options, pluralFn);

        case 'selectFormat':
            options = this.compileOptions(element);
            return new SelectFormat(element.id, options);

        default:
            throw new Error('Message element does not have a valid format type');
    }
};

Compiler.prototype.compileOptions = function (element) {
    var format = element.format,
        options = format.options,
        optionsHash = {};

    // Save the current plural element, if any, then set it to a new value when
    // compiling the options sub-patterns. This conforms the spec's algorithm
    // for handling `"#"` syntax in message text.
    this.pluralStack.push(this.currentPlural);
    this.currentPlural = format.type === 'pluralFormat' ? element : null;

    var i, len, option;

    for (i = 0, len = options.length; i < len; i += 1) {
        option = options[i];

        // Compile the sub-pattern and save it under the options's selector.
        optionsHash[option.selector] = this.compileMessage(option.value);
    }

    // Pop the plural stack to put back the original current plural value.
    this.currentPlural = this.pluralStack.pop();

    return optionsHash;
};

// -- Compiler Helper Classes --------------------------------------------------

function StringFormat(id) {
    this.id = id;
}

StringFormat.prototype.format = function (value) {
    if (!value && typeof value !== 'number') {
        return '';
    }

    return typeof value === 'string' ? value : String(value);
};

function PluralFormat(id, useOrdinal, offset, options, pluralFn) {
    this.id = id;
    this.useOrdinal = useOrdinal;
    this.offset = offset;
    this.options = options;
    this.pluralFn = pluralFn;
}

PluralFormat.prototype.getOption = function (value) {
    var options = this.options;

    var option = options['=' + value] || options[this.pluralFn(value - this.offset, this.useOrdinal)];

    return option || options.other;
};

function PluralOffsetString(id, offset, numberFormat, string) {
    this.id = id;
    this.offset = offset;
    this.numberFormat = numberFormat;
    this.string = string;
}

PluralOffsetString.prototype.format = function (value) {
    var number = this.numberFormat.format(value - this.offset);

    return this.string.replace(/(^|[^\\])#/g, '$1' + number).replace(/\\#/g, '#');
};

function SelectFormat(id, options) {
    this.id = id;
    this.options = options;
}

SelectFormat.prototype.getOption = function (value) {
    var options = this.options;
    return options[value] || options.other;
};

//# sourceMappingURL=compiler.js.map

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports = module.exports = __webpack_require__(177)['default'];
exports['default'] = exports;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports["default"] = function () {
  "use strict";

  /*
   * Generated by PEG.js 0.9.0.
   *
   * http://pegjs.org/
   */

  function peg$subclass(child, parent) {
    function ctor() {
      this.constructor = child;
    }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function peg$SyntaxError(message, expected, found, location) {
    this.message = message;
    this.expected = expected;
    this.found = found;
    this.location = location;
    this.name = "SyntaxError";

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, peg$SyntaxError);
    }
  }

  peg$subclass(peg$SyntaxError, Error);

  function peg$parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},
        parser = this,
        peg$FAILED = {},
        peg$startRuleFunctions = { start: peg$parsestart },
        peg$startRuleFunction = peg$parsestart,
        peg$c0 = function peg$c0(elements) {
      return {
        type: 'messageFormatPattern',
        elements: elements,
        location: location()
      };
    },
        peg$c1 = function peg$c1(text) {
      var string = '',
          i,
          j,
          outerLen,
          inner,
          innerLen;

      for (i = 0, outerLen = text.length; i < outerLen; i += 1) {
        inner = text[i];

        for (j = 0, innerLen = inner.length; j < innerLen; j += 1) {
          string += inner[j];
        }
      }

      return string;
    },
        peg$c2 = function peg$c2(messageText) {
      return {
        type: 'messageTextElement',
        value: messageText,
        location: location()
      };
    },
        peg$c3 = /^[^ \t\n\r,.+={}#]/,
        peg$c4 = { type: "class", value: "[^ \\t\\n\\r,.+={}#]", description: "[^ \\t\\n\\r,.+={}#]" },
        peg$c5 = "{",
        peg$c6 = { type: "literal", value: "{", description: "\"{\"" },
        peg$c7 = ",",
        peg$c8 = { type: "literal", value: ",", description: "\",\"" },
        peg$c9 = "}",
        peg$c10 = { type: "literal", value: "}", description: "\"}\"" },
        peg$c11 = function peg$c11(id, format) {
      return {
        type: 'argumentElement',
        id: id,
        format: format && format[2],
        location: location()
      };
    },
        peg$c12 = "number",
        peg$c13 = { type: "literal", value: "number", description: "\"number\"" },
        peg$c14 = "date",
        peg$c15 = { type: "literal", value: "date", description: "\"date\"" },
        peg$c16 = "time",
        peg$c17 = { type: "literal", value: "time", description: "\"time\"" },
        peg$c18 = function peg$c18(type, style) {
      return {
        type: type + 'Format',
        style: style && style[2],
        location: location()
      };
    },
        peg$c19 = "plural",
        peg$c20 = { type: "literal", value: "plural", description: "\"plural\"" },
        peg$c21 = function peg$c21(pluralStyle) {
      return {
        type: pluralStyle.type,
        ordinal: false,
        offset: pluralStyle.offset || 0,
        options: pluralStyle.options,
        location: location()
      };
    },
        peg$c22 = "selectordinal",
        peg$c23 = { type: "literal", value: "selectordinal", description: "\"selectordinal\"" },
        peg$c24 = function peg$c24(pluralStyle) {
      return {
        type: pluralStyle.type,
        ordinal: true,
        offset: pluralStyle.offset || 0,
        options: pluralStyle.options,
        location: location()
      };
    },
        peg$c25 = "select",
        peg$c26 = { type: "literal", value: "select", description: "\"select\"" },
        peg$c27 = function peg$c27(options) {
      return {
        type: 'selectFormat',
        options: options,
        location: location()
      };
    },
        peg$c28 = "=",
        peg$c29 = { type: "literal", value: "=", description: "\"=\"" },
        peg$c30 = function peg$c30(selector, pattern) {
      return {
        type: 'optionalFormatPattern',
        selector: selector,
        value: pattern,
        location: location()
      };
    },
        peg$c31 = "offset:",
        peg$c32 = { type: "literal", value: "offset:", description: "\"offset:\"" },
        peg$c33 = function peg$c33(number) {
      return number;
    },
        peg$c34 = function peg$c34(offset, options) {
      return {
        type: 'pluralFormat',
        offset: offset,
        options: options,
        location: location()
      };
    },
        peg$c35 = { type: "other", description: "whitespace" },
        peg$c36 = /^[ \t\n\r]/,
        peg$c37 = { type: "class", value: "[ \\t\\n\\r]", description: "[ \\t\\n\\r]" },
        peg$c38 = { type: "other", description: "optionalWhitespace" },
        peg$c39 = /^[0-9]/,
        peg$c40 = { type: "class", value: "[0-9]", description: "[0-9]" },
        peg$c41 = /^[0-9a-f]/i,
        peg$c42 = { type: "class", value: "[0-9a-f]i", description: "[0-9a-f]i" },
        peg$c43 = "0",
        peg$c44 = { type: "literal", value: "0", description: "\"0\"" },
        peg$c45 = /^[1-9]/,
        peg$c46 = { type: "class", value: "[1-9]", description: "[1-9]" },
        peg$c47 = function peg$c47(digits) {
      return parseInt(digits, 10);
    },
        peg$c48 = /^[^{}\\\0-\x1F \t\n\r]/,
        peg$c49 = { type: "class", value: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]", description: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]" },
        peg$c50 = "\\\\",
        peg$c51 = { type: "literal", value: "\\\\", description: "\"\\\\\\\\\"" },
        peg$c52 = function peg$c52() {
      return '\\';
    },
        peg$c53 = "\\#",
        peg$c54 = { type: "literal", value: "\\#", description: "\"\\\\#\"" },
        peg$c55 = function peg$c55() {
      return '\\#';
    },
        peg$c56 = "\\{",
        peg$c57 = { type: "literal", value: "\\{", description: "\"\\\\{\"" },
        peg$c58 = function peg$c58() {
      return "{";
    },
        peg$c59 = "\\}",
        peg$c60 = { type: "literal", value: "\\}", description: "\"\\\\}\"" },
        peg$c61 = function peg$c61() {
      return "}";
    },
        peg$c62 = "\\u",
        peg$c63 = { type: "literal", value: "\\u", description: "\"\\\\u\"" },
        peg$c64 = function peg$c64(digits) {
      return String.fromCharCode(parseInt(digits, 16));
    },
        peg$c65 = function peg$c65(chars) {
      return chars.join('');
    },
        peg$currPos = 0,
        peg$savedPos = 0,
        peg$posDetailsCache = [{ line: 1, column: 1, seenCR: false }],
        peg$maxFailPos = 0,
        peg$maxFailExpected = [],
        peg$silentFails = 0,
        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$savedPos, peg$currPos);
    }

    function location() {
      return peg$computeLocation(peg$savedPos, peg$currPos);
    }

    function expected(description) {
      throw peg$buildException(null, [{ type: "other", description: description }], input.substring(peg$savedPos, peg$currPos), peg$computeLocation(peg$savedPos, peg$currPos));
    }

    function error(message) {
      throw peg$buildException(message, null, input.substring(peg$savedPos, peg$currPos), peg$computeLocation(peg$savedPos, peg$currPos));
    }

    function peg$computePosDetails(pos) {
      var details = peg$posDetailsCache[pos],
          p,
          ch;

      if (details) {
        return details;
      } else {
        p = pos - 1;
        while (!peg$posDetailsCache[p]) {
          p--;
        }

        details = peg$posDetailsCache[p];
        details = {
          line: details.line,
          column: details.column,
          seenCR: details.seenCR
        };

        while (p < pos) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) {
              details.line++;
            }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }

          p++;
        }

        peg$posDetailsCache[pos] = details;
        return details;
      }
    }

    function peg$computeLocation(startPos, endPos) {
      var startPosDetails = peg$computePosDetails(startPos),
          endPosDetails = peg$computePosDetails(endPos);

      return {
        start: {
          offset: startPos,
          line: startPosDetails.line,
          column: startPosDetails.column
        },
        end: {
          offset: endPos,
          line: endPosDetails.line,
          column: endPosDetails.column
        }
      };
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) {
        return;
      }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, found, location) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function (a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) {
            return ch.charCodeAt(0).toString(16).toUpperCase();
          }

          return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\x08/g, '\\b').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\f/g, '\\f').replace(/\r/g, '\\r').replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (ch) {
            return '\\x0' + hex(ch);
          }).replace(/[\x10-\x1F\x80-\xFF]/g, function (ch) {
            return '\\x' + hex(ch);
          }).replace(/[\u0100-\u0FFF]/g, function (ch) {
            return "\\u0" + hex(ch);
          }).replace(/[\u1000-\uFFFF]/g, function (ch) {
            return "\\u" + hex(ch);
          });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc,
            foundDesc,
            i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1 ? expectedDescs.slice(0, -1).join(", ") + " or " + expectedDescs[expected.length - 1] : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new peg$SyntaxError(message !== null ? message : buildMessage(expected, found), expected, found, location);
    }

    function peg$parsestart() {
      var s0;

      s0 = peg$parsemessageFormatPattern();

      return s0;
    }

    function peg$parsemessageFormatPattern() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsemessageFormatElement();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsemessageFormatElement();
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c0(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsemessageFormatElement() {
      var s0;

      s0 = peg$parsemessageTextElement();
      if (s0 === peg$FAILED) {
        s0 = peg$parseargumentElement();
      }

      return s0;
    }

    function peg$parsemessageText() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$currPos;
      s3 = peg$parse_();
      if (s3 !== peg$FAILED) {
        s4 = peg$parsechars();
        if (s4 !== peg$FAILED) {
          s5 = peg$parse_();
          if (s5 !== peg$FAILED) {
            s3 = [s3, s4, s5];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$currPos;
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsechars();
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                s3 = [s3, s4, s5];
                s2 = s3;
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parsews();
        if (s1 !== peg$FAILED) {
          s0 = input.substring(s0, peg$currPos);
        } else {
          s0 = s1;
        }
      }

      return s0;
    }

    function peg$parsemessageTextElement() {
      var s0, s1;

      s0 = peg$currPos;
      s1 = peg$parsemessageText();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c2(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseargument() {
      var s0, s1, s2;

      s0 = peg$parsenumber();
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = [];
        if (peg$c3.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c4);
          }
        }
        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            if (peg$c3.test(input.charAt(peg$currPos))) {
              s2 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c4);
              }
            }
          }
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s0 = input.substring(s0, peg$currPos);
        } else {
          s0 = s1;
        }
      }

      return s0;
    }

    function peg$parseargumentElement() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 123) {
        s1 = peg$c5;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c6);
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseargument();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 44) {
                s6 = peg$c7;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c8);
                }
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parse_();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseelementFormat();
                  if (s8 !== peg$FAILED) {
                    s6 = [s6, s7, s8];
                    s5 = s6;
                  } else {
                    peg$currPos = s5;
                    s5 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s5;
                  s5 = peg$FAILED;
                }
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
              if (s5 === peg$FAILED) {
                s5 = null;
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();
                if (s6 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 125) {
                    s7 = peg$c9;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c10);
                    }
                  }
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c11(s3, s5);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseelementFormat() {
      var s0;

      s0 = peg$parsesimpleFormat();
      if (s0 === peg$FAILED) {
        s0 = peg$parsepluralFormat();
        if (s0 === peg$FAILED) {
          s0 = peg$parseselectOrdinalFormat();
          if (s0 === peg$FAILED) {
            s0 = peg$parseselectFormat();
          }
        }
      }

      return s0;
    }

    function peg$parsesimpleFormat() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c12) {
        s1 = peg$c12;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c13);
        }
      }
      if (s1 === peg$FAILED) {
        if (input.substr(peg$currPos, 4) === peg$c14) {
          s1 = peg$c14;
          peg$currPos += 4;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c15);
          }
        }
        if (s1 === peg$FAILED) {
          if (input.substr(peg$currPos, 4) === peg$c16) {
            s1 = peg$c16;
            peg$currPos += 4;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c17);
            }
          }
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 44) {
            s4 = peg$c7;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c8);
            }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parse_();
            if (s5 !== peg$FAILED) {
              s6 = peg$parsechars();
              if (s6 !== peg$FAILED) {
                s4 = [s4, s5, s6];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c18(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsepluralFormat() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c19) {
        s1 = peg$c19;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c20);
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s3 = peg$c7;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c8);
            }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsepluralStyle();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c21(s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseselectOrdinalFormat() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 13) === peg$c22) {
        s1 = peg$c22;
        peg$currPos += 13;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c23);
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s3 = peg$c7;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c8);
            }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsepluralStyle();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c24(s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseselectFormat() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c25) {
        s1 = peg$c25;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c26);
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s3 = peg$c7;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c8);
            }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = [];
              s6 = peg$parseoptionalFormatPattern();
              if (s6 !== peg$FAILED) {
                while (s6 !== peg$FAILED) {
                  s5.push(s6);
                  s6 = peg$parseoptionalFormatPattern();
                }
              } else {
                s5 = peg$FAILED;
              }
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c27(s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseselector() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 61) {
        s2 = peg$c28;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c29);
        }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsenumber();
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parsechars();
      }

      return s0;
    }

    function peg$parseoptionalFormatPattern() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseselector();
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 123) {
              s4 = peg$c5;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c6);
              }
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                s6 = peg$parsemessageFormatPattern();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parse_();
                  if (s7 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 125) {
                      s8 = peg$c9;
                      peg$currPos++;
                    } else {
                      s8 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$c10);
                      }
                    }
                    if (s8 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c30(s2, s6);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseoffset() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 7) === peg$c31) {
        s1 = peg$c31;
        peg$currPos += 7;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c32);
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsenumber();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c33(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsepluralStyle() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parseoffset();
      if (s1 === peg$FAILED) {
        s1 = null;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parseoptionalFormatPattern();
          if (s4 !== peg$FAILED) {
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$parseoptionalFormatPattern();
            }
          } else {
            s3 = peg$FAILED;
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c34(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsews() {
      var s0, s1;

      peg$silentFails++;
      s0 = [];
      if (peg$c36.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c37);
        }
      }
      if (s1 !== peg$FAILED) {
        while (s1 !== peg$FAILED) {
          s0.push(s1);
          if (peg$c36.test(input.charAt(peg$currPos))) {
            s1 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c37);
            }
          }
        }
      } else {
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c35);
        }
      }

      return s0;
    }

    function peg$parse_() {
      var s0, s1, s2;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsews();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsews();
      }
      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c38);
        }
      }

      return s0;
    }

    function peg$parsedigit() {
      var s0;

      if (peg$c39.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c40);
        }
      }

      return s0;
    }

    function peg$parsehexDigit() {
      var s0;

      if (peg$c41.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c42);
        }
      }

      return s0;
    }

    function peg$parsenumber() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 48) {
        s1 = peg$c43;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c44);
        }
      }
      if (s1 === peg$FAILED) {
        s1 = peg$currPos;
        s2 = peg$currPos;
        if (peg$c45.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c46);
          }
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parsedigit();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parsedigit();
          }
          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s1 = input.substring(s1, peg$currPos);
        } else {
          s1 = s2;
        }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c47(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsechar() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      if (peg$c48.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c49);
        }
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c50) {
          s1 = peg$c50;
          peg$currPos += 2;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c51);
          }
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c52();
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 2) === peg$c53) {
            s1 = peg$c53;
            peg$currPos += 2;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c54);
            }
          }
          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c55();
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 2) === peg$c56) {
              s1 = peg$c56;
              peg$currPos += 2;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c57);
              }
            }
            if (s1 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c58();
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 2) === peg$c59) {
                s1 = peg$c59;
                peg$currPos += 2;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c60);
                }
              }
              if (s1 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c61();
              }
              s0 = s1;
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.substr(peg$currPos, 2) === peg$c62) {
                  s1 = peg$c62;
                  peg$currPos += 2;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c63);
                  }
                }
                if (s1 !== peg$FAILED) {
                  s2 = peg$currPos;
                  s3 = peg$currPos;
                  s4 = peg$parsehexDigit();
                  if (s4 !== peg$FAILED) {
                    s5 = peg$parsehexDigit();
                    if (s5 !== peg$FAILED) {
                      s6 = peg$parsehexDigit();
                      if (s6 !== peg$FAILED) {
                        s7 = peg$parsehexDigit();
                        if (s7 !== peg$FAILED) {
                          s4 = [s4, s5, s6, s7];
                          s3 = s4;
                        } else {
                          peg$currPos = s3;
                          s3 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s3;
                        s3 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                  if (s3 !== peg$FAILED) {
                    s2 = input.substring(s2, peg$currPos);
                  } else {
                    s2 = s3;
                  }
                  if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c64(s2);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parsechars() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsechar();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parsechar();
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c65(s1);
      }
      s0 = s1;

      return s0;
    }

    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1) : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
    }
  }

  return {
    SyntaxError: peg$SyntaxError,
    parse: peg$parse
  };
}();

//# sourceMappingURL=parser.js.map

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// GENERATED FILE


exports["default"] = { "locale": "en", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2);if (ord) return n10 == 1 && n100 != 11 ? "one" : n10 == 2 && n100 != 12 ? "two" : n10 == 3 && n100 != 13 ? "few" : "other";return n == 1 && v0 ? "one" : "other";
  } };

//# sourceMappingURL=en.js.map

/***/ }),
/* 179 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Currency code list
 * https://www.currency-iso.org/en/home/tables/table-a1.html
 */
var currency = ['AFN', 'EUR', 'ALL', 'DZD', 'USD', 'AOA', 'XCD', 'ARS', 'AMD', 'AWG', 'AUD', 'AZN', 'BSD', 'BHD', 'BDT', 'BBD', 'BYN', 'BZD', 'XOF', 'BMD', 'INR', 'BTN', 'BOB', 'BOV', 'BAM', 'BWP', 'NOK', 'BRL', 'BND', 'BGN', 'BIF', 'CVE', 'KHR', 'XAF', 'CAD', 'KYD', 'CLP', 'CLF', 'CNY', 'COP', 'COU', 'KMF', 'CDF', 'NZD', 'CRC', 'HRK', 'CUP', 'CUC', 'ANG', 'CZK', 'DKK', 'DJF', 'DOP', 'EGP', 'SVC', 'ERN', 'ETB', 'FKP', 'FJD', 'XPF', 'GMD', 'GEL', 'GHS', 'GIP', 'GTQ', 'GBP', 'GNF', 'GYD', 'HTG', 'HNL', 'HKD', 'HUF', 'ISK', 'IDR', 'XDR', 'IRR', 'IQD', 'ILS', 'JMD', 'JPY', 'JOD', 'KZT', 'KES', 'KPW', 'KRW', 'KWD', 'KGS', 'LAK', 'LBP', 'LSL', 'ZAR', 'LRD', 'LYD', 'CHF', 'MOP', 'MKD', 'MGA', 'MWK', 'MYR', 'MVR', 'MRO', 'MUR', 'XUA', 'MXN', 'MXV', 'MDL', 'MNT', 'MAD', 'MZN', 'MMK', 'NAD', 'NPR', 'NIO', 'NGN', 'OMR', 'PKR', 'PAB', 'PGK', 'PYG', 'PEN', 'PHP', 'PLN', 'QAR', 'RON', 'RUB', 'RWF', 'SHP', 'WST', 'STD', 'SAR', 'RSD', 'SCR', 'SLL', 'SGD', 'XSU', 'SBD', 'SOS', 'SSP', 'LKR', 'SDG', 'SRD', 'SZL', 'SEK', 'CHE', 'CHW', 'SYP', 'TWD', 'TJS', 'TZS', 'THB', 'TOP', 'TTD', 'TND', 'TRY', 'TMT', 'UGX', 'UAH', 'AED', 'USN', 'UYU', 'UYI', 'UZS', 'VUV', 'VEF', 'VND', 'YER', 'ZMW', 'ZWL', 'XBA', 'XBB', 'XBC', 'XBD', 'XTS', 'XXX', 'XAU', 'XPD', 'XPT', 'XAG'];

var numberFormat = {};

for (var i = 0; i < currency.length; i++) {
  numberFormat[currency[i]] = {
    style: 'currency',
    currency: currency[i]
  };
}

var defaultFormats = exports.defaultFormats = {
  number: numberFormat
};

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxText = __webpack_require__(3);

var _raxText2 = _interopRequireDefault(_raxText);

var _intl = __webpack_require__(42);

var _intl2 = _interopRequireDefault(_intl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var I18nText = function (_Component) {
  _inherits(I18nText, _Component);

  function I18nText() {
    _classCallCheck(this, I18nText);

    return _possibleConstructorReturn(this, (I18nText.__proto__ || Object.getPrototypeOf(I18nText)).apply(this, arguments));
  }

  _createClass(I18nText, [{
    key: 'render',
    value: function render() {
      var dir = _intl2.default.getDir();
      var nativeStyle = {};
      if (dir == 'RTL') {
        nativeStyle.textAlign = 'right';
      }
      return (0, _rax.createElement)(
        _raxText2.default,
        { style: _extends({}, nativeStyle, this.props.style) },
        _intl2.default.getText(this.props.name, this.props.dataSource)
      );
    }
  }]);

  return I18nText;
}(_rax.Component);

;

exports.default = I18nText;
module.exports = exports['default'];

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _intl = __webpack_require__(42);

var _intl2 = _interopRequireDefault(_intl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var I18nView = function (_Component) {
  _inherits(I18nView, _Component);

  function I18nView() {
    _classCallCheck(this, I18nView);

    return _possibleConstructorReturn(this, (I18nView.__proto__ || Object.getPrototypeOf(I18nView)).apply(this, arguments));
  }

  _createClass(I18nView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          children = _props.children;

      var dir = _intl2.default.getDir();
      var nativeStyle = {};
      if (dir == 'RTL' && style && style.flexDirection == 'row') {
        nativeStyle.display = 'flex';
        nativeStyle.justifyContent = 'flex-end';
        if (children && children.length) {
          children.reverse();
        }
      }
      return (0, _rax.createElement)(_raxView2.default, _extends({}, this.props, { style: _extends({}, nativeStyle, this.props.style) }));
    }
  }]);

  return I18nView;
}(_rax.Component);

;

exports.default = I18nView;
module.exports = exports['default'];

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
    var a = factory();
    for (var i in a) {
      ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' ? exports : root)[i] = a[i];
    }
  }
})(typeof self !== 'undefined' ? self : undefined, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      function findIndex(o, condition) {
        return o.indexOf(find(o, condition));
      }

      function dropWhile(o, condition) {
        var result = [];
        map(o, function (v, k) {
          if (!condition(v, k)) {
            result.push(v);
          }
        });
        return result;
      }

      function filter(o, condition) {
        var result = [];
        forEach(o, function (v, k) {
          if (condition(v, k)) {
            result.push(v);
          }
        });
        return result;
      }

      function map(o, fn) {
        if (o instanceof Array) {
          return Array.prototype.map.call(o, fn);
        } else {
          var result = [];
          forEach(o, function (v, k) {
            result.push(fn(v, k));
          });
          return result;
        }
      }

      /*
       forEach({a: 1, b: 2}, (v, k) => {
       console.log({
       v, k
       })
       })
      
       forEach([1,2,3],(v,k)=>{
       console.log({
       v,k
       })
       })
       */

      function forEach(o, fn) {
        if (o instanceof Array) {
          return Array.prototype.forEach.call(o, fn);
        }
        Object.keys(o).forEach(function (key) {
          fn(o[key], key);
        });
      }

      /* console.log(
       find([{name: 1}, {name: 2}], (o) => {
       return o.name === 2;
       }))
      
       console.log(find([{name: 1,age:2}, {name: 2}], {name:1}))
       */
      function find(o, condition) {
        var result = null;
        forEach(o, function (v, k) {
          if (typeof condition === 'function') {
            if (condition(v, k)) {
              result = v;
            }
          } else {
            var propName = Object.keys(condition)[0];
            if (propName && v[propName] === condition[propName]) {
              result = v;
            }
          }
        });
        return result;
      }

      module.exports = {
        find: find,
        forEach: forEach,
        map: map,
        filter: filter,
        dropWhile: dropWhile,
        findIndex: findIndex
      };

      /***/
    }]
    /******/)
  );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)(module)))

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var localeConfig = {
  currentLocale: 'zh-CN',
  texts: {

    'n001': '欢迎',
    'n002': '优质',
    'n003': '卡券',
    'n004': '促销',
    'n005': '降价',
    'n006': '直销',

    'n101': '主页',
    'n102': '搜索',
    'n103': '购物车',
    'n104': '心愿单',
    'n105': '用户',

    't1': '所有类别',
    't2': '手机和平板电脑',
    't3': '电脑和笔记本电脑',
    't4': '电视、音频/视频、游戏、服饰',
    't5': '相机',
    't6': '家用电器',
    't7': '健康与美容',
    't8': '流行服饰',
    't9': '箱包和旅行',
    't10': '体育及户外s',
    't11': '电机',
    't12': '媒体、音乐和书籍',
    't13': '杂货店',
    't14': '促销',
    't15': 'Lazada @ 家',
    't16': '数字商品',
    't17': '手表太阳镜珠宝',
    't18': '母婴',
    't19': '玩具',
    't20': '宠物用品',
    't21': '床上用品、浴',
    't22': '家具',
    't23': '工具、DIY、户外',
    't24': '洗衣和清洁作用的',
    't25': '厨房和餐厅',
    't26': '文具工艺',
    't27': '淘宝收藏推荐',
    't28': '所有',
    't29': '现金支付',
    't30': '配送',
    't31': '免费配送',
    't32': '版权 2017',
    't33': '隐私政策| T＆CS |联系我们| Lazada贩卖',
    't34': '改变桌面版本',

    'i0': '帮宝适 Popok Perekat nb-28 优质护理 ',
    'i1': '优惠价 47.000',
    'i2': '原价 59.900',
    'i3': '-22.0%',
    'i4': 'Cicilan tersedia',
    'i5': '查看更多详细信息',

    'dt0': '综合介绍',
    'dt1': '详情',
    'dt2': '问答',
    'dt3': '评价',

    'SIMPLE': '简单的句子',
    'HELLO': '你好, {name}。欢迎来到{where}!',
    'SALE_START': '拍卖将在{start, date}开始',
    'SALE_END': '拍卖将在{end, date, full}结束',
    'COUPON': '优惠卷将在{expires, time, medium}过期',
    'TIME': '时间是{theTime, time}',
    'SALE_PRICE': '售价{price, number, CNY}',
    'PHOTO': '你有{photoNum, number}张照片'
  }
};

exports.default = localeConfig;
module.exports = exports['default'];

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var localeConfig = {
  currentLocale: 'zh-TW',
  texts: {
    'SIMPLE': '簡單的句子',
    'HELLO': '你好, {name}。歡迎來到{where}!',
    'SALE_START': '拍賣將在{start, date}開始',
    'SALE_END': '拍賣將在{end, date, full}結束',
    'COUPON': '優惠卷將在{expires, time, medium}過期',
    'TIME': '時間是{theTime, time}',
    'SALE_PRICE': '售價{price, number, TWD}',
    'PHOTO': '你有{photoNum, number}張照片'
  }
};

exports.default = localeConfig;
module.exports = exports['default'];

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var localeConfig = {
  currentLocale: 'en-US',
  texts: {

    'n001': 'Selamat Datang',
    'n002': 'Lazada Premium',
    'n003': 'Voucher Treats',
    'n004': 'Toserba Kilat',
    'n005': 'Murah Meriah',
    'n006': 'Elektronik',

    'n101': 'Home',
    'n102': 'Search',
    'n103': 'Cart',
    'n104': 'Wishlist',
    'n105': 'Account',

    't1': 'All Categories',
    't2': 'Mobiles & Tablets',
    't3': 'Computers & Laptops',
    't4': 'TV, Audio / Video, Gaming & Wearables',
    't5': 'Cameras',
    't6': 'Home Appliances',
    't7': 'Health & Beauty',
    't8': 'Fashion',
    't9': 'Bags and Travel',
    't10': 'Sports & Outdoors',
    't11': 'Motors',
    't12': 'Media, Music & Books',
    't13': 'Groceries',
    't14': 'Special Promotion',
    't15': 'Lazada @ Home',
    't16': 'Digital Goods',
    't17': 'Watches Sunglasses Jewellery',
    't18': 'Mother & Baby',
    't19': 'Toys & Games',
    't20': 'Pet Supplies',
    't21': 'Bedding & Bath',
    't22': 'Furniture & Décor',
    't23': 'Tools, DIY & Outdoor',
    't24': 'Laundry & Cleaning',
    't25': 'Kitchen & Dining',
    't26': 'Stationery & Craft',
    't27': 'Taobao Collection Recommendation',
    't28': 'View All',
    't29': 'Cash on Delivery',
    't30': 'Nationwide Delivery',
    't31': 'Free Return',
    't32': 'Copyright 2017',
    't33': 'Privacy Policy | T&Cs | Contact Us | Sell on Lazada',
    't34': 'Change to desktop version',

    'i0': 'Pampers Popok Perekat NB-28 Premium Care',
    'i1': 'RP 47.000',
    'i2': 'RP 59.900',
    'i3': '-22.0%',
    'i4': 'Cicilan tersedia',
    'i5': 'LIHAT LEBIH BANYAK DARI DEST',

    'dt0': 'Ringkasan',
    'dt1': 'Rincian Produk',
    'dt2': 'Q&A',
    'dt3': 'Rating & Ulasan',

    'SIMPLE': 'Simple Sentence',
    'HELLO': 'Hello, {name}. Welcome to {where}!',
    'SALE_START': 'Sale begins {start, date}',
    'SALE_END': 'Sale ends {end, date, long}',
    'COUPON': 'Coupon expires at {expires, time, medium}',
    'SALE_PRICE': 'The price is {price, number, USD}',
    'PHOTO': 'You have {photoNum, plural, =0 {no photos.} =1 {one photo.} other {# photos.}}'
  }
};

exports.default = localeConfig;
module.exports = exports['default'];

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var localeConfig = {
  currentLocale: 'fr-FR',
  texts: {
    'SIMPLE': 'phrase simple',
    'HELLO': 'Bonjour, {name}. Bienvenue chez {where}!',
    'SALE_START': 'Vente commence {start, date}',
    'SALE_END': 'se termine la vente {end, date, long}',
    'COUPON': 'Coupon expire à {expires, time, medium}',
    'SALE_PRICE': 'Le prix est {price, number, USD}',
    'PHOTO': 'Vous avez {photoNum, plural, =0 {de photographie.} =1 {une photographie.} other {# photographies.}}'
  }
};

exports.default = localeConfig;
module.exports = exports['default'];

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var localeConfig = {
  currentLocale: 'ja-JP',
  texts: {
    'SIMPLE': '単文',
    'HELLO': 'もしもし {name}, {where}へようこそ！',
    'SALE_START': '販売開始{start, date}',
    'SALE_END': '販売終了日{end, date, long}',
    'COUPON': 'クーポンは{expires,time,medium}に失効します',
    'SALE_PRICE': '価格は{price, number, CNY}です',
    'PHOTO': '{photoNum, plural, =0 {あなたは0} other {#}}枚の写真があります'
  }
};

exports.default = localeConfig;
module.exports = exports['default'];

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var localeConfig = {
  currentLocale: 'ar-EG',
  dir: 'RTL',
  texts: {

    'n001': 'سلامت داتنغ',
    'n002': 'لازادا قسط',
    'n003': 'قسيمة يعامل',
    'n004': 'كل تصنيف',
    'n005': 'مره مرياح',
    'n006': 'إلكترونيّة',

    'n101': 'بيراندا',
    'n102': 'كاري',
    'n103': 'أزياء',
    'n104': 'الاماني',
    'n105': 'المستخدم',

    't1': 'كل تصنيف',
    't2': 'الهواتف النقالة وأقراص',
    't3': 'أجهزة الكمبيوتر و اللاب توب',
    't4': 'التلفزيون، الصوت / الفيديو أو الألعاب & للبس',
    't5': 'الكاميرات',
    't6': 'أجهزة منزلية',
    't7': 'الصحة و الجمال',
    't8': 'أزياء',
    't9': 'حقائب السفر',
    't10': 'والرياضة في الهواء الطلق',
    't11': 'موتورز',
    't12': 'ميديا, الموسيقى و الكتب',
    't13': 'دكاكين البقالة',
    't14': 'الترويجية الخاصة',
    't15': 'لازادا @ المنزل',
    't16': 'السلع الرقمية',
    't17': 'والساعات والنظارات الشمسية والمجوهرات',
    't18': 'الأم و الطفل',
    't19': 'لعبة و العاب',
    't20': 'لوازم الحيوانات الأليفة',
    't21': 'سرير وحمام',
    't22': 'الأثاث و الديكور',
    't23': 'أدوات ديي في الهواء الطلق &',
    't24': 'و غسل الملابس',
    't25': 'مطبخ و سفرة',
    't26': 'القرطاسية والحرف',
    't27': 'تاوباو أوصت مجموعة',
    't28': 'عرض الكل',
    't29': 'الدفع عند التسليم',
    't30': 'وتسليم البلاد',
    't31': 'الحرية في العودة',
    't32': 'حقوق الطبع والنشر في عام 2017',
    't33': 'سياسة الخصوصية | تي آند سي | الاتصال بنا | بيع لازادا',
    't34': 'تغيير سطح المكتب نسخة',

    'i0': 'بامبرز popok perekat nb-28 بريميم كير..',
    'i1': 'معلق 47.000',
    'i2': 'معلق 59.900',
    'i3': '-22.0%',
    'i4': 'Cicilan tersedia',
    'i5': 'لبيه بانياك داري دست',

    'dt0': 'خاتم كسن',
    'dt1': 'المحتوى',
    'dt2': 'سؤال وجواب',
    'dt3': 'تقدير',

    'SIMPLE': 'الجملة البسيطة',
    'HELLO': 'مرحبا {name}.مرحبا {where}!',
    'SALE_START': 'بيع يبدأ {start, date}',
    'SALE_END': 'البيع ينتهي {end, date, long}',
    'COUPON': 'القسيمة تنتهي في {expires, time, medium}',
    'SALE_PRICE': 'السعر {price, number, USD}',
    'PHOTO': 'لديك {photoNum, plural, =0 {لا صور.} =1 {صورة واحدة.} other {# صور.}}'
  }
};

exports.default = localeConfig;
module.exports = exports['default'];

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxText = __webpack_require__(3);

var _raxText2 = _interopRequireDefault(_raxText);

var _raxImage = __webpack_require__(7);

var _raxImage2 = _interopRequireDefault(_raxImage);

var _raxScrollview = __webpack_require__(19);

var _raxScrollview2 = _interopRequireDefault(_raxScrollview);

var _Header = __webpack_require__(71);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(72);

var _Footer2 = _interopRequireDefault(_Footer);

var _Slider = __webpack_require__(73);

var _Slider2 = _interopRequireDefault(_Slider);

var _Scroller = __webpack_require__(198);

var _Scroller2 = _interopRequireDefault(_Scroller);

var _raxIntl = __webpack_require__(8);

var _SimpleApp = __webpack_require__(75);

var _SimpleApp2 = _interopRequireDefault(_SimpleApp);

var _util = __webpack_require__(27);

var _raxNavigation = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Search from '../mods/Search';


_raxIntl.intl.init(__webpack_require__(20));

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return (0, _rax.createElement)(
        _raxScrollview2.default,
        { ref: function ref() {
            _this2.scrollview = _this2;
          } },
        (0, _rax.createElement)(
          _raxView2.default,
          { style: {
              marginTop: 14,
              marginBottom: 14
            } },
          (0, _rax.createElement)(
            _raxNavigation.Link,
            { href: (0, _util.genPath)('items/1') },
            (0, _rax.createElement)(_raxImage2.default, { source: {
                uri: 'https://gw.alicdn.com/tfs/TB1_rjjaTZRMeJjSsppXXXrEpXa-750-207.png'
              },
              style: {
                width: 750,
                height: 207
              } })
          )
        ),
        (0, _rax.createElement)(
          _raxIntl.I18nView,
          { style: { marginBottom: 14, flexDirection: 'row' } },
          (0, _rax.createElement)(
            _raxNavigation.Link,
            { href: (0, _util.genPath)('items/2') },
            (0, _rax.createElement)(_raxImage2.default, { source: {
                uri: 'https://gw.alicdn.com/tfs/TB1Z.2kaUgQMeJjy0FgXXc5dXXa-368-261.png'
              },
              style: {
                width: 368,
                height: 261
              } })
          ),
          (0, _rax.createElement)(_raxView2.default, { style: {
              width: 14,
              height: 261
            } }),
          (0, _rax.createElement)(
            _raxNavigation.Link,
            { href: (0, _util.genPath)('items/3') },
            (0, _rax.createElement)(_raxImage2.default, { source: {
                uri: 'https://gw.alicdn.com/tfs/TB1n9P7aEtWMKJjy0FaXXcCDpXa-367-261.png'
              },
              style: {
                width: 368,
                height: 261
              } })
          )
        ),
        (0, _rax.createElement)(
          _raxIntl.I18nView,
          { style: { marginBottom: 14, flexDirection: 'row' } },
          (0, _rax.createElement)(
            _raxNavigation.Link,
            { href: (0, _util.genPath)('items/4') },
            (0, _rax.createElement)(_raxImage2.default, { source: {
                uri: 'https://gw.alicdn.com/tfs/TB1fnrfaRUSMeJjSspfXXX0VFXa-368-259.png'
              },
              style: {
                width: 368,
                height: 261
              } })
          ),
          (0, _rax.createElement)(_raxView2.default, { style: {
              width: 14,
              height: 261
            } }),
          (0, _rax.createElement)(
            _raxNavigation.Link,
            { href: (0, _util.genPath)('items/5') },
            (0, _rax.createElement)(_raxImage2.default, { source: {
                uri: 'https://gw.alicdn.com/tfs/TB1vBTiaUgQMeJjy0FfXXbddXXa-367-259.png'
              },
              style: {
                width: 368,
                height: 261
              } })
          )
        ),
        (0, _rax.createElement)(
          _raxIntl.I18nView,
          { style: { marginBottom: 14, flexDirection: 'row' } },
          (0, _rax.createElement)(
            _raxNavigation.Link,
            { href: (0, _util.genPath)('items/5') },
            (0, _rax.createElement)(_raxImage2.default, { source: {
                uri: 'https://gw.alicdn.com/tfs/TB1KmnkaMoQMeJjy1XaXXcSsFXa-239-238.png'
              },
              style: {
                width: 240,
                height: 238
              } })
          ),
          (0, _rax.createElement)(_raxView2.default, { style: {
              width: 14,
              height: 238
            } }),
          (0, _rax.createElement)(
            _raxNavigation.Link,
            { href: (0, _util.genPath)('items/6') },
            (0, _rax.createElement)(_raxImage2.default, { source: {
                uri: 'https://gw.alicdn.com/tfs/TB1kOPjaMsSMeJjSspcXXXjFXXa-240-238.png'
              },
              style: {
                width: 240,
                height: 238
              } })
          ),
          (0, _rax.createElement)(_raxView2.default, { style: {
              width: 14,
              height: 238
            } }),
          (0, _rax.createElement)(
            _raxNavigation.Link,
            { href: (0, _util.genPath)('items/7') },
            (0, _rax.createElement)(_raxImage2.default, { source: {
                uri: 'https://gw.alicdn.com/tfs/TB1Rb6iaTZRMeJjSspnXXcJdFXa-239-238.png'
              },
              style: {
                width: 240,
                height: 238
              } })
          )
        ),
        (0, _rax.createElement)(_Header2.default, null),
        (0, _rax.createElement)(
          _raxView2.default,
          { style: {
              backgroundColor: '#0e1f29',
              marginBottom: 14,
              paddingBottom: 9
            } },
          (0, _rax.createElement)(
            _raxText2.default,
            { style: {
                height: 70,
                lineHeight: 70,
                fontSize: 30,
                color: '#f35f19',
                textAlign: 'center'
              } },
            'Ending in'
          ),
          (0, _rax.createElement)(_Scroller2.default, null)
        ),
        (0, _rax.createElement)(
          _raxView2.default,
          { style: {
              marginBottom: 14
            } },
          (0, _rax.createElement)(_raxImage2.default, { source: {
              uri: 'https://gw.alicdn.com/tfs/TB1nD_naMMPMeJjy1XdXXasrXXa-750-206.png'
            },
            style: {
              width: 750,
              height: 206
            } })
        ),
        (0, _rax.createElement)(
          _raxNavigation.Link,
          { href: (0, _util.genPath)('items/11'), style: {
              marginBottom: 14
            } },
          (0, _rax.createElement)(_raxImage2.default, { source: {
              uri: 'https://gw.alicdn.com/tfs/TB1DTHraUgQMeJjy0FgXXc5dXXa-750-207.png'
            },
            style: {
              width: 750,
              height: 206
            } })
        ),
        (0, _rax.createElement)(_Slider2.default, null),
        (0, _rax.createElement)(
          _raxIntl.I18nView,
          { style: _extends({}, _SimpleApp2.default.mod2, { flexDirection: 'row' }) },
          (0, _rax.createElement)(
            _raxText2.default,
            { style: _SimpleApp2.default.boxtext2 },
            _raxIntl.intl.getText('t1')
          )
        ),
        (0, _rax.createElement)(
          _raxIntl.I18nView,
          { style: _extends({}, _SimpleApp2.default.mod3, { flexDirection: 'row' }) },
          (0, _rax.createElement)(
            _raxText2.default,
            { style: _SimpleApp2.default.boxtext3 },
            _raxIntl.intl.getText('t2')
          )
        ),
        (0, _rax.createElement)(
          _raxIntl.I18nView,
          { style: _extends({}, _SimpleApp2.default.mod3, { flexDirection: 'row' }) },
          (0, _rax.createElement)(
            _raxText2.default,
            { style: _SimpleApp2.default.boxtext3 },
            _raxIntl.intl.getText('t3')
          )
        ),
        (0, _rax.createElement)(
          _raxIntl.I18nView,
          { style: _extends({}, _SimpleApp2.default.mod3, { flexDirection: 'row' }) },
          (0, _rax.createElement)(
            _raxText2.default,
            { style: _SimpleApp2.default.boxtext3 },
            _raxIntl.intl.getText('t4')
          )
        ),
        (0, _rax.createElement)(
          _raxIntl.I18nView,
          { style: _extends({}, _SimpleApp2.default.mod3, { flexDirection: 'row' }) },
          (0, _rax.createElement)(
            _raxText2.default,
            { style: _SimpleApp2.default.boxtext3 },
            _raxIntl.intl.getText('t5')
          )
        ),
        (0, _rax.createElement)(
          _raxIntl.I18nView,
          { style: _extends({}, _SimpleApp2.default.mod4, { flexDirection: 'row' }) },
          (0, _rax.createElement)(
            _raxText2.default,
            { style: _SimpleApp2.default.boxtext4 },
            _raxIntl.intl.getText('t27')
          ),
          (0, _rax.createElement)(
            _raxText2.default,
            { style: _SimpleApp2.default.boxtext5 },
            _raxIntl.intl.getText('t28')
          )
        ),
        (0, _rax.createElement)(_Footer2.default, null)
      );
    }
  }]);

  return App;
}(_rax.Component);

exports.default = App;
module.exports = exports['default'];

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var SliderWeb = void 0;
if (_universalEnv.isWeb) {
  SliderWeb = __webpack_require__(192);
}

var Slider = function (_Component) {
  _inherits(Slider, _Component);

  function Slider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Slider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Slider.__proto__ || Object.getPrototypeOf(Slider)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      index: _this.props.index || 0
    }, _this.onChange = function (e) {
      _this.props.onChange(e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Slider, [{
    key: 'handleNativeProps',
    value: function handleNativeProps() {
      var _props = this.props,
          defaultPaginationStyle = _props.defaultPaginationStyle,
          autoPlay = _props.autoPlay,
          showsPagination = _props.showsPagination,
          paginationStyle = _props.paginationStyle,
          autoPlayInterval = _props.autoPlayInterval,
          loop = _props.loop,
          width = _props.width,
          height = _props.height;
      var index = this.state.index;

      var nativeProps = _extends({
        onChange: this.onChange,
        autoPlay: autoPlay,
        showIndicators: showsPagination,
        paginationStyle: paginationStyle ? paginationStyle : defaultPaginationStyle,
        interval: autoPlayInterval,
        infinite: loop,
        index: index
      }, {
        style: _extends({
          width: width,
          height: height
        }, this.props.style)
      });

      return nativeProps;
    }
  }, {
    key: 'slideTo',
    value: function slideTo(index) {
      if (_universalEnv.isWeex) {
        this.setState({
          index: index
        });
      } else {
        this.refs.slider.slideTo(index);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (_universalEnv.isWeex) {
        var children = this.props.children;
        var nativeProps = this.handleNativeProps();
        return (0, _rax.createElement)('slider', nativeProps, nativeProps.showIndicators ? (0, _rax.createElement)('indicator', { style: nativeProps.paginationStyle }) : null, children);
      } else {
        return (0, _rax.createElement)(SliderWeb, _extends({ ref: 'slider' }, this.props));
      }
    }
  }]);

  return Slider;
}(_rax.Component);

Slider.defaultProps = {
  onChange: function onChange() {},
  defaultPaginationStyle: defaultPaginationStyle
};

var defaultPaginationStyle = {
  position: 'absolute',
  width: 750,
  height: 40,
  bottom: 20,
  left: 0,
  itemColor: 'rgba(255, 255, 255, 0.5)',
  itemSelectedColor: 'rgb(255, 80, 0)',
  itemSize: 8
};

exports.default = Slider;
module.exports = exports['default'];

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _universalPanresponder = __webpack_require__(74);

var _universalPanresponder2 = _interopRequireDefault(_universalPanresponder);

var _SwipeEvent = __webpack_require__(195);

var _SwipeEvent2 = _interopRequireDefault(_SwipeEvent);

var _style = __webpack_require__(197);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var SWIPE_LEFT = 'SWIPE_LEFT';
var SWIPE_RIGHT = 'SWIPE_RIGHT';

var Slider = function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this.onSwipeBegin = function () {
      _this.isSwiping = true;
      clearInterval(_this.autoPlayTimer);
    };

    _this.onSwipe = function (_ref) {
      var direction = _ref.direction,
          distance = _ref.distance,
          velocity = _ref.velocity;

      if (_this.isLoopEnd()) return;
      var changeX = distance - _this.offsetX;
      var swipeView = (0, _rax.findDOMNode)(_this.refs.swipeView);
      var styleText = 'translate3d(' + changeX + 'px, 0px, 0px)';
      swipeView.style.transform = styleText;
      swipeView.style.webkitTransform = styleText;
    };

    _this.onSwipeEnd = function (_ref2) {
      var direction = _ref2.direction,
          distance = _ref2.distance,
          velocity = _ref2.velocity;

      _this.isSwiping = false;
      var num = _this.total;
      var realIndex = _this.loopedIndex();
      if (!(_this.isLoopEnd() && (realIndex === num - 1 && direction === SWIPE_LEFT || realIndex === 0 && direction === SWIPE_RIGHT))) {
        _this.slideTo(_this.index, direction);
      }
      if (_this.props.autoPlay) {
        _this.autoPlay();
      }
    };

    _this.getPages = function () {
      var children = _this.props.children;
      if (!children.length || children.length <= 1) {
        return (0, _rax.createElement)(_raxView2.default, { style: _style2.default.childrenStyle }, children);
      }

      return children.map(function (child, index) {
        var refStr = 'child' + index;
        var translateStyle = {
          width: _this.width + 'px',
          height: _this.height,
          left: index * _this.width + 'px'
        };
        return (0, _rax.createElement)(_raxView2.default, { ref: refStr, className: 'childWrap' + index,
          style: [_style2.default.childrenStyle, translateStyle], key: index }, child);
      });
    };

    _this.index = 0;
    _this.height = null;
    _this.width = null;
    _this.loopIdx = 0;
    _this.offsetX = null;
    _this.isSwiping = false;
    _this.total = 0;
    return _this;
  }

  _createClass(Slider, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          children = _props.children,
          height = _props.height,
          width = _props.width;

      if (children.length < 2) return;
      this.index = 0;
      this.height = height;
      // TODO: Avoid convert unit in component
      this.width = parseFloat(width) * document.documentElement.clientWidth / 750;
      this.loopIdx = 0;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autoPlay && this.total > 1) {
        this.autoPlay();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.autoPlayTimer && clearInterval(this.autoPlayTimer);
    }
  }, {
    key: 'autoPlay',
    value: function autoPlay() {
      var _this2 = this;

      var autoplayInterval = this.props.autoplayInterval;
      if (this.isSwiping) return;
      this.autoPlayTimer && clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = setInterval(function () {
        if (_this2.isLoopEnd()) return;
        _this2.slideTo(_this2.index, SWIPE_LEFT);
      }, parseFloat(autoplayInterval));
    }
  }, {
    key: 'slideTo',
    value: function slideTo(index, direction) {
      if (this.isSwiping) return;

      if (direction) {
        this.index = direction === SWIPE_LEFT ? index + 1 : index - 1;
      } else {
        this.index = index;
      }
      this.offsetX = this.index * this.width;

      var realIndex = this.loopedIndex();

      // translate3d for performance optimization
      var swipeView = (0, _rax.findDOMNode)(this.refs.swipeView);
      var styleText = 'translate3d(' + -1 * this.offsetX + 'px, 0px, 0px)';
      swipeView.style.transform = styleText;
      swipeView.style.webkitTransform = styleText;

      this.loopIdx = this.index < 0 && realIndex !== 0 ? this.total - realIndex : realIndex;
      var childNum = 'child' + this.loopIdx;
      var childView = (0, _rax.findDOMNode)(this.refs[childNum]);
      childView.style.left = this.offsetX + 'px';

      this.props.onChange({ index: this.loopIdx });
      this.setState({
        offsetX: this.offsetX
      });
    }
  }, {
    key: 'isLoopEnd',
    value: function isLoopEnd() {
      var realIndex = this.loopedIndex();
      var num = this.total;
      if (!this.props.loop && (realIndex === num - 1 || realIndex === 0)) {
        return true;
      }
      return false;
    }
  }, {
    key: 'loopedIndex',

    // index from 0 to length
    value: function loopedIndex(index, total) {
      index = index || this.index;
      total = total || this.total;
      return Math.abs(index) % total;
    }
  }, {
    key: 'renderPagination',
    value: function renderPagination() {
      var props = this.props;
      if (this.total <= 1) return;

      Object.assign(_style2.default.defaultPaginationStyle, props.paginationStyle);
      var _styles$defaultPagina = _style2.default.defaultPaginationStyle,
          itemSelectedColor = _styles$defaultPagina.itemSelectedColor,
          itemColor = _styles$defaultPagina.itemColor,
          itemSize = _styles$defaultPagina.itemSize;

      var activeStyle = [_style2.default.activeDot, {
        backgroundColor: itemSelectedColor,
        width: itemSize,
        height: itemSize
      }];

      var normalStyle = [_style2.default.normalDot, {
        backgroundColor: itemColor,
        width: itemSize,
        height: itemSize
      }];

      var dots = [];
      var ActiveDot = this.props.activeDot || (0, _rax.createElement)(_raxView2.default, { style: activeStyle });
      var NormalDot = this.props.normalDot || (0, _rax.createElement)(_raxView2.default, { style: normalStyle });
      var realIndex = this.loopIdx;

      for (var i = 0; i < this.total; i++) {
        dots.push(i === realIndex ? (0, _rax.cloneElement)(ActiveDot, { key: i }) : (0, _rax.cloneElement)(NormalDot, { key: i }));
      }

      return (0, _rax.createElement)(_raxView2.default, { style: [_style2.default.defaultPaginationStyle, props.paginationStyle] }, dots);
    }
  }, {
    key: 'renderSwipeView',
    value: function renderSwipeView(pages) {
      var _props2 = this.props,
          initialVelocityThreshold = _props2.initialVelocityThreshold,
          verticalThreshold = _props2.verticalThreshold,
          vertical = _props2.vertical,
          horizontalThreshold = _props2.horizontalThreshold,
          children = _props2.children;

      var style = {
        width: this.width + 'px',
        height: this.height
      };

      return children.length && children.length > 1 ? (0, _rax.createElement)(_SwipeEvent2.default, { style: [_style2.default.swipeWrapper, style],
        onSwipeBegin: this.onSwipeBegin,
        onSwipeEnd: this.onSwipeEnd,
        onSwipe: this.onSwipe,
        initialVelocityThreshold: initialVelocityThreshold,
        verticalThreshold: verticalThreshold,
        vertical: vertical,
        horizontalThreshold: horizontalThreshold }, (0, _rax.createElement)(_raxView2.default, { ref: 'swipeView', style: [_style2.default.swipeStyle, style] }, pages)) : (0, _rax.createElement)(_raxView2.default, { ref: 'swipeView', style: [_style2.default.swipeStyle, style] }, pages);
    }
  }, {
    key: 'render',
    value: function render() {
      var that = this;
      var _props3 = this.props,
          style = _props3.style,
          showsPagination = _props3.showsPagination,
          children = _props3.children;

      this.total = children.length;
      return (0, _rax.createElement)(_raxView2.default, { style: [_style2.default.slideWrapper, style] }, this.renderSwipeView(this.getPages()), showsPagination ? this.renderPagination() : '');
    }
  }]);

  return Slider;
}(_rax.Component);

;

Slider.defaultProps = {
  horizontal: true,
  showsPagination: true,
  loop: true,
  autoPlay: false,
  autoplayInterval: 3000,
  index: 0,
  paginationStyle: null,
  initialVelocityThreshold: 0.7,
  verticalThreshold: 10,
  horizontalThreshold: 10,
  vertical: false
};

Slider.propTypes = {
  onChange: _rax.PropTypes.func,
  paginationStyle: _rax.PropTypes.object
};

exports.default = Slider;
module.exports = exports['default'];

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var TouchHistoryMath = {
  /**
   * This code is optimized and not intended to look beautiful. This allows
   * computing of touch centroids that have moved after `touchesChangedAfter`
   * timeStamp. You can compute the current centroid involving all touches
   * moves after `touchesChangedAfter`, or you can compute the previous
   * centroid of all touches that were moved after `touchesChangedAfter`.
   *
   * @param {TouchHistoryMath} touchHistory Standard Responder touch track
   * data.
   * @param {number} touchesChangedAfter timeStamp after which moved touches
   * are considered "actively moving" - not just "active".
   * @param {boolean} isXAxis Consider `x` dimension vs. `y` dimension.
   * @param {boolean} ofCurrent Compute current centroid for actively moving
   * touches vs. previous centroid of now actively moving touches.
   * @return {number} value of centroid in specified dimension.
   */
  centroidDimension: function centroidDimension(touchHistory, touchesChangedAfter, isXAxis, ofCurrent) {
    var touchBank = touchHistory.touchBank;
    var total = 0;
    var count = 0;

    var oneTouchData = touchHistory.numberActiveTouches === 1 ? touchHistory.touchBank[touchHistory.indexOfSingleActiveTouch] : null;

    if (oneTouchData !== null) {
      if (oneTouchData.touchActive && oneTouchData.currentTimeStamp > touchesChangedAfter) {
        total += ofCurrent && isXAxis ? oneTouchData.currentPageX : ofCurrent && !isXAxis ? oneTouchData.currentPageY : !ofCurrent && isXAxis ? oneTouchData.previousPageX : oneTouchData.previousPageY;
        count = 1;
      }
    } else {
      for (var i in touchBank) {
        var touchTrack = touchBank[i];
        if (touchTrack !== null && touchTrack !== undefined && touchTrack.touchActive && touchTrack.currentTimeStamp >= touchesChangedAfter) {
          var toAdd; // Yuck, program temporarily in invalid state.
          if (ofCurrent && isXAxis) {
            toAdd = touchTrack.currentPageX;
          } else if (ofCurrent && !isXAxis) {
            toAdd = touchTrack.currentPageY;
          } else if (!ofCurrent && isXAxis) {
            toAdd = touchTrack.previousPageX;
          } else {
            toAdd = touchTrack.previousPageY;
          }
          total += toAdd;
          count++;
        }
      }
    }
    return count > 0 ? total / count : TouchHistoryMath.noCentroid;
  },

  currentCentroidXOfTouchesChangedAfter: function currentCentroidXOfTouchesChangedAfter(touchHistory, touchesChangedAfter) {
    return TouchHistoryMath.centroidDimension(touchHistory, touchesChangedAfter, true, // isXAxis
    true // ofCurrent
    );
  },

  currentCentroidYOfTouchesChangedAfter: function currentCentroidYOfTouchesChangedAfter(touchHistory, touchesChangedAfter) {
    return TouchHistoryMath.centroidDimension(touchHistory, touchesChangedAfter, false, // isXAxis
    true // ofCurrent
    );
  },

  previousCentroidXOfTouchesChangedAfter: function previousCentroidXOfTouchesChangedAfter(touchHistory, touchesChangedAfter) {
    return TouchHistoryMath.centroidDimension(touchHistory, touchesChangedAfter, true, // isXAxis
    false // ofCurrent
    );
  },

  previousCentroidYOfTouchesChangedAfter: function previousCentroidYOfTouchesChangedAfter(touchHistory, touchesChangedAfter) {
    return TouchHistoryMath.centroidDimension(touchHistory, touchesChangedAfter, false, // isXAxis
    false // ofCurrent
    );
  },

  currentCentroidX: function currentCentroidX(touchHistory) {
    return TouchHistoryMath.centroidDimension(touchHistory, 0, // touchesChangedAfter
    true, // isXAxis
    true // ofCurrent
    );
  },

  currentCentroidY: function currentCentroidY(touchHistory) {
    return TouchHistoryMath.centroidDimension(touchHistory, 0, // touchesChangedAfter
    false, // isXAxis
    true // ofCurrent
    );
  },

  noCentroid: -1
};

module.exports = TouchHistoryMath;

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Touch position/time tracking information by touchID. Typically, we'll only
 * see IDs with a range of 1-20 (they are recycled when touches end and then
 * start again). This data is commonly needed by many different interaction
 * logic modules so precomputing it is very helpful to do once.
 * Each touch object in `touchBank` is of the following form:
 * { touchActive: boolean,
 *   startTimeStamp: number,
 *   startPageX: number,
 *   startPageY: number,
 *   currentPageX: number,
 *   currentPageY: number,
 *   currentTimeStamp: number
 * }
 */

var touchHistory = {
  touchBank: {},
  numberActiveTouches: 0,
  // If there is only one active touch, we remember its location. This prevents
  // us having to loop through all of the touches all the time in the most
  // common case.
  indexOfSingleActiveTouch: -1,
  mostRecentTimeStamp: 0
};

/**
 * TODO: Instead of making gestures recompute filtered velocity, we could
 * include a built in velocity computation that can be reused globally.
 * @param {Touch} touch Native touch object.
 */
var initializeTouchData = function initializeTouchData(touch) {
  return {
    touchActive: true,
    startTimeStamp: touch.timestamp,
    startPageX: touch.pageX,
    startPageY: touch.pageY,
    currentPageX: touch.pageX,
    currentPageY: touch.pageY,
    currentTimeStamp: touch.timestamp,
    previousPageX: touch.pageX,
    previousPageY: touch.pageY,
    previousTimeStamp: touch.timestamp
  };
};

var reinitializeTouchTrack = function reinitializeTouchTrack(touchTrack, touch) {
  touchTrack.touchActive = true;
  touchTrack.startTimeStamp = touch.timestamp;
  touchTrack.startPageX = touch.pageX;
  touchTrack.startPageY = touch.pageY;
  touchTrack.currentPageX = touch.pageX;
  touchTrack.currentPageY = touch.pageY;
  touchTrack.currentTimeStamp = touch.timestamp;
  touchTrack.previousPageX = touch.pageX;
  touchTrack.previousPageY = touch.pageY;
  touchTrack.previousTimeStamp = touch.timestamp;
};

var recordStartTouchData = function recordStartTouchData(touch) {
  var touchBank = touchHistory.touchBank;
  var identifier = touch.identifier;
  var touchTrack = touchBank[identifier];
  if (touchTrack) {
    reinitializeTouchTrack(touchTrack, touch);
  } else {
    touchBank[touch.identifier] = initializeTouchData(touch);
  }
  touchHistory.mostRecentTimeStamp = touch.timestamp;
};

var recordMoveTouchData = function recordMoveTouchData(touch) {
  var touchBank = touchHistory.touchBank;
  var touchTrack = touchBank[touch.identifier];
  touchTrack.touchActive = true;
  touchTrack.previousPageX = touchTrack.currentPageX;
  touchTrack.previousPageY = touchTrack.currentPageY;
  touchTrack.previousTimeStamp = touchTrack.currentTimeStamp;
  touchTrack.currentPageX = touch.pageX;
  touchTrack.currentPageY = touch.pageY;
  touchTrack.currentTimeStamp = touch.timestamp;
  touchHistory.mostRecentTimeStamp = touch.timestamp;
};

var recordEndTouchData = function recordEndTouchData(touch) {
  var touchBank = touchHistory.touchBank;
  var touchTrack = touchBank[touch.identifier];
  touchTrack.previousPageX = touchTrack.currentPageX;
  touchTrack.previousPageY = touchTrack.currentPageY;
  touchTrack.previousTimeStamp = touchTrack.currentTimeStamp;
  touchTrack.currentPageX = touch.pageX;
  touchTrack.currentPageY = touch.pageY;
  touchTrack.currentTimeStamp = touch.timestamp;
  touchTrack.touchActive = false;
  touchHistory.mostRecentTimeStamp = touch.timestamp;
};

function toArray(collection) {
  return collection && Array.prototype.slice.call(collection) || [];
}

function normalizeTouches(touches, nativeEvent) {
  // Weex is timestamp
  var timeStamp = nativeEvent.timeStamp || nativeEvent.timestamp;

  return toArray(touches).map(function (touch) {
    // Cloned touch
    return {
      clientX: touch.clientX,
      clientY: touch.clientY,
      force: touch.force,
      // FIXME: In weex android pageX/Y return a error value
      pageX: touch.screenX,
      pageY: touch.screenY,
      radiusX: touch.radiusX,
      radiusY: touch.radiusY,
      rotationAngle: touch.rotationAngle,
      screenX: touch.screenX,
      screenY: touch.screenY,
      target: touch.target || nativeEvent.target,
      timestamp: timeStamp,
      identifier: touch.identifier || 1 // MouseEvent without identifier
    };
  });
};

var ResponderTouchHistoryStore = {
  recordTouchTrack: function recordTouchTrack(topLevelType, nativeEvent) {
    var touchBank = touchHistory.touchBank;
    var changedTouches = normalizeTouches(nativeEvent.changedTouches || [nativeEvent], nativeEvent);
    if (topLevelType === 'move') {
      changedTouches.forEach(recordMoveTouchData);
    } else if (topLevelType === 'start') {
      changedTouches.forEach(recordStartTouchData);
      touchHistory.numberActiveTouches = changedTouches.length;
      if (touchHistory.numberActiveTouches === 1) {
        touchHistory.indexOfSingleActiveTouch = changedTouches[0].identifier;
      }
    } else if (topLevelType === 'end') {
      changedTouches.forEach(recordEndTouchData);
      touchHistory.numberActiveTouches = changedTouches.length;
      if (touchHistory.numberActiveTouches === 1) {
        for (var i in touchBank) {
          var touchTrackToCheck = touchBank[i];
          if (touchTrackToCheck != null && touchTrackToCheck.touchActive) {
            touchHistory.indexOfSingleActiveTouch = i;
            break;
          }
        }
      }
    }
  },

  touchHistory: touchHistory
};

module.exports = ResponderTouchHistoryStore;

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _universalPanresponder = __webpack_require__(74);

var _universalPanresponder2 = _interopRequireDefault(_universalPanresponder);

var _isValidSwipe = __webpack_require__(196);

var _isValidSwipe2 = _interopRequireDefault(_isValidSwipe);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var directions = {
  SWIPE_UP: 'SWIPE_UP',
  SWIPE_DOWN: 'SWIPE_DOWN',
  SWIPE_LEFT: 'SWIPE_LEFT',
  SWIPE_RIGHT: 'SWIPE_RIGHT'
};

var SwipeEvent = function (_Component) {
  _inherits(SwipeEvent, _Component);

  function SwipeEvent(props) {
    _classCallCheck(this, SwipeEvent);

    var _this = _possibleConstructorReturn(this, (SwipeEvent.__proto__ || Object.getPrototypeOf(SwipeEvent)).call(this, props));

    _this.state = {
      swipe: {
        direction: null,
        distance: 0,
        velocity: 0
      }
    };
    // swipe is happen
    _this.swipeDetected = false;
    // swipe speed
    _this.velocityProp = null;
    // swipe distance
    _this.distanceProp = null;
    // swipe direction
    _this.swipeDirection = null;
    return _this;
  }

  _createClass(SwipeEvent, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var that = this;
      this.panResponder = _universalPanresponder2.default.create({
        onStartShouldSetPanResponder: function onStartShouldSetPanResponder(evt) {
          return true;
        },
        onMoveShouldSetPanResponder: function onMoveShouldSetPanResponder(evt) {
          return true;
        },
        onPanResponderMove: function onPanResponderMove(evt, gestureState) {
          var dx = gestureState.dx,
              dy = gestureState.dy,
              vx = gestureState.vx,
              vy = gestureState.vy;
          var _props = _this2.props,
              onSwipeBegin = _props.onSwipeBegin,
              onSwipe = _props.onSwipe,
              onSwipeEnd = _props.onSwipeEnd;
          // when no swipe

          if (!_this2.props.continuous && _this2.swipeDetected) {
            return;
          }
          var initialDetection = false;
          var validHorizontal = false;
          var validVertical = false;

          if (!_this2.swipeDetected) {
            initialDetection = true;
            // horizontal
            validHorizontal = that.props.horizontal ? (0, _isValidSwipe2.default)(vx, dy, that.props.initialVelocityThreshold, that.props.verticalThreshold) : '';

            // vertical
            validVertical = that.props.vertical ? (0, _isValidSwipe2.default)(vy, dx, that.props.initialVelocityThreshold, that.props.horizontalThreshold) : '';

            if (validHorizontal) {
              evt.preventDefault && evt.preventDefault();
              _this2.velocityProp = 'vx';
              _this2.distanceProp = 'dx';
              // left
              if ((_this2.props.horizontal || _this2.props.left) && dx < 0) {
                _this2.swipeDirection = directions.SWIPE_LEFT;
                // right
              } else if ((_this2.props.horizontal || _this2.props.right) && dx > 0) {
                _this2.swipeDirection = directions.SWIPE_RIGHT;
              }
            } else if (validVertical) {
              _this2.velocityProp = 'vy';
              _this2.distanceProp = 'dy';
              // up
              if ((_this2.props.vertical || _this2.props.up) && dy < 0) {
                _this2.swipeDirection = directions.SWIPE_UP;
                // down
              } else if ((_this2.props.vertical || _this2.props.down) && dy > 0) {
                _this2.swipeDirection = directions.SWIPE_DOWN;
              }
            }

            if (_this2.swipeDirection) {
              _this2.swipeDetected = true;
            }
          }

          if (_this2.swipeDetected) {
            // gestureState.dx || gestureState.dy
            var distance = gestureState[_this2.distanceProp];
            // gestureState.vx || gestureState.vx
            var velocity = gestureState[_this2.velocityProp];

            var swipeState = {
              direction: _this2.swipeDirection,
              distance: distance,
              velocity: velocity
            };

            if (initialDetection) {
              onSwipeBegin && onSwipeBegin(swipeState);
            } else {
              onSwipe && onSwipe(swipeState);
            }

            if (_this2.props.setGestureState) {
              _this2.setState({
                swipe: swipeState
              });
            }
          }
        },
        onPanResponderTerminationRequest: function onPanResponderTerminationRequest() {
          return true;
        },
        onPanResponderTerminate: this.handleTerminationAndRelease.bind(this),
        onPanResponderRelease: this.handleTerminationAndRelease.bind(this)
      });
    }
  }, {
    key: 'handleTerminationAndRelease',
    value: function handleTerminationAndRelease() {
      var that = this;
      if (this.swipeDetected) {
        var onSwipeEnd = this.props.onSwipeEnd;

        onSwipeEnd && onSwipeEnd({
          direction: this.swipeDirection,
          distance: that.state.swipe.distance,
          velocity: that.state.swipe.velocity
        });
      }
      this.swipeDetected = false;
      this.velocityProp = null;
      this.distanceProp = null;
      this.swipeDirection = null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          onSwipeBegin = _props2.onSwipeBegin,
          onSwipe = _props2.onSwipe,
          onSwipeEnd = _props2.onSwipeEnd,
          props = _objectWithoutProperties(_props2, ['onSwipeBegin', 'onSwipe', 'onSwipeEnd']);

      var style = {
        alignSelf: 'flex-start'
      };
      var state = this.props.setGestureState ? this.state : null;
      return (0, _rax.createElement)(_raxView2.default, _extends({}, this.panResponder.panHandlers, { style: _extends({ style: style }, props.handlerStyle) }), (0, _rax.createElement)(_raxView2.default, _extends({}, props, state), this.props.children));
    }
  }]);

  return SwipeEvent;
}(_rax.Component);

SwipeEvent.defaultProps = {
  horizontal: true,
  vertical: true,
  left: false,
  right: false,
  up: false,
  down: false,
  continuous: true,
  initialVelocityThreshold: 0.2,
  verticalThreshold: 1,
  horizontalThreshold: 5,
  setGestureState: true,
  handlerStyle: {}
};

SwipeEvent.propTypes = {
  onSwipeBegin: _rax.PropTypes.func,
  onSwipe: _rax.PropTypes.func,
  onSwipeEnd: _rax.PropTypes.func,
  swipeDecoratorStyle: _rax.PropTypes.object
};

exports.default = SwipeEvent;
module.exports = exports['default'];

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (velocity, directionalChange, velocityThreshold, changeThreshold) {
  return Math.abs(velocity) > velocityThreshold && Math.abs(directionalChange) < changeThreshold;
};

module.exports = exports["default"];

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  slideWrapper: {
    position: 'relative'
  },
  swipeWrapper: {
    overflow: 'hidden',
    position: 'relative'
  },
  swipeStyle: {
    position: 'relative',
    transform: 'translate3d(0,0,0)',
    transition: 'all .5s ease'
  },
  childrenStyle: {
    position: 'absolute',
    left: 0,
    top: 0
  },
  activeDot: {
    borderRadius: '50%',
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
    display: 'inline-block'
  },
  normalDot: {
    borderRadius: '50%',
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
    display: 'inline-block'
  },
  defaultPaginationStyle: {
    position: 'absolute',
    bottom: 0.2,
    width: '100%',
    display: 'flex',
    margin: '0 auto',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    itemColor: 'rgba(255, 255, 255, 0.5)',
    itemSelectedColor: 'rgb(255, 80, 0)',
    itemSize: 8
  }
};
module.exports = exports['default'];

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxText = __webpack_require__(3);

var _raxText2 = _interopRequireDefault(_raxText);

var _raxImage = __webpack_require__(7);

var _raxImage2 = _interopRequireDefault(_raxImage);

var _raxScrollview = __webpack_require__(19);

var _raxScrollview2 = _interopRequireDefault(_raxScrollview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(
        _raxScrollview2.default,
        {
          style: {
            height: 334,
            display: 'block'
          },
          contentContainerStyle: {
            height: 334,
            borderWidth: 0,
            margin: 0,
            padding: 0,
            justifyContent: 'center',
            flexDirection: 'row',
            width: 200 * 9 + 19 * 8
          },
          showsHorizontalScrollIndicator: false,
          horizontal: true },
        (0, _rax.createElement)(_raxImage2.default, { source: {
            uri: 'https://gw.alicdn.com/tfs/TB1QyMgaCFRMKJjy0FhXXX.xpXa-200-334.png'
          },
          style: {
            width: 200,
            height: 334
          } }),
        (0, _rax.createElement)(_raxView2.default, { style: {
            width: 19,
            height: 334
          } }),
        (0, _rax.createElement)(_raxImage2.default, { source: {
            uri: 'https://gw.alicdn.com/tfs/TB1NojraOERMeJjSspiXXbZLFXa-201-334.png'
          },
          style: {
            width: 200,
            height: 334
          } }),
        (0, _rax.createElement)(_raxView2.default, { style: {
            width: 19,
            height: 334
          } }),
        (0, _rax.createElement)(_raxImage2.default, { source: {
            uri: 'https://gw.alicdn.com/tfs/TB1TDDraUgQMeJjy0FgXXc5dXXa-200-334.png'
          },
          style: {
            width: 200,
            height: 334
          } }),
        (0, _rax.createElement)(_raxView2.default, { style: {
            width: 19,
            height: 334
          } }),
        (0, _rax.createElement)(_raxImage2.default, { source: {
            uri: 'https://gw.alicdn.com/tfs/TB1QyMgaCFRMKJjy0FhXXX.xpXa-200-334.png'
          },
          style: {
            width: 200,
            height: 334
          } }),
        (0, _rax.createElement)(_raxView2.default, { style: {
            width: 19,
            height: 334
          } }),
        (0, _rax.createElement)(_raxImage2.default, { source: {
            uri: 'https://gw.alicdn.com/tfs/TB1NojraOERMeJjSspiXXbZLFXa-201-334.png'
          },
          style: {
            width: 200,
            height: 334
          } }),
        (0, _rax.createElement)(_raxView2.default, { style: {
            width: 19,
            height: 334
          } }),
        (0, _rax.createElement)(_raxImage2.default, { source: {
            uri: 'https://gw.alicdn.com/tfs/TB1TDDraUgQMeJjy0FgXXc5dXXa-200-334.png'
          },
          style: {
            width: 200,
            height: 334
          } }),
        (0, _rax.createElement)(_raxView2.default, { style: {
            width: 19,
            height: 334
          } }),
        (0, _rax.createElement)(_raxImage2.default, { source: {
            uri: 'https://gw.alicdn.com/tfs/TB1QyMgaCFRMKJjy0FhXXX.xpXa-200-334.png'
          },
          style: {
            width: 200,
            height: 334
          } }),
        (0, _rax.createElement)(_raxView2.default, { style: {
            width: 19,
            height: 334
          } }),
        (0, _rax.createElement)(_raxImage2.default, { source: {
            uri: 'https://gw.alicdn.com/tfs/TB1NojraOERMeJjSspiXXbZLFXa-201-334.png'
          },
          style: {
            width: 200,
            height: 334
          } }),
        (0, _rax.createElement)(_raxView2.default, { style: {
            width: 19,
            height: 334
          } }),
        (0, _rax.createElement)(_raxImage2.default, { source: {
            uri: 'https://gw.alicdn.com/tfs/TB1TDDraUgQMeJjy0FgXXc5dXXa-200-334.png'
          },
          style: {
            width: 200,
            height: 334
          } })
      );
    }
  }]);

  return App;
}(_rax.Component);

exports.default = App;
module.exports = exports['default'];

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxText = __webpack_require__(3);

var _raxText2 = _interopRequireDefault(_raxText);

var _raxScrollview = __webpack_require__(19);

var _raxScrollview2 = _interopRequireDefault(_raxScrollview);

var _Header = __webpack_require__(71);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(72);

var _Footer2 = _interopRequireDefault(_Footer);

var _Search = __webpack_require__(200);

var _Search2 = _interopRequireDefault(_Search);

var _Slider = __webpack_require__(73);

var _Slider2 = _interopRequireDefault(_Slider);

var _raxIntl = __webpack_require__(8);

var _SimpleApp = __webpack_require__(75);

var _SimpleApp2 = _interopRequireDefault(_SimpleApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_raxIntl.intl.init(__webpack_require__(20));

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(
        _raxView2.default,
        { style: _SimpleApp2.default.app },
        (0, _rax.createElement)(
          _raxScrollview2.default,
          null,
          (0, _rax.createElement)(_Header2.default, null),
          (0, _rax.createElement)(_Search2.default, null),
          (0, _rax.createElement)(_Slider2.default, null),
          (0, _rax.createElement)(
            _raxIntl.I18nView,
            { style: _extends({}, _SimpleApp2.default.mod2, { flexDirection: 'row' }) },
            (0, _rax.createElement)(
              _raxText2.default,
              { style: _SimpleApp2.default.boxtext2 },
              _raxIntl.intl.getText('t1')
            )
          ),
          (0, _rax.createElement)(
            _raxIntl.I18nView,
            { style: _extends({}, _SimpleApp2.default.mod3, { flexDirection: 'row' }) },
            (0, _rax.createElement)(
              _raxText2.default,
              { style: _SimpleApp2.default.boxtext3 },
              _raxIntl.intl.getText('t2')
            )
          ),
          (0, _rax.createElement)(
            _raxIntl.I18nView,
            { style: _extends({}, _SimpleApp2.default.mod3, { flexDirection: 'row' }) },
            (0, _rax.createElement)(
              _raxText2.default,
              { style: _SimpleApp2.default.boxtext3 },
              _raxIntl.intl.getText('t3')
            )
          ),
          (0, _rax.createElement)(
            _raxIntl.I18nView,
            { style: _extends({}, _SimpleApp2.default.mod3, { flexDirection: 'row' }) },
            (0, _rax.createElement)(
              _raxText2.default,
              { style: _SimpleApp2.default.boxtext3 },
              _raxIntl.intl.getText('t4')
            )
          ),
          (0, _rax.createElement)(
            _raxIntl.I18nView,
            { style: _extends({}, _SimpleApp2.default.mod3, { flexDirection: 'row' }) },
            (0, _rax.createElement)(
              _raxText2.default,
              { style: _SimpleApp2.default.boxtext3 },
              _raxIntl.intl.getText('t5')
            )
          ),
          (0, _rax.createElement)(
            _raxIntl.I18nView,
            { style: _extends({}, _SimpleApp2.default.mod3, { flexDirection: 'row' }) },
            (0, _rax.createElement)(
              _raxText2.default,
              { style: _SimpleApp2.default.boxtext3 },
              _raxIntl.intl.getText('t6')
            )
          ),
          (0, _rax.createElement)(
            _raxIntl.I18nView,
            { style: _extends({}, _SimpleApp2.default.mod3, { flexDirection: 'row' }) },
            (0, _rax.createElement)(
              _raxText2.default,
              { style: _SimpleApp2.default.boxtext3 },
              _raxIntl.intl.getText('t7')
            )
          ),
          (0, _rax.createElement)(
            _raxIntl.I18nView,
            { style: _extends({}, _SimpleApp2.default.mod3, { flexDirection: 'row' }) },
            (0, _rax.createElement)(
              _raxText2.default,
              { style: _SimpleApp2.default.boxtext3 },
              _raxIntl.intl.getText('t8')
            )
          ),
          (0, _rax.createElement)(
            _raxIntl.I18nView,
            { style: _extends({}, _SimpleApp2.default.mod3, { flexDirection: 'row' }) },
            (0, _rax.createElement)(
              _raxText2.default,
              { style: _SimpleApp2.default.boxtext3 },
              _raxIntl.intl.getText('t9')
            )
          ),
          (0, _rax.createElement)(
            _raxIntl.I18nView,
            { style: _extends({}, _SimpleApp2.default.mod3, { flexDirection: 'row' }) },
            (0, _rax.createElement)(
              _raxText2.default,
              { style: _SimpleApp2.default.boxtext3 },
              _raxIntl.intl.getText('t10')
            )
          ),
          (0, _rax.createElement)(
            _raxIntl.I18nView,
            { style: _extends({}, _SimpleApp2.default.mod3, { flexDirection: 'row' }) },
            (0, _rax.createElement)(
              _raxText2.default,
              { style: _SimpleApp2.default.boxtext3 },
              _raxIntl.intl.getText('t11')
            )
          ),
          (0, _rax.createElement)(
            _raxIntl.I18nView,
            { style: _extends({}, _SimpleApp2.default.mod3, { flexDirection: 'row' }) },
            (0, _rax.createElement)(
              _raxText2.default,
              { style: _SimpleApp2.default.boxtext3 },
              _raxIntl.intl.getText('t12')
            )
          ),
          (0, _rax.createElement)(
            _raxIntl.I18nView,
            { style: _extends({}, _SimpleApp2.default.mod3, { flexDirection: 'row' }) },
            (0, _rax.createElement)(
              _raxText2.default,
              { style: _SimpleApp2.default.boxtext3 },
              _raxIntl.intl.getText('t13')
            )
          ),
          (0, _rax.createElement)(
            _raxIntl.I18nView,
            { style: _extends({}, _SimpleApp2.default.mod3, { flexDirection: 'row' }) },
            (0, _rax.createElement)(
              _raxText2.default,
              { style: _SimpleApp2.default.boxtext3 },
              _raxIntl.intl.getText('t14')
            )
          ),
          (0, _rax.createElement)(
            _raxIntl.I18nView,
            { style: _extends({}, _SimpleApp2.default.mod3, { flexDirection: 'row' }) },
            (0, _rax.createElement)(
              _raxText2.default,
              { style: _SimpleApp2.default.boxtext3 },
              _raxIntl.intl.getText('t15')
            )
          ),
          (0, _rax.createElement)(
            _raxIntl.I18nView,
            { style: _extends({}, _SimpleApp2.default.mod3, { flexDirection: 'row' }) },
            (0, _rax.createElement)(
              _raxText2.default,
              { style: _SimpleApp2.default.boxtext3 },
              _raxIntl.intl.getText('t16')
            )
          ),
          (0, _rax.createElement)(
            _raxIntl.I18nView,
            { style: _extends({}, _SimpleApp2.default.mod3, { flexDirection: 'row' }) },
            (0, _rax.createElement)(
              _raxText2.default,
              { style: _SimpleApp2.default.boxtext3 },
              _raxIntl.intl.getText('t17')
            )
          ),
          (0, _rax.createElement)(
            _raxIntl.I18nView,
            { style: _extends({}, _SimpleApp2.default.mod3, { flexDirection: 'row' }) },
            (0, _rax.createElement)(
              _raxText2.default,
              { style: _SimpleApp2.default.boxtext3 },
              _raxIntl.intl.getText('t18')
            )
          ),
          (0, _rax.createElement)(
            _raxIntl.I18nView,
            { style: _extends({}, _SimpleApp2.default.mod3, { flexDirection: 'row' }) },
            (0, _rax.createElement)(
              _raxText2.default,
              { style: _SimpleApp2.default.boxtext3 },
              _raxIntl.intl.getText('t19'),
              's'
            )
          ),
          (0, _rax.createElement)(
            _raxIntl.I18nView,
            { style: _extends({}, _SimpleApp2.default.mod3, { flexDirection: 'row' }) },
            (0, _rax.createElement)(
              _raxText2.default,
              { style: _SimpleApp2.default.boxtext3 },
              _raxIntl.intl.getText('t20')
            )
          ),
          (0, _rax.createElement)(
            _raxIntl.I18nView,
            { style: _extends({}, _SimpleApp2.default.mod3, { flexDirection: 'row' }) },
            (0, _rax.createElement)(
              _raxText2.default,
              { style: _SimpleApp2.default.boxtext3 },
              _raxIntl.intl.getText('t21')
            )
          ),
          (0, _rax.createElement)(
            _raxIntl.I18nView,
            { style: _extends({}, _SimpleApp2.default.mod3, { flexDirection: 'row' }) },
            (0, _rax.createElement)(
              _raxText2.default,
              { style: _SimpleApp2.default.boxtext3 },
              _raxIntl.intl.getText('t22')
            )
          ),
          (0, _rax.createElement)(
            _raxIntl.I18nView,
            { style: _extends({}, _SimpleApp2.default.mod3, { flexDirection: 'row' }) },
            (0, _rax.createElement)(
              _raxText2.default,
              { style: _SimpleApp2.default.boxtext3 },
              _raxIntl.intl.getText('t23')
            )
          ),
          (0, _rax.createElement)(
            _raxIntl.I18nView,
            { style: _extends({}, _SimpleApp2.default.mod3, { flexDirection: 'row' }) },
            (0, _rax.createElement)(
              _raxText2.default,
              { style: _SimpleApp2.default.boxtext3 },
              _raxIntl.intl.getText('t24')
            )
          ),
          (0, _rax.createElement)(
            _raxIntl.I18nView,
            { style: _extends({}, _SimpleApp2.default.mod3, { flexDirection: 'row' }) },
            (0, _rax.createElement)(
              _raxText2.default,
              { style: _SimpleApp2.default.boxtext3 },
              _raxIntl.intl.getText('t25')
            )
          ),
          (0, _rax.createElement)(
            _raxIntl.I18nView,
            { style: _extends({}, _SimpleApp2.default.mod3, { flexDirection: 'row' }) },
            (0, _rax.createElement)(
              _raxText2.default,
              { style: _SimpleApp2.default.boxtext3 },
              _raxIntl.intl.getText('t26')
            )
          ),
          (0, _rax.createElement)(
            _raxIntl.I18nView,
            { style: _extends({}, _SimpleApp2.default.mod4, { flexDirection: 'row' }) },
            (0, _rax.createElement)(
              _raxText2.default,
              { style: _SimpleApp2.default.boxtext4 },
              _raxIntl.intl.getText('t27')
            ),
            (0, _rax.createElement)(
              _raxText2.default,
              { style: _SimpleApp2.default.boxtext5 },
              _raxIntl.intl.getText('t28')
            )
          ),
          (0, _rax.createElement)(_Footer2.default, null)
        )
      );
    }
  }]);

  return App;
}(_rax.Component);

exports.default = App;
module.exports = exports['default'];

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxTextinput = __webpack_require__(201);

var _raxTextinput2 = _interopRequireDefault(_raxTextinput);

var _raxIntl = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_Component) {
  _inherits(Search, _Component);

  function Search() {
    _classCallCheck(this, Search);

    return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
  }

  _createClass(Search, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return (0, _rax.createElement)(
        _raxIntl.I18nView,
        { style: {
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 20,
            paddingRight: 20,
            flexDirection: 'row'
          } },
        (0, _rax.createElement)(
          _raxView2.default,
          null,
          (0, _rax.createElement)(_raxTextinput2.default, {
            onClick: function onClick() {
              _this2.props.onClick && _this2.props.onClick();
            },
            style: {
              width: 710,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#acacac',
              backgroundColor: '#ffffff',
              borderRadius: 10,
              paddingLeft: 10,
              paddingRight: 10
            },
            value: _raxIntl.intl.getText('SIMPLE') })
        )
      );
    }
  }]);

  return Search;
}(_rax.Component);

exports.default = Search;
module.exports = exports['default'];

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _rax = __webpack_require__(0);

var _universalEnv = __webpack_require__(1);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var typeMap = {
  'default': 'text',
  'ascii-capable': 'text',
  'numbers-and-punctuation': 'number',
  'url': 'url',
  'number-pad': 'number',
  'phone-pad': 'tel',
  'name-phone-pad': 'text',
  'email-address': 'email',
  'decimal-pad': 'number',
  'twitter': 'text',
  'web-search': 'search',
  'numeric': 'number'
};

function getText(event) {
  var text = void 0;
  if (_universalEnv.isWeex) {
    text = event.value;
  } else {
    text = event.target.value;
  }
  return text;
}

function genEventObject(originalEvent) {
  var text = getText(originalEvent);
  return {
    nativeEvent: {
      text: text
    },
    originalEvent: originalEvent,
    value: text,
    target: originalEvent.target
  };
}

var TextInput = function (_Component) {
  _inherits(TextInput, _Component);

  function TextInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TextInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call.apply(_ref, [this].concat(args))), _this), _this.handleInput = function (event) {
      _this.props.onInput(genEventObject(event));
    }, _this.handleChange = function (event) {
      if (_this.props.onChange) {
        _this.props.onChange(genEventObject(event));
      }

      if (_this.props.onChangeText) {
        var text = getText(event);
        _this.props.onChangeText(text);
      }
    }, _this.handleFocus = function (event) {
      _this.props.onFocus(genEventObject(event));
    }, _this.handleBlur = function (event) {
      _this.props.onBlur(genEventObject(event));
    }, _this.focus = function () {
      _this.refs.input.focus && _this.refs.input.focus();
    }, _this.blur = function () {
      _this.refs.input.blur && _this.refs.input.blur();
    }, _this.clear = function () {
      (0, _rax.setNativeProps)(_this.refs.input, { value: '' });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextInput, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      (0, _rax.setNativeProps)(this.refs.input, { value: newProps.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          accessibilityLabel = _props.accessibilityLabel,
          autoComplete = _props.autoComplete,
          editable = _props.editable,
          keyboardType = _props.keyboardType,
          maxNumberOfLines = _props.maxNumberOfLines,
          multiline = _props.multiline,
          numberOfLines = _props.numberOfLines,
          onBlur = _props.onBlur,
          onFocus = _props.onFocus,
          onChange = _props.onChange,
          onChangeText = _props.onChangeText,
          onInput = _props.onInput,
          password = _props.password,
          secureTextEntry = _props.secureTextEntry,
          style = _props.style,
          value = _props.value,
          defaultValue = _props.defaultValue;

      var propsCommon = _extends({}, this.props, {
        'aria-label': accessibilityLabel,
        autoComplete: autoComplete && 'on',
        onChange: (onChange || onChangeText) && this.handleChange,
        onInput: onInput && this.handleInput,
        onBlur: onBlur && this.handleBlur,
        onFocus: onFocus && this.handleFocus,
        style: _extends({}, styles.initial, style),
        ref: 'input'
      });

      if (value) {
        delete propsCommon.defaultValue;
      } else {
        propsCommon.value = defaultValue;
      }

      if (typeof editable !== 'undefined' && !editable) {
        propsCommon.readOnly = true;
      }

      var type = typeMap[keyboardType];
      if (password || secureTextEntry) {
        type = 'password';
      }

      if (_universalEnv.isWeex) {
        // Diff with web readonly attr, `disabled` must be boolean value
        var disabled = Boolean(propsCommon.readOnly);

        if (multiline) {
          return (0, _rax.createElement)('textarea', _extends({}, propsCommon, { rows: 20, disabled: disabled }));
        } else {
          // https://github.com/alibaba/weex/blob/dev/doc/components/input.md
          return (0, _rax.createElement)('input', _extends({}, propsCommon, { type: type, disabled: disabled }));
        }
      } else {
        var input = void 0;
        if (multiline) {
          var propsMultiline = {
            maxRows: maxNumberOfLines || numberOfLines,
            minRows: numberOfLines
          };

          input = (0, _rax.createElement)('textarea', _extends({}, propsCommon, propsMultiline), propsCommon.value);
        } else {
          input = (0, _rax.createElement)('input', _extends({}, propsCommon, { type: type }));
        }

        return input;
      }
    }
  }]);

  return TextInput;
}(_rax.Component);

TextInput.propTypes = {};

var styles = {
  initial: {
    appearance: 'none',
    backgroundColor: 'transparent',
    borderColor: '#000000',
    borderWidth: 0,
    boxSizing: 'border-box',
    color: '#000000',
    padding: 0,
    paddingLeft: 24,
    fontSize: 24,
    lineHeight: 60,
    height: 60 // default height
  }
};

exports.default = TextInput;
module.exports = exports['default'];

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxText = __webpack_require__(3);

var _raxText2 = _interopRequireDefault(_raxText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CartScreen = function (_Component) {
  _inherits(CartScreen, _Component);

  function CartScreen() {
    _classCallCheck(this, CartScreen);

    return _possibleConstructorReturn(this, (CartScreen.__proto__ || Object.getPrototypeOf(CartScreen)).apply(this, arguments));
  }

  _createClass(CartScreen, [{
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(
        _raxView2.default,
        null,
        'CartScreen'
      );
    }
  }]);

  return CartScreen;
}(_rax.Component);

exports.default = CartScreen;
module.exports = exports['default'];

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxText = __webpack_require__(3);

var _raxText2 = _interopRequireDefault(_raxText);

var _raxImage = __webpack_require__(7);

var _raxImage2 = _interopRequireDefault(_raxImage);

var _raxNavigation = __webpack_require__(14);

var _raxRecyclerview = __webpack_require__(76);

var _raxRecyclerview2 = _interopRequireDefault(_raxRecyclerview);

var _raxIntl = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_raxIntl.intl.init(__webpack_require__(20));

var Item = function (_Component) {
  _inherits(Item, _Component);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
  }

  _createClass(Item, [{
    key: 'render',
    value: function render() {
      var itemStyle = listStyles;
      if (this.props.isList) {
        itemStyle = listStyles2;
      }
      return (0, _rax.createElement)(
        _raxIntl.I18nView,
        { style: itemStyle.i0 },
        (0, _rax.createElement)(
          _raxNavigation.Link,
          { href: 'https://m.taobao.com/?_wx_tpl=http://groups.alidemo.cn/raxjs/demo-market/demo/archive/lazada.detail.js' },
          (0, _rax.createElement)(_raxImage2.default, { source: {
              uri: 'https://gw.alicdn.com/tfs/TB1YFKRcgMPMeJjy1XdXXasrXXa-353-265.png'
            },
            style: itemStyle.i1 })
        ),
        (0, _rax.createElement)(
          _raxNavigation.Link,
          { href: 'https://m.taobao.com/?_wx_tpl=http://groups.alidemo.cn/raxjs/demo-market/demo/archive/lazada.detail.js' },
          (0, _rax.createElement)(
            _raxView2.default,
            null,
            (0, _rax.createElement)(
              _raxView2.default,
              { style: _extends({}, itemStyle.i21, itemStyle.box) },
              (0, _rax.createElement)(_raxIntl.I18nText, { name: 'i0', style: itemStyle.i22 })
            ),
            (0, _rax.createElement)(
              _raxView2.default,
              { style: _extends({}, itemStyle.i31, itemStyle.box) },
              (0, _rax.createElement)(_raxIntl.I18nText, { name: 'i1', style: itemStyle.i32 })
            ),
            (0, _rax.createElement)(
              _raxIntl.I18nView,
              { style: _extends({}, itemStyle.i41, itemStyle.box) },
              (0, _rax.createElement)(_raxIntl.I18nText, { name: 'i2', style: itemStyle.i42 }),
              (0, _rax.createElement)(_raxIntl.I18nText, { name: 'i3', style: itemStyle.i43 })
            ),
            (0, _rax.createElement)(
              _raxView2.default,
              { style: _extends({}, itemStyle.i51, itemStyle.box) },
              (0, _rax.createElement)(_raxIntl.I18nText, { name: 'i4', style: itemStyle.i52 })
            )
          )
        )
      );
    }
  }]);

  return Item;
}(_rax.Component);

var App = function (_Component2) {
  _inherits(App, _Component2);

  function App() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this2), _this2.touchStart = function (e) {
      _this2.props.onTouchStart();
      // console.log(e);
      // setTimeout(() => {
      //   alert(this.contentOffset);
      // }, 300);
    }, _this2.scroll = function (e) {
      // this.props.onScroll(e);
      // console.log(e.nativeEvent.contentOffset.y);
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // alert(1);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
      return (0, _rax.createElement)(
        _raxRecyclerview2.default,
        {
          style: {
            backgroundColor: '#ededed'
          },
          onScroll: this.scroll,
          onTouchStart: this.touchStart,
          ref: function ref() {
            _this3.scrollview = _this3;
          } },
        (0, _rax.createElement)(
          _raxRecyclerview2.default.Cell,
          null,
          (0, _rax.createElement)(
            _raxView2.default,
            {
              style: {
                marginTop: 81 + 78,
                marginBottom: 14
              } },
            (0, _rax.createElement)(_raxImage2.default, { source: {
                uri: 'https://gw.alicdn.com/tfs/TB1_rjjaTZRMeJjSsppXXXrEpXa-750-207.png'
              },
              style: {
                width: 750,
                height: 207
              } })
          )
        ),
        this.props.isList ? data.map(function () {
          return (0, _rax.createElement)(
            _raxRecyclerview2.default.Cell,
            null,
            (0, _rax.createElement)(Item, { isList: true }),
            (0, _rax.createElement)(Item, { isList: true })
          );
        }) : data.map(function () {
          return (0, _rax.createElement)(
            _raxRecyclerview2.default.Cell,
            null,
            (0, _rax.createElement)(
              _raxIntl.I18nView,
              { style: {
                  marginBottom: 14,
                  paddingLeft: 7,
                  paddingRight: 7,
                  flexDirection: 'row'
                } },
              (0, _rax.createElement)(Item, { isList: false }),
              (0, _rax.createElement)(Item, { isList: false })
            )
          );
        })
      );
    }
  }]);

  return App;
}(_rax.Component);

var listStyles = {
  i0: {
    width: 353,
    height: 535,
    marginLeft: 7,
    marginRight: 7,
    backgroundColor: '#fff'
  },
  i1: {
    width: 353,
    height: 265
  },
  box: {
    paddingLeft: 20,
    paddingRight: 20
  },
  i21: {
    height: 58
  },
  i22: {
    fontSize: 20,
    lightHeight: 29,
    color: '#999'
  },
  i31: _defineProperty({
    height: 27,
    marginTop: 12
  }, 'marginTop', 5),
  i32: {
    lightHeight: 27,
    fontSize: 20,
    color: '#9d4462'
  },
  i41: {
    height: 27,
    marginBottom: 12,
    flexDirection: 'row'
  },
  i42: {
    lightHeight: 27,
    fontSize: 20,
    color: '#9b9b9b'
  },
  i43: {
    lightHeight: 27,
    fontSize: 20,
    color: '#9b9b9b'
  },
  i51: {
    height: 27
  },
  i52: {
    lightHeight: 27,
    fontSize: 20,
    color: '#9b9b9b'
  }
};
var listStyles2 = {
  i0: {
    width: 722,
    height: 245,
    marginLeft: 14,
    marginRight: 14,
    marginBottom: 14,
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  i1: {
    width: 353 * 240 / 265,
    height: 240
  },
  box: {
    width: 400,
    paddingLeft: 20,
    paddingRight: 20
  },
  i21: {
    height: 58,
    marginTop: 20
  },
  i22: {
    fontSize: 20,
    lightHeight: 29,
    color: '#999'
  },
  i31: _defineProperty({
    height: 27,
    marginTop: 12
  }, 'marginTop', 5),
  i32: {
    lightHeight: 27,
    fontSize: 20,
    color: '#9d4462'
  },
  i41: {
    height: 27,
    marginBottom: 12,
    flexDirection: 'row'
  },
  i42: {
    lightHeight: 27,
    fontSize: 20,
    color: '#9b9b9b'
  },
  i43: {
    lightHeight: 27,
    fontSize: 20,
    color: '#9b9b9b'
  },
  i51: {
    height: 27
  },
  i52: {
    lightHeight: 27,
    fontSize: 20,
    color: '#9b9b9b'
  }
};

exports.default = App;
module.exports = exports['default'];

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxText = __webpack_require__(3);

var _raxText2 = _interopRequireDefault(_raxText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AccountScreen = function (_Component) {
  _inherits(AccountScreen, _Component);

  function AccountScreen() {
    _classCallCheck(this, AccountScreen);

    return _possibleConstructorReturn(this, (AccountScreen.__proto__ || Object.getPrototypeOf(AccountScreen)).apply(this, arguments));
  }

  _createClass(AccountScreen, [{
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(
        _raxView2.default,
        null,
        'AccountScreen'
      );
    }
  }]);

  return AccountScreen;
}(_rax.Component);

exports.default = AccountScreen;
module.exports = exports['default'];

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxImage = __webpack_require__(7);

var _raxImage2 = _interopRequireDefault(_raxImage);

var _raxRecyclerview = __webpack_require__(76);

var _raxRecyclerview2 = _interopRequireDefault(_raxRecyclerview);

var _raxIntl = __webpack_require__(8);

var _raxIcon = __webpack_require__(41);

var _raxNavigation = __webpack_require__(14);

var _util = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconFont = (0, _raxIcon.createIconSet)({
  f: '\uE60B',
  g: '\uE627',
  y: '\uE663',
  x: '\uE62D',
  h: '\uE62C'
}, 'iconfont', 'https://at.alicdn.com/t/font_408110_dfge6zmei4hlrf6r.ttf');

_raxIntl.intl.init(__webpack_require__(20));

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.touchStart = function (e) {
      _this.props.onTouchStart && _this.props.onTouchStart();
    }, _this.scroll = function (e) {
      _this.props.onScroll && _this.props.onScroll(e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var itemId = this.props.params.itemId;

      var data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
      return (0, _rax.createElement)(
        _raxRecyclerview2.default,
        {
          style: {
            backgroundColor: '#fff'
          },
          _autoWrapCell: true,
          onScroll: this.scroll,
          onTouchStart: this.touchStart,
          ref: function ref() {
            _this2.scrollview = _this2;
          } },
        (0, _rax.createElement)(_raxIntl.I18nText, { name: 'i0', style: itemStyle.a0 }),
        (0, _rax.createElement)(
          _raxIntl.I18nView,
          { style: itemStyle.abox },
          (0, _rax.createElement)(_raxIntl.I18nText, { name: 'i1', style: itemStyle.a1 }),
          (0, _rax.createElement)(_raxIntl.I18nText, { name: 'i2', style: itemStyle.a2 }),
          (0, _rax.createElement)(_raxIntl.I18nText, { name: 'i3', style: itemStyle.a3 })
        ),
        (0, _rax.createElement)(
          _raxView2.default,
          { style: itemStyle.b1 },
          (0, _rax.createElement)(
            _raxNavigation.Link,
            { style: itemStyle.b2, href: (0, _util.genPath)('items/' + itemId + '/comment') },
            (0, _rax.createElement)(_raxImage2.default, { source: {
                uri: 'https://gw.alicdn.com/tfs/TB1_rjjaTZRMeJjSsppXXXrEpXa-750-207.png'
              },
              style: {
                width: 515,
                height: 515
              } })
          )
        ),
        (0, _rax.createElement)(
          _raxView2.default,
          { style: itemStyle.c1 },
          (0, _rax.createElement)(IconFont, { style: { color: '#999', fontSize: 46, marginTop: 10, textAlign: 'center' }, name: 'x' })
        ),
        (0, _rax.createElement)(
          _raxView2.default,
          { style: itemStyle.d1 },
          (0, _rax.createElement)(_raxIntl.I18nText, { name: 'i5', style: itemStyle.d2 })
        ),
        (0, _rax.createElement)(_raxImage2.default, { source: {
            uri: 'https://gw.alicdn.com/tfs/TB12u8ecwMPMeJjy1XdXXasrXXa-750-4639.jpg'
          },
          quality: 'original',
          style: {
            quality: 'original',
            width: 750,
            height: 4639
          } })
      );
    }
  }]);

  return App;
}(_rax.Component);

// <Image source={{
//     uri: 'https://gw.alicdn.com/tfs/TB1nke_b3MPMeJjy1XdXXasrXXa-750-5611.jpg'
//   }}
//   quality={'original'}
//   style={{
//     quality: 'original',
//     width: 750,
//     height: 5611,
//   }} />

var itemStyle = {
  a0: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    fontSize: 30,
    color: '#666'
  },
  abox: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30
  },
  a1: {
    marginLeft: 10,
    marginRight: 10,
    color: '#9d4462',
    fontSize: 40,
    lineHeight: 40
  },
  a2: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 28,
    color: '#999',
    lineHeight: 40
  },
  a3: {
    fontSize: 28,
    lineHeight: 40
  },
  b1: {
    height: 515,
    backgroundColor: '#fff'
  },
  b2: {
    height: 515,
    width: 515,
    marginLeft: (750 - 515) / 2,
    backgroundColor: '#efefef'
  },
  c1: {
    width: 750,
    height: 88,
    borderBottomStyle: 'solid',
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: 1
  },
  d1: {
    width: 750,
    height: 81,
    borderBottomStyle: 'solid',
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: 14
  },
  d2: {
    color: '#193447',
    width: 750,
    fontSize: 30,
    marginTop: 10,
    paddingTop: 5,
    textAlign: 'center'
  }
};

exports.default = App;
module.exports = exports['default'];

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rax = __webpack_require__(0);

var _raxView = __webpack_require__(2);

var _raxView2 = _interopRequireDefault(_raxView);

var _raxText = __webpack_require__(3);

var _raxText2 = _interopRequireDefault(_raxText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentScreen = function (_Component) {
  _inherits(CommentScreen, _Component);

  function CommentScreen() {
    _classCallCheck(this, CommentScreen);

    return _possibleConstructorReturn(this, (CommentScreen.__proto__ || Object.getPrototypeOf(CommentScreen)).apply(this, arguments));
  }

  _createClass(CommentScreen, [{
    key: 'render',
    value: function render() {
      return (0, _rax.createElement)(
        _raxView2.default,
        null,
        (0, _rax.createElement)(
          _raxText2.default,
          { style: { fontSize: 40 } },
          'CommentScreen'
        ),
        (0, _rax.createElement)(
          _raxText2.default,
          { style: { fontSize: 32 } },
          'params is:',
          JSON.stringify(this.props.params)
        )
      );
    }
  }]);

  return CommentScreen;
}(_rax.Component);

exports.default = CommentScreen;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
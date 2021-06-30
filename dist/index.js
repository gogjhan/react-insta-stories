(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("Stories", ["React"], factory);
	else if(typeof exports === 'object')
		exports["Stories"] = factory(require("react"));
	else
		root["Stories"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/puff.svg":
/*!*****************************!*\
  !*** ./src/assets/puff.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _excluded = ["styles"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: "44",
    height: "44",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "#fff"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    strokeWidth: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "22",
    cy: "22",
    r: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("animate", {
    attributeName: "r",
    begin: "0s",
    dur: "1.8s",
    values: "1; 20",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.165, 0.84, 0.44, 1",
    repeatCount: "indefinite"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("animate", {
    attributeName: "stroke-opacity",
    begin: "0s",
    dur: "1.8s",
    values: "1; 0",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.3, 0.61, 0.355, 1",
    repeatCount: "indefinite"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "22",
    cy: "22",
    r: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("animate", {
    attributeName: "r",
    begin: "-0.9s",
    dur: "1.8s",
    values: "1; 20",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.165, 0.84, 0.44, 1",
    repeatCount: "indefinite"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("animate", {
    attributeName: "stroke-opacity",
    begin: "-0.9s",
    dur: "1.8s",
    values: "1; 0",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.3, 0.61, 0.355, 1",
    repeatCount: "indefinite"
  }))));
});

/***/ }),

/***/ "./src/components/Container.tsx":
/*!**************************************!*\
  !*** ./src/components/Container.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var Global_1 = __importDefault(__webpack_require__(/*! ./../context/Global */ "./src/context/Global.ts"));

var Stories_1 = __importDefault(__webpack_require__(/*! ./../context/Stories */ "./src/context/Stories.ts"));

var Progress_1 = __importDefault(__webpack_require__(/*! ./../context/Progress */ "./src/context/Progress.ts"));

var Story_1 = __importDefault(__webpack_require__(/*! ./Story */ "./src/components/Story.tsx"));

var ProgressArray_1 = __importDefault(__webpack_require__(/*! ./ProgressArray */ "./src/components/ProgressArray.tsx"));

function default_1() {
  var _react_1$useState = react_1.useState(0),
      _react_1$useState2 = _slicedToArray(_react_1$useState, 2),
      currentId = _react_1$useState2[0],
      setCurrentId = _react_1$useState2[1];

  var _react_1$useState3 = react_1.useState(true),
      _react_1$useState4 = _slicedToArray(_react_1$useState3, 2),
      pause = _react_1$useState4[0],
      setPause = _react_1$useState4[1];

  var _react_1$useState5 = react_1.useState(true),
      _react_1$useState6 = _slicedToArray(_react_1$useState5, 2),
      bufferAction = _react_1$useState6[0],
      setBufferAction = _react_1$useState6[1];

  var _react_1$useState7 = react_1.useState(0),
      _react_1$useState8 = _slicedToArray(_react_1$useState7, 2),
      videoDuration = _react_1$useState8[0],
      setVideoDuration = _react_1$useState8[1];

  var mousedownId = react_1.useRef();
  var isMounted = react_1.useRef(true);
  var overlay = react_1.useRef();

  var _react_1$useContext = react_1.useContext(Global_1.default),
      width = _react_1$useContext.width,
      height = _react_1$useContext.height,
      loop = _react_1$useContext.loop,
      currentIndex = _react_1$useContext.currentIndex,
      isPaused = _react_1$useContext.isPaused,
      keyboardNavigation = _react_1$useContext.keyboardNavigation,
      _react_1$useContext$s = _react_1$useContext.storyContainerStyles,
      storyContainerStyles = _react_1$useContext$s === void 0 ? {} : _react_1$useContext$s;

  var _react_1$useContext2 = react_1.useContext(Stories_1.default),
      stories = _react_1$useContext2.stories;

  react_1.useEffect(function () {
    if (typeof currentIndex === 'number') {
      if (currentIndex >= 0 && currentIndex < stories.length) {
        setCurrentIdWrapper(function () {
          return currentIndex;
        });
      } else {
        console.error('Index out of bounds. Current index was set to value more than the length of stories array.', currentIndex);
      }
    }
  }, [currentIndex]);
  react_1.useEffect(function () {
    if (typeof isPaused === 'boolean') {
      setPause(isPaused);
    }
  }, [isPaused]);
  react_1.useEffect(function () {
    var isClient = typeof window !== 'undefined' && window.document;

    if (isClient && typeof keyboardNavigation === 'boolean' && keyboardNavigation) {
      document.addEventListener("keydown", handleKeyDown);
      return function () {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [keyboardNavigation]); // Cleanup mounted state - for issue #130 (https://github.com/mohitk05/react-insta-stories/issues/130)

  react_1.useEffect(function () {
    return function () {
      isMounted.current = false;
    };
  }, []);

  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === 'ArrowLeft') {
      previous();
    } else if (e.key === 'ArrowRight') {
      next();
    }
  };

  var toggleState = function toggleState(action, bufferAction) {
    console.log('calling action', action);
    if (action === 'next') return next();
    if (action === 'previous') return previous();
    setPause(action === 'pause');
    setBufferAction(!!bufferAction);
  };

  var setCurrentIdWrapper = function setCurrentIdWrapper(callback) {
    setCurrentId(callback);
    toggleState('pause', true);
  };

  var previous = function previous() {
    setCurrentIdWrapper(function (prev) {
      return prev > 0 ? prev - 1 : prev;
    });
  };

  var next = function next() {
    if (isMounted.current) {
      if (loop) {
        updateNextStoryIdForLoop();
      } else {
        updateNextStoryId();
      }
    }
  };

  var updateNextStoryIdForLoop = function updateNextStoryIdForLoop() {
    setCurrentIdWrapper(function (prev) {
      return (prev + 1) % stories.length;
    });
  };

  var updateNextStoryId = function updateNextStoryId() {
    setCurrentIdWrapper(function (prev) {
      if (prev < stories.length - 1) return prev + 1;
      return prev;
    });
  };

  var debouncePause = function debouncePause(e) {
    e.preventDefault();
    mousedownId.current = setTimeout(function () {
      toggleState('pause');
    }, 200);
  };

  var mouseUp = function mouseUp(type) {
    return function (e) {
      e.preventDefault();
      mousedownId.current && clearTimeout(mousedownId.current);

      if (pause) {
        toggleState('play');
      } else {
        type === 'next' ? next() : previous();
      }
    };
  };

  var getVideoDuration = function getVideoDuration(duration) {
    setVideoDuration(duration * 1000);
  };

  return react_1.default.createElement("div", {
    style: Object.assign(Object.assign(Object.assign({}, storyContainerStyles), styles.container), {
      width: width,
      height: height
    })
  }, react_1.default.createElement(Progress_1.default.Provider, {
    value: {
      bufferAction: bufferAction,
      videoDuration: videoDuration,
      currentId: currentId,
      pause: pause,
      next: next
    }
  }, react_1.default.createElement(ProgressArray_1.default, null)), stories.map(function (story, index) {
    return react_1.default.createElement(Story_1.default, {
      action: toggleState,
      bufferAction: bufferAction,
      playState: pause,
      index: index,
      currentId: currentId,
      story: story,
      getVideoDuration: getVideoDuration
    });
  }));
}

exports.default = default_1;
var styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    background: '#111',
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    height: 'inherit',
    width: 'inherit',
    display: 'flex'
  }
};

/***/ }),

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

var Header = function Header(_ref) {
  var profileImage = _ref.profileImage,
      heading = _ref.heading,
      subheading = _ref.subheading;
  return react_1.default.createElement("div", {
    style: styles.main
  }, profileImage && react_1.default.createElement("img", {
    style: styles.img,
    src: profileImage
  }), react_1.default.createElement("span", {
    style: styles.text
  }, react_1.default.createElement("p", {
    style: styles.heading
  }, heading), react_1.default.createElement("p", {
    style: styles.subheading
  }, subheading)));
};

var styles = {
  main: {
    display: 'flex',
    alignItems: 'center'
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 10,
    filter: 'drop-shadow(0 0px 2px rgba(0, 0, 0, 0.5))',
    border: '2px solid rgba(255, 255, 255, 0.8)'
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    filter: 'drop-shadow(0 0px 3px rgba(0, 0, 0, 0.9))'
  },
  heading: {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.9)',
    margin: 0,
    marginBottom: 2
  },
  subheading: {
    fontSize: '0.6rem',
    color: 'rgba(255, 255, 255, 0.8)',
    margin: 0
  }
};
exports.default = Header;

/***/ }),

/***/ "./src/components/Progress.tsx":
/*!*************************************!*\
  !*** ./src/components/Progress.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var ProgressWrapper_1 = __importDefault(__webpack_require__(/*! ./ProgressWrapper */ "./src/components/ProgressWrapper.tsx"));

var Progress_1 = __importDefault(__webpack_require__(/*! ./../context/Progress */ "./src/context/Progress.ts"));

exports.default = function (props) {
  var _react_1$useContext = react_1.useContext(Progress_1.default),
      bufferAction = _react_1$useContext.bufferAction,
      pause = _react_1$useContext.pause;

  var getProgressStyle = function getProgressStyle(_ref) {
    var active = _ref.active;

    switch (active) {
      case 2:
        return {
          width: '100%'
        };

      case 1:
        return {
          transform: "scaleX(".concat(props.count / 100, ")")
        };

      case 0:
        return {
          width: 0
        };

      default:
        return {
          width: 0
        };
    }
  };

  var width = props.width,
      active = props.active;
  return react_1.default.createElement(ProgressWrapper_1.default, {
    width: width,
    pause: pause,
    bufferAction: bufferAction
  }, react_1.default.createElement("div", {
    style: Object.assign(Object.assign({}, getProgressStyle({
      active: active
    })), styles.inner)
  }));
};

var styles = {
  inner: {
    background: '#fff',
    height: '100%',
    maxWidth: '100%',
    borderRadius: 2,
    transformOrigin: 'center left',
    WebkitBackfaceVisibility: 'hidden',
    MozBackfaceVisibility: 'hidden',
    msBackfaceVisibility: 'hidden',
    backfaceVisibility: 'hidden',
    WebkitPerspective: 1000,
    MozPerspective: 1000,
    msPerspective: 1000,
    perspective: 1000
  }
};

/***/ }),

/***/ "./src/components/ProgressArray.tsx":
/*!******************************************!*\
  !*** ./src/components/ProgressArray.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var Progress_1 = __importDefault(__webpack_require__(/*! ./Progress */ "./src/components/Progress.tsx"));

var Progress_2 = __importDefault(__webpack_require__(/*! ./../context/Progress */ "./src/context/Progress.ts"));

var Global_1 = __importDefault(__webpack_require__(/*! ./../context/Global */ "./src/context/Global.ts"));

var Stories_1 = __importDefault(__webpack_require__(/*! ./../context/Stories */ "./src/context/Stories.ts"));

exports.default = function () {
  var _react_1$useState = react_1.useState(0),
      _react_1$useState2 = _slicedToArray(_react_1$useState, 2),
      count = _react_1$useState2[0],
      setCount = _react_1$useState2[1];

  var _react_1$useContext = react_1.useContext(Progress_2.default),
      currentId = _react_1$useContext.currentId,
      next = _react_1$useContext.next,
      videoDuration = _react_1$useContext.videoDuration,
      pause = _react_1$useContext.pause;

  var _react_1$useContext2 = react_1.useContext(Global_1.default),
      defaultInterval = _react_1$useContext2.defaultInterval,
      restartOnPause = _react_1$useContext2.restartOnPause,
      onStoryEnd = _react_1$useContext2.onStoryEnd,
      onStoryStart = _react_1$useContext2.onStoryStart,
      onAllStoriesEnd = _react_1$useContext2.onAllStoriesEnd;

  var _react_1$useContext3 = react_1.useContext(Stories_1.default),
      stories = _react_1$useContext3.stories;

  react_1.useEffect(function () {
    setCount(0);
  }, [currentId, stories]);
  react_1.useEffect(function () {
    if (pause && restartOnPause) {
      setCount(0);
    }
  }, [restartOnPause, pause]);
  react_1.useEffect(function () {
    if (!pause) {
      animationFrameId.current = requestAnimationFrame(incrementCount);
    }

    return function () {
      cancelAnimationFrame(animationFrameId.current);
      return;
    };
  }, [currentId, pause]);
  react_1.useEffect(function () {
    if (pause) {
      cancelAnimationFrame(animationFrameId.current);
    }
  }, [count, pause]);
  var animationFrameId = react_1.useRef();
  var countCopy = count;

  var incrementCount = function incrementCount() {
    if (countCopy === 0) storyStartCallback();
    setCount(function (count) {
      var interval = getCurrentInterval();
      countCopy = count + 100 / (interval / 1000 * 60);
      return count + 100 / (interval / 1000 * 60);
    });

    if (countCopy < 100) {
      animationFrameId.current = requestAnimationFrame(incrementCount);
    } else {
      storyEndCallback();

      if (currentId === stories.length - 1) {
        allStoriesEndCallback();
      }

      cancelAnimationFrame(animationFrameId.current);
      next();
    }
  };

  var storyStartCallback = function storyStartCallback() {
    onStoryStart && onStoryStart(currentId, stories[currentId]);
  };

  var storyEndCallback = function storyEndCallback() {
    onStoryEnd && onStoryEnd(currentId, stories[currentId]);
  };

  var allStoriesEndCallback = function allStoriesEndCallback() {
    onAllStoriesEnd && onAllStoriesEnd(currentId, stories);
  };

  var getCurrentInterval = function getCurrentInterval() {
    if (stories[currentId].type === 'video') return videoDuration;
    if (typeof stories[currentId].duration === 'number') return stories[currentId].duration;
    return defaultInterval;
  };

  return react_1.default.createElement("div", {
    style: styles.progressArr
  }, stories.map(function (_, i) {
    return react_1.default.createElement(Progress_1.default, {
      key: i,
      count: count,
      width: 1 / stories.length,
      active: i === currentId ? 1 : i < currentId ? 2 : 0
    });
  }));
};

var styles = {
  progressArr: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '100%',
    flexWrap: 'row',
    position: 'absolute',
    width: '98%',
    padding: 5,
    paddingTop: 7,
    alignSelf: 'center',
    zIndex: 99,
    filter: 'drop-shadow(0 1px 8px #222)'
  }
};

/***/ }),

/***/ "./src/components/ProgressWrapper.tsx":
/*!********************************************!*\
  !*** ./src/components/ProgressWrapper.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

var ProgressWrapper = function ProgressWrapper(props) {
  return react_1.default.createElement("div", {
    style: Object.assign(Object.assign({}, styles.progress), getProgressWrapperStyle(props))
  }, props.children);
};

var getProgressWrapperStyle = function getProgressWrapperStyle(_ref) {
  var width = _ref.width,
      pause = _ref.pause,
      bufferAction = _ref.bufferAction;
  return {
    width: "".concat(width * 100, "%"),
    opacity: pause && !bufferAction ? 0 : 1
  };
};

var styles = {
  progress: {
    height: 2,
    maxWidth: '100%',
    background: '#555',
    margin: 2,
    borderRadius: 2,
    transition: 'opacity 400ms ease-in-out'
  }
};
exports.default = ProgressWrapper;

/***/ }),

/***/ "./src/components/SeeMore.tsx":
/*!************************************!*\
  !*** ./src/components/SeeMore.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var Global_1 = __importDefault(__webpack_require__(/*! ./../context/Global */ "./src/context/Global.ts"));

function seeMore(props) {
  var SeeMoreContent = props.seeMoreContent;
  var CustomCollapsed = props.customCollapsed;

  var _react_1$useContext = react_1.useContext(Global_1.default),
      keyboardNavigation = _react_1$useContext.keyboardNavigation;

  react_1.useEffect(function () {
    var isClient = typeof window !== 'undefined' && window.document;

    if (isClient && typeof keyboardNavigation === 'boolean' && keyboardNavigation) {
      document.addEventListener("keydown", handleKeyDown);
      return function () {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [keyboardNavigation]);

  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      props.toggleMore(true);
    } else if (e.key === 'ArrowDown' || e.key === 'Escape') {
      e.preventDefault();
      props.toggleMore(false);
    }
  };

  return props.showContent ? react_1.default.createElement("div", {
    style: styles.seeMoreExpanded
  }, react_1.default.createElement(SeeMoreContent, {
    close: function close() {
      return props.toggleMore(false);
    }
  })) : CustomCollapsed ? react_1.default.createElement(CustomCollapsed, {
    action: props.action,
    toggleMore: props.toggleMore
  }) : react_1.default.createElement("div", {
    style: styles.seeMore,
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      props.toggleMore(true);
    }
  }, react_1.default.createElement("span", {
    style: styles.seeMoreIcon
  }, "\u2303"), react_1.default.createElement("span", {
    style: styles.seeMoreText
  }, "See more"));
}

exports.default = seeMore;
var styles = {
  seeMore: {
    height: "10vh",
    background: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2))",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    bottom: 0
  },
  seeMoreExpanded: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    zIndex: 99999
  },
  seeMoreText: {
    color: "white",
    textAlign: "center",
    letterSpacing: "0.1em",
    marginBottom: "2.2vh",
    textTransform: "capitalize",
    opacity: "1",
    fontSize: "0.8em",
    transition: "opacity 300ms ease-in-out"
  },
  seeMoreIcon: {
    color: "white",
    textAlign: "center",
    letterSpacing: "0.2em",
    marginBottom: "0.4vh",
    opacity: "1",
    filter: "drop-shadow(0 0 5px black)",
    textTransform: "capitalize",
    transition: "opacity 300ms ease-in-out"
  },
  seeMoreClose: {
    position: "absolute",
    filter: "drop-shadow(0 3px 2px #ccc)",
    right: "0.5rem",
    top: "0.5rem",
    fontSize: "1.5rem",
    opacity: "0.7",
    padding: "1rem"
  }
};

/***/ }),

/***/ "./src/components/Spinner.tsx":
/*!************************************!*\
  !*** ./src/components/Spinner.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

var puff_svg_1 = __importDefault(__webpack_require__(/*! ./../assets/puff.svg */ "./src/assets/puff.svg"));

var Spinner = function Spinner() {
  return react_1.default.createElement(puff_svg_1.default, null);
};

exports.default = Spinner;

/***/ }),

/***/ "./src/components/Story.tsx":
/*!**********************************!*\
  !*** ./src/components/Story.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var Global_1 = __importDefault(__webpack_require__(/*! ./../context/Global */ "./src/context/Global.ts"));

var Story = function Story(props) {
  var globalContext = react_1.useContext(Global_1.default);
  var width = globalContext.width,
      height = globalContext.height,
      loader = globalContext.loader,
      header = globalContext.header,
      storyStyles = globalContext.storyStyles;

  var rendererMessageHandler = function rendererMessageHandler(type, data) {
    switch (type) {
      case 'UPDATE_VIDEO_DURATION':
        props.getVideoDuration(data.duration);
        return {
          ack: 'OK'
        };
    }
  };

  react_1.useEffect(function () {
    if (props.index === props.currentId && props.playState) {
      props.action('play');
    }
  }, [props.currentId, props.playState]);

  var getStoryContent = function getStoryContent() {
    var InnerContent = props.story.content;
    var config = {
      width: width,
      height: height,
      loader: loader,
      header: header,
      storyStyles: storyStyles
    };
    return react_1.default.createElement(InnerContent, {
      action: props.action,
      isPaused: props.playState,
      story: props.story,
      config: config,
      messageHandler: rendererMessageHandler
    });
  };

  return react_1.default.createElement("div", {
    style: Object.assign(Object.assign({}, styles.story), {
      width: width,
      height: height,
      zIndex: 98 - props.index,
      animation: props.index < props.currentId ? '0.5s fadeOut forwards' : ''
    })
  }, getStoryContent());
};

var styles = {
  story: {
    display: "flex",
    position: "absolute",
    overflow: "hidden",
    alignItems: "center"
  },
  storyContent: {
    width: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto"
  }
};
exports.default = Story;

/***/ }),

/***/ "./src/context/Global.ts":
/*!*******************************!*\
  !*** ./src/context/Global.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialContext = void 0;

var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

exports.initialContext = {
  defaultInterval: 4000,
  width: 360,
  height: 640
};
var GlobalContext = react_1.default.createContext(exports.initialContext);
exports.default = GlobalContext;

/***/ }),

/***/ "./src/context/Progress.ts":
/*!*********************************!*\
  !*** ./src/context/Progress.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

exports.default = react_1.default.createContext({
  currentId: 0,
  videoDuration: 0,
  bufferAction: false,
  pause: false,
  next: function next() {}
});

/***/ }),

/***/ "./src/context/Stories.ts":
/*!********************************!*\
  !*** ./src/context/Stories.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialContext = void 0;

var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

exports.initialContext = {
  stories: []
};
var StoriesContext = react_1.default.createContext(exports.initialContext);
exports.default = StoriesContext;

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithSeeMore = exports.WithHeader = void 0;

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var Container_1 = __importDefault(__webpack_require__(/*! ./components/Container */ "./src/components/Container.tsx"));

var Global_1 = __importDefault(__webpack_require__(/*! ./context/Global */ "./src/context/Global.ts"));

var Stories_1 = __importDefault(__webpack_require__(/*! ./context/Stories */ "./src/context/Stories.ts"));

var renderers_1 = __webpack_require__(/*! ./util/renderers */ "./src/util/renderers.tsx");

var index_1 = __webpack_require__(/*! ./renderers/index */ "./src/renderers/index.ts");

var withHeader_1 = __importDefault(__webpack_require__(/*! ./renderers/wrappers/withHeader */ "./src/renderers/wrappers/withHeader.tsx"));

var withSeeMore_1 = __importDefault(__webpack_require__(/*! ./renderers/wrappers/withSeeMore */ "./src/renderers/wrappers/withSeeMore.tsx"));

var ReactInstaStories = function ReactInstaStories(props) {
  var renderers = props.renderers ? props.renderers.concat(index_1.renderers) : index_1.renderers;
  var context = {
    width: props.width,
    height: props.height,
    loader: props.loader,
    header: props.header,
    storyContainerStyles: props.storyContainerStyles,
    storyStyles: props.storyStyles,
    loop: props.loop,
    defaultInterval: props.defaultInterval,
    isPaused: props.isPaused,
    restartOnPause: props.restartOnPause,
    currentIndex: props.currentIndex,
    onStoryStart: props.onStoryStart,
    onStoryEnd: props.onStoryEnd,
    onAllStoriesEnd: props.onAllStoriesEnd,
    keyboardNavigation: props.keyboardNavigation
  };

  var _react_1$useState = react_1.useState({
    stories: generateStories(props.stories, renderers)
  }),
      _react_1$useState2 = _slicedToArray(_react_1$useState, 2),
      stories = _react_1$useState2[0],
      setStories = _react_1$useState2[1];

  react_1.useEffect(function () {
    setStories({
      stories: generateStories(props.stories, renderers)
    });
  }, [props.stories, props.renderers]);
  return react_1.default.createElement(Global_1.default.Provider, {
    value: context
  }, react_1.default.createElement(Stories_1.default.Provider, {
    value: stories
  }, react_1.default.createElement(Container_1.default, null)));
};

var generateStories = function generateStories(stories, renderers) {
  return stories.map(function (s) {
    var story = {};

    if (typeof s === 'string') {
      story.url = s;
      story.type = 'image';
    } else if (_typeof(s) === 'object') {
      story = Object.assign(story, s);
    }

    var renderer = renderers_1.getRenderer(story, renderers);
    story.originalContent = story.content;
    story.content = renderer;
    return story;
  });
};

ReactInstaStories.defaultProps = {
  width: 360,
  height: 640,
  defaultInterval: 4000
};
exports.WithHeader = withHeader_1.default;
exports.WithSeeMore = withSeeMore_1.default;
exports.default = ReactInstaStories;

/***/ }),

/***/ "./src/renderers/AutoPlayContent.tsx":
/*!*******************************************!*\
  !*** ./src/renderers/AutoPlayContent.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tester = exports.renderer = void 0;

var React = __importStar(__webpack_require__(/*! react */ "react"));

exports.renderer = function (props) {
  React.useEffect(function () {
    if (!props.isPaused) {
      props.action('play');
    }
  }, [props.story]);
  var Content = props.story.originalContent;
  return React.createElement(Content, Object.assign({}, props));
};

exports.tester = function (story) {
  return {
    condition: !!story.content,
    priority: 2
  };
};

exports.default = {
  renderer: exports.renderer,
  tester: exports.tester
};

/***/ }),

/***/ "./src/renderers/Default.tsx":
/*!***********************************!*\
  !*** ./src/renderers/Default.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tester = exports.renderer = void 0;

var React = __importStar(__webpack_require__(/*! react */ "react"));

exports.renderer = function (_ref) {
  var story = _ref.story,
      action = _ref.action;
  React.useEffect(function () {
    action('play');
  }, [story]);
  return React.createElement("div", {
    style: styles.storyContent
  }, React.createElement("p", {
    style: styles.text
  }, "This story could not be loaded."));
};

var styles = {
  storyContent: {
    width: "100%",
    maxHeight: "100%",
    margin: "auto"
  },
  text: {
    textAlign: 'center',
    color: 'white',
    width: '90%',
    margin: 'auto'
  }
};

exports.tester = function () {
  return {
    condition: true,
    priority: 1
  };
};

exports.default = {
  renderer: exports.renderer,
  tester: exports.tester
};

/***/ }),

/***/ "./src/renderers/Image.tsx":
/*!*********************************!*\
  !*** ./src/renderers/Image.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tester = exports.renderer = void 0;

var React = __importStar(__webpack_require__(/*! react */ "react"));

var Spinner_1 = __importDefault(__webpack_require__(/*! ../components/Spinner */ "./src/components/Spinner.tsx"));

var withHeader_1 = __importDefault(__webpack_require__(/*! ./wrappers/withHeader */ "./src/renderers/wrappers/withHeader.tsx"));

var withSeeMore_1 = __importDefault(__webpack_require__(/*! ./wrappers/withSeeMore */ "./src/renderers/wrappers/withSeeMore.tsx"));

exports.renderer = function (_ref) {
  var story = _ref.story,
      action = _ref.action,
      isPaused = _ref.isPaused,
      config = _ref.config;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      loaded = _React$useState2[0],
      setLoaded = _React$useState2[1];

  var width = config.width,
      height = config.height,
      loader = config.loader,
      storyStyles = config.storyStyles;
  var computedStyles = Object.assign(Object.assign({}, styles.storyContent), storyStyles || {});

  var imageLoaded = function imageLoaded() {
    setLoaded(true);
    action('play');
  };

  return React.createElement(withHeader_1.default, {
    story: story,
    globalHeader: config.header
  }, React.createElement(withSeeMore_1.default, {
    story: story,
    action: action
  }, React.createElement("div", null, React.createElement("img", {
    style: computedStyles,
    src: story.url,
    onLoad: imageLoaded
  }), !loaded && React.createElement("div", {
    style: {
      width: width,
      height: height,
      position: "absolute",
      left: 0,
      top: 0,
      background: "rgba(0, 0, 0, 0.9)",
      zIndex: 9,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#ccc"
    }
  }, loader || React.createElement(Spinner_1.default, null)))));
};

var styles = {
  story: {
    display: "flex",
    position: "relative",
    overflow: "hidden"
  },
  storyContent: {
    width: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto"
  }
};

exports.tester = function (story) {
  return {
    condition: !story.content && (!story.type || story.type === 'image'),
    priority: 2
  };
};

exports.default = {
  renderer: exports.renderer,
  tester: exports.tester
};

/***/ }),

/***/ "./src/renderers/Video.tsx":
/*!*********************************!*\
  !*** ./src/renderers/Video.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tester = exports.renderer = void 0;

var React = __importStar(__webpack_require__(/*! react */ "react"));

var Spinner_1 = __importDefault(__webpack_require__(/*! ../components/Spinner */ "./src/components/Spinner.tsx"));

var withHeader_1 = __importDefault(__webpack_require__(/*! ./wrappers/withHeader */ "./src/renderers/wrappers/withHeader.tsx"));

var withSeeMore_1 = __importDefault(__webpack_require__(/*! ./wrappers/withSeeMore */ "./src/renderers/wrappers/withSeeMore.tsx"));

exports.renderer = function (_ref) {
  var story = _ref.story,
      action = _ref.action,
      isPaused = _ref.isPaused,
      config = _ref.config,
      messageHandler = _ref.messageHandler;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      loaded = _React$useState2[0],
      setLoaded = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      muted = _React$useState4[0],
      setMuted = _React$useState4[1];

  var width = config.width,
      height = config.height,
      loader = config.loader,
      storyStyles = config.storyStyles;
  var computedStyles = Object.assign(Object.assign({}, styles.storyContent), storyStyles || {});
  var vid = React.useRef(null);
  React.useEffect(function () {
    if (vid.current) {
      if (isPaused) {
        vid.current.pause();
      } else {
        vid.current.play().catch(function () {});
      }
    }
  }, [isPaused]);

  var onWaiting = function onWaiting() {
    action("pause", true);
  };

  var onPlaying = function onPlaying() {
    action("play", true);
  };

  var videoLoaded = function videoLoaded() {
    messageHandler('UPDATE_VIDEO_DURATION', {
      duration: vid.current.duration
    });
    setLoaded(true);
    vid.current.play().then(function () {
      action('play');
    }).catch(function () {
      setMuted(true);
      vid.current.play().finally(function () {
        action('play');
      });
    });
  };

  return React.createElement(withHeader_1.default, {
    story: story,
    globalHeader: config.header
  }, React.createElement(withSeeMore_1.default, {
    story: story,
    action: action
  }, React.createElement("div", {
    style: styles.videoContainer
  }, React.createElement("video", {
    ref: vid,
    style: computedStyles,
    src: story.url,
    controls: false,
    onLoadedData: videoLoaded,
    playsInline: true,
    onWaiting: onWaiting,
    onPlaying: onPlaying,
    muted: muted,
    autoPlay: true,
    "webkit-playsinline": "true"
  }), !loaded && React.createElement("div", {
    style: {
      width: width,
      height: height,
      position: "absolute",
      left: 0,
      top: 0,
      background: "rgba(0, 0, 0, 0.9)",
      zIndex: 9,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#ccc"
    }
  }, loader || React.createElement(Spinner_1.default, null)))));
};

var styles = {
  storyContent: {
    width: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto"
  },
  videoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

exports.tester = function (story) {
  return {
    condition: story.type === 'video',
    priority: 2
  };
};

exports.default = {
  renderer: exports.renderer,
  tester: exports.tester
};

/***/ }),

/***/ "./src/renderers/index.ts":
/*!********************************!*\
  !*** ./src/renderers/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderers = void 0;

var Image_1 = __importDefault(__webpack_require__(/*! ./Image */ "./src/renderers/Image.tsx"));

var Video_1 = __importDefault(__webpack_require__(/*! ./Video */ "./src/renderers/Video.tsx"));

var Default_1 = __importDefault(__webpack_require__(/*! ./Default */ "./src/renderers/Default.tsx"));

var AutoPlayContent_1 = __importDefault(__webpack_require__(/*! ./AutoPlayContent */ "./src/renderers/AutoPlayContent.tsx"));

exports.renderers = [Image_1.default, Video_1.default, AutoPlayContent_1.default, Default_1.default];

/***/ }),

/***/ "./src/renderers/wrappers/withHeader.tsx":
/*!***********************************************!*\
  !*** ./src/renderers/wrappers/withHeader.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));

var Header_1 = __importDefault(__webpack_require__(/*! ./../../components/Header */ "./src/components/Header.tsx"));

var withHeader = function withHeader(_ref) {
  var story = _ref.story,
      globalHeader = _ref.globalHeader,
      children = _ref.children;
  return react_1.default.createElement(react_1.default.Fragment, null, children, story.header && react_1.default.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      top: 20,
      zIndex: 19
    }
  }, _typeof(story) === "object" ? globalHeader ? globalHeader(story.header) : react_1.default.createElement(Header_1.default, {
    heading: story.header.heading,
    subheading: story.header.subheading,
    profileImage: story.header.profileImage
  }) : null));
};

exports.default = withHeader;

/***/ }),

/***/ "./src/renderers/wrappers/withSeeMore.tsx":
/*!************************************************!*\
  !*** ./src/renderers/wrappers/withSeeMore.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var SeeMore_1 = __importDefault(__webpack_require__(/*! ./../../components/SeeMore */ "./src/components/SeeMore.tsx"));

var withSeeMore = function withSeeMore(_ref) {
  var story = _ref.story,
      action = _ref.action,
      customCollapsed = _ref.customCollapsed,
      children = _ref.children;

  var _react_1$useState = react_1.useState(false),
      _react_1$useState2 = _slicedToArray(_react_1$useState, 2),
      showMore = _react_1$useState2[0],
      setShowMore = _react_1$useState2[1];

  var toggleMore = function toggleMore(show) {
    action(show ? 'pause' : 'play');
    setShowMore(show);
  };

  var CollapsedComponent = SeeMore_1.default;
  return react_1.default.createElement(react_1.default.Fragment, null, children, story.seeMore && react_1.default.createElement("div", {
    style: {
      position: "absolute",
      margin: "auto",
      bottom: showMore ? 'unset' : 0,
      zIndex: 9999,
      width: "100%",
      height: showMore ? '100%' : 'auto'
    }
  }, react_1.default.createElement(CollapsedComponent, {
    action: action,
    toggleMore: toggleMore,
    showContent: showMore,
    seeMoreContent: story.seeMore,
    customCollapsed: customCollapsed || story.seeMoreCollapsed
  })));
};

exports.default = withSeeMore;

/***/ }),

/***/ "./src/util/renderers.tsx":
/*!********************************!*\
  !*** ./src/util/renderers.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRenderer = void 0;

exports.getRenderer = function (story, renderers) {
  var probable = renderers.map(function (r) {
    return Object.assign(Object.assign({}, r), {
      testerResult: r.tester(story)
    });
  }).filter(function (r) {
    return r.testerResult.condition;
  });
  probable.sort(function (a, b) {
    return b.testerResult.priority - a.testerResult.priority;
  });
  return probable[0].renderer;
};

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TdG9yaWVzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9TdG9yaWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvYXNzZXRzL3B1ZmYuc3ZnIiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29tcG9uZW50cy9Db250YWluZXIudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29tcG9uZW50cy9Qcm9ncmVzcy50c3giLCJ3ZWJwYWNrOi8vU3Rvcmllcy8uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzQXJyYXkudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29tcG9uZW50cy9Qcm9ncmVzc1dyYXBwZXIudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29tcG9uZW50cy9TZWVNb3JlLnRzeCIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL2NvbXBvbmVudHMvU3Bpbm5lci50c3giLCJ3ZWJwYWNrOi8vU3Rvcmllcy8uL3NyYy9jb21wb25lbnRzL1N0b3J5LnRzeCIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL2NvbnRleHQvR2xvYmFsLnRzIiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29udGV4dC9Qcm9ncmVzcy50cyIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL2NvbnRleHQvU3Rvcmllcy50cyIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL3JlbmRlcmVycy9BdXRvUGxheUNvbnRlbnQudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvcmVuZGVyZXJzL0RlZmF1bHQudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvcmVuZGVyZXJzL0ltYWdlLnRzeCIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL3JlbmRlcmVycy9WaWRlby50c3giLCJ3ZWJwYWNrOi8vU3Rvcmllcy8uL3NyYy9yZW5kZXJlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vU3Rvcmllcy8uL3NyYy9yZW5kZXJlcnMvd3JhcHBlcnMvd2l0aEhlYWRlci50c3giLCJ3ZWJwYWNrOi8vU3Rvcmllcy8uL3NyYy9yZW5kZXJlcnMvd3JhcHBlcnMvd2l0aFNlZU1vcmUudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvdXRpbC9yZW5kZXJlcnMudHN4Iiwid2VicGFjazovL1N0b3JpZXMvZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJhbWRcIjpcIlJlYWN0XCIsXCJyb290XCI6XCJSZWFjdFwifSJdLCJuYW1lcyI6WyJzdHlsZXMiLCJwcm9wcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNE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LE9BSlA7QUFLZixtQkFBZSxFQUFFLGVBQWUsSUFBSSxLQUFLLENBQUM7QUFMM0IsR0FBbkIsQ0FWSixDQUhELENBQVA7QUF1QkgsQ0FsQ0Q7O0FBb0NBLGtCQUFlLFdBQWYsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDYSxzQkFBYyxVQUFDLEtBQUQsRUFBZSxTQUFmLEVBQWdGO0FBQ3ZHLE1BQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxHQUFWLENBQWMsV0FBQyxFQUFHO0FBQzdCLDJDQUNPLENBRFAsR0FDUTtBQUNKLGtCQUFZLEVBQUUsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxLQUFUO0FBRFYsS0FEUjtBQUlILEdBTGMsRUFLWixNQUxZLENBS0wsV0FBQztBQUFBLFdBQUksQ0FBQyxDQUFDLFlBQUYsQ0FBZSxTQUFuQjtBQUFBLEdBTEksQ0FBZjtBQU1BLFVBQVEsQ0FBQyxJQUFULENBQWMsVUFBQyxDQUFELEVBQUksQ0FBSjtBQUFBLFdBQVUsQ0FBQyxDQUFDLFlBQUYsQ0FBZSxRQUFmLEdBQTBCLENBQUMsQ0FBQyxZQUFGLENBQWUsUUFBbkQ7QUFBQSxHQUFkO0FBQ0EsU0FBTyxRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVksUUFBbkI7QUFDSCxDQVRZLEM7Ozs7Ozs7Ozs7O0FDRmIsbUQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlN0b3JpZXNcIiwgW1wiUmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiU3Rvcmllc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTdG9yaWVzXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgKCh7XG4gIHN0eWxlcyA9IHt9LFxuICAuLi5wcm9wc1xufSkgPT4gPHN2ZyB3aWR0aD1cIjQ0XCIgaGVpZ2h0PVwiNDRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgc3Ryb2tlPVwiI2ZmZlwiIHsuLi5wcm9wc30+PGcgZmlsbD1cIm5vbmVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIiBzdHJva2VXaWR0aD1cIjJcIj48Y2lyY2xlIGN4PVwiMjJcIiBjeT1cIjIyXCIgcj1cIjFcIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiclwiIGJlZ2luPVwiMHNcIiBkdXI9XCIxLjhzXCIgdmFsdWVzPVwiMTsgMjBcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDsgMVwiIGtleVNwbGluZXM9XCIwLjE2NSwgMC44NCwgMC40NCwgMVwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIC8+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cInN0cm9rZS1vcGFjaXR5XCIgYmVnaW49XCIwc1wiIGR1cj1cIjEuOHNcIiB2YWx1ZXM9XCIxOyAwXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7IDFcIiBrZXlTcGxpbmVzPVwiMC4zLCAwLjYxLCAwLjM1NSwgMVwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIC8+PC9jaXJjbGU+PGNpcmNsZSBjeD1cIjIyXCIgY3k9XCIyMlwiIHI9XCIxXCI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cInJcIiBiZWdpbj1cIi0wLjlzXCIgZHVyPVwiMS44c1wiIHZhbHVlcz1cIjE7IDIwXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7IDFcIiBrZXlTcGxpbmVzPVwiMC4xNjUsIDAuODQsIDAuNDQsIDFcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiAvPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJzdHJva2Utb3BhY2l0eVwiIGJlZ2luPVwiLTAuOXNcIiBkdXI9XCIxLjhzXCIgdmFsdWVzPVwiMTsgMFwiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOyAxXCIga2V5U3BsaW5lcz1cIjAuMywgMC42MSwgMC4zNTUsIDFcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiAvPjwvY2lyY2xlPjwvZz48L3N2Zz4pOyIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBHbG9iYWxDb250ZXh0IGZyb20gJy4vLi4vY29udGV4dC9HbG9iYWwnXG5pbXBvcnQgU3Rvcmllc0NvbnRleHQgZnJvbSAnLi8uLi9jb250ZXh0L1N0b3JpZXMnXG5pbXBvcnQgUHJvZ3Jlc3NDb250ZXh0IGZyb20gJy4vLi4vY29udGV4dC9Qcm9ncmVzcydcbmltcG9ydCBTdG9yeSBmcm9tICcuL1N0b3J5J1xuaW1wb3J0IFByb2dyZXNzQXJyYXkgZnJvbSAnLi9Qcm9ncmVzc0FycmF5J1xuaW1wb3J0IHsgR2xvYmFsQ3R4LCBTdG9yaWVzQ29udGV4dCBhcyBTdG9yaWVzQ29udGV4dEludGVyZmFjZSB9IGZyb20gJy4vLi4vaW50ZXJmYWNlcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IFtjdXJyZW50SWQsIHNldEN1cnJlbnRJZF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXG4gICAgY29uc3QgW3BhdXNlLCBzZXRQYXVzZV0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKVxuICAgIGNvbnN0IFtidWZmZXJBY3Rpb24sIHNldEJ1ZmZlckFjdGlvbl0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKVxuICAgIGNvbnN0IFt2aWRlb0R1cmF0aW9uLCBzZXRWaWRlb0R1cmF0aW9uXSA9IHVzZVN0YXRlPG51bWJlcj4oMClcblxuICAgIGxldCBtb3VzZWRvd25JZCA9IHVzZVJlZjxhbnk+KCk7XG4gICAgbGV0IGlzTW91bnRlZCA9IHVzZVJlZjxib29sZWFuPih0cnVlKTtcbiAgICBsZXQgb3ZlcmxheSA9IHVzZVJlZjxhbnk+KCk7XG5cbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGxvb3AsIGN1cnJlbnRJbmRleCwgaXNQYXVzZWQsIGtleWJvYXJkTmF2aWdhdGlvbiwgc3RvcnlDb250YWluZXJTdHlsZXMgPSB7fSB9ID0gdXNlQ29udGV4dDxHbG9iYWxDdHg+KEdsb2JhbENvbnRleHQpO1xuICAgIGNvbnN0IHsgc3RvcmllcyB9ID0gdXNlQ29udGV4dDxTdG9yaWVzQ29udGV4dEludGVyZmFjZT4oU3Rvcmllc0NvbnRleHQpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50SW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudEluZGV4ID49IDAgJiYgY3VycmVudEluZGV4IDwgc3Rvcmllcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50SWRXcmFwcGVyKCgpID0+IGN1cnJlbnRJbmRleClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW5kZXggb3V0IG9mIGJvdW5kcy4gQ3VycmVudCBpbmRleCB3YXMgc2V0IHRvIHZhbHVlIG1vcmUgdGhhbiB0aGUgbGVuZ3RoIG9mIHN0b3JpZXMgYXJyYXkuJywgY3VycmVudEluZGV4KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW2N1cnJlbnRJbmRleF0pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGlzUGF1c2VkID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHNldFBhdXNlKGlzUGF1c2VkKVxuICAgICAgICB9XG4gICAgfSwgW2lzUGF1c2VkXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2xpZW50ID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCk7XG4gICAgICAgIGlmIChpc0NsaWVudCAmJiAodHlwZW9mIGtleWJvYXJkTmF2aWdhdGlvbiA9PT0gJ2Jvb2xlYW4nICYmIGtleWJvYXJkTmF2aWdhdGlvbikpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtrZXlib2FyZE5hdmlnYXRpb25dKTtcblxuICAgIC8vIENsZWFudXAgbW91bnRlZCBzdGF0ZSAtIGZvciBpc3N1ZSAjMTMwIChodHRwczovL2dpdGh1Yi5jb20vbW9oaXRrMDUvcmVhY3QtaW5zdGEtc3Rvcmllcy9pc3N1ZXMvMTMwKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBpc01vdW50ZWQuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgICAgICAgIHByZXZpb3VzKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICAgICAgICBuZXh0KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZVN0YXRlID0gKGFjdGlvbjogc3RyaW5nLCBidWZmZXJBY3Rpb24/OiBib29sZWFuKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjYWxsaW5nIGFjdGlvbicsIGFjdGlvbilcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ25leHQnKSByZXR1cm4gbmV4dCgpXG4gICAgICAgIGlmIChhY3Rpb24gPT09ICdwcmV2aW91cycpIHJldHVybiBwcmV2aW91cygpXG4gICAgICAgIHNldFBhdXNlKGFjdGlvbiA9PT0gJ3BhdXNlJylcbiAgICAgICAgc2V0QnVmZmVyQWN0aW9uKCEhYnVmZmVyQWN0aW9uKVxuICAgIH1cblxuICAgIGNvbnN0IHNldEN1cnJlbnRJZFdyYXBwZXIgPSAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgc2V0Q3VycmVudElkKGNhbGxiYWNrKTtcbiAgICAgICAgdG9nZ2xlU3RhdGUoJ3BhdXNlJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJldmlvdXMgPSAoKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRJZFdyYXBwZXIocHJldiA9PiBwcmV2ID4gMCA/IHByZXYgLSAxIDogcHJldilcbiAgICB9XG5cbiAgICBjb25zdCBuZXh0ID0gKCkgPT4ge1xuICAgICAgICBpZiAoaXNNb3VudGVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGlmIChsb29wKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlTmV4dFN0b3J5SWRGb3JMb29wKClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlTmV4dFN0b3J5SWQoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHVwZGF0ZU5leHRTdG9yeUlkRm9yTG9vcCA9ICgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudElkV3JhcHBlcihwcmV2ID0+IChwcmV2ICsgMSkgJSBzdG9yaWVzLmxlbmd0aClcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVOZXh0U3RvcnlJZCA9ICgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudElkV3JhcHBlcihwcmV2ID0+IHtcbiAgICAgICAgICAgIGlmIChwcmV2IDwgc3Rvcmllcy5sZW5ndGggLSAxKSByZXR1cm4gcHJldiArIDFcbiAgICAgICAgICAgIHJldHVybiBwcmV2XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZGVib3VuY2VQYXVzZSA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50IHwgUmVhY3QuVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgbW91c2Vkb3duSWQuY3VycmVudCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdG9nZ2xlU3RhdGUoJ3BhdXNlJylcbiAgICAgICAgfSwgMjAwKVxuICAgIH1cblxuICAgIGNvbnN0IG1vdXNlVXAgPSAodHlwZTogc3RyaW5nKSA9PiAoZTogUmVhY3QuTW91c2VFdmVudCB8IFJlYWN0LlRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIG1vdXNlZG93bklkLmN1cnJlbnQgJiYgY2xlYXJUaW1lb3V0KG1vdXNlZG93bklkLmN1cnJlbnQpXG4gICAgICAgIGlmIChwYXVzZSkge1xuICAgICAgICAgICAgdG9nZ2xlU3RhdGUoJ3BsYXknKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHlwZSA9PT0gJ25leHQnID8gbmV4dCgpIDogcHJldmlvdXMoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VmlkZW9EdXJhdGlvbiA9IChkdXJhdGlvbjogbnVtYmVyKSA9PiB7XG4gICAgICAgIHNldFZpZGVvRHVyYXRpb24oZHVyYXRpb24gKiAxMDAwKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc3RvcnlDb250YWluZXJTdHlsZXMsIC4uLnN0eWxlcy5jb250YWluZXIsIC4uLnsgd2lkdGgsIGhlaWdodCB9IH19PlxuICAgICAgICAgICAgPFByb2dyZXNzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xuICAgICAgICAgICAgICAgIGJ1ZmZlckFjdGlvbjogYnVmZmVyQWN0aW9uLFxuICAgICAgICAgICAgICAgIHZpZGVvRHVyYXRpb246IHZpZGVvRHVyYXRpb24sXG4gICAgICAgICAgICAgICAgY3VycmVudElkLFxuICAgICAgICAgICAgICAgIHBhdXNlLFxuICAgICAgICAgICAgICAgIG5leHRcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxQcm9ncmVzc0FycmF5IC8+XG4gICAgICAgICAgICA8L1Byb2dyZXNzQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgICAgIHtzdG9yaWVzLm1hcChcbiAgICAgICAgICAgICAgICAoc3RvcnksIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxTdG9yeVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXt0b2dnbGVTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlckFjdGlvbj17YnVmZmVyQWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheVN0YXRlPXtwYXVzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJZD17Y3VycmVudElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3Rvcnk9e3N0b3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0VmlkZW9EdXJhdGlvbj17Z2V0VmlkZW9EdXJhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBjb250YWluZXI6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgYmFja2dyb3VuZDogJyMxMTEnLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgIH0sXG4gICAgb3ZlcmxheToge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgaGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgICAgIHdpZHRoOiAnaW5oZXJpdCcsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEhlYWRlclByb3BzIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzJ1xuXG5jb25zdCBIZWFkZXIgPSAoeyBwcm9maWxlSW1hZ2UsIGhlYWRpbmcsIHN1YmhlYWRpbmcgfTogSGVhZGVyUHJvcHMpID0+XG4gICAgPGRpdiBzdHlsZT17c3R5bGVzLm1haW59PlxuICAgICAgICB7cHJvZmlsZUltYWdlICYmIDxpbWcgc3R5bGU9e3N0eWxlcy5pbWd9IHNyYz17cHJvZmlsZUltYWdlfSAvPn1cbiAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuaGVhZGluZ30+e2hlYWRpbmd9PC9wPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5zdWJoZWFkaW5nfT57c3ViaGVhZGluZ308L3A+XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIG1haW46IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICAgIH0sXG4gICAgaW1nOiB7XG4gICAgICAgIHdpZHRoOiA0MCxcbiAgICAgICAgaGVpZ2h0OiA0MCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA0MCxcbiAgICAgICAgbWFyZ2luUmlnaHQ6IDEwLFxuICAgICAgICBmaWx0ZXI6ICdkcm9wLXNoYWRvdygwIDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpKScsXG4gICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCknXG4gICAgfSxcbiAgICB0ZXh0OiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGZpbHRlcjogJ2Ryb3Atc2hhZG93KDAgMHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuOSkpJ1xuICAgIH0sXG4gICAgaGVhZGluZzoge1xuICAgICAgICBmb250U2l6ZTogJzFyZW0nLFxuICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC45KScsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgbWFyZ2luQm90dG9tOiAyXG4gICAgfSxcbiAgICBzdWJoZWFkaW5nOiB7XG4gICAgICAgIGZvbnRTaXplOiAnMC42cmVtJyxcbiAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCknLFxuICAgICAgICBtYXJnaW46IDBcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQcm9ncmVzc1Byb3BzLCBQcm9ncmVzc0NvbnRleHQgfSBmcm9tICcuLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgUHJvZ3Jlc3NXcmFwcGVyIGZyb20gJy4vUHJvZ3Jlc3NXcmFwcGVyJ1xuaW1wb3J0IFByb2dyZXNzQ3R4IGZyb20gJy4vLi4vY29udGV4dC9Qcm9ncmVzcydcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzOiBQcm9ncmVzc1Byb3BzKSA9PiB7XG4gICAgY29uc3QgeyBidWZmZXJBY3Rpb24sIHBhdXNlIH0gPSB1c2VDb250ZXh0PFByb2dyZXNzQ29udGV4dD4oUHJvZ3Jlc3NDdHgpXG5cbiAgICBjb25zdCBnZXRQcm9ncmVzc1N0eWxlID0gKHsgYWN0aXZlIH0pID0+IHtcbiAgICAgICAgc3dpdGNoIChhY3RpdmUpIHtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXR1cm4geyB3aWR0aDogJzEwMCUnIH1cbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXR1cm4geyB0cmFuc2Zvcm06IGBzY2FsZVgoJHtwcm9wcy5jb3VudCAvIDEwMH0pYCB9XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgd2lkdGg6IDAgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4geyB3aWR0aDogMCB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IHdpZHRoLCBhY3RpdmUgfSA9IHByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFByb2dyZXNzV3JhcHBlciB3aWR0aD17d2lkdGh9IHBhdXNlPXtwYXVzZX0gYnVmZmVyQWN0aW9uPXtidWZmZXJBY3Rpb259PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLmdldFByb2dyZXNzU3R5bGUoeyBhY3RpdmUgfSksIC4uLnN0eWxlcy5pbm5lciB9fSAvPlxuICAgICAgICA8L1Byb2dyZXNzV3JhcHBlcj5cbiAgICApXG59XG5cbmNvbnN0IHN0eWxlczogYW55ID0ge1xuICAgIGlubmVyOiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIGJvcmRlclJhZGl1czogMixcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnY2VudGVyIGxlZnQnLFxuXG4gICAgICAgIFdlYmtpdEJhY2tmYWNlVmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICAgIE1vekJhY2tmYWNlVmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICAgIG1zQmFja2ZhY2VWaXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgICAgYmFja2ZhY2VWaXNpYmlsaXR5OiAnaGlkZGVuJyxcblxuICAgICAgICBXZWJraXRQZXJzcGVjdGl2ZTogMTAwMCxcbiAgICAgICAgTW96UGVyc3BlY3RpdmU6IDEwMDAsXG4gICAgICAgIG1zUGVyc3BlY3RpdmU6IDEwMDAsXG4gICAgICAgIHBlcnNwZWN0aXZlOiAxMDAwXG4gICAgfVxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9ncmVzcyBmcm9tICcuL1Byb2dyZXNzJ1xuaW1wb3J0IHsgUHJvZ3Jlc3NDb250ZXh0LCBHbG9iYWxDdHgsIFN0b3JpZXNDb250ZXh0IGFzIFN0b3JpZXNDb250ZXh0SW50ZXJmYWNlIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IFByb2dyZXNzQ3R4IGZyb20gJy4vLi4vY29udGV4dC9Qcm9ncmVzcydcbmltcG9ydCBHbG9iYWxDb250ZXh0IGZyb20gJy4vLi4vY29udGV4dC9HbG9iYWwnXG5pbXBvcnQgU3Rvcmllc0NvbnRleHQgZnJvbSAnLi8uLi9jb250ZXh0L1N0b3JpZXMnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlPG51bWJlcj4oMClcbiAgICBjb25zdCB7IGN1cnJlbnRJZCwgbmV4dCwgdmlkZW9EdXJhdGlvbiwgcGF1c2UgfSA9IHVzZUNvbnRleHQ8UHJvZ3Jlc3NDb250ZXh0PihQcm9ncmVzc0N0eClcbiAgICBjb25zdCB7IGRlZmF1bHRJbnRlcnZhbCwgcmVzdGFydE9uUGF1c2UsIG9uU3RvcnlFbmQsIG9uU3RvcnlTdGFydCwgb25BbGxTdG9yaWVzRW5kIH0gPSB1c2VDb250ZXh0PEdsb2JhbEN0eD4oR2xvYmFsQ29udGV4dCk7XG4gICAgY29uc3QgeyBzdG9yaWVzIH0gPSB1c2VDb250ZXh0PFN0b3JpZXNDb250ZXh0SW50ZXJmYWNlPihTdG9yaWVzQ29udGV4dCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRDb3VudCgwKVxuICAgIH0sIFtjdXJyZW50SWQsIHN0b3JpZXNdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgIGlmIChwYXVzZSAmJiByZXN0YXJ0T25QYXVzZSkge1xuICAgICAgICAgICAgIHNldENvdW50KDApXG4gICAgICAgICB9XG4gICAgIH0sIFtyZXN0YXJ0T25QYXVzZSwgcGF1c2VdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFwYXVzZSkge1xuICAgICAgICAgICAgYW5pbWF0aW9uRnJhbWVJZC5jdXJyZW50ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGluY3JlbWVudENvdW50KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZUlkLmN1cnJlbnQpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgIH0sIFtjdXJyZW50SWQsIHBhdXNlXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChwYXVzZSkge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWVJZC5jdXJyZW50KVxuICAgICAgICB9XG4gICAgfSwgW2NvdW50LCBwYXVzZV0pXG5cbiAgICBsZXQgYW5pbWF0aW9uRnJhbWVJZCA9IHVzZVJlZjxudW1iZXI+KClcblxuICAgIGxldCBjb3VudENvcHkgPSBjb3VudDtcbiAgICBjb25zdCBpbmNyZW1lbnRDb3VudCA9ICgpID0+IHtcbiAgICAgICAgaWYgKGNvdW50Q29weSA9PT0gMCkgc3RvcnlTdGFydENhbGxiYWNrKClcbiAgICAgICAgc2V0Q291bnQoKGNvdW50OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gZ2V0Q3VycmVudEludGVydmFsKClcbiAgICAgICAgICAgIGNvdW50Q29weSA9IGNvdW50ICsgKDEwMCAvICgoaW50ZXJ2YWwgLyAxMDAwKSAqIDYwKSlcbiAgICAgICAgICAgIHJldHVybiBjb3VudCArICgxMDAgLyAoKGludGVydmFsIC8gMTAwMCkgKiA2MCkpXG4gICAgICAgIH0pXG4gICAgICAgIGlmIChjb3VudENvcHkgPCAxMDApIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbkZyYW1lSWQuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShpbmNyZW1lbnRDb3VudClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0b3J5RW5kQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50SWQgPT09IHN0b3JpZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGFsbFN0b3JpZXNFbmRDYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWVJZC5jdXJyZW50KTtcbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN0b3J5U3RhcnRDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgb25TdG9yeVN0YXJ0ICYmIG9uU3RvcnlTdGFydChjdXJyZW50SWQsIHN0b3JpZXNbY3VycmVudElkXSlcbiAgICB9XG5cbiAgICBjb25zdCBzdG9yeUVuZENhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICBvblN0b3J5RW5kICYmIG9uU3RvcnlFbmQoY3VycmVudElkLCBzdG9yaWVzW2N1cnJlbnRJZF0pXG4gICAgfVxuXG4gICAgY29uc3QgYWxsU3Rvcmllc0VuZENhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICBvbkFsbFN0b3JpZXNFbmQgJiYgb25BbGxTdG9yaWVzRW5kKGN1cnJlbnRJZCwgc3RvcmllcylcbiAgICB9XG5cbiAgICBjb25zdCBnZXRDdXJyZW50SW50ZXJ2YWwgPSAoKSA9PiB7XG4gICAgICAgIGlmIChzdG9yaWVzW2N1cnJlbnRJZF0udHlwZSA9PT0gJ3ZpZGVvJykgcmV0dXJuIHZpZGVvRHVyYXRpb25cbiAgICAgICAgaWYgKHR5cGVvZiBzdG9yaWVzW2N1cnJlbnRJZF0uZHVyYXRpb24gPT09ICdudW1iZXInKSByZXR1cm4gc3Rvcmllc1tjdXJyZW50SWRdLmR1cmF0aW9uXG4gICAgICAgIHJldHVybiBkZWZhdWx0SW50ZXJ2YWxcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMucHJvZ3Jlc3NBcnJ9PlxuICAgICAgICAgICAge3N0b3JpZXMubWFwKChfLCBpKSA9PlxuICAgICAgICAgICAgICAgIDxQcm9ncmVzc1xuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgIGNvdW50PXtjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEgLyBzdG9yaWVzLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtpID09PSBjdXJyZW50SWQgPyAxIDogKGkgPCBjdXJyZW50SWQgPyAyIDogMCl9XG4gICAgICAgICAgICAgICAgLz4pfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBwcm9ncmVzc0Fycjoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgZmxleFdyYXA6ICdyb3cnLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgd2lkdGg6ICc5OCUnLFxuICAgICAgICBwYWRkaW5nOiA1LFxuICAgICAgICBwYWRkaW5nVG9wOiA3LFxuICAgICAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICAgICAgICB6SW5kZXg6IDk5LFxuICAgICAgICBmaWx0ZXI6ICdkcm9wLXNoYWRvdygwIDFweCA4cHggIzIyMiknXG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUHJvZ3Jlc3NXcmFwcGVyUHJvcHMgfSBmcm9tICcuLy4uL2ludGVyZmFjZXMnXG5cbmNvbnN0IFByb2dyZXNzV3JhcHBlciA9IChwcm9wczogUHJvZ3Jlc3NXcmFwcGVyUHJvcHMpID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7IC4uLnN0eWxlcy5wcm9ncmVzcywgLi4uZ2V0UHJvZ3Jlc3NXcmFwcGVyU3R5bGUocHJvcHMpIH19PlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9kaXY+XG4pXG5cbmNvbnN0IGdldFByb2dyZXNzV3JhcHBlclN0eWxlID0gKHsgd2lkdGgsIHBhdXNlLCBidWZmZXJBY3Rpb24gfSkgPT4gKHtcbiAgICB3aWR0aDogYCR7d2lkdGggKiAxMDB9JWAsXG4gICAgb3BhY2l0eTogcGF1c2UgJiYgIWJ1ZmZlckFjdGlvbiA/IDAgOiAxXG59KVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgcHJvZ3Jlc3M6IHtcbiAgICAgICAgaGVpZ2h0OiAyLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnIzU1NScsXG4gICAgICAgIG1hcmdpbjogMixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxuICAgICAgICB0cmFuc2l0aW9uOiAnb3BhY2l0eSA0MDBtcyBlYXNlLWluLW91dCdcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzV3JhcHBlciIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBHbG9iYWxDb250ZXh0IGZyb20gJy4vLi4vY29udGV4dC9HbG9iYWwnXG5pbXBvcnQgeyBHbG9iYWxDdHggfSBmcm9tICcuLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgeyBTZWVNb3JlUHJvcHMgfSBmcm9tICcuLy4uL2ludGVyZmFjZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlZU1vcmUocHJvcHM6IFNlZU1vcmVQcm9wcykge1xuICAgIGNvbnN0IFNlZU1vcmVDb250ZW50ID0gcHJvcHMuc2VlTW9yZUNvbnRlbnQ7XG4gICAgY29uc3QgQ3VzdG9tQ29sbGFwc2VkID0gcHJvcHMuY3VzdG9tQ29sbGFwc2VkO1xuXG4gICAgY29uc3QgeyBrZXlib2FyZE5hdmlnYXRpb24gfSA9IHVzZUNvbnRleHQ8R2xvYmFsQ3R4PihHbG9iYWxDb250ZXh0KTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2xpZW50ID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCk7XG4gICAgICAgIGlmIChpc0NsaWVudCAmJiAodHlwZW9mIGtleWJvYXJkTmF2aWdhdGlvbiA9PT0gJ2Jvb2xlYW4nICYmIGtleWJvYXJkTmF2aWdhdGlvbikpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtrZXlib2FyZE5hdmlnYXRpb25dKVxuXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIHByb3BzLnRvZ2dsZU1vcmUodHJ1ZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicgfHwgZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIHByb3BzLnRvZ2dsZU1vcmUoZmFsc2UpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICBwcm9wcy5zaG93Q29udGVudFxuICAgICAgICAgICAgPyA8ZGl2IHN0eWxlPXtzdHlsZXMuc2VlTW9yZUV4cGFuZGVkfT5cbiAgICAgICAgICAgICAgICA8U2VlTW9yZUNvbnRlbnQgY2xvc2U9eygpID0+IHByb3BzLnRvZ2dsZU1vcmUoZmFsc2UpfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6XG4gICAgICAgICAgICAoQ3VzdG9tQ29sbGFwc2VkID8gPEN1c3RvbUNvbGxhcHNlZCBhY3Rpb249e3Byb3BzLmFjdGlvbn0gdG9nZ2xlTW9yZT17cHJvcHMudG9nZ2xlTW9yZX0gLz4gOiA8ZGl2IHN0eWxlPXtzdHlsZXMuc2VlTW9yZX0gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBwcm9wcy50b2dnbGVNb3JlKHRydWUpXG4gICAgICAgICAgICB9fSA+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy5zZWVNb3JlSWNvbn0+4oyDPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMuc2VlTW9yZVRleHR9PlNlZSBtb3JlPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgKVxufVxuXG5jb25zdCBzdHlsZXM6IGFueSA9IHtcbiAgICBzZWVNb3JlOiB7XG4gICAgICAgIGhlaWdodDogXCIxMHZoXCIsXG4gICAgICAgIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC4yKSlcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIixcbiAgICAgICAgYm90dG9tOiAwXG4gICAgfSxcbiAgICBzZWVNb3JlRXhwYW5kZWQ6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICB6SW5kZXg6IDk5OTk5XG4gICAgfSxcbiAgICBzZWVNb3JlVGV4dDoge1xuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IFwiMC4xZW1cIixcbiAgICAgICAgbWFyZ2luQm90dG9tOiBcIjIuMnZoXCIsXG4gICAgICAgIHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiLFxuICAgICAgICBvcGFjaXR5OiBcIjFcIixcbiAgICAgICAgZm9udFNpemU6IFwiMC44ZW1cIixcbiAgICAgICAgdHJhbnNpdGlvbjogXCJvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0XCJcbiAgICB9LFxuICAgIHNlZU1vcmVJY29uOiB7XG4gICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgbGV0dGVyU3BhY2luZzogXCIwLjJlbVwiLFxuICAgICAgICBtYXJnaW5Cb3R0b206IFwiMC40dmhcIixcbiAgICAgICAgb3BhY2l0eTogXCIxXCIsXG4gICAgICAgIGZpbHRlcjogXCJkcm9wLXNoYWRvdygwIDAgNXB4IGJsYWNrKVwiLFxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIixcbiAgICAgICAgdHJhbnNpdGlvbjogXCJvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0XCJcbiAgICB9LFxuICAgIHNlZU1vcmVDbG9zZToge1xuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICBmaWx0ZXI6IFwiZHJvcC1zaGFkb3coMCAzcHggMnB4ICNjY2MpXCIsXG4gICAgICAgIHJpZ2h0OiBcIjAuNXJlbVwiLFxuICAgICAgICB0b3A6IFwiMC41cmVtXCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxuICAgICAgICBvcGFjaXR5OiBcIjAuN1wiLFxuICAgICAgICBwYWRkaW5nOiBcIjFyZW1cIlxuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNwaW5uZXJTVkcgZnJvbSAnLi8uLi9hc3NldHMvcHVmZi5zdmcnO1xuXG5jb25zdCBTcGlubmVyID0gKCkgPT4ge1xuICAgIHJldHVybiA8U3Bpbm5lclNWRyAvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBTcGlubmVyOyIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN0b3J5UHJvcHMsIEdsb2JhbEN0eCB9IGZyb20gXCIuLy4uL2ludGVyZmFjZXNcIjtcbmltcG9ydCBHbG9iYWxDb250ZXh0IGZyb20gXCIuLy4uL2NvbnRleHQvR2xvYmFsXCI7XG5cbmNvbnN0IFN0b3J5ID0gKHByb3BzOiBTdG9yeVByb3BzKSA9PiB7XG5cdGNvbnN0IGdsb2JhbENvbnRleHQgPSB1c2VDb250ZXh0PEdsb2JhbEN0eD4oXG5cdFx0R2xvYmFsQ29udGV4dFxuXHQpO1xuXG5cdGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgbG9hZGVyLCBoZWFkZXIsIHN0b3J5U3R5bGVzIH0gPSBnbG9iYWxDb250ZXh0O1xuXG5cdGNvbnN0IHJlbmRlcmVyTWVzc2FnZUhhbmRsZXIgPSAodHlwZTogc3RyaW5nLCBkYXRhOiBhbnkpID0+IHtcblx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdGNhc2UgJ1VQREFURV9WSURFT19EVVJBVElPTic6XG5cdFx0XHRcdHByb3BzLmdldFZpZGVvRHVyYXRpb24oZGF0YS5kdXJhdGlvbik7XG5cdFx0XHRcdHJldHVybiB7IGFjazogJ09LJyBhcyAnT0snIH1cblx0XHR9XG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmIChwcm9wcy5pbmRleCA9PT0gcHJvcHMuY3VycmVudElkICYmIHByb3BzLnBsYXlTdGF0ZSkge1xuXHRcdFx0cHJvcHMuYWN0aW9uKCdwbGF5Jylcblx0XHR9XG5cdH0sIFtwcm9wcy5jdXJyZW50SWQsIHByb3BzLnBsYXlTdGF0ZV0pXG5cblx0Y29uc3QgZ2V0U3RvcnlDb250ZW50ID0gKCkgPT4ge1xuXHRcdGxldCBJbm5lckNvbnRlbnQgPSBwcm9wcy5zdG9yeS5jb250ZW50O1xuXHRcdGxldCBjb25maWcgPSB7IHdpZHRoLCBoZWlnaHQsIGxvYWRlciwgaGVhZGVyLCBzdG9yeVN0eWxlcyB9O1xuXHRcdHJldHVybiA8SW5uZXJDb250ZW50XG5cdFx0XHRhY3Rpb249e3Byb3BzLmFjdGlvbn1cblx0XHRcdGlzUGF1c2VkPXtwcm9wcy5wbGF5U3RhdGV9XG5cdFx0XHRzdG9yeT17cHJvcHMuc3Rvcnl9XG5cdFx0XHRjb25maWc9e2NvbmZpZ31cblx0XHRcdG1lc3NhZ2VIYW5kbGVyPXtyZW5kZXJlck1lc3NhZ2VIYW5kbGVyfVxuXHRcdC8+XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRzdHlsZT17e1xuXHRcdFx0XHQuLi5zdHlsZXMuc3RvcnksXG5cdFx0XHRcdHdpZHRoOiB3aWR0aCxcblx0XHRcdFx0aGVpZ2h0OiBoZWlnaHQsXG5cdFx0XHRcdHpJbmRleDogOTggLSBwcm9wcy5pbmRleCxcblx0XHRcdFx0YW5pbWF0aW9uOiBwcm9wcy5pbmRleCA8IHByb3BzLmN1cnJlbnRJZCA/ICcwLjVzIGZhZGVPdXQgZm9yd2FyZHMnIDogJydcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0e2dldFN0b3J5Q29udGVudCgpfVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuY29uc3Qgc3R5bGVzID0ge1xuXHRzdG9yeToge1xuXHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG5cdFx0b3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG5cdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIlxuXHR9LFxuXHRzdG9yeUNvbnRlbnQ6IHtcblx0XHR3aWR0aDogXCJhdXRvXCIsXG5cdFx0bWF4V2lkdGg6IFwiMTAwJVwiLFxuXHRcdG1heEhlaWdodDogXCIxMDAlXCIsXG5cdFx0bWFyZ2luOiBcImF1dG9cIlxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yeTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHbG9iYWxDdHggfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxDb250ZXh0ID0ge1xuXHRkZWZhdWx0SW50ZXJ2YWw6IDQwMDAsXG5cdHdpZHRoOiAzNjAsXG5cdGhlaWdodDogNjQwLFxufTtcblxuY29uc3QgR2xvYmFsQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8R2xvYmFsQ3R4Pihpbml0aWFsQ29udGV4dCk7XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbENvbnRleHQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQcm9ncmVzc0NvbnRleHQgfSBmcm9tICcuLy4uL2ludGVyZmFjZXMnXG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNvbnRleHQ8UHJvZ3Jlc3NDb250ZXh0Pih7XG4gICAgY3VycmVudElkOiAwLFxuICAgIHZpZGVvRHVyYXRpb246IDAsXG4gICAgYnVmZmVyQWN0aW9uOiBmYWxzZSxcbiAgICBwYXVzZTogZmFsc2UsXG4gICAgbmV4dDogKCkgPT4geyB9XG59KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuXHRTdG9yaWVzQ29udGV4dCBhcyBTdG9yaWVzQ29udGV4dEludGVyZmFjZSxcblx0U3RvcnksXG59IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbENvbnRleHQ6IHsgc3RvcmllczogU3RvcnlbXSB9ID0ge1xuXHRzdG9yaWVzOiBbXSxcbn07XG5cbmNvbnN0IFN0b3JpZXNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxTdG9yaWVzQ29udGV4dEludGVyZmFjZT4oXG5cdGluaXRpYWxDb250ZXh0XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yaWVzQ29udGV4dDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSZWFjdEluc3RhU3Rvcmllc1Byb3BzLCBHbG9iYWxDdHgsIFN0b3J5LCBUZXN0ZXIsIFJlbmRlcmVyIH0gZnJvbSAnLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL2NvbXBvbmVudHMvQ29udGFpbmVyJ1xuaW1wb3J0IEdsb2JhbENvbnRleHQgZnJvbSAnLi9jb250ZXh0L0dsb2JhbCdcbmltcG9ydCBTdG9yaWVzQ29udGV4dCBmcm9tICcuL2NvbnRleHQvU3Rvcmllcyc7XG5pbXBvcnQgeyBnZXRSZW5kZXJlciB9IGZyb20gJy4vdXRpbC9yZW5kZXJlcnMnXG5pbXBvcnQgeyByZW5kZXJlcnMgYXMgZGVmYXVsdFJlbmRlcmVycyB9IGZyb20gJy4vcmVuZGVyZXJzL2luZGV4JztcbmltcG9ydCB3aXRoSGVhZGVyIGZyb20gJy4vcmVuZGVyZXJzL3dyYXBwZXJzL3dpdGhIZWFkZXInXG5pbXBvcnQgd2l0aFNlZU1vcmUgZnJvbSAnLi9yZW5kZXJlcnMvd3JhcHBlcnMvd2l0aFNlZU1vcmUnXG5cbmNvbnN0IFJlYWN0SW5zdGFTdG9yaWVzID0gZnVuY3Rpb24gKHByb3BzOiBSZWFjdEluc3RhU3Rvcmllc1Byb3BzKSB7XG4gICAgbGV0IHJlbmRlcmVycyA9IHByb3BzLnJlbmRlcmVycyA/IHByb3BzLnJlbmRlcmVycy5jb25jYXQoZGVmYXVsdFJlbmRlcmVycykgOiBkZWZhdWx0UmVuZGVyZXJzO1xuICAgIGxldCBjb250ZXh0OiBHbG9iYWxDdHggPSB7XG4gICAgICAgIHdpZHRoOiBwcm9wcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwcm9wcy5oZWlnaHQsXG4gICAgICAgIGxvYWRlcjogcHJvcHMubG9hZGVyLFxuICAgICAgICBoZWFkZXI6IHByb3BzLmhlYWRlcixcbiAgICAgICAgc3RvcnlDb250YWluZXJTdHlsZXM6IHByb3BzLnN0b3J5Q29udGFpbmVyU3R5bGVzLFxuICAgICAgICBzdG9yeVN0eWxlczogcHJvcHMuc3RvcnlTdHlsZXMsXG4gICAgICAgIGxvb3A6IHByb3BzLmxvb3AsXG4gICAgICAgIGRlZmF1bHRJbnRlcnZhbDogcHJvcHMuZGVmYXVsdEludGVydmFsLFxuICAgICAgICBpc1BhdXNlZDogcHJvcHMuaXNQYXVzZWQsXG4gICAgICAgIHJlc3RhcnRPblBhdXNlOiBwcm9wcy5yZXN0YXJ0T25QYXVzZSxcbiAgICAgICAgY3VycmVudEluZGV4OiBwcm9wcy5jdXJyZW50SW5kZXgsXG4gICAgICAgIG9uU3RvcnlTdGFydDogcHJvcHMub25TdG9yeVN0YXJ0LFxuICAgICAgICBvblN0b3J5RW5kOiBwcm9wcy5vblN0b3J5RW5kLFxuICAgICAgICBvbkFsbFN0b3JpZXNFbmQ6IHByb3BzLm9uQWxsU3Rvcmllc0VuZCxcbiAgICAgICAga2V5Ym9hcmROYXZpZ2F0aW9uOiBwcm9wcy5rZXlib2FyZE5hdmlnYXRpb24sXG4gICAgfVxuICAgIGNvbnN0IFtzdG9yaWVzLCBzZXRTdG9yaWVzXSA9IHVzZVN0YXRlPHsgc3RvcmllczogU3RvcnlbXSB9Pih7IHN0b3JpZXM6IGdlbmVyYXRlU3Rvcmllcyhwcm9wcy5zdG9yaWVzLCByZW5kZXJlcnMpIH0pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFN0b3JpZXMoeyBzdG9yaWVzOiBnZW5lcmF0ZVN0b3JpZXMocHJvcHMuc3RvcmllcywgcmVuZGVyZXJzKSB9KTtcbiAgICB9LCBbcHJvcHMuc3RvcmllcywgcHJvcHMucmVuZGVyZXJzXSk7XG5cbiAgICByZXR1cm4gPEdsb2JhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHR9PlxuICAgICAgICA8U3Rvcmllc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0b3JpZXN9PlxuICAgICAgICAgICAgPENvbnRhaW5lciAvPlxuICAgICAgICA8L1N0b3JpZXNDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvR2xvYmFsQ29udGV4dC5Qcm92aWRlcj5cbn1cblxuY29uc3QgZ2VuZXJhdGVTdG9yaWVzID0gKHN0b3JpZXM6IFN0b3J5W10sIHJlbmRlcmVyczogeyByZW5kZXJlcjogUmVuZGVyZXIsIHRlc3RlcjogVGVzdGVyIH1bXSkgPT4ge1xuICAgIHJldHVybiBzdG9yaWVzLm1hcChzID0+IHtcbiAgICAgICAgbGV0IHN0b3J5OiBTdG9yeSA9IHt9O1xuXG4gICAgICAgIGlmICh0eXBlb2YgcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHN0b3J5LnVybCA9IHM7XG4gICAgICAgICAgICBzdG9yeS50eXBlID0gJ2ltYWdlJztcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHN0b3J5ID0gT2JqZWN0LmFzc2lnbihzdG9yeSwgcyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVuZGVyZXIgPSBnZXRSZW5kZXJlcihzdG9yeSwgcmVuZGVyZXJzKTtcbiAgICAgICAgc3Rvcnkub3JpZ2luYWxDb250ZW50ID0gc3RvcnkuY29udGVudDtcbiAgICAgICAgc3RvcnkuY29udGVudCA9IHJlbmRlcmVyO1xuICAgICAgICByZXR1cm4gc3RvcnlcbiAgICB9KVxufTtcblxuUmVhY3RJbnN0YVN0b3JpZXMuZGVmYXVsdFByb3BzID0ge1xuICAgIHdpZHRoOiAzNjAsXG4gICAgaGVpZ2h0OiA2NDAsXG4gICAgZGVmYXVsdEludGVydmFsOiA0MDAwXG59XG5cbmV4cG9ydCBjb25zdCBXaXRoSGVhZGVyID0gd2l0aEhlYWRlcjtcbmV4cG9ydCBjb25zdCBXaXRoU2VlTW9yZSA9IHdpdGhTZWVNb3JlO1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdEluc3RhU3Rvcmllc1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVuZGVyZXIsIFRlc3RlciB9IGZyb20gJy4vLi4vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBjb25zdCByZW5kZXJlcjogUmVuZGVyZXIgPSAocHJvcHMpID0+IHtcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIXByb3BzLmlzUGF1c2VkKSB7XG4gICAgICAgICAgICBwcm9wcy5hY3Rpb24oJ3BsYXknKTtcbiAgICAgICAgfVxuICAgIH0sIFtwcm9wcy5zdG9yeV0pXG4gICAgY29uc3QgQ29udGVudCA9IHByb3BzLnN0b3J5Lm9yaWdpbmFsQ29udGVudDtcbiAgICByZXR1cm4gPENvbnRlbnQgey4uLnByb3BzfSAvPlxufVxuXG5leHBvcnQgY29uc3QgdGVzdGVyOiBUZXN0ZXIgPSAoc3RvcnkpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb25kaXRpb246ICEhc3RvcnkuY29udGVudCxcbiAgICAgICAgcHJpb3JpdHk6IDJcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICByZW5kZXJlcixcbiAgICB0ZXN0ZXJcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlbmRlcmVyLCBUZXN0ZXIgfSBmcm9tICcuLy4uL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY29uc3QgcmVuZGVyZXI6IFJlbmRlcmVyID0gKHsgc3RvcnksIGFjdGlvbiB9KSA9PiB7XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYWN0aW9uKCdwbGF5Jyk7XG4gICAgfSwgW3N0b3J5XSlcblxuICAgIHJldHVybiA8ZGl2IHN0eWxlPXtzdHlsZXMuc3RvcnlDb250ZW50fT5cbiAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy50ZXh0fT5UaGlzIHN0b3J5IGNvdWxkIG5vdCBiZSBsb2FkZWQuPC9wPlxuICAgIDwvZGl2PlxufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgc3RvcnlDb250ZW50OiB7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgbWF4SGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgbWFyZ2luOiBcImF1dG9cIlxuICAgIH0sXG4gICAgdGV4dDoge1xuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgd2lkdGg6ICc5MCUnLFxuICAgICAgICBtYXJnaW46ICdhdXRvJ1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCB0ZXN0ZXI6IFRlc3RlciA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb25kaXRpb246IHRydWUsXG4gICAgICAgIHByaW9yaXR5OiAxXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlbmRlcmVyLFxuICAgIHRlc3RlclxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9TcGlubmVyJztcbmltcG9ydCB7IFJlbmRlcmVyLCBUZXN0ZXIgfSBmcm9tICcuLy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IFdpdGhIZWFkZXIgZnJvbSAnLi93cmFwcGVycy93aXRoSGVhZGVyJztcbmltcG9ydCBXaXRoU2VlTW9yZSBmcm9tICcuL3dyYXBwZXJzL3dpdGhTZWVNb3JlJztcblxuZXhwb3J0IGNvbnN0IHJlbmRlcmVyOiBSZW5kZXJlciA9ICh7IHN0b3J5LCBhY3Rpb24sIGlzUGF1c2VkLCBjb25maWcgfSkgPT4ge1xuICAgIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBsb2FkZXIsIHN0b3J5U3R5bGVzIH0gPSBjb25maWc7XG4gICAgbGV0IGNvbXB1dGVkU3R5bGVzID0ge1xuICAgICAgICAuLi5zdHlsZXMuc3RvcnlDb250ZW50LFxuICAgICAgICAuLi4oc3RvcnlTdHlsZXMgfHwge30pXG4gICAgfVxuXG4gICAgY29uc3QgaW1hZ2VMb2FkZWQgPSAoKSA9PiB7XG4gICAgICAgIHNldExvYWRlZCh0cnVlKTtcbiAgICAgICAgYWN0aW9uKCdwbGF5Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDxXaXRoSGVhZGVyIHN0b3J5PXtzdG9yeX0gZ2xvYmFsSGVhZGVyPXtjb25maWcuaGVhZGVyfT5cbiAgICAgICAgPFdpdGhTZWVNb3JlIHN0b3J5PXtzdG9yeX0gYWN0aW9uPXthY3Rpb259PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXtjb21wdXRlZFN0eWxlc30gc3JjPXtzdG9yeS51cmx9IG9uTG9hZD17aW1hZ2VMb2FkZWR9IC8+XG4gICAgICAgICAgICAgICAgeyFsb2FkZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgwLCAwLCAwLCAwLjkpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4OiA5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2NjY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGVyIHx8IDxTcGlubmVyIC8+fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvV2l0aFNlZU1vcmU+XG4gICAgPC9XaXRoSGVhZGVyPlxufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgc3Rvcnk6IHtcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiXG4gICAgfSxcbiAgICBzdG9yeUNvbnRlbnQ6IHtcbiAgICAgICAgd2lkdGg6IFwiYXV0b1wiLFxuICAgICAgICBtYXhXaWR0aDogXCIxMDAlXCIsXG4gICAgICAgIG1heEhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgIG1hcmdpbjogXCJhdXRvXCJcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgdGVzdGVyOiBUZXN0ZXIgPSAoc3RvcnkpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb25kaXRpb246ICFzdG9yeS5jb250ZW50ICYmICghc3RvcnkudHlwZSB8fCBzdG9yeS50eXBlID09PSAnaW1hZ2UnKSxcbiAgICAgICAgcHJpb3JpdHk6IDJcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICByZW5kZXJlcixcbiAgICB0ZXN0ZXJcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi9jb21wb25lbnRzL1NwaW5uZXInO1xuaW1wb3J0IHsgUmVuZGVyZXIsIFRlc3RlciB9IGZyb20gJy4vLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgV2l0aEhlYWRlciBmcm9tICcuL3dyYXBwZXJzL3dpdGhIZWFkZXInO1xuaW1wb3J0IFdpdGhTZWVNb3JlIGZyb20gJy4vd3JhcHBlcnMvd2l0aFNlZU1vcmUnO1xuXG5leHBvcnQgY29uc3QgcmVuZGVyZXI6IFJlbmRlcmVyID0gKHsgc3RvcnksIGFjdGlvbiwgaXNQYXVzZWQsIGNvbmZpZywgbWVzc2FnZUhhbmRsZXIgfSkgPT4ge1xuICAgIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW211dGVkLCBzZXRNdXRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBsb2FkZXIsIHN0b3J5U3R5bGVzIH0gPSBjb25maWc7XG5cbiAgICBsZXQgY29tcHV0ZWRTdHlsZXMgPSB7XG4gICAgICAgIC4uLnN0eWxlcy5zdG9yeUNvbnRlbnQsXG4gICAgICAgIC4uLihzdG9yeVN0eWxlcyB8fCB7fSlcbiAgICB9XG5cbiAgICBsZXQgdmlkID0gUmVhY3QudXNlUmVmPEhUTUxWaWRlb0VsZW1lbnQ+KG51bGwpO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHZpZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBpZiAoaXNQYXVzZWQpIHtcbiAgICAgICAgICAgICAgICB2aWQuY3VycmVudC5wYXVzZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2aWQuY3VycmVudC5wbGF5KCkuY2F0Y2goKCkgPT4geyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtpc1BhdXNlZF0pO1xuXG4gICAgY29uc3Qgb25XYWl0aW5nID0gKCkgPT4ge1xuICAgICAgICBhY3Rpb24oXCJwYXVzZVwiLCB0cnVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBvblBsYXlpbmcgPSAoKSA9PiB7XG4gICAgICAgIGFjdGlvbihcInBsYXlcIiwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgdmlkZW9Mb2FkZWQgPSAoKSA9PiB7XG4gICAgICAgIG1lc3NhZ2VIYW5kbGVyKCdVUERBVEVfVklERU9fRFVSQVRJT04nLCB7IGR1cmF0aW9uOiB2aWQuY3VycmVudC5kdXJhdGlvbiB9KTtcbiAgICAgICAgc2V0TG9hZGVkKHRydWUpO1xuICAgICAgICB2aWQuY3VycmVudC5wbGF5KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBhY3Rpb24oJ3BsYXknKTtcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgc2V0TXV0ZWQodHJ1ZSk7XG4gICAgICAgICAgICB2aWQuY3VycmVudC5wbGF5KCkuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uKCdwbGF5Jyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gPFdpdGhIZWFkZXIgc3Rvcnk9e3N0b3J5fSBnbG9iYWxIZWFkZXI9e2NvbmZpZy5oZWFkZXJ9PlxuICAgICAgICA8V2l0aFNlZU1vcmUgc3Rvcnk9e3N0b3J5fSBhY3Rpb249e2FjdGlvbn0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudmlkZW9Db250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDx2aWRlb1xuICAgICAgICAgICAgICAgICAgICByZWY9e3ZpZH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2NvbXB1dGVkU3R5bGVzfVxuICAgICAgICAgICAgICAgICAgICBzcmM9e3N0b3J5LnVybH1cbiAgICAgICAgICAgICAgICAgICAgY29udHJvbHM9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBvbkxvYWRlZERhdGE9e3ZpZGVvTG9hZGVkfVxuICAgICAgICAgICAgICAgICAgICBwbGF5c0lubGluZVxuICAgICAgICAgICAgICAgICAgICBvbldhaXRpbmc9e29uV2FpdGluZ31cbiAgICAgICAgICAgICAgICAgICAgb25QbGF5aW5nPXtvblBsYXlpbmd9XG4gICAgICAgICAgICAgICAgICAgIG11dGVkPXttdXRlZH1cbiAgICAgICAgICAgICAgICAgICAgYXV0b1BsYXlcbiAgICAgICAgICAgICAgICAgICAgd2Via2l0LXBsYXlzaW5saW5lPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7IWxvYWRlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDAsIDAsIDAuOSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjY2NjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkZXIgfHwgPFNwaW5uZXIgLz59XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9XaXRoU2VlTW9yZT5cbiAgICA8L1dpdGhIZWFkZXI+XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBzdG9yeUNvbnRlbnQ6IHtcbiAgICAgICAgd2lkdGg6IFwiYXV0b1wiLFxuICAgICAgICBtYXhXaWR0aDogXCIxMDAlXCIsXG4gICAgICAgIG1heEhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgIG1hcmdpbjogXCJhdXRvXCJcbiAgICB9LFxuICAgIHZpZGVvQ29udGFpbmVyOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCB0ZXN0ZXI6IFRlc3RlciA9IChzdG9yeSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbmRpdGlvbjogc3RvcnkudHlwZSA9PT0gJ3ZpZGVvJyxcbiAgICAgICAgcHJpb3JpdHk6IDJcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICByZW5kZXJlcixcbiAgICB0ZXN0ZXJcbn1cbiIsImltcG9ydCBpbWFnZSBmcm9tICcuL0ltYWdlJztcbmltcG9ydCB2aWRlbyBmcm9tICcuL1ZpZGVvJztcbmltcG9ydCBkZWZhdWx0UmVuZGVyZXIgZnJvbSAnLi9EZWZhdWx0JztcbmltcG9ydCBhdXRvcGxheUNvbnRlbnQgZnJvbSAnLi9BdXRvUGxheUNvbnRlbnQnO1xuXG5leHBvcnQgY29uc3QgcmVuZGVyZXJzID0gW2ltYWdlLCB2aWRlbywgYXV0b3BsYXlDb250ZW50LCBkZWZhdWx0UmVuZGVyZXJdO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN0b3J5IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5cbmNvbnN0IHdpdGhIZWFkZXI6IFJlYWN0LkZDPHsgc3Rvcnk6IFN0b3J5LCBnbG9iYWxIZWFkZXI6IEZ1bmN0aW9uIH0+ID0gKHsgc3RvcnksIGdsb2JhbEhlYWRlciwgY2hpbGRyZW4gfSkgPT4ge1xuICAgIHJldHVybiA8PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtzdG9yeS5oZWFkZXIgJiYgKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBsZWZ0OiAxMiwgdG9wOiAyMCwgekluZGV4OiAxOSB9fT5cbiAgICAgICAgICAgICAgICB7dHlwZW9mIHN0b3J5ID09PSBcIm9iamVjdFwiID8gKFxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxIZWFkZXIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxIZWFkZXIoc3RvcnkuaGVhZGVyKVxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZz17c3RvcnkuaGVhZGVyLmhlYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmhlYWRpbmc9e3N0b3J5LmhlYWRlci5zdWJoZWFkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlSW1hZ2U9e3N0b3J5LmhlYWRlci5wcm9maWxlSW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgIDwvPlxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoSGVhZGVyOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnRUeXBlLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFjdGlvbiwgU2VlTW9yZVByb3BzLCBTdG9yeSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IFNlZU1vcmUgZnJvbSBcIi4vLi4vLi4vY29tcG9uZW50cy9TZWVNb3JlXCI7XG5cbmNvbnN0IHdpdGhTZWVNb3JlOiBSZWFjdC5GQzx7XG4gICAgc3Rvcnk6IFN0b3J5LFxuICAgIGFjdGlvbjogQWN0aW9uLFxuICAgIGN1c3RvbUNvbGxhcHNlZD86IFNlZU1vcmVQcm9wc1tcImN1c3RvbUNvbGxhcHNlZFwiXVxufT4gPSAoeyBzdG9yeSwgYWN0aW9uLCBjdXN0b21Db2xsYXBzZWQsIGNoaWxkcmVuIH0pID0+IHtcbiAgICBjb25zdCBbc2hvd01vcmUsIHNldFNob3dNb3JlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB0b2dnbGVNb3JlID0gKHNob3cpID0+IHtcbiAgICAgICAgYWN0aW9uKHNob3cgPyAncGF1c2UnIDogJ3BsYXknKTtcbiAgICAgICAgc2V0U2hvd01vcmUoc2hvdyk7XG4gICAgfVxuICAgIGNvbnN0IENvbGxhcHNlZENvbXBvbmVudCA9IFNlZU1vcmU7XG4gICAgcmV0dXJuIDw+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAge3N0b3J5LnNlZU1vcmUgJiYgKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogc2hvd01vcmUgPyAndW5zZXQnIDogMCxcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogc2hvd01vcmUgPyAnMTAwJScgOiAnYXV0bydcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDb2xsYXBzZWRDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXthY3Rpb259XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZU1vcmU9e3RvZ2dsZU1vcmV9XG4gICAgICAgICAgICAgICAgICAgIHNob3dDb250ZW50PXtzaG93TW9yZX1cbiAgICAgICAgICAgICAgICAgICAgc2VlTW9yZUNvbnRlbnQ9e3N0b3J5LnNlZU1vcmV9XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbUNvbGxhcHNlZD17Y3VzdG9tQ29sbGFwc2VkIHx8IHN0b3J5LnNlZU1vcmVDb2xsYXBzZWR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgIDwvPlxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2VlTW9yZTsiLCJpbXBvcnQgeyBSZW5kZXJlciwgU3RvcnksIFRlc3RlciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRSZW5kZXJlciA9IChzdG9yeTogU3RvcnksIHJlbmRlcmVyczogeyByZW5kZXJlcjogUmVuZGVyZXIsIHRlc3RlcjogVGVzdGVyIH1bXSk6IFJlbmRlcmVyID0+IHtcbiAgICBsZXQgcHJvYmFibGUgPSByZW5kZXJlcnMubWFwKHIgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ucixcbiAgICAgICAgICAgIHRlc3RlclJlc3VsdDogci50ZXN0ZXIoc3RvcnkpXG4gICAgICAgIH1cbiAgICB9KS5maWx0ZXIociA9PiByLnRlc3RlclJlc3VsdC5jb25kaXRpb24pO1xuICAgIHByb2JhYmxlLnNvcnQoKGEsIGIpID0+IGIudGVzdGVyUmVzdWx0LnByaW9yaXR5IC0gYS50ZXN0ZXJSZXN1bHQucHJpb3JpdHkpO1xuICAgIHJldHVybiBwcm9iYWJsZVswXS5yZW5kZXJlcjtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiXSwic291cmNlUm9vdCI6IiJ9
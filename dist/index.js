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
    console.log(e.code);

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
    console.log('image player');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TdG9yaWVzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9TdG9yaWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvYXNzZXRzL3B1ZmYuc3ZnIiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29tcG9uZW50cy9Db250YWluZXIudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29tcG9uZW50cy9Qcm9ncmVzcy50c3giLCJ3ZWJwYWNrOi8vU3Rvcmllcy8uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzQXJyYXkudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29tcG9uZW50cy9Qcm9ncmVzc1dyYXBwZXIudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29tcG9uZW50cy9TZWVNb3JlLnRzeCIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL2NvbXBvbmVudHMvU3Bpbm5lci50c3giLCJ3ZWJwYWNrOi8vU3Rvcmllcy8uL3NyYy9jb21wb25lbnRzL1N0b3J5LnRzeCIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL2NvbnRleHQvR2xvYmFsLnRzIiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29udGV4dC9Qcm9ncmVzcy50cyIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL2NvbnRleHQvU3Rvcmllcy50cyIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL3JlbmRlcmVycy9BdXRvUGxheUNvbnRlbnQudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvcmVuZGVyZXJzL0RlZmF1bHQudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvcmVuZGVyZXJzL0ltYWdlLnRzeCIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL3JlbmRlcmVycy9WaWRlby50c3giLCJ3ZWJwYWNrOi8vU3Rvcmllcy8uL3NyYy9yZW5kZXJlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vU3Rvcmllcy8uL3NyYy9yZW5kZXJlcnMvd3JhcHBlcnMvd2l0aEhlYWRlci50c3giLCJ3ZWJwYWNrOi8vU3Rvcmllcy8uL3NyYy9yZW5kZXJlcnMvd3JhcHBlcnMvd2l0aFNlZU1vcmUudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvdXRpbC9yZW5kZXJlcnMudHN4Iiwid2VicGFjazovL1N0b3JpZXMvZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJhbWRcIjpcIlJlYWN0XCIsXCJyb290XCI6XCJSZWFjdFwifSJdLCJuYW1lcyI6WyJzdHlsZXMiLCJwcm9wcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNE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QUUsTUFETztBQUVmLGNBQVUsRUFBRSxVQUZHO0FBR2YsZUFBVyxFQUFFLFFBSEU7QUFJZixrQkFBYyxFQUFFLEtBQUssQ0FBQyxPQUpQO0FBS2YsbUJBQWUsRUFBRSxlQUFlLElBQUksS0FBSyxDQUFDO0FBTDNCLEdBQW5CLENBVkosQ0FIRCxDQUFQO0FBdUJILENBbENEOztBQW9DQSxrQkFBZSxXQUFmLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q2Esc0JBQWMsVUFBQyxLQUFELEVBQWUsU0FBZixFQUFnRjtBQUN2RyxNQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsR0FBVixDQUFjLFdBQUMsRUFBRztBQUM3QiwyQ0FDTyxDQURQLEdBQ1E7QUFDSixrQkFBWSxFQUFFLENBQUMsQ0FBQyxNQUFGLENBQVMsS0FBVDtBQURWLEtBRFI7QUFJSCxHQUxjLEVBS1osTUFMWSxDQUtMLFdBQUM7QUFBQSxXQUFJLENBQUMsQ0FBQyxZQUFGLENBQWUsU0FBbkI7QUFBQSxHQUxJLENBQWY7QUFNQSxVQUFRLENBQUMsSUFBVCxDQUFjLFVBQUMsQ0FBRCxFQUFJLENBQUo7QUFBQSxXQUFVLENBQUMsQ0FBQyxZQUFGLENBQWUsUUFBZixHQUEwQixDQUFDLENBQUMsWUFBRixDQUFlLFFBQW5EO0FBQUEsR0FBZDtBQUNBLFNBQU8sUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZLFFBQW5CO0FBQ0gsQ0FUWSxDOzs7Ozs7Ozs7OztBQ0ZiLG1EIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJTdG9yaWVzXCIsIFtcIlJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlN0b3JpZXNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiU3Rvcmllc1wiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBkZWZhdWx0ICgoe1xuICBzdHlsZXMgPSB7fSxcbiAgLi4ucHJvcHNcbn0pID0+IDxzdmcgd2lkdGg9XCI0NFwiIGhlaWdodD1cIjQ0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHN0cm9rZT1cIiNmZmZcIiB7Li4ucHJvcHN9PjxnIGZpbGw9XCJub25lXCIgZmlsbFJ1bGU9XCJldmVub2RkXCIgc3Ryb2tlV2lkdGg9XCIyXCI+PGNpcmNsZSBjeD1cIjIyXCIgY3k9XCIyMlwiIHI9XCIxXCI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cInJcIiBiZWdpbj1cIjBzXCIgZHVyPVwiMS44c1wiIHZhbHVlcz1cIjE7IDIwXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7IDFcIiBrZXlTcGxpbmVzPVwiMC4xNjUsIDAuODQsIDAuNDQsIDFcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiAvPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJzdHJva2Utb3BhY2l0eVwiIGJlZ2luPVwiMHNcIiBkdXI9XCIxLjhzXCIgdmFsdWVzPVwiMTsgMFwiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOyAxXCIga2V5U3BsaW5lcz1cIjAuMywgMC42MSwgMC4zNTUsIDFcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiAvPjwvY2lyY2xlPjxjaXJjbGUgY3g9XCIyMlwiIGN5PVwiMjJcIiByPVwiMVwiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJyXCIgYmVnaW49XCItMC45c1wiIGR1cj1cIjEuOHNcIiB2YWx1ZXM9XCIxOyAyMFwiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOyAxXCIga2V5U3BsaW5lcz1cIjAuMTY1LCAwLjg0LCAwLjQ0LCAxXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgLz48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwic3Ryb2tlLW9wYWNpdHlcIiBiZWdpbj1cIi0wLjlzXCIgZHVyPVwiMS44c1wiIHZhbHVlcz1cIjE7IDBcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDsgMVwiIGtleVNwbGluZXM9XCIwLjMsIDAuNjEsIDAuMzU1LCAxXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgLz48L2NpcmNsZT48L2c+PC9zdmc+KTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgR2xvYmFsQ29udGV4dCBmcm9tICcuLy4uL2NvbnRleHQvR2xvYmFsJ1xuaW1wb3J0IFN0b3JpZXNDb250ZXh0IGZyb20gJy4vLi4vY29udGV4dC9TdG9yaWVzJ1xuaW1wb3J0IFByb2dyZXNzQ29udGV4dCBmcm9tICcuLy4uL2NvbnRleHQvUHJvZ3Jlc3MnXG5pbXBvcnQgU3RvcnkgZnJvbSAnLi9TdG9yeSdcbmltcG9ydCBQcm9ncmVzc0FycmF5IGZyb20gJy4vUHJvZ3Jlc3NBcnJheSdcbmltcG9ydCB7IEdsb2JhbEN0eCwgU3Rvcmllc0NvbnRleHQgYXMgU3Rvcmllc0NvbnRleHRJbnRlcmZhY2UgfSBmcm9tICcuLy4uL2ludGVyZmFjZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBbY3VycmVudElkLCBzZXRDdXJyZW50SWRdID0gdXNlU3RhdGU8bnVtYmVyPigwKVxuICAgIGNvbnN0IFtwYXVzZSwgc2V0UGF1c2VdID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSlcbiAgICBjb25zdCBbYnVmZmVyQWN0aW9uLCBzZXRCdWZmZXJBY3Rpb25dID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSlcbiAgICBjb25zdCBbdmlkZW9EdXJhdGlvbiwgc2V0VmlkZW9EdXJhdGlvbl0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXG5cbiAgICBsZXQgbW91c2Vkb3duSWQgPSB1c2VSZWY8YW55PigpO1xuICAgIGxldCBpc01vdW50ZWQgPSB1c2VSZWY8Ym9vbGVhbj4odHJ1ZSk7XG4gICAgbGV0IG92ZXJsYXkgPSB1c2VSZWY8YW55PigpO1xuXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBsb29wLCBjdXJyZW50SW5kZXgsIGlzUGF1c2VkLCBrZXlib2FyZE5hdmlnYXRpb24sIHN0b3J5Q29udGFpbmVyU3R5bGVzID0ge30gfSA9IHVzZUNvbnRleHQ8R2xvYmFsQ3R4PihHbG9iYWxDb250ZXh0KTtcbiAgICBjb25zdCB7IHN0b3JpZXMgfSA9IHVzZUNvbnRleHQ8U3Rvcmllc0NvbnRleHRJbnRlcmZhY2U+KFN0b3JpZXNDb250ZXh0KTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgY3VycmVudEluZGV4ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA+PSAwICYmIGN1cnJlbnRJbmRleCA8IHN0b3JpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudElkV3JhcHBlcigoKSA9PiBjdXJyZW50SW5kZXgpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0luZGV4IG91dCBvZiBib3VuZHMuIEN1cnJlbnQgaW5kZXggd2FzIHNldCB0byB2YWx1ZSBtb3JlIHRoYW4gdGhlIGxlbmd0aCBvZiBzdG9yaWVzIGFycmF5LicsIGN1cnJlbnRJbmRleClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtjdXJyZW50SW5kZXhdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBpc1BhdXNlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICBzZXRQYXVzZShpc1BhdXNlZClcbiAgICAgICAgfVxuICAgIH0sIFtpc1BhdXNlZF0pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBpc0NsaWVudCA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpO1xuICAgICAgICBpZiAoaXNDbGllbnQgJiYgKHR5cGVvZiBrZXlib2FyZE5hdmlnYXRpb24gPT09ICdib29sZWFuJyAmJiBrZXlib2FyZE5hdmlnYXRpb24pKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBba2V5Ym9hcmROYXZpZ2F0aW9uXSk7XG5cbiAgICAvLyBDbGVhbnVwIG1vdW50ZWQgc3RhdGUgLSBmb3IgaXNzdWUgIzEzMCAoaHR0cHM6Ly9naXRodWIuY29tL21vaGl0azA1L3JlYWN0LWluc3RhLXN0b3JpZXMvaXNzdWVzLzEzMClcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgaXNNb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLmNvZGUpXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgICAgICAgIHByZXZpb3VzKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICAgICAgICBuZXh0KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZVN0YXRlID0gKGFjdGlvbjogc3RyaW5nLCBidWZmZXJBY3Rpb24/OiBib29sZWFuKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjYWxsaW5nIGFjdGlvbicsIGFjdGlvbilcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ25leHQnKSByZXR1cm4gbmV4dCgpXG4gICAgICAgIGlmIChhY3Rpb24gPT09ICdwcmV2aW91cycpIHJldHVybiBwcmV2aW91cygpXG4gICAgICAgIHNldFBhdXNlKGFjdGlvbiA9PT0gJ3BhdXNlJylcbiAgICAgICAgc2V0QnVmZmVyQWN0aW9uKCEhYnVmZmVyQWN0aW9uKVxuICAgIH1cblxuICAgIGNvbnN0IHNldEN1cnJlbnRJZFdyYXBwZXIgPSAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgc2V0Q3VycmVudElkKGNhbGxiYWNrKTtcbiAgICAgICAgdG9nZ2xlU3RhdGUoJ3BhdXNlJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJldmlvdXMgPSAoKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRJZFdyYXBwZXIocHJldiA9PiBwcmV2ID4gMCA/IHByZXYgLSAxIDogcHJldilcbiAgICB9XG5cbiAgICBjb25zdCBuZXh0ID0gKCkgPT4ge1xuICAgICAgICBpZiAoaXNNb3VudGVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGlmIChsb29wKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlTmV4dFN0b3J5SWRGb3JMb29wKClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlTmV4dFN0b3J5SWQoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHVwZGF0ZU5leHRTdG9yeUlkRm9yTG9vcCA9ICgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudElkV3JhcHBlcihwcmV2ID0+IChwcmV2ICsgMSkgJSBzdG9yaWVzLmxlbmd0aClcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVOZXh0U3RvcnlJZCA9ICgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudElkV3JhcHBlcihwcmV2ID0+IHtcbiAgICAgICAgICAgIGlmIChwcmV2IDwgc3Rvcmllcy5sZW5ndGggLSAxKSByZXR1cm4gcHJldiArIDFcbiAgICAgICAgICAgIHJldHVybiBwcmV2XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZGVib3VuY2VQYXVzZSA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50IHwgUmVhY3QuVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgbW91c2Vkb3duSWQuY3VycmVudCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdG9nZ2xlU3RhdGUoJ3BhdXNlJylcbiAgICAgICAgfSwgMjAwKVxuICAgIH1cblxuICAgIGNvbnN0IG1vdXNlVXAgPSAodHlwZTogc3RyaW5nKSA9PiAoZTogUmVhY3QuTW91c2VFdmVudCB8IFJlYWN0LlRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIG1vdXNlZG93bklkLmN1cnJlbnQgJiYgY2xlYXJUaW1lb3V0KG1vdXNlZG93bklkLmN1cnJlbnQpXG4gICAgICAgIGlmIChwYXVzZSkge1xuICAgICAgICAgICAgdG9nZ2xlU3RhdGUoJ3BsYXknKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHlwZSA9PT0gJ25leHQnID8gbmV4dCgpIDogcHJldmlvdXMoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VmlkZW9EdXJhdGlvbiA9IChkdXJhdGlvbjogbnVtYmVyKSA9PiB7XG4gICAgICAgIHNldFZpZGVvRHVyYXRpb24oZHVyYXRpb24gKiAxMDAwKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc3RvcnlDb250YWluZXJTdHlsZXMsIC4uLnN0eWxlcy5jb250YWluZXIsIC4uLnsgd2lkdGgsIGhlaWdodCB9IH19PlxuICAgICAgICAgICAgPFByb2dyZXNzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xuICAgICAgICAgICAgICAgIGJ1ZmZlckFjdGlvbjogYnVmZmVyQWN0aW9uLFxuICAgICAgICAgICAgICAgIHZpZGVvRHVyYXRpb246IHZpZGVvRHVyYXRpb24sXG4gICAgICAgICAgICAgICAgY3VycmVudElkLFxuICAgICAgICAgICAgICAgIHBhdXNlLFxuICAgICAgICAgICAgICAgIG5leHRcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxQcm9ncmVzc0FycmF5IC8+XG4gICAgICAgICAgICA8L1Byb2dyZXNzQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgICAgIHsvKjxTdG9yeVxuICAgICAgICAgICAgICAgIGFjdGlvbj17dG9nZ2xlU3RhdGV9XG4gICAgICAgICAgICAgICAgYnVmZmVyQWN0aW9uPXtidWZmZXJBY3Rpb259XG4gICAgICAgICAgICAgICAgcGxheVN0YXRlPXtwYXVzZX1cbiAgICAgICAgICAgICAgICBzdG9yeT17c3Rvcmllc1tjdXJyZW50SWRdfVxuICAgICAgICAgICAgICAgIGdldFZpZGVvRHVyYXRpb249e2dldFZpZGVvRHVyYXRpb259XG4gICAgICAgICAgICAgICAgLz4qL31cbiAgICAgICAgICAgIHtzdG9yaWVzLm1hcChcbiAgICAgICAgICAgICAgICAoc3RvcnksIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxTdG9yeVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXt0b2dnbGVTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlckFjdGlvbj17YnVmZmVyQWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheVN0YXRlPXtwYXVzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJZD17Y3VycmVudElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3Rvcnk9e3N0b3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0VmlkZW9EdXJhdGlvbj17Z2V0VmlkZW9EdXJhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgey8qPGRpdiByZWY9e292ZXJsYXl9IHN0eWxlPXtzdHlsZXMub3ZlcmxheX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzUwJScsIHpJbmRleDogOTk5IH19IG9uVG91Y2hTdGFydD17ZGVib3VuY2VQYXVzZX0gb25Ub3VjaEVuZD17bW91c2VVcCgncHJldmlvdXMnKX0gb25Nb3VzZURvd249e2RlYm91bmNlUGF1c2V9IG9uTW91c2VVcD17bW91c2VVcCgncHJldmlvdXMnKX0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnNTAlJywgekluZGV4OiA5OTkgfX0gb25Ub3VjaFN0YXJ0PXtkZWJvdW5jZVBhdXNlfSBvblRvdWNoRW5kPXttb3VzZVVwKCduZXh0Jyl9IG9uTW91c2VEb3duPXtkZWJvdW5jZVBhdXNlfSBvbk1vdXNlVXA9e21vdXNlVXAoJ25leHQnKX0gLz5cbiAgICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBjb250YWluZXI6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgYmFja2dyb3VuZDogJyMxMTEnLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgIH0sXG4gICAgb3ZlcmxheToge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgaGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgICAgIHdpZHRoOiAnaW5oZXJpdCcsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEhlYWRlclByb3BzIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzJ1xuXG5jb25zdCBIZWFkZXIgPSAoeyBwcm9maWxlSW1hZ2UsIGhlYWRpbmcsIHN1YmhlYWRpbmcgfTogSGVhZGVyUHJvcHMpID0+XG4gICAgPGRpdiBzdHlsZT17c3R5bGVzLm1haW59PlxuICAgICAgICB7cHJvZmlsZUltYWdlICYmIDxpbWcgc3R5bGU9e3N0eWxlcy5pbWd9IHNyYz17cHJvZmlsZUltYWdlfSAvPn1cbiAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuaGVhZGluZ30+e2hlYWRpbmd9PC9wPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5zdWJoZWFkaW5nfT57c3ViaGVhZGluZ308L3A+XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIG1haW46IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICAgIH0sXG4gICAgaW1nOiB7XG4gICAgICAgIHdpZHRoOiA0MCxcbiAgICAgICAgaGVpZ2h0OiA0MCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA0MCxcbiAgICAgICAgbWFyZ2luUmlnaHQ6IDEwLFxuICAgICAgICBmaWx0ZXI6ICdkcm9wLXNoYWRvdygwIDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpKScsXG4gICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCknXG4gICAgfSxcbiAgICB0ZXh0OiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGZpbHRlcjogJ2Ryb3Atc2hhZG93KDAgMHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuOSkpJ1xuICAgIH0sXG4gICAgaGVhZGluZzoge1xuICAgICAgICBmb250U2l6ZTogJzFyZW0nLFxuICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC45KScsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgbWFyZ2luQm90dG9tOiAyXG4gICAgfSxcbiAgICBzdWJoZWFkaW5nOiB7XG4gICAgICAgIGZvbnRTaXplOiAnMC42cmVtJyxcbiAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCknLFxuICAgICAgICBtYXJnaW46IDBcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQcm9ncmVzc1Byb3BzLCBQcm9ncmVzc0NvbnRleHQgfSBmcm9tICcuLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgUHJvZ3Jlc3NXcmFwcGVyIGZyb20gJy4vUHJvZ3Jlc3NXcmFwcGVyJ1xuaW1wb3J0IFByb2dyZXNzQ3R4IGZyb20gJy4vLi4vY29udGV4dC9Qcm9ncmVzcydcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzOiBQcm9ncmVzc1Byb3BzKSA9PiB7XG4gICAgY29uc3QgeyBidWZmZXJBY3Rpb24sIHBhdXNlIH0gPSB1c2VDb250ZXh0PFByb2dyZXNzQ29udGV4dD4oUHJvZ3Jlc3NDdHgpXG5cbiAgICBjb25zdCBnZXRQcm9ncmVzc1N0eWxlID0gKHsgYWN0aXZlIH0pID0+IHtcbiAgICAgICAgc3dpdGNoIChhY3RpdmUpIHtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXR1cm4geyB3aWR0aDogJzEwMCUnIH1cbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXR1cm4geyB0cmFuc2Zvcm06IGBzY2FsZVgoJHtwcm9wcy5jb3VudCAvIDEwMH0pYCB9XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgd2lkdGg6IDAgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4geyB3aWR0aDogMCB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IHdpZHRoLCBhY3RpdmUgfSA9IHByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFByb2dyZXNzV3JhcHBlciB3aWR0aD17d2lkdGh9IHBhdXNlPXtwYXVzZX0gYnVmZmVyQWN0aW9uPXtidWZmZXJBY3Rpb259PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLmdldFByb2dyZXNzU3R5bGUoeyBhY3RpdmUgfSksIC4uLnN0eWxlcy5pbm5lciB9fSAvPlxuICAgICAgICA8L1Byb2dyZXNzV3JhcHBlcj5cbiAgICApXG59XG5cbmNvbnN0IHN0eWxlczogYW55ID0ge1xuICAgIGlubmVyOiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIGJvcmRlclJhZGl1czogMixcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnY2VudGVyIGxlZnQnLFxuXG4gICAgICAgIFdlYmtpdEJhY2tmYWNlVmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICAgIE1vekJhY2tmYWNlVmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICAgIG1zQmFja2ZhY2VWaXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgICAgYmFja2ZhY2VWaXNpYmlsaXR5OiAnaGlkZGVuJyxcblxuICAgICAgICBXZWJraXRQZXJzcGVjdGl2ZTogMTAwMCxcbiAgICAgICAgTW96UGVyc3BlY3RpdmU6IDEwMDAsXG4gICAgICAgIG1zUGVyc3BlY3RpdmU6IDEwMDAsXG4gICAgICAgIHBlcnNwZWN0aXZlOiAxMDAwXG4gICAgfVxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9ncmVzcyBmcm9tICcuL1Byb2dyZXNzJ1xuaW1wb3J0IHsgUHJvZ3Jlc3NDb250ZXh0LCBHbG9iYWxDdHgsIFN0b3JpZXNDb250ZXh0IGFzIFN0b3JpZXNDb250ZXh0SW50ZXJmYWNlIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IFByb2dyZXNzQ3R4IGZyb20gJy4vLi4vY29udGV4dC9Qcm9ncmVzcydcbmltcG9ydCBHbG9iYWxDb250ZXh0IGZyb20gJy4vLi4vY29udGV4dC9HbG9iYWwnXG5pbXBvcnQgU3Rvcmllc0NvbnRleHQgZnJvbSAnLi8uLi9jb250ZXh0L1N0b3JpZXMnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlPG51bWJlcj4oMClcbiAgICBjb25zdCB7IGN1cnJlbnRJZCwgbmV4dCwgdmlkZW9EdXJhdGlvbiwgcGF1c2UgfSA9IHVzZUNvbnRleHQ8UHJvZ3Jlc3NDb250ZXh0PihQcm9ncmVzc0N0eClcbiAgICBjb25zdCB7IGRlZmF1bHRJbnRlcnZhbCwgcmVzdGFydE9uUGF1c2UsIG9uU3RvcnlFbmQsIG9uU3RvcnlTdGFydCwgb25BbGxTdG9yaWVzRW5kIH0gPSB1c2VDb250ZXh0PEdsb2JhbEN0eD4oR2xvYmFsQ29udGV4dCk7XG4gICAgY29uc3QgeyBzdG9yaWVzIH0gPSB1c2VDb250ZXh0PFN0b3JpZXNDb250ZXh0SW50ZXJmYWNlPihTdG9yaWVzQ29udGV4dCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRDb3VudCgwKVxuICAgIH0sIFtjdXJyZW50SWQsIHN0b3JpZXNdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgIGlmIChwYXVzZSAmJiByZXN0YXJ0T25QYXVzZSkge1xuICAgICAgICAgICAgIHNldENvdW50KDApXG4gICAgICAgICB9XG4gICAgIH0sIFtyZXN0YXJ0T25QYXVzZSwgcGF1c2VdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFwYXVzZSkge1xuICAgICAgICAgICAgYW5pbWF0aW9uRnJhbWVJZC5jdXJyZW50ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGluY3JlbWVudENvdW50KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZUlkLmN1cnJlbnQpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgIH0sIFtjdXJyZW50SWQsIHBhdXNlXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChwYXVzZSkge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWVJZC5jdXJyZW50KVxuICAgICAgICB9XG4gICAgfSwgW2NvdW50LCBwYXVzZV0pXG5cbiAgICBsZXQgYW5pbWF0aW9uRnJhbWVJZCA9IHVzZVJlZjxudW1iZXI+KClcblxuICAgIGxldCBjb3VudENvcHkgPSBjb3VudDtcbiAgICBjb25zdCBpbmNyZW1lbnRDb3VudCA9ICgpID0+IHtcbiAgICAgICAgaWYgKGNvdW50Q29weSA9PT0gMCkgc3RvcnlTdGFydENhbGxiYWNrKClcbiAgICAgICAgc2V0Q291bnQoKGNvdW50OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gZ2V0Q3VycmVudEludGVydmFsKClcbiAgICAgICAgICAgIGNvdW50Q29weSA9IGNvdW50ICsgKDEwMCAvICgoaW50ZXJ2YWwgLyAxMDAwKSAqIDYwKSlcbiAgICAgICAgICAgIHJldHVybiBjb3VudCArICgxMDAgLyAoKGludGVydmFsIC8gMTAwMCkgKiA2MCkpXG4gICAgICAgIH0pXG4gICAgICAgIGlmIChjb3VudENvcHkgPCAxMDApIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbkZyYW1lSWQuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShpbmNyZW1lbnRDb3VudClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0b3J5RW5kQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50SWQgPT09IHN0b3JpZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGFsbFN0b3JpZXNFbmRDYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWVJZC5jdXJyZW50KTtcbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN0b3J5U3RhcnRDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgb25TdG9yeVN0YXJ0ICYmIG9uU3RvcnlTdGFydChjdXJyZW50SWQsIHN0b3JpZXNbY3VycmVudElkXSlcbiAgICB9XG5cbiAgICBjb25zdCBzdG9yeUVuZENhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICBvblN0b3J5RW5kICYmIG9uU3RvcnlFbmQoY3VycmVudElkLCBzdG9yaWVzW2N1cnJlbnRJZF0pXG4gICAgfVxuXG4gICAgY29uc3QgYWxsU3Rvcmllc0VuZENhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICBvbkFsbFN0b3JpZXNFbmQgJiYgb25BbGxTdG9yaWVzRW5kKGN1cnJlbnRJZCwgc3RvcmllcylcbiAgICB9XG5cbiAgICBjb25zdCBnZXRDdXJyZW50SW50ZXJ2YWwgPSAoKSA9PiB7XG4gICAgICAgIGlmIChzdG9yaWVzW2N1cnJlbnRJZF0udHlwZSA9PT0gJ3ZpZGVvJykgcmV0dXJuIHZpZGVvRHVyYXRpb25cbiAgICAgICAgaWYgKHR5cGVvZiBzdG9yaWVzW2N1cnJlbnRJZF0uZHVyYXRpb24gPT09ICdudW1iZXInKSByZXR1cm4gc3Rvcmllc1tjdXJyZW50SWRdLmR1cmF0aW9uXG4gICAgICAgIHJldHVybiBkZWZhdWx0SW50ZXJ2YWxcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMucHJvZ3Jlc3NBcnJ9PlxuICAgICAgICAgICAge3N0b3JpZXMubWFwKChfLCBpKSA9PlxuICAgICAgICAgICAgICAgIDxQcm9ncmVzc1xuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgIGNvdW50PXtjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEgLyBzdG9yaWVzLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtpID09PSBjdXJyZW50SWQgPyAxIDogKGkgPCBjdXJyZW50SWQgPyAyIDogMCl9XG4gICAgICAgICAgICAgICAgLz4pfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBwcm9ncmVzc0Fycjoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgZmxleFdyYXA6ICdyb3cnLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgd2lkdGg6ICc5OCUnLFxuICAgICAgICBwYWRkaW5nOiA1LFxuICAgICAgICBwYWRkaW5nVG9wOiA3LFxuICAgICAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICAgICAgICB6SW5kZXg6IDk5LFxuICAgICAgICBmaWx0ZXI6ICdkcm9wLXNoYWRvdygwIDFweCA4cHggIzIyMiknXG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUHJvZ3Jlc3NXcmFwcGVyUHJvcHMgfSBmcm9tICcuLy4uL2ludGVyZmFjZXMnXG5cbmNvbnN0IFByb2dyZXNzV3JhcHBlciA9IChwcm9wczogUHJvZ3Jlc3NXcmFwcGVyUHJvcHMpID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7IC4uLnN0eWxlcy5wcm9ncmVzcywgLi4uZ2V0UHJvZ3Jlc3NXcmFwcGVyU3R5bGUocHJvcHMpIH19PlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9kaXY+XG4pXG5cbmNvbnN0IGdldFByb2dyZXNzV3JhcHBlclN0eWxlID0gKHsgd2lkdGgsIHBhdXNlLCBidWZmZXJBY3Rpb24gfSkgPT4gKHtcbiAgICB3aWR0aDogYCR7d2lkdGggKiAxMDB9JWAsXG4gICAgb3BhY2l0eTogcGF1c2UgJiYgIWJ1ZmZlckFjdGlvbiA/IDAgOiAxXG59KVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgcHJvZ3Jlc3M6IHtcbiAgICAgICAgaGVpZ2h0OiAyLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnIzU1NScsXG4gICAgICAgIG1hcmdpbjogMixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxuICAgICAgICB0cmFuc2l0aW9uOiAnb3BhY2l0eSA0MDBtcyBlYXNlLWluLW91dCdcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzV3JhcHBlciIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBHbG9iYWxDb250ZXh0IGZyb20gJy4vLi4vY29udGV4dC9HbG9iYWwnXG5pbXBvcnQgeyBHbG9iYWxDdHggfSBmcm9tICcuLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgeyBTZWVNb3JlUHJvcHMgfSBmcm9tICcuLy4uL2ludGVyZmFjZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlZU1vcmUocHJvcHM6IFNlZU1vcmVQcm9wcykge1xuICAgIGNvbnN0IFNlZU1vcmVDb250ZW50ID0gcHJvcHMuc2VlTW9yZUNvbnRlbnQ7XG4gICAgY29uc3QgQ3VzdG9tQ29sbGFwc2VkID0gcHJvcHMuY3VzdG9tQ29sbGFwc2VkO1xuXG4gICAgY29uc3QgeyBrZXlib2FyZE5hdmlnYXRpb24gfSA9IHVzZUNvbnRleHQ8R2xvYmFsQ3R4PihHbG9iYWxDb250ZXh0KTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2xpZW50ID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCk7XG4gICAgICAgIGlmIChpc0NsaWVudCAmJiAodHlwZW9mIGtleWJvYXJkTmF2aWdhdGlvbiA9PT0gJ2Jvb2xlYW4nICYmIGtleWJvYXJkTmF2aWdhdGlvbikpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtrZXlib2FyZE5hdmlnYXRpb25dKVxuXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIHByb3BzLnRvZ2dsZU1vcmUodHJ1ZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicgfHwgZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIHByb3BzLnRvZ2dsZU1vcmUoZmFsc2UpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICBwcm9wcy5zaG93Q29udGVudFxuICAgICAgICAgICAgPyA8ZGl2IHN0eWxlPXtzdHlsZXMuc2VlTW9yZUV4cGFuZGVkfT5cbiAgICAgICAgICAgICAgICA8U2VlTW9yZUNvbnRlbnQgY2xvc2U9eygpID0+IHByb3BzLnRvZ2dsZU1vcmUoZmFsc2UpfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6XG4gICAgICAgICAgICAoQ3VzdG9tQ29sbGFwc2VkID8gPEN1c3RvbUNvbGxhcHNlZCBhY3Rpb249e3Byb3BzLmFjdGlvbn0gdG9nZ2xlTW9yZT17cHJvcHMudG9nZ2xlTW9yZX0gLz4gOiA8ZGl2IHN0eWxlPXtzdHlsZXMuc2VlTW9yZX0gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBwcm9wcy50b2dnbGVNb3JlKHRydWUpXG4gICAgICAgICAgICB9fSA+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy5zZWVNb3JlSWNvbn0+4oyDPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMuc2VlTW9yZVRleHR9PlNlZSBtb3JlPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgKVxufVxuXG5jb25zdCBzdHlsZXM6IGFueSA9IHtcbiAgICBzZWVNb3JlOiB7XG4gICAgICAgIGhlaWdodDogXCIxMHZoXCIsXG4gICAgICAgIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC4yKSlcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIixcbiAgICAgICAgYm90dG9tOiAwXG4gICAgfSxcbiAgICBzZWVNb3JlRXhwYW5kZWQ6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICB6SW5kZXg6IDk5OTk5XG4gICAgfSxcbiAgICBzZWVNb3JlVGV4dDoge1xuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IFwiMC4xZW1cIixcbiAgICAgICAgbWFyZ2luQm90dG9tOiBcIjIuMnZoXCIsXG4gICAgICAgIHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiLFxuICAgICAgICBvcGFjaXR5OiBcIjFcIixcbiAgICAgICAgZm9udFNpemU6IFwiMC44ZW1cIixcbiAgICAgICAgdHJhbnNpdGlvbjogXCJvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0XCJcbiAgICB9LFxuICAgIHNlZU1vcmVJY29uOiB7XG4gICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgbGV0dGVyU3BhY2luZzogXCIwLjJlbVwiLFxuICAgICAgICBtYXJnaW5Cb3R0b206IFwiMC40dmhcIixcbiAgICAgICAgb3BhY2l0eTogXCIxXCIsXG4gICAgICAgIGZpbHRlcjogXCJkcm9wLXNoYWRvdygwIDAgNXB4IGJsYWNrKVwiLFxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIixcbiAgICAgICAgdHJhbnNpdGlvbjogXCJvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0XCJcbiAgICB9LFxuICAgIHNlZU1vcmVDbG9zZToge1xuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICBmaWx0ZXI6IFwiZHJvcC1zaGFkb3coMCAzcHggMnB4ICNjY2MpXCIsXG4gICAgICAgIHJpZ2h0OiBcIjAuNXJlbVwiLFxuICAgICAgICB0b3A6IFwiMC41cmVtXCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxuICAgICAgICBvcGFjaXR5OiBcIjAuN1wiLFxuICAgICAgICBwYWRkaW5nOiBcIjFyZW1cIlxuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNwaW5uZXJTVkcgZnJvbSAnLi8uLi9hc3NldHMvcHVmZi5zdmcnO1xuXG5jb25zdCBTcGlubmVyID0gKCkgPT4ge1xuICAgIHJldHVybiA8U3Bpbm5lclNWRyAvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBTcGlubmVyOyIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN0b3J5UHJvcHMsIEdsb2JhbEN0eCB9IGZyb20gXCIuLy4uL2ludGVyZmFjZXNcIjtcbmltcG9ydCBHbG9iYWxDb250ZXh0IGZyb20gXCIuLy4uL2NvbnRleHQvR2xvYmFsXCI7XG5cbmNvbnN0IFN0b3J5ID0gKHByb3BzOiBTdG9yeVByb3BzKSA9PiB7XG5cdGNvbnN0IGdsb2JhbENvbnRleHQgPSB1c2VDb250ZXh0PEdsb2JhbEN0eD4oXG5cdFx0R2xvYmFsQ29udGV4dFxuXHQpO1xuXG5cdGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgbG9hZGVyLCBoZWFkZXIsIHN0b3J5U3R5bGVzIH0gPSBnbG9iYWxDb250ZXh0O1xuXG5cdGNvbnN0IHJlbmRlcmVyTWVzc2FnZUhhbmRsZXIgPSAodHlwZTogc3RyaW5nLCBkYXRhOiBhbnkpID0+IHtcblx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdGNhc2UgJ1VQREFURV9WSURFT19EVVJBVElPTic6XG5cdFx0XHRcdHByb3BzLmdldFZpZGVvRHVyYXRpb24oZGF0YS5kdXJhdGlvbik7XG5cdFx0XHRcdHJldHVybiB7IGFjazogJ09LJyBhcyAnT0snIH1cblx0XHR9XG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmIChwcm9wcy5pbmRleCA9PT0gcHJvcHMuY3VycmVudElkICYmIHByb3BzLnBsYXlTdGF0ZSkge1xuXHRcdFx0cHJvcHMuYWN0aW9uKCdwbGF5Jylcblx0XHR9XG5cdH0sIFtwcm9wcy5jdXJyZW50SWQsIHByb3BzLnBsYXlTdGF0ZV0pXG5cblx0Y29uc3QgZ2V0U3RvcnlDb250ZW50ID0gKCkgPT4ge1xuXHRcdGxldCBJbm5lckNvbnRlbnQgPSBwcm9wcy5zdG9yeS5jb250ZW50O1xuXHRcdGxldCBjb25maWcgPSB7IHdpZHRoLCBoZWlnaHQsIGxvYWRlciwgaGVhZGVyLCBzdG9yeVN0eWxlcyB9O1xuXHRcdHJldHVybiA8SW5uZXJDb250ZW50XG5cdFx0XHRhY3Rpb249e3Byb3BzLmFjdGlvbn1cblx0XHRcdGlzUGF1c2VkPXtwcm9wcy5wbGF5U3RhdGV9XG5cdFx0XHRzdG9yeT17cHJvcHMuc3Rvcnl9XG5cdFx0XHRjb25maWc9e2NvbmZpZ31cblx0XHRcdG1lc3NhZ2VIYW5kbGVyPXtyZW5kZXJlck1lc3NhZ2VIYW5kbGVyfVxuXHRcdC8+XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRzdHlsZT17e1xuXHRcdFx0XHQuLi5zdHlsZXMuc3RvcnksXG5cdFx0XHRcdHdpZHRoOiB3aWR0aCxcblx0XHRcdFx0aGVpZ2h0OiBoZWlnaHQsXG5cdFx0XHRcdHpJbmRleDogOTggLSBwcm9wcy5pbmRleCxcblx0XHRcdFx0YW5pbWF0aW9uOiBwcm9wcy5pbmRleCA8IHByb3BzLmN1cnJlbnRJZCA/ICcwLjVzIGZhZGVPdXQgZm9yd2FyZHMnIDogJydcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0e2dldFN0b3J5Q29udGVudCgpfVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuY29uc3Qgc3R5bGVzID0ge1xuXHRzdG9yeToge1xuXHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG5cdFx0b3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG5cdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIlxuXHR9LFxuXHRzdG9yeUNvbnRlbnQ6IHtcblx0XHR3aWR0aDogXCJhdXRvXCIsXG5cdFx0bWF4V2lkdGg6IFwiMTAwJVwiLFxuXHRcdG1heEhlaWdodDogXCIxMDAlXCIsXG5cdFx0bWFyZ2luOiBcImF1dG9cIlxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yeTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHbG9iYWxDdHggfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxDb250ZXh0ID0ge1xuXHRkZWZhdWx0SW50ZXJ2YWw6IDQwMDAsXG5cdHdpZHRoOiAzNjAsXG5cdGhlaWdodDogNjQwLFxufTtcblxuY29uc3QgR2xvYmFsQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8R2xvYmFsQ3R4Pihpbml0aWFsQ29udGV4dCk7XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbENvbnRleHQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQcm9ncmVzc0NvbnRleHQgfSBmcm9tICcuLy4uL2ludGVyZmFjZXMnXG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNvbnRleHQ8UHJvZ3Jlc3NDb250ZXh0Pih7XG4gICAgY3VycmVudElkOiAwLFxuICAgIHZpZGVvRHVyYXRpb246IDAsXG4gICAgYnVmZmVyQWN0aW9uOiBmYWxzZSxcbiAgICBwYXVzZTogZmFsc2UsXG4gICAgbmV4dDogKCkgPT4geyB9XG59KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuXHRTdG9yaWVzQ29udGV4dCBhcyBTdG9yaWVzQ29udGV4dEludGVyZmFjZSxcblx0U3RvcnksXG59IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbENvbnRleHQ6IHsgc3RvcmllczogU3RvcnlbXSB9ID0ge1xuXHRzdG9yaWVzOiBbXSxcbn07XG5cbmNvbnN0IFN0b3JpZXNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxTdG9yaWVzQ29udGV4dEludGVyZmFjZT4oXG5cdGluaXRpYWxDb250ZXh0XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yaWVzQ29udGV4dDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSZWFjdEluc3RhU3Rvcmllc1Byb3BzLCBHbG9iYWxDdHgsIFN0b3J5LCBUZXN0ZXIsIFJlbmRlcmVyIH0gZnJvbSAnLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL2NvbXBvbmVudHMvQ29udGFpbmVyJ1xuaW1wb3J0IEdsb2JhbENvbnRleHQgZnJvbSAnLi9jb250ZXh0L0dsb2JhbCdcbmltcG9ydCBTdG9yaWVzQ29udGV4dCBmcm9tICcuL2NvbnRleHQvU3Rvcmllcyc7XG5pbXBvcnQgeyBnZXRSZW5kZXJlciB9IGZyb20gJy4vdXRpbC9yZW5kZXJlcnMnXG5pbXBvcnQgeyByZW5kZXJlcnMgYXMgZGVmYXVsdFJlbmRlcmVycyB9IGZyb20gJy4vcmVuZGVyZXJzL2luZGV4JztcbmltcG9ydCB3aXRoSGVhZGVyIGZyb20gJy4vcmVuZGVyZXJzL3dyYXBwZXJzL3dpdGhIZWFkZXInXG5pbXBvcnQgd2l0aFNlZU1vcmUgZnJvbSAnLi9yZW5kZXJlcnMvd3JhcHBlcnMvd2l0aFNlZU1vcmUnXG5cbmNvbnN0IFJlYWN0SW5zdGFTdG9yaWVzID0gZnVuY3Rpb24gKHByb3BzOiBSZWFjdEluc3RhU3Rvcmllc1Byb3BzKSB7XG4gICAgbGV0IHJlbmRlcmVycyA9IHByb3BzLnJlbmRlcmVycyA/IHByb3BzLnJlbmRlcmVycy5jb25jYXQoZGVmYXVsdFJlbmRlcmVycykgOiBkZWZhdWx0UmVuZGVyZXJzO1xuICAgIGxldCBjb250ZXh0OiBHbG9iYWxDdHggPSB7XG4gICAgICAgIHdpZHRoOiBwcm9wcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwcm9wcy5oZWlnaHQsXG4gICAgICAgIGxvYWRlcjogcHJvcHMubG9hZGVyLFxuICAgICAgICBoZWFkZXI6IHByb3BzLmhlYWRlcixcbiAgICAgICAgc3RvcnlDb250YWluZXJTdHlsZXM6IHByb3BzLnN0b3J5Q29udGFpbmVyU3R5bGVzLFxuICAgICAgICBzdG9yeVN0eWxlczogcHJvcHMuc3RvcnlTdHlsZXMsXG4gICAgICAgIGxvb3A6IHByb3BzLmxvb3AsXG4gICAgICAgIGRlZmF1bHRJbnRlcnZhbDogcHJvcHMuZGVmYXVsdEludGVydmFsLFxuICAgICAgICBpc1BhdXNlZDogcHJvcHMuaXNQYXVzZWQsXG4gICAgICAgIHJlc3RhcnRPblBhdXNlOiBwcm9wcy5yZXN0YXJ0T25QYXVzZSxcbiAgICAgICAgY3VycmVudEluZGV4OiBwcm9wcy5jdXJyZW50SW5kZXgsXG4gICAgICAgIG9uU3RvcnlTdGFydDogcHJvcHMub25TdG9yeVN0YXJ0LFxuICAgICAgICBvblN0b3J5RW5kOiBwcm9wcy5vblN0b3J5RW5kLFxuICAgICAgICBvbkFsbFN0b3JpZXNFbmQ6IHByb3BzLm9uQWxsU3Rvcmllc0VuZCxcbiAgICAgICAga2V5Ym9hcmROYXZpZ2F0aW9uOiBwcm9wcy5rZXlib2FyZE5hdmlnYXRpb24sXG4gICAgfVxuICAgIGNvbnN0IFtzdG9yaWVzLCBzZXRTdG9yaWVzXSA9IHVzZVN0YXRlPHsgc3RvcmllczogU3RvcnlbXSB9Pih7IHN0b3JpZXM6IGdlbmVyYXRlU3Rvcmllcyhwcm9wcy5zdG9yaWVzLCByZW5kZXJlcnMpIH0pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFN0b3JpZXMoeyBzdG9yaWVzOiBnZW5lcmF0ZVN0b3JpZXMocHJvcHMuc3RvcmllcywgcmVuZGVyZXJzKSB9KTtcbiAgICB9LCBbcHJvcHMuc3RvcmllcywgcHJvcHMucmVuZGVyZXJzXSk7XG5cbiAgICByZXR1cm4gPEdsb2JhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHR9PlxuICAgICAgICA8U3Rvcmllc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0b3JpZXN9PlxuICAgICAgICAgICAgPENvbnRhaW5lciAvPlxuICAgICAgICA8L1N0b3JpZXNDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvR2xvYmFsQ29udGV4dC5Qcm92aWRlcj5cbn1cblxuY29uc3QgZ2VuZXJhdGVTdG9yaWVzID0gKHN0b3JpZXM6IFN0b3J5W10sIHJlbmRlcmVyczogeyByZW5kZXJlcjogUmVuZGVyZXIsIHRlc3RlcjogVGVzdGVyIH1bXSkgPT4ge1xuICAgIHJldHVybiBzdG9yaWVzLm1hcChzID0+IHtcbiAgICAgICAgbGV0IHN0b3J5OiBTdG9yeSA9IHt9O1xuXG4gICAgICAgIGlmICh0eXBlb2YgcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHN0b3J5LnVybCA9IHM7XG4gICAgICAgICAgICBzdG9yeS50eXBlID0gJ2ltYWdlJztcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHN0b3J5ID0gT2JqZWN0LmFzc2lnbihzdG9yeSwgcyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVuZGVyZXIgPSBnZXRSZW5kZXJlcihzdG9yeSwgcmVuZGVyZXJzKTtcbiAgICAgICAgc3Rvcnkub3JpZ2luYWxDb250ZW50ID0gc3RvcnkuY29udGVudDtcbiAgICAgICAgc3RvcnkuY29udGVudCA9IHJlbmRlcmVyO1xuICAgICAgICByZXR1cm4gc3RvcnlcbiAgICB9KVxufTtcblxuUmVhY3RJbnN0YVN0b3JpZXMuZGVmYXVsdFByb3BzID0ge1xuICAgIHdpZHRoOiAzNjAsXG4gICAgaGVpZ2h0OiA2NDAsXG4gICAgZGVmYXVsdEludGVydmFsOiA0MDAwXG59XG5cbmV4cG9ydCBjb25zdCBXaXRoSGVhZGVyID0gd2l0aEhlYWRlcjtcbmV4cG9ydCBjb25zdCBXaXRoU2VlTW9yZSA9IHdpdGhTZWVNb3JlO1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdEluc3RhU3Rvcmllc1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVuZGVyZXIsIFRlc3RlciB9IGZyb20gJy4vLi4vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBjb25zdCByZW5kZXJlcjogUmVuZGVyZXIgPSAocHJvcHMpID0+IHtcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIXByb3BzLmlzUGF1c2VkKSB7XG4gICAgICAgICAgICBwcm9wcy5hY3Rpb24oJ3BsYXknKTtcbiAgICAgICAgfVxuICAgIH0sIFtwcm9wcy5zdG9yeV0pXG4gICAgY29uc3QgQ29udGVudCA9IHByb3BzLnN0b3J5Lm9yaWdpbmFsQ29udGVudDtcbiAgICByZXR1cm4gPENvbnRlbnQgey4uLnByb3BzfSAvPlxufVxuXG5leHBvcnQgY29uc3QgdGVzdGVyOiBUZXN0ZXIgPSAoc3RvcnkpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb25kaXRpb246ICEhc3RvcnkuY29udGVudCxcbiAgICAgICAgcHJpb3JpdHk6IDJcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICByZW5kZXJlcixcbiAgICB0ZXN0ZXJcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlbmRlcmVyLCBUZXN0ZXIgfSBmcm9tICcuLy4uL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY29uc3QgcmVuZGVyZXI6IFJlbmRlcmVyID0gKHsgc3RvcnksIGFjdGlvbiB9KSA9PiB7XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2ltYWdlIHBsYXllcicpXG4gICAgICAgIGFjdGlvbigncGxheScpO1xuICAgIH0sIFtzdG9yeV0pXG5cbiAgICByZXR1cm4gPGRpdiBzdHlsZT17c3R5bGVzLnN0b3J5Q29udGVudH0+XG4gICAgICAgIDxwIHN0eWxlPXtzdHlsZXMudGV4dH0+VGhpcyBzdG9yeSBjb3VsZCBub3QgYmUgbG9hZGVkLjwvcD5cbiAgICA8L2Rpdj5cbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIHN0b3J5Q29udGVudDoge1xuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIG1heEhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgIG1hcmdpbjogXCJhdXRvXCJcbiAgICB9LFxuICAgIHRleHQ6IHtcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIHdpZHRoOiAnOTAlJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0bydcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgdGVzdGVyOiBUZXN0ZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29uZGl0aW9uOiB0cnVlLFxuICAgICAgICBwcmlvcml0eTogMVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICByZW5kZXJlcixcbiAgICB0ZXN0ZXJcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTcGlubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvU3Bpbm5lcic7XG5pbXBvcnQgeyBSZW5kZXJlciwgVGVzdGVyIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzJztcbmltcG9ydCBXaXRoSGVhZGVyIGZyb20gJy4vd3JhcHBlcnMvd2l0aEhlYWRlcic7XG5pbXBvcnQgV2l0aFNlZU1vcmUgZnJvbSAnLi93cmFwcGVycy93aXRoU2VlTW9yZSc7XG5cbmV4cG9ydCBjb25zdCByZW5kZXJlcjogUmVuZGVyZXIgPSAoeyBzdG9yeSwgYWN0aW9uLCBpc1BhdXNlZCwgY29uZmlnIH0pID0+IHtcbiAgICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgbG9hZGVyLCBzdG9yeVN0eWxlcyB9ID0gY29uZmlnO1xuICAgIGxldCBjb21wdXRlZFN0eWxlcyA9IHtcbiAgICAgICAgLi4uc3R5bGVzLnN0b3J5Q29udGVudCxcbiAgICAgICAgLi4uKHN0b3J5U3R5bGVzIHx8IHt9KVxuICAgIH1cblxuICAgIGNvbnN0IGltYWdlTG9hZGVkID0gKCkgPT4ge1xuICAgICAgICBzZXRMb2FkZWQodHJ1ZSk7XG4gICAgICAgIGFjdGlvbigncGxheScpO1xuICAgIH1cblxuICAgIHJldHVybiA8V2l0aEhlYWRlciBzdG9yeT17c3Rvcnl9IGdsb2JhbEhlYWRlcj17Y29uZmlnLmhlYWRlcn0+XG4gICAgICAgIDxXaXRoU2VlTW9yZSBzdG9yeT17c3Rvcnl9IGFjdGlvbj17YWN0aW9ufT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGltZyBzdHlsZT17Y29tcHV0ZWRTdHlsZXN9IHNyYz17c3RvcnkudXJsfSBvbkxvYWQ9e2ltYWdlTG9hZGVkfSAvPlxuICAgICAgICAgICAgICAgIHshbG9hZGVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwgMCwgMCwgMC45KVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogOSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNjY2NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRlciB8fCA8U3Bpbm5lciAvPn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1dpdGhTZWVNb3JlPlxuICAgIDwvV2l0aEhlYWRlcj5cbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIHN0b3J5OiB7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIlxuICAgIH0sXG4gICAgc3RvcnlDb250ZW50OiB7XG4gICAgICAgIHdpZHRoOiBcImF1dG9cIixcbiAgICAgICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBtYXhIZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICBtYXJnaW46IFwiYXV0b1wiXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHRlc3RlcjogVGVzdGVyID0gKHN0b3J5KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29uZGl0aW9uOiAhc3RvcnkuY29udGVudCAmJiAoIXN0b3J5LnR5cGUgfHwgc3RvcnkudHlwZSA9PT0gJ2ltYWdlJyksXG4gICAgICAgIHByaW9yaXR5OiAyXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcmVuZGVyZXIsXG4gICAgdGVzdGVyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9TcGlubmVyJztcbmltcG9ydCB7IFJlbmRlcmVyLCBUZXN0ZXIgfSBmcm9tICcuLy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IFdpdGhIZWFkZXIgZnJvbSAnLi93cmFwcGVycy93aXRoSGVhZGVyJztcbmltcG9ydCBXaXRoU2VlTW9yZSBmcm9tICcuL3dyYXBwZXJzL3dpdGhTZWVNb3JlJztcblxuZXhwb3J0IGNvbnN0IHJlbmRlcmVyOiBSZW5kZXJlciA9ICh7IHN0b3J5LCBhY3Rpb24sIGlzUGF1c2VkLCBjb25maWcsIG1lc3NhZ2VIYW5kbGVyIH0pID0+IHtcbiAgICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFttdXRlZCwgc2V0TXV0ZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgbG9hZGVyLCBzdG9yeVN0eWxlcyB9ID0gY29uZmlnO1xuXG4gICAgbGV0IGNvbXB1dGVkU3R5bGVzID0ge1xuICAgICAgICAuLi5zdHlsZXMuc3RvcnlDb250ZW50LFxuICAgICAgICAuLi4oc3RvcnlTdHlsZXMgfHwge30pXG4gICAgfVxuXG4gICAgbGV0IHZpZCA9IFJlYWN0LnVzZVJlZjxIVE1MVmlkZW9FbGVtZW50PihudWxsKTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh2aWQuY3VycmVudCkge1xuICAgICAgICAgICAgaWYgKGlzUGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgdmlkLmN1cnJlbnQucGF1c2UoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmlkLmN1cnJlbnQucGxheSgpLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbaXNQYXVzZWRdKTtcblxuICAgIGNvbnN0IG9uV2FpdGluZyA9ICgpID0+IHtcbiAgICAgICAgYWN0aW9uKFwicGF1c2VcIiwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgY29uc3Qgb25QbGF5aW5nID0gKCkgPT4ge1xuICAgICAgICBhY3Rpb24oXCJwbGF5XCIsIHRydWUpO1xuICAgIH1cblxuICAgIGNvbnN0IHZpZGVvTG9hZGVkID0gKCkgPT4ge1xuICAgICAgICBtZXNzYWdlSGFuZGxlcignVVBEQVRFX1ZJREVPX0RVUkFUSU9OJywgeyBkdXJhdGlvbjogdmlkLmN1cnJlbnQuZHVyYXRpb24gfSk7XG4gICAgICAgIHNldExvYWRlZCh0cnVlKTtcbiAgICAgICAgdmlkLmN1cnJlbnQucGxheSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgYWN0aW9uKCdwbGF5Jyk7XG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIHNldE11dGVkKHRydWUpO1xuICAgICAgICAgICAgdmlkLmN1cnJlbnQucGxheSgpLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFjdGlvbigncGxheScpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDxXaXRoSGVhZGVyIHN0b3J5PXtzdG9yeX0gZ2xvYmFsSGVhZGVyPXtjb25maWcuaGVhZGVyfT5cbiAgICAgICAgPFdpdGhTZWVNb3JlIHN0b3J5PXtzdG9yeX0gYWN0aW9uPXthY3Rpb259PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnZpZGVvQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8dmlkZW9cbiAgICAgICAgICAgICAgICAgICAgcmVmPXt2aWR9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtjb21wdXRlZFN0eWxlc31cbiAgICAgICAgICAgICAgICAgICAgc3JjPXtzdG9yeS51cmx9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgb25Mb2FkZWREYXRhPXt2aWRlb0xvYWRlZH1cbiAgICAgICAgICAgICAgICAgICAgcGxheXNJbmxpbmVcbiAgICAgICAgICAgICAgICAgICAgb25XYWl0aW5nPXtvbldhaXRpbmd9XG4gICAgICAgICAgICAgICAgICAgIG9uUGxheWluZz17b25QbGF5aW5nfVxuICAgICAgICAgICAgICAgICAgICBtdXRlZD17bXV0ZWR9XG4gICAgICAgICAgICAgICAgICAgIGF1dG9QbGF5XG4gICAgICAgICAgICAgICAgICAgIHdlYmtpdC1wbGF5c2lubGluZT1cInRydWVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgeyFsb2FkZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgwLCAwLCAwLCAwLjkpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4OiA5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2NjY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGVyIHx8IDxTcGlubmVyIC8+fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvV2l0aFNlZU1vcmU+XG4gICAgPC9XaXRoSGVhZGVyPlxufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgc3RvcnlDb250ZW50OiB7XG4gICAgICAgIHdpZHRoOiBcImF1dG9cIixcbiAgICAgICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBtYXhIZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICBtYXJnaW46IFwiYXV0b1wiXG4gICAgfSxcbiAgICB2aWRlb0NvbnRhaW5lcjoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgdGVzdGVyOiBUZXN0ZXIgPSAoc3RvcnkpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb25kaXRpb246IHN0b3J5LnR5cGUgPT09ICd2aWRlbycsXG4gICAgICAgIHByaW9yaXR5OiAyXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcmVuZGVyZXIsXG4gICAgdGVzdGVyXG59XG4iLCJpbXBvcnQgaW1hZ2UgZnJvbSAnLi9JbWFnZSc7XG5pbXBvcnQgdmlkZW8gZnJvbSAnLi9WaWRlbyc7XG5pbXBvcnQgZGVmYXVsdFJlbmRlcmVyIGZyb20gJy4vRGVmYXVsdCc7XG5pbXBvcnQgYXV0b3BsYXlDb250ZW50IGZyb20gJy4vQXV0b1BsYXlDb250ZW50JztcblxuZXhwb3J0IGNvbnN0IHJlbmRlcmVycyA9IFtpbWFnZSwgdmlkZW8sIGF1dG9wbGF5Q29udGVudCwgZGVmYXVsdFJlbmRlcmVyXTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTdG9yeSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi8uLi8uLi9jb21wb25lbnRzL0hlYWRlclwiO1xuXG5jb25zdCB3aXRoSGVhZGVyOiBSZWFjdC5GQzx7IHN0b3J5OiBTdG9yeSwgZ2xvYmFsSGVhZGVyOiBGdW5jdGlvbiB9PiA9ICh7IHN0b3J5LCBnbG9iYWxIZWFkZXIsIGNoaWxkcmVuIH0pID0+IHtcbiAgICByZXR1cm4gPD5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICB7c3RvcnkuaGVhZGVyICYmIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgbGVmdDogMTIsIHRvcDogMjAsIHpJbmRleDogMTkgfX0+XG4gICAgICAgICAgICAgICAge3R5cGVvZiBzdG9yeSA9PT0gXCJvYmplY3RcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsSGVhZGVyID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsSGVhZGVyKHN0b3J5LmhlYWRlcilcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9e3N0b3J5LmhlYWRlci5oZWFkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJoZWFkaW5nPXtzdG9yeS5oZWFkZXIuc3ViaGVhZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZUltYWdlPXtzdG9yeS5oZWFkZXIucHJvZmlsZUltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICA8Lz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEhlYWRlcjsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50VHlwZSwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBY3Rpb24sIFNlZU1vcmVQcm9wcywgU3RvcnkgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcbmltcG9ydCBTZWVNb3JlIGZyb20gXCIuLy4uLy4uL2NvbXBvbmVudHMvU2VlTW9yZVwiO1xuXG5jb25zdCB3aXRoU2VlTW9yZTogUmVhY3QuRkM8e1xuICAgIHN0b3J5OiBTdG9yeSxcbiAgICBhY3Rpb246IEFjdGlvbixcbiAgICBjdXN0b21Db2xsYXBzZWQ/OiBTZWVNb3JlUHJvcHNbXCJjdXN0b21Db2xsYXBzZWRcIl1cbn0+ID0gKHsgc3RvcnksIGFjdGlvbiwgY3VzdG9tQ29sbGFwc2VkLCBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgW3Nob3dNb3JlLCBzZXRTaG93TW9yZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgdG9nZ2xlTW9yZSA9IChzaG93KSA9PiB7XG4gICAgICAgIGFjdGlvbihzaG93ID8gJ3BhdXNlJyA6ICdwbGF5Jyk7XG4gICAgICAgIHNldFNob3dNb3JlKHNob3cpO1xuICAgIH1cbiAgICBjb25zdCBDb2xsYXBzZWRDb21wb25lbnQgPSBTZWVNb3JlO1xuICAgIHJldHVybiA8PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtzdG9yeS5zZWVNb3JlICYmIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICBib3R0b206IHNob3dNb3JlID8gJ3Vuc2V0JyA6IDAsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogOTk5OSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHNob3dNb3JlID8gJzEwMCUnIDogJ2F1dG8nXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q29sbGFwc2VkQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbj17YWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVNb3JlPXt0b2dnbGVNb3JlfVxuICAgICAgICAgICAgICAgICAgICBzaG93Q29udGVudD17c2hvd01vcmV9XG4gICAgICAgICAgICAgICAgICAgIHNlZU1vcmVDb250ZW50PXtzdG9yeS5zZWVNb3JlfVxuICAgICAgICAgICAgICAgICAgICBjdXN0b21Db2xsYXBzZWQ9e2N1c3RvbUNvbGxhcHNlZCB8fCBzdG9yeS5zZWVNb3JlQ29sbGFwc2VkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICA8Lz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNlZU1vcmU7IiwiaW1wb3J0IHsgUmVuZGVyZXIsIFN0b3J5LCBUZXN0ZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0UmVuZGVyZXIgPSAoc3Rvcnk6IFN0b3J5LCByZW5kZXJlcnM6IHsgcmVuZGVyZXI6IFJlbmRlcmVyLCB0ZXN0ZXI6IFRlc3RlciB9W10pOiBSZW5kZXJlciA9PiB7XG4gICAgbGV0IHByb2JhYmxlID0gcmVuZGVyZXJzLm1hcChyID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnIsXG4gICAgICAgICAgICB0ZXN0ZXJSZXN1bHQ6IHIudGVzdGVyKHN0b3J5KVxuICAgICAgICB9XG4gICAgfSkuZmlsdGVyKHIgPT4gci50ZXN0ZXJSZXN1bHQuY29uZGl0aW9uKTtcbiAgICBwcm9iYWJsZS5zb3J0KChhLCBiKSA9PiBiLnRlc3RlclJlc3VsdC5wcmlvcml0eSAtIGEudGVzdGVyUmVzdWx0LnByaW9yaXR5KTtcbiAgICByZXR1cm4gcHJvYmFibGVbMF0ucmVuZGVyZXI7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187Il0sInNvdXJjZVJvb3QiOiIifQ==
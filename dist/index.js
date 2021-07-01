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

    if (action === 'next') {
      return next();
    }

    if (action === 'previous') {
      return previous();
    }

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
    toggleState('play');
  };

  var next = function next() {
    if (isMounted.current) {
      if (loop) {
        updateNextStoryIdForLoop();
      } else {
        updateNextStoryId();
      }

      toggleState('play');
    }
  };

  var updateNextStoryIdForLoop = function updateNextStoryIdForLoop() {
    setCurrentIdWrapper(function (prev) {
      return (prev + 1) % stories.length;
    });
  };

  var updateNextStoryId = function updateNextStoryId() {
    if (currentId === stories.length - 1) {
      return;
    }

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
      messageHandler: rendererMessageHandler,
      active: props.index === props.currentId
    });
  };

  return react_1.default.createElement("div", {
    style: Object.assign(Object.assign({}, styles.story), {
      width: width,
      height: height,
      zIndex: props.index === props.currentId ? 98 : 97 - props.index
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TdG9yaWVzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9TdG9yaWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvYXNzZXRzL3B1ZmYuc3ZnIiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29tcG9uZW50cy9Db250YWluZXIudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29tcG9uZW50cy9Qcm9ncmVzcy50c3giLCJ3ZWJwYWNrOi8vU3Rvcmllcy8uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzQXJyYXkudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29tcG9uZW50cy9Qcm9ncmVzc1dyYXBwZXIudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29tcG9uZW50cy9TZWVNb3JlLnRzeCIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL2NvbXBvbmVudHMvU3Bpbm5lci50c3giLCJ3ZWJwYWNrOi8vU3Rvcmllcy8uL3NyYy9jb21wb25lbnRzL1N0b3J5LnRzeCIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL2NvbnRleHQvR2xvYmFsLnRzIiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29udGV4dC9Qcm9ncmVzcy50cyIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL2NvbnRleHQvU3Rvcmllcy50cyIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL3JlbmRlcmVycy9BdXRvUGxheUNvbnRlbnQudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvcmVuZGVyZXJzL0RlZmF1bHQudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvcmVuZGVyZXJzL0ltYWdlLnRzeCIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL3JlbmRlcmVycy9WaWRlby50c3giLCJ3ZWJwYWNrOi8vU3Rvcmllcy8uL3NyYy9yZW5kZXJlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vU3Rvcmllcy8uL3NyYy9yZW5kZXJlcnMvd3JhcHBlcnMvd2l0aEhlYWRlci50c3giLCJ3ZWJwYWNrOi8vU3Rvcmllcy8uL3NyYy9yZW5kZXJlcnMvd3JhcHBlcnMvd2l0aFNlZU1vcmUudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvdXRpbC9yZW5kZXJlcnMudHN4Iiwid2VicGFjazovL1N0b3JpZXMvZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJhbWRcIjpcIlJlYWN0XCIsXCJyb290XCI6XCJSZWFjdFwifSJdLCJuYW1lcyI6WyJzdHlsZXMiLCJwcm9wcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNE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RUFBRSxlQUFlLElBQUksS0FBSyxDQUFDO0FBTDNCLEdBQW5CLENBVkosQ0FIRCxDQUFQO0FBdUJILENBbENEOztBQW9DQSxrQkFBZSxXQUFmLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q2Esc0JBQWMsVUFBQyxLQUFELEVBQWUsU0FBZixFQUFnRjtBQUN2RyxNQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsR0FBVixDQUFjLFdBQUMsRUFBRztBQUM3QiwyQ0FDTyxDQURQLEdBQ1E7QUFDSixrQkFBWSxFQUFFLENBQUMsQ0FBQyxNQUFGLENBQVMsS0FBVDtBQURWLEtBRFI7QUFJSCxHQUxjLEVBS1osTUFMWSxDQUtMLFdBQUM7QUFBQSxXQUFJLENBQUMsQ0FBQyxZQUFGLENBQWUsU0FBbkI7QUFBQSxHQUxJLENBQWY7QUFNQSxVQUFRLENBQUMsSUFBVCxDQUFjLFVBQUMsQ0FBRCxFQUFJLENBQUo7QUFBQSxXQUFVLENBQUMsQ0FBQyxZQUFGLENBQWUsUUFBZixHQUEwQixDQUFDLENBQUMsWUFBRixDQUFlLFFBQW5EO0FBQUEsR0FBZDtBQUNBLFNBQU8sUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZLFFBQW5CO0FBQ0gsQ0FUWSxDOzs7Ozs7Ozs7OztBQ0ZiLG1EIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJTdG9yaWVzXCIsIFtcIlJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlN0b3JpZXNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiU3Rvcmllc1wiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBkZWZhdWx0ICgoe1xuICBzdHlsZXMgPSB7fSxcbiAgLi4ucHJvcHNcbn0pID0+IDxzdmcgd2lkdGg9XCI0NFwiIGhlaWdodD1cIjQ0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHN0cm9rZT1cIiNmZmZcIiB7Li4ucHJvcHN9PjxnIGZpbGw9XCJub25lXCIgZmlsbFJ1bGU9XCJldmVub2RkXCIgc3Ryb2tlV2lkdGg9XCIyXCI+PGNpcmNsZSBjeD1cIjIyXCIgY3k9XCIyMlwiIHI9XCIxXCI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cInJcIiBiZWdpbj1cIjBzXCIgZHVyPVwiMS44c1wiIHZhbHVlcz1cIjE7IDIwXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7IDFcIiBrZXlTcGxpbmVzPVwiMC4xNjUsIDAuODQsIDAuNDQsIDFcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiAvPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJzdHJva2Utb3BhY2l0eVwiIGJlZ2luPVwiMHNcIiBkdXI9XCIxLjhzXCIgdmFsdWVzPVwiMTsgMFwiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOyAxXCIga2V5U3BsaW5lcz1cIjAuMywgMC42MSwgMC4zNTUsIDFcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiAvPjwvY2lyY2xlPjxjaXJjbGUgY3g9XCIyMlwiIGN5PVwiMjJcIiByPVwiMVwiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJyXCIgYmVnaW49XCItMC45c1wiIGR1cj1cIjEuOHNcIiB2YWx1ZXM9XCIxOyAyMFwiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOyAxXCIga2V5U3BsaW5lcz1cIjAuMTY1LCAwLjg0LCAwLjQ0LCAxXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgLz48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwic3Ryb2tlLW9wYWNpdHlcIiBiZWdpbj1cIi0wLjlzXCIgZHVyPVwiMS44c1wiIHZhbHVlcz1cIjE7IDBcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDsgMVwiIGtleVNwbGluZXM9XCIwLjMsIDAuNjEsIDAuMzU1LCAxXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgLz48L2NpcmNsZT48L2c+PC9zdmc+KTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgR2xvYmFsQ29udGV4dCBmcm9tICcuLy4uL2NvbnRleHQvR2xvYmFsJ1xuaW1wb3J0IFN0b3JpZXNDb250ZXh0IGZyb20gJy4vLi4vY29udGV4dC9TdG9yaWVzJ1xuaW1wb3J0IFByb2dyZXNzQ29udGV4dCBmcm9tICcuLy4uL2NvbnRleHQvUHJvZ3Jlc3MnXG5pbXBvcnQgU3RvcnkgZnJvbSAnLi9TdG9yeSdcbmltcG9ydCBQcm9ncmVzc0FycmF5IGZyb20gJy4vUHJvZ3Jlc3NBcnJheSdcbmltcG9ydCB7IEdsb2JhbEN0eCwgU3Rvcmllc0NvbnRleHQgYXMgU3Rvcmllc0NvbnRleHRJbnRlcmZhY2UgfSBmcm9tICcuLy4uL2ludGVyZmFjZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBbY3VycmVudElkLCBzZXRDdXJyZW50SWRdID0gdXNlU3RhdGU8bnVtYmVyPigwKVxuICAgIGNvbnN0IFtwYXVzZSwgc2V0UGF1c2VdID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSlcbiAgICBjb25zdCBbYnVmZmVyQWN0aW9uLCBzZXRCdWZmZXJBY3Rpb25dID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSlcbiAgICBjb25zdCBbdmlkZW9EdXJhdGlvbiwgc2V0VmlkZW9EdXJhdGlvbl0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXG5cbiAgICBsZXQgbW91c2Vkb3duSWQgPSB1c2VSZWY8YW55PigpO1xuICAgIGxldCBpc01vdW50ZWQgPSB1c2VSZWY8Ym9vbGVhbj4odHJ1ZSk7XG4gICAgbGV0IG92ZXJsYXkgPSB1c2VSZWY8YW55PigpO1xuXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBsb29wLCBjdXJyZW50SW5kZXgsIGlzUGF1c2VkLCBrZXlib2FyZE5hdmlnYXRpb24sIHN0b3J5Q29udGFpbmVyU3R5bGVzID0ge30gfSA9IHVzZUNvbnRleHQ8R2xvYmFsQ3R4PihHbG9iYWxDb250ZXh0KTtcbiAgICBjb25zdCB7IHN0b3JpZXMgfSA9IHVzZUNvbnRleHQ8U3Rvcmllc0NvbnRleHRJbnRlcmZhY2U+KFN0b3JpZXNDb250ZXh0KTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgY3VycmVudEluZGV4ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA+PSAwICYmIGN1cnJlbnRJbmRleCA8IHN0b3JpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudElkV3JhcHBlcigoKSA9PiBjdXJyZW50SW5kZXgpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0luZGV4IG91dCBvZiBib3VuZHMuIEN1cnJlbnQgaW5kZXggd2FzIHNldCB0byB2YWx1ZSBtb3JlIHRoYW4gdGhlIGxlbmd0aCBvZiBzdG9yaWVzIGFycmF5LicsIGN1cnJlbnRJbmRleClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtjdXJyZW50SW5kZXhdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBpc1BhdXNlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICBzZXRQYXVzZShpc1BhdXNlZClcbiAgICAgICAgfVxuICAgIH0sIFtpc1BhdXNlZF0pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBpc0NsaWVudCA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpO1xuICAgICAgICBpZiAoaXNDbGllbnQgJiYgKHR5cGVvZiBrZXlib2FyZE5hdmlnYXRpb24gPT09ICdib29sZWFuJyAmJiBrZXlib2FyZE5hdmlnYXRpb24pKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBba2V5Ym9hcmROYXZpZ2F0aW9uXSk7XG5cbiAgICAvLyBDbGVhbnVwIG1vdW50ZWQgc3RhdGUgLSBmb3IgaXNzdWUgIzEzMCAoaHR0cHM6Ly9naXRodWIuY29tL21vaGl0azA1L3JlYWN0LWluc3RhLXN0b3JpZXMvaXNzdWVzLzEzMClcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgaXNNb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICAgICAgICBwcmV2aW91cygpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICAgICAgbmV4dCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGVTdGF0ZSA9IChhY3Rpb246IHN0cmluZywgYnVmZmVyQWN0aW9uPzogYm9vbGVhbikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnY2FsbGluZyBhY3Rpb24nLCBhY3Rpb24pXG4gICAgICAgIGlmIChhY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgICAgICAgcmV0dXJuIG5leHQoKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ3ByZXZpb3VzJykge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzKClcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFBhdXNlKGFjdGlvbiA9PT0gJ3BhdXNlJylcbiAgICAgICAgc2V0QnVmZmVyQWN0aW9uKCEhYnVmZmVyQWN0aW9uKVxuICAgIH1cblxuICAgIGNvbnN0IHNldEN1cnJlbnRJZFdyYXBwZXIgPSAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgc2V0Q3VycmVudElkKGNhbGxiYWNrKTtcbiAgICAgICAgdG9nZ2xlU3RhdGUoJ3BhdXNlJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJldmlvdXMgPSAoKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRJZFdyYXBwZXIocHJldiA9PiBwcmV2ID4gMCA/IHByZXYgLSAxIDogcHJldilcbiAgICAgICAgdG9nZ2xlU3RhdGUoJ3BsYXknKVxuICAgIH1cblxuICAgIGNvbnN0IG5leHQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpc01vdW50ZWQuY3VycmVudCkge1xuICAgICAgICAgICAgaWYgKGxvb3ApIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVOZXh0U3RvcnlJZEZvckxvb3AoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVOZXh0U3RvcnlJZCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2dnbGVTdGF0ZSgncGxheScpXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlTmV4dFN0b3J5SWRGb3JMb29wID0gKCkgPT4ge1xuICAgICAgICBzZXRDdXJyZW50SWRXcmFwcGVyKHByZXYgPT4gKHByZXYgKyAxKSAlIHN0b3JpZXMubGVuZ3RoKVxuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZU5leHRTdG9yeUlkID0gKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudElkID09PSBzdG9yaWVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHNldEN1cnJlbnRJZFdyYXBwZXIocHJldiA9PiB7XG4gICAgICAgICAgICBpZiAocHJldiA8IHN0b3JpZXMubGVuZ3RoIC0gMSkgcmV0dXJuIHByZXYgKyAxXG4gICAgICAgICAgICByZXR1cm4gcHJldlxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGRlYm91bmNlUGF1c2UgPSAoZTogUmVhY3QuTW91c2VFdmVudCB8IFJlYWN0LlRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIG1vdXNlZG93bklkLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRvZ2dsZVN0YXRlKCdwYXVzZScpXG4gICAgICAgIH0sIDIwMClcbiAgICB9XG5cbiAgICBjb25zdCBtb3VzZVVwID0gKHR5cGU6IHN0cmluZykgPT4gKGU6IFJlYWN0Lk1vdXNlRXZlbnQgfCBSZWFjdC5Ub3VjaEV2ZW50KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBtb3VzZWRvd25JZC5jdXJyZW50ICYmIGNsZWFyVGltZW91dChtb3VzZWRvd25JZC5jdXJyZW50KVxuICAgICAgICBpZiAocGF1c2UpIHtcbiAgICAgICAgICAgIHRvZ2dsZVN0YXRlKCdwbGF5JylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHR5cGUgPT09ICduZXh0JyA/IG5leHQoKSA6IHByZXZpb3VzKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFZpZGVvRHVyYXRpb24gPSAoZHVyYXRpb246IG51bWJlcikgPT4ge1xuICAgICAgICBzZXRWaWRlb0R1cmF0aW9uKGR1cmF0aW9uICogMTAwMClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IC4uLnN0b3J5Q29udGFpbmVyU3R5bGVzLCAuLi5zdHlsZXMuY29udGFpbmVyLCAuLi57IHdpZHRoLCBoZWlnaHQgfSB9fT5cbiAgICAgICAgICAgIDxQcm9ncmVzc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcbiAgICAgICAgICAgICAgICBidWZmZXJBY3Rpb246IGJ1ZmZlckFjdGlvbixcbiAgICAgICAgICAgICAgICB2aWRlb0R1cmF0aW9uOiB2aWRlb0R1cmF0aW9uLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRJZCxcbiAgICAgICAgICAgICAgICBwYXVzZSxcbiAgICAgICAgICAgICAgICBuZXh0XG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NBcnJheSAvPlxuICAgICAgICAgICAgPC9Qcm9ncmVzc0NvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgICAgICB7c3Rvcmllcy5tYXAoXG4gICAgICAgICAgICAgICAgKHN0b3J5LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8U3RvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17dG9nZ2xlU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXJBY3Rpb249e2J1ZmZlckFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlTdGF0ZT17cGF1c2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SWQ9e2N1cnJlbnRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3J5PXtzdG9yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFZpZGVvRHVyYXRpb249e2dldFZpZGVvRHVyYXRpb259XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgY29udGFpbmVyOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGJhY2tncm91bmQ6ICcjMTExJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICB9LFxuICAgIG92ZXJsYXk6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGhlaWdodDogJ2luaGVyaXQnLFxuICAgICAgICB3aWR0aDogJ2luaGVyaXQnLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBIZWFkZXJQcm9wcyB9IGZyb20gJy4vLi4vaW50ZXJmYWNlcydcblxuY29uc3QgSGVhZGVyID0gKHsgcHJvZmlsZUltYWdlLCBoZWFkaW5nLCBzdWJoZWFkaW5nIH06IEhlYWRlclByb3BzKSA9PlxuICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAge3Byb2ZpbGVJbWFnZSAmJiA8aW1nIHN0eWxlPXtzdHlsZXMuaW1nfSBzcmM9e3Byb2ZpbGVJbWFnZX0gLz59XG4gICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMudGV4dH0+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLmhlYWRpbmd9PntoZWFkaW5nfTwvcD5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuc3ViaGVhZGluZ30+e3N1YmhlYWRpbmd9PC9wPlxuICAgICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBtYWluOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgICB9LFxuICAgIGltZzoge1xuICAgICAgICB3aWR0aDogNDAsXG4gICAgICAgIGhlaWdodDogNDAsXG4gICAgICAgIGJvcmRlclJhZGl1czogNDAsXG4gICAgICAgIG1hcmdpblJpZ2h0OiAxMCxcbiAgICAgICAgZmlsdGVyOiAnZHJvcC1zaGFkb3coMCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KSknLFxuICAgICAgICBib3JkZXI6ICcycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpJ1xuICAgIH0sXG4gICAgdGV4dDoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBmaWx0ZXI6ICdkcm9wLXNoYWRvdygwIDBweCAzcHggcmdiYSgwLCAwLCAwLCAwLjkpKSdcbiAgICB9LFxuICAgIGhlYWRpbmc6IHtcbiAgICAgICAgZm9udFNpemU6ICcxcmVtJyxcbiAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSknLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMlxuICAgIH0sXG4gICAgc3ViaGVhZGluZzoge1xuICAgICAgICBmb250U2l6ZTogJzAuNnJlbScsXG4gICAgICAgIGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpJyxcbiAgICAgICAgbWFyZ2luOiAwXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUHJvZ3Jlc3NQcm9wcywgUHJvZ3Jlc3NDb250ZXh0IH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IFByb2dyZXNzV3JhcHBlciBmcm9tICcuL1Byb2dyZXNzV3JhcHBlcidcbmltcG9ydCBQcm9ncmVzc0N0eCBmcm9tICcuLy4uL2NvbnRleHQvUHJvZ3Jlc3MnXG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wczogUHJvZ3Jlc3NQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgYnVmZmVyQWN0aW9uLCBwYXVzZSB9ID0gdXNlQ29udGV4dDxQcm9ncmVzc0NvbnRleHQ+KFByb2dyZXNzQ3R4KVxuXG4gICAgY29uc3QgZ2V0UHJvZ3Jlc3NTdHlsZSA9ICh7IGFjdGl2ZSB9KSA9PiB7XG4gICAgICAgIHN3aXRjaCAoYWN0aXZlKSB7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgd2lkdGg6ICcxMDAlJyB9XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdHJhbnNmb3JtOiBgc2NhbGVYKCR7cHJvcHMuY291bnQgLyAxMDB9KWAgfVxuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHJldHVybiB7IHdpZHRoOiAwIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgd2lkdGg6IDAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgeyB3aWR0aCwgYWN0aXZlIH0gPSBwcm9wc1xuICAgIHJldHVybiAoXG4gICAgICAgIDxQcm9ncmVzc1dyYXBwZXIgd2lkdGg9e3dpZHRofSBwYXVzZT17cGF1c2V9IGJ1ZmZlckFjdGlvbj17YnVmZmVyQWN0aW9ufT5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi5nZXRQcm9ncmVzc1N0eWxlKHsgYWN0aXZlIH0pLCAuLi5zdHlsZXMuaW5uZXIgfX0gLz5cbiAgICAgICAgPC9Qcm9ncmVzc1dyYXBwZXI+XG4gICAgKVxufVxuXG5jb25zdCBzdHlsZXM6IGFueSA9IHtcbiAgICBpbm5lcjoge1xuICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDIsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ2NlbnRlciBsZWZ0JyxcblxuICAgICAgICBXZWJraXRCYWNrZmFjZVZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgICBNb3pCYWNrZmFjZVZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgICBtc0JhY2tmYWNlVmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICAgIGJhY2tmYWNlVmlzaWJpbGl0eTogJ2hpZGRlbicsXG5cbiAgICAgICAgV2Via2l0UGVyc3BlY3RpdmU6IDEwMDAsXG4gICAgICAgIE1velBlcnNwZWN0aXZlOiAxMDAwLFxuICAgICAgICBtc1BlcnNwZWN0aXZlOiAxMDAwLFxuICAgICAgICBwZXJzcGVjdGl2ZTogMTAwMFxuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvZ3Jlc3MgZnJvbSAnLi9Qcm9ncmVzcydcbmltcG9ydCB7IFByb2dyZXNzQ29udGV4dCwgR2xvYmFsQ3R4LCBTdG9yaWVzQ29udGV4dCBhcyBTdG9yaWVzQ29udGV4dEludGVyZmFjZSB9IGZyb20gJy4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCBQcm9ncmVzc0N0eCBmcm9tICcuLy4uL2NvbnRleHQvUHJvZ3Jlc3MnXG5pbXBvcnQgR2xvYmFsQ29udGV4dCBmcm9tICcuLy4uL2NvbnRleHQvR2xvYmFsJ1xuaW1wb3J0IFN0b3JpZXNDb250ZXh0IGZyb20gJy4vLi4vY29udGV4dC9TdG9yaWVzJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXG4gICAgY29uc3QgeyBjdXJyZW50SWQsIG5leHQsIHZpZGVvRHVyYXRpb24sIHBhdXNlIH0gPSB1c2VDb250ZXh0PFByb2dyZXNzQ29udGV4dD4oUHJvZ3Jlc3NDdHgpXG4gICAgY29uc3QgeyBkZWZhdWx0SW50ZXJ2YWwsIHJlc3RhcnRPblBhdXNlLCBvblN0b3J5RW5kLCBvblN0b3J5U3RhcnQsIG9uQWxsU3Rvcmllc0VuZCB9ID0gdXNlQ29udGV4dDxHbG9iYWxDdHg+KEdsb2JhbENvbnRleHQpO1xuICAgIGNvbnN0IHsgc3RvcmllcyB9ID0gdXNlQ29udGV4dDxTdG9yaWVzQ29udGV4dEludGVyZmFjZT4oU3Rvcmllc0NvbnRleHQpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0Q291bnQoMClcbiAgICB9LCBbY3VycmVudElkLCBzdG9yaWVzXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICBpZiAocGF1c2UgJiYgcmVzdGFydE9uUGF1c2UpIHtcbiAgICAgICAgICAgICBzZXRDb3VudCgwKVxuICAgICAgICAgfVxuICAgICB9LCBbcmVzdGFydE9uUGF1c2UsIHBhdXNlXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghcGF1c2UpIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbkZyYW1lSWQuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShpbmNyZW1lbnRDb3VudClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWVJZC5jdXJyZW50KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICB9LCBbY3VycmVudElkLCBwYXVzZV0pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocGF1c2UpIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lSWQuY3VycmVudClcbiAgICAgICAgfVxuICAgIH0sIFtjb3VudCwgcGF1c2VdKVxuXG4gICAgbGV0IGFuaW1hdGlvbkZyYW1lSWQgPSB1c2VSZWY8bnVtYmVyPigpXG5cbiAgICBsZXQgY291bnRDb3B5ID0gY291bnQ7XG4gICAgY29uc3QgaW5jcmVtZW50Q291bnQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChjb3VudENvcHkgPT09IDApIHN0b3J5U3RhcnRDYWxsYmFjaygpXG4gICAgICAgIHNldENvdW50KChjb3VudDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IGdldEN1cnJlbnRJbnRlcnZhbCgpXG4gICAgICAgICAgICBjb3VudENvcHkgPSBjb3VudCArICgxMDAgLyAoKGludGVydmFsIC8gMTAwMCkgKiA2MCkpXG4gICAgICAgICAgICByZXR1cm4gY291bnQgKyAoMTAwIC8gKChpbnRlcnZhbCAvIDEwMDApICogNjApKVxuICAgICAgICB9KVxuICAgICAgICBpZiAoY291bnRDb3B5IDwgMTAwKSB7XG4gICAgICAgICAgICBhbmltYXRpb25GcmFtZUlkLmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaW5jcmVtZW50Q291bnQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdG9yeUVuZENhbGxiYWNrKCk7XG4gICAgICAgICAgICBpZiAoY3VycmVudElkID09PSBzdG9yaWVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBhbGxTdG9yaWVzRW5kQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lSWQuY3VycmVudCk7XG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzdG9yeVN0YXJ0Q2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgIG9uU3RvcnlTdGFydCAmJiBvblN0b3J5U3RhcnQoY3VycmVudElkLCBzdG9yaWVzW2N1cnJlbnRJZF0pXG4gICAgfVxuXG4gICAgY29uc3Qgc3RvcnlFbmRDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgb25TdG9yeUVuZCAmJiBvblN0b3J5RW5kKGN1cnJlbnRJZCwgc3Rvcmllc1tjdXJyZW50SWRdKVxuICAgIH1cblxuICAgIGNvbnN0IGFsbFN0b3JpZXNFbmRDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgb25BbGxTdG9yaWVzRW5kICYmIG9uQWxsU3Rvcmllc0VuZChjdXJyZW50SWQsIHN0b3JpZXMpXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Q3VycmVudEludGVydmFsID0gKCkgPT4ge1xuICAgICAgICBpZiAoc3Rvcmllc1tjdXJyZW50SWRdLnR5cGUgPT09ICd2aWRlbycpIHJldHVybiB2aWRlb0R1cmF0aW9uXG4gICAgICAgIGlmICh0eXBlb2Ygc3Rvcmllc1tjdXJyZW50SWRdLmR1cmF0aW9uID09PSAnbnVtYmVyJykgcmV0dXJuIHN0b3JpZXNbY3VycmVudElkXS5kdXJhdGlvblxuICAgICAgICByZXR1cm4gZGVmYXVsdEludGVydmFsXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnByb2dyZXNzQXJyfT5cbiAgICAgICAgICAgIHtzdG9yaWVzLm1hcCgoXywgaSkgPT5cbiAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICBjb3VudD17Y291bnR9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxIC8gc3Rvcmllcy5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17aSA9PT0gY3VycmVudElkID8gMSA6IChpIDwgY3VycmVudElkID8gMiA6IDApfVxuICAgICAgICAgICAgICAgIC8+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgcHJvZ3Jlc3NBcnI6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIGZsZXhXcmFwOiAncm93JyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHdpZHRoOiAnOTglJyxcbiAgICAgICAgcGFkZGluZzogNSxcbiAgICAgICAgcGFkZGluZ1RvcDogNyxcbiAgICAgICAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgICAgICAgekluZGV4OiA5OSxcbiAgICAgICAgZmlsdGVyOiAnZHJvcC1zaGFkb3coMCAxcHggOHB4ICMyMjIpJ1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByb2dyZXNzV3JhcHBlclByb3BzIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzJ1xuXG5jb25zdCBQcm9ncmVzc1dyYXBwZXIgPSAocHJvcHM6IFByb2dyZXNzV3JhcHBlclByb3BzKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17eyAuLi5zdHlsZXMucHJvZ3Jlc3MsIC4uLmdldFByb2dyZXNzV3JhcHBlclN0eWxlKHByb3BzKSB9fT5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvZGl2PlxuKVxuXG5jb25zdCBnZXRQcm9ncmVzc1dyYXBwZXJTdHlsZSA9ICh7IHdpZHRoLCBwYXVzZSwgYnVmZmVyQWN0aW9uIH0pID0+ICh7XG4gICAgd2lkdGg6IGAke3dpZHRoICogMTAwfSVgLFxuICAgIG9wYWNpdHk6IHBhdXNlICYmICFidWZmZXJBY3Rpb24gPyAwIDogMVxufSlcblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIHByb2dyZXNzOiB7XG4gICAgICAgIGhlaWdodDogMixcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgYmFja2dyb3VuZDogJyM1NTUnLFxuICAgICAgICBtYXJnaW46IDIsXG4gICAgICAgIGJvcmRlclJhZGl1czogMixcbiAgICAgICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgNDAwbXMgZWFzZS1pbi1vdXQnXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc1dyYXBwZXIiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgR2xvYmFsQ29udGV4dCBmcm9tICcuLy4uL2NvbnRleHQvR2xvYmFsJ1xuaW1wb3J0IHsgR2xvYmFsQ3R4IH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgU2VlTW9yZVByb3BzIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZWVNb3JlKHByb3BzOiBTZWVNb3JlUHJvcHMpIHtcbiAgICBjb25zdCBTZWVNb3JlQ29udGVudCA9IHByb3BzLnNlZU1vcmVDb250ZW50O1xuICAgIGNvbnN0IEN1c3RvbUNvbGxhcHNlZCA9IHByb3BzLmN1c3RvbUNvbGxhcHNlZDtcblxuICAgIGNvbnN0IHsga2V5Ym9hcmROYXZpZ2F0aW9uIH0gPSB1c2VDb250ZXh0PEdsb2JhbEN0eD4oR2xvYmFsQ29udGV4dCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBpc0NsaWVudCA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpO1xuICAgICAgICBpZiAoaXNDbGllbnQgJiYgKHR5cGVvZiBrZXlib2FyZE5hdmlnYXRpb24gPT09ICdib29sZWFuJyAmJiBrZXlib2FyZE5hdmlnYXRpb24pKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBba2V5Ym9hcmROYXZpZ2F0aW9uXSlcblxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBwcm9wcy50b2dnbGVNb3JlKHRydWUpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nIHx8IGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBwcm9wcy50b2dnbGVNb3JlKGZhbHNlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgcHJvcHMuc2hvd0NvbnRlbnRcbiAgICAgICAgICAgID8gPGRpdiBzdHlsZT17c3R5bGVzLnNlZU1vcmVFeHBhbmRlZH0+XG4gICAgICAgICAgICAgICAgPFNlZU1vcmVDb250ZW50IGNsb3NlPXsoKSA9PiBwcm9wcy50b2dnbGVNb3JlKGZhbHNlKX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgKEN1c3RvbUNvbGxhcHNlZCA/IDxDdXN0b21Db2xsYXBzZWQgYWN0aW9uPXtwcm9wcy5hY3Rpb259IHRvZ2dsZU1vcmU9e3Byb3BzLnRvZ2dsZU1vcmV9IC8+IDogPGRpdiBzdHlsZT17c3R5bGVzLnNlZU1vcmV9IG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgcHJvcHMudG9nZ2xlTW9yZSh0cnVlKVxuICAgICAgICAgICAgfX0gPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMuc2VlTW9yZUljb259PuKMgzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLnNlZU1vcmVUZXh0fT5TZWUgbW9yZTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgIClcbn1cblxuY29uc3Qgc3R5bGVzOiBhbnkgPSB7XG4gICAgc2VlTW9yZToge1xuICAgICAgICBoZWlnaHQ6IFwiMTB2aFwiLFxuICAgICAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMikpXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsXG4gICAgICAgIGJvdHRvbTogMFxuICAgIH0sXG4gICAgc2VlTW9yZUV4cGFuZGVkOiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgekluZGV4OiA5OTk5OVxuICAgIH0sXG4gICAgc2VlTW9yZVRleHQ6IHtcbiAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiBcIjAuMWVtXCIsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogXCIyLjJ2aFwiLFxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIixcbiAgICAgICAgb3BhY2l0eTogXCIxXCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjAuOGVtXCIsXG4gICAgICAgIHRyYW5zaXRpb246IFwib3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dFwiXG4gICAgfSxcbiAgICBzZWVNb3JlSWNvbjoge1xuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IFwiMC4yZW1cIixcbiAgICAgICAgbWFyZ2luQm90dG9tOiBcIjAuNHZoXCIsXG4gICAgICAgIG9wYWNpdHk6IFwiMVwiLFxuICAgICAgICBmaWx0ZXI6IFwiZHJvcC1zaGFkb3coMCAwIDVweCBibGFjaylcIixcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIsXG4gICAgICAgIHRyYW5zaXRpb246IFwib3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dFwiXG4gICAgfSxcbiAgICBzZWVNb3JlQ2xvc2U6IHtcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgZmlsdGVyOiBcImRyb3Atc2hhZG93KDAgM3B4IDJweCAjY2NjKVwiLFxuICAgICAgICByaWdodDogXCIwLjVyZW1cIixcbiAgICAgICAgdG9wOiBcIjAuNXJlbVwiLFxuICAgICAgICBmb250U2l6ZTogXCIxLjVyZW1cIixcbiAgICAgICAgb3BhY2l0eTogXCIwLjdcIixcbiAgICAgICAgcGFkZGluZzogXCIxcmVtXCJcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTcGlubmVyU1ZHIGZyb20gJy4vLi4vYXNzZXRzL3B1ZmYuc3ZnJztcblxuY29uc3QgU3Bpbm5lciA9ICgpID0+IHtcbiAgICByZXR1cm4gPFNwaW5uZXJTVkcgLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lcjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTdG9yeVByb3BzLCBHbG9iYWxDdHggfSBmcm9tIFwiLi8uLi9pbnRlcmZhY2VzXCI7XG5pbXBvcnQgR2xvYmFsQ29udGV4dCBmcm9tIFwiLi8uLi9jb250ZXh0L0dsb2JhbFwiO1xuXG5jb25zdCBTdG9yeSA9IChwcm9wczogU3RvcnlQcm9wcykgPT4ge1xuXHRjb25zdCBnbG9iYWxDb250ZXh0ID0gdXNlQ29udGV4dDxHbG9iYWxDdHg+KFxuXHRcdEdsb2JhbENvbnRleHRcblx0KTtcblxuXHRjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGxvYWRlciwgaGVhZGVyLCBzdG9yeVN0eWxlcyB9ID0gZ2xvYmFsQ29udGV4dDtcblxuXHRjb25zdCByZW5kZXJlck1lc3NhZ2VIYW5kbGVyID0gKHR5cGU6IHN0cmluZywgZGF0YTogYW55KSA9PiB7XG5cdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRjYXNlICdVUERBVEVfVklERU9fRFVSQVRJT04nOlxuXHRcdFx0XHRwcm9wcy5nZXRWaWRlb0R1cmF0aW9uKGRhdGEuZHVyYXRpb24pO1xuXHRcdFx0XHRyZXR1cm4geyBhY2s6ICdPSycgYXMgJ09LJyB9XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgZ2V0U3RvcnlDb250ZW50ID0gKCkgPT4ge1xuXHRcdGxldCBJbm5lckNvbnRlbnQgPSBwcm9wcy5zdG9yeS5jb250ZW50O1xuXHRcdGxldCBjb25maWcgPSB7IHdpZHRoLCBoZWlnaHQsIGxvYWRlciwgaGVhZGVyLCBzdG9yeVN0eWxlcyB9O1xuXHRcdHJldHVybiA8SW5uZXJDb250ZW50XG5cdFx0XHRhY3Rpb249e3Byb3BzLmFjdGlvbn1cblx0XHRcdGlzUGF1c2VkPXtwcm9wcy5wbGF5U3RhdGV9XG5cdFx0XHRzdG9yeT17cHJvcHMuc3Rvcnl9XG5cdFx0XHRjb25maWc9e2NvbmZpZ31cblx0XHRcdG1lc3NhZ2VIYW5kbGVyPXtyZW5kZXJlck1lc3NhZ2VIYW5kbGVyfVxuXHRcdFx0YWN0aXZlPXtwcm9wcy5pbmRleCA9PT0gcHJvcHMuY3VycmVudElkfVxuXHRcdC8+XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRzdHlsZT17e1xuXHRcdFx0XHQuLi5zdHlsZXMuc3RvcnksXG5cdFx0XHRcdHdpZHRoOiB3aWR0aCxcblx0XHRcdFx0aGVpZ2h0OiBoZWlnaHQsXG5cdFx0XHRcdHpJbmRleDogcHJvcHMuaW5kZXggPT09IHByb3BzLmN1cnJlbnRJZCA/IDk4IDogOTcgLSBwcm9wcy5pbmRleFxuXHRcdFx0fX1cblx0XHQ+XG5cdFx0XHR7Z2V0U3RvcnlDb250ZW50KCl9XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5jb25zdCBzdHlsZXMgPSB7XG5cdHN0b3J5OiB7XG5cdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcblx0XHRvdmVyZmxvdzogXCJoaWRkZW5cIixcblx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiXG5cdH0sXG5cdHN0b3J5Q29udGVudDoge1xuXHRcdHdpZHRoOiBcImF1dG9cIixcblx0XHRtYXhXaWR0aDogXCIxMDAlXCIsXG5cdFx0bWF4SGVpZ2h0OiBcIjEwMCVcIixcblx0XHRtYXJnaW46IFwiYXV0b1wiXG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3J5O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdsb2JhbEN0eCB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbENvbnRleHQgPSB7XG5cdGRlZmF1bHRJbnRlcnZhbDogNDAwMCxcblx0d2lkdGg6IDM2MCxcblx0aGVpZ2h0OiA2NDAsXG59O1xuXG5jb25zdCBHbG9iYWxDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxHbG9iYWxDdHg+KGluaXRpYWxDb250ZXh0KTtcblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsQ29udGV4dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByb2dyZXNzQ29udGV4dCB9IGZyb20gJy4vLi4vaW50ZXJmYWNlcydcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuY3JlYXRlQ29udGV4dDxQcm9ncmVzc0NvbnRleHQ+KHtcbiAgICBjdXJyZW50SWQ6IDAsXG4gICAgdmlkZW9EdXJhdGlvbjogMCxcbiAgICBidWZmZXJBY3Rpb246IGZhbHNlLFxuICAgIHBhdXNlOiBmYWxzZSxcbiAgICBuZXh0OiAoKSA9PiB7IH1cbn0pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG5cdFN0b3JpZXNDb250ZXh0IGFzIFN0b3JpZXNDb250ZXh0SW50ZXJmYWNlLFxuXHRTdG9yeSxcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsQ29udGV4dDogeyBzdG9yaWVzOiBTdG9yeVtdIH0gPSB7XG5cdHN0b3JpZXM6IFtdLFxufTtcblxuY29uc3QgU3Rvcmllc0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PFN0b3JpZXNDb250ZXh0SW50ZXJmYWNlPihcblx0aW5pdGlhbENvbnRleHRcbik7XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JpZXNDb250ZXh0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJlYWN0SW5zdGFTdG9yaWVzUHJvcHMsIEdsb2JhbEN0eCwgU3RvcnksIFRlc3RlciwgUmVuZGVyZXIgfSBmcm9tICcuL2ludGVyZmFjZXMnXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vY29tcG9uZW50cy9Db250YWluZXInXG5pbXBvcnQgR2xvYmFsQ29udGV4dCBmcm9tICcuL2NvbnRleHQvR2xvYmFsJ1xuaW1wb3J0IFN0b3JpZXNDb250ZXh0IGZyb20gJy4vY29udGV4dC9TdG9yaWVzJztcbmltcG9ydCB7IGdldFJlbmRlcmVyIH0gZnJvbSAnLi91dGlsL3JlbmRlcmVycydcbmltcG9ydCB7IHJlbmRlcmVycyBhcyBkZWZhdWx0UmVuZGVyZXJzIH0gZnJvbSAnLi9yZW5kZXJlcnMvaW5kZXgnO1xuaW1wb3J0IHdpdGhIZWFkZXIgZnJvbSAnLi9yZW5kZXJlcnMvd3JhcHBlcnMvd2l0aEhlYWRlcidcbmltcG9ydCB3aXRoU2VlTW9yZSBmcm9tICcuL3JlbmRlcmVycy93cmFwcGVycy93aXRoU2VlTW9yZSdcblxuY29uc3QgUmVhY3RJbnN0YVN0b3JpZXMgPSBmdW5jdGlvbiAocHJvcHM6IFJlYWN0SW5zdGFTdG9yaWVzUHJvcHMpIHtcbiAgICBsZXQgcmVuZGVyZXJzID0gcHJvcHMucmVuZGVyZXJzID8gcHJvcHMucmVuZGVyZXJzLmNvbmNhdChkZWZhdWx0UmVuZGVyZXJzKSA6IGRlZmF1bHRSZW5kZXJlcnM7XG4gICAgbGV0IGNvbnRleHQ6IEdsb2JhbEN0eCA9IHtcbiAgICAgICAgd2lkdGg6IHByb3BzLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHByb3BzLmhlaWdodCxcbiAgICAgICAgbG9hZGVyOiBwcm9wcy5sb2FkZXIsXG4gICAgICAgIGhlYWRlcjogcHJvcHMuaGVhZGVyLFxuICAgICAgICBzdG9yeUNvbnRhaW5lclN0eWxlczogcHJvcHMuc3RvcnlDb250YWluZXJTdHlsZXMsXG4gICAgICAgIHN0b3J5U3R5bGVzOiBwcm9wcy5zdG9yeVN0eWxlcyxcbiAgICAgICAgbG9vcDogcHJvcHMubG9vcCxcbiAgICAgICAgZGVmYXVsdEludGVydmFsOiBwcm9wcy5kZWZhdWx0SW50ZXJ2YWwsXG4gICAgICAgIGlzUGF1c2VkOiBwcm9wcy5pc1BhdXNlZCxcbiAgICAgICAgcmVzdGFydE9uUGF1c2U6IHByb3BzLnJlc3RhcnRPblBhdXNlLFxuICAgICAgICBjdXJyZW50SW5kZXg6IHByb3BzLmN1cnJlbnRJbmRleCxcbiAgICAgICAgb25TdG9yeVN0YXJ0OiBwcm9wcy5vblN0b3J5U3RhcnQsXG4gICAgICAgIG9uU3RvcnlFbmQ6IHByb3BzLm9uU3RvcnlFbmQsXG4gICAgICAgIG9uQWxsU3Rvcmllc0VuZDogcHJvcHMub25BbGxTdG9yaWVzRW5kLFxuICAgICAgICBrZXlib2FyZE5hdmlnYXRpb246IHByb3BzLmtleWJvYXJkTmF2aWdhdGlvbixcbiAgICB9XG4gICAgY29uc3QgW3N0b3JpZXMsIHNldFN0b3JpZXNdID0gdXNlU3RhdGU8eyBzdG9yaWVzOiBTdG9yeVtdIH0+KHsgc3RvcmllczogZ2VuZXJhdGVTdG9yaWVzKHByb3BzLnN0b3JpZXMsIHJlbmRlcmVycykgfSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0U3Rvcmllcyh7IHN0b3JpZXM6IGdlbmVyYXRlU3Rvcmllcyhwcm9wcy5zdG9yaWVzLCByZW5kZXJlcnMpIH0pO1xuICAgIH0sIFtwcm9wcy5zdG9yaWVzLCBwcm9wcy5yZW5kZXJlcnNdKTtcblxuICAgIHJldHVybiA8R2xvYmFsQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dH0+XG4gICAgICAgIDxTdG9yaWVzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3Rvcmllc30+XG4gICAgICAgICAgICA8Q29udGFpbmVyIC8+XG4gICAgICAgIDwvU3Rvcmllc0NvbnRleHQuUHJvdmlkZXI+XG4gICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxufVxuXG5jb25zdCBnZW5lcmF0ZVN0b3JpZXMgPSAoc3RvcmllczogU3RvcnlbXSwgcmVuZGVyZXJzOiB7IHJlbmRlcmVyOiBSZW5kZXJlciwgdGVzdGVyOiBUZXN0ZXIgfVtdKSA9PiB7XG4gICAgcmV0dXJuIHN0b3JpZXMubWFwKHMgPT4ge1xuICAgICAgICBsZXQgc3Rvcnk6IFN0b3J5ID0ge307XG5cbiAgICAgICAgaWYgKHR5cGVvZiBzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgc3RvcnkudXJsID0gcztcbiAgICAgICAgICAgIHN0b3J5LnR5cGUgPSAnaW1hZ2UnO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgc3RvcnkgPSBPYmplY3QuYXNzaWduKHN0b3J5LCBzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZW5kZXJlciA9IGdldFJlbmRlcmVyKHN0b3J5LCByZW5kZXJlcnMpO1xuICAgICAgICBzdG9yeS5vcmlnaW5hbENvbnRlbnQgPSBzdG9yeS5jb250ZW50O1xuICAgICAgICBzdG9yeS5jb250ZW50ID0gcmVuZGVyZXI7XG4gICAgICAgIHJldHVybiBzdG9yeVxuICAgIH0pXG59O1xuXG5SZWFjdEluc3RhU3Rvcmllcy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgd2lkdGg6IDM2MCxcbiAgICBoZWlnaHQ6IDY0MCxcbiAgICBkZWZhdWx0SW50ZXJ2YWw6IDQwMDBcbn1cblxuZXhwb3J0IGNvbnN0IFdpdGhIZWFkZXIgPSB3aXRoSGVhZGVyO1xuZXhwb3J0IGNvbnN0IFdpdGhTZWVNb3JlID0gd2l0aFNlZU1vcmU7XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0SW5zdGFTdG9yaWVzXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZW5kZXJlciwgVGVzdGVyIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGNvbnN0IHJlbmRlcmVyOiBSZW5kZXJlciA9IChwcm9wcykgPT4ge1xuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghcHJvcHMuaXNQYXVzZWQpIHtcbiAgICAgICAgICAgIHByb3BzLmFjdGlvbigncGxheScpO1xuICAgICAgICB9XG4gICAgfSwgW3Byb3BzLnN0b3J5XSlcbiAgICBjb25zdCBDb250ZW50ID0gcHJvcHMuc3Rvcnkub3JpZ2luYWxDb250ZW50O1xuICAgIHJldHVybiA8Q29udGVudCB7Li4ucHJvcHN9IC8+XG59XG5cbmV4cG9ydCBjb25zdCB0ZXN0ZXI6IFRlc3RlciA9IChzdG9yeSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbmRpdGlvbjogISFzdG9yeS5jb250ZW50LFxuICAgICAgICBwcmlvcml0eTogMlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlbmRlcmVyLFxuICAgIHRlc3RlclxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVuZGVyZXIsIFRlc3RlciB9IGZyb20gJy4vLi4vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBjb25zdCByZW5kZXJlcjogUmVuZGVyZXIgPSAoeyBzdG9yeSwgYWN0aW9uIH0pID0+IHtcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhY3Rpb24oJ3BsYXknKTtcbiAgICB9LCBbc3RvcnldKVxuXG4gICAgcmV0dXJuIDxkaXYgc3R5bGU9e3N0eWxlcy5zdG9yeUNvbnRlbnR9PlxuICAgICAgICA8cCBzdHlsZT17c3R5bGVzLnRleHR9PlRoaXMgc3RvcnkgY291bGQgbm90IGJlIGxvYWRlZC48L3A+XG4gICAgPC9kaXY+XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBzdG9yeUNvbnRlbnQ6IHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBtYXhIZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICBtYXJnaW46IFwiYXV0b1wiXG4gICAgfSxcbiAgICB0ZXh0OiB7XG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICB3aWR0aDogJzkwJScsXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHRlc3RlcjogVGVzdGVyID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbmRpdGlvbjogdHJ1ZSxcbiAgICAgICAgcHJpb3JpdHk6IDFcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcmVuZGVyZXIsXG4gICAgdGVzdGVyXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi9jb21wb25lbnRzL1NwaW5uZXInO1xuaW1wb3J0IHsgUmVuZGVyZXIsIFRlc3RlciB9IGZyb20gJy4vLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgV2l0aEhlYWRlciBmcm9tICcuL3dyYXBwZXJzL3dpdGhIZWFkZXInO1xuaW1wb3J0IFdpdGhTZWVNb3JlIGZyb20gJy4vd3JhcHBlcnMvd2l0aFNlZU1vcmUnO1xuXG5leHBvcnQgY29uc3QgcmVuZGVyZXI6IFJlbmRlcmVyID0gKHsgc3RvcnksIGFjdGlvbiwgaXNQYXVzZWQsIGNvbmZpZyB9KSA9PiB7XG4gICAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGxvYWRlciwgc3RvcnlTdHlsZXMgfSA9IGNvbmZpZztcbiAgICBsZXQgY29tcHV0ZWRTdHlsZXMgPSB7XG4gICAgICAgIC4uLnN0eWxlcy5zdG9yeUNvbnRlbnQsXG4gICAgICAgIC4uLihzdG9yeVN0eWxlcyB8fCB7fSlcbiAgICB9XG5cbiAgICBjb25zdCBpbWFnZUxvYWRlZCA9ICgpID0+IHtcbiAgICAgICAgc2V0TG9hZGVkKHRydWUpO1xuICAgICAgICBhY3Rpb24oJ3BsYXknKTtcbiAgICB9XG5cbiAgICByZXR1cm4gPFdpdGhIZWFkZXIgc3Rvcnk9e3N0b3J5fSBnbG9iYWxIZWFkZXI9e2NvbmZpZy5oZWFkZXJ9PlxuICAgICAgICA8V2l0aFNlZU1vcmUgc3Rvcnk9e3N0b3J5fSBhY3Rpb249e2FjdGlvbn0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e2NvbXB1dGVkU3R5bGVzfSBzcmM9e3N0b3J5LnVybH0gb25Mb2FkPXtpbWFnZUxvYWRlZH0gLz5cbiAgICAgICAgICAgICAgICB7IWxvYWRlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDAsIDAsIDAuOSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjY2NjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkZXIgfHwgPFNwaW5uZXIgLz59XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9XaXRoU2VlTW9yZT5cbiAgICA8L1dpdGhIZWFkZXI+XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBzdG9yeToge1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCJcbiAgICB9LFxuICAgIHN0b3J5Q29udGVudDoge1xuICAgICAgICB3aWR0aDogXCJhdXRvXCIsXG4gICAgICAgIG1heFdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgbWF4SGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgbWFyZ2luOiBcImF1dG9cIlxuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCB0ZXN0ZXI6IFRlc3RlciA9IChzdG9yeSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbmRpdGlvbjogIXN0b3J5LmNvbnRlbnQgJiYgKCFzdG9yeS50eXBlIHx8IHN0b3J5LnR5cGUgPT09ICdpbWFnZScpLFxuICAgICAgICBwcmlvcml0eTogMlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlbmRlcmVyLFxuICAgIHRlc3RlclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTcGlubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvU3Bpbm5lcic7XG5pbXBvcnQgeyBSZW5kZXJlciwgVGVzdGVyIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzJztcbmltcG9ydCBXaXRoSGVhZGVyIGZyb20gJy4vd3JhcHBlcnMvd2l0aEhlYWRlcic7XG5pbXBvcnQgV2l0aFNlZU1vcmUgZnJvbSAnLi93cmFwcGVycy93aXRoU2VlTW9yZSc7XG5cbmV4cG9ydCBjb25zdCByZW5kZXJlcjogUmVuZGVyZXIgPSAoeyBzdG9yeSwgYWN0aW9uLCBpc1BhdXNlZCwgY29uZmlnLCBtZXNzYWdlSGFuZGxlciB9KSA9PiB7XG4gICAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbXV0ZWQsIHNldE11dGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGxvYWRlciwgc3RvcnlTdHlsZXMgfSA9IGNvbmZpZztcblxuICAgIGxldCBjb21wdXRlZFN0eWxlcyA9IHtcbiAgICAgICAgLi4uc3R5bGVzLnN0b3J5Q29udGVudCxcbiAgICAgICAgLi4uKHN0b3J5U3R5bGVzIHx8IHt9KVxuICAgIH1cblxuICAgIGxldCB2aWQgPSBSZWFjdC51c2VSZWY8SFRNTFZpZGVvRWxlbWVudD4obnVsbCk7XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodmlkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGlmIChpc1BhdXNlZCkge1xuICAgICAgICAgICAgICAgIHZpZC5jdXJyZW50LnBhdXNlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZC5jdXJyZW50LnBsYXkoKS5jYXRjaCgoKSA9PiB7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW2lzUGF1c2VkXSk7XG5cbiAgICBjb25zdCBvbldhaXRpbmcgPSAoKSA9PiB7XG4gICAgICAgIGFjdGlvbihcInBhdXNlXCIsIHRydWUpO1xuICAgIH1cblxuICAgIGNvbnN0IG9uUGxheWluZyA9ICgpID0+IHtcbiAgICAgICAgYWN0aW9uKFwicGxheVwiLCB0cnVlKTtcbiAgICB9XG5cbiAgICBjb25zdCB2aWRlb0xvYWRlZCA9ICgpID0+IHtcbiAgICAgICAgbWVzc2FnZUhhbmRsZXIoJ1VQREFURV9WSURFT19EVVJBVElPTicsIHsgZHVyYXRpb246IHZpZC5jdXJyZW50LmR1cmF0aW9uIH0pO1xuICAgICAgICBzZXRMb2FkZWQodHJ1ZSk7XG4gICAgICAgIHZpZC5jdXJyZW50LnBsYXkoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGFjdGlvbigncGxheScpO1xuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRNdXRlZCh0cnVlKTtcbiAgICAgICAgICAgIHZpZC5jdXJyZW50LnBsYXkoKS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICBhY3Rpb24oJ3BsYXknKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiA8V2l0aEhlYWRlciBzdG9yeT17c3Rvcnl9IGdsb2JhbEhlYWRlcj17Y29uZmlnLmhlYWRlcn0+XG4gICAgICAgIDxXaXRoU2VlTW9yZSBzdG9yeT17c3Rvcnl9IGFjdGlvbj17YWN0aW9ufT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy52aWRlb0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPHZpZGVvXG4gICAgICAgICAgICAgICAgICAgIHJlZj17dmlkfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17Y29tcHV0ZWRTdHlsZXN9XG4gICAgICAgICAgICAgICAgICAgIHNyYz17c3RvcnkudXJsfVxuICAgICAgICAgICAgICAgICAgICBjb250cm9scz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIG9uTG9hZGVkRGF0YT17dmlkZW9Mb2FkZWR9XG4gICAgICAgICAgICAgICAgICAgIHBsYXlzSW5saW5lXG4gICAgICAgICAgICAgICAgICAgIG9uV2FpdGluZz17b25XYWl0aW5nfVxuICAgICAgICAgICAgICAgICAgICBvblBsYXlpbmc9e29uUGxheWluZ31cbiAgICAgICAgICAgICAgICAgICAgbXV0ZWQ9e211dGVkfVxuICAgICAgICAgICAgICAgICAgICBhdXRvUGxheVxuICAgICAgICAgICAgICAgICAgICB3ZWJraXQtcGxheXNpbmxpbmU9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHshbG9hZGVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwgMCwgMCwgMC45KVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogOSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNjY2NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRlciB8fCA8U3Bpbm5lciAvPn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1dpdGhTZWVNb3JlPlxuICAgIDwvV2l0aEhlYWRlcj5cbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIHN0b3J5Q29udGVudDoge1xuICAgICAgICB3aWR0aDogXCJhdXRvXCIsXG4gICAgICAgIG1heFdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgbWF4SGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgbWFyZ2luOiBcImF1dG9cIlxuICAgIH0sXG4gICAgdmlkZW9Db250YWluZXI6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHRlc3RlcjogVGVzdGVyID0gKHN0b3J5KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29uZGl0aW9uOiBzdG9yeS50eXBlID09PSAndmlkZW8nLFxuICAgICAgICBwcmlvcml0eTogMlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlbmRlcmVyLFxuICAgIHRlc3RlclxufVxuIiwiaW1wb3J0IGltYWdlIGZyb20gJy4vSW1hZ2UnO1xuaW1wb3J0IHZpZGVvIGZyb20gJy4vVmlkZW8nO1xuaW1wb3J0IGRlZmF1bHRSZW5kZXJlciBmcm9tICcuL0RlZmF1bHQnO1xuaW1wb3J0IGF1dG9wbGF5Q29udGVudCBmcm9tICcuL0F1dG9QbGF5Q29udGVudCc7XG5cbmV4cG9ydCBjb25zdCByZW5kZXJlcnMgPSBbaW1hZ2UsIHZpZGVvLCBhdXRvcGxheUNvbnRlbnQsIGRlZmF1bHRSZW5kZXJlcl07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3RvcnkgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vLi4vLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcblxuY29uc3Qgd2l0aEhlYWRlcjogUmVhY3QuRkM8eyBzdG9yeTogU3RvcnksIGdsb2JhbEhlYWRlcjogRnVuY3Rpb24gfT4gPSAoeyBzdG9yeSwgZ2xvYmFsSGVhZGVyLCBjaGlsZHJlbiB9KSA9PiB7XG4gICAgcmV0dXJuIDw+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAge3N0b3J5LmhlYWRlciAmJiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIGxlZnQ6IDEyLCB0b3A6IDIwLCB6SW5kZXg6IDE5IH19PlxuICAgICAgICAgICAgICAgIHt0eXBlb2Ygc3RvcnkgPT09IFwib2JqZWN0XCIgPyAoXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbEhlYWRlciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbEhlYWRlcihzdG9yeS5oZWFkZXIpXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPXtzdG9yeS5oZWFkZXIuaGVhZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViaGVhZGluZz17c3RvcnkuaGVhZGVyLnN1YmhlYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVJbWFnZT17c3RvcnkuaGVhZGVyLnByb2ZpbGVJbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgPC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhIZWFkZXI7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudFR5cGUsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWN0aW9uLCBTZWVNb3JlUHJvcHMsIFN0b3J5IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgU2VlTW9yZSBmcm9tIFwiLi8uLi8uLi9jb21wb25lbnRzL1NlZU1vcmVcIjtcblxuY29uc3Qgd2l0aFNlZU1vcmU6IFJlYWN0LkZDPHtcbiAgICBzdG9yeTogU3RvcnksXG4gICAgYWN0aW9uOiBBY3Rpb24sXG4gICAgY3VzdG9tQ29sbGFwc2VkPzogU2VlTW9yZVByb3BzW1wiY3VzdG9tQ29sbGFwc2VkXCJdXG59PiA9ICh7IHN0b3J5LCBhY3Rpb24sIGN1c3RvbUNvbGxhcHNlZCwgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnN0IFtzaG93TW9yZSwgc2V0U2hvd01vcmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHRvZ2dsZU1vcmUgPSAoc2hvdykgPT4ge1xuICAgICAgICBhY3Rpb24oc2hvdyA/ICdwYXVzZScgOiAncGxheScpO1xuICAgICAgICBzZXRTaG93TW9yZShzaG93KTtcbiAgICB9XG4gICAgY29uc3QgQ29sbGFwc2VkQ29tcG9uZW50ID0gU2VlTW9yZTtcbiAgICByZXR1cm4gPD5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICB7c3Rvcnkuc2VlTW9yZSAmJiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiBzaG93TW9yZSA/ICd1bnNldCcgOiAwLFxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDk5OTksXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBzaG93TW9yZSA/ICcxMDAlJyA6ICdhdXRvJ1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENvbGxhcHNlZENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb249e2FjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlTW9yZT17dG9nZ2xlTW9yZX1cbiAgICAgICAgICAgICAgICAgICAgc2hvd0NvbnRlbnQ9e3Nob3dNb3JlfVxuICAgICAgICAgICAgICAgICAgICBzZWVNb3JlQ29udGVudD17c3Rvcnkuc2VlTW9yZX1cbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ29sbGFwc2VkPXtjdXN0b21Db2xsYXBzZWQgfHwgc3Rvcnkuc2VlTW9yZUNvbGxhcHNlZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgPC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTZWVNb3JlOyIsImltcG9ydCB7IFJlbmRlcmVyLCBTdG9yeSwgVGVzdGVyIH0gZnJvbSBcIi4uL2ludGVyZmFjZXNcIjtcblxuZXhwb3J0IGNvbnN0IGdldFJlbmRlcmVyID0gKHN0b3J5OiBTdG9yeSwgcmVuZGVyZXJzOiB7IHJlbmRlcmVyOiBSZW5kZXJlciwgdGVzdGVyOiBUZXN0ZXIgfVtdKTogUmVuZGVyZXIgPT4ge1xuICAgIGxldCBwcm9iYWJsZSA9IHJlbmRlcmVycy5tYXAociA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5yLFxuICAgICAgICAgICAgdGVzdGVyUmVzdWx0OiByLnRlc3RlcihzdG9yeSlcbiAgICAgICAgfVxuICAgIH0pLmZpbHRlcihyID0+IHIudGVzdGVyUmVzdWx0LmNvbmRpdGlvbik7XG4gICAgcHJvYmFibGUuc29ydCgoYSwgYikgPT4gYi50ZXN0ZXJSZXN1bHQucHJpb3JpdHkgLSBhLnRlc3RlclJlc3VsdC5wcmlvcml0eSk7XG4gICAgcmV0dXJuIHByb2JhYmxlWzBdLnJlbmRlcmVyO1xufSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyJdLCJzb3VyY2VSb290IjoiIn0=
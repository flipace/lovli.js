/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _app = __webpack_require__(3);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_app2.default.run();

	(function () {
	  function tagSource(fn, localName) {
	    if (typeof fn !== "function") {
	      return;
	    }

	    if (fn.hasOwnProperty("__source")) {
	      return;
	    }

	    try {
	      Object.defineProperty(fn, "__source", {
	        enumerable: false,
	        configurable: true,
	        value: {
	          fileName: '/Users/patrickneschkudla/Development/open-source/lovli.js/source/server/entry.server.js',
	          localName: localName
	        }
	      });
	    } catch (err) {}
	  }
	})();

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  title: 'lovli.js | Hello World',
	  port: 3000,
	  token_secret: 'thisislovlijs'
	};


/***/ },
/* 2 */
/***/ function(module, exports) {

	const host = '127.0.0.1';
	const webpackPort = 9095;

	module.exports = {
	  host,
	  webpackPort,
	  baseUrl: `http://${host}:${webpackPort}`
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _path = __webpack_require__(6);

	var _path2 = _interopRequireDefault(_path);

	var _express = __webpack_require__(5);

	var _express2 = _interopRequireDefault(_express);

	var _server = __webpack_require__(4);

	var _server2 = _interopRequireDefault(_server);

	var _devProps = __webpack_require__(2);

	var _devProps2 = _interopRequireDefault(_devProps);

	var _page = __webpack_require__(1);

	var _page2 = _interopRequireDefault(_page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)();

	app.use('/static', _express2.default.static(_path2.default.join(process.cwd(), '.build')));

	var bundle =  true ? '/static/client.bundle.js' : 'http://127.0.0.1:' + _devProps2.default.webpackPort + '/static/client.bundle.js';

	app.use('/', function (req, res) {
	  res.status(200).send('<!doctype html>\n    <html>\n      <head>\n        <title>' + _page2.default.title + '</title>\n      </head>\n      <body>\n        <div id=\'root\'></div>\n        <script src="' + bundle + '"></script>\n      </body>\n    </html>');
	});

	var run = function run() {
	  var port = process.env.PORT || _page2.default.port;

	  var httpServer = app.listen(port, function (err) {
	    if (err) {
	      console.log(err); // eslint-disable-line
	      return;
	    }

	    console.log('Express listening at http://localhost:' + port); // eslint-disable-line
	  });

	  // if we want to start secure, add key and cert props
	  var horizonServer = (0, _server2.default)(httpServer, {
	    auto_create_table: true,
	    auto_create_index: true,
	    auth: {
	      allow_anonymous: true,
	      allow_unauthenticated: true,
	      token_secret: _page2.default.token_secret
	    }
	  });
	};

	var _default = {
	  run: run
	};
	exports.default = _default;

	(function () {
	  function tagSource(fn, localName) {
	    if (typeof fn !== "function") {
	      return;
	    }

	    if (fn.hasOwnProperty("__source")) {
	      return;
	    }

	    try {
	      Object.defineProperty(fn, "__source", {
	        enumerable: false,
	        configurable: true,
	        value: {
	          fileName: '/Users/patrickneschkudla/Development/open-source/lovli.js/source/server/app.js',
	          localName: localName
	        }
	      });
	    } catch (err) {}
	  }

	  tagSource(app, 'app');
	  tagSource(bundle, 'bundle');
	  tagSource(run, 'run');
	  tagSource(_default, 'default');
	})();

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("@horizon/server");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ }
/******/ ]);
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var __dirname = \"/\";\nvar _require = __webpack_require__(/*! electron */ \"./node_modules/electron/index.js\"),\n  app = _require.app,\n  BrowserWindow = _require.BrowserWindow;\nvar wallpaper = __webpack_require__(/*! wallpaper */ \"./node_modules/wallpaper/index.js\");\nvar path = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'path'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nfunction createWindow() {\n  var mainWindow = new BrowserWindow({\n    width: 800,\n    height: 600\n  });\n  mainWindow.loadFile('index.html');\n\n  // Add your code to interact with Airtable and set wallpapers here\n\n  // Example usage: Set wallpaper to unicorn.jpg when the window is ready\n  mainWindow.webContents.on('dom-ready', function () {\n    var imagePath = path.join(__dirname, 'unicorn.jpg');\n    wallpaper.set(imagePath).then(function () {\n      console.log('Wallpaper set successfully!');\n    });\n  });\n}\napp.whenReady().then(function () {\n  createWindow();\n  app.on('activate', function () {\n    if (BrowserWindow.getAllWindows().length === 0) createWindow();\n  });\n});\napp.on('window-all-closed', function () {\n  if (process.platform !== 'darwin') app.quit();\n});\n\n//# sourceURL=webpack://cross-platform-wallpaper-app/./src/index.js?");

/***/ }),

/***/ "./node_modules/electron/index.js":
/*!****************************************!*\
  !*** ./node_modules/electron/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var __dirname = \"/\";\nconst fs = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'fs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst path = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'path'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nconst pathFile = path.join(__dirname, 'path.txt');\n\nfunction getElectronPath () {\n  let executablePath;\n  if (fs.existsSync(pathFile)) {\n    executablePath = fs.readFileSync(pathFile, 'utf-8');\n  }\n  if (process.env.ELECTRON_OVERRIDE_DIST_PATH) {\n    return path.join(process.env.ELECTRON_OVERRIDE_DIST_PATH, executablePath || 'electron');\n  }\n  if (executablePath) {\n    return path.join(__dirname, 'dist', executablePath);\n  } else {\n    throw new Error('Electron failed to install correctly, please delete node_modules/electron and try installing again');\n  }\n}\n\nmodule.exports = getElectronPath();\n\n\n//# sourceURL=webpack://cross-platform-wallpaper-app/./node_modules/electron/index.js?");

/***/ }),

/***/ "./node_modules/wallpaper/index.js":
/*!*****************************************!*\
  !*** ./node_modules/wallpaper/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWallpaper: () => (/* binding */ getWallpaper),\n/* harmony export */   screens: () => (/* binding */ screens),\n/* harmony export */   setSolidColorWallpaper: () => (/* binding */ setSolidColorWallpaper),\n/* harmony export */   setWallpaper: () => (/* binding */ setWallpaper)\n/* harmony export */ });\n/* harmony import */ var node_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:process */ \"node:process\");\n/* harmony import */ var _source_macos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./source/macos.js */ \"./node_modules/wallpaper/source/macos.js\");\n/* harmony import */ var _source_linux_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./source/linux/index.js */ \"./node_modules/wallpaper/source/linux/index.js\");\n/* harmony import */ var _source_windows_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./source/windows.js */ \"./node_modules/wallpaper/source/windows.js\");\n\n\n\n\n\nlet wallpaper;\nif (node_process__WEBPACK_IMPORTED_MODULE_0__.platform === 'darwin') {\n\twallpaper = _source_macos_js__WEBPACK_IMPORTED_MODULE_1__;\n} else if (node_process__WEBPACK_IMPORTED_MODULE_0__.platform === 'win32') {\n\twallpaper = _source_windows_js__WEBPACK_IMPORTED_MODULE_3__;\n} else {\n\twallpaper = _source_linux_index_js__WEBPACK_IMPORTED_MODULE_2__;\n}\n\nconst {getWallpaper, setWallpaper, setSolidColorWallpaper, screens} = wallpaper;\n\n\n//# sourceURL=webpack://cross-platform-wallpaper-app/./node_modules/wallpaper/index.js?");

/***/ }),

/***/ "./node_modules/wallpaper/source/linux/background-managers/cinnamon.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/wallpaper/source/linux/background-managers/cinnamon.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   get: () => (/* binding */ get),\n/* harmony export */   isAvailable: () => (/* binding */ isAvailable),\n/* harmony export */   set: () => (/* binding */ set)\n/* harmony export */ });\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ \"./node_modules/wallpaper/source/linux/util.js\");\n\n\nasync function isAvailable() {\n\tif (!await (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.commandExists)('gsettings')) {\n\t\treturn false;\n\t}\n\n\ttry {\n\t\tconst {stdout} = await (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.execFile)('gsettings', ['list-schemas']);\n\t\treturn (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.hasLine)(stdout, 'org.cinnamon.desktop.background');\n\t} catch {\n\t\treturn false;\n\t}\n}\n\nasync function get() {\n\tconst {stdout} = await (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.execFile)('gsettings', [\n\t\t'get',\n\t\t'org.cinnamon.desktop.background',\n\t\t'picture-uri',\n\t]);\n\n\treturn stdout.trim().slice(8, -1);\n}\n\nasync function set(imagePath) {\n\tawait (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.execFile)('gsettings', [\n\t\t'set',\n\t\t'org.cinnamon.desktop.background',\n\t\t'picture-uri',\n\t\t`file://${imagePath}`,\n\t]);\n}\n\n\n//# sourceURL=webpack://cross-platform-wallpaper-app/./node_modules/wallpaper/source/linux/background-managers/cinnamon.js?");

/***/ }),

/***/ "./node_modules/wallpaper/source/linux/background-managers/dconf.js":
/*!**************************************************************************!*\
  !*** ./node_modules/wallpaper/source/linux/background-managers/dconf.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   get: () => (/* binding */ get),\n/* harmony export */   isAvailable: () => (/* binding */ isAvailable),\n/* harmony export */   set: () => (/* binding */ set)\n/* harmony export */ });\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ \"./node_modules/wallpaper/source/linux/util.js\");\n\n\nasync function isAvailable() {\n\treturn (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.commandExists)('dconf');\n}\n\nasync function get() {\n\tconst {stdout} = await (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.execFile)('dconf', [\n\t\t'read',\n\t\t'/org/mate/desktop/background/picture-filename',\n\t]);\n\n\treturn stdout.trim().slice(1, -1);\n}\n\nasync function set(imagePath) {\n\tawait (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.execFile)('dconf', [\n\t\t'write',\n\t\t'/org/mate/desktop/background/picture-filename',\n\t\t`\"${imagePath}\"`,\n\t]);\n}\n\n\n//# sourceURL=webpack://cross-platform-wallpaper-app/./node_modules/wallpaper/source/linux/background-managers/dconf.js?");

/***/ }),

/***/ "./node_modules/wallpaper/source/linux/background-managers/dcop.js":
/*!*************************************************************************!*\
  !*** ./node_modules/wallpaper/source/linux/background-managers/dcop.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isAvailable: () => (/* binding */ isAvailable),\n/* harmony export */   set: () => (/* binding */ set)\n/* harmony export */ });\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ \"./node_modules/wallpaper/source/linux/util.js\");\n\n\nasync function isAvailable() {\n\treturn (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.commandExists)('dcop');\n}\n\nasync function set(imagePath) {\n\tawait (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.execFile)('dcop', [\n\t\t'kdesktop',\n\t\t'KBackgroundIface',\n\t\t'setWallpaper',\n\t\t`${imagePath} 1`,\n\t]);\n}\n\n\n//# sourceURL=webpack://cross-platform-wallpaper-app/./node_modules/wallpaper/source/linux/background-managers/dcop.js?");

/***/ }),

/***/ "./node_modules/wallpaper/source/linux/background-managers/feh.js":
/*!************************************************************************!*\
  !*** ./node_modules/wallpaper/source/linux/background-managers/feh.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isAvailable: () => (/* binding */ isAvailable),\n/* harmony export */   set: () => (/* binding */ set)\n/* harmony export */ });\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ \"./node_modules/wallpaper/source/linux/util.js\");\n\n\nasync function isAvailable() {\n\treturn (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.commandExists)('feh');\n}\n\nasync function set(imagePath) {\n\tawait (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.execFile)('feh', ['--bg-fill', imagePath]);\n}\n\n\n//# sourceURL=webpack://cross-platform-wallpaper-app/./node_modules/wallpaper/source/linux/background-managers/feh.js?");

/***/ }),

/***/ "./node_modules/wallpaper/source/linux/background-managers/gconftool-2.js":
/*!********************************************************************************!*\
  !*** ./node_modules/wallpaper/source/linux/background-managers/gconftool-2.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isAvailable: () => (/* binding */ isAvailable),\n/* harmony export */   set: () => (/* binding */ set)\n/* harmony export */ });\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ \"./node_modules/wallpaper/source/linux/util.js\");\n\n\nasync function isAvailable() {\n\treturn (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.commandExists)('gconftool-2');\n}\n\nasync function set(imagePath) {\n\tawait (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.execFile)('gconftool-2', [\n\t\t'--set',\n\t\t'/desktop/gnome/background/picture_filename',\n\t\t'--type',\n\t\t'string',\n\t\timagePath,\n\t]);\n}\n\n\n//# sourceURL=webpack://cross-platform-wallpaper-app/./node_modules/wallpaper/source/linux/background-managers/gconftool-2.js?");

/***/ }),

/***/ "./node_modules/wallpaper/source/linux/background-managers/gnome.js":
/*!**************************************************************************!*\
  !*** ./node_modules/wallpaper/source/linux/background-managers/gnome.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   get: () => (/* binding */ get),\n/* harmony export */   isAvailable: () => (/* binding */ isAvailable),\n/* harmony export */   set: () => (/* binding */ set)\n/* harmony export */ });\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ \"./node_modules/wallpaper/source/linux/util.js\");\n\n\nasync function isAvailable() {\n\treturn (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.commandExists)('gsettings');\n}\n\nasync function get() {\n\tconst {stdout} = await (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.execFile)('gsettings', [\n\t\t'get',\n\t\t'org.gnome.desktop.background',\n\t\t'picture-uri',\n\t]);\n\n\treturn stdout.trim().slice(8, -1);\n}\n\nasync function set(imagePath) {\n\tawait (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.execFile)('gsettings', [\n\t\t'set',\n\t\t'org.gnome.desktop.background',\n\t\t'picture-uri',\n\t\t`file://${imagePath}`,\n\t]);\n}\n\n\n//# sourceURL=webpack://cross-platform-wallpaper-app/./node_modules/wallpaper/source/linux/background-managers/gnome.js?");

/***/ }),

/***/ "./node_modules/wallpaper/source/linux/background-managers/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/wallpaper/source/linux/background-managers/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cinnamon: () => (/* reexport module object */ _cinnamon_js__WEBPACK_IMPORTED_MODULE_0__),\n/* harmony export */   dconf: () => (/* reexport module object */ _dconf_js__WEBPACK_IMPORTED_MODULE_1__),\n/* harmony export */   dcop: () => (/* reexport module object */ _dcop_js__WEBPACK_IMPORTED_MODULE_2__),\n/* harmony export */   feh: () => (/* reexport module object */ _feh_js__WEBPACK_IMPORTED_MODULE_3__),\n/* harmony export */   gconftool2: () => (/* reexport module object */ _gconftool_2_js__WEBPACK_IMPORTED_MODULE_4__),\n/* harmony export */   gnome: () => (/* reexport module object */ _gnome_js__WEBPACK_IMPORTED_MODULE_5__),\n/* harmony export */   mate: () => (/* reexport module object */ _mate_js__WEBPACK_IMPORTED_MODULE_6__),\n/* harmony export */   nitrogen: () => (/* reexport module object */ _nitrogen_js__WEBPACK_IMPORTED_MODULE_7__),\n/* harmony export */   pcmanfm: () => (/* reexport module object */ _pcmanfm_js__WEBPACK_IMPORTED_MODULE_8__),\n/* harmony export */   qdbus: () => (/* reexport module object */ _qdbus_js__WEBPACK_IMPORTED_MODULE_9__),\n/* harmony export */   setroot: () => (/* reexport module object */ _setroot_js__WEBPACK_IMPORTED_MODULE_10__),\n/* harmony export */   xfconfquery: () => (/* reexport module object */ _xfconf_query_js__WEBPACK_IMPORTED_MODULE_11__)\n/* harmony export */ });\n/* harmony import */ var _cinnamon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cinnamon.js */ \"./node_modules/wallpaper/source/linux/background-managers/cinnamon.js\");\n/* harmony import */ var _dconf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dconf.js */ \"./node_modules/wallpaper/source/linux/background-managers/dconf.js\");\n/* harmony import */ var _dcop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dcop.js */ \"./node_modules/wallpaper/source/linux/background-managers/dcop.js\");\n/* harmony import */ var _feh_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feh.js */ \"./node_modules/wallpaper/source/linux/background-managers/feh.js\");\n/* harmony import */ var _gconftool_2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gconftool-2.js */ \"./node_modules/wallpaper/source/linux/background-managers/gconftool-2.js\");\n/* harmony import */ var _gnome_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gnome.js */ \"./node_modules/wallpaper/source/linux/background-managers/gnome.js\");\n/* harmony import */ var _mate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mate.js */ \"./node_modules/wallpaper/source/linux/background-managers/mate.js\");\n/* harmony import */ var _nitrogen_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nitrogen.js */ \"./node_modules/wallpaper/source/linux/background-managers/nitrogen.js\");\n/* harmony import */ var _pcmanfm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pcmanfm.js */ \"./node_modules/wallpaper/source/linux/background-managers/pcmanfm.js\");\n/* harmony import */ var _qdbus_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./qdbus.js */ \"./node_modules/wallpaper/source/linux/background-managers/qdbus.js\");\n/* harmony import */ var _setroot_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./setroot.js */ \"./node_modules/wallpaper/source/linux/background-managers/setroot.js\");\n/* harmony import */ var _xfconf_query_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./xfconf-query.js */ \"./node_modules/wallpaper/source/linux/background-managers/xfconf-query.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://cross-platform-wallpaper-app/./node_modules/wallpaper/source/linux/background-managers/index.js?");

/***/ }),

/***/ "./node_modules/wallpaper/source/linux/background-managers/mate.js":
/*!*************************************************************************!*\
  !*** ./node_modules/wallpaper/source/linux/background-managers/mate.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   get: () => (/* binding */ get),\n/* harmony export */   isAvailable: () => (/* binding */ isAvailable),\n/* harmony export */   set: () => (/* binding */ set)\n/* harmony export */ });\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ \"./node_modules/wallpaper/source/linux/util.js\");\n\n\nasync function isAvailable() {\n\tif (!await (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.commandExists)('gsettings')) {\n\t\treturn false;\n\t}\n\n\ttry {\n\t\tconst {stdout} = await (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.execFile)('gsettings', ['list-schemas']);\n\t\treturn (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.hasLine)(stdout, 'org.mate.background');\n\t} catch {\n\t\treturn false;\n\t}\n}\n\nasync function get() {\n\tconst {stdout} = await (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.execFile)('gsettings', [\n\t\t'get',\n\t\t'org.mate.background',\n\t\t'picture-filename',\n\t]);\n\n\treturn stdout.trim().slice(1, -1);\n}\n\nasync function set(imagePath) {\n\tawait (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.execFile)('gsettings', [\n\t\t'set',\n\t\t'org.mate.background',\n\t\t'picture-filename',\n\t\timagePath,\n\t]);\n}\n\n\n//# sourceURL=webpack://cross-platform-wallpaper-app/./node_modules/wallpaper/source/linux/background-managers/mate.js?");

/***/ }),

/***/ "./node_modules/wallpaper/source/linux/background-managers/nitrogen.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/wallpaper/source/linux/background-managers/nitrogen.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   get: () => (/* binding */ get),\n/* harmony export */   isAvailable: () => (/* binding */ isAvailable),\n/* harmony export */   set: () => (/* binding */ set)\n/* harmony export */ });\n/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:path */ \"node:path\");\n/* harmony import */ var node_os__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node:os */ \"node:os\");\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util.js */ \"./node_modules/wallpaper/source/linux/util.js\");\n\n\n\n\nconst homeDirectory = node_os__WEBPACK_IMPORTED_MODULE_1__.homedir();\n\nasync function isAvailable() {\n\treturn (0,_util_js__WEBPACK_IMPORTED_MODULE_2__.commandExists)('nitrogen');\n}\n\nasync function get() {\n\tconst configFile = node_path__WEBPACK_IMPORTED_MODULE_0__.join(homeDirectory, '.config/nitrogen/bg-saved.cfg');\n\tconst config = await (0,_util_js__WEBPACK_IMPORTED_MODULE_2__.readFile)(configFile, 'utf8');\n\treturn config.trim().split('\\n').find(line => line.startsWith('file=')).replace('file=', '');\n}\n\nasync function set(imagePath) {\n\tawait (0,_util_js__WEBPACK_IMPORTED_MODULE_2__.execFile)('nitrogen', [\n\t\t'--set-zoom-fill',\n\t\t'--save',\n\t\timagePath,\n\t]);\n}\n\n\n//# sourceURL=webpack://cross-platform-wallpaper-app/./node_modules/wallpaper/source/linux/background-managers/nitrogen.js?");

/***/ }),

/***/ "./node_modules/wallpaper/source/linux/background-managers/pcmanfm.js":
/*!****************************************************************************!*\
  !*** ./node_modules/wallpaper/source/linux/background-managers/pcmanfm.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isAvailable: () => (/* binding */ isAvailable),\n/* harmony export */   set: () => (/* binding */ set)\n/* harmony export */ });\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ \"./node_modules/wallpaper/source/linux/util.js\");\n\n\nasync function isAvailable() {\n\treturn (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.commandExists)('pcmanfm');\n}\n\nasync function set(imagePath) {\n\tawait (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.execFile)('pcmanfm', ['--set-wallpaper', imagePath]);\n}\n\n\n//# sourceURL=webpack://cross-platform-wallpaper-app/./node_modules/wallpaper/source/linux/background-managers/pcmanfm.js?");

/***/ }),

/***/ "./node_modules/wallpaper/source/linux/background-managers/qdbus.js":
/*!**************************************************************************!*\
  !*** ./node_modules/wallpaper/source/linux/background-managers/qdbus.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isAvailable: () => (/* binding */ isAvailable),\n/* harmony export */   set: () => (/* binding */ set)\n/* harmony export */ });\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ \"./node_modules/wallpaper/source/linux/util.js\");\n\n\nasync function isAvailable() {\n\treturn (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.commandExists)('qdbus');\n}\n\nasync function set(imagePath) {\n\tawait (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.execFile)('qdbus', [\n\t\t'org.kde.plasmashell',\n\t\t'/PlasmaShell',\n\t\t'org.kde.PlasmaShell.evaluateScript',\n\t\t`\n\t\tvar allDesktops = desktops();\n\t\tfor (var i = 0; i < allDesktops.length; i++) {\n\t\t\tvar desktop = allDesktops[i];\n\t\t\tdesktop.wallpaperPlugin = 'org.kde.image';\n\t\t\tdesktop.currentConfigGroup = ['Wallpaper', 'org.kde.image', 'General'];\n\t\t\tdesktop.writeConfig('Image', 'file://${imagePath}');\n\t\t}\n\t\t`,\n\t]);\n}\n\n\n//# sourceURL=webpack://cross-platform-wallpaper-app/./node_modules/wallpaper/source/linux/background-managers/qdbus.js?");

/***/ }),

/***/ "./node_modules/wallpaper/source/linux/background-managers/setroot.js":
/*!****************************************************************************!*\
  !*** ./node_modules/wallpaper/source/linux/background-managers/setroot.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isAvailable: () => (/* binding */ isAvailable),\n/* harmony export */   set: () => (/* binding */ set)\n/* harmony export */ });\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ \"./node_modules/wallpaper/source/linux/util.js\");\n\n\nasync function isAvailable() {\n\treturn (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.commandExists)('setroot');\n}\n\nasync function set(imagePath) {\n\tawait (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.execFile)('setroot', [imagePath]);\n}\n\n\n//# sourceURL=webpack://cross-platform-wallpaper-app/./node_modules/wallpaper/source/linux/background-managers/setroot.js?");

/***/ }),

/***/ "./node_modules/wallpaper/source/linux/background-managers/xfconf-query.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/wallpaper/source/linux/background-managers/xfconf-query.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isAvailable: () => (/* binding */ isAvailable),\n/* harmony export */   set: () => (/* binding */ set)\n/* harmony export */ });\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ \"./node_modules/wallpaper/source/linux/util.js\");\n\n\nasync function isAvailable() {\n\treturn (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.commandExists)('xfconf-query');\n}\n\nasync function set(imagePath) {\n\tawait (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.execFile)('xfconf-query', [\n\t\t'--channel',\n\t\t'xfce4-desktop',\n\t\t'--property',\n\t\t'/backdrop/screen0/monitor0/image-path',\n\t\t'--set',\n\t\t`${imagePath}`,\n\t]);\n}\n\n\n//# sourceURL=webpack://cross-platform-wallpaper-app/./node_modules/wallpaper/source/linux/background-managers/xfconf-query.js?");

/***/ }),

/***/ "./node_modules/wallpaper/source/linux/index.js":
/*!******************************************************!*\
  !*** ./node_modules/wallpaper/source/linux/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWallpaper: () => (/* binding */ getWallpaper),\n/* harmony export */   setWallpaper: () => (/* binding */ setWallpaper)\n/* harmony export */ });\n/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:path */ \"node:path\");\n/* harmony import */ var _background_managers_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background-managers/index.js */ \"./node_modules/wallpaper/source/linux/background-managers/index.js\");\n\n\n\nlet availableApps;\n\nasync function setAvailableApps() {\n\tavailableApps = [];\n\n\tconst promises = Object.values(_background_managers_index_js__WEBPACK_IMPORTED_MODULE_1__).map(async manager => {\n\t\tif (await manager.isAvailable()) {\n\t\t\tavailableApps.push(manager);\n\t\t}\n\t});\n\n\tawait Promise.all(promises);\n}\n\nasync function getWallpaper() {\n\tif (!availableApps) {\n\t\tawait setAvailableApps();\n\t\treturn getWallpaper();\n\t}\n\n\tconst wallpapersVoted = new Map();\n\tconst promises = availableApps.map(async app => {\n\t\tif (typeof app.get !== 'function') {\n\t\t\treturn;\n\t\t}\n\n\t\tconst imagePath = await app.get();\n\n\t\tif (typeof imagePath !== 'undefined') {\n\t\t\tif (!wallpapersVoted.get(imagePath)) {\n\t\t\t\twallpapersVoted.set(imagePath, 0);\n\t\t\t}\n\n\t\t\twallpapersVoted.set(imagePath, wallpapersVoted.get(imagePath) + 1);\n\t\t}\n\t});\n\n\tawait Promise.all(promises.map(promise => promise.catch(() => {})));\n\n\tlet wallpaperMostVoted;\n\tlet wallpaperMostVotedCount;\n\n\tfor (const [wallpaper] of wallpapersVoted) {\n\t\tif (!wallpaperMostVoted || wallpaperMostVoted[wallpaper] > wallpaperMostVotedCount) {\n\t\t\twallpaperMostVoted = wallpaper;\n\t\t\twallpaperMostVotedCount = wallpaperMostVoted[wallpaper];\n\t\t}\n\t}\n\n\treturn wallpaperMostVoted;\n}\n\nasync function setWallpaper(imagePath) {\n\tif (typeof imagePath !== 'string') {\n\t\tthrow new TypeError('Expected a string');\n\t}\n\n\tif (!availableApps) {\n\t\tawait setAvailableApps();\n\t\tawait setWallpaper(imagePath);\n\t\treturn;\n\t}\n\n\tconst promises = availableApps.map(async app => {\n\t\tif (typeof app.set === 'function') {\n\t\t\tawait app.set(node_path__WEBPACK_IMPORTED_MODULE_0__.resolve(imagePath));\n\t\t}\n\t});\n\n\tawait Promise.allSettled(promises);\n}\n\n\n//# sourceURL=webpack://cross-platform-wallpaper-app/./node_modules/wallpaper/source/linux/index.js?");

/***/ }),

/***/ "./node_modules/wallpaper/source/linux/util.js":
/*!*****************************************************!*\
  !*** ./node_modules/wallpaper/source/linux/util.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   commandExists: () => (/* binding */ commandExists),\n/* harmony export */   exec: () => (/* binding */ exec),\n/* harmony export */   execFile: () => (/* binding */ execFile),\n/* harmony export */   hasLine: () => (/* binding */ hasLine),\n/* harmony export */   readFile: () => (/* binding */ readFile)\n/* harmony export */ });\n/* harmony import */ var node_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:util */ \"node:util\");\n/* harmony import */ var node_child_process__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node:child_process */ \"node:child_process\");\n/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node:fs */ \"node:fs\");\n\n\n\n\nconst execFile = (0,node_util__WEBPACK_IMPORTED_MODULE_0__.promisify)(node_child_process__WEBPACK_IMPORTED_MODULE_1__.execFile);\nconst exec = (0,node_util__WEBPACK_IMPORTED_MODULE_0__.promisify)(node_child_process__WEBPACK_IMPORTED_MODULE_1__.exec);\n\nasync function commandExists(command) {\n\t// `which` all commands and expect stdout to return a positive\n\ttry {\n\t\tlet {stdout} = await execFile('which', ['-a', command]);\n\t\tstdout = stdout.trim();\n\n\t\tif (!stdout) {\n\t\t\treturn false;\n\t\t}\n\n\t\treturn true;\n\t} catch {\n\t\treturn false;\n\t}\n}\n\nfunction hasLine(string, lineToFind) {\n\treturn string.split('\\n').find(line => line.trim() === lineToFind);\n}\n\nconst {readFile} = node_fs__WEBPACK_IMPORTED_MODULE_2__.promises;\n\n\n//# sourceURL=webpack://cross-platform-wallpaper-app/./node_modules/wallpaper/source/linux/util.js?");

/***/ }),

/***/ "./node_modules/wallpaper/source/macos.js":
/*!************************************************!*\
  !*** ./node_modules/wallpaper/source/macos.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWallpaper: () => (/* binding */ getWallpaper),\n/* harmony export */   screens: () => (/* binding */ screens),\n/* harmony export */   setSolidColorWallpaper: () => (/* binding */ setSolidColorWallpaper),\n/* harmony export */   setWallpaper: () => (/* binding */ setWallpaper)\n/* harmony export */ });\n/* harmony import */ var node_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:util */ \"node:util\");\n/* harmony import */ var node_child_process__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node:child_process */ \"node:child_process\");\n/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node:path */ \"node:path\");\n/* harmony import */ var node_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node:url */ \"node:url\");\n\n\n\n\n\nconst __dirname = node_path__WEBPACK_IMPORTED_MODULE_2__.dirname((0,node_url__WEBPACK_IMPORTED_MODULE_3__.fileURLToPath)(\"file:///Users/joel/web-dev/cross-platform-wallpapers/node_modules/wallpaper/source/macos.js\"));\nconst execFile = (0,node_util__WEBPACK_IMPORTED_MODULE_0__.promisify)(node_child_process__WEBPACK_IMPORTED_MODULE_1__.execFile);\n\n// Binary source → https://github.com/sindresorhus/macos-wallpaper\nconst binary = node_path__WEBPACK_IMPORTED_MODULE_2__.join(__dirname, 'macos-wallpaper');\n\nasync function getWallpaper({screen = 'main'} = {}) {\n\tlet {stdout} = await execFile(binary, ['get', '--screen', screen]);\n\tstdout = stdout.trim();\n\n\tif (screen === 'all') {\n\t\treturn stdout.split('\\n');\n\t}\n\n\treturn stdout;\n}\n\nasync function setWallpaper(imagePath, {screen = 'all', scale = 'auto'} = {}) {\n\tif (typeof imagePath !== 'string') {\n\t\tthrow new TypeError('Expected a string');\n\t}\n\n\tconst arguments_ = [\n\t\t'set',\n\t\tnode_path__WEBPACK_IMPORTED_MODULE_2__.resolve(imagePath),\n\t\t'--screen',\n\t\tscreen,\n\t\t'--scale',\n\t\tscale,\n\t];\n\n\tawait execFile(binary, arguments_);\n}\n\nasync function setSolidColorWallpaper(color, {screen = 'all'} = {}) {\n\tif (typeof color !== 'string') {\n\t\tthrow new TypeError('Expected a string');\n\t}\n\n\tconst arguments_ = [\n\t\t'set-solid-color',\n\t\tcolor,\n\t\t'--screen',\n\t\tscreen,\n\t];\n\n\tawait execFile(binary, arguments_);\n}\n\nasync function screens() {\n\tconst {stdout} = await execFile(binary, ['screens']);\n\treturn stdout.trim().split('\\n').map(line => line.replace(/^\\d+ - /, ''));\n}\n\n\n//# sourceURL=webpack://cross-platform-wallpaper-app/./node_modules/wallpaper/source/macos.js?");

/***/ }),

/***/ "./node_modules/wallpaper/source/windows.js":
/*!**************************************************!*\
  !*** ./node_modules/wallpaper/source/windows.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWallpaper: () => (/* binding */ getWallpaper),\n/* harmony export */   setWallpaper: () => (/* binding */ setWallpaper)\n/* harmony export */ });\n/* harmony import */ var node_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:util */ \"node:util\");\n/* harmony import */ var node_child_process__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node:child_process */ \"node:child_process\");\n/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node:path */ \"node:path\");\n/* harmony import */ var node_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node:url */ \"node:url\");\n\n\n\n\n\nconst __dirname = node_path__WEBPACK_IMPORTED_MODULE_2__.dirname((0,node_url__WEBPACK_IMPORTED_MODULE_3__.fileURLToPath)(\"file:///Users/joel/web-dev/cross-platform-wallpapers/node_modules/wallpaper/source/windows.js\"));\nconst execFile = (0,node_util__WEBPACK_IMPORTED_MODULE_0__.promisify)(node_child_process__WEBPACK_IMPORTED_MODULE_1__.execFile);\n\n// Binary source → https://github.com/sindresorhus/win-wallpaper\nconst binary = node_path__WEBPACK_IMPORTED_MODULE_2__.join(__dirname, 'windows-wallpaper.exe');\n\nasync function getWallpaper() {\n\tconst {stdout} = await execFile(binary);\n\treturn stdout.trim();\n}\n\nasync function setWallpaper(imagePath) {\n\tif (typeof imagePath !== 'string') {\n\t\tthrow new TypeError('Expected a string');\n\t}\n\n\tawait execFile(binary, [node_path__WEBPACK_IMPORTED_MODULE_2__.resolve(imagePath)]);\n}\n\n\n//# sourceURL=webpack://cross-platform-wallpaper-app/./node_modules/wallpaper/source/windows.js?");

/***/ }),

/***/ "node:child_process":
/*!**************************!*\
  !*** node:child_process ***!
  \**************************/
/***/ (() => {

eval("throw new Error(\"Module build failed: UnhandledSchemeError: Reading from \\\"node:child_process\\\" is not handled by plugins (Unhandled scheme).\\nWebpack supports \\\"data:\\\" and \\\"file:\\\" URIs by default.\\nYou may need an additional plugin to handle \\\"node:\\\" URIs.\\n    at /Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:838:25\\n    at Hook.eval [as callAsync] (eval at create (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at Object.processResource (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:835:8)\\n    at processResource (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/loader-runner/lib/LoaderRunner.js:220:11)\\n    at iteratePitchingLoaders (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/loader-runner/lib/LoaderRunner.js:171:10)\\n    at runLoaders (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/loader-runner/lib/LoaderRunner.js:398:2)\\n    at NormalModule._doBuild (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:825:3)\\n    at NormalModule.build (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:969:15)\\n    at /Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/Compilation.js:1377:12\\n    at NormalModule.needBuild (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:1257:32)\\n    at Compilation._buildModule (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/Compilation.js:1358:10)\\n    at /Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/util/AsyncQueue.js:303:10\\n    at Hook.eval [as callAsync] (eval at create (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncQueue._startProcessing (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/util/AsyncQueue.js:293:26)\\n    at AsyncQueue._ensureProcessing (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/util/AsyncQueue.js:280:12)\\n    at process.processImmediate (node:internal/timers:476:21)\");\n\n//# sourceURL=webpack://cross-platform-wallpaper-app/node:child_process?");

/***/ }),

/***/ "node:fs":
/*!***************!*\
  !*** node:fs ***!
  \***************/
/***/ (() => {

eval("throw new Error(\"Module build failed: UnhandledSchemeError: Reading from \\\"node:fs\\\" is not handled by plugins (Unhandled scheme).\\nWebpack supports \\\"data:\\\" and \\\"file:\\\" URIs by default.\\nYou may need an additional plugin to handle \\\"node:\\\" URIs.\\n    at /Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:838:25\\n    at Hook.eval [as callAsync] (eval at create (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at Object.processResource (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:835:8)\\n    at processResource (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/loader-runner/lib/LoaderRunner.js:220:11)\\n    at iteratePitchingLoaders (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/loader-runner/lib/LoaderRunner.js:171:10)\\n    at runLoaders (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/loader-runner/lib/LoaderRunner.js:398:2)\\n    at NormalModule._doBuild (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:825:3)\\n    at NormalModule.build (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:969:15)\\n    at /Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/Compilation.js:1377:12\\n    at NormalModule.needBuild (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:1257:32)\\n    at Compilation._buildModule (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/Compilation.js:1358:10)\\n    at /Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/util/AsyncQueue.js:303:10\\n    at Hook.eval [as callAsync] (eval at create (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncQueue._startProcessing (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/util/AsyncQueue.js:293:26)\\n    at AsyncQueue._ensureProcessing (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/util/AsyncQueue.js:280:12)\\n    at process.processImmediate (node:internal/timers:476:21)\");\n\n//# sourceURL=webpack://cross-platform-wallpaper-app/node:fs?");

/***/ }),

/***/ "node:os":
/*!***************!*\
  !*** node:os ***!
  \***************/
/***/ (() => {

eval("throw new Error(\"Module build failed: UnhandledSchemeError: Reading from \\\"node:os\\\" is not handled by plugins (Unhandled scheme).\\nWebpack supports \\\"data:\\\" and \\\"file:\\\" URIs by default.\\nYou may need an additional plugin to handle \\\"node:\\\" URIs.\\n    at /Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:838:25\\n    at Hook.eval [as callAsync] (eval at create (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at Object.processResource (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:835:8)\\n    at processResource (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/loader-runner/lib/LoaderRunner.js:220:11)\\n    at iteratePitchingLoaders (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/loader-runner/lib/LoaderRunner.js:171:10)\\n    at runLoaders (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/loader-runner/lib/LoaderRunner.js:398:2)\\n    at NormalModule._doBuild (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:825:3)\\n    at NormalModule.build (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:969:15)\\n    at /Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/Compilation.js:1377:12\\n    at NormalModule.needBuild (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:1257:32)\\n    at Compilation._buildModule (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/Compilation.js:1358:10)\\n    at /Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/util/AsyncQueue.js:303:10\\n    at Hook.eval [as callAsync] (eval at create (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncQueue._startProcessing (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/util/AsyncQueue.js:293:26)\\n    at AsyncQueue._ensureProcessing (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/util/AsyncQueue.js:280:12)\\n    at process.processImmediate (node:internal/timers:476:21)\");\n\n//# sourceURL=webpack://cross-platform-wallpaper-app/node:os?");

/***/ }),

/***/ "node:path":
/*!*****************!*\
  !*** node:path ***!
  \*****************/
/***/ (() => {

eval("throw new Error(\"Module build failed: UnhandledSchemeError: Reading from \\\"node:path\\\" is not handled by plugins (Unhandled scheme).\\nWebpack supports \\\"data:\\\" and \\\"file:\\\" URIs by default.\\nYou may need an additional plugin to handle \\\"node:\\\" URIs.\\n    at /Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:838:25\\n    at Hook.eval [as callAsync] (eval at create (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at Object.processResource (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:835:8)\\n    at processResource (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/loader-runner/lib/LoaderRunner.js:220:11)\\n    at iteratePitchingLoaders (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/loader-runner/lib/LoaderRunner.js:171:10)\\n    at runLoaders (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/loader-runner/lib/LoaderRunner.js:398:2)\\n    at NormalModule._doBuild (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:825:3)\\n    at NormalModule.build (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:969:15)\\n    at /Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/Compilation.js:1377:12\\n    at NormalModule.needBuild (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:1257:32)\\n    at Compilation._buildModule (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/Compilation.js:1358:10)\\n    at /Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/util/AsyncQueue.js:303:10\\n    at Hook.eval [as callAsync] (eval at create (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncQueue._startProcessing (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/util/AsyncQueue.js:293:26)\\n    at AsyncQueue._ensureProcessing (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/util/AsyncQueue.js:280:12)\\n    at process.processImmediate (node:internal/timers:476:21)\");\n\n//# sourceURL=webpack://cross-platform-wallpaper-app/node:path?");

/***/ }),

/***/ "node:process":
/*!********************!*\
  !*** node:process ***!
  \********************/
/***/ (() => {

eval("throw new Error(\"Module build failed: UnhandledSchemeError: Reading from \\\"node:process\\\" is not handled by plugins (Unhandled scheme).\\nWebpack supports \\\"data:\\\" and \\\"file:\\\" URIs by default.\\nYou may need an additional plugin to handle \\\"node:\\\" URIs.\\n    at /Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:838:25\\n    at Hook.eval [as callAsync] (eval at create (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/tapable/lib/Hook.js:18:14)\\n    at Object.processResource (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:835:8)\\n    at processResource (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/loader-runner/lib/LoaderRunner.js:220:11)\\n    at iteratePitchingLoaders (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/loader-runner/lib/LoaderRunner.js:171:10)\\n    at runLoaders (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/loader-runner/lib/LoaderRunner.js:398:2)\\n    at NormalModule._doBuild (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:825:3)\\n    at NormalModule.build (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:969:15)\\n    at /Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/Compilation.js:1377:12\\n    at NormalModule.needBuild (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:1257:32)\\n    at Compilation._buildModule (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/Compilation.js:1358:10)\\n    at /Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/util/AsyncQueue.js:303:10\\n    at Hook.eval [as callAsync] (eval at create (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncQueue._startProcessing (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/util/AsyncQueue.js:293:26)\\n    at AsyncQueue._ensureProcessing (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/util/AsyncQueue.js:280:12)\\n    at process.processImmediate (node:internal/timers:476:21)\");\n\n//# sourceURL=webpack://cross-platform-wallpaper-app/node:process?");

/***/ }),

/***/ "node:url":
/*!****************!*\
  !*** node:url ***!
  \****************/
/***/ (() => {

eval("throw new Error(\"Module build failed: UnhandledSchemeError: Reading from \\\"node:url\\\" is not handled by plugins (Unhandled scheme).\\nWebpack supports \\\"data:\\\" and \\\"file:\\\" URIs by default.\\nYou may need an additional plugin to handle \\\"node:\\\" URIs.\\n    at /Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:838:25\\n    at Hook.eval [as callAsync] (eval at create (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at Object.processResource (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:835:8)\\n    at processResource (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/loader-runner/lib/LoaderRunner.js:220:11)\\n    at iteratePitchingLoaders (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/loader-runner/lib/LoaderRunner.js:171:10)\\n    at runLoaders (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/loader-runner/lib/LoaderRunner.js:398:2)\\n    at NormalModule._doBuild (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:825:3)\\n    at NormalModule.build (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:969:15)\\n    at /Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/Compilation.js:1377:12\\n    at NormalModule.needBuild (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:1257:32)\\n    at Compilation._buildModule (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/Compilation.js:1358:10)\\n    at /Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/util/AsyncQueue.js:303:10\\n    at Hook.eval [as callAsync] (eval at create (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncQueue._startProcessing (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/util/AsyncQueue.js:293:26)\\n    at AsyncQueue._ensureProcessing (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/util/AsyncQueue.js:280:12)\\n    at process.processImmediate (node:internal/timers:476:21)\");\n\n//# sourceURL=webpack://cross-platform-wallpaper-app/node:url?");

/***/ }),

/***/ "node:util":
/*!*****************!*\
  !*** node:util ***!
  \*****************/
/***/ (() => {

eval("throw new Error(\"Module build failed: UnhandledSchemeError: Reading from \\\"node:util\\\" is not handled by plugins (Unhandled scheme).\\nWebpack supports \\\"data:\\\" and \\\"file:\\\" URIs by default.\\nYou may need an additional plugin to handle \\\"node:\\\" URIs.\\n    at /Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:838:25\\n    at Hook.eval [as callAsync] (eval at create (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at Object.processResource (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:835:8)\\n    at processResource (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/loader-runner/lib/LoaderRunner.js:220:11)\\n    at iteratePitchingLoaders (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/loader-runner/lib/LoaderRunner.js:171:10)\\n    at runLoaders (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/loader-runner/lib/LoaderRunner.js:398:2)\\n    at NormalModule._doBuild (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:825:3)\\n    at NormalModule.build (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:969:15)\\n    at /Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/Compilation.js:1377:12\\n    at NormalModule.needBuild (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/NormalModule.js:1257:32)\\n    at Compilation._buildModule (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/Compilation.js:1358:10)\\n    at /Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/util/AsyncQueue.js:303:10\\n    at Hook.eval [as callAsync] (eval at create (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncQueue._startProcessing (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/util/AsyncQueue.js:293:26)\\n    at AsyncQueue._ensureProcessing (/Users/joel/web-dev/cross-platform-wallpapers/node_modules/webpack/lib/util/AsyncQueue.js:280:12)\\n    at process.processImmediate (node:internal/timers:476:21)\");\n\n//# sourceURL=webpack://cross-platform-wallpaper-app/node:util?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://weather-app/./src/assets/style.css?");

/***/ }),

/***/ "./src/controller/domController.js":
/*!*****************************************!*\
  !*** ./src/controller/domController.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayInfo: () => (/* binding */ displayInfo),\n/* harmony export */   hideElement: () => (/* binding */ hideElement),\n/* harmony export */   hideInfo: () => (/* binding */ hideInfo),\n/* harmony export */   updateWeather: () => (/* binding */ updateWeather)\n/* harmony export */ });\nfunction updateCityAndCountry(wth) {\n  const city = document.querySelector('#city');\n  const country = document.querySelector('#country');\n\n  city.textContent = `${wth.location.name}, `;\n  country.textContent = wth.location.country;\n}\n\nfunction updateCondition(wth) {\n  const condition = document.querySelector('#weather-condition');\n  condition.textContent = wth.current.condition.text;\n}\n\nfunction updateIcon(wth) {\n  const icon = document.querySelector('#weather-icon');\n  icon.src = wth.current.condition.icon;\n}\n\nfunction updateTemperature(wth) {\n  const temperature = document.querySelector('#temperature');\n  temperature.textContent = wth.current.temp_c;\n}\n\nfunction updateHumidity(wth) {\n  const humidity = document.querySelector('#humidity');\n  humidity.textContent = wth.current.humidity;\n}\n\nfunction updateWindSpeed(wth) {\n  const windSpeed = document.querySelector('#wind-speed');\n  windSpeed.textContent = wth.current.wind_mph;\n}\n\nfunction showElement(element) {\n  const loading = document.querySelector(element);\n  loading.classList.remove('hidden');\n}\n\nfunction hideElement(element) {\n  const loading = document.querySelector(element);\n  loading.classList.add('hidden');\n}\n\nfunction displayInfo(elementToHide, elementToShow) {\n  setTimeout(() => {\n    hideElement(elementToHide);\n    showElement(elementToShow);\n  }, 400);\n}\n\nfunction hideInfo(elementToShow, elementToHide) {\n  showElement(elementToShow);\n  hideElement(elementToHide);\n}\n\nfunction updateWeather(wth) {\n  updateCityAndCountry(wth);\n  updateCondition(wth);\n  updateIcon(wth);\n  updateTemperature(wth);\n  updateHumidity(wth);\n  updateWindSpeed(wth);\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/controller/domController.js?");

/***/ }),

/***/ "./src/controller/main.js":
/*!********************************!*\
  !*** ./src/controller/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/style.css */ \"./src/assets/style.css\");\n/* harmony import */ var _weatherController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherController */ \"./src/controller/weatherController.js\");\n\n\n\n\ndocument.addEventListener('submit', (e) => {\n  e.preventDefault();\n  (0,_weatherController__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  e.target.reset();\n});\n\n//# sourceURL=webpack://weather-app/./src/controller/main.js?");

/***/ }),

/***/ "./src/controller/weatherController.js":
/*!*********************************************!*\
  !*** ./src/controller/weatherController.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ processData)\n/* harmony export */ });\n/* harmony import */ var _domController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domController */ \"./src/controller/domController.js\");\n\n\n\nfunction requestUrl(location) {\n  const key = '94c1fa00c6a040f6a5672750230106';\n  const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`;\n  return url;\n}\n\nasync function getWeather(location) {\n  try {\n    (0,_domController__WEBPACK_IMPORTED_MODULE_0__.hideInfo)('#loading', '#weather-info');\n    (0,_domController__WEBPACK_IMPORTED_MODULE_0__.hideElement)('#error');\n    const url = requestUrl(location);\n    const response = await fetch(url, { mode: 'cors' });\n    const weather = await response.json();\n    return weather;\n  } catch (error) {\n    throw new Error('Can\\'t fetch data');\n  }\n}\n\nasync function processData() {\n  try {\n    const location = document.getElementById('input-form').value;\n    const weather = location === '' ? await getWeather('london') : await getWeather(location);\n    (0,_domController__WEBPACK_IMPORTED_MODULE_0__.updateWeather)(weather);\n    (0,_domController__WEBPACK_IMPORTED_MODULE_0__.displayInfo)('#loading', '#weather-info');\n  } catch (error) {\n    (0,_domController__WEBPACK_IMPORTED_MODULE_0__.displayInfo)('#loading', '#error');\n    throw new Error('Can\\'t process data');\n  }\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/controller/weatherController.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/controller/main.js");
/******/ 	
/******/ })()
;
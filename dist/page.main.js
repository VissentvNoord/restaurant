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

/***/ "./src/scripts/page.js":
/*!*****************************!*\
  !*** ./src/scripts/page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadTab)\n/* harmony export */ });\nlet currentPage = \"\";\n\nfunction loadTab(page){\n    const content = document.getElementById('content');\n    content.innerHTML = \"\";\n    switch(page){\n        case \"header\":\n            header();\n            break;\n        case \"home\":\n            homePage();\n            currentPage = \"home\";\n            break;\n        case \"menu\":\n            menuPage();\n            currentPage = \"menu\";\n            break;\n        case \"contact\":\n            contactPage();\n            currentPage = \"contact\";\n            break;\n    }\n}\n\nfunction header(){\n    const content = document.getElementById('content');\n\n    const container = document.createElement('div');\n    container.id = 'header';\n    document.body.insertBefore(container, content);\n\n    for(let i = 0; i < 3; i++){\n        const newButton = document.createElement('button');\n\n        if(i == 0){\n            newButton.innerHTML = \"Home\";\n            newButton.id = \"home\";\n        }else if(i == 1){\n            newButton.innerHTML = \"Menu\";\n            newButton.id = \"menu\";\n        }else{\n            newButton.innerHTML = \"Contact\";\n            newButton.id = \"contact\";\n        }\n\n        container.appendChild(newButton);\n    }\n}\n\nfunction homePage(){\n    const content = document.getElementById('content');\n\n    const container = document.createElement('div');\n    container.classList.add('main');\n    content.appendChild(container);\n\n    const headText = document.createElement(\"h1\");\n    headText.classList.add('title');\n    headText.innerHTML = \"My Restaurant\";\n    container.appendChild(headText);\n\n\n    console.log(\"Generated home page\");\n}\n\nfunction menuPage(){\n    const content = document.getElementById('content');\n\n    const container = document.createElement('div');\n    content.appendChild(container);\n\n    const menuItem1 = document.createElement('h2');\n    menuItem1.innerHTML = \"Kapot lekkere soep!\";\n    container.appendChild(menuItem1);\n}\n\nfunction contactPage(){\n    const content = document.getElementById('content');\n}\n\n//# sourceURL=webpack://restaurant/./src/scripts/page.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/page.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
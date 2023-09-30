/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Lilita_One/LilitaOne-Regular.ttf */ "./src/assets/fonts/Lilita_One/LilitaOne-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Roboto/Roboto-Regular.ttf */ "./src/assets/fonts/Roboto/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/jarritos-mexican-soda-xkVOHCP-_6w-unsplash.jpg */ "./src/assets/images/jarritos-mexican-soda-xkVOHCP-_6w-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/jarritos-mexican-soda-xxjHmSPxD1E-unsplash.jpg */ "./src/assets/images/jarritos-mexican-soda-xxjHmSPxD1E-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --primary-light: #ffffff;
    --secondary-light: #f8f5f2;

    /* colors */
    --primary:  #FF4500;
    --secondary: #228B22;
    --accent: #FFD700;

    --dark: #333;
}

@font-face {
    font-family: 'Lilita One';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype');
    font-weight: normal;
    font-style: normal;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-family: 'Roboto', sans-serif;
    color: var(--dark);
}

body {
    background-color: var(--primary-light);
}

#content {
    display: grid;
    grid-template-rows: auto 1fr auto;
}

#header {
    grid-row: 1;
}

#header .navbar {
    background-color: var(--primary-light);
    overflow: hidden;
    border-top: 5px solid var(--primary);
    border-bottom: 1px solid var(--secondary-light);
    padding: 0.5em 3em;
    font-family: 'Lilita One', cursive;
    font-size: clamp(1rem, 2vw, 1.5rem);
    white-space: nowrap;
    position: fixed;
    top: 0;
    width: 100%;
}

.navbar .nav-list {
    list-style: none;
    display: flex;
    gap: 1em;
    margin: 0;
    align-items: baseline;
}

.navbar .nav-list .nav-item a {
    text-decoration: none;
    color: #333;
}

.nav-item.logo {
    margin-right: auto;
    font-size: clamp(1.5rem, 2vw, 2.5rem);
}

li.nav-item {
    padding: 0.5em;
}

li.nav-item:hover {
    cursor: pointer;
    text-decoration: underline;
}

#main {
    grid-row: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#main .message {
    background-color: var(--secondary-light);
    color: var(--secondary);
    text-align: center;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.25em;
    font-weight: 600;
    width: 100%;
}

#main .hero {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: clamp(400px, 50vh, 800px);
    width: 100%;
    padding: 2em;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.button {
    background-color: var(--primary);
    color: var(--primary-light);
    border: none;
    padding: 0.5em 1em;
    border-radius: 0.25em;
    font-size: 1.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
}

.button:hover {
    scale: 1.1;
}

/* content section */

#main h1 {
    margin: .5em 0;
    font-family: 'Lilita One', cursive;
    font-weight: normal;
}

.content-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1em;
    padding: 1em;
}

.content-card {
    background-color: var(--secondary-light);
    border: 1px solid var(--secondary);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 0.25em;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
}

.content-card img {
    width: 100%;
    height: auto;
    border-radius: 0.25em;
}

#main .hero2 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: clamp(400px, 50vh, 800px);
    width: 100%;
    padding: 2em;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.button.menu,
.button.contact {
    background-color: var(--secondary);
}

#footer {
    width: 100%;
    font-family: 'Lilita One', cursive;
    border-top: 5px solid var(--secondary);
    padding: 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}

/* menu section */

.menu-container {
    grid-row: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5em;
    font-family: 'Lilita One', cursive;
    height: 100%;
    padding: 2em;
    margin-top: 2em;
}

.menu-container .menu-title {
    font-size: 5rem;
}


.category-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1em;
    
}

.menu-container .category-title {
    font-size: 4rem;
    border-bottom: 1px solid var(--secondary);
    
}

.category-items {
    list-style-type: none;
}

/* Appetizers */

.category-items.appetizers .category-item:nth-child(1)::before {
    content: "🥑";
    color: var(--secondary);
    font-size: 2rem;
    margin-right: 0.5em;
}

.category-items.appetizers .category-item:nth-child(2)::before {
    content: "🧀";
    color: var(--secondary);
    font-size: 2rem;
    margin-right: 0.5em;
}

.category-items.appetizers .category-item:nth-child(3)::before {
    content: "🍗";
    color: var(--secondary);
    font-size: 2rem;
    margin-right: 0.5em;
}

/* Main Courses */

.category-items.maincourses .category-item:nth-child(1)::before {
    content: "🌮";
    color: var(--secondary);
    font-size: 2rem;
    margin-right: 0.5em;
}

.category-items.maincourses .category-item:nth-child(2)::before {
    content: "🍗";
    color: var(--secondary);
    font-size: 2rem;
    margin-right: 0.5em;
}

.category-items.maincourses .category-item:nth-child(3)::before {
    content: "🌯";
    color: var(--secondary);
    font-size: 2rem;
    margin-right: 0.5em;
}

/* Desserts */

.category-items.desserts .category-item:nth-child(1)::before {
    content: "🍩";
    color: var(--secondary);
    font-size: 2rem;
    margin-right: 0.5em;
}

.category-items.desserts .category-item:nth-child(2)::before {
    content: "🍰";
    color: var(--secondary);
    font-size: 2rem;
    margin-right: 0.5em;
}

.category-items.desserts .category-item:nth-child(3)::before {
    content: "🍮";
    color: var(--secondary);
    font-size: 2rem;
    margin-right: 0.5em;
}

/* Drinks */

.category-items.drinks .category-item:nth-child(1)::before {
    content: "🍹";
    color: var(--secondary);
    font-size: 2rem;
    margin-right: 0.5em;
}

.category-items.drinks .category-item:nth-child(2)::before {
    content: "🥛";
    color: var(--secondary);
    font-size: 2rem;
    margin-right: 0.5em;
}

.category-items.drinks .category-item:nth-child(3)::before {
    content: "🥤";
    color: var(--secondary);
    font-size: 2rem;
    margin-right: 0.5em;
}



.category-item {
    letter-spacing: 0.1em;
}

.menu-buttons-container,
.contact-buttons-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2em;
    font-family: 'Roboto', sans-serif;
}

/* contact section */

.contact-container {
    grid-row: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5em;
    font-family: 'Lilita One', cursive;
    height: 100%;
    padding: 2em;
    margin-top: 2em;
}

.contact-container .contact-title {
    font-size: 5rem;
    border-bottom: 2px solid var(--secondary);
}

.contact-container .contact-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
}

.contact-text.email::before {
    content: "📧";
    color: var(--secondary);
    font-size: 2rem;
    margin-right: 0.5em;
}

.contact-text.phone::before {
    content: "📞";
    color: var(--secondary);
    font-size: 2rem;
    margin-right: 0.5em;
}


`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --primary-light: #ffffff;\n    --secondary-light: #f8f5f2;\n\n    /* colors */\n    --primary:  #FF4500;\n    --secondary: #228B22;\n    --accent: #FFD700;\n\n    --dark: #333;\n}\n\n@font-face {\n    font-family: 'Lilita One';\n    src: url('../assets/fonts/Lilita_One/LilitaOne-Regular.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Roboto';\n    src: url('../assets/fonts/Roboto/Roboto-Regular.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    font-family: 'Roboto', sans-serif;\n    color: var(--dark);\n}\n\nbody {\n    background-color: var(--primary-light);\n}\n\n#content {\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n}\n\n#header {\n    grid-row: 1;\n}\n\n#header .navbar {\n    background-color: var(--primary-light);\n    overflow: hidden;\n    border-top: 5px solid var(--primary);\n    border-bottom: 1px solid var(--secondary-light);\n    padding: 0.5em 3em;\n    font-family: 'Lilita One', cursive;\n    font-size: clamp(1rem, 2vw, 1.5rem);\n    white-space: nowrap;\n    position: fixed;\n    top: 0;\n    width: 100%;\n}\n\n.navbar .nav-list {\n    list-style: none;\n    display: flex;\n    gap: 1em;\n    margin: 0;\n    align-items: baseline;\n}\n\n.navbar .nav-list .nav-item a {\n    text-decoration: none;\n    color: #333;\n}\n\n.nav-item.logo {\n    margin-right: auto;\n    font-size: clamp(1.5rem, 2vw, 2.5rem);\n}\n\nli.nav-item {\n    padding: 0.5em;\n}\n\nli.nav-item:hover {\n    cursor: pointer;\n    text-decoration: underline;\n}\n\n#main {\n    grid-row: 2;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n#main .message {\n    background-color: var(--secondary-light);\n    color: var(--secondary);\n    text-align: center;\n    font-size: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0.25em;\n    font-weight: 600;\n    width: 100%;\n}\n\n#main .hero {\n    background-image: url('../assets/images/jarritos-mexican-soda-xkVOHCP-_6w-unsplash.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    height: clamp(400px, 50vh, 800px);\n    width: 100%;\n    padding: 2em;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.button {\n    background-color: var(--primary);\n    color: var(--primary-light);\n    border: none;\n    padding: 0.5em 1em;\n    border-radius: 0.25em;\n    font-size: 1.5rem;\n    font-weight: 600;\n    cursor: pointer;\n    transition: all 0.3s ease-in-out;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.button:hover {\n    scale: 1.1;\n}\n\n/* content section */\n\n#main h1 {\n    margin: .5em 0;\n    font-family: 'Lilita One', cursive;\n    font-weight: normal;\n}\n\n.content-cards {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 1em;\n    padding: 1em;\n}\n\n.content-card {\n    background-color: var(--secondary-light);\n    border: 1px solid var(--secondary);\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n    border-radius: 0.25em;\n    padding: 1em;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 1em;\n}\n\n.content-card img {\n    width: 100%;\n    height: auto;\n    border-radius: 0.25em;\n}\n\n#main .hero2 {\n    background-image: url('../assets/images/jarritos-mexican-soda-xxjHmSPxD1E-unsplash.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    height: clamp(400px, 50vh, 800px);\n    width: 100%;\n    padding: 2em;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n\n.button.menu,\n.button.contact {\n    background-color: var(--secondary);\n}\n\n#footer {\n    width: 100%;\n    font-family: 'Lilita One', cursive;\n    border-top: 5px solid var(--secondary);\n    padding: 1em;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n/* menu section */\n\n.menu-container {\n    grid-row: 2;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 2.5em;\n    font-family: 'Lilita One', cursive;\n    height: 100%;\n    padding: 2em;\n    margin-top: 2em;\n}\n\n.menu-container .menu-title {\n    font-size: 5rem;\n}\n\n\n.category-wrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 1em;\n    \n}\n\n.menu-container .category-title {\n    font-size: 4rem;\n    border-bottom: 1px solid var(--secondary);\n    \n}\n\n.category-items {\n    list-style-type: none;\n}\n\n/* Appetizers */\n\n.category-items.appetizers .category-item:nth-child(1)::before {\n    content: \"🥑\";\n    color: var(--secondary);\n    font-size: 2rem;\n    margin-right: 0.5em;\n}\n\n.category-items.appetizers .category-item:nth-child(2)::before {\n    content: \"🧀\";\n    color: var(--secondary);\n    font-size: 2rem;\n    margin-right: 0.5em;\n}\n\n.category-items.appetizers .category-item:nth-child(3)::before {\n    content: \"🍗\";\n    color: var(--secondary);\n    font-size: 2rem;\n    margin-right: 0.5em;\n}\n\n/* Main Courses */\n\n.category-items.maincourses .category-item:nth-child(1)::before {\n    content: \"🌮\";\n    color: var(--secondary);\n    font-size: 2rem;\n    margin-right: 0.5em;\n}\n\n.category-items.maincourses .category-item:nth-child(2)::before {\n    content: \"🍗\";\n    color: var(--secondary);\n    font-size: 2rem;\n    margin-right: 0.5em;\n}\n\n.category-items.maincourses .category-item:nth-child(3)::before {\n    content: \"🌯\";\n    color: var(--secondary);\n    font-size: 2rem;\n    margin-right: 0.5em;\n}\n\n/* Desserts */\n\n.category-items.desserts .category-item:nth-child(1)::before {\n    content: \"🍩\";\n    color: var(--secondary);\n    font-size: 2rem;\n    margin-right: 0.5em;\n}\n\n.category-items.desserts .category-item:nth-child(2)::before {\n    content: \"🍰\";\n    color: var(--secondary);\n    font-size: 2rem;\n    margin-right: 0.5em;\n}\n\n.category-items.desserts .category-item:nth-child(3)::before {\n    content: \"🍮\";\n    color: var(--secondary);\n    font-size: 2rem;\n    margin-right: 0.5em;\n}\n\n/* Drinks */\n\n.category-items.drinks .category-item:nth-child(1)::before {\n    content: \"🍹\";\n    color: var(--secondary);\n    font-size: 2rem;\n    margin-right: 0.5em;\n}\n\n.category-items.drinks .category-item:nth-child(2)::before {\n    content: \"🥛\";\n    color: var(--secondary);\n    font-size: 2rem;\n    margin-right: 0.5em;\n}\n\n.category-items.drinks .category-item:nth-child(3)::before {\n    content: \"🥤\";\n    color: var(--secondary);\n    font-size: 2rem;\n    margin-right: 0.5em;\n}\n\n\n\n.category-item {\n    letter-spacing: 0.1em;\n}\n\n.menu-buttons-container,\n.contact-buttons-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: 2em;\n    font-family: 'Roboto', sans-serif;\n}\n\n/* contact section */\n\n.contact-container {\n    grid-row: 2;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 2.5em;\n    font-family: 'Lilita One', cursive;\n    height: 100%;\n    padding: 2em;\n    margin-top: 2em;\n}\n\n.contact-container .contact-title {\n    font-size: 5rem;\n    border-bottom: 2px solid var(--secondary);\n}\n\n.contact-container .contact-info {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 1em;\n}\n\n.contact-text.email::before {\n    content: \"📧\";\n    color: var(--secondary);\n    font-size: 2rem;\n    margin-right: 0.5em;\n}\n\n.contact-text.phone::before {\n    content: \"📞\";\n    color: var(--secondary);\n    font-size: 2rem;\n    margin-right: 0.5em;\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_landing_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/landing-page */ "./src/js/landing-page.js");
/* harmony import */ var _js_menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/menu-page */ "./src/js/menu-page.js");
/* harmony import */ var _js_contact_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/contact-page */ "./src/js/contact-page.js");
/* harmony import */ var _assets_data_menu_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/data/menu.json */ "./src/assets/data/menu.json");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");






const content = document.querySelector('#content');
[(0,_js_landing_page__WEBPACK_IMPORTED_MODULE_0__.renderHeader)(), (0,_js_landing_page__WEBPACK_IMPORTED_MODULE_0__.renderMain)(), (0,_js_landing_page__WEBPACK_IMPORTED_MODULE_0__.renderFooter)()].forEach(section => content.appendChild(section));


content.querySelectorAll('.nav-item').forEach((element, index) => {
    /* tab switching logic */
    element.addEventListener('click', () => {
        const currentDisplay = document.querySelector('#content').children[1];

        switch (index) {
            case 0:
                content.replaceChild((0,_js_landing_page__WEBPACK_IMPORTED_MODULE_0__.renderMain)(), currentDisplay);
                break;
            case 1:
                content.replaceChild((0,_js_menu_page__WEBPACK_IMPORTED_MODULE_1__.renderMenu)(_assets_data_menu_json__WEBPACK_IMPORTED_MODULE_3__), currentDisplay);
                break;
            case 2:
                content.replaceChild((0,_js_contact_page__WEBPACK_IMPORTED_MODULE_2__.renderContact)(), currentDisplay);
                break;
        }
    });

});




/***/ }),

/***/ "./src/js/contact-page.js":
/*!********************************!*\
  !*** ./src/js/contact-page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderContact: () => (/* binding */ renderContact)
/* harmony export */ });
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");


const renderContact = () => {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    const contactTitle = document.createElement('span');
    contactTitle.classList.add('contact-title');
    contactTitle.textContent = 'Contact Us';

    contactInfo.appendChild(contactTitle);

    const contactText = document.createElement('div');
    contactText.classList.add('contact-text', 'phone');
    contactText.textContent = '123-456-7890';

    contactInfo.appendChild(contactText);

    const contactText2 = document.createElement('div');
    contactText2.classList.add('contact-text', 'email');
    contactText2.textContent = 'codigocantina@fake.com';

    contactInfo.appendChild(contactText2);

    contactContainer.appendChild(contactInfo);

    const mapTitle = document.createElement('span');
    mapTitle.classList.add('contact-title');
    mapTitle.textContent = 'Find Us';

    contactContainer.appendChild(mapTitle);

    const mapContainer = document.createElement('div');
    mapContainer.classList.add('map-container');
    mapContainer.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.289359685609!2d-122.35185232255587!3d47.62050627119108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490151f4ed5b7f9%3A0xdb2ba8689ed0920d!2sSpace%20Needle!5e0!3m2!1sen!2sus!4v1696100407869!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`

    contactContainer.appendChild(mapContainer);

    const socialTitle = document.createElement('span');
    socialTitle.classList.add('contact-title');
    socialTitle.textContent = 'Follow Us';

    contactContainer.appendChild(socialTitle);

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('contact-buttons-container');
    

    ['Twitter', 'Facebook', 'Instagram'].forEach((item) => {
        const heroButton = document.createElement('div');
        heroButton.classList.add('button', 'contact-btn');
        heroButton.textContent = item;
        heroButton.id = item.split(' ').join('').toLowerCase();
        buttonsContainer.appendChild(heroButton);
    });

    contactContainer.appendChild(buttonsContainer);


    return contactContainer;
};



/***/ }),

/***/ "./src/js/landing-page.js":
/*!********************************!*\
  !*** ./src/js/landing-page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderFooter: () => (/* binding */ renderFooter),
/* harmony export */   renderHeader: () => (/* binding */ renderHeader),
/* harmony export */   renderMain: () => (/* binding */ renderMain)
/* harmony export */ });
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _assets_images_jarritos_mexican_soda_9AR5vmA4jiU_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/jarritos-mexican-soda-9AR5vmA4jiU-unsplash.jpg */ "./src/assets/images/jarritos-mexican-soda-9AR5vmA4jiU-unsplash.jpg");
/* harmony import */ var _assets_images_jarritos_mexican_soda_uNcoDU4DAFw_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/jarritos-mexican-soda-uNcoDU4DAFw-unsplash.jpg */ "./src/assets/images/jarritos-mexican-soda-uNcoDU4DAFw-unsplash.jpg");
/* harmony import */ var _assets_images_jarritos_mexican_soda_vfn7tR6ogzU_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/jarritos-mexican-soda-vfn7tR6ogzU-unsplash.jpg */ "./src/assets/images/jarritos-mexican-soda-vfn7tR6ogzU-unsplash.jpg");
/* harmony import */ var _assets_images_jarritos_mexican_soda_HezPWdYzmwI_unsplash_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/jarritos-mexican-soda-HezPWdYzmwI-unsplash.jpg */ "./src/assets/images/jarritos-mexican-soda-HezPWdYzmwI-unsplash.jpg");
/* harmony import */ var _assets_images_jarritos_mexican_soda_ke_i6RkslpU_unsplash_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/jarritos-mexican-soda-ke_i6RkslpU-unsplash.jpg */ "./src/assets/images/jarritos-mexican-soda-ke_i6RkslpU-unsplash.jpg");








const renderHeader = () => {
    const header = document.createElement('div');
    header.id = 'header';

    const nav = document.createElement('nav');
    nav.classList.add('navbar');
    header.appendChild(nav);

    const ul = document.createElement('ul');
    ul.classList.add('nav-list');
    nav.appendChild(ul);

    const logo = document.createElement('li');
    logo.classList.add('nav-item', 'logo');
    ul.appendChild(logo);

    const logoLink = document.createElement('a');
    logoLink.href = '#';
    logoLink.textContent = 'El Código Cantina';
    logo.appendChild(logoLink);

    ['Menu', 'Contact'].forEach((item) => {
        const li = document.createElement('li');
        li.classList.add('nav-item');

        const link = document.createElement('a');
        link.href = '#';
        link.textContent = item;

        li.appendChild(link);
        ul.appendChild(li);
    }); 

    return header;
};

const renderContentCards = (...images) => {
    const contentCards = document.createElement('div');
    contentCards.classList.add('content-cards');

    images.forEach((image) => {
        const contentCard = document.createElement('div');
        contentCard.classList.add('content-card');
        contentCards.appendChild(contentCard);

        const img = document.createElement('img');
        img.src = image;
        contentCard.appendChild(img);

        const cardText = document.createElement('div');
        cardText.classList.add('card-text');
        contentCard.appendChild(cardText);

        const cardTextTitle = document.createElement('h2');
        cardTextTitle.textContent = 'Tacos';
        cardText.appendChild(cardTextTitle);

        const cardTextDescription = document.createElement('p');
        cardTextDescription.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quibusdam.';
        cardText.appendChild(cardTextDescription);
    });

    return contentCards;
};

const renderLowerSection = () => {
    const hero = document.createElement('div');
    hero.classList.add('hero2');

    ['Menu', 'Contact'].forEach((item) => {
        const heroButton = document.createElement('div');
        heroButton.classList.add('button', item.toLowerCase());
        heroButton.textContent = item;
        heroButton.id = item.toLowerCase();
        hero.appendChild(heroButton);
    });

    return hero;
};

const renderFooter = () => {
    const footer = document.createElement('div');
    footer.id = 'footer';

    const footerText = document.createElement('p');
    footerText.textContent = '© 2023 El Código Cantina';
    footer.appendChild(footerText);

    const photoCredit = document.createElement('p');
    photoCredit.innerHTML = `
    Photos by <a href="https://unsplash.com/@jarritos">Jarritos Mexican Soda</a> on <a href="https://unsplash.com">Unsplash</a>
    `;
    footer.appendChild(photoCredit);

    return footer;
};

const renderMain = () => {
    const main = document.createElement('div');
    main.id = 'main';

    const message = document.createElement('div');
    message.classList.add('message');
    main.appendChild(message);

    const messageText = document.createElement('p');
    messageText.textContent = 'Grand Opening!';
    message.appendChild(messageText);
    
    const hero = document.createElement('div');
    hero.classList.add('hero');
    main.appendChild(hero);

    const heroButton = document.createElement('div');
    heroButton.classList.add('button');
    heroButton.textContent = 'Order Now';
    hero.appendChild(heroButton);

    const contentTitle = document.createElement('h1');
    contentTitle.textContent = 'Cantina favorites';
    main.appendChild(contentTitle);

    const contentCards = renderContentCards(_assets_images_jarritos_mexican_soda_9AR5vmA4jiU_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__, _assets_images_jarritos_mexican_soda_uNcoDU4DAFw_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__, _assets_images_jarritos_mexican_soda_vfn7tR6ogzU_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__, _assets_images_jarritos_mexican_soda_HezPWdYzmwI_unsplash_jpg__WEBPACK_IMPORTED_MODULE_4__, _assets_images_jarritos_mexican_soda_ke_i6RkslpU_unsplash_jpg__WEBPACK_IMPORTED_MODULE_5__);
    main.appendChild(contentCards);

    const lowerSection = renderLowerSection();
    main.appendChild(lowerSection);

    return main;
};



/***/ }),

/***/ "./src/js/menu-page.js":
/*!*****************************!*\
  !*** ./src/js/menu-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderMenu: () => (/* binding */ renderMenu)
/* harmony export */ });
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");


const renderMenu = (menuObj) => {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    Object.keys(menuObj.menu).forEach((category) => {
        const categoryWrapper = document.createElement('div');
        categoryWrapper.classList.add('category-wrapper');

        const categoryTitle = document.createElement('span');
        categoryTitle.classList.add('category-title');
        categoryTitle.textContent = category;

        categoryWrapper.appendChild(categoryTitle);

        const categoryItems = document.createElement('ul');
        categoryItems.classList.add('category-items', category.toLowerCase());

        const categoryItemsArray = menuObj.menu[category];

        categoryItemsArray.forEach((item) => {
            const categoryItem = document.createElement('li');
            categoryItem.classList.add('category-item');

            const itemName = document.createElement('span');
            itemName.textContent = item;

            categoryItem.appendChild(itemName);
            categoryItems.appendChild(categoryItem);
        });

        categoryWrapper.appendChild(categoryItems);
        menuContainer.appendChild(categoryWrapper);
    });

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('menu-buttons-container');
    menuContainer.appendChild(buttonsContainer);

    ['Reservations', 'Order Online'].forEach((item) => {
        const heroButton = document.createElement('div');
        heroButton.classList.add('button', 'menu-btn');
        heroButton.textContent = item;
        heroButton.id = item.split(' ').join('').toLowerCase();
        buttonsContainer.appendChild(heroButton);
    });

    return menuContainer;
};




/***/ }),

/***/ "./src/assets/fonts/Lilita_One/LilitaOne-Regular.ttf":
/*!***********************************************************!*\
  !*** ./src/assets/fonts/Lilita_One/LilitaOne-Regular.ttf ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e970d047065ed950bb8c.ttf";

/***/ }),

/***/ "./src/assets/fonts/Roboto/Roboto-Regular.ttf":
/*!****************************************************!*\
  !*** ./src/assets/fonts/Roboto/Roboto-Regular.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ }),

/***/ "./src/assets/images/jarritos-mexican-soda-9AR5vmA4jiU-unsplash.jpg":
/*!**************************************************************************!*\
  !*** ./src/assets/images/jarritos-mexican-soda-9AR5vmA4jiU-unsplash.jpg ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad952411db36823b8cf4.jpg";

/***/ }),

/***/ "./src/assets/images/jarritos-mexican-soda-HezPWdYzmwI-unsplash.jpg":
/*!**************************************************************************!*\
  !*** ./src/assets/images/jarritos-mexican-soda-HezPWdYzmwI-unsplash.jpg ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "53fd33b24dd9351ac611.jpg";

/***/ }),

/***/ "./src/assets/images/jarritos-mexican-soda-ke_i6RkslpU-unsplash.jpg":
/*!**************************************************************************!*\
  !*** ./src/assets/images/jarritos-mexican-soda-ke_i6RkslpU-unsplash.jpg ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f7a6deb1af65f82e5cc.jpg";

/***/ }),

/***/ "./src/assets/images/jarritos-mexican-soda-uNcoDU4DAFw-unsplash.jpg":
/*!**************************************************************************!*\
  !*** ./src/assets/images/jarritos-mexican-soda-uNcoDU4DAFw-unsplash.jpg ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30af9bde6741f7603378.jpg";

/***/ }),

/***/ "./src/assets/images/jarritos-mexican-soda-vfn7tR6ogzU-unsplash.jpg":
/*!**************************************************************************!*\
  !*** ./src/assets/images/jarritos-mexican-soda-vfn7tR6ogzU-unsplash.jpg ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "72bd835adff4816fd4b5.jpg";

/***/ }),

/***/ "./src/assets/images/jarritos-mexican-soda-xkVOHCP-_6w-unsplash.jpg":
/*!**************************************************************************!*\
  !*** ./src/assets/images/jarritos-mexican-soda-xkVOHCP-_6w-unsplash.jpg ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e07f9b6b4d3b2f5279e5.jpg";

/***/ }),

/***/ "./src/assets/images/jarritos-mexican-soda-xxjHmSPxD1E-unsplash.jpg":
/*!**************************************************************************!*\
  !*** ./src/assets/images/jarritos-mexican-soda-xxjHmSPxD1E-unsplash.jpg ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d8638f3a2fca9f8237e8.jpg";

/***/ }),

/***/ "./src/assets/data/menu.json":
/*!***********************************!*\
  !*** ./src/assets/data/menu.json ***!
  \***********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"restaurantName":"Lunch Served All Day!","menu":{"Appetizers":["Guacamole and Chips with Salsa ~ $6.00","Queso Fundido ~ $7.00","Chicken Taquitos ~ $8.00"],"MainCourses":["Tacos al Pastor ~ $10.00","Chicken Enchiladas ~ $12.00","Veggie Burrito ~ $9.00"],"Desserts":["Churros ~ $5.00","Tres Leches Cake ~ $6.00","Flan ~ $5.00"],"Drinks":["Margarita ~ $8.00","Horchata ~ $3.00","Jarritos Mexican Soda ~ $3.00"]}}');

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/landing-page.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsNEtBQW1FO0FBQy9HLDRDQUE0Qyw4SkFBNEQ7QUFDeEcsNENBQTRDLDBNQUFrRjtBQUM5SCw0Q0FBNEMsME1BQWtGO0FBQzlILDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU8sb0ZBQW9GLFlBQVksY0FBYyxXQUFXLFlBQVksYUFBYSxjQUFjLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFlBQVksTUFBTSxLQUFLLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFNBQVMsS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxpQ0FBaUMsK0JBQStCLGlDQUFpQyw4Q0FBOEMsMkJBQTJCLHdCQUF3QixxQkFBcUIsR0FBRyxnQkFBZ0IsZ0NBQWdDLHNGQUFzRiwwQkFBMEIseUJBQXlCLEdBQUcsZ0JBQWdCLDRCQUE0QiwrRUFBK0UsMEJBQTBCLHlCQUF5QixHQUFHLE9BQU8sZ0JBQWdCLGlCQUFpQiw2QkFBNkIsR0FBRyxVQUFVLHdDQUF3Qyx5QkFBeUIsR0FBRyxVQUFVLDZDQUE2QyxHQUFHLGNBQWMsb0JBQW9CLHdDQUF3QyxHQUFHLGFBQWEsa0JBQWtCLEdBQUcscUJBQXFCLDZDQUE2Qyx1QkFBdUIsMkNBQTJDLHNEQUFzRCx5QkFBeUIseUNBQXlDLDBDQUEwQywwQkFBMEIsc0JBQXNCLGFBQWEsa0JBQWtCLEdBQUcsdUJBQXVCLHVCQUF1QixvQkFBb0IsZUFBZSxnQkFBZ0IsNEJBQTRCLEdBQUcsbUNBQW1DLDRCQUE0QixrQkFBa0IsR0FBRyxvQkFBb0IseUJBQXlCLDRDQUE0QyxHQUFHLGlCQUFpQixxQkFBcUIsR0FBRyx1QkFBdUIsc0JBQXNCLGlDQUFpQyxHQUFHLFdBQVcsa0JBQWtCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixHQUFHLG9CQUFvQiwrQ0FBK0MsOEJBQThCLHlCQUF5QixzQkFBc0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsc0JBQXNCLHVCQUF1QixrQkFBa0IsR0FBRyxpQkFBaUIsK0ZBQStGLDZCQUE2QixtQ0FBbUMsa0NBQWtDLHdDQUF3QyxrQkFBa0IsbUJBQW1CLG9CQUFvQiwwQkFBMEIsa0NBQWtDLDBCQUEwQiw4Q0FBOEMsR0FBRyxhQUFhLHVDQUF1QyxrQ0FBa0MsbUJBQW1CLHlCQUF5Qiw0QkFBNEIsd0JBQXdCLHVCQUF1QixzQkFBc0IsdUNBQXVDLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEdBQUcsbUJBQW1CLGlCQUFpQixHQUFHLHVDQUF1QyxxQkFBcUIseUNBQXlDLDBCQUEwQixHQUFHLG9CQUFvQixvQkFBb0Isa0VBQWtFLGVBQWUsbUJBQW1CLEdBQUcsbUJBQW1CLCtDQUErQyx5Q0FBeUMsOENBQThDLDRCQUE0QixtQkFBbUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLGVBQWUsR0FBRyx1QkFBdUIsa0JBQWtCLG1CQUFtQiw0QkFBNEIsR0FBRyxrQkFBa0IsK0ZBQStGLDZCQUE2QixtQ0FBbUMsa0NBQWtDLHdDQUF3QyxrQkFBa0IsbUJBQW1CLG9CQUFvQiwwQkFBMEIsb0NBQW9DLDBCQUEwQiw4Q0FBOEMsR0FBRyxvQ0FBb0MseUNBQXlDLEdBQUcsYUFBYSxrQkFBa0IseUNBQXlDLDZDQUE2QyxtQkFBbUIsb0JBQW9CLDBCQUEwQixvQ0FBb0MsMEJBQTBCLEdBQUcsMkNBQTJDLGtCQUFrQixvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsaUJBQWlCLHlDQUF5QyxtQkFBbUIsbUJBQW1CLHNCQUFzQixHQUFHLGlDQUFpQyxzQkFBc0IsR0FBRyx5QkFBeUIsb0JBQW9CLDZCQUE2QixrQ0FBa0MsMEJBQTBCLGVBQWUsU0FBUyxxQ0FBcUMsc0JBQXNCLGdEQUFnRCxTQUFTLHFCQUFxQiw0QkFBNEIsR0FBRyx3RkFBd0Ysc0JBQXNCLDhCQUE4QixzQkFBc0IsMEJBQTBCLEdBQUcsb0VBQW9FLHNCQUFzQiw4QkFBOEIsc0JBQXNCLDBCQUEwQixHQUFHLG9FQUFvRSxzQkFBc0IsOEJBQThCLHNCQUFzQiwwQkFBMEIsR0FBRywyRkFBMkYsc0JBQXNCLDhCQUE4QixzQkFBc0IsMEJBQTBCLEdBQUcscUVBQXFFLHNCQUFzQiw4QkFBOEIsc0JBQXNCLDBCQUEwQixHQUFHLHFFQUFxRSxzQkFBc0IsOEJBQThCLHNCQUFzQiwwQkFBMEIsR0FBRyxvRkFBb0Ysc0JBQXNCLDhCQUE4QixzQkFBc0IsMEJBQTBCLEdBQUcsa0VBQWtFLHNCQUFzQiw4QkFBOEIsc0JBQXNCLDBCQUEwQixHQUFHLGtFQUFrRSxzQkFBc0IsOEJBQThCLHNCQUFzQiwwQkFBMEIsR0FBRyxnRkFBZ0Ysc0JBQXNCLDhCQUE4QixzQkFBc0IsMEJBQTBCLEdBQUcsZ0VBQWdFLHNCQUFzQiw4QkFBOEIsc0JBQXNCLDBCQUEwQixHQUFHLGdFQUFnRSxzQkFBc0IsOEJBQThCLHNCQUFzQiwwQkFBMEIsR0FBRyx3QkFBd0IsNEJBQTRCLEdBQUcsMERBQTBELG9CQUFvQiwwQkFBMEIscUNBQXFDLDBCQUEwQixlQUFlLHdDQUF3QyxHQUFHLGlEQUFpRCxrQkFBa0Isb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLGlCQUFpQix5Q0FBeUMsbUJBQW1CLG1CQUFtQixzQkFBc0IsR0FBRyx1Q0FBdUMsc0JBQXNCLGdEQUFnRCxHQUFHLHNDQUFzQyxvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsZUFBZSxHQUFHLGlDQUFpQyxzQkFBc0IsOEJBQThCLHNCQUFzQiwwQkFBMEIsR0FBRyxpQ0FBaUMsc0JBQXNCLDhCQUE4QixzQkFBc0IsMEJBQTBCLEdBQUcseUJBQXlCO0FBQ24rVztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ2phMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2IyRTtBQUMvQjtBQUNNO0FBQ1A7QUFDbEI7O0FBRXpCO0FBQ0EsQ0FBQyw4REFBWSxJQUFJLDREQUFVLElBQUksOERBQVk7OztBQUczQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDLDREQUFVO0FBQy9DO0FBQ0E7QUFDQSxxQ0FBcUMseURBQVUsQ0FBQyxtREFBSTtBQUNwRDtBQUNBO0FBQ0EscUNBQXFDLCtEQUFhO0FBQ2xEO0FBQ0E7QUFDQSxLQUFLOztBQUVMLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCeUI7O0FBRTFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esa1dBQWtXOztBQUVsVzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9EMEI7QUFDNkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR3ZGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRDQUE0QywwRkFBUSxFQUFFLDBGQUFRLEVBQUUsMEZBQVEsRUFBRSwwRkFBUSxFQUFFLDBGQUFRO0FBQzVGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6STBCOztBQUUxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25EdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL2NvbnRhY3QtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvbGFuZGluZy1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9tZW51LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9MaWxpdGFfT25lL0xpbGl0YU9uZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9qYXJyaXRvcy1tZXhpY2FuLXNvZGEteGtWT0hDUC1fNnctdW5zcGxhc2guanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9qYXJyaXRvcy1tZXhpY2FuLXNvZGEteHhqSG1TUHhEMUUtdW5zcGxhc2guanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1wcmltYXJ5LWxpZ2h0OiAjZmZmZmZmO1xuICAgIC0tc2Vjb25kYXJ5LWxpZ2h0OiAjZjhmNWYyO1xuXG4gICAgLyogY29sb3JzICovXG4gICAgLS1wcmltYXJ5OiAgI0ZGNDUwMDtcbiAgICAtLXNlY29uZGFyeTogIzIyOEIyMjtcbiAgICAtLWFjY2VudDogI0ZGRDcwMDtcblxuICAgIC0tZGFyazogIzMzMztcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMaWxpdGEgT25lJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xufVxuXG4jY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XG59XG5cbiNoZWFkZXIge1xuICAgIGdyaWQtcm93OiAxO1xufVxuXG4jaGVhZGVyIC5uYXZiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktbGlnaHQpO1xuICAgIHBhZGRpbmc6IDAuNWVtIDNlbTtcbiAgICBmb250LWZhbWlseTogJ0xpbGl0YSBPbmUnLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMnZ3LCAxLjVyZW0pO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm5hdmJhciAubmF2LWxpc3Qge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFlbTtcbiAgICBtYXJnaW46IDA7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuXG4ubmF2YmFyIC5uYXYtbGlzdCAubmF2LWl0ZW0gYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG4ubmF2LWl0ZW0ubG9nbyB7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS41cmVtLCAydncsIDIuNXJlbSk7XG59XG5cbmxpLm5hdi1pdGVtIHtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbn1cblxubGkubmF2LWl0ZW06aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuI21haW4ge1xuICAgIGdyaWQtcm93OiAyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jbWFpbiAubWVzc2FnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjI1ZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI21haW4gLmhlcm8ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGhlaWdodDogY2xhbXAoNDAwcHgsIDUwdmgsIDgwMHB4KTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gICAgc2NhbGU6IDEuMTtcbn1cblxuLyogY29udGVudCBzZWN0aW9uICovXG5cbiNtYWluIGgxIHtcbiAgICBtYXJnaW46IC41ZW0gMDtcbiAgICBmb250LWZhbWlseTogJ0xpbGl0YSBPbmUnLCBjdXJzaXZlO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5jb250ZW50LWNhcmRzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICAgIGdhcDogMWVtO1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cblxuLmNvbnRlbnQtY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWxpZ2h0KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMWVtO1xufVxuXG4uY29udGVudC1jYXJkIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbn1cblxuI21haW4gLmhlcm8yIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IGNsYW1wKDQwMHB4LCA1MHZoLCA4MDBweCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmJ1dHRvbi5tZW51LFxuLmJ1dHRvbi5jb250YWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xufVxuXG4jZm9vdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LWZhbWlseTogJ0xpbGl0YSBPbmUnLCBjdXJzaXZlO1xuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogbWVudSBzZWN0aW9uICovXG5cbi5tZW51LWNvbnRhaW5lciB7XG4gICAgZ3JpZC1yb3c6IDI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyLjVlbTtcbiAgICBmb250LWZhbWlseTogJ0xpbGl0YSBPbmUnLCBjdXJzaXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAyZW07XG4gICAgbWFyZ2luLXRvcDogMmVtO1xufVxuXG4ubWVudS1jb250YWluZXIgLm1lbnUtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbn1cblxuXG4uY2F0ZWdvcnktd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMWVtO1xuICAgIFxufVxuXG4ubWVudS1jb250YWluZXIgLmNhdGVnb3J5LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XG4gICAgXG59XG5cbi5jYXRlZ29yeS1pdGVtcyB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4vKiBBcHBldGl6ZXJzICovXG5cbi5jYXRlZ29yeS1pdGVtcy5hcHBldGl6ZXJzIC5jYXRlZ29yeS1pdGVtOm50aC1jaGlsZCgxKTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIvCfpZFcIjtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbn1cblxuLmNhdGVnb3J5LWl0ZW1zLmFwcGV0aXplcnMgLmNhdGVnb3J5LWl0ZW06bnRoLWNoaWxkKDIpOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwi8J+ngFwiO1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xufVxuXG4uY2F0ZWdvcnktaXRlbXMuYXBwZXRpemVycyAuY2F0ZWdvcnktaXRlbTpudGgtY2hpbGQoMyk6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCLwn42XXCI7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XG59XG5cbi8qIE1haW4gQ291cnNlcyAqL1xuXG4uY2F0ZWdvcnktaXRlbXMubWFpbmNvdXJzZXMgLmNhdGVnb3J5LWl0ZW06bnRoLWNoaWxkKDEpOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwi8J+MrlwiO1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xufVxuXG4uY2F0ZWdvcnktaXRlbXMubWFpbmNvdXJzZXMgLmNhdGVnb3J5LWl0ZW06bnRoLWNoaWxkKDIpOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwi8J+Nl1wiO1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xufVxuXG4uY2F0ZWdvcnktaXRlbXMubWFpbmNvdXJzZXMgLmNhdGVnb3J5LWl0ZW06bnRoLWNoaWxkKDMpOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwi8J+Mr1wiO1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xufVxuXG4vKiBEZXNzZXJ0cyAqL1xuXG4uY2F0ZWdvcnktaXRlbXMuZGVzc2VydHMgLmNhdGVnb3J5LWl0ZW06bnRoLWNoaWxkKDEpOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwi8J+NqVwiO1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xufVxuXG4uY2F0ZWdvcnktaXRlbXMuZGVzc2VydHMgLmNhdGVnb3J5LWl0ZW06bnRoLWNoaWxkKDIpOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwi8J+NsFwiO1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xufVxuXG4uY2F0ZWdvcnktaXRlbXMuZGVzc2VydHMgLmNhdGVnb3J5LWl0ZW06bnRoLWNoaWxkKDMpOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwi8J+NrlwiO1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xufVxuXG4vKiBEcmlua3MgKi9cblxuLmNhdGVnb3J5LWl0ZW1zLmRyaW5rcyAuY2F0ZWdvcnktaXRlbTpudGgtY2hpbGQoMSk6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCLwn425XCI7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XG59XG5cbi5jYXRlZ29yeS1pdGVtcy5kcmlua3MgLmNhdGVnb3J5LWl0ZW06bnRoLWNoaWxkKDIpOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwi8J+lm1wiO1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xufVxuXG4uY2F0ZWdvcnktaXRlbXMuZHJpbmtzIC5jYXRlZ29yeS1pdGVtOm50aC1jaGlsZCgzKTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIvCfpaRcIjtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbn1cblxuXG5cbi5jYXRlZ29yeS1pdGVtIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG59XG5cbi5tZW51LWJ1dHRvbnMtY29udGFpbmVyLFxuLmNvbnRhY3QtYnV0dG9ucy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDJlbTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cbi8qIGNvbnRhY3Qgc2VjdGlvbiAqL1xuXG4uY29udGFjdC1jb250YWluZXIge1xuICAgIGdyaWQtcm93OiAyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMi41ZW07XG4gICAgZm9udC1mYW1pbHk6ICdMaWxpdGEgT25lJywgY3Vyc2l2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMmVtO1xuICAgIG1hcmdpbi10b3A6IDJlbTtcbn1cblxuLmNvbnRhY3QtY29udGFpbmVyIC5jb250YWN0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDVyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XG59XG5cbi5jb250YWN0LWNvbnRhaW5lciAuY29udGFjdC1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFlbTtcbn1cblxuLmNvbnRhY3QtdGV4dC5lbWFpbDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIvCfk6dcIjtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbn1cblxuLmNvbnRhY3QtdGV4dC5waG9uZTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIvCfk55cIjtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbn1cblxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLDBCQUEwQjs7SUFFMUIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsaUJBQWlCOztJQUVqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLCtEQUErRTtJQUMvRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLCtEQUF3RTtJQUN4RSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLCtDQUErQztJQUMvQyxrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLG1DQUFtQztJQUNuQyxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLE1B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Q1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXByaW1hcnktbGlnaHQ6ICNmZmZmZmY7XFxuICAgIC0tc2Vjb25kYXJ5LWxpZ2h0OiAjZjhmNWYyO1xcblxcbiAgICAvKiBjb2xvcnMgKi9cXG4gICAgLS1wcmltYXJ5OiAgI0ZGNDUwMDtcXG4gICAgLS1zZWNvbmRhcnk6ICMyMjhCMjI7XFxuICAgIC0tYWNjZW50OiAjRkZENzAwO1xcblxcbiAgICAtLWRhcms6ICMzMzM7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0xpbGl0YSBPbmUnO1xcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0xpbGl0YV9PbmUvTGlsaXRhT25lLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBncmlkLXJvdzogMTtcXG59XFxuXFxuI2hlYWRlciAubmF2YmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1saWdodCk7XFxuICAgIHBhZGRpbmc6IDAuNWVtIDNlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdMaWxpdGEgT25lJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAydncsIDEuNXJlbSk7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm5hdmJhciAubmF2LWxpc3Qge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxufVxcblxcbi5uYXZiYXIgLm5hdi1saXN0IC5uYXYtaXRlbSBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogIzMzMztcXG59XFxuXFxuLm5hdi1pdGVtLmxvZ28ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS41cmVtLCAydncsIDIuNXJlbSk7XFxufVxcblxcbmxpLm5hdi1pdGVtIHtcXG4gICAgcGFkZGluZzogMC41ZW07XFxufVxcblxcbmxpLm5hdi1pdGVtOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuI21haW4ge1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtYWluIC5tZXNzYWdlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWxpZ2h0KTtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC4yNWVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI21haW4gLmhlcm8ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9pbWFnZXMvamFycml0b3MtbWV4aWNhbi1zb2RhLXhrVk9IQ1AtXzZ3LXVuc3BsYXNoLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGhlaWdodDogY2xhbXAoNDAwcHgsIDUwdmgsIDgwMHB4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5idXR0b246aG92ZXIge1xcbiAgICBzY2FsZTogMS4xO1xcbn1cXG5cXG4vKiBjb250ZW50IHNlY3Rpb24gKi9cXG5cXG4jbWFpbiBoMSB7XFxuICAgIG1hcmdpbjogLjVlbSAwO1xcbiAgICBmb250LWZhbWlseTogJ0xpbGl0YSBPbmUnLCBjdXJzaXZlO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4uY29udGVudC1jYXJkcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgICBnYXA6IDFlbTtcXG4gICAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4uY29udGVudC1jYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWxpZ2h0KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5KTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMWVtO1xcbn1cXG5cXG4uY29udGVudC1jYXJkIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXG59XFxuXFxuI21haW4gLmhlcm8yIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvaW1hZ2VzL2phcnJpdG9zLW1leGljYW4tc29kYS14eGpIbVNQeEQxRS11bnNwbGFzaC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IGNsYW1wKDQwMHB4LCA1MHZoLCA4MDBweCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5idXR0b24ubWVudSxcXG4uYnV0dG9uLmNvbnRhY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGlsaXRhIE9uZScsIGN1cnNpdmU7XFxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBtZW51IHNlY3Rpb24gKi9cXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMi41ZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnTGlsaXRhIE9uZScsIGN1cnNpdmU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMmVtO1xcbiAgICBtYXJnaW4tdG9wOiAyZW07XFxufVxcblxcbi5tZW51LWNvbnRhaW5lciAubWVudS10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG59XFxuXFxuXFxuLmNhdGVnb3J5LXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMWVtO1xcbiAgICBcXG59XFxuXFxuLm1lbnUtY29udGFpbmVyIC5jYXRlZ29yeS10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XFxuICAgIFxcbn1cXG5cXG4uY2F0ZWdvcnktaXRlbXMge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi8qIEFwcGV0aXplcnMgKi9cXG5cXG4uY2F0ZWdvcnktaXRlbXMuYXBwZXRpemVycyAuY2F0ZWdvcnktaXRlbTpudGgtY2hpbGQoMSk6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCLwn6WRXFxcIjtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG59XFxuXFxuLmNhdGVnb3J5LWl0ZW1zLmFwcGV0aXplcnMgLmNhdGVnb3J5LWl0ZW06bnRoLWNoaWxkKDIpOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwi8J+ngFxcXCI7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxufVxcblxcbi5jYXRlZ29yeS1pdGVtcy5hcHBldGl6ZXJzIC5jYXRlZ29yeS1pdGVtOm50aC1jaGlsZCgzKTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIvCfjZdcXFwiO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbn1cXG5cXG4vKiBNYWluIENvdXJzZXMgKi9cXG5cXG4uY2F0ZWdvcnktaXRlbXMubWFpbmNvdXJzZXMgLmNhdGVnb3J5LWl0ZW06bnRoLWNoaWxkKDEpOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwi8J+MrlxcXCI7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxufVxcblxcbi5jYXRlZ29yeS1pdGVtcy5tYWluY291cnNlcyAuY2F0ZWdvcnktaXRlbTpudGgtY2hpbGQoMik6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCLwn42XXFxcIjtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG59XFxuXFxuLmNhdGVnb3J5LWl0ZW1zLm1haW5jb3Vyc2VzIC5jYXRlZ29yeS1pdGVtOm50aC1jaGlsZCgzKTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIvCfjK9cXFwiO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbn1cXG5cXG4vKiBEZXNzZXJ0cyAqL1xcblxcbi5jYXRlZ29yeS1pdGVtcy5kZXNzZXJ0cyAuY2F0ZWdvcnktaXRlbTpudGgtY2hpbGQoMSk6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCLwn42pXFxcIjtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG59XFxuXFxuLmNhdGVnb3J5LWl0ZW1zLmRlc3NlcnRzIC5jYXRlZ29yeS1pdGVtOm50aC1jaGlsZCgyKTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIvCfjbBcXFwiO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbn1cXG5cXG4uY2F0ZWdvcnktaXRlbXMuZGVzc2VydHMgLmNhdGVnb3J5LWl0ZW06bnRoLWNoaWxkKDMpOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwi8J+NrlxcXCI7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxufVxcblxcbi8qIERyaW5rcyAqL1xcblxcbi5jYXRlZ29yeS1pdGVtcy5kcmlua3MgLmNhdGVnb3J5LWl0ZW06bnRoLWNoaWxkKDEpOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwi8J+NuVxcXCI7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxufVxcblxcbi5jYXRlZ29yeS1pdGVtcy5kcmlua3MgLmNhdGVnb3J5LWl0ZW06bnRoLWNoaWxkKDIpOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwi8J+lm1xcXCI7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxufVxcblxcbi5jYXRlZ29yeS1pdGVtcy5kcmlua3MgLmNhdGVnb3J5LWl0ZW06bnRoLWNoaWxkKDMpOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwi8J+lpFxcXCI7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxufVxcblxcblxcblxcbi5jYXRlZ29yeS1pdGVtIHtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcbn1cXG5cXG4ubWVudS1idXR0b25zLWNvbnRhaW5lcixcXG4uY29udGFjdC1idXR0b25zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLyogY29udGFjdCBzZWN0aW9uICovXFxuXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIuNWVtO1xcbiAgICBmb250LWZhbWlseTogJ0xpbGl0YSBPbmUnLCBjdXJzaXZlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDJlbTtcXG4gICAgbWFyZ2luLXRvcDogMmVtO1xcbn1cXG5cXG4uY29udGFjdC1jb250YWluZXIgLmNvbnRhY3QtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xcbn1cXG5cXG4uY29udGFjdC1jb250YWluZXIgLmNvbnRhY3QtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFlbTtcXG59XFxuXFxuLmNvbnRhY3QtdGV4dC5lbWFpbDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIvCfk6dcXFwiO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbn1cXG5cXG4uY29udGFjdC10ZXh0LnBob25lOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwi8J+TnlxcXCI7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcmVuZGVySGVhZGVyLCByZW5kZXJNYWluLCByZW5kZXJGb290ZXIgfSBmcm9tICcuL2pzL2xhbmRpbmctcGFnZSc7XG5pbXBvcnQgeyByZW5kZXJNZW51IH0gZnJvbSAnLi9qcy9tZW51LXBhZ2UnO1xuaW1wb3J0IHsgcmVuZGVyQ29udGFjdCB9IGZyb20gJy4vanMvY29udGFjdC1wYWdlJztcbmltcG9ydCBtZW51IGZyb20gXCIuL2Fzc2V0cy9kYXRhL21lbnUuanNvblwiO1xuaW1wb3J0ICcuL2Nzcy9zdHlsZS5jc3MnO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbltyZW5kZXJIZWFkZXIoKSwgcmVuZGVyTWFpbigpLCByZW5kZXJGb290ZXIoKV0uZm9yRWFjaChzZWN0aW9uID0+IGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2VjdGlvbikpO1xuXG5cbmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1pdGVtJykuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAvKiB0YWIgc3dpdGNoaW5nIGxvZ2ljICovXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmNoaWxkcmVuWzFdO1xuXG4gICAgICAgIHN3aXRjaCAoaW5kZXgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBjb250ZW50LnJlcGxhY2VDaGlsZChyZW5kZXJNYWluKCksIGN1cnJlbnREaXNwbGF5KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBjb250ZW50LnJlcGxhY2VDaGlsZChyZW5kZXJNZW51KG1lbnUpLCBjdXJyZW50RGlzcGxheSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgY29udGVudC5yZXBsYWNlQ2hpbGQocmVuZGVyQ29udGFjdCgpLCBjdXJyZW50RGlzcGxheSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9KTtcblxufSk7XG5cblxuIiwiaW1wb3J0IFwiLi4vY3NzL3N0eWxlLmNzc1wiO1xuXG5jb25zdCByZW5kZXJDb250YWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RJbmZvLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaW5mbycpO1xuXG4gICAgY29uc3QgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnRhY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXRpdGxlJyk7XG4gICAgY29udGFjdFRpdGxlLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnO1xuXG4gICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcblxuICAgIGNvbnN0IGNvbnRhY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdFRleHQuY2xhc3NMaXN0LmFkZCgnY29udGFjdC10ZXh0JywgJ3Bob25lJyk7XG4gICAgY29udGFjdFRleHQudGV4dENvbnRlbnQgPSAnMTIzLTQ1Ni03ODkwJztcblxuICAgIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGNvbnRhY3RUZXh0KTtcblxuICAgIGNvbnN0IGNvbnRhY3RUZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RUZXh0Mi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXRleHQnLCAnZW1haWwnKTtcbiAgICBjb250YWN0VGV4dDIudGV4dENvbnRlbnQgPSAnY29kaWdvY2FudGluYUBmYWtlLmNvbSc7XG5cbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChjb250YWN0VGV4dDIpO1xuXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0SW5mbyk7XG5cbiAgICBjb25zdCBtYXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBtYXBUaXRsZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXRpdGxlJyk7XG4gICAgbWFwVGl0bGUudGV4dENvbnRlbnQgPSAnRmluZCBVcyc7XG5cbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG1hcFRpdGxlKTtcblxuICAgIGNvbnN0IG1hcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1hcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYXAtY29udGFpbmVyJyk7XG4gICAgbWFwQ29udGFpbmVyLmlubmVySFRNTCA9IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDI2ODkuMjg5MzU5Njg1NjA5ITJkLTEyMi4zNTE4NTIzMjI1NTU4NyEzZDQ3LjYyMDUwNjI3MTE5MTA4ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg1NDkwMTUxZjRlZDViN2Y5JTNBMHhkYjJiYTg2ODllZDA5MjBkITJzU3BhY2UlMjBOZWVkbGUhNWUwITNtMiExc2VuITJzdXMhNHYxNjk2MTAwNDA3ODY5ITVtMiExc2VuITJzdXNcIiB3aWR0aD1cIjYwMFwiIGhlaWdodD1cIjQ1MFwiIHN0eWxlPVwiYm9yZGVyOjA7XCIgYWxsb3dmdWxsc2NyZWVuPVwiXCIgbG9hZGluZz1cImxhenlcIiByZWZlcnJlcnBvbGljeT1cIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCI+PC9pZnJhbWU+YFxuXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChtYXBDb250YWluZXIpO1xuXG4gICAgY29uc3Qgc29jaWFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc29jaWFsVGl0bGUuY2xhc3NMaXN0LmFkZCgnY29udGFjdC10aXRsZScpO1xuICAgIHNvY2lhbFRpdGxlLnRleHRDb250ZW50ID0gJ0ZvbGxvdyBVcyc7XG5cbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNvY2lhbFRpdGxlKTtcblxuICAgIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtYnV0dG9ucy1jb250YWluZXInKTtcbiAgICBcblxuICAgIFsnVHdpdHRlcicsICdGYWNlYm9vaycsICdJbnN0YWdyYW0nXS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlcm9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVyb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnY29udGFjdC1idG4nKTtcbiAgICAgICAgaGVyb0J1dHRvbi50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgICAgIGhlcm9CdXR0b24uaWQgPSBpdGVtLnNwbGl0KCcgJykuam9pbignJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvQnV0dG9uKTtcbiAgICB9KTtcblxuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uc0NvbnRhaW5lcik7XG5cblxuICAgIHJldHVybiBjb250YWN0Q29udGFpbmVyO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyQ29udGFjdCB9OyIsImltcG9ydCBcIi4uL2Nzcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBjb250ZW50MSBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9qYXJyaXRvcy1tZXhpY2FuLXNvZGEtOUFSNXZtQTRqaVUtdW5zcGxhc2guanBnXCI7XG5pbXBvcnQgY29udGVudDIgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvamFycml0b3MtbWV4aWNhbi1zb2RhLXVOY29EVTREQUZ3LXVuc3BsYXNoLmpwZ1wiO1xuaW1wb3J0IGNvbnRlbnQzIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2phcnJpdG9zLW1leGljYW4tc29kYS12Zm43dFI2b2d6VS11bnNwbGFzaC5qcGdcIjtcbmltcG9ydCBjb250ZW50NCBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9qYXJyaXRvcy1tZXhpY2FuLXNvZGEtSGV6UFdkWXptd0ktdW5zcGxhc2guanBnXCI7XG5pbXBvcnQgY29udGVudDUgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvamFycml0b3MtbWV4aWNhbi1zb2RhLWtlX2k2UmtzbHBVLXVuc3BsYXNoLmpwZ1wiO1xuXG5cbmNvbnN0IHJlbmRlckhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuaWQgPSAnaGVhZGVyJztcblxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCduYXZiYXInKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB1bC5jbGFzc0xpc3QuYWRkKCduYXYtbGlzdCcpO1xuICAgIG5hdi5hcHBlbmRDaGlsZCh1bCk7XG5cbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ25hdi1pdGVtJywgJ2xvZ28nKTtcbiAgICB1bC5hcHBlbmRDaGlsZChsb2dvKTtcblxuICAgIGNvbnN0IGxvZ29MaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxvZ29MaW5rLmhyZWYgPSAnIyc7XG4gICAgbG9nb0xpbmsudGV4dENvbnRlbnQgPSAnRWwgQ8OzZGlnbyBDYW50aW5hJztcbiAgICBsb2dvLmFwcGVuZENoaWxkKGxvZ29MaW5rKTtcblxuICAgIFsnTWVudScsICdDb250YWN0J10uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ25hdi1pdGVtJyk7XG5cbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgbGluay5ocmVmID0gJyMnO1xuICAgICAgICBsaW5rLnRleHRDb250ZW50ID0gaXRlbTtcblxuICAgICAgICBsaS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH0pOyBcblxuICAgIHJldHVybiBoZWFkZXI7XG59O1xuXG5jb25zdCByZW5kZXJDb250ZW50Q2FyZHMgPSAoLi4uaW1hZ2VzKSA9PiB7XG4gICAgY29uc3QgY29udGVudENhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudENhcmRzLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtY2FyZHMnKTtcblxuICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250ZW50Q2FyZC5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWNhcmQnKTtcbiAgICAgICAgY29udGVudENhcmRzLmFwcGVuZENoaWxkKGNvbnRlbnRDYXJkKTtcblxuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1nLnNyYyA9IGltYWdlO1xuICAgICAgICBjb250ZW50Q2FyZC5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgICAgIGNvbnN0IGNhcmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmRUZXh0LmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGV4dCcpO1xuICAgICAgICBjb250ZW50Q2FyZC5hcHBlbmRDaGlsZChjYXJkVGV4dCk7XG5cbiAgICAgICAgY29uc3QgY2FyZFRleHRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGNhcmRUZXh0VGl0bGUudGV4dENvbnRlbnQgPSAnVGFjb3MnO1xuICAgICAgICBjYXJkVGV4dC5hcHBlbmRDaGlsZChjYXJkVGV4dFRpdGxlKTtcblxuICAgICAgICBjb25zdCBjYXJkVGV4dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjYXJkVGV4dERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE1vbGVzdGlhZSwgcXVpYnVzZGFtLic7XG4gICAgICAgIGNhcmRUZXh0LmFwcGVuZENoaWxkKGNhcmRUZXh0RGVzY3JpcHRpb24pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRDYXJkcztcbn07XG5cbmNvbnN0IHJlbmRlckxvd2VyU2VjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVyby5jbGFzc0xpc3QuYWRkKCdoZXJvMicpO1xuXG4gICAgWydNZW51JywgJ0NvbnRhY3QnXS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlcm9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVyb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCBpdGVtLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICBoZXJvQnV0dG9uLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICAgICAgaGVyb0J1dHRvbi5pZCA9IGl0ZW0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaGVyby5hcHBlbmRDaGlsZChoZXJvQnV0dG9uKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBoZXJvO1xufTtcblxuY29uc3QgcmVuZGVyRm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3Rlci5pZCA9ICdmb290ZXInO1xuXG4gICAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmb290ZXJUZXh0LnRleHRDb250ZW50ID0gJ8KpIDIwMjMgRWwgQ8OzZGlnbyBDYW50aW5hJztcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XG5cbiAgICBjb25zdCBwaG90b0NyZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwaG90b0NyZWRpdC5pbm5lckhUTUwgPSBgXG4gICAgUGhvdG9zIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AamFycml0b3NcIj5KYXJyaXRvcyBNZXhpY2FuIFNvZGE8L2E+IG9uIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbVwiPlVuc3BsYXNoPC9hPlxuICAgIGA7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHBob3RvQ3JlZGl0KTtcblxuICAgIHJldHVybiBmb290ZXI7XG59O1xuXG5jb25zdCByZW5kZXJNYWluID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmlkID0gJ21haW4nO1xuXG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZScpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG5cbiAgICBjb25zdCBtZXNzYWdlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZXNzYWdlVGV4dC50ZXh0Q29udGVudCA9ICdHcmFuZCBPcGVuaW5nISc7XG4gICAgbWVzc2FnZS5hcHBlbmRDaGlsZChtZXNzYWdlVGV4dCk7XG4gICAgXG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlcm8uY2xhc3NMaXN0LmFkZCgnaGVybycpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaGVybyk7XG5cbiAgICBjb25zdCBoZXJvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVyb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgICBoZXJvQnV0dG9uLnRleHRDb250ZW50ID0gJ09yZGVyIE5vdyc7XG4gICAgaGVyby5hcHBlbmRDaGlsZChoZXJvQnV0dG9uKTtcblxuICAgIGNvbnN0IGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29udGVudFRpdGxlLnRleHRDb250ZW50ID0gJ0NhbnRpbmEgZmF2b3JpdGVzJztcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRlbnRUaXRsZSk7XG5cbiAgICBjb25zdCBjb250ZW50Q2FyZHMgPSByZW5kZXJDb250ZW50Q2FyZHMoY29udGVudDEsIGNvbnRlbnQyLCBjb250ZW50MywgY29udGVudDQsIGNvbnRlbnQ1KTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRlbnRDYXJkcyk7XG5cbiAgICBjb25zdCBsb3dlclNlY3Rpb24gPSByZW5kZXJMb3dlclNlY3Rpb24oKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGxvd2VyU2VjdGlvbik7XG5cbiAgICByZXR1cm4gbWFpbjtcbn07XG5cbmV4cG9ydCB7IHJlbmRlckhlYWRlciwgcmVuZGVyTWFpbiwgcmVuZGVyRm9vdGVyIH0iLCJpbXBvcnQgXCIuLi9jc3Mvc3R5bGUuY3NzXCI7XG5cbmNvbnN0IHJlbmRlck1lbnUgPSAobWVudU9iaikgPT4ge1xuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyJyk7XG5cbiAgICBPYmplY3Qua2V5cyhtZW51T2JqLm1lbnUpLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXRlZ29yeVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnktd3JhcHBlcicpO1xuXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNhdGVnb3J5VGl0bGUuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnktdGl0bGUnKTtcbiAgICAgICAgY2F0ZWdvcnlUaXRsZS50ZXh0Q29udGVudCA9IGNhdGVnb3J5O1xuXG4gICAgICAgIGNhdGVnb3J5V3JhcHBlci5hcHBlbmRDaGlsZChjYXRlZ29yeVRpdGxlKTtcblxuICAgICAgICBjb25zdCBjYXRlZ29yeUl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgY2F0ZWdvcnlJdGVtcy5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeS1pdGVtcycsIGNhdGVnb3J5LnRvTG93ZXJDYXNlKCkpO1xuXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5SXRlbXNBcnJheSA9IG1lbnVPYmoubWVudVtjYXRlZ29yeV07XG5cbiAgICAgICAgY2F0ZWdvcnlJdGVtc0FycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBjYXRlZ29yeUl0ZW0uY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnktaXRlbScpO1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gaXRlbTtcblxuICAgICAgICAgICAgY2F0ZWdvcnlJdGVtLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgIGNhdGVnb3J5SXRlbXMuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlJdGVtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2F0ZWdvcnlXcmFwcGVyLmFwcGVuZENoaWxkKGNhdGVnb3J5SXRlbXMpO1xuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhdGVnb3J5V3JhcHBlcik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWJ1dHRvbnMtY29udGFpbmVyJyk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKTtcblxuICAgIFsnUmVzZXJ2YXRpb25zJywgJ09yZGVyIE9ubGluZSddLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgaGVyb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZXJvQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicsICdtZW51LWJ0bicpO1xuICAgICAgICBoZXJvQnV0dG9uLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICAgICAgaGVyb0J1dHRvbi5pZCA9IGl0ZW0uc3BsaXQoJyAnKS5qb2luKCcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlcm9CdXR0b24pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1lbnVDb250YWluZXI7XG59O1xuXG5leHBvcnQgeyByZW5kZXJNZW51IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy9sYW5kaW5nLXBhZ2UuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
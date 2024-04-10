/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../src/img/pic14.jpg */ "./src/img/pic14.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Akshar:wght@300..700&family=Bebas+Neue&family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 100%;
}

body {
  min-height: 100vh;
  width: 100%;
  background-color: var(--black);
  font-family: "Akshar", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

main {
  width: 100%;
  min-height: 100vh;
}

@keyframes translateCard {
  from {
    transform: translateY(-200px);
  }
  to {
    transform: translateY(0);
  }
}
:root {
  --black: black;
  --white: white;
  --lightGray: lightgrey;
  --whitesmoke: whitesmoke;
  --homeP-overlay: rgba(0, 0, 0, 0.274);
  --advert: rgb(219, 218, 218);
  --homeP-btnBckGrd: rgba(211, 211, 211, 0.534);
  --homeP-btnBorder: rgb(129, 129, 129);
  --homeP-btnText: var(--black);
  --formModal-BckGrd: var(--black);
  --formWindow-border: rgba(209, 206, 206, 0.445);
  --formWindow-title: rgb(209, 206, 206);
  --form-elBorder: rgb(209, 206, 206);
  --form-btnBck: transparent;
  --form-btnText: var(--whitesmoke);
  --form-btnBckHover: whitesmoke;
  --form-btnTextHover: var(--black);
  --form-hightLightText: rgb(80, 79, 79);
  --form-hightLightMenu: var(--whitesmoke);
  --header: var(--black);
  --headerBoxShadow: rgba(51, 50, 50, 0.658);
  --headerTitle: var(--black);
  --headerSearchIcon: var(--white);
  --headerSearchBubble: rgb(245, 240, 240);
  --searchBubbleIcon: rgb(97, 94, 94);
  --searchBubbleIconHover: rgb(136, 133, 133);
  --inputPlaceHolder: rgb(136, 134, 134);
  --headerBtn: var(--white);
  --headerBtnHover: #c5c5c5;
  --headerIconHover: #c5c5c5;
}

.formModal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  right: -100%;
  z-index: 7000;
  top: 0;
  bottom: 0;
  background-color: var(--formModal-BckGrd);
  transition-duration: 0.5s;
}
.formModal--visible {
  right: 0;
}
@media (min-width: 62rem) {
  .formModal {
    position: static;
  }
}
.formModal__closingCross {
  color: var(--black);
}
@media (min-width: 62rem) {
  .formModal__closingCross {
    visibility: hidden;
  }
}

.formWindow {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  height: auto;
  scale: 0.9 0.9;
  gap: 70px;
  padding: 50px 40px;
  border-radius: 10px;
  overflow-y: auto;
  background-color: var(--black);
  border: 1px solid var(--formWindow-border);
}
@media (min-width: 62rem) {
  .formWindow {
    scale: 0.8 0.8;
  }
}
.formWindow__title {
  color: var(--formWindow-title);
  font-size: 1.125rem;
  font-weight: 600;
}

.formMenu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  justify-content: center;
  border: 1px solid var(--form-elBorder);
  border-radius: 10px;
}
.formMenu li {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  list-style: none;
}
.formMenu li:hover {
  cursor: pointer;
}
.formMenu li:nth-child(1) {
  border-radius: 10px 0 0 10px;
}
.formMenu li:nth-child(2) {
  border-radius: 0 10px 10px 0;
  color: var(--white);
}
.formMenu .hightLight {
  color: var(--form-hightLightText);
  background-color: var(--form-hightLightMenu);
  font-weight: 400;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
}
.form__selection {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 60px;
  border-radius: 10px;
}
.form__selection:hover {
  color: var(--lightGray);
}
.form__selection select {
  position: relative;
  border: none;
  appearance: none;
  outline: none;
  background-color: transparent;
  color: var(--white);
}
.form__selection .selectArrow {
  position: absolute;
  right: 20px;
}
.form__input {
  padding: 20px;
  text-align: left;
  outline: none;
  background-color: transparent;
  color: var(--white);
}
.form__btn {
  background-color: var(--form-btn);
  color: var(--form-btnText);
  cursor: pointer;
}
.form__btn:hover {
  background-color: var(--form-btnBckHover);
  color: var(--form-btnTextHover);
}

.formTab {
  width: 100%;
  min-height: 60px;
  border-radius: 10px;
  font-weight: 400;
  font-size: 0.875rem;
  border: 1px solid var(--whitesmoke);
}
@media (min-width: 48rem) {
  .formTab {
    font-size: 1rem;
  }
}

.closingCross {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 1.125rem;
  color: var(--white);
  cursor: pointer;
  background-color: transparent;
  border: none;
}
.closingCross:hover {
  color: var(--lightGray);
}

.searchBubble {
  display: flex;
  align-items: center;
  width: min(100%, 550px);
  gap: 10px;
  padding: 10px 15px;
  border-radius: 30px;
  background-color: var(--headerSearchBubble);
}
.searchBubble__icon {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--searchBubbleIcon);
  background-color: transparent;
  border: none;
  font-size: 1rem;
}
.searchBubble__icon:hover {
  color: var(--searchBubbleIconHover);
}
.searchBubble__input {
  height: 100%;
  width: 100%;
  background-color: var(--headerSearchBubble);
  border: none;
  outline: none;
}
.searchBubble__input::placeholder {
  color: var(--inputPlaceHolder);
  font-size: 0.875rem;
}

.slidingSbubble {
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 70px;
  gap: 10px;
  padding: 15px;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: var(--black);
  transition-duration: 0.3s;
}
@media (min-width: 48rem) {
  .slidingSbubble {
    visibility: hidden;
    opacity: 0;
  }
}
.slidingSbubble__visible {
  top: 0;
}
.slidingSbubble__hidden {
  top: -70px;
}
.slidingSbubble__cross {
  display: flex;
  align-items: center;
  color: var(--white);
  cursor: pointer;
  background-color: transparent;
  border: none;
}
.slidingSbubble__cross:hover {
  color: var(--lightGray);
}

@media (min-width: 62rem) {
  .homePage {
    display: grid;
    grid-template-columns: 70% 30%;
  }
}
.homePage .mainPage {
  position: fixed;
  inset: 0 0 0 0;
  background-color: var(--black);
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 36% 75%;
}
@media (min-width: 62rem) {
  .homePage .mainPage {
    position: static;
  }
}
.homePage .mainPage__overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0 0 0 0;
  z-index: 3000;
  padding: 50px 30px 0 0;
  background-color: var(--homeP-overlay);
}
@media (min-width: 62rem) {
  .homePage .mainPage__overlay {
    display: block;
    width: 70%;
  }
}
.homePage .mainPage__flex {
  position: absolute;
  top: 50px;
  right: 30px;
}
.homePage .mainPage__title {
  text-align: right;
  color: var(--white);
  font-size: 2.125rem;
}
@media (min-width: 62rem) {
  .homePage .mainPage__title {
    font-size: 38px;
  }
}
.homePage .mainPage__slogan {
  text-align: right;
  color: var(--white);
  font-size: 1.0625rem;
}
.homePage .mainPage__advert {
  max-width: 515px;
  padding-left: 50px;
  text-align: left;
  color: var(--advert);
  text-transform: uppercase;
  font-weight: 600;
  line-height: 3.75rem;
  font-size: 2.5rem;
}
@media (min-width: 36rem) {
  .homePage .mainPage__advert {
    font-size: 2.625rem;
  }
}
@media (min-width: 48rem) {
  .homePage .mainPage__advert {
    font-size: 3.125rem;
    text-align: center;
  }
}
@media (min-width: 62rem) {
  .homePage .mainPage__advert {
    position: absolute;
    top: 250px;
    right: 30px;
    max-width: 450px;
    text-align: right;
    line-height: 70px;
  }
}
.homePage .mainPage__btn {
  position: absolute;
  bottom: 44px;
  right: 30px;
  height: 60px;
  width: 60px;
  border-radius: 10px;
  padding: 10px;
  background-color: var(--homeP-btnBckGrd);
  border: 2px solid var(--homeP-btnBorder);
  color: var(--homeP-btnText);
  font-weight: 600;
  font-size: 1.25rem;
}
@media (min-width: 62rem) {
  .homePage .mainPage__btn {
    position: fixed;
    visibility: hidden;
    opacity: 0;
  }
}

footer {
  position: fixed;
  z-index: 6000;
  bottom: 0;
  width: 100%;
  padding: 24px;
  text-align: center;
  font-size: 0.875rem;
  background-color: transparent;
  color: var(--white);
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 70px;
  position: sticky;
  inset: 0 0 auto 0;
  z-index: 500000;
  box-shadow: 1px 1px 1px var(--headerBoxShadow);
  background-color: var(--header);
}
@media (min-width: 36rem) {
  .header {
    padding: 0 30px;
    gap: 20px;
  }
}
.header__h1 {
  color: var(--white);
  font-size: 1.5625rem;
  font-weight: 600;
  cursor: pointer;
}
@media (min-width: 48rem) {
  .header__h1 {
    font-size: 1.875rem;
  }
}
@media (min-width: 62rem) {
  .header__h1 {
    font-size: 2.1875rem;
  }
}
.header__searchIcon {
  color: var(--white);
  font-size: 1.25rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.header__searchIcon:hover {
  color: var(--headerIconHover);
}
@media (min-width: 48rem) {
  .header__searchIcon {
    position: fixed;
    visibility: hidden;
    opacity: 0;
  }
}
.header__searchBubble {
  position: fixed;
  visibility: hidden;
  height: 45px;
  opacity: 0;
}
@media (min-width: 48rem) {
  .header__searchBubble {
    position: static;
    visibility: visible;
    opacity: 1;
  }
}
.header__userName {
  color: var(--white);
  font-size: 0.875rem;
  font-weight: 600;
}
@media (min-width: 48rem) {
  .header__userName {
    font-size: 1rem;
  }
}
.header__collectionBtn {
  min-width: auto;
  min-height: 25px;
  padding: 8px 15px;
  border-radius: 30px;
  border: 2px solid var(--white);
  position: fixed;
  visibility: hidden;
  opacity: 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--white);
  cursor: pointer;
  background-color: transparent;
}
@media (min-width: 48rem) {
  .header__collectionBtn {
    font-size: 1rem;
    min-height: 40px;
    position: static;
    visibility: visible;
    opacity: 1;
  }
}
.header__collectionBtn:hover {
  color: var(--headerBtnHover);
  border: 2px solid var(--headerBtnHover);
}
.header__collectionIcon {
  color: var(--white);
  font-size: 1.25rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.header__collectionIcon:hover {
  color: var(--headerIconHover);
}
@media (min-width: 48rem) {
  .header__collectionIcon {
    position: fixed;
    visibility: hidden;
    opacity: 0;
  }
}
.header__logOutBtn {
  border: none;
  background-color: transparent;
}
.header__logOutBtn i {
  color: var(--white);
  font-size: 1.25rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.header__logOutBtn i:hover {
  color: var(--headerIconHover);
}
@media (min-width: 48rem) {
  .header__logOutBtn i {
    font-size: 1.25rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/scss/base/_reset.scss","webpack://./src/scss/main.scss","webpack://./src/scss/base/_colors.scss","webpack://./src/scss/components/_formModal.scss","webpack://./src/scss/base/_mixins.scss","webpack://./src/scss/components/_formWindow.scss","webpack://./src/scss/components/_formMenu.scss","webpack://./src/scss/components/_form.scss","webpack://./src/scss/components/_formTab.scss","webpack://./src/scss/components/_closingCross.scss","webpack://./src/scss/components/_searchBubble.scss","webpack://./src/scss/components/_slidingSbubble.scss","webpack://./src/scss/layout/_homePage.scss","webpack://./src/scss/layout/_footer.scss","webpack://./src/scss/layout/userPage/_header.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Akshar:wght@300..700&family=Bebas+Neue&family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap');\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nhtml { font-size: 100%; }\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    width: 100%;\r\n    background-color: var(--black);\r\n    font-family: \"Akshar\", sans-serif;\r\n    font-optical-sizing: auto;\r\n    font-style: normal;\r\n}\r\n\r\nmain { \r\n    width: 100%;\r\n    min-height: 100vh;\r\n}\r\n\r\n//Animations\r\n@keyframes translateCard {\r\n    from { transform: translateY(-200px) };\r\n    to { transform: translateY(0);}\r\n}\r\n","@import url(\"https://fonts.googleapis.com/css2?family=Akshar:wght@300..700&family=Bebas+Neue&family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap\");\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 100%;\n}\n\nbody {\n  min-height: 100vh;\n  width: 100%;\n  background-color: var(--black);\n  font-family: \"Akshar\", sans-serif;\n  font-optical-sizing: auto;\n  font-style: normal;\n}\n\nmain {\n  width: 100%;\n  min-height: 100vh;\n}\n\n@keyframes translateCard {\n  from {\n    transform: translateY(-200px);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n:root {\n  --black: black;\n  --white: white;\n  --lightGray: lightgrey;\n  --whitesmoke: whitesmoke;\n  --homeP-overlay: rgba(0, 0, 0, 0.274);\n  --advert: rgb(219, 218, 218);\n  --homeP-btnBckGrd: rgba(211, 211, 211, 0.534);\n  --homeP-btnBorder: rgb(129, 129, 129);\n  --homeP-btnText: var(--black);\n  --formModal-BckGrd: var(--black);\n  --formWindow-border: rgba(209, 206, 206, 0.445);\n  --formWindow-title: rgb(209, 206, 206);\n  --form-elBorder: rgb(209, 206, 206);\n  --form-btnBck: transparent;\n  --form-btnText: var(--whitesmoke);\n  --form-btnBckHover: whitesmoke;\n  --form-btnTextHover: var(--black);\n  --form-hightLightText: rgb(80, 79, 79);\n  --form-hightLightMenu: var(--whitesmoke);\n  --header: var(--black);\n  --headerBoxShadow: rgba(51, 50, 50, 0.658);\n  --headerTitle: var(--black);\n  --headerSearchIcon: var(--white);\n  --headerSearchBubble: rgb(245, 240, 240);\n  --searchBubbleIcon: rgb(97, 94, 94);\n  --searchBubbleIconHover: rgb(136, 133, 133);\n  --inputPlaceHolder: rgb(136, 134, 134);\n  --headerBtn: var(--white);\n  --headerBtnHover: #c5c5c5;\n  --headerIconHover: #c5c5c5;\n}\n\n.formModal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  position: fixed;\n  right: -100%;\n  z-index: 7000;\n  top: 0;\n  bottom: 0;\n  background-color: var(--formModal-BckGrd);\n  transition-duration: 0.5s;\n}\n.formModal--visible {\n  right: 0;\n}\n@media (min-width: 62rem) {\n  .formModal {\n    position: static;\n  }\n}\n.formModal__closingCross {\n  color: var(--black);\n}\n@media (min-width: 62rem) {\n  .formModal__closingCross {\n    visibility: hidden;\n  }\n}\n\n.formWindow {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  max-width: 500px;\n  height: auto;\n  scale: 0.9 0.9;\n  gap: 70px;\n  padding: 50px 40px;\n  border-radius: 10px;\n  overflow-y: auto;\n  background-color: var(--black);\n  border: 1px solid var(--formWindow-border);\n}\n@media (min-width: 62rem) {\n  .formWindow {\n    scale: 0.8 0.8;\n  }\n}\n.formWindow__title {\n  color: var(--formWindow-title);\n  font-size: 1.125rem;\n  font-weight: 600;\n}\n\n.formMenu {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  justify-content: center;\n  border: 1px solid var(--form-elBorder);\n  border-radius: 10px;\n}\n.formMenu li {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 12px;\n  list-style: none;\n}\n.formMenu li:hover {\n  cursor: pointer;\n}\n.formMenu li:nth-child(1) {\n  border-radius: 10px 0 0 10px;\n}\n.formMenu li:nth-child(2) {\n  border-radius: 0 10px 10px 0;\n  color: var(--white);\n}\n.formMenu .hightLight {\n  color: var(--form-hightLightText);\n  background-color: var(--form-hightLightMenu);\n  font-weight: 400;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  width: 100%;\n  height: 100%;\n}\n.form__selection {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  width: 100%;\n  height: 60px;\n  border-radius: 10px;\n}\n.form__selection:hover {\n  color: var(--lightGray);\n}\n.form__selection select {\n  position: relative;\n  border: none;\n  appearance: none;\n  outline: none;\n  background-color: transparent;\n  color: var(--white);\n}\n.form__selection .selectArrow {\n  position: absolute;\n  right: 20px;\n}\n.form__input {\n  padding: 20px;\n  text-align: left;\n  outline: none;\n  background-color: transparent;\n  color: var(--white);\n}\n.form__btn {\n  background-color: var(--form-btn);\n  color: var(--form-btnText);\n  cursor: pointer;\n}\n.form__btn:hover {\n  background-color: var(--form-btnBckHover);\n  color: var(--form-btnTextHover);\n}\n\n.formTab {\n  width: 100%;\n  min-height: 60px;\n  border-radius: 10px;\n  font-weight: 400;\n  font-size: 0.875rem;\n  border: 1px solid var(--whitesmoke);\n}\n@media (min-width: 48rem) {\n  .formTab {\n    font-size: 1rem;\n  }\n}\n\n.closingCross {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  font-size: 1.125rem;\n  color: var(--white);\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n}\n.closingCross:hover {\n  color: var(--lightGray);\n}\n\n.searchBubble {\n  display: flex;\n  align-items: center;\n  width: min(100%, 550px);\n  gap: 10px;\n  padding: 10px 15px;\n  border-radius: 30px;\n  background-color: var(--headerSearchBubble);\n}\n.searchBubble__icon {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  color: var(--searchBubbleIcon);\n  background-color: transparent;\n  border: none;\n  font-size: 1rem;\n}\n.searchBubble__icon:hover {\n  color: var(--searchBubbleIconHover);\n}\n.searchBubble__input {\n  height: 100%;\n  width: 100%;\n  background-color: var(--headerSearchBubble);\n  border: none;\n  outline: none;\n}\n.searchBubble__input::placeholder {\n  color: var(--inputPlaceHolder);\n  font-size: 0.875rem;\n}\n\n.slidingSbubble {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  min-height: 70px;\n  gap: 10px;\n  padding: 15px;\n  position: fixed;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  background-color: var(--black);\n  transition-duration: 0.3s;\n}\n@media (min-width: 48rem) {\n  .slidingSbubble {\n    visibility: hidden;\n    opacity: 0;\n  }\n}\n.slidingSbubble__visible {\n  top: 0;\n}\n.slidingSbubble__hidden {\n  top: -70px;\n}\n.slidingSbubble__cross {\n  display: flex;\n  align-items: center;\n  color: var(--white);\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n}\n.slidingSbubble__cross:hover {\n  color: var(--lightGray);\n}\n\n@media (min-width: 62rem) {\n  .homePage {\n    display: grid;\n    grid-template-columns: 70% 30%;\n  }\n}\n.homePage .mainPage {\n  position: fixed;\n  inset: 0 0 0 0;\n  background-color: var(--black);\n  background-image: url(\"/src/img/pic14.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 36% 75%;\n}\n@media (min-width: 62rem) {\n  .homePage .mainPage {\n    position: static;\n  }\n}\n.homePage .mainPage__overlay {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  inset: 0 0 0 0;\n  z-index: 3000;\n  padding: 50px 30px 0 0;\n  background-color: var(--homeP-overlay);\n}\n@media (min-width: 62rem) {\n  .homePage .mainPage__overlay {\n    display: block;\n    width: 70%;\n  }\n}\n.homePage .mainPage__flex {\n  position: absolute;\n  top: 50px;\n  right: 30px;\n}\n.homePage .mainPage__title {\n  text-align: right;\n  color: var(--white);\n  font-size: 2.125rem;\n}\n@media (min-width: 62rem) {\n  .homePage .mainPage__title {\n    font-size: 38px;\n  }\n}\n.homePage .mainPage__slogan {\n  text-align: right;\n  color: var(--white);\n  font-size: 1.0625rem;\n}\n.homePage .mainPage__advert {\n  max-width: 515px;\n  padding-left: 50px;\n  text-align: left;\n  color: var(--advert);\n  text-transform: uppercase;\n  font-weight: 600;\n  line-height: 3.75rem;\n  font-size: 2.5rem;\n}\n@media (min-width: 36rem) {\n  .homePage .mainPage__advert {\n    font-size: 2.625rem;\n  }\n}\n@media (min-width: 48rem) {\n  .homePage .mainPage__advert {\n    font-size: 3.125rem;\n    text-align: center;\n  }\n}\n@media (min-width: 62rem) {\n  .homePage .mainPage__advert {\n    position: absolute;\n    top: 250px;\n    right: 30px;\n    max-width: 450px;\n    text-align: right;\n    line-height: 70px;\n  }\n}\n.homePage .mainPage__btn {\n  position: absolute;\n  bottom: 44px;\n  right: 30px;\n  height: 60px;\n  width: 60px;\n  border-radius: 10px;\n  padding: 10px;\n  background-color: var(--homeP-btnBckGrd);\n  border: 2px solid var(--homeP-btnBorder);\n  color: var(--homeP-btnText);\n  font-weight: 600;\n  font-size: 1.25rem;\n}\n@media (min-width: 62rem) {\n  .homePage .mainPage__btn {\n    position: fixed;\n    visibility: hidden;\n    opacity: 0;\n  }\n}\n\nfooter {\n  position: fixed;\n  z-index: 6000;\n  bottom: 0;\n  width: 100%;\n  padding: 24px;\n  text-align: center;\n  font-size: 0.875rem;\n  background-color: transparent;\n  color: var(--white);\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  min-height: 70px;\n  position: sticky;\n  inset: 0 0 auto 0;\n  z-index: 500000;\n  box-shadow: 1px 1px 1px var(--headerBoxShadow);\n  background-color: var(--header);\n}\n@media (min-width: 36rem) {\n  .header {\n    padding: 0 30px;\n    gap: 20px;\n  }\n}\n.header__h1 {\n  color: var(--white);\n  font-size: 1.5625rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n@media (min-width: 48rem) {\n  .header__h1 {\n    font-size: 1.875rem;\n  }\n}\n@media (min-width: 62rem) {\n  .header__h1 {\n    font-size: 2.1875rem;\n  }\n}\n.header__searchIcon {\n  color: var(--white);\n  font-size: 1.25rem;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n}\n.header__searchIcon:hover {\n  color: var(--headerIconHover);\n}\n@media (min-width: 48rem) {\n  .header__searchIcon {\n    position: fixed;\n    visibility: hidden;\n    opacity: 0;\n  }\n}\n.header__searchBubble {\n  position: fixed;\n  visibility: hidden;\n  height: 45px;\n  opacity: 0;\n}\n@media (min-width: 48rem) {\n  .header__searchBubble {\n    position: static;\n    visibility: visible;\n    opacity: 1;\n  }\n}\n.header__userName {\n  color: var(--white);\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n@media (min-width: 48rem) {\n  .header__userName {\n    font-size: 1rem;\n  }\n}\n.header__collectionBtn {\n  min-width: auto;\n  min-height: 25px;\n  padding: 8px 15px;\n  border-radius: 30px;\n  border: 2px solid var(--white);\n  position: fixed;\n  visibility: hidden;\n  opacity: 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--white);\n  cursor: pointer;\n  background-color: transparent;\n}\n@media (min-width: 48rem) {\n  .header__collectionBtn {\n    font-size: 1rem;\n    min-height: 40px;\n    position: static;\n    visibility: visible;\n    opacity: 1;\n  }\n}\n.header__collectionBtn:hover {\n  color: var(--headerBtnHover);\n  border: 2px solid var(--headerBtnHover);\n}\n.header__collectionIcon {\n  color: var(--white);\n  font-size: 1.25rem;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n}\n.header__collectionIcon:hover {\n  color: var(--headerIconHover);\n}\n@media (min-width: 48rem) {\n  .header__collectionIcon {\n    position: fixed;\n    visibility: hidden;\n    opacity: 0;\n  }\n}\n.header__logOutBtn {\n  border: none;\n  background-color: transparent;\n}\n.header__logOutBtn i {\n  color: var(--white);\n  font-size: 1.25rem;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n}\n.header__logOutBtn i:hover {\n  color: var(--headerIconHover);\n}\n@media (min-width: 48rem) {\n  .header__logOutBtn i {\n    font-size: 1.25rem;\n  }\n}",":root {\r\n    --black: black;\r\n    --white: white;\r\n    --lightGray: lightgrey;\r\n    --whitesmoke: whitesmoke;\r\n    //HomePage\r\n    --homeP-overlay:  rgba(0, 0, 0, 0.274);\r\n    --advert: rgb(219, 218, 218);\r\n    --homeP-btnBckGrd:  rgba(211, 211, 211, 0.534);\r\n    --homeP-btnBorder: rgb(129, 129, 129);\r\n    --homeP-btnText: var(--black);\r\n    --formModal-BckGrd: var(--black);\r\n    --formWindow-border: rgba(209, 206, 206, 0.445);\r\n    --formWindow-title: rgb(209, 206, 206);\r\n    --form-elBorder:  rgb(209, 206, 206);\r\n    --form-btnBck: transparent;\r\n    --form-btnText:  var(--whitesmoke);\r\n    --form-btnBckHover: whitesmoke;\r\n    --form-btnTextHover: var(--black);\r\n    --form-hightLightText: rgb(80, 79, 79);\r\n    --form-hightLightMenu: var(--whitesmoke);\r\n    //UserPage\r\n    --header: var(--black);\r\n    --headerBoxShadow: rgba(51, 50, 50, 0.658);\r\n    --headerTitle: var(--black);\r\n    --headerSearchIcon: var(--white);\r\n    --headerSearchBubble: rgb(245, 240, 240);\r\n    --searchBubbleIcon: rgb(97, 94, 94);\r\n    --searchBubbleIconHover: rgb(136, 133, 133);\r\n    --inputPlaceHolder: rgb(136, 134, 134);\r\n    --headerBtn: var(--white);\r\n    --headerBtnHover: #c5c5c5;\r\n    --headerIconHover: #c5c5c5;\r\n}",".formModal {\r\n    @include flexColumnCenter;\r\n    width: 100%;\r\n    position: fixed;\r\n    right: -100%;\r\n    z-index: 7000;\r\n    top: 0; \r\n    bottom: 0;\r\n    background-color: var(--formModal-BckGrd);\r\n    transition-duration: 0.5s;\r\n    &--visible { right: 0; }\r\n    @include breakpoint(large) { position: static; }\r\n    &__closingCross { \r\n        color: var(--black);\r\n        @include breakpoint(large) { visibility: hidden;}\r\n    }\r\n}\r\n","//Breakpoints\r\n$breakpoints: (\r\n    'small': '36rem', // ≥576px\r\n    'medium': '48rem', // ≥768px\r\n    'large': '62rem', // ≥992p\r\n    'x-large': '75rem', // ≥1200px\r\n    'xx-large': '87.5rem', // ≥1400px\r\n);\r\n\r\n@mixin breakpoint($size) {\r\n\t@media (min-width: map-get($breakpoints, $size)) { @content; }\r\n}\r\n\r\n//Flex\r\n@mixin flexColumnCenter {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n@mixin flexColumn {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n@mixin flexRowCenter {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n@mixin flexRow {\r\n    display: flex;\r\n}\r\n\r\n//Positioning\r\n@mixin fixedZero {\r\n    position: fixed;\r\n    inset: 0 0 0 0;\r\n}\r\n\r\n//Elements\r\n@mixin headerIcon {\r\n    color: var(--white);\r\n    font-size: 1.25rem;\r\n    background-color: transparent;\r\n    border: none;\r\n    cursor: pointer;\r\n    &:hover { color: var(--headerIconHover); }\r\n}\r\n@mixin headerIconHidden {\r\n    @include breakpoint(medium) {\r\n        position: fixed;\r\n        visibility: hidden;\r\n        opacity: 0;\r\n    }\r\n}\r\n@mixin cross {\r\n    color:var(--white);\r\n    cursor: pointer;\r\n    background-color: transparent;\r\n    border: none;\r\n    &:hover{ color: var(--lightGray); }\r\n}",".formWindow {\r\n    @include flexColumn;\r\n    align-items: center;\r\n    width: 100%;\r\n    max-width: 500px;\r\n    height: auto;\r\n    scale: 0.9 0.9;\r\n    gap: 70px;\r\n    padding: 50px 40px; \r\n    border-radius: 10px;\r\n    overflow-y: auto;\r\n    background-color: var(--black);\r\n    border: 1px solid var(--formWindow-border);\r\n    @include breakpoint(large) { scale: 0.8 0.8;}\r\n    &__title { \r\n        color: var(--formWindow-title); \r\n        font-size: 1.125rem;\r\n        font-weight: 600;\r\n    }\r\n}\r\n    ",".formMenu {\r\n    @include flexRowCenter;\r\n    width: 100%;\r\n    justify-content: center;\r\n    border: 1px solid var(--form-elBorder);\r\n    border-radius: 10px;\r\n    li { \r\n        @include flexRowCenter;\r\n        padding: 12px; \r\n        list-style: none;\r\n    }\r\n    li:hover { cursor: pointer;}\r\n    li:nth-child(1) { border-radius: 10px 0 0 10px;}\r\n    li:nth-child(2) { \r\n        border-radius: 0 10px 10px 0; \r\n        color: var(--white);\r\n    }\r\n    .hightLight {\r\n        color: var(--form-hightLightText);\r\n        background-color: var(--form-hightLightMenu);\r\n        font-weight: 400;\r\n    }\r\n}",".form {\r\n    @include flexColumnCenter;\r\n    gap: 20px;\r\n    width: 100%;\r\n    height: 100%;\r\n    &__selection {\r\n        @include flexRowCenter;\r\n        position: relative;\r\n        width: 100%;\r\n        height: 60px; \r\n        border-radius: 10px;\r\n        &:hover { color: var(--lightGray); }\r\n        select {\r\n            position: relative;\r\n            border: none;\r\n            appearance: none;\r\n            outline: none;\r\n            background-color: transparent;\r\n            color: var(--white);\r\n        }\r\n        .selectArrow {\r\n            position: absolute;\r\n            right: 20px;\r\n        }\r\n    }\r\n    &__input {\r\n        padding: 20px;\r\n        text-align: left;\r\n        outline: none;\r\n        background-color: transparent;\r\n        color: var(--white);\r\n    }\r\n    &__btn { \r\n        background-color: var(--form-btn); \r\n        color: var(--form-btnText);\r\n        cursor: pointer;\r\n        &:hover { \r\n            background-color: var(--form-btnBckHover);\r\n            color: var(--form-btnTextHover);\r\n        }\r\n    }\r\n}",".formTab {\r\n    width: 100%;\r\n    min-height: 60px;\r\n    border-radius: 10px;\r\n    font-weight: 400;\r\n    font-size: 0.875rem;\r\n    border: 1px solid var(--whitesmoke);\r\n    @include breakpoint(medium) { font-size: 1rem; }\r\n}",".closingCross {\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 20px;\r\n    font-size: 1.125rem;\r\n    @include cross;\r\n}\r\n\r\n",".searchBubble {\r\n    @include flexRow;\r\n    align-items: center;\r\n    width: min(100%, 550px);\r\n    gap: 10px;\r\n    padding: 10px 15px;\r\n    border-radius: 30px;\r\n    background-color: var(--headerSearchBubble);\r\n    &__icon {\r\n        @include flexRow;\r\n        align-items: center;\r\n        cursor: pointer;\r\n        color: var(--searchBubbleIcon);\r\n        background-color: transparent;\r\n        border: none;\r\n        font-size: 1rem;\r\n        &:hover { color: var(--searchBubbleIconHover); }\r\n    }\r\n    &__input {\r\n        height: 100%;\r\n        width: 100%;\r\n        background-color: var(--headerSearchBubble);\r\n        border: none;\r\n        outline: none;\r\n        &::placeholder {\r\n            color: var(--inputPlaceHolder);\r\n            font-size: 0.875rem;\r\n        }\r\n    }\r\n}",".slidingSbubble {\r\n    @include flexRow;\r\n    justify-content: center;\r\n    width: 100%;\r\n    min-height: 70px;\r\n    gap: 10px;\r\n    padding: 15px;\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1000;\r\n    background-color: var(--black);\r\n    transition-duration: 0.3s;\r\n    @include breakpoint(medium) {\r\n        visibility: hidden;\r\n        opacity: 0;\r\n    }\r\n    &__visible { top: 0;}\r\n    &__hidden { top: -70px; }\r\n    &__cross {\r\n        @include flexRow;\r\n        align-items: center;\r\n        @include cross;\r\n    }\r\n}\r\n\r\n",".homePage {\r\n    @include breakpoint(large) {\r\n        display: grid;\r\n        grid-template-columns: 70% 30%;\r\n    }\r\n    .mainPage {\r\n        @include fixedZero;\r\n        background-color: var(--black);\r\n        background-image: url('/src/img/pic14.jpg');\r\n        background-size: cover;\r\n        background-repeat: no-repeat;\r\n        background-position: 36% 75%;\r\n        @include breakpoint(large) { position: static; }\r\n        &__overlay {\r\n            @include flexColumnCenter;\r\n            @include fixedZero;\r\n            z-index: 3000;\r\n            padding: 50px 30px 0 0;\r\n            background-color: var(--homeP-overlay);\r\n            @include breakpoint(large) {\r\n                display: block;\r\n                width: 70%;\r\n            }\r\n        }\r\n        &__flex {\r\n            position: absolute;\r\n            top: 50px;\r\n            right: 30px;\r\n        }\r\n        &__title {\r\n            text-align: right;\r\n            color: var(--white);\r\n            font-size: 2.125rem;\r\n            @include breakpoint(large) { font-size: 38px;}\r\n        }\r\n        &__slogan {\r\n            text-align: right;\r\n            color: var(--white);\r\n            font-size: 1.0625rem;\r\n            \r\n        }\r\n        &__advert {\r\n            max-width: 515px;\r\n            padding-left: 50px ;\r\n            text-align: left;\r\n            color: var(--advert);\r\n            text-transform: uppercase;\r\n            font-weight: 600;\r\n            line-height: 3.75rem;\r\n            font-size: 2.5rem;\r\n            @include breakpoint(small) { font-size: 2.625rem;}\r\n            @include breakpoint(medium) { \r\n                font-size: 3.125rem;\r\n                text-align: center;\r\n            }\r\n            @include breakpoint(large) { \r\n                position: absolute;\r\n                top: 250px;\r\n                right: 30px;\r\n                max-width: 450px;\r\n                text-align: right;\r\n                line-height: 70px;\r\n            }\r\n        }\r\n        &__btn {\r\n            position: absolute;\r\n            bottom: 44px;\r\n            right: 30px;\r\n            height: 60px;\r\n            width: 60px;\r\n            border-radius: 10px;\r\n            padding: 10px;\r\n            background-color: var(--homeP-btnBckGrd);\r\n            border: 2px solid var(--homeP-btnBorder);\r\n            color: var(--homeP-btnText);\r\n            font-weight: 600;\r\n            font-size: 1.25rem;\r\n            @include breakpoint(large) {\r\n                position: fixed;\r\n                visibility: hidden;\r\n                opacity: 0;\r\n            }\r\n        }\r\n    }\r\n}","footer {\r\n    position: fixed;\r\n    z-index: 6000;\r\n    bottom: 0;\r\n    width: 100%;\r\n    padding: 24px;\r\n    text-align: center;\r\n    font-size: 0.875rem;\r\n    background-color: transparent;\r\n    color: var(--white);\r\n}",".header {\r\n    @include flexRow;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    min-height: 70px;\r\n    position: sticky;\r\n    inset: 0 0 auto 0;\r\n    z-index: 500000;\r\n    box-shadow: 1px 1px 1px var(--headerBoxShadow);\r\n    background-color: var(--header);\r\n    @include breakpoint(small) {\r\n        padding: 0 30px;\r\n        gap: 20px;\r\n    }\r\n    &__h1 {\r\n        color: var(--white);\r\n        font-size: 1.5625rem;\r\n        font-weight: 600;\r\n        @include breakpoint (medium) { font-size: 1.875rem; }\r\n        @include breakpoint (large) { font-size: 2.1875rem; }\r\n        cursor: pointer;\r\n    }\r\n    &__searchIcon {\r\n        @include headerIcon;\r\n        @include headerIconHidden;\r\n    }\r\n    &__searchBubble {\r\n        position: fixed;\r\n        visibility: hidden;\r\n        height: 45px;\r\n        opacity: 0;\r\n        @include breakpoint(medium) {\r\n            position: static;\r\n            visibility: visible;\r\n            opacity: 1;\r\n        }\r\n    }\r\n    &__userName {\r\n        color: var(--white);\r\n        font-size: 0.875rem;\r\n        font-weight: 600;\r\n        @include breakpoint(medium) { font-size: 1rem;}\r\n    }\r\n    &__collectionBtn {\r\n        min-width: auto;\r\n        min-height: 25px;\r\n        padding: 8px 15px;\r\n        border-radius: 30px;\r\n        border: 2px solid var(--white);\r\n        position: fixed;\r\n        visibility: hidden;\r\n        opacity: 0;\r\n        font-size: 0.875rem;\r\n        font-weight: 600;\r\n        color: var(--white);\r\n        cursor: pointer;\r\n        background-color: transparent;\r\n        @include breakpoint(medium) {\r\n            font-size: 1rem;\r\n            min-height: 40px;\r\n            position: static;\r\n            visibility: visible;\r\n            opacity: 1;\r\n        }\r\n        &:hover {\r\n            color: var(--headerBtnHover);\r\n            border: 2px solid var(--headerBtnHover);\r\n        }\r\n    }\r\n    &__collectionIcon {\r\n        @include headerIcon;\r\n        @include headerIconHidden;\r\n    }\r\n    &__logOutBtn {\r\n        border: none;\r\n        background-color: transparent;\r\n        i {\r\n            @include headerIcon;\r\n            @include breakpoint(medium) { font-size: 1.25rem; }\r\n        }\r\n    } \r\n}\r\n\r\n"],"sourceRoot":""}]);
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

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/img/pic14.jpg":
/*!***************************!*\
  !*** ./src/img/pic14.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dcc4ed83a6b60ce07812.jpg";

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
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/******/ 			"user": 0
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/user.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./src/scss/main.scss");


//Show slidingSbubble
document.querySelector('.header__searchIcon').addEventListener('click', ()=> {
    document.querySelector('.slidingSbubble').classList.add('slidingSbubble__visible');
    document.querySelector('.slidingSbubble').classList.toggle('slidingSbubble__hidden');
})
//Close slidingSbubble
document.querySelector('.slidingSbubble__cross').addEventListener('click', ()=> {
    document.querySelector('.slidingSbubble').classList.toggle('slidingSbubble__visible');
    document.querySelector('.slidingSbubble').classList.toggle('slidingSbubble__hidden');
})
//Open menu
document.querySelector('.header__collectionBtn').addEventListener('click', ()=> {
    document.querySelector('.collectionsMenu').classList.remove('collectionsMenu--hidden');
    document.querySelector('.collectionsMenu').classList.add('collectionsMenu--visible');
})
//Close menu
document.querySelector('.collectionsMenu__cross').addEventListener('click', ()=> {
    document.querySelector('.collectionsMenu').classList.remove('collectionsMenu--visible');
    document.querySelector('.collectionsMenu').classList.add('collectionsMenu--hidden');
})
})();

/******/ })()
;
//# sourceMappingURL=user.js.map
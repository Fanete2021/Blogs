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

/***/ "./elements/comment/Comment.js":
/*!*************************************!*\
  !*** ./elements/comment/Comment.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Comment\": () => (/* binding */ Comment)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ \"./utils.js\");\n/* harmony import */ var _resources_heart_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../resources/heart.png */ \"./resources/heart.png\");\n/* harmony import */ var _resources_trash_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../resources/trash.png */ \"./resources/trash.png\");\n/* harmony import */ var _resources_hoverTrash_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../resources/hoverTrash.png */ \"./resources/hoverTrash.png\");\n/* harmony import */ var _resources_selectedHeart_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../resources/selectedHeart.png */ \"./resources/selectedHeart.png\");\n/* harmony import */ var _localStroge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../localStroge */ \"./localStroge.js\");\n\n\n\n\n\n\nfunction Comment(options) {\n  let comment = document.createElement('div');\n  comment.className = 'comment';\n  comment.innerHTML = createHTML(options);\n  comment.id = options.id || 'comment';\n  addEventListenerLike(comment, options);\n  addEventListenerTrash(comment, options);\n  return comment;\n}\nfunction createHTML(options) {\n  let formattedDate = (0,_utils__WEBPACK_IMPORTED_MODULE_0__[\"dateСonversion\"])(options.date);\n  return `\n        <div class=\"comment__header\">\n            <div class=\"header__left\">\n                <div class=\"header__name\">${options.name}</div>\n                <div class=\"header__date\">${formattedDate}</div>\n            </div>\n            <div class=\"header__right\">\n                <img src=\"${options.like ? _resources_selectedHeart_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"] : _resources_heart_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]}\" class=\"header__like\"></img>\n                <img src=\"${_resources_trash_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]}\" class=\"header__trash\"></img>\n            </div>\n        </div>\n        <div class=\"comment__text\">${options.text}</div>\n    `;\n}\nfunction addEventListenerLike(comment, options) {\n  let heart = comment.querySelector('.header__like');\n  let isSelected = options.like || false;\n  heart.addEventListener('mouseover', () => {\n    heart.src = _resources_selectedHeart_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n  });\n  heart.addEventListener('mouseout', () => {\n    if (!isSelected) {\n      heart.src = _resources_heart_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    }\n  });\n  heart.addEventListener('click', () => {\n    isSelected = !isSelected;\n    if (isSelected) {\n      heart.src = _resources_selectedHeart_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n    } else {\n      heart.src = _resources_heart_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    }\n    let post = (0,_localStroge__WEBPACK_IMPORTED_MODULE_5__.getPost)(options.idPost);\n    let idComment = post.comments.findIndex(c => c.id === options.id);\n    post.comments[idComment].like = isSelected;\n    (0,_localStroge__WEBPACK_IMPORTED_MODULE_5__.updatePost)(post);\n  });\n}\nfunction addEventListenerTrash(comment, options) {\n  let trash = comment.querySelector('.header__trash');\n  trash.addEventListener('mouseover', () => {\n    trash.src = _resources_hoverTrash_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n  });\n  trash.addEventListener('mouseout', () => {\n    trash.src = _resources_trash_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n  });\n  trash.addEventListener('click', () => {\n    let post = (0,_localStroge__WEBPACK_IMPORTED_MODULE_5__.getPost)(options.idPost);\n    let idComment = post.comments.findIndex(c => c.id === options.id);\n    post.comments.splice(idComment, 1);\n    (0,_localStroge__WEBPACK_IMPORTED_MODULE_5__.updatePost)(post);\n    comment.remove();\n  });\n}\n\n//# sourceURL=webpack:///./elements/comment/Comment.js?");

/***/ }),

/***/ "./elements/creatorPosts/CreatorPosts.js":
/*!***********************************************!*\
  !*** ./elements/creatorPosts/CreatorPosts.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreatorPosts\": () => (/* binding */ CreatorPosts)\n/* harmony export */ });\n/* harmony import */ var _form_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form/Form */ \"./elements/form/Form.js\");\n\nfunction CreatorPosts(textContent, parentNode) {\n  let creator = document.createElement('button');\n  creator.textContent = textContent;\n  creator.className = 'creator-posts';\n  creator.addEventListener('click', event => {\n    let form = new _form_Form__WEBPACK_IMPORTED_MODULE_0__.Form(parentNode);\n    parentNode.style.pointerEvents = 'none';\n    document.body.append(form);\n  });\n  return creator;\n}\n\n//# sourceURL=webpack:///./elements/creatorPosts/CreatorPosts.js?");

/***/ }),

/***/ "./elements/form/Form.js":
/*!*******************************!*\
  !*** ./elements/form/Form.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Form\": () => (/* binding */ Form)\n/* harmony export */ });\n/* harmony import */ var _localStroge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../localStroge */ \"./localStroge.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ \"./utils.js\");\n/* harmony import */ var _post_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post/Post */ \"./elements/post/Post.js\");\n\n\n\nfunction Form(blog) {\n  let form = document.createElement('form');\n  form.className = 'form';\n  form.innerHTML = createHTML();\n  form.querySelector('.form__close').addEventListener('click', event => {\n    blog.style.pointerEvents = '';\n    form.remove();\n  });\n  form.addEventListener('submit', formSubmit);\n  addEventListenerToInput(form);\n  addEventListenerButton(form, blog);\n  return form;\n}\nfunction createHTML() {\n  var today = new Date().toISOString().substr(0, 10);\n  return `\n        <div>\n            <span class=\"form__title-field\">Name</span>\n            <span class=\"form__error form__error-name\"></span>\n        </div>\n        <input class=\"form__name\"></input>\n\n        <div>\n            <span class=\"form__title-field\">Text</span>\n            <span class=\"form__error form__error-text\"></span>\n        </div>\n        <textarea class=\"form__text\"></textarea>\n\n        <div>\n            <span class=\"form__title-field\">Date</span>\n            <span class=\"form__error form__error-date\"></span>\n        </div>\n        <input class=\"form__date\" type=\"date\" value=\"${today}\"></input>\n\n        <button type=\"submit\" class=\"form__send\" disabled=\"true\">\n            Create\n        </button>\n\n        <div class=\"form__close\">✕</div>\n    `;\n}\nfunction formSubmit(event) {\n  event.preventDefault();\n  document.querySelector('div').style.pointerEvents = '';\n  document.removeEventListener('keydown', formSubmit);\n  document.body.removeChild(document.querySelector('.form'));\n}\nfunction formSubmitKeydown(event) {\n  let activeTag = document.activeElement.tagName;\n  if (event.key === 'Enter') {\n    event.preventDefault();\n    if (activeTag !== 'INPUT' && activeTag !== 'TEXTAREA') {\n      formSubmit(event);\n    }\n  }\n}\nfunction getValidator(form) {\n  let inputs = [form.querySelector('.form__name'), form.querySelector('.form__text'), form.querySelector('.form__date')];\n  let errors = [form.querySelector('.form__error-name'), form.querySelector('.form__error-text'), form.querySelector('.form__error-date')];\n  let checkError = [name => {\n    if (name.length < 3) {\n      return 'The minimum length of the name is 3 characters';\n    }\n  }, text => {\n    if (text.length < 30) {\n      return 'The minimum text length is 30 characters';\n    }\n  }, date => {\n    date = date.split('-');\n    let year = date[0];\n    let month = date[1];\n    let day = date[2];\n    if (!year || !month || !day) {\n      return 'Not fully completed date';\n    }\n    if (year < 2000) {\n      return 'The year before 2000 is not suitable';\n    }\n    if (year > 2030) {\n      return 'The year after 2030 is not suitable';\n    }\n  }];\n  return {\n    inputs,\n    errors,\n    checkError\n  };\n}\nfunction addEventListenerToInput(form) {\n  let {\n    inputs,\n    checkError,\n    errors\n  } = getValidator(form);\n  for (let i = 0; i < inputs.length; ++i) {\n    inputs[i].onblur = function () {\n      let textError = checkError[i](inputs[i].value);\n      if (textError) {\n        errors[i].innerHTML = textError;\n      }\n    };\n    inputs[i].onfocus = function () {\n      errors[i].innerHTML = '';\n    };\n    inputs[i].oninput = function () {\n      changeButtonDisabled(form);\n    };\n  }\n}\nfunction changeButtonDisabled(form) {\n  let isDisabled = false;\n  let {\n    inputs,\n    checkError\n  } = getValidator(form);\n  for (let i = 0; i < inputs.length; ++i) {\n    let error = checkError[i](inputs[i].value);\n    if (error) {\n      isDisabled = true;\n      break;\n    }\n  }\n  form.querySelector('button').disabled = isDisabled;\n  if (isDisabled) {\n    document.removeEventListener('keydown', formSubmitKeydown);\n  } else {\n    document.addEventListener('keydown', formSubmitKeydown);\n  }\n}\nfunction getValues(form) {\n  let {\n    inputs\n  } = getValidator(form);\n  return {\n    name: inputs[0].value,\n    text: inputs[1].value,\n    date: inputs[2].value\n  };\n}\nfunction addEventListenerButton(form, blog) {\n  let button = form.querySelector('.form__send');\n  button.addEventListener('click', event => {\n    formSubmit(event);\n    let values = getValues(form);\n    let id = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.generateId)();\n    console.log(values);\n    let post = new _post_Post__WEBPACK_IMPORTED_MODULE_2__.Post({\n      ...values,\n      id: id\n    });\n    (0,_localStroge__WEBPACK_IMPORTED_MODULE_0__.addPost)({\n      ...values,\n      id: id\n    });\n    blog.append(post);\n  });\n}\n\n//# sourceURL=webpack:///./elements/form/Form.js?");

/***/ }),

/***/ "./elements/post/Post.js":
/*!*******************************!*\
  !*** ./elements/post/Post.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Post\": () => (/* binding */ Post)\n/* harmony export */ });\n/* harmony import */ var _localStroge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../localStroge */ \"./localStroge.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ \"./utils.js\");\n/* harmony import */ var _comment_Comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comment/Comment */ \"./elements/comment/Comment.js\");\n\n\n\nfunction Post(options) {\n  let post = document.createElement('div');\n  post.className = 'post';\n  post.innerHTML = createHTML(options);\n  post.id = options.id;\n  let comments = post.querySelector('.panel-comments__comments');\n  fillingComments(comments, options.comments || []);\n  addEventListenerOpenInputFields(post, options);\n  return post;\n}\nfunction createHTML(options) {\n  return `\n        <div class=\"post__wrapper\">\n            <div class=\"post__info\">\n                <div class=\"info__user-name\">${options.name}</div>\n\n                <div class=\"info__date\">${options.date}</div>\n            </div>\n\n            <div class=\"post__text\"><pre>${options.text}</pre></div>\n        </div>\n\n        <div class=\"post__panel-comments\">\n            <div class=\"panel-comments__comments\">\n            </div>\n\n            <div class=\"panel-comments__creator\">\n                <span class=\"creator__open\">Write a comment...</span>\n            <div>\n        </div>\n    `;\n}\nfunction fillingComments(parentNode, comments) {\n  for (let comment of comments) {\n    addComment(parentNode, comment);\n  }\n}\nfunction addComment(parentNode, options) {\n  let comment = new _comment_Comment__WEBPACK_IMPORTED_MODULE_2__.Comment(options);\n  parentNode.append(comment);\n}\nfunction addEventListenerOpenInputFields(post, options) {\n  let open = post.querySelector('.creator__open');\n  open.addEventListener('click', event => {\n    changeCreator(post, options);\n  });\n}\nfunction changeCreator(post, options) {\n  let creator = post.querySelector('.panel-comments__creator');\n  creator.innerHTML = `\n        <div class=\"creator__name\">\n            <input placeholder=\"Name\"></input>\n        </div>\n        <div class=\"creator__text\">\n            <textarea placeholder=\"Text\"></textarea>\n            <button class=\"creator__add\" disabled>Add</button>\n        </div>\n    `;\n  let button = post.querySelector('.creator__add');\n  let name = post.querySelector('.creator__name input');\n  let text = post.querySelector('.creator__text textarea');\n  name.oninput = function () {\n    if (name.value.length > 2 && text.value.length > 3) {\n      button.disabled = false;\n    } else {\n      button.disabled = true;\n    }\n  };\n  text.oninput = function () {\n    if (name.value.length > 2 && text.value.length > 3) {\n      button.disabled = false;\n    } else {\n      button.disabled = true;\n    }\n  };\n  button.addEventListener('click', () => {\n    let comments = post.querySelector('.panel-comments__comments');\n    let valuesComment = {\n      name: name.value,\n      text: text.value,\n      date: Date.now(),\n      idPost: options.id,\n      id: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.generateId)()\n    };\n    let comment = new _comment_Comment__WEBPACK_IMPORTED_MODULE_2__.Comment(valuesComment);\n    comments.append(comment);\n    options.comments = [...(options.comments || []), valuesComment];\n    (0,_localStroge__WEBPACK_IMPORTED_MODULE_0__.updatePost)(options);\n    creator.innerHTML = `<span class=\"creator__open\">Write a comment...</span>`;\n    addEventListenerOpenInputFields(post, options);\n  });\n}\n\n//# sourceURL=webpack:///./elements/post/Post.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _localStroge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStroge */ \"./localStroge.js\");\n/* harmony import */ var _pages_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Main */ \"./pages/Main.js\");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/index.scss */ \"./scss/index.scss\");\n\n\n\nconst existingPosts = (0,_localStroge__WEBPACK_IMPORTED_MODULE_0__.getPosts)();\nlet main = new _pages_Main__WEBPACK_IMPORTED_MODULE_1__.Main(existingPosts);\ndocument.body.append(main);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./localStroge.js":
/*!************************!*\
  !*** ./localStroge.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addPost\": () => (/* binding */ addPost),\n/* harmony export */   \"getPost\": () => (/* binding */ getPost),\n/* harmony export */   \"getPosts\": () => (/* binding */ getPosts),\n/* harmony export */   \"updatePost\": () => (/* binding */ updatePost)\n/* harmony export */ });\nfunction getPosts() {\n  return JSON.parse(localStorage.getItem('posts')) || [];\n}\nfunction addPost(post) {\n  const posts = JSON.parse(localStorage.getItem('posts')) || [];\n  posts.push(post);\n  localStorage.setItem('posts', JSON.stringify(posts));\n}\nfunction updatePost(post) {\n  const posts = JSON.parse(localStorage.getItem('posts')) || [];\n  const postIndex = posts.findIndex(p => p.id === post.id);\n  if (postIndex !== -1) {\n    posts.splice(postIndex, 1, post);\n  }\n  localStorage.setItem('posts', JSON.stringify(posts));\n}\nfunction getPost(id) {\n  const posts = JSON.parse(localStorage.getItem('posts')) || [];\n  const postIndex = posts.findIndex(p => p.id === id);\n  return posts[postIndex];\n}\n\n//# sourceURL=webpack:///./localStroge.js?");

/***/ }),

/***/ "./pages/Main.js":
/*!***********************!*\
  !*** ./pages/Main.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Main\": () => (/* binding */ Main)\n/* harmony export */ });\n/* harmony import */ var _elements_creatorPosts_CreatorPosts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/creatorPosts/CreatorPosts */ \"./elements/creatorPosts/CreatorPosts.js\");\n/* harmony import */ var _elements_post_Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/post/Post */ \"./elements/post/Post.js\");\n\n\nfunction Main(posts) {\n  let main = document.createElement('div');\n  main.className = 'main';\n  let creator = new _elements_creatorPosts_CreatorPosts__WEBPACK_IMPORTED_MODULE_0__.CreatorPosts('create post', main);\n  let separation = document.createElement('div');\n  separation.className = 'separation';\n  main.append(creator);\n  main.append(separation);\n  for (let i = 0; i < posts.length; ++i) {\n    let post = new _elements_post_Post__WEBPACK_IMPORTED_MODULE_1__.Post(posts[i]);\n    main.append(post);\n  }\n  return main;\n}\n\n//# sourceURL=webpack:///./pages/Main.js?");

/***/ }),

/***/ "./utils.js":
/*!******************!*\
  !*** ./utils.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dateСonversion\": () => (/* binding */ dateСonversion),\n/* harmony export */   \"generateId\": () => (/* binding */ generateId)\n/* harmony export */ });\nfunction generateId() {\n  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {\n    var r = Math.random() * 16 | 0,\n      v = c == 'x' ? r : r & 0x3 | 0x8;\n    return v.toString(16);\n  });\n}\nfunction dateСonversion(timestamp) {\n  const now = new Date();\n  const date = new Date(timestamp);\n  const diff = now.getTime() - date.getTime();\n  const daysAgo = Math.floor(diff / (1000 * 60 * 60 * 24));\n  const year = date.getFullYear();\n  const month = date.getMonth() + 1;\n  const day = date.getDate();\n  const hours = date.getHours();\n  const minutes = date.getMinutes();\n  let formattedDate = '';\n  if (daysAgo === 0) {\n    formattedDate = `Сегодня, ${hours}:${minutes}`;\n  } else if (daysAgo === 1) {\n    formattedDate = `Вчера, ${hours}:${minutes}`;\n  } else {\n    formattedDate = `${year}-${month}-${day}, ${hours}:${minutes}`;\n  }\n  return formattedDate;\n}\n\n//# sourceURL=webpack:///./utils.js?");

/***/ }),

/***/ "./resources/heart.png":
/*!*****************************!*\
  !*** ./resources/heart.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/heart.png\");\n\n//# sourceURL=webpack:///./resources/heart.png?");

/***/ }),

/***/ "./resources/hoverTrash.png":
/*!**********************************!*\
  !*** ./resources/hoverTrash.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/hoverTrash.png\");\n\n//# sourceURL=webpack:///./resources/hoverTrash.png?");

/***/ }),

/***/ "./resources/selectedHeart.png":
/*!*************************************!*\
  !*** ./resources/selectedHeart.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/selectedHeart.png\");\n\n//# sourceURL=webpack:///./resources/selectedHeart.png?");

/***/ }),

/***/ "./resources/trash.png":
/*!*****************************!*\
  !*** ./resources/trash.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/trash.png\");\n\n//# sourceURL=webpack:///./resources/trash.png?");

/***/ }),

/***/ "./scss/index.scss":
/*!*************************!*\
  !*** ./scss/index.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/index.scss?");

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
"use strict";(self.webpackChunkhome_book_shared=self.webpackChunkhome_book_shared||[]).push([[326],{"./src/components/ComponentsUI/components/Button/stories/ButtonHandlingClicks.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ButtonHandlingClicks:()=>ButtonHandlingClicks,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/ComponentsUI/components/Button/Button.tsx"),_stories_components_StoryComponent_StoryComponent__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/components/StoryComponent/StoryComponent.tsx"),_stories_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/constants.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var description=["All components accept an <code>onClick</code> handler that is applied to the root DOM element."],blockCodeData={componentName:"Button",imports:[{items:"{ Button }",path:_stories_constants__WEBPACK_IMPORTED_MODULE_3__.A}],props:[{attributes:[{name:"onClick",value:"{() => alert('clicked')}"}],children:"Click me"}]};const __WEBPACK_DEFAULT_EXPORT__={component:_Button__WEBPACK_IMPORTED_MODULE_0__.Z,parameters:{design:{type:"figma",url:"https://www.figma.com/file/ktOFYcPoVgYOeB3knUlHvE/Desings?type=design&node-id=544-161&mode=design&t=g1VHDi2srZ6cK35T-0"}},title:"Components/General/Button/Examples/Button Handling Clicks"};var Template=function Template(_ref){var args=_extends({},(function _objectDestructuringEmpty(obj){if(null==obj)throw new TypeError("Cannot destructure "+obj)}(_ref),_ref));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_stories_components_StoryComponent_StoryComponent__WEBPACK_IMPORTED_MODULE_1__.Z,{blockCodeData,description,title:"Button Handling Clicks",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_0__.Z,_objectSpread(_objectSpread({},args),{},{onClick:function onClick(){return alert("clicked")},children:"Click"}))})};Template.displayName="Template";var ButtonHandlingClicks=Template.bind({});ButtonHandlingClicks.argTypes={children:{table:{disable:!0}},onClick:{table:{disable:!0}}},ButtonHandlingClicks.args={},ButtonHandlingClicks.parameters={...ButtonHandlingClicks.parameters,docs:{...ButtonHandlingClicks.parameters?.docs,source:{originalSource:"({\n  ...args\n}) => <StoryComponent blockCodeData={blockCodeData} description={description} title=\"Button Handling Clicks\">\n    <Button {...args} onClick={() => alert('clicked')}>\n      Click\n    </Button>\n  </StoryComponent>",...ButtonHandlingClicks.parameters?.docs?.source}}};const __namedExportsOrder=["ButtonHandlingClicks"]}}]);
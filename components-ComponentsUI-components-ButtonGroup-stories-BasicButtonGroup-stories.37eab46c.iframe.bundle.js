"use strict";(self.webpackChunkhome_book_shared=self.webpackChunkhome_book_shared||[]).push([[149],{"./src/components/ComponentsUI/components/ButtonGroup/stories/BasicButtonGroup.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicButtonGroup:()=>BasicButtonGroup,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Button_Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/ComponentsUI/components/Button/Button.tsx"),_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ComponentsUI/components/ButtonGroup/ButtonGroup.tsx"),_stories_components_StoryComponent_StoryComponent__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/components/StoryComponent/StoryComponent.tsx"),_stories_constants__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/constants.ts"),_stories_components_StoryComponent_enums__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/components/StoryComponent/enums.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var description=["The ButtonGroup component can be used to group related buttons."],blockCodeData={componentName:"ButtonGroup",imports:[{items:"{ Button, ButtonGroup }",path:_stories_constants__WEBPACK_IMPORTED_MODULE_5__.A}],props:[{children:Array.from(Array(3),(function(){return{componentName:"Button"}}))},{attributes:[{name:"forcedHover"}],children:Array.from(Array(3),(function(){return{componentName:"Button"}}))},{attributes:[{name:"disabled"}],children:Array.from(Array(3),(function(){return{componentName:"Button"}}))}]};const __WEBPACK_DEFAULT_EXPORT__={component:_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__.ZP,parameters:{design:{type:"figma",url:"https://www.figma.com/file/ktOFYcPoVgYOeB3knUlHvE/Desings?type=design&node-id=609-902&mode=design&t=OOr0lDXF7kQbtwBl-0"}},title:"Components/General/Button Group/Basic Button Group"};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_stories_components_StoryComponent_StoryComponent__WEBPACK_IMPORTED_MODULE_2__.Z,{blockCodeData,contentGridFlow:_stories_components_StoryComponent_enums__WEBPACK_IMPORTED_MODULE_3__.yd.row,description,title:"Basic Button Group",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__.ZP,_objectSpread(_objectSpread({},args),{},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_0__.Z,{children:"One"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_0__.Z,{children:"Two"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_0__.Z,{children:"Three"})]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__.ZP,_objectSpread(_objectSpread({},args),{},{forcedHover:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_0__.Z,{children:"One"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_0__.Z,{children:"Two"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_0__.Z,{children:"Three"})]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ButtonGroup__WEBPACK_IMPORTED_MODULE_1__.ZP,_objectSpread(_objectSpread({},args),{},{disabled:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_0__.Z,{children:"One"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_0__.Z,{children:"Two"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_0__.Z,{children:"Three"})]}))]})};Template.displayName="Template";var BasicButtonGroup=Template.bind({});BasicButtonGroup.argTypes={children:{table:{disable:!0}},disabled:{table:{disable:!0}},forcedHover:{table:{disable:!0}}},BasicButtonGroup.args={},BasicButtonGroup.parameters={...BasicButtonGroup.parameters,docs:{...BasicButtonGroup.parameters?.docs,source:{originalSource:'args => <StoryComponent blockCodeData={blockCodeData} contentGridFlow={ContentGridFlow.row} description={description} title="Basic Button Group">\n    <ButtonGroup {...args}>\n      <Button>One</Button>\n      <Button>Two</Button>\n      <Button>Three</Button>\n    </ButtonGroup>\n\n    <ButtonGroup {...args} forcedHover>\n      <Button>One</Button>\n      <Button>Two</Button>\n      <Button>Three</Button>\n    </ButtonGroup>\n\n    <ButtonGroup {...args} disabled>\n      <Button>One</Button>\n      <Button>Two</Button>\n      <Button>Three</Button>\n    </ButtonGroup>\n  </StoryComponent>',...BasicButtonGroup.parameters?.docs?.source}}};const __namedExportsOrder=["BasicButtonGroup"]}}]);
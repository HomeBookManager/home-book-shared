"use strict";(self.webpackChunkhome_book_shared=self.webpackChunkhome_book_shared||[]).push([[924],{"./src/components/ComponentsUI/components/Button/stories/ButtonColors.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ButtonColors:()=>ButtonColors,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lodash__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/lodash.js"),_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ComponentsUI/components/Button/Button.tsx"),_stories_components_StoryComponent_StoryComponent__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/components/StoryComponent/StoryComponent.tsx"),_stories_constants__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/stories/constants.ts"),_enums__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ComponentsUI/components/Button/enums.ts"),_utils_transform_enumToArray__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/utils/transform/enumToArray.ts"),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var blockCodeData={componentName:"Button",imports:[{items:"{ Button, ButtonColor }",path:_stories_constants__WEBPACK_IMPORTED_MODULE_6__.A}],props:[{children:(0,lodash__WEBPACK_IMPORTED_MODULE_0__.capitalize)(_enums__WEBPACK_IMPORTED_MODULE_3__.rp.primary)},{attributes:[{name:"color",value:"ButtonColor.secondary"}],children:(0,lodash__WEBPACK_IMPORTED_MODULE_0__.capitalize)(_enums__WEBPACK_IMPORTED_MODULE_3__.rp.secondary)},{attributes:[{name:"color",value:"ButtonColor.success"}],children:(0,lodash__WEBPACK_IMPORTED_MODULE_0__.capitalize)(_enums__WEBPACK_IMPORTED_MODULE_3__.rp.success)},{attributes:[{name:"color",value:"ButtonColor.warning"}],children:(0,lodash__WEBPACK_IMPORTED_MODULE_0__.capitalize)(_enums__WEBPACK_IMPORTED_MODULE_3__.rp.warning)},{attributes:[{name:"color",value:"ButtonColor.error"}],children:(0,lodash__WEBPACK_IMPORTED_MODULE_0__.capitalize)(_enums__WEBPACK_IMPORTED_MODULE_3__.rp.error)}]};const __WEBPACK_DEFAULT_EXPORT__={component:_Button__WEBPACK_IMPORTED_MODULE_1__.Z,parameters:{design:{type:"figma",url:"https://www.figma.com/file/ktOFYcPoVgYOeB3knUlHvE/Desings?type=design&node-id=544-161&mode=design&t=g1VHDi2srZ6cK35T-0"}},title:"Components/General/Button/Examples/Button Colors"};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_stories_components_StoryComponent_StoryComponent__WEBPACK_IMPORTED_MODULE_2__.Z,{blockCodeData,title:"Button Colors",children:(0,_utils_transform_enumToArray__WEBPACK_IMPORTED_MODULE_7__.q)(_enums__WEBPACK_IMPORTED_MODULE_3__.rp).map((function(color){return(0,react__WEBPACK_IMPORTED_MODULE_4__.createElement)(_Button__WEBPACK_IMPORTED_MODULE_1__.Z,_objectSpread(_objectSpread({},args),{},{color,key:color}),(0,lodash__WEBPACK_IMPORTED_MODULE_0__.capitalize)(color))}))})};Template.displayName="Template";var ButtonColors=Template.bind({});ButtonColors.argTypes={children:{table:{disable:!0}},color:{table:{disable:!0}}},ButtonColors.args={variant:_enums__WEBPACK_IMPORTED_MODULE_3__.Wu.text},ButtonColors.parameters={...ButtonColors.parameters,docs:{...ButtonColors.parameters?.docs,source:{originalSource:'args => <StoryComponent blockCodeData={blockCodeData} title="Button Colors">\n    {(enumToArray(ButtonColor) as Array<ButtonColor>).map(color => <Button {...args} color={color} key={color}>\n        {capitalize(color)}\n      </Button>)}\n  </StoryComponent>',...ButtonColors.parameters?.docs?.source}}};const __namedExportsOrder=["ButtonColors"]}}]);
(self.webpackChunkhome_book_shared=self.webpackChunkhome_book_shared||[]).push([[737],{"./src/components/ComponentsUI/components/Button/stories/BasicButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicButton:()=>BasicButton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lodash__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/lodash.js"),_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ComponentsUI/components/Button/Button.tsx"),_stories_components_StoryComponent_StoryComponent__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/components/StoryComponent/StoryComponent.tsx"),_stories_constants__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/stories/constants.ts"),_enums__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ComponentsUI/components/Button/enums.ts"),_utils_transform_enumToArray__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/utils/transform/enumToArray.ts"),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var description=["The <code>Button</code> comes with three variants: text, contained, and outlined."],blockCodeData={componentName:"Button",imports:[{items:"{ Button, ButtonVariant }",path:_stories_constants__WEBPACK_IMPORTED_MODULE_6__.i}],props:[{attributes:[{name:"variant",value:"Variant.text"}],children:(0,lodash__WEBPACK_IMPORTED_MODULE_0__.capitalize)(_enums__WEBPACK_IMPORTED_MODULE_3__.Ak.text)},{children:(0,lodash__WEBPACK_IMPORTED_MODULE_0__.capitalize)(_enums__WEBPACK_IMPORTED_MODULE_3__.Ak.contained)},{attributes:[{name:"variant",value:"Variant.outlined"}],children:(0,lodash__WEBPACK_IMPORTED_MODULE_0__.capitalize)(_enums__WEBPACK_IMPORTED_MODULE_3__.Ak.outlined)}]};const __WEBPACK_DEFAULT_EXPORT__={component:_Button__WEBPACK_IMPORTED_MODULE_1__.A,parameters:{design:{type:"figma",url:"https://www.figma.com/file/ktOFYcPoVgYOeB3knUlHvE/Desings?type=design&node-id=544-161&mode=design&t=g1VHDi2srZ6cK35T-0"}},title:"Components/General/Button/Basic Button"};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_stories_components_StoryComponent_StoryComponent__WEBPACK_IMPORTED_MODULE_2__.A,{blockCodeData,description,title:"Basic Button",children:(0,_utils_transform_enumToArray__WEBPACK_IMPORTED_MODULE_7__.e)(_enums__WEBPACK_IMPORTED_MODULE_3__.Ak).map((function(variant){return(0,react__WEBPACK_IMPORTED_MODULE_4__.createElement)(_Button__WEBPACK_IMPORTED_MODULE_1__.A,_objectSpread(_objectSpread({},args),{},{key:variant,variant:_enums__WEBPACK_IMPORTED_MODULE_3__.Ak[variant]}),(0,lodash__WEBPACK_IMPORTED_MODULE_0__.capitalize)(variant))}))})};Template.displayName="Template";var BasicButton=Template.bind({});BasicButton.argTypes={children:{table:{disable:!0}},variant:{table:{disable:!0}}},BasicButton.args={color:_enums__WEBPACK_IMPORTED_MODULE_3__.mq.primary},BasicButton.parameters={...BasicButton.parameters,docs:{...BasicButton.parameters?.docs,source:{originalSource:'args => <StoryComponent blockCodeData={blockCodeData} description={description} title="Basic Button">\n    {enumToArray<ButtonVariant>(ButtonVariant).map(variant => <Button {...args} key={variant} variant={ButtonVariant[variant]}>\n        {capitalize(variant)}\n      </Button>)}\n  </StoryComponent>',...BasicButton.parameters?.docs?.source}}};const __namedExportsOrder=["BasicButton"]},"./node_modules/uniqid/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var process=__webpack_require__("./node_modules/process/browser.js"),pid=void 0!==process&&process.pid?process.pid.toString(36):"";function now(){var time=Date.now(),last=now.last||time;return now.last=time>last?time:last+1}module.exports=module.exports.default=function(prefix,suffix){return(prefix||"")+""+pid+now().toString(36)+(suffix||"")},module.exports.process=function(prefix,suffix){return(prefix||"")+pid+now().toString(36)+(suffix||"")},module.exports.time=function(prefix,suffix){return(prefix||"")+now().toString(36)+(suffix||"")}}}]);
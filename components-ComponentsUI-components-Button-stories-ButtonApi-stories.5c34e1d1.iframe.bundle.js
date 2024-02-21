(self.webpackChunkhome_book_shared=self.webpackChunkhome_book_shared||[]).push([[651],{"./src/components/ComponentsUI/components/Button/stories/ButtonApi.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ButtonAPI:()=>ButtonAPI,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/ComponentsUI/components/Button/Button.tsx"),_stories_components_StoryApi_StoryApi__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/components/StoryApi/StoryApi.tsx"),_stories_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/constants.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),description=["API documentation for the React Button component. Learn about the available props. Button is based on basic <code>props</code> from <code>ButtonHTMLAttributes<HTMLElement></code>","If the Button receives properties from the ButtonGroup, they are included."],tableBodyData=[{description:"The content of the component.",name:"children",type:"node"},{description:"Override or extend the styles applied to the component.",name:"className",type:"string"},{defaultValue:"'primary'",description:"The color of the component. It doesn't supports those theme colors that make sense for this component.",name:"color",type:"'primary'<br/>|&nbsp;'primary'<br/>|&nbsp;'secondary'<br/>|&nbsp;'success'<br/>|&nbsp;'warning'<br/>|&nbsp;'error'<br/>|&nbsp;'string'"},{defaultValue:"false",description:"If <code>true</code>, the component is disabled.",name:"disabled",type:"boolean"},{defaultValue:"false",description:"If <code>true</code>, the ripple effect is disabled.",name:"disabledRippleEffect",type:"boolean"},{description:"Provide test-id",name:"e2eAttribute",type:"E2EAttribute"},{description:"Provide value for test-id",name:"e2eValue",type:"number | string"},{description:"Element placed after the children.",name:"endIcon",type:"node"},{defaultValue:"false",description:"If <code>true</code>, the hover will be active without user friction.",name:"forcedHover",type:"boolean"},{defaultValue:"false",description:"If <code>true</code>, the button will take up the full width of its container.",name:"fullWidth",type:"boolean"},{description:"<code>Function</code> to call action after the click button.",name:"onClick",type:"() => void"},{description:"The <code>ref</code> is forwarded to the root element.",name:"ref",type:"Ref<HTMLButtonElement>"},{defaultValue:"'medium'",description:"The size of the component. <code>small</code> is equivalent to the dense button styling.",name:"size",type:"'small'<br/>|&nbsp;'small'<br/>|&nbsp;'medium'<br/>|&nbsp;'large'<br/>|&nbsp;'string'"},{description:"Element placed before the children.",name:"startIcon",type:"node"},{description:"Override styles by object of styles.",name:"style",type:"object"},{description:"Type of button.",name:"type",type:"'button'<br/>|&nbsp;'button'<br/>|&nbsp;'reset'<br/>|&nbsp;'submit'<br/>|&nbsp;'string'"},{defaultValue:"text",description:"The variant to use.",name:"variant",type:"text'<br/>|&nbsp;'text'<br/>|&nbsp;'contained'<br/>|&nbsp;'outlined'<br/>|&nbsp;'string'"}],blockCodeData={imports:[{items:"{ Button }",path:_stories_constants__WEBPACK_IMPORTED_MODULE_3__.i}]};const __WEBPACK_DEFAULT_EXPORT__={component:_Button__WEBPACK_IMPORTED_MODULE_0__.A,title:"Components/General/Button/Button API"};var Template=function Template(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_stories_components_StoryApi_StoryApi__WEBPACK_IMPORTED_MODULE_1__.A,{blockCodeData,description,tableBodyData,title:"Button API"})};Template.displayName="Template";var ButtonAPI=Template.bind({});ButtonAPI.parameters={...ButtonAPI.parameters,docs:{...ButtonAPI.parameters?.docs,source:{originalSource:'() => <StoryApi blockCodeData={blockCodeData} description={description} tableBodyData={tableBodyData} title="Button API" />',...ButtonAPI.parameters?.docs?.source}}};const __namedExportsOrder=["ButtonAPI"]},"./node_modules/uniqid/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var process=__webpack_require__("./node_modules/process/browser.js"),pid=void 0!==process&&process.pid?process.pid.toString(36):"";function now(){var time=Date.now(),last=now.last||time;return now.last=time>last?time:last+1}module.exports=module.exports.default=function(prefix,suffix){return(prefix||"")+""+pid+now().toString(36)+(suffix||"")},module.exports.process=function(prefix,suffix){return(prefix||"")+pid+now().toString(36)+(suffix||"")},module.exports.time=function(prefix,suffix){return(prefix||"")+now().toString(36)+(suffix||"")}}}]);
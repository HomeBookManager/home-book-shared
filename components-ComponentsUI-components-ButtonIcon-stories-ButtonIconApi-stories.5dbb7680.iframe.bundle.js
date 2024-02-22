(self.webpackChunkhome_book_shared=self.webpackChunkhome_book_shared||[]).push([[17],{"./src/components/ComponentsUI/components/ButtonIcon/stories/ButtonIconApi.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ButtonIconAPI:()=>ButtonIconAPI,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _ButtonIcon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/ComponentsUI/components/ButtonIcon/ButtonIcon.tsx"),_stories_components_StoryApi_StoryApi__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/components/StoryApi/StoryApi.tsx"),_stories_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/constants.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),description=["API documentation for the React Button Icon component. Learn about the available props."],tableBodyData=[{description:"Override or extend the styles applied to the component.",name:"className",type:"string"},{description:"Override or extend the styles applied to the circle pulse.",name:"classNameCirclePulse",type:"string"},{description:"Override or extend the styles applied to the Icon component.",name:"classNameIcon",type:"string"},{defaultValue:"false",description:"If <code>true</code>, the component is disabled.",name:"disabled",type:"boolean"},{defaultValue:"false",description:"If <code>true</code>, the pulse effect is disabled.",name:"disablePulseEffect",type:"boolean"},{description:"Provide test-id",name:"e2eAttribute",type:"E2EAttribute"},{description:"Provide value for test-id",name:"e2eValue",type:"number | string"},{defaultValue:"false",description:"If <code>true</code>, the hover will be active without user friction.",name:"forcedHover",type:"boolean"},{description:"Icon which represent the shape.",name:"iconComponent",type:"React.FC<TIconBasicProps>"},{description:"<code>Function</code> to call action after the click button.",name:"onClick",type:"ButtonHTMLAttributes<HTMLElement>['onClick']"},{defaultValue:"'medium'",description:"The size of the component. <code>small</code> is equivalent to the dense button styling.",name:"size",type:"'small'<br/>|&nbsp;'small'<br/>|&nbsp;'medium'<br/>|&nbsp;'large'<br/>|&nbsp;'string'"}],blockCodeData={imports:[{items:"{ ButtonIcon }",path:_stories_constants__WEBPACK_IMPORTED_MODULE_3__.i}]};const __WEBPACK_DEFAULT_EXPORT__={component:_ButtonIcon__WEBPACK_IMPORTED_MODULE_0__.A,title:"Components/General/Button Icon/Button Icon API"};var Template=function Template(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_stories_components_StoryApi_StoryApi__WEBPACK_IMPORTED_MODULE_1__.A,{blockCodeData,description,tableBodyData,title:"Button Icon API"})};Template.displayName="Template";var ButtonIconAPI=Template.bind({});ButtonIconAPI.parameters={...ButtonIconAPI.parameters,docs:{...ButtonIconAPI.parameters?.docs,source:{originalSource:'() => <StoryApi blockCodeData={blockCodeData} description={description} tableBodyData={tableBodyData} title="Button Icon API" />',...ButtonIconAPI.parameters?.docs?.source}}};const __namedExportsOrder=["ButtonIconAPI"]},"./node_modules/uniqid/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var process=__webpack_require__("./node_modules/process/browser.js"),pid=void 0!==process&&process.pid?process.pid.toString(36):"";function now(){var time=Date.now(),last=now.last||time;return now.last=time>last?time:last+1}module.exports=module.exports.default=function(prefix,suffix){return(prefix||"")+""+pid+now().toString(36)+(suffix||"")},module.exports.process=function(prefix,suffix){return(prefix||"")+pid+now().toString(36)+(suffix||"")},module.exports.time=function(prefix,suffix){return(prefix||"")+now().toString(36)+(suffix||"")}}}]);
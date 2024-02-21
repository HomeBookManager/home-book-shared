"use strict";(self.webpackChunkhome_book_shared=self.webpackChunkhome_book_shared||[]).push([[40],{"./src/stories/components/StoryApi/StoryApi.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>StoryApi_StoryApi});var StoryComponent=__webpack_require__("./src/stories/components/StoryComponent/StoryComponent.tsx"),useTheme=__webpack_require__("./src/hooks/useTheme/useTheme.tsx");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var className="StoryPropsTable",classNames=_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},className,className),"title","".concat(className,"__title")),"table","".concat(className,"__table")),"rowHeader","".concat(className,"__row-header")),"rowBody","".concat(className,"__row-body")),"columnName","".concat(className,"__column-name")),"columnType","".concat(className,"__column-type")),"columnDefaultValue","".concat(className,"__column-default-value")),"columnDescription","".concat(className,"__column-description")),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),story_props_table=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/stories/components/StoryPropsTable/story-props-table.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(story_props_table.A,options);story_props_table.A&&story_props_table.A.locals&&story_props_table.A.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),StoryPropsTable=function StoryPropsTable(_ref){var tableBodyData=_ref.tableBodyData,classNamesWithTheme=(0,useTheme.D)(classNames).classNamesWithTheme;return(0,jsx_runtime.jsxs)("section",{className:classNamesWithTheme[className],children:[(0,jsx_runtime.jsx)("h2",{className:classNamesWithTheme.title,children:"Props"}),(0,jsx_runtime.jsxs)("table",{className:classNamesWithTheme.table,children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{className:classNamesWithTheme.rowHeader,children:[(0,jsx_runtime.jsx)("th",{children:"Name"}),(0,jsx_runtime.jsx)("th",{children:"Type"}),(0,jsx_runtime.jsx)("th",{children:"Default"}),(0,jsx_runtime.jsx)("th",{children:"Description"})]})}),(0,jsx_runtime.jsx)("tbody",{children:tableBodyData.map((function(_ref2,key){var _ref2$defaultValue=_ref2.defaultValue,defaultValue=void 0===_ref2$defaultValue?"":_ref2$defaultValue,description=_ref2.description,name=_ref2.name,type=_ref2.type;return(0,jsx_runtime.jsxs)("tr",{className:classNamesWithTheme.rowBody,children:[(0,jsx_runtime.jsx)("td",{className:classNamesWithTheme.columnName,children:name}),(0,jsx_runtime.jsx)("td",{className:classNamesWithTheme.columnType,dangerouslySetInnerHTML:{__html:type}}),(0,jsx_runtime.jsx)("td",{className:classNamesWithTheme.columnDefaultValue,children:defaultValue}),(0,jsx_runtime.jsx)("td",{className:classNamesWithTheme.columnDescription,dangerouslySetInnerHTML:{__html:description}})]},key)}))})]})]})};StoryPropsTable.displayName="StoryPropsTable";const StoryPropsTable_StoryPropsTable=StoryPropsTable;try{StoryPropsTable.displayName="StoryPropsTable",StoryPropsTable.__docgenInfo={description:"",displayName:"StoryPropsTable",props:{tableBodyData:{defaultValue:null,description:"",name:"tableBodyData",required:!0,type:{name:"TTableBody[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/components/StoryPropsTable/StoryPropsTable.tsx#StoryPropsTable"]={docgenInfo:StoryPropsTable.__docgenInfo,name:"StoryPropsTable",path:"src/stories/components/StoryPropsTable/StoryPropsTable.tsx#StoryPropsTable"})}catch(__react_docgen_typescript_loader_error){}function classNames_typeof(o){return classNames_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},classNames_typeof(o)}function classNames_defineProperty(obj,key,value){return(key=function classNames_toPropertyKey(t){var i=function classNames_toPrimitive(t,r){if("object"!=classNames_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=classNames_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==classNames_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var classNames_classNames=classNames_defineProperty(classNames_defineProperty(classNames_defineProperty(classNames_defineProperty({},"StoryApi","StoryApi"),"title","".concat("StoryApi","__title")),"description","".concat("StoryApi","__description")),"storyComponent","".concat("StoryApi","__story-component")),story_api=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/stories/components/StoryApi/story-api.scss"),story_api_options={};story_api_options.styleTagTransform=styleTagTransform_default(),story_api_options.setAttributes=setAttributesWithoutAttributes_default(),story_api_options.insert=insertBySelector_default().bind(null,"head"),story_api_options.domAPI=styleDomAPI_default(),story_api_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(story_api.A,story_api_options);story_api.A&&story_api.A.locals&&story_api.A.locals;function StoryApi_typeof(o){return StoryApi_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},StoryApi_typeof(o)}var _excluded=["children","description","title"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){StoryApi_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function StoryApi_defineProperty(obj,key,value){return(key=function StoryApi_toPropertyKey(t){var i=function StoryApi_toPrimitive(t,r){if("object"!=StoryApi_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=StoryApi_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==StoryApi_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var StoryApi=function StoryApi(_ref){var _ref$children=_ref.children,children=void 0===_ref$children?null:_ref$children,_ref$description=_ref.description,description=void 0===_ref$description?[]:_ref$description,title=_ref.title,restProps=_objectWithoutProperties(_ref,_excluded),tableBodyData=restProps.tableBodyData,classNamesWithTheme=(0,useTheme.D)(classNames_classNames).classNamesWithTheme;return(0,jsx_runtime.jsxs)("main",{className:classNamesWithTheme.StoryApi,children:[(0,jsx_runtime.jsx)("h1",{className:classNamesWithTheme.title,children:title}),description.map((function(description,key){return(0,jsx_runtime.jsx)("p",{className:classNamesWithTheme.description,dangerouslySetInnerHTML:{__html:description}},key)})),(0,jsx_runtime.jsx)(StoryComponent.A,_objectSpread({className:classNamesWithTheme.storyComponent,title:"Import"},restProps)),children,(0,jsx_runtime.jsx)(StoryPropsTable_StoryPropsTable,{tableBodyData})]})};StoryApi.displayName="StoryApi";const StoryApi_StoryApi=StoryApi;try{StoryApi.displayName="StoryApi",StoryApi.__docgenInfo={description:"",displayName:"StoryApi",props:{blockCodeData:{defaultValue:null,description:"",name:"blockCodeData",required:!0,type:{name:"TStoryBlockCode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},tableBodyData:{defaultValue:null,description:"",name:"tableBodyData",required:!0,type:{name:"TTableBody[]"}},description:{defaultValue:{value:"[]"},description:"",name:"description",required:!1,type:{name:"string[]"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/components/StoryApi/StoryApi.tsx#StoryApi"]={docgenInfo:StoryApi.__docgenInfo,name:"StoryApi",path:"src/stories/components/StoryApi/StoryApi.tsx#StoryApi"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/stories/components/StoryApi/story-api.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.StoryApi{font-family:PlusJakartaSans-Bold,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";margin:0 auto;max-width:1000px;padding:64px 20px;width:100%}.StoryApi__title{color:#1e2839;font-size:40px;margin:40px 0 10px}.StoryApi__title--dark{color:#eaeef3}.StoryApi__description{color:#4b4b4d;font-family:"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-size:20px;font-weight:400}.StoryApi__description--dark{color:#aab4be}.StoryApi__story-component{padding:0}.StoryApi__story-component .StoryComponent__title{margin-bottom:-20px}.StoryApi__story-component__story-block-code{margin-top:15px}',"",{version:3,sources:["webpack://./src/stories/components/StoryApi/story-api.scss"],names:[],mappings:"AAAgpI,UAC9oI,4KACE,CAWF,aAAA,CACA,gBAAA,CACA,iBAAA,CACA,UAAA,CAEA,iBACE,aAAA,CACA,cAAA,CACA,kBAAA,CAEA,uBACE,aAAA,CAIJ,uBACE,aAAA,CACA,uKACE,CAWF,cAAA,CACA,eAAA,CAEA,6BACE,aAAA,CAIJ,2BACE,SAAA,CAEA,kDACE,mBAAA,CAGF,6CACE,eAAA",sourcesContent:["$--hb-common-neutral-blue-1: #035afc; $--hb-common-neutral-blue-2: #8ab4f8; $--hb-common-neutral-green-1: #28a745; $--hb-common-neutral-green-2: #a7b45d; $--hb-common-neutral-1: #ffffff; $--hb-common-neutral-2: #929292; $--hb-common-neutral-orange-1: #df9862; $--hb-common-neutral-orange-2: #fdb32a; $--hb-common-neutral-red-1: #d93025; $--hb-common-neutral-sky-blue-1: #77b3cd; $--hb-common-neutral-violet-1: #4660f9; $--hb-neutral-1: #1e2839; $--hb-neutral-2: #757575; $--hb-neutral-3: #e8e9eb; $--hb-neutral-4: #f1f2f6; $--hb-neutral-5: #ffffff; $--hb-neutral-1--dark: #ffffff; $--hb-neutral-2--dark: #b9bbbe; $--hb-neutral-3--dark: #343c43; $--hb-neutral-4--dark: #1e262f; $--hb-neutral-5--dark: #151d25; $--hb-error: #d93025; $--hb-error-focus: #b20c01; $--hb-label: #1a2027; $--hb-label--dark: #ffffff; $--hb-label-disabled: #1b212880; $--hb-label-disabled--dark: #ffffff80; $--hb-btn-text-primary-text: #1b73e8; $--hb-btn-contained-primary-background: #1b73e8; $--hb-btn-contained-primary-text: #ffffff; $--hb-btn-outlined-primary-border: #1b73e8; $--hb-btn-outlined-primary-text: #1b73e8; $--hb-btn-text-primary-background-hover: #8cbdff; $--hb-btn-text-primary-text-hover: #315fc6; $--hb-btn-contained-primary-background-hover: #315fc6; $--hb-btn-outlined-primary-border-hover: #6fadff; $--hb-btn-outlined-primary-text-hover: #6fadff; $--hb-btn-text-primary-text-disabled: #1d4d8b; $--hb-btn-contained-primary-background-disabled: #1d4d8b; $--hb-btn-outlined-primary-border-disabled: #1d4d8b; $--hb-btn-outlined-primary-text-disabled: #1d4d8b; $--hb-btn-text-secondary-text: #8a8a8a; $--hb-btn-contained-secondary-background: #6c757d; $--hb-btn-contained-secondary-text: #ffffff; $--hb-btn-outlined-secondary-border: #6c757d; $--hb-btn-outlined-secondary-text: #6c757d; $--hb-btn-text-secondary-background-hover: #bfbfbf; $--hb-btn-text-secondary-text-hover: #6c757d; $--hb-btn-contained-secondary-background-hover: #4f5962; $--hb-btn-outlined-secondary-border-hover: #999a9b; $--hb-btn-outlined-secondary-text-hover: #999a9b; $--hb-btn-text-secondary-text-disabled: #54585d; $--hb-btn-contained-secondary-background-disabled: #32383d; $--hb-btn-outlined-secondary-border-disabled: #454e56; $--hb-btn-outlined-secondary-text-disabled: #454e56; $--hb-btn-text-success-text: #28a745; $--hb-btn-contained-success-background: #28a745; $--hb-btn-contained-success-text: #ffffff; $--hb-btn-outlined-success-border: #28a745; $--hb-btn-outlined-success-text: #28a745; $--hb-btn-text-success-background-hover: #a2e7af; $--hb-btn-text-success-text-hover: #2e9445; $--hb-btn-contained-success-background-hover: #5ec074; $--hb-btn-outlined-success-border-hover: #06de37; $--hb-btn-outlined-success-text-hover: #06de37; $--hb-btn-text-success-text-disabled: #23673a; $--hb-btn-contained-success-background-disabled: #23673a; $--hb-btn-outlined-success-border-disabled: #23673a; $--hb-btn-outlined-success-text-disabled: #23673a; $--hb-btn-text-warning-text: #ffc107; $--hb-btn-contained-warning-background: #ffc107; $--hb-btn-contained-warning-text: #000000; $--hb-btn-outlined-warning-border: #ffc107; $--hb-btn-outlined-warning-text: #ffc107; $--hb-btn-text-warning-background-hover: #f2cd5c; $--hb-btn-text-warning-text-hover: #6d5405; $--hb-btn-contained-warning-background-hover: #ffd453; $--hb-btn-outlined-warning-border-hover: #d9a60d; $--hb-btn-outlined-warning-text-hover: #d9a60d; $--hb-btn-text-warning-text-disabled: #8e741b; $--hb-btn-contained-warning-background-disabled: #8e741b; $--hb-btn-outlined-warning-border-disabled: #8e741b; $--hb-btn-outlined-warning-text-disabled: #8e741b; $--hb-btn-text-error-text: #dc3545; $--hb-btn-contained-error-background: #dc3545; $--hb-btn-contained-error-text: #ffffff; $--hb-btn-outlined-error-border: #dc3545; $--hb-btn-outlined-error-text: #dc3545; $--hb-btn-text-error-background-hover: #df7680; $--hb-btn-text-error-text-hover: #7d0e18; $--hb-btn-contained-error-background-hover: #ff6e7c; $--hb-btn-outlined-error-border-hover: #e8707b; $--hb-btn-outlined-error-text-hover: #e8707b; $--hb-btn-text-error-text-disabled: #7d2e3a; $--hb-btn-contained-error-background-disabled: #7d2e3a; $--hb-btn-outlined-error-border-disabled: #7d2e3a; $--hb-btn-outlined-error-text-disabled: #7d2e3a;.StoryApi {\n  font-family:\n    PlusJakartaSans-Bold,\n    -apple-system,\n    BlinkMacSystemFont,\n    'Segoe UI',\n    Roboto,\n    'Helvetica Neue',\n    Arial,\n    sans-serif,\n    'Apple Color Emoji',\n    'Segoe UI Emoji',\n    'Segoe UI Symbol';\n  margin: 0 auto;\n  max-width: 1000px;\n  padding: 64px 20px;\n  width: 100%;\n\n  &__title {\n    color: #1e2839;\n    font-size: 40px;\n    margin: 40px 0 10px;\n\n    &--dark {\n      color: #eaeef3;\n    }\n  }\n\n  &__description {\n    color: #4b4b4d;\n    font-family:\n      'IBM Plex Sans',\n      -apple-system,\n      BlinkMacSystemFont,\n      'Segoe UI',\n      Roboto,\n      'Helvetica Neue',\n      Arial,\n      sans-serif,\n      'Apple Color Emoji',\n      'Segoe UI Emoji',\n      'Segoe UI Symbol';\n    font-size: 20px;\n    font-weight: 400;\n\n    &--dark {\n      color: #aab4be;\n    }\n  }\n\n  &__story-component {\n    padding: 0;\n\n    & .StoryComponent__title {\n      margin-bottom: -20px;\n    }\n\n    &__story-block-code {\n      margin-top: 15px;\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/stories/components/StoryPropsTable/story-props-table.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.StoryPropsTable{font-family:"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"}.StoryPropsTable__title{color:#1e2839;font-size:30px;margin:40px 0 10px}.StoryPropsTable__title--dark{color:#eaeef3}.StoryPropsTable__table{border-collapse:collapse;margin:20px 0;width:100%}.StoryPropsTable__row-header{border-bottom:1px solid rgba(0,0,0,.1215686275);color:#000;font-size:16px}.StoryPropsTable__row-header>th{padding:20px;text-align:left}.StoryPropsTable__row-header--dark{border-bottom:1px solid rgba(255,255,255,.1215686275);color:#fff}.StoryPropsTable__row-body{border-bottom:1px solid rgba(0,0,0,.1215686275);color:#4b4b4d;font-size:13px;line-height:1.5}.StoryPropsTable__row-body code{background-color:rgba(102,178,255,.1490196078);border-radius:5px;color:#1a2027;font-family:Consolas,Menlo,Monaco,"Andale Mono","Ubuntu Mono",monospace;font-size:13px;font-weight:400;padding:0 5px}.StoryPropsTable__row-body>td{padding:20px;text-align:left}.StoryPropsTable__row-body--dark{border-bottom:1px solid rgba(255,255,255,.1215686275);color:#fff}.StoryPropsTable__row-body--dark code{color:#fff}.StoryPropsTable__column-name{font-family:Consolas,Menlo,Monaco,"Andale Mono","Ubuntu Mono",monospace;-webkit-font-smoothing:subpixel-antialiased}.StoryPropsTable__column-type{color:#932981;font-family:Consolas,Menlo,Monaco,"Andale Mono","Ubuntu Mono",monospace}.StoryPropsTable__column-type--dark{color:#a6e22e}.StoryPropsTable__column-default-value{font-family:Consolas,Menlo,Monaco,"Andale Mono","Ubuntu Mono",monospace}.StoryPropsTable__column-description{font-size:14px;max-width:150px}',"",{version:3,sources:["webpack://./src/stories/components/StoryPropsTable/story-props-table.scss"],names:[],mappings:"AAAgpI,iBAC9oI,uKACE,CAYF,wBACE,aAAA,CACA,cAAA,CACA,kBAAA,CAEA,8BACE,aAAA,CAIJ,wBACE,wBAAA,CACA,aAAA,CACA,UAAA,CAGF,6BACE,+CAAA,CACA,UAAA,CACA,cAAA,CAEA,gCACE,YAAA,CACA,eAAA,CAGF,mCACE,qDAAA,CACA,UAAA,CAIJ,2BACE,+CAAA,CACA,aAAA,CACA,cAAA,CACA,eAAA,CAEA,gCACE,8CAAA,CACA,iBAAA,CACA,aAAA,CACA,uEAAA,CAEA,cAAA,CACA,eAAA,CACA,aAAA,CAGF,8BACE,YAAA,CACA,eAAA,CAGF,iCACE,qDAAA,CACA,UAAA,CAEA,sCACE,UAAA,CAMJ,8BACE,uEAAA,CAEA,2CAAA,CAGF,8BACE,aAAA,CACA,uEAAA,CAGA,oCACE,aAAA,CAIJ,uCACE,uEAAA,CAIF,qCACE,cAAA,CACA,eAAA",sourcesContent:["$--hb-common-neutral-blue-1: #035afc; $--hb-common-neutral-blue-2: #8ab4f8; $--hb-common-neutral-green-1: #28a745; $--hb-common-neutral-green-2: #a7b45d; $--hb-common-neutral-1: #ffffff; $--hb-common-neutral-2: #929292; $--hb-common-neutral-orange-1: #df9862; $--hb-common-neutral-orange-2: #fdb32a; $--hb-common-neutral-red-1: #d93025; $--hb-common-neutral-sky-blue-1: #77b3cd; $--hb-common-neutral-violet-1: #4660f9; $--hb-neutral-1: #1e2839; $--hb-neutral-2: #757575; $--hb-neutral-3: #e8e9eb; $--hb-neutral-4: #f1f2f6; $--hb-neutral-5: #ffffff; $--hb-neutral-1--dark: #ffffff; $--hb-neutral-2--dark: #b9bbbe; $--hb-neutral-3--dark: #343c43; $--hb-neutral-4--dark: #1e262f; $--hb-neutral-5--dark: #151d25; $--hb-error: #d93025; $--hb-error-focus: #b20c01; $--hb-label: #1a2027; $--hb-label--dark: #ffffff; $--hb-label-disabled: #1b212880; $--hb-label-disabled--dark: #ffffff80; $--hb-btn-text-primary-text: #1b73e8; $--hb-btn-contained-primary-background: #1b73e8; $--hb-btn-contained-primary-text: #ffffff; $--hb-btn-outlined-primary-border: #1b73e8; $--hb-btn-outlined-primary-text: #1b73e8; $--hb-btn-text-primary-background-hover: #8cbdff; $--hb-btn-text-primary-text-hover: #315fc6; $--hb-btn-contained-primary-background-hover: #315fc6; $--hb-btn-outlined-primary-border-hover: #6fadff; $--hb-btn-outlined-primary-text-hover: #6fadff; $--hb-btn-text-primary-text-disabled: #1d4d8b; $--hb-btn-contained-primary-background-disabled: #1d4d8b; $--hb-btn-outlined-primary-border-disabled: #1d4d8b; $--hb-btn-outlined-primary-text-disabled: #1d4d8b; $--hb-btn-text-secondary-text: #8a8a8a; $--hb-btn-contained-secondary-background: #6c757d; $--hb-btn-contained-secondary-text: #ffffff; $--hb-btn-outlined-secondary-border: #6c757d; $--hb-btn-outlined-secondary-text: #6c757d; $--hb-btn-text-secondary-background-hover: #bfbfbf; $--hb-btn-text-secondary-text-hover: #6c757d; $--hb-btn-contained-secondary-background-hover: #4f5962; $--hb-btn-outlined-secondary-border-hover: #999a9b; $--hb-btn-outlined-secondary-text-hover: #999a9b; $--hb-btn-text-secondary-text-disabled: #54585d; $--hb-btn-contained-secondary-background-disabled: #32383d; $--hb-btn-outlined-secondary-border-disabled: #454e56; $--hb-btn-outlined-secondary-text-disabled: #454e56; $--hb-btn-text-success-text: #28a745; $--hb-btn-contained-success-background: #28a745; $--hb-btn-contained-success-text: #ffffff; $--hb-btn-outlined-success-border: #28a745; $--hb-btn-outlined-success-text: #28a745; $--hb-btn-text-success-background-hover: #a2e7af; $--hb-btn-text-success-text-hover: #2e9445; $--hb-btn-contained-success-background-hover: #5ec074; $--hb-btn-outlined-success-border-hover: #06de37; $--hb-btn-outlined-success-text-hover: #06de37; $--hb-btn-text-success-text-disabled: #23673a; $--hb-btn-contained-success-background-disabled: #23673a; $--hb-btn-outlined-success-border-disabled: #23673a; $--hb-btn-outlined-success-text-disabled: #23673a; $--hb-btn-text-warning-text: #ffc107; $--hb-btn-contained-warning-background: #ffc107; $--hb-btn-contained-warning-text: #000000; $--hb-btn-outlined-warning-border: #ffc107; $--hb-btn-outlined-warning-text: #ffc107; $--hb-btn-text-warning-background-hover: #f2cd5c; $--hb-btn-text-warning-text-hover: #6d5405; $--hb-btn-contained-warning-background-hover: #ffd453; $--hb-btn-outlined-warning-border-hover: #d9a60d; $--hb-btn-outlined-warning-text-hover: #d9a60d; $--hb-btn-text-warning-text-disabled: #8e741b; $--hb-btn-contained-warning-background-disabled: #8e741b; $--hb-btn-outlined-warning-border-disabled: #8e741b; $--hb-btn-outlined-warning-text-disabled: #8e741b; $--hb-btn-text-error-text: #dc3545; $--hb-btn-contained-error-background: #dc3545; $--hb-btn-contained-error-text: #ffffff; $--hb-btn-outlined-error-border: #dc3545; $--hb-btn-outlined-error-text: #dc3545; $--hb-btn-text-error-background-hover: #df7680; $--hb-btn-text-error-text-hover: #7d0e18; $--hb-btn-contained-error-background-hover: #ff6e7c; $--hb-btn-outlined-error-border-hover: #e8707b; $--hb-btn-outlined-error-text-hover: #e8707b; $--hb-btn-text-error-text-disabled: #7d2e3a; $--hb-btn-contained-error-background-disabled: #7d2e3a; $--hb-btn-outlined-error-border-disabled: #7d2e3a; $--hb-btn-outlined-error-text-disabled: #7d2e3a;.StoryPropsTable {\n  font-family:\n    'IBM Plex Sans',\n    -apple-system,\n    BlinkMacSystemFont,\n    'Segoe UI',\n    Roboto,\n    'Helvetica Neue',\n    Arial,\n    sans-serif,\n    'Apple Color Emoji',\n    'Segoe UI Emoji',\n    'Segoe UI Symbol';\n\n  &__title {\n    color: #1e2839;\n    font-size: 30px;\n    margin: 40px 0 10px;\n\n    &--dark {\n      color: #eaeef3;\n    }\n  }\n\n  &__table {\n    border-collapse: collapse;\n    margin: 20px 0;\n    width: 100%;\n  }\n\n  &__row-header {\n    border-bottom: 1px solid #0000001f;\n    color: #000000;\n    font-size: 16px;\n\n    & > th {\n      padding: 20px;\n      text-align: left;\n    }\n\n    &--dark {\n      border-bottom: 1px solid #ffffff1f;\n      color: #ffffff;\n    }\n  }\n\n  &__row-body {\n    border-bottom: 1px solid #0000001f;\n    color: #4b4b4d;\n    font-size: 13px;\n    line-height: 1.5;\n\n    & code {\n      background-color: #66b2ff26;\n      border-radius: 5px;\n      color: #1a2027;\n      font-family: Consolas, Menlo, Monaco, 'Andale Mono', 'Ubuntu Mono',\n        monospace;\n      font-size: 13px;\n      font-weight: 400;\n      padding: 0 5px;\n    }\n\n    & > td {\n      padding: 20px;\n      text-align: left;\n    }\n\n    &--dark {\n      border-bottom: 1px solid #ffffff1f;\n      color: #ffffff;\n\n      & code {\n        color: #ffffff;\n      }\n    }\n  }\n\n  &__column {\n    &-name {\n      font-family: Consolas, Menlo, Monaco, 'Andale Mono', 'Ubuntu Mono',\n        monospace;\n      -webkit-font-smoothing: subpixel-antialiased;\n    }\n\n    &-type {\n      color: #932981;\n      font-family: Consolas, Menlo, Monaco, 'Andale Mono', 'Ubuntu Mono',\n        monospace;\n\n      &--dark {\n        color: #a6e22e;\n      }\n    }\n\n    &-default-value {\n      font-family: Consolas, Menlo, Monaco, 'Andale Mono', 'Ubuntu Mono',\n        monospace;\n    }\n\n    &-description {\n      font-size: 14px;\n      max-width: 150px;\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);
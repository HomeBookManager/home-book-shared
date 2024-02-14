"use strict";(self.webpackChunkhome_book_shared=self.webpackChunkhome_book_shared||[]).push([[485],{"./src/components/ComponentsUI/components/Typography/stories/BasicTypography.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicTypography:()=>BasicTypography,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _BasicTypography$para,_BasicTypography$para2,_stories_components_StoryComponent_StoryComponent__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/components/StoryComponent/StoryComponent.tsx"),_Typography__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ComponentsUI/components/Typography/Typography.tsx"),_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ComponentsUI/components/Typography/constants.ts"),_stories_components_StoryComponent_enums__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/components/StoryComponent/enums.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var description=["Use typography to present your design and content as clearly and efficiently as possible."],blockCodeData={componentName:"Typography",imports:[{items:"Typography",path:"./shared/ComponentsUI/components/Typography/Typography"},{items:"{ TYPOGRAPHY_COLORS_MODE }",path:"./shared/ComponentsUI/components/Typography/constants"}],props:[{children:"text"}]};const __WEBPACK_DEFAULT_EXPORT__={component:_Typography__WEBPACK_IMPORTED_MODULE_1__.C,parameters:{design:{type:"figma",url:"https://www.figma.com/file/ktOFYcPoVgYOeB3knUlHvE/Desings?type=design&node-id=424-247&mode=design&t=nc8frNgeO6zoJtb6-0"}},title:"Components/Data Display/Typography/Basic Typography"};var Template=function Template(_ref){var args=_extends({},(function _objectDestructuringEmpty(obj){if(null==obj)throw new TypeError("Cannot destructure "+obj)}(_ref),_ref));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_stories_components_StoryComponent_StoryComponent__WEBPACK_IMPORTED_MODULE_0__.Z,{blockCodeData,contentGridFlow:_stories_components_StoryComponent_enums__WEBPACK_IMPORTED_MODULE_3__.yd.row,description,title:"Typography",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Typography__WEBPACK_IMPORTED_MODULE_1__.C,_objectSpread({},args))})};Template.displayName="Template";var BasicTypography=Template;BasicTypography.argTypes={},BasicTypography.args={children:"text",color:_constants__WEBPACK_IMPORTED_MODULE_2__.f.neutral1},BasicTypography.parameters=_objectSpread(_objectSpread({},BasicTypography.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_BasicTypography$para=BasicTypography.parameters)||void 0===_BasicTypography$para?void 0:_BasicTypography$para.docs),{},{source:_objectSpread({originalSource:"Template"},null===(_BasicTypography$para2=BasicTypography.parameters)||void 0===_BasicTypography$para2||null===(_BasicTypography$para2=_BasicTypography$para2.docs)||void 0===_BasicTypography$para2?void 0:_BasicTypography$para2.source)})});var __namedExportsOrder=["BasicTypography"]},"./src/components/ComponentsUI/components/Typography/Typography.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Typography_Typography});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),lodash=__webpack_require__("./node_modules/lodash/lodash.js"),react=__webpack_require__("./node_modules/react/index.js"),hooks=__webpack_require__("./src/hooks/index.ts"),enums=__webpack_require__("./src/components/ComponentsUI/components/Typography/enums.ts");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var classNames=_defineProperty({},"Typography",{name:"Typography",modificators:_objectSpread(_objectSpread(_objectSpread({noWrap:"".concat("Typography","--no-wrap"),withoutMargin:"".concat("Typography","--without-margin")},(0,lodash.mapValues)(enums.x8,(function(fontType){return"".concat("Typography","--").concat(fontType)}))),(0,lodash.mapValues)(enums.zj,(function(fontStyle){return"".concat("Typography","--").concat(fontStyle)}))),(0,lodash.mapValues)(enums.s6,(function(fontWeight){return"".concat("Typography","--").concat(fontWeight)})))}),constants=__webpack_require__("./src/components/ComponentsUI/components/Typography/constants.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),typography=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ComponentsUI/components/Typography/typography.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(typography.Z,options);typography.Z&&typography.Z.locals&&typography.Z.locals;var E2EDataAttributes_enums=__webpack_require__("./src/components/E2EDataAttributes/enums.ts"),utils=__webpack_require__("./src/components/E2EDataAttributes/utils.ts");function Typography_typeof(o){return Typography_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Typography_typeof(o)}var _excluded=["align","children","className","color","e2eAttribute","e2eValue","fontStyle","fontType","fontWeight","innerHtml","noWrap","style","withoutMargin"];function Typography_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function Typography_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Typography_ownKeys(Object(t),!0).forEach((function(r){Typography_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Typography_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function Typography_defineProperty(obj,key,value){return(key=function Typography_toPropertyKey(arg){var key=function Typography_toPrimitive(input,hint){if("object"!==Typography_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==Typography_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===Typography_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Typography=(0,react.forwardRef)((function(_ref,ref){var _ref$align=_ref.align,textAlign=void 0===_ref$align?"inherit":_ref$align,children=_ref.children,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,_ref$color=_ref.color,color=void 0===_ref$color?constants.f.neutral1:_ref$color,_ref$e2eAttribute=_ref.e2eAttribute,e2eAttribute=void 0===_ref$e2eAttribute?E2EDataAttributes_enums.X.text:_ref$e2eAttribute,_ref$e2eValue=_ref.e2eValue,e2eValue=void 0===_ref$e2eValue?"":_ref$e2eValue,_ref$fontStyle=_ref.fontStyle,fontStyle=void 0===_ref$fontStyle?enums.zj.normal:_ref$fontStyle,_ref$fontType=_ref.fontType,fontType=void 0===_ref$fontType?enums.x8.p:_ref$fontType,_ref$fontWeight=_ref.fontWeight,fontWeight=void 0===_ref$fontWeight?enums.s6.regular:_ref$fontWeight,_ref$innerHtml=_ref.innerHtml,innerHtml=void 0===_ref$innerHtml?"":_ref$innerHtml,_ref$noWrap=_ref.noWrap,noWrap=void 0!==_ref$noWrap&&_ref$noWrap,_ref$style=_ref.style,style=void 0===_ref$style?{}:_ref$style,_ref$withoutMargin=_ref.withoutMargin,withoutMargin=void 0===_ref$withoutMargin||_ref$withoutMargin,restProps=_objectWithoutProperties(_ref,_excluded),_useTheme=(0,hooks.F)(classNames),classNamesWithTheme=_useTheme.classNamesWithTheme,theme=_useTheme.theme;return children||innerHtml?(0,react.createElement)(fontType,Typography_objectSpread(Typography_objectSpread(Typography_objectSpread({},restProps),{},Typography_defineProperty({className:classnames_default()(className,classNamesWithTheme.Typography.name,classNamesWithTheme.Typography.modificators[(0,lodash.camelCase)(fontWeight)],classNamesWithTheme.Typography.modificators[fontStyle],classNamesWithTheme.Typography.modificators[fontType],Typography_defineProperty({},classNamesWithTheme.Typography.modificators.noWrap,noWrap),Typography_defineProperty({},classNamesWithTheme.Typography.modificators.withoutMargin,withoutMargin))},(0,utils.N)(e2eAttribute),e2eValue),innerHtml?{dangerouslySetInnerHTML:{__html:innerHtml}}:{}),{},{ref,style:Typography_objectSpread(Typography_objectSpread({},style),{},{color:(0,lodash.isObject)(color)?color[theme]:color,textAlign})}),children):null}));const Typography_Typography=Typography;try{Typography.displayName="Typography",Typography.__docgenInfo={description:"",displayName:"Typography",props:{color:{defaultValue:{value:"TYPOGRAPHY_COLORS_MODE.neutral1"},description:"",name:"color",required:!1,type:{name:"TTypographyColor"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"center"'},{value:'"end"'},{value:'"justify"'},{value:'"left"'},{value:'"match-parent"'},{value:'"right"'},{value:'"start"'}]}},e2eAttribute:{defaultValue:{value:"E2EAttribute.text"},description:"",name:"e2eAttribute",required:!1,type:{name:"string"}},e2eValue:{defaultValue:{value:""},description:"",name:"e2eValue",required:!1,type:{name:"string | number"}},fontStyle:{defaultValue:{value:"TypographyFontStyle.normal"},description:"",name:"fontStyle",required:!1,type:{name:"enum",value:[{value:'"italic"'},{value:'"normal"'}]}},fontType:{defaultValue:{value:"TypographyFontType.p"},description:"",name:"fontType",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"p"'},{value:'"small"'}]}},fontWeight:{defaultValue:{value:"TypographyFontWeight.regular"},description:"",name:"fontWeight",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"bold"'},{value:'"extra-bold"'},{value:'"light"'},{value:'"medium"'},{value:'"regular"'},{value:'"semi-bold"'}]}},innerHtml:{defaultValue:{value:""},description:"",name:"innerHtml",required:!1,type:{name:"string"}},noWrap:{defaultValue:{value:"false"},description:"",name:"noWrap",required:!1,type:{name:"boolean"}},withoutMargin:{defaultValue:{value:"true"},description:"",name:"withoutMargin",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ComponentsUI/components/Typography/Typography.tsx#Typography"]={docgenInfo:Typography.__docgenInfo,name:"Typography",path:"src/components/ComponentsUI/components/Typography/Typography.tsx#Typography"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ComponentsUI/components/Typography/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>TYPOGRAPHY_COLORS_MODE});var _link,_neutral,_neutral2,_neutral3,_neutral4,_neutral5,home_book_constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/home-book-constants/dist/index.js"),home_book_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/home-book-types/dist/index.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var TYPOGRAPHY_COLORS_MODE={link:(_link={},_defineProperty(_link,home_book_types__WEBPACK_IMPORTED_MODULE_1__.Q.dark,home_book_constants__WEBPACK_IMPORTED_MODULE_0__.o7.blue2),_defineProperty(_link,home_book_types__WEBPACK_IMPORTED_MODULE_1__.Q.light,home_book_constants__WEBPACK_IMPORTED_MODULE_0__.o7.blue1),_link),neutral1:(_neutral={},_defineProperty(_neutral,home_book_types__WEBPACK_IMPORTED_MODULE_1__.Q.dark,home_book_constants__WEBPACK_IMPORTED_MODULE_0__.Ro.neutral1),_defineProperty(_neutral,home_book_types__WEBPACK_IMPORTED_MODULE_1__.Q.light,home_book_constants__WEBPACK_IMPORTED_MODULE_0__.yD.neutral1),_neutral),neutral2:(_neutral2={},_defineProperty(_neutral2,home_book_types__WEBPACK_IMPORTED_MODULE_1__.Q.dark,home_book_constants__WEBPACK_IMPORTED_MODULE_0__.Ro.neutral2),_defineProperty(_neutral2,home_book_types__WEBPACK_IMPORTED_MODULE_1__.Q.light,home_book_constants__WEBPACK_IMPORTED_MODULE_0__.yD.neutral2),_neutral2),neutral3:(_neutral3={},_defineProperty(_neutral3,home_book_types__WEBPACK_IMPORTED_MODULE_1__.Q.dark,home_book_constants__WEBPACK_IMPORTED_MODULE_0__.Ro.neutral3),_defineProperty(_neutral3,home_book_types__WEBPACK_IMPORTED_MODULE_1__.Q.light,home_book_constants__WEBPACK_IMPORTED_MODULE_0__.yD.neutral3),_neutral3),neutral4:(_neutral4={},_defineProperty(_neutral4,home_book_types__WEBPACK_IMPORTED_MODULE_1__.Q.dark,home_book_constants__WEBPACK_IMPORTED_MODULE_0__.Ro.neutral4),_defineProperty(_neutral4,home_book_types__WEBPACK_IMPORTED_MODULE_1__.Q.light,home_book_constants__WEBPACK_IMPORTED_MODULE_0__.yD.neutral4),_neutral4),neutral5:(_neutral5={},_defineProperty(_neutral5,home_book_types__WEBPACK_IMPORTED_MODULE_1__.Q.dark,home_book_constants__WEBPACK_IMPORTED_MODULE_0__.Ro.neutral5),_defineProperty(_neutral5,home_book_types__WEBPACK_IMPORTED_MODULE_1__.Q.light,home_book_constants__WEBPACK_IMPORTED_MODULE_0__.yD.neutral5),_neutral5)}},"./src/components/ComponentsUI/components/Typography/enums.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s6:()=>TypographyFontWeight,x8:()=>TypographyFontType,zj:()=>TypographyFontStyle});var TypographyFontStyle=function(TypographyFontStyle){return TypographyFontStyle.italic="italic",TypographyFontStyle.normal="normal",TypographyFontStyle}({}),TypographyFontType=function(TypographyFontType){return TypographyFontType.h1="h1",TypographyFontType.h2="h2",TypographyFontType.h3="h3",TypographyFontType.h4="h4",TypographyFontType.h5="h5",TypographyFontType.h6="h6",TypographyFontType.p="p",TypographyFontType.small="small",TypographyFontType}({}),TypographyFontWeight=function(TypographyFontWeight){return TypographyFontWeight.black="black",TypographyFontWeight.bold="bold",TypographyFontWeight.extraBold="extra-bold",TypographyFontWeight.light="light",TypographyFontWeight.medium="medium",TypographyFontWeight.regular="regular",TypographyFontWeight.semiBold="semi-bold",TypographyFontWeight}({})},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ComponentsUI/components/Typography/typography.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Typography{font-family:Rubik,sans-serif}.Typography--h1{display:block;font-size:60px;font-weight:400;line-height:74px;margin:0;margin-bottom:20px;margin-inline-end:0;margin-inline-start:0;padding:0}.Typography--h2{display:block;font-size:48px;font-weight:400;line-height:60px;margin:0;margin-bottom:16px;margin-inline-end:0;margin-inline-start:0;padding:0}.Typography--h3{display:block;font-size:34px;font-weight:400;line-height:50px;margin:0;margin-bottom:12px;margin-inline-end:0;margin-inline-start:0;padding:0}.Typography--h4{display:block;font-size:24px;font-weight:400;line-height:28px;margin:0;margin-bottom:8px;margin-inline-end:0;margin-inline-start:0;padding:0}.Typography--h5{display:block;font-size:20px;font-weight:400;line-height:24px;margin:0;margin-bottom:6px;margin-inline-end:0;margin-inline-start:0;padding:0}.Typography--h6{display:block;font-size:16px;font-weight:400;line-height:20px;margin:0;margin-bottom:6px;margin-inline-end:0;margin-inline-start:0;padding:0}.Typography--p{display:block;font-size:14px;font-weight:400;line-height:18px;margin:0;margin-bottom:4px;margin-inline-end:0;margin-inline-start:0;padding:0}.Typography--small{display:block;font-size:12px;font-weight:400;line-height:16px;margin:0;margin-bottom:2px;margin-inline-end:0;margin-inline-start:0;padding:0}.Typography--normal{font-style:normal}.Typography--italic{font-style:italic}.Typography--light{font-weight:300}.Typography--regular{font-weight:400}.Typography--medium{font-weight:500}.Typography--semi-bold{font-weight:600}.Typography--bold{font-weight:700}.Typography--extra-bold{font-weight:800}.Typography--blacks{font-weight:900}.Typography--no-wrap{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Typography--without-margin{margin:0}","",{version:3,sources:["webpack://./src/components/ComponentsUI/components/Typography/typography.scss","webpack://./src/styles/mixins/typography/typography.scss","webpack://./src/styles/mixins/text-ellipsis.scss"],names:[],mappings:"AAOA,YA4BE,4BAAA,CA1BE,gBCRF,aAAA,CACA,cDQqB,CCPrB,eAAA,CACA,gBDOuB,CCNvB,QAAA,CACA,kBDMyB,CCLzB,mBAAA,CACA,qBAAA,CACA,SAAA,CAAA,gBARA,aAAA,CACA,cDQqB,CCPrB,eAAA,CACA,gBDOuB,CCNvB,QAAA,CACA,kBDMyB,CCLzB,mBAAA,CACA,qBAAA,CACA,SAAA,CAAA,gBARA,aAAA,CACA,cDQqB,CCPrB,eAAA,CACA,gBDOuB,CCNvB,QAAA,CACA,kBDMyB,CCLzB,mBAAA,CACA,qBAAA,CACA,SAAA,CAAA,gBARA,aAAA,CACA,cDQqB,CCPrB,eAAA,CACA,gBDOuB,CCNvB,QAAA,CACA,iBDMyB,CCLzB,mBAAA,CACA,qBAAA,CACA,SAAA,CAAA,gBARA,aAAA,CACA,cDQqB,CCPrB,eAAA,CACA,gBDOuB,CCNvB,QAAA,CACA,iBDMyB,CCLzB,mBAAA,CACA,qBAAA,CACA,SAAA,CAAA,gBARA,aAAA,CACA,cDQqB,CCPrB,eAAA,CACA,gBDOuB,CCNvB,QAAA,CACA,iBDMyB,CCLzB,mBAAA,CACA,qBAAA,CACA,SAAA,CAAA,eARA,aAAA,CACA,cDQqB,CCPrB,eAAA,CACA,gBDOuB,CCNvB,QAAA,CACA,iBDMyB,CCLzB,mBAAA,CACA,qBAAA,CACA,SAAA,CAAA,mBARA,aAAA,CACA,cDQqB,CCPrB,eAAA,CACA,gBDOuB,CCNvB,QAAA,CACA,iBDMyB,CCLzB,mBAAA,CACA,qBAAA,CACA,SAAA,CDcE,oBACE,iBAAA,CADF,oBACE,iBAAA,CAKF,mBAEE,eAAA,CAFF,qBAEE,eAAA,CAFF,oBAEE,eAAA,CAFF,uBAEE,eAAA,CAFF,kBAEE,eAAA,CAFF,wBAEE,eAAA,CAFF,oBAEE,eAAA,CAMJ,qBEpCA,eAAA,CACA,sBAAA,CACA,kBAAA,CFsCA,4BACE,QAAA",sourcesContent:["@use 'sass:map';\n\n@import '../../../../styles/mixins/text-ellipsis';\n@import '../../../../styles/mixins/typography/typography';\n@import '../../../../styles/mixins/typography/typography-list';\n@import '../../../../styles/mixins/typography/typography-map';\n\n.Typography {\n  @each $font-type in $--hb-font-types {\n    &--#{$font-type} {\n      $--hb-font-size: map.get($--hb-font-size-map, $font-type);\n      $--hb-line-height: map.get($--hb-line-height-map, $font-type);\n      $--hb-margin-bottom: map.get($--hb-margin-bottom-map, $font-type);\n\n      @include typography-styles(\n        $--hb-font-size,\n        $--hb-line-height,\n        $--hb-margin-bottom\n      );\n    }\n  }\n\n  @each $font-style in $--hb-font-styles {\n    &--#{$font-style} {\n      font-style: map.get($--hb-font-styles-map, $font-style);\n    }\n  }\n\n  @each $font-weight in $--hb-font-weights {\n    &--#{$font-weight} {\n      /* stylelint-disable-next-line font-weight-notation */\n      font-weight: map.get($--hb-font-weights-map, $font-weight);\n    }\n  }\n\n  font-family: Rubik, sans-serif;\n\n  &--no-wrap {\n    @include text-ellipsis;\n  }\n\n  &--without-margin {\n    margin: 0;\n  }\n}\n","@mixin typography-styles($font-size, $line-height, $margin-bottom) {\n  display: block;\n  font-size: $font-size;\n  font-weight: 400;\n  line-height: $line-height;\n  margin: 0;\n  margin-bottom: $margin-bottom;\n  margin-inline-end: 0;\n  margin-inline-start: 0;\n  padding: 0;\n}\n","@mixin text-ellipsis {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);
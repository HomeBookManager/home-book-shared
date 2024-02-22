"use strict";(self.webpackChunkhome_book_shared=self.webpackChunkhome_book_shared||[]).push([[228],{"./src/components/ComponentsUI/components/Typography/Typography.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Typography_Typography});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),lodash=__webpack_require__("./node_modules/lodash/lodash.js"),react=__webpack_require__("./node_modules/react/index.js"),hooks=__webpack_require__("./src/hooks/index.ts"),enums=__webpack_require__("./src/components/ComponentsUI/components/Typography/enums.ts");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var classNames=_defineProperty({},"Typography",{name:"Typography",modificators:_objectSpread(_objectSpread(_objectSpread({noWrap:"".concat("Typography","--no-wrap"),withoutMargin:"".concat("Typography","--without-margin")},(0,lodash.mapValues)(enums.HR,(function(fontType){return"".concat("Typography","--").concat(fontType)}))),(0,lodash.mapValues)(enums.qT,(function(fontStyle){return"".concat("Typography","--").concat(fontStyle)}))),(0,lodash.mapValues)(enums.Dp,(function(fontWeight){return"".concat("Typography","--").concat(fontWeight)})))}),constants=__webpack_require__("./src/components/ComponentsUI/components/Typography/constants.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),typography=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/ComponentsUI/components/Typography/typography.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(typography.A,options);typography.A&&typography.A.locals&&typography.A.locals;var E2EDataAttributes_enums=__webpack_require__("./src/components/E2EDataAttributes/enums.ts"),utils=__webpack_require__("./src/components/E2EDataAttributes/utils.ts");function Typography_typeof(o){return Typography_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Typography_typeof(o)}var _excluded=["align","children","className","color","e2eAttribute","e2eValue","fontStyle","fontType","fontWeight","innerHtml","noWrap","style","withoutMargin"];function Typography_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function Typography_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Typography_ownKeys(Object(t),!0).forEach((function(r){Typography_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Typography_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function Typography_defineProperty(obj,key,value){return(key=function Typography_toPropertyKey(t){var i=function Typography_toPrimitive(t,r){if("object"!=Typography_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=Typography_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==Typography_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Typography=(0,react.forwardRef)((function(_ref,ref){var _ref$align=_ref.align,textAlign=void 0===_ref$align?"inherit":_ref$align,children=_ref.children,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,_ref$color=_ref.color,color=void 0===_ref$color?constants.X.neutral1:_ref$color,_ref$e2eAttribute=_ref.e2eAttribute,e2eAttribute=void 0===_ref$e2eAttribute?E2EDataAttributes_enums.L.text:_ref$e2eAttribute,_ref$e2eValue=_ref.e2eValue,e2eValue=void 0===_ref$e2eValue?"":_ref$e2eValue,_ref$fontStyle=_ref.fontStyle,fontStyle=void 0===_ref$fontStyle?enums.qT.normal:_ref$fontStyle,_ref$fontType=_ref.fontType,fontType=void 0===_ref$fontType?enums.HR.p:_ref$fontType,_ref$fontWeight=_ref.fontWeight,fontWeight=void 0===_ref$fontWeight?enums.Dp.regular:_ref$fontWeight,_ref$innerHtml=_ref.innerHtml,innerHtml=void 0===_ref$innerHtml?"":_ref$innerHtml,_ref$noWrap=_ref.noWrap,noWrap=void 0!==_ref$noWrap&&_ref$noWrap,_ref$style=_ref.style,style=void 0===_ref$style?{}:_ref$style,_ref$withoutMargin=_ref.withoutMargin,withoutMargin=void 0===_ref$withoutMargin||_ref$withoutMargin,restProps=_objectWithoutProperties(_ref,_excluded),_useTheme=(0,hooks.DP)(classNames),classNamesWithTheme=_useTheme.classNamesWithTheme,theme=_useTheme.theme;return children||innerHtml?(0,react.createElement)(fontType,Typography_objectSpread(Typography_objectSpread(Typography_objectSpread({},restProps),{},Typography_defineProperty({className:classnames_default()(className,classNamesWithTheme.Typography.name,classNamesWithTheme.Typography.modificators[(0,lodash.camelCase)(fontWeight)],classNamesWithTheme.Typography.modificators[fontStyle],classNamesWithTheme.Typography.modificators[fontType],Typography_defineProperty({},classNamesWithTheme.Typography.modificators.noWrap,noWrap),Typography_defineProperty({},classNamesWithTheme.Typography.modificators.withoutMargin,withoutMargin))},(0,utils.x)(e2eAttribute),e2eValue),innerHtml?{dangerouslySetInnerHTML:{__html:innerHtml}}:{}),{},{ref,style:Typography_objectSpread(Typography_objectSpread({},style),{},{color:(0,lodash.isObject)(color)?color[theme]:color,textAlign})}),children):null}));const Typography_Typography=Typography;try{Typography.displayName="Typography",Typography.__docgenInfo={description:"",displayName:"Typography",props:{color:{defaultValue:{value:"TYPOGRAPHY_COLORS_MODE.neutral1"},description:"",name:"color",required:!1,type:{name:"TTypographyColor"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"-webkit-match-parent"'},{value:'"center"'},{value:'"end"'},{value:'"justify"'},{value:'"left"'},{value:'"match-parent"'},{value:'"right"'},{value:'"start"'}]}},e2eAttribute:{defaultValue:{value:"E2EAttribute.text"},description:"",name:"e2eAttribute",required:!1,type:{name:"string"}},e2eValue:{defaultValue:{value:""},description:"",name:"e2eValue",required:!1,type:{name:"string | number"}},fontStyle:{defaultValue:{value:"TypographyFontStyle.normal"},description:"",name:"fontStyle",required:!1,type:{name:"enum",value:[{value:'"italic"'},{value:'"normal"'}]}},fontType:{defaultValue:{value:"TypographyFontType.p"},description:"",name:"fontType",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"p"'},{value:'"small"'}]}},fontWeight:{defaultValue:{value:"TypographyFontWeight.regular"},description:"",name:"fontWeight",required:!1,type:{name:"enum",value:[{value:'"blacks"'},{value:'"bold"'},{value:'"extra-bold"'},{value:'"light"'},{value:'"medium"'},{value:'"regular"'},{value:'"semi-bold"'}]}},innerHtml:{defaultValue:{value:""},description:"",name:"innerHtml",required:!1,type:{name:"string"}},noWrap:{defaultValue:{value:"false"},description:"",name:"noWrap",required:!1,type:{name:"boolean"}},withoutMargin:{defaultValue:{value:"true"},description:"",name:"withoutMargin",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ComponentsUI/components/Typography/Typography.tsx#Typography"]={docgenInfo:Typography.__docgenInfo,name:"Typography",path:"src/components/ComponentsUI/components/Typography/Typography.tsx#Typography"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ComponentsUI/components/Typography/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>TYPOGRAPHY_COLORS_MODE});var home_book_constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/home-book-constants/dist/index.js"),home_book_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/home-book-types/dist/index.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var TYPOGRAPHY_COLORS_MODE={link:_defineProperty(_defineProperty({},home_book_types__WEBPACK_IMPORTED_MODULE_1__.S.dark,home_book_constants__WEBPACK_IMPORTED_MODULE_0__.zb.blue2),home_book_types__WEBPACK_IMPORTED_MODULE_1__.S.light,home_book_constants__WEBPACK_IMPORTED_MODULE_0__.zb.blue1),neutral1:_defineProperty(_defineProperty({},home_book_types__WEBPACK_IMPORTED_MODULE_1__.S.dark,home_book_constants__WEBPACK_IMPORTED_MODULE_0__.GJ.neutral1),home_book_types__WEBPACK_IMPORTED_MODULE_1__.S.light,home_book_constants__WEBPACK_IMPORTED_MODULE_0__.ag.neutral1),neutral2:_defineProperty(_defineProperty({},home_book_types__WEBPACK_IMPORTED_MODULE_1__.S.dark,home_book_constants__WEBPACK_IMPORTED_MODULE_0__.GJ.neutral2),home_book_types__WEBPACK_IMPORTED_MODULE_1__.S.light,home_book_constants__WEBPACK_IMPORTED_MODULE_0__.ag.neutral2),neutral3:_defineProperty(_defineProperty({},home_book_types__WEBPACK_IMPORTED_MODULE_1__.S.dark,home_book_constants__WEBPACK_IMPORTED_MODULE_0__.GJ.neutral3),home_book_types__WEBPACK_IMPORTED_MODULE_1__.S.light,home_book_constants__WEBPACK_IMPORTED_MODULE_0__.ag.neutral3),neutral4:_defineProperty(_defineProperty({},home_book_types__WEBPACK_IMPORTED_MODULE_1__.S.dark,home_book_constants__WEBPACK_IMPORTED_MODULE_0__.GJ.neutral4),home_book_types__WEBPACK_IMPORTED_MODULE_1__.S.light,home_book_constants__WEBPACK_IMPORTED_MODULE_0__.ag.neutral4),neutral5:_defineProperty(_defineProperty({},home_book_types__WEBPACK_IMPORTED_MODULE_1__.S.dark,home_book_constants__WEBPACK_IMPORTED_MODULE_0__.GJ.neutral5),home_book_types__WEBPACK_IMPORTED_MODULE_1__.S.light,home_book_constants__WEBPACK_IMPORTED_MODULE_0__.ag.neutral5)}},"./src/components/ComponentsUI/components/Typography/enums.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dp:()=>TypographyFontWeight,HR:()=>TypographyFontType,qT:()=>TypographyFontStyle});var TypographyFontStyle=function(TypographyFontStyle){return TypographyFontStyle.italic="italic",TypographyFontStyle.normal="normal",TypographyFontStyle}({}),TypographyFontType=function(TypographyFontType){return TypographyFontType.h1="h1",TypographyFontType.h2="h2",TypographyFontType.h3="h3",TypographyFontType.h4="h4",TypographyFontType.h5="h5",TypographyFontType.h6="h6",TypographyFontType.p="p",TypographyFontType.small="small",TypographyFontType}({}),TypographyFontWeight=function(TypographyFontWeight){return TypographyFontWeight.blacks="blacks",TypographyFontWeight.bold="bold",TypographyFontWeight.extraBold="extra-bold",TypographyFontWeight.light="light",TypographyFontWeight.medium="medium",TypographyFontWeight.regular="regular",TypographyFontWeight.semiBold="semi-bold",TypographyFontWeight}({})},"./src/hooks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DP:()=>_useTheme_useTheme__WEBPACK_IMPORTED_MODULE_1__.D});__webpack_require__("./src/hooks/useRippleEffect/useRippleEffect.tsx");var _useTheme_useTheme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/useTheme/useTheme.tsx")},"./src/hooks/useRippleEffect/useRippleEffect.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>useRippleEffect});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var useRippleEffect=function useRippleEffect(className){var delay=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,_useState2=_slicedToArray((0,react.useState)({x:-1,y:-1}),2),coords=_useState2[0],setCoords=_useState2[1],_useState4=_slicedToArray((0,react.useState)(!1),2),isRippling=_useState4[0],setIsRippling=_useState4[1],rippleEffect=isRippling?(0,jsx_runtime.jsx)("span",{className:"".concat(className,"--").concat("ripple"),style:{left:coords.x,top:coords.y}}):null;return(0,react.useEffect)((function(){var timeout;return-1!==coords.x&&-1!==coords.y&&(setIsRippling(!0),timeout=setTimeout((function(){return setIsRippling(!1)}),delay)),function(){timeout&&clearTimeout(timeout)}}),[coords]),{rippleEffect,triggerRippleEffect:function triggerRippleEffect(event){var clientX=event.clientX,clientY=event.clientY,_currentTarget$getBou=event.currentTarget.getBoundingClientRect(),left=_currentTarget$getBou.left,top=_currentTarget$getBou.top;setCoords({x:clientX-left,y:clientY-top})}}}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/ComponentsUI/components/Typography/typography.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Typography{font-family:Rubik,sans-serif}.Typography--h1{display:block;font-size:60px;font-weight:400;line-height:74px;margin:0;margin-bottom:20px;margin-inline:0 0;padding:0}.Typography--h2{display:block;font-size:48px;font-weight:400;line-height:60px;margin:0;margin-bottom:16px;margin-inline:0 0;padding:0}.Typography--h3{display:block;font-size:34px;font-weight:400;line-height:50px;margin:0;margin-bottom:12px;margin-inline:0 0;padding:0}.Typography--h4{display:block;font-size:24px;font-weight:400;line-height:28px;margin:0;margin-bottom:8px;margin-inline:0 0;padding:0}.Typography--h5{display:block;font-size:20px;font-weight:400;line-height:24px;margin:0;margin-bottom:6px;margin-inline:0 0;padding:0}.Typography--h6{display:block;font-size:16px;font-weight:400;line-height:20px;margin:0;margin-bottom:6px;margin-inline:0 0;padding:0}.Typography--p{display:block;font-size:14px;font-weight:400;line-height:18px;margin:0;margin-bottom:4px;margin-inline:0 0;padding:0}.Typography--small{display:block;font-size:12px;font-weight:400;line-height:16px;margin:0;margin-bottom:2px;margin-inline:0 0;padding:0}.Typography--normal{font-style:normal}.Typography--italic{font-style:italic}.Typography--light{font-weight:300}.Typography--regular{font-weight:400}.Typography--medium{font-weight:500}.Typography--semi-bold{font-weight:600}.Typography--bold{font-weight:700}.Typography--extra-bold{font-weight:800}.Typography--blacks{font-weight:900}.Typography--no-wrap{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Typography--without-margin{margin:0}","",{version:3,sources:["webpack://./src/components/ComponentsUI/components/Typography/typography.scss","webpack://./src/styles/mixins/typography/typography.scss","webpack://./src/styles/mixins/text-ellipsis.scss"],names:[],mappings:"AAOA,YA4BE,4BAAA,CA1BE,gBCRF,aAAA,CACA,cDQqB,CCPrB,eAAA,CACA,gBDOuB,CCNvB,QAAA,CACA,kBDMyB,CCLzB,iBAAA,CACA,SAAA,CDCE,gBCRF,aAAA,CACA,cDQqB,CCPrB,eAAA,CACA,gBDOuB,CCNvB,QAAA,CACA,kBDMyB,CCLzB,iBAAA,CACA,SAAA,CDCE,gBCRF,aAAA,CACA,cDQqB,CCPrB,eAAA,CACA,gBDOuB,CCNvB,QAAA,CACA,kBDMyB,CCLzB,iBAAA,CACA,SAAA,CDCE,gBCRF,aAAA,CACA,cDQqB,CCPrB,eAAA,CACA,gBDOuB,CCNvB,QAAA,CACA,iBDMyB,CCLzB,iBAAA,CACA,SAAA,CDCE,gBCRF,aAAA,CACA,cDQqB,CCPrB,eAAA,CACA,gBDOuB,CCNvB,QAAA,CACA,iBDMyB,CCLzB,iBAAA,CACA,SAAA,CDCE,gBCRF,aAAA,CACA,cDQqB,CCPrB,eAAA,CACA,gBDOuB,CCNvB,QAAA,CACA,iBDMyB,CCLzB,iBAAA,CACA,SAAA,CDCE,eCRF,aAAA,CACA,cDQqB,CCPrB,eAAA,CACA,gBDOuB,CCNvB,QAAA,CACA,iBDMyB,CCLzB,iBAAA,CACA,SAAA,CDCE,mBCRF,aAAA,CACA,cDQqB,CCPrB,eAAA,CACA,gBDOuB,CCNvB,QAAA,CACA,iBDMyB,CCLzB,iBAAA,CACA,SAAA,CDeE,oBACE,iBAAA,CADF,oBACE,iBAAA,CAKF,mBAEE,eAAA,CAFF,qBAEE,eAAA,CAFF,oBAEE,eAAA,CAFF,uBAEE,eAAA,CAFF,kBAEE,eAAA,CAFF,wBAEE,eAAA,CAFF,oBAEE,eAAA,CAMJ,qBEpCA,eAAA,CACA,sBAAA,CACA,kBAAA,CFsCA,4BACE,QAAA",sourcesContent:["$--hb-btn-text-primary-text: #1b73e8; $--hb-btn-contained-primary-background: #1b73e8; $--hb-btn-contained-primary-text: #ffffff; $--hb-btn-outlined-primary-border: #1b73e8; $--hb-btn-outlined-primary-text: #1b73e8; $--hb-btn-text-primary-background-hover: #8cbdff; $--hb-btn-text-primary-text-hover: #315fc6; $--hb-btn-contained-primary-background-hover: #315fc6; $--hb-btn-outlined-primary-border-hover: #6fadff; $--hb-btn-outlined-primary-text-hover: #6fadff; $--hb-btn-text-primary-text-disabled: #1d4d8b; $--hb-btn-contained-primary-background-disabled: #1d4d8b; $--hb-btn-outlined-primary-border-disabled: #1d4d8b; $--hb-btn-outlined-primary-text-disabled: #1d4d8b; $--hb-btn-text-secondary-text: #8a8a8a; $--hb-btn-contained-secondary-background: #6c757d; $--hb-btn-contained-secondary-text: #ffffff; $--hb-btn-outlined-secondary-border: #6c757d; $--hb-btn-outlined-secondary-text: #6c757d; $--hb-btn-text-secondary-background-hover: #bfbfbf; $--hb-btn-text-secondary-text-hover: #6c757d; $--hb-btn-contained-secondary-background-hover: #4f5962; $--hb-btn-outlined-secondary-border-hover: #999a9b; $--hb-btn-outlined-secondary-text-hover: #999a9b; $--hb-btn-text-secondary-text-disabled: #54585d; $--hb-btn-contained-secondary-background-disabled: #32383d; $--hb-btn-outlined-secondary-border-disabled: #454e56; $--hb-btn-outlined-secondary-text-disabled: #454e56; $--hb-btn-text-success-text: #28a745; $--hb-btn-contained-success-background: #28a745; $--hb-btn-contained-success-text: #ffffff; $--hb-btn-outlined-success-border: #28a745; $--hb-btn-outlined-success-text: #28a745; $--hb-btn-text-success-background-hover: #a2e7af; $--hb-btn-text-success-text-hover: #2e9445; $--hb-btn-contained-success-background-hover: #5ec074; $--hb-btn-outlined-success-border-hover: #06de37; $--hb-btn-outlined-success-text-hover: #06de37; $--hb-btn-text-success-text-disabled: #23673a; $--hb-btn-contained-success-background-disabled: #23673a; $--hb-btn-outlined-success-border-disabled: #23673a; $--hb-btn-outlined-success-text-disabled: #23673a; $--hb-btn-text-warning-text: #ffc107; $--hb-btn-contained-warning-background: #ffc107; $--hb-btn-contained-warning-text: #000000; $--hb-btn-outlined-warning-border: #ffc107; $--hb-btn-outlined-warning-text: #ffc107; $--hb-btn-text-warning-background-hover: #f2cd5c; $--hb-btn-text-warning-text-hover: #6d5405; $--hb-btn-contained-warning-background-hover: #ffd453; $--hb-btn-outlined-warning-border-hover: #d9a60d; $--hb-btn-outlined-warning-text-hover: #d9a60d; $--hb-btn-text-warning-text-disabled: #8e741b; $--hb-btn-contained-warning-background-disabled: #8e741b; $--hb-btn-outlined-warning-border-disabled: #8e741b; $--hb-btn-outlined-warning-text-disabled: #8e741b; $--hb-btn-text-error-text: #dc3545; $--hb-btn-contained-error-background: #dc3545; $--hb-btn-contained-error-text: #ffffff; $--hb-btn-outlined-error-border: #dc3545; $--hb-btn-outlined-error-text: #dc3545; $--hb-btn-text-error-background-hover: #df7680; $--hb-btn-text-error-text-hover: #7d0e18; $--hb-btn-contained-error-background-hover: #ff6e7c; $--hb-btn-outlined-error-border-hover: #e8707b; $--hb-btn-outlined-error-text-hover: #e8707b; $--hb-btn-text-error-text-disabled: #7d2e3a; $--hb-btn-contained-error-background-disabled: #7d2e3a; $--hb-btn-outlined-error-border-disabled: #7d2e3a; $--hb-btn-outlined-error-text-disabled: #7d2e3a; $--hb-btn-icon-background-click: #000000; $--hb-btn-icon-background-click--dark: #ffffff; $--hb-btn-icon-background-hover: #DBDCDE; $--hb-btn-icon-background-hover--dark: #3A4046; $--hb-common-neutral-blue-1: #035afc; $--hb-common-neutral-blue-2: #8ab4f8; $--hb-common-neutral-green-1: #28a745; $--hb-common-neutral-green-2: #a7b45d; $--hb-common-neutral-1: #ffffff; $--hb-common-neutral-2: #929292; $--hb-common-neutral-orange-1: #df9862; $--hb-common-neutral-orange-2: #fdb32a; $--hb-common-neutral-red-1: #d93025; $--hb-common-neutral-sky-blue-1: #77b3cd; $--hb-common-neutral-violet-1: #4660f9; $--hb-neutral-1: #1e2839; $--hb-neutral-2: #757575; $--hb-neutral-3: #e8e9eb; $--hb-neutral-4: #f1f2f6; $--hb-neutral-5: #ffffff; $--hb-neutral-1--dark: #ffffff; $--hb-neutral-2--dark: #b9bbbe; $--hb-neutral-3--dark: #343c43; $--hb-neutral-4--dark: #1e262f; $--hb-neutral-5--dark: #151d25; $--hb-error: #d93025; $--hb-error-focus: #b20c01; $--hb-label: #1a2027; $--hb-label--dark: #ffffff; $--hb-label-disabled: #1b212880; $--hb-label-disabled--dark: #ffffff80;@use 'sass:map';\n\n@import '../../../../styles/mixins/text-ellipsis';\n@import '../../../../styles/mixins/typography/typography';\n@import '../../../../styles/mixins/typography/typography-list';\n@import '../../../../styles/mixins/typography/typography-map';\n\n.Typography {\n  @each $font-type in $--hb-font-types {\n    &--#{$font-type} {\n      $--hb-font-size: map.get($--hb-font-size-map, $font-type);\n      $--hb-line-height: map.get($--hb-line-height-map, $font-type);\n      $--hb-margin-bottom: map.get($--hb-margin-bottom-map, $font-type);\n\n      @include typography-styles(\n        $--hb-font-size,\n        $--hb-line-height,\n        $--hb-margin-bottom\n      );\n    }\n  }\n\n  @each $font-style in $--hb-font-styles {\n    &--#{$font-style} {\n      font-style: map.get($--hb-font-styles-map, $font-style);\n    }\n  }\n\n  @each $font-weight in $--hb-font-weights {\n    &--#{$font-weight} {\n      /* stylelint-disable-next-line font-weight-notation */\n      font-weight: map.get($--hb-font-weights-map, $font-weight);\n    }\n  }\n\n  font-family: Rubik, sans-serif;\n\n  &--no-wrap {\n    @include text-ellipsis;\n  }\n\n  &--without-margin {\n    margin: 0;\n  }\n}\n","@mixin typography-styles($font-size, $line-height, $margin-bottom) {\n  display: block;\n  font-size: $font-size;\n  font-weight: 400;\n  line-height: $line-height;\n  margin: 0;\n  margin-bottom: $margin-bottom;\n  margin-inline: 0 0;\n  padding: 0;\n}\n","@mixin text-ellipsis {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);
(self.webpackChunkhome_book_shared=self.webpackChunkhome_book_shared||[]).push([[395],{"./node_modules/history/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{zR:()=>createBrowserHistory});var Action,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");!function(Action){Action.Pop="POP",Action.Push="PUSH",Action.Replace="REPLACE"}(Action||(Action={}));var readOnly=function(obj){return obj};var BeforeUnloadEventType="beforeunload",PopStateEventType="popstate";function createBrowserHistory(options){void 0===options&&(options={});var _options$window=options.window,window=void 0===_options$window?document.defaultView:_options$window,globalHistory=window.history;function getIndexAndLocation(){var _window$location=window.location,pathname=_window$location.pathname,search=_window$location.search,hash=_window$location.hash,state=globalHistory.state||{};return[state.idx,readOnly({pathname,search,hash,state:state.usr||null,key:state.key||"default"})]}var blockedPopTx=null;window.addEventListener(PopStateEventType,(function handlePop(){if(blockedPopTx)blockers.call(blockedPopTx),blockedPopTx=null;else{var nextAction=Action.Pop,_getIndexAndLocation=getIndexAndLocation(),nextIndex=_getIndexAndLocation[0],nextLocation=_getIndexAndLocation[1];if(blockers.length){if(null!=nextIndex){var delta=index-nextIndex;delta&&(blockedPopTx={action:nextAction,location:nextLocation,retry:function retry(){go(-1*delta)}},go(delta))}}else applyTx(nextAction)}}));var action=Action.Pop,_getIndexAndLocation2=getIndexAndLocation(),index=_getIndexAndLocation2[0],location=_getIndexAndLocation2[1],listeners=createEvents(),blockers=createEvents();function createHref(to){return"string"==typeof to?to:createPath(to)}function getNextLocation(to,state){return void 0===state&&(state=null),readOnly((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.A)({pathname:location.pathname,hash:"",search:""},"string"==typeof to?parsePath(to):to,{state,key:createKey()}))}function getHistoryStateAndUrl(nextLocation,index){return[{usr:nextLocation.state,key:nextLocation.key,idx:index},createHref(nextLocation)]}function allowTx(action,location,retry){return!blockers.length||(blockers.call({action,location,retry}),!1)}function applyTx(nextAction){action=nextAction;var _getIndexAndLocation3=getIndexAndLocation();index=_getIndexAndLocation3[0],location=_getIndexAndLocation3[1],listeners.call({action,location})}function go(delta){globalHistory.go(delta)}null==index&&(index=0,globalHistory.replaceState((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.A)({},globalHistory.state,{idx:index}),""));var history={get action(){return action},get location(){return location},createHref,push:function push(to,state){var nextAction=Action.Push,nextLocation=getNextLocation(to,state);if(allowTx(nextAction,nextLocation,(function retry(){push(to,state)}))){var _getHistoryStateAndUr=getHistoryStateAndUrl(nextLocation,index+1),historyState=_getHistoryStateAndUr[0],url=_getHistoryStateAndUr[1];try{globalHistory.pushState(historyState,"",url)}catch(error){window.location.assign(url)}applyTx(nextAction)}},replace:function replace(to,state){var nextAction=Action.Replace,nextLocation=getNextLocation(to,state);if(allowTx(nextAction,nextLocation,(function retry(){replace(to,state)}))){var _getHistoryStateAndUr2=getHistoryStateAndUrl(nextLocation,index),historyState=_getHistoryStateAndUr2[0],url=_getHistoryStateAndUr2[1];globalHistory.replaceState(historyState,"",url),applyTx(nextAction)}},go,back:function back(){go(-1)},forward:function forward(){go(1)},listen:function listen(listener){return listeners.push(listener)},block:function block(blocker){var unblock=blockers.push(blocker);return 1===blockers.length&&window.addEventListener(BeforeUnloadEventType,promptBeforeUnload),function(){unblock(),blockers.length||window.removeEventListener(BeforeUnloadEventType,promptBeforeUnload)}}};return history}function promptBeforeUnload(event){event.preventDefault(),event.returnValue=""}function createEvents(){var handlers=[];return{get length(){return handlers.length},push:function push(fn){return handlers.push(fn),function(){handlers=handlers.filter((function(handler){return handler!==fn}))}},call:function call(arg){handlers.forEach((function(fn){return fn&&fn(arg)}))}}}function createKey(){return Math.random().toString(36).substr(2,8)}function createPath(_ref){var _ref$pathname=_ref.pathname,pathname=void 0===_ref$pathname?"/":_ref$pathname,_ref$search=_ref.search,search=void 0===_ref$search?"":_ref$search,_ref$hash=_ref.hash,hash=void 0===_ref$hash?"":_ref$hash;return search&&"?"!==search&&(pathname+="?"===search.charAt(0)?search:"?"+search),hash&&"#"!==hash&&(pathname+="#"===hash.charAt(0)?hash:"#"+hash),pathname}function parsePath(path){var parsedPath={};if(path){var hashIndex=path.indexOf("#");hashIndex>=0&&(parsedPath.hash=path.substr(hashIndex),path=path.substr(0,hashIndex));var searchIndex=path.indexOf("?");searchIndex>=0&&(parsedPath.search=path.substr(searchIndex),path=path.substr(0,searchIndex)),path&&(parsedPath.pathname=path)}return parsedPath}},"./node_modules/uniqid/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var process=__webpack_require__("./node_modules/process/browser.js"),pid=void 0!==process&&process.pid?process.pid.toString(36):"";function now(){var time=Date.now(),last=now.last||time;return now.last=time>last?time:last+1}module.exports=module.exports.default=function(prefix,suffix){return(prefix||"")+""+pid+now().toString(36)+(suffix||"")},module.exports.process=function(prefix,suffix){return(prefix||"")+pid+now().toString(36)+(suffix||"")},module.exports.time=function(prefix,suffix){return(prefix||"")+now().toString(36)+(suffix||"")}}}]);
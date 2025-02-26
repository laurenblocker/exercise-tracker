/*! For license information please see main.e7f78922.js.LICENSE.txt */
(()=>{"use strict";var e={43:(e,t,n)=>{e.exports=n(288)},288:(e,t)=>{var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),c=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,v={};function m(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||y}function g(){}function _(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=m.prototype;var S=_.prototype=new g;S.constructor=_,h(S,m.prototype),S.isPureReactComponent=!0;var b=Array.isArray,E={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function x(e,t,r,o,i,u){return r=u.ref,{$$typeof:n,type:e,key:t,ref:void 0!==r?r:null,props:u}}function O(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var R=/\/+/g;function C(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function k(){}function T(e,t,o,i,u){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c,a,f=!1;if(null===e)f=!0;else switch(s){case"bigint":case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case n:case r:f=!0;break;case p:return T((f=e._init)(e._payload),t,o,i,u)}}if(f)return u=u(e),f=""===i?"."+C(e,0):i,b(u)?(o="",null!=f&&(o=f.replace(R,"$&/")+"/"),T(u,t,o,"",(function(e){return e}))):null!=u&&(O(u)&&(c=u,a=o+(null==u.key||e&&e.key===u.key?"":(""+u.key).replace(R,"$&/")+"/")+f,u=x(c.type,a,void 0,0,0,c.props)),t.push(u)),1;f=0;var l,y=""===i?".":i+":";if(b(e))for(var h=0;h<e.length;h++)f+=T(i=e[h],t,o,s=y+C(i,h),u);else if("function"===typeof(h=null===(l=e)||"object"!==typeof l?null:"function"===typeof(l=d&&l[d]||l["@@iterator"])?l:null))for(e=h.call(e),h=0;!(i=e.next()).done;)f+=T(i=i.value,t,o,s=y+C(i,h++),u);else if("object"===s){if("function"===typeof e.then)return T(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(k,k):(e.status="pending",e.then((function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)}),(function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)}))),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,o,i,u);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return f}function w(e,t,n){if(null==e)return e;var r=[],o=0;return T(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function H(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var A="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function P(){}t.Children={map:w,forEach:function(e,t,n){w(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return w(e,(function(){t++})),t},toArray:function(e){return w(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=u,t.PureComponent=_,t.StrictMode=i,t.Suspense=f,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,t.act=function(){throw Error("act(...) is not supported in production builds of React.")},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=h({},e.props),o=e.key;if(null!=t)for(i in void 0!==t.ref&&void 0,void 0!==t.key&&(o=""+t.key),t)!j.call(t,i)||"key"===i||"__self"===i||"__source"===i||"ref"===i&&void 0===t.ref||(r[i]=t[i]);var i=arguments.length-2;if(1===i)r.children=n;else if(1<i){for(var u=Array(i),s=0;s<i;s++)u[s]=arguments[s+2];r.children=u}return x(e.type,o,void 0,0,0,r)},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:s,_context:e},e},t.createElement=function(e,t,n){var r,o={},i=null;if(null!=t)for(r in void 0!==t.key&&(i=""+t.key),t)j.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var s=Array(u),c=0;c<u;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return x(e,i,void 0,0,0,o)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=O,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:H}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=E.T,n={};E.T=n;try{var r=e(),o=E.S;null!==o&&o(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(P,A)}catch(i){A(i)}finally{E.T=t}},t.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},t.use=function(e){return E.H.use(e)},t.useActionState=function(e,t,n){return E.H.useActionState(e,t,n)},t.useCallback=function(e,t){return E.H.useCallback(e,t)},t.useContext=function(e){return E.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return E.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return E.H.useEffect(e,t)},t.useId=function(){return E.H.useId()},t.useImperativeHandle=function(e,t,n){return E.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return E.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return E.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return E.H.useMemo(e,t)},t.useOptimistic=function(e,t){return E.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return E.H.useReducer(e,t,n)},t.useRef=function(e){return E.H.useRef(e)},t.useState=function(e){return E.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return E.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return E.H.useTransition()},t.version="19.0.0"},579:(e,t,n)=>{e.exports=n(799)},672:(e,t,n)=>{var r=n(43);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var u={d:{f:i,r:function(){throw Error(o(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},s=Symbol.for("react.portal");var c=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function a(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(o(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:s,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=c.T,n=u.p;try{if(c.T=null,u.p=2,e)return e()}finally{c.T=t,u.p=n,u.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,u.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&u.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=a(n,t.crossOrigin),o="string"===typeof t.integrity?t.integrity:void 0,i="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?u.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:o,fetchPriority:i}):"script"===n&&u.d.X(e,{crossOrigin:r,integrity:o,fetchPriority:i,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=a(t.as,t.crossOrigin);u.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&u.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=a(n,t.crossOrigin);u.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=a(t.as,t.crossOrigin);u.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else u.d.m(e)},t.requestFormReset=function(e){u.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},t.useFormStatus=function(){return c.H.useHostTransitionStatus()},t.version="19.0.0"},799:(e,t)=>{var n=Symbol.for("react.transitional.element");function r(e,t,r){var o=null;if(void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),"key"in t)for(var i in r={},t)"key"!==i&&(r[i]=t[i]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:o,ref:void 0!==t?t:null,props:r}}Symbol.for("react.fragment"),t.jsx=r,t.jsxs=r},950:(e,t,n)=>{!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}var r=n(43),o=n(950),i=n(579);const u=function(e){let{name:t}=e;const[n,o]=(0,r.useState)(0);return(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:t}),(0,i.jsxs)("p",{children:["Repetitions: ",n]}),(0,i.jsx)("button",{onClick:()=>o(n+1),children:"Increase"}),(0,i.jsx)("button",{onClick:()=>o(0),children:"Reset"})]})};const s=function(e){let{name:t}=e;const[n,o]=(0,r.useState)(0),[u,s]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{let e;return u?e=setInterval((()=>{o((e=>e+1))}),1e3):clearInterval(e),()=>clearInterval(e)}),[u]),(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:t}),(0,i.jsxs)("p",{children:["Time: ",(c=n,`${String(Math.floor(c/60)).padStart(2,"0")}:${String(c%60).padStart(2,"0")}`)]}),(0,i.jsx)("button",{onClick:()=>s(!u),children:u?"Pause":"Start"}),(0,i.jsx)("button",{onClick:()=>{o(0),s(!1)},children:"Reset"})]});var c};const c=function(e){let{name:t}=e;const[n,o]=(0,r.useState)(0);return(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:t}),(0,i.jsxs)("p",{children:["Stretch Progress: ",n,"%"]}),(0,i.jsx)("button",{onClick:()=>o(n+10),children:"Increase"}),(0,i.jsx)("button",{onClick:()=>o(0),children:"Reset"})]})};const a=function(){const[e,t]=(0,r.useState)(null);return(0,i.jsx)("div",{children:e?(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:e.name}),"repetition"===e.type?(0,i.jsx)(u,{name:e.name}):"duration"===e.type?(0,i.jsx)(s,{name:e.name}):(0,i.jsx)(c,{name:e.name})]}):(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"Exercise Menu"}),[{name:"Push-ups",type:"repetition"},{name:"Jump Rope",type:"duration"},{name:"Stretching",type:"flexibility"}].map((e=>(0,i.jsx)("button",{onClick:()=>t(e),children:e.name},e.name)))]})})};o.render((0,i.jsx)(r.StrictMode,{children:(0,i.jsx)(a,{})}),document.getElementById("root"))})();
//# sourceMappingURL=main.e7f78922.js.map
var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ne(e,t){return te(e.type,t,e.props)}function re(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function se(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function T(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,T(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+oe(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),T(o,r,i,``,function(e){return e})):o!=null&&(re(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+oe(a,u),c+=T(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+oe(a,u++),c+=T(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return T(se(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return T(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!re(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=re,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),f=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=d()})),p=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,re());else{var t=n(l);t!==null&&oe(x,t.startTime-e)}}}var S=!1,C=-1,w=5,ee=-1;function te(){return g?!0:!(e.unstable_now()-ee<w)}function ne(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?re():S=!1}}}var re;if(typeof y==`function`)re=function(){y(ne)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=ne,re=function(){ae.postMessage(null)}}else re=function(){_(ne,0)};function oe(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,oe(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,re()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),m=o(((e,t)=>{t.exports=p()})),h=o((e=>{var t=m(),n=u(),r=f();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),ne=Symbol.for(`react.memo`),re=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.memo_cache_sentinel`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var T=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===T?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case te:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ne:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case re:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},de=[],fe=-1;function pe(e){return{current:e}}function me(e){0>fe||(e.current=de[fe],de[fe]=null,fe--)}function O(e,t){fe++,de[fe]=e.current,e.current=t}var he=pe(null),ge=pe(null),_e=pe(null),ve=pe(null);function ye(e,t){switch(O(_e,t),O(ge,e),O(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}me(he),O(he,e)}function be(){me(he),me(ge),me(_e)}function xe(e){e.memoizedState!==null&&O(ve,e);var t=he.current,n=Hd(t,e.type);t!==n&&(O(ge,e),O(he,n))}function Se(e){ge.current===e&&(me(he),me(ge)),ve.current===e&&(me(ve),Qf._currentValue=ue)}var Ce,we;function Te(e){if(Ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ce=t&&t[1]||``,we=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ce+e+we}var Ee=!1;function De(e,t){if(!e||Ee)return``;Ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ee=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Te(n):``}function Oe(e,t){switch(e.tag){case 26:case 27:case 5:return Te(e.type);case 16:return Te(`Lazy`);case 13:return e.child!==t&&t!==null?Te(`Suspense Fallback`):Te(`Suspense`);case 19:return Te(`SuspenseList`);case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return Te(`Activity`);default:return``}}function ke(e){try{var t=``,n=null;do t+=Oe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ae=Object.prototype.hasOwnProperty,je=t.unstable_scheduleCallback,Me=t.unstable_cancelCallback,Ne=t.unstable_shouldYield,Pe=t.unstable_requestPaint,Fe=t.unstable_now,Ie=t.unstable_getCurrentPriorityLevel,Le=t.unstable_ImmediatePriority,Re=t.unstable_UserBlockingPriority,ze=t.unstable_NormalPriority,Be=t.unstable_LowPriority,Ve=t.unstable_IdlePriority,He=t.log,Ue=t.unstable_setDisableYieldValue,We=null,Ge=null;function Ke(e){if(typeof He==`function`&&Ue(e),Ge&&typeof Ge.setStrictMode==`function`)try{Ge.setStrictMode(We,e)}catch{}}var qe=Math.clz32?Math.clz32:k,Je=Math.log,Ye=Math.LN2;function k(e){return e>>>=0,e===0?32:31-(Je(e)/Ye|0)|0}var Xe=256,Ze=262144,Qe=4194304;function $e(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function et(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=$e(n))):i=$e(o):i=$e(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=$e(n))):i=$e(o)):i=$e(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function tt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rt(){var e=Qe;return Qe<<=1,!(Qe&62914560)&&(Qe=4194304),e}function it(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function at(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ot(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-qe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&st(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function st(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-qe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ct(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function lt(e,t){var n=t&-t;return n=n&42?1:ut(n),(n&(e.suspendedLanes|t))===0?n:0}function ut(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function dt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ft(){var e=D.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function pt(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var mt=Math.random().toString(36).slice(2),ht=`__reactFiber$`+mt,gt=`__reactProps$`+mt,_t=`__reactContainer$`+mt,vt=`__reactEvents$`+mt,yt=`__reactListeners$`+mt,bt=`__reactHandles$`+mt,xt=`__reactResources$`+mt,St=`__reactMarker$`+mt;function Ct(e){delete e[ht],delete e[gt],delete e[vt],delete e[yt],delete e[bt]}function wt(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ht])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Tt(e){if(e=e[ht]||e[_t]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Et(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Dt(e){var t=e[xt];return t||=e[xt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Ot(e){e[St]=!0}var kt=new Set,At={};function jt(e,t){Mt(e,t),Mt(e+`Capture`,t)}function Mt(e,t){for(At[e]=t,e=0;e<t.length;e++)kt.add(t[e])}var Nt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Pt={},Ft={};function It(e){return Ae.call(Ft,e)?!0:Ae.call(Pt,e)?!1:Nt.test(e)?Ft[e]=!0:(Pt[e]=!0,!1)}function Lt(e,t,n){if(It(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function Rt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function zt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Bt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Vt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ht(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ut(e){if(!e._valueTracker){var t=Vt(e)?`checked`:`value`;e._valueTracker=Ht(e,t,``+e[t])}}function Wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Vt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Gt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Kt=/[\n"\\]/g;function qt(e){return e.replace(Kt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Jt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Bt(t)):e.value!==``+Bt(t)&&(e.value=``+Bt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Xt(e,o,Bt(n)):Xt(e,o,Bt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Bt(s):e.removeAttribute(`name`)}function Yt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ut(e);return}n=n==null?``:``+Bt(n),t=t==null?n:``+Bt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ut(e)}function Xt(e,t,n){t===`number`&&Gt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qt(e,t,n){if(t!=null&&(t=``+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Bt(n)}function $t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(le(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Bt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ut(e)}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function nn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||tn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function rn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&nn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&nn(e,o,t[o])}function an(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var on=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cn(e){return sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function ln(){}var un=null;function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,pn=null;function mn(e){var t=Tt(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Jt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+qt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[gt]||null;if(!a)throw Error(i(90));Jt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Wt(r)}break a;case`textarea`:Qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}}}var hn=!1;function gn(e,t,n){if(hn)return e(t,n);hn=!0;try{return e(t)}finally{if(hn=!1,(fn!==null||pn!==null)&&(vu(),fn&&(t=fn,e=pn,pn=fn=null,mn(t),e)))for(t=0;t<e.length;t++)mn(e[t])}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=n[gt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var vn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),yn=!1;if(vn)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){yn=!0}}),window.addEventListener(`test`,bn,bn),window.removeEventListener(`test`,bn,bn)}catch{yn=!1}var xn=null,Sn=null,Cn=null;function wn(){if(Cn)return Cn;var e,t=Sn,n=t.length,r,i=`value`in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Cn=i.slice(e,1<r?1-r:void 0)}function Tn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Dn(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?En:Dn,this.isPropagationStopped=Dn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),jn=h({},kn,{view:0,detail:0}),Mn=On(jn),Nn,Pn,Fn,In=h({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Fn&&(Fn&&e.type===`mousemove`?(Nn=e.screenX-Fn.screenX,Pn=e.screenY-Fn.screenY):Pn=Nn=0,Fn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:Pn}}),Ln=On(In),Rn=On(h({},In,{dataTransfer:0})),zn=On(h({},jn,{relatedTarget:0})),Bn=On(h({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Vn=On(h({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Hn=On(h({},kn,{data:0})),Un={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Wn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Gn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gn[e])?!!t[e]:!1}function qn(){return Kn}var Jn=On(h({},jn,{key:function(e){if(e.key){var t=Un[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Tn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Wn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(e){return e.type===`keypress`?Tn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Tn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),A=On(h({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Yn=On(h({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn})),Xn=On(h({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Zn=On(h({},In,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Qn=On(h({},kn,{newState:0,oldState:0})),$n=[9,13,27,32],er=vn&&`CompositionEvent`in window,tr=null;vn&&`documentMode`in document&&(tr=document.documentMode);var nr=vn&&`TextEvent`in window&&!tr,rr=vn&&(!er||tr&&8<tr&&11>=tr),ir=` `,ar=!1;function or(e,t){switch(e){case`keyup`:return $n.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var cr=!1;function lr(e,t){switch(e){case`compositionend`:return sr(t);case`keypress`:return t.which===32?(ar=!0,ir):null;case`textInput`:return e=t.data,e===ir&&ar?null:e;default:return null}}function ur(e,t){if(cr)return e===`compositionend`||!er&&or(e,t)?(e=wn(),Cn=Sn=xn=null,cr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return rr&&t.locale!==`ko`?null:t.data;default:return null}}var dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!dr[e.type]:t===`textarea`}function pr(e,t,n,r){fn?pn?pn.push(r):pn=[r]:fn=r,t=Td(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var mr=null,j=null;function hr(e){vd(e,0)}function gr(e){if(Wt(Et(e)))return e}function _r(e,t){if(e===`change`)return t}var vr=!1;if(vn){var yr;if(vn){var br=`oninput`in document;if(!br){var xr=document.createElement(`div`);xr.setAttribute(`oninput`,`return;`),br=typeof xr.oninput==`function`}yr=br}else yr=!1;vr=yr&&(!document.documentMode||9<document.documentMode)}function Sr(){mr&&(mr.detachEvent(`onpropertychange`,Cr),j=mr=null)}function Cr(e){if(e.propertyName===`value`&&gr(j)){var t=[];pr(t,j,e,dn(e)),gn(hr,t)}}function wr(e,t,n){e===`focusin`?(Sr(),mr=t,j=n,mr.attachEvent(`onpropertychange`,Cr)):e===`focusout`&&Sr()}function Tr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return gr(j)}function Er(e,t){if(e===`click`)return gr(t)}function Dr(e,t){if(e===`input`||e===`change`)return gr(t)}function Or(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var kr=typeof Object.is==`function`?Object.is:Or;function Ar(e,t){if(kr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ae.call(t,i)||!kr(e[i],t[i]))return!1}return!0}function jr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mr(e,t){var n=jr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=jr(n)}}function Nr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gt(e.document)}return t}function Fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Ir=vn&&`documentMode`in document&&11>=document.documentMode,Lr=null,Rr=null,zr=null,Br=!1;function M(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Br||Lr==null||Lr!==Gt(r)||(r=Lr,`selectionStart`in r&&Fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&Ar(zr,r)||(zr=r,r=Td(Rr,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Lr)))}function N(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var P={animationend:N(`Animation`,`AnimationEnd`),animationiteration:N(`Animation`,`AnimationIteration`),animationstart:N(`Animation`,`AnimationStart`),transitionrun:N(`Transition`,`TransitionRun`),transitionstart:N(`Transition`,`TransitionStart`),transitioncancel:N(`Transition`,`TransitionCancel`),transitionend:N(`Transition`,`TransitionEnd`)},F={},I={};vn&&(I=document.createElement(`div`).style,`AnimationEvent`in window||(delete P.animationend.animation,delete P.animationiteration.animation,delete P.animationstart.animation),`TransitionEvent`in window||delete P.transitionend.transition);function L(e){if(F[e])return F[e];if(!P[e])return e;var t=P[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in I)return F[e]=t[n];return e}var R=L(`animationend`),Vr=L(`animationiteration`),z=L(`animationstart`),B=L(`transitionrun`),Hr=L(`transitionstart`),V=L(`transitioncancel`),Ur=L(`transitionend`),Wr=new Map,Gr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Gr.push(`scrollEnd`);function Kr(e,t){Wr.set(e,t),jt(t,[e])}var qr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},H=[],Jr=0,Yr=0;function U(){for(var e=Jr,t=Yr=Jr=0;t<e;){var n=H[t];H[t++]=null;var r=H[t];H[t++]=null;var i=H[t];H[t++]=null;var a=H[t];if(H[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Qr(n,i,a)}}function Xr(e,t,n,r){H[Jr++]=e,H[Jr++]=t,H[Jr++]=n,H[Jr++]=r,Yr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Zr(e,t,n,r){return Xr(e,t,n,r),$r(e)}function W(e,t){return Xr(e,null,null,t),$r(e)}function Qr(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-qe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function $r(e){if(50<lu)throw lu=0,uu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ei={};function ti(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(e,t,n,r){return new ti(e,t,n,r)}function ri(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ii(e,t){var n=e.alternate;return n===null?(n=ni(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ai(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function oi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ri(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=ni(31,n,t,a),e.elementType=ie,e.lanes=o,e;case y:return si(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=ni(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=ni(13,n,t,a),e.elementType=ee,e.lanes=o,e;case te:return e=ni(19,n,t,a),e.elementType=te,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ne:s=14;break a;case re:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ni(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function si(e,t,n,r){return e=ni(7,e,r,t),e.lanes=n,e}function ci(e,t,n){return e=ni(6,e,null,t),e.lanes=n,e}function li(e){var t=ni(18,null,null,0);return t.stateNode=e,t}function ui(e,t,n){return t=ni(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var di=new WeakMap;function fi(e,t){if(typeof e==`object`&&e){var n=di.get(e);return n===void 0?(t={value:e,source:t,stack:ke(t)},di.set(e,t),t):n}return{value:e,source:t,stack:ke(t)}}var pi=[],G=0,K=null,mi=0,hi=[],gi=0,_i=null,vi=1,yi=``;function bi(e,t){pi[G++]=mi,pi[G++]=K,K=e,mi=t}function xi(e,t,n){hi[gi++]=vi,hi[gi++]=yi,hi[gi++]=_i,_i=e;var r=vi;e=yi;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var a=32-qe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,vi=1<<32-qe(t)+i|n<<i|r,yi=a+e}else vi=1<<a|n<<i|r,yi=e}function Si(e){e.return!==null&&(bi(e,1),xi(e,1,0))}function Ci(e){for(;e===K;)K=pi[--G],pi[G]=null,mi=pi[--G],pi[G]=null;for(;e===_i;)_i=hi[--gi],hi[gi]=null,yi=hi[--gi],hi[gi]=null,vi=hi[--gi],hi[gi]=null}function wi(e,t){hi[gi++]=vi,hi[gi++]=yi,hi[gi++]=_i,vi=t.id,yi=t.overflow,_i=e}var Ti=null,Ei=null,q=!1,Di=null,Oi=!1,ki=Error(i(519));function Ai(e){throw Ii(fi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),ki}function ji(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ht]=e,t[gt]=r,n){case`dialog`:$(`cancel`,t),$(`close`,t);break;case`iframe`:case`object`:case`embed`:$(`load`,t);break;case`video`:case`audio`:for(n=0;n<gd.length;n++)$(gd[n],t);break;case`source`:$(`error`,t);break;case`img`:case`image`:case`link`:$(`error`,t),$(`load`,t);break;case`details`:$(`toggle`,t);break;case`input`:$(`invalid`,t),Yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:$(`invalid`,t);break;case`textarea`:$(`invalid`,t),$t(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||jd(t.textContent,n)?(r.popover!=null&&($(`beforetoggle`,t),$(`toggle`,t)),r.onScroll!=null&&$(`scroll`,t),r.onScrollEnd!=null&&$(`scrollend`,t),r.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||Ai(e,!0)}function Mi(e){for(Ti=e.return;Ti;)switch(Ti.tag){case 5:case 31:case 13:Oi=!1;return;case 27:case 3:Oi=!0;return;default:Ti=Ti.return}}function Ni(e){if(e!==Ti)return!1;if(!q)return Mi(e),q=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&Ei&&Ai(e),Mi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ei=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ei=uf(e)}else t===27?(t=Ei,Zd(e.type)?(e=lf,lf=null,Ei=e):Ei=t):Ei=Ti?cf(e.stateNode.nextSibling):null;return!0}function Pi(){Ei=Ti=null,q=!1}function Fi(){var e=Di;return e!==null&&(Yl===null?Yl=e:Yl.push.apply(Yl,e),Di=null),e}function Ii(e){Di===null?Di=[e]:Di.push(e)}var Li=pe(null),Ri=null,zi=null;function Bi(e,t,n){O(Li,t._currentValue),t._currentValue=n}function Vi(e){e._currentValue=Li.current,me(Li)}function Hi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Ui(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Hi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Hi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Wi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;kr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ve.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Ui(t,e,n,r),t.flags|=262144}function Gi(e){for(e=e.firstContext;e!==null;){if(!kr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ki(e){Ri=e,zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function qi(e){return Yi(Ri,e)}function Ji(e,t){return Ri===null&&Ki(e),Yi(e,t)}function Yi(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},zi===null){if(e===null)throw Error(i(308));zi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else zi=zi.next=t;return n}var Xi=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Zi=t.unstable_scheduleCallback,Qi=t.unstable_NormalPriority,$i={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ea(){return{controller:new Xi,data:new Map,refCount:0}}function ta(e){e.refCount--,e.refCount===0&&Zi(Qi,function(){e.controller.abort()})}var na=null,ra=0,ia=0,aa=null;function oa(e,t){if(na===null){var n=na=[];ra=0,ia=ud(),aa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ra++,t.then(sa,sa),t}function sa(){if(--ra===0&&na!==null){aa!==null&&(aa.status=`fulfilled`);var e=na;na=null,ia=0,aa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ca(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var la=E.S;E.S=function(e,t){Ql=Fe(),typeof t==`object`&&t&&typeof t.then==`function`&&oa(e,t),la!==null&&la(e,t)};var ua=pe(null);function da(){var e=ua.current;return e===null?Fl.pooledCache:e}function fa(e,t){t===null?O(ua,ua.current):O(ua,t.pool)}function pa(){var e=da();return e===null?null:{parent:$i._currentValue,pool:e}}var ma=Error(i(460)),ha=Error(i(474)),ga=Error(i(542)),_a={then:function(){}};function va(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ya(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ca(e),e;default:if(typeof t.status==`string`)t.then(ln,ln);else{if(e=Fl,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ca(e),e}throw xa=t,ma}}function ba(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(xa=e,ma):e}}var xa=null;function Sa(){if(xa===null)throw Error(i(459));var e=xa;return xa=null,e}function Ca(e){if(e===ma||e===ga)throw Error(i(483))}var wa=null,Ta=0;function Ea(e){var t=Ta;return Ta+=1,wa===null&&(wa=[]),ya(wa,e,t)}function Da(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Oa(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function ka(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=ii(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=ci(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===re&&ba(i)===t.type)?(t=a(t,n.props),Da(t,n),t.return=e,t):(t=oi(n.type,n.key,n.props,null,e.mode,r),Da(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=ui(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=si(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=ci(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=oi(t.type,t.key,t.props,null,e.mode,n),Da(n,t),n.return=e,n;case v:return t=ui(t,e.mode,n),t.return=e,t;case re:return t=ba(t),f(e,t,n)}if(le(t)||se(t))return t=si(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ea(t),n);if(t.$$typeof===C)return f(e,Ji(e,t),n);Oa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case re:return n=ba(n),p(e,t,n,r)}if(le(n)||se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ea(n),r);if(n.$$typeof===C)return p(e,t,Ji(e,n),r);Oa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case re:return r=ba(r),m(e,t,n,r,i)}if(le(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ea(r),i);if(r.$$typeof===C)return m(e,t,n,Ji(t,r),i);Oa(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),q&&bi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return q&&bi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),q&&bi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),q&&bi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return q&&bi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),q&&bi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===re&&ba(l)===r.type){n(e,r.sibling),c=a(r,o.props),Da(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=si(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=oi(o.type,o.key,o.props,null,e.mode,c),Da(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=ui(o,e.mode,c),c.return=e,e=c}return s(e);case re:return o=ba(o),b(e,r,o,c)}if(le(o))return h(e,r,o,c);if(se(o)){if(l=se(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ea(o),c);if(o.$$typeof===C)return b(e,r,Ji(e,o),c);Oa(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=ci(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ta=0;var i=b(e,t,n,r);return wa=null,i}catch(t){if(t===ma||t===ga)throw t;var a=ni(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Aa=ka(!0),ja=ka(!1),Ma=!1;function Na(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Fa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ia(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=$r(e),Qr(e,null,n),t}return Xr(e,r,t,n),$r(e)}function La(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}function Ra(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var za=!1;function Ba(){if(za){var e=aa;if(e!==null)throw e}}function Va(e,t,n,r){za=!1;var i=e.updateQueue;Ma=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Q&f)===f:(r&f)===f){f!==0&&f===ia&&(za=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ma=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Ul|=o,e.lanes=o,e.memoizedState=d}}function Ha(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Ua(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ha(n[e],t)}var Wa=pe(null),Ga=pe(0);function Ka(e,t){e=Vl,O(Ga,e),O(Wa,t),Vl=e|t.baseLanes}function qa(){O(Ga,Vl),O(Wa,Wa.current)}function Ja(){Vl=Ga.current,me(Wa),me(Ga)}var Ya=pe(null),Xa=null;function Za(e){var t=e.alternate;O(no,no.current&1),O(Ya,e),Xa===null&&(t===null||Wa.current!==null||t.memoizedState!==null)&&(Xa=e)}function Qa(e){O(no,no.current),O(Ya,e),Xa===null&&(Xa=e)}function $a(e){e.tag===22?(O(no,no.current),O(Ya,e),Xa===null&&(Xa=e)):eo(e)}function eo(){O(no,no.current),O(Ya,Ya.current)}function to(e){me(Ya),Xa===e&&(Xa=null),me(no)}var no=pe(0);function ro(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var io=0,J=null,Y=null,ao=null,oo=!1,so=!1,co=!1,lo=0,uo=0,fo=null,po=0;function mo(){throw Error(i(321))}function ho(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kr(e[n],t[n]))return!1;return!0}function go(e,t,n,r,i,a){return io=a,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Ns:Ps,co=!1,a=n(r,i),co=!1,so&&(a=vo(t,n,r,i)),_o(e),a}function _o(e){E.H=Ms;var t=Y!==null&&Y.next!==null;if(io=0,ao=Y=J=null,oo=!1,uo=0,fo=null,t)throw Error(i(300));e===null||Zs||(e=e.dependencies,e!==null&&Gi(e)&&(Zs=!0))}function vo(e,t,n,r){J=e;var a=0;do{if(so&&(fo=null),uo=0,so=!1,25<=a)throw Error(i(301));if(a+=1,ao=Y=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}E.H=Fs,o=t(n,r)}while(so);return o}function yo(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?Eo(t):t,e=e.useState()[0],(Y===null?null:Y.memoizedState)!==e&&(J.flags|=1024),t}function bo(){var e=lo!==0;return lo=0,e}function xo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function So(e){if(oo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}oo=!1}io=0,ao=Y=J=null,so=!1,uo=lo=0,fo=null}function Co(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ao===null?J.memoizedState=ao=e:ao=ao.next=e,ao}function wo(){if(Y===null){var e=J.alternate;e=e===null?null:e.memoizedState}else e=Y.next;var t=ao===null?J.memoizedState:ao.next;if(t!==null)ao=t,Y=e;else{if(e===null)throw J.alternate===null?Error(i(467)):Error(i(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},ao===null?J.memoizedState=ao=e:ao=ao.next=e}return ao}function To(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eo(e){var t=uo;return uo+=1,fo===null&&(fo=[]),e=ya(fo,e,t),t=J,(ao===null?t.memoizedState:ao.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Ns:Ps),e}function Do(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Eo(e);if(e.$$typeof===C)return qi(e)}throw Error(i(438,String(e)))}function Oo(e){var t=null,n=J.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=J.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=To(),J.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ae;return t.index++,n}function ko(e,t){return typeof t==`function`?t(e):t}function Ao(e){return jo(wo(),Y,e)}function jo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(io&f)===f:(Q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ia&&(d=!0);else if((io&p)===p){u=u.next,p===ia&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,J.lanes|=p,Ul|=p;f=u.action,co&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,J.lanes|=f,Ul|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!kr(o,e.memoizedState)&&(Zs=!0,d&&(n=aa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Mo(e){var t=wo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);kr(o,t.memoizedState)||(Zs=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function No(e,t,n){var r=J,a=wo(),o=q;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!kr((Y||a).memoizedState,n);if(s&&(a.memoizedState=n,Zs=!0),a=a.queue,is(Io.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||ao!==null&&ao.memoizedState.tag&1){if(r.flags|=2048,$o(9,{destroy:void 0},Fo.bind(null,r,a,n,t),null),Fl===null)throw Error(i(349));o||io&127||Po(r,t,n)}return n}function Po(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t=To(),J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fo(e,t,n,r){t.value=n,t.getSnapshot=r,Lo(t)&&Ro(e)}function Io(e,t,n){return n(function(){Lo(t)&&Ro(e)})}function Lo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kr(e,n)}catch{return!0}}function Ro(e){var t=W(e,2);t!==null&&pu(t,e,2)}function zo(e){var t=Co();if(typeof e==`function`){var n=e;if(e=n(),co){Ke(!0);try{n()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:e},t}function Bo(e,t,n,r){return e.baseState=n,jo(e,Y,typeof r==`function`?r:ko)}function Vo(e,t,n,r,a){if(ks(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};E.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Ho(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ho(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),Uo(e,t,s)}catch(n){Go(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),Uo(e,t,a)}catch(n){Go(e,t,n)}}function Uo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Wo(e,t,n)},function(n){return Go(e,t,n)}):Wo(e,t,n)}function Wo(e,t,n){t.status=`fulfilled`,t.value=n,Ko(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ho(e,n)))}function Go(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Ko(t),t=t.next;while(t!==r)}e.action=null}function Ko(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function qo(e,t){return t}function Jo(e,t){if(q){var n=Fl.formState;if(n!==null){a:{var r=J;if(q){if(Ei){b:{for(var i=Ei,a=Oi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Ei=cf(i.nextSibling),r=i.data===`F!`;break a}}Ai(r)}r=!1}r&&(t=n[0])}}return n=Co(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:t},n.queue=r,n=Es.bind(null,J,r),r.dispatch=n,r=zo(!1),a=Os.bind(null,J,!1,r.queue),r=Co(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Vo.bind(null,J,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Yo(e){return Xo(wo(),Y,e)}function Xo(e,t,n){if(t=jo(e,t,qo)[0],e=Ao(ko)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Eo(t)}catch(e){throw e===ma?ga:e}else r=t;t=wo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(J.flags|=2048,$o(9,{destroy:void 0},Zo.bind(null,i,n),null)),[r,a,e]}function Zo(e,t){e.action=t}function Qo(e){var t=wo(),n=Y;if(n!==null)return Xo(t,n,e);wo(),t=t.memoizedState,n=wo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function $o(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=J.updateQueue,t===null&&(t=To(),J.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function es(){return wo().memoizedState}function ts(e,t,n,r){var i=Co();J.flags|=e,i.memoizedState=$o(1|t,{destroy:void 0},n,r===void 0?null:r)}function ns(e,t,n,r){var i=wo();r=r===void 0?null:r;var a=i.memoizedState.inst;Y!==null&&r!==null&&ho(r,Y.memoizedState.deps)?i.memoizedState=$o(t,a,n,r):(J.flags|=e,i.memoizedState=$o(1|t,a,n,r))}function rs(e,t){ts(8390656,8,e,t)}function is(e,t){ns(2048,8,e,t)}function as(e){J.flags|=4;var t=J.updateQueue;if(t===null)t=To(),J.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function os(e){var t=wo().memoizedState;return as({ref:t,nextImpl:e}),function(){if(X&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ss(e,t){return ns(4,2,e,t)}function cs(e,t){return ns(4,4,e,t)}function ls(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function us(e,t,n){n=n==null?null:n.concat([e]),ns(4,4,ls.bind(null,t,e),n)}function ds(){}function fs(e,t){var n=wo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&ho(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ps(e,t){var n=wo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&ho(t,r[1]))return r[0];if(r=e(),co){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r}function ms(e,t,n){return n===void 0||io&1073741824&&!(Q&261930)?e.memoizedState=t:(e.memoizedState=n,e=fu(),J.lanes|=e,Ul|=e,n)}function hs(e,t,n,r){return kr(n,t)?n:Wa.current===null?!(io&42)||io&1073741824&&!(Q&261930)?(Zs=!0,e.memoizedState=n):(e=fu(),J.lanes|=e,Ul|=e,t):(e=ms(e,n,r),kr(e,t)||(Zs=!0),e)}function gs(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,Os(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ds(e,t,ca(c,r),du(e)):Ds(e,t,r,du(e))}catch(n){Ds(e,t,{then:function(){},status:`rejected`,reason:n},du())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function _s(){}function vs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ys(e).queue;gs(e,a,t,ue,n===null?_s:function(){return bs(e),n(r)})}function ys(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function bs(e){var t=ys(e);t.next===null&&(t=e.alternate.memoizedState),Ds(e,t.next.queue,{},du())}function xs(){return qi(Qf)}function Ss(){return wo().memoizedState}function Cs(){return wo().memoizedState}function ws(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=du();e=Fa(n);var r=Ia(t,e,n);r!==null&&(pu(r,t,n),La(r,t,n)),t={cache:ea()},e.payload=t;return}t=t.return}}function Ts(e,t,n){var r=du();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ks(e)?As(t,n):(n=Zr(e,t,n,r),n!==null&&(pu(n,e,r),js(n,t,r)))}function Es(e,t,n){Ds(e,t,n,du())}function Ds(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ks(e))As(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,kr(s,o))return Xr(e,t,i,0),Fl===null&&U(),!1}catch{}if(n=Zr(e,t,i,r),n!==null)return pu(n,e,r),js(n,t,r),!0}return!1}function Os(e,t,n,r){if(r={lane:2,revertLane:ud(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ks(e)){if(t)throw Error(i(479))}else t=Zr(e,n,r,2),t!==null&&pu(t,e,2)}function ks(e){var t=e.alternate;return e===J||t!==null&&t===J}function As(e,t){so=oo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function js(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}var Ms={readContext:qi,use:Do,useCallback:mo,useContext:mo,useEffect:mo,useImperativeHandle:mo,useLayoutEffect:mo,useInsertionEffect:mo,useMemo:mo,useReducer:mo,useRef:mo,useState:mo,useDebugValue:mo,useDeferredValue:mo,useTransition:mo,useSyncExternalStore:mo,useId:mo,useHostTransitionStatus:mo,useFormState:mo,useActionState:mo,useOptimistic:mo,useMemoCache:mo,useCacheRefresh:mo};Ms.useEffectEvent=mo;var Ns={readContext:qi,use:Do,useCallback:function(e,t){return Co().memoizedState=[e,t===void 0?null:t],e},useContext:qi,useEffect:rs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ts(4194308,4,ls.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ts(4194308,4,e,t)},useInsertionEffect:function(e,t){ts(4,2,e,t)},useMemo:function(e,t){var n=Co();t=t===void 0?null:t;var r=e();if(co){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Co();if(n!==void 0){var i=n(t);if(co){Ke(!0);try{n(t)}finally{Ke(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ts.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=Co();return e={current:e},t.memoizedState=e},useState:function(e){e=zo(e);var t=e.queue,n=Es.bind(null,J,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ds,useDeferredValue:function(e,t){return ms(Co(),e,t)},useTransition:function(){var e=zo(!1);return e=gs.bind(null,J,e.queue,!0,!1),Co().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=J,a=Co();if(q){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Fl===null)throw Error(i(349));Q&127||Po(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,rs(Io.bind(null,r,o,e),[e]),r.flags|=2048,$o(9,{destroy:void 0},Fo.bind(null,r,o,n,t),null),n},useId:function(){var e=Co(),t=Fl.identifierPrefix;if(q){var n=yi,r=vi;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=lo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=po++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:xs,useFormState:Jo,useActionState:Jo,useOptimistic:function(e){var t=Co();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Os.bind(null,J,!0,n),n.dispatch=t,[e,t]},useMemoCache:Oo,useCacheRefresh:function(){return Co().memoizedState=ws.bind(null,J)},useEffectEvent:function(e){var t=Co(),n={impl:e};return t.memoizedState=n,function(){if(X&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Ps={readContext:qi,use:Do,useCallback:fs,useContext:qi,useEffect:is,useImperativeHandle:us,useInsertionEffect:ss,useLayoutEffect:cs,useMemo:ps,useReducer:Ao,useRef:es,useState:function(){return Ao(ko)},useDebugValue:ds,useDeferredValue:function(e,t){return hs(wo(),Y.memoizedState,e,t)},useTransition:function(){var e=Ao(ko)[0],t=wo().memoizedState;return[typeof e==`boolean`?e:Eo(e),t]},useSyncExternalStore:No,useId:Ss,useHostTransitionStatus:xs,useFormState:Yo,useActionState:Yo,useOptimistic:function(e,t){return Bo(wo(),Y,e,t)},useMemoCache:Oo,useCacheRefresh:Cs};Ps.useEffectEvent=os;var Fs={readContext:qi,use:Do,useCallback:fs,useContext:qi,useEffect:is,useImperativeHandle:us,useInsertionEffect:ss,useLayoutEffect:cs,useMemo:ps,useReducer:Mo,useRef:es,useState:function(){return Mo(ko)},useDebugValue:ds,useDeferredValue:function(e,t){var n=wo();return Y===null?ms(n,e,t):hs(n,Y.memoizedState,e,t)},useTransition:function(){var e=Mo(ko)[0],t=wo().memoizedState;return[typeof e==`boolean`?e:Eo(e),t]},useSyncExternalStore:No,useId:Ss,useHostTransitionStatus:xs,useFormState:Qo,useActionState:Qo,useOptimistic:function(e,t){var n=wo();return Y===null?(n.baseState=e,[e,n.queue.dispatch]):Bo(n,Y,e,t)},useMemoCache:Oo,useCacheRefresh:Cs};Fs.useEffectEvent=os;function Is(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ls={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=du(),i=Fa(r);i.payload=t,n!=null&&(i.callback=n),t=Ia(e,i,r),t!==null&&(pu(t,e,r),La(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=du(),i=Fa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ia(e,i,r),t!==null&&(pu(t,e,r),La(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=du(),r=Fa(n);r.tag=2,t!=null&&(r.callback=t),t=Ia(e,r,n),t!==null&&(pu(t,e,n),La(t,e,n))}};function Rs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(i,a):!0}function zs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ls.enqueueReplaceState(t,t.state,null)}function Bs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Vs(e){qr(e)}function Hs(e){console.error(e)}function Us(e){qr(e)}function Ws(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Gs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Ks(e,t,n){return n=Fa(n),n.tag=3,n.payload={element:null},n.callback=function(){Ws(e,t)},n}function qs(e){return e=Fa(e),e.tag=3,e}function Js(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Gs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Gs(t,n,r),typeof i!=`function`&&(tu===null?tu=new Set([this]):tu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Ys(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Wi(t,n,a,!0),n=Ya.current,n!==null){switch(n.tag){case 31:case 13:return Xa===null?Tu():n.alternate===null&&Hl===0&&(Hl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===_a?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Wu(e,r,a)),!1;case 22:return n.flags|=65536,r===_a?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Wu(e,r,a)),!1}throw Error(i(435,n.tag))}return Wu(e,r,a),Tu(),!1}if(q)return t=Ya.current,t===null?(r!==ki&&(t=Error(i(423),{cause:r}),Ii(fi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=fi(r,n),a=Ks(e.stateNode,r,a),Ra(e,a),Hl!==4&&(Hl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==ki&&(e=Error(i(422),{cause:r}),Ii(fi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=fi(o,n),Jl===null?Jl=[o]:Jl.push(o),Hl!==4&&(Hl=2),t===null)return!0;r=fi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Ks(n.stateNode,r,e),Ra(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(tu===null||!tu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=qs(a),Js(a,e,n,r),Ra(n,a),!1}n=n.return}while(n!==null);return!1}var Xs=Error(i(461)),Zs=!1;function Qs(e,t,n,r){t.child=e===null?ja(t,null,n,r):Aa(t,e.child,n,r)}function $s(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Ki(t),r=go(e,t,n,o,a,i),s=bo(),e!==null&&!Zs?(xo(e,t,i),Cc(e,t,i)):(q&&s&&Si(t),t.flags|=1,Qs(e,t,r,i),t.child)}function ec(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ri(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,tc(e,t,a,r,i)):(e=oi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!wc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Ar:n,n(o,r)&&e.ref===t.ref)return Cc(e,t,i)}return t.flags|=1,e=ii(a,r),e.ref=t.ref,e.return=t,t.child=e}function tc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ar(a,r)&&e.ref===t.ref){if(Zs=!1,t.pendingProps=r=a,wc(e,i))e.flags&131072&&(Zs=!0);else return t.lanes=e.lanes,Cc(e,t,i)}}return lc(e,t,n,r,i)}function nc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return ic(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&fa(t,a===null?null:a.cachePool),a===null?qa():Ka(t,a),$a(t);else return r=t.lanes=536870912,ic(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&fa(t,null),qa(),eo(t)):(fa(t,a.cachePool),Ka(t,a),eo(t),t.memoizedState=null);return Qs(e,t,i,n),t.child}function rc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ic(e,t,n,r,i){var a=da();return a=a===null?null:{parent:$i._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&fa(t,null),qa(),$a(t),e!==null&&Wi(e,t,r,!0),t.childLanes=i,null}function ac(e,t){return t=vc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function oc(e,t,n){return Aa(t,e.child,null,n),e=ac(t,t.pendingProps),e.flags|=2,to(t),t.memoizedState=null,e}function sc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(q){if(r.mode===`hidden`)return e=ac(t,r),t.lanes=536870912,rc(null,e);if(Qa(t),(e=Ei)?(e=rf(e,Oi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_i===null?null:{id:vi,overflow:yi},retryLane:536870912,hydrationErrors:null},n=li(e),n.return=t,t.child=n,Ti=t,Ei=null)):e=null,e===null)throw Ai(t);return t.lanes=536870912,null}return ac(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Qa(t),a){if(t.flags&256)t.flags&=-257,t=oc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Zs||Wi(e,t,n,!1),a=(n&e.childLanes)!==0,Zs||a){if(r=Fl,r!==null&&(s=lt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,W(e,s),pu(r,e,s),Xs;Tu(),t=oc(e,t,n)}else e=o.treeContext,Ei=cf(s.nextSibling),Ti=t,q=!0,Di=null,Oi=!1,e!==null&&wi(t,e),t=ac(t,r),t.flags|=4096;return t}return e=ii(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function cc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function lc(e,t,n,r,i){return Ki(t),n=go(e,t,n,r,void 0,i),r=bo(),e!==null&&!Zs?(xo(e,t,i),Cc(e,t,i)):(q&&r&&Si(t),t.flags|=1,Qs(e,t,n,i),t.child)}function uc(e,t,n,r,i,a){return Ki(t),t.updateQueue=null,n=vo(t,r,n,i),_o(e),r=bo(),e!==null&&!Zs?(xo(e,t,a),Cc(e,t,a)):(q&&r&&Si(t),t.flags|=1,Qs(e,t,n,a),t.child)}function dc(e,t,n,r,i){if(Ki(t),t.stateNode===null){var a=ei,o=n.contextType;typeof o==`object`&&o&&(a=qi(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ls,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Na(t),o=n.contextType,a.context=typeof o==`object`&&o?qi(o):ei,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Is(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ls.enqueueReplaceState(a,a.state,null),Va(t,r,a,i),Ba(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Bs(n,s);a.props=c;var l=a.context,u=n.contextType;o=ei,typeof u==`object`&&u&&(o=qi(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&zs(t,a,r,o),Ma=!1;var f=t.memoizedState;a.state=f,Va(t,r,a,i),Ba(),l=t.memoizedState,s||f!==l||Ma?(typeof d==`function`&&(Is(t,n,d,r),l=t.memoizedState),(c=Ma||Rs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Pa(e,t),o=t.memoizedProps,u=Bs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ei,typeof l==`object`&&l&&(c=qi(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&zs(t,a,r,c),Ma=!1,f=t.memoizedState,a.state=f,Va(t,r,a,i),Ba();var p=t.memoizedState;o!==d||f!==p||Ma||e!==null&&e.dependencies!==null&&Gi(e.dependencies)?(typeof s==`function`&&(Is(t,n,s,r),p=t.memoizedState),(u=Ma||Rs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Gi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,cc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Aa(t,e.child,null,i),t.child=Aa(t,null,n,i)):Qs(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Cc(e,t,i),e}function fc(e,t,n,r){return Pi(),t.flags|=256,Qs(e,t,n,r),t.child}var pc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mc(e){return{baseLanes:e,cachePool:pa()}}function hc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Kl),e}function gc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(no.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(q){if(a?Za(t):eo(t),(e=Ei)?(e=rf(e,Oi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_i===null?null:{id:vi,overflow:yi},retryLane:536870912,hydrationErrors:null},n=li(e),n.return=t,t.child=n,Ti=t,Ei=null)):e=null,e===null)throw Ai(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(eo(t),a=t.mode,c=vc({mode:`hidden`,children:c},a),r=si(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=mc(n),r.childLanes=hc(e,s,n),t.memoizedState=pc,rc(null,r)):(Za(t),_c(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(Za(t),t.flags&=-257,t=yc(e,t,n)):t.memoizedState===null?(eo(t),c=r.fallback,a=t.mode,r=vc({mode:`visible`,children:r.children},a),c=si(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Aa(t,e.child,null,n),r=t.child,r.memoizedState=mc(n),r.childLanes=hc(e,s,n),t.memoizedState=pc,t=rc(null,r)):(eo(t),t.child=e.child,t.flags|=128,t=null);else if(Za(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ii({value:r,source:null,stack:null}),t=yc(e,t,n)}else if(Zs||Wi(e,t,n,!1),s=(n&e.childLanes)!==0,Zs||s){if(s=Fl,s!==null&&(r=lt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,W(e,r),pu(s,e,r),Xs;af(c)||Tu(),t=yc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ei=cf(c.nextSibling),Ti=t,q=!0,Di=null,Oi=!1,e!==null&&wi(t,e),t=_c(t,r.children),t.flags|=4096);return t}return a?(eo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=ii(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=si(c,a,n,null),c.flags|=2):c=ii(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,rc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=mc(n):(a=c.cachePool,a===null?a=pa():(l=$i._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=hc(e,s,n),t.memoizedState=pc,rc(e.child,r)):(Za(t),n=e.child,e=n.sibling,n=ii(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function _c(e,t){return t=vc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function vc(e,t){return e=ni(22,e,null,t),e.lanes=0,e}function yc(e,t,n){return Aa(t,e.child,null,n),e=_c(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Hi(e.return,t,n)}function xc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Sc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=no.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,O(no,o),Qs(e,t,r,n),r=q?mi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bc(e,n,t);else if(e.tag===19)bc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ro(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),xc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ro(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}xc(t,!0,n,null,a,r);break;case`together`:xc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Cc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ul|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Wi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=ii(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ii(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Gi(e)))}function Tc(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),Bi(t,$i,e.memoizedState.cache),Pi();break;case 27:case 5:xe(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:Bi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Qa(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(Za(t),e=Cc(e,t,n),e===null?null:e.sibling):gc(e,t,n):(Za(t),t.flags|=128,null);Za(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(Wi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Sc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(no,no.current),r)break;return null;case 22:return t.lanes=0,nc(e,t,n,t.pendingProps);case 24:Bi(t,$i,e.memoizedState.cache)}return Cc(e,t,n)}function Ec(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Zs=!0;else{if(!wc(e,n)&&!(t.flags&128))return Zs=!1,Tc(e,t,n);Zs=!!(e.flags&131072)}}else Zs=!1,q&&t.flags&1048576&&xi(t,mi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ba(t.elementType),t.type=e,typeof e==`function`)ri(e)?(r=Bs(e,r),t.tag=1,t=dc(null,t,e,r,n)):(t.tag=0,t=lc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=$s(null,t,e,r,n);break a}if(a===ne){t.tag=14,t=ec(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(i(306,t,``))}}return t;case 0:return lc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Bs(r,t.pendingProps),dc(e,t,r,a,n);case 3:a:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Pa(e,t),Va(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Bi(t,$i,r),r!==o.cache&&Ui(t,[$i],n,!0),Ba(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=fc(e,t,r,n);break a}if(r!==a){a=fi(Error(i(424)),t),Ii(a),t=fc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Ei=cf(e.firstChild),Ti=t,q=!0,Di=null,Oi=!0,n=ja(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Pi(),r===a){t=Cc(e,t,n);break a}Qs(e,t,r,n)}t=t.child}return t;case 26:return cc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:q||(n=t.type,e=t.pendingProps,r=Bd(_e.current).createElement(n),r[ht]=t,r[gt]=e,Pd(r,n,e),Ot(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&q&&(r=t.stateNode=ff(t.type,t.pendingProps,_e.current),Ti=t,Oi=!0,a=Ei,Zd(t.type)?(lf=a,Ei=cf(r.firstChild)):Ei=a),Qs(e,t,t.pendingProps.children,n),cc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&q&&((a=r=Ei)&&(r=tf(r,t.type,t.pendingProps,Oi),r===null?a=!1:(t.stateNode=r,Ti=t,Ei=cf(r.firstChild),Oi=!1,a=!0)),a||Ai(t)),xe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=go(e,t,yo,null,null,n),Qf._currentValue=a),cc(e,t),Qs(e,t,r,n),t.child;case 6:return e===null&&q&&((e=n=Ei)&&(n=nf(n,t.pendingProps,Oi),n===null?e=!1:(t.stateNode=n,Ti=t,Ei=null,e=!0)),e||Ai(t)),null;case 13:return gc(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Aa(t,null,r,n):Qs(e,t,r,n),t.child;case 11:return $s(e,t,t.type,t.pendingProps,n);case 7:return Qs(e,t,t.pendingProps,n),t.child;case 8:return Qs(e,t,t.pendingProps.children,n),t.child;case 12:return Qs(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Bi(t,t.type,r.value),Qs(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Ki(t),a=qi(a),r=r(a),t.flags|=1,Qs(e,t,r,n),t.child;case 14:return ec(e,t,t.type,t.pendingProps,n);case 15:return tc(e,t,t.type,t.pendingProps,n);case 19:return Sc(e,t,n);case 31:return sc(e,t,n);case 22:return nc(e,t,n,t.pendingProps);case 24:return Ki(t),r=qi($i),e===null?(a=da(),a===null&&(a=Fl,o=ea(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Na(t),Bi(t,$i,a)):((e.lanes&n)!==0&&(Pa(e,t),Va(t,null,null,n),Ba()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Bi(t,$i,r),r!==a.cache&&Ui(t,[$i],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Bi(t,$i,r))),Qs(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Dc(e){e.flags|=4}function Oc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Su())e.flags|=8192;else throw xa=_a,ha}}else e.flags&=-16777217}function kc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(Su())e.flags|=8192;else throw xa=_a,ha}}function Ac(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:rt(),e.lanes|=t,ql|=t)}function jc(e,t){if(!q)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Mc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Nc(e,t,n){var r=t.pendingProps;switch(Ci(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mc(t),null;case 1:return Mc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Vi($i),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ni(t)?Dc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Fi())),Mc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Dc(t),o===null?(Mc(t),Oc(t,a,null,r,n)):(Mc(t),kc(t,o))):o?o===e.memoizedState?(Mc(t),t.flags&=-16777217):(Dc(t),Mc(t),kc(t,o)):(e=e.memoizedProps,e!==r&&Dc(t),Mc(t),Oc(t,a,e,r,n)),null;case 27:if(Se(t),n=_e.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Dc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Mc(t),null}e=he.current,Ni(t)?ji(t,e):(e=ff(a,r,n),t.stateNode=e,Dc(t))}return Mc(t),null;case 5:if(Se(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Dc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Mc(t),null}if(o=he.current,Ni(t))ji(t,o);else{var s=Bd(_e.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ht]=t,o[gt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Dc(t)}}return Mc(t),Oc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Dc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=_e.current,Ni(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ti,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ht]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||jd(e.nodeValue,n)),e||Ai(t,!0)}else e=Bd(e).createTextNode(r),e[ht]=t,t.stateNode=e}return Mc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ni(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ht]=t}else Pi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Mc(t),e=!1}else n=Fi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(to(t),t):(to(t),null);if(t.flags&128)throw Error(i(558))}return Mc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ni(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ht]=t}else Pi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Mc(t),a=!1}else a=Fi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(to(t),t):(to(t),null)}return to(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ac(t,t.updateQueue),Mc(t),null);case 4:return be(),e===null&&xd(t.stateNode.containerInfo),Mc(t),null;case 10:return Vi(t.type),Mc(t),null;case 19:if(me(no),r=t.memoizedState,r===null)return Mc(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)jc(r,!1);else{if(Hl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ro(e),o!==null){for(t.flags|=128,jc(r,!1),e=o.updateQueue,t.updateQueue=e,Ac(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ai(n,e),n=n.sibling;return O(no,no.current&1|2),q&&bi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Fe()>$l&&(t.flags|=128,a=!0,jc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=ro(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ac(t,e),jc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!q)return Mc(t),null}else 2*Fe()-r.renderingStartTime>$l&&n!==536870912&&(t.flags|=128,a=!0,jc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Mc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Fe(),e.sibling=null,n=no.current,O(no,a?n&1|2:n&1),q&&bi(t,r.treeForkCount),e);case 22:case 23:return to(t),Ja(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Mc(t),t.subtreeFlags&6&&(t.flags|=8192)):Mc(t),n=t.updateQueue,n!==null&&Ac(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&me(ua),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Vi($i),Mc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Pc(e,t){switch(Ci(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vi($i),be(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Se(t),null;case 31:if(t.memoizedState!==null){if(to(t),t.alternate===null)throw Error(i(340));Pi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(to(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Pi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(no),null;case 4:return be(),null;case 10:return Vi(t.type),null;case 22:case 23:return to(t),Ja(),e!==null&&me(ua),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Vi($i),null;case 25:return null;default:return null}}function Fc(e,t){switch(Ci(t),t.tag){case 3:Vi($i),be();break;case 26:case 27:case 5:Se(t);break;case 4:be();break;case 31:t.memoizedState!==null&&to(t);break;case 13:to(t);break;case 19:me(no);break;case 10:Vi(t.type);break;case 22:case 23:to(t),Ja(),e!==null&&me(ua);break;case 24:Vi($i)}}function Ic(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Uu(t,t.return,e)}}function Lc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Uu(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Uu(t,t.return,e)}}function Rc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ua(t,n)}catch(t){Uu(e,e.return,t)}}}function zc(e,t,n){n.props=Bs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Uu(e,t,n)}}function Bc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Uu(e,t,n)}}function Vc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Uu(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Uu(e,t,n)}else n.current=null}}function Hc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Uu(e,e.return,t)}}function Uc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[gt]=t}catch(t){Uu(e,e.return,t)}}function Wc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Gc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Wc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Kc(e,t,n),e=e.sibling;e!==null;)Kc(e,t,n),e=e.sibling}function qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(qc(e,t,n),e=e.sibling;e!==null;)qc(e,t,n),e=e.sibling}function Jc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[ht]=e,t[gt]=n}catch(t){Uu(e,e.return,t)}}var Yc=!1,Xc=!1,Zc=!1,Qc=typeof WeakSet==`function`?WeakSet:Set,$c=null;function el(e,t){if(e=e.containerInfo,Rd=sp,e=Pr(e),Fr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,$c=t;$c!==null;)if(t=$c,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,$c=e;else for(;$c!==null;){switch(t=$c,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Bs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Uu(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,$c=e;break}$c=t.return}}function tl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:gl(e,n),r&4&&Ic(5,n);break;case 1:if(gl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Uu(n,n.return,e)}else{var i=Bs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Uu(n,n.return,e)}}}r&64&&Rc(n),r&512&&Bc(n,n.return);break;case 3:if(gl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ua(e,t)}catch(e){Uu(n,n.return,e)}}break;case 27:t===null&&r&4&&Jc(n);case 26:case 5:gl(e,n),t===null&&r&4&&Hc(n),r&512&&Bc(n,n.return);break;case 12:gl(e,n);break;case 31:gl(e,n),r&4&&sl(e,n);break;case 13:gl(e,n),r&4&&cl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=qu.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||Yc,!r){t=t!==null&&t.memoizedState!==null||Xc,i=Yc;var a=Xc;Yc=r,(Xc=t)&&!a?vl(e,n,!!(n.subtreeFlags&8772)):gl(e,n),Yc=i,Xc=a}break;case 30:break;default:gl(e,n)}}function nl(e){var t=e.alternate;t!==null&&(e.alternate=null,nl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ct(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var rl=null,il=!1;function al(e,t,n){for(n=n.child;n!==null;)ol(e,t,n),n=n.sibling}function ol(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount==`function`)try{Ge.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:Xc||Vc(n,t),al(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Xc||Vc(n,t);var r=rl,i=il;Zd(n.type)&&(rl=n.stateNode,il=!1),al(e,t,n),pf(n.stateNode),rl=r,il=i;break;case 5:Xc||Vc(n,t);case 6:if(r=rl,i=il,rl=null,al(e,t,n),rl=r,il=i,rl!==null){if(il)try{(rl.nodeType===9?rl.body:rl.nodeName===`HTML`?rl.ownerDocument.body:rl).removeChild(n.stateNode)}catch(e){Uu(n,t,e)}else try{rl.removeChild(n.stateNode)}catch(e){Uu(n,t,e)}}break;case 18:rl!==null&&(il?(e=rl,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(rl,n.stateNode));break;case 4:r=rl,i=il,rl=n.stateNode.containerInfo,il=!0,al(e,t,n),rl=r,il=i;break;case 0:case 11:case 14:case 15:Lc(2,n,t),Xc||Lc(4,n,t),al(e,t,n);break;case 1:Xc||(Vc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&zc(n,t,r)),al(e,t,n);break;case 21:al(e,t,n);break;case 22:Xc=(r=Xc)||n.memoizedState!==null,al(e,t,n),Xc=r;break;default:al(e,t,n)}}function sl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Uu(t,t.return,e)}}}function cl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Uu(t,t.return,e)}}function ll(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Qc),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Qc),t;default:throw Error(i(435,e.tag))}}function ul(e,t){var n=ll(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Ju.bind(null,e,t);t.then(r,r)}})}function dl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){rl=c.stateNode,il=!1;break a}break;case 5:rl=c.stateNode,il=!1;break a;case 3:case 4:rl=c.stateNode.containerInfo,il=!0;break a}c=c.return}if(rl===null)throw Error(i(160));ol(o,s,a),rl=null,il=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)pl(t,e),t=t.sibling}var fl=null;function pl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:dl(t,e),ml(e),r&4&&(Lc(3,e,e.return),Ic(3,e),Lc(5,e,e.return));break;case 1:dl(t,e),ml(e),r&512&&(Xc||n===null||Vc(n,n.return)),r&64&&Yc&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=fl;if(dl(t,e),ml(e),r&512&&(Xc||n===null||Vc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[St]||o[ht]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[ht]=e,Ot(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ht]=e,Ot(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode)}else e.stateNode=If(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Uc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:dl(t,e),ml(e),r&512&&(Xc||n===null||Vc(n,n.return)),n!==null&&r&4&&Uc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(dl(t,e),ml(e),r&512&&(Xc||n===null||Vc(n,n.return)),e.flags&32){a=e.stateNode;try{en(a,``)}catch(t){Uu(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Uc(e,a,n===null?a:n.memoizedProps)),r&1024&&(Zc=!0);break;case 6:if(dl(t,e),ml(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Uu(e,e.return,t)}}break;case 3:if(Bf=null,a=fl,fl=gf(t.containerInfo),dl(t,e),fl=a,ml(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Uu(e,e.return,t)}Zc&&(Zc=!1,hl(e));break;case 4:r=fl,fl=gf(e.stateNode.containerInfo),dl(t,e),ml(e),fl=r;break;case 12:dl(t,e),ml(e);break;case 31:dl(t,e),ml(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ul(e,r)));break;case 13:dl(t,e),ml(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Zl=Fe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ul(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Yc,d=Xc;if(Yc=u||a,Xc=d||l,dl(t,e),Xc=d,Yc=u,ml(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Yc||Xc||_l(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Uu(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Uu(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Uu(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ul(e,n))));break;case 19:dl(t,e),ml(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ul(e,r)));break;case 30:break;case 21:break;default:dl(t,e),ml(e)}}function ml(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Wc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;qc(e,Gc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(en(o,``),n.flags&=-33),qc(e,Gc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Kc(e,Gc(e),s);break;default:throw Error(i(161))}}catch(t){Uu(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;hl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function gl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)tl(e,t.alternate,t),t=t.sibling}function _l(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Lc(4,t,t.return),_l(t);break;case 1:Vc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&zc(t,t.return,n),_l(t);break;case 27:pf(t.stateNode);case 26:case 5:Vc(t,t.return),_l(t);break;case 22:t.memoizedState===null&&_l(t);break;case 30:_l(t);break;default:_l(t)}e=e.sibling}}function vl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:vl(i,a,n),Ic(4,a);break;case 1:if(vl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Uu(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ha(c[i],s)}catch(e){Uu(r,r.return,e)}}n&&o&64&&Rc(a),Bc(a,a.return);break;case 27:Jc(a);case 26:case 5:vl(i,a,n),n&&r===null&&o&4&&Hc(a),Bc(a,a.return);break;case 12:vl(i,a,n);break;case 31:vl(i,a,n),n&&o&4&&sl(i,a);break;case 13:vl(i,a,n),n&&o&4&&cl(i,a);break;case 22:a.memoizedState===null&&vl(i,a,n),Bc(a,a.return);break;case 30:break;default:vl(i,a,n)}t=t.sibling}}function yl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ta(n))}function bl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ta(e))}function xl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Sl(e,t,n,r),t=t.sibling}function Sl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:xl(e,t,n,r),i&2048&&Ic(9,t);break;case 1:xl(e,t,n,r);break;case 3:xl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ta(e)));break;case 12:if(i&2048){xl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Uu(t,t.return,e)}}else xl(e,t,n,r);break;case 31:xl(e,t,n,r);break;case 13:xl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?xl(e,t,n,r):(a._visibility|=2,Cl(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?xl(e,t,n,r):wl(e,t),i&2048&&yl(o,t);break;case 24:xl(e,t,n,r),i&2048&&bl(t.alternate,t);break;default:xl(e,t,n,r)}}function Cl(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Cl(a,o,s,c,i),Ic(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Cl(a,o,s,c,i)):u._visibility&2?Cl(a,o,s,c,i):wl(a,o),i&&l&2048&&yl(o.alternate,o);break;case 24:Cl(a,o,s,c,i),i&&l&2048&&bl(o.alternate,o);break;default:Cl(a,o,s,c,i)}t=t.sibling}}function wl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:wl(n,r),i&2048&&yl(r.alternate,r);break;case 24:wl(n,r),i&2048&&bl(r.alternate,r);break;default:wl(n,r)}t=t.sibling}}var Tl=8192;function El(e,t,n){if(e.subtreeFlags&Tl)for(e=e.child;e!==null;)Dl(e,t,n),e=e.sibling}function Dl(e,t,n){switch(e.tag){case 26:El(e,t,n),e.flags&Tl&&e.memoizedState!==null&&Gf(n,fl,e.memoizedState,e.memoizedProps);break;case 5:El(e,t,n);break;case 3:case 4:var r=fl;fl=gf(e.stateNode.containerInfo),El(e,t,n),fl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Tl,Tl=16777216,El(e,t,n),Tl=r):El(e,t,n));break;default:El(e,t,n)}}function Ol(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function kl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];$c=r,Ml(r,e)}Ol(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Al(e),e=e.sibling}function Al(e){switch(e.tag){case 0:case 11:case 15:kl(e),e.flags&2048&&Lc(9,e,e.return);break;case 3:kl(e);break;case 12:kl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,jl(e)):kl(e);break;default:kl(e)}}function jl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];$c=r,Ml(r,e)}Ol(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Lc(8,t,t.return),jl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,jl(t));break;default:jl(t)}e=e.sibling}}function Ml(e,t){for(;$c!==null;){var n=$c;switch(n.tag){case 0:case 11:case 15:Lc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ta(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,$c=r;else a:for(n=e;$c!==null;){r=$c;var i=r.sibling,a=r.return;if(nl(r),r===n){$c=null;break a}if(i!==null){i.return=a,$c=i;break a}$c=a}}}var Nl={getCacheForType:function(e){var t=qi($i),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return qi($i).controller.signal}},Pl=typeof WeakMap==`function`?WeakMap:Map,X=0,Fl=null,Z=null,Q=0,Il=0,Ll=null,Rl=!1,zl=!1,Bl=!1,Vl=0,Hl=0,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=null,Yl=null,Xl=!1,Zl=0,Ql=0,$l=1/0,eu=null,tu=null,nu=0,ru=null,iu=null,au=0,ou=0,su=null,cu=null,lu=0,uu=null;function du(){return X&2&&Q!==0?Q&-Q:E.T===null?ft():ud()}function fu(){if(Kl===0){if(!(Q&536870912)||q){var e=Ze;Ze<<=1,!(Ze&3932160)&&(Ze=262144),Kl=e}else Kl=536870912}return e=Ya.current,e!==null&&(e.flags|=32),Kl}function pu(e,t,n){(e===Fl&&(Il===2||Il===9)||e.cancelPendingCommit!==null)&&(bu(e,0),_u(e,Q,Kl,!1)),at(e,n),(!(X&2)||e!==Fl)&&(e===Fl&&(!(X&2)&&(Wl|=n),Hl===4&&_u(e,Q,Kl,!1)),nd(e))}function mu(e,t,n){if(X&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||tt(e,t),a=r?Ou(e,t):Eu(e,t,!0),o=r;do{if(a===0){zl&&!r&&_u(e,t,0,!1);break}if(n=e.current.alternate,o&&!gu(n)){a=Eu(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Jl;var l=c.current.memoizedState.isDehydrated;if(l&&(bu(c,s).flags|=256),s=Eu(c,s,!1),s!==2){if(Bl&&!l){c.errorRecoveryDisabledLanes|=o,Wl|=o,a=4;break a}o=Yl,Yl=a,o!==null&&(Yl===null?Yl=o:Yl.push.apply(Yl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){bu(e,0),_u(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:_u(r,t,Kl,!Rl);break a;case 2:Yl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=Zl+300-Fe(),10<a)){if(_u(r,t,Kl,!Rl),et(r,0,!0)!==0)break a;au=t,r.timeoutHandle=Kd(hu.bind(null,r,n,Yl,eu,Xl,t,Kl,Wl,ql,Rl,o,`Throttled`,-0,0),a);break a}hu(r,n,Yl,eu,Xl,t,Kl,Wl,ql,Rl,o,null,-0,0)}break}while(1);nd(e)}function hu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},Dl(t,a,d);var m=(a&62914560)===a?Zl-Fe():(a&4194048)===a?Ql-Fe():0;if(m=qf(d,m),m!==null){au=a,e.cancelPendingCommit=m(Fu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),_u(e,a,o,!l);return}}Fu(e,t,a,n,r,i,o,s,c)}function gu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!kr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _u(e,t,n,r){t&=~Gl,t&=~Wl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-qe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&st(e,n,t)}function vu(){return X&6?!0:(rd(0,!1),!1)}function yu(){if(Z!==null){if(Il===0)var e=Z.return;else e=Z,zi=Ri=null,So(e),wa=null,Ta=0,e=Z;for(;e!==null;)Fc(e.alternate,e),e=e.return;Z=null}}function bu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),au=0,yu(),Fl=e,Z=n=ii(e.current,null),Q=t,Il=0,Ll=null,Rl=!1,zl=tt(e,t),Bl=!1,ql=Kl=Gl=Wl=Ul=Hl=0,Yl=Jl=null,Xl=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-qe(r),a=1<<i;t|=e[i],r&=~a}return Vl=t,U(),n}function xu(e,t){J=null,E.H=Ms,t===ma||t===ga?(t=Sa(),Il=3):t===ha?(t=Sa(),Il=4):Il=t===Xs?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Ll=t,Z===null&&(Hl=1,Ws(e,fi(t,e.current)))}function Su(){var e=Ya.current;return e===null?!0:(Q&4194048)===Q?Xa===null:(Q&62914560)===Q||Q&536870912?e===Xa:!1}function Cu(){var e=E.H;return E.H=Ms,e===null?Ms:e}function wu(){var e=E.A;return E.A=Nl,e}function Tu(){Hl=4,Rl||(Q&4194048)!==Q&&Ya.current!==null||(zl=!0),!(Ul&134217727)&&!(Wl&134217727)||Fl===null||_u(Fl,Q,Kl,!1)}function Eu(e,t,n){var r=X;X|=2;var i=Cu(),a=wu();(Fl!==e||Q!==t)&&(eu=null,bu(e,t)),t=!1;var o=Hl;a:do try{if(Il!==0&&Z!==null){var s=Z,c=Ll;switch(Il){case 8:yu(),o=6;break a;case 3:case 2:case 9:case 6:Ya.current===null&&(t=!0);var l=Il;if(Il=0,Ll=null,Mu(e,s,c,l),n&&zl){o=0;break a}break;default:l=Il,Il=0,Ll=null,Mu(e,s,c,l)}}Du(),o=Hl;break}catch(t){xu(e,t)}while(1);return t&&e.shellSuspendCounter++,zi=Ri=null,X=r,E.H=i,E.A=a,Z===null&&(Fl=null,Q=0,U()),o}function Du(){for(;Z!==null;)Au(Z)}function Ou(e,t){var n=X;X|=2;var r=Cu(),a=wu();Fl!==e||Q!==t?(eu=null,$l=Fe()+500,bu(e,t)):zl=tt(e,t);a:do try{if(Il!==0&&Z!==null){t=Z;var o=Ll;b:switch(Il){case 1:Il=0,Ll=null,Mu(e,t,o,1);break;case 2:case 9:if(va(o)){Il=0,Ll=null,ju(t);break}t=function(){Il!==2&&Il!==9||Fl!==e||(Il=7),nd(e)},o.then(t,t);break a;case 3:Il=7;break a;case 4:Il=5;break a;case 7:va(o)?(Il=0,Ll=null,ju(t)):(Il=0,Ll=null,Mu(e,t,o,7));break;case 5:var s=null;switch(Z.tag){case 26:s=Z.memoizedState;case 5:case 27:var c=Z;if(s?Wf(s):c.stateNode.complete){Il=0,Ll=null;var l=c.sibling;if(l!==null)Z=l;else{var u=c.return;u===null?Z=null:(Z=u,Nu(u))}break b}}Il=0,Ll=null,Mu(e,t,o,5);break;case 6:Il=0,Ll=null,Mu(e,t,o,6);break;case 8:yu(),Hl=6;break a;default:throw Error(i(462))}}ku();break}catch(t){xu(e,t)}while(1);return zi=Ri=null,E.H=r,E.A=a,X=n,Z===null?(Fl=null,Q=0,U(),Hl):0}function ku(){for(;Z!==null&&!Ne();)Au(Z)}function Au(e){var t=Ec(e.alternate,e,Vl);e.memoizedProps=e.pendingProps,t===null?Nu(e):Z=t}function ju(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=uc(n,t,t.pendingProps,t.type,void 0,Q);break;case 11:t=uc(n,t,t.pendingProps,t.type.render,t.ref,Q);break;case 5:So(t);default:Fc(n,t),t=Z=ai(t,Vl),t=Ec(n,t,Vl)}e.memoizedProps=e.pendingProps,t===null?Nu(e):Z=t}function Mu(e,t,n,r){zi=Ri=null,So(t),wa=null,Ta=0;var i=t.return;try{if(Ys(e,i,t,n,Q)){Hl=1,Ws(e,fi(n,e.current)),Z=null;return}}catch(t){if(i!==null)throw Z=i,t;Hl=1,Ws(e,fi(n,e.current)),Z=null;return}t.flags&32768?(q||r===1?e=!0:zl||Q&536870912?e=!1:(Rl=e=!0,(r===2||r===9||r===3||r===6)&&(r=Ya.current,r!==null&&r.tag===13&&(r.flags|=16384))),Pu(t,e)):Nu(t)}function Nu(e){var t=e;do{if(t.flags&32768){Pu(t,Rl);return}e=t.return;var n=Nc(t.alternate,t,Vl);if(n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);Hl===0&&(Hl=5)}function Pu(e,t){do{var n=Pc(e.alternate,e);if(n!==null){n.flags&=32767,Z=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Z=e;return}Z=e=n}while(e!==null);Hl=6,Z=null}function Fu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Bu();while(nu!==0);if(X&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Yr,ot(e,n,o,s,c,l),e===Fl&&(Z=Fl=null,Q=0),iu=t,ru=e,au=n,ou=o,su=a,cu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Yu(ze,function(){return Vu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=E.T,E.T=null,a=D.p,D.p=2,s=X,X|=4;try{el(e,t,n)}finally{X=s,D.p=a,E.T=r}}nu=1,Iu(),Lu(),Ru()}}function Iu(){if(nu===1){nu=0;var e=ru,t=iu,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=X;X|=4;try{pl(t,e);var a=zd,o=Pr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Nr(s.ownerDocument.documentElement,s)){if(c!==null&&Fr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Mr(s,h),v=Mr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{X=i,D.p=r,E.T=n}}e.current=t,nu=2}}function Lu(){if(nu===2){nu=0;var e=ru,t=iu,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=X;X|=4;try{tl(e,t.alternate,t)}finally{X=i,D.p=r,E.T=n}}nu=3}}function Ru(){if(nu===4||nu===3){nu=0,Pe();var e=ru,t=iu,n=au,r=cu;t.subtreeFlags&10256||t.flags&10256?nu=5:(nu=0,iu=ru=null,zu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(tu=null),dt(n),t=t.stateNode,Ge&&typeof Ge.onCommitFiberRoot==`function`)try{Ge.onCommitFiberRoot(We,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}au&3&&Bu(),nd(e),i=e.pendingLanes,n&261930&&i&42?e===uu?lu++:(lu=0,uu=e):lu=0,rd(0,!1)}}function zu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ta(t)))}function Bu(){return Iu(),Lu(),Ru(),Vu()}function Vu(){if(nu!==5)return!1;var e=ru,t=ou;ou=0;var n=dt(au),r=E.T,a=D.p;try{D.p=32>n?32:n,E.T=null,n=su,su=null;var o=ru,s=au;if(nu=0,iu=ru=null,au=0,X&6)throw Error(i(331));var c=X;if(X|=4,Al(o.current),Sl(o,o.current,s,n),X=c,rd(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot==`function`)try{Ge.onPostCommitFiberRoot(We,o)}catch{}return!0}finally{D.p=a,E.T=r,zu(e,t)}}function Hu(e,t,n){t=fi(n,t),t=Ks(e.stateNode,t,2),e=Ia(e,t,2),e!==null&&(at(e,2),nd(e))}function Uu(e,t,n){if(e.tag===3)Hu(e,e,n);else for(;t!==null;){if(t.tag===3){Hu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(tu===null||!tu.has(r))){e=fi(n,e),n=qs(2),r=Ia(t,n,2),r!==null&&(Js(n,r,t,e),at(r,2),nd(r));break}}t=t.return}}function Wu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Pl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Bl=!0,i.add(n),e=Gu.bind(null,e,t,n),t.then(e,e))}function Gu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Fl===e&&(Q&n)===n&&(Hl===4||Hl===3&&(Q&62914560)===Q&&300>Fe()-Zl?!(X&2)&&bu(e,0):Gl|=n,ql===Q&&(ql=0)),nd(e)}function Ku(e,t){t===0&&(t=rt()),e=W(e,t),e!==null&&(at(e,t),nd(e))}function qu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ku(e,n)}function Ju(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Ku(e,n)}function Yu(e,t){return je(e,t)}var Xu=null,Zu=null,Qu=!1,$u=!1,ed=!1,td=0;function nd(e){e!==Zu&&e.next===null&&(Zu===null?Xu=Zu=e:Zu=Zu.next=e),$u=!0,Qu||(Qu=!0,ld())}function rd(e,t){if(!ed&&$u){ed=!0;do for(var n=!1,r=Xu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-qe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,cd(r,a))}else a=Q,a=et(r,r===Fl?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||tt(r,a)||(n=!0,cd(r,a))}r=r.next}while(n);ed=!1}}function id(){ad()}function ad(){$u=Qu=!1;var e=0;td!==0&&Gd()&&(e=td);for(var t=Fe(),n=null,r=Xu;r!==null;){var i=r.next,a=od(r,t);a===0?(r.next=null,n===null?Xu=i:n.next=i,i===null&&(Zu=n)):(n=r,(e!==0||a&3)&&($u=!0)),r=i}nu!==0&&nu!==5||rd(e,!1),td!==0&&(td=0)}function od(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-qe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=nt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Fl,n=Q,n=et(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Il===2||Il===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Me(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||tt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Me(r),dt(n)){case 2:case 8:n=Re;break;case 32:n=ze;break;case 268435456:n=Ve;break;default:n=ze}return r=sd.bind(null,e),n=je(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Me(r),e.callbackPriority=2,e.callbackNode=null,2}function sd(e,t){if(nu!==0&&nu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Bu()&&e.callbackNode!==n)return null;var r=Q;return r=et(e,e===Fl?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(mu(e,r,t),od(e,Fe()),e.callbackNode!=null&&e.callbackNode===n?sd.bind(null,e):null)}function cd(e,t){if(Bu())return null;mu(e,t,!0)}function ld(){Yd(function(){X&6?je(Le,id):ad()})}function ud(){if(td===0){var e=ia;e===0&&(e=Xe,Xe<<=1,!(Xe&261888)&&(Xe=256)),td=e}return td}function dd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:cn(``+e)}function fd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function pd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=dd((i[gt]||null).action),o=r.submitter;o&&(t=(t=o[gt]||null)?dd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(td!==0){var e=o?fd(i,o):new FormData(i);vs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?fd(i,o):new FormData(i),vs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var md=0;md<Gr.length;md++){var hd=Gr[md];Kr(hd.toLowerCase(),`on`+(hd[0].toUpperCase()+hd.slice(1)))}Kr(R,`onAnimationEnd`),Kr(Vr,`onAnimationIteration`),Kr(z,`onAnimationStart`),Kr(`dblclick`,`onDoubleClick`),Kr(`focusin`,`onFocus`),Kr(`focusout`,`onBlur`),Kr(B,`onTransitionRun`),Kr(Hr,`onTransitionStart`),Kr(V,`onTransitionCancel`),Kr(Ur,`onTransitionEnd`),Mt(`onMouseEnter`,[`mouseout`,`mouseover`]),Mt(`onMouseLeave`,[`mouseout`,`mouseover`]),Mt(`onPointerEnter`,[`pointerout`,`pointerover`]),Mt(`onPointerLeave`,[`pointerout`,`pointerover`]),jt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),jt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),jt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),jt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var gd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),_d=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(gd));function vd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){qr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){qr(e)}i.currentTarget=null,a=c}}}}function $(e,t){var n=t[vt];n===void 0&&(n=t[vt]=new Set);var r=e+`__bubble`;n.has(r)||(Sd(t,e,2,!1),n.add(r))}function yd(e,t,n){var r=0;t&&(r|=4),Sd(n,e,r,t)}var bd=`_reactListening`+Math.random().toString(36).slice(2);function xd(e){if(!e[bd]){e[bd]=!0,kt.forEach(function(t){t!==`selectionchange`&&(_d.has(t)||yd(t,!1,e),yd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bd]||(t[bd]=!0,yd(`selectionchange`,!1,t))}}function Sd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!yn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Cd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=wt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}gn(function(){var r=a,i=dn(n),s=[];a:{var c=Wr.get(e);if(c!==void 0){var l=An,u=e;switch(e){case`keypress`:if(Tn(n)===0)break a;case`keydown`:case`keyup`:l=Jn;break;case`focusin`:u=`focus`,l=zn;break;case`focusout`:u=`blur`,l=zn;break;case`beforeblur`:case`afterblur`:l=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Ln;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Rn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Yn;break;case R:case Vr:case z:l=Bn;break;case Ur:l=Xn;break;case`scroll`:case`scrollend`:l=Mn;break;case`wheel`:l=Zn;break;case`copy`:case`cut`:case`paste`:l=Vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=A;break;case`toggle`:case`beforetoggle`:l=Qn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=_n(m,p),g!=null&&d.push(wd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==un&&(u=n.relatedTarget||n.fromElement)&&(wt(u)||u[_t]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?wt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Ln,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=A,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Et(l),h=u==null?c:Et(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,wt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Ed,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Dd(s,c,l,d,!1),u!==null&&f!==null&&Dd(s,f,u,d,!0)}}a:{if(c=r?Et(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=_r;else if(fr(c)){if(vr)v=Dr;else{v=Tr;var y=wr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&an(r.elementType)&&(v=_r):v=Er;if(v&&=v(e,r)){pr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Xt(c,`number`,c.value)}switch(y=r?Et(r):window,e){case`focusin`:(fr(y)||y.contentEditable===`true`)&&(Lr=y,Rr=r,zr=null);break;case`focusout`:zr=Rr=Lr=null;break;case`mousedown`:Br=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Br=!1,M(s,n,i);break;case`selectionchange`:if(Ir)break;case`keydown`:case`keyup`:M(s,n,i)}var b;if(er)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else cr?or(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(rr&&n.locale!==`ko`&&(cr||x!==`onCompositionStart`?x===`onCompositionEnd`&&cr&&(b=wn()):(xn=i,Sn=`value`in xn?xn.value:xn.textContent,cr=!0)),y=Td(r,x),0<y.length&&(x=new Hn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=sr(n),b!==null&&(x.data=b)))),(b=nr?lr(e,n):ur(e,n))&&(x=Td(r,`onBeforeInput`),0<x.length&&(y=new Hn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),pd(s,e,r,n,i)}vd(s,t)})}function wd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Td(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=_n(e,n),i!=null&&r.unshift(wd(e,i,a)),i=_n(e,t),i!=null&&r.push(wd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Ed(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Dd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=_n(n,a),l!=null&&o.unshift(wd(n,l,c))):i||(l=_n(n,a),l!=null&&o.push(wd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Od=/\r\n?/g,kd=/\u0000|\uFFFD/g;function Ad(e){return(typeof e==`string`?e:``+e).replace(Od,`
`).replace(kd,``)}function jd(e,t){return t=Ad(t),Ad(e)===t}function Md(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||en(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&en(e,``+r);break;case`className`:Rt(e,`class`,r);break;case`tabIndex`:Rt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Rt(e,n,r);break;case`style`:rn(e,r,o);break;case`data`:if(t!==`object`){Rt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&Md(e,t,`name`,a.name,a,null),Md(e,t,`formEncType`,a.formEncType,a,null),Md(e,t,`formMethod`,a.formMethod,a,null),Md(e,t,`formTarget`,a.formTarget,a,null)):(Md(e,t,`encType`,a.encType,a,null),Md(e,t,`method`,a.method,a,null),Md(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`onScroll`:r!=null&&$(`scroll`,e);break;case`onScrollEnd`:r!=null&&$(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=cn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:$(`beforetoggle`,e),$(`toggle`,e),Lt(e,`popover`,r);break;case`xlinkActuate`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Lt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=on.get(n)||n,Lt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:rn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?en(e,r):(typeof r==`number`||typeof r==`bigint`)&&en(e,``+r);break;case`onScroll`:r!=null&&$(`scroll`,e);break;case`onScrollEnd`:r!=null&&$(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!At.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[gt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Lt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:$(`error`,e),$(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Md(e,t,o,s,n,null)}}a&&Md(e,t,`srcSet`,n.srcSet,n,null),r&&Md(e,t,`src`,n.src,n,null);return;case`input`:$(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Md(e,t,r,d,n,null)}}Yt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in $(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Md(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Zt(e,!!r,n,!0):Zt(e,!!r,t,!1);return;case`textarea`:for(s in $(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Md(e,t,s,c,n,null)}$t(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Md(e,t,l,r,n,null)}return;case`dialog`:$(`beforetoggle`,e),$(`toggle`,e),$(`cancel`,e),$(`close`,e);break;case`iframe`:case`object`:$(`load`,e);break;case`video`:case`audio`:for(r=0;r<gd.length;r++)$(gd[r],e);break;case`image`:$(`error`,e),$(`load`,e);break;case`details`:$(`toggle`,e);break;case`embed`:case`source`:case`link`:$(`error`,e),$(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Md(e,t,u,r,n,null)}return;default:if(an(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Md(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Md(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Md(e,t,p,m,r,f)}}Jt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Md(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Md(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Zt(e,!!n,n?[]:``,!1):Zt(e,!!n,t,!0)):Zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Md(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Md(e,t,s,a,r,o)}Qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Md(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Md(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Md(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Md(e,t,u,p,r,m)}return;default:if(an(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Md(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Md(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[St]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Ct(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[St])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ct(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=D.d;D.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=vu();return e||t}function yf(e){var t=Tt(e);t!==null&&t.tag===5&&t.type===`form`?bs(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=qt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+qt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+qt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+qt(n.imageSizes)+`"]`)):i+=`[href="`+qt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+qt(r)+`"][href="`+qt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Ot(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Dt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Ot(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ot(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ot(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=_e.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Dt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Dt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Dt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+qt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Ot(t),e.head.appendChild(t))}function Pf(e){return`[src="`+qt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+qt(n.href)+`"]`);if(r)return t.instance=r,Ot(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Ot(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Ot(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Ot(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Ot(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Ot(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[St]||a[ht]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Ot(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Ot(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=it(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=it(0),this.hiddenUpdates=it(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ni(3,null,null,t),e.current=a,a.stateNode=e,t=ea(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Na(a),e}function tp(e){return e?(e=ei,e):ei}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Fa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ia(e,r,t),n!==null&&(pu(n,e,t),La(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=W(e,67108864);t!==null&&pu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=du();t=ut(t);var n=W(e,t);n!==null&&pu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,up(e,t,n,r)}finally{D.p=a,E.T=i}}function lp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,up(e,t,n,r)}finally{D.p=a,E.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)Cd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Tt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=$e(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-qe(o);s.entanglements[1]|=c,o&=~c}nd(a),!(X&6)&&($l=Fe()+500,rd(0,!1))}}break;case 31:case 13:s=W(a,2),s!==null&&pu(s,a,2),vu(),ip(a,2)}if(a=dp(r),a===null&&Cd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Cd(e,t,r,null,n)}}function dp(e){return e=dn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=wt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ie()){case Le:return 2;case Re:return 8;case ze:case Be:return 32;case Ve:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Tt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=wt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);un=r,n.target.dispatchEvent(r),un=null}else return t=Tt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Tt(n);a!==null&&(e.splice(t,3),t-=3,vs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[gt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[gt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,du(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),vu(),t[_t]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ft();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{We=zp.inject(Rp),Ge=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Vs,s=Hs,c=Us;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[_t]=t.current,xd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=`-ms-`,v=`-moz-`,y=`-webkit-`,b=`comm`,x=`rule`,S=`decl`,C=`@import`,w=`@namespace`,ee=`@keyframes`,te=`@layer`,ne=Math.abs,re=String.fromCharCode,ie=Object.assign;function ae(e,t){return le(e,0)^45?(((t<<2^le(e,0))<<2^le(e,1))<<2^le(e,2))<<2^le(e,3):0}function oe(e){return e.trim()}function se(e,t){return(e=t.exec(e))?e[0]:e}function T(e,t,n){return e.replace(t,n)}function ce(e,t,n){return e.indexOf(t,n)}function le(e,t){return e.charCodeAt(t)|0}function E(e,t,n){return e.slice(t,n)}function D(e){return e.length}function ue(e){return e.length}function de(e,t){return t.push(e),e}function fe(e,t){return e.map(t).join(``)}function pe(e,t){return e.filter(function(e){return!se(e,t)})}var me=1,O=1,he=0,ge=0,_e=0,ve=``;function ye(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:me,column:O,length:o,return:``,siblings:s}}function be(e,t){return ie(ye(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function xe(e){for(;e.root;)e=be(e.root,{children:[e]});de(e,e.siblings)}function Se(){return _e}function Ce(){return _e=ge>0?le(ve,--ge):0,O--,_e===10&&(O=1,me--),_e}function we(){return _e=ge<he?le(ve,ge++):0,O++,_e===10&&(O=1,me++),_e}function Te(){return le(ve,ge)}function Ee(){return ge}function De(e,t){return E(ve,e,t)}function Oe(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ke(e){return me=O=1,he=D(ve=e),ge=0,[]}function Ae(e){return ve=``,e}function je(e){return oe(De(ge-1,Pe(e===91?e+2:e===40?e+1:e)))}function Me(e){for(;(_e=Te())&&_e<33;)we();return Oe(e)>2||Oe(_e)>3?``:` `}function Ne(e,t){for(;--t&&we()&&!(_e<48||_e>102||_e>57&&_e<65||_e>70&&_e<97););return De(e,Ee()+(t<6&&Te()==32&&we()==32))}function Pe(e){for(;we();)switch(_e){case e:return ge;case 34:case 39:e!==34&&e!==39&&Pe(_e);break;case 40:e===41&&Pe(e);break;case 92:we()}return ge}function Fe(e,t){for(;we()&&e+_e!==57&&(e+_e!==84||Te()!==47););return`/*`+De(t,ge-1)+`*`+re(e===47?e:we())}function Ie(e){for(;!Oe(Te());)we();return De(e,ge)}function Le(e){return Ae(Re(``,null,null,null,[``],e=ke(e),0,[0],e))}function Re(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=we()){case 40:if(m!=108&&le(C,d-1)==58){ce(C+=T(je(v),`&`,`&\f`),`&\f`,ne(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=je(v);break;case 9:case 10:case 13:case 32:C+=Me(m);break;case 92:C+=Ne(Ee()-1,7);continue;case 47:switch(Te()){case 42:case 47:de(Be(Fe(we(),Ee()),t,n,c),c),(Oe(m||1)==5||Oe(Te()||1)==5)&&D(C)&&E(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=D(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=T(C,/\f/g,``)),p>0&&(D(C)-d||h===0&&m===47)&&de(p>32?Ve(C+`;`,r,n,d-1,c):Ve(T(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(de(S=ze(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123){if(u===0)Re(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(le(C,3)===110)break;case 108:if(le(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?Re(e,S,S,r&&de(ze(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):Re(C,S,S,S,[``],x,0,s,x)}}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+D(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&Ce()==125)continue}switch(C+=re(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(D(C)-1)*_,_=1;break;case 64:Te()===45&&(C+=je(we())),f=Te(),u=d=D(y=C+=Ie(Ee())),v++;break;case 45:m===45&&D(C)==2&&(h=0)}}return a}function ze(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=ue(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=E(e,f+1,f=ne(g=o[h])),b=e;v<m;++v)(b=oe(g>0?p[v]+` `+y:T(y,/&\f/g,p[v])))&&(c[_++]=b);return ye(e,t,n,i===0?x:s,c,l,u,d)}function Be(e,t,n,r){return ye(e,t,n,b,re(Se()),E(e,2,-2),0,r)}function Ve(e,t,n,r,i){return ye(e,t,n,S,E(e,0,r),E(e,r+1,-1),r,i)}function He(e,t,n){switch(ae(e,t)){case 5103:return y+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return y+e+e;case 4855:return y+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return v+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return y+e+v+e+_+e+e;case 5936:switch(le(e,t+11)){case 114:return y+e+_+T(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return y+e+_+T(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return y+e+_+T(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return y+e+_+e+e;case 6165:return y+e+_+`flex-`+e+e;case 5187:return y+e+T(e,/(\w+).+(:[^]+)/,y+`box-$1$2`+_+`flex-$1$2`)+e;case 5443:return y+e+_+`flex-item-`+T(e,/flex-|-self/g,``)+(se(e,/flex-|baseline/)?``:_+`grid-row-`+T(e,/flex-|-self/g,``))+e;case 4675:return y+e+_+`flex-line-pack`+T(e,/align-content|flex-|-self/g,``)+e;case 5548:return y+e+_+T(e,`shrink`,`negative`)+e;case 5292:return y+e+_+T(e,`basis`,`preferred-size`)+e;case 6060:return y+`box-`+T(e,`-grow`,``)+y+e+_+T(e,`grow`,`positive`)+e;case 4554:return y+T(e,/([^-])(transform)/g,`$1`+y+`$2`)+e;case 6187:return T(T(T(e,/(zoom-|grab)/,y+`$1`),/(image-set)/,y+`$1`),e,``)+e;case 5495:case 3959:return T(e,/(image-set\([^]*)/,y+"$1$`$1");case 4968:return T(T(e,/(.+:)(flex-)?(.*)/,y+`box-pack:$3`+_+`flex-pack:$3`),/space-between/,`justify`)+y+e+e;case 4200:if(!se(e,/flex-|baseline/))return _+`grid-column-align`+E(e,t)+e;break;case 2592:case 3360:return _+T(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,se(e.props,/grid-\w+-end/)})?~ce(e+(n=n[t].value),`span`,0)?e:_+T(e,`-start`,``)+e+_+`grid-row-span:`+(~ce(n,`span`,0)?se(n,/\d+/):+se(n,/\d+/)-se(e,/\d+/))+`;`:_+T(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return se(e.props,/grid-\w+-start/)})?e:_+T(T(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return T(e,/(.+)-inline(.+)/,y+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(D(e)-1-t>6)switch(le(e,t+1)){case 109:if(le(e,t+4)!==45)break;case 102:return T(e,/(.+:)(.+)-([^]+)/,`$1`+y+`$2-$3$1`+v+(le(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~ce(e,`stretch`,0)?He(T(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return T(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return _+n+`:`+r+s+(i?_+n+`-span:`+(a?o:+o-r)+s:``)+e});case 4949:if(le(e,t+6)===121)return T(e,`:`,`:`+y)+e;break;case 6444:switch(le(e,le(e,14)===45?18:11)){case 120:return T(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+y+(le(e,14)===45?`inline-`:``)+`box$3$1`+y+`$2$3$1`+_+`$2box$3`)+e;case 100:return T(e,`:`,`:`+_)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return T(e,`scroll-`,`scroll-snap-`)+e}return e}function Ue(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function We(e,t,n,r){switch(e.type){case te:if(e.children.length)break;case C:case w:case S:return e.return=e.return||e.value;case b:return``;case ee:return e.return=e.value+`{`+Ue(e.children,r)+`}`;case x:if(!D(e.value=e.props.join(`,`)))return``}return D(n=Ue(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Ge(e){var t=ue(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Ke(e){return function(t){t.root||(t=t.return)&&e(t)}}function qe(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case S:e.return=He(e.value,e.length,n);return;case ee:return Ue([be(e,{value:T(e.value,`@`,`@`+y)})],r);case x:if(e.length)return fe(n=e.props,function(t){switch(se(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:xe(be(e,{props:[T(t,/:(read-\w+)/,`:`+v+`$1`)]})),xe(be(e,{props:[t]})),ie(e,{props:pe(n,r)});break;case`::placeholder`:xe(be(e,{props:[T(t,/:(plac\w+)/,`:`+y+`input-$1`)]})),xe(be(e,{props:[T(t,/:(plac\w+)/,`:`+v+`$1`)]})),xe(be(e,{props:[T(t,/:(plac\w+)/,_+`input-$1`)]})),xe(be(e,{props:[t]})),ie(e,{props:pe(n,r)})}return``})}}var Je=f(),Ye=g(),k=c(u());function Xe(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var Ze=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,Qe=`active`,$e=`data-styled-version`,et=`6.6.0`,tt=`/*!sc*/
`,nt=typeof window<`u`&&typeof document<`u`;if(!k.createContext)throw Xe(19);function rt(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var it=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:rt(`REACT_APP_SC_DISABLE_SPEEDY`)??rt(`SC_DISABLE_SPEEDY`)??(typeof process<`u`&&!1)),at=`sc-keyframes-`,ot={},st=new Map,ct=new Map,lt=1,ut=e=>{if(st.has(e))return st.get(e);for(;ct.has(lt);)lt++;let t=lt++;return st.set(e,t),ct.set(t,e),t},dt=e=>ct.get(e),ft=(e,t)=>{lt=t+1,st.set(e,t),ct.set(t,e)},pt=Object.freeze([]),mt=Object.freeze({});function ht(e,t,n=mt){return e.theme!==n.theme&&e.theme||t||n.theme}var gt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_t=/(^-|-$)/g;function vt(e){return e.replace(gt,`-`).replace(_t,``)}var yt=/(a)(d)/gi,bt=e=>String.fromCharCode(e+(e>25?39:97));function xt(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=bt(t%52)+n;return(bt(t%52)+n).replace(yt,`$1-$2`)}var St=5381,Ct=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},wt=e=>Ct(St,e);function Tt(e){return xt(wt(e)>>>0)}function Et(e){return e.displayName||e.name||`Component`}function Dt(e){return typeof e==`string`&&!0}function Ot(e){return Dt(e)?`styled.${e}`:`Styled(${Et(e)})`}var kt=Symbol.for(`react.memo`),At=Symbol.for(`react.forward_ref`),jt={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Mt={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Nt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Pt={[At]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[kt]:Nt};function Ft(e){return(`type`in(t=e)&&t.type.$$typeof)===kt?Nt:`$$typeof`in e?Pt[e.$$typeof]:jt;var t}var It=Object.defineProperty,Lt=Object.getOwnPropertyNames,Rt=Object.getOwnPropertySymbols,zt=Object.getOwnPropertyDescriptor,Bt=Object.getPrototypeOf,Vt=Object.prototype;function Ht(e,t,n){if(typeof t!=`string`){let r=Bt(t);r&&r!==Vt&&Ht(e,r,n);let i=Lt(t).concat(Rt(t)),a=Ft(e),o=Ft(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in Mt||n&&n[s]||o&&s in o||a&&s in a)){let n=zt(t,s);try{It(e,s,n)}catch{}}}}return e}function Ut(e){return typeof e==`function`}var Wt=Symbol.for(`react.forward_ref`);function Gt(e){return e!=null&&(typeof e==`object`||typeof e==`function`)&&e.$$typeof===Wt&&`styledComponentId`in e}function Kt(e,t){return e&&t?e+` `+t:e||t||``}function qt(e,t){return e.join(t||``)}function Jt(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function Yt(e,t,n=!1){if(!n&&!Jt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=Yt(e[n],t[n]);else if(Jt(t))for(let n in t)e[n]=Yt(e[n],t[n]);return e}function Xt(e,t){Object.defineProperty(e,"toString",{value:t})}var Zt=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw Xe(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+tt;return t}},Qt=`style[${Ze}][${$e}="${et}"]`,$t=RegExp(`^${Ze}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),en=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,tn=e=>{if(!e)return document;if(en(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(en(t))return t}return document},nn=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},rn=(e,t)=>{let n=(t.textContent??``).split(tt),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match($t);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(ft(n,t),nn(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},an=e=>{let t=tn(e.options.target).querySelectorAll(Qt);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(Ze)!==Qe&&(rn(e,r),r.parentNode&&r.parentNode.removeChild(r))}},on=!1;function sn(){if(!1!==on)return on;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return on=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return on=t.getAttribute(`content`)||void 0}return on=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var cn=(e,t)=>{if(typeof document>`u`)throw Xe(20);let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${Ze}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(Ze,Qe),i.setAttribute($e,et);let s=t||sn();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},ln=class{constructor(e,t){this.element=cn(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw Xe(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},un=class{constructor(e,t){this.element=cn(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},dn=nt,fn={isServer:!nt,useCSSOMInjection:!it},pn=class e{static registerId(e){return ut(e)}constructor(e=mt,t={},n){this.options=Object.assign(Object.assign({},fn),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&nt&&dn&&(dn=!1,an(this)),Xt(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=dt(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=Ze+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&nt&&an(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&nt&&t.target!==this.options.target&&tn(this.options.target)!==tn(t.target)&&an(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new ln(t,n):new un(t,n))(this.options),new Zt(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){ut(e),e.startsWith(at)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(ut(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(ut(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},mn=new WeakSet,hn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function gn(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in hn||e.startsWith(`--`)?String(t).trim():t+`px`}var _n=47;function vn(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var yn=Symbol.for(`sc-keyframes`);function bn(e){return typeof e==`object`&&!!e&&yn in e}function xn(e){return Ut(e)&&!(e.prototype&&e.prototype.isReactComponent)}var Sn=e=>e==null||!1===e||e===``,Cn=Symbol.for(`react.client.reference`);function wn(e){return e.$$typeof===Cn}function Tn(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!Sn(r)&&(Array.isArray(r)&&mn.has(r)||Ut(r)?t.push(vn(n)+`:`,r,`;`):Jt(r)?(t.push(n+` {`),Tn(r,t),t.push(`}`)):t.push(vn(n)+`: `+gn(n,r)+`;`))}}function En(e,t,n,r,i=[]){if(Sn(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return wn(e)?i:xn(e)&&t?En(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)En(e[a],t,n,r,i);return i}return Gt(e)?(i.push(`.${e.styledComponentId}`),i):bn(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):wn(e)?i:Jt(e)&&e.toString===Object.prototype.toString?(Tn(e,i),i):(i.push(e.toString()),i)}var Dn=wt(et),On=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=Ct(Dn,t),this.baseStyle=n,pn.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a){if(xn(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=qt(En(r,e,t,n)))}else i+=qt(En(a,e,t,n))}}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=xt(Ct(Ct(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=Kt(r,a)}}return r}},kn=/&/g;function An(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function jn(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==_n||e.charCodeAt(c+1)!==42){if(o)l===42&&e.charCodeAt(c+1)===_n&&(o=!1,c++);else if(l!==34&&l!==39||An(e,c)){if(a===0){if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}}else a===0?a=l:a===l&&(a=0)}else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function Mn(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&Mn(a.children,t)}return e}function Nn({options:e=mt,plugins:t=pt}=mt){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(kn,r).replace(i,a))}),e.prefix&&o.push(qe),o.push(We);let s=[],c=Ge(o.concat(Ke(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return jn(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||An(e,o)){if(s===0){if(t===_n&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==_n);)o++;o+=2}else if(t!==40){if(t!==41){if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===_n)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===_n&&o+1<r&&e.charCodeAt(o+1)===_n){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++}else c>0&&c--,o++}else c++,o++}else o++}else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:jn(i)):l===0?e:jn(e)}(t),d=Le(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=Mn(d,e.namespace)),s=[],Ue(d,c),s},u=e,d=St;for(let e=0;e<t.length;e++)t[e].name||Xe(15),d=Ct(d,t[e].name);return u!=null&&u.namespace&&(d=Ct(d,u.namespace)),u!=null&&u.prefix&&(d=Ct(d,`p`)),l.hash=d===St?``:d.toString(),l}var Pn=new pn,Fn=Nn(),In=k.createContext({shouldForwardProp:void 0,styleSheet:Pn,stylis:Fn,stylisPlugins:void 0});In.Consumer;function Ln(){return k.useContext(In)}var Rn=k.createContext(void 0);Rn.Consumer;function zn(e){let t=k.useContext(Rn),n=k.useMemo(()=>function(e,t){if(!e)throw Xe(14);if(Ut(e))return e(t);if(Array.isArray(e)||typeof e!=`object`)throw Xe(8);return t?Object.assign(Object.assign({},t),e):e}(e.theme,t),[e.theme,t]);return e.children?k.createElement(Rn.Provider,{value:n},e.children):null}var Bn={};function Vn(e,t){let n=typeof e==`string`?vt(e):`sc`;Bn[n]=(Bn[n]||0)+1;let r=n+`-`+Tt(et+n+Bn[n]);return t?t+`-`+r:r}function Hn(e,t,n){let r=Gt(e),i=e,a=!Dt(e),{attrs:o=pt,componentId:s=Vn(t.displayName,t.parentComponentId),displayName:c=Ot(e)}=t,l=t.displayName&&t.componentId?vt(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new On(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=k.useContext(Rn),u=Ln(),d=e.shouldForwardProp||u.shouldForwardProp,f=ht(t,l,a)||mt,[p,m]=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=null,a=e.length>1;for(let t=0;t<e.length;t++){let n=e[t],o=Ut(n)?n(a?Object.assign({},r):r):n;for(let e in o)e===`className`?r.className=Kt(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):o[e]===void 0?e in r&&(r[e]!==void 0&&(i||=[]).push(e),r[e]=void 0):r[e]=o[e]}return`className`in t&&typeof t.className==`string`&&(r.className=Kt(r.className,t.className)),[r,i]}(r,t,f),h=i.generateAndInjectStyles(p,u.styleSheet,u.stylis),g=p.as||c,_=Dt(g),v=function(e,t,n,r,i,a){let o={};for(let s in e)s[0]===`$`||s===`as`||s===`theme`&&e.theme===n||(s===`forwardedAs`?e.forwardedAs!==void 0&&(o.as=e.forwardedAs):e[s]===void 0?s===`className`||i||a!==null&&a.indexOf(s)!==-1||r&&!r(s,t)||(o[s]=void 0):r&&!r(s,t)||(o[s]=e[s]));return o}(p,g,f,d,_,m),y=Kt(o,s);return h&&(y+=` `+h),p.className&&(y+=` `+p.className),v[_&&g.includes(`-`)?`class`:`className`]=y,n&&(v.ref=n),(0,k.createElement)(g,v)}(m,e,t)}p.displayName=c;let m=k.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?Kt(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)Yt(e,n,!0);return e}({},i.defaultProps,e):e}}),Xt(m,()=>`.${m.styledComponentId}`),a&&Ht(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var Un=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function Wn(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Gn=e=>(mn.add(e),e);function Kn(e,...t){if(Ut(e)||Jt(e))return Gn(En(Wn(pt,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?En(n):Gn(En(Wn(n,t)))}function qn(e,t,n=mt){if(!t)throw Xe(1,t);let r=(r,...i)=>e(t,n,Kn(r,...i));return r.attrs=r=>qn(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>qn(e,t,Object.assign(Object.assign({},n),r)),r}var Jn=e=>qn(Hn,e),A=Jn;Un.forEach(e=>{A[e]=Jn(e)});var Yn=class{constructor(e,t){this.instanceRules=new Map,this.rules=e,this.componentId=t,this.isStatic=function(e){for(let t=0;t<e.length;t+=1){let n=e[t];if(Ut(n)&&!Gt(n))return!1}return!0}(e),pn.registerId(this.componentId)}removeStyles(e,t){this.instanceRules.delete(e),this.rebuildGroup(t)}renderStyles(e,t,n,r){let i=this.componentId;if(this.isStatic){if(n.hasNameForId(i,i+e))this.instanceRules.has(e)||this.computeRules(e,t,n,r);else{let a=this.computeRules(e,t,n,r);n.insertRules(i,a.name,a.rules)}return}let a=this.instanceRules.get(e);if(this.computeRules(e,t,n,r),!n.server&&a){let t=a.rules,n=this.instanceRules.get(e).rules;if(t.length===n.length){let e=!0;for(let r=0;r<t.length;r++)if(t[r]!==n[r]){e=!1;break}if(e)return}}this.rebuildGroup(n)}computeRules(e,t,n,r){let i=qt(En(this.rules,t,n,r)),a={name:this.componentId+e,rules:r(i,``)};return this.instanceRules.set(e,a),a}rebuildGroup(e){let t=this.componentId;e.clearRules(t);for(let n of this.instanceRules.values())e.insertRules(t,n.name,n.rules)}};function Xn(e,...t){let n=Kn(e,...t),r=`sc-global-${Tt(JSON.stringify(n))}`,i=new Yn(n,r),a=e=>{let t=Ln(),n=k.useContext(Rn),a;{let e=k.useRef(null);e.current===null&&(e.current=t.styleSheet.allocateGSInstance(r)),a=e.current}t.styleSheet.server&&o(a,e,t.styleSheet,n,t.stylis);{let s=i.isStatic?[a,t.styleSheet,i]:[a,e,t.styleSheet,n,t.stylis,i],c=k.useRef(i);k.useLayoutEffect(()=>{t.styleSheet.server||(c.current!==i&&(t.styleSheet.clearRules(r),c.current=i),o(a,e,t.styleSheet,n,t.stylis))},s),k.useLayoutEffect(()=>()=>{t.styleSheet.server||i.removeStyles(a,t.styleSheet)},[a,t.styleSheet,i])}return t.styleSheet.server&&i.instanceRules.delete(a),null};function o(e,t,n,r,o){if(i.isStatic)i.renderStyles(e,ot,n,o);else{let s=Object.assign(Object.assign({},t),{theme:ht(t,r,a.defaultProps)});i.renderStyles(e,s,n,o)}}return k.memo(a)}var Zn,Qn=class{constructor(e,t){this[Zn]=!0,this.inject=(e,t=Fn)=>{let n=this.getName(t);if(!e.hasNameForId(this.id,n)){let r=t(this.rules,n,`@keyframes`);e.insertRules(this.id,n,r)}},this.name=e,this.id=at+e,this.rules=t,ut(this.id),Xt(this,()=>{throw Xe(12,String(this.name))})}getName(e=Fn){return e.hash?this.name+xt(e.hash>>>0):this.name}};function $n(e,...t){let n=qt(Kn(e,...t));return new Qn(Tt(n),n)}Zn=yn,`${Ze}`,`${Ze}`,`${Ze}`;var er=[`mousedown`,`touchstart`];function tr(e,t,n){let r=n?.enabled??!0,i=n?.events??er;(0,k.useEffect)(()=>{if(!r)return;let n=n=>{e.current&&n.target instanceof Node&&!e.current.contains(n.target)&&t(n)};for(let e of i)document.addEventListener(e,n);return()=>{for(let e of i)document.removeEventListener(e,n)}},[e,t,r,i])}var nr=A.div`
  position: relative;
  display: inline-flex;
`,rr=A.div`
  position: absolute;
  ${({$placement:e})=>e.side===`bottom`?`top: calc(100% + 6px);`:`bottom: calc(100% + 6px);`}
  inset-inline-start: 0;
  transform: translateX(${({$placement:e})=>e.shift}px);
  z-index: ${({theme:e})=>e.zIndex.dropdown};
  display: flex;
  flex-direction: column;
  min-width: 240px;
  max-width: min(320px, calc(100vw - 16px));
  max-height: min(80vh, 600px);
  overflow-y: auto;
  padding: 6px;
  border-radius: 10px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.background.secondary};
  box-shadow: ${({theme:e})=>e.shadows.lg};
  & > *,
  & > [role='group'] > * {
    flex-shrink: 0;
  }
`,ir=A.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
  min-height: 40px;
  padding: 8px 10px;
  border-radius: 6px;
  font: inherit;
  font-size: 14px;
  text-align: start;
  cursor: pointer;
  user-select: none;
  color: ${({theme:e})=>e.colors.text.primary};
  background: transparent;
  outline: 2px solid transparent;
  outline-offset: -2px;

  &:hover,
  &:focus {
    background: ${({theme:e})=>e.colors.hover.surface};
  }

  &:focus-visible {
    outline-color: ${({theme:e})=>e.colors.primary.main};
  }

  @media (pointer: coarse) {
    min-height: 44px;
  }
`,ar=A.span`
  display: inline-flex;
  flex: 0 0 auto;
`,or=A.span`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  min-width: 0;
`,sr=A.span`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.text.secondary};
`,cr=A.span`
  flex: 0 0 auto;
  color: ${({theme:e})=>e.colors.primary.main};
`,lr=A.div`
  padding: 6px 10px 4px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: ${({theme:e})=>e.colors.text.secondary};
`,ur=A.div`
  height: 1px;
  margin: 6px 4px;
  background: ${({theme:e})=>e.colors.border};
`,dr=8,fr={side:`bottom`,shift:0};function pr({entries:e,currentId:t,onPick:n,keepOpenOnSpace:r=!1}){let i=(0,k.useId)(),[a,o]=(0,k.useState)(!1),[s,c]=(0,k.useState)(0),[l,u]=(0,k.useState)(fr),d=(0,k.useRef)(null),f=(0,k.useRef)(null),p=(0,k.useRef)(null),m=(0,k.useRef)([]),h=(0,k.useCallback)(e=>{o(!1),e&&f.current?.focus()},[]);tr(d,()=>h(!1),{enabled:a}),(0,k.useEffect)(()=>{a&&m.current[s]?.focus()},[a,s]),(0,k.useLayoutEffect)(()=>{if(!a){u(fr);return}let e=p.current,t=f.current;if(e===null||t===null)return;let n=e.getBoundingClientRect(),r=document.documentElement.clientWidth,i=window.innerHeight,o=0;n.right>r-dr&&(o=r-dr-n.right),n.left+o<dr&&(o=dr-n.left);let s=t.getBoundingClientRect(),c=n.bottom>i-dr&&s.top>i-s.bottom?`top`:`bottom`;(o!==0||c!==`bottom`)&&u({side:c,shift:Math.round(o)})},[a]);let g=Math.max(0,e.findIndex(e=>e.id===t)),_=t=>{c(Math.max(0,Math.min(e.length-1,t))),o(!0)},v=t=>{t.key===`ArrowDown`||t.key===`Enter`||t.key===` `?(t.preventDefault(),_(g)):t.key===`ArrowUp`&&(t.preventDefault(),_(e.length-1))},y=(t,r)=>{let i=e[t];i!==void 0&&(n(i.id),r||h(!0))},b=t=>{if(t.length!==1||t===` `)return!1;let n=t.toLocaleLowerCase();for(let t=1;t<=e.length;t++){let r=(s+t)%e.length;if(e[r]?.label.toLocaleLowerCase().startsWith(n))return c(r),!0}return!1};return{open:a,placement:l,rootRef:d,triggerProps:{ref:f,"aria-haspopup":`menu`,"aria-expanded":a,"aria-controls":a?i:void 0,onClick:()=>a?h(!1):_(g),onKeyDown:v},menuProps:{ref:p,id:i,role:`menu`,onKeyDown:t=>{let n=e.length-1;if(t.key===`ArrowDown`)c(e=>e>=n?0:e+1);else if(t.key===`ArrowUp`)c(e=>e<=0?n:e-1);else if(t.key===`Home`)c(0);else if(t.key===`End`)c(n);else if(t.key===`Enter`)y(s,!1);else if(t.key===` `)y(s,r);else if(t.key===`Escape`)h(!0);else if(t.key===`Tab`){h(!1);return}else if(t.ctrlKey||t.metaKey||t.altKey||!b(t.key))return;t.preventDefault()}},itemProps:e=>({ref:t=>{m.current[e]=t},tabIndex:e===s?0:-1,onClick:()=>{c(e),y(e,!1)}}),close:h}}var mr=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),j=o(((e,t)=>{t.exports=mr()}))(),hr=180;function gr(e){return e.key===`Enter`||e.key===` `&&e.currentTarget.tagName!==`A`}function _r(e={}){let{disabled:t=!1,feedbackMs:n=hr,onHover:r,onPress:i,onPressSucceeded:a,onPressCancelled:o}=e,[s,c]=(0,k.useState)(`idle`),l=(0,k.useRef)(!1),u=(0,k.useRef)(!1),d=(0,k.useRef)(null),f=(0,k.useCallback)(()=>{d.current!==null&&(clearTimeout(d.current),d.current=null)},[]),p=(0,k.useRef)(!0);(0,k.useEffect)(()=>(p.current=!0,()=>{p.current=!1,f()}),[f]),(0,k.useEffect)(()=>{t&&(f(),l.current=!1,u.current=!1,c(`idle`))},[t,f]);let m=(0,k.useCallback)(()=>{p.current&&c(l.current?`hover`:`idle`)},[]),h=(0,k.useCallback)(e=>{f(),c(e),d.current=setTimeout(()=>{d.current=null,m()},n)},[f,n,m]),g=(0,k.useCallback)(()=>{t||u.current||(u.current=!0,f(),c(`pressed`),i?.())},[t,f,i]),_=(0,k.useCallback)(e=>{u.current&&(u.current=!1,h(e),e===`press-succeeded`?a?.():o?.())},[h,a,o]);return{state:s,handlers:(0,k.useMemo)(()=>({onPointerEnter:()=>{t||(l.current=!0,!u.current&&d.current===null&&c(`hover`),r?.(!0))},onPointerLeave:()=>{t||(l.current=!1,r?.(!1),u.current?_(`press-cancelled`):d.current===null&&c(`idle`))},onPointerDown:()=>g(),onPointerUp:()=>_(`press-succeeded`),onPointerCancel:()=>_(`press-cancelled`),onKeyDown:e=>{if(e.key===`Escape`){_(`press-cancelled`);return}gr(e)&&!e.repeat&&g()},onKeyUp:e=>{gr(e)&&_(`press-succeeded`)}}),[t,r,g,_])}}function vr(e,t){return n=>{e?.(n),t(n)}}var yr=Kn`
  transition:
    transform 0.1s ease,
    box-shadow 0.16s ease,
    opacity 0.12s ease,
    background 0.12s ease,
    border-color 0.12s ease,
    color 0.12s ease,
    filter 0.12s ease;

  &[data-interaction='pressed'] {
    transform: translateY(1px) scale(0.98);
  }
  &[data-interaction='press-succeeded'] {
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.success.main}66;
  }
  &[data-interaction='press-cancelled'] {
    opacity: 0.55;
  }
`,br=Kn`
  @media (pointer: coarse) {
    min-height: 44px;
  }
`;function xr(e){let{onHover:t,onPress:n,onPressSucceeded:r,onPressCancelled:i,...a}=e,o=a[`aria-disabled`]===!0||a[`aria-disabled`]===`true`,{state:s,handlers:c}=_r({disabled:a.disabled===!0||o,...t&&{onHover:t},...n&&{onPress:n},...r&&{onPressSucceeded:r},...i&&{onPressCancelled:i}});return{state:s,rest:a,handlers:{onPointerEnter:vr(a.onPointerEnter,c.onPointerEnter),onPointerLeave:vr(a.onPointerLeave,c.onPointerLeave),onPointerDown:vr(a.onPointerDown,c.onPointerDown),onPointerUp:vr(a.onPointerUp,c.onPointerUp),onPointerCancel:vr(a.onPointerCancel,c.onPointerCancel),onKeyDown:vr(a.onKeyDown,c.onKeyDown),onKeyUp:vr(a.onKeyUp,c.onKeyUp),onClick:e=>{if(o){e.preventDefault();return}a.onClick?.(e)}}}}var Sr={primary:Kn`
    border: 1px solid ${({theme:e})=>e.colors.primary.main};
    background: ${({theme:e})=>e.colors.primary.main}22;
    color: ${({theme:e})=>e.colors.primary.main};
    &:hover, &[data-interaction='hover'] { background: ${({theme:e})=>e.colors.primary.main}33; }
  `,secondary:Kn`
    border: 1px solid ${({theme:e})=>e.colors.border};
    background: ${({theme:e})=>e.colors.background.tertiary};
    color: ${({theme:e})=>e.colors.text.primary};
    &:hover, &[data-interaction='hover'] { border-color: ${({theme:e})=>e.colors.border.hover}; }
  `,danger:Kn`
    border: 1px solid ${({theme:e})=>e.colors.error.border};
    background: ${({theme:e})=>e.colors.error.background};
    color: ${({theme:e})=>e.colors.error.text};
    &:hover, &[data-interaction='hover'] { filter: brightness(1.15); }
  `,ghost:Kn`
    border: 1px solid transparent;
    background: transparent;
    color: ${({theme:e})=>e.colors.text.secondary};
    &:hover, &[data-interaction='hover'] { color: ${({theme:e})=>e.colors.text.primary}; }
    &[aria-disabled='true']:hover { color: ${({theme:e})=>e.colors.text.secondary}; }
  `,success:Kn`
    border: 1px solid ${({theme:e})=>e.colors.success.border};
    background: ${({theme:e})=>e.colors.success.background};
    color: ${({theme:e})=>e.colors.success.main};
    &:hover, &[data-interaction='hover'] { filter: brightness(1.15); }
  `,info:Kn`
    border: 1px solid ${({theme:e})=>e.colors.info.border};
    background: ${({theme:e})=>e.colors.info.background};
    color: ${({theme:e})=>e.colors.info.main};
    &:hover, &[data-interaction='hover'] { filter: brightness(1.15); }
  `,warning:Kn`
    border: 1px solid ${({theme:e})=>e.colors.warning.border};
    background: ${({theme:e})=>e.colors.warning.background};
    color: ${({theme:e})=>e.colors.warning.main};
    &:hover, &[data-interaction='hover'] { filter: brightness(1.15); }
  `},Cr=A.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 13px;
  border-radius: 8px;
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
  /* A button's own defaults, written out so ButtonLink (an <a>) renders the same box. */
  line-height: normal;
  text-align: center;
  text-decoration: none;
  ${({$variant:e=`secondary`})=>Sr[e]}
  ${yr}
  ${br}
  &:disabled { opacity: 0.5; cursor: default; }
  /* Focusable but inert (it keeps focus and its reason readable): looks disabled, and hover changes nothing. */
  &[aria-disabled='true'],
  &[aria-disabled='true']:hover {
    opacity: 0.5;
    cursor: not-allowed;
    filter: none;
  }
`,wr=(0,k.forwardRef)(function(e,t){let{state:n,rest:r,handlers:i}=xr(e);return(0,j.jsx)(Cr,{ref:t,"data-interaction":n,...r,...i})}),Tr=(0,k.forwardRef)(function(e,t){let{state:n,rest:r,handlers:i}=xr(e);return(0,j.jsx)(Cr,{as:`a`,ref:t,"data-interaction":n,...r,...i})});function Er(e){return e===`light`||e===`dark`||e===`system`}function Dr(e,t){for(let n of t.split(`;`)){let t=n.indexOf(`=`);if(!(t<0||n.slice(0,t).trim()!==e))try{return decodeURIComponent(n.slice(t+1).trim())}catch{return}}}function Or(e,t,n){let r=Dr(e,t);return r!==void 0&&Er(r)?r:n}var kr=`(prefers-color-scheme: dark)`;function Ar(e,t){return e===`system`?t?`dark`:`light`:e}function jr(){return typeof window<`u`&&typeof window.matchMedia==`function`&&window.matchMedia(`(prefers-color-scheme: dark)`).matches}function Mr(e){if(typeof window>`u`||typeof window.matchMedia!=`function`)return()=>{};let t=window.matchMedia(kr);return t.addEventListener(`change`,e),()=>t.removeEventListener(`change`,e)}var Nr=/^[a-z0-9-]+$/;function Pr(e,t){if(!Nr.test(e))throw Error(`preferenceCookie: ${JSON.stringify(e)} is not a plain token`);let n=[`${t.name}=${e}`,`Path=/`,`Max-Age=${Math.floor(t.maxAgeSeconds)}`,`SameSite=Lax`,`Secure`],r=t.domain?.replace(/^\./,``);return r!==void 0&&r!==``&&(t.host===r||t.host.endsWith(`.${r}`))&&n.push(`Domain=.${r}`),n.join(`; `)}var Fr={neutral:{id:`neutral`,label:`Neutral`,light:{name:`neutral`},dark:{name:`neutral-dark`}},synthwave:{id:`synthwave`,label:`Synthwave`,light:{name:`synthwave-light`},dark:{name:`synthwave`}},"pitch-deck":{id:`pitch-deck`,label:`Pitch deck`,light:{name:`pitch-deck-light`},dark:{name:`pitch-deck`}},luxe:{id:`luxe`,label:`Luxe`,light:{name:`luxe`},dark:{name:`luxe`,customTheme:{colors:{primary:{main:`#D4AF37`,dark:`#B8941F`,light:`#E8C4A0`},secondary:{main:`#E8C4A0`,dark:`#C4A07C`,light:`#F2D9B8`},accent:{main:`#C77DBA`,dark:`#A55F9A`,light:`#D499C8`},accentColors:{gold:`#D4AF37`,magenta:`#C77DBA`,cyan:`#87CEEB`,green:`#8FBC8F`},background:{primary:`#0a0a0f`,secondary:`#141420`,tertiary:`#1a1a2e`},surface:`#141420`,text:{primary:`#f0e6d3`,secondary:`#b8a99a`,muted:`#8f8698`,tertiary:`#b8a99a`},border:{default:`rgba(212, 175, 55, 0.12)`,hover:`rgba(212, 175, 55, 0.30)`},success:{main:`#4ade80`,background:`rgba(74, 222, 128, 0.10)`,border:`rgba(74, 222, 128, 0.35)`,text:`#86efac`},warning:{main:`#fbbf24`,background:`rgba(251, 191, 36, 0.10)`,border:`rgba(251, 191, 36, 0.35)`,text:`#fcd34d`},error:{main:`#f87171`,background:`rgba(248, 113, 113, 0.10)`,border:`rgba(248, 113, 113, 0.35)`,text:`#fca5a5`},info:{main:`#60a5fa`,background:`rgba(96, 165, 250, 0.10)`,border:`rgba(96, 165, 250, 0.35)`,text:`#93c5fd`},hover:{primary:`rgba(212, 175, 55, 0.06)`,secondary:`rgba(212, 175, 55, 0.12)`,surface:`rgba(212, 175, 55, 0.04)`},active:{primary:`rgba(212, 175, 55, 0.10)`,secondary:`rgba(212, 175, 55, 0.18)`},disabled:{background:`#2a2a38`,text:`#8f8698`}},typography:{fontFamily:{heading:`"Playfair Display", Georgia, serif`,body:`'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`}},shadows:{none:`none`,sm:`0 2px 8px rgba(0, 0, 0, 0.3)`,md:`0 4px 16px rgba(0, 0, 0, 0.4)`,lg:`0 8px 32px rgba(0, 0, 0, 0.5)`,xl:`0 16px 48px rgba(0, 0, 0, 0.6)`},extensions:{luxe:{goldShimmer:`linear-gradient(135deg, #D4AF37 0%, #E8C4A0 50%, #D4AF37 100%)`,elegantShadow:`0 10px 40px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(0, 0, 0, 0.3)`,subtleGradient:`linear-gradient(to bottom, #0a0a0f, #141420)`}}}}}},Ir=Object.keys(Fr);function Lr(e){return Object.hasOwn(Fr,e)}function Rr(e,t){return Fr[e][t]}function zr(e,t,n,r){let i=Dr(e,t);return i!==void 0&&Lr(i)&&n.includes(i)?i:r}var Br={luxe:{white:`#FFFFFF`,cream:`#FAF9F6`,lightGray:`#F5F5F5`,gray:`#E0E0E0`,mediumGray:`#9E9E9E`,darkGray:`#616161`,charcoal:`#2C2C2C`,black:`#000000`,gold:`#D4AF37`,rose:`#C9ADA7`,sage:`#9CAF88`,slate:`#708090`},lilith:{deepRed:`#8B0000`,crimson:`#DC143C`,burgundy:`#6B0F1A`,royalPurple:`#4B0082`,darkPurple:`#2E1A47`,plum:`#8B008B`,creatorGold:`#D4AF37`,bronze:`#CD7F32`,amberGold:`#FFBF00`,offWhite:`#F8F6F0`,warmCream:`#F5F1E8`,warmGray:`#B8B0A8`,charcoalGray:`#36342F`,deepBlack:`#1A1816`,black:`#000000`,roseGold:`#B76E79`,wine:`#722F37`},cyberpunk:{black:`#000000`,darkerBg:`#111111`,darkBg:`#1a1a1a`,electricMagenta:`#ff00ff`,magentaDark:`#cc00cc`,magentaLight:`#ff66ff`,neonCyan:`#00ffff`,cyanDark:`#00cccc`,cyanLight:`#66ffff`,neonGreen:`#00ff00`,greenDark:`#00cc00`,greenLight:`#66ff66`,electricOrange:`#ffaa00`,neonRed:`#ff4444`,white:`#ffffff`},synthwave:{black:`#0e0e0e`,darkerBg:`#1a1a2e`,darkBg:`#16213e`,neonPink:`#ff00c6`,pinkDark:`#d30cb8`,pinkLight:`#ff66d9`,neonCyan:`#00f3ff`,cyanDark:`#00b8cc`,cyanLight:`#6df1d8`,neonPurple:`#8a2be2`,purpleDark:`#5c2c6d`,purpleLight:`#a855f7`,neonYellow:`#ffef00`,neonGreen:`#00ff8e`,neonRed:`#ff007b`,white:`#ffffff`,lightBg:`#f3fcfb`,lightBgAlt:`#f6d1d9`,lightBgAccent:`#8ed5ec`,mutedPink:`#c9388f`,mutedCyan:`#0891b2`,mutedPurple:`#7c3aed`,lightText:`#1b052b`},gray:{50:`#f9fafb`,100:`#f3f4f6`,200:`#e5e7eb`,300:`#d1d5db`,400:`#9ca3af`,500:`#6b7280`,600:`#4b5563`,700:`#374151`,800:`#1f2937`,900:`#111827`,950:`#111111`},semantic:{success:`#16a34a`,successLight:`#22c55e`,successDark:`#15803d`,warning:`#f59e0b`,warningLight:`#fbbf24`,warningDark:`#d97706`,error:`#ef4444`,errorLight:`#f87171`,errorDark:`#dc2626`,info:`#3b82f6`,infoLight:`#60a5fa`,infoDark:`#2563eb`}},M={fonts:{heading:{luxe:`"Playfair Display", "Georgia", "Times New Roman", serif`,lilith:`"Cinzel", "Playfair Display", "Georgia", serif`,cyberpunk:`"Courier New", "Consolas", monospace`,synthwave:`"Orbitron", "Rajdhani", "Courier New", monospace`},body:{luxe:`"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,lilith:`"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,cyberpunk:`"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,synthwave:`"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`},mono:`"Fira Code", "Courier New", monospace`},fontSizes:{xs:`0.75rem`,sm:`0.875rem`,base:`1rem`,md:`1.125rem`,lg:`1.25rem`,xl:`1.5rem`,"2xl":`2rem`,"3xl":`2.5rem`,"4xl":`3rem`,"5xl":`3.5rem`},fontSizesFluid:{xs:`clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)`,sm:`clamp(0.875rem, 0.8rem + 0.375vw, 1rem)`,base:`clamp(1rem, 0.95rem + 0.25vw, 1.125rem)`,md:`clamp(1.125rem, 1rem + 0.625vw, 1.5rem)`,lg:`clamp(1.5rem, 1.25rem + 1.25vw, 2.25rem)`,xl:`clamp(2rem, 1.5rem + 2.5vw, 3.5rem)`,"2xl":`clamp(2.5rem, 2rem + 2.5vw, 4.5rem)`,"3xl":`clamp(3rem, 2.5rem + 2.5vw, 5.5rem)`},fontWeights:{light:300,regular:400,medium:500,semibold:600,bold:700},lineHeights:{none:1,tight:1.2,base:1.5,relaxed:1.75,loose:2},letterSpacing:{tighter:`-0.05em`,tight:`-0.025em`,normal:`0`,wide:`0.025em`,wider:`0.05em`,widest:`0.1em`}},N={0:`0`,1:`0.25rem`,2:`0.5rem`,3:`0.75rem`,4:`1rem`,5:`1.25rem`,6:`1.5rem`,8:`2rem`,10:`2.5rem`,12:`3rem`,16:`4rem`,20:`5rem`,24:`6rem`,32:`8rem`,40:`10rem`,48:`12rem`,56:`14rem`,64:`16rem`},P={none:`0`,xs:`0.125rem`,sm:`0.25rem`,md:`0.375rem`,lg:`0.5rem`,xl:`0.75rem`,"2xl":`1rem`,full:`9999px`},F={light:{none:`none`,sm:`0 1px 2px 0 rgba(0, 0, 0, 0.05)`,base:`0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)`,md:`0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,lg:`0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,xl:`0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`,"2xl":`0 25px 50px -12px rgba(0, 0, 0, 0.25)`,inner:`inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)`},dark:{none:`none`,sm:`0 1px 2px 0 rgba(0, 0, 0, 0.5)`,md:`0 4px 6px -1px rgba(0, 0, 0, 0.5)`,lg:`0 10px 15px -3px rgba(0, 0, 0, 0.5)`,xl:`0 20px 25px -5px rgba(0, 0, 0, 0.5)`},neon:{magenta:`0 0 10px #ff00ff`,cyan:`0 0 10px #00ffff`,green:`0 0 10px #00ff00`,orange:`0 0 10px #ffaa00`,large:`0 0 15px`,hotPink:`0 0 15px #ff00c6`,electricCyan:`0 0 15px #00f3ff`,violet:`0 0 15px #8a2be2`,pulseYellow:`0 0 15px #ffef00`},mystical:{crimson:`0 0 20px rgba(220, 20, 60, 0.4)`,purple:`0 0 20px rgba(75, 0, 130, 0.4)`,gold:`0 0 15px rgba(212, 175, 55, 0.3)`}},I={timing:{fast:`150ms`,base:`300ms`,slow:`500ms`,slower:`700ms`},easing:{linear:`linear`,ease:`ease`,easeIn:`cubic-bezier(0.4, 0, 1, 1)`,easeOut:`cubic-bezier(0, 0, 0.2, 1)`,easeInOut:`cubic-bezier(0.4, 0, 0.2, 1)`},luxe:{fast:`150ms cubic-bezier(0.4, 0, 0.2, 1)`,base:`300ms cubic-bezier(0.4, 0, 0.2, 1)`,slow:`500ms cubic-bezier(0.4, 0, 0.2, 1)`,slower:`700ms cubic-bezier(0.4, 0, 0.2, 1)`},lilith:{fast:`200ms cubic-bezier(0.4, 0, 0.2, 1)`,base:`350ms cubic-bezier(0.4, 0, 0.2, 1)`,slow:`550ms cubic-bezier(0.4, 0, 0.2, 1)`,slower:`800ms cubic-bezier(0.4, 0, 0.2, 1)`},cyberpunk:{fast:`all 0.2s ease`,base:`all 0.3s ease`,slow:`all 0.5s ease`},synthwave:{fast:`all 0.15s cubic-bezier(0.4, 0, 0.2, 1)`,base:`all 0.25s cubic-bezier(0.4, 0, 0.2, 1)`,slow:`all 0.4s cubic-bezier(0.4, 0, 0.2, 1)`}},L={hide:-1,base:0,dropdown:1e3,sticky:1100,fixed:1200,overlay:1300,modal:1400,popover:1500,toast:1600,tooltip:1700},R={xs:`0px`,sm:`640px`,md:`768px`,lg:`1024px`,xl:`1280px`,"2xl":`1536px`},Vr={0:0,5:.05,10:.1,20:.2,25:.25,30:.3,40:.4,50:.5,60:.6,70:.7,75:.75,80:.8,90:.9,95:.95,100:1};function z(e,t,n){let r=typeof e==`string`?{main:e,dark:t,light:n}:e;return{main:r.main,dark:r.dark,light:r.light,500:r.numeric?.[500]??r.main,50:r.numeric?.[50],100:r.numeric?.[100],200:r.numeric?.[200],300:r.numeric?.[300]??r.light,400:r.numeric?.[400],600:r.numeric?.[600],700:r.numeric?.[700]??r.dark,800:r.numeric?.[800],900:r.numeric?.[900],950:r.numeric?.[950],toString:()=>r.main}}function B(e,t,n,r){let i=typeof e==`string`?{main:e,background:t,border:n,text:r}:e;return{main:i.main,background:i.background,border:i.border,text:i.text,500:i.numeric?.[500]??i.main,50:i.numeric?.[50],100:i.numeric?.[100],200:i.numeric?.[200],300:i.numeric?.[300],400:i.numeric?.[400],600:i.numeric?.[600],700:i.numeric?.[700],800:i.numeric?.[800],900:i.numeric?.[900],950:i.numeric?.[950],toString:()=>i.main}}function Hr(e,t){return{default:e,hover:t,toString:()=>e}}var{cyberpunk:V}=Br,{gray:Ur}=Br,Wr={colors:{primary:z({main:V.electricMagenta,dark:V.magentaDark,light:V.magentaLight,numeric:{50:`#fff0f7`,100:`#ffe0ef`,200:`#ffc0df`,300:V.magentaLight,400:`#ff3399`,500:V.electricMagenta,600:`#e0005f`,700:V.magentaDark,800:`#990044`,900:`#660033`,950:`#330019`}}),secondary:z({main:V.neonCyan,dark:V.cyanDark,light:V.cyanLight,numeric:{50:`#f0ffff`,100:`#e0ffff`,200:`#c0ffff`,300:V.cyanLight,400:`#33f7ff`,500:V.neonCyan,600:`#00d4dd`,700:V.cyanDark,800:`#008899`,900:`#005566`,950:`#002233`}}),accent:z({main:V.neonGreen,dark:V.greenDark,light:V.greenLight,numeric:{50:`#f0fff0`,100:`#e0ffe0`,200:`#c0ffc0`,300:V.greenLight,400:`#50e050`,500:V.neonGreen,600:`#28b428`,700:V.greenDark,800:`#147014`,900:`#0a3a0a`,950:`#051a05`}}),accentColors:{magenta:V.electricMagenta,cyan:V.neonCyan,gold:`#FFD700`,green:V.neonGreen},background:{primary:V.black,secondary:V.darkBg,tertiary:Ur[800]},surface:V.darkBg,text:{primary:V.white,secondary:Ur[400],muted:Ur[500],tertiary:Ur[400]},border:Hr(Ur[700],Ur[600]),success:B({main:`#1B9E3E`,background:`${V.neonGreen}15`,border:`${V.neonGreen}40`,text:V.neonGreen,numeric:{50:`#f0fff0`,100:`#e0ffe0`,200:`#c0ffc0`,300:V.greenLight,400:`#50e050`,500:V.neonGreen,600:`#28b428`,700:V.greenDark,800:`#147014`,900:`#0a3a0a`,950:`#051a05`}}),warning:B({main:V.electricOrange,background:`${V.electricOrange}15`,border:`${V.electricOrange}40`,text:V.electricOrange,numeric:{50:`#fff7f0`,100:`#ffefe0`,200:`#ffdfc0`,300:`#ffcfa0`,400:`#ffbf80`,500:V.electricOrange,600:`#e08000`,700:`#b36600`,800:`#864d00`,900:`#5a3300`,950:`#2d1a00`}}),error:B({main:V.neonRed,background:`${V.neonRed}15`,border:`${V.neonRed}40`,text:V.neonRed,numeric:{50:`#fff0f0`,100:`#ffe0e0`,200:`#ffc0c0`,300:`#ff8080`,400:`#ff4040`,500:V.neonRed,600:`#e00000`,700:`#b30000`,800:`#860000`,900:`#5a0000`,950:`#2d0000`}}),info:B({main:V.neonCyan,background:`${V.neonCyan}15`,border:`${V.neonCyan}40`,text:V.neonCyan,numeric:{50:`#f0ffff`,100:`#e0ffff`,200:`#c0ffff`,300:V.cyanLight,400:`#33f7ff`,500:V.neonCyan,600:`#00d4dd`,700:V.cyanDark,800:`#008899`,900:`#005566`,950:`#002233`}}),hover:{primary:V.magentaLight,secondary:V.cyanLight,surface:V.darkBg},active:{primary:V.magentaDark,secondary:V.cyanDark},disabled:{background:Ur[800],text:Ur[500]}},spacing:{xxxs:`1px`,xxs:`2px`,xs:N[1],sm:N[2],md:N[4],lg:N[6],xl:N[8],xxl:N[12],xxxl:N[16],xxxxl:N[20],xxxxxl:N[24]},typography:{fontFamily:{heading:M.fonts.heading.cyberpunk,body:M.fonts.body.cyberpunk,mono:M.fonts.mono},fontSize:{xxs:`10px`,xs:M.fontSizes.xs,sm:M.fontSizes.sm,md:M.fontSizes.sm,base:M.fontSizes.base,lg:M.fontSizes.md,xl:M.fontSizes.lg,"2xl":M.fontSizes.xl,"3xl":M.fontSizes[`2xl`],"4xl":`36px`,"5xl":`48px`},fontWeight:{light:M.fontWeights.light,normal:M.fontWeights.regular,medium:M.fontWeights.medium,semibold:M.fontWeights.semibold,bold:M.fontWeights.bold},lineHeight:{tight:M.lineHeights.tight,normal:M.lineHeights.base,relaxed:M.lineHeights.relaxed,loose:M.lineHeights.loose}},letterSpacing:{tight:`-0.025em`,normal:`0`,wide:`0.025em`},borderWidth:{thin:`1px`,medium:`2px`,thick:`3px`},shadows:{none:F.dark.none,sm:F.dark.sm,md:F.dark.md,lg:F.dark.lg,xl:F.dark.xl},borderRadius:{none:P.none,xs:P.xs,sm:P.sm,md:P.md,lg:P.lg,xl:P.xl,full:P.full},transitions:{fast:I.cyberpunk.fast,normal:I.cyberpunk.base,slow:I.cyberpunk.slow},duration:{instant:`0ms`,fast:I.timing.fast,normal:I.timing.base,slow:I.timing.slow,slower:I.timing.slower},easing:{linear:I.easing.linear,ease:I.easing.ease,easeIn:I.easing.easeIn,easeOut:I.easing.easeOut,easeInOut:I.easing.easeInOut},zIndex:{base:L.base,dropdown:L.dropdown,sticky:L.sticky,fixed:L.fixed,modal:L.modal,popover:L.popover,tooltip:L.tooltip,toast:L.toast},breakpoints:{xs:R.xs,sm:R.sm,md:R.md,lg:R.lg,xl:R.xl,"2xl":R[`2xl`]},opacity:Vr,extensions:{cyberpunk:{neonGlow:{magenta:F.neon.magenta,cyan:F.neon.cyan,green:F.neon.green,large:F.neon.large},scanlines:`repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px)`,glitchEffect:`drop-shadow(2px 0 0 #ff00ff) drop-shadow(-2px 0 0 #00ffff)`}}},{luxe:Gr,semantic:Kr}=Br,qr={colors:{primary:z(Gr.charcoal,Gr.black,Gr.darkGray),secondary:z(`#A88C24`,`#8A7318`,Gr.gold),accent:z(Gr.rose,`#A89089`,`#D9C9C3`),accentColors:{magenta:Gr.rose,cyan:`#87CEEB`,gold:Gr.gold,green:`#8FBC8F`},background:{primary:Gr.white,secondary:Gr.lightGray,tertiary:Gr.cream},surface:Gr.lightGray,text:{primary:Gr.charcoal,secondary:Gr.darkGray,muted:Gr.mediumGray,tertiary:Gr.darkGray},border:Hr(Gr.mediumGray,Gr.darkGray),success:B(Kr.success,`${Kr.success}15`,`${Kr.success}40`,Kr.successDark),warning:B(Kr.warning,`${Kr.warning}15`,`${Kr.warning}40`,Kr.warningDark),error:B(Kr.error,`${Kr.error}15`,`${Kr.error}40`,Kr.errorDark),info:B(Kr.info,`${Kr.info}15`,`${Kr.info}40`,Kr.infoDark),hover:{primary:`rgba(44, 44, 44, 0.12)`,secondary:`rgba(212, 175, 55, 0.12)`,surface:`rgba(44, 44, 44, 0.04)`},active:{primary:`rgba(44, 44, 44, 0.08)`,secondary:`rgba(212, 175, 55, 0.20)`},disabled:{background:Gr.gray,text:Gr.darkGray}},spacing:{xs:N[1],sm:N[2],md:N[4],lg:N[6],xl:N[8],xxl:N[12]},typography:{fontFamily:{heading:M.fonts.heading.luxe,body:M.fonts.body.luxe,mono:M.fonts.mono},fontSize:{xs:M.fontSizesFluid.xs,sm:M.fontSizesFluid.sm,md:M.fontSizesFluid.sm,base:M.fontSizesFluid.base,lg:M.fontSizesFluid.md,xl:M.fontSizesFluid.lg,"2xl":M.fontSizesFluid.xl,"3xl":M.fontSizesFluid[`2xl`],"4xl":`36px`,"5xl":`48px`},fontWeight:{light:M.fontWeights.light,normal:M.fontWeights.regular,medium:M.fontWeights.medium,semibold:M.fontWeights.semibold,bold:M.fontWeights.bold},lineHeight:{tight:M.lineHeights.tight,normal:M.lineHeights.base,relaxed:M.lineHeights.relaxed,loose:M.lineHeights.loose},fontSizeFluid:{xs:M.fontSizesFluid.xs,sm:M.fontSizesFluid.sm,base:M.fontSizesFluid.base,md:M.fontSizesFluid.md,lg:M.fontSizesFluid.lg,xl:M.fontSizesFluid.xl,"2xl":M.fontSizesFluid[`2xl`],"3xl":M.fontSizesFluid[`3xl`]}},shadows:{none:F.light.none,sm:F.light.sm,md:F.light.md,lg:F.light.lg,xl:F.light.xl},borderRadius:{none:P.none,sm:P.xs,md:P.md,lg:P.lg,full:P.full},transitions:{fast:I.luxe.fast,normal:I.luxe.base,slow:I.luxe.slow},duration:{instant:`0ms`,fast:I.timing.fast,normal:I.timing.base,slow:I.timing.slow,slower:I.timing.slower},easing:{linear:I.easing.linear,ease:I.easing.ease,easeIn:I.easing.easeIn,easeOut:I.easing.easeOut,easeInOut:I.easing.easeInOut},zIndex:{base:L.base,dropdown:L.dropdown,sticky:L.sticky,fixed:L.fixed,modal:L.modal,popover:L.popover,tooltip:L.tooltip,toast:L.toast},breakpoints:{xs:R.xs,sm:R.sm,md:R.md,lg:R.lg,xl:R.xl,"2xl":R[`2xl`]},opacity:Vr,extensions:{luxe:{goldShimmer:`linear-gradient(135deg, ${Gr.gold} 0%, ${Gr.gold} 50%, ${Gr.gold} 100%)`,elegantShadow:`0 10px 40px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)`,subtleGradient:`linear-gradient(to bottom, ${Gr.white}, ${Gr.cream})`}}},{lilith:H,semantic:Jr}=Br,Yr={colors:{primary:z(H.crimson,H.burgundy,H.roseGold),secondary:z(`#A88C24`,H.bronze,H.creatorGold),accent:z(H.royalPurple,H.darkPurple,H.plum),accentColors:{magenta:H.crimson,cyan:`#9D4EDD`,gold:H.creatorGold,green:`#6A994E`},background:{primary:H.offWhite,secondary:H.warmCream,tertiary:`#E8E4DB`},surface:H.warmCream,text:{primary:H.deepBlack,secondary:H.charcoalGray,muted:H.warmGray,tertiary:`#706A63`},border:Hr(`#ADA59D`,H.charcoalGray),success:B(Jr.success,`${Jr.success}15`,`${Jr.success}40`,Jr.successDark),warning:B(Jr.warning,`${Jr.warning}15`,`${Jr.warning}40`,Jr.warningDark),error:B(Jr.error,`${Jr.error}15`,`${Jr.error}40`,Jr.errorDark),info:B(Jr.info,`${Jr.info}15`,`${Jr.info}40`,Jr.infoDark),hover:{primary:`rgba(220, 20, 60, 0.12)`,secondary:`rgba(212, 175, 55, 0.15)`,surface:`rgba(54, 52, 47, 0.04)`},active:{primary:`rgba(220, 20, 60, 0.20)`,secondary:`rgba(212, 175, 55, 0.25)`},disabled:{background:H.warmGray,text:H.charcoalGray}},spacing:{xs:N[1],sm:N[2],md:N[4],lg:N[6],xl:N[8],xxl:N[12]},typography:{fontFamily:{heading:M.fonts.heading.lilith,body:M.fonts.body.lilith,mono:M.fonts.mono},fontSize:{xs:M.fontSizesFluid.xs,sm:M.fontSizesFluid.sm,md:M.fontSizesFluid.sm,base:M.fontSizesFluid.base,lg:M.fontSizesFluid.md,xl:M.fontSizesFluid.lg,"2xl":M.fontSizesFluid.xl,"3xl":M.fontSizesFluid[`2xl`],"4xl":`36px`,"5xl":`48px`},fontWeight:{light:M.fontWeights.light,normal:M.fontWeights.regular,medium:M.fontWeights.medium,semibold:M.fontWeights.semibold,bold:M.fontWeights.bold},lineHeight:{tight:M.lineHeights.tight,normal:M.lineHeights.base,relaxed:M.lineHeights.relaxed,loose:M.lineHeights.loose},fontSizeFluid:{xs:M.fontSizesFluid.xs,sm:M.fontSizesFluid.sm,base:M.fontSizesFluid.base,md:M.fontSizesFluid.md,lg:M.fontSizesFluid.lg,xl:M.fontSizesFluid.xl,"2xl":M.fontSizesFluid[`2xl`],"3xl":M.fontSizesFluid[`3xl`]}},shadows:{none:F.light.none,sm:F.light.sm,md:F.light.md,lg:F.light.lg,xl:F.light.xl},borderRadius:{none:P.none,sm:P.xs,md:P.md,lg:P.lg,full:P.full},transitions:{fast:I.lilith.fast,normal:I.lilith.base,slow:I.lilith.slow},duration:{instant:`0ms`,fast:I.timing.fast,normal:I.timing.base,slow:I.timing.slow,slower:I.timing.slower},easing:{linear:I.easing.linear,ease:I.easing.ease,easeIn:I.easing.easeIn,easeOut:I.easing.easeOut,easeInOut:I.easing.easeInOut},zIndex:{base:L.base,dropdown:L.dropdown,sticky:L.sticky,fixed:L.fixed,modal:L.modal,popover:L.popover,tooltip:L.tooltip,toast:L.toast},breakpoints:{xs:R.xs,sm:R.sm,md:R.md,lg:R.lg,xl:R.xl,"2xl":R[`2xl`]},opacity:Vr,extensions:{lilith:{crimsonGradient:`linear-gradient(135deg, ${H.burgundy} 0%, ${H.crimson} 50%, ${H.deepRed} 100%)`,purpleGradient:`linear-gradient(135deg, ${H.darkPurple} 0%, ${H.royalPurple} 50%, ${H.plum} 100%)`,goldShimmer:`linear-gradient(135deg, ${H.bronze} 0%, ${H.creatorGold} 50%, ${H.amberGold} 100%)`,crimsonGlow:F.mystical.crimson,purpleGlow:F.mystical.purple,goldGlow:F.mystical.gold,warmBackground:`linear-gradient(to bottom, ${H.offWhite}, ${H.warmCream})`,darkVariant:{background:H.deepBlack,surface:H.charcoalGray,text:H.offWhite}}}},{synthwave:U,gray:Xr}=Br,Zr={colors:{primary:z({main:U.neonPink,dark:U.pinkDark,light:U.pinkLight,numeric:{50:`#fff0f8`,100:`#ffe0f0`,200:`#ffc0e0`,300:U.pinkLight,400:`#ff33cc`,500:U.neonPink,600:`#e000b0`,700:U.pinkDark,800:`#990080`,900:`#660055`,950:`#33002a`}}),secondary:z({main:U.neonCyan,dark:U.cyanDark,light:U.cyanLight,numeric:{50:`#f0ffff`,100:`#e0ffff`,200:`#c0ffff`,300:U.cyanLight,400:`#33f0ff`,500:U.neonCyan,600:`#00d0e0`,700:U.cyanDark,800:`#008099`,900:`#005066`,950:`#002833`}}),accent:z({main:U.neonPurple,dark:U.purpleDark,light:U.purpleLight,numeric:{50:`#f5f0ff`,100:`#ebe0ff`,200:`#d6c0ff`,300:U.purpleLight,400:`#9945ff`,500:U.neonPurple,600:`#7020c0`,700:U.purpleDark,800:`#401a60`,900:`#200d30`,950:`#100618`}}),accentColors:{magenta:U.neonPink,cyan:U.neonCyan,gold:U.neonYellow,green:U.neonGreen},background:{primary:U.black,secondary:U.darkerBg,tertiary:U.darkBg},surface:U.darkerBg,text:{primary:U.white,secondary:Xr[400],muted:Xr[500],tertiary:Xr[400]},border:Hr(U.neonPurple,U.purpleLight),success:B({main:`#059669`,background:`${U.neonGreen}15`,border:`${U.neonGreen}40`,text:U.neonGreen,numeric:{50:`#f0fff5`,100:`#e0ffea`,200:`#c0ffd5`,300:`#80ffb0`,400:`#40ff90`,500:U.neonGreen,600:`#00cc70`,700:`#009955`,800:`#006640`,900:`#003320`,950:`#001a10`}}),warning:B({main:U.neonYellow,background:`${U.neonYellow}15`,border:`${U.neonYellow}40`,text:U.neonYellow,numeric:{50:`#fffef0`,100:`#fffce0`,200:`#fff9c0`,300:`#fff580`,400:`#fff240`,500:U.neonYellow,600:`#ccbf00`,700:`#998f00`,800:`#666000`,900:`#333000`,950:`#1a1800`}}),error:B({main:U.neonRed,background:`${U.neonRed}15`,border:`${U.neonRed}40`,text:U.neonRed,numeric:{50:`#fff0f5`,100:`#ffe0ea`,200:`#ffc0d5`,300:`#ff80b0`,400:`#ff4090`,500:U.neonRed,600:`#cc0062`,700:`#99004a`,800:`#660031`,900:`#330019`,950:`#1a000c`}}),info:B({main:U.neonCyan,background:`${U.neonCyan}15`,border:`${U.neonCyan}40`,text:U.neonCyan,numeric:{50:`#f0ffff`,100:`#e0ffff`,200:`#c0ffff`,300:U.cyanLight,400:`#33f0ff`,500:U.neonCyan,600:`#00d0e0`,700:U.cyanDark,800:`#008099`,900:`#005066`,950:`#002833`}}),hover:{primary:U.pinkLight,secondary:U.cyanLight,surface:U.darkBg},active:{primary:U.pinkDark,secondary:U.cyanDark},disabled:{background:Xr[800],text:Xr[500]}},spacing:{xxxs:`1px`,xxs:`2px`,xs:N[1],sm:N[2],md:N[4],lg:N[6],xl:N[8],xxl:N[12],xxxl:N[16],xxxxl:N[20],xxxxxl:N[24]},typography:{fontFamily:{heading:M.fonts.heading.synthwave,body:M.fonts.body.synthwave,mono:M.fonts.mono},fontSize:{xxs:`10px`,xs:M.fontSizes.xs,sm:M.fontSizes.sm,md:M.fontSizes.sm,base:M.fontSizes.base,lg:M.fontSizes.md,xl:M.fontSizes.lg,"2xl":M.fontSizes.xl,"3xl":M.fontSizes[`2xl`],"4xl":`36px`,"5xl":`48px`},fontWeight:{light:M.fontWeights.light,normal:M.fontWeights.regular,medium:M.fontWeights.medium,semibold:M.fontWeights.semibold,bold:M.fontWeights.bold},lineHeight:{tight:M.lineHeights.tight,normal:M.lineHeights.base,relaxed:M.lineHeights.relaxed,loose:M.lineHeights.loose}},letterSpacing:{tight:`-0.025em`,normal:`0`,wide:`0.05em`},borderWidth:{thin:`1px`,medium:`2px`,thick:`3px`},shadows:{none:F.dark.none,sm:F.dark.sm,md:F.dark.md,lg:F.dark.lg,xl:F.dark.xl},borderRadius:{none:P.none,xs:P.xs,sm:P.sm,md:P.md,lg:P.lg,xl:P.xl,full:P.full},transitions:{fast:I.synthwave.fast,normal:I.synthwave.base,slow:I.synthwave.slow},duration:{instant:`0ms`,fast:I.timing.fast,normal:I.timing.base,slow:I.timing.slow,slower:I.timing.slower},easing:{linear:I.easing.linear,ease:I.easing.ease,easeIn:I.easing.easeIn,easeOut:I.easing.easeOut,easeInOut:I.easing.easeInOut},zIndex:{base:L.base,dropdown:L.dropdown,sticky:L.sticky,fixed:L.fixed,modal:L.modal,popover:L.popover,tooltip:L.tooltip,toast:L.toast},breakpoints:{xs:R.xs,sm:R.sm,md:R.md,lg:R.lg,xl:R.xl,"2xl":R[`2xl`]},opacity:Vr,extensions:{synthwave:{neonGlow:{magenta:`0 0 15px ${U.neonPink}, 0 0 30px ${U.neonPink}80`,cyan:`0 0 15px ${U.neonCyan}, 0 0 30px ${U.neonCyan}80`,purple:`0 0 15px ${U.neonPurple}, 0 0 30px ${U.neonPurple}80`,yellow:`0 0 15px ${U.neonYellow}, 0 0 30px ${U.neonYellow}80`},sunsetGradient:`linear-gradient(180deg, ${U.darkerBg} 0%, ${U.darkBg} 30%, #0f3460 50%, ${U.neonPink}40 80%, ${U.neonRed}40 100%)`,gridPattern:`
        linear-gradient(transparent 0%, transparent 94%, ${U.neonPink}20 94%, ${U.neonPink}20 100%),
        linear-gradient(90deg, transparent 0%, transparent 94%, ${U.neonPink}20 94%, ${U.neonPink}20 100%)
      `.trim(),chromaShift:`drop-shadow(2px 0 0 ${U.neonPink}) drop-shadow(-2px 0 0 ${U.neonCyan})`,horizonLine:`linear-gradient(90deg, transparent 0%, ${U.neonPink} 50%, transparent 100%)`,sunGradient:`linear-gradient(180deg, ${U.neonPink} 0%, #ff6600 50%, ${U.neonYellow} 100%)`}}},{synthwave:W,gray:Qr}=Br,$r={colors:{primary:z({main:W.mutedPink,dark:`#a12870`,light:`#e991c0`,numeric:{50:`#fdf2f8`,100:`#fce7f3`,200:`#fbcfe8`,300:`#f9a8d4`,400:`#f472b6`,500:W.mutedPink,600:`#a12870`,700:`#831d5a`,800:`#6b1548`,900:`#500f36`,950:`#2d0a1e`}}),secondary:z({main:W.mutedCyan,dark:`#0e7490`,light:`#67e8f9`,numeric:{50:`#ecfeff`,100:`#cffafe`,200:`#a5f3fc`,300:`#67e8f9`,400:`#22d3ee`,500:W.mutedCyan,600:`#0e7490`,700:`#155e75`,800:`#164e63`,900:`#083344`,950:`#042f2e`}}),accent:z({main:W.mutedPurple,dark:`#5b21b6`,light:`#a78bfa`,numeric:{50:`#f5f3ff`,100:`#ede9fe`,200:`#ddd6fe`,300:`#c4b5fd`,400:`#a78bfa`,500:W.mutedPurple,600:`#6d28d9`,700:`#5b21b6`,800:`#4c1d95`,900:`#3b0d74`,950:`#1e0a3c`}}),accentColors:{magenta:W.mutedPink,cyan:W.mutedCyan,gold:`#d4a000`,green:`#059669`},background:{primary:W.lightBg,secondary:W.lightBgAlt,tertiary:W.lightBgAccent},surface:`#ffffff`,text:{primary:W.lightText,secondary:`#4a2c4a`,muted:`#6b5c6b`,tertiary:Qr[500]},border:Hr(Qr[400],Qr[500]),success:B({main:`#059669`,background:`#05966915`,border:`#05966940`,text:`#047857`,numeric:{50:`#ecfdf5`,100:`#d1fae5`,200:`#a7f3d0`,300:`#6ee7b7`,400:`#34d399`,500:`#10b981`,600:`#059669`,700:`#047857`,800:`#065f46`,900:`#064e3b`,950:`#022c22`}}),warning:B({main:`#d97706`,background:`#d9770615`,border:`#d9770640`,text:`#b45309`,numeric:{50:`#fffbeb`,100:`#fef3c7`,200:`#fde68a`,300:`#fcd34d`,400:`#fbbf24`,500:`#f59e0b`,600:`#d97706`,700:`#b45309`,800:`#92400e`,900:`#78350f`,950:`#451a03`}}),error:B({main:`#dc2626`,background:`#dc262615`,border:`#dc262640`,text:`#b91c1c`,numeric:{50:`#fef2f2`,100:`#fee2e2`,200:`#fecaca`,300:`#fca5a5`,400:`#f87171`,500:`#ef4444`,600:`#dc2626`,700:`#b91c1c`,800:`#991b1b`,900:`#7f1d1d`,950:`#450a0a`}}),info:B({main:W.mutedCyan,background:`${W.mutedCyan}15`,border:`${W.mutedCyan}40`,text:`#0e7490`,numeric:{50:`#ecfeff`,100:`#cffafe`,200:`#a5f3fc`,300:`#67e8f9`,400:`#22d3ee`,500:W.mutedCyan,600:`#0e7490`,700:`#155e75`,800:`#164e63`,900:`#083344`,950:`#042f2e`}}),hover:{primary:`#e991c0`,secondary:`#67e8f9`,surface:`#fce4ec`},active:{primary:`#a12870`,secondary:`#0e7490`},disabled:{background:Qr[200],text:Qr[400]}},spacing:{xxxs:`1px`,xxs:`2px`,xs:N[1],sm:N[2],md:N[4],lg:N[6],xl:N[8],xxl:N[12],xxxl:N[16],xxxxl:N[20],xxxxxl:N[24]},typography:{fontFamily:{heading:M.fonts.heading.synthwave,body:M.fonts.body.synthwave,mono:M.fonts.mono},fontSize:{xxs:`10px`,xs:M.fontSizes.xs,sm:M.fontSizes.sm,md:M.fontSizes.sm,base:M.fontSizes.base,lg:M.fontSizes.md,xl:M.fontSizes.lg,"2xl":M.fontSizes.xl,"3xl":M.fontSizes[`2xl`],"4xl":`36px`,"5xl":`48px`},fontWeight:{light:M.fontWeights.light,normal:M.fontWeights.regular,medium:M.fontWeights.medium,semibold:M.fontWeights.semibold,bold:M.fontWeights.bold},lineHeight:{tight:M.lineHeights.tight,normal:M.lineHeights.base,relaxed:M.lineHeights.relaxed,loose:M.lineHeights.loose}},letterSpacing:{tight:`-0.025em`,normal:`0`,wide:`0.05em`},borderWidth:{thin:`1px`,medium:`2px`,thick:`3px`},shadows:{none:F.light.none,sm:F.light.sm,md:F.light.md,lg:F.light.lg,xl:F.light.xl},borderRadius:{none:P.none,xs:P.xs,sm:P.sm,md:P.md,lg:P.lg,xl:P.xl,full:P.full},transitions:{fast:I.luxe.fast,normal:I.luxe.base,slow:I.luxe.slow},duration:{instant:`0ms`,fast:I.timing.fast,normal:I.timing.base,slow:I.timing.slow,slower:I.timing.slower},easing:{linear:I.easing.linear,ease:I.easing.ease,easeIn:I.easing.easeIn,easeOut:I.easing.easeOut,easeInOut:I.easing.easeInOut},zIndex:{base:L.base,dropdown:L.dropdown,sticky:L.sticky,fixed:L.fixed,modal:L.modal,popover:L.popover,tooltip:L.tooltip,toast:L.toast},breakpoints:{xs:R.xs,sm:R.sm,md:R.md,lg:R.lg,xl:R.xl,"2xl":R[`2xl`]},opacity:Vr,extensions:{synthwave:{neonGlow:{magenta:`0 0 10px ${W.mutedPink}60`,cyan:`0 0 10px ${W.mutedCyan}60`,purple:`0 0 10px ${W.mutedPurple}60`,yellow:`0 0 10px #d4a00060`},sunsetGradient:`linear-gradient(180deg, ${W.lightBg} 0%, ${W.lightBgAlt} 50%, ${W.lightBgAccent} 100%)`,gridPattern:`
        linear-gradient(transparent 0%, transparent 94%, ${W.mutedPink}15 94%, ${W.mutedPink}15 100%),
        linear-gradient(90deg, transparent 0%, transparent 94%, ${W.mutedPink}15 94%, ${W.mutedPink}15 100%)
      `.trim(),chromaShift:`drop-shadow(1px 0 0 ${W.mutedPink}40) drop-shadow(-1px 0 0 ${W.mutedCyan}40)`,horizonLine:`linear-gradient(90deg, transparent 0%, ${W.mutedPink}60 50%, transparent 100%)`,sunGradient:`linear-gradient(180deg, ${W.mutedPink} 0%, #ff9966 50%, #ffcc66 100%)`}}},{gray:ei,semantic:ti}=Br,ni={colors:{primary:z(ei[900],ei[950],ei[800]),secondary:z(ei[600],ei[700],ei[500]),accent:z(ti.info,ti.infoDark,ti.infoLight),accentColors:{magenta:`#FF006E`,cyan:`#00F5FF`,gold:`#FFD700`,green:`#32CD32`},background:{primary:`#FFFFFF`,secondary:ei[50],tertiary:ei[100]},surface:ei[50],text:{primary:ei[900],secondary:ei[600],muted:ei[500],tertiary:ei[500]},border:Hr(ei[400],ei[500]),success:B(ti.success,`${ti.success}15`,`${ti.success}40`,ti.successDark),warning:B(ti.warning,`${ti.warning}15`,`${ti.warning}40`,ti.warningDark),error:B(ti.error,`${ti.error}15`,`${ti.error}40`,ti.errorDark),info:B(ti.info,`${ti.info}15`,`${ti.info}40`,ti.infoDark),hover:{primary:ei[800],secondary:ei[500],surface:ei[100]},active:{primary:ei[700],secondary:ei[400]},disabled:{background:ei[100],text:ei[400]}},spacing:{xxxs:`1px`,xxs:`2px`,xs:N[1],sm:N[2],md:N[4],lg:N[6],xl:N[8],xxl:N[12],xxxl:N[16],xxxxl:N[20],xxxxxl:N[24]},typography:{fontFamily:{heading:M.fonts.body.luxe,body:M.fonts.body.luxe,mono:M.fonts.mono},fontSize:{xxs:`10px`,xs:M.fontSizes.xs,sm:M.fontSizes.sm,md:M.fontSizes.sm,base:M.fontSizes.base,lg:M.fontSizes.md,xl:M.fontSizes.lg,"2xl":M.fontSizes.xl,"3xl":M.fontSizes[`2xl`],"4xl":`36px`,"5xl":`48px`},fontWeight:{light:M.fontWeights.light,normal:M.fontWeights.regular,medium:M.fontWeights.medium,semibold:M.fontWeights.semibold,bold:M.fontWeights.bold},lineHeight:{tight:M.lineHeights.tight,normal:M.lineHeights.base,relaxed:M.lineHeights.relaxed,loose:M.lineHeights.loose}},letterSpacing:{tight:`-0.025em`,normal:`0`,wide:`0.025em`},borderWidth:{thin:`1px`,medium:`2px`,thick:`3px`},shadows:{none:F.light.none,sm:F.light.sm,md:F.light.md,lg:F.light.lg,xl:F.light.xl},borderRadius:{none:P.none,xs:P.xs,sm:P.sm,md:P.md,lg:P.lg,xl:P.xl,full:P.full},transitions:{fast:I.luxe.fast,normal:I.luxe.base,slow:I.luxe.slow},duration:{instant:`0ms`,fast:I.timing.fast,normal:I.timing.base,slow:I.timing.slow,slower:I.timing.slower},easing:{linear:I.easing.linear,ease:I.easing.ease,easeIn:I.easing.easeIn,easeOut:I.easing.easeOut,easeInOut:I.easing.easeInOut},zIndex:{base:L.base,dropdown:L.dropdown,sticky:L.sticky,fixed:L.fixed,modal:L.modal,popover:L.popover,tooltip:L.tooltip,toast:L.toast},breakpoints:{xs:R.xs,sm:R.sm,md:R.md,lg:R.lg,xl:R.xl,"2xl":R[`2xl`]},opacity:Vr,extensions:{}},{gray:ri,semantic:ii}=Br,ai={...ni,colors:{...ni.colors,primary:z(ii.info,ii.infoDark,ii.infoLight),secondary:z(ri[400],ri[300],ri[500]),background:{primary:ri[950],secondary:ri[900],tertiary:ri[800]},surface:ri[900],text:{primary:ri[50],secondary:ri[300],muted:ri[400],tertiary:ri[400]},border:Hr(ri[600],ri[500]),hover:{primary:ii.infoLight,secondary:ri[300],surface:ri[800]},active:{primary:ii.infoDark,secondary:ri[500]},disabled:{background:ri[800],text:ri[500]}}},{gray:oi,semantic:si}=Br,ci={colors:{primary:z(`#1a365d`,`#0d1a2d`,`#2c5282`),secondary:z(`#2b6cb0`,`#1e4e7e`,`#4299e1`),accent:z(`#3182ce`,`#2563eb`,`#60a5fa`),accentColors:{magenta:`#9333EA`,cyan:`#3182ce`,gold:`#F59E0B`,green:`#10B981`},background:{primary:`#FFFFFF`,secondary:oi[50],tertiary:oi[100]},surface:oi[50],text:{primary:oi[900],secondary:oi[600],muted:oi[500],tertiary:oi[500]},border:Hr(oi[400],oi[500]),success:B(si.success,`${si.success}15`,`${si.success}40`,si.successDark),warning:B(si.warning,`${si.warning}15`,`${si.warning}40`,si.warningDark),error:B(si.error,`${si.error}15`,`${si.error}40`,si.errorDark),info:B(si.info,`${si.info}15`,`${si.info}40`,si.infoDark),hover:{primary:`#2c5282`,secondary:`#2b6cb0`,surface:oi[100]},active:{primary:`#1a365d`,secondary:`#2b6cb0`},disabled:{background:oi[100],text:oi[400]}},spacing:{xxxs:`1px`,xxs:`2px`,xs:N[1],sm:N[2],md:N[4],lg:N[6],xl:N[8],xxl:N[12],xxxl:N[16],xxxxl:N[20],xxxxxl:N[24]},typography:{fontFamily:{heading:M.fonts.body.luxe,body:M.fonts.body.luxe,mono:M.fonts.mono},fontSize:{xxs:`10px`,xs:M.fontSizes.xs,sm:M.fontSizes.sm,md:M.fontSizes.sm,base:M.fontSizes.base,lg:M.fontSizes.md,xl:M.fontSizes.lg,"2xl":M.fontSizes.xl,"3xl":M.fontSizes[`2xl`],"4xl":`36px`,"5xl":`48px`},fontWeight:{light:M.fontWeights.light,normal:M.fontWeights.regular,medium:M.fontWeights.medium,semibold:M.fontWeights.semibold,bold:M.fontWeights.bold},lineHeight:{tight:M.lineHeights.tight,normal:M.lineHeights.base,relaxed:M.lineHeights.relaxed,loose:M.lineHeights.loose}},letterSpacing:{tight:`-0.025em`,normal:`0`,wide:`0.025em`},borderWidth:{thin:`1px`,medium:`2px`,thick:`3px`},shadows:{none:F.light.none,sm:F.light.sm,md:F.light.md,lg:F.light.lg,xl:F.light.xl},borderRadius:{none:P.none,xs:P.xs,sm:P.sm,md:P.md,lg:P.lg,xl:P.xl,full:P.full},transitions:{fast:I.luxe.fast,normal:I.luxe.base,slow:I.luxe.slow},duration:{instant:`0ms`,fast:I.timing.fast,normal:I.timing.base,slow:I.timing.slow,slower:I.timing.slower},easing:{linear:I.easing.linear,ease:I.easing.ease,easeIn:I.easing.easeIn,easeOut:I.easing.easeOut,easeInOut:I.easing.easeInOut},zIndex:{base:L.base,dropdown:L.dropdown,sticky:L.sticky,fixed:L.fixed,modal:L.modal,popover:L.popover,tooltip:L.tooltip,toast:L.toast},breakpoints:{xs:R.xs,sm:R.sm,md:R.md,lg:R.lg,xl:R.xl,"2xl":R[`2xl`]},opacity:Vr,extensions:{}},{luxe:li,gray:ui,semantic:di}=Br,fi={colors:{primary:z(li.charcoal,li.black,li.darkGray),secondary:z(`#A88C24`,`#8A7318`,li.gold),accent:z(li.rose,`#A89089`,`#D9C9C3`),accentColors:{magenta:li.rose,cyan:`#60A5FA`,gold:li.gold,green:`#34D399`},background:{primary:li.white,secondary:li.cream,tertiary:li.lightGray},surface:li.cream,text:{primary:li.charcoal,secondary:li.darkGray,muted:li.mediumGray,tertiary:ui[500]},border:Hr(li.mediumGray,li.darkGray),success:B(di.success,`${di.success}15`,`${di.success}40`,di.successDark),warning:B(di.warning,`${di.warning}15`,`${di.warning}40`,di.warningDark),error:B(di.error,`${di.error}15`,`${di.error}40`,di.errorDark),info:B(di.info,`${di.info}15`,`${di.info}40`,di.infoDark),hover:{primary:`rgba(44, 44, 44, 0.08)`,secondary:`rgba(212, 175, 55, 0.15)`,surface:li.lightGray},active:{primary:`rgba(44, 44, 44, 0.12)`,secondary:`rgba(212, 175, 55, 0.25)`},disabled:{background:li.lightGray,text:li.darkGray}},spacing:{xxxs:`1px`,xxs:`2px`,xs:N[1],sm:N[2],md:N[4],lg:N[6],xl:N[8],xxl:N[12],xxxl:N[16],xxxxl:N[20],xxxxxl:N[24]},typography:{fontFamily:{heading:M.fonts.heading.luxe,body:M.fonts.body.luxe,mono:M.fonts.mono},fontSize:{xxs:`10px`,xs:M.fontSizesFluid.xs,sm:M.fontSizesFluid.sm,md:M.fontSizesFluid.sm,base:M.fontSizesFluid.base,lg:M.fontSizesFluid.md,xl:M.fontSizesFluid.lg,"2xl":M.fontSizesFluid.xl,"3xl":M.fontSizesFluid[`2xl`],"4xl":`36px`,"5xl":`48px`},fontWeight:{light:M.fontWeights.light,normal:M.fontWeights.regular,medium:M.fontWeights.medium,semibold:M.fontWeights.semibold,bold:M.fontWeights.bold},lineHeight:{tight:M.lineHeights.tight,normal:M.lineHeights.base,relaxed:M.lineHeights.relaxed,loose:M.lineHeights.loose},fontSizeFluid:{xs:M.fontSizesFluid.xs,sm:M.fontSizesFluid.sm,base:M.fontSizesFluid.base,md:M.fontSizesFluid.md,lg:M.fontSizesFluid.lg,xl:M.fontSizesFluid.xl,"2xl":M.fontSizesFluid[`2xl`],"3xl":M.fontSizesFluid[`3xl`]}},letterSpacing:{tight:`-0.025em`,normal:`0`,wide:`0.025em`},borderWidth:{thin:`1px`,medium:`2px`,thick:`3px`},shadows:{none:F.light.none,sm:F.light.sm,md:F.light.md,lg:F.light.lg,xl:F.light.xl},borderRadius:{none:P.none,xs:P.xs,sm:P.sm,md:P.md,lg:P.lg,xl:P.xl,full:P.full},transitions:{fast:I.luxe.fast,normal:I.luxe.base,slow:I.luxe.slow},duration:{instant:`0ms`,fast:I.timing.fast,normal:I.timing.base,slow:I.timing.slow,slower:I.timing.slower},easing:{linear:I.easing.linear,ease:I.easing.ease,easeIn:I.easing.easeIn,easeOut:I.easing.easeOut,easeInOut:I.easing.easeInOut},zIndex:{base:L.base,dropdown:L.dropdown,sticky:L.sticky,fixed:L.fixed,modal:L.modal,popover:L.popover,tooltip:L.tooltip,toast:L.toast},breakpoints:{xs:R.xs,sm:R.sm,md:R.md,lg:R.lg,xl:R.xl,"2xl":R[`2xl`]},opacity:Vr,extensions:{luxe:{goldShimmer:`linear-gradient(135deg, ${li.gold} 0%, ${li.gold} 50%, ${li.gold} 100%)`,elegantShadow:`0 10px 40px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)`,subtleGradient:`linear-gradient(to bottom, ${li.white}, ${li.cream})`}}},{gray:pi}=Br,G={primary:`#9333ea`,primaryDark:`#7e22ce`,primaryLight:`#a855f7`,accent:`#d4af37`,accentDark:`#b8941f`,accentLight:`#f0d574`,secondary:`#c4837a`,secondaryDark:`#a56960`,secondaryLight:`#e0b0a8`,background:`#0a0a0a`,surface:`#161616`,surfaceLight:`#1f1f1f`,white:`#ffffff`,textMuted:`#b8b8b8`,textSubtle:`#808080`},K={primary:`#9333ea`,primaryDark:`#7e22ce`,primaryLight:`#a855f7`,accent:`#d4af37`,accentDark:`#b8941f`,accentLight:`#f0d574`,secondary:`#c4837a`,secondaryDark:`#a56960`,secondaryLight:`#e0b0a8`,background:`#ffffff`,surface:`#f8f8f8`,surfaceLight:`#f0f0f0`,textPrimary:`#1a1a1a`,textSecondary:`#4a4a4a`,textMuted:`#6a6a6a`},mi={colors:{primary:z(G.primary,G.primaryDark,G.primaryLight),secondary:z(G.secondary,G.secondaryDark,G.secondaryLight),accent:z(G.accent,G.accentDark,G.accentLight),accentColors:{magenta:G.primary,cyan:`#06b6d4`,gold:G.accent,green:`#10b981`},background:{primary:G.background,secondary:G.surface,tertiary:G.surfaceLight},surface:G.surface,text:{primary:G.white,secondary:G.textMuted,muted:G.textSubtle,tertiary:pi[400]},border:Hr(pi[600],pi[500]),success:B(`#16a34a`,`#16a34a15`,`#16a34a40`,`#15803d`),warning:B(`#f59e0b`,`#f59e0b15`,`#f59e0b40`,`#d97706`),error:B(`#ef4444`,`#ef444415`,`#ef444440`,`#dc2626`),info:B(G.accent,`${G.accent}15`,`${G.accent}40`,G.accentDark),hover:{primary:G.primaryLight,secondary:G.secondaryLight,surface:G.surfaceLight},active:{primary:G.primaryDark,secondary:G.secondaryDark},disabled:{background:pi[800],text:pi[500]}},spacing:{xs:N[1],sm:N[2],md:N[4],lg:N[6],xl:N[8],xxl:N[12]},typography:{fontFamily:{heading:M.fonts.body.luxe,body:M.fonts.body.luxe,mono:M.fonts.mono},fontSize:{xxs:`10px`,xs:M.fontSizes.xs,sm:M.fontSizes.sm,md:M.fontSizes.sm,base:M.fontSizes.base,lg:M.fontSizes.md,xl:M.fontSizes.lg,"2xl":M.fontSizes.xl,"3xl":M.fontSizes[`2xl`],"4xl":`36px`,"5xl":`48px`},fontWeight:{light:M.fontWeights.light,normal:M.fontWeights.regular,medium:M.fontWeights.medium,semibold:M.fontWeights.semibold,bold:M.fontWeights.bold},lineHeight:{tight:M.lineHeights.tight,normal:M.lineHeights.base,relaxed:M.lineHeights.relaxed,loose:M.lineHeights.loose}},shadows:{none:F.dark.none,sm:F.dark.sm,md:F.dark.md,lg:F.dark.lg,xl:F.dark.xl},borderRadius:{none:P.none,sm:P.sm,md:P.md,lg:P.lg,full:P.full},transitions:{fast:I.luxe.fast,normal:I.luxe.base,slow:I.luxe.slow},duration:{instant:`0ms`,fast:I.timing.fast,normal:I.timing.base,slow:I.timing.slow,slower:I.timing.slower},easing:{linear:I.easing.linear,ease:I.easing.ease,easeIn:I.easing.easeIn,easeOut:I.easing.easeOut,easeInOut:I.easing.easeInOut},zIndex:{base:L.base,dropdown:L.dropdown,sticky:L.sticky,fixed:L.fixed,modal:L.modal,popover:L.popover,tooltip:L.tooltip,toast:L.toast},breakpoints:{xs:R.xs,sm:R.sm,md:R.md,lg:R.lg,xl:R.xl,"2xl":R[`2xl`]},opacity:Vr,extensions:{cyberpunk:{neonGlow:{magenta:`0 0 10px ${G.secondary}`,cyan:`0 0 10px ${G.accent}`,green:`0 0 10px #22c55e`,large:`0 0 20px`},scanlines:`none`,glitchEffect:`none`}}},hi={colors:{primary:z(K.primary,K.primaryDark,K.primaryLight),secondary:z(K.secondary,K.secondaryDark,K.secondaryLight),accent:z(K.accent,K.accentDark,K.accentLight),accentColors:{magenta:K.primary,cyan:`#06b6d4`,gold:K.accent,green:`#10b981`},background:{primary:K.background,secondary:K.surface,tertiary:K.surfaceLight},surface:K.surface,text:{primary:K.textPrimary,secondary:K.textSecondary,muted:K.textMuted,tertiary:pi[500]},border:Hr(pi[400],pi[500]),success:B(`#16a34a`,`#16a34a15`,`#16a34a40`,`#15803d`),warning:B(`#f59e0b`,`#f59e0b15`,`#f59e0b40`,`#d97706`),error:B(`#ef4444`,`#ef444415`,`#ef444440`,`#dc2626`),info:B(K.accent,`${K.accent}15`,`${K.accent}40`,K.accentDark),hover:{primary:K.primaryLight,secondary:K.secondaryLight,surface:K.surfaceLight},active:{primary:K.primaryDark,secondary:K.secondaryDark},disabled:{background:pi[200],text:pi[400]}},spacing:{xs:N[1],sm:N[2],md:N[4],lg:N[6],xl:N[8],xxl:N[12]},typography:{fontFamily:{heading:M.fonts.body.luxe,body:M.fonts.body.luxe,mono:M.fonts.mono},fontSize:{xxs:`10px`,xs:M.fontSizes.xs,sm:M.fontSizes.sm,md:M.fontSizes.sm,base:M.fontSizes.base,lg:M.fontSizes.md,xl:M.fontSizes.lg,"2xl":M.fontSizes.xl,"3xl":M.fontSizes[`2xl`],"4xl":`36px`,"5xl":`48px`},fontWeight:{light:M.fontWeights.light,normal:M.fontWeights.regular,medium:M.fontWeights.medium,semibold:M.fontWeights.semibold,bold:M.fontWeights.bold},lineHeight:{tight:M.lineHeights.tight,normal:M.lineHeights.base,relaxed:M.lineHeights.relaxed,loose:M.lineHeights.loose}},shadows:{none:F.light.none,sm:F.light.sm,md:F.light.md,lg:F.light.lg,xl:F.light.xl},borderRadius:{none:P.none,sm:P.sm,md:P.md,lg:P.lg,full:P.full},transitions:{fast:I.luxe.fast,normal:I.luxe.base,slow:I.luxe.slow},duration:{instant:`0ms`,fast:I.timing.fast,normal:I.timing.base,slow:I.timing.slow,slower:I.timing.slower},easing:{linear:I.easing.linear,ease:I.easing.ease,easeIn:I.easing.easeIn,easeOut:I.easing.easeOut,easeInOut:I.easing.easeInOut},zIndex:{base:L.base,dropdown:L.dropdown,sticky:L.sticky,fixed:L.fixed,modal:L.modal,popover:L.popover,tooltip:L.tooltip,toast:L.toast},breakpoints:{xs:R.xs,sm:R.sm,md:R.md,lg:R.lg,xl:R.xl,"2xl":R[`2xl`]},opacity:Vr,extensions:{cyberpunk:{neonGlow:{magenta:`0 0 10px ${K.secondary}`,cyan:`0 0 10px ${K.accent}`,green:`0 0 10px #22c55e`,large:`0 0 20px`},scanlines:`none`,glitchEffect:`none`}}},gi=new Set([`primary`,`secondary`,`accent`]),_i=new Set([`success`,`warning`,`error`,`info`]);function vi(e){return typeof e==`object`&&!!e&&`main`in e}function yi(e){return typeof e==`object`&&!!e&&`main`in e}function bi(e,t){return z({main:t.main??e.main,dark:t.dark??e.dark,light:t.light??e.light,numeric:{50:t[50]??e[50],100:t[100]??e[100],200:t[200]??e[200],300:t[300]??e[300],400:t[400]??e[400],500:t[500]??t.main??e[500],600:t[600]??e[600],700:t[700]??e[700],800:t[800]??e[800],900:t[900]??e[900],950:t[950]??e[950]}})}function xi(e,t){return B({main:t.main??e.main,background:t.background??e.background,border:t.border??e.border,text:t.text??e.text,numeric:{50:t[50]??e[50],100:t[100]??e[100],200:t[200]??e[200],300:t[300]??e[300],400:t[400]??e[400],500:t[500]??t.main??e[500],600:t[600]??e[600],700:t[700]??e[700],800:t[800]??e[800],900:t[900]??e[900],950:t[950]??e[950]}})}function Si(e,t){return Hr(t.default??e.default,t.hover??e.hover)}function Ci(e,t){let n={...e};for(let r of Object.keys(t)){let i=e[r],a=t[r];a!==void 0&&(n[r]=typeof i==`object`&&i&&!Array.isArray(i)&&typeof a==`object`&&a&&!Array.isArray(a)?Ci(i,a):a)}return n}function wi(e,t){let n={...e};for(let r of Object.keys(t)){let i=t[r];if(i!==void 0){if(gi.has(r)&&vi(i))n[r]=bi(e[r],i);else if(_i.has(r)&&yi(i))n[r]=xi(e[r],i);else if(r===`border`&&typeof i==`object`)n.border=Si(e.border,i);else if(typeof i==`object`&&i){let t=e[r];n[r]=typeof t==`object`&&t?Ci(t,i):i}else n[r]=i}}return n}function Ti(e,t){let n={...e};for(let r of Object.keys(t)){let i=t[r];if(i!==void 0){if(r===`colors`)n.colors=wi(e.colors,i);else if(typeof i==`object`&&i){let t=e[r];n[r]=typeof t==`object`&&t?Ci(t,i):i}else n[r]=i}}return n}var Ei={cyberpunk:Wr,luxe:qr,lilith:Yr,synthwave:Zr,"synthwave-light":$r,neutral:ni,"neutral-dark":ai,corporate:ci,"creator-portal":fi,"pitch-deck":mi,"pitch-deck-light":hi};function q(e){return Object.hasOwn(Ei,e)}function Di(e,t){let n=Ei[e];return t?Ti(n,t):n}function Oi(e){return Di(e.name,e.customTheme)}function ki(e){try{return localStorage.getItem(e)??void 0}catch{return}}function Ai(e,t){try{localStorage.setItem(e,t)}catch{}}function ji(){try{return typeof document>`u`?``:document.cookie}catch{return``}}function Mi(e){try{document.cookie=e}catch{}}var Ni={colors:`color`,shadows:`shadow`,borderRadius:`radius`,transitions:`transition`,typography:`type`,spacing:`spacing`,zIndex:`z`,duration:`duration`,easing:`easing`,opacity:`opacity`,letterSpacing:`letter-spacing`,borderWidth:`border-width`},Pi=new Set([`extensions`,`breakpoints`]);function Fi(e){return e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase()}function Ii(e,t,n){for(let[r,i]of Object.entries(e)){if(i==null||typeof i==`function`||Pi.has(r))continue;let e=`${t}-${Fi(r)}`;typeof i==`string`?n[e]=i:typeof i==`number`?n[e]=String(i):typeof i==`object`&&!Array.isArray(i)&&Ii(i,e,n)}}function Li(e,t=`theme`){let n={};for(let[r,i]of Object.entries(e)){if(i==null||typeof i==`function`||Pi.has(r))continue;let e=`--${t}-${Ni[r]??Fi(r)}`;typeof i==`string`?n[e]=i:typeof i==`number`?n[e]=String(i):typeof i==`object`&&!Array.isArray(i)&&Ii(i,e,n)}return n}var Ri=Xn`
  :root {
    ${({theme:e})=>{let t=Li(e);return Object.entries(t).map(([e,t])=>`${e}: ${t};`).join(`
    `)}}
  }
`,zi=(0,k.createContext)(void 0),Bi=({children:e,themeName:t,defaultTheme:n=`cyberpunk`,storageKey:r=`app-theme`,cssVariables:i=!1,customTheme:a})=>{let[o,s]=(0,k.useState)(()=>{if(t===void 0&&typeof window<`u`){let e=ki(r);if(e!==void 0&&q(e))return e}return n}),c=t??o,l=(0,k.useMemo)(()=>Di(c,a),[c,a]);(0,k.useEffect)(()=>{t===void 0&&typeof window<`u`&&Ai(r,c)},[t,c,r]);let u={theme:l,themeName:c,setTheme:s};return(0,j.jsx)(zi.Provider,{value:u,children:(0,j.jsxs)(zn,{theme:l,children:[i&&(0,j.jsx)(Ri,{}),e]})})};A.div`
  padding: ${({theme:e})=>e.spacing.xl};
  background: ${({theme:e})=>e.colors.background.primary};
  min-height: 100vh;
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
`,A.h1`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize[`4xl`]};
  color: ${({theme:e})=>e.colors.primary.main};
  margin-bottom: ${({theme:e})=>e.spacing.xxl};
  letter-spacing: 0.1em;
  text-transform: uppercase;
`,A.section`
  margin-bottom: ${({theme:e})=>e.spacing.xxl};
`,A.h2`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize[`2xl`]};
  color: ${({theme:e})=>e.colors.text.primary};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  border-bottom: 2px solid ${({theme:e})=>e.colors.primary.main};
  padding-bottom: ${({theme:e})=>e.spacing.sm};
`,A.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: ${({theme:e})=>e.spacing.md};
`,A.div`
  height: 100px;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  background: ${({$color:e})=>e};
  box-shadow: ${({$glow:e})=>e||`none`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: ${({theme:e})=>e.spacing.sm};
  transition: ${({theme:e})=>e.transitions.fast};

  &:hover {
    transform: translateY(-2px);
  }
`,A.span`
  font-size: ${({theme:e})=>e.typography.fontSize.xs};
  color: ${({theme:e})=>e.colors.text.primary};
  background: ${({theme:e})=>e.colors.background.secondary}dd;
  padding: 4px 8px;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
`,A.span`
  font-size: 10px;
  color: ${({theme:e})=>e.colors.text.muted};
  background: ${({theme:e})=>e.colors.background.secondary}dd;
  padding: 2px 6px;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  margin-top: 4px;
`,A.div`
  height: 200px;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  background: ${({$gradient:e})=>e};
  display: flex;
  align-items: center;
  justify-content: center;
`,A.div`
  height: 200px;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  background-color: ${({theme:e})=>e.colors.background.primary};
  background-image: ${({$pattern:e})=>e};
  background-size: 50px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`,A.span`
  font-size: ${({theme:e})=>e.typography.fontSize.lg};
  color: ${({theme:e})=>e.colors.text.primary};
  background: ${({theme:e})=>e.colors.background.secondary}cc;
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
`,A.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
`,A.h3`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize[`3xl`]};
  color: ${({theme:e})=>e.colors.text.primary};
  margin: 0;
`,A.p`
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-size: ${({theme:e})=>e.typography.fontSize.base};
  color: ${({theme:e})=>e.colors.text.secondary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
`,A.code`
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  color: ${({theme:e})=>e.colors.secondary.main};
  background: ${({theme:e})=>e.colors.background.secondary};
  padding: ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.sm};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
`,A.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  flex-wrap: wrap;
`,A.button`
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.lg};
  font-family: ${({theme:e})=>e.typography.fontFamily.body};
  font-size: ${({theme:e})=>e.typography.fontSize.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.semibold};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: none;
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.fast};

  ${({theme:e,$variant:t=`primary`})=>{let n={primary:e.colors.primary,secondary:e.colors.secondary,accent:e.colors.accent}[t];return`
      background: ${n.main};
      color: ${e.colors.text.primary};

      &:hover {
        background: ${n.light};
        box-shadow: 0 0 20px ${n.main}80;
      }

      &:active {
        background: ${n.dark};
      }
    `}}
`,A.span`
  font-family: ${({theme:e})=>e.typography.fontFamily.heading};
  font-size: ${({theme:e})=>e.typography.fontSize[`2xl`]};
  color: ${({theme:e})=>e.colors.primary.main};
  text-shadow: ${({$glow:e})=>e||`none`};
`;var Vi=31536e3,Hi=(0,k.createContext)(null),Ui=()=>()=>{},Wi=()=>!1;function Gi({schemeCookie:e,familyCookie:t,cookieDomain:n,defaultScheme:r,families:i,defaultFamily:a,cssVariables:o=!1,children:s}){if(i.length===0)throw Error(`AppearanceProvider: no theme family is enabled`);if(!i.includes(a))throw Error(`AppearanceProvider: the default family ${JSON.stringify(a)} is not enabled`);let[c,l]=(0,k.useState)(()=>Or(e,ji(),r)),[u,d]=(0,k.useState)(()=>zr(t,ji(),i,a)),f=Ar(c,(0,k.useSyncExternalStore)(c===`system`?Mr:Ui,c===`system`?jr:Wi,Wi)),p=i.includes(u)?u:a;(0,k.useEffect)(()=>{document.documentElement.style.colorScheme=f},[f]);let m=(0,k.useCallback)((e,t)=>{Mi(Pr(t,{name:e,...n===void 0?{}:{domain:n},host:window.location.hostname,maxAgeSeconds:Vi}))},[n]),h=(0,k.useCallback)(t=>{m(e,t),l(t)},[m,e]),g=(0,k.useCallback)(e=>{m(t,e),d(e)},[m,t]),_=i.join(`,`),v=(0,k.useMemo)(()=>_.split(`,`).map(e=>Fr[e]),[_]),y=(0,k.useMemo)(()=>({scheme:c,mode:f,setScheme:h,family:p,families:v,setFamily:g}),[c,f,h,p,v,g]),b=Rr(p,f);return(0,j.jsx)(Hi.Provider,{value:y,children:(0,j.jsx)(Bi,{themeName:b.name,customTheme:b.customTheme,cssVariables:o,children:s})})}function Ki(){let e=(0,k.useContext)(Hi);if(e===null)throw Error(`useAppearance: no AppearanceProvider above this component`);return e}var qi=Xn`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    font-family: ${({theme:e})=>e.typography.fontFamily.body};
    font-size: 1rem;
    line-height: 1.5;
    color: ${({theme:e})=>e.colors.text.primary};
    background: ${({theme:e})=>e.colors.background.primary};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({theme:e})=>e.typography.fontFamily.heading};
    font-weight: 600;
    line-height: 1.2;
    color: ${({theme:e})=>e.colors.text.primary};
  }

  a {
    color: ${({theme:e})=>e.colors.primary.main};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  button, input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  code, pre {
    font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  }

  :root {
    --density-scale: 1.0;
  }

  [data-reduce-motion="true"] * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.background.primary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.border.default};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({theme:e})=>e.colors.text.muted};
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: ${({theme:e})=>`${e.colors.border.default} ${e.colors.background.primary}`};
  }
`;((e={})=>{let{width:t=8,radius:n=4,autoHide:r=!1}=e;return Kn`
    scrollbar-width: thin;
    scrollbar-color: ${({theme:e})=>`${e.colors.border.default} ${e.colors.background.primary}`};

    &::-webkit-scrollbar {
      width: ${t}px;
      height: ${t}px;
    }

    &::-webkit-scrollbar-track {
      background: ${({theme:e})=>e.colors.background.primary};
    }

    &::-webkit-scrollbar-thumb {
      background: ${({theme:e})=>e.colors.border.default};
      border-radius: ${n}px;
      ${r?`opacity: 0; transition: opacity 0.2s;`:``}
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${({theme:e})=>e.colors.text.muted};
    }

    ${r?`&:hover::-webkit-scrollbar-thumb { opacity: 1; }`:``}
  `})({width:6,radius:3}),Xn`
  * {
    scrollbar-width: thin;
    scrollbar-color: ${({theme:e})=>`${e.colors.border.default} ${e.colors.background.primary}`};
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.background.primary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.border.default};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({theme:e})=>e.colors.text.muted};
  }
`;var Ji=[{scheme:`system`,label:`System`},{scheme:`light`,label:`Light`},{scheme:`dark`,label:`Dark`}],Yi={light:`Light`,dark:`Dark`};function Xi(e){return`${Yi[e]} now`}function Zi(e,t){return e===`system`?`System (${t})`:Yi[e]}var Qi=A.svg`
  display: block;
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
`,$i={fill:`none`,stroke:`currentColor`,strokeWidth:1.75,strokeLinecap:`round`,strokeLinejoin:`round`};function ea({scheme:e}){return(0,j.jsxs)(Qi,{viewBox:`0 0 24 24`,"aria-hidden":`true`,focusable:`false`,children:[e===`light`&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`circle`,{cx:`12`,cy:`12`,r:`4`,...$i}),(0,j.jsx)(`path`,{d:`M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41`,...$i})]}),e===`dark`&&(0,j.jsx)(`path`,{d:`M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z`,...$i}),e===`system`&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`rect`,{x:`3`,y:`4`,width:`18`,height:`12`,rx:`2`,...$i}),(0,j.jsx)(`path`,{d:`M8 20h8M12 16v4`,...$i})]})]})}var ta=A.span`
  display: inline-flex;
  flex: 0 0 auto;
  width: 30px;
  height: 20px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 0 0 1px ${({theme:e})=>e.colors.border};
  /* The stripes are the family's own colours: forced-colors mode must not repaint them away. */
  forced-color-adjust: none;
`,na=A.span`
  flex: 1 1 0;
`;function ra({family:e,mode:t}){let{colors:n}=Oi(Rr(e.id,t));return(0,j.jsxs)(ta,{"aria-hidden":`true`,children:[(0,j.jsx)(na,{style:{background:n.background.primary}}),(0,j.jsx)(na,{style:{background:n.primary.main}}),(0,j.jsx)(na,{style:{background:n.accent.main}})]})}var ia=`scheme:`,aa=`family:`;function oa(e){return[...Ji.map(e=>({id:ia+e.scheme,label:e.label})),...e.length>1?e.map(e=>({id:aa+e.id,label:e.label})):[]]}var sa=e=>ia+e;function ca(e,t){if(e.startsWith(ia)){let n=e.slice(ia.length);return n!==t.scheme&&t.onSchemeChange(n),!0}if(e.startsWith(aa)){let n=e.slice(aa.length);return n!==t.family&&t.onFamilyChange(n),!0}return!1}function la({choice:e,itemProps:t,start:n=0}){let r=(0,k.useId)(),i=(0,k.useId)(),{scheme:a,mode:o,family:s,families:c}=e;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(`div`,{role:`group`,"aria-labelledby":r,children:[(0,j.jsx)(lr,{id:r,role:`none`,children:`Appearance`}),Ji.map((e,r)=>(0,j.jsxs)(ir,{role:`menuitemradio`,"aria-checked":e.scheme===a,...t(n+r),children:[(0,j.jsx)(ar,{"aria-hidden":`true`,children:(0,j.jsx)(ea,{scheme:e.scheme})}),(0,j.jsxs)(or,{children:[(0,j.jsx)(`span`,{children:e.label}),e.scheme===`system`&&(0,j.jsx)(sr,{children:Xi(o)})]}),e.scheme===a&&(0,j.jsx)(cr,{"aria-hidden":`true`,children:`✓`})]},e.scheme))]}),c.length>1&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(ur,{role:`separator`}),(0,j.jsxs)(`div`,{role:`group`,"aria-labelledby":i,children:[(0,j.jsx)(lr,{id:i,role:`none`,children:`Theme`}),c.map((e,r)=>(0,j.jsxs)(ir,{role:`menuitemradio`,"aria-checked":e.id===s,...t(n+Ji.length+r),children:[(0,j.jsx)(ra,{family:e,mode:o}),(0,j.jsx)(or,{children:(0,j.jsx)(`span`,{children:e.label})}),e.id===s&&(0,j.jsx)(cr,{"aria-hidden":`true`,children:`✓`})]},e.id))]})]})]})}var ua={AED:2,AFN:2,ALL:2,AMD:2,ANG:2,AOA:2,ARS:2,AUD:2,AWG:2,AZN:2,BAM:2,BBD:2,BDT:2,BGN:2,BHD:3,BIF:0,BMD:2,BND:2,BOB:2,BRL:2,BSD:2,BTN:2,BWP:2,BYN:2,BZD:2,CAD:2,CDF:2,CHF:2,CLP:0,CNY:2,COP:2,CRC:2,CUC:2,CUP:2,CVE:2,CZK:2,DJF:0,DKK:2,DOP:2,DZD:2,EGP:2,ERN:2,ETB:2,EUR:2,FJD:2,FKP:2,GBP:2,GEL:2,GHS:2,GIP:2,GMD:2,GNF:0,GTQ:2,GYD:2,HKD:2,HNL:2,HTG:2,HUF:2,IDR:2,ILS:2,INR:2,IQD:3,IRR:2,ISK:0,JMD:2,JOD:3,JPY:0,KES:2,KGS:2,KHR:2,KMF:0,KPW:2,KRW:0,KWD:3,KYD:2,KZT:2,LAK:2,LBP:2,LKR:2,LRD:2,LSL:2,LYD:3,MAD:2,MDL:2,MGA:2,MKD:2,MMK:2,MNT:2,MOP:2,MRU:2,MUR:2,MVR:2,MWK:2,MXN:2,MYR:2,MZN:2,NAD:2,NGN:2,NIO:2,NOK:2,NPR:2,NZD:2,OMR:3,PAB:2,PEN:2,PGK:2,PHP:2,PKR:2,PLN:2,PYG:0,QAR:2,RON:2,RSD:2,RUB:2,RWF:0,SAR:2,SBD:2,SCR:2,SDG:2,SEK:2,SGD:2,SHP:2,SLE:2,SOS:2,SRD:2,SSP:2,STN:2,SVC:2,SYP:2,SZL:2,THB:2,TJS:2,TMT:2,TND:3,TOP:2,TRY:2,TTD:2,TWD:2,TZS:2,UAH:2,UGX:0,USD:2,UYU:2,UZS:2,VED:2,VES:2,VND:0,VUV:0,WST:2,XAF:0,XCD:2,XCG:2,XOF:0,XPF:0,YER:2,ZAR:2,ZMW:2,ZWG:2},da=1e8;function fa(e){return typeof e==`string`&&Object.hasOwn(ua,e)}function pa(e){if(!fa(e))throw TypeError(`not an ISO 4217 currency: ${e}`);return ua[e]}var ma=/[,'’\s]/,ha=/^[0-9.]+$/,ga=/^-([0-9]+\.?[0-9]*|\.[0-9]+)$/,_a=String(da).length,va=e=>({ok:!1,reason:e});function ya(e,t){if(!fa(t))return va(`unknown-currency`);if(typeof e!=`string`)return va(`not-a-number`);let n=e.trim();if(n===``)return va(`empty`);if(ga.test(n))return va(`not-positive`);if(ma.test(n))return va(`use-digits-and-a-point`);if(!ha.test(n))return va(`not-a-number`);let r=n.split(`.`);if(r.length>2)return va(`use-digits-and-a-point`);let[i=``,a=``]=r;if(i===``&&a===``)return va(`not-a-number`);let o=pa(t);if(a.length>o)return va(`too-many-decimals`);let s=(i+a.padEnd(o,`0`)).replace(/^0+/,``);if(s===``)return va(`not-positive`);if(s.length>_a)return va(`too-large`);let c=Number(s);return c>1e8?va(`too-large`):{ok:!0,minor:c}}var ba=Xn`
  [data-interaction] {
    transition:
      transform 0.1s ease,
      box-shadow 0.16s ease,
      opacity 0.12s ease,
      background 0.12s ease,
      border-color 0.12s ease,
      color 0.12s ease,
      filter 0.12s ease;
  }
  [data-interaction='pressed'] {
    transform: translateY(1px) scale(0.99);
  }
  [data-interaction='press-succeeded'] {
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.success.main}66;
  }
  [data-interaction='press-cancelled'] {
    opacity: 0.55;
  }
`,xa=$n`
  from { opacity: 0; transform: var(--tip-from, translateY(3px)); }
  to   { opacity: 1; transform: var(--tip-to, translateY(0)); }
`,Sa=A.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  max-width: 100%;
  touch-action: manipulation;
`,Ca=A.span`
  position: fixed;
  z-index: ${({theme:e})=>e.zIndex?.tooltip??e.zIndex?.popover??1100};
  max-width: ${({$maxWidth:e})=>e}px;
  padding: 6px 10px;
  border-radius: ${({theme:e})=>e.borderRadius?.md??`8px`};
  background: ${({theme:e})=>e.colors?.background?.tertiary??e.colors?.surface??`#120e12`};
  border: 1px solid
    ${({theme:e})=>e.colors?.border?.default??`rgba(255,255,255,0.12)`};
  color: ${({theme:e})=>e.colors?.text?.primary??`#eddce4`};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.35;
  letter-spacing: 0.01em;
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.45),
    0 0 0 1px rgba(0, 0, 0, 0.2);
  pointer-events: none;
  white-space: pre-wrap;
  word-break: break-word;
  animation: ${xa} 0.08s ease-out both;

  ${({$side:e})=>e===`top`&&Kn`
      --tip-from: translate(-50%, 3px);
      --tip-to: translate(-50%, 0);
    `}
  ${({$side:e})=>e===`bottom`&&Kn`
      --tip-from: translate(-50%, -3px);
      --tip-to: translate(-50%, 0);
    `}
  ${({$side:e})=>e===`left`&&Kn`
      --tip-from: translate(3px, -50%);
      --tip-to: translate(0, -50%);
    `}
  ${({$side:e})=>e===`right`&&Kn`
      --tip-from: translate(-3px, -50%);
      --tip-to: translate(0, -50%);
    `}

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 5px solid transparent;
  }

  ${({$side:e,theme:t})=>{let n=t.colors?.border?.default??`rgba(255,255,255,0.12)`;return e===`top`?Kn`
        &::after {
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-top-color: ${n};
        }
      `:e===`bottom`?Kn`
        &::after {
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-bottom-color: ${n};
        }
      `:e===`left`?Kn`
        &::after {
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border-left-color: ${n};
        }
      `:Kn`
      &::after {
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-right-color: ${n};
      }
    `}}
`;function wa(e,t,n=8){let r=e.left+e.width/2,i=e.top+e.height/2;switch(t){case`bottom`:return{top:e.bottom+n,left:r,side:t};case`left`:return{top:i,left:e.left-n,side:t};case`right`:return{top:i,left:e.right+n,side:t};default:return{top:e.top-n,left:r,side:t}}}function Ta(e,t,n=8){let r=window.innerWidth,i=window.innerHeight,{top:a,left:o,side:s}=e;if(s===`top`&&a-t.height<n?s=`bottom`:s===`bottom`&&a+t.height>i-n?s=`top`:s===`left`&&o-t.width<n?s=`right`:s===`right`&&o+t.width>r-n&&(s=`left`),s===`top`||s===`bottom`){let e=t.width/2;o=Math.min(r-n-e,Math.max(n+e,o))}if(s===`left`||s===`right`){let e=t.height/2;a=Math.min(i-n-e,Math.max(n+e,a))}return{top:a,left:o,side:s}}function Ea({content:e,children:t,side:n=`top`,delayMs:r=0,disabled:i=!1,className:a,portal:o=!0,maxWidth:s=240,stickyTouch:c=!1,describe:l=`bubble`}){let u=(0,k.useId)(),d=(0,k.useRef)(null),f=(0,k.useRef)(null),[p,m]=(0,k.useState)(!1),[h,g]=(0,k.useState)(null),_=(0,k.useRef)(null),v=(0,k.useRef)(!1),y=()=>{_.current&&=(clearTimeout(_.current),null)},b=(0,k.useCallback)(()=>{if(!(i||e==null||e===``)){if(y(),r<=0){m(!0);return}_.current=setTimeout(()=>m(!0),r)}},[e,r,i]),x=(0,k.useCallback)(()=>{v.current||(y(),m(!1))},[]),S=(0,k.useCallback)(()=>{v.current=!1,y(),m(!1)},[]);(0,k.useEffect)(()=>()=>y(),[]),(0,k.useEffect)(()=>{if(!p)return;let e=e=>{e.key===`Escape`&&S()},t=e=>{if(!v.current&&!c)return;let t=e.target;d.current?.contains(t)||S()};return window.addEventListener(`keydown`,e),window.addEventListener(`pointerdown`,t,!0),()=>{window.removeEventListener(`keydown`,e),window.removeEventListener(`pointerdown`,t,!0)}},[p,S,c]),(0,k.useLayoutEffect)(()=>{if(!p||!d.current)return;let e=()=>{let e=wa(d.current.getBoundingClientRect(),n);f.current&&(e=Ta(e,f.current.getBoundingClientRect())),g(e)};e();let t=requestAnimationFrame(e);return window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{cancelAnimationFrame(t),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[p,n,e]);let C=h?{top:h.top,left:h.left,transform:h.side===`top`?`translate(-50%, -100%)`:h.side===`bottom`?`translate(-50%, 0)`:h.side===`left`?`translate(-100%, -50%)`:`translate(0, -50%)`}:{visibility:`hidden`,top:0,left:0},w=p&&e!=null&&e!==``?(0,j.jsx)(Ca,{ref:f,id:u,role:`tooltip`,$side:h?.side??n,$maxWidth:s,style:C,children:e}):null;return(0,j.jsxs)(Sa,{ref:d,className:a,onPointerEnter:e=>{e.pointerType!==`touch`&&b()},onPointerLeave:e=>{e.pointerType!==`touch`&&x()},onPointerDown:e=>{if(e.pointerType===`touch`||e.pointerType===`pen`){if(!c){b();return}p&&v.current?S():(v.current=!0,b())}},onFocus:b,onBlur:x,"aria-describedby":p&&l===`bubble`?u:void 0,children:[t,w&&(o&&typeof document<`u`?(0,Je.createPortal)(w,document.body):w)]})}var Da=Kn`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`,Oa=$n`
  to { transform: rotate(360deg); }
`,ka=A.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 36px;
  height: 36px;
  padding: 0;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  font: inherit;
  ${({$variant:e})=>Sr[e]}
  ${yr}
  @media (pointer: coarse) {
    width: 44px;
    height: 44px;
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary.main};
    outline-offset: 2px;
  }
`,Aa=A.span`
  display: inline-flex;
  width: 18px;
  height: 18px;
  & > svg {
    width: 100%;
    height: 100%;
  }
`,ja=A.span`
  position: absolute;
  inset: 3px;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top-color: currentColor;
  animation: ${Oa} 0.8s linear infinite;
  @media (prefers-reduced-motion: reduce) {
    animation-duration: 2.4s;
  }
`,Ma=A.span`
  position: absolute;
  top: -3px;
  right: -3px;
  min-width: 14px;
  height: 14px;
  padding: 0 3px;
  border-radius: 7px;
  font-size: 10px;
  font-weight: 800;
  line-height: 14px;
  text-align: center;
  ${({$kind:e,theme:t})=>e===`alert`?Kn`
          background: ${t.colors.warning.main};
          color: ${t.colors.background.tertiary};
        `:Kn`
          background: ${t.colors.primary.main};
          color: ${t.colors.background.tertiary};
        `}
`,Na=A.span`
  ${Da}
`;(0,k.forwardRef)(function(e,t){let{label:n,detail:r,icon:i,href:a,download:o,busy:s=!1,disabled:c=!1,badge:l,tooltip:u=`auto`,$variant:d=`secondary`,onClick:f,className:p,...m}=e,h=(0,k.useId)(),g=s||c,{state:_,handlers:v}=xr({...m,disabled:g,...g||f===void 0?{}:{onClick:f}}),y=(0,j.jsxs)(ka,{ref:t,...a!==void 0&&!g?{as:`a`,href:a,...o!==void 0&&o!==!1?{download:o===!0?``:o}:{}}:{type:`button`,disabled:g},$variant:d,className:p,"aria-label":n,...r!==void 0&&r!==``?{"aria-describedby":h}:{},...s?{"aria-busy":!0}:{},"data-interaction":_,...v,children:[(0,j.jsx)(Aa,{"aria-hidden":`true`,children:i}),s&&(0,j.jsx)(ja,{"aria-hidden":`true`,"data-icon-button-spinner":``}),l!==void 0&&(0,j.jsx)(Ma,{"aria-hidden":`true`,"data-icon-button-badge":l,$kind:l,children:l===`alert`?`!`:`+`}),r!==void 0&&r!==``&&(0,j.jsx)(Na,{id:h,children:r})]});return u===`off`?y:(0,j.jsx)(Ea,{content:r!==void 0&&r!==``?`${n} \xB7 ${r}`:n,describe:`none`,children:y})}),A.div`
  display: inline-flex;
  gap: 4px;
  padding: 3px;
  border-radius: 9px;
  background: ${({theme:e})=>e.colors.background.tertiary};
`;var Pa=A.button`
  padding: 5px 14px;
  border: 0;
  border-radius: 7px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  background: transparent;
  color: ${({theme:e})=>e.colors.text.secondary};
  &[aria-pressed='true'] {
    background: ${({theme:e})=>e.colors.surface};
    color: ${({theme:e})=>e.colors.text.primary};
  }
  ${yr}
  ${br}
  &[data-interaction='hover']:not(:disabled) { color: ${({theme:e})=>e.colors.text.primary}; }
`;(0,k.forwardRef)(function(e,t){let{state:n,rest:r,handlers:i}=xr(e);return(0,j.jsx)(Pa,{ref:t,"data-interaction":n,...r,...i})});var Fa=Kn`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.background.primary};
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: 13px;
  outline: none;
  transition: border-color 0.12s ease;
  &:hover:not(:focus):not(:disabled) {
    border-color: ${({theme:e})=>e.colors.border.hover};
  }
  &:focus {
    border-color: ${({theme:e})=>e.colors.primary.main};
  }
  /* An invalid control says so with its border as well as its error text; focus still shows over it. */
  &[aria-invalid='true']:not(:focus) {
    border-color: ${({theme:e})=>e.colors.error.main};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  /* On touch: 16px text, or iOS zooms the page on focus, and the 44px target every control here meets. */
  @media (pointer: coarse) {
    font-size: 16px;
    min-height: 44px;
  }
`,Ia=A.input`
  ${Fa}
`;A.textarea`
  ${Fa}
  line-height: 1.5;
  font-family: inherit;
  resize: vertical;
`;var La=A.select`
  ${Fa}
  font-family: inherit;
  cursor: pointer;
`;A.input.attrs(e=>({type:e.type??`checkbox`}))`
  accent-color: ${({theme:e})=>e.colors.primary.main};
  width: 14px;
  height: 14px;
  margin: 0;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,A.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.text.primary};
  cursor: pointer;
  &:has(> :disabled) {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;var Ra=A.div`
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.text.muted};
`,za=A.div`
  font-size: 15px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.primary};
`,Ba=A.span`
  color: ${({theme:e})=>e.colors.text.muted};
  font-size: 12px;
`,Va=A.div`
  color: ${({theme:e})=>e.colors.error.text};
  font-size: 13px;
`,Ha=A.h1`
  margin: 0;
  font-size: clamp(36px, 9vw, 56px);
  line-height: 1.05;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.colors.text.primary};
`,Ua=A.p`
  margin: 0;
  max-width: 36em;
  font-size: clamp(17px, 4.4vw, 20px);
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.text.secondary};
`;function Wa({label:e,htmlFor:t,required:n=!1,error:r,errorId:i,children:a}){return(0,j.jsxs)(Ga,{children:[e!==void 0&&(0,j.jsxs)(Ka,{htmlFor:t,children:[e,n&&(0,j.jsx)(qa,{"aria-hidden":`true`,children:` *`})]}),a,r!==void 0&&r!==``&&(0,j.jsx)(Va,{id:i,children:r})]})}var Ga=A.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`,Ka=A.label`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.primary};
`,qa=A.span`
  color: ${({theme:e})=>e.colors.error.text};
`;A.fieldset`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
  margin: 0;
  padding: 0;
  border: none;
`,A.legend`
  margin-bottom: 6px;
  padding: 0;
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.primary};
`,A.div`
  display: flex;
  gap: 8px;
  min-width: 0;
`,A(Ia)`
  flex: 0 0 80px;
  width: 80px;
  min-width: 0;
`,A(Ia)`
  flex: 1 1 auto;
  min-width: 0;
`,A.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`,A.label`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.primary};
`,A.div`
  position: relative;
  display: flex;
  min-width: 0;
`,A(Ia)`
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  padding-inline-end: 44px;
  /* The browser's own clear control would be a second one; ours is a real, named 44 px button. */
  &::-webkit-search-cancel-button,
  &::-webkit-search-decoration {
    appearance: none;
    display: none;
  }
`,A.button`
  position: absolute;
  inset-block: 0;
  inset-inline-end: 0;
  width: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: transparent;
  color: ${({theme:e})=>e.colors.text.secondary};
  cursor: pointer;
  border-radius: 8px;
  &:hover { color: ${({theme:e})=>e.colors.text.primary}; }
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary.main};
    outline-offset: -2px;
  }
`,A.div`
  ${Da}
`;var Ja=A.section`
  background: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 10px;
  padding: 14px;
`,Ya=A.div`
  display: flex;
  flex-direction: column;
  gap: ${({$gap:e=12})=>e}px;
  min-width: 0;
`,Xa=A.div`
  display: flex;
  align-items: ${({$align:e=`center`})=>e};
  justify-content: ${({$justify:e=`flex-start`})=>e};
  gap: ${({$gap:e=10})=>e}px;
  ${({$wrap:e})=>e&&`flex-wrap: wrap;`}
  min-width: 0;
`,Za={mobile:`@media (max-width: 767px)`};A.div`
  overflow-x: auto;
`,A.div`
  position: fixed;
  inset: 0;
  z-index: 40;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`,A.div`
  width: min(100%, 420px);
  max-height: ${({$max:e})=>e};
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  background: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-bottom: 0;
  border-radius: 20px 20px 0 0;
  padding-bottom: env(safe-area-inset-bottom);
  box-shadow: 0 -12px 40px rgba(0, 0, 0, 0.45);
  outline: none;
`,A.div`
  padding: 8px 16px 10px;
`,A.div`
  width: 40px;
  height: 4px;
  margin: 0 auto 10px;
  border-radius: 999px;
  background: ${({theme:e})=>e.colors.border};
`,A.h2`
  margin: 0;
  font-family: inherit;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.25;
`,A.div`
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 0 16px 12px;
  font-size: 14px;
  line-height: 1.5;
`,A.div`
  padding: 12px 16px 16px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  display: flex;
  flex-direction: column;
  gap: 8px;
`,A.div`
  position: fixed;
  inset: 0;
  z-index: ${({theme:e})=>e.zIndex.modal};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: rgba(0, 0, 0, 0.5);
`,A.div`
  width: min(100%, 440px);
  max-height: calc(100dvh - 32px);
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  background: ${({theme:e})=>e.colors.surface};
  color: ${({theme:e})=>e.colors.text.primary};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 12px;
  box-shadow: 0 24px 60px -12px rgba(0, 0, 0, 0.5);
  outline: none;
`,A.h2`
  margin: 0;
  padding: 18px 20px 8px;
  font-family: inherit;
  font-weight: 700;
  font-size: 17px;
  line-height: 1.3;
`,A.div`
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 4px 20px 16px;
  font-size: 14px;
  line-height: 1.5;
`,A.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
  padding: 12px 20px 16px;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,A.nav`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(0, 1fr);
  padding: 4px 4px env(safe-area-inset-bottom);
  background: ${({theme:e})=>e.colors.surface};
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,A.button`
  position: relative;
  min-height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  padding: 4px 2px;
  border: 0;
  border-radius: 10px;
  background: ${({$active:e,theme:t})=>e?`${t.colors.primary.main}1a`:`transparent`};
  color: ${({$active:e,theme:t})=>e?t.colors.primary.main:t.colors.text.secondary};
  font-size: 11px;
  font-weight: 600;
  line-height: 1.1;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary.main};
    outline-offset: -2px;
  }
`,A.span`
  position: relative;
  display: inline-flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`,A.span`
  position: absolute;
  top: -6px;
  left: calc(100% - 6px);
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 800;
  background: ${({theme:e})=>e.colors.primary.main};
  color: ${({theme:e})=>e.colors.background.primary};
`,A.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.text.primary};
  th, td {
    text-align: left;
    padding: 8px 6px;
    border-bottom: 1px solid ${({theme:e})=>e.colors.border};
    vertical-align: top;
  }
  th {
    color: ${({theme:e})=>e.colors.text.secondary};
    font-weight: 600;
  }
`;function Qa({scheme:e,mode:t,family:n,families:r,onSchemeChange:i,onFamilyChange:a,label:o=`Theme`}){let s={scheme:e,mode:t,family:n,families:r,onSchemeChange:i,onFamilyChange:a},c=pr({entries:(0,k.useMemo)(()=>oa(r),[r]),currentId:sa(e),keepOpenOnSpace:!0,onPick:e=>{ca(e,s)}}),l=`${o}, ${Zi(e,t)}`;return(0,j.jsxs)(nr,{ref:c.rootRef,children:[(0,j.jsx)(eo,{type:`button`,"aria-label":l,title:l,...c.triggerProps,children:(0,j.jsx)(ea,{scheme:e})}),c.open&&(0,j.jsx)(rr,{$placement:c.placement,"aria-label":o,...c.menuProps,children:(0,j.jsx)(la,{choice:s,itemProps:c.itemProps})})]})}function $a({label:e}){let{scheme:t,mode:n,family:r,families:i,setScheme:a,setFamily:o}=Ki();return(0,j.jsx)(Qa,{scheme:t,mode:n,family:r,families:i,onSchemeChange:a,onFamilyChange:o,...e===void 0?{}:{label:e}})}var eo=A.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 36px;
  height: 36px;
  padding: 0;
  border: 1px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.text.primary};
  background: transparent;

  &:hover,
  &[aria-expanded='true'] {
    background: ${({theme:e})=>e.colors.hover.surface};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary.main};
    outline-offset: 2px;
  }

  @media (pointer: coarse) {
    width: 44px;
    height: 44px;
  }
`;A.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,A.fieldset`
  margin: 0;
  padding: 0;
  border: none;
  min-width: 0;
`,A.legend`
  padding: 0;
  margin-bottom: 8px;
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.secondary};
`,A.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 8px;
`,A.label`
  display: flex;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  min-height: 44px;
  padding: 8px 12px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 8px;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.text.primary};

  &:has(input:checked) {
    border-color: ${({theme:e})=>e.colors.primary.main};
    box-shadow: inset 0 0 0 1px ${({theme:e})=>e.colors.primary.main};
  }

  &:has(input:focus-visible) {
    outline: 2px solid ${({theme:e})=>e.colors.primary.main};
    outline-offset: 2px;
  }
`,A.input`
  margin: 0;
  accent-color: ${({theme:e})=>e.colors.primary.main};
`,A.span`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,A.span`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.text.secondary};
`;var to=520,no=$n`
  from { transform: rotateX(0deg); }
  to { transform: rotateX(-90deg); }
`,ro=$n`
  from { transform: rotateX(90deg); }
  to { transform: rotateX(0deg); }
`;A.div`
  position: relative;
  width: ${({$width:e})=>e}px;
  height: ${({$height:e})=>e}px;
  overflow: hidden;
  perspective: 200px;
  user-select: none;
  border-radius: 6px;
  background: ${({theme:e})=>e.colors.background.secondary};
  border: 1px solid ${({theme:e})=>e.colors.border};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
  color: ${({theme:e})=>e.colors.text.primary};
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: ${({$font:e})=>e}px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  line-height: 1;
`,A.div`
  position: absolute;
  left: 0;
  right: 0;
  ${({$edge:e})=>e}: 0;
  height: ${({$half:e})=>e}px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: ${({$edge:e})=>e===`top`?`flex-end`:`flex-start`};
  background: ${({theme:e})=>e.colors.background.secondary};
  ${({$edge:e,theme:t})=>e===`bottom`?`border-top: 1px solid ${t.colors.border};`:``}
  ${({$flip:e,$edge:t})=>e&&Kn`
      z-index: ${t===`top`?3:2};
      transform-origin: ${t===`top`?`bottom`:`top`} center;
      backface-visibility: hidden;
      animation: ${t===`top`?no:ro} ${to}ms ${t===`top`?`ease-in`:`ease-out`}
        forwards;

      @media (prefers-reduced-motion: reduce) {
        animation: none;
        display: none;
      }
    `}
`,A.span`
  transform: translateY(${({$shift:e})=>e}px);
`,A.div`
  display: inline-flex;
  align-items: flex-end;
  gap: ${({$gap:e})=>e}px;
`,A.div`
  display: inline-flex;
  align-items: center;
  gap: ${({$gap:e})=>e}px;
  font-size: ${({$font:e})=>e}px;
  font-weight: 650;
  color: ${({theme:e})=>e.colors.text.secondary};
`,A.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`,A.div`
  display: flex;
  gap: 2px;
`,A.span`
  font-size: ${({$font:e})=>e}px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  line-height: 1;
  color: ${({theme:e})=>e.colors.text.secondary};
`,A.div`
  display: inline-flex;
  align-items: flex-end;
  gap: ${({$gap:e})=>Math.max(2,e/2)}px;
`;function io({href:e,current:t,onChoose:n,renderLink:r,className:i,children:a}){let o=t?`page`:void 0;return e===void 0?(0,j.jsx)(`button`,{type:`button`,className:i,"aria-current":o,onClick:n,children:a}):(0,j.jsx)(j.Fragment,{children:r({href:e,className:i,"aria-current":o,onClick:n,children:a})})}A.div`
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 32px;
  align-items: start;
`,A.nav`
  position: sticky;
  top: 16px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
`,A(io)`
  display: flex;
  box-sizing: border-box;
  text-decoration: none;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 36px;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  font: inherit;
  font-size: 14px;
  font-weight: ${({$active:e})=>e?600:500};
  text-align: left;
  cursor: pointer;
  color: ${({theme:e,$active:t})=>t?e.colors.text.primary:e.colors.text.secondary};
  background: ${({theme:e,$active:t})=>t?e.colors.background.tertiary:`transparent`};

  &:hover {
    color: ${({theme:e})=>e.colors.text.primary};
    background: ${({theme:e})=>e.colors.hover.surface};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary.main};
    outline-offset: -2px;
  }

  @media (pointer: coarse) {
    min-height: 44px;
  }
`,A.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.surface};

  li + li {
    border-top: 1px solid ${({theme:e})=>e.colors.border};
  }
`,A(io)`
  display: flex;
  box-sizing: border-box;
  text-decoration: none;
  align-items: center;
  gap: 12px;
  width: 100%;
  min-height: 56px;
  padding: 12px 16px;
  border: none;
  font: inherit;
  text-align: left;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.text.primary};
  background: transparent;

  &:active {
    background: ${({theme:e})=>e.colors.hover.surface};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary.main};
    outline-offset: -2px;
  }
`,A.span`
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  flex-direction: column;
  gap: 2px;
`,A.span`
  font-size: 15px;
  font-weight: 500;
`,A.span`
  font-size: 13px;
  color: ${({theme:e})=>e.colors.text.secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,A.span`
  display: inline-flex;
  flex: 0 0 auto;
  color: ${({theme:e})=>e.colors.text.secondary};
`,A.span`
  flex: 0 0 auto;
  font-size: 20px;
  line-height: 1;
  color: ${({theme:e})=>e.colors.text.muted};
`,A.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
`,A(io)`
  align-self: flex-start;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 44px;
  padding: 0 4px;
  border: none;
  font: inherit;
  font-size: 15px;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.primary.main};
  background: transparent;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary.main};
    outline-offset: 2px;
    border-radius: 6px;
  }
`,A.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.primary};

  ${Za.mobile} {
    font-size: 22px;
  }
`,A.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`,A.span`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text.secondary};
`,A.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  padding: 4px 4px 4px 12px;
  border-radius: 8px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.background.primary};
`,A.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: ${({theme:e})=>e.typography.fontFamily.mono};
  font-size: 13px;
  color: ${({theme:e})=>e.colors.text.primary};
  user-select: all;
`,A(wr)`
  flex: 0 0 auto;
  justify-content: center;
  min-width: 72px;

  @media (pointer: coarse) {
    min-height: 44px;
  }
`,A.span`
  ${Da}
`,A.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.colors.error.border};
  background: ${({theme:e})=>e.colors.surface};
`,A.h3`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.error.text};
`,A.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  & + & {
    padding-top: 16px;
    border-top: 1px solid ${({theme:e})=>e.colors.border};
  }
`,A.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  /* 44 px on a coarse pointer: these buttons are the only way to run (or back out of) an irreversible action. */
  @media (pointer: coarse) {
    > button {
      min-height: 44px;
    }
  }
`,A.div`
  display: flex;
  flex: 1 1 240px;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,A.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.primary};
`,A.span`
  font-size: 13px;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.text.secondary};
`,A.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,A.label`
  font-size: 13px;
  color: ${({theme:e})=>e.colors.text.secondary};

  strong {
    color: ${({theme:e})=>e.colors.text.primary};
  }
`,A.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.error.text};
`,A.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;

  /* 44 px on a coarse pointer: these buttons are the only way to run (or back out of) an irreversible action. */
  @media (pointer: coarse) {
    > button {
      min-height: 44px;
    }
  }
`,A.p`
  margin: 0;
  padding: 6px 10px;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.text.secondary};
`,A.header`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
`,A.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
  flex: 1 1 280px;
`,A.h1`
  margin: 0;
  font-size: 22px;
  line-height: 1.25;
  font-weight: 650;
  letter-spacing: -0.01em;
  overflow-wrap: anywhere;
  color: ${({theme:e})=>e.colors.text.primary};
  /* Focus is moved here by script on a change of view; the visible ring is the keyboard user's cue. */
  &:focus:not(:focus-visible) {
    outline: none;
  }
`,A.p`
  margin: 0;
  max-width: 48em;
  font-size: 14px;
  line-height: 1.45;
  color: ${({theme:e})=>e.colors.text.secondary};
`,A.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;

  @media (pointer: coarse) {
    & > button,
    & > a {
      min-height: 44px;
      box-sizing: border-box;
    }
  }
`,A.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 32px 16px;
  text-align: center;
  border: 1px dashed ${({theme:e})=>e.colors.border};
  border-radius: 10px;
`,A.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  font-size: 20px;
  color: ${({theme:e})=>e.colors.text.secondary};
  background: ${({theme:e})=>e.colors.background.secondary};

  & > svg {
    max-width: 24px;
    max-height: 24px;
  }
`,A.h2`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  overflow-wrap: anywhere;
  color: ${({theme:e})=>e.colors.text.primary};
`,A.p`
  margin: 0;
  max-width: 32em;
  font-size: 13px;
  line-height: 1.45;
  color: ${({theme:e})=>e.colors.text.secondary};
`,A.div`
  margin-top: 4px;

  @media (pointer: coarse) {
    & > button,
    & > a {
      min-height: 44px;
      box-sizing: border-box;
    }
  }
`;function J(e){return({theme:t})=>{switch(e){case`accent`:return t.colors.primary.main;case`success`:return t.colors.success.main;case`warning`:return t.colors.warning.main;case`error`:return t.colors.error.main;case`info`:return t.colors.info.main;default:return t.colors.text.secondary}}}A.span`
  display: inline-flex;
  align-items: center;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 2px 8px;
  border-radius: 5px;
  color: ${({$tone:e=`neutral`})=>J(e)};
  background: ${({theme:e})=>e.colors.background.tertiary};
  border: 1px solid ${({theme:e})=>e.colors.border};
`;var Y=e=>({theme:t})=>{switch(e){case`accent`:return`${t.colors.primary.main}1a`;case`success`:return t.colors.success.background;case`warning`:return t.colors.warning.background;case`error`:return t.colors.error.background;case`info`:return t.colors.info.background;default:return t.colors.background.tertiary}},ao=e=>({theme:t})=>{switch(e){case`accent`:return`${t.colors.primary.main}40`;case`success`:return t.colors.success.border;case`warning`:return t.colors.warning.border;case`error`:return t.colors.error.border;case`info`:return t.colors.info.border;default:return t.colors.border.default}};A.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 2px 8px;
  border-radius: 5px;
  color: ${({$tone:e=`neutral`})=>J(e)};
  background: ${({$tone:e=`neutral`})=>Y(e)};
  border: 1px solid ${({$tone:e=`neutral`})=>ao(e)};
`,A.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${({$status:e=`up`,theme:t})=>e===`up`?t.colors.success.main:e===`down`?t.colors.error.main:t.colors.warning.main};
`,A.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,A.div`
  display: grid;
  grid-template-columns: 120px 1fr auto;
  gap: 10px;
  align-items: center;
  font-size: 11.5px;
`,A.span`
  color: ${({theme:e})=>e.colors.text.secondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,A.span`
  height: 7px;
  background: ${({theme:e})=>e.colors.background.primary};
  border-radius: 4px;
  overflow: hidden;
`,A.span`
  display: block;
  height: 100%;
  background: ${({$tone:e})=>J(e)};
`,A.span`
  font-family: ui-monospace, Menlo, monospace;
  color: ${({theme:e})=>e.colors.text.secondary};
`,A.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`,A.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
  font-size: 12px;
`,A.span`
  color: ${({theme:e})=>e.colors.text.secondary};
  min-width: 0;
  overflow-wrap: anywhere;
`,A.span`
  font-family: ui-monospace, Menlo, monospace;
  font-variant-numeric: tabular-nums;
  color: ${({theme:e})=>e.colors.text.primary};
  white-space: nowrap;
`,A.div`
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
  background: ${({theme:e})=>e.colors.background.tertiary};
`,A.div`
  height: 100%;
  background: ${({$tone:e})=>J(e)};
  @media (prefers-reduced-motion: no-preference) {
    transition: width 300ms ease-out;
  }
`;var oo=$n`
  from { opacity: 0; }
  to { opacity: 1; }
`;A.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 16px 0;
  box-sizing: border-box;
`,A.div`
  width: 160px;
  max-width: 100%;
`,A.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${oo} 160ms ease-out;
  }
`,A.div`
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid ${({theme:e})=>e.colors.error.border};
  background: ${({theme:e})=>e.colors.error.background};
  color: ${({theme:e})=>e.colors.error.text};
  font-size: 14px;
`,A.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
  padding: 12px 0 16px;
  ${Za.mobile} {
    position: sticky;
    bottom: 0;
    margin: 0 -16px;
    padding: 12px 16px calc(12px + env(safe-area-inset-bottom, 0px));
    background: ${({theme:e})=>e.colors.background.primary};
    border-top: 1px solid ${({theme:e})=>e.colors.border.default};
    & > button {
      flex: 1 1 0;
    }
  }
`,A.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 0;
  padding: 12px 14px;
  border-radius: 10px;
  background: ${({theme:e})=>e.colors.surface};
  border: 2px solid ${({theme:e,$checked:t})=>t?e.colors.text.primary:e.colors.text.secondary};
  &:has(input:focus-visible) {
    outline: 2px solid ${({theme:e})=>e.colors.primary.main};
    outline-offset: 2px;
  }
`,A.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  opacity: ${({$dim:e})=>e?.6:1};
`,A.div`
  flex: 1 1 auto;
  min-width: 0;
  margin: 0;
  font: inherit;
`,A.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  min-width: 0;
`;var so=`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 44px;
`;A.label`
  ${so}
  cursor: pointer;
  & > input {
    flex: none;
    width: 22px;
    height: 22px;
    margin: 11px 0;
    accent-color: ${({theme:e})=>e.colors.primary.main};
    cursor: inherit;
  }
  &:has(> input:disabled) {
    cursor: not-allowed;
  }
`,A.div`
  ${so}
`,A.span`
  flex: 1 1 auto;
  align-self: center;
  font-size: 15px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.primary};
  overflow-wrap: anywhere;
`,A.span`
  padding-inline-start: 34px;
  font-size: 13px;
  line-height: 1.4;
  color: ${({theme:e})=>e.colors.text.secondary};
`,A.span`
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 44px;
  color: ${({theme:e})=>e.colors.text.secondary};
`,A.span`
  flex: none;
  display: inline-flex;
  align-items: center;
  height: 44px;
  color: ${({theme:e})=>e.colors.primary.main};
  visibility: ${({$on:e})=>e?`visible`:`hidden`};
`,A.span`
  flex: none;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
`,A.button`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 44px;
  min-width: 44px;
  padding: 0 8px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  font: inherit;
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.primary};
  cursor: pointer;
  &:hover { background: ${({theme:e})=>e.colors.background.tertiary}; }
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary.main};
    outline-offset: 2px;
  }
`,A.svg`
  transform: rotate(${({$open:e})=>e?180:0}deg);
  @media (prefers-reduced-motion: no-preference) {
    transition: transform 150ms ease-out;
  }
`,A.div`
  min-width: 0;
  &[hidden] {
    display: none;
  }
`;var co=$n`
  0% { background-position: -800px 0; }
  100% { background-position: 800px 0; }
`;A.div`
  position: relative;
  overflow: hidden;
  line-height: 0;
  border-radius: ${({$borderRadius:e})=>e??`8px`};
  border: ${({$noBorder:e,theme:t})=>e?`none`:`1px solid ${t.colors.border}`};
  ${({$aspectRatio:e})=>e?`aspect-ratio: ${e};`:``}
`,A.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  border-radius: inherit;
  pointer-events: none;
  background: linear-gradient(
    90deg,
    ${({theme:e})=>e.colors.background.secondary} 0%,
    ${({theme:e})=>e.colors.background.tertiary} 50%,
    ${({theme:e})=>e.colors.background.secondary} 100%
  );
  background-size: 800px 100%;
  animation: ${co} 1.8s infinite linear;
  opacity: ${({$visible:e})=>+!!e};
  transition: opacity 300ms ease;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,A.picture`
  display: block;
  width: 100%;
`,A.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: ${({$objectFit:e})=>e};
  user-select: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
  pointer-events: none;
`,A.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  cursor: pointer;
`,(0,k.createContext)(null),A.div`
  position: relative;
  display: inline-block;
  line-height: 0;
`,A.div`
  filter: ${({$blurred:e,$radius:t})=>e?`blur(${t}px)`:`none`};
  opacity: ${({$blurred:e})=>e?.7:1};
  transition:
    filter 300ms ease,
    opacity 300ms ease;
`,A.button`
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.75);
  background: rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary.main};
    outline-offset: -2px;
  }
`;var lo=e=>e===0?`no decimals`:`at most ${e} decimal${e===1?``:`s`}`,uo=/\p{Sc}|(?<![\p{L}])[\p{L}]{3}(?![\p{L}])/u,fo=/[0-9]/,po=/[\uFF10-\uFF19\uFF0E\u3002]/g;function mo(e){return e.replace(po,e=>e===`．`||e===`。`?`.`:String.fromCharCode(e.charCodeAt(0)-65296+48))}function ho(e,t){let n=t!==null&&fa(t)?pa(t):2;switch(e){case`use-digits-and-a-point`:return n===0?`Use digits only, with no commas or spaces`:`Use digits and one point, with no commas or spaces`;case`too-many-decimals`:return`${t??`This currency`} uses ${lo(n)}`;case`not-positive`:return`Enter an amount above zero`;case`too-large`:return`That amount is too large`;case`not-a-number`:return`Enter a number using digits`;case`empty`:return`Enter an amount`;case`unknown-currency`:return`Choose a currency first`}}function go(e,t){let n=ya(e,t);return n.ok||n.reason===`empty`?null:uo.test(e)&&fo.test(e)?`Type the number only, without a currency sign or code`:ho(n.reason,t)}var _o=A(Ia)`
  min-width: 0;
`,vo=A.p`
  margin: 0;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.text.muted};
`;(0,k.forwardRef)(function({id:e,label:t,currency:n,value:r,onChange:i,onBlur:a,name:o,hint:s,required:c,disabled:l,showErrors:u,error:d},f){let p=n!==null&&fa(n)?n:null,[m,h]=(0,k.useState)(null),g=(0,k.useRef)(r),[_,v]=(0,k.useState)(r);r!==_&&(v(r),r!==g.current&&h(null));let y=p===null?null:go(r,p),b=(p===null||l===!0||y===null?null:u===!0?y:m===null?null:go(m,p))??(l===!0||d===void 0?null:d),x=e=>{e===``&&h(null),g.current=e,i(e)},S=`${e}-error`,C=`${e}-hint`,w=`${e}-currency`,ee=[s===void 0?null:C,p===null?w:null,b===null?null:S].filter(e=>e!==null).join(` `);return(0,j.jsxs)(Wa,{label:p===null?t:`${t} (${p})`,htmlFor:e,required:c===!0,...b===null?{}:{error:b},errorId:S,children:[(0,j.jsx)(_o,{ref:f,id:e,name:o,type:`text`,inputMode:`decimal`,autoComplete:`off`,value:r,"aria-required":c===!0||void 0,disabled:l,"aria-invalid":b!==null||void 0,"aria-describedby":ee===``?void 0:ee,onBlur:e=>{h(r===``?null:r),a?.(e)},onChange:e=>{let t=e.nativeEvent.isComposing===!0;x(t?e.target.value:mo(e.target.value))},onCompositionEnd:e=>x(mo(e.currentTarget.value))}),s!==void 0&&(0,j.jsx)(vo,{id:C,children:s}),p===null&&(0,j.jsx)(vo,{id:w,children:ho(`unknown-currency`,null)})]})}),A.div`
  display: flex;
  gap: 6px;
  min-width: 0;
`,A(Ia)`
  flex: 1 1 8ch;
  min-width: 0;
  @media (pointer: coarse) {
    min-height: 44px;
  }
`,A(La)`
  flex: 0 0 auto;
  @media (pointer: coarse) {
    min-height: 44px;
  }
`,A.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 12px;
`,A.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.primary};
`,A.span`
  font-size: 11px;
  color: ${({theme:e})=>e.colors.text.muted};
  font-family: ui-monospace, Menlo, monospace;
`,A.div`
  font-family: ui-monospace, Menlo, monospace;
  font-size: 12px;
  background: ${({theme:e})=>e.colors.background.primary};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 8px;
  padding: 10px;
  max-height: 320px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,A.div`
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,A.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  background: ${({theme:e})=>e.colors.background.tertiary};
  border: 1px solid ${({theme:e,$status:t})=>t===`success`?e.colors.success.border:t===`error`?e.colors.error.border:e.colors.border};
  color: ${({theme:e})=>e.colors.text.primary};
  padding: 11px 14px;
  border-radius: 10px;
  font-size: 13px;
  line-height: 1.35;
  box-shadow: 0 12px 30px -8px rgba(0, 0, 0, 0.6);
  max-width: 560px;
`,(0,k.createContext)(null),A.div`
  position: fixed;
  top: var(--toast-top, auto);
  right: var(--toast-right, 16px);
  bottom: var(--toast-bottom, 16px);
  z-index: 50;
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;
  max-width: min(460px, var(--toast-max-width, calc(100vw - 32px)));
  pointer-events: none;
`,A.span`
  flex: 0 0 auto;
  font-size: 12px;
  line-height: 1.5;
  color: ${({theme:e,$status:t})=>t===`success`?e.colors.success.main:t===`error`?e.colors.error.main:e.colors.text.muted};
`,A.span`
  flex: 1 1 auto;
`,A.button`
  pointer-events: auto;
  flex: 0 0 auto;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0 2px;
  font-size: 14px;
  line-height: 1.2;
  color: ${({theme:e})=>e.colors.text.muted};
  &:hover {
    color: ${({theme:e})=>e.colors.text.primary};
  }
`,A.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,A.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 12px;
  padding: 8px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 8px;
  background: ${({theme:e})=>e.colors.background.secondary};
`,A.div`
  flex: 1 1 8rem;
  min-width: 0;
`,A.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;

  & > button {
    padding: 4px 8px;
    font-size: 12px;
    min-height: 24px;
  }
  @media (pointer: coarse) {
    & > button {
      min-height: 44px;
      min-width: 44px;
      justify-content: center;
    }
  }
`;function yo(e,t,n){return t?{open:!0,signUp:`${e}/auth/register`,signIn:`${e}/auth/sign-in?next=%2F`}:{open:!1,earlyAccess:n}}var bo=yo(`https://app.afterset.studio`,!1,`mailto:hiafterset@gmail.com?subject=Afterset%20early%20access`),xo=`Afterset`,So=`Let's collab.`;A(Ia)`
  width: 100%;
  min-width: 0;
`,A(La)`
  width: 100%;
  min-width: 0;
`,A.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;var Co=A.main`
  max-width: 880px;
  margin: 0 auto;
  padding: 48px 16px 64px;
  min-width: 0;
  overflow-wrap: anywhere;
  ${Za.mobile} {
    padding: 28px 16px 48px;
  }
`,wo=A.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`,To=A.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  ${Za.mobile} {
    grid-template-columns: minmax(0, 1fr);
  }
`,Eo=[{title:`Bring your people in`,text:`Invite editors, collaborators and staff with a link. Nobody gets in until you say yes.`},{title:`Everyone in their lane`,text:`Every studio has owners, admins, contributors and members. Other roles come from the presets you pick, and each person sees only what their role needs.`},{title:`After the set wraps`,text:`Culling, cutting and releasing, built around how your studio works. Arriving one feature at a time.`}];function Do({cta:e=bo}){return(0,j.jsx)(Co,{children:(0,j.jsxs)(Ya,{$gap:28,children:[(0,j.jsxs)(Ya,{$gap:14,children:[(0,j.jsxs)(wo,{children:[(0,j.jsx)(Ra,{children:xo}),(0,j.jsx)($a,{})]}),(0,j.jsx)(Ha,{children:So}),(0,j.jsx)(Ua,{children:`A home for your studio and the people you make things with. Start yours in a minute.`}),(0,j.jsx)(Xa,{$gap:8,$wrap:!0,children:e.open?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Tr,{href:e.signUp,$variant:`primary`,children:`Create your studio`}),(0,j.jsx)(Tr,{href:e.signIn,children:`Sign in`})]}):(0,j.jsx)(Tr,{href:e.earlyAccess,$variant:`primary`,children:`Get early access`})})]}),(0,j.jsx)(To,{children:Eo.map(e=>(0,j.jsx)(Ja,{children:(0,j.jsxs)(Ya,{$gap:6,children:[(0,j.jsx)(za,{as:`h2`,children:e.title}),(0,j.jsx)(Ba,{children:e.text})]})},e.title))}),(0,j.jsx)(Ba,{children:`Early access: studios, invitations and roles are open for testing. No payment is taken.`})]})})}function Oo(e){if(e!==null&&!/^[a-z][a-z0-9-]*$/.test(e))throw Error(`theme cookie zone "${e}" is not a zone label`);let t=e===null?``:`_${e}`;return{scheme:`theme${t}`,family:`theme-family${t}`}}var ko=`system`,Ao=`neutral`,jo=Oo(`app`),Mo=jo.scheme,No=jo.family,Po=`data-landing-wait`;function Fo({children:e}){return(0,j.jsxs)(Gi,{schemeCookie:Mo,familyCookie:No,cookieDomain:`.afterset.studio`,defaultScheme:ko,families:Ir,defaultFamily:Ao,children:[(0,j.jsx)(qi,{}),(0,j.jsx)(ba,{}),e]})}var Io=document.getElementById(`landing`);if(Io===null)throw Error(`landing: #landing is missing from landing.html`);(0,Je.flushSync)(()=>{(0,Ye.createRoot)(Io).render((0,j.jsx)(k.StrictMode,{children:(0,j.jsx)(Fo,{children:(0,j.jsx)(Do,{})})}))}),document.documentElement.removeAttribute(Po);
//# sourceMappingURL=landing-CvosMSsJ.js.map
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var od={exports:{}},Xo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function JS(){if(Fg)return Xo;Fg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Xo.Fragment=t,Xo.jsx=i,Xo.jsxs=i,Xo}var Gg;function $S(){return Gg||(Gg=1,od.exports=JS()),od.exports}var q=$S(),ld={exports:{}},be={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function ty(){if(Hg)return be;Hg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function b(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,y={};function v(O,Q,yt){this.props=O,this.context=Q,this.refs=y,this.updater=yt||A}v.prototype.isReactComponent={},v.prototype.setState=function(O,Q){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Q,"setState")},v.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function R(){}R.prototype=v.prototype;function I(O,Q,yt){this.props=O,this.context=Q,this.refs=y,this.updater=yt||A}var U=I.prototype=new R;U.constructor=I,D(U,v.prototype),U.isPureReactComponent=!0;var H=Array.isArray;function C(){}var z={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function P(O,Q,yt){var Rt=yt.ref;return{$$typeof:r,type:O,key:Q,ref:Rt!==void 0?Rt:null,props:yt}}function W(O,Q){return P(O.type,Q,O.props)}function G(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function Y(O){var Q={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(yt){return Q[yt]})}var rt=/\/+/g;function dt(O,Q){return typeof O=="object"&&O!==null&&O.key!=null?Y(""+O.key):Q.toString(36)}function k(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(C,C):(O.status="pending",O.then(function(Q){O.status==="pending"&&(O.status="fulfilled",O.value=Q)},function(Q){O.status==="pending"&&(O.status="rejected",O.reason=Q)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function L(O,Q,yt,Rt,Ot){var st=typeof O;(st==="undefined"||st==="boolean")&&(O=null);var At=!1;if(O===null)At=!0;else switch(st){case"bigint":case"string":case"number":At=!0;break;case"object":switch(O.$$typeof){case r:case t:At=!0;break;case S:return At=O._init,L(At(O._payload),Q,yt,Rt,Ot)}}if(At)return Ot=Ot(O),At=Rt===""?"."+dt(O,0):Rt,H(Ot)?(yt="",At!=null&&(yt=At.replace(rt,"$&/")+"/"),L(Ot,Q,yt,"",function(qt){return qt})):Ot!=null&&(G(Ot)&&(Ot=W(Ot,yt+(Ot.key==null||O&&O.key===Ot.key?"":(""+Ot.key).replace(rt,"$&/")+"/")+At)),Q.push(Ot)),1;At=0;var _t=Rt===""?".":Rt+":";if(H(O))for(var Et=0;Et<O.length;Et++)Rt=O[Et],st=_t+dt(Rt,Et),At+=L(Rt,Q,yt,st,Ot);else if(Et=b(O),typeof Et=="function")for(O=Et.call(O),Et=0;!(Rt=O.next()).done;)Rt=Rt.value,st=_t+dt(Rt,Et++),At+=L(Rt,Q,yt,st,Ot);else if(st==="object"){if(typeof O.then=="function")return L(k(O),Q,yt,Rt,Ot);throw Q=String(O),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return At}function B(O,Q,yt){if(O==null)return O;var Rt=[],Ot=0;return L(O,Rt,"","",function(st){return Q.call(yt,st,Ot++)}),Rt}function et(O){if(O._status===-1){var Q=O._result;Q=Q(),Q.then(function(yt){(O._status===0||O._status===-1)&&(O._status=1,O._result=yt)},function(yt){(O._status===0||O._status===-1)&&(O._status=2,O._result=yt)}),O._status===-1&&(O._status=0,O._result=Q)}if(O._status===1)return O._result.default;throw O._result}var ht=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},xt={map:B,forEach:function(O,Q,yt){B(O,function(){Q.apply(this,arguments)},yt)},count:function(O){var Q=0;return B(O,function(){Q++}),Q},toArray:function(O){return B(O,function(Q){return Q})||[]},only:function(O){if(!G(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return be.Activity=x,be.Children=xt,be.Component=v,be.Fragment=i,be.Profiler=l,be.PureComponent=I,be.StrictMode=s,be.Suspense=m,be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,be.__COMPILER_RUNTIME={__proto__:null,c:function(O){return z.H.useMemoCache(O)}},be.cache=function(O){return function(){return O.apply(null,arguments)}},be.cacheSignal=function(){return null},be.cloneElement=function(O,Q,yt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Rt=D({},O.props),Ot=O.key;if(Q!=null)for(st in Q.key!==void 0&&(Ot=""+Q.key),Q)!T.call(Q,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&Q.ref===void 0||(Rt[st]=Q[st]);var st=arguments.length-2;if(st===1)Rt.children=yt;else if(1<st){for(var At=Array(st),_t=0;_t<st;_t++)At[_t]=arguments[_t+2];Rt.children=At}return P(O.type,Ot,Rt)},be.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},be.createElement=function(O,Q,yt){var Rt,Ot={},st=null;if(Q!=null)for(Rt in Q.key!==void 0&&(st=""+Q.key),Q)T.call(Q,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(Ot[Rt]=Q[Rt]);var At=arguments.length-2;if(At===1)Ot.children=yt;else if(1<At){for(var _t=Array(At),Et=0;Et<At;Et++)_t[Et]=arguments[Et+2];Ot.children=_t}if(O&&O.defaultProps)for(Rt in At=O.defaultProps,At)Ot[Rt]===void 0&&(Ot[Rt]=At[Rt]);return P(O,st,Ot)},be.createRef=function(){return{current:null}},be.forwardRef=function(O){return{$$typeof:p,render:O}},be.isValidElement=G,be.lazy=function(O){return{$$typeof:S,_payload:{_status:-1,_result:O},_init:et}},be.memo=function(O,Q){return{$$typeof:h,type:O,compare:Q===void 0?null:Q}},be.startTransition=function(O){var Q=z.T,yt={};z.T=yt;try{var Rt=O(),Ot=z.S;Ot!==null&&Ot(yt,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(C,ht)}catch(st){ht(st)}finally{Q!==null&&yt.types!==null&&(Q.types=yt.types),z.T=Q}},be.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},be.use=function(O){return z.H.use(O)},be.useActionState=function(O,Q,yt){return z.H.useActionState(O,Q,yt)},be.useCallback=function(O,Q){return z.H.useCallback(O,Q)},be.useContext=function(O){return z.H.useContext(O)},be.useDebugValue=function(){},be.useDeferredValue=function(O,Q){return z.H.useDeferredValue(O,Q)},be.useEffect=function(O,Q){return z.H.useEffect(O,Q)},be.useEffectEvent=function(O){return z.H.useEffectEvent(O)},be.useId=function(){return z.H.useId()},be.useImperativeHandle=function(O,Q,yt){return z.H.useImperativeHandle(O,Q,yt)},be.useInsertionEffect=function(O,Q){return z.H.useInsertionEffect(O,Q)},be.useLayoutEffect=function(O,Q){return z.H.useLayoutEffect(O,Q)},be.useMemo=function(O,Q){return z.H.useMemo(O,Q)},be.useOptimistic=function(O,Q){return z.H.useOptimistic(O,Q)},be.useReducer=function(O,Q,yt){return z.H.useReducer(O,Q,yt)},be.useRef=function(O){return z.H.useRef(O)},be.useState=function(O){return z.H.useState(O)},be.useSyncExternalStore=function(O,Q,yt){return z.H.useSyncExternalStore(O,Q,yt)},be.useTransition=function(){return z.H.useTransition()},be.version="19.2.7",be}var Vg;function Fh(){return Vg||(Vg=1,ld.exports=ty()),ld.exports}var ae=Fh(),cd={exports:{}},Wo={},ud={exports:{}},fd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function ey(){return kg||(kg=1,(function(r){function t(L,B){var et=L.length;L.push(B);t:for(;0<et;){var ht=et-1>>>1,xt=L[ht];if(0<l(xt,B))L[ht]=B,L[et]=xt,et=ht;else break t}}function i(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var B=L[0],et=L.pop();if(et!==B){L[0]=et;t:for(var ht=0,xt=L.length,O=xt>>>1;ht<O;){var Q=2*(ht+1)-1,yt=L[Q],Rt=Q+1,Ot=L[Rt];if(0>l(yt,et))Rt<xt&&0>l(Ot,yt)?(L[ht]=Ot,L[Rt]=et,ht=Rt):(L[ht]=yt,L[Q]=et,ht=Q);else if(Rt<xt&&0>l(Ot,et))L[ht]=Ot,L[Rt]=et,ht=Rt;else break t}}return B}function l(L,B){var et=L.sortIndex-B.sortIndex;return et!==0?et:L.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();r.unstable_now=function(){return d.now()-p}}var m=[],h=[],S=1,x=null,g=3,b=!1,A=!1,D=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function U(L){for(var B=i(h);B!==null;){if(B.callback===null)s(h);else if(B.startTime<=L)s(h),B.sortIndex=B.expirationTime,t(m,B);else break;B=i(h)}}function H(L){if(D=!1,U(L),!A)if(i(m)!==null)A=!0,C||(C=!0,Y());else{var B=i(h);B!==null&&k(H,B.startTime-L)}}var C=!1,z=-1,T=5,P=-1;function W(){return y?!0:!(r.unstable_now()-P<T)}function G(){if(y=!1,C){var L=r.unstable_now();P=L;var B=!0;try{t:{A=!1,D&&(D=!1,R(z),z=-1),b=!0;var et=g;try{e:{for(U(L),x=i(m);x!==null&&!(x.expirationTime>L&&W());){var ht=x.callback;if(typeof ht=="function"){x.callback=null,g=x.priorityLevel;var xt=ht(x.expirationTime<=L);if(L=r.unstable_now(),typeof xt=="function"){x.callback=xt,U(L),B=!0;break e}x===i(m)&&s(m),U(L)}else s(m);x=i(m)}if(x!==null)B=!0;else{var O=i(h);O!==null&&k(H,O.startTime-L),B=!1}}break t}finally{x=null,g=et,b=!1}B=void 0}}finally{B?Y():C=!1}}}var Y;if(typeof I=="function")Y=function(){I(G)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,dt=rt.port2;rt.port1.onmessage=G,Y=function(){dt.postMessage(null)}}else Y=function(){v(G,0)};function k(L,B){z=v(function(){L(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(L){L.callback=null},r.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(L){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var et=g;g=B;try{return L()}finally{g=et}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(L,B){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var et=g;g=L;try{return B()}finally{g=et}},r.unstable_scheduleCallback=function(L,B,et){var ht=r.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?ht+et:ht):et=ht,L){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=et+xt,L={id:S++,callback:B,priorityLevel:L,startTime:et,expirationTime:xt,sortIndex:-1},et>ht?(L.sortIndex=et,t(h,L),i(m)===null&&L===i(h)&&(D?(R(z),z=-1):D=!0,k(H,et-ht))):(L.sortIndex=xt,t(m,L),A||b||(A=!0,C||(C=!0,Y()))),L},r.unstable_shouldYield=W,r.unstable_wrapCallback=function(L){var B=g;return function(){var et=g;g=B;try{return L.apply(this,arguments)}finally{g=et}}}})(fd)),fd}var Xg;function ny(){return Xg||(Xg=1,ud.exports=ey()),ud.exports}var dd={exports:{}},Yn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function iy(){if(Wg)return Yn;Wg=1;var r=Fh();function t(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)h+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,S){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:h,implementation:S}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Yn.createPortal=function(m,h){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return c(m,h,null,S)},Yn.flushSync=function(m){var h=d.T,S=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=h,s.p=S,s.d.f()}},Yn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},Yn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Yn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var S=h.as,x=p(S,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,b=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;S==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:b}):S==="script"&&s.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:b,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Yn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var S=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},Yn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var S=h.as,x=p(S,h.crossOrigin);s.d.L(m,S,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Yn.preloadModule=function(m,h){if(typeof m=="string")if(h){var S=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},Yn.requestFormReset=function(m){s.d.r(m)},Yn.unstable_batchedUpdates=function(m,h){return m(h)},Yn.useFormState=function(m,h,S){return d.H.useFormState(m,h,S)},Yn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Yn.version="19.2.7",Yn}var jg;function ay(){if(jg)return dd.exports;jg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),dd.exports=iy(),dd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function sy(){if(qg)return Wo;qg=1;var r=ny(),t=Fh(),i=ay();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function h(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var _=!1,w=u.child;w;){if(w===a){_=!0,a=u,o=f;break}if(w===o){_=!0,o=u,a=f;break}w=w.sibling}if(!_){for(w=f.child;w;){if(w===a){_=!0,a=f,o=u;break}if(w===o){_=!0,o=f,a=u;break}w=w.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function S(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=S(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),I=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),C=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),W=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case H:return"Suspense";case C:return"SuspenseList";case P:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case I:return e.displayName||"Context";case R:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:dt(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return dt(e(n))}catch{}}return null}var k=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},ht=[],xt=-1;function O(e){return{current:e}}function Q(e){0>xt||(e.current=ht[xt],ht[xt]=null,xt--)}function yt(e,n){xt++,ht[xt]=e.current,e.current=n}var Rt=O(null),Ot=O(null),st=O(null),At=O(null);function _t(e,n){switch(yt(st,n),yt(Ot,e),yt(Rt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?lg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=lg(n),e=cg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Q(Rt),yt(Rt,e)}function Et(){Q(Rt),Q(Ot),Q(st)}function qt(e){e.memoizedState!==null&&yt(At,e);var n=Rt.current,a=cg(n,e.type);n!==a&&(yt(Ot,e),yt(Rt,a))}function Xt(e){Ot.current===e&&(Q(Rt),Q(Ot)),At.current===e&&(Q(At),Go._currentValue=et)}var ve,Qt;function $t(e){if(ve===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ve=n&&n[1]||"",Qt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ve+e+Qt}var ye=!1;function he(e,n){if(!e||ye)return"";ye=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var wt=function(){throw Error()};if(Object.defineProperty(wt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(wt,[])}catch(gt){var ft=gt}Reflect.construct(e,[],wt)}else{try{wt.call()}catch(gt){ft=gt}e.call(wt.prototype)}}else{try{throw Error()}catch(gt){ft=gt}(wt=e())&&typeof wt.catch=="function"&&wt.catch(function(){})}}catch(gt){if(gt&&ft&&typeof gt.stack=="string")return[gt.stack,ft.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],w=f[1];if(_&&w){var V=_.split(`
`),ct=w.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ct.length&&!ct[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===ct.length)for(o=V.length-1,u=ct.length-1;1<=o&&0<=u&&V[o]!==ct[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==ct[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==ct[u]){var Mt=`
`+V[o].replace(" at new "," at ");return e.displayName&&Mt.includes("<anonymous>")&&(Mt=Mt.replace("<anonymous>",e.displayName)),Mt}while(1<=o&&0<=u);break}}}finally{ye=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?$t(a):""}function Ge(e,n){switch(e.tag){case 26:case 27:case 5:return $t(e.type);case 16:return $t("Lazy");case 13:return e.child!==n&&n!==null?$t("Suspense Fallback"):$t("Suspense");case 19:return $t("SuspenseList");case 0:case 15:return he(e.type,!1);case 11:return he(e.type.render,!1);case 1:return he(e.type,!0);case 31:return $t("Activity");default:return""}}function Ne(e){try{var n="",a=null;do n+=Ge(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var tn=Object.prototype.hasOwnProperty,Z=r.unstable_scheduleCallback,Ue=r.unstable_cancelCallback,fe=r.unstable_shouldYield,Ee=r.unstable_requestPaint,It=r.unstable_now,Ye=r.unstable_getCurrentPriorityLevel,N=r.unstable_ImmediatePriority,E=r.unstable_UserBlockingPriority,at=r.unstable_NormalPriority,bt=r.unstable_LowPriority,Ut=r.unstable_IdlePriority,Vt=r.log,pt=r.unstable_setDisableYieldValue,ot=null,mt=null;function Lt(e){if(typeof Vt=="function"&&pt(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(ot,e)}catch{}}var Ht=Math.clz32?Math.clz32:me,zt=Math.log,Pt=Math.LN2;function me(e){return e>>>=0,e===0?32:31-(zt(e)/Pt|0)|0}var ge=256,De=262144,j=4194304;function Bt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function St(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var w=o&134217727;return w!==0?(o=w&~f,o!==0?u=Bt(o):(_&=w,_!==0?u=Bt(_):a||(a=w&~e,a!==0&&(u=Bt(a))))):(w=o&~f,w!==0?u=Bt(w):_!==0?u=Bt(_):a||(a=o&~e,a!==0&&(u=Bt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function vt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function kt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ct(){var e=j;return j<<=1,(j&62914560)===0&&(j=4194304),e}function ee(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function de(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function en(e,n,a,o,u,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var w=e.entanglements,V=e.expirationTimes,ct=e.hiddenUpdates;for(a=_&~a;0<a;){var Mt=31-Ht(a),wt=1<<Mt;w[Mt]=0,V[Mt]=-1;var ft=ct[Mt];if(ft!==null)for(ct[Mt]=null,Mt=0;Mt<ft.length;Mt++){var gt=ft[Mt];gt!==null&&(gt.lane&=-536870913)}a&=~wt}o!==0&&Xe(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function Xe(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ht(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function $n(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ht(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function qn(e,n){var a=n&-n;return a=(a&42)!==0?1:qi(a),(a&(e.suspendedLanes|n))!==0?0:a}function qi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fa(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ga(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:Ug(e.type))}function Ha(e,n){var a=B.p;try{return B.p=e,n()}finally{B.p=a}}var Nn=Math.random().toString(36).slice(2),hn="__reactFiber$"+Nn,Un="__reactProps$"+Nn,Oi="__reactContainer$"+Nn,Yi="__reactEvents$"+Nn,Va="__reactListeners$"+Nn,ka="__reactHandles$"+Nn,Ts="__reactResources$"+Nn,Pi="__reactMarker$"+Nn;function Xa(e){delete e[hn],delete e[Un],delete e[Yi],delete e[Va],delete e[ka]}function Ii(e){var n=e[hn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Oi]||a[hn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=gg(e);e!==null;){if(a=e[hn])return a;e=gg(e)}return n}e=a,a=e.parentNode}return null}function zi(e){if(e=e[hn]||e[Oi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Zi(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Dt(e){var n=e[Ts];return n||(n=e[Ts]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ut(e){e[Pi]=!0}var te=new Set,M={};function F(e,n){$(e,n),$(e+"Capture",n)}function $(e,n){for(M[e]=n,e=0;e<n.length;e++)te.add(n[e])}var J=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nt={},Nt={};function Ft(e){return tn.call(Nt,e)?!0:tn.call(nt,e)?!1:J.test(e)?Nt[e]=!0:(nt[e]=!0,!1)}function Gt(e,n,a){if(Ft(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Yt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Wt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function se(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jt(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ne(e){if(!e._valueTracker){var n=xe(e)?"checked":"value";e._valueTracker=Jt(e,n,""+e[n])}}function pe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=xe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function We(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var He=/[\n"\\]/g;function Qe(e){return e.replace(He,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function jt(e,n,a,o,u,f,_,w){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+se(n)):e.value!==""+se(n)&&(e.value=""+se(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?Me(e,_,se(n)):a!=null?Me(e,_,se(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+se(w):e.removeAttribute("name")}function Mn(e,n,a,o,u,f,_,w){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){ne(e);return}a=a!=null?""+se(a):"",n=n!=null?""+se(n):a,w||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=w?e.checked:!!o,e.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),ne(e)}function Me(e,n,a){n==="number"&&We(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function un(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+se(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Re(e,n,a){if(n!=null&&(n=""+se(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+se(a):""}function Ln(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(k(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=se(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),ne(e)}function bn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Je=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function dn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Je.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function di(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&dn(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&dn(e,f,n[f])}function nn(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ki=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function As(e){return Wa.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ua(){}var iu=null;function au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nr=null,ir=null;function op(e){var n=zi(e);if(n&&(e=n.stateNode)){var a=e[Un]||null;t:switch(e=n.stateNode,n.type){case"input":if(jt(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Qe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Un]||null;if(!u)throw Error(s(90));jt(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&pe(o)}break t;case"textarea":Re(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&un(e,!!a.multiple,n,!1)}}}var su=!1;function lp(e,n,a){if(su)return e(n,a);su=!0;try{var o=e(n);return o}finally{if(su=!1,(nr!==null||ir!==null)&&(Zl(),nr&&(n=nr,e=ir,ir=nr=null,op(n),e)))for(n=0;n<e.length;n++)op(e[n])}}function no(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Un]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var fa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=!1;if(fa)try{var io={};Object.defineProperty(io,"passive",{get:function(){ru=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{ru=!1}var ja=null,ou=null,cl=null;function cp(){if(cl)return cl;var e,n=ou,a=n.length,o,u="value"in ja?ja.value:ja.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var _=a-e;for(o=1;o<=_&&n[a-o]===u[f-o];o++);return cl=u.slice(e,1<o?1-o:void 0)}function ul(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function fl(){return!0}function up(){return!1}function ni(e){function n(a,o,u,f,_){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(a=e[w],this[w]=a?a(f):f[w]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?fl:up,this.isPropagationStopped=up,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),n}var ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dl=ni(ws),ao=x({},ws,{view:0,detail:0}),Kv=ni(ao),lu,cu,so,hl=x({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==so&&(so&&e.type==="mousemove"?(lu=e.screenX-so.screenX,cu=e.screenY-so.screenY):cu=lu=0,so=e),lu)},movementY:function(e){return"movementY"in e?e.movementY:cu}}),fp=ni(hl),Qv=x({},hl,{dataTransfer:0}),Jv=ni(Qv),$v=x({},ao,{relatedTarget:0}),uu=ni($v),tx=x({},ws,{animationName:0,elapsedTime:0,pseudoElement:0}),ex=ni(tx),nx=x({},ws,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ix=ni(nx),ax=x({},ws,{data:0}),dp=ni(ax),sx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ox={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ox[e])?!!n[e]:!1}function fu(){return lx}var cx=x({},ao,{key:function(e){if(e.key){var n=sx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(e){return e.type==="keypress"?ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ux=ni(cx),fx=x({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hp=ni(fx),dx=x({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),hx=ni(dx),px=x({},ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),mx=ni(px),gx=x({},hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_x=ni(gx),vx=x({},ws,{newState:0,oldState:0}),xx=ni(vx),Sx=[9,13,27,32],du=fa&&"CompositionEvent"in window,ro=null;fa&&"documentMode"in document&&(ro=document.documentMode);var yx=fa&&"TextEvent"in window&&!ro,pp=fa&&(!du||ro&&8<ro&&11>=ro),mp=" ",gp=!1;function _p(e,n){switch(e){case"keyup":return Sx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ar=!1;function Mx(e,n){switch(e){case"compositionend":return vp(n);case"keypress":return n.which!==32?null:(gp=!0,mp);case"textInput":return e=n.data,e===mp&&gp?null:e;default:return null}}function bx(e,n){if(ar)return e==="compositionend"||!du&&_p(e,n)?(e=cp(),cl=ou=ja=null,ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return pp&&n.locale!=="ko"?null:n.data;default:return null}}var Ex={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ex[e.type]:n==="textarea"}function Sp(e,n,a,o){nr?ir?ir.push(o):ir=[o]:nr=o,n=nc(n,"onChange"),0<n.length&&(a=new dl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var oo=null,lo=null;function Tx(e){ng(e,0)}function pl(e){var n=Zi(e);if(pe(n))return e}function yp(e,n){if(e==="change")return n}var Mp=!1;if(fa){var hu;if(fa){var pu="oninput"in document;if(!pu){var bp=document.createElement("div");bp.setAttribute("oninput","return;"),pu=typeof bp.oninput=="function"}hu=pu}else hu=!1;Mp=hu&&(!document.documentMode||9<document.documentMode)}function Ep(){oo&&(oo.detachEvent("onpropertychange",Tp),lo=oo=null)}function Tp(e){if(e.propertyName==="value"&&pl(lo)){var n=[];Sp(n,lo,e,au(e)),lp(Tx,n)}}function Ax(e,n,a){e==="focusin"?(Ep(),oo=n,lo=a,oo.attachEvent("onpropertychange",Tp)):e==="focusout"&&Ep()}function wx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pl(lo)}function Rx(e,n){if(e==="click")return pl(n)}function Cx(e,n){if(e==="input"||e==="change")return pl(n)}function Dx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var hi=typeof Object.is=="function"?Object.is:Dx;function co(e,n){if(hi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!tn.call(n,u)||!hi(e[u],n[u]))return!1}return!0}function Ap(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wp(e,n){var a=Ap(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ap(a)}}function Rp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Rp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Cp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=We(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=We(e.document)}return n}function mu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Nx=fa&&"documentMode"in document&&11>=document.documentMode,sr=null,gu=null,uo=null,_u=!1;function Dp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_u||sr==null||sr!==We(o)||(o=sr,"selectionStart"in o&&mu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),uo&&co(uo,o)||(uo=o,o=nc(gu,"onSelect"),0<o.length&&(n=new dl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=sr)))}function Rs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var rr={animationend:Rs("Animation","AnimationEnd"),animationiteration:Rs("Animation","AnimationIteration"),animationstart:Rs("Animation","AnimationStart"),transitionrun:Rs("Transition","TransitionRun"),transitionstart:Rs("Transition","TransitionStart"),transitioncancel:Rs("Transition","TransitionCancel"),transitionend:Rs("Transition","TransitionEnd")},vu={},Np={};fa&&(Np=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function Cs(e){if(vu[e])return vu[e];if(!rr[e])return e;var n=rr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Np)return vu[e]=n[a];return e}var Up=Cs("animationend"),Lp=Cs("animationiteration"),Op=Cs("animationstart"),Ux=Cs("transitionrun"),Lx=Cs("transitionstart"),Ox=Cs("transitioncancel"),Pp=Cs("transitionend"),Ip=new Map,xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xu.push("scrollEnd");function Bi(e,n){Ip.set(e,n),F(n,[e])}var ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ei=[],or=0,Su=0;function gl(){for(var e=or,n=Su=or=0;n<e;){var a=Ei[n];Ei[n++]=null;var o=Ei[n];Ei[n++]=null;var u=Ei[n];Ei[n++]=null;var f=Ei[n];if(Ei[n++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}f!==0&&zp(a,u,f)}}function _l(e,n,a,o){Ei[or++]=e,Ei[or++]=n,Ei[or++]=a,Ei[or++]=o,Su|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function yu(e,n,a,o){return _l(e,n,a,o),vl(e)}function Ds(e,n){return _l(e,null,null,n),vl(e)}function zp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ht(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function vl(e){if(50<Lo)throw Lo=0,Nf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var lr={};function Px(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(e,n,a,o){return new Px(e,n,a,o)}function Mu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function da(e,n){var a=e.alternate;return a===null?(a=pi(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Bp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function xl(e,n,a,o,u,f){var _=0;if(o=e,typeof e=="function")Mu(e)&&(_=1);else if(typeof e=="string")_=GS(e,a,Rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case P:return e=pi(31,a,n,u),e.elementType=P,e.lanes=f,e;case D:return Ns(a.children,u,f,n);case y:_=8,u|=24;break;case v:return e=pi(12,a,n,u|2),e.elementType=v,e.lanes=f,e;case H:return e=pi(13,a,n,u),e.elementType=H,e.lanes=f,e;case C:return e=pi(19,a,n,u),e.elementType=C,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case I:_=10;break t;case R:_=9;break t;case U:_=11;break t;case z:_=14;break t;case T:_=16,o=null;break t}_=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=pi(_,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function Ns(e,n,a,o){return e=pi(7,e,o,n),e.lanes=a,e}function bu(e,n,a){return e=pi(6,e,null,n),e.lanes=a,e}function Fp(e){var n=pi(18,null,null,0);return n.stateNode=e,n}function Eu(e,n,a){return n=pi(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Gp=new WeakMap;function Ti(e,n){if(typeof e=="object"&&e!==null){var a=Gp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ne(n)},Gp.set(e,n),n)}return{value:e,source:n,stack:Ne(n)}}var cr=[],ur=0,Sl=null,fo=0,Ai=[],wi=0,qa=null,Qi=1,Ji="";function ha(e,n){cr[ur++]=fo,cr[ur++]=Sl,Sl=e,fo=n}function Hp(e,n,a){Ai[wi++]=Qi,Ai[wi++]=Ji,Ai[wi++]=qa,qa=e;var o=Qi;e=Ji;var u=32-Ht(o)-1;o&=~(1<<u),a+=1;var f=32-Ht(n)+u;if(30<f){var _=u-u%5;f=(o&(1<<_)-1).toString(32),o>>=_,u-=_,Qi=1<<32-Ht(n)+u|a<<u|o,Ji=f+e}else Qi=1<<f|a<<u|o,Ji=e}function Tu(e){e.return!==null&&(ha(e,1),Hp(e,1,0))}function Au(e){for(;e===Sl;)Sl=cr[--ur],cr[ur]=null,fo=cr[--ur],cr[ur]=null;for(;e===qa;)qa=Ai[--wi],Ai[wi]=null,Ji=Ai[--wi],Ai[wi]=null,Qi=Ai[--wi],Ai[wi]=null}function Vp(e,n){Ai[wi++]=Qi,Ai[wi++]=Ji,Ai[wi++]=qa,Qi=n.id,Ji=n.overflow,qa=e}var Gn=null,pn=null,Ve=!1,Ya=null,Ri=!1,wu=Error(s(519));function Za(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ho(Ti(n,e)),wu}function kp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[hn]=e,n[Un]=o,a){case"dialog":Oe("cancel",n),Oe("close",n);break;case"iframe":case"object":case"embed":Oe("load",n);break;case"video":case"audio":for(a=0;a<Po.length;a++)Oe(Po[a],n);break;case"source":Oe("error",n);break;case"img":case"image":case"link":Oe("error",n),Oe("load",n);break;case"details":Oe("toggle",n);break;case"input":Oe("invalid",n),Mn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Oe("invalid",n);break;case"textarea":Oe("invalid",n),Ln(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||rg(n.textContent,a)?(o.popover!=null&&(Oe("beforetoggle",n),Oe("toggle",n)),o.onScroll!=null&&Oe("scroll",n),o.onScrollEnd!=null&&Oe("scrollend",n),o.onClick!=null&&(n.onclick=ua),n=!0):n=!1,n||Za(e,!0)}function Xp(e){for(Gn=e.return;Gn;)switch(Gn.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:Gn=Gn.return}}function fr(e){if(e!==Gn)return!1;if(!Ve)return Xp(e),Ve=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||jf(e.type,e.memoizedProps)),a=!a),a&&pn&&Za(e),Xp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));pn=mg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));pn=mg(e)}else n===27?(n=pn,cs(e.type)?(e=Qf,Qf=null,pn=e):pn=n):pn=Gn?Di(e.stateNode.nextSibling):null;return!0}function Us(){pn=Gn=null,Ve=!1}function Ru(){var e=Ya;return e!==null&&(ri===null?ri=e:ri.push.apply(ri,e),Ya=null),e}function ho(e){Ya===null?Ya=[e]:Ya.push(e)}var Cu=O(null),Ls=null,pa=null;function Ka(e,n,a){yt(Cu,n._currentValue),n._currentValue=a}function ma(e){e._currentValue=Cu.current,Q(Cu)}function Du(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Nu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;t:for(;f!==null;){var w=f;f=u;for(var V=0;V<n.length;V++)if(w.context===n[V]){f.lanes|=a,w=f.alternate,w!==null&&(w.lanes|=a),Du(f.return,a,e),o||(_=null);break t}f=w.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Du(_,a,e),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===e){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function dr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var w=u.type;hi(u.pendingProps.value,_.value)||(e!==null?e.push(w):e=[w])}}else if(u===At.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Go):e=[Go])}u=u.return}e!==null&&Nu(n,e,a,o),n.flags|=262144}function yl(e){for(e=e.firstContext;e!==null;){if(!hi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Os(e){Ls=e,pa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Hn(e){return Wp(Ls,e)}function Ml(e,n){return Ls===null&&Os(e),Wp(e,n)}function Wp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},pa===null){if(e===null)throw Error(s(308));pa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else pa=pa.next=n;return a}var Ix=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},zx=r.unstable_scheduleCallback,Bx=r.unstable_NormalPriority,An={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uu(){return{controller:new Ix,data:new Map,refCount:0}}function po(e){e.refCount--,e.refCount===0&&zx(Bx,function(){e.controller.abort()})}var mo=null,Lu=0,hr=0,pr=null;function Fx(e,n){if(mo===null){var a=mo=[];Lu=0,hr=zf(),pr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Lu++,n.then(jp,jp),n}function jp(){if(--Lu===0&&mo!==null){pr!==null&&(pr.status="fulfilled");var e=mo;mo=null,hr=0,pr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Gx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var qp=L.S;L.S=function(e,n){D0=It(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Fx(e,n),qp!==null&&qp(e,n)};var Ps=O(null);function Ou(){var e=Ps.current;return e!==null?e:fn.pooledCache}function bl(e,n){n===null?yt(Ps,Ps.current):yt(Ps,n.pool)}function Yp(){var e=Ou();return e===null?null:{parent:An._currentValue,pool:e}}var mr=Error(s(460)),Pu=Error(s(474)),El=Error(s(542)),Tl={then:function(){}};function Zp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Kp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ua,ua),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Jp(e),e;default:if(typeof n.status=="string")n.then(ua,ua);else{if(e=fn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Jp(e),e}throw zs=n,mr}}function Is(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(zs=a,mr):a}}var zs=null;function Qp(){if(zs===null)throw Error(s(459));var e=zs;return zs=null,e}function Jp(e){if(e===mr||e===El)throw Error(s(483))}var gr=null,go=0;function Al(e){var n=go;return go+=1,gr===null&&(gr=[]),Kp(gr,e,n)}function _o(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function wl(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function $p(e){function n(it,K){if(e){var lt=it.deletions;lt===null?(it.deletions=[K],it.flags|=16):lt.push(K)}}function a(it,K){if(!e)return null;for(;K!==null;)n(it,K),K=K.sibling;return null}function o(it){for(var K=new Map;it!==null;)it.key!==null?K.set(it.key,it):K.set(it.index,it),it=it.sibling;return K}function u(it,K){return it=da(it,K),it.index=0,it.sibling=null,it}function f(it,K,lt){return it.index=lt,e?(lt=it.alternate,lt!==null?(lt=lt.index,lt<K?(it.flags|=67108866,K):lt):(it.flags|=67108866,K)):(it.flags|=1048576,K)}function _(it){return e&&it.alternate===null&&(it.flags|=67108866),it}function w(it,K,lt,Tt){return K===null||K.tag!==6?(K=bu(lt,it.mode,Tt),K.return=it,K):(K=u(K,lt),K.return=it,K)}function V(it,K,lt,Tt){var ue=lt.type;return ue===D?Mt(it,K,lt.props.children,Tt,lt.key):K!==null&&(K.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===T&&Is(ue)===K.type)?(K=u(K,lt.props),_o(K,lt),K.return=it,K):(K=xl(lt.type,lt.key,lt.props,null,it.mode,Tt),_o(K,lt),K.return=it,K)}function ct(it,K,lt,Tt){return K===null||K.tag!==4||K.stateNode.containerInfo!==lt.containerInfo||K.stateNode.implementation!==lt.implementation?(K=Eu(lt,it.mode,Tt),K.return=it,K):(K=u(K,lt.children||[]),K.return=it,K)}function Mt(it,K,lt,Tt,ue){return K===null||K.tag!==7?(K=Ns(lt,it.mode,Tt,ue),K.return=it,K):(K=u(K,lt),K.return=it,K)}function wt(it,K,lt){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return K=bu(""+K,it.mode,lt),K.return=it,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case b:return lt=xl(K.type,K.key,K.props,null,it.mode,lt),_o(lt,K),lt.return=it,lt;case A:return K=Eu(K,it.mode,lt),K.return=it,K;case T:return K=Is(K),wt(it,K,lt)}if(k(K)||Y(K))return K=Ns(K,it.mode,lt,null),K.return=it,K;if(typeof K.then=="function")return wt(it,Al(K),lt);if(K.$$typeof===I)return wt(it,Ml(it,K),lt);wl(it,K)}return null}function ft(it,K,lt,Tt){var ue=K!==null?K.key:null;if(typeof lt=="string"&&lt!==""||typeof lt=="number"||typeof lt=="bigint")return ue!==null?null:w(it,K,""+lt,Tt);if(typeof lt=="object"&&lt!==null){switch(lt.$$typeof){case b:return lt.key===ue?V(it,K,lt,Tt):null;case A:return lt.key===ue?ct(it,K,lt,Tt):null;case T:return lt=Is(lt),ft(it,K,lt,Tt)}if(k(lt)||Y(lt))return ue!==null?null:Mt(it,K,lt,Tt,null);if(typeof lt.then=="function")return ft(it,K,Al(lt),Tt);if(lt.$$typeof===I)return ft(it,K,Ml(it,lt),Tt);wl(it,lt)}return null}function gt(it,K,lt,Tt,ue){if(typeof Tt=="string"&&Tt!==""||typeof Tt=="number"||typeof Tt=="bigint")return it=it.get(lt)||null,w(K,it,""+Tt,ue);if(typeof Tt=="object"&&Tt!==null){switch(Tt.$$typeof){case b:return it=it.get(Tt.key===null?lt:Tt.key)||null,V(K,it,Tt,ue);case A:return it=it.get(Tt.key===null?lt:Tt.key)||null,ct(K,it,Tt,ue);case T:return Tt=Is(Tt),gt(it,K,lt,Tt,ue)}if(k(Tt)||Y(Tt))return it=it.get(lt)||null,Mt(K,it,Tt,ue,null);if(typeof Tt.then=="function")return gt(it,K,lt,Al(Tt),ue);if(Tt.$$typeof===I)return gt(it,K,lt,Ml(K,Tt),ue);wl(K,Tt)}return null}function ie(it,K,lt,Tt){for(var ue=null,Ze=null,re=K,we=K=0,ze=null;re!==null&&we<lt.length;we++){re.index>we?(ze=re,re=null):ze=re.sibling;var Ke=ft(it,re,lt[we],Tt);if(Ke===null){re===null&&(re=ze);break}e&&re&&Ke.alternate===null&&n(it,re),K=f(Ke,K,we),Ze===null?ue=Ke:Ze.sibling=Ke,Ze=Ke,re=ze}if(we===lt.length)return a(it,re),Ve&&ha(it,we),ue;if(re===null){for(;we<lt.length;we++)re=wt(it,lt[we],Tt),re!==null&&(K=f(re,K,we),Ze===null?ue=re:Ze.sibling=re,Ze=re);return Ve&&ha(it,we),ue}for(re=o(re);we<lt.length;we++)ze=gt(re,it,we,lt[we],Tt),ze!==null&&(e&&ze.alternate!==null&&re.delete(ze.key===null?we:ze.key),K=f(ze,K,we),Ze===null?ue=ze:Ze.sibling=ze,Ze=ze);return e&&re.forEach(function(ps){return n(it,ps)}),Ve&&ha(it,we),ue}function _e(it,K,lt,Tt){if(lt==null)throw Error(s(151));for(var ue=null,Ze=null,re=K,we=K=0,ze=null,Ke=lt.next();re!==null&&!Ke.done;we++,Ke=lt.next()){re.index>we?(ze=re,re=null):ze=re.sibling;var ps=ft(it,re,Ke.value,Tt);if(ps===null){re===null&&(re=ze);break}e&&re&&ps.alternate===null&&n(it,re),K=f(ps,K,we),Ze===null?ue=ps:Ze.sibling=ps,Ze=ps,re=ze}if(Ke.done)return a(it,re),Ve&&ha(it,we),ue;if(re===null){for(;!Ke.done;we++,Ke=lt.next())Ke=wt(it,Ke.value,Tt),Ke!==null&&(K=f(Ke,K,we),Ze===null?ue=Ke:Ze.sibling=Ke,Ze=Ke);return Ve&&ha(it,we),ue}for(re=o(re);!Ke.done;we++,Ke=lt.next())Ke=gt(re,it,we,Ke.value,Tt),Ke!==null&&(e&&Ke.alternate!==null&&re.delete(Ke.key===null?we:Ke.key),K=f(Ke,K,we),Ze===null?ue=Ke:Ze.sibling=Ke,Ze=Ke);return e&&re.forEach(function(QS){return n(it,QS)}),Ve&&ha(it,we),ue}function cn(it,K,lt,Tt){if(typeof lt=="object"&&lt!==null&&lt.type===D&&lt.key===null&&(lt=lt.props.children),typeof lt=="object"&&lt!==null){switch(lt.$$typeof){case b:t:{for(var ue=lt.key;K!==null;){if(K.key===ue){if(ue=lt.type,ue===D){if(K.tag===7){a(it,K.sibling),Tt=u(K,lt.props.children),Tt.return=it,it=Tt;break t}}else if(K.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===T&&Is(ue)===K.type){a(it,K.sibling),Tt=u(K,lt.props),_o(Tt,lt),Tt.return=it,it=Tt;break t}a(it,K);break}else n(it,K);K=K.sibling}lt.type===D?(Tt=Ns(lt.props.children,it.mode,Tt,lt.key),Tt.return=it,it=Tt):(Tt=xl(lt.type,lt.key,lt.props,null,it.mode,Tt),_o(Tt,lt),Tt.return=it,it=Tt)}return _(it);case A:t:{for(ue=lt.key;K!==null;){if(K.key===ue)if(K.tag===4&&K.stateNode.containerInfo===lt.containerInfo&&K.stateNode.implementation===lt.implementation){a(it,K.sibling),Tt=u(K,lt.children||[]),Tt.return=it,it=Tt;break t}else{a(it,K);break}else n(it,K);K=K.sibling}Tt=Eu(lt,it.mode,Tt),Tt.return=it,it=Tt}return _(it);case T:return lt=Is(lt),cn(it,K,lt,Tt)}if(k(lt))return ie(it,K,lt,Tt);if(Y(lt)){if(ue=Y(lt),typeof ue!="function")throw Error(s(150));return lt=ue.call(lt),_e(it,K,lt,Tt)}if(typeof lt.then=="function")return cn(it,K,Al(lt),Tt);if(lt.$$typeof===I)return cn(it,K,Ml(it,lt),Tt);wl(it,lt)}return typeof lt=="string"&&lt!==""||typeof lt=="number"||typeof lt=="bigint"?(lt=""+lt,K!==null&&K.tag===6?(a(it,K.sibling),Tt=u(K,lt),Tt.return=it,it=Tt):(a(it,K),Tt=bu(lt,it.mode,Tt),Tt.return=it,it=Tt),_(it)):a(it,K)}return function(it,K,lt,Tt){try{go=0;var ue=cn(it,K,lt,Tt);return gr=null,ue}catch(re){if(re===mr||re===El)throw re;var Ze=pi(29,re,null,it.mode);return Ze.lanes=Tt,Ze.return=it,Ze}finally{}}}var Bs=$p(!0),tm=$p(!1),Qa=!1;function Iu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function $a(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,($e&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=vl(e),zp(e,null,a),n}return _l(e,o,n,a),vl(e)}function vo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,$n(e,a)}}function Bu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Fu=!1;function xo(){if(Fu){var e=pr;if(e!==null)throw e}}function So(e,n,a,o){Fu=!1;var u=e.updateQueue;Qa=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var V=w,ct=V.next;V.next=null,_===null?f=ct:_.next=ct,_=V;var Mt=e.alternate;Mt!==null&&(Mt=Mt.updateQueue,w=Mt.lastBaseUpdate,w!==_&&(w===null?Mt.firstBaseUpdate=ct:w.next=ct,Mt.lastBaseUpdate=V))}if(f!==null){var wt=u.baseState;_=0,Mt=ct=V=null,w=f;do{var ft=w.lane&-536870913,gt=ft!==w.lane;if(gt?(Ie&ft)===ft:(o&ft)===ft){ft!==0&&ft===hr&&(Fu=!0),Mt!==null&&(Mt=Mt.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var ie=e,_e=w;ft=n;var cn=a;switch(_e.tag){case 1:if(ie=_e.payload,typeof ie=="function"){wt=ie.call(cn,wt,ft);break t}wt=ie;break t;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=_e.payload,ft=typeof ie=="function"?ie.call(cn,wt,ft):ie,ft==null)break t;wt=x({},wt,ft);break t;case 2:Qa=!0}}ft=w.callback,ft!==null&&(e.flags|=64,gt&&(e.flags|=8192),gt=u.callbacks,gt===null?u.callbacks=[ft]:gt.push(ft))}else gt={lane:ft,tag:w.tag,payload:w.payload,callback:w.callback,next:null},Mt===null?(ct=Mt=gt,V=wt):Mt=Mt.next=gt,_|=ft;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;gt=w,w=gt.next,gt.next=null,u.lastBaseUpdate=gt,u.shared.pending=null}}while(!0);Mt===null&&(V=wt),u.baseState=V,u.firstBaseUpdate=ct,u.lastBaseUpdate=Mt,f===null&&(u.shared.lanes=0),as|=_,e.lanes=_,e.memoizedState=wt}}function em(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function nm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)em(a[e],n)}var _r=O(null),Rl=O(0);function im(e,n){e=Ea,yt(Rl,e),yt(_r,n),Ea=e|n.baseLanes}function Gu(){yt(Rl,Ea),yt(_r,_r.current)}function Hu(){Ea=Rl.current,Q(_r),Q(Rl)}var mi=O(null),Ci=null;function ts(e){var n=e.alternate;yt(En,En.current&1),yt(mi,e),Ci===null&&(n===null||_r.current!==null||n.memoizedState!==null)&&(Ci=e)}function Vu(e){yt(En,En.current),yt(mi,e),Ci===null&&(Ci=e)}function am(e){e.tag===22?(yt(En,En.current),yt(mi,e),Ci===null&&(Ci=e)):es()}function es(){yt(En,En.current),yt(mi,mi.current)}function gi(e){Q(mi),Ci===e&&(Ci=null),Q(En)}var En=O(0);function Cl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Zf(a)||Kf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ga=0,Ae=null,on=null,wn=null,Dl=!1,vr=!1,Fs=!1,Nl=0,yo=0,xr=null,Hx=0;function vn(){throw Error(s(321))}function ku(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!hi(e[a],n[a]))return!1;return!0}function Xu(e,n,a,o,u,f){return ga=f,Ae=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=e===null||e.memoizedState===null?Hm:rf,Fs=!1,f=a(o,u),Fs=!1,vr&&(f=rm(n,a,o,u)),sm(e),f}function sm(e){L.H=Eo;var n=on!==null&&on.next!==null;if(ga=0,wn=on=Ae=null,Dl=!1,yo=0,xr=null,n)throw Error(s(300));e===null||Rn||(e=e.dependencies,e!==null&&yl(e)&&(Rn=!0))}function rm(e,n,a,o){Ae=e;var u=0;do{if(vr&&(xr=null),yo=0,vr=!1,25<=u)throw Error(s(301));if(u+=1,wn=on=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=Vm,f=n(a,o)}while(vr);return f}function Vx(){var e=L.H,n=e.useState()[0];return n=typeof n.then=="function"?Mo(n):n,e=e.useState()[0],(on!==null?on.memoizedState:null)!==e&&(Ae.flags|=1024),n}function Wu(){var e=Nl!==0;return Nl=0,e}function ju(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function qu(e){if(Dl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Dl=!1}ga=0,wn=on=Ae=null,vr=!1,yo=Nl=0,xr=null}function ti(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?Ae.memoizedState=wn=e:wn=wn.next=e,wn}function Tn(){if(on===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=on.next;var n=wn===null?Ae.memoizedState:wn.next;if(n!==null)wn=n,on=e;else{if(e===null)throw Ae.alternate===null?Error(s(467)):Error(s(310));on=e,e={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},wn===null?Ae.memoizedState=wn=e:wn=wn.next=e}return wn}function Ul(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(e){var n=yo;return yo+=1,xr===null&&(xr=[]),e=Kp(xr,e,n),n=Ae,(wn===null?n.memoizedState:wn.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?Hm:rf),e}function Ll(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Mo(e);if(e.$$typeof===I)return Hn(e)}throw Error(s(438,String(e)))}function Yu(e){var n=null,a=Ae.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Ae.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ul(),Ae.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=W;return n.index++,a}function _a(e,n){return typeof n=="function"?n(e):n}function Ol(e){var n=Tn();return Zu(n,on,e)}function Zu(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var w=_=null,V=null,ct=n,Mt=!1;do{var wt=ct.lane&-536870913;if(wt!==ct.lane?(Ie&wt)===wt:(ga&wt)===wt){var ft=ct.revertLane;if(ft===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:ct.action,hasEagerState:ct.hasEagerState,eagerState:ct.eagerState,next:null}),wt===hr&&(Mt=!0);else if((ga&ft)===ft){ct=ct.next,ft===hr&&(Mt=!0);continue}else wt={lane:0,revertLane:ct.revertLane,gesture:null,action:ct.action,hasEagerState:ct.hasEagerState,eagerState:ct.eagerState,next:null},V===null?(w=V=wt,_=f):V=V.next=wt,Ae.lanes|=ft,as|=ft;wt=ct.action,Fs&&a(f,wt),f=ct.hasEagerState?ct.eagerState:a(f,wt)}else ft={lane:wt,revertLane:ct.revertLane,gesture:ct.gesture,action:ct.action,hasEagerState:ct.hasEagerState,eagerState:ct.eagerState,next:null},V===null?(w=V=ft,_=f):V=V.next=ft,Ae.lanes|=wt,as|=wt;ct=ct.next}while(ct!==null&&ct!==n);if(V===null?_=f:V.next=w,!hi(f,e.memoizedState)&&(Rn=!0,Mt&&(a=pr,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=V,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Ku(e){var n=Tn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=e(f,_.action),_=_.next;while(_!==u);hi(f,n.memoizedState)||(Rn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function om(e,n,a){var o=Ae,u=Tn(),f=Ve;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!hi((on||u).memoizedState,a);if(_&&(u.memoizedState=a,Rn=!0),u=u.queue,$u(um.bind(null,o,u,e),[e]),u.getSnapshot!==n||_||wn!==null&&wn.memoizedState.tag&1){if(o.flags|=2048,Sr(9,{destroy:void 0},cm.bind(null,o,u,a,n),null),fn===null)throw Error(s(349));f||(ga&127)!==0||lm(o,n,a)}return a}function lm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Ae.updateQueue,n===null?(n=Ul(),Ae.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function cm(e,n,a,o){n.value=a,n.getSnapshot=o,fm(n)&&dm(e)}function um(e,n,a){return a(function(){fm(n)&&dm(e)})}function fm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!hi(e,a)}catch{return!0}}function dm(e){var n=Ds(e,2);n!==null&&oi(n,e,2)}function Qu(e){var n=ti();if(typeof e=="function"){var a=e;if(e=a(),Fs){Lt(!0);try{a()}finally{Lt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:e},n}function hm(e,n,a,o){return e.baseState=a,Zu(e,on,typeof o=="function"?o:_a)}function kx(e,n,a,o,u){if(zl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};L.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,pm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function pm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=L.T,_={};L.T=_;try{var w=a(u,o),V=L.S;V!==null&&V(_,w),mm(e,n,w)}catch(ct){Ju(e,n,ct)}finally{f!==null&&_.types!==null&&(f.types=_.types),L.T=f}}else try{f=a(u,o),mm(e,n,f)}catch(ct){Ju(e,n,ct)}}function mm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){gm(e,n,o)},function(o){return Ju(e,n,o)}):gm(e,n,a)}function gm(e,n,a){n.status="fulfilled",n.value=a,_m(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,pm(e,a)))}function Ju(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,_m(n),n=n.next;while(n!==o)}e.action=null}function _m(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function vm(e,n){return n}function xm(e,n){if(Ve){var a=fn.formState;if(a!==null){t:{var o=Ae;if(Ve){if(pn){e:{for(var u=pn,f=Ri;u.nodeType!==8;){if(!f){u=null;break e}if(u=Di(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){pn=Di(u.nextSibling),o=u.data==="F!";break t}}Za(o)}o=!1}o&&(n=a[0])}}return a=ti(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vm,lastRenderedState:n},a.queue=o,a=Bm.bind(null,Ae,o),o.dispatch=a,o=Qu(!1),f=sf.bind(null,Ae,!1,o.queue),o=ti(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=kx.bind(null,Ae,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Sm(e){var n=Tn();return ym(n,on,e)}function ym(e,n,a){if(n=Zu(e,n,vm)[0],e=Ol(_a)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Mo(n)}catch(_){throw _===mr?El:_}else o=n;n=Tn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(Ae.flags|=2048,Sr(9,{destroy:void 0},Xx.bind(null,u,a),null)),[o,f,e]}function Xx(e,n){e.action=n}function Mm(e){var n=Tn(),a=on;if(a!==null)return ym(n,a,e);Tn(),n=n.memoizedState,a=Tn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Sr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Ae.updateQueue,n===null&&(n=Ul(),Ae.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function bm(){return Tn().memoizedState}function Pl(e,n,a,o){var u=ti();Ae.flags|=e,u.memoizedState=Sr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Il(e,n,a,o){var u=Tn();o=o===void 0?null:o;var f=u.memoizedState.inst;on!==null&&o!==null&&ku(o,on.memoizedState.deps)?u.memoizedState=Sr(n,f,a,o):(Ae.flags|=e,u.memoizedState=Sr(1|n,f,a,o))}function Em(e,n){Pl(8390656,8,e,n)}function $u(e,n){Il(2048,8,e,n)}function Wx(e){Ae.flags|=4;var n=Ae.updateQueue;if(n===null)n=Ul(),Ae.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Tm(e){var n=Tn().memoizedState;return Wx({ref:n,nextImpl:e}),function(){if(($e&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Am(e,n){return Il(4,2,e,n)}function wm(e,n){return Il(4,4,e,n)}function Rm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Cm(e,n,a){a=a!=null?a.concat([e]):null,Il(4,4,Rm.bind(null,n,e),a)}function tf(){}function Dm(e,n){var a=Tn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&ku(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Nm(e,n){var a=Tn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&ku(n,o[1]))return o[0];if(o=e(),Fs){Lt(!0);try{e()}finally{Lt(!1)}}return a.memoizedState=[o,n],o}function ef(e,n,a){return a===void 0||(ga&1073741824)!==0&&(Ie&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=U0(),Ae.lanes|=e,as|=e,a)}function Um(e,n,a,o){return hi(a,n)?a:_r.current!==null?(e=ef(e,a,o),hi(e,n)||(Rn=!0),e):(ga&42)===0||(ga&1073741824)!==0&&(Ie&261930)===0?(Rn=!0,e.memoizedState=a):(e=U0(),Ae.lanes|=e,as|=e,n)}function Lm(e,n,a,o,u){var f=B.p;B.p=f!==0&&8>f?f:8;var _=L.T,w={};L.T=w,sf(e,!1,n,a);try{var V=u(),ct=L.S;if(ct!==null&&ct(w,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var Mt=Gx(V,o);bo(e,n,Mt,xi(e))}else bo(e,n,o,xi(e))}catch(wt){bo(e,n,{then:function(){},status:"rejected",reason:wt},xi())}finally{B.p=f,_!==null&&w.types!==null&&(_.types=w.types),L.T=_}}function jx(){}function nf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Om(e).queue;Lm(e,u,n,et,a===null?jx:function(){return Pm(e),a(o)})}function Om(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:et},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Pm(e){var n=Om(e);n.next===null&&(n=e.alternate.memoizedState),bo(e,n.next.queue,{},xi())}function af(){return Hn(Go)}function Im(){return Tn().memoizedState}function zm(){return Tn().memoizedState}function qx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=xi();e=Ja(a);var o=$a(n,e,a);o!==null&&(oi(o,n,a),vo(o,n,a)),n={cache:Uu()},e.payload=n;return}n=n.return}}function Yx(e,n,a){var o=xi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},zl(e)?Fm(n,a):(a=yu(e,n,a,o),a!==null&&(oi(a,e,o),Gm(a,n,o)))}function Bm(e,n,a){var o=xi();bo(e,n,a,o)}function bo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(zl(e))Fm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,w=f(_,a);if(u.hasEagerState=!0,u.eagerState=w,hi(w,_))return _l(e,n,u,0),fn===null&&gl(),!1}catch{}finally{}if(a=yu(e,n,u,o),a!==null)return oi(a,e,o),Gm(a,n,o),!0}return!1}function sf(e,n,a,o){if(o={lane:2,revertLane:zf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},zl(e)){if(n)throw Error(s(479))}else n=yu(e,a,o,2),n!==null&&oi(n,e,2)}function zl(e){var n=e.alternate;return e===Ae||n!==null&&n===Ae}function Fm(e,n){vr=Dl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Gm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,$n(e,a)}}var Eo={readContext:Hn,use:Ll,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useLayoutEffect:vn,useInsertionEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useSyncExternalStore:vn,useId:vn,useHostTransitionStatus:vn,useFormState:vn,useActionState:vn,useOptimistic:vn,useMemoCache:vn,useCacheRefresh:vn};Eo.useEffectEvent=vn;var Hm={readContext:Hn,use:Ll,useCallback:function(e,n){return ti().memoizedState=[e,n===void 0?null:n],e},useContext:Hn,useEffect:Em,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Pl(4194308,4,Rm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Pl(4194308,4,e,n)},useInsertionEffect:function(e,n){Pl(4,2,e,n)},useMemo:function(e,n){var a=ti();n=n===void 0?null:n;var o=e();if(Fs){Lt(!0);try{e()}finally{Lt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=ti();if(a!==void 0){var u=a(n);if(Fs){Lt(!0);try{a(n)}finally{Lt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Yx.bind(null,Ae,e),[o.memoizedState,e]},useRef:function(e){var n=ti();return e={current:e},n.memoizedState=e},useState:function(e){e=Qu(e);var n=e.queue,a=Bm.bind(null,Ae,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:tf,useDeferredValue:function(e,n){var a=ti();return ef(a,e,n)},useTransition:function(){var e=Qu(!1);return e=Lm.bind(null,Ae,e.queue,!0,!1),ti().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Ae,u=ti();if(Ve){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),fn===null)throw Error(s(349));(Ie&127)!==0||lm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Em(um.bind(null,o,f,e),[e]),o.flags|=2048,Sr(9,{destroy:void 0},cm.bind(null,o,f,a,n),null),a},useId:function(){var e=ti(),n=fn.identifierPrefix;if(Ve){var a=Ji,o=Qi;a=(o&~(1<<32-Ht(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Nl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Hx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:af,useFormState:xm,useActionState:xm,useOptimistic:function(e){var n=ti();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=sf.bind(null,Ae,!0,a),a.dispatch=n,[e,n]},useMemoCache:Yu,useCacheRefresh:function(){return ti().memoizedState=qx.bind(null,Ae)},useEffectEvent:function(e){var n=ti(),a={impl:e};return n.memoizedState=a,function(){if(($e&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},rf={readContext:Hn,use:Ll,useCallback:Dm,useContext:Hn,useEffect:$u,useImperativeHandle:Cm,useInsertionEffect:Am,useLayoutEffect:wm,useMemo:Nm,useReducer:Ol,useRef:bm,useState:function(){return Ol(_a)},useDebugValue:tf,useDeferredValue:function(e,n){var a=Tn();return Um(a,on.memoizedState,e,n)},useTransition:function(){var e=Ol(_a)[0],n=Tn().memoizedState;return[typeof e=="boolean"?e:Mo(e),n]},useSyncExternalStore:om,useId:Im,useHostTransitionStatus:af,useFormState:Sm,useActionState:Sm,useOptimistic:function(e,n){var a=Tn();return hm(a,on,e,n)},useMemoCache:Yu,useCacheRefresh:zm};rf.useEffectEvent=Tm;var Vm={readContext:Hn,use:Ll,useCallback:Dm,useContext:Hn,useEffect:$u,useImperativeHandle:Cm,useInsertionEffect:Am,useLayoutEffect:wm,useMemo:Nm,useReducer:Ku,useRef:bm,useState:function(){return Ku(_a)},useDebugValue:tf,useDeferredValue:function(e,n){var a=Tn();return on===null?ef(a,e,n):Um(a,on.memoizedState,e,n)},useTransition:function(){var e=Ku(_a)[0],n=Tn().memoizedState;return[typeof e=="boolean"?e:Mo(e),n]},useSyncExternalStore:om,useId:Im,useHostTransitionStatus:af,useFormState:Mm,useActionState:Mm,useOptimistic:function(e,n){var a=Tn();return on!==null?hm(a,on,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Yu,useCacheRefresh:zm};Vm.useEffectEvent=Tm;function of(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var lf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=xi(),u=Ja(o);u.payload=n,a!=null&&(u.callback=a),n=$a(e,u,o),n!==null&&(oi(n,e,o),vo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=xi(),u=Ja(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=$a(e,u,o),n!==null&&(oi(n,e,o),vo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=xi(),o=Ja(a);o.tag=2,n!=null&&(o.callback=n),n=$a(e,o,a),n!==null&&(oi(n,e,a),vo(n,e,a))}};function km(e,n,a,o,u,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!co(a,o)||!co(u,f):!0}function Xm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&lf.enqueueReplaceState(n,n.state,null)}function Gs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Wm(e){ml(e)}function jm(e){console.error(e)}function qm(e){ml(e)}function Bl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Ym(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function cf(e,n,a){return a=Ja(a),a.tag=3,a.payload={element:null},a.callback=function(){Bl(e,n)},a}function Zm(e){return e=Ja(e),e.tag=3,e}function Km(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Ym(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){Ym(n,a,o),typeof u!="function"&&(ss===null?ss=new Set([this]):ss.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function Zx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&dr(n,a,u,!0),a=mi.current,a!==null){switch(a.tag){case 31:case 13:return Ci===null?Kl():a.alternate===null&&xn===0&&(xn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Tl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Of(e,o,u)),!1;case 22:return a.flags|=65536,o===Tl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Of(e,o,u)),!1}throw Error(s(435,a.tag))}return Of(e,o,u),Kl(),!1}if(Ve)return n=mi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==wu&&(e=Error(s(422),{cause:o}),ho(Ti(e,a)))):(o!==wu&&(n=Error(s(423),{cause:o}),ho(Ti(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Ti(o,a),u=cf(e.stateNode,o,u),Bu(e,u),xn!==4&&(xn=2)),!1;var f=Error(s(520),{cause:o});if(f=Ti(f,a),Uo===null?Uo=[f]:Uo.push(f),xn!==4&&(xn=2),n===null)return!0;o=Ti(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=cf(a.stateNode,o,e),Bu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ss===null||!ss.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Zm(u),Km(u,e,a,o),Bu(a,u),!1}a=a.return}while(a!==null);return!1}var uf=Error(s(461)),Rn=!1;function Vn(e,n,a,o){n.child=e===null?tm(n,null,a,o):Bs(n,e.child,a,o)}function Qm(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var _={};for(var w in o)w!=="ref"&&(_[w]=o[w])}else _=o;return Os(n),o=Xu(e,n,a,_,f,u),w=Wu(),e!==null&&!Rn?(ju(e,n,u),va(e,n,u)):(Ve&&w&&Tu(n),n.flags|=1,Vn(e,n,o,u),n.child)}function Jm(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Mu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,$m(e,n,f,o,u)):(e=xl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!vf(e,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:co,a(_,o)&&e.ref===n.ref)return va(e,n,u)}return n.flags|=1,e=da(f,o),e.ref=n.ref,e.return=n,n.child=e}function $m(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(co(f,o)&&e.ref===n.ref)if(Rn=!1,n.pendingProps=o=f,vf(e,u))(e.flags&131072)!==0&&(Rn=!0);else return n.lanes=e.lanes,va(e,n,u)}return ff(e,n,a,o,u)}function t0(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return e0(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&bl(n,f!==null?f.cachePool:null),f!==null?im(n,f):Gu(),am(n);else return o=n.lanes=536870912,e0(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(bl(n,f.cachePool),im(n,f),es(),n.memoizedState=null):(e!==null&&bl(n,null),Gu(),es());return Vn(e,n,u,a),n.child}function To(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function e0(e,n,a,o,u){var f=Ou();return f=f===null?null:{parent:An._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&bl(n,null),Gu(),am(n),e!==null&&dr(e,n,o,!0),n.childLanes=u,null}function Fl(e,n){return n=Hl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function n0(e,n,a){return Bs(n,e.child,null,a),e=Fl(n,n.pendingProps),e.flags|=2,gi(n),n.memoizedState=null,e}function Kx(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ve){if(o.mode==="hidden")return e=Fl(n,o),n.lanes=536870912,To(null,e);if(Vu(n),(e=pn)?(e=pg(e,Ri),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:qa!==null?{id:Qi,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},a=Fp(e),a.return=n,n.child=a,Gn=n,pn=null)):e=null,e===null)throw Za(n);return n.lanes=536870912,null}return Fl(n,o)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(Vu(n),u)if(n.flags&256)n.flags&=-257,n=n0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(Rn||dr(e,n,a,!1),u=(a&e.childLanes)!==0,Rn||u){if(o=fn,o!==null&&(_=qn(o,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Ds(e,_),oi(o,e,_),uf;Kl(),n=n0(e,n,a)}else e=f.treeContext,pn=Di(_.nextSibling),Gn=n,Ve=!0,Ya=null,Ri=!1,e!==null&&Vp(n,e),n=Fl(n,o),n.flags|=4096;return n}return e=da(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Gl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ff(e,n,a,o,u){return Os(n),a=Xu(e,n,a,o,void 0,u),o=Wu(),e!==null&&!Rn?(ju(e,n,u),va(e,n,u)):(Ve&&o&&Tu(n),n.flags|=1,Vn(e,n,a,u),n.child)}function i0(e,n,a,o,u,f){return Os(n),n.updateQueue=null,a=rm(n,o,a,u),sm(e),o=Wu(),e!==null&&!Rn?(ju(e,n,f),va(e,n,f)):(Ve&&o&&Tu(n),n.flags|=1,Vn(e,n,a,f),n.child)}function a0(e,n,a,o,u){if(Os(n),n.stateNode===null){var f=lr,_=a.contextType;typeof _=="object"&&_!==null&&(f=Hn(_)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=lf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Iu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Hn(_):lr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(of(n,a,_,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&lf.enqueueReplaceState(f,f.state,null),So(n,o,f,u),xo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var w=n.memoizedProps,V=Gs(a,w);f.props=V;var ct=f.context,Mt=a.contextType;_=lr,typeof Mt=="object"&&Mt!==null&&(_=Hn(Mt));var wt=a.getDerivedStateFromProps;Mt=typeof wt=="function"||typeof f.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,Mt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(w||ct!==_)&&Xm(n,f,o,_),Qa=!1;var ft=n.memoizedState;f.state=ft,So(n,o,f,u),xo(),ct=n.memoizedState,w||ft!==ct||Qa?(typeof wt=="function"&&(of(n,a,wt,o),ct=n.memoizedState),(V=Qa||km(n,a,V,o,ft,ct,_))?(Mt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ct),f.props=o,f.state=ct,f.context=_,o=V):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,zu(e,n),_=n.memoizedProps,Mt=Gs(a,_),f.props=Mt,wt=n.pendingProps,ft=f.context,ct=a.contextType,V=lr,typeof ct=="object"&&ct!==null&&(V=Hn(ct)),w=a.getDerivedStateFromProps,(ct=typeof w=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==wt||ft!==V)&&Xm(n,f,o,V),Qa=!1,ft=n.memoizedState,f.state=ft,So(n,o,f,u),xo();var gt=n.memoizedState;_!==wt||ft!==gt||Qa||e!==null&&e.dependencies!==null&&yl(e.dependencies)?(typeof w=="function"&&(of(n,a,w,o),gt=n.memoizedState),(Mt=Qa||km(n,a,Mt,o,ft,gt,V)||e!==null&&e.dependencies!==null&&yl(e.dependencies))?(ct||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,gt,V),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,gt,V)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&ft===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&ft===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=gt),f.props=o,f.state=gt,f.context=V,o=Mt):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&ft===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&ft===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Gl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Bs(n,e.child,null,u),n.child=Bs(n,null,a,u)):Vn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=va(e,n,u),e}function s0(e,n,a,o){return Us(),n.flags|=256,Vn(e,n,a,o),n.child}var df={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hf(e){return{baseLanes:e,cachePool:Yp()}}function pf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=vi),e}function r0(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(En.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ve){if(u?ts(n):es(),(e=pn)?(e=pg(e,Ri),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:qa!==null?{id:Qi,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},a=Fp(e),a.return=n,n.child=a,Gn=n,pn=null)):e=null,e===null)throw Za(n);return Kf(e)?n.lanes=32:n.lanes=536870912,null}var w=o.children;return o=o.fallback,u?(es(),u=n.mode,w=Hl({mode:"hidden",children:w},u),o=Ns(o,u,a,null),w.return=n,o.return=n,w.sibling=o,n.child=w,o=n.child,o.memoizedState=hf(a),o.childLanes=pf(e,_,a),n.memoizedState=df,To(null,o)):(ts(n),mf(n,w))}var V=e.memoizedState;if(V!==null&&(w=V.dehydrated,w!==null)){if(f)n.flags&256?(ts(n),n.flags&=-257,n=gf(e,n,a)):n.memoizedState!==null?(es(),n.child=e.child,n.flags|=128,n=null):(es(),w=o.fallback,u=n.mode,o=Hl({mode:"visible",children:o.children},u),w=Ns(w,u,a,null),w.flags|=2,o.return=n,w.return=n,o.sibling=w,n.child=o,Bs(n,e.child,null,a),o=n.child,o.memoizedState=hf(a),o.childLanes=pf(e,_,a),n.memoizedState=df,n=To(null,o));else if(ts(n),Kf(w)){if(_=w.nextSibling&&w.nextSibling.dataset,_)var ct=_.dgst;_=ct,o=Error(s(419)),o.stack="",o.digest=_,ho({value:o,source:null,stack:null}),n=gf(e,n,a)}else if(Rn||dr(e,n,a,!1),_=(a&e.childLanes)!==0,Rn||_){if(_=fn,_!==null&&(o=qn(_,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,Ds(e,o),oi(_,e,o),uf;Zf(w)||Kl(),n=gf(e,n,a)}else Zf(w)?(n.flags|=192,n.child=e.child,n=null):(e=V.treeContext,pn=Di(w.nextSibling),Gn=n,Ve=!0,Ya=null,Ri=!1,e!==null&&Vp(n,e),n=mf(n,o.children),n.flags|=4096);return n}return u?(es(),w=o.fallback,u=n.mode,V=e.child,ct=V.sibling,o=da(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,ct!==null?w=da(ct,w):(w=Ns(w,u,a,null),w.flags|=2),w.return=n,o.return=n,o.sibling=w,n.child=o,To(null,o),o=n.child,w=e.child.memoizedState,w===null?w=hf(a):(u=w.cachePool,u!==null?(V=An._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=Yp(),w={baseLanes:w.baseLanes|a,cachePool:u}),o.memoizedState=w,o.childLanes=pf(e,_,a),n.memoizedState=df,To(e.child,o)):(ts(n),a=e.child,e=a.sibling,a=da(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function mf(e,n){return n=Hl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Hl(e,n){return e=pi(22,e,null,n),e.lanes=0,e}function gf(e,n,a){return Bs(n,e.child,null,a),e=mf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function o0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Du(e.return,n,a)}function _f(e,n,a,o,u,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function l0(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var _=En.current,w=(_&2)!==0;if(w?(_=_&1|2,n.flags|=128):_&=1,yt(En,_),Vn(e,n,o,a),o=Ve?fo:0,!w&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&o0(e,a,n);else if(e.tag===19)o0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Cl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),_f(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Cl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}_f(n,!0,a,null,f,o);break;case"together":_f(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function va(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),as|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(dr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=da(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=da(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function vf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&yl(e)))}function Qx(e,n,a){switch(n.tag){case 3:_t(n,n.stateNode.containerInfo),Ka(n,An,e.memoizedState.cache),Us();break;case 27:case 5:qt(n);break;case 4:_t(n,n.stateNode.containerInfo);break;case 10:Ka(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Vu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ts(n),n.flags|=128,null):(a&n.child.childLanes)!==0?r0(e,n,a):(ts(n),e=va(e,n,a),e!==null?e.sibling:null);ts(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(dr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return l0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),yt(En,En.current),o)break;return null;case 22:return n.lanes=0,t0(e,n,a,n.pendingProps);case 24:Ka(n,An,e.memoizedState.cache)}return va(e,n,a)}function c0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Rn=!0;else{if(!vf(e,a)&&(n.flags&128)===0)return Rn=!1,Qx(e,n,a);Rn=(e.flags&131072)!==0}else Rn=!1,Ve&&(n.flags&1048576)!==0&&Hp(n,fo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Is(n.elementType),n.type=e,typeof e=="function")Mu(e)?(o=Gs(e,o),n.tag=1,n=a0(null,n,e,o,a)):(n.tag=0,n=ff(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=Qm(null,n,e,o,a);break t}else if(u===z){n.tag=14,n=Jm(null,n,e,o,a);break t}}throw n=dt(e)||e,Error(s(306,n,""))}}return n;case 0:return ff(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Gs(o,n.pendingProps),a0(e,n,o,u,a);case 3:t:{if(_t(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,zu(e,n),So(n,o,null,a);var _=n.memoizedState;if(o=_.cache,Ka(n,An,o),o!==f.cache&&Nu(n,[An],a,!0),xo(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=s0(e,n,o,a);break t}else if(o!==u){u=Ti(Error(s(424)),n),ho(u),n=s0(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(pn=Di(e.firstChild),Gn=n,Ve=!0,Ya=null,Ri=!0,a=tm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Us(),o===u){n=va(e,n,a);break t}Vn(e,n,o,a)}n=n.child}return n;case 26:return Gl(e,n),e===null?(a=Sg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ve||(a=n.type,e=n.pendingProps,o=ic(st.current).createElement(a),o[hn]=n,o[Un]=e,kn(o,a,e),ut(o),n.stateNode=o):n.memoizedState=Sg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return qt(n),e===null&&Ve&&(o=n.stateNode=_g(n.type,n.pendingProps,st.current),Gn=n,Ri=!0,u=pn,cs(n.type)?(Qf=u,pn=Di(o.firstChild)):pn=u),Vn(e,n,n.pendingProps.children,a),Gl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ve&&((u=o=pn)&&(o=wS(o,n.type,n.pendingProps,Ri),o!==null?(n.stateNode=o,Gn=n,pn=Di(o.firstChild),Ri=!1,u=!0):u=!1),u||Za(n)),qt(n),u=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,o=f.children,jf(u,f)?o=null:_!==null&&jf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Xu(e,n,Vx,null,null,a),Go._currentValue=u),Gl(e,n),Vn(e,n,o,a),n.child;case 6:return e===null&&Ve&&((e=a=pn)&&(a=RS(a,n.pendingProps,Ri),a!==null?(n.stateNode=a,Gn=n,pn=null,e=!0):e=!1),e||Za(n)),null;case 13:return r0(e,n,a);case 4:return _t(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Bs(n,null,o,a):Vn(e,n,o,a),n.child;case 11:return Qm(e,n,n.type,n.pendingProps,a);case 7:return Vn(e,n,n.pendingProps,a),n.child;case 8:return Vn(e,n,n.pendingProps.children,a),n.child;case 12:return Vn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ka(n,n.type,o.value),Vn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Os(n),u=Hn(u),o=o(u),n.flags|=1,Vn(e,n,o,a),n.child;case 14:return Jm(e,n,n.type,n.pendingProps,a);case 15:return $m(e,n,n.type,n.pendingProps,a);case 19:return l0(e,n,a);case 31:return Kx(e,n,a);case 22:return t0(e,n,a,n.pendingProps);case 24:return Os(n),o=Hn(An),e===null?(u=Ou(),u===null&&(u=fn,f=Uu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Iu(n),Ka(n,An,u)):((e.lanes&a)!==0&&(zu(e,n),So(n,null,null,a),xo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ka(n,An,o)):(o=f.cache,Ka(n,An,o),o!==u.cache&&Nu(n,[An],a,!0))),Vn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function xa(e){e.flags|=4}function xf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(I0())e.flags|=8192;else throw zs=Tl,Pu}else e.flags&=-16777217}function u0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Tg(n))if(I0())e.flags|=8192;else throw zs=Tl,Pu}function Vl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ct():536870912,e.lanes|=n,Er|=n)}function Ao(e,n){if(!Ve)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function mn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Jx(e,n,a){var o=n.pendingProps;switch(Au(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(n),null;case 1:return mn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ma(An),Et(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(fr(n)?xa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ru())),mn(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(xa(n),f!==null?(mn(n),u0(n,f)):(mn(n),xf(n,u,null,o,a))):f?f!==e.memoizedState?(xa(n),mn(n),u0(n,f)):(mn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&xa(n),mn(n),xf(n,u,e,o,a)),null;case 27:if(Xt(n),a=st.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&xa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return mn(n),null}e=Rt.current,fr(n)?kp(n):(e=_g(u,o,a),n.stateNode=e,xa(n))}return mn(n),null;case 5:if(Xt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&xa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return mn(n),null}if(f=Rt.current,fr(n))kp(n);else{var _=ic(st.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}f[hn]=n,f[Un]=o;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(kn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&xa(n)}}return mn(n),xf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&xa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=st.current,fr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Gn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[hn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||rg(e.nodeValue,a)),e||Za(n,!0)}else e=ic(e).createTextNode(o),e[hn]=n,n.stateNode=e}return mn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=fr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[hn]=n}else Us(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;mn(n),e=!1}else a=Ru(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(gi(n),n):(gi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return mn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=fr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[hn]=n}else Us(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;mn(n),u=!1}else u=Ru(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(gi(n),n):(gi(n),null)}return gi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Vl(n,n.updateQueue),mn(n),null);case 4:return Et(),e===null&&Hf(n.stateNode.containerInfo),mn(n),null;case 10:return ma(n.type),mn(n),null;case 19:if(Q(En),o=n.memoizedState,o===null)return mn(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Ao(o,!1);else{if(xn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Cl(e),f!==null){for(n.flags|=128,Ao(o,!1),e=f.updateQueue,n.updateQueue=e,Vl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Bp(a,e),a=a.sibling;return yt(En,En.current&1|2),Ve&&ha(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&It()>ql&&(n.flags|=128,u=!0,Ao(o,!1),n.lanes=4194304)}else{if(!u)if(e=Cl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Vl(n,e),Ao(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Ve)return mn(n),null}else 2*It()-o.renderingStartTime>ql&&a!==536870912&&(n.flags|=128,u=!0,Ao(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=It(),e.sibling=null,a=En.current,yt(En,u?a&1|2:a&1),Ve&&ha(n,o.treeForkCount),e):(mn(n),null);case 22:case 23:return gi(n),Hu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(mn(n),n.subtreeFlags&6&&(n.flags|=8192)):mn(n),a=n.updateQueue,a!==null&&Vl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Q(Ps),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ma(An),mn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function $x(e,n){switch(Au(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ma(An),Et(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Xt(n),null;case 31:if(n.memoizedState!==null){if(gi(n),n.alternate===null)throw Error(s(340));Us()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(gi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Us()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Q(En),null;case 4:return Et(),null;case 10:return ma(n.type),null;case 22:case 23:return gi(n),Hu(),e!==null&&Q(Ps),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ma(An),null;case 25:return null;default:return null}}function f0(e,n){switch(Au(n),n.tag){case 3:ma(An),Et();break;case 26:case 27:case 5:Xt(n);break;case 4:Et();break;case 31:n.memoizedState!==null&&gi(n);break;case 13:gi(n);break;case 19:Q(En);break;case 10:ma(n.type);break;case 22:case 23:gi(n),Hu(),e!==null&&Q(Ps);break;case 24:ma(An)}}function wo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,_=a.inst;o=f(),_.destroy=o}a=a.next}while(a!==u)}}catch(w){sn(n,n.return,w)}}function ns(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var _=o.inst,w=_.destroy;if(w!==void 0){_.destroy=void 0,u=n;var V=a,ct=w;try{ct()}catch(Mt){sn(u,V,Mt)}}}o=o.next}while(o!==f)}}catch(Mt){sn(n,n.return,Mt)}}function d0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{nm(n,a)}catch(o){sn(e,e.return,o)}}}function h0(e,n,a){a.props=Gs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){sn(e,n,o)}}function Ro(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){sn(e,n,u)}}function $i(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){sn(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){sn(e,n,u)}else a.current=null}function p0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){sn(e,e.return,u)}}function Sf(e,n,a){try{var o=e.stateNode;yS(o,e.type,a,n),o[Un]=n}catch(u){sn(e,e.return,u)}}function m0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&cs(e.type)||e.tag===4}function yf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||m0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&cs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ua));else if(o!==4&&(o===27&&cs(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Mf(e,n,a),e=e.sibling;e!==null;)Mf(e,n,a),e=e.sibling}function kl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&cs(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(kl(e,n,a),e=e.sibling;e!==null;)kl(e,n,a),e=e.sibling}function g0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);kn(n,o,a),n[hn]=e,n[Un]=a}catch(f){sn(e,e.return,f)}}var Sa=!1,Cn=!1,bf=!1,_0=typeof WeakSet=="function"?WeakSet:Set,zn=null;function tS(e,n){if(e=e.containerInfo,Xf=uc,e=Cp(e),mu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,w=-1,V=-1,ct=0,Mt=0,wt=e,ft=null;e:for(;;){for(var gt;wt!==a||u!==0&&wt.nodeType!==3||(w=_+u),wt!==f||o!==0&&wt.nodeType!==3||(V=_+o),wt.nodeType===3&&(_+=wt.nodeValue.length),(gt=wt.firstChild)!==null;)ft=wt,wt=gt;for(;;){if(wt===e)break e;if(ft===a&&++ct===u&&(w=_),ft===f&&++Mt===o&&(V=_),(gt=wt.nextSibling)!==null)break;wt=ft,ft=wt.parentNode}wt=gt}a=w===-1||V===-1?null:{start:w,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Wf={focusedElem:e,selectionRange:a},uc=!1,zn=n;zn!==null;)if(n=zn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,zn=e;else for(;zn!==null;){switch(n=zn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ie=Gs(a.type,u);e=o.getSnapshotBeforeUpdate(ie,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(_e){sn(a,a.return,_e)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Yf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Yf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,zn=e;break}zn=n.return}}function v0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ma(e,a),o&4&&wo(5,a);break;case 1:if(Ma(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){sn(a,a.return,_)}else{var u=Gs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){sn(a,a.return,_)}}o&64&&d0(a),o&512&&Ro(a,a.return);break;case 3:if(Ma(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{nm(e,n)}catch(_){sn(a,a.return,_)}}break;case 27:n===null&&o&4&&g0(a);case 26:case 5:Ma(e,a),n===null&&o&4&&p0(a),o&512&&Ro(a,a.return);break;case 12:Ma(e,a);break;case 31:Ma(e,a),o&4&&y0(e,a);break;case 13:Ma(e,a),o&4&&M0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=cS.bind(null,a),CS(e,a))));break;case 22:if(o=a.memoizedState!==null||Sa,!o){n=n!==null&&n.memoizedState!==null||Cn,u=Sa;var f=Cn;Sa=o,(Cn=n)&&!f?ba(e,a,(a.subtreeFlags&8772)!==0):Ma(e,a),Sa=u,Cn=f}break;case 30:break;default:Ma(e,a)}}function x0(e){var n=e.alternate;n!==null&&(e.alternate=null,x0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Xa(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var gn=null,ii=!1;function ya(e,n,a){for(a=a.child;a!==null;)S0(e,n,a),a=a.sibling}function S0(e,n,a){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(ot,a)}catch{}switch(a.tag){case 26:Cn||$i(a,n),ya(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Cn||$i(a,n);var o=gn,u=ii;cs(a.type)&&(gn=a.stateNode,ii=!1),ya(e,n,a),zo(a.stateNode),gn=o,ii=u;break;case 5:Cn||$i(a,n);case 6:if(o=gn,u=ii,gn=null,ya(e,n,a),gn=o,ii=u,gn!==null)if(ii)try{(gn.nodeType===9?gn.body:gn.nodeName==="HTML"?gn.ownerDocument.body:gn).removeChild(a.stateNode)}catch(f){sn(a,n,f)}else try{gn.removeChild(a.stateNode)}catch(f){sn(a,n,f)}break;case 18:gn!==null&&(ii?(e=gn,dg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ur(e)):dg(gn,a.stateNode));break;case 4:o=gn,u=ii,gn=a.stateNode.containerInfo,ii=!0,ya(e,n,a),gn=o,ii=u;break;case 0:case 11:case 14:case 15:ns(2,a,n),Cn||ns(4,a,n),ya(e,n,a);break;case 1:Cn||($i(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&h0(a,n,o)),ya(e,n,a);break;case 21:ya(e,n,a);break;case 22:Cn=(o=Cn)||a.memoizedState!==null,ya(e,n,a),Cn=o;break;default:ya(e,n,a)}}function y0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ur(e)}catch(a){sn(n,n.return,a)}}}function M0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ur(e)}catch(a){sn(n,n.return,a)}}function eS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new _0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new _0),n;default:throw Error(s(435,e.tag))}}function Xl(e,n){var a=eS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=uS.bind(null,e,o);o.then(u,u)}})}function ai(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,_=n,w=_;t:for(;w!==null;){switch(w.tag){case 27:if(cs(w.type)){gn=w.stateNode,ii=!1;break t}break;case 5:gn=w.stateNode,ii=!1;break t;case 3:case 4:gn=w.stateNode.containerInfo,ii=!0;break t}w=w.return}if(gn===null)throw Error(s(160));S0(f,_,u),gn=null,ii=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)b0(n,e),n=n.sibling}var Fi=null;function b0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ai(n,e),si(e),o&4&&(ns(3,e,e.return),wo(3,e),ns(5,e,e.return));break;case 1:ai(n,e),si(e),o&512&&(Cn||a===null||$i(a,a.return)),o&64&&Sa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Fi;if(ai(n,e),si(e),o&512&&(Cn||a===null||$i(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Pi]||f[hn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),kn(f,o,a),f[hn]=e,ut(f),o=f;break t;case"link":var _=bg("link","href",u).get(o+(a.href||""));if(_){for(var w=0;w<_.length;w++)if(f=_[w],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(w,1);break e}}f=u.createElement(o),kn(f,o,a),u.head.appendChild(f);break;case"meta":if(_=bg("meta","content",u).get(o+(a.content||""))){for(w=0;w<_.length;w++)if(f=_[w],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(w,1);break e}}f=u.createElement(o),kn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[hn]=e,ut(f),o=f}e.stateNode=o}else Eg(u,e.type,e.stateNode);else e.stateNode=Mg(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Eg(u,e.type,e.stateNode):Mg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Sf(e,e.memoizedProps,a.memoizedProps)}break;case 27:ai(n,e),si(e),o&512&&(Cn||a===null||$i(a,a.return)),a!==null&&o&4&&Sf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ai(n,e),si(e),o&512&&(Cn||a===null||$i(a,a.return)),e.flags&32){u=e.stateNode;try{bn(u,"")}catch(ie){sn(e,e.return,ie)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Sf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(bf=!0);break;case 6:if(ai(n,e),si(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(ie){sn(e,e.return,ie)}}break;case 3:if(rc=null,u=Fi,Fi=ac(n.containerInfo),ai(n,e),Fi=u,si(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ur(n.containerInfo)}catch(ie){sn(e,e.return,ie)}bf&&(bf=!1,E0(e));break;case 4:o=Fi,Fi=ac(e.stateNode.containerInfo),ai(n,e),si(e),Fi=o;break;case 12:ai(n,e),si(e);break;case 31:ai(n,e),si(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Xl(e,o)));break;case 13:ai(n,e),si(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(jl=It()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Xl(e,o)));break;case 22:u=e.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,ct=Sa,Mt=Cn;if(Sa=ct||u,Cn=Mt||V,ai(n,e),Cn=Mt,Sa=ct,si(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||Sa||Cn||Hs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(f=V.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{w=V.stateNode;var wt=V.memoizedProps.style,ft=wt!=null&&wt.hasOwnProperty("display")?wt.display:null;w.style.display=ft==null||typeof ft=="boolean"?"":(""+ft).trim()}}catch(ie){sn(V,V.return,ie)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(ie){sn(V,V.return,ie)}}}else if(n.tag===18){if(a===null){V=n;try{var gt=V.stateNode;u?hg(gt,!0):hg(V.stateNode,!1)}catch(ie){sn(V,V.return,ie)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Xl(e,a))));break;case 19:ai(n,e),si(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Xl(e,o)));break;case 30:break;case 21:break;default:ai(n,e),si(e)}}function si(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(m0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=yf(e);kl(e,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(bn(_,""),a.flags&=-33);var w=yf(e);kl(e,w,_);break;case 3:case 4:var V=a.stateNode.containerInfo,ct=yf(e);Mf(e,ct,V);break;default:throw Error(s(161))}}catch(Mt){sn(e,e.return,Mt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function E0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;E0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ma(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)v0(e,n.alternate,n),n=n.sibling}function Hs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ns(4,n,n.return),Hs(n);break;case 1:$i(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&h0(n,n.return,a),Hs(n);break;case 27:zo(n.stateNode);case 26:case 5:$i(n,n.return),Hs(n);break;case 22:n.memoizedState===null&&Hs(n);break;case 30:Hs(n);break;default:Hs(n)}e=e.sibling}}function ba(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:ba(u,f,a),wo(4,f);break;case 1:if(ba(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ct){sn(o,o.return,ct)}if(o=f,u=o.updateQueue,u!==null){var w=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)em(V[u],w)}catch(ct){sn(o,o.return,ct)}}a&&_&64&&d0(f),Ro(f,f.return);break;case 27:g0(f);case 26:case 5:ba(u,f,a),a&&o===null&&_&4&&p0(f),Ro(f,f.return);break;case 12:ba(u,f,a);break;case 31:ba(u,f,a),a&&_&4&&y0(u,f);break;case 13:ba(u,f,a),a&&_&4&&M0(u,f);break;case 22:f.memoizedState===null&&ba(u,f,a),Ro(f,f.return);break;case 30:break;default:ba(u,f,a)}n=n.sibling}}function Ef(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&po(a))}function Tf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&po(e))}function Gi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)T0(e,n,a,o),n=n.sibling}function T0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Gi(e,n,a,o),u&2048&&wo(9,n);break;case 1:Gi(e,n,a,o);break;case 3:Gi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&po(e)));break;case 12:if(u&2048){Gi(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,_=f.id,w=f.onPostCommit;typeof w=="function"&&w(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){sn(n,n.return,V)}}else Gi(e,n,a,o);break;case 31:Gi(e,n,a,o);break;case 13:Gi(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Gi(e,n,a,o):Co(e,n):f._visibility&2?Gi(e,n,a,o):(f._visibility|=2,yr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Ef(_,n);break;case 24:Gi(e,n,a,o),u&2048&&Tf(n.alternate,n);break;default:Gi(e,n,a,o)}}function yr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,w=a,V=o,ct=_.flags;switch(_.tag){case 0:case 11:case 15:yr(f,_,w,V,u),wo(8,_);break;case 23:break;case 22:var Mt=_.stateNode;_.memoizedState!==null?Mt._visibility&2?yr(f,_,w,V,u):Co(f,_):(Mt._visibility|=2,yr(f,_,w,V,u)),u&&ct&2048&&Ef(_.alternate,_);break;case 24:yr(f,_,w,V,u),u&&ct&2048&&Tf(_.alternate,_);break;default:yr(f,_,w,V,u)}n=n.sibling}}function Co(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Co(a,o),u&2048&&Ef(o.alternate,o);break;case 24:Co(a,o),u&2048&&Tf(o.alternate,o);break;default:Co(a,o)}n=n.sibling}}var Do=8192;function Mr(e,n,a){if(e.subtreeFlags&Do)for(e=e.child;e!==null;)A0(e,n,a),e=e.sibling}function A0(e,n,a){switch(e.tag){case 26:Mr(e,n,a),e.flags&Do&&e.memoizedState!==null&&HS(a,Fi,e.memoizedState,e.memoizedProps);break;case 5:Mr(e,n,a);break;case 3:case 4:var o=Fi;Fi=ac(e.stateNode.containerInfo),Mr(e,n,a),Fi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Do,Do=16777216,Mr(e,n,a),Do=o):Mr(e,n,a));break;default:Mr(e,n,a)}}function w0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function No(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];zn=o,C0(o,e)}w0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)R0(e),e=e.sibling}function R0(e){switch(e.tag){case 0:case 11:case 15:No(e),e.flags&2048&&ns(9,e,e.return);break;case 3:No(e);break;case 12:No(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Wl(e)):No(e);break;default:No(e)}}function Wl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];zn=o,C0(o,e)}w0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ns(8,n,n.return),Wl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Wl(n));break;default:Wl(n)}e=e.sibling}}function C0(e,n){for(;zn!==null;){var a=zn;switch(a.tag){case 0:case 11:case 15:ns(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:po(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,zn=o;else t:for(a=e;zn!==null;){o=zn;var u=o.sibling,f=o.return;if(x0(o),o===a){zn=null;break t}if(u!==null){u.return=f,zn=u;break t}zn=f}}}var nS={getCacheForType:function(e){var n=Hn(An),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Hn(An).controller.signal}},iS=typeof WeakMap=="function"?WeakMap:Map,$e=0,fn=null,Le=null,Ie=0,an=0,_i=null,is=!1,br=!1,Af=!1,Ea=0,xn=0,as=0,Vs=0,wf=0,vi=0,Er=0,Uo=null,ri=null,Rf=!1,jl=0,D0=0,ql=1/0,Yl=null,ss=null,On=0,rs=null,Tr=null,Ta=0,Cf=0,Df=null,N0=null,Lo=0,Nf=null;function xi(){return($e&2)!==0&&Ie!==0?Ie&-Ie:L.T!==null?zf():Ga()}function U0(){if(vi===0)if((Ie&536870912)===0||Ve){var e=De;De<<=1,(De&3932160)===0&&(De=262144),vi=e}else vi=536870912;return e=mi.current,e!==null&&(e.flags|=32),vi}function oi(e,n,a){(e===fn&&(an===2||an===9)||e.cancelPendingCommit!==null)&&(Ar(e,0),os(e,Ie,vi,!1)),de(e,a),(($e&2)===0||e!==fn)&&(e===fn&&(($e&2)===0&&(Vs|=a),xn===4&&os(e,Ie,vi,!1)),ta(e))}function L0(e,n,a){if(($e&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||vt(e,n),u=o?rS(e,n):Lf(e,n,!0),f=o;do{if(u===0){br&&!o&&os(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!aS(a)){u=Lf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var w=e;u=Uo;var V=w.current.memoizedState.isDehydrated;if(V&&(Ar(w,_).flags|=256),_=Lf(w,_,!1),_!==2){if(Af&&!V){w.errorRecoveryDisabledLanes|=f,Vs|=f,u=4;break t}f=ri,ri=u,f!==null&&(ri===null?ri=f:ri.push.apply(ri,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){Ar(e,0),os(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:os(o,n,vi,!is);break t;case 2:ri=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=jl+300-It(),10<u)){if(os(o,n,vi,!is),St(o,0,!0)!==0)break t;Ta=n,o.timeoutHandle=ug(O0.bind(null,o,a,ri,Yl,Rf,n,vi,Vs,Er,is,f,"Throttled",-0,0),u);break t}O0(o,a,ri,Yl,Rf,n,vi,Vs,Er,is,f,null,-0,0)}}break}while(!0);ta(e)}function O0(e,n,a,o,u,f,_,w,V,ct,Mt,wt,ft,gt){if(e.timeoutHandle=-1,wt=n.subtreeFlags,wt&8192||(wt&16785408)===16785408){wt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ua},A0(n,f,wt);var ie=(f&62914560)===f?jl-It():(f&4194048)===f?D0-It():0;if(ie=VS(wt,ie),ie!==null){Ta=f,e.cancelPendingCommit=ie(V0.bind(null,e,n,f,a,o,u,_,w,V,Mt,wt,null,ft,gt)),os(e,f,_,!ct);return}}V0(e,n,f,a,o,u,_,w,V)}function aS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!hi(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function os(e,n,a,o){n&=~wf,n&=~Vs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Ht(u),_=1<<f;o[f]=-1,u&=~_}a!==0&&Xe(e,a,n)}function Zl(){return($e&6)===0?(Oo(0),!1):!0}function Uf(){if(Le!==null){if(an===0)var e=Le.return;else e=Le,pa=Ls=null,qu(e),gr=null,go=0,e=Le;for(;e!==null;)f0(e.alternate,e),e=e.return;Le=null}}function Ar(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ES(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ta=0,Uf(),fn=e,Le=a=da(e.current,null),Ie=n,an=0,_i=null,is=!1,br=vt(e,n),Af=!1,Er=vi=wf=Vs=as=xn=0,ri=Uo=null,Rf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Ht(o),f=1<<u;n|=e[u],o&=~f}return Ea=n,gl(),a}function P0(e,n){Ae=null,L.H=Eo,n===mr||n===El?(n=Qp(),an=3):n===Pu?(n=Qp(),an=4):an=n===uf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,_i=n,Le===null&&(xn=1,Bl(e,Ti(n,e.current)))}function I0(){var e=mi.current;return e===null?!0:(Ie&4194048)===Ie?Ci===null:(Ie&62914560)===Ie||(Ie&536870912)!==0?e===Ci:!1}function z0(){var e=L.H;return L.H=Eo,e===null?Eo:e}function B0(){var e=L.A;return L.A=nS,e}function Kl(){xn=4,is||(Ie&4194048)!==Ie&&mi.current!==null||(br=!0),(as&134217727)===0&&(Vs&134217727)===0||fn===null||os(fn,Ie,vi,!1)}function Lf(e,n,a){var o=$e;$e|=2;var u=z0(),f=B0();(fn!==e||Ie!==n)&&(Yl=null,Ar(e,n)),n=!1;var _=xn;t:do try{if(an!==0&&Le!==null){var w=Le,V=_i;switch(an){case 8:Uf(),_=6;break t;case 3:case 2:case 9:case 6:mi.current===null&&(n=!0);var ct=an;if(an=0,_i=null,wr(e,w,V,ct),a&&br){_=0;break t}break;default:ct=an,an=0,_i=null,wr(e,w,V,ct)}}sS(),_=xn;break}catch(Mt){P0(e,Mt)}while(!0);return n&&e.shellSuspendCounter++,pa=Ls=null,$e=o,L.H=u,L.A=f,Le===null&&(fn=null,Ie=0,gl()),_}function sS(){for(;Le!==null;)F0(Le)}function rS(e,n){var a=$e;$e|=2;var o=z0(),u=B0();fn!==e||Ie!==n?(Yl=null,ql=It()+500,Ar(e,n)):br=vt(e,n);t:do try{if(an!==0&&Le!==null){n=Le;var f=_i;e:switch(an){case 1:an=0,_i=null,wr(e,n,f,1);break;case 2:case 9:if(Zp(f)){an=0,_i=null,G0(n);break}n=function(){an!==2&&an!==9||fn!==e||(an=7),ta(e)},f.then(n,n);break t;case 3:an=7;break t;case 4:an=5;break t;case 7:Zp(f)?(an=0,_i=null,G0(n)):(an=0,_i=null,wr(e,n,f,7));break;case 5:var _=null;switch(Le.tag){case 26:_=Le.memoizedState;case 5:case 27:var w=Le;if(_?Tg(_):w.stateNode.complete){an=0,_i=null;var V=w.sibling;if(V!==null)Le=V;else{var ct=w.return;ct!==null?(Le=ct,Ql(ct)):Le=null}break e}}an=0,_i=null,wr(e,n,f,5);break;case 6:an=0,_i=null,wr(e,n,f,6);break;case 8:Uf(),xn=6;break t;default:throw Error(s(462))}}oS();break}catch(Mt){P0(e,Mt)}while(!0);return pa=Ls=null,L.H=o,L.A=u,$e=a,Le!==null?0:(fn=null,Ie=0,gl(),xn)}function oS(){for(;Le!==null&&!fe();)F0(Le)}function F0(e){var n=c0(e.alternate,e,Ea);e.memoizedProps=e.pendingProps,n===null?Ql(e):Le=n}function G0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=i0(a,n,n.pendingProps,n.type,void 0,Ie);break;case 11:n=i0(a,n,n.pendingProps,n.type.render,n.ref,Ie);break;case 5:qu(n);default:f0(a,n),n=Le=Bp(n,Ea),n=c0(a,n,Ea)}e.memoizedProps=e.pendingProps,n===null?Ql(e):Le=n}function wr(e,n,a,o){pa=Ls=null,qu(n),gr=null,go=0;var u=n.return;try{if(Zx(e,u,n,a,Ie)){xn=1,Bl(e,Ti(a,e.current)),Le=null;return}}catch(f){if(u!==null)throw Le=u,f;xn=1,Bl(e,Ti(a,e.current)),Le=null;return}n.flags&32768?(Ve||o===1?e=!0:br||(Ie&536870912)!==0?e=!1:(is=e=!0,(o===2||o===9||o===3||o===6)&&(o=mi.current,o!==null&&o.tag===13&&(o.flags|=16384))),H0(n,e)):Ql(n)}function Ql(e){var n=e;do{if((n.flags&32768)!==0){H0(n,is);return}e=n.return;var a=Jx(n.alternate,n,Ea);if(a!==null){Le=a;return}if(n=n.sibling,n!==null){Le=n;return}Le=n=e}while(n!==null);xn===0&&(xn=5)}function H0(e,n){do{var a=$x(e.alternate,e);if(a!==null){a.flags&=32767,Le=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Le=e;return}Le=e=a}while(e!==null);xn=6,Le=null}function V0(e,n,a,o,u,f,_,w,V){e.cancelPendingCommit=null;do Jl();while(On!==0);if(($e&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Su,en(e,a,f,_,w,V),e===fn&&(Le=fn=null,Ie=0),Tr=n,rs=e,Ta=a,Cf=f,Df=u,N0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,fS(at,function(){return q0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=L.T,L.T=null,u=B.p,B.p=2,_=$e,$e|=4;try{tS(e,n,a)}finally{$e=_,B.p=u,L.T=o}}On=1,k0(),X0(),W0()}}function k0(){if(On===1){On=0;var e=rs,n=Tr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var o=B.p;B.p=2;var u=$e;$e|=4;try{b0(n,e);var f=Wf,_=Cp(e.containerInfo),w=f.focusedElem,V=f.selectionRange;if(_!==w&&w&&w.ownerDocument&&Rp(w.ownerDocument.documentElement,w)){if(V!==null&&mu(w)){var ct=V.start,Mt=V.end;if(Mt===void 0&&(Mt=ct),"selectionStart"in w)w.selectionStart=ct,w.selectionEnd=Math.min(Mt,w.value.length);else{var wt=w.ownerDocument||document,ft=wt&&wt.defaultView||window;if(ft.getSelection){var gt=ft.getSelection(),ie=w.textContent.length,_e=Math.min(V.start,ie),cn=V.end===void 0?_e:Math.min(V.end,ie);!gt.extend&&_e>cn&&(_=cn,cn=_e,_e=_);var it=wp(w,_e),K=wp(w,cn);if(it&&K&&(gt.rangeCount!==1||gt.anchorNode!==it.node||gt.anchorOffset!==it.offset||gt.focusNode!==K.node||gt.focusOffset!==K.offset)){var lt=wt.createRange();lt.setStart(it.node,it.offset),gt.removeAllRanges(),_e>cn?(gt.addRange(lt),gt.extend(K.node,K.offset)):(lt.setEnd(K.node,K.offset),gt.addRange(lt))}}}}for(wt=[],gt=w;gt=gt.parentNode;)gt.nodeType===1&&wt.push({element:gt,left:gt.scrollLeft,top:gt.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<wt.length;w++){var Tt=wt[w];Tt.element.scrollLeft=Tt.left,Tt.element.scrollTop=Tt.top}}uc=!!Xf,Wf=Xf=null}finally{$e=u,B.p=o,L.T=a}}e.current=n,On=2}}function X0(){if(On===2){On=0;var e=rs,n=Tr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var o=B.p;B.p=2;var u=$e;$e|=4;try{v0(e,n.alternate,n)}finally{$e=u,B.p=o,L.T=a}}On=3}}function W0(){if(On===4||On===3){On=0,Ee();var e=rs,n=Tr,a=Ta,o=N0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?On=5:(On=0,Tr=rs=null,j0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ss=null),Fa(a),n=n.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(ot,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=L.T,u=B.p,B.p=2,L.T=null;try{for(var f=e.onRecoverableError,_=0;_<o.length;_++){var w=o[_];f(w.value,{componentStack:w.stack})}}finally{L.T=n,B.p=u}}(Ta&3)!==0&&Jl(),ta(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Nf?Lo++:(Lo=0,Nf=e):Lo=0,Oo(0)}}function j0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,po(n)))}function Jl(){return k0(),X0(),W0(),q0()}function q0(){if(On!==5)return!1;var e=rs,n=Cf;Cf=0;var a=Fa(Ta),o=L.T,u=B.p;try{B.p=32>a?32:a,L.T=null,a=Df,Df=null;var f=rs,_=Ta;if(On=0,Tr=rs=null,Ta=0,($e&6)!==0)throw Error(s(331));var w=$e;if($e|=4,R0(f.current),T0(f,f.current,_,a),$e=w,Oo(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(ot,f)}catch{}return!0}finally{B.p=u,L.T=o,j0(e,n)}}function Y0(e,n,a){n=Ti(a,n),n=cf(e.stateNode,n,2),e=$a(e,n,2),e!==null&&(de(e,2),ta(e))}function sn(e,n,a){if(e.tag===3)Y0(e,e,a);else for(;n!==null;){if(n.tag===3){Y0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ss===null||!ss.has(o))){e=Ti(a,e),a=Zm(2),o=$a(n,a,2),o!==null&&(Km(a,o,n,e),de(o,2),ta(o));break}}n=n.return}}function Of(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new iS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Af=!0,u.add(a),e=lS.bind(null,e,n,a),n.then(e,e))}function lS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,fn===e&&(Ie&a)===a&&(xn===4||xn===3&&(Ie&62914560)===Ie&&300>It()-jl?($e&2)===0&&Ar(e,0):wf|=a,Er===Ie&&(Er=0)),ta(e)}function Z0(e,n){n===0&&(n=Ct()),e=Ds(e,n),e!==null&&(de(e,n),ta(e))}function cS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Z0(e,a)}function uS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Z0(e,a)}function fS(e,n){return Z(e,n)}var $l=null,Rr=null,Pf=!1,tc=!1,If=!1,ls=0;function ta(e){e!==Rr&&e.next===null&&(Rr===null?$l=Rr=e:Rr=Rr.next=e),tc=!0,Pf||(Pf=!0,hS())}function Oo(e,n){if(!If&&tc){If=!0;do for(var a=!1,o=$l;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var _=o.suspendedLanes,w=o.pingedLanes;f=(1<<31-Ht(42|e)+1)-1,f&=u&~(_&~w),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,$0(o,f))}else f=Ie,f=St(o,o===fn?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||vt(o,f)||(a=!0,$0(o,f));o=o.next}while(a);If=!1}}function dS(){K0()}function K0(){tc=Pf=!1;var e=0;ls!==0&&bS()&&(e=ls);for(var n=It(),a=null,o=$l;o!==null;){var u=o.next,f=Q0(o,n);f===0?(o.next=null,a===null?$l=u:a.next=u,u===null&&(Rr=a)):(a=o,(e!==0||(f&3)!==0)&&(tc=!0)),o=u}On!==0&&On!==5||Oo(e),ls!==0&&(ls=0)}function Q0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-Ht(f),w=1<<_,V=u[_];V===-1?((w&a)===0||(w&o)!==0)&&(u[_]=kt(w,n)):V<=n&&(e.expiredLanes|=w),f&=~w}if(n=fn,a=Ie,a=St(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(an===2||an===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ue(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||vt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ue(o),Fa(a)){case 2:case 8:a=E;break;case 32:a=at;break;case 268435456:a=Ut;break;default:a=at}return o=J0.bind(null,e),a=Z(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ue(o),e.callbackPriority=2,e.callbackNode=null,2}function J0(e,n){if(On!==0&&On!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Jl()&&e.callbackNode!==a)return null;var o=Ie;return o=St(e,e===fn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(L0(e,o,n),Q0(e,It()),e.callbackNode!=null&&e.callbackNode===a?J0.bind(null,e):null)}function $0(e,n){if(Jl())return null;L0(e,n,!0)}function hS(){TS(function(){($e&6)!==0?Z(N,dS):K0()})}function zf(){if(ls===0){var e=hr;e===0&&(e=ge,ge<<=1,(ge&261888)===0&&(ge=256)),ls=e}return ls}function tg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:As(""+e)}function eg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function pS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=tg((u[Un]||null).action),_=o.submitter;_&&(n=(n=_[Un]||null)?tg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var w=new dl("action","action",null,o,u);e.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ls!==0){var V=_?eg(u,_):new FormData(u);nf(a,{pending:!0,data:V,method:u.method,action:f},null,V)}}else typeof f=="function"&&(w.preventDefault(),V=_?eg(u,_):new FormData(u),nf(a,{pending:!0,data:V,method:u.method,action:f},f,V))},currentTarget:u}]})}}for(var Bf=0;Bf<xu.length;Bf++){var Ff=xu[Bf],mS=Ff.toLowerCase(),gS=Ff[0].toUpperCase()+Ff.slice(1);Bi(mS,"on"+gS)}Bi(Up,"onAnimationEnd"),Bi(Lp,"onAnimationIteration"),Bi(Op,"onAnimationStart"),Bi("dblclick","onDoubleClick"),Bi("focusin","onFocus"),Bi("focusout","onBlur"),Bi(Ux,"onTransitionRun"),Bi(Lx,"onTransitionStart"),Bi(Ox,"onTransitionCancel"),Bi(Pp,"onTransitionEnd"),$("onMouseEnter",["mouseout","mouseover"]),$("onMouseLeave",["mouseout","mouseover"]),$("onPointerEnter",["pointerout","pointerover"]),$("onPointerLeave",["pointerout","pointerover"]),F("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),F("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),F("onBeforeInput",["compositionend","keypress","textInput","paste"]),F("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),F("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),F("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_S=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Po));function ng(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var w=o[_],V=w.instance,ct=w.currentTarget;if(w=w.listener,V!==f&&u.isPropagationStopped())break t;f=w,u.currentTarget=ct;try{f(u)}catch(Mt){ml(Mt)}u.currentTarget=null,f=V}else for(_=0;_<o.length;_++){if(w=o[_],V=w.instance,ct=w.currentTarget,w=w.listener,V!==f&&u.isPropagationStopped())break t;f=w,u.currentTarget=ct;try{f(u)}catch(Mt){ml(Mt)}u.currentTarget=null,f=V}}}}function Oe(e,n){var a=n[Yi];a===void 0&&(a=n[Yi]=new Set);var o=e+"__bubble";a.has(o)||(ig(n,e,2,!1),a.add(o))}function Gf(e,n,a){var o=0;n&&(o|=4),ig(a,e,o,n)}var ec="_reactListening"+Math.random().toString(36).slice(2);function Hf(e){if(!e[ec]){e[ec]=!0,te.forEach(function(a){a!=="selectionchange"&&(_S.has(a)||Gf(a,!1,e),Gf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ec]||(n[ec]=!0,Gf("selectionchange",!1,n))}}function ig(e,n,a,o){switch(Ug(n)){case 2:var u=WS;break;case 8:u=jS;break;default:u=nd}a=u.bind(null,n,a,e),u=void 0,!ru||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Vf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var w=o.stateNode.containerInfo;if(w===u)break;if(_===4)for(_=o.return;_!==null;){var V=_.tag;if((V===3||V===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;w!==null;){if(_=Ii(w),_===null)return;if(V=_.tag,V===5||V===6||V===26||V===27){o=f=_;continue t}w=w.parentNode}}o=o.return}lp(function(){var ct=f,Mt=au(a),wt=[];t:{var ft=Ip.get(e);if(ft!==void 0){var gt=dl,ie=e;switch(e){case"keypress":if(ul(a)===0)break t;case"keydown":case"keyup":gt=ux;break;case"focusin":ie="focus",gt=uu;break;case"focusout":ie="blur",gt=uu;break;case"beforeblur":case"afterblur":gt=uu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":gt=fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":gt=Jv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":gt=hx;break;case Up:case Lp:case Op:gt=ex;break;case Pp:gt=mx;break;case"scroll":case"scrollend":gt=Kv;break;case"wheel":gt=_x;break;case"copy":case"cut":case"paste":gt=ix;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":gt=hp;break;case"toggle":case"beforetoggle":gt=xx}var _e=(n&4)!==0,cn=!_e&&(e==="scroll"||e==="scrollend"),it=_e?ft!==null?ft+"Capture":null:ft;_e=[];for(var K=ct,lt;K!==null;){var Tt=K;if(lt=Tt.stateNode,Tt=Tt.tag,Tt!==5&&Tt!==26&&Tt!==27||lt===null||it===null||(Tt=no(K,it),Tt!=null&&_e.push(Io(K,Tt,lt))),cn)break;K=K.return}0<_e.length&&(ft=new gt(ft,ie,null,a,Mt),wt.push({event:ft,listeners:_e}))}}if((n&7)===0){t:{if(ft=e==="mouseover"||e==="pointerover",gt=e==="mouseout"||e==="pointerout",ft&&a!==iu&&(ie=a.relatedTarget||a.fromElement)&&(Ii(ie)||ie[Oi]))break t;if((gt||ft)&&(ft=Mt.window===Mt?Mt:(ft=Mt.ownerDocument)?ft.defaultView||ft.parentWindow:window,gt?(ie=a.relatedTarget||a.toElement,gt=ct,ie=ie?Ii(ie):null,ie!==null&&(cn=c(ie),_e=ie.tag,ie!==cn||_e!==5&&_e!==27&&_e!==6)&&(ie=null)):(gt=null,ie=ct),gt!==ie)){if(_e=fp,Tt="onMouseLeave",it="onMouseEnter",K="mouse",(e==="pointerout"||e==="pointerover")&&(_e=hp,Tt="onPointerLeave",it="onPointerEnter",K="pointer"),cn=gt==null?ft:Zi(gt),lt=ie==null?ft:Zi(ie),ft=new _e(Tt,K+"leave",gt,a,Mt),ft.target=cn,ft.relatedTarget=lt,Tt=null,Ii(Mt)===ct&&(_e=new _e(it,K+"enter",ie,a,Mt),_e.target=lt,_e.relatedTarget=cn,Tt=_e),cn=Tt,gt&&ie)e:{for(_e=vS,it=gt,K=ie,lt=0,Tt=it;Tt;Tt=_e(Tt))lt++;Tt=0;for(var ue=K;ue;ue=_e(ue))Tt++;for(;0<lt-Tt;)it=_e(it),lt--;for(;0<Tt-lt;)K=_e(K),Tt--;for(;lt--;){if(it===K||K!==null&&it===K.alternate){_e=it;break e}it=_e(it),K=_e(K)}_e=null}else _e=null;gt!==null&&ag(wt,ft,gt,_e,!1),ie!==null&&cn!==null&&ag(wt,cn,ie,_e,!0)}}t:{if(ft=ct?Zi(ct):window,gt=ft.nodeName&&ft.nodeName.toLowerCase(),gt==="select"||gt==="input"&&ft.type==="file")var Ze=yp;else if(xp(ft))if(Mp)Ze=Cx;else{Ze=wx;var re=Ax}else gt=ft.nodeName,!gt||gt.toLowerCase()!=="input"||ft.type!=="checkbox"&&ft.type!=="radio"?ct&&nn(ct.elementType)&&(Ze=yp):Ze=Rx;if(Ze&&(Ze=Ze(e,ct))){Sp(wt,Ze,a,Mt);break t}re&&re(e,ft,ct),e==="focusout"&&ct&&ft.type==="number"&&ct.memoizedProps.value!=null&&Me(ft,"number",ft.value)}switch(re=ct?Zi(ct):window,e){case"focusin":(xp(re)||re.contentEditable==="true")&&(sr=re,gu=ct,uo=null);break;case"focusout":uo=gu=sr=null;break;case"mousedown":_u=!0;break;case"contextmenu":case"mouseup":case"dragend":_u=!1,Dp(wt,a,Mt);break;case"selectionchange":if(Nx)break;case"keydown":case"keyup":Dp(wt,a,Mt)}var we;if(du)t:{switch(e){case"compositionstart":var ze="onCompositionStart";break t;case"compositionend":ze="onCompositionEnd";break t;case"compositionupdate":ze="onCompositionUpdate";break t}ze=void 0}else ar?_p(e,a)&&(ze="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ze="onCompositionStart");ze&&(pp&&a.locale!=="ko"&&(ar||ze!=="onCompositionStart"?ze==="onCompositionEnd"&&ar&&(we=cp()):(ja=Mt,ou="value"in ja?ja.value:ja.textContent,ar=!0)),re=nc(ct,ze),0<re.length&&(ze=new dp(ze,e,null,a,Mt),wt.push({event:ze,listeners:re}),we?ze.data=we:(we=vp(a),we!==null&&(ze.data=we)))),(we=yx?Mx(e,a):bx(e,a))&&(ze=nc(ct,"onBeforeInput"),0<ze.length&&(re=new dp("onBeforeInput","beforeinput",null,a,Mt),wt.push({event:re,listeners:ze}),re.data=we)),pS(wt,e,ct,a,Mt)}ng(wt,n)})}function Io(e,n,a){return{instance:e,listener:n,currentTarget:a}}function nc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=no(e,a),u!=null&&o.unshift(Io(e,u,f)),u=no(e,n),u!=null&&o.push(Io(e,u,f))),e.tag===3)return o;e=e.return}return[]}function vS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ag(e,n,a,o,u){for(var f=n._reactName,_=[];a!==null&&a!==o;){var w=a,V=w.alternate,ct=w.stateNode;if(w=w.tag,V!==null&&V===o)break;w!==5&&w!==26&&w!==27||ct===null||(V=ct,u?(ct=no(a,f),ct!=null&&_.unshift(Io(a,ct,V))):u||(ct=no(a,f),ct!=null&&_.push(Io(a,ct,V)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var xS=/\r\n?/g,SS=/\u0000|\uFFFD/g;function sg(e){return(typeof e=="string"?e:""+e).replace(xS,`
`).replace(SS,"")}function rg(e,n){return n=sg(n),sg(e)===n}function ln(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||bn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&bn(e,""+o);break;case"className":Yt(e,"class",o);break;case"tabIndex":Yt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Yt(e,a,o);break;case"style":di(e,o,f);break;case"data":if(n!=="object"){Yt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=As(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&ln(e,n,"name",u.name,u,null),ln(e,n,"formEncType",u.formEncType,u,null),ln(e,n,"formMethod",u.formMethod,u,null),ln(e,n,"formTarget",u.formTarget,u,null)):(ln(e,n,"encType",u.encType,u,null),ln(e,n,"method",u.method,u,null),ln(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=As(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ua);break;case"onScroll":o!=null&&Oe("scroll",e);break;case"onScrollEnd":o!=null&&Oe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=As(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Oe("beforetoggle",e),Oe("toggle",e),Gt(e,"popover",o);break;case"xlinkActuate":Wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Wt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Wt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Wt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Wt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Gt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ki.get(a)||a,Gt(e,a,o))}}function kf(e,n,a,o,u,f){switch(a){case"style":di(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?bn(e,o):(typeof o=="number"||typeof o=="bigint")&&bn(e,""+o);break;case"onScroll":o!=null&&Oe("scroll",e);break;case"onScrollEnd":o!=null&&Oe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ua);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!M.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Un]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Gt(e,a,o)}}}function kn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Oe("error",e),Oe("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ln(e,n,f,_,a,null)}}u&&ln(e,n,"srcSet",a.srcSet,a,null),o&&ln(e,n,"src",a.src,a,null);return;case"input":Oe("invalid",e);var w=f=_=u=null,V=null,ct=null;for(o in a)if(a.hasOwnProperty(o)){var Mt=a[o];if(Mt!=null)switch(o){case"name":u=Mt;break;case"type":_=Mt;break;case"checked":V=Mt;break;case"defaultChecked":ct=Mt;break;case"value":f=Mt;break;case"defaultValue":w=Mt;break;case"children":case"dangerouslySetInnerHTML":if(Mt!=null)throw Error(s(137,n));break;default:ln(e,n,o,Mt,a,null)}}Mn(e,f,w,V,ct,_,u,!1);return;case"select":Oe("invalid",e),o=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(w=a[u],w!=null))switch(u){case"value":f=w;break;case"defaultValue":_=w;break;case"multiple":o=w;default:ln(e,n,u,w,a,null)}n=f,a=_,e.multiple=!!o,n!=null?un(e,!!o,n,!1):a!=null&&un(e,!!o,a,!0);return;case"textarea":Oe("invalid",e),f=u=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(w=a[_],w!=null))switch(_){case"value":o=w;break;case"defaultValue":u=w;break;case"children":f=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:ln(e,n,_,w,a,null)}Ln(e,o,u,f);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(o=a[V],o!=null))switch(V){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:ln(e,n,V,o,a,null)}return;case"dialog":Oe("beforetoggle",e),Oe("toggle",e),Oe("cancel",e),Oe("close",e);break;case"iframe":case"object":Oe("load",e);break;case"video":case"audio":for(o=0;o<Po.length;o++)Oe(Po[o],e);break;case"image":Oe("error",e),Oe("load",e);break;case"details":Oe("toggle",e);break;case"embed":case"source":case"link":Oe("error",e),Oe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ct in a)if(a.hasOwnProperty(ct)&&(o=a[ct],o!=null))switch(ct){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ln(e,n,ct,o,a,null)}return;default:if(nn(n)){for(Mt in a)a.hasOwnProperty(Mt)&&(o=a[Mt],o!==void 0&&kf(e,n,Mt,o,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(o=a[w],o!=null&&ln(e,n,w,o,a,null))}function yS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,w=null,V=null,ct=null,Mt=null;for(gt in a){var wt=a[gt];if(a.hasOwnProperty(gt)&&wt!=null)switch(gt){case"checked":break;case"value":break;case"defaultValue":V=wt;default:o.hasOwnProperty(gt)||ln(e,n,gt,null,o,wt)}}for(var ft in o){var gt=o[ft];if(wt=a[ft],o.hasOwnProperty(ft)&&(gt!=null||wt!=null))switch(ft){case"type":f=gt;break;case"name":u=gt;break;case"checked":ct=gt;break;case"defaultChecked":Mt=gt;break;case"value":_=gt;break;case"defaultValue":w=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(s(137,n));break;default:gt!==wt&&ln(e,n,ft,gt,o,wt)}}jt(e,_,w,V,ct,Mt,f,u);return;case"select":gt=_=w=ft=null;for(f in a)if(V=a[f],a.hasOwnProperty(f)&&V!=null)switch(f){case"value":break;case"multiple":gt=V;default:o.hasOwnProperty(f)||ln(e,n,f,null,o,V)}for(u in o)if(f=o[u],V=a[u],o.hasOwnProperty(u)&&(f!=null||V!=null))switch(u){case"value":ft=f;break;case"defaultValue":w=f;break;case"multiple":_=f;default:f!==V&&ln(e,n,u,f,o,V)}n=w,a=_,o=gt,ft!=null?un(e,!!a,ft,!1):!!o!=!!a&&(n!=null?un(e,!!a,n,!0):un(e,!!a,a?[]:"",!1));return;case"textarea":gt=ft=null;for(w in a)if(u=a[w],a.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:ln(e,n,w,null,o,u)}for(_ in o)if(u=o[_],f=a[_],o.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":ft=u;break;case"defaultValue":gt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&ln(e,n,_,u,o,f)}Re(e,ft,gt);return;case"option":for(var ie in a)if(ft=a[ie],a.hasOwnProperty(ie)&&ft!=null&&!o.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:ln(e,n,ie,null,o,ft)}for(V in o)if(ft=o[V],gt=a[V],o.hasOwnProperty(V)&&ft!==gt&&(ft!=null||gt!=null))switch(V){case"selected":e.selected=ft&&typeof ft!="function"&&typeof ft!="symbol";break;default:ln(e,n,V,ft,o,gt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _e in a)ft=a[_e],a.hasOwnProperty(_e)&&ft!=null&&!o.hasOwnProperty(_e)&&ln(e,n,_e,null,o,ft);for(ct in o)if(ft=o[ct],gt=a[ct],o.hasOwnProperty(ct)&&ft!==gt&&(ft!=null||gt!=null))switch(ct){case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:ln(e,n,ct,ft,o,gt)}return;default:if(nn(n)){for(var cn in a)ft=a[cn],a.hasOwnProperty(cn)&&ft!==void 0&&!o.hasOwnProperty(cn)&&kf(e,n,cn,void 0,o,ft);for(Mt in o)ft=o[Mt],gt=a[Mt],!o.hasOwnProperty(Mt)||ft===gt||ft===void 0&&gt===void 0||kf(e,n,Mt,ft,o,gt);return}}for(var it in a)ft=a[it],a.hasOwnProperty(it)&&ft!=null&&!o.hasOwnProperty(it)&&ln(e,n,it,null,o,ft);for(wt in o)ft=o[wt],gt=a[wt],!o.hasOwnProperty(wt)||ft===gt||ft==null&&gt==null||ln(e,n,wt,ft,o,gt)}function og(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function MS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,_=u.initiatorType,w=u.duration;if(f&&w&&og(_)){for(_=0,w=u.responseEnd,o+=1;o<a.length;o++){var V=a[o],ct=V.startTime;if(ct>w)break;var Mt=V.transferSize,wt=V.initiatorType;Mt&&og(wt)&&(V=V.responseEnd,_+=Mt*(V<w?1:(w-ct)/(V-ct)))}if(--o,n+=8*(f+_)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Xf=null,Wf=null;function ic(e){return e.nodeType===9?e:e.ownerDocument}function lg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function jf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var qf=null;function bS(){var e=window.event;return e&&e.type==="popstate"?e===qf?!1:(qf=e,!0):(qf=null,!1)}var ug=typeof setTimeout=="function"?setTimeout:void 0,ES=typeof clearTimeout=="function"?clearTimeout:void 0,fg=typeof Promise=="function"?Promise:void 0,TS=typeof queueMicrotask=="function"?queueMicrotask:typeof fg<"u"?function(e){return fg.resolve(null).then(e).catch(AS)}:ug;function AS(e){setTimeout(function(){throw e})}function cs(e){return e==="head"}function dg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Ur(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")zo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,zo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,w=f.nodeName;f[Pi]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&zo(e.ownerDocument.body);a=u}while(a);Ur(n)}function hg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Yf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Yf(a),Xa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function wS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Pi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Di(e.nextSibling),e===null)break}return null}function RS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Di(e.nextSibling),e===null))return null;return e}function pg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Di(e.nextSibling),e===null))return null;return e}function Zf(e){return e.data==="$?"||e.data==="$~"}function Kf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function CS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Di(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Qf=null;function mg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Di(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function gg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function _g(e,n,a){switch(n=ic(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function zo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Xa(e)}var Ni=new Map,vg=new Set;function ac(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Aa=B.d;B.d={f:DS,r:NS,D:US,C:LS,L:OS,m:PS,X:zS,S:IS,M:BS};function DS(){var e=Aa.f(),n=Zl();return e||n}function NS(e){var n=zi(e);n!==null&&n.tag===5&&n.type==="form"?Pm(n):Aa.r(e)}var Cr=typeof document>"u"?null:document;function xg(e,n,a){var o=Cr;if(o&&typeof n=="string"&&n){var u=Qe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),vg.has(u)||(vg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),kn(n,"link",e),ut(n),o.head.appendChild(n)))}}function US(e){Aa.D(e),xg("dns-prefetch",e,null)}function LS(e,n){Aa.C(e,n),xg("preconnect",e,n)}function OS(e,n,a){Aa.L(e,n,a);var o=Cr;if(o&&e&&n){var u='link[rel="preload"][as="'+Qe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Qe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Qe(a.imageSizes)+'"]')):u+='[href="'+Qe(e)+'"]';var f=u;switch(n){case"style":f=Dr(e);break;case"script":f=Nr(e)}Ni.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ni.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Bo(f))||n==="script"&&o.querySelector(Fo(f))||(n=o.createElement("link"),kn(n,"link",e),ut(n),o.head.appendChild(n)))}}function PS(e,n){Aa.m(e,n);var a=Cr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Qe(o)+'"][href="'+Qe(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Nr(e)}if(!Ni.has(f)&&(e=x({rel:"modulepreload",href:e},n),Ni.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Fo(f)))return}o=a.createElement("link"),kn(o,"link",e),ut(o),a.head.appendChild(o)}}}function IS(e,n,a){Aa.S(e,n,a);var o=Cr;if(o&&e){var u=Dt(o).hoistableStyles,f=Dr(e);n=n||"default";var _=u.get(f);if(!_){var w={loading:0,preload:null};if(_=o.querySelector(Bo(f)))w.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ni.get(f))&&Jf(e,a);var V=_=o.createElement("link");ut(V),kn(V,"link",e),V._p=new Promise(function(ct,Mt){V.onload=ct,V.onerror=Mt}),V.addEventListener("load",function(){w.loading|=1}),V.addEventListener("error",function(){w.loading|=2}),w.loading|=4,sc(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:w},u.set(f,_)}}}function zS(e,n){Aa.X(e,n);var a=Cr;if(a&&e){var o=Dt(a).hoistableScripts,u=Nr(e),f=o.get(u);f||(f=a.querySelector(Fo(u)),f||(e=x({src:e,async:!0},n),(n=Ni.get(u))&&$f(e,n),f=a.createElement("script"),ut(f),kn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function BS(e,n){Aa.M(e,n);var a=Cr;if(a&&e){var o=Dt(a).hoistableScripts,u=Nr(e),f=o.get(u);f||(f=a.querySelector(Fo(u)),f||(e=x({src:e,async:!0,type:"module"},n),(n=Ni.get(u))&&$f(e,n),f=a.createElement("script"),ut(f),kn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Sg(e,n,a,o){var u=(u=st.current)?ac(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Dr(a.href),a=Dt(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Dr(a.href);var f=Dt(u).hoistableStyles,_=f.get(e);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=u.querySelector(Bo(e)))&&!f._p&&(_.instance=f,_.state.loading=5),Ni.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ni.set(e,a),f||FS(u,e,a,_.state))),n&&o===null)throw Error(s(528,""));return _}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Nr(a),a=Dt(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Dr(e){return'href="'+Qe(e)+'"'}function Bo(e){return'link[rel="stylesheet"]['+e+"]"}function yg(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function FS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),kn(n,"link",a),ut(n),e.head.appendChild(n))}function Nr(e){return'[src="'+Qe(e)+'"]'}function Fo(e){return"script[async]"+e}function Mg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Qe(a.href)+'"]');if(o)return n.instance=o,ut(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),ut(o),kn(o,"style",u),sc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Dr(a.href);var f=e.querySelector(Bo(u));if(f)return n.state.loading|=4,n.instance=f,ut(f),f;o=yg(a),(u=Ni.get(u))&&Jf(o,u),f=(e.ownerDocument||e).createElement("link"),ut(f);var _=f;return _._p=new Promise(function(w,V){_.onload=w,_.onerror=V}),kn(f,"link",o),n.state.loading|=4,sc(f,a.precedence,e),n.instance=f;case"script":return f=Nr(a.src),(u=e.querySelector(Fo(f)))?(n.instance=u,ut(u),u):(o=a,(u=Ni.get(f))&&(o=x({},a),$f(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),ut(u),kn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,sc(o,a.precedence,e));return n.instance}function sc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,_=0;_<o.length;_++){var w=o[_];if(w.dataset.precedence===n)f=w;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Jf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function $f(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var rc=null;function bg(e,n,a){if(rc===null){var o=new Map,u=rc=new Map;u.set(a,o)}else u=rc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Pi]||f[hn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var w=o.get(_);w?w.push(f):o.set(_,[f])}}return o}function Eg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function GS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Tg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function HS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Dr(o.href),f=n.querySelector(Bo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=oc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,ut(f);return}f=n.ownerDocument||n,o=yg(o),(u=Ni.get(u))&&Jf(o,u),f=f.createElement("link"),ut(f);var _=f;_._p=new Promise(function(w,V){_.onload=w,_.onerror=V}),kn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=oc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var td=0;function VS(e,n){return e.stylesheets&&e.count===0&&cc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&cc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&td===0&&(td=62500*MS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&cc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>td?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function oc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)cc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var lc=null;function cc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,lc=new Map,n.forEach(kS,e),lc=null,oc.call(e))}function kS(e,n){if(!(n.state.loading&4)){var a=lc.get(e);if(a)var o=a.get(null);else{a=new Map,lc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||o,f===o&&a.set(null,u),a.set(_,u),this.count++,o=oc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Go={$$typeof:I,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function XS(e,n,a,o,u,f,_,w,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ee(0),this.hiddenUpdates=ee(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function Ag(e,n,a,o,u,f,_,w,V,ct,Mt,wt){return e=new XS(e,n,a,_,V,ct,Mt,wt,w),n=1,f===!0&&(n|=24),f=pi(3,null,null,n),e.current=f,f.stateNode=e,n=Uu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Iu(f),e}function wg(e){return e?(e=lr,e):lr}function Rg(e,n,a,o,u,f){u=wg(u),o.context===null?o.context=u:o.pendingContext=u,o=Ja(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=$a(e,o,n),a!==null&&(oi(a,e,n),vo(a,e,n))}function Cg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function ed(e,n){Cg(e,n),(e=e.alternate)&&Cg(e,n)}function Dg(e){if(e.tag===13||e.tag===31){var n=Ds(e,67108864);n!==null&&oi(n,e,67108864),ed(e,67108864)}}function Ng(e){if(e.tag===13||e.tag===31){var n=xi();n=qi(n);var a=Ds(e,n);a!==null&&oi(a,e,n),ed(e,n)}}var uc=!0;function WS(e,n,a,o){var u=L.T;L.T=null;var f=B.p;try{B.p=2,nd(e,n,a,o)}finally{B.p=f,L.T=u}}function jS(e,n,a,o){var u=L.T;L.T=null;var f=B.p;try{B.p=8,nd(e,n,a,o)}finally{B.p=f,L.T=u}}function nd(e,n,a,o){if(uc){var u=id(o);if(u===null)Vf(e,n,o,fc,a),Lg(e,o);else if(YS(u,e,n,a,o))o.stopPropagation();else if(Lg(e,o),n&4&&-1<qS.indexOf(e)){for(;u!==null;){var f=zi(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Bt(f.pendingLanes);if(_!==0){var w=f;for(w.pendingLanes|=2,w.entangledLanes|=2;_;){var V=1<<31-Ht(_);w.entanglements[1]|=V,_&=~V}ta(f),($e&6)===0&&(ql=It()+500,Oo(0))}}break;case 31:case 13:w=Ds(f,2),w!==null&&oi(w,f,2),Zl(),ed(f,2)}if(f=id(o),f===null&&Vf(e,n,o,fc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Vf(e,n,o,null,a)}}function id(e){return e=au(e),ad(e)}var fc=null;function ad(e){if(fc=null,e=Ii(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return fc=e,null}function Ug(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ye()){case N:return 2;case E:return 8;case at:case bt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var sd=!1,us=null,fs=null,ds=null,Ho=new Map,Vo=new Map,hs=[],qS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Lg(e,n){switch(e){case"focusin":case"focusout":us=null;break;case"dragenter":case"dragleave":fs=null;break;case"mouseover":case"mouseout":ds=null;break;case"pointerover":case"pointerout":Ho.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(n.pointerId)}}function ko(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=zi(n),n!==null&&Dg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function YS(e,n,a,o,u){switch(n){case"focusin":return us=ko(us,e,n,a,o,u),!0;case"dragenter":return fs=ko(fs,e,n,a,o,u),!0;case"mouseover":return ds=ko(ds,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Ho.set(f,ko(Ho.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Vo.set(f,ko(Vo.get(f)||null,e,n,a,o,u)),!0}return!1}function Og(e){var n=Ii(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Ha(e.priority,function(){Ng(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,Ha(e.priority,function(){Ng(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function dc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=id(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);iu=o,a.target.dispatchEvent(o),iu=null}else return n=zi(a),n!==null&&Dg(n),e.blockedOn=a,!1;n.shift()}return!0}function Pg(e,n,a){dc(e)&&a.delete(n)}function ZS(){sd=!1,us!==null&&dc(us)&&(us=null),fs!==null&&dc(fs)&&(fs=null),ds!==null&&dc(ds)&&(ds=null),Ho.forEach(Pg),Vo.forEach(Pg)}function hc(e,n){e.blockedOn===n&&(e.blockedOn=null,sd||(sd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ZS)))}var pc=null;function Ig(e){pc!==e&&(pc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){pc===e&&(pc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(ad(o||a)===null)continue;break}var f=zi(a);f!==null&&(e.splice(n,3),n-=3,nf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Ur(e){function n(V){return hc(V,e)}us!==null&&hc(us,e),fs!==null&&hc(fs,e),ds!==null&&hc(ds,e),Ho.forEach(n),Vo.forEach(n);for(var a=0;a<hs.length;a++){var o=hs[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<hs.length&&(a=hs[0],a.blockedOn===null);)Og(a),a.blockedOn===null&&hs.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],_=u[Un]||null;if(typeof f=="function")_||Ig(a);else if(_){var w=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[Un]||null)w=_.formAction;else if(ad(u)!==null)continue}else w=_.action;typeof w=="function"?a[o+1]=w:(a.splice(o,3),o-=3),Ig(a)}}}function zg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function rd(e){this._internalRoot=e}mc.prototype.render=rd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=xi();Rg(a,o,e,n,null,null)},mc.prototype.unmount=rd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Rg(e.current,2,null,e,null,null),Zl(),n[Oi]=null}};function mc(e){this._internalRoot=e}mc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ga();e={blockedOn:null,target:e,priority:n};for(var a=0;a<hs.length&&n!==0&&n<hs[a].priority;a++);hs.splice(a,0,e),a===0&&Og(e)}};var Bg=t.version;if(Bg!=="19.2.7")throw Error(s(527,Bg,"19.2.7"));B.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=h(n),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var KS={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{ot=gc.inject(KS),mt=gc}catch{}}return Wo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Wm,f=jm,_=qm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Ag(e,1,!1,null,null,a,o,null,u,f,_,zg),e[Oi]=n.current,Hf(e),new rd(n)},Wo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=Wm,_=jm,w=qm,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=Ag(e,1,!0,n,a??null,o,u,V,f,_,w,zg),n.context=wg(null),a=n.current,o=xi(),o=qi(o),u=Ja(o),u.callback=null,$a(a,u,o),a=o,n.current.lanes=a,de(n,a),ta(n),e[Oi]=n.current,Hf(e),new mc(n)},Wo.version="19.2.7",Wo}var Yg;function ry(){if(Yg)return cd.exports;Yg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),cd.exports=sy(),cd.exports}var oy=ry();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gh="184",ly=0,Zg=1,cy=2,Hc=1,lv=2,$o=3,bs=0,ui=1,Ua=2,Oa=0,qr=1,Kg=2,Qg=3,Jg=4,uy=5,Ys=100,fy=101,dy=102,hy=103,py=104,my=200,gy=201,_y=202,vy=203,qd=204,Yd=205,xy=206,Sy=207,yy=208,My=209,by=210,Ey=211,Ty=212,Ay=213,wy=214,Zd=0,Kd=1,Qd=2,Zr=3,Jd=4,$d=5,th=6,eh=7,cv=0,Ry=1,Cy=2,ra=0,uv=1,fv=2,dv=3,hv=4,pv=5,mv=6,gv=7,_v=300,Js=301,Kr=302,hd=303,pd=304,$c=306,Ia=1e3,La=1001,nh=1002,Xn=1003,Dy=1004,_c=1005,Qn=1006,md=1007,Ks=1008,bi=1009,vv=1010,xv=1011,el=1012,Hh=1013,la=1014,aa=1015,za=1016,Vh=1017,kh=1018,nl=1020,Sv=35902,yv=35899,Mv=1021,bv=1022,Wi=1023,Ba=1026,Qs=1027,Ev=1028,Xh=1029,$s=1030,Wh=1031,jh=1033,Vc=33776,kc=33777,Xc=33778,Wc=33779,ih=35840,ah=35841,sh=35842,rh=35843,oh=36196,lh=37492,ch=37496,uh=37488,fh=37489,qc=37490,dh=37491,hh=37808,ph=37809,mh=37810,gh=37811,_h=37812,vh=37813,xh=37814,Sh=37815,yh=37816,Mh=37817,bh=37818,Eh=37819,Th=37820,Ah=37821,wh=36492,Rh=36494,Ch=36495,Dh=36283,Nh=36284,Yc=36285,Uh=36286,Ny=3200,Lh=0,Uy=1,ys="",Li="srgb",Zc="srgb-linear",Kc="linear",rn="srgb",Lr=7680,$g=519,Ly=512,Oy=513,Py=514,qh=515,Iy=516,zy=517,Yh=518,By=519,t_=35044,e_="300 es",sa=2e3,il=2001;function Fy(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Qc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Gy(){const r=Qc("canvas");return r.style.display="block",r}const n_={};function i_(...r){const t="THREE."+r.shift();console.log(t,...r)}function Tv(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Se(...r){r=Tv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function je(...r){r=Tv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function Oh(...r){const t=r.join(" ");t in n_||(n_[t]=!0,Se(...r))}function Hy(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const Vy={[Zd]:Kd,[Qd]:th,[Jd]:eh,[Zr]:$d,[Kd]:Zd,[th]:Qd,[eh]:Jd,[$d]:Zr};class er{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const Zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gd=Math.PI/180,Ph=180/Math.PI;function rl(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Zn[r&255]+Zn[r>>8&255]+Zn[r>>16&255]+Zn[r>>24&255]+"-"+Zn[t&255]+Zn[t>>8&255]+"-"+Zn[t>>16&15|64]+Zn[t>>24&255]+"-"+Zn[i&63|128]+Zn[i>>8&255]+"-"+Zn[i>>16&255]+Zn[i>>24&255]+Zn[s&255]+Zn[s>>8&255]+Zn[s>>16&255]+Zn[s>>24&255]).toLowerCase()}function Fe(r,t,i){return Math.max(t,Math.min(i,r))}function ky(r,t){return(r%t+t)%t}function _d(r,t,i){return(1-i)*r+i*t}function jo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function li(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const np=class np{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Fe(this.x,t.x,i.x),this.y=Fe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Fe(this.x,t,i),this.y=Fe(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Fe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Fe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*s-d*l+t.x,this.y=c*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};np.prototype.isVector2=!0;let qe=np;class $r{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,d,p){let m=s[l+0],h=s[l+1],S=s[l+2],x=s[l+3],g=c[d+0],b=c[d+1],A=c[d+2],D=c[d+3];if(x!==D||m!==g||h!==b||S!==A){let y=m*g+h*b+S*A+x*D;y<0&&(g=-g,b=-b,A=-A,D=-D,y=-y);let v=1-p;if(y<.9995){const R=Math.acos(y),I=Math.sin(R);v=Math.sin(v*R)/I,p=Math.sin(p*R)/I,m=m*v+g*p,h=h*v+b*p,S=S*v+A*p,x=x*v+D*p}else{m=m*v+g*p,h=h*v+b*p,S=S*v+A*p,x=x*v+D*p;const R=1/Math.sqrt(m*m+h*h+S*S+x*x);m*=R,h*=R,S*=R,x*=R}}t[i]=m,t[i+1]=h,t[i+2]=S,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,c,d){const p=s[l],m=s[l+1],h=s[l+2],S=s[l+3],x=c[d],g=c[d+1],b=c[d+2],A=c[d+3];return t[i]=p*A+S*x+m*b-h*g,t[i+1]=m*A+S*g+h*x-p*b,t[i+2]=h*A+S*b+p*g-m*x,t[i+3]=S*A-p*x-m*g-h*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,d=t._order,p=Math.cos,m=Math.sin,h=p(s/2),S=p(l/2),x=p(c/2),g=m(s/2),b=m(l/2),A=m(c/2);switch(d){case"XYZ":this._x=g*S*x+h*b*A,this._y=h*b*x-g*S*A,this._z=h*S*A+g*b*x,this._w=h*S*x-g*b*A;break;case"YXZ":this._x=g*S*x+h*b*A,this._y=h*b*x-g*S*A,this._z=h*S*A-g*b*x,this._w=h*S*x+g*b*A;break;case"ZXY":this._x=g*S*x-h*b*A,this._y=h*b*x+g*S*A,this._z=h*S*A+g*b*x,this._w=h*S*x-g*b*A;break;case"ZYX":this._x=g*S*x-h*b*A,this._y=h*b*x+g*S*A,this._z=h*S*A-g*b*x,this._w=h*S*x+g*b*A;break;case"YZX":this._x=g*S*x+h*b*A,this._y=h*b*x+g*S*A,this._z=h*S*A-g*b*x,this._w=h*S*x-g*b*A;break;case"XZY":this._x=g*S*x-h*b*A,this._y=h*b*x-g*S*A,this._z=h*S*A+g*b*x,this._w=h*S*x+g*b*A;break;default:Se("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],S=i[6],x=i[10],g=s+p+x;if(g>0){const b=.5/Math.sqrt(g+1);this._w=.25/b,this._x=(S-m)*b,this._y=(c-h)*b,this._z=(d-l)*b}else if(s>p&&s>x){const b=2*Math.sqrt(1+s-p-x);this._w=(S-m)/b,this._x=.25*b,this._y=(l+d)/b,this._z=(c+h)/b}else if(p>x){const b=2*Math.sqrt(1+p-s-x);this._w=(c-h)/b,this._x=(l+d)/b,this._y=.25*b,this._z=(m+S)/b}else{const b=2*Math.sqrt(1+x-s-p);this._w=(d-l)/b,this._x=(c+h)/b,this._y=(m+S)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,d=t._w,p=i._x,m=i._y,h=i._z,S=i._w;return this._x=s*S+d*p+l*h-c*m,this._y=l*S+d*m+c*p-s*h,this._z=c*S+d*h+s*m-l*p,this._w=d*S-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,d=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),S=Math.sin(h);m=Math.sin(m*h)/S,i=Math.sin(i*h)/S,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ip=class ip{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(a_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(a_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,d=t.y,p=t.z,m=t.w,h=2*(d*l-p*s),S=2*(p*i-c*l),x=2*(c*s-d*i);return this.x=i+m*h+d*x-p*S,this.y=s+m*S+p*h-c*x,this.z=l+m*x+c*S-d*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Fe(this.x,t.x,i.x),this.y=Fe(this.y,t.y,i.y),this.z=Fe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Fe(this.x,t,i),this.y=Fe(this.y,t,i),this.z=Fe(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Fe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-s*m,this.z=s*p-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return vd.copy(this).projectOnVector(t),this.sub(vd)}reflect(t){return this.sub(vd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Fe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ip.prototype.isVector3=!0;let X=ip;const vd=new X,a_=new $r,ap=class ap{constructor(t,i,s,l,c,d,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,p,m,h)}set(t,i,s,l,c,d,p,m,h){const S=this.elements;return S[0]=t,S[1]=l,S[2]=p,S[3]=i,S[4]=c,S[5]=m,S[6]=s,S[7]=d,S[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],p=s[3],m=s[6],h=s[1],S=s[4],x=s[7],g=s[2],b=s[5],A=s[8],D=l[0],y=l[3],v=l[6],R=l[1],I=l[4],U=l[7],H=l[2],C=l[5],z=l[8];return c[0]=d*D+p*R+m*H,c[3]=d*y+p*I+m*C,c[6]=d*v+p*U+m*z,c[1]=h*D+S*R+x*H,c[4]=h*y+S*I+x*C,c[7]=h*v+S*U+x*z,c[2]=g*D+b*R+A*H,c[5]=g*y+b*I+A*C,c[8]=g*v+b*U+A*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],S=t[8];return i*d*S-i*p*h-s*c*S+s*p*m+l*c*h-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],S=t[8],x=S*d-p*h,g=p*m-S*c,b=h*c-d*m,A=i*x+s*g+l*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/A;return t[0]=x*D,t[1]=(l*h-S*s)*D,t[2]=(p*s-l*d)*D,t[3]=g*D,t[4]=(S*i-l*m)*D,t[5]=(l*c-p*i)*D,t[6]=b*D,t[7]=(s*m-h*i)*D,t[8]=(d*i-s*c)*D,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*d+h*p)+d+t,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(xd.makeScale(t,i)),this}rotate(t){return this.premultiply(xd.makeRotation(-t)),this}translate(t,i){return this.premultiply(xd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ap.prototype.isMatrix3=!0;let Te=ap;const xd=new Te,s_=new Te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),r_=new Te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xy(){const r={enabled:!0,workingColorSpace:Zc,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===rn&&(l.r=Pa(l.r),l.g=Pa(l.g),l.b=Pa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===rn&&(l.r=Yr(l.r),l.g=Yr(l.g),l.b=Yr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ys?Kc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Oh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Oh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Zc]:{primaries:t,whitePoint:s,transfer:Kc,toXYZ:s_,fromXYZ:r_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Li},outputColorSpaceConfig:{drawingBufferColorSpace:Li}},[Li]:{primaries:t,whitePoint:s,transfer:rn,toXYZ:s_,fromXYZ:r_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Li}}}),r}const ke=Xy();function Pa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Yr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Or;class Wy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Or===void 0&&(Or=Qc("canvas")),Or.width=t.width,Or.height=t.height;const l=Or.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Or}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Qc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Pa(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Pa(i[s]/255)*255):i[s]=Pa(i[s]);return{data:i,width:t.width,height:t.height}}else return Se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jy=0;class Zh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=rl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(Sd(l[d].image)):c.push(Sd(l[d]))}else c=Sd(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Sd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Wy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Se("Texture: Unable to serialize Texture."),{})}let qy=0;const yd=new X;class Jn extends er{constructor(t=Jn.DEFAULT_IMAGE,i=Jn.DEFAULT_MAPPING,s=La,l=La,c=Qn,d=Ks,p=Wi,m=bi,h=Jn.DEFAULT_ANISOTROPY,S=ys){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=rl(),this.name="",this.source=new Zh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yd).x}get height(){return this.source.getSize(yd).y}get depth(){return this.source.getSize(yd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){Se(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Se(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_v)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ia:t.x=t.x-Math.floor(t.x);break;case La:t.x=t.x<0?0:1;break;case nh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ia:t.y=t.y-Math.floor(t.y);break;case La:t.y=t.y<0?0:1;break;case nh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=_v;Jn.DEFAULT_ANISOTROPY=1;const sp=class sp{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,h=m[0],S=m[4],x=m[8],g=m[1],b=m[5],A=m[9],D=m[2],y=m[6],v=m[10];if(Math.abs(S-g)<.01&&Math.abs(x-D)<.01&&Math.abs(A-y)<.01){if(Math.abs(S+g)<.1&&Math.abs(x+D)<.1&&Math.abs(A+y)<.1&&Math.abs(h+b+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(h+1)/2,U=(b+1)/2,H=(v+1)/2,C=(S+g)/4,z=(x+D)/4,T=(A+y)/4;return I>U&&I>H?I<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(I),l=C/s,c=z/s):U>H?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=C/l,c=T/l):H<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),s=z/c,l=T/c),this.set(s,l,c,i),this}let R=Math.sqrt((y-A)*(y-A)+(x-D)*(x-D)+(g-S)*(g-S));return Math.abs(R)<.001&&(R=1),this.x=(y-A)/R,this.y=(x-D)/R,this.z=(g-S)/R,this.w=Math.acos((h+b+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Fe(this.x,t.x,i.x),this.y=Fe(this.y,t.y,i.y),this.z=Fe(this.z,t.z,i.z),this.w=Fe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Fe(this.x,t,i),this.y=Fe(this.y,t,i),this.z=Fe(this.z,t,i),this.w=Fe(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Fe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};sp.prototype.isVector4=!0;let Sn=sp;class Yy extends er{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Sn(0,0,t,i),this.scissorTest=!1,this.viewport=new Sn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Jn(l),d=s.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Qn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Zh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oa extends Yy{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Av extends Jn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zy extends Jn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jc=class Jc{constructor(t,i,s,l,c,d,p,m,h,S,x,g,b,A,D,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,p,m,h,S,x,g,b,A,D,y)}set(t,i,s,l,c,d,p,m,h,S,x,g,b,A,D,y){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=d,v[9]=p,v[13]=m,v[2]=h,v[6]=S,v[10]=x,v[14]=g,v[3]=b,v[7]=A,v[11]=D,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jc().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Pr.setFromMatrixColumn(t,0).length(),c=1/Pr.setFromMatrixColumn(t,1).length(),d=1/Pr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,d=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),S=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const g=d*S,b=d*x,A=p*S,D=p*x;i[0]=m*S,i[4]=-m*x,i[8]=h,i[1]=b+A*h,i[5]=g-D*h,i[9]=-p*m,i[2]=D-g*h,i[6]=A+b*h,i[10]=d*m}else if(t.order==="YXZ"){const g=m*S,b=m*x,A=h*S,D=h*x;i[0]=g+D*p,i[4]=A*p-b,i[8]=d*h,i[1]=d*x,i[5]=d*S,i[9]=-p,i[2]=b*p-A,i[6]=D+g*p,i[10]=d*m}else if(t.order==="ZXY"){const g=m*S,b=m*x,A=h*S,D=h*x;i[0]=g-D*p,i[4]=-d*x,i[8]=A+b*p,i[1]=b+A*p,i[5]=d*S,i[9]=D-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(t.order==="ZYX"){const g=d*S,b=d*x,A=p*S,D=p*x;i[0]=m*S,i[4]=A*h-b,i[8]=g*h+D,i[1]=m*x,i[5]=D*h+g,i[9]=b*h-A,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(t.order==="YZX"){const g=d*m,b=d*h,A=p*m,D=p*h;i[0]=m*S,i[4]=D-g*x,i[8]=A*x+b,i[1]=x,i[5]=d*S,i[9]=-p*S,i[2]=-h*S,i[6]=b*x+A,i[10]=g-D*x}else if(t.order==="XZY"){const g=d*m,b=d*h,A=p*m,D=p*h;i[0]=m*S,i[4]=-x,i[8]=h*S,i[1]=g*x+D,i[5]=d*S,i[9]=b*x-A,i[2]=A*x-b,i[6]=p*S,i[10]=D*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ky,t,Qy)}lookAt(t,i,s){const l=this.elements;return Si.subVectors(t,i),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),ms.crossVectors(s,Si),ms.lengthSq()===0&&(Math.abs(s.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),ms.crossVectors(s,Si)),ms.normalize(),vc.crossVectors(Si,ms),l[0]=ms.x,l[4]=vc.x,l[8]=Si.x,l[1]=ms.y,l[5]=vc.y,l[9]=Si.y,l[2]=ms.z,l[6]=vc.z,l[10]=Si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],p=s[4],m=s[8],h=s[12],S=s[1],x=s[5],g=s[9],b=s[13],A=s[2],D=s[6],y=s[10],v=s[14],R=s[3],I=s[7],U=s[11],H=s[15],C=l[0],z=l[4],T=l[8],P=l[12],W=l[1],G=l[5],Y=l[9],rt=l[13],dt=l[2],k=l[6],L=l[10],B=l[14],et=l[3],ht=l[7],xt=l[11],O=l[15];return c[0]=d*C+p*W+m*dt+h*et,c[4]=d*z+p*G+m*k+h*ht,c[8]=d*T+p*Y+m*L+h*xt,c[12]=d*P+p*rt+m*B+h*O,c[1]=S*C+x*W+g*dt+b*et,c[5]=S*z+x*G+g*k+b*ht,c[9]=S*T+x*Y+g*L+b*xt,c[13]=S*P+x*rt+g*B+b*O,c[2]=A*C+D*W+y*dt+v*et,c[6]=A*z+D*G+y*k+v*ht,c[10]=A*T+D*Y+y*L+v*xt,c[14]=A*P+D*rt+y*B+v*O,c[3]=R*C+I*W+U*dt+H*et,c[7]=R*z+I*G+U*k+H*ht,c[11]=R*T+I*Y+U*L+H*xt,c[15]=R*P+I*rt+U*B+H*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],d=t[1],p=t[5],m=t[9],h=t[13],S=t[2],x=t[6],g=t[10],b=t[14],A=t[3],D=t[7],y=t[11],v=t[15],R=m*b-h*g,I=p*b-h*x,U=p*g-m*x,H=d*b-h*S,C=d*g-m*S,z=d*x-p*S;return i*(D*R-y*I+v*U)-s*(A*R-y*H+v*C)+l*(A*I-D*H+v*z)-c*(A*U-D*C+y*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],S=t[8],x=t[9],g=t[10],b=t[11],A=t[12],D=t[13],y=t[14],v=t[15],R=i*p-s*d,I=i*m-l*d,U=i*h-c*d,H=s*m-l*p,C=s*h-c*p,z=l*h-c*m,T=S*D-x*A,P=S*y-g*A,W=S*v-b*A,G=x*y-g*D,Y=x*v-b*D,rt=g*v-b*y,dt=R*rt-I*Y+U*G+H*W-C*P+z*T;if(dt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/dt;return t[0]=(p*rt-m*Y+h*G)*k,t[1]=(l*Y-s*rt-c*G)*k,t[2]=(D*z-y*C+v*H)*k,t[3]=(g*C-x*z-b*H)*k,t[4]=(m*W-d*rt-h*P)*k,t[5]=(i*rt-l*W+c*P)*k,t[6]=(y*U-A*z-v*I)*k,t[7]=(S*z-g*U+b*I)*k,t[8]=(d*Y-p*W+h*T)*k,t[9]=(s*W-i*Y-c*T)*k,t[10]=(A*C-D*U+v*R)*k,t[11]=(x*U-S*C-b*R)*k,t[12]=(p*P-d*G-m*T)*k,t[13]=(i*G-s*P+l*T)*k,t[14]=(D*I-A*H-y*R)*k,t[15]=(S*H-x*I+g*R)*k,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=t.x,p=t.y,m=t.z,h=c*d,S=c*p;return this.set(h*d+s,h*p-l*m,h*m+l*p,0,h*p+l*m,S*p+s,S*m-l*d,0,h*m-l*p,S*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,d){return this.set(1,s,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,S=d+d,x=p+p,g=c*h,b=c*S,A=c*x,D=d*S,y=d*x,v=p*x,R=m*h,I=m*S,U=m*x,H=s.x,C=s.y,z=s.z;return l[0]=(1-(D+v))*H,l[1]=(b+U)*H,l[2]=(A-I)*H,l[3]=0,l[4]=(b-U)*C,l[5]=(1-(g+v))*C,l[6]=(y+R)*C,l[7]=0,l[8]=(A+I)*z,l[9]=(y-R)*z,l[10]=(1-(g+D))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let d=Pr.set(l[0],l[1],l[2]).length();const p=Pr.set(l[4],l[5],l[6]).length(),m=Pr.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Hi.copy(this);const h=1/d,S=1/p,x=1/m;return Hi.elements[0]*=h,Hi.elements[1]*=h,Hi.elements[2]*=h,Hi.elements[4]*=S,Hi.elements[5]*=S,Hi.elements[6]*=S,Hi.elements[8]*=x,Hi.elements[9]*=x,Hi.elements[10]*=x,i.setFromRotationMatrix(Hi),s.x=d,s.y=p,s.z=m,this}makePerspective(t,i,s,l,c,d,p=sa,m=!1){const h=this.elements,S=2*c/(i-t),x=2*c/(s-l),g=(i+t)/(i-t),b=(s+l)/(s-l);let A,D;if(m)A=c/(d-c),D=d*c/(d-c);else if(p===sa)A=-(d+c)/(d-c),D=-2*d*c/(d-c);else if(p===il)A=-d/(d-c),D=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=S,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=x,h[9]=b,h[13]=0,h[2]=0,h[6]=0,h[10]=A,h[14]=D,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,s,l,c,d,p=sa,m=!1){const h=this.elements,S=2/(i-t),x=2/(s-l),g=-(i+t)/(i-t),b=-(s+l)/(s-l);let A,D;if(m)A=1/(d-c),D=d/(d-c);else if(p===sa)A=-2/(d-c),D=-(d+c)/(d-c);else if(p===il)A=-1/(d-c),D=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=S,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=x,h[9]=0,h[13]=b,h[2]=0,h[6]=0,h[10]=A,h[14]=D,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};Jc.prototype.isMatrix4=!0;let yn=Jc;const Pr=new X,Hi=new yn,Ky=new X(0,0,0),Qy=new X(1,1,1),ms=new X,vc=new X,Si=new X,o_=new yn,l_=new $r;class Es{constructor(t=0,i=0,s=0,l=Es.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],S=l[9],x=l[2],g=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(Fe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,b),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(p,b),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,b),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Fe(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,b),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Fe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,h),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(p,b));break;case"XZY":this._z=Math.asin(-Fe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-S,b),this._y=0);break;default:Se("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return o_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(o_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return l_.setFromEuler(this),this.setFromQuaternion(l_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Es.DEFAULT_ORDER="XYZ";class wv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Jy=0;const c_=new X,Ir=new $r,wa=new yn,xc=new X,qo=new X,$y=new X,tM=new $r,u_=new X(1,0,0),f_=new X(0,1,0),d_=new X(0,0,1),h_={type:"added"},eM={type:"removed"},zr={type:"childadded",child:null},Md={type:"childremoved",child:null};class Wn extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=rl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const t=new X,i=new Es,s=new $r,l=new X(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new yn},normalMatrix:{value:new Te}}),this.matrix=new yn,this.matrixWorld=new yn,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ir.setFromAxisAngle(t,i),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(t,i){return Ir.setFromAxisAngle(t,i),this.quaternion.premultiply(Ir),this}rotateX(t){return this.rotateOnAxis(u_,t)}rotateY(t){return this.rotateOnAxis(f_,t)}rotateZ(t){return this.rotateOnAxis(d_,t)}translateOnAxis(t,i){return c_.copy(t).applyQuaternion(this.quaternion),this.position.add(c_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(u_,t)}translateY(t){return this.translateOnAxis(f_,t)}translateZ(t){return this.translateOnAxis(d_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?xc.copy(t):xc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wa.lookAt(qo,xc,this.up):wa.lookAt(xc,qo,this.up),this.quaternion.setFromRotationMatrix(wa),l&&(wa.extractRotation(l.matrixWorld),Ir.setFromRotationMatrix(wa),this.quaternion.premultiply(Ir.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(je("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(h_),zr.child=t,this.dispatchEvent(zr),zr.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(eM),Md.child=t,this.dispatchEvent(Md),Md.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wa.multiply(t.parent.matrixWorld)),t.applyMatrix4(wa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(h_),zr.child=t,this.dispatchEvent(zr),zr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,t,$y),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,tM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,S=m.length;h<S;h++){const x=m[h];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=d(t.geometries),m=d(t.materials),h=d(t.textures),S=d(t.images),x=d(t.shapes),g=d(t.skeletons),b=d(t.animations),A=d(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),S.length>0&&(s.images=S),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),b.length>0&&(s.animations=b),A.length>0&&(s.nodes=A)}return s.object=l,s;function d(p){const m=[];for(const h in p){const S=p[h];delete S.metadata,m.push(S)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Wn.DEFAULT_UP=new X(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class oe extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nM={type:"move"};class bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(h&&t.hand){d=!0;for(const D of t.hand.values()){const y=i.getJointPose(D,s),v=this._getHandJoint(h,D);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const S=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],g=S.position.distanceTo(x.position),b=.02,A=.005;h.inputState.pinching&&g>b+A?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&g<=b-A&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(nM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new oe;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Rv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gs={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function Ed(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Pe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Li){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ke.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=ke.workingColorSpace){return this.r=t,this.g=i,this.b=s,ke.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=ke.workingColorSpace){if(t=ky(t,1),i=Fe(i,0,1),s=Fe(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Ed(d,c,t+1/3),this.g=Ed(d,c,t),this.b=Ed(d,c,t-1/3)}return ke.colorSpaceToWorking(this,l),this}setStyle(t,i=Li){function s(c){c!==void 0&&parseFloat(c)<1&&Se("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:Se("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);Se("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Li){const s=Rv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):Se("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pa(t.r),this.g=Pa(t.g),this.b=Pa(t.b),this}copyLinearToSRGB(t){return this.r=Yr(t.r),this.g=Yr(t.g),this.b=Yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Li){return ke.workingToColorSpace(Kn.copy(this),t),Math.round(Fe(Kn.r*255,0,255))*65536+Math.round(Fe(Kn.g*255,0,255))*256+Math.round(Fe(Kn.b*255,0,255))}getHexString(t=Li){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=ke.workingColorSpace){ke.workingToColorSpace(Kn.copy(this),i);const s=Kn.r,l=Kn.g,c=Kn.b,d=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const S=(p+d)/2;if(p===d)m=0,h=0;else{const x=d-p;switch(h=S<=.5?x/(d+p):x/(2-d-p),d){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=h,t.l=S,t}getRGB(t,i=ke.workingColorSpace){return ke.workingToColorSpace(Kn.copy(this),i),t.r=Kn.r,t.g=Kn.g,t.b=Kn.b,t}getStyle(t=Li){ke.workingToColorSpace(Kn.copy(this),t);const i=Kn.r,s=Kn.g,l=Kn.b;return t!==Li?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(gs),this.setHSL(gs.h+t,gs.s+i,gs.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(gs),t.getHSL(Sc);const s=_d(gs.h,Sc.h,i),l=_d(gs.s,Sc.s,i),c=_d(gs.l,Sc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kn=new Pe;Pe.NAMES=Rv;class Kh{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pe(t),this.density=i}clone(){return new Kh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class iM extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Es,this.environmentIntensity=1,this.environmentRotation=new Es,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Vi=new X,Ra=new X,Td=new X,Ca=new X,Br=new X,Fr=new X,p_=new X,Ad=new X,wd=new X,Rd=new X,Cd=new Sn,Dd=new Sn,Nd=new Sn;class Xi{constructor(t=new X,i=new X,s=new X){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Vi.subVectors(t,i),l.cross(Vi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Vi.subVectors(l,i),Ra.subVectors(s,i),Td.subVectors(t,i);const d=Vi.dot(Vi),p=Vi.dot(Ra),m=Vi.dot(Td),h=Ra.dot(Ra),S=Ra.dot(Td),x=d*h-p*p;if(x===0)return c.set(0,0,0),null;const g=1/x,b=(h*m-p*S)*g,A=(d*S-p*m)*g;return c.set(1-b-A,A,b)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ca)===null?!1:Ca.x>=0&&Ca.y>=0&&Ca.x+Ca.y<=1}static getInterpolation(t,i,s,l,c,d,p,m){return this.getBarycoord(t,i,s,l,Ca)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ca.x),m.addScaledVector(d,Ca.y),m.addScaledVector(p,Ca.z),m)}static getInterpolatedAttribute(t,i,s,l,c,d){return Cd.setScalar(0),Dd.setScalar(0),Nd.setScalar(0),Cd.fromBufferAttribute(t,i),Dd.fromBufferAttribute(t,s),Nd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Cd,c.x),d.addScaledVector(Dd,c.y),d.addScaledVector(Nd,c.z),d}static isFrontFacing(t,i,s,l){return Vi.subVectors(s,i),Ra.subVectors(t,i),Vi.cross(Ra).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vi.subVectors(this.c,this.b),Ra.subVectors(this.a,this.b),Vi.cross(Ra).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Xi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Xi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Xi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let d,p;Br.subVectors(l,s),Fr.subVectors(c,s),Ad.subVectors(t,s);const m=Br.dot(Ad),h=Fr.dot(Ad);if(m<=0&&h<=0)return i.copy(s);wd.subVectors(t,l);const S=Br.dot(wd),x=Fr.dot(wd);if(S>=0&&x<=S)return i.copy(l);const g=m*x-S*h;if(g<=0&&m>=0&&S<=0)return d=m/(m-S),i.copy(s).addScaledVector(Br,d);Rd.subVectors(t,c);const b=Br.dot(Rd),A=Fr.dot(Rd);if(A>=0&&b<=A)return i.copy(c);const D=b*h-m*A;if(D<=0&&h>=0&&A<=0)return p=h/(h-A),i.copy(s).addScaledVector(Fr,p);const y=S*A-b*x;if(y<=0&&x-S>=0&&b-A>=0)return p_.subVectors(c,l),p=(x-S)/(x-S+(b-A)),i.copy(l).addScaledVector(p_,p);const v=1/(y+D+g);return d=D*v,p=g*v,i.copy(s).addScaledVector(Br,d).addScaledVector(Fr,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ol{constructor(t=new X(1/0,1/0,1/0),i=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(ki.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(ki.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=ki.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)t.isMesh===!0?t.getVertexPosition(d,ki):ki.fromBufferAttribute(c,d),ki.applyMatrix4(t.matrixWorld),this.expandByPoint(ki);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),yc.copy(s.boundingBox)),yc.applyMatrix4(t.matrixWorld),this.union(yc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ki),ki.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yo),Mc.subVectors(this.max,Yo),Gr.subVectors(t.a,Yo),Hr.subVectors(t.b,Yo),Vr.subVectors(t.c,Yo),_s.subVectors(Hr,Gr),vs.subVectors(Vr,Hr),ks.subVectors(Gr,Vr);let i=[0,-_s.z,_s.y,0,-vs.z,vs.y,0,-ks.z,ks.y,_s.z,0,-_s.x,vs.z,0,-vs.x,ks.z,0,-ks.x,-_s.y,_s.x,0,-vs.y,vs.x,0,-ks.y,ks.x,0];return!Ud(i,Gr,Hr,Vr,Mc)||(i=[1,0,0,0,1,0,0,0,1],!Ud(i,Gr,Hr,Vr,Mc))?!1:(bc.crossVectors(_s,vs),i=[bc.x,bc.y,bc.z],Ud(i,Gr,Hr,Vr,Mc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ki).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ki).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Da),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Da=[new X,new X,new X,new X,new X,new X,new X,new X],ki=new X,yc=new ol,Gr=new X,Hr=new X,Vr=new X,_s=new X,vs=new X,ks=new X,Yo=new X,Mc=new X,bc=new X,Xs=new X;function Ud(r,t,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){Xs.fromArray(r,c);const p=l.x*Math.abs(Xs.x)+l.y*Math.abs(Xs.y)+l.z*Math.abs(Xs.z),m=t.dot(Xs),h=i.dot(Xs),S=s.dot(Xs);if(Math.max(-Math.max(m,h,S),Math.min(m,h,S))>p)return!1}return!0}const Dn=new X,Ec=new qe;let aM=0;class ji extends er{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:aM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=t_,this.updateRanges=[],this.gpuType=aa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Ec.fromBufferAttribute(this,i),Ec.applyMatrix3(t),this.setXY(i,Ec.x,Ec.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Dn.fromBufferAttribute(this,i),Dn.applyMatrix3(t),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Dn.fromBufferAttribute(this,i),Dn.applyMatrix4(t),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Dn.fromBufferAttribute(this,i),Dn.applyNormalMatrix(t),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Dn.fromBufferAttribute(this,i),Dn.transformDirection(t),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=jo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=li(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=jo(i,this.array)),i}setX(t,i){return this.normalized&&(i=li(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=jo(i,this.array)),i}setY(t,i){return this.normalized&&(i=li(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=jo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=li(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=jo(i,this.array)),i}setW(t,i){return this.normalized&&(i=li(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=li(i,this.array),s=li(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=li(i,this.array),s=li(s,this.array),l=li(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=li(i,this.array),s=li(s,this.array),l=li(l,this.array),c=li(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==t_&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Cv extends ji{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Dv extends ji{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Fn extends ji{constructor(t,i,s){super(new Float32Array(t),i,s)}}const sM=new ol,Zo=new X,Ld=new X;class tu{constructor(t=new X,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):sM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zo.subVectors(t,this.center);const i=Zo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Zo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ld.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zo.copy(t.center).add(Ld)),this.expandByPoint(Zo.copy(t.center).sub(Ld))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let rM=0;const Ui=new yn,Od=new Wn,kr=new X,yi=new ol,Ko=new ol,Bn=new X;class fi extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=rl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fy(t)?Dv:Cv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new Te().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ui.makeRotationFromQuaternion(t),this.applyMatrix4(Ui),this}rotateX(t){return Ui.makeRotationX(t),this.applyMatrix4(Ui),this}rotateY(t){return Ui.makeRotationY(t),this.applyMatrix4(Ui),this}rotateZ(t){return Ui.makeRotationZ(t),this.applyMatrix4(Ui),this}translate(t,i,s){return Ui.makeTranslation(t,i,s),this.applyMatrix4(Ui),this}scale(t,i,s){return Ui.makeScale(t,i,s),this.applyMatrix4(Ui),this}lookAt(t){return Od.lookAt(t),Od.updateMatrix(),this.applyMatrix4(Od.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Fn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&Se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ol);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];yi.setFromBufferAttribute(c),this.morphTargetsRelative?(Bn.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(Bn),Bn.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(Bn)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const s=this.boundingSphere.center;if(yi.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];Ko.setFromBufferAttribute(p),this.morphTargetsRelative?(Bn.addVectors(yi.min,Ko.min),yi.expandByPoint(Bn),Bn.addVectors(yi.max,Ko.max),yi.expandByPoint(Bn)):(yi.expandByPoint(Ko.min),yi.expandByPoint(Ko.max))}yi.getCenter(s);let l=0;for(let c=0,d=t.count;c<d;c++)Bn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Bn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,S=p.count;h<S;h++)Bn.fromBufferAttribute(p,h),m&&(kr.fromBufferAttribute(t,h),Bn.add(kr)),l=Math.max(l,s.distanceToSquared(Bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ji(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<s.count;T++)p[T]=new X,m[T]=new X;const h=new X,S=new X,x=new X,g=new qe,b=new qe,A=new qe,D=new X,y=new X;function v(T,P,W){h.fromBufferAttribute(s,T),S.fromBufferAttribute(s,P),x.fromBufferAttribute(s,W),g.fromBufferAttribute(c,T),b.fromBufferAttribute(c,P),A.fromBufferAttribute(c,W),S.sub(h),x.sub(h),b.sub(g),A.sub(g);const G=1/(b.x*A.y-A.x*b.y);isFinite(G)&&(D.copy(S).multiplyScalar(A.y).addScaledVector(x,-b.y).multiplyScalar(G),y.copy(x).multiplyScalar(b.x).addScaledVector(S,-A.x).multiplyScalar(G),p[T].add(D),p[P].add(D),p[W].add(D),m[T].add(y),m[P].add(y),m[W].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let T=0,P=R.length;T<P;++T){const W=R[T],G=W.start,Y=W.count;for(let rt=G,dt=G+Y;rt<dt;rt+=3)v(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const I=new X,U=new X,H=new X,C=new X;function z(T){H.fromBufferAttribute(l,T),C.copy(H);const P=p[T];I.copy(P),I.sub(H.multiplyScalar(H.dot(P))).normalize(),U.crossVectors(C,P);const G=U.dot(m[T])<0?-1:1;d.setXYZW(T,I.x,I.y,I.z,G)}for(let T=0,P=R.length;T<P;++T){const W=R[T],G=W.start,Y=W.count;for(let rt=G,dt=G+Y;rt<dt;rt+=3)z(t.getX(rt+0)),z(t.getX(rt+1)),z(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ji(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,b=s.count;g<b;g++)s.setXYZ(g,0,0,0);const l=new X,c=new X,d=new X,p=new X,m=new X,h=new X,S=new X,x=new X;if(t)for(let g=0,b=t.count;g<b;g+=3){const A=t.getX(g+0),D=t.getX(g+1),y=t.getX(g+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,D),d.fromBufferAttribute(i,y),S.subVectors(d,c),x.subVectors(l,c),S.cross(x),p.fromBufferAttribute(s,A),m.fromBufferAttribute(s,D),h.fromBufferAttribute(s,y),p.add(S),m.add(S),h.add(S),s.setXYZ(A,p.x,p.y,p.z),s.setXYZ(D,m.x,m.y,m.z),s.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,b=i.count;g<b;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),S.subVectors(d,c),x.subVectors(l,c),S.cross(x),s.setXYZ(g+0,S.x,S.y,S.z),s.setXYZ(g+1,S.x,S.y,S.z),s.setXYZ(g+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Bn.fromBufferAttribute(t,i),Bn.normalize(),t.setXYZ(i,Bn.x,Bn.y,Bn.z)}toNonIndexed(){function t(p,m){const h=p.array,S=p.itemSize,x=p.normalized,g=new h.constructor(m.length*S);let b=0,A=0;for(let D=0,y=m.length;D<y;D++){p.isInterleavedBufferAttribute?b=m[D]*p.data.stride+p.offset:b=m[D]*S;for(let v=0;v<S;v++)g[A++]=h[b++]}return new ji(g,S,x)}if(this.index===null)return Se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new fi,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=t(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let S=0,x=h.length;S<x;S++){const g=h[S],b=t(g,s);m.push(b)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(t[h]=m[h]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];t.data.attributes[m]=h.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],S=[];for(let x=0,g=h.length;x<g;x++){const b=h[x];S.push(b.toJSON(t.data))}S.length>0&&(l[m]=S,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const h in l){const S=l[h];this.setAttribute(h,S.clone(i))}const c=t.morphAttributes;for(const h in c){const S=[],x=c[h];for(let g=0,b=x.length;g<b;g++)S.push(x[g].clone(i));this.morphAttributes[h]=S}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let h=0,S=d.length;h<S;h++){const x=d[h];this.addGroup(x.start,x.count,x.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let oM=0;class to extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=rl(),this.name="",this.type="Material",this.blending=qr,this.side=bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qd,this.blendDst=Yd,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$g,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){Se(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Se(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==qr&&(s.blending=this.blending),this.side!==bs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==qd&&(s.blendSrc=this.blendSrc),this.blendDst!==Yd&&(s.blendDst=this.blendDst),this.blendEquation!==Ys&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Zr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$g&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Na=new X,Pd=new X,Tc=new X,xs=new X,Id=new X,Ac=new X,zd=new X;class Nv{constructor(t=new X,i=new X(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Na)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Na.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Na.copy(this.origin).addScaledVector(this.direction,i),Na.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Pd.copy(t).add(i).multiplyScalar(.5),Tc.copy(i).sub(t).normalize(),xs.copy(this.origin).sub(Pd);const c=t.distanceTo(i)*.5,d=-this.direction.dot(Tc),p=xs.dot(this.direction),m=-xs.dot(Tc),h=xs.lengthSq(),S=Math.abs(1-d*d);let x,g,b,A;if(S>0)if(x=d*m-p,g=d*p-m,A=c*S,x>=0)if(g>=-A)if(g<=A){const D=1/S;x*=D,g*=D,b=x*(x+d*g+2*p)+g*(d*x+g+2*m)+h}else g=c,x=Math.max(0,-(d*g+p)),b=-x*x+g*(g+2*m)+h;else g=-c,x=Math.max(0,-(d*g+p)),b=-x*x+g*(g+2*m)+h;else g<=-A?(x=Math.max(0,-(-d*c+p)),g=x>0?-c:Math.min(Math.max(-c,-m),c),b=-x*x+g*(g+2*m)+h):g<=A?(x=0,g=Math.min(Math.max(-c,-m),c),b=g*(g+2*m)+h):(x=Math.max(0,-(d*c+p)),g=x>0?c:Math.min(Math.max(-c,-m),c),b=-x*x+g*(g+2*m)+h);else g=d>0?-c:c,x=Math.max(0,-(d*g+p)),b=-x*x+g*(g+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Pd).addScaledVector(Tc,g),b}intersectSphere(t,i){Na.subVectors(t.center,this.origin);const s=Na.dot(this.direction),l=Na.dot(Na)-s*s,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=s-d,m=s+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,d,p,m;const h=1/this.direction.x,S=1/this.direction.y,x=1/this.direction.z,g=this.origin;return h>=0?(s=(t.min.x-g.x)*h,l=(t.max.x-g.x)*h):(s=(t.max.x-g.x)*h,l=(t.min.x-g.x)*h),S>=0?(c=(t.min.y-g.y)*S,d=(t.max.y-g.y)*S):(c=(t.max.y-g.y)*S,d=(t.min.y-g.y)*S),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),x>=0?(p=(t.min.z-g.z)*x,m=(t.max.z-g.z)*x):(p=(t.max.z-g.z)*x,m=(t.min.z-g.z)*x),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Na)!==null}intersectTriangle(t,i,s,l,c){Id.subVectors(i,t),Ac.subVectors(s,t),zd.crossVectors(Id,Ac);let d=this.direction.dot(zd),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;xs.subVectors(this.origin,t);const m=p*this.direction.dot(Ac.crossVectors(xs,Ac));if(m<0)return null;const h=p*this.direction.dot(Id.cross(xs));if(h<0||m+h>d)return null;const S=-p*xs.dot(zd);return S<0?null:this.at(S/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class al extends to{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Es,this.combine=cv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const m_=new yn,Ws=new Nv,wc=new tu,g_=new X,Rc=new X,Cc=new X,Dc=new X,Bd=new X,Nc=new X,__=new X,Uc=new X;class tt extends Wn{constructor(t=new fi,i=new al){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){Nc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const S=p[m],x=c[m];S!==0&&(Bd.fromBufferAttribute(x,t),d?Nc.addScaledVector(Bd,S):Nc.addScaledVector(Bd.sub(i),S))}i.add(Nc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),wc.copy(s.boundingSphere),wc.applyMatrix4(c),Ws.copy(t.ray).recast(t.near),!(wc.containsPoint(Ws.origin)===!1&&(Ws.intersectSphere(wc,g_)===null||Ws.origin.distanceToSquared(g_)>(t.far-t.near)**2))&&(m_.copy(c).invert(),Ws.copy(t.ray).applyMatrix4(m_),!(s.boundingBox!==null&&Ws.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ws)))}_computeIntersections(t,i,s){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,S=c.attributes.uv1,x=c.attributes.normal,g=c.groups,b=c.drawRange;if(p!==null)if(Array.isArray(d))for(let A=0,D=g.length;A<D;A++){const y=g[A],v=d[y.materialIndex],R=Math.max(y.start,b.start),I=Math.min(p.count,Math.min(y.start+y.count,b.start+b.count));for(let U=R,H=I;U<H;U+=3){const C=p.getX(U),z=p.getX(U+1),T=p.getX(U+2);l=Lc(this,v,t,s,h,S,x,C,z,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,b.start),D=Math.min(p.count,b.start+b.count);for(let y=A,v=D;y<v;y+=3){const R=p.getX(y),I=p.getX(y+1),U=p.getX(y+2);l=Lc(this,d,t,s,h,S,x,R,I,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,D=g.length;A<D;A++){const y=g[A],v=d[y.materialIndex],R=Math.max(y.start,b.start),I=Math.min(m.count,Math.min(y.start+y.count,b.start+b.count));for(let U=R,H=I;U<H;U+=3){const C=U,z=U+1,T=U+2;l=Lc(this,v,t,s,h,S,x,C,z,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,b.start),D=Math.min(m.count,b.start+b.count);for(let y=A,v=D;y<v;y+=3){const R=y,I=y+1,U=y+2;l=Lc(this,d,t,s,h,S,x,R,I,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function lM(r,t,i,s,l,c,d,p){let m;if(t.side===ui?m=s.intersectTriangle(d,c,l,!0,p):m=s.intersectTriangle(l,c,d,t.side===bs,p),m===null)return null;Uc.copy(p),Uc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(Uc);return h<i.near||h>i.far?null:{distance:h,point:Uc.clone(),object:r}}function Lc(r,t,i,s,l,c,d,p,m,h){r.getVertexPosition(p,Rc),r.getVertexPosition(m,Cc),r.getVertexPosition(h,Dc);const S=lM(r,t,i,s,Rc,Cc,Dc,__);if(S){const x=new X;Xi.getBarycoord(__,Rc,Cc,Dc,x),l&&(S.uv=Xi.getInterpolatedAttribute(l,p,m,h,x,new qe)),c&&(S.uv1=Xi.getInterpolatedAttribute(c,p,m,h,x,new qe)),d&&(S.normal=Xi.getInterpolatedAttribute(d,p,m,h,x,new X),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new X,materialIndex:0};Xi.getNormal(Rc,Cc,Dc,g.normal),S.face=g,S.barycoord=x}return S}class cM extends Jn{constructor(t=null,i=1,s=1,l,c,d,p,m,h=Xn,S=Xn,x,g){super(null,d,p,m,h,S,l,c,x,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fd=new X,uM=new X,fM=new Te;class qs{constructor(t=new X(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Fd.subVectors(s,i).cross(uM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(Fd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const d=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(d<0||d>1)?null:i.copy(t.start).addScaledVector(l,d)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||fM.getNormalMatrix(t),l=this.coplanarPoint(Fd).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const js=new tu,dM=new qe(.5,.5),Oc=new X;class Qh{constructor(t=new qs,i=new qs,s=new qs,l=new qs,c=new qs,d=new qs){this.planes=[t,i,s,l,c,d]}set(t,i,s,l,c,d){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=sa,s=!1){const l=this.planes,c=t.elements,d=c[0],p=c[1],m=c[2],h=c[3],S=c[4],x=c[5],g=c[6],b=c[7],A=c[8],D=c[9],y=c[10],v=c[11],R=c[12],I=c[13],U=c[14],H=c[15];if(l[0].setComponents(h-d,b-S,v-A,H-R).normalize(),l[1].setComponents(h+d,b+S,v+A,H+R).normalize(),l[2].setComponents(h+p,b+x,v+D,H+I).normalize(),l[3].setComponents(h-p,b-x,v-D,H-I).normalize(),s)l[4].setComponents(m,g,y,U).normalize(),l[5].setComponents(h-m,b-g,v-y,H-U).normalize();else if(l[4].setComponents(h-m,b-g,v-y,H-U).normalize(),i===sa)l[5].setComponents(h+m,b+g,v+y,H+U).normalize();else if(i===il)l[5].setComponents(m,g,y,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),js.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),js.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(js)}intersectsSprite(t){js.center.set(0,0,0);const i=dM.distanceTo(t.center);return js.radius=.7071067811865476+i,js.applyMatrix4(t.matrixWorld),this.intersectsSphere(js)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Oc.x=l.normal.x>0?t.max.x:t.min.x,Oc.y=l.normal.y>0?t.max.y:t.min.y,Oc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Uv extends to{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const v_=new yn,Ih=new Nv,Pc=new tu,Ic=new X;class hM extends Wn{constructor(t=new fi,i=new Uv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Pc.copy(s.boundingSphere),Pc.applyMatrix4(l),Pc.radius+=c,t.ray.intersectsSphere(Pc)===!1)return;v_.copy(l).invert(),Ih.copy(t.ray).applyMatrix4(v_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=s.index,x=s.attributes.position;if(h!==null){const g=Math.max(0,d.start),b=Math.min(h.count,d.start+d.count);for(let A=g,D=b;A<D;A++){const y=h.getX(A);Ic.fromBufferAttribute(x,y),x_(Ic,y,m,l,t,i,this)}}else{const g=Math.max(0,d.start),b=Math.min(x.count,d.start+d.count);for(let A=g,D=b;A<D;A++)Ic.fromBufferAttribute(x,A),x_(Ic,A,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function x_(r,t,i,s,l,c,d){const p=Ih.distanceSqToPoint(r);if(p<i){const m=new X;Ih.closestPointToPoint(r,m),m.applyMatrix4(s);const h=l.ray.origin.distanceTo(m);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(p),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class Lv extends Jn{constructor(t=[],i=Js,s,l,c,d,p,m,h,S){super(t,i,s,l,c,d,p,m,h,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jh extends Jn{constructor(t,i,s,l,c,d,p,m,h){super(t,i,s,l,c,d,p,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qr extends Jn{constructor(t,i,s=la,l,c,d,p=Xn,m=Xn,h,S=Ba,x=1){if(S!==Ba&&S!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:x};super(g,l,c,d,p,m,S,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Zh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class pM extends Qr{constructor(t,i=la,s=Js,l,c,d=Xn,p=Xn,m,h=Ba){const S={width:t,height:t,depth:1},x=[S,S,S,S,S,S];super(t,t,i,s,l,c,d,p,m,h),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ov extends Jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Kt extends fi{constructor(t=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],S=[],x=[];let g=0,b=0;A("z","y","x",-1,-1,s,i,t,d,c,0),A("z","y","x",1,-1,s,i,-t,d,c,1),A("x","z","y",1,1,t,s,i,l,d,2),A("x","z","y",1,-1,t,s,-i,l,d,3),A("x","y","z",1,-1,t,i,s,l,c,4),A("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Fn(h,3)),this.setAttribute("normal",new Fn(S,3)),this.setAttribute("uv",new Fn(x,2));function A(D,y,v,R,I,U,H,C,z,T,P){const W=U/z,G=H/T,Y=U/2,rt=H/2,dt=C/2,k=z+1,L=T+1;let B=0,et=0;const ht=new X;for(let xt=0;xt<L;xt++){const O=xt*G-rt;for(let Q=0;Q<k;Q++){const yt=Q*W-Y;ht[D]=yt*R,ht[y]=O*I,ht[v]=dt,h.push(ht.x,ht.y,ht.z),ht[D]=0,ht[y]=0,ht[v]=C>0?1:-1,S.push(ht.x,ht.y,ht.z),x.push(Q/z),x.push(1-xt/T),B+=1}}for(let xt=0;xt<T;xt++)for(let O=0;O<z;O++){const Q=g+O+k*xt,yt=g+O+k*(xt+1),Rt=g+(O+1)+k*(xt+1),Ot=g+(O+1)+k*xt;m.push(Q,yt,Ot),m.push(yt,Rt,Ot),et+=6}p.addGroup(b,et,P),b+=et,g+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ce extends fi{constructor(t=1,i=1,s=1,l=32,c=1,d=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:d,thetaStart:p,thetaLength:m};const h=this;l=Math.floor(l),c=Math.floor(c);const S=[],x=[],g=[],b=[];let A=0;const D=[],y=s/2;let v=0;R(),d===!1&&(t>0&&I(!0),i>0&&I(!1)),this.setIndex(S),this.setAttribute("position",new Fn(x,3)),this.setAttribute("normal",new Fn(g,3)),this.setAttribute("uv",new Fn(b,2));function R(){const U=new X,H=new X;let C=0;const z=(i-t)/s;for(let T=0;T<=c;T++){const P=[],W=T/c,G=W*(i-t)+t;for(let Y=0;Y<=l;Y++){const rt=Y/l,dt=rt*m+p,k=Math.sin(dt),L=Math.cos(dt);H.x=G*k,H.y=-W*s+y,H.z=G*L,x.push(H.x,H.y,H.z),U.set(k,z,L).normalize(),g.push(U.x,U.y,U.z),b.push(rt,1-W),P.push(A++)}D.push(P)}for(let T=0;T<l;T++)for(let P=0;P<c;P++){const W=D[P][T],G=D[P+1][T],Y=D[P+1][T+1],rt=D[P][T+1];(t>0||P!==0)&&(S.push(W,G,rt),C+=3),(i>0||P!==c-1)&&(S.push(G,Y,rt),C+=3)}h.addGroup(v,C,0),v+=C}function I(U){const H=A,C=new qe,z=new X;let T=0;const P=U===!0?t:i,W=U===!0?1:-1;for(let Y=1;Y<=l;Y++)x.push(0,y*W,0),g.push(0,W,0),b.push(.5,.5),A++;const G=A;for(let Y=0;Y<=l;Y++){const dt=Y/l*m+p,k=Math.cos(dt),L=Math.sin(dt);z.x=P*L,z.y=y*W,z.z=P*k,x.push(z.x,z.y,z.z),g.push(0,W,0),C.x=k*.5+.5,C.y=L*.5*W+.5,b.push(C.x,C.y),A++}for(let Y=0;Y<l;Y++){const rt=H+Y,dt=G+Y;U===!0?S.push(dt,dt+1,rt):S.push(dt+1,dt,rt),T+=3}h.addGroup(v,T,U===!0?1:2),v+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ce(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _n extends ce{constructor(t=1,i=1,s=32,l=1,c=!1,d=0,p=Math.PI*2){super(0,t,i,s,l,c,d,p),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:d,thetaLength:p}}static fromJSON(t){return new _n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ll extends fi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,d=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,S=m+1,x=t/p,g=i/m,b=[],A=[],D=[],y=[];for(let v=0;v<S;v++){const R=v*g-d;for(let I=0;I<h;I++){const U=I*x-c;A.push(U,-R,0),D.push(0,0,1),y.push(I/p),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let R=0;R<p;R++){const I=R+h*v,U=R+h*(v+1),H=R+1+h*(v+1),C=R+1+h*v;b.push(I,U,C),b.push(U,H,C)}this.setIndex(b),this.setAttribute("position",new Fn(A,3)),this.setAttribute("normal",new Fn(D,3)),this.setAttribute("uv",new Fn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.width,t.height,t.widthSegments,t.heightSegments)}}class Be extends fi{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,d=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:d,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(d+p,Math.PI);let h=0;const S=[],x=new X,g=new X,b=[],A=[],D=[],y=[];for(let v=0;v<=s;v++){const R=[],I=v/s;let U=0;v===0&&d===0?U=.5/i:v===s&&m===Math.PI&&(U=-.5/i);for(let H=0;H<=i;H++){const C=H/i;x.x=-t*Math.cos(l+C*c)*Math.sin(d+I*p),x.y=t*Math.cos(d+I*p),x.z=t*Math.sin(l+C*c)*Math.sin(d+I*p),A.push(x.x,x.y,x.z),g.copy(x).normalize(),D.push(g.x,g.y,g.z),y.push(C+U,1-I),R.push(h++)}S.push(R)}for(let v=0;v<s;v++)for(let R=0;R<i;R++){const I=S[v][R+1],U=S[v][R],H=S[v+1][R],C=S[v+1][R+1];(v!==0||d>0)&&b.push(I,U,C),(v!==s-1||m<Math.PI)&&b.push(U,H,C)}this.setIndex(b),this.setAttribute("position",new Fn(A,3)),this.setAttribute("normal",new Fn(D,3)),this.setAttribute("uv",new Fn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Be(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class sl extends fi{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2,d=0,p=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:d,thetaLength:p},s=Math.floor(s),l=Math.floor(l);const m=[],h=[],S=[],x=[],g=new X,b=new X,A=new X;for(let D=0;D<=s;D++){const y=d+D/s*p;for(let v=0;v<=l;v++){const R=v/l*c;b.x=(t+i*Math.cos(y))*Math.cos(R),b.y=(t+i*Math.cos(y))*Math.sin(R),b.z=i*Math.sin(y),h.push(b.x,b.y,b.z),g.x=t*Math.cos(R),g.y=t*Math.sin(R),A.subVectors(b,g).normalize(),S.push(A.x,A.y,A.z),x.push(v/l),x.push(D/s)}}for(let D=1;D<=s;D++)for(let y=1;y<=l;y++){const v=(l+1)*D+y-1,R=(l+1)*(D-1)+y-1,I=(l+1)*(D-1)+y,U=(l+1)*D+y;m.push(v,R,U),m.push(R,I,U)}this.setIndex(m),this.setAttribute("position",new Fn(h,3)),this.setAttribute("normal",new Fn(S,3)),this.setAttribute("uv",new Fn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function Jr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];if(S_(l))l.isRenderTargetTexture?(Se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(S_(l[0])){const c=[];for(let d=0,p=l.length;d<p;d++)c[d]=l[d].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function ei(r){const t={};for(let i=0;i<r.length;i++){const s=Jr(r[i]);for(const l in s)t[l]=s[l]}return t}function S_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function mM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Pv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ke.workingColorSpace}const gM={clone:Jr,merge:ei};var _M=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ca extends to{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_M,this.fragmentShader=vM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Jr(t.uniforms),this.uniformsGroups=mM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class xM extends ca{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class le extends to{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lh,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Es,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class SM extends le{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class yM extends to{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ny,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class MM extends to{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class $h extends Wn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Gd=new yn,y_=new X,M_=new X;class Iv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=bi,this.map=null,this.mapPass=null,this.matrix=new yn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qh,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new Sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;y_.setFromMatrixPosition(t.matrixWorld),i.position.copy(y_),M_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(M_),i.updateMatrixWorld(),Gd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gd,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===il||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Gd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const zc=new X,Bc=new $r,ea=new X;class zv extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yn,this.projectionMatrix=new yn,this.projectionMatrixInverse=new yn,this.coordinateSystem=sa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(zc,Bc,ea),ea.x===1&&ea.y===1&&ea.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,Bc,ea.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(zc,Bc,ea),ea.x===1&&ea.y===1&&ea.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,Bc,ea.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ss=new X,b_=new qe,E_=new qe;class Mi extends zv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Ph*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ph*2*Math.atan(Math.tan(gd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ss.x,Ss.y).multiplyScalar(-t/Ss.z),Ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ss.x,Ss.y).multiplyScalar(-t/Ss.z)}getViewSize(t,i){return this.getViewBounds(t,b_,E_),i.subVectors(E_,b_)}setViewOffset(t,i,s,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(gd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/h,l*=d.width/m,s*=d.height/h}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class bM extends Iv{constructor(){super(new Mi(90,1,.5,500)),this.isPointLightShadow=!0}}class T_ extends $h{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new bM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class tp extends zv{constructor(t=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,d=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=S*this.view.offsetY,m=p-S*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class EM extends Iv{constructor(){super(new tp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class A_ extends $h{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wn.DEFAULT_UP),this.updateMatrix(),this.target=new Wn,this.shadow=new EM}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class w_ extends $h{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Xr=-90,Wr=1;class TM extends Wn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Mi(Xr,Wr,t,i);l.layers=this.layers,this.add(l);const c=new Mi(Xr,Wr,t,i);c.layers=this.layers,this.add(c);const d=new Mi(Xr,Wr,t,i);d.layers=this.layers,this.add(d);const p=new Mi(Xr,Wr,t,i);p.layers=this.layers,this.add(p);const m=new Mi(Xr,Wr,t,i);m.layers=this.layers,this.add(m);const h=new Mi(Xr,Wr,t,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(t===sa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===il)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of i)this.add(h),h.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,S]=this.children,x=t.getRenderTarget(),g=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const D=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,2,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),s.texture.generateMipmaps=D,t.setRenderTarget(s,5,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,S),t.setRenderTarget(x,g,b),t.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class AM extends Mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class wM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Se("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const rp=class rp{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}};rp.prototype.isMatrix2=!0;let R_=rp;function C_(r,t,i,s){const l=RM(s);switch(i){case Mv:return r*t;case Ev:return r*t/l.components*l.byteLength;case Xh:return r*t/l.components*l.byteLength;case $s:return r*t*2/l.components*l.byteLength;case Wh:return r*t*2/l.components*l.byteLength;case bv:return r*t*3/l.components*l.byteLength;case Wi:return r*t*4/l.components*l.byteLength;case jh:return r*t*4/l.components*l.byteLength;case Vc:case kc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Xc:case Wc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ah:case rh:return Math.max(r,16)*Math.max(t,8)/4;case ih:case sh:return Math.max(r,8)*Math.max(t,8)/2;case oh:case lh:case uh:case fh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ch:case qc:case dh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case hh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ph:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case mh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case gh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case _h:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case vh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case xh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Sh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case yh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Mh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case bh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Eh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Th:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Ah:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case wh:case Rh:case Ch:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Dh:case Nh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Yc:case Uh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function RM(r){switch(r){case bi:case vv:return{byteLength:1,components:1};case el:case xv:case za:return{byteLength:2,components:1};case Vh:case kh:return{byteLength:2,components:4};case la:case Hh:case aa:return{byteLength:4,components:1};case Sv:case yv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gh}}));typeof window<"u"&&(window.__THREE__?Se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bv(){let r=null,t=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function CM(r){const t=new WeakMap;function i(p,m){const h=p.array,S=p.usage,x=h.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,h,S),p.onUploadCallback();let b;if(h instanceof Float32Array)b=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)b=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?b=r.HALF_FLOAT:b=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)b=r.SHORT;else if(h instanceof Uint32Array)b=r.UNSIGNED_INT;else if(h instanceof Int32Array)b=r.INT;else if(h instanceof Int8Array)b=r.BYTE;else if(h instanceof Uint8Array)b=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)b=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:b,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:x}}function s(p,m,h){const S=m.array,x=m.updateRanges;if(r.bindBuffer(h,p),x.length===0)r.bufferSubData(h,0,S);else{x.sort((b,A)=>b.start-A.start);let g=0;for(let b=1;b<x.length;b++){const A=x[g],D=x[b];D.start<=A.start+A.count+1?A.count=Math.max(A.count,D.start+D.count-A.start):(++g,x[g]=D)}x.length=g+1;for(let b=0,A=x.length;b<A;b++){const D=x[b];r.bufferSubData(h,D.start*S.BYTES_PER_ELEMENT,S,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(r.deleteBuffer(m.buffer),t.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const S=t.get(p);(!S||S.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=t.get(p);if(h===void 0)t.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var DM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,UM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,FM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,GM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,XM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,KM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,QM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,JM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$M=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,t1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,e1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,n1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,a1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r1="gl_FragColor = linearToOutputTexel( gl_FragColor );",o1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,c1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,u1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,f1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,h1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,v1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,S1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,M1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,b1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,R1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,C1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,D1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,N1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,U1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,L1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,O1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,z1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,F1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,G1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,X1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,q1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Z1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,K1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ib=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ab=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,rb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ob=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ub=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,db=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,hb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_b=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Eb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Db=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ib=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Bb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Fb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$b=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ce={alphahash_fragment:DM,alphahash_pars_fragment:NM,alphamap_fragment:UM,alphamap_pars_fragment:LM,alphatest_fragment:OM,alphatest_pars_fragment:PM,aomap_fragment:IM,aomap_pars_fragment:zM,batching_pars_vertex:BM,batching_vertex:FM,begin_vertex:GM,beginnormal_vertex:HM,bsdfs:VM,iridescence_fragment:kM,bumpmap_pars_fragment:XM,clipping_planes_fragment:WM,clipping_planes_pars_fragment:jM,clipping_planes_pars_vertex:qM,clipping_planes_vertex:YM,color_fragment:ZM,color_pars_fragment:KM,color_pars_vertex:QM,color_vertex:JM,common:$M,cube_uv_reflection_fragment:t1,defaultnormal_vertex:e1,displacementmap_pars_vertex:n1,displacementmap_vertex:i1,emissivemap_fragment:a1,emissivemap_pars_fragment:s1,colorspace_fragment:r1,colorspace_pars_fragment:o1,envmap_fragment:l1,envmap_common_pars_fragment:c1,envmap_pars_fragment:u1,envmap_pars_vertex:f1,envmap_physical_pars_fragment:M1,envmap_vertex:d1,fog_vertex:h1,fog_pars_vertex:p1,fog_fragment:m1,fog_pars_fragment:g1,gradientmap_pars_fragment:_1,lightmap_pars_fragment:v1,lights_lambert_fragment:x1,lights_lambert_pars_fragment:S1,lights_pars_begin:y1,lights_toon_fragment:b1,lights_toon_pars_fragment:E1,lights_phong_fragment:T1,lights_phong_pars_fragment:A1,lights_physical_fragment:w1,lights_physical_pars_fragment:R1,lights_fragment_begin:C1,lights_fragment_maps:D1,lights_fragment_end:N1,lightprobes_pars_fragment:U1,logdepthbuf_fragment:L1,logdepthbuf_pars_fragment:O1,logdepthbuf_pars_vertex:P1,logdepthbuf_vertex:I1,map_fragment:z1,map_pars_fragment:B1,map_particle_fragment:F1,map_particle_pars_fragment:G1,metalnessmap_fragment:H1,metalnessmap_pars_fragment:V1,morphinstance_vertex:k1,morphcolor_vertex:X1,morphnormal_vertex:W1,morphtarget_pars_vertex:j1,morphtarget_vertex:q1,normal_fragment_begin:Y1,normal_fragment_maps:Z1,normal_pars_fragment:K1,normal_pars_vertex:Q1,normal_vertex:J1,normalmap_pars_fragment:$1,clearcoat_normal_fragment_begin:tb,clearcoat_normal_fragment_maps:eb,clearcoat_pars_fragment:nb,iridescence_pars_fragment:ib,opaque_fragment:ab,packing:sb,premultiplied_alpha_fragment:rb,project_vertex:ob,dithering_fragment:lb,dithering_pars_fragment:cb,roughnessmap_fragment:ub,roughnessmap_pars_fragment:fb,shadowmap_pars_fragment:db,shadowmap_pars_vertex:hb,shadowmap_vertex:pb,shadowmask_pars_fragment:mb,skinbase_vertex:gb,skinning_pars_vertex:_b,skinning_vertex:vb,skinnormal_vertex:xb,specularmap_fragment:Sb,specularmap_pars_fragment:yb,tonemapping_fragment:Mb,tonemapping_pars_fragment:bb,transmission_fragment:Eb,transmission_pars_fragment:Tb,uv_pars_fragment:Ab,uv_pars_vertex:wb,uv_vertex:Rb,worldpos_vertex:Cb,background_vert:Db,background_frag:Nb,backgroundCube_vert:Ub,backgroundCube_frag:Lb,cube_vert:Ob,cube_frag:Pb,depth_vert:Ib,depth_frag:zb,distance_vert:Bb,distance_frag:Fb,equirect_vert:Gb,equirect_frag:Hb,linedashed_vert:Vb,linedashed_frag:kb,meshbasic_vert:Xb,meshbasic_frag:Wb,meshlambert_vert:jb,meshlambert_frag:qb,meshmatcap_vert:Yb,meshmatcap_frag:Zb,meshnormal_vert:Kb,meshnormal_frag:Qb,meshphong_vert:Jb,meshphong_frag:$b,meshphysical_vert:tE,meshphysical_frag:eE,meshtoon_vert:nE,meshtoon_frag:iE,points_vert:aE,points_frag:sE,shadow_vert:rE,shadow_frag:oE,sprite_vert:lE,sprite_frag:cE},Zt={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Te}},envmap:{envMap:{value:null},envMapRotation:{value:new Te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Te},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0},uvTransform:{value:new Te}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}}},ia={basic:{uniforms:ei([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:ei([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new Pe(0)},envMapIntensity:{value:1}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:ei([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:ei([Zt.common,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.roughnessmap,Zt.metalnessmap,Zt.fog,Zt.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:ei([Zt.common,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.gradientmap,Zt.fog,Zt.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:ei([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:ei([Zt.points,Zt.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:ei([Zt.common,Zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:ei([Zt.common,Zt.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:ei([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:ei([Zt.sprite,Zt.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new Te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Te}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distance:{uniforms:ei([Zt.common,Zt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distance_vert,fragmentShader:Ce.distance_frag},shadow:{uniforms:ei([Zt.lights,Zt.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};ia.physical={uniforms:ei([ia.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Te},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Te},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Te},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Te},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Te},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Te}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};const Fc={r:0,b:0,g:0},uE=new yn,Fv=new Te;Fv.set(-1,0,0,0,1,0,0,0,1);function fE(r,t,i,s,l,c){const d=new Pe(0);let p=l===!0?0:1,m,h,S=null,x=0,g=null;function b(R){let I=R.isScene===!0?R.background:null;if(I&&I.isTexture){const U=R.backgroundBlurriness>0;I=t.get(I,U)}return I}function A(R){let I=!1;const U=b(R);U===null?y(d,p):U&&U.isColor&&(y(U,1),I=!0);const H=r.xr.getEnvironmentBlendMode();H==="additive"?i.buffers.color.setClear(0,0,0,1,c):H==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function D(R,I){const U=b(I);U&&(U.isCubeTexture||U.mapping===$c)?(h===void 0&&(h=new tt(new Kt(1,1,1),new ca({name:"BackgroundCubeMaterial",uniforms:Jr(ia.backgroundCube.uniforms),vertexShader:ia.backgroundCube.vertexShader,fragmentShader:ia.backgroundCube.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(H,C,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=U,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(uE.makeRotationFromEuler(I.backgroundRotation)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Fv),h.material.toneMapped=ke.getTransfer(U.colorSpace)!==rn,(S!==U||x!==U.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,S=U,x=U.version,g=r.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new tt(new ll(2,2),new ca({name:"BackgroundMaterial",uniforms:Jr(ia.background.uniforms),vertexShader:ia.background.vertexShader,fragmentShader:ia.background.fragmentShader,side:bs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.toneMapped=ke.getTransfer(U.colorSpace)!==rn,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(S!==U||x!==U.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,S=U,x=U.version,g=r.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null))}function y(R,I){R.getRGB(Fc,Pv(r)),i.buffers.color.setClear(Fc.r,Fc.g,Fc.b,I,c)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(R,I=1){d.set(R),p=I,y(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(R){p=R,y(d,p)},render:A,addToRenderList:D,dispose:v}}function dE(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,d=!1;function p(G,Y,rt,dt,k){let L=!1;const B=x(G,dt,rt,Y);c!==B&&(c=B,h(c.object)),L=b(G,dt,rt,k),L&&A(G,dt,rt,k),k!==null&&t.update(k,r.ELEMENT_ARRAY_BUFFER),(L||d)&&(d=!1,U(G,Y,rt,dt),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function m(){return r.createVertexArray()}function h(G){return r.bindVertexArray(G)}function S(G){return r.deleteVertexArray(G)}function x(G,Y,rt,dt){const k=dt.wireframe===!0;let L=s[Y.id];L===void 0&&(L={},s[Y.id]=L);const B=G.isInstancedMesh===!0?G.id:0;let et=L[B];et===void 0&&(et={},L[B]=et);let ht=et[rt.id];ht===void 0&&(ht={},et[rt.id]=ht);let xt=ht[k];return xt===void 0&&(xt=g(m()),ht[k]=xt),xt}function g(G){const Y=[],rt=[],dt=[];for(let k=0;k<i;k++)Y[k]=0,rt[k]=0,dt[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:rt,attributeDivisors:dt,object:G,attributes:{},index:null}}function b(G,Y,rt,dt){const k=c.attributes,L=Y.attributes;let B=0;const et=rt.getAttributes();for(const ht in et)if(et[ht].location>=0){const O=k[ht];let Q=L[ht];if(Q===void 0&&(ht==="instanceMatrix"&&G.instanceMatrix&&(Q=G.instanceMatrix),ht==="instanceColor"&&G.instanceColor&&(Q=G.instanceColor)),O===void 0||O.attribute!==Q||Q&&O.data!==Q.data)return!0;B++}return c.attributesNum!==B||c.index!==dt}function A(G,Y,rt,dt){const k={},L=Y.attributes;let B=0;const et=rt.getAttributes();for(const ht in et)if(et[ht].location>=0){let O=L[ht];O===void 0&&(ht==="instanceMatrix"&&G.instanceMatrix&&(O=G.instanceMatrix),ht==="instanceColor"&&G.instanceColor&&(O=G.instanceColor));const Q={};Q.attribute=O,O&&O.data&&(Q.data=O.data),k[ht]=Q,B++}c.attributes=k,c.attributesNum=B,c.index=dt}function D(){const G=c.newAttributes;for(let Y=0,rt=G.length;Y<rt;Y++)G[Y]=0}function y(G){v(G,0)}function v(G,Y){const rt=c.newAttributes,dt=c.enabledAttributes,k=c.attributeDivisors;rt[G]=1,dt[G]===0&&(r.enableVertexAttribArray(G),dt[G]=1),k[G]!==Y&&(r.vertexAttribDivisor(G,Y),k[G]=Y)}function R(){const G=c.newAttributes,Y=c.enabledAttributes;for(let rt=0,dt=Y.length;rt<dt;rt++)Y[rt]!==G[rt]&&(r.disableVertexAttribArray(rt),Y[rt]=0)}function I(G,Y,rt,dt,k,L,B){B===!0?r.vertexAttribIPointer(G,Y,rt,k,L):r.vertexAttribPointer(G,Y,rt,dt,k,L)}function U(G,Y,rt,dt){D();const k=dt.attributes,L=rt.getAttributes(),B=Y.defaultAttributeValues;for(const et in L){const ht=L[et];if(ht.location>=0){let xt=k[et];if(xt===void 0&&(et==="instanceMatrix"&&G.instanceMatrix&&(xt=G.instanceMatrix),et==="instanceColor"&&G.instanceColor&&(xt=G.instanceColor)),xt!==void 0){const O=xt.normalized,Q=xt.itemSize,yt=t.get(xt);if(yt===void 0)continue;const Rt=yt.buffer,Ot=yt.type,st=yt.bytesPerElement,At=Ot===r.INT||Ot===r.UNSIGNED_INT||xt.gpuType===Hh;if(xt.isInterleavedBufferAttribute){const _t=xt.data,Et=_t.stride,qt=xt.offset;if(_t.isInstancedInterleavedBuffer){for(let Xt=0;Xt<ht.locationSize;Xt++)v(ht.location+Xt,_t.meshPerAttribute);G.isInstancedMesh!==!0&&dt._maxInstanceCount===void 0&&(dt._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Xt=0;Xt<ht.locationSize;Xt++)y(ht.location+Xt);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let Xt=0;Xt<ht.locationSize;Xt++)I(ht.location+Xt,Q/ht.locationSize,Ot,O,Et*st,(qt+Q/ht.locationSize*Xt)*st,At)}else{if(xt.isInstancedBufferAttribute){for(let _t=0;_t<ht.locationSize;_t++)v(ht.location+_t,xt.meshPerAttribute);G.isInstancedMesh!==!0&&dt._maxInstanceCount===void 0&&(dt._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let _t=0;_t<ht.locationSize;_t++)y(ht.location+_t);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let _t=0;_t<ht.locationSize;_t++)I(ht.location+_t,Q/ht.locationSize,Ot,O,Q*st,Q/ht.locationSize*_t*st,At)}}else if(B!==void 0){const O=B[et];if(O!==void 0)switch(O.length){case 2:r.vertexAttrib2fv(ht.location,O);break;case 3:r.vertexAttrib3fv(ht.location,O);break;case 4:r.vertexAttrib4fv(ht.location,O);break;default:r.vertexAttrib1fv(ht.location,O)}}}}R()}function H(){P();for(const G in s){const Y=s[G];for(const rt in Y){const dt=Y[rt];for(const k in dt){const L=dt[k];for(const B in L)S(L[B].object),delete L[B];delete dt[k]}}delete s[G]}}function C(G){if(s[G.id]===void 0)return;const Y=s[G.id];for(const rt in Y){const dt=Y[rt];for(const k in dt){const L=dt[k];for(const B in L)S(L[B].object),delete L[B];delete dt[k]}}delete s[G.id]}function z(G){for(const Y in s){const rt=s[Y];for(const dt in rt){const k=rt[dt];if(k[G.id]===void 0)continue;const L=k[G.id];for(const B in L)S(L[B].object),delete L[B];delete k[G.id]}}}function T(G){for(const Y in s){const rt=s[Y],dt=G.isInstancedMesh===!0?G.id:0,k=rt[dt];if(k!==void 0){for(const L in k){const B=k[L];for(const et in B)S(B[et].object),delete B[et];delete k[L]}delete rt[dt],Object.keys(rt).length===0&&delete s[Y]}}}function P(){W(),d=!0,c!==l&&(c=l,h(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:P,resetDefaultState:W,dispose:H,releaseStatesOfGeometry:C,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:D,enableAttribute:y,disableUnusedAttributes:R}}function hE(r,t,i){let s;function l(m){s=m}function c(m,h){r.drawArrays(s,m,h),i.update(h,s,1)}function d(m,h,S){S!==0&&(r.drawArraysInstanced(s,m,h,S),i.update(h,s,S))}function p(m,h,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,h,0,S);let g=0;for(let b=0;b<S;b++)g+=h[b];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p}function pE(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Wi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const T=z===za&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==bi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==aa&&!T)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const S=m(h);S!==h&&(Se("WebGLRenderer:",h,"not supported, using",S,"instead."),h=S);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&Se("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const b=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),I=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),H=r.getParameter(r.MAX_SAMPLES),C=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:b,maxVertexTextures:A,maxTextureSize:D,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:R,maxVaryings:I,maxFragmentUniforms:U,maxSamples:H,samples:C}}function mE(r){const t=this;let i=null,s=0,l=!1,c=!1;const d=new qs,p=new Te,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const b=x.length!==0||g||s!==0||l;return l=g,s=x.length,b},this.beginShadows=function(){c=!0,S(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=S(x,g,0)},this.setState=function(x,g,b){const A=x.clippingPlanes,D=x.clipIntersection,y=x.clipShadows,v=r.get(x);if(!l||A===null||A.length===0||c&&!y)c?S(null):h();else{const R=c?0:s,I=R*4;let U=v.clippingState||null;m.value=U,U=S(A,g,I,b);for(let H=0;H!==I;++H)U[H]=i[H];v.clippingState=U,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=R}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function S(x,g,b,A){const D=x!==null?x.length:0;let y=null;if(D!==0){if(y=m.value,A!==!0||y===null){const v=b+D*4,R=g.matrixWorldInverse;p.getNormalMatrix(R),(y===null||y.length<v)&&(y=new Float32Array(v));for(let I=0,U=b;I!==D;++I,U+=4)d.copy(x[I]).applyMatrix4(R,p),d.normal.toArray(y,U),y[U+3]=d.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=D,t.numIntersection=0,y}}const Ms=4,D_=[.125,.215,.35,.446,.526,.582],Zs=20,gE=256,Qo=new tp,N_=new Pe;let Hd=null,Vd=0,kd=0,Xd=!1;const _E=new X;class U_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:d=256,position:p=_E}=c;Hd=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),Xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=P_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=O_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Hd,Vd,kd),this._renderer.xr.enabled=Xd,t.scissorTest=!1,jr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Js||t.mapping===Kr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Hd=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),Xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:za,format:Wi,colorSpace:Zc,depthBuffer:!1},l=L_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=L_(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vE(c)),this._blurMaterial=SE(c,t,i),this._ggxMaterial=xE(c,t,i)}return l}_compileMaterial(t){const i=new tt(new fi,t);this._renderer.compile(i,Qo)}_sceneToCubeUV(t,i,s,l,c){const m=new Mi(90,1,i,s),h=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,b=x.toneMapping;x.getClearColor(N_),x.toneMapping=ra,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new tt(new Kt,new al({name:"PMREM.Background",side:ui,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,y=D.material;let v=!1;const R=t.background;R?R.isColor&&(y.color.copy(R),t.background=null,v=!0):(y.color.copy(N_),v=!0);for(let I=0;I<6;I++){const U=I%3;U===0?(m.up.set(0,h[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+S[I],c.y,c.z)):U===1?(m.up.set(0,0,h[I]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+S[I],c.z)):(m.up.set(0,h[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+S[I]));const H=this._cubeSize;jr(l,U*H,I>2?H:0,H,H),x.setRenderTarget(l),v&&x.render(D,m),x.render(t,m)}x.toneMapping=b,x.autoClear=g,t.background=R}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Js||t.mapping===Kr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=P_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=O_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;jr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Qo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[s];p.material=d;const m=d.uniforms,h=s/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),x=Math.sqrt(h*h-S*S),g=0+h*1.25,b=x*g,{_lodMax:A}=this,D=this._sizeLods[s],y=3*D*(s>A-Ms?s-A+Ms:0),v=4*(this._cubeSize-D);m.envMap.value=t.texture,m.roughness.value=b,m.mipInt.value=A-i,jr(c,y,v,3*D,2*D),l.setRenderTarget(c),l.render(p,Qo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=A-s,jr(t,y,v,3*D,2*D),l.setRenderTarget(t),l.render(p,Qo)}_blur(t,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",c),this._halfBlur(d,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");const S=3,x=this._lodMeshes[l];x.material=h;const g=h.uniforms,b=this._sizeLods[s]-1,A=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*Zs-1),D=c/A,y=isFinite(c)?1+Math.floor(S*D):Zs;y>Zs&&Se(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Zs}`);const v=[];let R=0;for(let z=0;z<Zs;++z){const T=z/D,P=Math.exp(-T*T/2);v.push(P),z===0?R+=P:z<y&&(R+=2*P)}for(let z=0;z<v.length;z++)v[z]=v[z]/R;g.envMap.value=t.texture,g.samples.value=y,g.weights.value=v,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:I}=this;g.dTheta.value=A,g.mipInt.value=I-s;const U=this._sizeLods[l],H=3*U*(l>I-Ms?l-I+Ms:0),C=4*(this._cubeSize-U);jr(i,H,C,3*U,2*U),m.setRenderTarget(i),m.render(x,Qo)}}function vE(r){const t=[],i=[],s=[];let l=r;const c=r-Ms+1+D_.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);t.push(p);let m=1/p;d>r-Ms?m=D_[d-r+Ms-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),S=-h,x=1+h,g=[S,S,x,S,x,x,S,S,x,x,S,x],b=6,A=6,D=3,y=2,v=1,R=new Float32Array(D*A*b),I=new Float32Array(y*A*b),U=new Float32Array(v*A*b);for(let C=0;C<b;C++){const z=C%3*2/3-1,T=C>2?0:-1,P=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];R.set(P,D*A*C),I.set(g,y*A*C);const W=[C,C,C,C,C,C];U.set(W,v*A*C)}const H=new fi;H.setAttribute("position",new ji(R,D)),H.setAttribute("uv",new ji(I,y)),H.setAttribute("faceIndex",new ji(U,v)),s.push(new tt(H,null)),l>Ms&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function L_(r,t,i){const s=new oa(r,t,i);return s.texture.mapping=$c,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function jr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function xE(r,t,i){return new ca({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gE,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:eu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function SE(r,t,i){const s=new Float32Array(Zs),l=new X(0,1,0);return new ca({name:"SphericalGaussianBlur",defines:{n:Zs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function O_(){return new ca({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function P_(){return new ca({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function eu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Gv extends oa{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Lv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Kt(5,5,5),c=new ca({name:"CubemapFromEquirect",uniforms:Jr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ui,blending:Oa});c.uniforms.tEquirect.value=i;const d=new tt(l,c),p=i.minFilter;return i.minFilter===Ks&&(i.minFilter=Qn),new TM(1,10,this).update(t,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(c)}}function yE(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,b=!1){return g==null?null:b?d(g):c(g)}function c(g){if(g&&g.isTexture){const b=g.mapping;if(b===hd||b===pd)if(t.has(g)){const A=t.get(g).texture;return p(A,g.mapping)}else{const A=g.image;if(A&&A.height>0){const D=new Gv(A.height);return D.fromEquirectangularTexture(r,g),t.set(g,D),g.addEventListener("dispose",h),p(D.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const b=g.mapping,A=b===hd||b===pd,D=b===Js||b===Kr;if(A||D){let y=i.get(g);const v=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return s===null&&(s=new U_(r)),y=A?s.fromEquirectangular(g,y):s.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const R=g.image;return A&&R&&R.height>0||D&&R&&m(R)?(s===null&&(s=new U_(r)),y=A?s.fromEquirectangular(g):s.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",S),y.texture):null}}}return g}function p(g,b){return b===hd?g.mapping=Js:b===pd&&(g.mapping=Kr),g}function m(g){let b=0;const A=6;for(let D=0;D<A;D++)g[D]!==void 0&&b++;return b===A}function h(g){const b=g.target;b.removeEventListener("dispose",h);const A=t.get(b);A!==void 0&&(t.delete(b),A.dispose())}function S(g){const b=g.target;b.removeEventListener("dispose",S);const A=i.get(b);A!==void 0&&(i.delete(b),A.dispose())}function x(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function ME(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Oh("WebGLRenderer: "+s+" extension not supported."),l}}}function bE(r,t,i,s){const l={},c=new WeakMap;function d(x){const g=x.target;g.index!==null&&t.remove(g.index);for(const A in g.attributes)t.remove(g.attributes[A]);g.removeEventListener("dispose",d),delete l[g.id];const b=c.get(g);b&&(t.remove(b),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(x,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const b in g)t.update(g[b],r.ARRAY_BUFFER)}function h(x){const g=[],b=x.index,A=x.attributes.position;let D=0;if(A===void 0)return;if(b!==null){const R=b.array;D=b.version;for(let I=0,U=R.length;I<U;I+=3){const H=R[I+0],C=R[I+1],z=R[I+2];g.push(H,C,C,z,z,H)}}else{const R=A.array;D=A.version;for(let I=0,U=R.length/3-1;I<U;I+=3){const H=I+0,C=I+1,z=I+2;g.push(H,C,C,z,z,H)}}const y=new(A.count>=65535?Dv:Cv)(g,1);y.version=D;const v=c.get(x);v&&t.remove(v),c.set(x,y)}function S(x){const g=c.get(x);if(g){const b=x.index;b!==null&&g.version<b.version&&h(x)}else h(x);return c.get(x)}return{get:p,update:m,getWireframeAttribute:S}}function EE(r,t,i){let s;function l(x){s=x}let c,d;function p(x){c=x.type,d=x.bytesPerElement}function m(x,g){r.drawElements(s,g,c,x*d),i.update(g,s,1)}function h(x,g,b){b!==0&&(r.drawElementsInstanced(s,g,c,x*d,b),i.update(g,s,b))}function S(x,g,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,x,0,b);let D=0;for(let y=0;y<b;y++)D+=g[y];i.update(D,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=S}function TE(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,p){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:je("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function AE(r,t,i){const s=new WeakMap,l=new Sn;function c(d,p,m){const h=d.morphTargetInfluences,S=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=S!==void 0?S.length:0;let g=s.get(p);if(g===void 0||g.count!==x){let W=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",W)};var b=W;g!==void 0&&g.texture.dispose();const A=p.morphAttributes.position!==void 0,D=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,v=p.morphAttributes.position||[],R=p.morphAttributes.normal||[],I=p.morphAttributes.color||[];let U=0;A===!0&&(U=1),D===!0&&(U=2),y===!0&&(U=3);let H=p.attributes.position.count*U,C=1;H>t.maxTextureSize&&(C=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const z=new Float32Array(H*C*4*x),T=new Av(z,H,C,x);T.type=aa,T.needsUpdate=!0;const P=U*4;for(let G=0;G<x;G++){const Y=v[G],rt=R[G],dt=I[G],k=H*C*4*G;for(let L=0;L<Y.count;L++){const B=L*P;A===!0&&(l.fromBufferAttribute(Y,L),z[k+B+0]=l.x,z[k+B+1]=l.y,z[k+B+2]=l.z,z[k+B+3]=0),D===!0&&(l.fromBufferAttribute(rt,L),z[k+B+4]=l.x,z[k+B+5]=l.y,z[k+B+6]=l.z,z[k+B+7]=0),y===!0&&(l.fromBufferAttribute(dt,L),z[k+B+8]=l.x,z[k+B+9]=l.y,z[k+B+10]=l.z,z[k+B+11]=dt.itemSize===4?l.w:1)}}g={count:x,texture:T,size:new qe(H,C)},s.set(p,g),p.addEventListener("dispose",W)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let A=0;for(let y=0;y<h.length;y++)A+=h[y];const D=p.morphTargetsRelative?1:1-A;m.getUniforms().setValue(r,"morphTargetBaseInfluence",D),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function wE(r,t,i,s,l){let c=new WeakMap;function d(h){const S=l.render.frame,x=h.geometry,g=t.get(h,x);if(c.get(g)!==S&&(t.update(g),c.set(g,S)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==S&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,S))),h.isSkinnedMesh){const b=h.skeleton;c.get(b)!==S&&(b.update(),c.set(b,S))}return g}function p(){c=new WeakMap}function m(h){const S=h.target;S.removeEventListener("dispose",m),s.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:d,dispose:p}}const RE={[uv]:"LINEAR_TONE_MAPPING",[fv]:"REINHARD_TONE_MAPPING",[dv]:"CINEON_TONE_MAPPING",[hv]:"ACES_FILMIC_TONE_MAPPING",[mv]:"AGX_TONE_MAPPING",[gv]:"NEUTRAL_TONE_MAPPING",[pv]:"CUSTOM_TONE_MAPPING"};function CE(r,t,i,s,l){const c=new oa(t,i,{type:r,depthBuffer:s,stencilBuffer:l,depthTexture:s?new Qr(t,i):void 0}),d=new oa(t,i,{type:za,depthBuffer:!1,stencilBuffer:!1}),p=new fi;p.setAttribute("position",new Fn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Fn([0,2,0,0,2,0],2));const m=new xM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new tt(p,m),S=new tp(-1,1,1,-1,0,1);let x=null,g=null,b=!1,A,D=null,y=[],v=!1;this.setSize=function(R,I){c.setSize(R,I),d.setSize(R,I);for(let U=0;U<y.length;U++){const H=y[U];H.setSize&&H.setSize(R,I)}},this.setEffects=function(R){y=R,v=y.length>0&&y[0].isRenderPass===!0;const I=c.width,U=c.height;for(let H=0;H<y.length;H++){const C=y[H];C.setSize&&C.setSize(I,U)}},this.begin=function(R,I){if(b||R.toneMapping===ra&&y.length===0)return!1;if(D=I,I!==null){const U=I.width,H=I.height;(c.width!==U||c.height!==H)&&this.setSize(U,H)}return v===!1&&R.setRenderTarget(c),A=R.toneMapping,R.toneMapping=ra,!0},this.hasRenderPass=function(){return v},this.end=function(R,I){R.toneMapping=A,b=!0;let U=c,H=d;for(let C=0;C<y.length;C++){const z=y[C];if(z.enabled!==!1&&(z.render(R,H,U,I),z.needsSwap!==!1)){const T=U;U=H,H=T}}if(x!==R.outputColorSpace||g!==R.toneMapping){x=R.outputColorSpace,g=R.toneMapping,m.defines={},ke.getTransfer(x)===rn&&(m.defines.SRGB_TRANSFER="");const C=RE[g];C&&(m.defines[C]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,R.setRenderTarget(D),R.render(h,S),D=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),d.dispose(),p.dispose(),m.dispose()}}const Hv=new Jn,zh=new Qr(1,1),Vv=new Av,kv=new Zy,Xv=new Lv,I_=[],z_=[],B_=new Float32Array(16),F_=new Float32Array(9),G_=new Float32Array(4);function eo(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=I_[l];if(c===void 0&&(c=new Float32Array(l),I_[l]=c),t!==0){s.toArray(c,0);for(let d=1,p=0;d!==t;++d)p+=i,r[d].toArray(c,p)}return c}function Pn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function In(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function nu(r,t){let i=z_[t];i===void 0&&(i=new Int32Array(t),z_[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function DE(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function NE(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Pn(i,t))return;r.uniform2fv(this.addr,t),In(i,t)}}function UE(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Pn(i,t))return;r.uniform3fv(this.addr,t),In(i,t)}}function LE(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Pn(i,t))return;r.uniform4fv(this.addr,t),In(i,t)}}function OE(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Pn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),In(i,t)}else{if(Pn(i,s))return;G_.set(s),r.uniformMatrix2fv(this.addr,!1,G_),In(i,s)}}function PE(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Pn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),In(i,t)}else{if(Pn(i,s))return;F_.set(s),r.uniformMatrix3fv(this.addr,!1,F_),In(i,s)}}function IE(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Pn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),In(i,t)}else{if(Pn(i,s))return;B_.set(s),r.uniformMatrix4fv(this.addr,!1,B_),In(i,s)}}function zE(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function BE(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Pn(i,t))return;r.uniform2iv(this.addr,t),In(i,t)}}function FE(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Pn(i,t))return;r.uniform3iv(this.addr,t),In(i,t)}}function GE(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Pn(i,t))return;r.uniform4iv(this.addr,t),In(i,t)}}function HE(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function VE(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Pn(i,t))return;r.uniform2uiv(this.addr,t),In(i,t)}}function kE(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Pn(i,t))return;r.uniform3uiv(this.addr,t),In(i,t)}}function XE(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Pn(i,t))return;r.uniform4uiv(this.addr,t),In(i,t)}}function WE(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(zh.compareFunction=i.isReversedDepthBuffer()?Yh:qh,c=zh):c=Hv,i.setTexture2D(t||c,l)}function jE(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||kv,l)}function qE(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Xv,l)}function YE(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Vv,l)}function ZE(r){switch(r){case 5126:return DE;case 35664:return NE;case 35665:return UE;case 35666:return LE;case 35674:return OE;case 35675:return PE;case 35676:return IE;case 5124:case 35670:return zE;case 35667:case 35671:return BE;case 35668:case 35672:return FE;case 35669:case 35673:return GE;case 5125:return HE;case 36294:return VE;case 36295:return kE;case 36296:return XE;case 35678:case 36198:case 36298:case 36306:case 35682:return WE;case 35679:case 36299:case 36307:return jE;case 35680:case 36300:case 36308:case 36293:return qE;case 36289:case 36303:case 36311:case 36292:return YE}}function KE(r,t){r.uniform1fv(this.addr,t)}function QE(r,t){const i=eo(t,this.size,2);r.uniform2fv(this.addr,i)}function JE(r,t){const i=eo(t,this.size,3);r.uniform3fv(this.addr,i)}function $E(r,t){const i=eo(t,this.size,4);r.uniform4fv(this.addr,i)}function tT(r,t){const i=eo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function eT(r,t){const i=eo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function nT(r,t){const i=eo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function iT(r,t){r.uniform1iv(this.addr,t)}function aT(r,t){r.uniform2iv(this.addr,t)}function sT(r,t){r.uniform3iv(this.addr,t)}function rT(r,t){r.uniform4iv(this.addr,t)}function oT(r,t){r.uniform1uiv(this.addr,t)}function lT(r,t){r.uniform2uiv(this.addr,t)}function cT(r,t){r.uniform3uiv(this.addr,t)}function uT(r,t){r.uniform4uiv(this.addr,t)}function fT(r,t,i){const s=this.cache,l=t.length,c=nu(i,l);Pn(s,c)||(r.uniform1iv(this.addr,c),In(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=zh:d=Hv;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||d,c[p])}function dT(r,t,i){const s=this.cache,l=t.length,c=nu(i,l);Pn(s,c)||(r.uniform1iv(this.addr,c),In(s,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||kv,c[d])}function hT(r,t,i){const s=this.cache,l=t.length,c=nu(i,l);Pn(s,c)||(r.uniform1iv(this.addr,c),In(s,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||Xv,c[d])}function pT(r,t,i){const s=this.cache,l=t.length,c=nu(i,l);Pn(s,c)||(r.uniform1iv(this.addr,c),In(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||Vv,c[d])}function mT(r){switch(r){case 5126:return KE;case 35664:return QE;case 35665:return JE;case 35666:return $E;case 35674:return tT;case 35675:return eT;case 35676:return nT;case 5124:case 35670:return iT;case 35667:case 35671:return aT;case 35668:case 35672:return sT;case 35669:case 35673:return rT;case 5125:return oT;case 36294:return lT;case 36295:return cT;case 36296:return uT;case 35678:case 36198:case 36298:case 36306:case 35682:return fT;case 35679:case 36299:case 36307:return dT;case 35680:case 36300:case 36308:case 36293:return hT;case 36289:case 36303:case 36311:case 36292:return pT}}class gT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=ZE(i.type)}}class _T{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=mT(i.type)}}class vT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(t,i[p.id],s)}}}const Wd=/(\w+)(\])?(\[|\.)?/g;function H_(r,t){r.seq.push(t),r.map[t.id]=t}function xT(r,t,i){const s=r.name,l=s.length;for(Wd.lastIndex=0;;){const c=Wd.exec(s),d=Wd.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){H_(i,h===void 0?new gT(p,r,t):new _T(p,r,t));break}else{let x=i.map[p];x===void 0&&(x=new vT(p),H_(i,x)),i=x}}}class jc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=t.getActiveUniform(i,d),m=t.getUniformLocation(i,p.name);xT(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function V_(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const ST=37297;let yT=0;function MT(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const p=d+1;s.push(`${p===t?">":" "} ${p}: ${i[d]}`)}return s.join(`
`)}const k_=new Te;function bT(r){ke._getMatrix(k_,ke.workingColorSpace,r);const t=`mat3( ${k_.elements.map(i=>i.toFixed(4))} )`;switch(ke.getTransfer(r)){case Kc:return[t,"LinearTransferOETF"];case rn:return[t,"sRGBTransferOETF"];default:return Se("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function X_(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+MT(r.getShaderSource(t),p)}else return c}function ET(r,t){const i=bT(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const TT={[uv]:"Linear",[fv]:"Reinhard",[dv]:"Cineon",[hv]:"ACESFilmic",[mv]:"AgX",[gv]:"Neutral",[pv]:"Custom"};function AT(r,t){const i=TT[t];return i===void 0?(Se("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Gc=new X;function wT(){ke.getLuminanceCoefficients(Gc);const r=Gc.x.toFixed(4),t=Gc.y.toFixed(4),i=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tl).join(`
`)}function CT(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function DT(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),d=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:r.getAttribLocation(t,d),locationSize:p}}return i}function tl(r){return r!==""}function W_(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function j_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const NT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bh(r){return r.replace(NT,LT)}const UT=new Map;function LT(r,t){let i=Ce[t];if(i===void 0){const s=UT.get(t);if(s!==void 0)i=Ce[s],Se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Bh(i)}const OT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function q_(r){return r.replace(OT,PT)}function PT(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Y_(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const IT={[Hc]:"SHADOWMAP_TYPE_PCF",[$o]:"SHADOWMAP_TYPE_VSM"};function zT(r){return IT[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const BT={[Js]:"ENVMAP_TYPE_CUBE",[Kr]:"ENVMAP_TYPE_CUBE",[$c]:"ENVMAP_TYPE_CUBE_UV"};function FT(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":BT[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const GT={[Kr]:"ENVMAP_MODE_REFRACTION"};function HT(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":GT[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const VT={[cv]:"ENVMAP_BLENDING_MULTIPLY",[Ry]:"ENVMAP_BLENDING_MIX",[Cy]:"ENVMAP_BLENDING_ADD"};function kT(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":VT[r.combine]||"ENVMAP_BLENDING_NONE"}function XT(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function WT(r,t,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=zT(i),h=FT(i),S=HT(i),x=kT(i),g=XT(i),b=RT(i),A=CT(c),D=l.createProgram();let y,v,R=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(tl).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(tl).join(`
`),v.length>0&&(v+=`
`)):(y=[Y_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tl).join(`
`),v=[Y_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+S:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ra?"#define TONE_MAPPING":"",i.toneMapping!==ra?Ce.tonemapping_pars_fragment:"",i.toneMapping!==ra?AT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ce.colorspace_pars_fragment,ET("linearToOutputTexel",i.outputColorSpace),wT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(tl).join(`
`)),d=Bh(d),d=W_(d,i),d=j_(d,i),p=Bh(p),p=W_(p,i),p=j_(p,i),d=q_(d),p=q_(p),i.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,y=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===e_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===e_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const I=R+y+d,U=R+v+p,H=V_(l,l.VERTEX_SHADER,I),C=V_(l,l.FRAGMENT_SHADER,U);l.attachShader(D,H),l.attachShader(D,C),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function z(G){if(r.debug.checkShaderErrors){const Y=l.getProgramInfoLog(D)||"",rt=l.getShaderInfoLog(H)||"",dt=l.getShaderInfoLog(C)||"",k=Y.trim(),L=rt.trim(),B=dt.trim();let et=!0,ht=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(et=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,D,H,C);else{const xt=X_(l,H,"vertex"),O=X_(l,C,"fragment");je("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+k+`
`+xt+`
`+O)}else k!==""?Se("WebGLProgram: Program Info Log:",k):(L===""||B==="")&&(ht=!1);ht&&(G.diagnostics={runnable:et,programLog:k,vertexShader:{log:L,prefix:y},fragmentShader:{log:B,prefix:v}})}l.deleteShader(H),l.deleteShader(C),T=new jc(l,D),P=DT(l,D)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let P;this.getAttributes=function(){return P===void 0&&z(this),P};let W=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=l.getProgramParameter(D,ST)),W},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=yT++,this.cacheKey=t,this.usedTimes=1,this.program=D,this.vertexShader=H,this.fragmentShader=C,this}let jT=0;class qT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new YT(t),i.set(t,s)),s}}class YT{constructor(t){this.id=jT++,this.code=t,this.usedTimes=0}}function ZT(r){return r===$s||r===qc||r===Yc}function KT(r,t,i,s,l,c){const d=new wv,p=new qT,m=new Set,h=[],S=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(T){return m.add(T),T===0?"uv":`uv${T}`}function D(T,P,W,G,Y,rt){const dt=G.fog,k=Y.geometry,L=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,B=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,et=t.get(T.envMap||L,B),ht=et&&et.mapping===$c?et.image.height:null,xt=b[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&Se("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const O=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Q=O!==void 0?O.length:0;let yt=0;k.morphAttributes.position!==void 0&&(yt=1),k.morphAttributes.normal!==void 0&&(yt=2),k.morphAttributes.color!==void 0&&(yt=3);let Rt,Ot,st,At;if(xt){const de=ia[xt];Rt=de.vertexShader,Ot=de.fragmentShader}else Rt=T.vertexShader,Ot=T.fragmentShader,p.update(T),st=p.getVertexShaderID(T),At=p.getFragmentShaderID(T);const _t=r.getRenderTarget(),Et=r.state.buffers.depth.getReversed(),qt=Y.isInstancedMesh===!0,Xt=Y.isBatchedMesh===!0,ve=!!T.map,Qt=!!T.matcap,$t=!!et,ye=!!T.aoMap,he=!!T.lightMap,Ge=!!T.bumpMap,Ne=!!T.normalMap,tn=!!T.displacementMap,Z=!!T.emissiveMap,Ue=!!T.metalnessMap,fe=!!T.roughnessMap,Ee=T.anisotropy>0,It=T.clearcoat>0,Ye=T.dispersion>0,N=T.iridescence>0,E=T.sheen>0,at=T.transmission>0,bt=Ee&&!!T.anisotropyMap,Ut=It&&!!T.clearcoatMap,Vt=It&&!!T.clearcoatNormalMap,pt=It&&!!T.clearcoatRoughnessMap,ot=N&&!!T.iridescenceMap,mt=N&&!!T.iridescenceThicknessMap,Lt=E&&!!T.sheenColorMap,Ht=E&&!!T.sheenRoughnessMap,zt=!!T.specularMap,Pt=!!T.specularColorMap,me=!!T.specularIntensityMap,ge=at&&!!T.transmissionMap,De=at&&!!T.thicknessMap,j=!!T.gradientMap,Bt=!!T.alphaMap,St=T.alphaTest>0,vt=!!T.alphaHash,kt=!!T.extensions;let Ct=ra;T.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(Ct=r.toneMapping);const ee={shaderID:xt,shaderType:T.type,shaderName:T.name,vertexShader:Rt,fragmentShader:Ot,defines:T.defines,customVertexShaderID:st,customFragmentShaderID:At,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Xt,batchingColor:Xt&&Y._colorsTexture!==null,instancing:qt,instancingColor:qt&&Y.instanceColor!==null,instancingMorph:qt&&Y.morphTexture!==null,outputColorSpace:_t===null?r.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:ke.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:ve,matcap:Qt,envMap:$t,envMapMode:$t&&et.mapping,envMapCubeUVHeight:ht,aoMap:ye,lightMap:he,bumpMap:Ge,normalMap:Ne,displacementMap:tn,emissiveMap:Z,normalMapObjectSpace:Ne&&T.normalMapType===Uy,normalMapTangentSpace:Ne&&T.normalMapType===Lh,packedNormalMap:Ne&&T.normalMapType===Lh&&ZT(T.normalMap.format),metalnessMap:Ue,roughnessMap:fe,anisotropy:Ee,anisotropyMap:bt,clearcoat:It,clearcoatMap:Ut,clearcoatNormalMap:Vt,clearcoatRoughnessMap:pt,dispersion:Ye,iridescence:N,iridescenceMap:ot,iridescenceThicknessMap:mt,sheen:E,sheenColorMap:Lt,sheenRoughnessMap:Ht,specularMap:zt,specularColorMap:Pt,specularIntensityMap:me,transmission:at,transmissionMap:ge,thicknessMap:De,gradientMap:j,opaque:T.transparent===!1&&T.blending===qr&&T.alphaToCoverage===!1,alphaMap:Bt,alphaTest:St,alphaHash:vt,combine:T.combine,mapUv:ve&&A(T.map.channel),aoMapUv:ye&&A(T.aoMap.channel),lightMapUv:he&&A(T.lightMap.channel),bumpMapUv:Ge&&A(T.bumpMap.channel),normalMapUv:Ne&&A(T.normalMap.channel),displacementMapUv:tn&&A(T.displacementMap.channel),emissiveMapUv:Z&&A(T.emissiveMap.channel),metalnessMapUv:Ue&&A(T.metalnessMap.channel),roughnessMapUv:fe&&A(T.roughnessMap.channel),anisotropyMapUv:bt&&A(T.anisotropyMap.channel),clearcoatMapUv:Ut&&A(T.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&A(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&A(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&A(T.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&A(T.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&A(T.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&A(T.sheenRoughnessMap.channel),specularMapUv:zt&&A(T.specularMap.channel),specularColorMapUv:Pt&&A(T.specularColorMap.channel),specularIntensityMapUv:me&&A(T.specularIntensityMap.channel),transmissionMapUv:ge&&A(T.transmissionMap.channel),thicknessMapUv:De&&A(T.thicknessMap.channel),alphaMapUv:Bt&&A(T.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ne||Ee),vertexNormals:!!k.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!k.attributes.uv&&(ve||Bt),fog:!!dt,useFog:T.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||k.attributes.normal===void 0&&Ne===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Et,skinning:Y.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:yt,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:rt.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&W.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ct,decodeVideoTexture:ve&&T.map.isVideoTexture===!0&&ke.getTransfer(T.map.colorSpace)===rn,decodeVideoTextureEmissive:Z&&T.emissiveMap.isVideoTexture===!0&&ke.getTransfer(T.emissiveMap.colorSpace)===rn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ua,flipSided:T.side===ui,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:kt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&T.extensions.multiDraw===!0||Xt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ee.vertexUv1s=m.has(1),ee.vertexUv2s=m.has(2),ee.vertexUv3s=m.has(3),m.clear(),ee}function y(T){const P=[];if(T.shaderID?P.push(T.shaderID):(P.push(T.customVertexShaderID),P.push(T.customFragmentShaderID)),T.defines!==void 0)for(const W in T.defines)P.push(W),P.push(T.defines[W]);return T.isRawShaderMaterial===!1&&(v(P,T),R(P,T),P.push(r.outputColorSpace)),P.push(T.customProgramCacheKey),P.join()}function v(T,P){T.push(P.precision),T.push(P.outputColorSpace),T.push(P.envMapMode),T.push(P.envMapCubeUVHeight),T.push(P.mapUv),T.push(P.alphaMapUv),T.push(P.lightMapUv),T.push(P.aoMapUv),T.push(P.bumpMapUv),T.push(P.normalMapUv),T.push(P.displacementMapUv),T.push(P.emissiveMapUv),T.push(P.metalnessMapUv),T.push(P.roughnessMapUv),T.push(P.anisotropyMapUv),T.push(P.clearcoatMapUv),T.push(P.clearcoatNormalMapUv),T.push(P.clearcoatRoughnessMapUv),T.push(P.iridescenceMapUv),T.push(P.iridescenceThicknessMapUv),T.push(P.sheenColorMapUv),T.push(P.sheenRoughnessMapUv),T.push(P.specularMapUv),T.push(P.specularColorMapUv),T.push(P.specularIntensityMapUv),T.push(P.transmissionMapUv),T.push(P.thicknessMapUv),T.push(P.combine),T.push(P.fogExp2),T.push(P.sizeAttenuation),T.push(P.morphTargetsCount),T.push(P.morphAttributeCount),T.push(P.numDirLights),T.push(P.numPointLights),T.push(P.numSpotLights),T.push(P.numSpotLightMaps),T.push(P.numHemiLights),T.push(P.numRectAreaLights),T.push(P.numDirLightShadows),T.push(P.numPointLightShadows),T.push(P.numSpotLightShadows),T.push(P.numSpotLightShadowsWithMaps),T.push(P.numLightProbes),T.push(P.shadowMapType),T.push(P.toneMapping),T.push(P.numClippingPlanes),T.push(P.numClipIntersection),T.push(P.depthPacking)}function R(T,P){d.disableAll(),P.instancing&&d.enable(0),P.instancingColor&&d.enable(1),P.instancingMorph&&d.enable(2),P.matcap&&d.enable(3),P.envMap&&d.enable(4),P.normalMapObjectSpace&&d.enable(5),P.normalMapTangentSpace&&d.enable(6),P.clearcoat&&d.enable(7),P.iridescence&&d.enable(8),P.alphaTest&&d.enable(9),P.vertexColors&&d.enable(10),P.vertexAlphas&&d.enable(11),P.vertexUv1s&&d.enable(12),P.vertexUv2s&&d.enable(13),P.vertexUv3s&&d.enable(14),P.vertexTangents&&d.enable(15),P.anisotropy&&d.enable(16),P.alphaHash&&d.enable(17),P.batching&&d.enable(18),P.dispersion&&d.enable(19),P.batchingColor&&d.enable(20),P.gradientMap&&d.enable(21),P.packedNormalMap&&d.enable(22),P.vertexNormals&&d.enable(23),T.push(d.mask),d.disableAll(),P.fog&&d.enable(0),P.useFog&&d.enable(1),P.flatShading&&d.enable(2),P.logarithmicDepthBuffer&&d.enable(3),P.reversedDepthBuffer&&d.enable(4),P.skinning&&d.enable(5),P.morphTargets&&d.enable(6),P.morphNormals&&d.enable(7),P.morphColors&&d.enable(8),P.premultipliedAlpha&&d.enable(9),P.shadowMapEnabled&&d.enable(10),P.doubleSided&&d.enable(11),P.flipSided&&d.enable(12),P.useDepthPacking&&d.enable(13),P.dithering&&d.enable(14),P.transmission&&d.enable(15),P.sheen&&d.enable(16),P.opaque&&d.enable(17),P.pointsUvs&&d.enable(18),P.decodeVideoTexture&&d.enable(19),P.decodeVideoTextureEmissive&&d.enable(20),P.alphaToCoverage&&d.enable(21),P.numLightProbeGrids>0&&d.enable(22),T.push(d.mask)}function I(T){const P=b[T.type];let W;if(P){const G=ia[P];W=gM.clone(G.uniforms)}else W=T.uniforms;return W}function U(T,P){let W=S.get(P);return W!==void 0?++W.usedTimes:(W=new WT(r,P,T,l),h.push(W),S.set(P,W)),W}function H(T){if(--T.usedTimes===0){const P=h.indexOf(T);h[P]=h[h.length-1],h.pop(),S.delete(T.cacheKey),T.destroy()}}function C(T){p.remove(T)}function z(){p.dispose()}return{getParameters:D,getProgramCacheKey:y,getUniforms:I,acquireProgram:U,releaseProgram:H,releaseShaderCache:C,programs:h,dispose:z}}function QT(){let r=new WeakMap;function t(d){return r.has(d)}function i(d){let p=r.get(d);return p===void 0&&(p={},r.set(d,p)),p}function s(d){r.delete(d)}function l(d,p,m){r.get(d)[p]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function JT(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Z_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function K_(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function d(g){let b=0;return g.isInstancedMesh&&(b+=2),g.isSkinnedMesh&&(b+=1),b}function p(g,b,A,D,y,v){let R=r[t];return R===void 0?(R={id:g.id,object:g,geometry:b,material:A,materialVariant:d(g),groupOrder:D,renderOrder:g.renderOrder,z:y,group:v},r[t]=R):(R.id=g.id,R.object=g,R.geometry=b,R.material=A,R.materialVariant=d(g),R.groupOrder=D,R.renderOrder=g.renderOrder,R.z=y,R.group=v),t++,R}function m(g,b,A,D,y,v){const R=p(g,b,A,D,y,v);A.transmission>0?s.push(R):A.transparent===!0?l.push(R):i.push(R)}function h(g,b,A,D,y,v){const R=p(g,b,A,D,y,v);A.transmission>0?s.unshift(R):A.transparent===!0?l.unshift(R):i.unshift(R)}function S(g,b){i.length>1&&i.sort(g||JT),s.length>1&&s.sort(b||Z_),l.length>1&&l.sort(b||Z_)}function x(){for(let g=t,b=r.length;g<b;g++){const A=r[g];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:x,sort:S}}function $T(){let r=new WeakMap;function t(s,l){const c=r.get(s);let d;return c===void 0?(d=new K_,r.set(s,[d])):l>=c.length?(d=new K_,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:t,dispose:i}}function tA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new X,color:new Pe};break;case"SpotLight":i={position:new X,direction:new X,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new X,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new X,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":i={color:new Pe,position:new X,halfWidth:new X,halfHeight:new X};break}return r[t.id]=i,i}}}function eA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let nA=0;function iA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function aA(r){const t=new tA,i=eA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new X);const l=new X,c=new yn,d=new yn;function p(h){let S=0,x=0,g=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let b=0,A=0,D=0,y=0,v=0,R=0,I=0,U=0,H=0,C=0,z=0;h.sort(iA);for(let P=0,W=h.length;P<W;P++){const G=h[P],Y=G.color,rt=G.intensity,dt=G.distance;let k=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===$s?k=G.shadow.map.texture:k=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)S+=Y.r*rt,x+=Y.g*rt,g+=Y.b*rt;else if(G.isLightProbe){for(let L=0;L<9;L++)s.probe[L].addScaledVector(G.sh.coefficients[L],rt);z++}else if(G.isDirectionalLight){const L=t.get(G);if(L.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const B=G.shadow,et=i.get(G);et.shadowIntensity=B.intensity,et.shadowBias=B.bias,et.shadowNormalBias=B.normalBias,et.shadowRadius=B.radius,et.shadowMapSize=B.mapSize,s.directionalShadow[b]=et,s.directionalShadowMap[b]=k,s.directionalShadowMatrix[b]=G.shadow.matrix,R++}s.directional[b]=L,b++}else if(G.isSpotLight){const L=t.get(G);L.position.setFromMatrixPosition(G.matrixWorld),L.color.copy(Y).multiplyScalar(rt),L.distance=dt,L.coneCos=Math.cos(G.angle),L.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),L.decay=G.decay,s.spot[D]=L;const B=G.shadow;if(G.map&&(s.spotLightMap[H]=G.map,H++,B.updateMatrices(G),G.castShadow&&C++),s.spotLightMatrix[D]=B.matrix,G.castShadow){const et=i.get(G);et.shadowIntensity=B.intensity,et.shadowBias=B.bias,et.shadowNormalBias=B.normalBias,et.shadowRadius=B.radius,et.shadowMapSize=B.mapSize,s.spotShadow[D]=et,s.spotShadowMap[D]=k,U++}D++}else if(G.isRectAreaLight){const L=t.get(G);L.color.copy(Y).multiplyScalar(rt),L.halfWidth.set(G.width*.5,0,0),L.halfHeight.set(0,G.height*.5,0),s.rectArea[y]=L,y++}else if(G.isPointLight){const L=t.get(G);if(L.color.copy(G.color).multiplyScalar(G.intensity),L.distance=G.distance,L.decay=G.decay,G.castShadow){const B=G.shadow,et=i.get(G);et.shadowIntensity=B.intensity,et.shadowBias=B.bias,et.shadowNormalBias=B.normalBias,et.shadowRadius=B.radius,et.shadowMapSize=B.mapSize,et.shadowCameraNear=B.camera.near,et.shadowCameraFar=B.camera.far,s.pointShadow[A]=et,s.pointShadowMap[A]=k,s.pointShadowMatrix[A]=G.shadow.matrix,I++}s.point[A]=L,A++}else if(G.isHemisphereLight){const L=t.get(G);L.skyColor.copy(G.color).multiplyScalar(rt),L.groundColor.copy(G.groundColor).multiplyScalar(rt),s.hemi[v]=L,v++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Zt.LTC_FLOAT_1,s.rectAreaLTC2=Zt.LTC_FLOAT_2):(s.rectAreaLTC1=Zt.LTC_HALF_1,s.rectAreaLTC2=Zt.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=x,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==b||T.pointLength!==A||T.spotLength!==D||T.rectAreaLength!==y||T.hemiLength!==v||T.numDirectionalShadows!==R||T.numPointShadows!==I||T.numSpotShadows!==U||T.numSpotMaps!==H||T.numLightProbes!==z)&&(s.directional.length=b,s.spot.length=D,s.rectArea.length=y,s.point.length=A,s.hemi.length=v,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=U+H-C,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=C,s.numLightProbes=z,T.directionalLength=b,T.pointLength=A,T.spotLength=D,T.rectAreaLength=y,T.hemiLength=v,T.numDirectionalShadows=R,T.numPointShadows=I,T.numSpotShadows=U,T.numSpotMaps=H,T.numLightProbes=z,s.version=nA++)}function m(h,S){let x=0,g=0,b=0,A=0,D=0;const y=S.matrixWorldInverse;for(let v=0,R=h.length;v<R;v++){const I=h[v];if(I.isDirectionalLight){const U=s.directional[x];U.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),x++}else if(I.isSpotLight){const U=s.spot[b];U.position.setFromMatrixPosition(I.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),b++}else if(I.isRectAreaLight){const U=s.rectArea[A];U.position.setFromMatrixPosition(I.matrixWorld),U.position.applyMatrix4(y),d.identity(),c.copy(I.matrixWorld),c.premultiply(y),d.extractRotation(c),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),A++}else if(I.isPointLight){const U=s.point[g];U.position.setFromMatrixPosition(I.matrixWorld),U.position.applyMatrix4(y),g++}else if(I.isHemisphereLight){const U=s.hemi[D];U.direction.setFromMatrixPosition(I.matrixWorld),U.direction.transformDirection(y),D++}}}return{setup:p,setupView:m,state:s}}function Q_(r){const t=new aA(r),i=[],s=[],l=[];function c(g){x.camera=g,i.length=0,s.length=0,l.length=0}function d(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function h(){t.setup(i)}function S(g){t.setupView(i,g)}const x={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:h,setupLightsView:S,pushLight:d,pushShadow:p,pushLightProbeGrid:m}}function sA(r){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let p;return d===void 0?(p=new Q_(r),t.set(l,[p])):c>=d.length?(p=new Q_(r),d.push(p)):p=d[c],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const rA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,lA=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],cA=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],J_=new yn,Jo=new X,jd=new X;function uA(r,t,i){let s=new Qh;const l=new qe,c=new qe,d=new Sn,p=new yM,m=new MM,h={},S=i.maxTextureSize,x={[bs]:ui,[ui]:bs,[Ua]:Ua},g=new ca({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:rA,fragmentShader:oA}),b=g.clone();b.defines.HORIZONTAL_PASS=1;const A=new fi;A.setAttribute("position",new ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new tt(A,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hc;let v=this.type;this.render=function(C,z,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||C.length===0)return;this.type===lv&&(Se("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Hc);const P=r.getRenderTarget(),W=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(Oa),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const rt=v!==this.type;rt&&z.traverse(function(dt){dt.material&&(Array.isArray(dt.material)?dt.material.forEach(k=>k.needsUpdate=!0):dt.material.needsUpdate=!0)});for(let dt=0,k=C.length;dt<k;dt++){const L=C[dt],B=L.shadow;if(B===void 0){Se("WebGLShadowMap:",L,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const et=B.getFrameExtents();l.multiply(et),c.copy(B.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(c.x=Math.floor(S/et.x),l.x=c.x*et.x,B.mapSize.x=c.x),l.y>S&&(c.y=Math.floor(S/et.y),l.y=c.y*et.y,B.mapSize.y=c.y));const ht=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=ht,B.map===null||rt===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===$o){if(L.isPointLight){Se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new oa(l.x,l.y,{format:$s,type:za,minFilter:Qn,magFilter:Qn,generateMipmaps:!1}),B.map.texture.name=L.name+".shadowMap",B.map.depthTexture=new Qr(l.x,l.y,aa),B.map.depthTexture.name=L.name+".shadowMapDepth",B.map.depthTexture.format=Ba,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Xn,B.map.depthTexture.magFilter=Xn}else L.isPointLight?(B.map=new Gv(l.x),B.map.depthTexture=new pM(l.x,la)):(B.map=new oa(l.x,l.y),B.map.depthTexture=new Qr(l.x,l.y,la)),B.map.depthTexture.name=L.name+".shadowMap",B.map.depthTexture.format=Ba,this.type===Hc?(B.map.depthTexture.compareFunction=ht?Yh:qh,B.map.depthTexture.minFilter=Qn,B.map.depthTexture.magFilter=Qn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Xn,B.map.depthTexture.magFilter=Xn);B.camera.updateProjectionMatrix()}const xt=B.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<xt;O++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,O),r.clear();else{O===0&&(r.setRenderTarget(B.map),r.clear());const Q=B.getViewport(O);d.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),Y.viewport(d)}if(L.isPointLight){const Q=B.camera,yt=B.matrix,Rt=L.distance||Q.far;Rt!==Q.far&&(Q.far=Rt,Q.updateProjectionMatrix()),Jo.setFromMatrixPosition(L.matrixWorld),Q.position.copy(Jo),jd.copy(Q.position),jd.add(lA[O]),Q.up.copy(cA[O]),Q.lookAt(jd),Q.updateMatrixWorld(),yt.makeTranslation(-Jo.x,-Jo.y,-Jo.z),J_.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),B._frustum.setFromProjectionMatrix(J_,Q.coordinateSystem,Q.reversedDepth)}else B.updateMatrices(L);s=B.getFrustum(),U(z,T,B.camera,L,this.type)}B.isPointLightShadow!==!0&&this.type===$o&&R(B,T),B.needsUpdate=!1}v=this.type,y.needsUpdate=!1,r.setRenderTarget(P,W,G)};function R(C,z){const T=t.update(D);g.defines.VSM_SAMPLES!==C.blurSamples&&(g.defines.VSM_SAMPLES=C.blurSamples,b.defines.VSM_SAMPLES=C.blurSamples,g.needsUpdate=!0,b.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new oa(l.x,l.y,{format:$s,type:za})),g.uniforms.shadow_pass.value=C.map.depthTexture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(z,null,T,g,D,null),b.uniforms.shadow_pass.value=C.mapPass.texture,b.uniforms.resolution.value=C.mapSize,b.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(z,null,T,b,D,null)}function I(C,z,T,P){let W=null;const G=T.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(G!==void 0)W=G;else if(W=T.isPointLight===!0?m:p,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Y=W.uuid,rt=z.uuid;let dt=h[Y];dt===void 0&&(dt={},h[Y]=dt);let k=dt[rt];k===void 0&&(k=W.clone(),dt[rt]=k,z.addEventListener("dispose",H)),W=k}if(W.visible=z.visible,W.wireframe=z.wireframe,P===$o?W.side=z.shadowSide!==null?z.shadowSide:z.side:W.side=z.shadowSide!==null?z.shadowSide:x[z.side],W.alphaMap=z.alphaMap,W.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,W.map=z.map,W.clipShadows=z.clipShadows,W.clippingPlanes=z.clippingPlanes,W.clipIntersection=z.clipIntersection,W.displacementMap=z.displacementMap,W.displacementScale=z.displacementScale,W.displacementBias=z.displacementBias,W.wireframeLinewidth=z.wireframeLinewidth,W.linewidth=z.linewidth,T.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const Y=r.properties.get(W);Y.light=T}return W}function U(C,z,T,P,W){if(C.visible===!1)return;if(C.layers.test(z.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&W===$o)&&(!C.frustumCulled||s.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,C.matrixWorld);const rt=t.update(C),dt=C.material;if(Array.isArray(dt)){const k=rt.groups;for(let L=0,B=k.length;L<B;L++){const et=k[L],ht=dt[et.materialIndex];if(ht&&ht.visible){const xt=I(C,ht,P,W);C.onBeforeShadow(r,C,z,T,rt,xt,et),r.renderBufferDirect(T,null,rt,xt,C,et),C.onAfterShadow(r,C,z,T,rt,xt,et)}}}else if(dt.visible){const k=I(C,dt,P,W);C.onBeforeShadow(r,C,z,T,rt,k,null),r.renderBufferDirect(T,null,rt,k,C,null),C.onAfterShadow(r,C,z,T,rt,k,null)}}const Y=C.children;for(let rt=0,dt=Y.length;rt<dt;rt++)U(Y[rt],z,T,P,W)}function H(C){C.target.removeEventListener("dispose",H);for(const T in h){const P=h[T],W=C.target.uuid;W in P&&(P[W].dispose(),delete P[W])}}}function fA(r,t){function i(){let j=!1;const Bt=new Sn;let St=null;const vt=new Sn(0,0,0,0);return{setMask:function(kt){St!==kt&&!j&&(r.colorMask(kt,kt,kt,kt),St=kt)},setLocked:function(kt){j=kt},setClear:function(kt,Ct,ee,de,en){en===!0&&(kt*=de,Ct*=de,ee*=de),Bt.set(kt,Ct,ee,de),vt.equals(Bt)===!1&&(r.clearColor(kt,Ct,ee,de),vt.copy(Bt))},reset:function(){j=!1,St=null,vt.set(-1,0,0,0)}}}function s(){let j=!1,Bt=!1,St=null,vt=null,kt=null;return{setReversed:function(Ct){if(Bt!==Ct){const ee=t.get("EXT_clip_control");Ct?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT),Bt=Ct;const de=kt;kt=null,this.setClear(de)}},getReversed:function(){return Bt},setTest:function(Ct){Ct?_t(r.DEPTH_TEST):Et(r.DEPTH_TEST)},setMask:function(Ct){St!==Ct&&!j&&(r.depthMask(Ct),St=Ct)},setFunc:function(Ct){if(Bt&&(Ct=Vy[Ct]),vt!==Ct){switch(Ct){case Zd:r.depthFunc(r.NEVER);break;case Kd:r.depthFunc(r.ALWAYS);break;case Qd:r.depthFunc(r.LESS);break;case Zr:r.depthFunc(r.LEQUAL);break;case Jd:r.depthFunc(r.EQUAL);break;case $d:r.depthFunc(r.GEQUAL);break;case th:r.depthFunc(r.GREATER);break;case eh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}vt=Ct}},setLocked:function(Ct){j=Ct},setClear:function(Ct){kt!==Ct&&(kt=Ct,Bt&&(Ct=1-Ct),r.clearDepth(Ct))},reset:function(){j=!1,St=null,vt=null,kt=null,Bt=!1}}}function l(){let j=!1,Bt=null,St=null,vt=null,kt=null,Ct=null,ee=null,de=null,en=null;return{setTest:function(Xe){j||(Xe?_t(r.STENCIL_TEST):Et(r.STENCIL_TEST))},setMask:function(Xe){Bt!==Xe&&!j&&(r.stencilMask(Xe),Bt=Xe)},setFunc:function(Xe,$n,qn){(St!==Xe||vt!==$n||kt!==qn)&&(r.stencilFunc(Xe,$n,qn),St=Xe,vt=$n,kt=qn)},setOp:function(Xe,$n,qn){(Ct!==Xe||ee!==$n||de!==qn)&&(r.stencilOp(Xe,$n,qn),Ct=Xe,ee=$n,de=qn)},setLocked:function(Xe){j=Xe},setClear:function(Xe){en!==Xe&&(r.clearStencil(Xe),en=Xe)},reset:function(){j=!1,Bt=null,St=null,vt=null,kt=null,Ct=null,ee=null,de=null,en=null}}}const c=new i,d=new s,p=new l,m=new WeakMap,h=new WeakMap;let S={},x={},g={},b=new WeakMap,A=[],D=null,y=!1,v=null,R=null,I=null,U=null,H=null,C=null,z=null,T=new Pe(0,0,0),P=0,W=!1,G=null,Y=null,rt=null,dt=null,k=null;const L=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,et=0;const ht=r.getParameter(r.VERSION);ht.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(ht)[1]),B=et>=1):ht.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(ht)[1]),B=et>=2);let xt=null,O={};const Q=r.getParameter(r.SCISSOR_BOX),yt=r.getParameter(r.VIEWPORT),Rt=new Sn().fromArray(Q),Ot=new Sn().fromArray(yt);function st(j,Bt,St,vt){const kt=new Uint8Array(4),Ct=r.createTexture();r.bindTexture(j,Ct),r.texParameteri(j,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(j,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ee=0;ee<St;ee++)j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?r.texImage3D(Bt,0,r.RGBA,1,1,vt,0,r.RGBA,r.UNSIGNED_BYTE,kt):r.texImage2D(Bt+ee,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,kt);return Ct}const At={};At[r.TEXTURE_2D]=st(r.TEXTURE_2D,r.TEXTURE_2D,1),At[r.TEXTURE_CUBE_MAP]=st(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[r.TEXTURE_2D_ARRAY]=st(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),At[r.TEXTURE_3D]=st(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),_t(r.DEPTH_TEST),d.setFunc(Zr),Ge(!1),Ne(Zg),_t(r.CULL_FACE),ye(Oa);function _t(j){S[j]!==!0&&(r.enable(j),S[j]=!0)}function Et(j){S[j]!==!1&&(r.disable(j),S[j]=!1)}function qt(j,Bt){return g[j]!==Bt?(r.bindFramebuffer(j,Bt),g[j]=Bt,j===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Bt),j===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Bt),!0):!1}function Xt(j,Bt){let St=A,vt=!1;if(j){St=b.get(Bt),St===void 0&&(St=[],b.set(Bt,St));const kt=j.textures;if(St.length!==kt.length||St[0]!==r.COLOR_ATTACHMENT0){for(let Ct=0,ee=kt.length;Ct<ee;Ct++)St[Ct]=r.COLOR_ATTACHMENT0+Ct;St.length=kt.length,vt=!0}}else St[0]!==r.BACK&&(St[0]=r.BACK,vt=!0);vt&&r.drawBuffers(St)}function ve(j){return D!==j?(r.useProgram(j),D=j,!0):!1}const Qt={[Ys]:r.FUNC_ADD,[fy]:r.FUNC_SUBTRACT,[dy]:r.FUNC_REVERSE_SUBTRACT};Qt[hy]=r.MIN,Qt[py]=r.MAX;const $t={[my]:r.ZERO,[gy]:r.ONE,[_y]:r.SRC_COLOR,[qd]:r.SRC_ALPHA,[by]:r.SRC_ALPHA_SATURATE,[yy]:r.DST_COLOR,[xy]:r.DST_ALPHA,[vy]:r.ONE_MINUS_SRC_COLOR,[Yd]:r.ONE_MINUS_SRC_ALPHA,[My]:r.ONE_MINUS_DST_COLOR,[Sy]:r.ONE_MINUS_DST_ALPHA,[Ey]:r.CONSTANT_COLOR,[Ty]:r.ONE_MINUS_CONSTANT_COLOR,[Ay]:r.CONSTANT_ALPHA,[wy]:r.ONE_MINUS_CONSTANT_ALPHA};function ye(j,Bt,St,vt,kt,Ct,ee,de,en,Xe){if(j===Oa){y===!0&&(Et(r.BLEND),y=!1);return}if(y===!1&&(_t(r.BLEND),y=!0),j!==uy){if(j!==v||Xe!==W){if((R!==Ys||H!==Ys)&&(r.blendEquation(r.FUNC_ADD),R=Ys,H=Ys),Xe)switch(j){case qr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Kg:r.blendFunc(r.ONE,r.ONE);break;case Qg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Jg:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:je("WebGLState: Invalid blending: ",j);break}else switch(j){case qr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Kg:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Qg:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jg:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",j);break}I=null,U=null,C=null,z=null,T.set(0,0,0),P=0,v=j,W=Xe}return}kt=kt||Bt,Ct=Ct||St,ee=ee||vt,(Bt!==R||kt!==H)&&(r.blendEquationSeparate(Qt[Bt],Qt[kt]),R=Bt,H=kt),(St!==I||vt!==U||Ct!==C||ee!==z)&&(r.blendFuncSeparate($t[St],$t[vt],$t[Ct],$t[ee]),I=St,U=vt,C=Ct,z=ee),(de.equals(T)===!1||en!==P)&&(r.blendColor(de.r,de.g,de.b,en),T.copy(de),P=en),v=j,W=!1}function he(j,Bt){j.side===Ua?Et(r.CULL_FACE):_t(r.CULL_FACE);let St=j.side===ui;Bt&&(St=!St),Ge(St),j.blending===qr&&j.transparent===!1?ye(Oa):ye(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),d.setFunc(j.depthFunc),d.setTest(j.depthTest),d.setMask(j.depthWrite),c.setMask(j.colorWrite);const vt=j.stencilWrite;p.setTest(vt),vt&&(p.setMask(j.stencilWriteMask),p.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),p.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Z(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?_t(r.SAMPLE_ALPHA_TO_COVERAGE):Et(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(j){G!==j&&(j?r.frontFace(r.CW):r.frontFace(r.CCW),G=j)}function Ne(j){j!==ly?(_t(r.CULL_FACE),j!==Y&&(j===Zg?r.cullFace(r.BACK):j===cy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Et(r.CULL_FACE),Y=j}function tn(j){j!==rt&&(B&&r.lineWidth(j),rt=j)}function Z(j,Bt,St){j?(_t(r.POLYGON_OFFSET_FILL),(dt!==Bt||k!==St)&&(dt=Bt,k=St,d.getReversed()&&(Bt=-Bt),r.polygonOffset(Bt,St))):Et(r.POLYGON_OFFSET_FILL)}function Ue(j){j?_t(r.SCISSOR_TEST):Et(r.SCISSOR_TEST)}function fe(j){j===void 0&&(j=r.TEXTURE0+L-1),xt!==j&&(r.activeTexture(j),xt=j)}function Ee(j,Bt,St){St===void 0&&(xt===null?St=r.TEXTURE0+L-1:St=xt);let vt=O[St];vt===void 0&&(vt={type:void 0,texture:void 0},O[St]=vt),(vt.type!==j||vt.texture!==Bt)&&(xt!==St&&(r.activeTexture(St),xt=St),r.bindTexture(j,Bt||At[j]),vt.type=j,vt.texture=Bt)}function It(){const j=O[xt];j!==void 0&&j.type!==void 0&&(r.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function Ye(){try{r.compressedTexImage2D(...arguments)}catch(j){je("WebGLState:",j)}}function N(){try{r.compressedTexImage3D(...arguments)}catch(j){je("WebGLState:",j)}}function E(){try{r.texSubImage2D(...arguments)}catch(j){je("WebGLState:",j)}}function at(){try{r.texSubImage3D(...arguments)}catch(j){je("WebGLState:",j)}}function bt(){try{r.compressedTexSubImage2D(...arguments)}catch(j){je("WebGLState:",j)}}function Ut(){try{r.compressedTexSubImage3D(...arguments)}catch(j){je("WebGLState:",j)}}function Vt(){try{r.texStorage2D(...arguments)}catch(j){je("WebGLState:",j)}}function pt(){try{r.texStorage3D(...arguments)}catch(j){je("WebGLState:",j)}}function ot(){try{r.texImage2D(...arguments)}catch(j){je("WebGLState:",j)}}function mt(){try{r.texImage3D(...arguments)}catch(j){je("WebGLState:",j)}}function Lt(j){return x[j]!==void 0?x[j]:r.getParameter(j)}function Ht(j,Bt){x[j]!==Bt&&(r.pixelStorei(j,Bt),x[j]=Bt)}function zt(j){Rt.equals(j)===!1&&(r.scissor(j.x,j.y,j.z,j.w),Rt.copy(j))}function Pt(j){Ot.equals(j)===!1&&(r.viewport(j.x,j.y,j.z,j.w),Ot.copy(j))}function me(j,Bt){let St=h.get(Bt);St===void 0&&(St=new WeakMap,h.set(Bt,St));let vt=St.get(j);vt===void 0&&(vt=r.getUniformBlockIndex(Bt,j.name),St.set(j,vt))}function ge(j,Bt){const vt=h.get(Bt).get(j);m.get(Bt)!==vt&&(r.uniformBlockBinding(Bt,vt,j.__bindingPointIndex),m.set(Bt,vt))}function De(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),S={},x={},xt=null,O={},g={},b=new WeakMap,A=[],D=null,y=!1,v=null,R=null,I=null,U=null,H=null,C=null,z=null,T=new Pe(0,0,0),P=0,W=!1,G=null,Y=null,rt=null,dt=null,k=null,Rt.set(0,0,r.canvas.width,r.canvas.height),Ot.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:_t,disable:Et,bindFramebuffer:qt,drawBuffers:Xt,useProgram:ve,setBlending:ye,setMaterial:he,setFlipSided:Ge,setCullFace:Ne,setLineWidth:tn,setPolygonOffset:Z,setScissorTest:Ue,activeTexture:fe,bindTexture:Ee,unbindTexture:It,compressedTexImage2D:Ye,compressedTexImage3D:N,texImage2D:ot,texImage3D:mt,pixelStorei:Ht,getParameter:Lt,updateUBOMapping:me,uniformBlockBinding:ge,texStorage2D:Vt,texStorage3D:pt,texSubImage2D:E,texSubImage3D:at,compressedTexSubImage2D:bt,compressedTexSubImage3D:Ut,scissor:zt,viewport:Pt,reset:De}}function dA(r,t,i,s,l,c,d){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new qe,S=new WeakMap,x=new Set;let g;const b=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(N,E){return A?new OffscreenCanvas(N,E):Qc("canvas")}function y(N,E,at){let bt=1;const Ut=Ye(N);if((Ut.width>at||Ut.height>at)&&(bt=at/Math.max(Ut.width,Ut.height)),bt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const Vt=Math.floor(bt*Ut.width),pt=Math.floor(bt*Ut.height);g===void 0&&(g=D(Vt,pt));const ot=E?D(Vt,pt):g;return ot.width=Vt,ot.height=pt,ot.getContext("2d").drawImage(N,0,0,Vt,pt),Se("WebGLRenderer: Texture has been resized from ("+Ut.width+"x"+Ut.height+") to ("+Vt+"x"+pt+")."),ot}else return"data"in N&&Se("WebGLRenderer: Image in DataTexture is too big ("+Ut.width+"x"+Ut.height+")."),N;return N}function v(N){return N.generateMipmaps}function R(N){r.generateMipmap(N)}function I(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(N,E,at,bt,Ut,Vt=!1){if(N!==null){if(r[N]!==void 0)return r[N];Se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let pt;bt&&(pt=t.get("EXT_texture_norm16"),pt||Se("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ot=E;if(E===r.RED&&(at===r.FLOAT&&(ot=r.R32F),at===r.HALF_FLOAT&&(ot=r.R16F),at===r.UNSIGNED_BYTE&&(ot=r.R8),at===r.UNSIGNED_SHORT&&pt&&(ot=pt.R16_EXT),at===r.SHORT&&pt&&(ot=pt.R16_SNORM_EXT)),E===r.RED_INTEGER&&(at===r.UNSIGNED_BYTE&&(ot=r.R8UI),at===r.UNSIGNED_SHORT&&(ot=r.R16UI),at===r.UNSIGNED_INT&&(ot=r.R32UI),at===r.BYTE&&(ot=r.R8I),at===r.SHORT&&(ot=r.R16I),at===r.INT&&(ot=r.R32I)),E===r.RG&&(at===r.FLOAT&&(ot=r.RG32F),at===r.HALF_FLOAT&&(ot=r.RG16F),at===r.UNSIGNED_BYTE&&(ot=r.RG8),at===r.UNSIGNED_SHORT&&pt&&(ot=pt.RG16_EXT),at===r.SHORT&&pt&&(ot=pt.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(at===r.UNSIGNED_BYTE&&(ot=r.RG8UI),at===r.UNSIGNED_SHORT&&(ot=r.RG16UI),at===r.UNSIGNED_INT&&(ot=r.RG32UI),at===r.BYTE&&(ot=r.RG8I),at===r.SHORT&&(ot=r.RG16I),at===r.INT&&(ot=r.RG32I)),E===r.RGB_INTEGER&&(at===r.UNSIGNED_BYTE&&(ot=r.RGB8UI),at===r.UNSIGNED_SHORT&&(ot=r.RGB16UI),at===r.UNSIGNED_INT&&(ot=r.RGB32UI),at===r.BYTE&&(ot=r.RGB8I),at===r.SHORT&&(ot=r.RGB16I),at===r.INT&&(ot=r.RGB32I)),E===r.RGBA_INTEGER&&(at===r.UNSIGNED_BYTE&&(ot=r.RGBA8UI),at===r.UNSIGNED_SHORT&&(ot=r.RGBA16UI),at===r.UNSIGNED_INT&&(ot=r.RGBA32UI),at===r.BYTE&&(ot=r.RGBA8I),at===r.SHORT&&(ot=r.RGBA16I),at===r.INT&&(ot=r.RGBA32I)),E===r.RGB&&(at===r.UNSIGNED_SHORT&&pt&&(ot=pt.RGB16_EXT),at===r.SHORT&&pt&&(ot=pt.RGB16_SNORM_EXT),at===r.UNSIGNED_INT_5_9_9_9_REV&&(ot=r.RGB9_E5),at===r.UNSIGNED_INT_10F_11F_11F_REV&&(ot=r.R11F_G11F_B10F)),E===r.RGBA){const mt=Vt?Kc:ke.getTransfer(Ut);at===r.FLOAT&&(ot=r.RGBA32F),at===r.HALF_FLOAT&&(ot=r.RGBA16F),at===r.UNSIGNED_BYTE&&(ot=mt===rn?r.SRGB8_ALPHA8:r.RGBA8),at===r.UNSIGNED_SHORT&&pt&&(ot=pt.RGBA16_EXT),at===r.SHORT&&pt&&(ot=pt.RGBA16_SNORM_EXT),at===r.UNSIGNED_SHORT_4_4_4_4&&(ot=r.RGBA4),at===r.UNSIGNED_SHORT_5_5_5_1&&(ot=r.RGB5_A1)}return(ot===r.R16F||ot===r.R32F||ot===r.RG16F||ot===r.RG32F||ot===r.RGBA16F||ot===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function H(N,E){let at;return N?E===null||E===la||E===nl?at=r.DEPTH24_STENCIL8:E===aa?at=r.DEPTH32F_STENCIL8:E===el&&(at=r.DEPTH24_STENCIL8,Se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===la||E===nl?at=r.DEPTH_COMPONENT24:E===aa?at=r.DEPTH_COMPONENT32F:E===el&&(at=r.DEPTH_COMPONENT16),at}function C(N,E){return v(N)===!0||N.isFramebufferTexture&&N.minFilter!==Xn&&N.minFilter!==Qn?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function z(N){const E=N.target;E.removeEventListener("dispose",z),P(E),E.isVideoTexture&&S.delete(E),E.isHTMLTexture&&x.delete(E)}function T(N){const E=N.target;E.removeEventListener("dispose",T),G(E)}function P(N){const E=s.get(N);if(E.__webglInit===void 0)return;const at=N.source,bt=b.get(at);if(bt){const Ut=bt[E.__cacheKey];Ut.usedTimes--,Ut.usedTimes===0&&W(N),Object.keys(bt).length===0&&b.delete(at)}s.remove(N)}function W(N){const E=s.get(N);r.deleteTexture(E.__webglTexture);const at=N.source,bt=b.get(at);delete bt[E.__cacheKey],d.memory.textures--}function G(N){const E=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let bt=0;bt<6;bt++){if(Array.isArray(E.__webglFramebuffer[bt]))for(let Ut=0;Ut<E.__webglFramebuffer[bt].length;Ut++)r.deleteFramebuffer(E.__webglFramebuffer[bt][Ut]);else r.deleteFramebuffer(E.__webglFramebuffer[bt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[bt])}else{if(Array.isArray(E.__webglFramebuffer))for(let bt=0;bt<E.__webglFramebuffer.length;bt++)r.deleteFramebuffer(E.__webglFramebuffer[bt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let bt=0;bt<E.__webglColorRenderbuffer.length;bt++)E.__webglColorRenderbuffer[bt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[bt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const at=N.textures;for(let bt=0,Ut=at.length;bt<Ut;bt++){const Vt=s.get(at[bt]);Vt.__webglTexture&&(r.deleteTexture(Vt.__webglTexture),d.memory.textures--),s.remove(at[bt])}s.remove(N)}let Y=0;function rt(){Y=0}function dt(){return Y}function k(N){Y=N}function L(){const N=Y;return N>=l.maxTextures&&Se("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),Y+=1,N}function B(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function et(N,E){const at=s.get(N);if(N.isVideoTexture&&Ee(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&at.__version!==N.version){const bt=N.image;if(bt===null)Se("WebGLRenderer: Texture marked for update but no image data found.");else if(bt.complete===!1)Se("WebGLRenderer: Texture marked for update but image is incomplete");else{Et(at,N,E);return}}else N.isExternalTexture&&(at.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,at.__webglTexture,r.TEXTURE0+E)}function ht(N,E){const at=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&at.__version!==N.version){Et(at,N,E);return}else N.isExternalTexture&&(at.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,at.__webglTexture,r.TEXTURE0+E)}function xt(N,E){const at=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&at.__version!==N.version){Et(at,N,E);return}i.bindTexture(r.TEXTURE_3D,at.__webglTexture,r.TEXTURE0+E)}function O(N,E){const at=s.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&at.__version!==N.version){qt(at,N,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,at.__webglTexture,r.TEXTURE0+E)}const Q={[Ia]:r.REPEAT,[La]:r.CLAMP_TO_EDGE,[nh]:r.MIRRORED_REPEAT},yt={[Xn]:r.NEAREST,[Dy]:r.NEAREST_MIPMAP_NEAREST,[_c]:r.NEAREST_MIPMAP_LINEAR,[Qn]:r.LINEAR,[md]:r.LINEAR_MIPMAP_NEAREST,[Ks]:r.LINEAR_MIPMAP_LINEAR},Rt={[Ly]:r.NEVER,[By]:r.ALWAYS,[Oy]:r.LESS,[qh]:r.LEQUAL,[Py]:r.EQUAL,[Yh]:r.GEQUAL,[Iy]:r.GREATER,[zy]:r.NOTEQUAL};function Ot(N,E){if(E.type===aa&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Qn||E.magFilter===md||E.magFilter===_c||E.magFilter===Ks||E.minFilter===Qn||E.minFilter===md||E.minFilter===_c||E.minFilter===Ks)&&Se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,Q[E.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,Q[E.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,Q[E.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,yt[E.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,yt[E.minFilter]),E.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,Rt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Xn||E.minFilter!==_c&&E.minFilter!==Ks||E.type===aa&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const at=t.get("EXT_texture_filter_anisotropic");r.texParameterf(N,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function st(N,E){let at=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",z));const bt=E.source;let Ut=b.get(bt);Ut===void 0&&(Ut={},b.set(bt,Ut));const Vt=B(E);if(Vt!==N.__cacheKey){Ut[Vt]===void 0&&(Ut[Vt]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,at=!0),Ut[Vt].usedTimes++;const pt=Ut[N.__cacheKey];pt!==void 0&&(Ut[N.__cacheKey].usedTimes--,pt.usedTimes===0&&W(E)),N.__cacheKey=Vt,N.__webglTexture=Ut[Vt].texture}return at}function At(N,E,at){return Math.floor(Math.floor(N/at)/E)}function _t(N,E,at,bt){const Vt=N.updateRanges;if(Vt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,at,bt,E.data);else{Vt.sort((Ht,zt)=>Ht.start-zt.start);let pt=0;for(let Ht=1;Ht<Vt.length;Ht++){const zt=Vt[pt],Pt=Vt[Ht],me=zt.start+zt.count,ge=At(Pt.start,E.width,4),De=At(zt.start,E.width,4);Pt.start<=me+1&&ge===De&&At(Pt.start+Pt.count-1,E.width,4)===ge?zt.count=Math.max(zt.count,Pt.start+Pt.count-zt.start):(++pt,Vt[pt]=Pt)}Vt.length=pt+1;const ot=i.getParameter(r.UNPACK_ROW_LENGTH),mt=i.getParameter(r.UNPACK_SKIP_PIXELS),Lt=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Ht=0,zt=Vt.length;Ht<zt;Ht++){const Pt=Vt[Ht],me=Math.floor(Pt.start/4),ge=Math.ceil(Pt.count/4),De=me%E.width,j=Math.floor(me/E.width),Bt=ge,St=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,De),i.pixelStorei(r.UNPACK_SKIP_ROWS,j),i.texSubImage2D(r.TEXTURE_2D,0,De,j,Bt,St,at,bt,E.data)}N.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ot),i.pixelStorei(r.UNPACK_SKIP_PIXELS,mt),i.pixelStorei(r.UNPACK_SKIP_ROWS,Lt)}}function Et(N,E,at){let bt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(bt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(bt=r.TEXTURE_3D);const Ut=st(N,E),Vt=E.source;i.bindTexture(bt,N.__webglTexture,r.TEXTURE0+at);const pt=s.get(Vt);if(Vt.version!==pt.__version||Ut===!0){if(i.activeTexture(r.TEXTURE0+at),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const St=ke.getPrimaries(ke.workingColorSpace),vt=E.colorSpace===ys?null:ke.getPrimaries(E.colorSpace),kt=E.colorSpace===ys||St===vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt)}i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let mt=y(E.image,!1,l.maxTextureSize);mt=It(E,mt);const Lt=c.convert(E.format,E.colorSpace),Ht=c.convert(E.type);let zt=U(E.internalFormat,Lt,Ht,E.normalized,E.colorSpace,E.isVideoTexture);Ot(bt,E);let Pt;const me=E.mipmaps,ge=E.isVideoTexture!==!0,De=pt.__version===void 0||Ut===!0,j=Vt.dataReady,Bt=C(E,mt);if(E.isDepthTexture)zt=H(E.format===Qs,E.type),De&&(ge?i.texStorage2D(r.TEXTURE_2D,1,zt,mt.width,mt.height):i.texImage2D(r.TEXTURE_2D,0,zt,mt.width,mt.height,0,Lt,Ht,null));else if(E.isDataTexture)if(me.length>0){ge&&De&&i.texStorage2D(r.TEXTURE_2D,Bt,zt,me[0].width,me[0].height);for(let St=0,vt=me.length;St<vt;St++)Pt=me[St],ge?j&&i.texSubImage2D(r.TEXTURE_2D,St,0,0,Pt.width,Pt.height,Lt,Ht,Pt.data):i.texImage2D(r.TEXTURE_2D,St,zt,Pt.width,Pt.height,0,Lt,Ht,Pt.data);E.generateMipmaps=!1}else ge?(De&&i.texStorage2D(r.TEXTURE_2D,Bt,zt,mt.width,mt.height),j&&_t(E,mt,Lt,Ht)):i.texImage2D(r.TEXTURE_2D,0,zt,mt.width,mt.height,0,Lt,Ht,mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ge&&De&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,zt,me[0].width,me[0].height,mt.depth);for(let St=0,vt=me.length;St<vt;St++)if(Pt=me[St],E.format!==Wi)if(Lt!==null)if(ge){if(j)if(E.layerUpdates.size>0){const kt=C_(Pt.width,Pt.height,E.format,E.type);for(const Ct of E.layerUpdates){const ee=Pt.data.subarray(Ct*kt/Pt.data.BYTES_PER_ELEMENT,(Ct+1)*kt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,St,0,0,Ct,Pt.width,Pt.height,1,Lt,ee)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,St,0,0,0,Pt.width,Pt.height,mt.depth,Lt,Pt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,St,zt,Pt.width,Pt.height,mt.depth,0,Pt.data,0,0);else Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ge?j&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,St,0,0,0,Pt.width,Pt.height,mt.depth,Lt,Ht,Pt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,St,zt,Pt.width,Pt.height,mt.depth,0,Lt,Ht,Pt.data)}else{ge&&De&&i.texStorage2D(r.TEXTURE_2D,Bt,zt,me[0].width,me[0].height);for(let St=0,vt=me.length;St<vt;St++)Pt=me[St],E.format!==Wi?Lt!==null?ge?j&&i.compressedTexSubImage2D(r.TEXTURE_2D,St,0,0,Pt.width,Pt.height,Lt,Pt.data):i.compressedTexImage2D(r.TEXTURE_2D,St,zt,Pt.width,Pt.height,0,Pt.data):Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?j&&i.texSubImage2D(r.TEXTURE_2D,St,0,0,Pt.width,Pt.height,Lt,Ht,Pt.data):i.texImage2D(r.TEXTURE_2D,St,zt,Pt.width,Pt.height,0,Lt,Ht,Pt.data)}else if(E.isDataArrayTexture)if(ge){if(De&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,zt,mt.width,mt.height,mt.depth),j)if(E.layerUpdates.size>0){const St=C_(mt.width,mt.height,E.format,E.type);for(const vt of E.layerUpdates){const kt=mt.data.subarray(vt*St/mt.data.BYTES_PER_ELEMENT,(vt+1)*St/mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,vt,mt.width,mt.height,1,Lt,Ht,kt)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Lt,Ht,mt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,zt,mt.width,mt.height,mt.depth,0,Lt,Ht,mt.data);else if(E.isData3DTexture)ge?(De&&i.texStorage3D(r.TEXTURE_3D,Bt,zt,mt.width,mt.height,mt.depth),j&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Lt,Ht,mt.data)):i.texImage3D(r.TEXTURE_3D,0,zt,mt.width,mt.height,mt.depth,0,Lt,Ht,mt.data);else if(E.isFramebufferTexture){if(De)if(ge)i.texStorage2D(r.TEXTURE_2D,Bt,zt,mt.width,mt.height);else{let St=mt.width,vt=mt.height;for(let kt=0;kt<Bt;kt++)i.texImage2D(r.TEXTURE_2D,kt,zt,St,vt,0,Lt,Ht,null),St>>=1,vt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const St=r.canvas;if(St.hasAttribute("layoutsubtree")||St.setAttribute("layoutsubtree","true"),mt.parentNode!==St){St.appendChild(mt),x.add(E),St.onpaint=de=>{const en=de.changedElements;for(const Xe of x)en.includes(Xe.image)&&(Xe.needsUpdate=!0)},St.requestPaint();return}const vt=0,kt=r.RGBA,Ct=r.RGBA,ee=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,vt,kt,Ct,ee,mt),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(me.length>0){if(ge&&De){const St=Ye(me[0]);i.texStorage2D(r.TEXTURE_2D,Bt,zt,St.width,St.height)}for(let St=0,vt=me.length;St<vt;St++)Pt=me[St],ge?j&&i.texSubImage2D(r.TEXTURE_2D,St,0,0,Lt,Ht,Pt):i.texImage2D(r.TEXTURE_2D,St,zt,Lt,Ht,Pt);E.generateMipmaps=!1}else if(ge){if(De){const St=Ye(mt);i.texStorage2D(r.TEXTURE_2D,Bt,zt,St.width,St.height)}j&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Lt,Ht,mt)}else i.texImage2D(r.TEXTURE_2D,0,zt,Lt,Ht,mt);v(E)&&R(bt),pt.__version=Vt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function qt(N,E,at){if(E.image.length!==6)return;const bt=st(N,E),Ut=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+at);const Vt=s.get(Ut);if(Ut.version!==Vt.__version||bt===!0){i.activeTexture(r.TEXTURE0+at);const pt=ke.getPrimaries(ke.workingColorSpace),ot=E.colorSpace===ys?null:ke.getPrimaries(E.colorSpace),mt=E.colorSpace===ys||pt===ot?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Lt=E.isCompressedTexture||E.image[0].isCompressedTexture,Ht=E.image[0]&&E.image[0].isDataTexture,zt=[];for(let Ct=0;Ct<6;Ct++)!Lt&&!Ht?zt[Ct]=y(E.image[Ct],!0,l.maxCubemapSize):zt[Ct]=Ht?E.image[Ct].image:E.image[Ct],zt[Ct]=It(E,zt[Ct]);const Pt=zt[0],me=c.convert(E.format,E.colorSpace),ge=c.convert(E.type),De=U(E.internalFormat,me,ge,E.normalized,E.colorSpace),j=E.isVideoTexture!==!0,Bt=Vt.__version===void 0||bt===!0,St=Ut.dataReady;let vt=C(E,Pt);Ot(r.TEXTURE_CUBE_MAP,E);let kt;if(Lt){j&&Bt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,vt,De,Pt.width,Pt.height);for(let Ct=0;Ct<6;Ct++){kt=zt[Ct].mipmaps;for(let ee=0;ee<kt.length;ee++){const de=kt[ee];E.format!==Wi?me!==null?j?St&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ee,0,0,de.width,de.height,me,de.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ee,De,de.width,de.height,0,de.data):Se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?St&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ee,0,0,de.width,de.height,me,ge,de.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ee,De,de.width,de.height,0,me,ge,de.data)}}}else{if(kt=E.mipmaps,j&&Bt){kt.length>0&&vt++;const Ct=Ye(zt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,vt,De,Ct.width,Ct.height)}for(let Ct=0;Ct<6;Ct++)if(Ht){j?St&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,zt[Ct].width,zt[Ct].height,me,ge,zt[Ct].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,De,zt[Ct].width,zt[Ct].height,0,me,ge,zt[Ct].data);for(let ee=0;ee<kt.length;ee++){const en=kt[ee].image[Ct].image;j?St&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ee+1,0,0,en.width,en.height,me,ge,en.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ee+1,De,en.width,en.height,0,me,ge,en.data)}}else{j?St&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,me,ge,zt[Ct]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,De,me,ge,zt[Ct]);for(let ee=0;ee<kt.length;ee++){const de=kt[ee];j?St&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ee+1,0,0,me,ge,de.image[Ct]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ee+1,De,me,ge,de.image[Ct])}}}v(E)&&R(r.TEXTURE_CUBE_MAP),Vt.__version=Ut.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Xt(N,E,at,bt,Ut,Vt){const pt=c.convert(at.format,at.colorSpace),ot=c.convert(at.type),mt=U(at.internalFormat,pt,ot,at.normalized,at.colorSpace),Lt=s.get(E),Ht=s.get(at);if(Ht.__renderTarget=E,!Lt.__hasExternalTextures){const zt=Math.max(1,E.width>>Vt),Pt=Math.max(1,E.height>>Vt);Ut===r.TEXTURE_3D||Ut===r.TEXTURE_2D_ARRAY?i.texImage3D(Ut,Vt,mt,zt,Pt,E.depth,0,pt,ot,null):i.texImage2D(Ut,Vt,mt,zt,Pt,0,pt,ot,null)}i.bindFramebuffer(r.FRAMEBUFFER,N),fe(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,bt,Ut,Ht.__webglTexture,0,Ue(E)):(Ut===r.TEXTURE_2D||Ut>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Ut<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,bt,Ut,Ht.__webglTexture,Vt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function ve(N,E,at){if(r.bindRenderbuffer(r.RENDERBUFFER,N),E.depthBuffer){const bt=E.depthTexture,Ut=bt&&bt.isDepthTexture?bt.type:null,Vt=H(E.stencilBuffer,Ut),pt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;fe(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ue(E),Vt,E.width,E.height):at?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ue(E),Vt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Vt,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,pt,r.RENDERBUFFER,N)}else{const bt=E.textures;for(let Ut=0;Ut<bt.length;Ut++){const Vt=bt[Ut],pt=c.convert(Vt.format,Vt.colorSpace),ot=c.convert(Vt.type),mt=U(Vt.internalFormat,pt,ot,Vt.normalized,Vt.colorSpace);fe(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ue(E),mt,E.width,E.height):at?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ue(E),mt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,mt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Qt(N,E,at){const bt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ut=s.get(E.depthTexture);if(Ut.__renderTarget=E,(!Ut.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),bt){if(Ut.__webglInit===void 0&&(Ut.__webglInit=!0,E.depthTexture.addEventListener("dispose",z)),Ut.__webglTexture===void 0){Ut.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Ut.__webglTexture),Ot(r.TEXTURE_CUBE_MAP,E.depthTexture);const Lt=c.convert(E.depthTexture.format),Ht=c.convert(E.depthTexture.type);let zt;E.depthTexture.format===Ba?zt=r.DEPTH_COMPONENT24:E.depthTexture.format===Qs&&(zt=r.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,zt,E.width,E.height,0,Lt,Ht,null)}}else et(E.depthTexture,0);const Vt=Ut.__webglTexture,pt=Ue(E),ot=bt?r.TEXTURE_CUBE_MAP_POSITIVE_X+at:r.TEXTURE_2D,mt=E.depthTexture.format===Qs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ba)fe(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,mt,ot,Vt,0,pt):r.framebufferTexture2D(r.FRAMEBUFFER,mt,ot,Vt,0);else if(E.depthTexture.format===Qs)fe(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,mt,ot,Vt,0,pt):r.framebufferTexture2D(r.FRAMEBUFFER,mt,ot,Vt,0);else throw new Error("Unknown depthTexture format")}function $t(N){const E=s.get(N),at=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const bt=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),bt){const Ut=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,bt.removeEventListener("dispose",Ut)};bt.addEventListener("dispose",Ut),E.__depthDisposeCallback=Ut}E.__boundDepthTexture=bt}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if(at)for(let bt=0;bt<6;bt++)Qt(E.__webglFramebuffer[bt],N,bt);else{const bt=N.texture.mipmaps;bt&&bt.length>0?Qt(E.__webglFramebuffer[0],N,0):Qt(E.__webglFramebuffer,N,0)}else if(at){E.__webglDepthbuffer=[];for(let bt=0;bt<6;bt++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[bt]),E.__webglDepthbuffer[bt]===void 0)E.__webglDepthbuffer[bt]=r.createRenderbuffer(),ve(E.__webglDepthbuffer[bt],N,!1);else{const Ut=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Vt=E.__webglDepthbuffer[bt];r.bindRenderbuffer(r.RENDERBUFFER,Vt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ut,r.RENDERBUFFER,Vt)}}else{const bt=N.texture.mipmaps;if(bt&&bt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),ve(E.__webglDepthbuffer,N,!1);else{const Ut=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Vt=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Vt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ut,r.RENDERBUFFER,Vt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function ye(N,E,at){const bt=s.get(N);E!==void 0&&Xt(bt.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),at!==void 0&&$t(N)}function he(N){const E=N.texture,at=s.get(N),bt=s.get(E);N.addEventListener("dispose",T);const Ut=N.textures,Vt=N.isWebGLCubeRenderTarget===!0,pt=Ut.length>1;if(pt||(bt.__webglTexture===void 0&&(bt.__webglTexture=r.createTexture()),bt.__version=E.version,d.memory.textures++),Vt){at.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(E.mipmaps&&E.mipmaps.length>0){at.__webglFramebuffer[ot]=[];for(let mt=0;mt<E.mipmaps.length;mt++)at.__webglFramebuffer[ot][mt]=r.createFramebuffer()}else at.__webglFramebuffer[ot]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){at.__webglFramebuffer=[];for(let ot=0;ot<E.mipmaps.length;ot++)at.__webglFramebuffer[ot]=r.createFramebuffer()}else at.__webglFramebuffer=r.createFramebuffer();if(pt)for(let ot=0,mt=Ut.length;ot<mt;ot++){const Lt=s.get(Ut[ot]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=r.createTexture(),d.memory.textures++)}if(N.samples>0&&fe(N)===!1){at.__webglMultisampledFramebuffer=r.createFramebuffer(),at.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let ot=0;ot<Ut.length;ot++){const mt=Ut[ot];at.__webglColorRenderbuffer[ot]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,at.__webglColorRenderbuffer[ot]);const Lt=c.convert(mt.format,mt.colorSpace),Ht=c.convert(mt.type),zt=U(mt.internalFormat,Lt,Ht,mt.normalized,mt.colorSpace,N.isXRRenderTarget===!0),Pt=Ue(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pt,zt,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.RENDERBUFFER,at.__webglColorRenderbuffer[ot])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(at.__webglDepthRenderbuffer=r.createRenderbuffer(),ve(at.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Vt){i.bindTexture(r.TEXTURE_CUBE_MAP,bt.__webglTexture),Ot(r.TEXTURE_CUBE_MAP,E);for(let ot=0;ot<6;ot++)if(E.mipmaps&&E.mipmaps.length>0)for(let mt=0;mt<E.mipmaps.length;mt++)Xt(at.__webglFramebuffer[ot][mt],N,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,mt);else Xt(at.__webglFramebuffer[ot],N,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);v(E)&&R(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(pt){for(let ot=0,mt=Ut.length;ot<mt;ot++){const Lt=Ut[ot],Ht=s.get(Lt);let zt=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(zt=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(zt,Ht.__webglTexture),Ot(zt,Lt),Xt(at.__webglFramebuffer,N,Lt,r.COLOR_ATTACHMENT0+ot,zt,0),v(Lt)&&R(zt)}i.unbindTexture()}else{let ot=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ot=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ot,bt.__webglTexture),Ot(ot,E),E.mipmaps&&E.mipmaps.length>0)for(let mt=0;mt<E.mipmaps.length;mt++)Xt(at.__webglFramebuffer[mt],N,E,r.COLOR_ATTACHMENT0,ot,mt);else Xt(at.__webglFramebuffer,N,E,r.COLOR_ATTACHMENT0,ot,0);v(E)&&R(ot),i.unbindTexture()}N.depthBuffer&&$t(N)}function Ge(N){const E=N.textures;for(let at=0,bt=E.length;at<bt;at++){const Ut=E[at];if(v(Ut)){const Vt=I(N),pt=s.get(Ut).__webglTexture;i.bindTexture(Vt,pt),R(Vt),i.unbindTexture()}}}const Ne=[],tn=[];function Z(N){if(N.samples>0){if(fe(N)===!1){const E=N.textures,at=N.width,bt=N.height;let Ut=r.COLOR_BUFFER_BIT;const Vt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=s.get(N),ot=E.length>1;if(ot)for(let Lt=0;Lt<E.length;Lt++)i.bindFramebuffer(r.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer);const mt=N.texture.mipmaps;mt&&mt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let Lt=0;Lt<E.length;Lt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Ut|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Ut|=r.STENCIL_BUFFER_BIT)),ot){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,pt.__webglColorRenderbuffer[Lt]);const Ht=s.get(E[Lt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ht,0)}r.blitFramebuffer(0,0,at,bt,0,0,at,bt,Ut,r.NEAREST),m===!0&&(Ne.length=0,tn.length=0,Ne.push(r.COLOR_ATTACHMENT0+Lt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Ne.push(Vt),tn.push(Vt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,tn)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ne))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ot)for(let Lt=0;Lt<E.length;Lt++){i.bindFramebuffer(r.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,pt.__webglColorRenderbuffer[Lt]);const Ht=s.get(E[Lt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.TEXTURE_2D,Ht,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Ue(N){return Math.min(l.maxSamples,N.samples)}function fe(N){const E=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ee(N){const E=d.render.frame;S.get(N)!==E&&(S.set(N,E),N.update())}function It(N,E){const at=N.colorSpace,bt=N.format,Ut=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||at!==Zc&&at!==ys&&(ke.getTransfer(at)===rn?(bt!==Wi||Ut!==bi)&&Se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",at)),E}function Ye(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=L,this.resetTextureUnits=rt,this.getTextureUnits=dt,this.setTextureUnits=k,this.setTexture2D=et,this.setTexture2DArray=ht,this.setTexture3D=xt,this.setTextureCube=O,this.rebindTextures=ye,this.setupRenderTarget=he,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Xt,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function hA(r,t){function i(s,l=ys){let c;const d=ke.getTransfer(l);if(s===bi)return r.UNSIGNED_BYTE;if(s===Vh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===kh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Sv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===yv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===vv)return r.BYTE;if(s===xv)return r.SHORT;if(s===el)return r.UNSIGNED_SHORT;if(s===Hh)return r.INT;if(s===la)return r.UNSIGNED_INT;if(s===aa)return r.FLOAT;if(s===za)return r.HALF_FLOAT;if(s===Mv)return r.ALPHA;if(s===bv)return r.RGB;if(s===Wi)return r.RGBA;if(s===Ba)return r.DEPTH_COMPONENT;if(s===Qs)return r.DEPTH_STENCIL;if(s===Ev)return r.RED;if(s===Xh)return r.RED_INTEGER;if(s===$s)return r.RG;if(s===Wh)return r.RG_INTEGER;if(s===jh)return r.RGBA_INTEGER;if(s===Vc||s===kc||s===Xc||s===Wc)if(d===rn)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Vc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Vc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===kc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Wc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ih||s===ah||s===sh||s===rh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===ih)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ah)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===sh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===rh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===oh||s===lh||s===ch||s===uh||s===fh||s===qc||s===dh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===oh||s===lh)return d===rn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===ch)return d===rn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===uh)return c.COMPRESSED_R11_EAC;if(s===fh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===qc)return c.COMPRESSED_RG11_EAC;if(s===dh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===hh||s===ph||s===mh||s===gh||s===_h||s===vh||s===xh||s===Sh||s===yh||s===Mh||s===bh||s===Eh||s===Th||s===Ah)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===hh)return d===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ph)return d===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===mh)return d===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===gh)return d===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===_h)return d===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===vh)return d===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===xh)return d===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Sh)return d===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===yh)return d===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Mh)return d===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===bh)return d===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Eh)return d===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Th)return d===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ah)return d===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wh||s===Rh||s===Ch)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===wh)return d===rn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Rh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ch)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Dh||s===Nh||s===Yc||s===Uh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Dh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Nh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Yc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Uh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===nl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const pA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Ov(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ca({vertexShader:pA,fragmentShader:mA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new tt(new ll(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _A extends er{constructor(t,i){super();const s=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,S=null,x=null,g=null,b=null,A=null;const D=typeof XRWebGLBinding<"u",y=new gA,v={},R=i.getContextAttributes();let I=null,U=null;const H=[],C=[],z=new qe;let T=null;const P=new Mi;P.viewport=new Sn;const W=new Mi;W.viewport=new Sn;const G=[P,W],Y=new AM;let rt=null,dt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let At=H[st];return At===void 0&&(At=new bd,H[st]=At),At.getTargetRaySpace()},this.getControllerGrip=function(st){let At=H[st];return At===void 0&&(At=new bd,H[st]=At),At.getGripSpace()},this.getHand=function(st){let At=H[st];return At===void 0&&(At=new bd,H[st]=At),At.getHandSpace()};function k(st){const At=C.indexOf(st.inputSource);if(At===-1)return;const _t=H[At];_t!==void 0&&(_t.update(st.inputSource,st.frame,h||d),_t.dispatchEvent({type:st.type,data:st.inputSource}))}function L(){l.removeEventListener("select",k),l.removeEventListener("selectstart",k),l.removeEventListener("selectend",k),l.removeEventListener("squeeze",k),l.removeEventListener("squeezestart",k),l.removeEventListener("squeezeend",k),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",B);for(let st=0;st<H.length;st++){const At=C[st];At!==null&&(C[st]=null,H[st].disconnect(At))}rt=null,dt=null,y.reset();for(const st in v)delete v[st];t.setRenderTarget(I),b=null,g=null,x=null,l=null,U=null,Ot.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){c=st,s.isPresenting===!0&&Se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){p=st,s.isPresenting===!0&&Se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(st){h=st},this.getBaseLayer=function(){return g!==null?g:b},this.getBinding=function(){return x===null&&D&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(st){if(l=st,l!==null){if(I=t.getRenderTarget(),l.addEventListener("select",k),l.addEventListener("selectstart",k),l.addEventListener("selectend",k),l.addEventListener("squeeze",k),l.addEventListener("squeezestart",k),l.addEventListener("squeezeend",k),l.addEventListener("end",L),l.addEventListener("inputsourceschange",B),R.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(z),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Et=null,qt=null;R.depth&&(qt=R.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,_t=R.stencil?Qs:Ba,Et=R.stencil?nl:la);const Xt={colorFormat:i.RGBA8,depthFormat:qt,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(Xt),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),U=new oa(g.textureWidth,g.textureHeight,{format:Wi,type:bi,depthTexture:new Qr(g.textureWidth,g.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const _t={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(l,i,_t),l.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),U=new oa(b.framebufferWidth,b.framebufferHeight,{format:Wi,type:bi,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),Ot.setContext(l),Ot.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function B(st){for(let At=0;At<st.removed.length;At++){const _t=st.removed[At],Et=C.indexOf(_t);Et>=0&&(C[Et]=null,H[Et].disconnect(_t))}for(let At=0;At<st.added.length;At++){const _t=st.added[At];let Et=C.indexOf(_t);if(Et===-1){for(let Xt=0;Xt<H.length;Xt++)if(Xt>=C.length){C.push(_t),Et=Xt;break}else if(C[Xt]===null){C[Xt]=_t,Et=Xt;break}if(Et===-1)break}const qt=H[Et];qt&&qt.connect(_t)}}const et=new X,ht=new X;function xt(st,At,_t){et.setFromMatrixPosition(At.matrixWorld),ht.setFromMatrixPosition(_t.matrixWorld);const Et=et.distanceTo(ht),qt=At.projectionMatrix.elements,Xt=_t.projectionMatrix.elements,ve=qt[14]/(qt[10]-1),Qt=qt[14]/(qt[10]+1),$t=(qt[9]+1)/qt[5],ye=(qt[9]-1)/qt[5],he=(qt[8]-1)/qt[0],Ge=(Xt[8]+1)/Xt[0],Ne=ve*he,tn=ve*Ge,Z=Et/(-he+Ge),Ue=Z*-he;if(At.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(Ue),st.translateZ(Z),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),qt[10]===-1)st.projectionMatrix.copy(At.projectionMatrix),st.projectionMatrixInverse.copy(At.projectionMatrixInverse);else{const fe=ve+Z,Ee=Qt+Z,It=Ne-Ue,Ye=tn+(Et-Ue),N=$t*Qt/Ee*fe,E=ye*Qt/Ee*fe;st.projectionMatrix.makePerspective(It,Ye,N,E,fe,Ee),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function O(st,At){At===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(At.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(l===null)return;let At=st.near,_t=st.far;y.texture!==null&&(y.depthNear>0&&(At=y.depthNear),y.depthFar>0&&(_t=y.depthFar)),Y.near=W.near=P.near=At,Y.far=W.far=P.far=_t,(rt!==Y.near||dt!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),rt=Y.near,dt=Y.far),Y.layers.mask=st.layers.mask|6,P.layers.mask=Y.layers.mask&-5,W.layers.mask=Y.layers.mask&-3;const Et=st.parent,qt=Y.cameras;O(Y,Et);for(let Xt=0;Xt<qt.length;Xt++)O(qt[Xt],Et);qt.length===2?xt(Y,P,W):Y.projectionMatrix.copy(P.projectionMatrix),Q(st,Y,Et)};function Q(st,At,_t){_t===null?st.matrix.copy(At.matrixWorld):(st.matrix.copy(_t.matrixWorld),st.matrix.invert(),st.matrix.multiply(At.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(At.projectionMatrix),st.projectionMatrixInverse.copy(At.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=Ph*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(g===null&&b===null))return m},this.setFoveation=function(st){m=st,g!==null&&(g.fixedFoveation=st),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=st)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Y)},this.getCameraTexture=function(st){return v[st]};let yt=null;function Rt(st,At){if(S=At.getViewerPose(h||d),A=At,S!==null){const _t=S.views;b!==null&&(t.setRenderTargetFramebuffer(U,b.framebuffer),t.setRenderTarget(U));let Et=!1;_t.length!==Y.cameras.length&&(Y.cameras.length=0,Et=!0);for(let Qt=0;Qt<_t.length;Qt++){const $t=_t[Qt];let ye=null;if(b!==null)ye=b.getViewport($t);else{const Ge=x.getViewSubImage(g,$t);ye=Ge.viewport,Qt===0&&(t.setRenderTargetTextures(U,Ge.colorTexture,Ge.depthStencilTexture),t.setRenderTarget(U))}let he=G[Qt];he===void 0&&(he=new Mi,he.layers.enable(Qt),he.viewport=new Sn,G[Qt]=he),he.matrix.fromArray($t.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray($t.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(ye.x,ye.y,ye.width,ye.height),Qt===0&&(Y.matrix.copy(he.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Et===!0&&Y.cameras.push(he)}const qt=l.enabledFeatures;if(qt&&qt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){x=s.getBinding();const Qt=x.getDepthInformation(_t[0]);Qt&&Qt.isValid&&Qt.texture&&y.init(Qt,l.renderState)}if(qt&&qt.includes("camera-access")&&D){t.state.unbindTexture(),x=s.getBinding();for(let Qt=0;Qt<_t.length;Qt++){const $t=_t[Qt].camera;if($t){let ye=v[$t];ye||(ye=new Ov,v[$t]=ye);const he=x.getCameraImage($t);ye.sourceTexture=he}}}}for(let _t=0;_t<H.length;_t++){const Et=C[_t],qt=H[_t];Et!==null&&qt!==void 0&&qt.update(Et,At,h||d)}yt&&yt(st,At),At.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:At}),A=null}const Ot=new Bv;Ot.setAnimationLoop(Rt),this.setAnimationLoop=function(st){yt=st},this.dispose=function(){}}}const vA=new yn,Wv=new Te;Wv.set(-1,0,0,0,1,0,0,0,1);function xA(r,t){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,Pv(r)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,R,I,U){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?c(y,v):v.isMeshLambertMaterial?(c(y,v),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(c(y,v),x(y,v)):v.isMeshPhongMaterial?(c(y,v),S(y,v),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(c(y,v),g(y,v),v.isMeshPhysicalMaterial&&b(y,v,U)):v.isMeshMatcapMaterial?(c(y,v),A(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),D(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(d(y,v),v.isLineDashedMaterial&&p(y,v)):v.isPointsMaterial?m(y,v,R,I):v.isSpriteMaterial?h(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===ui&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===ui&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const R=t.get(v),I=R.envMap,U=R.envMapRotation;I&&(y.envMap.value=I,y.envMapRotation.value.setFromMatrix4(vA.makeRotationFromEuler(U)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Wv),y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function d(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function p(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,R,I){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*R,y.scale.value=I*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function h(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function S(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function x(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function g(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function b(y,v,R){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===ui&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,v){v.matcap&&(y.matcap.value=v.matcap)}function D(y,v){const R=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function SA(r,t,i,s){let l={},c={},d=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,I){const U=I.program;s.uniformBlockBinding(R,U)}function h(R,I){let U=l[R.id];U===void 0&&(A(R),U=S(R),l[R.id]=U,R.addEventListener("dispose",y));const H=I.program;s.updateUBOMapping(R,H);const C=t.render.frame;c[R.id]!==C&&(g(R),c[R.id]=C)}function S(R){const I=x();R.__bindingPointIndex=I;const U=r.createBuffer(),H=R.__size,C=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,H,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,I,U),U}function x(){for(let R=0;R<p;R++)if(d.indexOf(R)===-1)return d.push(R),R;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const I=l[R.id],U=R.uniforms,H=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,I);for(let C=0,z=U.length;C<z;C++){const T=Array.isArray(U[C])?U[C]:[U[C]];for(let P=0,W=T.length;P<W;P++){const G=T[P];if(b(G,C,P,H)===!0){const Y=G.__offset,rt=Array.isArray(G.value)?G.value:[G.value];let dt=0;for(let k=0;k<rt.length;k++){const L=rt[k],B=D(L);typeof L=="number"||typeof L=="boolean"?(G.__data[0]=L,r.bufferSubData(r.UNIFORM_BUFFER,Y+dt,G.__data)):L.isMatrix3?(G.__data[0]=L.elements[0],G.__data[1]=L.elements[1],G.__data[2]=L.elements[2],G.__data[3]=0,G.__data[4]=L.elements[3],G.__data[5]=L.elements[4],G.__data[6]=L.elements[5],G.__data[7]=0,G.__data[8]=L.elements[6],G.__data[9]=L.elements[7],G.__data[10]=L.elements[8],G.__data[11]=0):ArrayBuffer.isView(L)?G.__data.set(new L.constructor(L.buffer,L.byteOffset,G.__data.length)):(L.toArray(G.__data,dt),dt+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function b(R,I,U,H){const C=R.value,z=I+"_"+U;if(H[z]===void 0)return typeof C=="number"||typeof C=="boolean"?H[z]=C:ArrayBuffer.isView(C)?H[z]=C.slice():H[z]=C.clone(),!0;{const T=H[z];if(typeof C=="number"||typeof C=="boolean"){if(T!==C)return H[z]=C,!0}else{if(ArrayBuffer.isView(C))return!0;if(T.equals(C)===!1)return T.copy(C),!0}}return!1}function A(R){const I=R.uniforms;let U=0;const H=16;for(let z=0,T=I.length;z<T;z++){const P=Array.isArray(I[z])?I[z]:[I[z]];for(let W=0,G=P.length;W<G;W++){const Y=P[W],rt=Array.isArray(Y.value)?Y.value:[Y.value];for(let dt=0,k=rt.length;dt<k;dt++){const L=rt[dt],B=D(L),et=U%H,ht=et%B.boundary,xt=et+ht;U+=ht,xt!==0&&H-xt<B.storage&&(U+=H-xt),Y.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=U,U+=B.storage}}}const C=U%H;return C>0&&(U+=H-C),R.__size=U,R.__cache={},this}function D(R){const I={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(I.boundary=4,I.storage=4):R.isVector2?(I.boundary=8,I.storage=8):R.isVector3||R.isColor?(I.boundary=16,I.storage=12):R.isVector4?(I.boundary=16,I.storage=16):R.isMatrix3?(I.boundary=48,I.storage=48):R.isMatrix4?(I.boundary=64,I.storage=64):R.isTexture?Se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(I.boundary=16,I.storage=R.byteLength):Se("WebGLRenderer: Unsupported uniform value type.",R),I}function y(R){const I=R.target;I.removeEventListener("dispose",y);const U=d.indexOf(I.__bindingPointIndex);d.splice(U,1),r.deleteBuffer(l[I.id]),delete l[I.id],delete c[I.id]}function v(){for(const R in l)r.deleteBuffer(l[R]);d=[],l={},c={}}return{bind:m,update:h,dispose:v}}const yA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let na=null;function MA(){return na===null&&(na=new cM(yA,16,16,$s,za),na.name="DFG_LUT",na.minFilter=Qn,na.magFilter=Qn,na.wrapS=La,na.wrapT=La,na.generateMipmaps=!1,na.needsUpdate=!0),na}class bA{constructor(t={}){const{canvas:i=Gy(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:b=bi}=t;this.isWebGLRenderer=!0;let A;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=s.getContextAttributes().alpha}else A=d;const D=b,y=new Set([jh,Wh,Xh]),v=new Set([bi,la,el,nl,Vh,kh]),R=new Uint32Array(4),I=new Int32Array(4),U=new X;let H=null,C=null;const z=[],T=[];let P=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ra,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const W=this;let G=!1,Y=null;this._outputColorSpace=Li;let rt=0,dt=0,k=null,L=-1,B=null;const et=new Sn,ht=new Sn;let xt=null;const O=new Pe(0);let Q=0,yt=i.width,Rt=i.height,Ot=1,st=null,At=null;const _t=new Sn(0,0,yt,Rt),Et=new Sn(0,0,yt,Rt);let qt=!1;const Xt=new Qh;let ve=!1,Qt=!1;const $t=new yn,ye=new X,he=new Sn,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function tn(){return k===null?Ot:1}let Z=s;function Ue(M,F){return i.getContext(M,F)}try{const M={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:S,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Gh}`),i.addEventListener("webglcontextlost",Ct,!1),i.addEventListener("webglcontextrestored",ee,!1),i.addEventListener("webglcontextcreationerror",de,!1),Z===null){const F="webgl2";if(Z=Ue(F,M),Z===null)throw Ue(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw je("WebGLRenderer: "+M.message),M}let fe,Ee,It,Ye,N,E,at,bt,Ut,Vt,pt,ot,mt,Lt,Ht,zt,Pt,me,ge,De,j,Bt,St;function vt(){fe=new ME(Z),fe.init(),j=new hA(Z,fe),Ee=new pE(Z,fe,t,j),It=new fA(Z,fe),Ee.reversedDepthBuffer&&g&&It.buffers.depth.setReversed(!0),Ye=new TE(Z),N=new QT,E=new dA(Z,fe,It,N,Ee,j,Ye),at=new yE(W),bt=new CM(Z),Bt=new dE(Z,bt),Ut=new bE(Z,bt,Ye,Bt),Vt=new wE(Z,Ut,bt,Bt,Ye),me=new AE(Z,Ee,E),Ht=new mE(N),pt=new KT(W,at,fe,Ee,Bt,Ht),ot=new xA(W,N),mt=new $T,Lt=new sA(fe),Pt=new fE(W,at,It,Vt,A,m),zt=new uA(W,Vt,Ee),St=new SA(Z,Ye,Ee,It),ge=new hE(Z,fe,Ye),De=new EE(Z,fe,Ye),Ye.programs=pt.programs,W.capabilities=Ee,W.extensions=fe,W.properties=N,W.renderLists=mt,W.shadowMap=zt,W.state=It,W.info=Ye}vt(),D!==bi&&(P=new CE(D,i.width,i.height,l,c));const kt=new _A(W,Z);this.xr=kt,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const M=fe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=fe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Ot},this.setPixelRatio=function(M){M!==void 0&&(Ot=M,this.setSize(yt,Rt,!1))},this.getSize=function(M){return M.set(yt,Rt)},this.setSize=function(M,F,$=!0){if(kt.isPresenting){Se("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=M,Rt=F,i.width=Math.floor(M*Ot),i.height=Math.floor(F*Ot),$===!0&&(i.style.width=M+"px",i.style.height=F+"px"),P!==null&&P.setSize(i.width,i.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(yt*Ot,Rt*Ot).floor()},this.setDrawingBufferSize=function(M,F,$){yt=M,Rt=F,Ot=$,i.width=Math.floor(M*$),i.height=Math.floor(F*$),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(D===bi){je("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){Se("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(et)},this.getViewport=function(M){return M.copy(_t)},this.setViewport=function(M,F,$,J){M.isVector4?_t.set(M.x,M.y,M.z,M.w):_t.set(M,F,$,J),It.viewport(et.copy(_t).multiplyScalar(Ot).round())},this.getScissor=function(M){return M.copy(Et)},this.setScissor=function(M,F,$,J){M.isVector4?Et.set(M.x,M.y,M.z,M.w):Et.set(M,F,$,J),It.scissor(ht.copy(Et).multiplyScalar(Ot).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(M){It.setScissorTest(qt=M)},this.setOpaqueSort=function(M){st=M},this.setTransparentSort=function(M){At=M},this.getClearColor=function(M){return M.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,$=!0){let J=0;if(M){let nt=!1;if(k!==null){const Nt=k.texture.format;nt=y.has(Nt)}if(nt){const Nt=k.texture.type,Ft=v.has(Nt),Gt=Pt.getClearColor(),Yt=Pt.getClearAlpha(),Wt=Gt.r,se=Gt.g,xe=Gt.b;Ft?(R[0]=Wt,R[1]=se,R[2]=xe,R[3]=Yt,Z.clearBufferuiv(Z.COLOR,0,R)):(I[0]=Wt,I[1]=se,I[2]=xe,I[3]=Yt,Z.clearBufferiv(Z.COLOR,0,I))}else J|=Z.COLOR_BUFFER_BIT}F&&(J|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(J|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&Z.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),Y=M},this.dispose=function(){i.removeEventListener("webglcontextlost",Ct,!1),i.removeEventListener("webglcontextrestored",ee,!1),i.removeEventListener("webglcontextcreationerror",de,!1),Pt.dispose(),mt.dispose(),Lt.dispose(),N.dispose(),at.dispose(),Vt.dispose(),Bt.dispose(),St.dispose(),pt.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",Ga),kt.removeEventListener("sessionend",Ha),Nn.stop()};function Ct(M){M.preventDefault(),i_("WebGLRenderer: Context Lost."),G=!0}function ee(){i_("WebGLRenderer: Context Restored."),G=!1;const M=Ye.autoReset,F=zt.enabled,$=zt.autoUpdate,J=zt.needsUpdate,nt=zt.type;vt(),Ye.autoReset=M,zt.enabled=F,zt.autoUpdate=$,zt.needsUpdate=J,zt.type=nt}function de(M){je("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function en(M){const F=M.target;F.removeEventListener("dispose",en),Xe(F)}function Xe(M){$n(M),N.remove(M)}function $n(M){const F=N.get(M).programs;F!==void 0&&(F.forEach(function($){pt.releaseProgram($)}),M.isShaderMaterial&&pt.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,$,J,nt,Nt){F===null&&(F=Ge);const Ft=nt.isMesh&&nt.matrixWorld.determinant()<0,Gt=Ii(M,F,$,J,nt);It.setMaterial(J,Ft);let Yt=$.index,Wt=1;if(J.wireframe===!0){if(Yt=Ut.getWireframeAttribute($),Yt===void 0)return;Wt=2}const se=$.drawRange,xe=$.attributes.position;let Jt=se.start*Wt,ne=(se.start+se.count)*Wt;Nt!==null&&(Jt=Math.max(Jt,Nt.start*Wt),ne=Math.min(ne,(Nt.start+Nt.count)*Wt)),Yt!==null?(Jt=Math.max(Jt,0),ne=Math.min(ne,Yt.count)):xe!=null&&(Jt=Math.max(Jt,0),ne=Math.min(ne,xe.count));const pe=ne-Jt;if(pe<0||pe===1/0)return;Bt.setup(nt,J,Gt,$,Yt);let We,He=ge;if(Yt!==null&&(We=bt.get(Yt),He=De,He.setIndex(We)),nt.isMesh)J.wireframe===!0?(It.setLineWidth(J.wireframeLinewidth*tn()),He.setMode(Z.LINES)):He.setMode(Z.TRIANGLES);else if(nt.isLine){let Qe=J.linewidth;Qe===void 0&&(Qe=1),It.setLineWidth(Qe*tn()),nt.isLineSegments?He.setMode(Z.LINES):nt.isLineLoop?He.setMode(Z.LINE_LOOP):He.setMode(Z.LINE_STRIP)}else nt.isPoints?He.setMode(Z.POINTS):nt.isSprite&&He.setMode(Z.TRIANGLES);if(nt.isBatchedMesh)if(fe.get("WEBGL_multi_draw"))He.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const Qe=nt._multiDrawStarts,jt=nt._multiDrawCounts,Mn=nt._multiDrawCount,Me=Yt?bt.get(Yt).bytesPerElement:1,un=N.get(J).currentProgram.getUniforms();for(let Re=0;Re<Mn;Re++)un.setValue(Z,"_gl_DrawID",Re),He.render(Qe[Re]/Me,jt[Re])}else if(nt.isInstancedMesh)He.renderInstances(Jt,pe,nt.count);else if($.isInstancedBufferGeometry){const Qe=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,jt=Math.min($.instanceCount,Qe);He.renderInstances(Jt,pe,jt)}else He.render(Jt,pe)};function qn(M,F,$){M.transparent===!0&&M.side===Ua&&M.forceSinglePass===!1?(M.side=ui,M.needsUpdate=!0,ka(M,F,$),M.side=bs,M.needsUpdate=!0,ka(M,F,$),M.side=Ua):ka(M,F,$)}this.compile=function(M,F,$=null){$===null&&($=M),C=Lt.get($),C.init(F),T.push(C),$.traverseVisible(function(nt){nt.isLight&&nt.layers.test(F.layers)&&(C.pushLight(nt),nt.castShadow&&C.pushShadow(nt))}),M!==$&&M.traverseVisible(function(nt){nt.isLight&&nt.layers.test(F.layers)&&(C.pushLight(nt),nt.castShadow&&C.pushShadow(nt))}),C.setupLights();const J=new Set;return M.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const Nt=nt.material;if(Nt)if(Array.isArray(Nt))for(let Ft=0;Ft<Nt.length;Ft++){const Gt=Nt[Ft];qn(Gt,$,nt),J.add(Gt)}else qn(Nt,$,nt),J.add(Nt)}),C=T.pop(),J},this.compileAsync=function(M,F,$=null){const J=this.compile(M,F,$);return new Promise(nt=>{function Nt(){if(J.forEach(function(Ft){N.get(Ft).currentProgram.isReady()&&J.delete(Ft)}),J.size===0){nt(M);return}setTimeout(Nt,10)}fe.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let qi=null;function Fa(M){qi&&qi(M)}function Ga(){Nn.stop()}function Ha(){Nn.start()}const Nn=new Bv;Nn.setAnimationLoop(Fa),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(M){qi=M,kt.setAnimationLoop(M),M===null?Nn.stop():Nn.start()},kt.addEventListener("sessionstart",Ga),kt.addEventListener("sessionend",Ha),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;Y!==null&&Y.renderStart(M,F);const $=kt.enabled===!0&&kt.isPresenting===!0,J=P!==null&&(k===null||$)&&P.begin(W,k);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(F),F=kt.getCamera()),M.isScene===!0&&M.onBeforeRender(W,M,F,k),C=Lt.get(M,T.length),C.init(F),C.state.textureUnits=E.getTextureUnits(),T.push(C),$t.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Xt.setFromProjectionMatrix($t,sa,F.reversedDepth),Qt=this.localClippingEnabled,ve=Ht.init(this.clippingPlanes,Qt),H=mt.get(M,z.length),H.init(),z.push(H),kt.enabled===!0&&kt.isPresenting===!0){const Ft=W.xr.getDepthSensingMesh();Ft!==null&&hn(Ft,F,-1/0,W.sortObjects)}hn(M,F,0,W.sortObjects),H.finish(),W.sortObjects===!0&&H.sort(st,At),Ne=kt.enabled===!1||kt.isPresenting===!1||kt.hasDepthSensing()===!1,Ne&&Pt.addToRenderList(H,M),this.info.render.frame++,ve===!0&&Ht.beginShadows();const nt=C.state.shadowsArray;if(zt.render(nt,M,F),ve===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&P.hasRenderPass())===!1){const Ft=H.opaque,Gt=H.transmissive;if(C.setupLights(),F.isArrayCamera){const Yt=F.cameras;if(Gt.length>0)for(let Wt=0,se=Yt.length;Wt<se;Wt++){const xe=Yt[Wt];Oi(Ft,Gt,M,xe)}Ne&&Pt.render(M);for(let Wt=0,se=Yt.length;Wt<se;Wt++){const xe=Yt[Wt];Un(H,M,xe,xe.viewport)}}else Gt.length>0&&Oi(Ft,Gt,M,F),Ne&&Pt.render(M),Un(H,M,F)}k!==null&&dt===0&&(E.updateMultisampleRenderTarget(k),E.updateRenderTargetMipmap(k)),J&&P.end(W),M.isScene===!0&&M.onAfterRender(W,M,F),Bt.resetDefaultState(),L=-1,B=null,T.pop(),T.length>0?(C=T[T.length-1],E.setTextureUnits(C.state.textureUnits),ve===!0&&Ht.setGlobalState(W.clippingPlanes,C.state.camera)):C=null,z.pop(),z.length>0?H=z[z.length-1]:H=null,Y!==null&&Y.renderEnd()};function hn(M,F,$,J){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLightProbeGrid)C.pushLightProbeGrid(M);else if(M.isLight)C.pushLight(M),M.castShadow&&C.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Xt.intersectsSprite(M)){J&&he.setFromMatrixPosition(M.matrixWorld).applyMatrix4($t);const Ft=Vt.update(M),Gt=M.material;Gt.visible&&H.push(M,Ft,Gt,$,he.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Xt.intersectsObject(M))){const Ft=Vt.update(M),Gt=M.material;if(J&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),he.copy(M.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),he.copy(Ft.boundingSphere.center)),he.applyMatrix4(M.matrixWorld).applyMatrix4($t)),Array.isArray(Gt)){const Yt=Ft.groups;for(let Wt=0,se=Yt.length;Wt<se;Wt++){const xe=Yt[Wt],Jt=Gt[xe.materialIndex];Jt&&Jt.visible&&H.push(M,Ft,Jt,$,he.z,xe)}}else Gt.visible&&H.push(M,Ft,Gt,$,he.z,null)}}const Nt=M.children;for(let Ft=0,Gt=Nt.length;Ft<Gt;Ft++)hn(Nt[Ft],F,$,J)}function Un(M,F,$,J){const{opaque:nt,transmissive:Nt,transparent:Ft}=M;C.setupLightsView($),ve===!0&&Ht.setGlobalState(W.clippingPlanes,$),J&&It.viewport(et.copy(J)),nt.length>0&&Yi(nt,F,$),Nt.length>0&&Yi(Nt,F,$),Ft.length>0&&Yi(Ft,F,$),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Oi(M,F,$,J){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[J.id]===void 0){const Jt=fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[J.id]=new oa(1,1,{generateMipmaps:!0,type:Jt?za:bi,minFilter:Ks,samples:Math.max(4,Ee.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ke.workingColorSpace})}const Nt=C.state.transmissionRenderTarget[J.id],Ft=J.viewport||et;Nt.setSize(Ft.z*W.transmissionResolutionScale,Ft.w*W.transmissionResolutionScale);const Gt=W.getRenderTarget(),Yt=W.getActiveCubeFace(),Wt=W.getActiveMipmapLevel();W.setRenderTarget(Nt),W.getClearColor(O),Q=W.getClearAlpha(),Q<1&&W.setClearColor(16777215,.5),W.clear(),Ne&&Pt.render($);const se=W.toneMapping;W.toneMapping=ra;const xe=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),C.setupLightsView(J),ve===!0&&Ht.setGlobalState(W.clippingPlanes,J),Yi(M,$,J),E.updateMultisampleRenderTarget(Nt),E.updateRenderTargetMipmap(Nt),fe.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let ne=0,pe=F.length;ne<pe;ne++){const We=F[ne],{object:He,geometry:Qe,material:jt,group:Mn}=We;if(jt.side===Ua&&He.layers.test(J.layers)){const Me=jt.side;jt.side=ui,jt.needsUpdate=!0,Va(He,$,J,Qe,jt,Mn),jt.side=Me,jt.needsUpdate=!0,Jt=!0}}Jt===!0&&(E.updateMultisampleRenderTarget(Nt),E.updateRenderTargetMipmap(Nt))}W.setRenderTarget(Gt,Yt,Wt),W.setClearColor(O,Q),xe!==void 0&&(J.viewport=xe),W.toneMapping=se}function Yi(M,F,$){const J=F.isScene===!0?F.overrideMaterial:null;for(let nt=0,Nt=M.length;nt<Nt;nt++){const Ft=M[nt],{object:Gt,geometry:Yt,group:Wt}=Ft;let se=Ft.material;se.allowOverride===!0&&J!==null&&(se=J),Gt.layers.test($.layers)&&Va(Gt,F,$,Yt,se,Wt)}}function Va(M,F,$,J,nt,Nt){M.onBeforeRender(W,F,$,J,nt,Nt),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),nt.onBeforeRender(W,F,$,J,M,Nt),nt.transparent===!0&&nt.side===Ua&&nt.forceSinglePass===!1?(nt.side=ui,nt.needsUpdate=!0,W.renderBufferDirect($,F,J,nt,M,Nt),nt.side=bs,nt.needsUpdate=!0,W.renderBufferDirect($,F,J,nt,M,Nt),nt.side=Ua):W.renderBufferDirect($,F,J,nt,M,Nt),M.onAfterRender(W,F,$,J,nt,Nt)}function ka(M,F,$){F.isScene!==!0&&(F=Ge);const J=N.get(M),nt=C.state.lights,Nt=C.state.shadowsArray,Ft=nt.state.version,Gt=pt.getParameters(M,nt.state,Nt,F,$,C.state.lightProbeGridArray),Yt=pt.getProgramCacheKey(Gt);let Wt=J.programs;J.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,J.fog=F.fog;const se=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;J.envMap=at.get(M.envMap||J.environment,se),J.envMapRotation=J.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Wt===void 0&&(M.addEventListener("dispose",en),Wt=new Map,J.programs=Wt);let xe=Wt.get(Yt);if(xe!==void 0){if(J.currentProgram===xe&&J.lightsStateVersion===Ft)return Pi(M,Gt),xe}else Gt.uniforms=pt.getUniforms(M),Y!==null&&M.isNodeMaterial&&Y.build(M,$,Gt),M.onBeforeCompile(Gt,W),xe=pt.acquireProgram(Gt,Yt),Wt.set(Yt,xe),J.uniforms=Gt.uniforms;const Jt=J.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Jt.clippingPlanes=Ht.uniform),Pi(M,Gt),J.needsLights=Zi(M),J.lightsStateVersion=Ft,J.needsLights&&(Jt.ambientLightColor.value=nt.state.ambient,Jt.lightProbe.value=nt.state.probe,Jt.directionalLights.value=nt.state.directional,Jt.directionalLightShadows.value=nt.state.directionalShadow,Jt.spotLights.value=nt.state.spot,Jt.spotLightShadows.value=nt.state.spotShadow,Jt.rectAreaLights.value=nt.state.rectArea,Jt.ltc_1.value=nt.state.rectAreaLTC1,Jt.ltc_2.value=nt.state.rectAreaLTC2,Jt.pointLights.value=nt.state.point,Jt.pointLightShadows.value=nt.state.pointShadow,Jt.hemisphereLights.value=nt.state.hemi,Jt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Jt.spotLightMatrix.value=nt.state.spotLightMatrix,Jt.spotLightMap.value=nt.state.spotLightMap,Jt.pointShadowMatrix.value=nt.state.pointShadowMatrix),J.lightProbeGrid=C.state.lightProbeGridArray.length>0,J.currentProgram=xe,J.uniformsList=null,xe}function Ts(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=jc.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function Pi(M,F){const $=N.get(M);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function Xa(M,F){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;U.setFromMatrixPosition(F.matrixWorld);for(let $=0,J=M.length;$<J;$++){const nt=M[$];if(nt.texture!==null&&nt.boundingBox.containsPoint(U))return nt}return null}function Ii(M,F,$,J,nt){F.isScene!==!0&&(F=Ge),E.resetTextureUnits();const Nt=F.fog,Ft=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?F.environment:null,Gt=k===null?W.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ke.workingColorSpace,Yt=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Wt=at.get(J.envMap||Ft,Yt),se=J.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,xe=!!$.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Jt=!!$.morphAttributes.position,ne=!!$.morphAttributes.normal,pe=!!$.morphAttributes.color;let We=ra;J.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(We=W.toneMapping);const He=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Qe=He!==void 0?He.length:0,jt=N.get(J),Mn=C.state.lights;if(ve===!0&&(Qt===!0||M!==B)){const nn=M===B&&J.id===L;Ht.setState(J,M,nn)}let Me=!1;J.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==Mn.state.version||jt.outputColorSpace!==Gt||nt.isBatchedMesh&&jt.batching===!1||!nt.isBatchedMesh&&jt.batching===!0||nt.isBatchedMesh&&jt.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&jt.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&jt.instancing===!1||!nt.isInstancedMesh&&jt.instancing===!0||nt.isSkinnedMesh&&jt.skinning===!1||!nt.isSkinnedMesh&&jt.skinning===!0||nt.isInstancedMesh&&jt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&jt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&jt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&jt.instancingMorph===!1&&nt.morphTexture!==null||jt.envMap!==Wt||J.fog===!0&&jt.fog!==Nt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==Ht.numPlanes||jt.numIntersection!==Ht.numIntersection)||jt.vertexAlphas!==se||jt.vertexTangents!==xe||jt.morphTargets!==Jt||jt.morphNormals!==ne||jt.morphColors!==pe||jt.toneMapping!==We||jt.morphTargetsCount!==Qe||!!jt.lightProbeGrid!=C.state.lightProbeGridArray.length>0)&&(Me=!0):(Me=!0,jt.__version=J.version);let un=jt.currentProgram;Me===!0&&(un=ka(J,F,nt),Y&&J.isNodeMaterial&&Y.onUpdateProgram(J,un,jt));let Re=!1,Ln=!1,bn=!1;const Je=un.getUniforms(),dn=jt.uniforms;if(It.useProgram(un.program)&&(Re=!0,Ln=!0,bn=!0),J.id!==L&&(L=J.id,Ln=!0),jt.needsLights){const nn=Xa(C.state.lightProbeGridArray,nt);jt.lightProbeGrid!==nn&&(jt.lightProbeGrid=nn,Ln=!0)}if(Re||B!==M){It.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Je.setValue(Z,"projectionMatrix",M.projectionMatrix),Je.setValue(Z,"viewMatrix",M.matrixWorldInverse);const Ki=Je.map.cameraPosition;Ki!==void 0&&Ki.setValue(Z,ye.setFromMatrixPosition(M.matrixWorld)),Ee.logarithmicDepthBuffer&&Je.setValue(Z,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Je.setValue(Z,"isOrthographic",M.isOrthographicCamera===!0),B!==M&&(B=M,Ln=!0,bn=!0)}if(jt.needsLights&&(Mn.state.directionalShadowMap.length>0&&Je.setValue(Z,"directionalShadowMap",Mn.state.directionalShadowMap,E),Mn.state.spotShadowMap.length>0&&Je.setValue(Z,"spotShadowMap",Mn.state.spotShadowMap,E),Mn.state.pointShadowMap.length>0&&Je.setValue(Z,"pointShadowMap",Mn.state.pointShadowMap,E)),nt.isSkinnedMesh){Je.setOptional(Z,nt,"bindMatrix"),Je.setOptional(Z,nt,"bindMatrixInverse");const nn=nt.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Je.setValue(Z,"boneTexture",nn.boneTexture,E))}nt.isBatchedMesh&&(Je.setOptional(Z,nt,"batchingTexture"),Je.setValue(Z,"batchingTexture",nt._matricesTexture,E),Je.setOptional(Z,nt,"batchingIdTexture"),Je.setValue(Z,"batchingIdTexture",nt._indirectTexture,E),Je.setOptional(Z,nt,"batchingColorTexture"),nt._colorsTexture!==null&&Je.setValue(Z,"batchingColorTexture",nt._colorsTexture,E));const di=$.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&me.update(nt,$,un),(Ln||jt.receiveShadow!==nt.receiveShadow)&&(jt.receiveShadow=nt.receiveShadow,Je.setValue(Z,"receiveShadow",nt.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&F.environment!==null&&(dn.envMapIntensity.value=F.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=MA()),Ln){if(Je.setValue(Z,"toneMappingExposure",W.toneMappingExposure),jt.needsLights&&zi(dn,bn),Nt&&J.fog===!0&&ot.refreshFogUniforms(dn,Nt),ot.refreshMaterialUniforms(dn,J,Ot,Rt,C.state.transmissionRenderTarget[M.id]),jt.needsLights&&jt.lightProbeGrid){const nn=jt.lightProbeGrid;dn.probesSH.value=nn.texture,dn.probesMin.value.copy(nn.boundingBox.min),dn.probesMax.value.copy(nn.boundingBox.max),dn.probesResolution.value.copy(nn.resolution)}jc.upload(Z,Ts(jt),dn,E)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(jc.upload(Z,Ts(jt),dn,E),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Je.setValue(Z,"center",nt.center),Je.setValue(Z,"modelViewMatrix",nt.modelViewMatrix),Je.setValue(Z,"normalMatrix",nt.normalMatrix),Je.setValue(Z,"modelMatrix",nt.matrixWorld),J.uniformsGroups!==void 0){const nn=J.uniformsGroups;for(let Ki=0,Wa=nn.length;Ki<Wa;Ki++){const As=nn[Ki];St.update(As,un),St.bind(As,un)}}return un}function zi(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Zi(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return rt},this.getActiveMipmapLevel=function(){return dt},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(M,F,$){const J=N.get(M);J.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),N.get(M.texture).__webglTexture=F,N.get(M.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:$,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){const $=N.get(M);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0};const Dt=Z.createFramebuffer();this.setRenderTarget=function(M,F=0,$=0){k=M,rt=F,dt=$;let J=null,nt=!1,Nt=!1;if(M){const Gt=N.get(M);if(Gt.__useDefaultFramebuffer!==void 0){It.bindFramebuffer(Z.FRAMEBUFFER,Gt.__webglFramebuffer),et.copy(M.viewport),ht.copy(M.scissor),xt=M.scissorTest,It.viewport(et),It.scissor(ht),It.setScissorTest(xt),L=-1;return}else if(Gt.__webglFramebuffer===void 0)E.setupRenderTarget(M);else if(Gt.__hasExternalTextures)E.rebindTextures(M,N.get(M.texture).__webglTexture,N.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const se=M.depthTexture;if(Gt.__boundDepthTexture!==se){if(se!==null&&N.has(se)&&(M.width!==se.image.width||M.height!==se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(M)}}const Yt=M.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Nt=!0);const Wt=N.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Wt[F])?J=Wt[F][$]:J=Wt[F],nt=!0):M.samples>0&&E.useMultisampledRTT(M)===!1?J=N.get(M).__webglMultisampledFramebuffer:Array.isArray(Wt)?J=Wt[$]:J=Wt,et.copy(M.viewport),ht.copy(M.scissor),xt=M.scissorTest}else et.copy(_t).multiplyScalar(Ot).floor(),ht.copy(Et).multiplyScalar(Ot).floor(),xt=qt;if($!==0&&(J=Dt),It.bindFramebuffer(Z.FRAMEBUFFER,J)&&It.drawBuffers(M,J),It.viewport(et),It.scissor(ht),It.setScissorTest(xt),nt){const Gt=N.get(M.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+F,Gt.__webglTexture,$)}else if(Nt){const Gt=F;for(let Yt=0;Yt<M.textures.length;Yt++){const Wt=N.get(M.textures[Yt]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+Yt,Wt.__webglTexture,$,Gt)}}else if(M!==null&&$!==0){const Gt=N.get(M.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Gt.__webglTexture,$)}L=-1},this.readRenderTargetPixels=function(M,F,$,J,nt,Nt,Ft,Gt=0){if(!(M&&M.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=N.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ft!==void 0&&(Yt=Yt[Ft]),Yt){It.bindFramebuffer(Z.FRAMEBUFFER,Yt);try{const Wt=M.textures[Gt],se=Wt.format,xe=Wt.type;if(M.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Gt),!Ee.textureFormatReadable(se)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ee.textureTypeReadable(xe)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-J&&$>=0&&$<=M.height-nt&&Z.readPixels(F,$,J,nt,j.convert(se),j.convert(xe),Nt)}finally{const Wt=k!==null?N.get(k).__webglFramebuffer:null;It.bindFramebuffer(Z.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(M,F,$,J,nt,Nt,Ft,Gt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=N.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ft!==void 0&&(Yt=Yt[Ft]),Yt)if(F>=0&&F<=M.width-J&&$>=0&&$<=M.height-nt){It.bindFramebuffer(Z.FRAMEBUFFER,Yt);const Wt=M.textures[Gt],se=Wt.format,xe=Wt.type;if(M.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Gt),!Ee.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ee.textureTypeReadable(xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Jt),Z.bufferData(Z.PIXEL_PACK_BUFFER,Nt.byteLength,Z.STREAM_READ),Z.readPixels(F,$,J,nt,j.convert(se),j.convert(xe),0);const ne=k!==null?N.get(k).__webglFramebuffer:null;It.bindFramebuffer(Z.FRAMEBUFFER,ne);const pe=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await Hy(Z,pe,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Jt),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Nt),Z.deleteBuffer(Jt),Z.deleteSync(pe),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,$=0){const J=Math.pow(2,-$),nt=Math.floor(M.image.width*J),Nt=Math.floor(M.image.height*J),Ft=F!==null?F.x:0,Gt=F!==null?F.y:0;E.setTexture2D(M,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,$,0,0,Ft,Gt,nt,Nt),It.unbindTexture()};const ut=Z.createFramebuffer(),te=Z.createFramebuffer();this.copyTextureToTexture=function(M,F,$=null,J=null,nt=0,Nt=0){let Ft,Gt,Yt,Wt,se,xe,Jt,ne,pe;const We=M.isCompressedTexture?M.mipmaps[Nt]:M.image;if($!==null)Ft=$.max.x-$.min.x,Gt=$.max.y-$.min.y,Yt=$.isBox3?$.max.z-$.min.z:1,Wt=$.min.x,se=$.min.y,xe=$.isBox3?$.min.z:0;else{const dn=Math.pow(2,-nt);Ft=Math.floor(We.width*dn),Gt=Math.floor(We.height*dn),M.isDataArrayTexture?Yt=We.depth:M.isData3DTexture?Yt=Math.floor(We.depth*dn):Yt=1,Wt=0,se=0,xe=0}J!==null?(Jt=J.x,ne=J.y,pe=J.z):(Jt=0,ne=0,pe=0);const He=j.convert(F.format),Qe=j.convert(F.type);let jt;F.isData3DTexture?(E.setTexture3D(F,0),jt=Z.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(E.setTexture2DArray(F,0),jt=Z.TEXTURE_2D_ARRAY):(E.setTexture2D(F,0),jt=Z.TEXTURE_2D),It.activeTexture(Z.TEXTURE0),It.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,F.flipY),It.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),It.pixelStorei(Z.UNPACK_ALIGNMENT,F.unpackAlignment);const Mn=It.getParameter(Z.UNPACK_ROW_LENGTH),Me=It.getParameter(Z.UNPACK_IMAGE_HEIGHT),un=It.getParameter(Z.UNPACK_SKIP_PIXELS),Re=It.getParameter(Z.UNPACK_SKIP_ROWS),Ln=It.getParameter(Z.UNPACK_SKIP_IMAGES);It.pixelStorei(Z.UNPACK_ROW_LENGTH,We.width),It.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,We.height),It.pixelStorei(Z.UNPACK_SKIP_PIXELS,Wt),It.pixelStorei(Z.UNPACK_SKIP_ROWS,se),It.pixelStorei(Z.UNPACK_SKIP_IMAGES,xe);const bn=M.isDataArrayTexture||M.isData3DTexture,Je=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){const dn=N.get(M),di=N.get(F),nn=N.get(dn.__renderTarget),Ki=N.get(di.__renderTarget);It.bindFramebuffer(Z.READ_FRAMEBUFFER,nn.__webglFramebuffer),It.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Ki.__webglFramebuffer);for(let Wa=0;Wa<Yt;Wa++)bn&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,N.get(M).__webglTexture,nt,xe+Wa),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,N.get(F).__webglTexture,Nt,pe+Wa)),Z.blitFramebuffer(Wt,se,Ft,Gt,Jt,ne,Ft,Gt,Z.DEPTH_BUFFER_BIT,Z.NEAREST);It.bindFramebuffer(Z.READ_FRAMEBUFFER,null),It.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(nt!==0||M.isRenderTargetTexture||N.has(M)){const dn=N.get(M),di=N.get(F);It.bindFramebuffer(Z.READ_FRAMEBUFFER,ut),It.bindFramebuffer(Z.DRAW_FRAMEBUFFER,te);for(let nn=0;nn<Yt;nn++)bn?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,dn.__webglTexture,nt,xe+nn):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,dn.__webglTexture,nt),Je?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,di.__webglTexture,Nt,pe+nn):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,di.__webglTexture,Nt),nt!==0?Z.blitFramebuffer(Wt,se,Ft,Gt,Jt,ne,Ft,Gt,Z.COLOR_BUFFER_BIT,Z.NEAREST):Je?Z.copyTexSubImage3D(jt,Nt,Jt,ne,pe+nn,Wt,se,Ft,Gt):Z.copyTexSubImage2D(jt,Nt,Jt,ne,Wt,se,Ft,Gt);It.bindFramebuffer(Z.READ_FRAMEBUFFER,null),It.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Je?M.isDataTexture||M.isData3DTexture?Z.texSubImage3D(jt,Nt,Jt,ne,pe,Ft,Gt,Yt,He,Qe,We.data):F.isCompressedArrayTexture?Z.compressedTexSubImage3D(jt,Nt,Jt,ne,pe,Ft,Gt,Yt,He,We.data):Z.texSubImage3D(jt,Nt,Jt,ne,pe,Ft,Gt,Yt,He,Qe,We):M.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Nt,Jt,ne,Ft,Gt,He,Qe,We.data):M.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Nt,Jt,ne,We.width,We.height,He,We.data):Z.texSubImage2D(Z.TEXTURE_2D,Nt,Jt,ne,Ft,Gt,He,Qe,We);It.pixelStorei(Z.UNPACK_ROW_LENGTH,Mn),It.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Me),It.pixelStorei(Z.UNPACK_SKIP_PIXELS,un),It.pixelStorei(Z.UNPACK_SKIP_ROWS,Re),It.pixelStorei(Z.UNPACK_SKIP_IMAGES,Ln),Nt===0&&F.generateMipmaps&&Z.generateMipmap(jt),It.unbindTexture()},this.initRenderTarget=function(M){N.get(M).__webglFramebuffer===void 0&&E.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),It.unbindTexture()},this.resetState=function(){rt=0,dt=0,k=null,It.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=ke._getDrawingBufferColorSpace(t),i.unpackColorSpace=ke._getUnpackColorSpace()}}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),TA=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),$_=r=>{const t=TA(r);return t.charAt(0).toUpperCase()+t.slice(1)},jv=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),AA=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=ae.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:d,...p},m)=>ae.createElement("svg",{ref:m,...wA,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:jv("lucide",l),...!c&&!AA(p)&&{"aria-hidden":"true"},...p},[...d.map(([h,S])=>ae.createElement(h,S)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=(r,t)=>{const i=ae.forwardRef(({className:s,...l},c)=>ae.createElement(RA,{ref:c,iconNode:t,className:jv(`lucide-${EA($_(r))}`,`lucide-${r}`,s),...l}));return i.displayName=$_(r),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],DA=jn("compass",CA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],UA=jn("database",NA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],OA=jn("eye",LA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],IA=jn("key",PA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],BA=jn("refresh-cw",zA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],GA=jn("rotate-ccw",FA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],VA=jn("save",HA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],qv=jn("settings",kA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],WA=jn("shield-alert",XA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],qA=jn("sparkles",jA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]],ZA=jn("swords",YA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],QA=jn("trash-2",KA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],$A=jn("trophy",JA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],e2=jn("volume-2",t2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],i2=jn("volume-x",n2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],s2=jn("x",a2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],tv=jn("zoom-in",r2);function o2(){const r=document.createElement("canvas");r.width=256,r.height=256;const t=r.getContext("2d");if(t){t.fillStyle="#6b7280",t.fillRect(0,0,256,256),t.strokeStyle="#374151",t.lineWidth=4;const s=32,l=64;for(let c=0;c<256;c+=s){t.beginPath(),t.moveTo(0,c),t.lineTo(256,c),t.stroke();const d=c/s%2===0?0:l/2;for(let p=-d;p<256;p+=l)t.beginPath(),t.moveTo(p,c),t.lineTo(p,c+s),t.stroke()}for(let c=0;c<2e3;c++){const d=Math.random()*256,p=Math.random()*256,m=Math.random()*4+1,h=Math.random()*4+1;t.fillStyle=Math.random()>.5?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.1)",t.fillRect(d,p,m,h)}}const i=new Jh(r);return i.wrapS=Ia,i.wrapT=Ia,i}function l2(){const r=document.createElement("canvas");r.width=128,r.height=128;const t=r.getContext("2d");if(t){t.fillStyle="#991b1b",t.fillRect(0,0,128,128),t.strokeStyle="#7f1d1d",t.lineWidth=3;const s=16,l=32;for(let c=0;c<128;c+=l){t.beginPath(),t.moveTo(0,c),t.lineTo(128,c),t.stroke();const d=c/l%2===0?0:s/2;for(let p=-d;p<128+s;p+=s)t.beginPath(),t.arc(p+s/2,c,s/2,0,Math.PI,!1),t.stroke()}}const i=new Jh(r);return i.wrapS=Ia,i.wrapT=Ia,i}function c2(){const r=document.createElement("canvas");r.width=256,r.height=256;const t=r.getContext("2d");if(t){t.fillStyle="#15803d",t.fillRect(0,0,256,256);for(let s=0;s<30;s++){const l=Math.random()*256,c=Math.random()*256,d=Math.random()*30+10,p=t.createRadialGradient(l,c,0,l,c,d);p.addColorStop(0,"#166534"),p.addColorStop(1,"transparent"),t.fillStyle=p,t.beginPath(),t.arc(l,c,d,0,Math.PI*2),t.fill()}t.strokeStyle="#22c55e",t.lineWidth=2;for(let s=0;s<600;s++){const l=Math.random()*256,c=Math.random()*256,d=Math.random()*6+2,p=(Math.random()-.5)*.4;t.beginPath(),t.moveTo(l,c),t.lineTo(l+d*Math.sin(p),c-d*Math.cos(p)),t.stroke()}}const i=new Jh(r);return i.wrapS=Ia,i.wrapT=Ia,i}function u2(){const r=new oe;r.name="Knight";const t=new le({color:10265519,metalness:.85,roughness:.25}),i=new le({color:1920728,roughness:.7}),s=new le({color:16502760,roughness:.6}),l=new le({color:16096779,metalness:.9,roughness:.15}),c=new le({color:4528643,roughness:.85}),d=new oe;d.position.y=.95;const p=new tt(new ce(.42,.32,.85,12),t);p.scale.set(1.1,1,.8),p.castShadow=!0,p.receiveShadow=!0,d.add(p);const m=new tt(new Kt(.18,.45,.05),i);m.position.set(0,.05,.34),d.add(m);const h=new tt(new Kt(.04,.35,.06),l);h.position.set(0,.05,.35),d.add(h);const S=new tt(new ce(.24,.24,.12,10),l);S.position.y=.46,d.add(S),r.add(d);const x=new oe;x.position.set(-.25,.25,0),x.name="LeftLeg";const g=new tt(new ce(.14,.11,.35,8),t);g.position.y=-.05,x.add(g);const b=new tt(new Be(.13,8,8),l);b.position.y=-.23,x.add(b);const A=new tt(new ce(.11,.08,.22,8),t);A.position.y=-.34,x.add(A);const D=new tt(new Kt(.16,.1,.28),t);D.position.set(0,-.45,.06),x.add(D);const y=new tt(new _n(.08,.08,4),l);y.position.set(0,-.45,.2),y.rotation.x=Math.PI/2,x.add(y),r.add(x);const v=new oe;v.position.set(.25,.25,0),v.name="RightLeg";const R=new tt(new ce(.14,.11,.35,8),t);R.position.y=-.05,v.add(R);const I=new tt(new Be(.13,8,8),l);I.position.y=-.23,v.add(I);const U=new tt(new ce(.11,.08,.22,8),t);U.position.y=-.34,v.add(U);const H=new tt(new Kt(.16,.1,.28),t);H.position.set(0,-.45,.06),v.add(H);const C=new tt(new _n(.08,.08,4),l);C.position.set(0,-.45,.2),C.rotation.x=Math.PI/2,v.add(C),r.add(v);const z=new le({color:4137733,roughness:.9}),T=new tt(new ce(.38,.38,.14,10),z);T.position.y=.58,r.add(T);const P=new tt(new sl(.1,.03,8,12),l);P.position.set(0,.58,.36),r.add(P);const W=new oe;W.name="HeadGroup",W.position.set(0,1.6,0);const G=new tt(new Be(.24,12,12),s);W.add(G);const Y=new tt(new Be(.28,16,16),t);Y.position.set(0,.06,0),W.add(Y);const rt=new tt(new ce(.29,.29,.18,10,1,!1,0,Math.PI),t);rt.position.set(0,.02,.05),rt.rotation.y=-Math.PI/2,W.add(rt);const dt=new le({color:6333946,emissive:3900150,emissiveIntensity:1.5}),k=new tt(new Kt(.25,.04,.1),dt);k.position.set(0,.06,.25),W.add(k);const L=new tt(new sl(.28,.03,6,16,Math.PI/1.5),l);L.position.set(0,.08,-.02),L.rotation.z=Math.PI/2,W.add(L);const B=new oe;B.position.set(0,.34,-.12);const et=5;for(let Ye=0;Ye<et;Ye++){const N=1-Ye*.15,E=new tt(new Be(.12*N,8,8),i);E.position.set(0,Ye*.08,-Ye*.14),B.add(E)}W.add(B),r.add(W);const ht=new oe;ht.name="LeftArmGroup",ht.position.set(-.58,1.25,0);const xt=new tt(new Be(.18,10,10),l);ht.add(xt);const O=new tt(new ce(.09,.08,.32,8),t);O.position.y=-.16,ht.add(O);const Q=new tt(new Be(.095,8,8),t);Q.position.y=-.32,ht.add(Q);const yt=new tt(new ce(.08,.07,.22,8),t);yt.position.y=-.42,ht.add(yt);const Rt=new oe;Rt.position.set(-.2,-.35,.18),Rt.rotation.y=Math.PI/4;const Ot=new tt(new Kt(.08,.8,.55),t);Rt.add(Ot);const st=new tt(new Kt(.1,.82,.59),l);st.position.x=-.01,st.scale.set(.5,1.01,1.01),Rt.add(st);const At=new tt(new Kt(.12,.68,.04),i);At.position.set(.04,0,0),Rt.add(At);const _t=new tt(new Kt(.12,.16,.44),i);_t.position.set(.04,.08,0),Rt.add(_t),ht.add(Rt),r.add(ht);const Et=new oe;Et.name="RightArmGroup",Et.position.set(.58,1.25,0);const qt=new tt(new Be(.18,10,10),l);Et.add(qt);const Xt=new tt(new ce(.09,.08,.32,8),t);Xt.position.y=-.16,Et.add(Xt);const ve=new tt(new Be(.095,8,8),t);ve.position.y=-.32,Et.add(ve);const Qt=new tt(new ce(.08,.07,.22,8),t);Qt.position.y=-.42,Et.add(Qt);const $t=new oe;$t.name="SwordGroup",$t.position.set(0,-.48,.1),$t.rotation.x=-Math.PI/2;const ye=new tt(new ce(.038,.038,.24,8),c);ye.position.y=-.12,$t.add(ye);const he=new tt(new Be(.07,8,8),l);he.position.y=-.24,$t.add(he);const Ge=new oe;Ge.position.y=0;const Ne=new tt(new Kt(.38,.05,.06),l);Ge.add(Ne);const tn=new tt(new Be(.05,6,6),l);tn.position.set(-.19,.02,0),Ge.add(tn);const Z=new tt(new Be(.05,6,6),l);Z.position.set(.19,.02,0),Ge.add(Z),$t.add(Ge);const Ue=new tt(new Kt(.09,.95,.03),t);Ue.position.y=.48,$t.add(Ue);const fe=new le({color:9684477,emissive:3900150,emissiveIntensity:1.2}),Ee=new tt(new Kt(.015,.7,.035),fe);Ee.position.set(0,.45,.002),$t.add(Ee);const It=new tt(new _n(.05,.16,4),t);return It.position.y=1.03,It.rotation.y=Math.PI/4,$t.add(It),Et.add($t),r.add(Et),r}function f2(){const r=new oe;r.name="Princess";const t=new le({color:15485081,roughness:.8}),i=new le({color:16642808,roughness:.9}),s=new le({color:16502760,roughness:.65}),l=new le({color:13273604,roughness:.75}),c=new le({color:16436245,metalness:.95,roughness:.1}),d=new le({color:15680580,emissive:10033947,roughness:.2}),p=new oe;p.position.y=.55;const m=new tt(new ce(.18,.58,1.1,14),t);m.castShadow=!0,m.receiveShadow=!0,p.add(m);const h=.56;for(let et=0;et<14;et++){const ht=et/14*Math.PI*2,xt=new tt(new ce(.06,.06,1.1,6),i);xt.position.set(h*Math.cos(ht),0,h*Math.sin(ht)),xt.rotation.y=ht,p.add(xt)}const S=new tt(new Kt(.12,1,.05),i);S.position.set(0,.05,.38),S.rotation.x=-Math.PI*.15,p.add(S),r.add(p);const x=new oe;x.position.y=1.15;const g=new tt(new ce(.18,.14,.35,10),t);g.castShadow=!0,x.add(g);const b=new tt(new Kt(.08,.25,.15),i);b.position.set(0,.05,.12),x.add(b),r.add(x);const A=new oe;A.position.set(0,1.48,0);const D=new tt(new Be(.2,12,12),s);A.add(D);const y=new tt(new Be(.02,6,6),new al({color:1981066}));y.position.set(-.06,.03,.16),A.add(y);const v=new tt(new Be(.02,6,6),new al({color:1981066}));v.position.set(.06,.03,.16),A.add(v);const R=new oe,I=new tt(new Be(.22,12,12),l);I.position.set(0,.02,-.06),I.scale.set(1.05,1.1,1),R.add(I);const U=new oe;U.position.set(-.16,-.05,-.05);for(let et=0;et<5;et++){const ht=new tt(new Be(.08-et*.01,8,8),l);ht.position.set(-.02*et,-et*.1,0),U.add(ht)}R.add(U);const H=new oe;H.position.set(.16,-.05,-.05);for(let et=0;et<5;et++){const ht=new tt(new Be(.08-et*.01,8,8),l);ht.position.set(.02*et,-et*.1,0),H.add(ht)}R.add(H);const C=new tt(new Kt(.24,.1,.15),l);C.position.set(0,.15,.11),R.add(C),A.add(R);const z=new oe;z.position.y=.22;const T=new tt(new ce(.11,.11,.05,10,1,!0),c);z.add(T);const P=5;for(let et=0;et<P;et++){const ht=et/P*Math.PI*2,xt=.1*Math.cos(ht),O=.1*Math.sin(ht),Q=new tt(new _n(.022,.12,4),c);Q.position.set(xt,.06,O),z.add(Q);const yt=new tt(new Be(.018,5,5),d);yt.position.set(xt,.12,O),z.add(yt)}A.add(z),r.add(A);const W=new oe;W.position.set(-.25,1.15,0),W.rotation.z=Math.PI/5;const G=new tt(new Be(.1,8,8),t);W.add(G);const Y=new tt(new ce(.04,.035,.35,8),s);Y.position.y=-.18,W.add(Y),r.add(W);const rt=new oe;rt.name="RightArmGroup",rt.position.set(.25,1.15,0);const dt=new tt(new Be(.1,8,8),t);rt.add(dt);const k=new oe;k.position.y=0,k.rotation.z=-Math.PI/3;const L=new tt(new ce(.04,.035,.35,8),s);L.position.y=-.18,k.add(L);const B=new tt(new Be(.045,6,6),s);return B.position.y=-.36,k.add(B),rt.add(k),r.add(rt),r}function d2(){const r=new oe;r.name="Gargoyle";const t=new le({color:4937059,roughness:.95,metalness:.1}),i=new le({color:3621201,roughness:.9}),s=new le({color:2042167,roughness:.8}),l=new le({color:15680580,emissive:15680580,emissiveIntensity:1.8,roughness:.5}),c=new oe;c.position.y=.55;const d=new tt(new ce(.38,.28,.45,10),t);d.scale.set(1.2,1,.8),d.castShadow=!0,c.add(d);const p=new tt(new ce(.24,.26,.25,8),i);p.position.y=-.3,c.add(p);const m=new tt(new Be(.22,8,8),t);m.position.set(0,.1,-.16),c.add(m),r.add(c);const h=new oe;h.position.set(0,.92,.12);const S=new tt(new Be(.18,10,10),t);h.add(S);const x=new tt(new Kt(.16,.12,.2),t);x.position.set(0,-.05,.16),h.add(x);const g=new oe;g.position.set(-.1,.12,0),g.rotation.set(-Math.PI/4,0,-Math.PI/6);const b=new tt(new _n(.05,.18,5),s);g.add(b);const A=new tt(new _n(.03,.12,5),s);A.position.set(0,.12,.03),A.rotation.x=-Math.PI/8,g.add(A),h.add(g);const D=new oe;D.position.set(.1,.12,0),D.rotation.set(-Math.PI/4,0,Math.PI/6);const y=new tt(new _n(.05,.18,5),s);D.add(y);const v=new tt(new _n(.03,.12,5),s);v.position.set(0,.12,.03),v.rotation.x=-Math.PI/8,D.add(v),h.add(D);const R=new tt(new Kt(.05,.03,.04),l);R.position.set(-.07,.04,.15),h.add(R);const I=new tt(new Kt(.05,.03,.04),l);I.position.set(.07,.04,.15),h.add(I),r.add(h);const U=new oe;U.name="WingL",U.position.set(-.35,.72,-.2);const H=new tt(new ce(.04,.03,.45,6),i);H.position.set(-.2,.2,0),H.rotation.z=Math.PI/4,U.add(H);const C=new tt(new ce(.03,.02,.55,6),i);C.position.set(-.5,.1,.1),C.rotation.z=-Math.PI/3,U.add(C);const z=new tt(new Kt(.65,.42,.02),t);z.position.set(-.35,0,-.02),z.rotation.y=Math.PI/8,U.add(z),r.add(U);const T=new oe;T.name="WingR",T.position.set(.35,.72,-.2);const P=new tt(new ce(.04,.03,.45,6),i);P.position.set(.2,.2,0),P.rotation.z=-Math.PI/4,T.add(P);const W=new tt(new ce(.03,.02,.55,6),i);W.position.set(.5,.1,.1),W.rotation.z=Math.PI/3,T.add(W);const G=new tt(new Kt(.65,.42,.02),t);G.position.set(.35,0,-.02),G.rotation.y=-Math.PI/8,T.add(G),r.add(T);const Y=new oe;Y.position.set(0,.32,-.25),Y.rotation.x=-Math.PI/4;const rt=6;for(let O=0;O<rt;O++){const Q=1-O*.12,yt=new tt(new ce(.06*Q,.04*Q,.18,6),i);if(yt.position.set(0,0,-O*.15),yt.rotation.x=Math.sin(O*.5)*.2,Y.add(yt),O%2===0){const Rt=new tt(new _n(.02,.05,4),s);Rt.position.set(-.06,0,-O*.15),Rt.rotation.z=-Math.PI/2,Y.add(Rt);const Ot=new tt(new _n(.02,.05,4),s);Ot.position.set(.06,0,-O*.15),Ot.rotation.z=Math.PI/2,Y.add(Ot)}}const dt=new tt(new _n(.05,.12,4),s);dt.position.set(0,0,-rt*.15-.05),dt.rotation.x=-Math.PI/2,Y.add(dt),r.add(Y);const k=new oe;k.position.set(-.24,.25,.05);const L=new tt(new ce(.12,.09,.32,8),t);k.add(L);const B=new tt(new Kt(.14,.08,.22),i);B.position.set(0,-.22,.05),k.add(B);for(let O=0;O<3;O++){const Q=new tt(new _n(.025,.06,4),s);Q.position.set(-.04+O*.04,-.22,.16),Q.rotation.x=Math.PI/2,k.add(Q)}r.add(k);const et=new oe;et.position.set(.24,.25,.05);const ht=new tt(new ce(.12,.09,.32,8),t);et.add(ht);const xt=new tt(new Kt(.14,.08,.22),i);xt.position.set(0,-.22,.05),et.add(xt);for(let O=0;O<3;O++){const Q=new tt(new _n(.025,.06,4),s);Q.position.set(-.04+O*.04,-.22,.16),Q.rotation.x=Math.PI/2,et.add(Q)}return r.add(et),r}function h2(){const r=new oe;r.name="ShadowHound";const t=new le({color:3868516,roughness:.5}),i=new le({color:1973067,roughness:.7}),s=new le({color:14239471,emissive:10624175,emissiveIntensity:1.2}),l=new le({color:15680580,emissive:15680580,emissiveIntensity:2}),c=new le({color:15987958,roughness:.2}),d=new tt(new Kt(.48,.48,.65),t);d.position.set(0,.48,.1),d.castShadow=!0,r.add(d);const p=new tt(new Be(.24,10,10),i);p.position.set(0,.56,.25),r.add(p);const m=new tt(new ce(.2,.14,.38,8),t);m.position.set(0,.42,-.32),m.rotation.x=Math.PI/2,r.add(m);for(let L=0;L<4;L++){const B=new tt(new _n(.045,.22,4),s);B.position.set(0,.72-L*.05,.28-L*.2),B.rotation.x=-Math.PI/5,r.add(B)}const h=new oe;h.position.set(0,.65,.5);const S=new tt(new Be(.18,10,10),t);h.add(S);const x=new tt(new Kt(.14,.12,.26),t);x.position.set(0,-.04,.2),h.add(x);const g=new tt(new _n(.04,.18,4),t);g.position.set(-.11,.16,-.04),g.rotation.set(.1,0,.35),h.add(g);const b=new tt(new _n(.04,.18,4),t);b.position.set(.11,.16,-.04),b.rotation.set(.1,0,-.35),h.add(b);for(let L=0;L<2;L++){const B=new tt(new _n(.015,.05,4),c);B.position.set(-.04+L*.08,-.1,.26),B.rotation.x=Math.PI,h.add(B)}const A=new tt(new Kt(.04,.04,.04),l);A.position.set(-.08,.04,.14),h.add(A);const D=new tt(new Kt(.04,.04,.04),l);D.position.set(.08,.04,.14),h.add(D),r.add(h);const y=new ce(.08,.06,.35,6),v=new oe;v.name="FLLeg",v.position.set(-.2,.18,.3);const R=new tt(y,t);v.add(R);const I=new tt(new Kt(.1,.06,.14),i);I.position.set(0,-.2,.04),v.add(I),r.add(v);const U=new oe;U.name="FRLeg",U.position.set(.2,.18,.3);const H=new tt(y,t);U.add(H);const C=new tt(new Kt(.1,.06,.14),i);C.position.set(0,-.2,.04),U.add(C),r.add(U);const z=new oe;z.name="BLLeg",z.position.set(-.2,.18,-.32);const T=new tt(y,t);z.add(T);const P=new tt(new Kt(.1,.06,.14),i);P.position.set(0,-.2,.04),z.add(P),r.add(z);const W=new oe;W.name="BRLeg",W.position.set(.2,.18,-.32);const G=new tt(y,t);W.add(G);const Y=new tt(new Kt(.1,.06,.14),i);Y.position.set(0,-.2,.04),W.add(Y),r.add(W);const rt=new oe;rt.position.set(0,.52,-.5),rt.rotation.x=-Math.PI/4;const dt=new tt(new Kt(.05,.05,.55),t);dt.position.z=-.25,rt.add(dt);const k=new tt(new _n(.04,.14,4),s);return k.position.set(0,0,-.56),k.rotation.x=-Math.PI/2,rt.add(k),r.add(rt),r}function p2(){const r=new oe;r.name="StoneGolem";const t=new le({color:4144966,roughness:1}),i=new le({color:16096779,emissive:14251782,emissiveIntensity:2.5,roughness:.4}),s=new le({color:16347926,emissive:14689316,emissiveIntensity:1.8}),l=new oe;l.position.y=1.9;const c=new tt(new ce(.9,.65,1.2,10),t);c.scale.set(1.1,1,.84),l.add(c);const d=new tt(new Kt(.68,.45,.15),i);d.position.set(0,0,.52),l.add(d);const p=new tt(new Kt(.1,.8,.05),s);p.position.set(-.84,.1,.2),l.add(p);const m=new tt(new Kt(.1,.8,.05),s);m.position.set(.84,.1,.2),l.add(m),r.add(l);const h=new oe;h.position.set(0,2.55,.12);const S=new tt(new Be(.32,10,10),t);S.scale.set(1.1,.95,1),h.add(S);const x=new tt(new Kt(.42,.06,.22),i);x.position.set(0,.04,.21),h.add(x),r.add(h);const g=new tt(new Be(.42,12,12),t);g.position.set(-1.15,2.15,0),r.add(g);const b=new tt(new Be(.42,12,12),t);b.position.set(1.15,2.15,0),r.add(b);const A=new oe;A.name="LArmGroup",A.position.set(-1.15,2.15,0);const D=new tt(new ce(.24,.2,.7,8),t);D.position.y=-.35,A.add(D);const y=new tt(new Kt(.44,.8,.44),t);y.position.set(0,-.95,.1),A.add(y);const v=new tt(new Kt(.35,.12,.35),i);v.position.set(0,-1.36,.12),A.add(v),r.add(A);const R=new oe;R.name="RArmGroup",R.position.set(1.15,2.15,0);const I=new tt(new ce(.24,.2,.7,8),t);I.position.y=-.35,R.add(I);const U=new tt(new Kt(.44,.8,.44),t);U.position.set(0,-.95,.1),R.add(U);const H=new tt(new ce(.08,.08,2.3,8),new le({color:2565930,roughness:.9}));H.position.set(0,-1.2,.55),H.rotation.x=Math.PI/4,R.add(H);const C=new tt(new Be(.55,12,12),t);C.position.set(0,-1.9,1.25),R.add(C);const z=new tt(new ce(.45,.45,.9,8),i);z.scale.set(1.1,.15,1.1),z.position.set(0,-1.9,1.25),R.add(z);for(let L=0;L<6;L++){const B=L/6*Math.PI*2,et=new tt(new _n(.12,.28,4),t);et.position.set(.5*Math.cos(B),-1.9,1.25+.5*Math.sin(B)),et.rotation.set(Math.PI/2,B,0),R.add(et)}r.add(R);const T=new tt(new Be(.35,10,10),t);T.position.set(-.55,1.15,0),r.add(T);const P=new oe;P.name="LeftLeg",P.position.set(-.55,.55,0);const W=new tt(new Kt(.44,1,.44),t);P.add(W);const G=new tt(new Kt(.48,.16,.58),new le({color:1579035,roughness:1}));G.position.set(0,-.48,.08),P.add(G),r.add(P);const Y=new tt(new Be(.35,10,10),t);Y.position.set(.55,1.15,0),r.add(Y);const rt=new oe;rt.name="RightLeg",rt.position.set(.55,.55,0);const dt=new tt(new Kt(.44,1,.44),t);rt.add(dt);const k=new tt(new Kt(.48,.16,.58),new le({color:1579035,roughness:1}));return k.position.set(0,-.48,.08),rt.add(k),r.add(rt),r}function m2(){const r=new oe;r.name="Pendulum";const t=new le({color:4528643,roughness:.9}),i=new le({color:3621201,metalness:.8,roughness:.3}),s=new le({color:10265519,metalness:.95,roughness:.1}),l=new tt(new ce(.15,.15,1,8),i);l.rotation.x=Math.PI/2,r.add(l);const c=new oe;c.name="SwingPart";const d=new tt(new Kt(.08,4.5,.08),t);d.position.y=-2.25,c.add(d);const p=new tt(new Kt(.12,.6,.12),i);p.position.y=-4.1,c.add(p);const m=new ce(1.2,1.2,.05,16,1,!1,0,Math.PI),h=new tt(m,s);return h.position.y=-4.5,h.rotation.x=Math.PI/2,h.rotation.z=Math.PI,c.add(h),r.add(c),r}function g2(){const r=new oe;r.name="PressurePlateGroup";const t=new le({color:4937059,roughness:.9}),i=new le({color:15680580,roughness:.5}),s=new tt(new Kt(1.5,.05,1.5),t);s.receiveShadow=!0,r.add(s);const l=new tt(new Kt(1,.06,1),i);return l.name="CenterPlate",l.position.y=.02,l.castShadow=!0,r.add(l),r}function _2(){const r=new oe,t=new le({color:2042167,metalness:.8,roughness:.4}),i=new le({color:14251782,metalness:.9,roughness:.2}),s=new tt(new Kt(.7,.7,.7),t);r.add(s);const l=new tt(new sl(.18,.04,8,16),i);l.position.z=.36,r.add(l);const c=new tt(new ce(.1,.1,.4,8),t);return c.position.z=.2,c.rotation.x=Math.PI/2,r.add(c),r}function v2(){const r=new oe;r.name="Arrow";const t=new le({color:7877903,roughness:.8}),i=new le({color:10265519,metalness:.9,roughness:.1}),s=new le({color:15987958,roughness:.9}),l=new tt(new ce(.02,.02,.9,8),t);l.rotation.x=Math.PI/2,r.add(l);const c=new tt(new _n(.05,.16,4),i);c.position.z=.5,c.rotation.x=Math.PI/2,r.add(c);const d=new tt(new Kt(.01,.1,.18),s);d.position.set(-.04,0,-.4),r.add(d);const p=new tt(new Kt(.01,.1,.18),s);return p.position.set(.04,0,-.4),r.add(p),r}const ev=[{id:"gargoyle_1",type:"GARGOYLE",position:new X(-18,12.5,-18)},{id:"gargoyle_2",type:"GARGOYLE",position:new X(18,12.5,-18)},{id:"hound_1",type:"SHADOW_HOUND",position:new X(-24,0,-10),patrolWaypoints:[new X(-24,0,-10),new X(-24,0,-25),new X(-14,0,-25),new X(-14,0,-10)]},{id:"hound_2",type:"SHADOW_HOUND",position:new X(-20,0,15),patrolWaypoints:[new X(-20,0,15),new X(-12,0,15),new X(-12,0,25),new X(-20,0,25)]},{id:"golem_boss",type:"STONE_GOLEM",position:new X(0,0,-25)}],nv=[{id:"pendulum_1",type:"PENDULUM",position:new X(-8,5,-15)},{id:"pendulum_2",type:"PENDULUM",position:new X(8,5,-15)},{id:"plate_corridor",type:"PRESSURE_PLATE",position:new X(-15,0,-5)},{id:"plate_roof_secret",type:"PRESSURE_PLATE",position:new X(10,0,20)}],iv=[{id:"pot_dungeon",position:new X(-28,.5,-28),taken:!1},{id:"pot_library",position:new X(-28,.5,28),taken:!1},{id:"pot_forge",position:new X(28,.5,22),taken:!1},{id:"pot_tower_middle",position:new X(26,12.5,-26),taken:!1}];function x2(r){const t=[],i=o2(),s=l2(),l=new le({map:i,roughness:.9,bumpScale:.1}),c=new le({map:s,roughness:.8});new le({color:4937059,roughness:1}),new le({color:4528643,roughness:1});const d=new le({color:2042167,metalness:.8,roughness:.4}),p=new le({color:15381256,metalness:.8,roughness:.2}),m=new le({color:7877903,roughness:.9});function h(_t,Et,qt,Xt,ve,Qt,$t,ye,he=!0,Ge=!0){const Ne=new Kt(Et,qt,Xt),tn=new tt(Ne,ye);tn.position.set(ve,Qt,$t),tn.castShadow=he,tn.receiveShadow=Ge,r.add(tn);const Z=Et/2,Ue=qt/2,fe=Xt/2;t.push({min:new X(ve-Z,Qt-Ue,$t-fe),max:new X(ve+Z,Qt+Ue,$t+fe),name:_t})}h("Wall_Back",80,10,4,0,5,-40,l),h("Wall_Front_Left",30,10,4,-25,5,40,l),h("Wall_Front_Right",30,10,4,25,5,40,l),h("Wall_Front_Arch_Top",20,4,4,0,10,40,l),h("Wall_Left",4,10,84,-40,5,0,l),h("Wall_Right",4,10,84,40,5,0,l);function S(_t,Et){const qt=new ce(4.5,4.5,16,12),Xt=new tt(qt,l);Xt.position.set(_t,8,Et),Xt.castShadow=!0,Xt.receiveShadow=!0,r.add(Xt);const ve=new ce(5.2,5.2,2,12),Qt=new tt(ve,l);Qt.position.set(_t,17,Et),r.add(Qt);const $t=new _n(5.4,5,12),ye=new tt($t,c);ye.position.set(_t,20.5,Et),ye.castShadow=!0,r.add(ye),t.push({min:new X(_t-5,0,Et-5),max:new X(_t+5,18,Et+5),name:"Tower_Solid"})}S(-38,-38),S(38,-38),S(-38,38),S(38,38),h("Dungeon_Wall_Z",2,8,18,-15,4,-28,l),h("Dungeon_Wall_X",22,8,2,-25,4,-18,l);for(let _t=-28;_t>=-38;_t-=3){const Et=new ce(.06,.06,6,6),qt=new tt(Et,d);qt.position.set(-15,3,_t),r.add(qt)}t.push({min:new X(-15.2,0,-38),max:new X(-14.8,6,-24),name:"Jail_Bars"}),h("Dungeon_Table",2.2,.8,4,-28,.4,-26,m);const x=new tt(new Kt(.4,.1,.3),new le({color:15067115}));x.position.set(-28,.85,-26),r.add(x);const g=new tt(new Be(.12,8,8),new le({color:15067115}));g.position.set(-28,1,-26.3),r.add(g),h("Library_Partition_X",22,8,2,-25,4,18,l),h("Library_Partition_Z",2,8,18,-15,4,28,l);function b(_t,Et,qt=0){const Xt=new oe;Xt.position.set(_t,3.5,Et),Xt.rotation.y=qt;const ve=new tt(new Kt(4,7,1.2),m);ve.castShadow=!0,Xt.add(ve);for(let Qt=-2.5;Qt<=2.5;Qt+=1.6)for(let $t=-1.6;$t<=1.6;$t+=.4)if(Math.random()>.15){const ye=[14251782,14427686,2450411,366185,14251782,5195493],he=ye[Math.floor(Math.random()*ye.length)],Ge=new le({color:he,roughness:.7}),Ne=new tt(new Kt(.12+Math.random()*.08,.9+Math.random()*.3,.8),Ge);Ne.position.set($t,Qt+.5,.1),Xt.add(Ne)}r.add(Xt),t.push({min:new X(_t-2.2,0,Et-.8),max:new X(_t+2.2,7,Et+.8),name:"Bookshelf_Solid"})}b(-35,22),b(-35,30),b(-26,35,Math.PI/2),b(-20,35,Math.PI/2),h("Forge_Chimney",6,12,6,30,6,30,l);const A=new le({color:15357964,emissive:16729344,roughness:.5});h("Forge_Fire_Glow",4,1.2,3.2,30,.8,27.5,A);const D=new oe;D.position.set(24,.8,25);const y=new tt(new ce(.4,.6,.6,8),l);D.add(y);const v=new tt(new Kt(.8,.3,.4),d);v.position.y=.45,D.add(v),r.add(D),t.push({min:new X(23.4,0,24.4),max:new X(24.6,1.6,25.6),name:"Anvil_Solid"});function R(_t,Et){const qt=new tt(new Kt(1.8,.8,1.8),l);qt.position.set(_t,.4,Et),r.add(qt);const Xt=new tt(new ce(.6,.6,9.2,8),l);Xt.position.set(_t,5,Et),Xt.castShadow=!0,r.add(Xt);const ve=new tt(new Kt(1.8,.8,1.8),l);ve.position.set(_t,9.6,Et),r.add(ve),t.push({min:new X(_t-1,0,Et-1),max:new X(_t+1,10,Et+1),name:"Pillar_Solid"})}R(-7,-25),R(7,-25),R(-7,-15),R(7,-15),h("Throne_Left_Wall",2,10,15,-15,5,-31,l),h("Throne_Right_Wall",2,10,15,15,5,-31,l);const I=new Kt(12,.05,18),U=new le({color:10033947,roughness:1}),H=new tt(I,U);H.position.set(0,.02,-26),H.receiveShadow=!0,r.add(H);const C=new oe;C.position.set(0,.1,-34);const z=new tt(new Kt(3,.6,2.5),l);z.castShadow=!0,C.add(z);const T=new tt(new Kt(1.8,.4,1.6),U);T.position.set(0,.5,.2),C.add(T);const P=new tt(new Kt(1.8,2.8,.3),p);P.position.set(0,1.8,-.6),P.castShadow=!0,C.add(P);const W=new tt(new Kt(.3,.8,1.4),p);W.position.set(-.95,.7,.2),C.add(W);const G=new tt(new Kt(.3,.8,1.4),p);G.position.set(.95,.7,.2),C.add(G),r.add(C),t.push({min:new X(-1.8,0,-36),max:new X(1.8,4,-31.5),name:"Throne_Solid"});const Y=new ce(4,4,.8,8),rt=new tt(Y,l);rt.position.set(0,.4,8),r.add(rt);const dt=new tt(new ce(2,2,.5,8),l);dt.position.set(0,1,8),r.add(dt);const k=new tt(new ce(3.8,3.8,.1,8),new le({color:3900150,roughness:.1,opacity:.85,transparent:!0}));k.position.set(0,.7,8),r.add(k),t.push({min:new X(-4.2,0,3.8),max:new X(4.2,1.5,12.2),name:"Fountain_Solid"});const L=new le({color:1467700,roughness:1});function B(_t,Et,qt,Xt){h("Hedge",_t,3.2,Et,qt,1.6,Xt,L)}B(16,3,-15,2),B(16,3,15,2),B(3,14,-22,9),B(3,14,22,9),h("Library_Roof_Deck",22,1,18,-25,8.5,28,l);const et=new Kt(23,1,4),ht=new tt(et,c);ht.position.set(-25,11,38),ht.rotation.x=Math.PI/6,r.add(ht),h("Forge_Roof_Deck",22,1,18,25,8.5,28,l);const xt=new tt(et,c);xt.position.set(25,11,38),xt.rotation.x=Math.PI/6,r.add(xt);const O=new tt(new ce(8,8,12,10),l);O.position.set(25,6,-25),r.add(O),t.push({min:new X(16.5,0,-33.5),max:new X(33.5,12,-16.5),name:"Tower_Base_Solid"});const Q=new tt(new ce(6.5,6.5,12,10),l);Q.position.set(25,18,-25),r.add(Q),t.push({min:new X(18.2,12,-31.8),max:new X(31.8,24,-18.2),name:"Tower_Mid_Solid"});const yt=new tt(new ce(5,5,8,10),l);yt.position.set(25,28,-25),r.add(yt),t.push({min:new X(19.8,24,-30.2),max:new X(30.2,32,-19.8),name:"Tower_Top_Chamber_Solid"});const Rt=new tt(new _n(5.8,6,12),c);Rt.position.set(25,36,-25),r.add(Rt);const Ot=new le({color:4937059,roughness:1}),st=0;for(let _t=0;_t<22;_t++){const Et=st+_t*Math.PI/10,qt=9.2-_t*.08,Xt=.5+_t*1.05,ve=25+qt*Math.cos(Et),Qt=-25+qt*Math.sin(Et),$t=new tt(new Kt(3,.5,3),Ot);$t.position.set(ve,Xt,Qt),$t.rotation.y=-Et,r.add($t),t.push({min:new X(ve-1.8,Xt-.3,Qt-1.8),max:new X(ve+1.8,Xt+.3,Qt+1.8),name:`Tower_Stair_${_t}`})}const At=new tt(new ce(5.5,5.5,.4,10),l);return At.position.set(25,32,-25),r.add(At),t}class S2{constructor(){this.ctx=null,this.soundEnabled=!0}initCtx(){this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext)),this.ctx.state==="suspended"&&this.ctx.resume()}toggleSound(){return this.soundEnabled=!this.soundEnabled,this.soundEnabled}isEnabled(){return this.soundEnabled}playSlash(){if(!this.soundEnabled)return;this.initCtx();const t=this.ctx,i=t.createOscillator(),s=t.createGain();i.type="triangle",i.frequency.setValueAtTime(350,t.currentTime),i.frequency.exponentialRampToValueAtTime(80,t.currentTime+.12),s.gain.setValueAtTime(.2,t.currentTime),s.gain.exponentialRampToValueAtTime(.01,t.currentTime+.12),i.connect(s),s.connect(t.destination),i.start(),i.stop(t.currentTime+.12)}playJump(){if(!this.soundEnabled)return;this.initCtx();const t=this.ctx,i=t.createOscillator(),s=t.createGain();i.type="sine",i.frequency.setValueAtTime(150,t.currentTime),i.frequency.exponentialRampToValueAtTime(440,t.currentTime+.15),s.gain.setValueAtTime(.15,t.currentTime),s.gain.linearRampToValueAtTime(.001,t.currentTime+.14),i.connect(s),s.connect(t.destination),i.start(),i.stop(t.currentTime+.15)}playHurt(){if(!this.soundEnabled)return;this.initCtx();const t=this.ctx,i=t.createOscillator(),s=t.createGain();i.type="sawtooth",i.frequency.setValueAtTime(160,t.currentTime),i.frequency.linearRampToValueAtTime(40,t.currentTime+.25),s.gain.setValueAtTime(.25,t.currentTime),s.gain.exponentialRampToValueAtTime(.01,t.currentTime+.25),i.connect(s),s.connect(t.destination),i.start(),i.stop(t.currentTime+.25)}playDefeatEnemy(){if(!this.soundEnabled)return;this.initCtx();const t=this.ctx,i=t.currentTime,s=(l,c,d)=>{const p=t.createOscillator(),m=t.createGain();p.type="square",p.frequency.value=l,m.gain.setValueAtTime(.08,c),m.gain.exponentialRampToValueAtTime(.001,c+d-.01),p.connect(m),m.connect(t.destination),p.start(c),p.stop(c+d)};s(220,i,.08),s(330,i+.08,.08),s(440,i+.16,.12)}playTrapTrigger(){if(!this.soundEnabled)return;this.initCtx();const t=this.ctx,i=t.createOscillator(),s=t.createGain();i.type="sawtooth",i.frequency.setValueAtTime(800,t.currentTime),i.frequency.exponentialRampToValueAtTime(100,t.currentTime+.2),s.gain.setValueAtTime(.12,t.currentTime),s.gain.exponentialRampToValueAtTime(.01,t.currentTime+.2),i.connect(s),s.connect(t.destination),i.start(),i.stop(t.currentTime+.2)}playVictory(){if(!this.soundEnabled)return;this.initCtx();const t=this.ctx,i=t.currentTime,s=(l,c,d)=>{const p=t.createOscillator(),m=t.createGain();p.type="sawtooth",p.frequency.value=l,m.gain.setValueAtTime(.06,c),m.gain.linearRampToValueAtTime(.05,c+d*.8),m.gain.exponentialRampToValueAtTime(.001,c+d),p.connect(m),m.connect(t.destination),p.start(c),p.stop(c+d)};s(261.63,i,.15),s(329.63,i+.15,.15),s(392,i+.3,.15),s(523.25,i+.45,.35),s(392,i+.8,.15),s(523.25,i+.95,.6)}playGameOver(){if(!this.soundEnabled)return;this.initCtx();const t=this.ctx,i=t.currentTime,s=(l,c,d)=>{const p=t.createOscillator(),m=t.createGain();p.type="sawtooth",p.frequency.setValueAtTime(l,c),p.frequency.linearRampToValueAtTime(l-15,c+d),m.gain.setValueAtTime(.12,c),m.gain.linearRampToValueAtTime(.001,c+d),p.connect(m),m.connect(t.destination),p.start(c),p.stop(c+d)};s(196,i,.4),s(185,i+.4,.4),s(174.61,i+.8,.4),s(130.81,i+1.2,1.2)}}const ci=new S2,av={forward:"w",backward:"s",left:"a",right:"d",jump:" ",attack:"f",heal:"h"};function y2(r,t,i=7){const s=new Date;s.setTime(s.getTime()+i*24*60*60*1e3);const l="expires="+s.toUTCString();document.cookie=`${r}=${encodeURIComponent(t)};${l};path=/;SameSite=Strict`}function M2(r){const t=r+"=",s=decodeURIComponent(document.cookie).split(";");for(let l=0;l<s.length;l++){let c=s[l];for(;c.charAt(0)===" ";)c=c.substring(1);if(c.indexOf(t)===0)return c.substring(t.length,c.length)}return""}const b2="CastleKnight3D_Database",E2=1,tr="run_history";function ep(){return new Promise((r,t)=>{const i=indexedDB.open(b2,E2);i.onerror=()=>{console.error("IndexedDB opening error"),t(i.error)},i.onsuccess=()=>{r(i.result)},i.onupgradeneeded=s=>{const l=i.result;l.objectStoreNames.contains(tr)||l.createObjectStore(tr,{keyPath:"id",autoIncrement:!0})}})}function sv(r){return ep().then(t=>new Promise((i,s)=>{const l=t.transaction([tr],"readwrite"),d=l.objectStore(l.objectStoreNames[0]).add(r);d.onsuccess=()=>i(),d.onerror=()=>s(d.error)})).catch(t=>{console.error("Failed to save log to IndexedDB:",t)})}function T2(){return ep().then(r=>new Promise((t,i)=>{const c=r.transaction([tr],"readonly").objectStore(tr).getAll();c.onsuccess=()=>{const d=c.result;d.sort((p,m)=>new Date(m.timestamp).getTime()-new Date(p.timestamp).getTime()),t(d)},c.onerror=()=>i(c.error)})).catch(r=>(console.error("Failed to fetch logs from IndexedDB:",r),[]))}function A2(){return ep().then(r=>new Promise((t,i)=>{const c=r.transaction([tr],"readwrite").objectStore(tr).clear();c.onsuccess=()=>t(),c.onerror=()=>i(c.error)}))}function Yv(){try{const r=localStorage.getItem("castle_knight_keys");if(r){const t=JSON.parse(r);return{...av,...t}}}catch(r){console.error("Error reading keybindings from LocalStorage",r)}return av}function rv(r){try{localStorage.setItem("castle_knight_keys",JSON.stringify(r))}catch(t){console.error("Error saving keybindings to LocalStorage",t)}}function Zv(){try{const r=localStorage.getItem("castle_knight_highscore");return r?parseInt(r,10):0}catch{return 0}}function ov(r){try{const t=Zv();r>t&&(localStorage.setItem("castle_knight_highscore",r.toString()),y2("highest_slain_beasts",r.toString(),30))}catch(t){console.error("Error saving highscore",t)}}function w2(r,t){try{sessionStorage.setItem(`castle_session_${r}`,t)}catch(i){console.error("Error writing to SessionStorage",i)}}function R2(r){try{return sessionStorage.getItem(`castle_session_${r}`)}catch{return null}}function C2({isOpen:r,onClose:t,onKeyBindingsChange:i,renderDistance:s,onRenderDistanceChange:l}){const[c,d]=ae.useState(Yv()),[p,m]=ae.useState(null),[h,S]=ae.useState([]),[x,g]=ae.useState(0),[b,A]=ae.useState(""),[D,y]=ae.useState(0);if(ae.useEffect(()=>{if(r){g(Zv()),T2().then(T=>{S(T)});const C=parseInt(R2("settings_opens")||"0",10)+1;w2("settings_opens",C.toString()),y(C);const z=M2("highest_slain_beasts")||"0";A(z)}},[r]),!r)return null;const v=C=>{m(C)},R=C=>{if(!p)return;C.preventDefault(),C.stopPropagation();const z=C.key===" "?"Space":C.key,T=z==="Space"?" ":z.toLowerCase(),P={...c,[p]:T};d(P),rv(P),i(P),m(null)},I=()=>{const C={forward:"w",backward:"s",left:"a",right:"d",jump:" ",attack:"f",heal:"h"};d(C),rv(C),i(C),m(null)},U=async()=>{confirm("Are you sure you want to wipe player run history logs from IndexedDB?")&&(await A2(),S([]))},H=C=>{const z=Math.floor(C/60),T=C%60;return`${z}m ${T}s`};return q.jsx("div",{id:"settings_modal",className:"absolute inset-0 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fade-in",onKeyDown:R,tabIndex:0,children:q.jsxs("div",{className:"max-w-3xl w-full bg-slate-900 border border-slate-800/80 p-6 rounded-2xl shadow-2xl flex flex-col max-h-[90%] text-slate-100 overflow-hidden",children:[q.jsxs("header",{className:"flex items-center justify-between pb-4 border-b border-slate-800 shrink-0",children:[q.jsxs("div",{className:"flex items-center gap-2",children:[q.jsx(qv,{className:"w-5 h-5 text-pink-500 animate-spin-slow"}),q.jsx("h2",{className:"text-xl font-bold tracking-tight",children:"Citadel Game Settings"})]}),q.jsx("button",{id:"btn_close_settings",onClick:t,className:"p-1 rounded bg-slate-800 hover:bg-slate-700 transition cursor-pointer",children:q.jsx(s2,{className:"w-4 h-4"})})]}),q.jsxs("div",{className:"flex-1 overflow-y-auto space-y-6 mt-4 pr-1",children:[q.jsxs("section",{className:"bg-slate-950/50 p-4 rounded-xl border border-slate-800/60",children:[q.jsxs("div",{className:"flex items-center justify-between mb-3",children:[q.jsxs("h3",{className:"text-xs font-bold tracking-widest text-slate-400 uppercase flex items-center gap-1.5 font-mono",children:[q.jsx(IA,{className:"w-3.5 h-3.5 text-indigo-400"})," Key Bindings Configuration"]}),q.jsxs("button",{id:"btn_reset_keys",onClick:I,className:"text-[11px] font-bold text-indigo-400 flex items-center gap-1 hover:text-indigo-300 transition",children:[q.jsx(GA,{className:"w-3 h-3"})," Reset Defaults"]})]}),p&&q.jsxs("div",{className:"mb-3 p-2 text-center text-xs bg-indigo-950/40 border border-indigo-700/50 text-indigo-300 rounded font-mono animate-pulse",children:["Press any key to bind to ",q.jsx("span",{className:"font-bold uppercase text-white",children:p}),"..."]}),q.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2",children:Object.keys(c).map(C=>{const z=p===C,T=c[C],P=T===" "?"Spacebar":T.toUpperCase();return q.jsxs("div",{className:"flex items-center justify-between p-2 bg-slate-900 border border-slate-800 rounded-lg text-xs",children:[q.jsx("span",{className:"text-slate-400 capitalize font-medium",children:C}),q.jsx("button",{id:`btn_rebind_${C}`,onClick:()=>v(C),className:`px-2 py-1 rounded font-mono text-[11px] font-bold min-w-[70px] uppercase transition ${z?"bg-rose-500 text-white ring-2 ring-rose-300":"bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"}`,children:P||"None"})]},C)})})]}),q.jsxs("section",{className:"bg-slate-950/50 p-4 rounded-xl border border-slate-800/60",children:[q.jsxs("h3",{className:"text-xs font-bold tracking-widest text-slate-400 uppercase flex items-center gap-1.5 font-mono mb-2",children:[q.jsx(WA,{className:"w-3.5 h-3.5 text-emerald-400"})," Resource Optimizer (Performance)"]}),q.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed mb-3",children:"Adjust render bounds dynamically. Hides/Culls distant static geometry and AI elements to minimize draw calls and maximize local framerates."}),q.jsx("div",{className:"flex flex-wrap gap-2",children:[{label:"Close Check (20m culling)",value:20},{label:"Optimized (35m culling)",value:35},{label:"Far View (50m culling)",value:50},{label:"Infinite (No culling)",value:999}].map(C=>q.jsx("button",{id:`btn_render_dist_${C.value}`,onClick:()=>l(C.value),className:`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition cursor-pointer ${s===C.value?"bg-emerald-600 border border-emerald-500 text-white":"bg-slate-900 border border-slate-800/80 text-slate-400 hover:bg-slate-800"}`,children:C.label},C.value))})]}),q.jsxs("section",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[q.jsxs("div",{className:"bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/50 text-xs",children:[q.jsx("span",{className:"text-slate-500 font-mono text-[9px] block uppercase tracking-wider mb-1",children:"LOCAL STORAGE INDEX"}),q.jsxs("div",{className:"text-slate-300 font-bold",children:["High Score: ",q.jsxs("span",{className:"text-pink-400",children:[x," Slain"]})]}),q.jsx("p",{className:"text-[10px] text-slate-500 mt-1",children:"Saves key configurations & peak campaign records securely."})]}),q.jsxs("div",{className:"bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/50 text-xs",children:[q.jsx("span",{className:"text-slate-500 font-mono text-[9px] block uppercase tracking-wider mb-1",children:"SESSION STORAGE"}),q.jsxs("div",{className:"text-slate-300 font-bold",children:["Opened Menu: ",q.jsxs("span",{className:"text-indigo-400",children:[D," times"]})]}),q.jsx("p",{className:"text-[10px] text-slate-500 mt-1",children:"Tracks contextual session progress flags and active level cache."})]}),q.jsxs("div",{className:"bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/50 text-xs",children:[q.jsx("span",{className:"text-slate-500 font-mono text-[9px] block uppercase tracking-wider mb-1",children:"COMPLIANCED WEB COOKIES"}),q.jsxs("div",{className:"text-slate-300 font-bold",children:["Cookie Record: ",q.jsxs("span",{className:"text-emerald-400",children:[b||"0"," Hounds"]})]}),q.jsx("p",{className:"text-[10px] text-slate-500 mt-1",children:"Persists system configurations across domain changes."})]})]}),q.jsxs("section",{className:"bg-slate-950/50 p-4 rounded-xl border border-slate-800/60",children:[q.jsxs("div",{className:"flex items-center justify-between mb-3.5",children:[q.jsxs("h3",{className:"text-xs font-bold tracking-widest text-slate-400 uppercase flex items-center gap-1.5 font-mono",children:[q.jsx(UA,{className:"w-3.5 h-3.5 text-teal-400"})," Historic Run Logs (IndexedDB)"]}),h.length>0&&q.jsxs("button",{id:"btn_clear_history",onClick:U,className:"text-[10px] text-red-400 hover:text-red-300 font-bold flex items-center gap-1 transition",children:[q.jsx(QA,{className:"w-3 h-3"})," Clear History"]})]}),h.length===0?q.jsx("div",{className:"text-center py-6 border border-dashed border-slate-800 rounded-lg text-slate-500 text-xs",children:"No game summaries stored yet. Reach victory or fall inside the citadel to populate log records in IndexedDB!"}):q.jsx("div",{className:"max-h-48 overflow-y-auto border border-slate-800 rounded-lg",children:q.jsxs("table",{className:"w-full text-left font-mono text-[11px] text-slate-300 border-collapse",children:[q.jsx("thead",{className:"bg-slate-900 text-slate-400 border-b border-slate-800 sticky top-0",children:q.jsxs("tr",{children:[q.jsx("th",{className:"p-2.5 font-bold",children:"DATE"}),q.jsx("th",{className:"p-2.5 font-bold",children:"OUTCOME"}),q.jsx("th",{className:"p-2.5 font-bold",children:"SLAIN"}),q.jsx("th",{className:"p-2.5 font-bold",children:"DURATION"})]})}),q.jsx("tbody",{children:h.map((C,z)=>q.jsxs("tr",{className:"border-b border-slate-800/50 hover:bg-slate-800/35",children:[q.jsx("td",{className:"p-2.5 text-[10px] whitespace-nowrap",children:new Date(C.timestamp).toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}),q.jsx("td",{className:"p-2.5",children:q.jsx("span",{className:`px-1.5 py-0.5 rounded font-bold text-[9px] ${C.outcome==="VICTORY"?"bg-emerald-950 text-emerald-400 ring-1 ring-emerald-800":"bg-red-950 text-red-400 ring-1 ring-red-800"}`,children:C.outcome})}),q.jsx("td",{className:"p-2.5 text-center",children:C.enemiesDefeated}),q.jsx("td",{className:"p-2.5",children:H(C.durationSeconds)})]},z))})]})})]})]}),q.jsx("footer",{className:"pt-4 border-t border-slate-800 flex justify-end shrink-0 gap-2",children:q.jsxs("button",{id:"btn_settings_ok",onClick:t,className:"px-5 py-2 rounded-xl bg-pink-600 hover:bg-pink-500 active:scale-95 transition text-white font-bold text-xs cursor-pointer shadow-lg tracking-wide flex items-center gap-1.5",children:[q.jsx(VA,{className:"w-3.5 h-3.5"})," Save and Close"]})})]})})}function D2(){const r=ae.useRef(null),[t,i]=ae.useState("START"),[s,l]=ae.useState({health:100,maxHealth:100,potions:0,enemiesDefeated:0,activeWeapon:"Steel Sword"}),[c,d]=ae.useState({houndCount:0,houndTotal:2,golemDefeated:!1,princessReached:!1}),[p,m]=ae.useState(!0),[h,S]=ae.useState("FOLLOW"),[x,g]=ae.useState(["Welcome to Castle Knight! Use WASD to move, Space to Jump."]),[b,A]=ae.useState(Yv()),[D,y]=ae.useState(35),[v,R]=ae.useState(!1),[I,U]=ae.useState(1.8),[H,C]=ae.useState("CIRCLE"),z=ae.useRef(b),T=ae.useRef(D),P=ae.useRef(s),W=ae.useRef(!1),G=ae.useRef(Date.now()),Y=ae.useRef(0),rt=ae.useRef([]),dt=ae.useRef(null);ae.useEffect(()=>{z.current=b},[b]),ae.useEffect(()=>{T.current=D},[D]),ae.useEffect(()=>{P.current=s},[s]);const k=ae.useRef(null),L=ae.useRef(null),B=ae.useRef(null),et=ae.useRef(null),ht=ae.useRef(null),xt=ae.useRef(null),O=ae.useRef([]),Q=ae.useRef([]),yt=ae.useRef([]),Rt=ae.useRef([]),Ot=ae.useRef(null),st=ae.useRef({}),At=ae.useRef(new X(0,0,0)),_t=ae.useRef(!1),Et=ae.useRef(!1),qt=ae.useRef(0),Xt=ae.useRef(0),ve=ae.useRef(0),Qt=ae.useRef(0),$t=ae.useRef({x:0,y:0}),ye=ae.useRef(!1),he=ae.useRef(0),Ge=ae.useRef(6),[Ne,tn]=ae.useState(!1),Z=ae.useRef({x:0,y:0}),Ue=ae.useRef({x:0,y:0}),fe=ae.useRef({x:0,y:0}),Ee=pt=>{g(ot=>[pt,...ot.slice(0,6)])};ae.useEffect(()=>{var Xa,Ii,zi,Zi;if(t!=="PLAYING")return;const pt=new iM;L.current=pt,pt.background=new Pe(988970),pt.fog=new Kh(988970,.015);const ot=new bA({antialias:!0});ot.setSize(((Xa=r.current)==null?void 0:Xa.clientWidth)||800,((Ii=r.current)==null?void 0:Ii.clientHeight)||600),ot.shadowMap.enabled=!0,ot.shadowMap.type=lv,r.current&&(r.current.innerHTML="",r.current.appendChild(ot.domElement)),et.current=ot;const mt=new Mi(60,(((zi=r.current)==null?void 0:zi.clientWidth)||800)/(((Zi=r.current)==null?void 0:Zi.clientHeight)||600),.1,1e3);B.current=mt;const Lt=new A_(16707722,1.2);Lt.position.set(30,45,10),Lt.castShadow=!0,Lt.shadow.mapSize.width=1024,Lt.shadow.mapSize.height=1024,Lt.shadow.camera.near=.5,Lt.shadow.camera.far=120;const Ht=50;Lt.shadow.camera.left=-Ht,Lt.shadow.camera.right=Ht,Lt.shadow.camera.top=Ht,Lt.shadow.camera.bottom=-Ht,pt.add(Lt);const zt=new w_(1973067,.6);pt.add(zt);function Pt(Dt,ut,te,M){const F=new T_(M,3,14,1.5);F.position.set(Dt,ut,te),F.castShadow=!0,pt.add(F);const $=new tt(new Be(.18,8,8),new al({color:M,toneMapped:!1}));$.position.set(Dt,ut,te),pt.add($);const J=new tt(new Kt(.1,.4,.3),new le({color:1976631}));J.position.set(Dt,ut,te-.2),pt.add(J)}Pt(-24,4,-30,1096065),Pt(-13,5,-34,16436245),Pt(13,5,-34,16436245),Pt(-34,5,26,3900150),Pt(-16,5,34,3900150);const me=c2(),ge=new ll(105,105,1,1),De=new le({map:me,roughness:1}),j=new tt(ge,De);j.rotation.x=-Math.PI/2,j.receiveShadow=!0,pt.add(j);const Bt=x2(pt),St=[];pt.children.forEach(Dt=>{Dt!==j&&!(Dt instanceof A_)&&!(Dt instanceof w_)&&!(Dt instanceof T_)&&St.push(Dt)}),rt.current=St;const vt=u2();vt.position.set(0,0,32),pt.add(vt),ht.current=vt;const kt=f2();kt.position.set(25,32.2,-25),pt.add(kt),xt.current=kt,O.current=[],ev.forEach(Dt=>{let ut;Dt.type==="GARGOYLE"?ut=d2():Dt.type==="SHADOW_HOUND"?ut=h2():ut=p2(),ut.position.copy(Dt.position),pt.add(ut),O.current.push({id:Dt.id,mesh:ut,state:{id:Dt.id,type:Dt.type,position:Dt.position.clone(),initialPosition:Dt.position.clone(),health:Dt.type==="STONE_GOLEM"?180:30,maxHealth:Dt.type==="STONE_GOLEM"?180:30,isDead:!1,isAggro:!1,speed:Dt.type==="GARGOYLE"?3.5:Dt.type==="SHADOW_HOUND"?4.2:2,patrolWaypoints:Dt.patrolWaypoints,currentWaypointIndex:0,size:Dt.type==="STONE_GOLEM"?2.5:1.2,heading:0}})}),Q.current=[],yt.current=[],nv.filter(Dt=>Dt.type==="PENDULUM").forEach(Dt=>{const ut=m2();ut.position.copy(Dt.position),pt.add(ut),Q.current.push({id:Dt.id,mesh:ut,state:{id:Dt.id,type:"PENDULUM",position:Dt.position.clone(),swingAngle:0,swingSpeed:2.2+Math.random()*.5,isMoving:!0}})}),nv.filter(Dt=>Dt.type==="PRESSURE_PLATE").forEach(Dt=>{const ut=g2();ut.position.copy(Dt.position),pt.add(ut);const te=_2(),M=Dt.position.z;te.position.set(-37.8,1.2,M),te.rotation.y=Math.PI/2,pt.add(te),Q.current.push({id:Dt.id,mesh:ut,state:{id:Dt.id,type:"PRESSURE_PLATE",position:Dt.position.clone(),isTriggered:!1,pressureDepressed:!1}})}),Rt.current=[],iv.forEach(Dt=>{const ut=new oe,te=new ce(.12,.22,.5,8),M=new SM({color:15680580,roughness:.1,transmission:.8}),F=new tt(te,M);ut.add(F);const $=new le({color:7877903,roughness:.9}),J=new tt(new ce(.08,.08,.1,8),$);J.position.y=.28,ut.add(J),ut.position.copy(Dt.position),pt.add(ut),Rt.current.push({id:Dt.id,mesh:ut,spawn:Dt})});const Ct=120,ee=new fi,de=new Float32Array(Ct*3),en=[];for(let Dt=0;Dt<Ct;Dt++){const ut=Math.random()*Math.PI*2,te=Math.random()*2.2;de[Dt*3]=te*Math.cos(ut),de[Dt*3+1]=1+Math.random()*3.5,de[Dt*3+2]=8+te*Math.sin(ut),en.push(new X((Math.random()-.5)*1.5,3+Math.random()*4,(Math.random()-.5)*1.5))}ee.setAttribute("position",new ji(de,3));const Xe=new Uv({color:6333946,size:.25,transparent:!0,opacity:.8}),$n=new hM(ee,Xe);pt.add($n),Ot.current=$n;const qn=new wM,qi=Dt=>{const ut=Dt.key.toLowerCase();st.current[ut]=!0,ut===" "&&(st.current[" "]=!0);const te=z.current,M=(te.jump||" ").toLowerCase(),F=(te.attack||"f").toLowerCase(),$=(te.heal||"h").toLowerCase();(Dt.key===" "&&M===" "||ut===M)&&!_t.current&&(_t.current=!0,At.current.y=11,ci.playJump()),ut===F&&!Et.current&&Oi(),ut===$&&bt()},Fa=Dt=>{const ut=Dt.key.toLowerCase();st.current[ut]=!1,Dt.key===" "&&(st.current[" "]=!1,st.current.spacebar=!1,st.current.space=!1)};window.addEventListener("keydown",qi),window.addEventListener("keyup",Fa);const Ga=Dt=>{ye.current=!0,$t.current={x:Dt.clientX,y:Dt.clientY}},Ha=Dt=>{if(!ye.current)return;const ut=Dt.clientX-$t.current.x,te=Dt.clientY-$t.current.y;he.current-=ut*.007,Ge.current=Math.max(2,Math.min(18,Ge.current+te*.1)),$t.current={x:Dt.clientX,y:Dt.clientY}},Nn=()=>{ye.current=!1};ot.domElement.addEventListener("mousedown",Ga),window.addEventListener("mousemove",Ha),window.addEventListener("mouseup",Nn);const hn=()=>{if(W.current){k.current=requestAnimationFrame(hn);return}const Dt=Math.min(.05,qn.getDelta()),ut=qn.getElapsedTime();if(Y.current%12===0&&vt){const te=vt.position,M=T.current;rt.current.forEach(F=>{if(M>=999)F.visible=!0;else{const $=F.position.distanceTo(te);F.visible=$<M}}),O.current.forEach(F=>{if(!F.state.isDead)if(M>=999)F.mesh.visible=!0;else{const $=F.mesh.position.distanceTo(te);F.mesh.visible=$<M}})}if(Y.current++,{...s},Et.current&&(qt.current-=Dt,qt.current<=0&&(Et.current=!1)),Qt.current>0&&(Qt.current-=Dt),Xt.current>0&&(Xt.current-=Dt),ve.current>0&&(ve.current-=Dt),vt){At.current.y-=26*Dt;let te=0,M=0;const F=z.current,$=(F.forward||"w").toLowerCase(),J=(F.backward||"s").toLowerCase(),nt=(F.left||"a").toLowerCase(),Nt=(F.right||"d").toLowerCase();if((st.current[$]||st.current.arrowup)&&(te+=Math.sin(vt.rotation.y),M+=Math.cos(vt.rotation.y)),(st.current[J]||st.current.arrowdown)&&(te-=Math.sin(vt.rotation.y),M-=Math.cos(vt.rotation.y)),(st.current[nt]||st.current.arrowleft)&&(vt.rotation.y+=3.2*Dt),(st.current[Nt]||st.current.arrowright)&&(vt.rotation.y-=3.2*Dt),Ne){const Re=Math.atan2(fe.current.x,fe.current.y),Ln=he.current;vt.rotation.y=Ln+Re;const bn=Math.sqrt(fe.current.x**2+fe.current.y**2);te=Math.sin(vt.rotation.y)*bn,M=Math.cos(vt.rotation.y)*bn}const Ft=11,Gt=vt.position.x+te*Ft*Dt,Yt=vt.position.z+M*Ft*Dt,Wt=vt.position.y+At.current.y*Dt;let se=!1,xe=!1,Jt=Wt,ne=!1;const pe=.8;Bt.forEach(Re=>{Gt+pe>Re.min.x&&Gt-pe<Re.max.x&&vt.position.y+.1<Re.max.y&&vt.position.y+1.8>Re.min.y&&vt.position.z+pe>Re.min.z&&vt.position.z-pe<Re.max.z&&(se=!0),vt.position.x+pe>Re.min.x&&vt.position.x-pe<Re.max.x&&vt.position.y+.1<Re.max.y&&vt.position.y+1.8>Re.min.y&&Yt+pe>Re.min.z&&Yt-pe<Re.max.z&&(xe=!0),vt.position.x+pe>Re.min.x&&vt.position.x-pe<Re.max.x&&Wt<Re.max.y&&vt.position.y+1.8>Re.min.y&&vt.position.z+pe>Re.min.z&&vt.position.z-pe<Re.max.z&&(At.current.y<=0?(Jt=Math.max(Jt,Re.max.y),ne=!0):At.current.y=0)});let We=se?vt.position.x:Gt,He=xe?vt.position.z:Yt;We=Math.max(-39,Math.min(39,We)),He=Math.max(-39,Math.min(39,He)),Jt<=0&&(Jt=0,ne=!0),ne&&(_t.current=!1,At.current.y=0),vt.position.set(We,Jt,He);const Qe=Math.abs(te)>.01||Math.abs(M)>.01,jt=vt.getObjectByName("LeftLeg"),Mn=vt.getObjectByName("RightLeg"),Me=vt.getObjectByName("LeftArmGroup"),un=vt.getObjectByName("RightArmGroup");if(Qe&&!_t.current){const Ln=Math.sin(ut*15)*.45,bn=-Math.sin(ut*15)*.45;jt&&(jt.rotation.x=Ln),Mn&&(Mn.rotation.x=bn),Me&&(Me.rotation.x=bn*.5),un&&!Et.current&&(un.rotation.x=Ln*.5)}else jt&&(jt.rotation.x=0),Mn&&(Mn.rotation.x=0),Me&&(Me.rotation.x=0),un&&!Et.current&&un.rotation.set(0,0,0),Me&&(Me.rotation.z=Math.sin(ut*3)*.05);if(Et.current&&un){const Re=(.28-qt.current)/.28;un.rotation.x=-Math.PI/3+Re*Math.PI*1.2,un.rotation.y=-Math.sin(Re*Math.PI)*.5}if(Qt.current>0?vt.visible=Math.floor(ut*15)%2===0:vt.visible=!0,mt&&h==="FOLLOW"){const Ln=vt.rotation.y+he.current+Math.PI,bn=vt.position.x+Math.sin(Ln)*7.5,Je=vt.position.z+Math.cos(Ln)*7.5,dn=vt.position.y+Ge.current;mt.position.x+=(bn-mt.position.x)*.15,mt.position.y+=(dn-mt.position.y)*.15,mt.position.z+=(Je-mt.position.z)*.15;const di=vt.position.clone().add(new X(0,1.4,0));mt.lookAt(di)}}Rt.current.forEach(te=>{te.spawn.taken||(te.mesh.rotation.y+=1.8*Dt,te.mesh.position.y=te.spawn.position.y+Math.sin(ut*4)*.1,vt&&vt.position.distanceTo(te.mesh.position)<1.4&&Xt.current<=0&&(te.spawn.taken=!0,te.mesh.visible=!1,Xt.current=.3,ci.playDefeatEnemy(),l(F=>{const $={...F,potions:F.potions+1};return Ee("Found magical health potion! Trapped in masonry details (+1 Potion)."),$})))}),O.current.forEach(te=>{if(te.state.isDead)return;let M=te.state;const F=te.mesh;if(M.type==="GARGOYLE"){const $=F.getObjectByName("WingL"),J=F.getObjectByName("WingR");$&&($.rotation.y=Math.sin(ut*14)*.5),J&&(J.rotation.y=-Math.sin(ut*14)*.5)}else if(M.type==="SHADOW_HOUND"){const $=F.getObjectByName("FLLeg"),J=F.getObjectByName("FRLeg"),nt=F.getObjectByName("BLLeg"),Nt=F.getObjectByName("BRLeg"),Ft=Math.sin(ut*18);$&&($.rotation.x=Ft*.6),J&&(J.rotation.x=-Ft*.6),nt&&(nt.rotation.x=-Ft*.6),Nt&&(Nt.rotation.x=Ft*.6)}if(vt){const $=F.position.distanceTo(vt.position),J=M.type==="STONE_GOLEM"?18:12;if($<J&&!M.isDead&&(M.isAggro=!0),M.isAggro){const nt=new X().subVectors(vt.position,F.position);M.type==="GARGOYLE"?nt.y=vt.position.y+.5-F.position.y:nt.y=0,nt.normalize(),F.position.addScaledVector(nt,M.speed*Dt);const Nt=Math.atan2(nt.x,nt.z);F.rotation.y=Nt;const Ft=M.type==="STONE_GOLEM"?2.5:1.4;if($<Ft&&Qt.current<=0){const Gt=M.type==="STONE_GOLEM"?35:M.type==="GARGOYLE"?15:10;Qt.current=1,ve.current=.25,ci.playHurt(),l(Yt=>{const Wt=Math.max(0,Yt.health-Gt);return Wt===0?Va():Ee(`Ouch! Stricken by ${M.type==="STONE_GOLEM"?"Giant Golem Club":M.type} (-${Gt} HP)`),{...Yt,health:Wt}})}}else if(M.patrolWaypoints&&M.currentWaypointIndex!==void 0){const nt=M.patrolWaypoints[M.currentWaypointIndex];if(F.position.distanceTo(nt)<.6)M.currentWaypointIndex=(M.currentWaypointIndex+1)%M.patrolWaypoints.length;else{const Ft=new X().subVectors(nt,F.position);Ft.y=0,Ft.normalize(),F.position.addScaledVector(Ft,M.speed*.55*Dt),F.rotation.y=Math.atan2(Ft.x,Ft.z)}}if(Et.current&&$<(M.type==="STONE_GOLEM"?3:2.2)&&!M.isDead){M.health-=25;const nt=new X().subVectors(F.position,vt.position).normalize();F.position.addScaledVector(nt,.8),Ee(`Hit ${M.type}! HP: ${M.health}/${M.maxHealth}`),M.health<=0&&(M.isDead=!0,F.visible=!1,ci.playDefeatEnemy(),l(Nt=>({...Nt,enemiesDefeated:Nt.enemiesDefeated+1})),d(Nt=>{const Ft=M.type==="STONE_GOLEM",Gt=M.type==="SHADOW_HOUND"?Nt.houndCount+1:Nt.houndCount;return Ee(Ft?"The massive Golem crumbles into cobbles! The Summit High Tower is now safe!":`Defeated dangerous ${M.type}!`),{...Nt,houndCount:Gt,golemDefeated:Nt.golemDefeated||Ft}})),Et.current=!1}}}),Q.current.forEach(te=>{const M=te.state,F=te.mesh;if(M.type==="PENDULUM"&&M.swingSpeed&&M.swingAngle!==void 0){M.swingAngle+=M.swingSpeed*Dt;const $=F.getObjectByName("SwingPart");if($&&($.rotation.z=Math.sin(M.swingAngle)*.9),vt){const J=new X,nt=new X(0,-4.5,0).applyAxisAngle(new X(0,0,1),Math.sin(M.swingAngle)*.9);J.copy(F.position).add(nt),vt.position.distanceTo(J)<1.6&&Qt.current<=0&&(Qt.current=1,ci.playHurt(),l(Ft=>{const Gt=Math.max(0,Ft.health-25);return Gt===0?Va():Ee("Slashed by Guillotine Pendulum! Time your run carefully (-25 HP)"),{...Ft,health:Gt}}))}}if(M.type==="PRESSURE_PLATE"&&vt){const $=vt.position.clone().setY(0).distanceTo(F.position.clone().setY(0)),J=F.getObjectByName("CenterPlate");$<1?J&&!M.pressureDepressed&&(J.position.y=-.01,M.pressureDepressed=!0,ci.playTrapTrigger(),Yi(F.position.z),Ee("Stepped on a Pressure Gate! Arrow fired from dark battlements!")):J&&M.pressureDepressed&&(J.position.y=.02,M.pressureDepressed=!1)}});for(let te=yt.current.length-1;te>=0;te--){const M=yt.current[te];if(M.mesh.position.addScaledVector(M.velocity,Dt),M.mesh.position.x>38||M.mesh.position.x<-38){pt.remove(M.mesh),yt.current.splice(te,1);continue}vt&&M.mesh.position.distanceTo(vt.position.clone().add(new X(0,.8,0)))<1.2&&(pt.remove(M.mesh),yt.current.splice(te,1),Qt.current<=0&&(Qt.current=.8,ci.playHurt(),l($=>{const J=Math.max(0,$.health-M.damage);return J===0?Va():Ee(`Pierced by wall arrow trap! Dodge or jump (-${M.damage} HP)`),{...$,health:J}})))}if(Ot.current){const te=Ot.current.geometry,M=te.attributes.position.array;for(let F=0;F<Ct;F++)if(en[F].y-=9.8*Dt,M[F*3]+=en[F].x*Dt,M[F*3+1]+=en[F].y*Dt,M[F*3+2]+=en[F].z*Dt,M[F*3+1]<.6){const $=Math.random()*Math.PI*2,J=Math.random()*2.2;M[F*3]=J*Math.cos($),M[F*3+1]=.8,M[F*3+2]=8+J*Math.sin($),en[F].set((Math.random()-.5)*1.5,4+Math.random()*4,(Math.random()-.5)*1.5)}te.attributes.position.needsUpdate=!0}if(vt&&xt.current&&vt.position.distanceTo(xt.current.position)<1.6&&ka(),xt.current){const te=xt.current.getObjectByName("RightArmGroup");te&&(te.rotation.z=Math.sin(ut*6)*.4),xt.current.rotation.y=ut*.2}ot.render(pt,mt),Un(),k.current=requestAnimationFrame(hn)},Un=()=>{const Dt=dt.current;if(!Dt)return;const ut=Dt.getContext("2d");if(!ut)return;const te=Dt.width,M=Dt.height,F=te/2,$=M/2;ut.fillStyle="#0f172a",ut.fillRect(0,0,te,M),ut.strokeStyle="rgba(100, 116, 139, 0.15)",ut.lineWidth=1,ut.beginPath();for(let ne=10;ne<te;ne+=15)ut.moveTo(ne,0),ut.lineTo(ne,M),ut.moveTo(0,ne),ut.lineTo(te,ne);ut.stroke();const J=te/80*(I||1.8);if(!vt)return;const nt=vt.position,Nt=(ne,pe)=>{const We=ne-nt.x,He=pe-nt.z;return{x:F+We*J,y:$+He*J}};ut.strokeStyle="rgba(236, 72, 153, 0.35)",ut.lineWidth=1.5;const Ft=Nt(-40,-40),Gt=Nt(40,40);ut.strokeRect(Ft.x,Ft.y,Gt.x-Ft.x,Gt.y-Ft.y),ut.strokeStyle="#38bdf8",ut.lineWidth=1;const Yt=Nt(0,8);ut.beginPath(),ut.arc(Yt.x,Yt.y,4*J,0,Math.PI*2),ut.stroke(),ut.strokeStyle="rgba(148, 163, 184, 0.2)",ut.lineWidth=2;const Wt=Nt(-15,18),se=Nt(-15,40);ut.beginPath(),ut.moveTo(Wt.x,Wt.y),ut.lineTo(se.x,se.y),ut.stroke();const xe=Nt(-15,-18),Jt=Nt(-15,-40);if(ut.beginPath(),ut.moveTo(xe.x,xe.y),ut.lineTo(Jt.x,Jt.y),ut.stroke(),Rt.current.forEach(ne=>{if(ne.spawn.taken)return;const pe=Nt(ne.spawn.position.x,ne.spawn.position.z);ut.fillStyle="#60a5fa",ut.beginPath(),ut.arc(pe.x,pe.y,3.5,0,Math.PI*2),ut.fill(),ut.strokeStyle="rgba(96, 165, 250, 0.4)",ut.lineWidth=1,ut.beginPath(),ut.arc(pe.x,pe.y,5+Math.sin(Date.now()/150)*2,0,Math.PI*2),ut.stroke()}),Q.current.forEach(ne=>{const pe=Nt(ne.state.position.x,ne.state.position.z);ut.fillStyle="#f97316",ut.beginPath(),ut.arc(pe.x,pe.y,3,0,Math.PI*2),ut.fill()}),O.current.forEach(ne=>{if(ne.state.isDead)return;const pe=Nt(ne.mesh.position.x,ne.mesh.position.z);ut.fillStyle=ne.state.type==="STONE_GOLEM"?"#c084fc":"#ef4444",ut.beginPath(),ut.arc(pe.x,pe.y,ne.state.type==="STONE_GOLEM"?5.5:4,0,Math.PI*2),ut.fill(),ne.state.isAggro&&(ut.strokeStyle="#f43f5e",ut.lineWidth=1,ut.beginPath(),ut.arc(pe.x,pe.y,ne.state.type==="STONE_GOLEM"?8:6,0,Math.PI*2),ut.stroke())}),xt.current){const ne=Nt(xt.current.position.x,xt.current.position.z);ut.fillStyle="#ec4899",ut.beginPath(),ut.arc(ne.x,ne.y,5,0,Math.PI*2),ut.fill(),ut.fillStyle="#ffffff",ut.font="7px sans-serif",ut.textAlign="center",ut.textBaseline="middle",ut.fillText("♥",ne.x,ne.y)}ut.save(),ut.translate(F,$),ut.rotate(-vt.rotation.y+Math.PI),ut.fillStyle="#10b981",ut.strokeStyle="#ffffff",ut.lineWidth=1.2,ut.beginPath(),ut.moveTo(0,-6.5),ut.lineTo(-4.5,4.5),ut.lineTo(0,2),ut.lineTo(4.5,4.5),ut.closePath(),ut.fill(),ut.stroke(),ut.restore()};function Oi(){Et.current||(Et.current=!0,qt.current=.28,ci.playSlash())}function Yi(Dt){if(!L.current)return;const ut=v2();ut.position.set(-37,1.2,Dt),ut.rotation.y=Math.PI/2,L.current.add(ut),yt.current.push({mesh:ut,velocity:new X(26,0,0),damage:20})}function Va(){cancelAnimationFrame(k.current),ci.playGameOver();const Dt=Math.round((Date.now()-G.current)/1e3);sv({timestamp:new Date().toISOString(),outcome:"GAMEOVER",enemiesDefeated:P.current.enemiesDefeated,potionsRemaining:P.current.potions,durationSeconds:Dt}),ov(P.current.enemiesDefeated),i("GAMEOVER")}function ka(){cancelAnimationFrame(k.current),ci.playVictory();const Dt=Math.round((Date.now()-G.current)/1e3);sv({timestamp:new Date().toISOString(),outcome:"VICTORY",enemiesDefeated:P.current.enemiesDefeated+1,potionsRemaining:P.current.potions,durationSeconds:Dt}),ov(P.current.enemiesDefeated+1),i("VICTORY")}k.current=requestAnimationFrame(hn);const Ts=()=>{if(!r.current||!et.current||!B.current)return;const Dt=r.current.clientWidth,ut=r.current.clientHeight;B.current.aspect=Dt/ut,B.current.updateProjectionMatrix(),et.current.setSize(Dt,ut)},Pi=new ResizeObserver(Ts);return r.current&&Pi.observe(r.current),()=>{k.current&&cancelAnimationFrame(k.current),window.removeEventListener("keydown",qi),window.removeEventListener("keyup",Fa),ot.domElement.removeEventListener("mousedown",Ga),window.removeEventListener("mousemove",Ha),window.removeEventListener("mouseup",Nn),Pi.disconnect()}},[t,h]);const It=pt=>{pt.preventDefault();const ot=pt.touches[0];Z.current={x:ot.clientX,y:ot.clientY},tn(!0)},Ye=pt=>{if(!Ne)return;const ot=pt.touches[0],mt=ot.clientX-Z.current.x,Lt=ot.clientY-Z.current.y,Ht=44,zt=Math.sqrt(mt*mt+Lt*Lt);if(zt===0)Ue.current={x:0,y:0},fe.current={x:0,y:0};else{const Pt=Math.min(Ht,zt)/zt,me=mt*Pt,ge=Lt*Pt;Ue.current={x:me,y:ge},fe.current={x:me/Ht,y:ge/Ht}}},N=()=>{tn(!1),Ue.current={x:0,y:0},fe.current={x:0,y:0}},E=()=>{Et.current||(Et.current=!0,qt.current=.28,ci.playSlash())},at=()=>{_t.current||(_t.current=!0,At.current.y=11,ci.playJump())},bt=()=>{if(s.potions<=0){Ee("No potion flasks left! Search the castle libraries and dungeons!");return}if(s.health>=s.maxHealth){Ee("Health is already fully topped up!");return}ci.playDefeatEnemy(),l(pt=>({...pt,potions:pt.potions-1,health:Math.min(pt.maxHealth,pt.health+40)})),Ee("Drank magical potion! Gulp... (+40 Health restored)")},Ut=()=>{const pt=ci.toggleSound();m(pt)},Vt=()=>{l({health:100,maxHealth:100,potions:0,enemiesDefeated:0,activeWeapon:"Steel Sword"}),d({houndCount:0,houndTotal:2,golemDefeated:!1,princessReached:!1}),g(["Ready your sword, Knight! Storm the fort and ascend the tower."]),ev.forEach(pt=>{pt.position.copy(pt.position)}),iv.forEach(pt=>{pt.taken=!1}),i("PLAYING")};return q.jsxs("div",{className:"absolute inset-0 flex flex-col font-sans select-none bg-slate-950 overflow-hidden text-slate-100",children:[q.jsxs("header",{id:"game_header",className:"h-14 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6 z-10 shrink-0",children:[q.jsxs("div",{className:"flex items-center gap-3",children:[q.jsx("div",{className:"w-8 h-8 rounded bg-pink-600 flex items-center justify-center font-bold text-white shadow-lg",children:"👑"}),q.jsxs("div",{children:[q.jsx("h1",{className:"text-sm font-semibold tracking-wide uppercase text-slate-200",children:"Castle Knight 3D"}),q.jsx("p",{className:"text-[10px] text-slate-400 font-mono",children:"Location: Citadel Fort Basin"})]})]}),q.jsxs("div",{className:"flex items-center gap-6",children:[q.jsxs("button",{id:"btn_settings_open",onClick:()=>{W.current=!0,R(!0)},className:"p-2 rounded bg-slate-850 hover:bg-slate-700/80 hover:text-white transition cursor-pointer flex items-center gap-1.5 border border-slate-700/40 text-slate-300",title:"Configure Key Bindings & Optimizer",children:[q.jsx(qv,{className:"w-4 h-4 text-pink-500 animate-spin-slow"}),q.jsx("span",{className:"hidden sm:inline text-xs font-semibold",children:"Settings"})]}),q.jsx("button",{id:"btn_sound",onClick:Ut,className:"p-2 rounded bg-slate-800 hover:bg-slate-700 transition cursor-pointer",title:"Toggle Retro Synthesized SFX",children:p?q.jsx(e2,{className:"w-4 h-4 text-emerald-400"}):q.jsx(i2,{className:"w-4 h-4 text-slate-400"})}),q.jsxs("button",{id:"btn_camera",onClick:()=>S(pt=>pt==="FOLLOW"?"FREE":"FOLLOW"),className:`p-2 rounded flex items-center gap-1.5 text-xs font-semibold cursor-pointer transition ${h==="FOLLOW"?"bg-blue-600/30 text-blue-400 border border-blue-500/40":"bg-slate-800 text-slate-300"}`,children:[q.jsx(OA,{className:"w-4 h-4"}),q.jsxs("span",{className:"hidden sm:inline",children:["Camera: ",h]})]})]})]}),q.jsx("div",{className:"flex-1 relative flex overflow-hidden",children:q.jsxs("div",{className:"flex-1 h-full relative",style:{touchAction:"none"},children:[q.jsx("div",{id:"three_canvas_container",ref:r,className:"w-full h-full block bg-slate-950"}),t==="PLAYING"&&q.jsxs(q.Fragment,{children:[q.jsxs("div",{id:"retro_combat_log",className:"absolute left-6 top-6 bg-slate-900/85 backdrop-blur-md padding border border-slate-800/80 p-3.5 rounded-lg max-w-sm pointer-events-none hidden md:block",children:[q.jsx("span",{className:"text-[11px] font-mono text-emerald-400 block mb-1",children:"🏰 Citadel Scout Reports:"}),q.jsx("div",{className:"space-y-1 font-mono text-[11px] text-slate-300",children:x.map((pt,ot)=>q.jsx("div",{className:`truncate ${ot===0?"text-white font-medium":"text-slate-400"}`,children:pt},ot))})]}),q.jsxs("div",{id:"knight_hud_panel",className:"absolute right-6 top-6 bg-slate-900/85 backdrop-blur-md p-4 rounded-xl border border-slate-800 shadow-2xl w-72 pointer-events-auto",children:[q.jsxs("div",{className:"mb-4",children:[q.jsxs("div",{className:"flex justify-between text-xs font-semibold mb-1",children:[q.jsx("span",{className:"text-red-400 flex items-center gap-1",children:"🛡️ Knight Health"}),q.jsxs("span",{className:"font-mono text-red-300",children:[s.health," / ",s.maxHealth," HP"]})]}),q.jsx("div",{className:"w-full h-3.5 rounded-full bg-slate-800 p-0.5 overflow-hidden",children:q.jsx("div",{className:"h-full rounded-full bg-red-600 transition-all duration-150 relative overflow-hidden",style:{width:`${s.health}%`},children:q.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-red-500 to-rose-600 animate-pulse"})})})]}),q.jsxs("div",{className:"mb-4 flex items-center justify-between border-b border-b-slate-800 pb-3",children:[q.jsxs("div",{className:"flex items-center gap-2",children:[q.jsx("span",{className:"text-sm",children:"🧪 Potions:"}),q.jsx("span",{className:"bg-red-950 text-red-400 px-2.5 py-0.5 rounded font-bold text-xs ring-1 ring-red-800/60 font-mono",children:s.potions})]}),q.jsxs("button",{id:"btn_potion_use",onClick:bt,disabled:s.potions<=0,className:`px-3 py-1.5 rounded text-xs font-semibold select-none flex items-center gap-1 shadow-lg cursor-pointer ${s.potions>0?"bg-rose-600 hover:bg-rose-500 text-white animate-bounce":"bg-slate-800 text-slate-500 cursor-not-allowed"}`,children:[q.jsx(qA,{className:"w-3.5 h-3.5"}),"Heal (Key H)"]})]}),q.jsxs("div",{children:[q.jsx("h3",{className:"text-xs font-semibold text-slate-400 tracking-wider mb-2.5",children:"ACTIVE QUEST OBJECTIVES"}),q.jsxs("div",{className:"space-y-2 text-xs font-semibold font-mono",children:[q.jsxs("div",{className:"flex items-center gap-2",children:[q.jsx("span",{className:c.houndCount>=c.houndTotal?"text-emerald-400":"text-slate-400",children:c.houndCount>=c.houndTotal?"✓":"○"}),q.jsxs("span",{className:c.houndCount>=c.houndTotal?"line-through text-slate-500":"text-slate-300",children:["Dungeon Shadow Hounds: (",c.houndCount,"/",c.houndTotal,")"]})]}),q.jsxs("div",{className:"flex items-center gap-2",children:[q.jsx("span",{className:c.golemDefeated?"text-emerald-400":"text-slate-400",children:c.golemDefeated?"✓":"○"}),q.jsx("span",{className:c.golemDefeated?"line-through text-slate-500":"text-slate-300",children:"Defeat the Throne Golem Boss"})]}),q.jsxs("div",{className:"flex items-center gap-2",children:[q.jsx("span",{className:"text-pink-400",children:"♥"}),q.jsx("span",{className:"text-pink-300 animate-pulse font-sans",children:"Ascend Spire & Rescue Princess!"})]})]})]})]}),q.jsxs("div",{id:"minimap_hud_wrapper",className:"absolute right-6 top-[282px] bg-slate-900/85 backdrop-blur-md p-3.5 rounded-xl border border-slate-800 shadow-2xl w-72 pointer-events-auto flex flex-col items-center gap-2.5",children:[q.jsxs("div",{className:"w-full flex items-center justify-between text-xs font-mono text-slate-400 select-none",children:[q.jsxs("span",{className:"flex items-center gap-1 font-bold text-slate-300",children:[q.jsx(DA,{className:"w-3.5 h-3.5 text-pink-500 animate-pulse"}),"Citadel Minimap"]}),q.jsxs("div",{className:"flex items-center gap-1.5",children:[q.jsx("button",{id:"btn_minimap_zoom_out",onClick:()=>U(pt=>Math.max(.8,pt-.2)),className:"p-1 rounded bg-slate-850 border border-slate-700/30 text-slate-300 hover:bg-slate-705 hover:text-white transition cursor-pointer",title:"Zoom Out",children:q.jsx(tv,{className:"w-3 h-3 rotate-180"})}),q.jsx("button",{id:"btn_minimap_zoom_in",onClick:()=>U(pt=>Math.min(3,pt+.2)),className:"p-1 rounded bg-slate-850 border border-slate-700/30 text-slate-300 hover:bg-slate-705 hover:text-white transition cursor-pointer",title:"Zoom In",children:q.jsx(tv,{className:"w-3 h-3"})}),q.jsx("button",{id:"btn_minimap_format",onClick:()=>C(pt=>pt==="CIRCLE"?"SQUARE":"CIRCLE"),className:"px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-850 hover:bg-slate-700 hover:text-white select-none capitalize transition cursor-pointer",title:"Toggle Shape",children:H.toLowerCase()})]})]}),q.jsxs("div",{className:`overflow-hidden border border-slate-750 shadow-inner relative bg-slate-950 transition-all duration-300 ${H==="CIRCLE"?"rounded-full":"rounded-lg"}`,style:{width:"130px",height:"130px"},children:[q.jsx("canvas",{ref:dt,width:130,height:130,className:"w-full h-full block"}),q.jsxs("div",{className:"absolute top-1 left-2 pointer-events-none font-mono text-[8px] text-slate-400 font-bold tracking-wide",children:[Math.round(I*100),"%"]})]}),q.jsxs("div",{className:"w-full flex items-center justify-between text-[9px] font-semibold text-slate-400 tracking-wider",children:[q.jsxs("span",{className:"flex items-center gap-1",children:[q.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"})," You"]}),q.jsxs("span",{className:"flex items-center gap-1",children:[q.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-red-500 inline-block"})," Beast"]}),q.jsxs("span",{className:"flex items-center gap-1",children:[q.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-blue-400 inline-block"})," Potions"]}),q.jsxs("span",{className:"flex items-center gap-1",children:[q.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-pink-500 inline-block animate-pulse"})," Goal"]})]})]}),q.jsxs("div",{id:"desktop_controls_guide",className:"absolute left-6 bottom-6 bg-slate-900/80 p-3 rounded-lg border border-slate-800 font-mono text-[10px] leading-relaxed text-slate-400 max-w-xs pointer-events-none hidden sm:block",children:[q.jsx("span",{className:"text-slate-300 font-bold block mb-1",children:"🎮 CONTROL SCHEMES:"}),"• ",q.jsx("strong",{className:"text-white",children:"W / S"}),": Move Forward / Backward",q.jsx("br",{}),"• ",q.jsx("strong",{className:"text-white",children:"A / D"}),": Rotate Knight left/right",q.jsx("br",{}),"• ",q.jsx("strong",{className:"text-white",children:"Spacebar"}),": Jump Platforms",q.jsx("br",{}),"• ",q.jsx("strong",{className:"text-white",children:"F Key / Click"}),": Sword Slicing Slash",q.jsx("br",{}),"• ",q.jsx("strong",{className:"text-white",children:"Mouse Drag"}),": Adjust Camera Angle Yaw"]}),q.jsx("div",{className:"absolute inset-0 pointer-events-none flex flex-col justify-end p-6 select-none",children:q.jsxs("div",{className:"flex items-center justify-between pointer-events-auto",children:[q.jsxs("div",{id:"mobile_joystick_region",onMouseDown:pt=>{const ot=pt.currentTarget.getBoundingClientRect();Z.current={x:ot.left+64,y:ot.top+64},tn(!0)},onMouseMove:pt=>{if(!Ne)return;const ot=pt.clientX-Z.current.x,mt=pt.clientY-Z.current.y,Lt=44,Ht=Math.sqrt(ot*ot+mt*mt);if(Ht===0)Ue.current={x:0,y:0},fe.current={x:0,y:0};else{const zt=Math.min(Lt,Ht)/Ht;Ue.current={x:ot*zt,y:mt*zt},fe.current={x:ot*zt/Lt,y:mt*zt/Lt}}},onMouseUp:()=>{tn(!1),Ue.current={x:0,y:0},fe.current={x:0,y:0}},onTouchStart:It,onTouchMove:Ye,onTouchEnd:N,className:"w-32 h-32 rounded-full bg-slate-900/60 border border-slate-700 backdrop-blur-md relative flex items-center justify-center cursor-pointer shadow-inner active:border-emerald-600/70",children:[q.jsx("div",{className:"absolute w-12 h-12 rounded-full bg-emerald-500/80 shadow-lg border border-emerald-400 pointer-events-none",style:{transform:`translate(${Ue.current.x}px, ${Ue.current.y}px)`,transition:Ne?"none":"transform 100s ease-out"}}),q.jsx("span",{className:"text-[8px] font-bold text-slate-500 absolute bottom-2 select-none pointer-events-none",children:"DRAG JOYSTICK"})]}),q.jsxs("div",{className:"flex gap-4 items-end",children:[q.jsx("button",{id:"btn_mobile_jump",onTouchStart:pt=>{pt.preventDefault(),at()},onClick:at,className:"w-16 h-16 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 font-bold flex items-center justify-center select-none shadow-lg active:scale-90 active:bg-slate-800 transition cursor-pointer",children:"JUMP"}),q.jsxs("button",{id:"btn_mobile_attack",onTouchStart:pt=>{pt.preventDefault(),E()},onClick:E,className:"w-20 h-20 rounded-full bg-red-600 border border-red-500 text-white font-bold flex flex-col items-center justify-center select-none shadow-lg active:scale-95 active:bg-red-500 transition cursor-pointer",children:[q.jsx(ZA,{className:"w-5 h-5 mb-0.5"}),q.jsx("span",{children:"SLASH"})]})]})]})})]}),t==="START"&&q.jsx("div",{id:"game_start_lobby",className:"absolute inset-0 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-6 z-20",children:q.jsxs("div",{className:"max-w-lg w-full bg-slate-900 border border-slate-800/80 p-8 rounded-2xl shadow-2xl relative text-center",children:[q.jsx("div",{className:"w-20 h-20 bg-pink-600 rounded-full flex items-center justify-center text-3xl shadow-lg mx-auto mb-6",children:"🏰"}),q.jsx("h2",{className:"text-3xl font-extrabold text-slate-100 tracking-tight mb-2",children:"Castle Knight 3D"}),q.jsx("p",{className:"text-indigo-400 text-sm font-semibold tracking-wider font-mono mb-4 uppercase",children:"Fantasy Action-Adventure Template"}),q.jsx("p",{className:"text-slate-400 text-sm leading-relaxed mb-6",children:"Experience a high-performance, responsive 3D medieval fortress template built entirely with procedurally optimized 3D geometry. Traverse the battlements, unlock secret potion flasks, avoid guillotine traps, and face the towering Stone Golem to rescue Princess Rosalind!"}),q.jsxs("div",{className:"bg-slate-950 border border-slate-800 p-4 rounded-lg text-left mb-6 font-mono text-xs leading-relaxed space-y-1 text-slate-300",children:[q.jsx("span",{className:"font-sans text-slate-400 font-bold block mb-1",children:"🎮 GAME MECHANICS:"}),"• ",q.jsx("span",{className:"text-emerald-400",children:"Knight Status:"})," Start with 100 HP. Refill health with Potions.",q.jsx("br",{}),"• ",q.jsx("span",{className:"text-red-400",children:"Citadel Hazards:"})," Swing pendulums & wall pressures subtract HP.",q.jsx("br",{}),"• ",q.jsx("span",{className:"text-yellow-400",children:"Summit Climax:"})," Solve stairs and scale High Tower to win!"]}),q.jsx("button",{id:"btn_start_adventure",onClick:()=>i("PLAYING"),className:"w-full py-4 rounded-xl bg-pink-600 hover:bg-pink-500 active:scale-98 transition text-white font-extrabold text mb-3 cursor-pointer shadow-lg tracking-wider",children:"START ADVENTURE"})]})}),t==="GAMEOVER"&&q.jsx("div",{id:"game_over_lobby",className:"absolute inset-0 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-6 z-20",children:q.jsxs("div",{className:"max-w-md w-full bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl text-center",children:[q.jsx("div",{className:"w-16 h-16 bg-red-950/60 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 border border-red-500/30",children:"💀"}),q.jsx("h2",{className:"text-3xl font-extrabold text-red-500 tracking-tight mb-2",children:"YOU HAVE FALLEN"}),q.jsx("p",{className:"text-slate-400 text-sm mb-6",children:"The dangers of the fort overcame your defenses. Dust yourself off, unsheathe your sword, and try once more!"}),q.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6 font-mono text-xs text-slate-300 bg-slate-950 p-4 border border-slate-800 rounded-lg",children:[q.jsx("div",{children:"Defeated Beasts:"}),q.jsx("div",{className:"text-red-400 font-bold",children:s.enemiesDefeated}),q.jsx("div",{children:"Potions Found:"}),q.jsx("div",{className:"text-indigo-400 font-bold",children:s.potions})]}),q.jsxs("button",{id:"btn_retry_adventure",onClick:Vt,className:"w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-500 active:scale-98 transition text-white font-bold tracking-wider cursor-pointer shadow-lg flex items-center justify-center gap-2",children:[q.jsx(BA,{className:"w-4 h-4"}),"TRY AGAIN"]})]})}),t==="VICTORY"&&q.jsx("div",{id:"victory_lobby",className:"absolute inset-0 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-6 z-20",children:q.jsxs("div",{className:"max-w-md w-full bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl text-center",children:[q.jsx("div",{className:"w-16 h-16 bg-purple-950/60 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 border border-purple-500/30",children:"👑"}),q.jsx("h2",{className:"text-3xl font-extrabold text-teal-400 tracking-tight mb-1",children:"FORTRESS RESCUED!"}),q.jsx("p",{className:"text-slate-200 text-xs font-semibold tracking-wider font-mono mb-6 uppercase",children:"True Champion of the Realm"}),q.jsx("p",{className:"text-slate-400 text-sm leading-relaxed mb-6",children:"You ascended the spiral climbs, bypassed the traps, and reunited with the Princess at the summit. The whole kingdom chants your name!"}),q.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6 font-mono text-xs text-slate-300 bg-slate-950 p-4 border border-slate-800 rounded-lg",children:[q.jsx("div",{children:"Beasts Slain:"}),q.jsx("div",{className:"text-indigo-400 font-bold",children:s.enemiesDefeated}),q.jsx("div",{children:"Climb Heights:"}),q.jsx("span",{className:"text-pink-400 font-bold",children:"Summit (32m)"})]}),q.jsx("div",{className:"space-y-2",children:q.jsxs("button",{id:"btn_victory_reset",onClick:Vt,className:"w-full py-3.5 rounded-xl bg-pink-600 hover:bg-pink-500 active:scale-98 transition text-white font-bold tracking-wider cursor-pointer shadow-lg flex items-center justify-center gap-2",children:[q.jsx($A,{className:"w-4 h-4"}),"PLAY AGAIN"]})})]})})]})}),q.jsx(C2,{isOpen:v,onClose:()=>{W.current=!1,R(!1)},onKeyBindingsChange:pt=>{A(pt)},renderDistance:D,onRenderDistanceChange:pt=>{y(pt)}})]})}function N2(){return q.jsx("div",{className:"w-screen h-screen overflow-hidden select-none bg-slate-950",children:q.jsx(D2,{})})}oy.createRoot(document.getElementById("root")).render(q.jsx(ae.StrictMode,{children:q.jsx(N2,{})}));

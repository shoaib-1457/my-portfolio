const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/initialFX-CyUstrmG.js","assets/Navbar-CsX_RNlX.js","assets/vendor-BzVF-Cty.js","assets/ScrollTrigger-FjUmd4ZA.js","assets/Navbar-wB6fHtnG.css","assets/index-DJo4rDEI.js","assets/RGBELoader-DQUJ8btJ.js","assets/MainContainer-C8onPtmY.js","assets/MainContainer-B8pNN41p.css"])))=>i.map(i=>d[i]);
import{r as u,a as ee}from"./vendor-BzVF-Cty.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function l(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=l(n);fetch(n.href,a)}})();var W={exports:{}},S={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var te=u,ne=Symbol.for("react.element"),re=Symbol.for("react.fragment"),ae=Object.prototype.hasOwnProperty,se=te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oe={key:!0,ref:!0,__self:!0,__source:!0};function z(r,e,l){var s,n={},a=null,o=null;l!==void 0&&(a=""+l),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(s in e)ae.call(e,s)&&!oe.hasOwnProperty(s)&&(n[s]=e[s]);if(r&&r.defaultProps)for(s in e=r.defaultProps,e)n[s]===void 0&&(n[s]=e[s]);return{$$typeof:ne,type:r,key:a,ref:o,props:n,_owner:se.current}}S.Fragment=re;S.jsx=z;S.jsxs=z;W.exports=S;var t=W.exports,B,T=ee;B=T.createRoot,T.hydrateRoot;const ie="modulepreload",le=function(r){return"/"+r},D={},I=function(e,l,s){let n=Promise.resolve();if(l&&l.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),i=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));n=Promise.allSettled(l.map(f=>{if(f=le(f),f in D)return;D[f]=!0;const d=f.endsWith(".css"),v=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${v}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":ie,d||(m.as="script"),m.crossOrigin="",m.href=f,i&&m.setAttribute("nonce",i),document.head.appendChild(m),d)return new Promise((_,p)=>{m.addEventListener("load",_),m.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${f}`)))})}))}function a(o){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o}return n.then(o=>{for(const i of o||[])i.status==="rejected"&&a(i.reason);return e().catch(a)})};var G={};function ce(r){if(typeof window>"u")return;const e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=r,document.head.appendChild(e),r}Object.defineProperty(G,"__esModule",{value:!0});var c=u;function de(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var y=de(c);ce(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const ue=c.forwardRef(function({style:e={},className:l="",autoFill:s=!1,play:n=!0,pauseOnHover:a=!1,pauseOnClick:o=!1,direction:i="left",speed:f=50,delay:d=0,loop:v=0,gradient:m=!1,gradientColor:_="white",gradientWidth:p=200,onFinish:X,onCycleComplete:F,onMount:q,children:b},V){const[L,Y]=c.useState(0),[N,J]=c.useState(0),[R,O]=c.useState(1),[P,K]=c.useState(!1),Z=c.useRef(null),g=V||Z,E=c.useRef(null),w=c.useCallback(()=>{if(E.current&&g.current){const h=g.current.getBoundingClientRect(),M=E.current.getBoundingClientRect();let x=h.width,j=M.width;(i==="up"||i==="down")&&(x=h.height,j=M.height),O(s&&x&&j&&j<x?Math.ceil(x/j):1),Y(x),J(j)}},[s,g,i]);c.useEffect(()=>{if(P&&(w(),E.current&&g.current)){const h=new ResizeObserver(()=>w());return h.observe(g.current),h.observe(E.current),()=>{h&&h.disconnect()}}},[w,g,P]),c.useEffect(()=>{w()},[w,b]),c.useEffect(()=>{K(!0)},[]),c.useEffect(()=>{typeof q=="function"&&q()},[]);const A=c.useMemo(()=>s?N*R/f:N<L?L/f:N/f,[s,L,N,R,f]),Q=c.useMemo(()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!n||a?"paused":"running","--pause-on-click":!n||a&&!o||o?"paused":"running","--width":i==="up"||i==="down"?"100vh":"100%","--transform":i==="up"?"rotate(-90deg)":i==="down"?"rotate(90deg)":"none"}),[e,n,a,o,i]),H=c.useMemo(()=>({"--gradient-color":_,"--gradient-width":typeof p=="number"?`${p}px`:p}),[_,p]),$=c.useMemo(()=>({"--play":n?"running":"paused","--direction":i==="left"?"normal":"reverse","--duration":`${A}s`,"--delay":`${d}s`,"--iteration-count":v?`${v}`:"infinite","--min-width":s?"auto":"100%"}),[n,i,A,d,v,s]),C=c.useMemo(()=>({"--transform":i==="up"?"rotate(90deg)":i==="down"?"rotate(-90deg)":"none"}),[i]),k=c.useCallback(h=>[...Array(Number.isFinite(h)&&h>=0?h:0)].map((M,x)=>y.default.createElement(c.Fragment,{key:x},c.Children.map(b,j=>y.default.createElement("div",{style:C,className:"rfm-child"},j)))),[C,b]);return P?y.default.createElement("div",{ref:g,style:Q,className:"rfm-marquee-container "+l},m&&y.default.createElement("div",{style:H,className:"rfm-overlay"}),y.default.createElement("div",{className:"rfm-marquee",style:$,onAnimationIteration:F,onAnimationEnd:X},y.default.createElement("div",{className:"rfm-initial-child-container",ref:E},c.Children.map(b,h=>y.default.createElement("div",{style:C,className:"rfm-child"},h))),k(R-1)),y.default.createElement("div",{className:"rfm-marquee",style:$},k(R))):null});var fe=G.default=ue;const me=({percent:r})=>{const{setIsLoading:e}=ve(),[l,s]=u.useState(!1),[n,a]=u.useState(!1),[o,i]=u.useState(!1);r>=100&&setTimeout(()=>{s(!0),setTimeout(()=>{a(!0)},1e3)},600),u.useEffect(()=>{I(()=>import("./initialFX-CyUstrmG.js"),__vite__mapDeps([0,1,2,3,4])).then(d=>{n&&(i(!0),setTimeout(()=>{d.initialFX&&d.initialFX(),e(!1)},900))})},[n]);function f(d){const{currentTarget:v}=d,m=v.getBoundingClientRect(),_=d.clientX-m.left,p=d.clientY-m.top;v.style.setProperty("--mouse-x",`${_}px`),v.style.setProperty("--mouse-y",`${p}px`)}return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"loading-header",children:[t.jsx("a",{href:"/#",className:"loader-title","data-cursor":"disable",children:"Logo"}),t.jsx("div",{className:`loaderGame ${o&&"loader-out"}`,children:t.jsxs("div",{className:"loaderGame-container",children:[t.jsx("div",{className:"loaderGame-in",children:[...Array(27)].map((d,v)=>t.jsx("div",{className:"loaderGame-line"},v))}),t.jsx("div",{className:"loaderGame-ball"})]})})]}),t.jsxs("div",{className:"loading-screen",children:[t.jsx("div",{className:"loading-marquee",children:t.jsxs(fe,{children:[t.jsx("span",{children:" A Creative Developer"})," ",t.jsx("span",{children:"A Creative Designer"}),t.jsx("span",{children:" A Creative Developer"})," ",t.jsx("span",{children:"A Creative Designer"})]})}),t.jsxs("div",{className:`loading-wrap ${o&&"loading-clicked"}`,onMouseMove:d=>f(d),children:[t.jsx("div",{className:"loading-hover"}),t.jsxs("div",{className:`loading-button ${l&&"loading-complete"}`,children:[t.jsxs("div",{className:"loading-container",children:[t.jsx("div",{className:"loading-content",children:t.jsxs("div",{className:"loading-content-in",children:["Loading ",t.jsxs("span",{children:[r,"%"]})]})}),t.jsx("div",{className:"loading-box"})]}),t.jsx("div",{className:"loading-content2",children:t.jsx("span",{children:"Welcome"})})]})]})]})]})},je=r=>{let e=0,l=setInterval(()=>{if(e<=50){let a=Math.round(Math.random()*5);e=e+a,r(e)}else clearInterval(l),l=setInterval(()=>{e=e+Math.round(Math.random()),r(e),e>91&&clearInterval(l)},2e3)},100);function s(){clearInterval(l),r(100)}function n(){return new Promise(a=>{clearInterval(l),l=setInterval(()=>{e<100?(e++,r(e)):(a(e),clearInterval(l))},2)})}return{loaded:n,percent:e,clear:s}},U=u.createContext(null),he=({children:r})=>{const[e,l]=u.useState(!0),[s,n]=u.useState(0),a={isLoading:e,setIsLoading:l,setLoading:n};return u.useEffect(()=>{},[s]),t.jsxs(U.Provider,{value:a,children:[e&&t.jsx(me,{percent:s}),t.jsx("main",{className:"main-body",children:r})]})},ve=()=>{const r=u.useContext(U);if(!r)throw new Error("useLoading must be used within a LoadingProvider");return r},pe=u.lazy(()=>I(()=>import("./index-DJo4rDEI.js"),__vite__mapDeps([5,2,6,3]))),ye=u.lazy(()=>I(()=>import("./MainContainer-C8onPtmY.js"),__vite__mapDeps([7,2,3,1,4,8]))),ge=()=>t.jsx(t.Fragment,{children:t.jsx(he,{children:t.jsx(u.Suspense,{children:t.jsx(ye,{children:t.jsx(u.Suspense,{children:t.jsx(pe,{})})})})})});B(document.getElementById("root")).render(t.jsx(u.StrictMode,{children:t.jsx(ge,{})}));export{I as _,t as j,je as s,ve as u};

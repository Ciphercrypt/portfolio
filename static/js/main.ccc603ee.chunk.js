(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[3],[,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return l}));const r={desktop:2080,laptop:1680,tablet:1024,mobile:696,mobileS:400},a=e=>`${e}px`,c=e=>e/16+"rem",o=e=>Number(e.replace("ms","")),i=e=>`${e}ms`,l=e=>e.split(" ").map((e=>Number(e)/255))},,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return h})),n.d(t,"h",(function(){return b})),n.d(t,"i",(function(){return f})),n.d(t,"j",(function(){return m})),n.d(t,"k",(function(){return p})),n.d(t,"l",(function(){return j}));var r=n(0),a=n(17);var c=function(){return Object(r.useContext)(a.a)};var o=function(e=""){const[t,n]=Object(r.useState)(e),[a,c]=Object(r.useState)(),[o,i]=Object(r.useState)(!1);return{value:t,error:a,onChange:e=>{n(e.target.value),i(!0),a&&e.target.checkValidity()&&c(null)},onBlur:e=>{o&&e.target.checkValidity()},onInvalid:e=>{e.preventDefault(),c(e.target.validationMessage)}}};let i=0;var l=()=>{const[e,t]=Object(r.useState)(null);return Object(r.useEffect)((()=>t(++i)),[]),e};var s=function(e,t,n){const a=Object(r.useRef)();Object(r.useEffect)((()=>{a.current=e})),Object(r.useEffect)((()=>{if(null!==t){let e=setInterval((function(){a.current()}),t);return()=>clearInterval(e)}}),[t,n])};var u=function(e,t,n={},a=!0){const[c,o]=Object(r.useState)(!1),[i,l]=Object(r.useState)(!1);return Object(r.useEffect)((()=>{if(null===e||void 0===e||!e.current)return;const r=new IntersectionObserver((([e])=>{const{isIntersecting:n,target:a}=e;o(n),n&&t&&(r.unobserve(a),l(!0))}),n);return!i&&a&&r.observe(e.current),()=>r.disconnect()}),[e,t,n,i,a]),c};var d=function(e,t){const[n,a]=Object(r.useState)((()=>{try{const n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.error(n),t}}));return[n,t=>{try{const r=t instanceof Function?t(n):t;a(r),window.localStorage.setItem(e,JSON.stringify(r))}catch(r){console.error(r),console.log("avi2")}}]};var h=function(e,t=!0){const[n,a]=Object(r.useState)(0),c=b();return Object(r.useEffect)((()=>{let n=!1,r=null;const o=()=>{const{innerHeight:r}=window,c=Math.max(0,window.scrollY)*e,o=Math.max(-r,Math.min(r,c));a(t?o:c),n=!1},i=()=>{n||(n=!0,r=requestAnimationFrame(o))};return c||window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i),cancelAnimationFrame(r)}}),[t,e,c]),n};var b=function(){const[e,t]=Object(r.useState)((()=>{var e,t;return null===(e=(t=window).matchMedia)||void 0===e?void 0:e.call(t,"(prefers-reduced-motion: reduce)").matches}));return Object(r.useEffect)((()=>{var e,n;const r=null===(e=(n=window).matchMedia)||void 0===e?void 0:e.call(n,"(prefers-reduced-motion: reduce)"),a=()=>{t(null===r||void 0===r?void 0:r.matches)};return null===r||void 0===r||r.addListener(a),a(),()=>{null===r||void 0===r||r.removeListener(a)}}),[]),e};var f=function(e){const t=Object(r.useRef)();return Object(r.useEffect)((()=>{t.current=e}),[e]),t.current};var m=function(){return Object(r.useContext)(a.b)};var p=function(){const{status:e}=m(),t=f(e),n=b();Object(r.useEffect)((()=>{("entering"===t&&"entered"===e||n&&"entered"===e)&&(window.scrollTo(0,0),document.getElementById("MainContent").focus())}),[n,t,e])};var j=function(){const e="object"===typeof window,t=navigator.userAgent.match(/iphone|ipod|ipad/i),n=Object(r.useRef)((()=>({w:0,h:0}))),a=Object(r.useRef)((()=>Math.abs(window.orientation))),c=Object(r.useCallback)((()=>{let e=document.createElement("div");e.style.position="fixed",e.style.height="100vh",e.style.width=0,e.style.top=0,document.documentElement.appendChild(e),a.current.w=90===n.current?e.offsetHeight:window.innerWidth,a.current.h=90===n.current?window.innerWidth:e.offsetHeight,document.documentElement.removeChild(e),e=null}),[]),o=Object(r.useCallback)((()=>e?t?(c(),90!==Math.abs(window.orientation)?a.current.h:a.current.w):window.innerHeight:0),[c,e,t]),i=Object(r.useCallback)((()=>({width:e?window.innerWidth:0,height:o()})),[o,e]),[l,s]=Object(r.useState)((()=>i()));return Object(r.useEffect)((()=>{const e=()=>{s(i())};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[i,e]),l}},function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var r=n(2);const a="system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",c={base:{rgbBlack:"0 0 0",rgbWhite:"255 255 255",bezierFastoutSlowin:"cubic-bezier(0.4, 0.0, 0.2, 1)",durationXS:"200ms",durationS:"300ms",durationM:"400ms",durationL:"600ms",durationXL:"800ms",systemFontStack:a,fontStack:`Gotham, ${a}`,monoFontStack:"SFMono Regular, Roboto Mono, Consolas, Liberation Mono, Menlo, Courier, monospace",japaneseFontStack:"\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, \u30e1\u30a4\u30ea\u30aa, Meiryo, Segoe UI, sans-serif",fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,fontSizeH0:Object(r.e)(140),fontSizeH1:Object(r.e)(100),fontSizeH2:Object(r.e)(58),fontSizeH3:Object(r.e)(38),fontSizeH4:Object(r.e)(28),fontSizeBodyXL:Object(r.e)(22),fontSizeBodyL:Object(r.e)(20),fontSizeBodyM:Object(r.e)(18),fontSizeBodyS:Object(r.e)(16),fontSizeBodyXS:Object(r.e)(14),lineHeightTitle:"1.1",lineHeightBody:"1.5",maxWidthS:"540px",maxWidthM:"720px",maxWidthL:"1096px",maxWidthXL:"1680px",spaceOuter:"64px",spaceXS:"4px",spaceS:"8px",spaceM:"16px",spaceL:"24px",spaceXL:"32px",space2XL:"48px",space3XL:"64px",space4XL:"96px",space5XL:"128px"},desktop:{fontSizeH0:Object(r.e)(120),fontSizeH1:Object(r.e)(80)},laptop:{maxWidthS:"480px",maxWidthM:"640px",maxWidthL:"1000px",maxWidthXL:"1100px",spaceOuter:"48px",fontSizeH0:Object(r.e)(100),fontSizeH1:Object(r.e)(70),fontSizeH2:Object(r.e)(52),fontSizeH3:Object(r.e)(36),fontSizeH4:Object(r.e)(26)},tablet:{fontSizeH0:Object(r.e)(80),fontSizeH1:Object(r.e)(60),fontSizeH2:Object(r.e)(48),fontSizeH3:Object(r.e)(32),fontSizeH4:Object(r.e)(24)},mobile:{spaceOuter:"24px",fontSizeH0:Object(r.e)(56),fontSizeH1:Object(r.e)(40),fontSizeH2:Object(r.e)(34),fontSizeH3:Object(r.e)(28),fontSizeH4:Object(r.e)(22),fontSizeBodyL:Object(r.e)(18),fontSizeBodyM:Object(r.e)(16),fontSizeBodyS:Object(r.e)(14)},mobileS:{spaceOuter:"16px",fontSizeH0:Object(r.e)(42),fontSizeH1:Object(r.e)(38),fontSizeH2:Object(r.e)(28),fontSizeH3:Object(r.e)(24),fontSizeH4:Object(r.e)(20)}},o={dark:{themeId:"dark",rgbBackground:"0 0 10",rgbBackgroundLight:"26 26 260",rgbPrimary:"48 63 209",rgbAccent:"0 229 20",rgbText:"242 242 242",rgbError:"255 0 60",colorTextTitle:"rgb(var(--rgbText) / 1)",colorTextBody:"rgb(var(--rgbText) / 0.8)",colorTextLight:"rgb(var(--rgbText) / 0.6)"},light:{themeId:"light",rgbBackground:"242 242 242",rgbBackgroundLight:"255 255 255",rgbPrimary:"0 0 0",rgbAccent:"0 229 255",rgbText:"0 0 0",rgbError:"210 14 60",colorTextTitle:"rgb(var(--rgbText) / 1)",colorTextBody:"rgb(var(--rgbText) / 0.7)",colorTextLight:"rgb(var(--rgbText) / 0.6)"}}},,,,function(e,t,n){"use strict";var r,a=n(4),c=n.n(a),o=n(0);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function l({title:e,titleId:t,...n},a){return o.createElement("svg",i({width:24,height:24,viewBox:"0 0 24 24",ref:a,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,r||(r=o.createElement("path",{d:"M22.92 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.83 4.5 17.72 4 16.46 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.9 20.29 6.16 21 8.58 21c7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"})))}const s=o.forwardRef(l);var u;n.p;function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function h({title:e,titleId:t,...n},r){return o.createElement("svg",d({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,u||(u=o.createElement("path",{fillRule:"evenodd",d:"M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10A10 10 0 012 12zm14.86-6.09A7.726 7.726 0 0012 4.2c-.57 0-1.12.07-1.66.18.66.87 1.66 2.29 2.69 4.27 1.47-.65 2.81-1.51 3.83-2.74zM8.55 5c.55.65 1.63 2.06 2.79 4.25-2.34.71-4.73.87-6.16.87h-.13c-.24 0-.45 0-.62-.01C5 7.87 6.5 6 8.55 5zM4.2 11.89V12c0 1.91.7 3.66 1.84 5 .41-.61 1.12-1.54 2.15-2.5 1.08-.97 2.54-1.96 4.4-2.58-.15-.36-.3-.7-.45-1.03-2.78.87-5.52 1-7.08 1.01h-.01c-.34 0-.63 0-.85-.01zm12.22 6.53A57.5 57.5 0 0015 13.17c.5-.07 1-.11 1.58-.11h.02c.93 0 1.95.12 3.06.37a7.788 7.788 0 01-3.24 4.99zM12 19.8c-1.74 0-3.34-.57-4.64-1.54.28-.45.87-1.32 1.82-2.22.96-.93 2.32-1.89 4.05-2.46.59 1.67 1.13 3.57 1.54 5.71-.86.33-1.77.51-2.77.51zm6.13-12.62a7.823 7.823 0 011.66 4.45 15.32 15.32 0 00-3.19-.35h-.01c-.8 0-1.55.07-2.26.19l-.027-.067c-.16-.395-.313-.774-.493-1.143 1.58-.69 3.09-1.68 4.32-3.08z"})))}const b=o.forwardRef(h);var f;n.p;function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function p({title:e,titleId:t,...n},r){return o.createElement("svg",m({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,f||(f=o.createElement("path",{d:"M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"})))}const j=o.forwardRef(p);var v;n.p;function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function O({title:e,titleId:t,...n},r){return o.createElement("svg",g({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,v||(v=o.createElement("path",{d:"M12.875 3.516L12 1.932l-.875 1.584-9.393 17L.912 22h22.175l-.82-1.484-9.392-17zM19.697 20H4.303L12 6.068 19.697 20zM11 15v-4h2v4h-2zm0 3v-2h2v2h-2z"})))}const x=o.forwardRef(O);var w;n.p;function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function E({title:e,titleId:t,...n},r){return o.createElement("svg",y({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,w||(w=o.createElement("path",{d:"M22 6H2V4h20v2zM2 13h16v-2H2v2zm0 7h20v-2H2v2z"})))}const _=o.forwardRef(E);var S;n.p;function z(){return z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z.apply(this,arguments)}function M({title:e,titleId:t,...n},r){return o.createElement("svg",z({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,S||(S=o.createElement("path",{d:"M14.207 4.793l6.5 6.5.707.707-.707.707-6.5 6.5-1.414-1.414L17.586 13H3v-2h14.586l-4.793-4.793 1.414-1.414z"})))}const k=o.forwardRef(M);var C;n.p;function N(){return N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N.apply(this,arguments)}function H({title:e,titleId:t,...n},r){return o.createElement("svg",N({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,C||(C=o.createElement("path",{d:"M13.586 12L7.793 6.207l1.414-1.414 6.5 6.5.707.707-.707.707-6.5 6.5-1.414-1.414L13.586 12z"})))}const L=o.forwardRef(H);var B;n.p;function I(){return I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}function R({title:e,titleId:t,...n},r){return o.createElement("svg",I({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,B||(B=o.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})))}const P=o.forwardRef(R);var T;n.p;function $(){return $=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$.apply(this,arguments)}function V({title:e,titleId:t,...n},r){return o.createElement("svg",$({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,T||(T=o.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2 .01 7z"})))}const F=o.forwardRef(V);var W;n.p;function A(){return A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},A.apply(this,arguments)}function U({title:e,titleId:t,...n},r){return o.createElement("svg",A({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,W||(W=o.createElement("path",{d:"M8 5v14l11-7z"})))}const X=o.forwardRef(U);var D;n.p;function G(){return G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G.apply(this,arguments)}function J({title:e,titleId:t,...n},r){return o.createElement("svg",G({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,D||(D=o.createElement("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"})))}const q=o.forwardRef(J);var K;n.p;function Y(){return Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y.apply(this,arguments)}function Z({title:e,titleId:t,...n},r){return o.createElement("svg",Y({width:24,height:24,viewBox:"0 0 24 24",ref:r,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,K||(K=o.createElement("path",{fillRule:"evenodd",d:"M15 10a2 2 0 100 4 2 2 0 000-4zm-2 5.464A4 4 0 0017.646 9 4 4 0 0015 2H9a4 4 0 00-2.646 7 4.01 4.01 0 00-.818 1 4 4 0 00.818 5 3.977 3.977 0 00-.818 1A4 4 0 1013 18v-2.536zM11 16H9a2 2 0 102 2v-2zM9 8h2V4H9a2 2 0 100 4zm0 2a2 2 0 100 4h2v-4H9zm4-2V4h2a2 2 0 010 4h-2z"})))}const Q=o.forwardRef(Z);var ee,te;n.p;function ne(){return ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ne.apply(this,arguments)}function re({title:e,titleId:t,...n},r){return o.createElement("svg",ne({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"48px",height:"48px",ref:r,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,ee||(ee=o.createElement("path",{fill:"#0288D1",d:"M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"})),te||(te=o.createElement("path",{fill:"#FFF",d:"M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"})))}const ae=o.forwardRef(re);var ce,oe,ie,le,se,ue,de;n.p;function he(){return he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},he.apply(this,arguments)}function be({title:e,titleId:t,...n},r){return o.createElement("svg",he({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"48px",height:"48px",ref:r,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,ce||(ce=o.createElement("radialGradient",{id:"yOrnnhliCrdS2gy~4tD8ma",cx:19.38,cy:42.035,r:44.899,gradientUnits:"userSpaceOnUse"},o.createElement("stop",{offset:0,stopColor:"#fd5"}),o.createElement("stop",{offset:.328,stopColor:"#ff543f"}),o.createElement("stop",{offset:.348,stopColor:"#fc5245"}),o.createElement("stop",{offset:.504,stopColor:"#e64771"}),o.createElement("stop",{offset:.643,stopColor:"#d53e91"}),o.createElement("stop",{offset:.761,stopColor:"#cc39a4"}),o.createElement("stop",{offset:.841,stopColor:"#c837ab"}))),oe||(oe=o.createElement("path",{fill:"url(#yOrnnhliCrdS2gy~4tD8ma)",d:"M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z"})),ie||(ie=o.createElement("radialGradient",{id:"yOrnnhliCrdS2gy~4tD8mb",cx:11.786,cy:5.54,r:29.813,gradientTransform:"matrix(1 0 0 .6663 0 1.849)",gradientUnits:"userSpaceOnUse"},o.createElement("stop",{offset:0,stopColor:"#4168c9"}),o.createElement("stop",{offset:.999,stopColor:"#4168c9",stopOpacity:0}))),le||(le=o.createElement("path",{fill:"url(#yOrnnhliCrdS2gy~4tD8mb)",d:"M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z"})),se||(se=o.createElement("path",{fill:"#fff",d:"M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5 s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"})),ue||(ue=o.createElement("circle",{cx:31.5,cy:16.5,r:1.5,fill:"#fff"})),de||(de=o.createElement("path",{fill:"#fff",d:"M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12 C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"})))}const fe=o.forwardRef(be);var me;n.p;function pe(){return pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pe.apply(this,arguments)}function je({title:e,titleId:t,...n},r){return o.createElement("svg",pe({fill:"#000000",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"50px",height:"50px",ref:r,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,me||(me=o.createElement("path",{d:"M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"})))}const ve=o.forwardRef(je);var ge,Oe,xe,we,ye;n.p;function Ee(){return Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ee.apply(this,arguments)}function _e({title:e,titleId:t,...n},r){return o.createElement("svg",Ee({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"48px",height:"48px",ref:r,"aria-labelledby":t},n),e?o.createElement("title",{id:t},e):null,ge||(ge=o.createElement("path",{fill:"#4caf50",d:"M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"})),Oe||(Oe=o.createElement("path",{fill:"#1e88e5",d:"M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"})),xe||(xe=o.createElement("polygon",{fill:"#e53935",points:"35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"})),we||(we=o.createElement("path",{fill:"#c62828",d:"M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"})),ye||(ye=o.createElement("path",{fill:"#fbc02d",d:"M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"})))}const Se=o.forwardRef(_e);n.p,n(44);var ze=n(1);const Me={twitter:s,dribbble:b,github:j,error:x,menu:_,arrowRight:k,chevronRight:L,close:P,send:F,play:X,pause:q,figma:Q,linkedin:ae,instagram:fe,github1:ve,gmail:Se};t.a=({icon:e,style:t,className:n,...r})=>{const a=Me[e];return Object(ze.jsx)(a,{"aria-hidden":!0,className:c()("icon",n),...r})}},,function(e,t,n){"use strict";function r(e){e.currentTarget.blur()}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return R})),n.d(t,"b",(function(){return P}));var r=n(0),a=n(15),c=n(5),o=n(56),i=n(57),l=n(4),s=n.n(l),u=n(21),d=n(9),h=(n(42),n(1));var b=function({highlight:e,className:t,...n}){const r=`monogram-clip-${Object(d.c)()}`;return Object(h.jsxs)("svg",{"aria-hidden":!0,className:s()("monogram",t),width:"46",height:"29",viewBox:"0 0 46 29",...n,children:[Object(h.jsx)("defs",{children:Object(h.jsx)("clipPath",{id:r,children:Object(h.jsx)("path",{d:"m 29.95294,35.43161 c -0.07,0.19 -3.554998,-8.767815 -3.733998,-8.671815 -0.406,0.22 -16.5771841,0.132476 -16.5771841,0.132476 L 6.066214,35.399395 C 5.999214,35.276395 0,35.404595 0,35.26456 0,34.80156 8.261542,15.640436 8.261542,15.640436 l 6.037189,0.04053 -2.163373,5.411693 11.703245,-0.02075 -8.972749,-21.05989791 c 0,0 3.634962,-0.03952 6.355054,0.0248 L 36.357721,35.262982 Z"})})}),Object(h.jsx)("rect",{clipPath:`url(#${r})`,width:"100%",height:"100%"}),e&&Object(h.jsx)("g",{clipPath:`url(#${r})`,children:Object(h.jsx)("rect",{className:"monogram__highlight",width:"100%",height:"100%"})})]})},f=n(14),m=n(22);n(50);var p=({menuOpen:e,...t})=>{const n=s()("nav-toggle__icon",{"nav-toggle__icon--open":e});return Object(h.jsx)(m.a,{iconOnly:!0,className:"nav-toggle","aria-label":"Menu","aria-expanded":e,...t,children:Object(h.jsxs)("div",{className:"nav-toggle__inner",children:[Object(h.jsx)(f.a,{className:s()(n,"nav-toggle__icon--menu"),open:e,icon:"menu"}),Object(h.jsx)(f.a,{className:s()(n,"nav-toggle__icon--close"),open:e,icon:"close"})]})})};n(51);var j=({isMobile:e,...t})=>{const{dispatch:n,theme:r}=Object(d.a)(),a="dark"===r,c=`theme-toggle-mask-${Object(d.c)()}`;return Object(h.jsx)(m.a,{iconOnly:!0,className:s()("theme-toggle",{"theme-toggle--mobile":e}),"aria-label":"Toggle theme",onClick:()=>{n({type:"toggleTheme"})},...t,children:Object(h.jsxs)("svg",{"aria-hidden":!0,className:"theme-toggle__svg",width:"38",height:"38",viewBox:"0 0 38 38",children:[Object(h.jsx)("defs",{children:Object(h.jsxs)("mask",{id:c,children:[Object(h.jsx)("circle",{className:s()("theme-toggle__circle","theme-toggle__circle--mask",{"theme-toggle__circle--dark":a}),cx:"19",cy:"19",r:"13"}),Object(h.jsx)("circle",{className:s()("theme-toggle__mask",{"theme-toggle__mask--dark":a}),cx:"25",cy:"14",r:"9"})]})}),Object(h.jsx)("path",{className:s()("theme-toggle__path",{"theme-toggle__path--dark":a}),d:"M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"}),Object(h.jsx)("circle",{className:s()("theme-toggle__circle",{"theme-toggle__circle--dark":a}),mask:`url(#${c})`,cx:"19",cy:"19",r:"12"})]})})};const v=[{label:"About",pathname:"/portfolio/",hash:"#about"},{label:"Projects",pathname:"/portfolio/",hash:"#project-1"},{label:"Skills",pathname:"/portfolio/skills"},{label:"Contact",pathname:"/portfolio/contact"}],g=[{label:"LinkedIn",url:"https://www.linkedin.com/in/avishkar-mohite/",icon:"linkedin"},{label:"Github",url:"https://github.com/ciphercrypt",icon:"github1"},{label:"Gmail",url:"mailto:avimohite2019@gmail.com",icon:"gmail"}];var O=n(20),x=n(2),w=n(10),y=n(16);n(52);const E=()=>Object(h.jsx)("div",{className:"navbar__nav-icons",children:g.map((({label:e,url:t,icon:n})=>Object(h.jsx)("a",{className:"navbar__nav-icon-link","aria-label":e,href:t,onMouseUp:y.a,target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)(f.a,{className:"navbar__nav-icon",icon:n})},e)))});function _(e){const{menuOpen:t,dispatch:n}=Object(d.a)(),{location:c}=e,[o,l]=Object(r.useState)(),s=Object(d.l)(),u=Object(r.useRef)(),f=s.width<=x.a.mobile||s.height<=696,m=()=>{l(Math.random().toString(32).substr(2,8))},g=()=>{m(),t&&n({type:"toggleMenu"})};return Object(h.jsxs)("header",{className:"navbar",ref:u,children:[Object(h.jsx)(a.b,{className:"navbar__logo",to:{pathname:"/portfolio/",hash:"#intro",state:o},"aria-label":"Avishkar Mohite, Developer",onClick:g,onMouseUp:y.a,children:Object(h.jsx)(b,{highlight:!0})}),Object(h.jsx)(p,{onClick:()=>n({type:"toggleMenu"}),menuOpen:t}),Object(h.jsxs)("nav",{className:"navbar__nav",children:[Object(h.jsx)("div",{className:"navbar__nav-list",children:v.map((({label:e,pathname:t,hash:n})=>Object(h.jsx)(a.c,{exact:!0,className:"navbar__nav-link",activeClassName:"navbar__nav-link--active",isActive:e=>(({match:e,hash:t=""})=>!!e&&`${e.url}${t}`===`${c.pathname}${c.hash}`)({match:e,hash:n}),onClick:m,to:{pathname:t,hash:n,state:o},onMouseUp:y.a,children:e},e)))}),Object(h.jsx)(E,{})]}),Object(h.jsx)(i.a,{mountOnEnter:!0,unmountOnExit:!0,in:t,timeout:{enter:0,exit:Object(x.b)(w.b.base.durationL)},onEnter:O.b,children:e=>Object(h.jsxs)("nav",{className:`navbar__mobile-nav navbar__mobile-nav--${e}`,children:[v.map((({label:t,pathname:n,hash:r},c)=>Object(h.jsx)(a.c,{className:`navbar__mobile-nav-link navbar__mobile-nav-link--${e}`,activeClassName:"navbar__mobile-nav-link--active",onClick:g,to:{pathname:n,hash:r,state:o},onMouseUp:y.a,style:{transitionDelay:Object(x.c)(Number(Object(x.b)(w.b.base.durationS))+50*c)},children:t},t))),Object(h.jsx)(E,{}),Object(h.jsx)(j,{isMobile:!0})]})}),!f&&Object(h.jsx)(j,{})]})}var S=Object(r.memo)(_),z=n(28),M=n(23),k=n(27);const C={menuOpen:!1,theme:"light"};function N(e,t){const{type:n,value:r}=t;switch(n){case"setTheme":return{...e,theme:r};case"toggleTheme":{const t="dark"===e.theme?"light":"dark";return{...e,theme:t}}case"toggleMenu":return{...e,menuOpen:!e.menuOpen};default:throw new Error}}n(53),n(54);const H=Object(r.lazy)((()=>Promise.all([n.e(0),n.e(2),n.e(9),n.e(1),n.e(7)]).then(n.bind(null,95)))),L=Object(r.lazy)((()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,96)))),B=Object(r.lazy)((()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,97)))),I=Object(r.lazy)((()=>Promise.all([n.e(2),n.e(1)]).then(n.bind(null,93)))),[R,P]=[Object(r.createContext)(),Object(r.createContext)()],T=()=>{const e=Object(c.f)(),{pathname:t}=e;return console.log(t),Object(h.jsxs)(r.Fragment,{children:[Object(h.jsx)(u.a,{children:Object(h.jsx)("link",{rel:"canonical",href:`https://ciphercrypt.github.io/portfolio/${t}`})}),Object(h.jsx)(M.a,{showOnFocus:!0,as:"a",className:"skip-to-main",href:"#MainContent",children:"Skip to main content"}),Object(h.jsx)(S,{location:e}),Object(h.jsx)(o.a,{component:"main",className:"app",tabIndex:-1,id:"MainContent",children:Object(h.jsx)(i.a,{timeout:Object(x.b)(w.b.base.durationS),onEnter:O.b,children:t=>Object(h.jsx)(P.Provider,{value:{status:t},children:Object(h.jsx)("div",{className:s()("app__page",`app__page--${t}`),children:Object(h.jsx)(r.Suspense,{fallback:Object(h.jsx)(r.Fragment,{}),children:Object(h.jsxs)(c.c,{location:e,children:[Object(h.jsx)(c.a,{exact:!0,path:"/portfolio",component:H}),Object(h.jsx)(c.a,{path:"/portfolio/contact",component:L}),Object(h.jsx)(c.a,{path:"/portfolio/skills",component:I}),Object(h.jsx)(c.a,{component:B})]})})})})},t)})]})};t.c=()=>{const[e]=Object(d.f)("theme","light"),[t,n]=Object(r.useReducer)(N,C);return Object(r.useEffect)((()=>{k.a||(console.info("\n__  __  __\n\\ \\ \\ \\ \\\u2215\n \\ \\\u2215\\ \\\n  \\\u2215  \\\u2215\n\n\nTaking a peek huh?\n\n\n"),console.log("avi3")),window.history.scrollRestoration="manual"}),[]),Object(r.useEffect)((()=>{n({type:"setTheme",value:e})}),[e]),Object(h.jsx)(R.Provider,{value:{...t,dispatch:n},children:Object(h.jsx)(z.b,{themeId:t.theme,children:Object(h.jsx)(a.a,{children:Object(h.jsx)(T,{})})})})}},,,function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));const r=["entering","entered"],a=e=>r.includes(e),c=e=>e&&e.offsetHeight},,function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(0),a=n(4),c=n.n(a),o=n(15),i=n(13),l=n(9),s=n(2),u=n(23),d=(n(46),n(1));var h=({className:e,style:t,size:n=32,text:r="Loading...",...a})=>{const o=()=>Object(i.createPortal)(Object(d.jsx)(u.a,{className:"loader-announcement","aria-live":"assertive",children:r}),document.body);if(Object(l.h)())return Object(d.jsxs)("div",{className:"loader-text",...a,children:[r,o()]});const h=Math.round(n/3*.2),b=Math.round(n/3-2*h-1);return Object(d.jsxs)("div",{className:c()("loader",e),"aria-label":r,style:{"--size":Object(s.d)(n),"--spanSize":Object(s.d)(b),"--gapSize":Object(s.d)(h),...t},...a,children:[Object(d.jsxs)("div",{className:"loader__content",children:[Object(d.jsx)("div",{className:"loader__span"}),Object(d.jsx)("div",{className:"loader__span"}),Object(d.jsx)("div",{className:"loader__span"})]}),o()]})},b=n(14),f=n(16);n(47);const m=Object(r.forwardRef)((({className:e,as:t,secondary:n,loading:r,loadingText:a="loading",icon:i,iconEnd:l,iconHoverShift:s,iconOnly:u,children:m,rel:p,target:j,href:v,...g},O)=>{const x=null===v||void 0===v?void 0:v.includes("://"),w=x||"#"===(null===v||void 0===v?void 0:v[0])?"a":o.b,y=t||(v?w:"button");return Object(d.jsxs)(y,{className:c()("button",e,{"button--loading":r,"button--icon-only":u,"button--secondary":n}),href:v&&x?v:void 0,to:v&&!x?v:void 0,rel:p||x?"noopener noreferrer":void 0,target:j||x?"_blank":void 0,onMouseUp:f.a,ref:O,...g,children:[!!i&&Object(d.jsx)(b.a,{className:c()("button__icon",{"button__icon--start":!u,"button__icon--shift":s}),icon:i}),!!m&&Object(d.jsx)("span",{className:"button__text",children:m}),!!l&&Object(d.jsx)(b.a,{className:c()("button__icon",{"button__icon--end":!u,"button__icon--shift":s}),icon:l}),r&&Object(d.jsx)(h,{className:"button__loader",size:32,text:a})]})}))},function(e,t,n){"use strict";var r=n(4),a=n.n(r),c=(n(45),n(1));t.a=({className:e,showOnFocus:t,as:n="span",children:r,visible:o,...i})=>Object(c.jsx)(n,{className:a()("visually-hidden",e,{"visually-hidden--hidden":!o&&!t,"visually-hidden--show-on-focus":t}),...i,children:r})},,,,function(e,t,n){"use strict";const r="ReactSnap"===navigator.userAgent;t.a=r},function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return f}));var r=n(0),a=n(21),c=n(4),o=n.n(c);var i=function(){return Object(r.useContext)(f)},l=n(10),s=n(2),u=n.p+"static/media/gotham-book.9c2a0ce4.woff2",d=n.p+"static/media/gotham-medium.0ad7d622.woff2",h=n(1);const b=`\n  @font-face {\n    font-family: "Gotham";\n    font-weight: 400;\n    src: url(${u}) format("woff");\n    font-display: swap;\n  }\n\n  @font-face {\n    font-family: "Gotham";\n    font-weight: 500;\n    src: url(${d}) format("woff2");\n    font-display: swap;\n  }\n`,f=Object(r.createContext)({});function m(e){return Object.keys(e).filter((e=>"themeId"!==e)).map((t=>`--${t}: ${e[t]};`)).join("\n")}function p(e){let t={};for(const n of Object.keys(e))"themeId"!==n&&(t[`--${n}`]=e[n]);return t}const j=`\n  :root {\n    ${m(l.b.base)}\n  }\n\n  ${Object.keys(s.a).map((e=>`\n        @media (max-width: ${s.a[e]}px) {\n          :root {\n            ${m(l.b[e])}\n          }\n        }\n      `)).join("\n")}\n\n  .dark {\n    ${m(l.a.dark)}\n  }\n\n  .light {\n    ${m(l.a.light)}\n  }\n`;t.b=({themeId:e="dark",theme:t,children:n,className:c,as:s="div"})=>{const m={...l.a[e],...t},v=!i().themeId;return Object(r.useEffect)((()=>{v&&(window.localStorage.setItem("theme",JSON.stringify(e)),document.body.classList.remove("light","dark"),document.body.classList.add(e))}),[e,v]),Object(h.jsxs)(f.Provider,{value:m,children:[v&&Object(h.jsxs)(r.Fragment,{children:[Object(h.jsxs)(a.a,{children:[Object(h.jsx)("link",{rel:"preload",href:d,as:"font",crossorigin:""}),Object(h.jsx)("link",{rel:"preload",href:u,as:"font",crossorigin:""}),Object(h.jsx)("style",{children:b}),Object(h.jsx)("style",{children:j})]}),n]}),!v&&Object(h.jsx)(s,{className:o()("theme-provider",c),style:p(m),children:n})]})}},,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(13),a=n(17),c=n(1);const o=document.getElementById("root");o.hasChildNodes()?Object(r.hydrate)(Object(c.jsx)(a.c,{}),o):Object(r.render)(Object(c.jsx)(a.c,{}),o)},,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){}],[[35,4,5]]]);
//# sourceMappingURL=main.ccc603ee.chunk.js.map
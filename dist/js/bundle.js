!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2);var r,o=window.matchMedia("(min-width: 768px)");function c(e){if(e.matches){if(void 0!==r)for(var t=0;t<r.length;t++)r[t].destroy()}else r=new Swiper(".swiper-container",{slidesPerView:"auto",spaceBetween:16,pagination:{el:".swiper-pagination",clickable:!0}})}o.addEventListener("change",c),c(o);var i=document.querySelector(".burger-first"),u=document.querySelector(".burger-second"),l=document.querySelector(".burger-third"),s=document.querySelector(".open-button-first"),d=document.querySelector(".close-button-first"),a=document.querySelectorAll(".open-button-second"),f=document.querySelectorAll(".close-button-second"),b=document.querySelectorAll(".open-button-third"),p=document.querySelectorAll(".close-button-third");s.addEventListener("click",(function(){i.classList.add("burger-show")})),d.addEventListener("click",(function(){i.classList.remove("burger-show")})),a.forEach((function(e){e.addEventListener("click",(function(){u.classList.add("burger-show")}))})),f.forEach((function(e){e.addEventListener("click",(function(){u.classList.remove("burger-show")}))})),b.forEach((function(e){e.addEventListener("click",(function(){l.classList.add("burger-show")}))})),p.forEach((function(e){e.addEventListener("click",(function(){l.classList.remove("burger-show")}))}))},function(e,t,n){}]);
//# sourceMappingURL=bundle.js.map
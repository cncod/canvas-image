!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.cncoder=t():e.cncoder=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);var o={};function r(e,t){if("undefined"==typeof document)return void console.log("[cn.img_composition] 当前环境不支持: 找不到document");e.forEach(e=>{e.width&&e.height?(e.x<0||e.y<0)&&console.log("[cn.img_composition] x和y不能小于0"):console.log("[cn.img_composition] 请为图片设置宽和高")});let n=document.createElement("canvas");n.width=2048,n.height=2048;let o=n.getContext("2d"),r=0,i=0,c=0,u=0;!function e(t,n){if(t.length){let f=t.shift(),d=new Image(f.width,f.height);d.onload=function(){return f.x<r&&(r=f.x),f.y<i&&(i=f.y),f.x+f.width>c&&(c=f.x+f.width),f.y+f.height>u&&(u=f.y+f.height),o.drawImage(d,f.x,f.y,f.width,f.height),e(t,n)},d.src=f.src}else n()}(e,(function(){let e=document.createElement("canvas");e.width=c-r,e.height=u-i;let n=o.getImageData(r,i,e.width,e.height);e.getContext("2d").putImageData(n,0,0),t(e.toDataURL("image/jpeg",1))}))}n.r(o),n.d(o,"compose",(function(){return r})),n.d(t,"bitmap",(function(){return o}))}])}));
//# sourceMappingURL=cncoder.js.map
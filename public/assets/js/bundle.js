!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class r{init(){return this.createHeader()}createHeader(){let e=document.createElement("header"),t=document.createElement("div"),n=this.menu(),r=this.logo();return e.setAttribute("id","header"),t.setAttribute("class","container"),t.appendChild(r),t.appendChild(n),e.appendChild(t),e}menu(){let e=new Map([["OUR SERVICES","services"],["OUR WORKS","works"],["READ OUR MINDS","minds"],["WHO ARE WE","profile"],["LET'S TALK","contact"]]),t=document.createElement("ul");t.setAttribute("class","navi");for(let[n,r]of e.entries()){let e=document.createElement("li"),i=document.createElement("a"),a=document.createElement("span");a.appendChild(document.createTextNode(n)),i.setAttribute("href",r),i.appendChild(a),e.appendChild(i),t.appendChild(e)}return t}logo(){let e=document.createElement("h1"),t=document.createElement("a"),n=document.createElement("img");return n.setAttribute("src","assets/img/logo.png"),t.appendChild(n),e.appendChild(t),e}}class i{init(){return this.createMainVisual()}createMainVisual(){let e=document.createElement("div");return e.setAttribute("id","mainvisual"),e.innerHTML='\n\t\t\t<div class="container">\n\t\t\t\t<div class="image-box">\n\t\t\t\t\t<div class="image-desc">\n\t\t\t\t\t\t<div class="title">So begins a new age<br>of knowlegde</div>\n\t\t\t\t\t\t<div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae nulla quis<br>turpis cursus pharetra. Fusce blandit nec tortor sit amet ullamcorper.</div>\n\t\t\t\t\t\t<div class="button"><a href="">PROJECTS</a></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t',e}}class a{init(){const e=document.getElementById("app"),t=new r,n=new i;try{e.appendChild(t.init()),e.appendChild(n.init())}catch(e){console.log(e.message)}}}window.addEventListener("DOMContentLoaded",()=>{try{(new a).init()}catch(e){console.log(e.message)}})}]);
!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=r.parcelRequire7f7e;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},r.parcelRequire7f7e=a),a.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return r.default(e)||n.default(e)||u.default(e)||o.default()};var r=i(a("kMC0W")),n=i(a("7AJDX")),o=i(a("8CtQK")),u=i(a("auk6i"));function i(e){return e&&e.__esModule?e:{default:e}}})),a.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("wrd00",(function(t,r){e(t.exports,"renderForm",(function(){return n}));var n=function(){var e=document.createElement("form");e.classList.add("form-buynow");var t=document.createElement("input"),r=document.createElement("input"),n=document.createElement("textarea"),o=document.createElement("button");return t.classList.add("input-buynow"),t.setAttribute("placeholder","Name"),t.setAttribute("name","name"),t.setAttribute("pattern","^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"),t.setAttribute("required",""),r.classList.add("input-buynow"),r.setAttribute("placeholder","Phone"),r.setAttribute("name","phone"),r.setAttribute("required",""),n.setAttribute("class","input-buynow input-comment"),n.setAttribute("rows","3"),n.setAttribute("placeholder","Comment"),n.setAttribute("name","comment"),n.setAttribute("required",""),o.setAttribute("class","btn-buynow btn-solid"),o.innerText="Submit",e.append(t,r,n,o),e}})),a.register("40wTY",(function(t,r){e(t.exports,"orders",(function(){return n}));var n=[]})),a.register("25jle",(function(t,r){e(t.exports,"renderMessage",(function(){return n}));var n=function(){var e=document.createElement("div"),t=document.createElement("p"),r=document.createElement("p");return e.setAttribute("class","finish-order"),t.setAttribute("class","text-finish"),r.setAttribute("class","text-finish"),t.innerText="Thank you!",r.innerText="Your order has been received!",e.append(t,r),e}}));var u=a("8nrFW"),i={checked:[],array:[{title:"Ice Cream",img:"https://i.ibb.co/DfZrxk5/kelsey-curtis-G5-Zenft-PPOA-unsplash-2.jpg",color:"#AEC6A5",className:"grenn-container",checked:!1},{title:"Ice Coffee",img:"https://i.ibb.co/s95HTLS/pariwat-pannium-0-qbe-F-0zn8-unsplash-1.jpg",color:"#EFD478",className:"yellow-container",checked:!1},{title:"Milkshake",img:"https://i.ibb.co/Zz6yLTn/victor-rutka-4-Fujjkc-I40g-unsplash-1.jpg",color:"#D6936D",className:"orange-container",checked:!1}]},s=a("wrd00"),c=a("40wTY"),d=function(e){var t=e.title,r=e.img,n=e.color,o=e.className,a=e.checked,u=document.createElement("li");u.classList.add("modal-buynow__item"),u.classList.add(o);var s=document.createElement("img");s.setAttribute("src",r),s.classList.add("modal-buynow__item--img");var c=document.createElement("div");return c.classList.add("modal-buynow__item--background"),c.style.background=n,u.innerText=t,u.style.border="2px solid".concat(n),u.append(s,c),u.addEventListener("click",(function(){(a=!a)?(u.style.backgroundColor=n,i.checked.push(t)):(u.style.backgroundColor="",i.checked=i.checked.filter((function(e){return e!==t})))})),u},l=a("25jle"),m={buttonHero:document.querySelector(".offer__btn"),button:document.querySelector(".header-btn"),header:document.querySelector("header"),body:document.querySelector("body")},f=function(){!function(){var e,r=document.createElement("div");r.classList.add("backdrop");var n=document.createElement("div");n.setAttribute("class","buynow-modal"),n.classList.add("modal");var o=document.createElement("div");o.classList.add("modal-block");var a=document.createElement("h2");a.classList.add("modal-buynow__title"),a.innerText="Buy Now";var f=document.createElement("button");f.setAttribute("class","btn-close fa-solid fa-xmark");var p=document.createElement("ul");p.classList.add("modal-buynow__items");var b=(0,s.renderForm)();(e=p).append.apply(e,t(u)(i.array.map(d))),o.append(a,f,p,b),n.append(o),r.append(n),m.header.append(r),m.body.classList.add("disabled-scroll");var y=function(){r.remove(),m.body.classList.remove("disabled-scroll")};document.addEventListener("keydown",(function(e){"Escape"===e.key&&y()})),r.addEventListener("click",(function(e){e.target===r&&y()})),b.addEventListener("submit",(function(e){e.preventDefault();var t={name:b.name.value,phone:b.phone.value,comment:b.comment.value,productName:i.checked};c.orders.push(t),n.replaceChildren(),n.append(f),n.append((0,l.renderMessage)()),n.style.height="200px"})),f.addEventListener("click",(function(){return y()}))}()};m.button.addEventListener("click",f),m.buttonHero.addEventListener("click",f)}();
//# sourceMappingURL=index.73cec485.js.map
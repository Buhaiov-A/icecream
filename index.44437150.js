!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire7f7e;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequire7f7e=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return i.default(e)||l.default(e)||d.default(e)||s.default()};var i=u(o("kMC0W")),l=u(o("7AJDX")),s=u(o("8CtQK")),d=u(o("auk6i"));function u(e){return e&&e.__esModule?e:{default:e}}var c=[{name:"Hanna Lytvynenko",position:"Team Lead",img:"https://i.ibb.co/HqK94pM/IMG-6900-1-kkok.jpg",linkedin:"https://i.ibb.co/HqK94pM/IMG-6900-1-kkok.jpg"},{name:"Oleksandr Kotliar",position:"Scrum Master",img:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",linkedin:"https://www.linkedin.com/in/kotliar-oleksandr/"},{name:"Olena Kharchenko",position:"Developer",img:"https://i.ibb.co/2FJMWGP/photo-2074425138059782065-c.jpg",linkedin:"https://www.linkedin.com/in/olena-kharchenko-fe-dev/"},{name:"Artem Buhaiov",position:"Developer",img:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",linkedin:"https://www.linkedin.com/in/artem-buhaiov/"}],m={botton:document.querySelector(".btn-copyright"),footer:document.querySelector("footer"),body:document.querySelector("body")},p=function(e){var t=e.name,n=e.position,r=e.img,o=e.linkedin,a=document.createElement("li");a.classList.add("team-list__item");var i=document.createElement("img");i.setAttribute("src",r),i.classList.add("team-list__img");var l=document.createElement("a");l.setAttribute("href",o),l.setAttribute("class","btn-linkedin fa-brands fa-linkedin"),l.setAttribute("target","_blank"),l.setAttribute("rel","noreferrer noopener");var s=document.createElement("div"),d=document.createElement("div");d.classList.add("team-list__info");var u=document.createElement("h3");u.innerText=t,u.classList.add("team-list__name");var c=document.createElement("p");return c.innerText=n,s.append(u,c),d.append(l,s),a.append(i,d),a};m.botton.addEventListener("click",(function(){!function(){var t,n=document.createElement("div");n.classList.add("backdrop");var r=document.createElement("div");r.setAttribute("class","modal team-modal");var o=document.createElement("div");o.setAttribute("class","modal-block");var i=document.createElement("h2");i.innerText="Developers team",i.setAttribute("class","title modal__title team-modal__title");var l=document.createElement("button");l.setAttribute("class","btn-close fa-solid fa-xmark");var s=document.createElement("ul");s.classList.add("team-list"),m.body.classList.add("disabled-scroll"),(t=s).append.apply(t,e(a)(c.map(p))),o.append(i,l,s),r.append(o),n.append(r);var d=function(){n.remove(),m.body.classList.remove("disabled-scroll")};document.addEventListener("keydown",(function(e){"Escape"===e.key&&d()})),n.addEventListener("click",(function(e){e.target===n&&d()})),l.addEventListener("click",(function(){return d()})),m.footer.append(n)}()}))}();
//# sourceMappingURL=index.44437150.js.map

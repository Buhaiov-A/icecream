var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire7f7e;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequire7f7e=o),o.register("229ix",(function(e,t){var n,o,r,s;n=e.exports,o="renderForm",r=function(){return c},Object.defineProperty(n,o,{get:r,set:s,enumerable:!0,configurable:!0});const c=()=>{const e=document.createElement("form");e.classList.add("form-buynow");const t=document.createElement("input"),n=document.createElement("input"),o=document.createElement("textarea"),r=document.createElement("button");return t.classList.add("input-buynow"),t.setAttribute("placeholder","Name"),n.classList.add("input-buynow"),n.setAttribute("placeholder","Phone"),o.setAttribute("class","input-buynow input-comment"),o.setAttribute("rows","3"),o.setAttribute("placeholder","Comment"),r.setAttribute("class","btn-buynow btn-solid"),r.innerText="Submit",e.append(t,n,o,r),e}}));const r=[{title:"Ice Cream",img:"https://i.ibb.co/DfZrxk5/kelsey-curtis-G5-Zenft-PPOA-unsplash-2.jpg",color:"#AEC6A5"},{title:"Ice Coffee",img:"https://i.ibb.co/s95HTLS/pariwat-pannium-0-qbe-F-0zn8-unsplash-1.jpg",color:"#EFD478"},{title:"Milkshake",img:"https://i.ibb.co/Zz6yLTn/victor-rutka-4-Fujjkc-I40g-unsplash-1.jpg",color:"#D6936D"}];var s=o("229ix");const c={button:document.querySelector(".header-btn"),header:document.querySelector("header"),body:document.querySelector("body")},a=e=>{const{title:t,img:n,color:o}=e,r=document.createElement("li");r.classList.add("modal-buynow__item");const s=document.createElement("img");s.setAttribute("src",n),s.classList.add("modal-buynow__item--img");const c=document.createElement("div");c.classList.add("modal-buynow__item--background"),c.style.background=o;const a=document.createElement("div");return a.classList.add("modal-buynow__item--container"),a.innerText=t,a.style.border=`2px solid ${o}`,r.append(s,c,a),r};c.button.addEventListener("click",(()=>{(()=>{const e=document.createElement("div");e.classList.add("backdrop");const t=document.createElement("div");t.classList.add("buynow-modal"),t.classList.add("modal");const n=document.createElement("div");n.classList.add("modal-block");const o=document.createElement("h2");o.classList.add("modal-buynow__title"),o.innerText="Buy Now";const d=document.createElement("button");d.setAttribute("class","btn-close fa-solid fa-xmark");const i=document.createElement("ul");i.classList.add("modal-buynow__items");const l=(0,s.renderForm)();i.append(...r.map(a)),n.append(o,d,i,l),t.append(n),e.append(t),c.header.append(e);const u=()=>{e.remove()};d.addEventListener("click",(()=>u()))})()}));
//# sourceMappingURL=index.4b2b478d.js.map

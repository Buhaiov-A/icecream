!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire7f7e;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire7f7e=r);var a=[],i=function(){var e=document.createElement("form");e.setAttribute("class","form-buynow franchise-form");var t=document.createElement("input");t.classList.add("input-buynow"),t.setAttribute("placeholder","Name"),t.setAttribute("required",""),t.setAttribute("name","name"),t.setAttribute("pattern","^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$");var n=document.createElement("input");n.classList.add("input-buynow"),n.setAttribute("placeholder","Phone"),n.setAttribute("required",""),n.setAttribute("name","phone");var r=document.createElement("input");r.classList.add("input-buynow"),r.setAttribute("placeholder","Email"),r.setAttribute("required",""),r.setAttribute("name","email"),r.setAttribute("type","email");var a=document.createElement("textarea");a.setAttribute("class","input-buynow input-comment"),a.setAttribute("rows","3"),a.setAttribute("placeholder","Comment"),a.setAttribute("required",""),a.setAttribute("name","comment"),a.setAttribute("type","text");var i=document.createElement("button");return i.setAttribute("class","btn-buynow btn-solid"),i.innerText="Submit",e.append(t,n,r,a,i),e},o=r("25jle"),s={body:document.querySelector("body"),button:document.querySelector("#franchise-btn"),section:document.querySelector(".contacts")},u=function(){var e=document.createElement("div");e.setAttribute("class","backdrop");var t=document.createElement("div");t.setAttribute("class","modal");var n=document.createElement("div");n.setAttribute("class","modal-block");var r=document.createElement("button");r.setAttribute("class","btn-close fa-solid fa-xmark");var u=document.createElement("h2");u.setAttribute("class","modal__title title modal-title__franchise"),u.innerText="Thank you for your interest in owning an Ice Cream shop";var c=document.createElement("p");c.setAttribute("class","franchise__text"),c.innerText="Due to the overwhelming volume of franchise requests we are not accepting new franchisee applications at this time. Once the application process resumes, we will contact you for further information. Please fill out the contact information below and we will reach out for additional information. We appreciate your patience.";var l=function(){e.remove(),s.body.classList.remove("disabled-scroll")};r.addEventListener("click",l),document.addEventListener("keydown",(function(e){"Escape"===e.key&&l()})),e.addEventListener("click",(function(t){t.target===e&&l()}));var d=i();n.append(r,u,c,d),t.append(n),e.append(t),d.addEventListener("submit",(function(e){e.preventDefault();var t={name:d.name.value,phone:d.phone.value,email:d.email.value,comment:d.comment.value};a.push(t),n.replaceChildren(),n.append(r,(0,o.renderMessage)()),n.style.height="200px"})),s.section.append(e)};s.button.addEventListener("click",(function(){u(),s.body.classList.add("disabled-scroll")}))}();
//# sourceMappingURL=index.3298ca5c.js.map
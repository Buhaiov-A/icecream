!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},l={},n=t.parcelRequire7f7e;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in l){var t=l[e];delete l[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){l[e]=t},t.parcelRequire7f7e=n);var r=n("8nrFW"),i=[{name:"Ice cream",src:"https://i.ibb.co/DfZrxk5/kelsey-curtis-G5-Zenft-PPOA-unsplash-2.jpg",backgroundColor:"#AEC6A5",color:"green",box_shadow:"0px 5.26027px 19.726px rgba(174, 198, 165, 1)",arr:[{title:"kcal",value:"320"},{title:"Protein",value:"4g"},{title:"Fats",value:"8,2g"},{title:"Carbs",value:"40,4g"}],arr2:[{title:"Milk",value:"100ml"},{title:"belgian chokolade",value:"20g"},{title:"Cream",value:"150ml"},{title:"Cocoa powder",value:"30g"},{title:"Sugar",value:"40g"},{title:"Vanilla sugar",value:"10g"}]},{name:"Ice coffe",src:"https://i.ibb.co/s95HTLS/pariwat-pannium-0-qbe-F-0zn8-unsplash-1.jpg",backgroundColor:"#EFD478",color:"yellow",box_shadow:"0px 5.26027px 19.726px rgba(239, 212, 120, 1)",arr:[{title:"kcal",value:"280"},{title:"Protein",value:"5g"},{title:"Fats",value:"12g"},{title:"Carbs",value:"38,4g"}],arr2:[{title:"Milk",value:"70ml"},{title:"Coffe",value:"150ml"},{title:"Cream",value:"20ml"},{title:"Cocoa powder",value:"15g"},{title:"Sugar",value:"20g"},{title:"Vanilla sugar",value:"5g"}]},{name:"Milkschake",src:"https://i.ibb.co/Zz6yLTn/victor-rutka-4-Fujjkc-I40g-unsplash-1.jpg",backgroundColor:"#D6936D",color:"orange",box_shadow:"0px 5.26027px 19.726px rgba(214, 147, 109, 1)",arr:[{title:"kcal",value:"350"},{title:"Protein",value:"8g"},{title:"Fats",value:"15g"},{title:"Carbs",value:"44,4g"}],arr2:[{title:"Milk",value:"250ml"},{title:"belgian chokolade",value:"40g"},{title:"Cream",value:"100ml"},{title:"Cocoa powder",value:"15g"},{title:"Sugar",value:"30g"},{title:"Vanilla sugar",value:"20g"}]}],o=function(e){var t=e.title,a=e.value,l=document.createElement("li");l.classList.add("ulNutrVal__item");var n=document.createElement("div");n.classList.add("ulNutrVal__title"),n.innerText=t;var r=document.createElement("div");return r.classList.add("ulNutrVal__description"),r.innerText=a,l.append(r,n),l},d=function(e){var t=e.title,a=e.value,l=document.createElement("li");l.classList.add("ulIngrList__item");var n=document.createElement("div");n.classList.add("ulIngrList__title"),n.innerText=t;var r=document.createElement("div");return r.classList.add("ulIngrList__description"),r.innerText=a,l.append(n,r),l},c=n("wrd00"),u={greenBtn:document.getElementById("button_green"),yellowBtn:document.getElementById("button_yellow"),orangeBtn:document.getElementById("button_orange"),body:document.querySelector("body")},s=function(t,a){var l,n=document.createElement("ul");return n.classList.add("ulNutrVal"),n.classList.add(a),(l=n).append.apply(l,e(r)(t.map((function(e){return o(e)})))),n},m=function(t){var a,l=document.createElement("ul");return l.classList.add("ulIngrList"),(a=l).append.apply(a,e(r)(t.map((function(e){return d(e)})))),l},v=function(e){var t=e.name,a=e.src,l=e.arr,n=e.arr2,r=e.backgroundColor,i=e.color,o=e.box_shadow,d=document.createElement("div");d.classList.add("backdrop");var v=document.createElement("div");v.classList.add("modal");var p=document.createElement("div");p.classList.add("modal-block");var g=document.createElement("button");g.setAttribute("class","btn-close fa-solid fa-xmark");var b=document.createElement("h2");b.classList.add("modal__title"),b.innerText=t;var f=document.createElement("div");f.classList.add("picture_container");var L=document.createElement("img");L.classList.add("modal_picture"),L.setAttribute("src",a);var E=document.createElement("div");E.classList.add("modalLayer"),E.style.background=r,E.style.boxShadow=o,f.append(L,E);var k=document.createElement("div"),y=document.createElement("h3");y.classList.add("modal_description"),y.innerText="Ingredients",k.append(y,m(n)),p.append(b,g,f,s(l,i),k,(0,c.renderForm)()),v.append(p),d.append(v),u.body.classList.add("disabled-scroll");var _=function(){d.remove(),u.body.classList.remove("disabled-scroll")};return document.addEventListener("keydown",(function(e){"Escape"===e.key&&_()})),d.addEventListener("click",(function(e){e.target===d&&_()})),g.addEventListener("click",(function(){return _()})),d};u.greenBtn.addEventListener("click",(function(){u.body.append(v(i[0]))})),u.yellowBtn.addEventListener("click",(function(){u.body.append(v(i[1]))})),u.orangeBtn.addEventListener("click",(function(){u.body.append(v(i[2]))}))}();
//# sourceMappingURL=index.231de39d.js.map

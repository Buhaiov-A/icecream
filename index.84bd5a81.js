!function(){var e,t={dates:[{img:"https://i.ibb.co/tpxdXHz/user1-X1.jpg",name:"Emily",description:"I love visiting your cafe. You prepare the most delicious ice cream in Los Angeles! In addition, you have beautiful serving, cozy atmosphere and polite staff.",address:"Emily, Los Angeles"},{img:"https://i.ibb.co/1MsSHLy/user2-X1.jpg",name:"Bryan",description:"Every day we come to you with friends after classes in college. We love your ice cream and casual atmosphere!",address:"Bryan, New-York"},{img:"https://i.ibb.co/zRWFW9Y/user3-X1.jpg",name:"Diana",description:"Ice cream is my passion! I love your chocolate hazelnut ice cream! And I really like the excellent service - always served politely and quickly!",address:"Diana, Chicago"}],current:0},r={slider:document.querySelector(".slider")},s=function(){t.current>0&&(t.current=0,c())},a=function(){t.current<t.dates.length-2?(t.current+=1,c()):(t.current=2,c())},n=function(){clearTimeout(e),t.current=Math.floor((t.dates.length-1)/2),c()},i=function(){r.slider.replaceChildren(),r.slider.append(function(e){var r=t.dates[e],i=r.img,c=r.name,d=r.description,l=r.address,o=document.createElement("div");o.classList.add("slider__block");var u=document.createElement("div");u.classList.add("slider__description");var m=document.createElement("img");m.setAttribute("src",i),m.classList.add("slider__img"),m.setAttribute("alt",c);var v=document.createElement("p");v.classList.add("slider__info"),v.innerText=d;var b=document.createElement("address");b.innerText=l,b.classList.add("slider__address"),u.append(m,v,b);var p=document.createElement("div");p.classList.add("slider__btns");var L=document.createElement("button");L.setAttribute("class","slider-btn left");var g=document.createElement("button");g.setAttribute("class","slider-btn center");var h=document.createElement("button");return h.setAttribute("class","slider-btn right"),p.append(L,g,h),o.append(u,p),0===t.current?(L.classList.add("active-btn"),h.classList.remove("active-btn"),g.classList.remove("active-btn")):t.current===t.dates.length-1?(h.classList.add("active-btn"),g.classList.remove("active-btn"),L.classList.remove("active-btn")):(g.classList.add("active-btn"),L.classList.remove("active-btn"),h.classList.remove("active-btn")),L.addEventListener("click",s),h.addEventListener("click",a),g.addEventListener("click",n),o}(t.current))},c=function(){clearInterval(e),i(),t.current+=1,e=setInterval((function(){t.current===t.dates.length?(t.current=0,clearInterval(e),c()):(i(),t.current+=1)}),8e3)};c()}();
//# sourceMappingURL=index.84bd5a81.js.map

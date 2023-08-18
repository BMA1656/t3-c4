(()=>{"use strict";function e(e){switch(e){case"moss":return"moss-pole";case"pebbles":return"pebbles";case"mini":return"mini-plants";default:return""}}const t=class{constructor(){this.subscribers=[]}subscribe(e){this.subscribers.push(e)}publish(e){this.subscribers.forEach((t=>t(e)))}},n=new t,o=new t,s=new t,l=localStorage.getItem("localPlant"),c=JSON.parse(l);function a(e){console.log("material",e),c.podUrl="",c.material=e}function i(e){console.log("deco",e),c.style=e}function r(e){console.log("color",e),c.color=e}const d=localStorage.getItem("localPlant"),m=JSON.parse(d),g=new t;function u(e){console.log("rendersoil",e),document.getElementById("soilImg").setAttribute=`../img/soil-${e}.png`,m.composting=e}const p=localStorage.getItem("localPlant"),h=JSON.parse(p),b=new t;function E(e){console.log("renderplantName",e),h.name=e}const y=localStorage.getItem("localPlant"),f=JSON.parse(y),v=new t;function I(e){console.log("renderExtrasChange",e),f.elements=e}document.querySelectorAll(".input-material").forEach((e=>{e.addEventListener("change",(e=>{const t=e.currentTarget.dataset.id;n.publish(t)}))})),document.querySelectorAll(".input-decoration").forEach((e=>{e.addEventListener("change",(e=>{const t=e.currentTarget.dataset.id;o.publish(t)}))})),document.querySelectorAll(".input-color").forEach((e=>{e.addEventListener("change",(e=>{const t=e.currentTarget.dataset.id;s.publish(t)}))})),n.subscribe(a),o.subscribe(i),s.subscribe(r),document.querySelectorAll(".input-soil").forEach((e=>{e.addEventListener("change",(e=>{const t=e.currentTarget.dataset.id;g.publish(t),console.log("soil",t)}))})),g.subscribe(u),document.getElementById("dropdown").addEventListener("change",(e=>{const t=e.target.value;console.log("plantName",t),b.publish(t)})),b.subscribe(E),v.subscribe(I),document.querySelectorAll(".input-extra").forEach((e=>{e.addEventListener("change",(e=>{const t=e.currentTarget.dataset.id;v.publish(t),console.log("extras",t)}))}));const S=document.getElementById("decorationOptions"),C=document.getElementById("decorationToggle"),T=document.getElementById("toggleTextDecoration"),$=document.getElementById("colorToggle"),x=document.getElementById("colorOptions"),L=document.getElementById("toggleTextColor");C.addEventListener("change",(function(){C.checked?(S.style.display="block",T.textContent="Yes"):(S.style.display="none",T.textContent="No")})),$.addEventListener("change",(function(){$.checked?(x.style.display="block",L.textContent="Yes"):(x.style.display="none",L.textContent="No")}));const B=localStorage.getItem("localPlant"),N=JSON.parse(B),P=document.getElementById("customizationForm"),w={...N};P.addEventListener("change",(()=>{console.log("Selected Plant Data:",w),function(t){const n=JSON.stringify(t);localStorage.setItem("localPlant",n);const o=document.getElementById("card-container");o.innerHTML="";const{name:s,color:l,composting:c,style:a,elements:i,platUrl:r,podUrl:d,material:m}=t;let g=`\n    <div class="card">\n      <p>The perfect plant for you <span class="name-plant">${s}</span></p>\n      <div id="imgPlantsContainer" class="img-container">\n        <img class="image plantImage" src="${r}" alt="">\n        <img class="image potImage" src="${d}" alt="">\n        <img id="soilImg" class="image soilImage" src="img/soil-${c}.png" alt="">\n      </div>\n      <div class="description">\n      <div class="infoName"><h3>Name: </h3><p class="descripCard">${s}</p></div>\n      <div class="infoSoil"><h3>Soil: </h3><p class="descripCard">${c}</p></div>\n      <div class="infoSoil"><h3>Color: </h3><p class="descripCard">${a}</p></div>\n        <div class="infoPot"><h3>Pot: </h3><p class="descripCard">${m}</p></div>\n        <div id="elements" class="infoExtras"><h3>Extras: </h3><p class="descripCard moreElements">${i}</p></div>\n      </div>\n      <a class="customize-btn" href="customize.html" id="Customice">Customice</a>\n    </div>\n    `;o.innerHTML=g,function(t){const n=document.getElementById("imgPlantsContainer");if(t&&t.length>0)Array.isArray(t)?t.forEach((t=>{n.innerHTML+=`<img class="image extra${t}" src="img/${e(t)}.png" alt="">`})):n.innerHTML+=`<img class="image extra${t}" src="img/${e(t)}.png" alt="">`;else{const e=document.getElementById("elements");e&&e.remove()}}(i)}(w)}))})();

(()=>{"use strict";const e=class{constructor(){this.subscribers=[]}subscribe(e){this.subscribers.push(e)}publish(e){this.subscribers.forEach((t=>t(e)))}},t=new e,n=new e,s=new e;function c(){const e=localStorage.getItem("localPlant");return JSON.parse(e)}function o(e){const t=JSON.stringify(e);localStorage.setItem("localPlant",t)}function i(e){const t=c();t.material=e,o(t)}function a(e){const t=c();t.style=e,o(t)}function l(e){const t=c();t.color=e,o(t)}const r=new e;function d(e){const t=c();t.composting=e,o(t)}const u=new e;function m(e){const t=c();t.name=e,o(t)}const g=new e;function p(e){const t=c();null===e?delete t.elements:t.elements=e,o(t)}function h(e){const t=document.getElementById("card-container");t.innerHTML="";const{name:n,composting:s,color:c,style:o,elements:i,material:a}=e;let l=`\n      <div class="card">\n        <p class="name-plant">Preview </p>\n        <div id="imgPlantsContainer" class="img-container">\n          <img class="image plantImage" src="Assets/plant-${f(n)}.png" alt="">\n          <img class="image potImage" src="Assets/pots/${f(`${a} ${o}`)}-${c}.png" alt="">\n          <img class="image soilImage" src="Assets/soil-${s}.png" alt="">\n        </div>\n        <div class="description">\n        <div class="infoName"><h3>Name: </h3><p class="descripCard">${n}</p></div>\n        <div class="infoSoil"><h3>Soil: </h3><p class="descripCard">${s}</p></div>\n        <div class="infoPot"><h3>Pot: </h3><p class="descripCard">${o} pod</p></div>\n        <div class="infoSoil"><h3>Color: </h3><p class="descripCard">${c}</p></div>\n        <div id="elements" class="infoExtras"><h3>Extras: </h3><p class="descripCard moreElements">${i}</p></div>\n        </div>\n        <a class="customize-btn" href="customize.html" id="Customice">See stock</a>\n      </div>\n      `;t.innerHTML=l,function(e){const t=document.getElementById("imgPlantsContainer");if(e&&e.length>0)Array.isArray(e)?e.forEach((e=>{t.innerHTML+=`<img class="image extra${e}" src="Assets/${b(e)}.png" alt="">`})):t.innerHTML+=`<img class="image extra${e}" src="Assets/${b(e)}.png" alt="">`;else{const e=document.getElementById("elements");e&&e.remove()}}(i)}function b(e){switch(e){case"moss":return"moss-pole";case"pebbles":return"pebbles";case"mini":return"mini-plants";default:return""}}function f(e){return e.replace(/ /g,"-").toLowerCase()}const E=document.getElementById("decorationOptions"),v=document.getElementById("decorationToggle"),y=document.getElementById("toggleTextDecoration"),I=document.getElementById("colorToggle"),C=document.getElementById("colorOptions"),L=document.getElementById("toggleTextColor");v.addEventListener("change",(function(){v.checked?(E.style.display="block",y.textContent="Yes"):(E.style.display="none",y.textContent="No")})),I.addEventListener("change",(function(){if(I.checked)C.style.display="block",L.textContent="Yes";else{C.style.display="none",L.textContent="No";const e=c();e.color="unpainted",o(e)}})),document.getElementById("customizationForm").addEventListener("change",(()=>{const e=localStorage.getItem("localPlant");h(JSON.parse(e))})),document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".input-material").forEach((e=>{e.addEventListener("change",(e=>{const n=e.currentTarget.dataset.id;t.publish(n)}))})),document.querySelectorAll(".input-decoration").forEach((e=>{e.addEventListener("change",(e=>{const t=e.currentTarget.dataset.id;n.publish(t)}))})),document.querySelectorAll(".input-color").forEach((e=>{e.addEventListener("change",(e=>{const t=e.currentTarget.dataset.id;s.publish(t)}))})),t.subscribe(i),n.subscribe(a),s.subscribe(l),document.querySelectorAll(".input-soil").forEach((e=>{e.addEventListener("change",(e=>{const t=e.currentTarget.dataset.id;r.publish(t)}))})),r.subscribe(d),document.getElementById("dropdown").addEventListener("change",(e=>{const t=e.target.value;u.publish(t)})),u.subscribe(m),g.subscribe(p),(()=>{const e=document.querySelectorAll(".input-extra"),t=[];e.forEach((e=>{e.addEventListener("change",(n=>{const s=n.currentTarget.dataset.id;if(e.checked)t.push(s);else{const e=t.indexOf(s);-1!==e&&t.splice(e,1)}let c=null;1===t.length?c=t[0]:t.length>1&&(c=t),g.publish(c)}))}))})(),h(c())}))})();
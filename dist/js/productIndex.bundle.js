(()=>{"use strict";function e(e){switch(e){case"moss":return"moss-pole";case"pebbles":return"pebbles";case"mini":return"mini-plants";default:return""}}function s(e){return e.replace(/ /g,"-").toLowerCase()}document.addEventListener("DOMContentLoaded",(()=>{!function(n){const t=JSON.stringify(n);localStorage.setItem("localPlant",t);const a=document.getElementById("card-container");a.innerHTML="";const{name:i,composting:l,color:c,style:r,elements:o,material:d}=n;let m=`\n    <div class="card">\n      <p>The perfect plant for you <span class="name-plant">${i}</span></p>\n      <div id="imgPlantsContainer" class="img-container">\n        <img class="image plantImage" src="Assets/plant-${s(i)}.png" alt="">\n        <img class="image potImage" src="Assets/pots/${s(`${d} ${r}`)}-${c}.png" alt="">\n        <img class="image soilImage" src="Assets/soil-${l}.png" alt="">\n      </div>\n      <div class="description">\n      <div class="infoName"><h3>Name: </h3><p class="descripCard">${i}</p></div>\n      <div class="infoSoil"><h3>Soil: </h3><p class="descripCard">${l}</p></div>\n      <div class="infoSoil"><h3>Color: </h3><p class="descripCard">${d}</p></div>\n        <div class="infoPot"><h3>Pot: </h3><p class="descripCard">${r}</p></div>\n        <div id="elements" class="infoExtras"><h3>Extras: </h3><p class="descripCard moreElements">${o}</p></div>\n      </div>\n      \n    </div>\n    `;a.innerHTML=m,function(s){const n=document.getElementById("imgPlantsContainer");if(s&&s.length>0)Array.isArray(s)?s.forEach((s=>{n.innerHTML+=`<img class="image extra${s}" src="Assets/${e(s)}.png" alt="">`})):n.innerHTML+=`<img class="image extra${s}" src="Assets/${e(s)}.png" alt="">`;else{const e=document.getElementById("elements");e&&e.remove()}}(o),document.getElementById("objectConteiner").style.display="block"}(function(){const e=localStorage.getItem("localPlant");return JSON.parse(e)}())}))})();
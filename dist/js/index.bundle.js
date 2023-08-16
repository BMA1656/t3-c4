(()=>{"use strict";function e(e){switch(e){case"moss":return"moss-pole";case"pebbles":return"pebbles";case"mini":return"mini-plants";default:return""}}class t{constructor(e,t,i,n){this.type=e,this.light=t,this.overwaters=i,this.elements=n}addComposting(e){this.composting=e}addMaterial(e){this.material=e}addStyle(e){this.style=e}addName(e){this.name=e}addPlantUrl(e){this.url=e}addPodUrl(e){this.podUrl=e}makeCard(){const t={name:this.name,type:this.type,color:this.style,light:this.light,overwaters:this.overwaters,composting:this.composting,platUrl:this.url,material:this.material,style:this.style,elements:this.elements,podUrl:this.podUrl};console.log(t),function(t){const i=JSON.stringify(t);localStorage.setItem("localPlant",i);const n=document.getElementById("card-container");n.innerHTML="";const{name:a,color:l,composting:s,style:o,elements:c,platUrl:r,podUrl:d,material:m}=t;let g=`\n    <div class="card">\n      <p>The perfect plant for you <span class="name-plant">${a}</span></p>\n      <div id="imgPlantsContainer" class="img-container">\n        <img class="image plantImage" src="${r}" alt="">\n        <img class="image potImage" src="${d}" alt="">\n        <img class="image soilImage" src="img/soil-${s}.png" alt="">\n      </div>\n      <div class="description">\n      <div class="infoName"><h3>Name: </h3><p class="descripCard">${a}</p></div>\n      <div class="infoSoil"><h3>Soil: </h3><p class="descripCard">${s}</p></div>\n      <div class="infoSoil"><h3>Color: </h3><p class="descripCard">${o}</p></div>\n        <div class="infoPot"><h3>Pot: </h3><p class="descripCard">${m}</p></div>\n        <div id="elements" class="infoExtras"><h3>Extras: </h3><p class="descripCard moreElements">${c}</p></div>\n      </div>\n      <a class="customize-btn" href="customize.html" id="Customice">Customice</a>\n    </div>\n    `;n.innerHTML=g,function(t){const i=document.getElementById("imgPlantsContainer");if(t&&t.length>0)Array.isArray(t)?t.forEach((t=>{i.innerHTML+=`<img class="image extra${t}" src="img/${e(t)}.png" alt="">`})):i.innerHTML+=`<img class="image extra${t}" src="img/${e(t)}.png" alt="">`;else{const e=document.getElementById("elements");e&&e.remove()}}(c)}(t)}}const i=[{id:1,name:"Sansevieria",type:["toxic"],img:"img/plant-sansevieria.png",light:["lowlight"],watering:"underwater"},{id:2,name:"Peace Lily",type:["toxic","nonToxic"],img:"img/plant-peace-lily.png",light:["lowlight","mediumlight"],watering:"overwater"},{id:3,name:"Boston Fern",type:["nonToxic"],img:"img/plant-boston-fern.png",light:["lowlight"],watering:"underwater"},{id:4,name:"Aglaonema",type:["toxic"],img:"img/plant-aglaonema.png",light:["mediumlight"],watering:"underwater"},{id:5,name:"Monstera",type:["nonToxic"],img:"img/plant-monstera.png",light:["mediumlight"],watering:"underwater"},{id:6,name:"Aloe Vera",type:["toxic"],img:"img/plant-aloe.png",light:["outdoor"],watering:"underwater"},{id:7,name:"Cactus",type:["nonToxic"],img:"./img/plant-cactus.png",light:["outdoor"],watering:"underwater"}];document.getElementById("plantForm").addEventListener("submit",(function(e){e.preventDefault();const n=new FormData(e.target),a={};n.forEach(((e,t)=>{a[t]?(Array.isArray(a[t])||(a[t]=[a[t]]),a[t].push(e)):a[t]=e})),function(e){let n,a,l;!function(e){switch(e){case"clay":console.log("Opción 1 seleccionada"),n="Clay",l=e+" simple pod",a="img/simple-clay-pot.png",console.log(n,a,l);break;case"clay-decorated":console.log("Opción 2 seleccionada"),n="Clay Decorated",l=e+" decorated pot",a="src/img/simple-clay-pot-decorated.png js/utils/createObject.js",console.log(n,a,l);break;case"ceramic":console.log("Opción 3 seleccionada"),n="ceramic",l=e+" simple pot",a="img/simple-ceramic-pot.png",console.log(n,a);break;case"ceramic-decorated":console.log("Opción 4 seleccionada"),n="Ceramic Decorated",l=e+" Decorated pod",a="img/simple-ceramic-pot-decorated.png",console.log(n,a);break;default:console.log("Opción no reconocida")}}(e.style);const s=function(e){let t=null;return i.forEach((i=>{i.type.includes(e.type)&&i.watering===e.watering&&i.light.includes(e.light)&&(t=i.img)})),t}(e),o=function(e){let t=null;return i.forEach((i=>{i.type.includes(e.type)&&i.watering===e.watering&&i.light.includes(e.light)&&(t=i.name)})),t}(e),{type:c,light:r,watering:d,composting:m,style:g,elements:p}=e,h=new t(c,r,d,p);h.addComposting(m),h.addStyle(l),h.addMaterial(n),h.addName(o),h.addPlantUrl(s),h.addPodUrl(a),h.makeCard()}(a)})),document.getElementById("plantForm").addEventListener("reset",(function(){document.getElementById("card-container").innerHTML=""}))})();
import { potMaterialChange, potDecorationChange, potColorChange } from "../config/pot.js";

import {
  extraImgUrl
} from "../utils/extratools.js";

function renderCards(plant) {
  const newPlant = JSON.stringify(plant);
  localStorage.setItem("localPlant", newPlant);
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = "";
  const {
    name,
    color,
    composting,
    style,
    elements,
    platUrl,
    podUrl,
    material
  } = plant;
  let card = `
    <div class="card">
      <p>Preview</p>
      <div id="imgPlantsContainer" class="img-container">
        <img class="image plantImage" src="${platUrl}" alt="">
        <img class="image potImage" src="${podUrl}" alt="">
        <img class="image soilImage" src="img/soil-${composting}.png" alt="">
      </div>
      <div class="description">
      <div class="infoName"><h3>Name: </h3><p class="descripCard">${name}</p></div>
      <div class="infoSoil"><h3>Soil: </h3><p class="descripCard">${composting}</p></div>
      <div class="infoSoil"><h3>Color: </h3><p class="descripCard">${style}</p></div>
        <div class="infoPot"><h3>Pot: </h3><p class="descripCard">${material}</p></div>
        <div id="elements" class="infoExtras"><h3>Extras: </h3><p class="descripCard moreElements">${elements}</p></div>
      </div>
      <a href="#">Check store availability</a>
    </div>
    `
  cardContainer.innerHTML = card;
  addElementsToCard(elements)
}
function addElementsToCard(elements) {
  const imgContainer = document.getElementById("imgPlantsContainer");
  if (elements && elements.length > 0) {
    if (Array.isArray(elements)) {
      elements.forEach((element) => {
        imgContainer.innerHTML += `<img class="image extra${element}" src="img/${extraImgUrl(element)}.png" alt="">`;
      });
    } else {
      imgContainer.innerHTML += `<img class="image extra${elements}" src="img/${extraImgUrl(elements)}.png" alt="">`;
    }
  } else {
    const test = document.getElementById("elements");
    if (test) {
      test.remove();
    }
  }
}

const updateMaterialPot = (data) => {
  //Busco en el HTML el elemento un id, class 
};
const updateDecorationPot = (data) => {};
const updateColorPot = (data) => {};


const updateSoil = (data) => {}; /* ESTE NO SÉ SI VA AQUI */

/* initpreviewcard suscribe los eventos de la 60-65 y escucha a los publish de potChange de pot.js*/
const initPreviewCard = () => {
  potMaterialChange.subscribe(updateMaterialPot);
  potDecorationChange.subscribe(updateDecorationPot);
  potColorChange.subscribe(updateColorPot);
}

export { initPreviewCard };


//// SE DEBE EXPORTAR initPreviewCard
/* import { initPreviewCard} from '';
initPreviewCard(); */
import { extraImgUrl } from "../utils/extratools.js";

function renderCards(plant) {
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = "";
  const {
    name,
    color,
    composting,
    style,
    elements
  } = plant;


  let card = `
    <div class="card">
      <p>The perfect plant for you <span class="name-plant">${name}</span></p>
      <div id="imgPlantsContainer" class="img-container">
        <img class="image plantImage" src="src/img/plant-${name}.png" alt="">
        <img class="image potImage" src="src/img/simple-${style}-pot.png" alt="">
        <img class="image soilImage" src="src/img/soil-${composting}.png" alt="">
      </div>
      <div class="description">
      <div class="infoName"><h3>Name: </h3><p class="descripCard">${name}</p></div>
      <div class="infoSoil"><h3>Soil: </h3><p class="descripCard">${composting}</p></div>
      <div class="infoSoil"><h3>Color: </h3><p class="descripCard">${color}</p></div>
        <div class="infoPot"><h3>Pot: </h3><p class="descripCard">${style}</p></div>
        <div id="elements" class="infoExtras"><h3>Extras: </h3><p class="descripCard moreElements">${elements}</p></div>
      </div>
    </div>`
  cardContainer.innerHTML = card;
  addElementsToCard(elements)
}

function addElementsToCard(elements) {
  const imgContainer = document.getElementById("imgPlantsContainer");

  if (elements && elements.length > 0) {
    if (Array.isArray(elements)) {
      elements.forEach((element) => {
        imgContainer.innerHTML += `<img class="image extra${element}" src="src/img/${extraImgUrl(element)}.png" alt="">`;
      });
    } else {
      imgContainer.innerHTML += `<img class="image extra${elements}" src="src/img/${extraImgUrl(elements)}.png" alt="">`;
    }
  } else {
    const test = document.getElementById("elements");
    if (test) {
      test.remove();
    }
  }
}


export default renderCards;
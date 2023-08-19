export function CustomPlantcard(plant) {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";
    const {name,composting,color,style,elements,material} = plant;
    let card = `
      <div class="card">
        <p class="name-plant">Preview </p>
        <div id="imgPlantsContainer" class="img-container">
          <img class="image plantImage" src="Assets/plant-${replaceSpacesAndLowercase(name)}.png" alt="">
          <img class="image potImage" src="Assets/pots/${replaceSpacesAndLowercase(`${material} ${style}`)}-${color}.png" alt="">
          <img class="image soilImage" src="Assets/soil-${composting}.png" alt="">
        </div>
        <div class="description">
        <div class="infoName"><h3>Name: </h3><p class="descripCard">${name}</p></div>
        <div class="infoSoil"><h3>Soil: </h3><p class="descripCard">${composting}</p></div>
        <div class="infoPot"><h3>Pot: </h3><p class="descripCard">${style} pod</p></div>
        <div class="infoSoil"><h3>Color: </h3><p class="descripCard">${color}</p></div>
        <div id="elements" class="infoExtras"><h3>Extras: </h3><p class="descripCard moreElements">${elements}</p></div>
        </div>
        <a class="customize-btn" href="customize.html" id="Customice">See stock</a>
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
          imgContainer.innerHTML += `<img class="image extra${element}" src="Assets/${extraImgUrl(element)}.png" alt="">`;
        });
      } else {
        imgContainer.innerHTML += `<img class="image extra${elements}" src="Assets/${extraImgUrl(elements)}.png" alt="">`;
      }
    } else {
      const test = document.getElementById("elements");
      if (test) {
        test.remove();
      }
    }
  }
  
   function extraImgUrl(elements){
    switch (elements) {
        case "moss":
          return "moss-pole";
        case "pebbles":
          return "pebbles";
        case "mini":
          return "mini-plants";
        default:
          return ""; 
      }
  }

  function replaceSpacesAndLowercase(inputString) {
    var stringWithHyphens = inputString.replace(/ /g, '-');
    var lowercaseString = stringWithHyphens.toLowerCase();
    return lowercaseString;
  }
import Plant from "../contructor/plantsInfoBuilder.js"
import plantsData from "../source/config.js"


export default function cretateObject(object) {
  const planturl = getPlantUrl(object);
  const plantname = getPlantName(object);
  const plantPodUrl = getPodurl(object)
  const {
    type,
    light,
    watering,
    composting,
    style,
    elements
  } = object;
  const plant = new Plant(type, light, watering, elements);
  plant.addComposting(composting);
  plant.addStyle(style);
  plant.addName(plantname)
  plant.addUrl(planturl)
  plant.addPod(plantPodUrl)
  plant.makeCard();
}



function getPlantUrl(object) {
  let plantvalue = null;
  plantsData.forEach(plant => {
    if (plant.type.includes(object.type) && plant.watering === object.watering && plant.light.includes(object.light)) {
      plantvalue = plant.img;
    }
  });
  return plantvalue;
}

function getPlantName(object) {
  let plantvalue = null;
  plantsData.forEach(plant => {
    if (plant.type.includes(object.type) && plant.watering === object.watering && plant.light.includes(object.light)) {
      plantvalue = plant.name;
    }
  });
  return plantvalue;
}

function getPodurl(object) {
  const styleToImage = {
    "clay": "src/img/simple-clay-pot.png",
    "clay-decorated": "src/img/simple-clay-decorated-pot.png",
    "ceramic": "src/img/simple-ceramic-pot.png"
  };

  return styleToImage[object.style] || null;
}

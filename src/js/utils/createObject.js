import Plant from "../contructor/plantsInfoBuilder.js"
import plantsData from "../source/config.js"


export default function cretateObject(object) {
  let plantmat; 
  let plantPodUrl;
  let plantStyle;
  getMaterial(object.style)
  const planturl = getPlantUrl(object);
  const plantname = getPlantName(object);  
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
  plant.addStyle(plantStyle);
  plant.addMaterial(plantmat)
  plant.addName(plantname)
  plant.addPlantUrl(planturl)
  plant.addPodUrl(plantPodUrl)
  plant.makeCard();

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

  function getMaterial(object) {
    switch (object) {
      case "clay":
        console.log("Opción 1 seleccionada");
        plantmat = "Clay";
        plantStyle = object+" simple pot"
        plantPodUrl = "img/simple-clay-pot.png";
        console.log(plantmat,plantPodUrl,plantStyle)
        break;
      case "clay-decorated":
        console.log("Opción 2 seleccionada");
        plantmat = "Clay Decorated";
        plantStyle = object+" decorated pot"
        plantPodUrl = "img/simple-clay-pot-decorated.png";
        console.log(plantmat,plantPodUrl,plantStyle)
        break;
      case "ceramic":
        console.log("Opción 3 seleccionada");
        plantmat = "ceramic";
        plantStyle =   object+" simple pot"
        plantPodUrl = "img/simple-ceramic-pot.png";
        console.log(plantmat,plantPodUrl)
        break;
      case "ceramic-decorated":
        console.log("Opción 4 seleccionada");
        plantmat = "Ceramic Decorated";
        plantStyle = object+" Decorated pod"
        plantPodUrl = "img/simple-ceramic-pot-decorated.png";
        console.log(plantmat,plantPodUrl);
        break;
      default:
        console.log("Opción no reconocida");
    }
  }
  }
import Plant from "../contructor/plantsInfoBuilder.js"

export default function cretateObject(object) {
    const { type, light, watering, composting, style, elements } = object;
    const plant = new Plant(type, light, watering);
    plant.addComposting(composting);
    plant.addStyle(style);
  
    if (elements) {
      elements.forEach(element => plant.addElements(element));
    }
  
    console.log(plant.makeCard());
  }

  
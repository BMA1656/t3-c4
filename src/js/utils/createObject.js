import Plant from "../contructor/plantsInfoBuilder.js"

export default function cretateObject(object) {
    const { type, light, watering, composting, style, elements } = object;
    const plant = new Plant(type, light, watering,elements );
    plant.addComposting(composting);
    plant.addStyle(style);
    plant.makeCard();
  }

  
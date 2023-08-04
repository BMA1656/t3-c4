import Plant from "../contructor/plantsInfoBuilder.js"
import plants from "../source/config.js"

function getName(object) {
  const { type, light, watering } = object;
  const property = plants[light];
  if (type === "toxic" && watering === "overwater") {
    return property[type].overwater;
  } if (type === "toxic" && watering === "underwater") {
    return property[type].underwater;
  } else {
    return property[type].underwater;
  }
}

export default function cretateObject(object) {
    const { type, light, watering, composting, style, elements } = object;
    const plant = new Plant(type, light, watering,elements );
    plant.addComposting(composting);
    plant.addStyle(style);
    plant.addName(getName(object))
    plant.makeCard();
}
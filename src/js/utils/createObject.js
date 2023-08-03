import Plant from "../contructor/plantsInfoBuilder.js";
import renderCards from "../source/components/card.js";
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
  const { watering, composting, style, elements } = object;
  const namePlant = getName(object);
  const plant = new Plant(namePlant, watering);
  plant.addComposting(composting);
  plant.addStyle(style);

  if (elements) {
    elements.forEach(element => plant.addElements(element));
  }

  console.log(plant.makeCard());
  renderCards(plant.makeCard());
}
import renderCards from "../components/card.js";


export default class Plant {
  constructor(type, light, overwaters, elements) {
    this.type = type;
    this.light = light;
    this.overwaters = overwaters;
    this.elements = elements;
  }

  addComposting(compostingValue) {
    this.composting = compostingValue;
  }
  addMaterial(material){
    this.material = material
  }
  addStyle(styleValue) {
    this.style = styleValue
  }
  addName(nameValue) {
    this.name = nameValue;
  }
  addColor(color){
    this.color = color
  }
  makeCard() {
    const cardData = {
      name: this.name,
      color: this.color,
      light: this.light,
      composting: this.composting,
      material: this.material,
      style: this.style,
      elements: this.elements,
    };
    renderCards(cardData);
  }

}
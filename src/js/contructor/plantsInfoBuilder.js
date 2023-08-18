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
  addPlantUrl(planturl) {
    this.url = planturl
  }
  addPodUrl(plantPod) {
    this.podUrl = plantPod
  }
  addColor(color){
    this.color = color
  }
  makeCard() {
    const cardData = {
      name: this.name,
      type: this.type,
      color: this.color,
      light: this.light,
      overwaters: this.overwaters,
      composting: this.composting,
      platUrl: this.url,
      material: this.material,
      style: this.style,
      elements: this.elements,
      podUrl: this.podUrl,
    };
    console.log(cardData)
    renderCards(cardData);
  }

}
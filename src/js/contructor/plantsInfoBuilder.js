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

  addStyle(styleValue) {
    this.style = styleValue
  }
  addName(nameValue) {
    this.name = nameValue;
  }
  addUrl(planturl) {
    this.url = planturl
  }
  addPod(plantPod) {
    this.podUrl = plantPod
  }
  makeCard() {
    const cardData = {
      name: this.name,
      type: this.type,
      color: this.style,
      light: this.light,
      overwaters: this.overwaters,
      composting: this.composting,
      url: this.url,
      style: this.style,
      elements: this.elements,
      pod: this.podUrl,
    };
    renderCards(cardData);
  }

}
import {
  renderCards
} from "../modules/cards.js";


export default class Plant {
  constructor(type, light, overwaters,elements) {
    this.type = type;
    this.light = light;
    this.overwaters = overwaters;
    this.composting = "";
    this.style = "";
    this.elements = elements;
  }

  addComposting(compostingValue) {
    this.composting = compostingValue;
  }

  addStyle(styleValue) {
    this.style = styleValue;
  }



  makeCard() {
    const cardData = {
      type: this.type,
      light: this.light,
      overwaters: this.overwaters,
      compost: this.composting,
      pot: this.style,
      elements: this.elements
    };
    renderCards(cardData);
    return cardData;
  }

}
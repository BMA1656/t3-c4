import {
  renderCards
} from "../modules/cards.js";


export default class Plant {
  constructor(type, light, overwaters) {
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
      composting: this.composting,
      style: this.style
    };
    renderCards(cardData);
    return cardData;
  }

}
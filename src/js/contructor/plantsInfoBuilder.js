import renderCards from "../components/card.js";


export default class Plant {
  constructor(type, light, overwaters,elements) {
    this.name="";
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
  addName(nameValue) {
    this.name = nameValue;
  }



  makeCard() {
    const cardData = {
      name:this.name,
      type: this.type,
      light: this.light,
      overwaters: this.overwaters,
      composting: this.composting,
      style: this.style,
      elements:this.elements
    };



    renderCards(cardData);
    return cardData;
  }

}
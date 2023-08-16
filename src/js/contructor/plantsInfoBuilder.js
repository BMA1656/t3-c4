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
    if (styleValue === "clay") {
      this.style = "Simple clay";
      this.color = "Clay";
    }else if(styleValue === "clay-decorated"){
      this.style = "Plainted clay decorated";
      this.color = "Clay";
    }else{
      this.style = "Simple ceramic"
      this.color = "Ceramic";
    }   
  }
  addName(nameValue) {
    this.name = nameValue;
  }

  makeCard() {
    const cardData = {
      name: this.name,
      type: this.type,
      color:this.color,
      light: this.light,
      overwaters: this.overwaters,
      composting: this.composting,
      style: this.style,
      elements: this.elements
    };

    renderCards(cardData);
  }

}
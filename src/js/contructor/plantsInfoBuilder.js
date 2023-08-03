import { renderCards } from "../modules/cards";


export default class Plant {
  constructor(type, light, overwaters) {
    this.type = type;
    this.light = light;
    this.overwaters = overwaters;
    this.composting = "";
    this.style = "";
    this.elements = [];
  }

  addComposting(compostingValue) {
    this.composting = compostingValue;
  }

  addStyle(styleValue) {
    this.style = styleValue;
  }

  addElements(elementsValue) {
    this.elements.push(elementsValue);
  }


  makeCard() {
    const cardData = {
      type: this.type,
      light: this.light,
      overwaters: this.overwaters,
      composting: this.composting,
      style: this.style
    };

    if (this.elements.length > 0) {
      cardData.elements = this.elements.join(", ");
    } else {
      cardData.elements = false;
    }

    renderCards(cardData); // Enviar el objeto a la función prueba
    return cardData; // Opcional: Retornar el objeto generado
  }
}

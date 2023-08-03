export default class Plant {
  constructor(name, /* type, light, overwater,  */watering) {
    this.name = name;
    /* this.type = type;
    this.light = light; */
    /* this.overwater = overwater; */
    this.watering = watering;
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
      name: this.name,
      /* type: this.type,
      light: this.light, */
      /* overwater: this.overwater, */
      watering: this.watering,
      composting: this.composting,
      style: this.style
    };

    if (this.elements.length > 0) {
      cardData.elements = this.elements.join(",");
    } else {
      cardData.elements = false;
    }

    // prueba(cardData); // Enviar el objeto a la función prueba
    return cardData; // Opcional: Retornar el objeto generado
  }
}

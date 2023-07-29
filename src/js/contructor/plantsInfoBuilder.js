class Plant {
    constructor( name,type,light,overwaters) {
      this.name = name;
      this.type = type;
      this.light = light;
      this.overwaters = overwaters;
    }
    toString() {
        return `Plant: ${this.name}, Type: ${this.type}, Light: ${this.light}, Overwaters: ${this.overwaters}`;
      }

  }
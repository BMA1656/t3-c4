import Publisher from "./publisher.js";

const potMaterialChange = new Publisher();
const potDecorationChange = new Publisher();
const potColorChange = new Publisher();

// MATERIAL //
const handlePotMaterialChange = (event) => {
  //data-id = ceramic
  potChange.publish(material)
};

// DECORATION //
const handlePotDecorationChange = () => {
  //data-id = simple
  potChange.publish(decoration)
};

// COLOR //
const colorInputs = document.querySelectorAll('');
const handleColorChange = (event) => {
  //data-id = purple
  const color = event.currentTarget.dataset.id;

  potChange.publish(color);
}

//evento para los input que selecciona el color
const initColors = () => {
  colorInputs.forEach(col => {
    col.addEventListener('change', handleColorChange);
  });
}

export {
  potMaterialChange,
  potDecorationChange,
  potColorChange,
  initColors
}
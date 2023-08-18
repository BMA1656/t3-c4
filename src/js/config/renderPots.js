import { potMaterialChange, potDecorationChange, potColorChange } from "./pot.js";

const originalPlantData = localStorage.getItem("localPlant");
const originalPlant = JSON.parse(originalPlantData);

function renderPotMaterialChange(material) {
  console.log("material", material);
  originalPlant.podUrl = "" ;// AGREGAR IMAGEN AQUI
  originalPlant.material = material // no se puede
}

function renderPotDecorationChange(decoration) {
  console.log("deco", decoration);
  // AGREGAR IMAGEN AQUI
  originalPlant.style = decoration; // no se puede
}

function renderPotColorChange(color) {
  console.log("color", color);
  // AGREGAR IMAGEN AQUI
  originalPlant.color = color // no se puede
}

function initRenderPots() {
  potMaterialChange.subscribe(renderPotMaterialChange);
  potDecorationChange.subscribe(renderPotDecorationChange);
  potColorChange.subscribe(renderPotColorChange);
}

export default initRenderPots;
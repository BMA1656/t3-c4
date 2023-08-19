import { localStorageObject,localStorageObjectCreateRenew } from "../components/localstorage.js";
import { potMaterialChange, potDecorationChange, potColorChange } from "./pot.js";



function renderPotMaterialChange(material) {
  const originalPlant = localStorageObject()
  originalPlant.material = material; 
  localStorageObjectCreateRenew(originalPlant)
}

function renderPotDecorationChange(decoration) {
  const originalPlant = localStorageObject();
  originalPlant.style = decoration; 
  localStorageObjectCreateRenew(originalPlant);
}

function renderPotColorChange(color) {
  const originalPlant = localStorageObject();
  originalPlant.color = color;
  localStorageObjectCreateRenew(originalPlant);  
}

function initRenderPots() {
  potMaterialChange.subscribe(renderPotMaterialChange);
  potDecorationChange.subscribe(renderPotDecorationChange);
  potColorChange.subscribe(renderPotColorChange);
}

export default initRenderPots;

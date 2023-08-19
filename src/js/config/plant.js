import { localStorageObject,localStorageObjectCreateRenew } from "../components/localstorage.js";
import Publisher from "./publisher.js";



const plantChange = new Publisher();

const handlePlantChange = () => {
  const select = document.getElementById("dropdown");
  select.addEventListener("change", (event) => {
    const value = event.target.value;
    plantChange.publish(value);
  });
};

function renderPlantChange(value) {
  const originalPlant = localStorageObject();
  originalPlant.name = value;  
  localStorageObjectCreateRenew(originalPlant)
}

function initNamePlant(){
  handlePlantChange();
  plantChange.subscribe(renderPlantChange);
}

export default initNamePlant;
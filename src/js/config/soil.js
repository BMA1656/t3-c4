import Publisher from "./publisher.js";
import { localStorageObject,localStorageObjectCreateRenew } from "../components/localstorage.js";


const soilChange = new Publisher();

const handleSoilChange = () => {
  const inputSoil = document.querySelectorAll('.input-soil');
  inputSoil.forEach((input) => {
    input.addEventListener('change', (event) => {
      const soil = event.currentTarget.dataset.id;
      soilChange.publish(soil)
    })
  })
};

function renderSoilChange(soil) {
  const originalPlant = localStorageObject();
  originalPlant.composting = soil;
  localStorageObjectCreateRenew(originalPlant);
}

function initSoil() {
  handleSoilChange();
  soilChange.subscribe(renderSoilChange);
}

export default initSoil;
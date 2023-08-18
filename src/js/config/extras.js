import Publisher from "./publisher.js";

const originalPlantData = localStorage.getItem("localPlant");
const originalPlant = JSON.parse(originalPlantData);

const extrasChange = new Publisher();

const handleExtrasChange = () => {
  const inputExtras = document.querySelectorAll(".input-extra");
  inputExtras.forEach((input) => {
    input.addEventListener('change', (event) => {
      const extra = event.currentTarget.dataset.id;
      extrasChange.publish(extra);
      console.log("extras", extra);
    });
  })
};

function renderExtrasChange(extra) {
  console.log("renderExtrasChange", extra);
  // IMAGEN
  originalPlant.elements = extra; // NO SIRVE
}

function initExtras() {
  extrasChange.subscribe(renderExtrasChange);
  handleExtrasChange();
}

export default initExtras;
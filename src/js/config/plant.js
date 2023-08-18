import Publisher from "./publisher.js";

const originalPlantData = localStorage.getItem("localPlant");
const originalPlant = JSON.parse(originalPlantData);

const plantChange = new Publisher();

const handlePlantChange = () => {
  const select = document.getElementById("dropdown");
  select.addEventListener("change", (event) => {
    const value = event.target.value;
    console.log("plantName", value);
    plantChange.publish(value);
  });
};

function renderPlantChange(value) {
  console.log("renderplantName", value);
  originalPlant.name = value; // NO SALE
}

function initNamePlant(){
  handlePlantChange();
  plantChange.subscribe(renderPlantChange);
}

export default initNamePlant;
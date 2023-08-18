import Publisher from "./publisher.js";

const originalPlantData = localStorage.getItem("localPlant");
const originalPlant = JSON.parse(originalPlantData);

const soilChange = new Publisher();

const handleSoilChange = () => {
  const inputSoil = document.querySelectorAll('.input-soil');
  inputSoil.forEach((input) => {
    input.addEventListener('change', (event) => {
      const soil = event.currentTarget.dataset.id;
      soilChange.publish(soil)
      console.log("soil" ,soil);
    })
  })
};

function renderSoilChange(soil) {
  console.log("rendersoil", soil);
  const soilImage = document.getElementById('soilImg'); // APARECE NULL
  soilImage.setAttribute = ('src', `../img/soil-${soil}.png`);
  originalPlant.composting = soil // no se puede
}

function initSoil() {
  handleSoilChange();
  soilChange.subscribe(renderSoilChange);
}

export default initSoil;
import renderCards from './js/components/card.js';
import { getPotInputsValues } from './js/config/pot.js';
import initRenderPots from './js/config/renderPots.js';
import initSoil from './js/config/soil.js';
import initNamePlant from './js/config/plant.js';
import initExtras from './js/config/extras.js';

getPotInputsValues();
initRenderPots();
initSoil();
initNamePlant();
initExtras();

const decorationOptions = document.getElementById('decorationOptions')
const decorationToggle = document.getElementById('decorationToggle');
const toggleTextDecoration = document.getElementById('toggleTextDecoration');
const colorToggle = document.getElementById('colorToggle');
const colorOptions = document.getElementById('colorOptions');
const toggleTextColor = document.getElementById('toggleTextColor');

decorationToggle.addEventListener('change', function () {
  if (decorationToggle.checked) {
    decorationOptions.style.display = 'block';
    toggleTextDecoration.textContent = 'Yes';
  } else {
    decorationOptions.style.display = 'none';
    toggleTextDecoration.textContent = 'No';
  }
})

colorToggle.addEventListener('change', function () {
  if (colorToggle.checked) {
    colorOptions.style.display = 'block';
    toggleTextColor.textContent = 'Yes';
  } else {
    colorOptions.style.display = 'none';
    toggleTextColor.textContent = 'No';
  }
});

const originalPlantData = localStorage.getItem("localPlant");
const originalPlant = JSON.parse(originalPlantData); 

const form = document.getElementById('customizationForm');
const selectedPlantData = { ...originalPlant };


/* function updateSelectedPlantData() {
 //selectedPlantData.name = document.getElementById('choosePlant').value;
  selectedPlantData.name = document.getElementById('dropdown').value;
  selectedPlantData.potDecorations = document.querySelector('input[name="potDecorations"]').checked;
  selectedPlantData.potColorToggle = document.querySelector('input[name="potColorToggle"]').checked;
  selectedPlantData.potColor = selectedPlantData.colorToggle ? document.querySelector('input[name="color"]:checked').value : null;
} */


form.addEventListener('change', () => {
  // updateSelectedPlantData();
  console.log('Selected Plant Data:', selectedPlantData);
  renderCards(selectedPlantData);
});


const potColorToggle = document.getElementById('potColorToggle');
const potColorOptions = document.getElementById('potColorOptions');

potColorToggle.addEventListener('change', (event) => {
    if (event.target.checked) {
        potColorOptions.style.display = 'block';
    } else {
        potColorOptions.style.display = 'none';
    }
});



const originalPlantData =  localStorage.getItem("localPlant");
const originalPlant = JSON.parse(originalPlantData);


const form = document.getElementById('customizationForm');
const selectedPlantData = { ...originalPlant };

function updateSelectedPlantData() {
    selectedPlantData.name = document.getElementById('choosePlant').value;
    selectedPlantData.potDecorations = document.querySelector('input[name="potDecorations"]').checked;
    selectedPlantData.potColorToggle = document.querySelector('input[name="potColorToggle"]').checked;
    selectedPlantData.potColor = selectedPlantData.potColorToggle ? document.querySelector('input[name="potColor"]:checked').value : null;

}

form.addEventListener('change', () => {
    updateSelectedPlantData();
    console.log('Selected Plant Data:', selectedPlantData);
});
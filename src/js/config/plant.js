import Publisher from "./publisher.js";

const plantChange = new Publisher();

const handleSoilChange = (event) => {
  //data-id = aglaonema
  plantChange.publish(plant)
};

const initPlant = () => {
  plantInputs.forEach(plant => {
    plant.addEventListener('change', handleSoilChange);
  });
}
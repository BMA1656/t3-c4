import Publisher from "./publisher.js";

const extrasChange = new Publisher();

const handleSoilChange = (event) => {
  //data-id = aglaonema
  extraChange.publish(plant)
};

const initExtra = () => {
  extraInputs.forEach(elementsEx => {
    elementsEx.addEventListener('change', handleSoilChange);
  });
}
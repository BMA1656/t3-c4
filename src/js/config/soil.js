import Publisher from "./publisher.js";

const soilChange = new Publisher();

const handleSoilChange = (event) => {
  //data-id = easySoil
  soilChange.publish(soil)
};

const initSoil = () => {
  soilInputs.forEach(soilType => {
    soilType.addEventListener('change', handleSoilChange);
  });
}
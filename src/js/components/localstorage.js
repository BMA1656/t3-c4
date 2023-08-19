export function localStorageObject(){
    const originalPlantData = localStorage.getItem("localPlant");
    const originalPlant = JSON.parse(originalPlantData);
return originalPlant
}

export function localStorageObjectCreateRenew(newObject){
const newPlant = JSON.stringify(newObject);
localStorage.setItem("localPlant", newPlant);
}
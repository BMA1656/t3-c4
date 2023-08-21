  const getApiInventario = async (productType, itemId) => {
  const response = await fetch(
    `https://qfble0gquj.execute-api.us-east-2.amazonaws.com/plant-store/inventory/${productType}/${itemId}`,
  );
  const data = await response.json();
  console.log(data);
  return data;
};

const getApiPlantInfo = async(plantId) => {
  const response = await fetch(
    `https://qfble0gquj.execute-api.us-east-2.amazonaws.com/plant-store/info/${plantId}`,
  );
  const data = await response.json();
  console.log(data);
  return data;
};

export {
  getApiInventario,
  getApiPlantInfo
}

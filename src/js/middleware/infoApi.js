import { getApiInventario, getApiPlantInfo} from "../services/api.js";
getApiInventario("plant", "fern");
getApiPlantInfo("aglaonema");

const getInfoApi = async (description, next) => {
  try {
    const plant = getApiInventario ("plant", `${description.name}`);
    const soil = getApiInventario ("soil", `${ description.soil}`);
    const pot = getApiInventario ("pot", `${ description.pot}-${ description.style }-${ description.color }`);

    const getDescription = await getApiPlantInfo(description.name);
    description.info = getDescription;

    const values = await Promise.all([plant, soil, pot]);
    description.stock = values;
    next();
    console.log(values);
  } catch (error) {
    console.log (error);
  }
}; 

export {
  getInfoApi
}
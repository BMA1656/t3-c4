import { getApiInventario, getApiPlantInfo } from '../services/api.js'

const getInfoApi = async (description, next) => {
  try {
    const plant = getApiInventario('plant', `${name(description.name)}`)
    const soil = getApiInventario('soil', `${description.composting}`)
    const pot = getApiInventario(
      'pot',
      `${name(description.material)}-${name(description.style)}-${
        description.color
      }`
    )

    const getDescription = await getApiPlantInfo(name(description.name))
    description.info = getDescription

    const results = await Promise.all([plant, soil, pot])
    const values = {
      Plant: results[0],
      Soil: results[1],
      Pot: results[2]
    }
    description.stock = values
    next()
  } catch (error) {
  }
}

function name (plantname) {
  if (plantname === 'Peace Lily') {
    return 'peaceLily'
  } else if (plantname === 'Boston Fern') {
    return 'fern'
  } else if (plantname === 'Aloe Vera') {
    return 'aloe'
  } else {
    return plantname.toLowerCase()
  }
}

export { getInfoApi }

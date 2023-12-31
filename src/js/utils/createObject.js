import Plant from '../contructor/plantsInfoBuilder.js'
import plantsData from '../source/config.js'

export default function cretateObject (object) {
  let plantmat
  let plantStyle
  getMaterial(object.style)
  const plantname = getPlantName(object)
  const { type, light, watering, composting, style, elements } = object
  const plant = new Plant(type, light, watering, elements)
  plant.addComposting(composting)
  plant.addColor('unpainted')
  plant.addStyle(plantStyle)
  plant.addMaterial(plantmat)
  plant.addName(plantname)
  plant.makeCard()

  function getPlantName (object) {
    let plantvalue = null
    plantsData.forEach((plant) => {
      if (
        plant.type.includes(object.type) &&
        plant.light.includes(object.light)
      ) {
        if (plant.watering === 'overwater' && object.type === 'toxic') {
          plantvalue = 'Peace Lily'
        } else {
          plantvalue = plant.name
        }
      }
    })
    return plantvalue
  }

  function getMaterial (object) {
    switch (object) {
      case 'clay':
        plantmat = 'Clay'
        plantStyle = 'Simple'
        break
      case 'clay-decorated':
        plantmat = 'Clay'
        plantStyle = 'Decorated'
        break
      case 'ceramic':
        plantmat = 'Ceramic'
        plantStyle = 'Simple'
        break
      case 'ceramic-decorated':
        plantmat = 'Ceramic'
        plantStyle = 'Decorated'
        break
      default:
        console.log('Opción no reconocida')
    }
  }
}

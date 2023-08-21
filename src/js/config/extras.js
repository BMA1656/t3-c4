import {
  localStorageObject,
  localStorageObjectCreateRenew
} from '../components/localstorage.js'
import Publisher from './publisher.js'

const extrasChange = new Publisher()

const handleExtrasChange = () => {
  const inputExtras = document.querySelectorAll('.input-extra')
  const selectedExtras = []

  inputExtras.forEach((input) => {
    input.addEventListener('change', (event) => {
      const extras = event.currentTarget.dataset.id
      // Actualizar el array de valores seleccionados
      if (input.checked) {
        selectedExtras.push(extras)
      } else {
        const index = selectedExtras.indexOf(extras)
        if (index !== -1) {
          selectedExtras.splice(index, 1)
        }
      }
      // Definir el valor de 'extra' según la cantidad de elementos seleccionados
      let extra = null
      if (selectedExtras.length === 1) {
        extra = selectedExtras[0]
      } else if (selectedExtras.length > 1) {
        extra = selectedExtras
      }
      // Publicar el valor actual de 'extra'
      extrasChange.publish(extra)
    })
  })
}

function renderExtrasChange (extra) {
  const originalPlant = localStorageObject()
  if (extra === null) {
    delete originalPlant.elements
  } else {
    originalPlant.elements = extra
  }
  localStorageObjectCreateRenew(originalPlant)
}

function initExtras () {
  extrasChange.subscribe(renderExtrasChange)
  handleExtrasChange()
}

export default initExtras

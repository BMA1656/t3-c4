import Publisher from './publisher.js'

// MATERIAL //
const potMaterialChange = new Publisher()

const handlePotMaterialChange = () => {
  const inputMaterial = document.querySelectorAll('.input-material')
  inputMaterial.forEach((input) => {
    input.addEventListener('change', (event) => {
      const material = event.currentTarget.dataset.id;
      console.log(material)
      potMaterialChange.publish(material)
    })
  });
}

// DECORATION //
const potDecorationChange = new Publisher()

const handlePotDecorationChange = () => {
  const inputDecoration = document.querySelectorAll('.input-decoration')
  inputDecoration.forEach((input) => {
    input.addEventListener('change', (event) => {
      const decoration = event.currentTarget.dataset.id;
      potDecorationChange.publish(decoration)
    })
  });
}

// COLOR //
const potColorChange = new Publisher()

const handlePotColorChange = () => {
  const inputDecoration = document.querySelectorAll('.input-color')
  inputDecoration.forEach((input) => {
    input.addEventListener('change', (event) => {
      const color = event.currentTarget.dataset.id;
      potColorChange.publish(color)
    })
  });
}

/// INICIALIZA FUNCIONES QUE OBTIENEN EL PARAMETRO
function getPotInputsValues () {
  handlePotMaterialChange();
  handlePotDecorationChange();
  handlePotColorChange();
}

export {
  potMaterialChange,
  potDecorationChange,
  potColorChange,
  getPotInputsValues,
}

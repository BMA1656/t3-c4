import { getPotInputsValues } from './js/config/pot.js'
import initRenderPots from './js/config/renderPots.js'
import initSoil from './js/config/soil.js'
import initNamePlant from './js/config/plant.js'
import initExtras from './js/config/extras.js'
import {
  localStorageObject,
  localStorageObjectCreateRenew
} from './js/components/localstorage.js'
import renderCards from './js/components/card.js'

const decorationOptions = document.getElementById('decorationOptions')
const decorationToggle = document.getElementById('decorationToggle')
const toggleTextDecoration = document.getElementById('toggleTextDecoration')
const colorToggle = document.getElementById('colorToggle')
const colorOptions = document.getElementById('colorOptions')
const toggleTextColor = document.getElementById('toggleTextColor')

decorationToggle.addEventListener('change', function () {
  if (decorationToggle.checked) {
    decorationOptions.style.display = 'block'
    toggleTextDecoration.textContent = 'Yes'
  } else {
    decorationOptions.style.display = 'none'
    toggleTextDecoration.textContent = 'No'
  }
})

colorToggle.addEventListener('change', function () {
  if (colorToggle.checked) {
    colorOptions.style.display = 'block'
    toggleTextColor.textContent = 'Yes'
  } else {
    colorOptions.style.display = 'none'
    toggleTextColor.textContent = 'No'
    const originalPlant = localStorageObject()
    originalPlant.color = 'unpainted'
    localStorageObjectCreateRenew(originalPlant)
  }
})

const form = document.getElementById('customizationForm')

form.addEventListener('change', () => {
  const originalPlantData = localStorage.getItem('localPlant')
  const originalPlant = JSON.parse(originalPlantData)
  renderCards(originalPlant)
})

document.addEventListener('DOMContentLoaded', () => {
  getPotInputsValues()
  initRenderPots()
  initSoil()
  initNamePlant()
  initExtras()
  renderCards(localStorageObject())
})

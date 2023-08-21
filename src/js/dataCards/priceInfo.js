import prices from '../source/prices'

export const PriceInfoCalc = async (description, next) => {
  let total = 0
  let potPrice = 0
  let soilPrice = 0
  let plantPrice = 0
  const plantType = replaceSpacesAndLowercase(description.name)
  const plantPot = getPot(description)
  const plantSoil = description.composting.toLowerCase()
  const priceCnt = document.getElementById('priceBreakdown')
  const priceCntFInal = document.getElementById('finalprice')
  const priceShow = document.getElementById('price')
  const subtotal = addElementsPrice(description.elements)
  total += subtotal
  if (prices.plants[plantType]) {
    total += prices.plants[plantType]
    plantPrice = prices.plants[plantType]
  }
  if (prices.pots[plantPot]) {
    total += prices.pots[plantPot]
    potPrice = prices.pots[plantPot]
  }
  if (prices.soils[plantSoil]) {
    total += prices.soils[plantSoil]
    soilPrice = prices.soils[plantSoil]
  }
  priceShow.textContent = `${total}Dls`

  priceCnt.innerHTML = `
<p class="priceObject"> ${description.name} $${plantPrice} </p>
<p class="priceObject">${formatString(plantPot)} $${potPrice} </p>
<p class="priceObject"> ${description.composting} soil $${soilPrice}</p>

`
  priceCntFInal.textContent = `Total Price $${total}`
}

function formatString (str) {
  return str
    .replace(/-/g, ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function getPot (description) {
  const paintedColors = ['purple', 'green', 'blue', 'pink']
  if (paintedColors.includes(description.color)) {
    return `${description.style.toLowerCase()}-${description.material.toLowerCase()}-painted`
  } else {
    return `${description.style.toLowerCase()}-${description.material.toLowerCase()}-${
      description.color
    }`
  }
}

function addElementsPrice (elements) {
  const priceCnt = document.getElementById('elementsprice')
  let total = 0

  function appendAndAddToTotal (element) {
    if (prices.extras[element]) {
      priceCnt.innerHTML += `<p>${element} : $${prices.extras[element]} </p>`
      total += prices.extras[element]
    }
  }

  if (elements) {
    if (Array.isArray(elements)) {
      elements.forEach(appendAndAddToTotal)
    } else {
      appendAndAddToTotal(elements)
    }
  }

  return total
}

function replaceSpacesAndLowercase (inputString) {
  const stringWithHyphens = inputString.replace(/ /g, '')
  const lowercaseString = stringWithHyphens.toLowerCase()
  return lowercaseString
}

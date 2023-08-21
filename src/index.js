import getFormInfo from './js/formInfo/validateInfo.js'

document.getElementById('plantForm').addEventListener('submit', getFormInfo)
document.getElementById('plantForm').addEventListener('reset', clearCard)

function clearCard () {
  const cardContainer = document.getElementById('card-container')
  cardContainer.innerHTML = ''
}

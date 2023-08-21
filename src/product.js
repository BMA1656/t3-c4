import renderCards from './js/components/card.js'
import { localStorageObject } from './js/components/localstorage.js'
import { addMiddleware, execute } from './js/middleware/pipeline.js'
import { getInfoApi } from './js/middleware/infoApi.js'
import { getStockBtn } from './js/middleware/stockText.js'
import { newObject } from './js/dataCards/cardsValue.js'
import { inventoryAlertsCard } from './js/dataCards/invAlert.js'
import { PriceInfoCalc } from './js/dataCards/priceInfo.js'

document.addEventListener('DOMContentLoaded', () => {
  renderCards(localStorageObject())
})

addMiddleware(getInfoApi)
addMiddleware(getStockBtn)
addMiddleware(inventoryAlertsCard)
addMiddleware(newObject)
addMiddleware(PriceInfoCalc)

const contextInicial = localStorageObject()
await execute(contextInicial)

const detailsContainers = document.querySelectorAll('#dataContainer details')
detailsContainers.forEach((detailsElement) => {
  detailsElement.addEventListener('toggle', function () {
    if (this.open) {
      detailsContainers.forEach((otherDetailsElement) => {
        if (otherDetailsElement !== this) {
          otherDetailsElement.open = false
        }
      })
    }
  })
})

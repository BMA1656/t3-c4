import renderCards from "./js/components/card.js";
import { localStorageObject } from "./js/components/localstorage.js";
import { addMiddleware, execute } from "./js/middleware/pipeline.js";
import { getInfoApi } from "./js/middleware/infoApi.js";
import { getStockBtn } from "./js/middleware/stockText.js";

document.addEventListener('DOMContentLoaded', () => {
  renderCards(localStorageObject());
})

addMiddleware(getInfoApi, getStockBtn);
await execute({});

const inventoryElement = document.getElementById("inventory");
const plantDescriptionElement = document.getElementById("plantDescription");
const plantCareElement = document.getElementById("consejos");
const stockBlockElement = document.getElementById('stockBlock');

stockBlockElement.textContent = localStorageObject().stock;
inventoryElement.textContent = localStorageObject().stock;
plantDescriptionElement.textContent = localStorageObject().description;
plantCareElement.textContent = localStorageObject()[description.care];

const detailsContainers = document.querySelectorAll("#dataContainer details");
detailsContainers.forEach((detailsElement) => {
  detailsElement.addEventListener("toggle", function () {
    if (this.open) {
      detailsContainers.forEach((otherDetailsElement) => {
        if (otherDetailsElement !== this) {
          otherDetailsElement.open = false;
        }
      });
    }
  });
});


import renderCards from "./js/components/card";
import { localStorageObject } from "./js/components/localstorage";


document.addEventListener('DOMContentLoaded',() => { 
    renderCards(localStorageObject());
  })


  const detailsContainers = document.querySelectorAll("#dataContainer details");
  detailsContainers.forEach((detailsElement) => {
      detailsElement.addEventListener("toggle", function() {
          if (this.open) {
              detailsContainers.forEach((otherDetailsElement) => {
                  if (otherDetailsElement !== this) {
                      otherDetailsElement.open = false;
                  }
              });
          }
      });
  });
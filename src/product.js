import renderCards from "./js/components/card";
import { localStorageObject } from "./js/components/localstorage";


document.addEventListener('DOMContentLoaded',() => { 
    renderCards(localStorageObject());
  })
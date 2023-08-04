import clearCard from './js/events/clearCard.js';
import  {handleFormSubmit}  from './js/getFormInfo/validateInfo.js';

document.getElementById('plantForm').addEventListener('submit', handleFormSubmit);
document.getElementById('plantForm').addEventListener('reset', clearCard);

import {clearCard} from '/src/js/utils/extratools.js';
import  getFormInfo  from '/src/js/formInfo/validateInfo.js';

document.getElementById('plantForm').addEventListener('submit', getFormInfo);
document.getElementById('plantForm').addEventListener('reset', clearCard);

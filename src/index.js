import {clearCard} from './js/utils/extratools.js';
import  {getFormInfo}  from './js/formInfo/validateInfo.js';

document.getElementById('plantForm').addEventListener('submit', getFormInfo);
document.getElementById('plantForm').addEventListener('reset', clearCard);

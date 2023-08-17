import { colorChange} from './pot.js';

const initDetails = () => {
  colorChange.subscribe(handleColorChange);
}

export {initDetails};
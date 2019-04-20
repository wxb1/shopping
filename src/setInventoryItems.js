import { ADD_INVENTORY_ITEMS } from './constants';

const setInventoryItems = (inventory) => {
  
    return { 
        type: ADD_INVENTORY_ITEMS,
        inventory,
    };

}

export { setInventoryItems };
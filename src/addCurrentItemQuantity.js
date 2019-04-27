import { ADD_CURRENT_ITEM_QUANTITY } from './constants';

const addCurrentItemQuantity = (id,quantity) => {
    return {
        type: ADD_CURRENT_ITEM_QUANTITY,
        id,
        quantity,
    };
}

export { addCurrentItemQuantity };
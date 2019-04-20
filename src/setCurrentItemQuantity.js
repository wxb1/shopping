import { SET_CURRENT_ITEM_QUANTITY } from './constants';

const setCurrentItemQuantity = (id,quantity) => {
    return {
        type: SET_CURRENT_ITEM_QUANTITY,
        id,
        quantity,
    };
}

export { setCurrentItemQuantity };

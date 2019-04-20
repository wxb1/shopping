import {ADD_CURRENT_ITEM_TO_CART } from './constants';

const addCurrentItemToCart = (id) => {
    return {
        type: ADD_CURRENT_ITEM_TO_CART,
        id,
    }
}

export { addCurrentItemToCart };
import {SET_CART_ITEM_QUANTITY } from './constants';

const setCartItemQuantity = (id,quantity) => {
    return {
        type: SET_CART_ITEM_QUANTITY,
        id,
        quantity,
    };
}

export { setCartItemQuantity };

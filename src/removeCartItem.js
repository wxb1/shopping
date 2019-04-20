import { REMOVE_CART_ITEM } from './constants';

const removeCartItem = (id) => {
    return {
        type: REMOVE_CART_ITEM,
        id,
    };
}

export { removeCartItem };

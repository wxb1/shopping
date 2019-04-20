import { SET_CURRENT_ITEM } from './constants';

const setCurrentItem = (id) => {
    return { 
        type: SET_CURRENT_ITEM,
        id,
    };
}

export { setCurrentItem };

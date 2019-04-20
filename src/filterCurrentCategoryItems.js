import { FILTER_CURRENT_CATEGORY_ITEMS } from "./constants";

const filterCurrentCategoryItems = ()=> {
    return {
        type: FILTER_CURRENT_CATEGORY_ITEMS,
    };
}

export { filterCurrentCategoryItems };
import { UNFILTER_CURRENT_CATEGORY_ITEMS } from "./constants";

const unfilterCurrentCategoryItems = ()=> {
    return {
        type: UNFILTER_CURRENT_CATEGORY_ITEMS,
    };
}

export { unfilterCurrentCategoryItems };
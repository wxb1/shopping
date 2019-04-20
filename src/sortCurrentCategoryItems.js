import { SORT_CURRENT_CATEGORY_ITEMS } from "./constants";

const sortCurrentCategoryItems = (sortNumber) => {
    return {
        type: SORT_CURRENT_CATEGORY_ITEMS,
        sortNumber,
    }
}

export { sortCurrentCategoryItems };
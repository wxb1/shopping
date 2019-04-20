import { SET_CURRENT_CATEGORY } from "./constants";

const setCurrentCategory = (category,subCategory) => {
    return {
        type: SET_CURRENT_CATEGORY,
        category,
        subCategory
    };
}

export { setCurrentCategory };
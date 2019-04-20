import { connect } from "react-redux";
import { Category } from './Category';
import { setCurrentCategory } from "./setCurrentCategory";
import { addCurrentItemToCart } from "./addCurrentItemToCart";
import { setCurrentItemQuantity } from "./setCurrentItemQuantity";
import { setCurrentItem } from "./setCurrentItem";
import { sortCurrentCategoryItems } from "./sortCurrentCategoryItems";
import { filterCurrentCategoryItems } from "./filterCurrentCategoryItems";
import { unfilterCurrentCategoryItems } from "./unfilterCurrentCategoryItems";

const mapStateToProps = (state) => {
    return {
        categorized: state.inventory.categorized,
        all: state.inventory.all,
        currentCategory: state.inventory.currentCategory,
        sortAction: state.inventory.sortAction,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSetCurrentCategory: (category,subCategory) => {
            dispatch(setCurrentCategory(category,subCategory));
        },
        onAddItemToCart: (id) => {
            dispatch(setCurrentItem(id));
            dispatch(setCurrentItemQuantity(id,1));
            dispatch(addCurrentItemToCart(id));
          },
          onSortCurrentCategoryItems: (sortNumber) => {
              dispatch(sortCurrentCategoryItems(sortNumber));
          },
          onFilterCurrentCategoryItems: () => {
            dispatch(filterCurrentCategoryItems());
          },
          onUnfilterCurrentCategoryItems: () => {
            dispatch(unfilterCurrentCategoryItems());
          },
    };
}

const CategoryContainer = connect(mapStateToProps,mapDispatchToProps)
(
    Category
);

export default  CategoryContainer;
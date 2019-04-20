import { connect } from "react-redux";
import { ProductDetail } from "./ProductDetail";
import { setCurrentItemQuantity } from "./setCurrentItemQuantity"
import { setCurrentItem } from "./setCurrentItem"
import { addCurrentItemToCart } from "./addCurrentItemToCart";

  const mapStateToProps = (state) => {

    return {
        all: state.inventory.all,
        current: state.inventory.current,
    };

  };

  const mapDispatchToProps = dispatch => {
    return {
        onSetCurrentItemQuantity: (id,quantity) => {
          dispatch(setCurrentItemQuantity(id,quantity));
        },
        onSetCurrentItem: (id) => {
          dispatch(setCurrentItem(id));
        },
        onAddCurrentItemToCart: (id) => {
          dispatch(addCurrentItemToCart(id));
        },
    };
  };

const ProductDetailContainer = connect(mapStateToProps, mapDispatchToProps)(
    ProductDetail
  );


  export default ProductDetailContainer;
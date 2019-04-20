import { connect } from "react-redux";
import { ShoppingCart } from "./ShoppingCart";
import { setCartItemQuantity } from "./setCartItemQuantity";
import { removeCartItem } from "./removeCartItem";
import { customerCheckOut } from "./customerCheckOut";

  const mapStateToProps = (state) => {

    return {
        all: state.inventory.all,
        cart: state.inventory.cart,
    };

  };

  const mapDispatchToProps = dispatch => {
    return {
        onSetCartItemQuantity: (id,quantity) =>{
            dispatch(setCartItemQuantity(id,quantity));
        },
        onRemoveCartItem: (id) => {
            dispatch(removeCartItem(id));
        },
        onCustomerCheckOut: ()=> {
          dispatch(customerCheckOut());
        }
    };
  };

const ShoppingCartContainer = connect(mapStateToProps, mapDispatchToProps)(
    ShoppingCart
  );


  export default ShoppingCartContainer;
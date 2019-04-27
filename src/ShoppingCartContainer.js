import { connect } from "react-redux";
import { ShoppingCart } from "./ShoppingCart";
import { setCartItemQuantity } from "./setCartItemQuantity";
import { removeCartItem } from "./removeCartItem";
import { customerCheckOut } from "./customerCheckOut";
import { hideCheckoutMessage } from "./hideCheckoutMessage";
import { setCustomerName } from "./setCustomerName";       
import { setCustomerAddress } from "./setCustomerAddress";      
import { setCustomerCity } from "./setCustomerCity";       
import { setCustomerPhoneNumber } from "./setCustomerPhoneNumber";   


  const mapStateToProps = (state) => {

    return {
        all: state.inventory.all,
        cart: state.inventory.cart,
        canShowCheckoutMessage: state.inventory.canShowCheckoutMessage,
        customer: state.inventory.customer,
        orderDetails: state.inventory.orderDetails,
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
        },
        onHideCheckoutMessage: () => {
          dispatch(hideCheckoutMessage());
        },
        onSetCustomerName: (customerName)=> {
          dispatch(setCustomerName(customerName));
        },
        onSetCustomerAddress: (customerAddress)=> {
          dispatch(setCustomerAddress(customerAddress));
        },
        onSetCustomerCity: (customerCity)=> {
          dispatch(setCustomerCity(customerCity));
        },
        onSetCustomerPhoneNumber: (customerPhoneNumber)=> {
          dispatch(setCustomerPhoneNumber(customerPhoneNumber));
        },
    };
  };

const ShoppingCartContainer = connect(mapStateToProps, mapDispatchToProps)(
    ShoppingCart
  );


  export default ShoppingCartContainer;
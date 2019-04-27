import { SET_CAN_SHOW_CHECKOUT_MESSAGE}from "./constants";

const hideCheckoutMessage = () => {
    return {
        type: SET_CAN_SHOW_CHECKOUT_MESSAGE,
        canShowCheckoutMessage:false,
    };
}

export { hideCheckoutMessage };
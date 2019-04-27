import { SET_CUSTOMER_ADDRESS } from "./constants";  

const setCustomerAddress = (customerAddress) => {
    return {
        type: SET_CUSTOMER_ADDRESS,
        customerAddress,
    }
}

export { setCustomerAddress };  
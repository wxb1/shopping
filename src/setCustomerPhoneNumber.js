import { SET_CUSTOMER_PHONENUMBER } from "./constants";

const setCustomerPhoneNumber = (customerPhoneNumber) => {
    return {
        type: SET_CUSTOMER_PHONENUMBER,
        customerPhoneNumber,
    }
}

export { setCustomerPhoneNumber };      

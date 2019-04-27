import { SET_CUSTOMER_NAME } from "./constants";        

       
const setCustomerName = (customerName) => {
    return {
        type: SET_CUSTOMER_NAME,
        customerName,
    }
}

export { setCustomerName };
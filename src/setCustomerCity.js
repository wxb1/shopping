import { SET_CUSTOMER_CITY } from "./constants";  

 
const setCustomerCity = (customerCity) => {
    return {
        type: SET_CUSTOMER_CITY,
        customerCity,
    }
}

export { setCustomerCity };  
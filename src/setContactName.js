   
import { SET_CONTACT_NAME } from './constants';

const setContactName = (contactName) => {
    return {
        type: SET_CONTACT_NAME,
        contactName,
    }
} 

export { setContactName };
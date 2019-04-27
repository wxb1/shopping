   
import { SET_CONTACT_SUBJECT } from './constants';

const setContactSubject = (contactSubject) => {
    return {
        type: SET_CONTACT_SUBJECT,
        contactSubject,
    }
} 

export { setContactSubject };
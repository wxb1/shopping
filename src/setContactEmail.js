import { SET_CONTACT_EMAIL } from './constants';

const setContactEmail = (contactEmail) => {
    return {
        type: SET_CONTACT_EMAIL,
        contactEmail,
    }
} 

export { setContactEmail };
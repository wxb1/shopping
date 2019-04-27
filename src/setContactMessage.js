import { SET_CONTACT_MESSAGE } from './constants';

const setContactMessage = (contactMessage) => {
    return {
        type: SET_CONTACT_MESSAGE,
        contactMessage,
    }
} 

export { setContactMessage };

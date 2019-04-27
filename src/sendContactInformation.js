import { SEND_CONTACT_INFORMATION } from  './constants';

const sendContactInformation = () => {
    return {
        type: SEND_CONTACT_INFORMATION,
    }
}

export { sendContactInformation };
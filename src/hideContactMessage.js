import { SET_CAN_SHOW_CONTACT_MESSAGE }from "./constants";

const hideContactMessage = () => {
    return {
        type: SET_CAN_SHOW_CONTACT_MESSAGE,
        canShowContactMessage: false,
    };
}

export { hideContactMessage };
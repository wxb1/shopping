import { connect } from 'react-redux';
import ContactUs from './ContactUs';
import { setContactName    } from './setContactName';
import { setContactEmail   } from './setContactEmail';
import { setContactSubject } from './setContactSubject';
import { setContactMessage } from './setContactMessage';
import { sendContactInformation } from './sendContactInformation';
import { hideContactMessage } from './hideContactMessage';


const mapStateToProps = (state) => {
    return {
        contact: state.inventory.contact,
        contactDetails: state.inventory.contactDetails,
        canShowContactMessage: state.inventory.canShowContactMessage,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
                onSetContactName: (contactName) => {
                    dispatch(setContactName(contactName));
                },
                onSetContactEmail: (contactEmail) => {
                    dispatch(setContactEmail(contactEmail));
                },
                onSetContactSubject: (contactSubject) => {
                    dispatch(setContactSubject(contactSubject));
                },
                onSetContactMessage: (contactMessage) => {
                    dispatch(setContactMessage(contactMessage));
                },
                onSendContactInformation: ()=> {
                    dispatch(sendContactInformation());
                },
                onHideContactMessage: ()=> {
                    dispatch(hideContactMessage());
                },
    };
}

const ContactUsContainer = connect(mapStateToProps,mapDispatchToProps)(
    ContactUs
);

export default ContactUsContainer;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';


class ContactUs extends React.Component {

    constructor(props) {
        super(props);

        this.state = { validated: false };
    }

    /*rubric57*user should see fields name, email, subject down list, text area message*/
    /*rubric58*user should see email and phone number for the buisness*/
    /*rubric58*user should see button labeled "Send"*/
    /*rubric60*user should see alert message sent*/
    /*rubric61*user should see validation errors if form isn't filled out properly*/
  render() {
    const { validated } = this.state;
    return ( 
        <Container fluid={true} >
            <Row>
                <Col>
                    <Form noValidate validated={validated} onSubmit={(e) => {

                            const form = e.currentTarget;

                            if (form.checkValidity() === false) {
                                e.preventDefault();
                                e.stopPropagation();
                                this.setState({ validated: true });
                            } else {
                                e.preventDefault();
                                e.stopPropagation();
                                this.props.onSendContactInformation();
                            }

                        }}>
                        <Form.Group controlId="contactUs">
                            <Form.Label>Enter Contact Details</Form.Label>
                            <Form.Group controlId="contactName">
                                <Form.Control type="text" placeholder="Name" value={this.props.contact.name} required onChange={(e)=>{
                                    this.props.onSetContactName(e.target.value);
                                }}/>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a contact name
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="contactEmail">
                                <Form.Control type="email" placeholder="Email"  value={this.props.contact.email} required onChange={(e)=>{
                                    this.props.onSetContactEmail(e.target.value);
                                }}/>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a contact email
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="contactSubject">
                                <Form.Control as="select" placeholder="Subject" onChange={(e)=>{
                                    this.props.onSetContactSubject(e.target.value);
                                }}>
                                    <option>Technical Support</option>
                                    <option>Feature Request</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="contactMessage">
                                <Form.Control as="textarea" rows="10" placeholder="Message" value={this.props.contact.message} required onChange={(e)=>{
                                    this.props.onSetContactMessage(e.target.value);
                                }}/>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a contact message
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Send
                        </Button>
                    </Form>
                </Col>
                <Col>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="results">Have questions about Grocery Cloud? Feel free to contact us!</Form.Label>
                            <Form.Label className="results">Email:support@grocerycloud.com</Form.Label>
                            <Form.Label className="results">Phone: 123-456-7890</Form.Label>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Modal show={this.props.canShowContactMessage} onHide={()=>{
                this.props.onHideContactMessage();
                }}>
                <Modal.Header closeButton>
                    <Modal.Title>Grocery Cloud</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label className="results">Hi {this.props.contactDetails.name}!</Form.Label>
                    <Form.Label className="results">Thank you for your interest in grocery cloud!</Form.Label>
                    <Form.Label className="results">Someone will contact you about your comments/questions concerning {this.props.contactDetails.subject}</Form.Label>
                    <Form.Label className="results">An e-mail response will be sent to {this.props.contactDetails.email} as soon as possible.</Form.Label>
                </Modal.Body>
            </Modal>
        </Container>
  );

  }

}

export default ContactUs;

/*
<Form>
                        <Form.Group controlId="contactUs">
                            <Form.Label>Enter Shipping Details</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                            <Form.Control type="email" placeholder="Email" />
                            <Form.Control as="select" placeholder="Subject" >
                                <option>Technical Support</option>
                                <option>Feature Request</option>
                            </Form.Control>
                            <Form.Control as="textarea" rows="10" placeholder="Message"/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Send
                        </Button>
                    </Form>
*/
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';


class ContactUs extends React.Component {

  render() {
      
    return ( 
        <Container fluid={true} >
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
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
        </Container>
  );

  }

}

export default ContactUs;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class AboutUs extends React.Component {

  render() {
      
    return ( 
        <Container fluid={true} >
            <Row>
                <Col>
                    About Us
                </Col>
            </Row>
        </Container>
  );

  }

}

export default AboutUs;
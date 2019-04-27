import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AboutUs.css';
import aboutImage from './th.jpg';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import aboutBackgroundImage from './thKCQRL47T.png';
import Fade from 'react-bootstrap/Fade';

class AboutUs extends React.Component {

  render() {

    const backgroundStyle = {
        backgroundImage: 'url(' + aboutBackgroundImage + ')',
    }

    /*rubric63*User should see an about page that is visually appealing*/
    return ( 
        <Container fluid={true} className="rowContainer" >
            <Row className="aboutContainer aboutBackground" style = {backgroundStyle}>

                <Fade in={true} appear={true} timeout={500} >
                <Card className="aboutCard" border="primary" style={{ width: '18rem' }}>
                    <Card.Header>Who we are</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            We are a collaboration of local grocers. We have years of grocery store experience. We are the fastest growing online grocery store in the world!
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Fade>

                <div className="aboutCell borderCell">
                    <Image src={aboutImage} roundedCircle/>
                </div>

                <Fade in={true} appear={true} timeout={500} >
                <Card className="aboutCard" border="primary" >
                    <Card.Header>What we do</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            We deliver groceries directly to your doorstep. We carry the best brand foods that are allways in stock. And our quality food and customer service are  unmatched.
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Fade>

            </Row>
        </Container>
  );

  }

}

export default AboutUs;

/*
                <Col>
                    About Us
                </Col>
*/
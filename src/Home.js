import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './Home.css';

/*
1a. Home page will contain a carousel that cycles through featured products
1b. Home page will contain a button that links to the Shopping Page 
*/

class Home extends React.Component {

  render() {
      
    return ( 
        <Container fluid={true} >
            <Row>
                <Col>
                    <Carousel className="carouseldim">
                        <Carousel.Item>
                            <a href ="/productdetail">                        
                                <img className="d-block w-100" src="holder.js/800x400?text=First slide&bg=373940" alt="First slide" />
                            </a>
                        </Carousel.Item>
                        <Carousel.Item>
                            <a href ="/productdetail">
                                <img className="d-block w-100" src="holder.js/800x400?text=Second slide&bg=282c34" alt="Second slide" />
                            </a>
                        </Carousel.Item>
                        <Carousel.Item>
                            <a href ="/productdetail">
                                <img className="d-block w-100" src="holder.js/800x400?text=Third slide&bg=282c34" alt="Third slide" />
                            </a>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Row>
                <Col>
                    Carousel Tracker
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary" href="/category">Go Shopping</Button>
                </Col>
            </Row>
        </Container>
  );

  }

}

export default Home;
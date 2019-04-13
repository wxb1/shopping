import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './ProductDetails.css';

/*
    3a. Product page will contain an image of the product 
    3bi. Product Name 
    3bii. Price 
    3biii. Rating 
    3biv. Stock status 
    3bv. Description 
    3c. Product page will contain a button to add the product to the cart 
    3d. Product page will contain an input field to specify the quantity of items to add to the cart 
    3e. Product page will contain a button to go back to the Shopping page 
*/

class ProductDetail extends React.Component {

  render() {
      
    return ( 
        <Container fluid={true} >
            <Row>
                <Col>
                    <Button variant="primary" href="/">Back</Button>
                    <Image className="productimage" src="holder.js/171x180" rounded />
                </Col>
                <Col>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="results">Pear</Form.Label>
                            <Form.Label className="results">Rating: 4 /5</Form.Label>
                            <Form.Label className="results">Stock: 150</Form.Label>
                            <Form.Label className="results">$1.19</Form.Label>
                            <Form.Label className="results">Oranic D'Anjou pears, large. Pricded per each</Form.Label>
                            <Form.Label>Qty:</Form.Label><Form.Control type="number" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Add
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
  );

  }

}

export default ProductDetail;
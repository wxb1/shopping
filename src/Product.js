import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Product extends React.Component {

  render() {
      
    return ( 
        <Container fluid={true} >
            <Row>
                <Col>
                    Category Name
                </Col>
            </Row>
            <Row>
                <Col xl={2}>
                    Category/Subcategory
                </Col>
                <Col xl={10}>
                    Item
                </Col>
            </Row>
        </Container>
  );

  }

}

export default Product;
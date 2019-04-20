import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './ProductDetails.css';
import { NavLink } from 'react-router-dom';

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

export class ProductDetail extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount () {
        let params = new URLSearchParams(this.props.location.search);
        let id = params.get("id");
        this.props.onSetCurrentItem(id);
    }

    render() {
        
        let params = new URLSearchParams(this.props.location.search);
        let item = this.props.all[params.get("id")];

        return ( 
            <Container fluid={true} >
                <Row>
                    <Col>
                        <NavLink to={{pathname: "/"}} >
                            <Button variant="primary" >Back</Button>
                        </NavLink>
                        <Image className="productimage w-100" src={item.imagelink} rounded />
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="results">{item.name}</Form.Label>
                                <Form.Label className="results">Rating: {item.rating}/5</Form.Label>
                                <Form.Label className="results">Stock: {this.props.current.stock}</Form.Label>
                                <Form.Label className="results">${item.price} </Form.Label>
                                <Form.Label className="results">{item.description}</Form.Label>
                                <Form.Label>Qty:</Form.Label><Form.Control type="number" value={this.props.current.quantity} onChange={(e)=> {
                                    this.props.onSetCurrentItemQuantity(item.id, e.currentTarget.value);
                                }}/>
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={(e)=>{
                                e.preventDefault();
                                this.props.onAddCurrentItemToCart(item.id);
                            }}>
                                Add
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
    );

    }

}

//export default ProductDetail;
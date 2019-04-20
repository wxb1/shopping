import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './ShoppingCart.css';

/*

Cart Page

4a. Cart page will contain a list of products in the cart. 
4a. Product Thumbnail 
4aii. Product Name 
4aiii. Unit Price 
4aiv. Quantity (with option to increase and decrease) 
4av. Line Item Total 
4avi. Delete Button  
b. Cart page will contain a cart summary section that lists the subtotal cost, tax cost, and shipping fee. 
c. Cart page will have a checkout button.
 
*/

export class ShoppingCart extends React.Component {

  render() {
    
    let cartList = this.props.cart.map((cartItem)=> {
    
        let item = this.props.all[cartItem.id];

    return (<Form.Row key={item.id}>
        <Image src={item.imagelink} className= "thumb" thumbnail />
        <Form.Label>{item.name}</Form.Label>
        <Form.Label>{item.price}}</Form.Label>
        <Form.Control type="number" value={cartItem.quantity}  
        onChange={(e)=> {
            this.props.onSetCartItemQuantity(cartItem.id, e.currentTarget.value);
        }} />
        <Form.Label>{item.price * cartItem.quantity}</Form.Label>
        <Button variant="primary" onClick={()=>{
            this.props.onRemoveCartItem(cartItem.id);
        }}>X</Button>
    </Form.Row>);

    });

    let subtotal = 0;
    
    this.props.cart.forEach((cartItem)=>{
        let item = this.props.all[cartItem.id];
        subtotal += item.price * cartItem.quantity;
    });

    let tax = subtotal * 0.10;

    let total = subtotal + tax;

    return ( 
        <Container fluid={true} >
            <Row>
                <Col>
                    {cartList}
                </Col>
                <Col>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Enter Shipping Details</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                            <Form.Control type="text" placeholder="Address" />
                            <Form.Control type="text" placeholder="City" />
                            <Form.Control type="text" placeholder="Phone Number" />
                            <Form.Label className="results">Subtotal: {subtotal}</Form.Label>
                            <Form.Label className="results">Shipping: FREE</Form.Label>
                            <Form.Label className="results">Tax(10%): {tax} </Form.Label>
                            <Form.Label className="results">Total: {total}</Form.Label>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={(e)=>{
                            e.preventDefault();
                            this.props.onCustomerCheckOut();
                        }}>
                            Check Out
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
  );

  }

}

//export default ShoppingCart;


/*
                    <Form>
                        <Form.Row>
                            <Image src="holder.js/171x180" rounded />
                            <Form.Label>Baby Socks</Form.Label>
                            <Form.Label>$2.00</Form.Label>
                            <Form.Control type="number" />
                            <Form.Label>$4.00</Form.Label>
                            <Button variant="primary">X</Button>
                        </Form.Row>
                        <Form.Row>
                            <Image src="holder.js/171x180" rounded />
                            <Form.Label>Baby Bottle</Form.Label>
                            <Form.Label>$8.00</Form.Label>
                            <Form.Control type="number" />
                            <Form.Label>$8.00</Form.Label>
                            <Button variant="primary">X</Button>
                        </Form.Row>
                        <Form.Row>
                            <Form.Label className="results">Subtotal: $12.00</Form.Label>
                        </Form.Row>
                    </Form>
*/
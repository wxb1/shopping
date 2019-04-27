import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './ShoppingCart.css';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
//import FormExample from './FormExample';

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

    constructor(props) {
        super(props);
    
        this.state = { validated: false };
      }
    
      handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            this.setState({ validated: true });
        } else {
            event.preventDefault();
            event.stopPropagation();
            this.props.onCustomerCheckOut();
        }
        //this.setState({ validated: true });
      }

  render() {
    
    /*rubric47*user should see table with image, name, unit price, quantity as input field, total cost and remove button*/
    /*rubric53*user should see cost details section update items are removed from shopping cart*/
    /*rubric54*user should remove an item from the shopping cart*/
    /*rubric55*user should see cost column in table update if the quantity input changes*/
    let cartList = this.props.cart.map((cartItem)=> {
    
        let item = this.props.all[cartItem.id];

    return (<Row key={item.id}>
        <Col><Image src={item.imagelink} className= "thumb" thumbnail /></Col>
        <Col><Form.Label>{item.name}</Form.Label></Col>
        <Col><Form.Label>{item.price}</Form.Label></Col>
        <Col><Form.Control id="checkoutQuantity" type="number" value={cartItem.quantity}  
        onChange={(e)=> {
            this.props.onSetCartItemQuantity(cartItem.id, e.currentTarget.value);
        }} />
        </Col>
        <Col><Form.Label>{item.price * cartItem.quantity}</Form.Label></Col>
        <Col><Button variant="primary" onClick={()=>{
            this.props.onRemoveCartItem(cartItem.id);
        }}>X</Button></Col>
    </Row>);

    });



    //////////////////////////////////////////////////////////////////////////////////////


    let subtotal = 0;
    
    this.props.cart.forEach((cartItem)=>{
        let item = this.props.all[cartItem.id];
        subtotal += item.price * cartItem.quantity;
    });

    let tax = subtotal * 0.10;

    let total = subtotal + tax;

    /*rubric48*user should see a form labeled shipping details, with user name, address, city and phone number with placeholders with what they represent*/
    /*rubric49*user should see section showing subtotal cost of items in shopping cart, shipping costs, tax cost and total cost*/
    /*rubric50*user should see checkout button*/
    /*rubric51*user should see alert with shipping details and total cost*/
    /*rubric52*user should see valiation errors if form isn't filled out right*/
    const { validated } = this.state;
    return ( 
        <Container fluid={true} >
            <Row>
                <Col>
                    <Container fluid={true}>
                    <Row><Col>Image</Col><Col>Name</Col><Col>Unit Price</Col><Col>Qty</Col><Col>Cost</Col><Col>Remove</Col></Row>
                    {cartList}
                    </Container>
                </Col>
                <Col>
                <Form
          noValidate
          validated={validated}
          onSubmit={e => this.handleSubmit(e)}
        >
                        <Form.Group controlId="shipDetails">
                            <Form.Label>Enter Shipping Details</Form.Label>
                            <Form.Group controlId="customerName">
                                <Form.Control type="text" placeholder="Name" required value={this.props.customer.name } onChange={(e)=>{
                                    this.props.onSetCustomerName(e.target.value);
                                }}/>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a customer name
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="customerAddress">
                                <Form.Control type="text" placeholder="Address" required value={this.props.customer.address} onChange={(e)=>{
                                    this.props.onSetCustomerAddress(e.target.value);
                                }}/>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a customer address
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="customerCity">
                                <Form.Control type="text" placeholder="City" required value={this.props.customer.city} onChange={(e)=>{
                                    this.props.onSetCustomerCity(e.target.value);
                                }}/>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a customer city
                                </Form.Control.Feedback>
                            </Form.Group> 
                            <Form.Group controlId="customerPhoneNumber">
                                <Form.Control type="text" placeholder="Phone Number" required value={this.props.customer.phoneNumber} onChange={(e)=>{
                                    this.props.onSetCustomerPhoneNumber(e.target.value);
                                }}/>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a phone number
                                </Form.Control.Feedback>
                            </Form.Group>            
                            <Form.Label className="results">Subtotal: {subtotal}</Form.Label>
                            <Form.Label className="results">Shipping: FREE</Form.Label>
                            <Form.Label className="results">Tax(10%): {tax} </Form.Label>
                            <Form.Label className="results">Total: {total}</Form.Label>
                        </Form.Group>
                        <Button variant="primary" type="submit" >
                            Check Out
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Modal show={this.props.canShowCheckoutMessage} onHide={()=>{
                this.props.onHideCheckoutMessage()
                }}>
                <Modal.Header closeButton>
                    <Modal.Title>Grocery Cloud</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label className="results">Thank you for shopping with grocery cloud. Your products will be shipped to:</Form.Label>
                    <Form.Label className="results">{this.props.orderDetails.name}</Form.Label>
                    <Form.Label className="results">{this.props.orderDetails.address} </Form.Label>
                    <Form.Label className="results">{this.props.orderDetails.city}</Form.Label>
                    <Form.Label className="results">{this.props.orderDetails.phoneNumber}</Form.Label>
                </Modal.Body>
                <Modal.Footer>
                        Your total cost is: {this.props.orderDetails.totalCost}
                </Modal.Footer>
            </Modal>
        </Container>
  );

  }

}


/*
                    <Form  validate={true} onSubmit={e=>this.handleSubmit(e)}>
                        <Form.Group controlId="shipDetails">
                            <Form.Label>Enter Shipping Details</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                            <Form.Control type="text" placeholder="Address" />
                            <Form.Control type="text" placeholder="City" />
                            <Form.Group controlId="phoneNumberValidator">
                                <Form.Control type="text" placeholder="Phone Number" required/>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a phone number
                                </Form.Control.Feedback>
                            </Form.Group>            
                            <Form.Label className="results">Subtotal: {subtotal}</Form.Label>
                            <Form.Label className="results">Shipping: FREE</Form.Label>
                            <Form.Label className="results">Tax(10%): {tax} </Form.Label>
                            <Form.Label className="results">Total: {total}</Form.Label>
                        </Form.Group>
                        <Button variant="primary" type="submit" >
                            Check Out
                        </Button>
                    </Form>
*/

/*
                        console.log('hello');
                     const form = e.currentTarget;
                     if (form.checkValidity() === false) {
                         e.preventDefault();
                         e.stopPropagation();
                     } else {
                         e.preventDefault();
                         e.stopPropagation();
                         this.props.onCustomerCheckOut();
                     }
                    }}>
*/

/*
                        <Button variant="primary" type="submit" onClick={(e)=>{



                            const form = e.currentTarget;
                            if (form.checkValidity() === false) {
                                e.preventDefault();
                                e.stopPropagation();
                            } else {
                                e.preventDefault();
                                e.stopPropagation();
                                this.props.onCustomerCheckOut();
                            }
                        }}>
                            Check Out
                        </Button>
*/
//export default ShoppingCart;

/*
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

*/


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
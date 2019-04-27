import React from 'react';
import './Border.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import  Image from 'react-bootstrap/Image';
import grocerycloud3 from './grocerycloud3.png';
import Nav from 'react-bootstrap/Nav';

/*
Header 

5ai. Grocery Cloud title 
5aii. Link to Home Page 
5aiii. Link to Shopping Page 
5aiv. Link to Cart

*/

/*

Footer

6ai. Copyright/Logo 
6aii. Email Address 
6aiii. Contact Us (web form) 
6aiv. About us 

*/

//<Row><Col className="c">Grocery Cloud</Col></Row>

class Border extends React.Component {

  render() {

      let border = <Row as={'header'}><Col className="c">Grocery Cloud</Col></Row>;

      if ( this.props.borderStyle === 'header') {
          /*rubric65*user shall see a link to the home page*/
          /*rubric66*user shall see a link to the shopping page*/    
          /*rubric67*user shall see a link to the cart page*/     
          /*rubric69*user clicks on home link and navigates to home page*/
          /*rubric70*user clicks on shopping link and navigates to shopping page*/
          /*rubric71*user clicks on cart link and navigates to cart page*/
            border = <Row as={'header'}><Col className="c"><Image fluid src={grocerycloud3} ></Image></Col></Row>;
        } else {

          //<Row><Col>support@grocerycloud.com</Col><Col className="d-flex justify-content-center">Contact Us</Col><Col className="d-flex justify-content-end">About Us</Col></Row>
          
          /*rubric64*about page is accessible at  at http://localhost:8080/#/about */
          /*rubric73*user shall see a link to the home page*/
          /*rubric74*user shall see a link to the about page*/
          /*rubric75*user shall see a link to the contact page*/
          /*rubric76*user clicks on home link and navigates to home page*/
          /*rubric77*user clicks on about link and navigates to about page*/
          /*rubric78*user clicks on contact link and navigates to contact page*/
          border = (
                      <Row as={'footer'}>
                        <Col>
                          <Container>
                            <Row><Col className="l"><Nav.Link className="activelink" href="mailto:support@grocerycloud.com">support@grocerycloud.com</Nav.Link></Col><Col className="c"><NavLink className="activelink nav-link" to="/contact">Contact Us</NavLink></Col><Col className="r"><NavLink className="activelink nav-link" to="/about">About Us</NavLink></Col></Row>
                            <Row><Col className="c"><NavLink className="activelink nav-link" to="/" >Grocery Cloud</NavLink></Col></Row>
                            <Row><Col className="c">Copyright 2019</Col></Row>
                          </Container>
                        </Col>
                      </Row>
                      );
      }

    return border;

  }

}

export default Border;

/*
render() {
      let border = <header>Header</header>;
      if ( this.props.borderStyle === 'header') {
            border = <header>Header</header>;
      } else {
          border = <footer>Footer</footer>
      }

    return border;

  }
*/
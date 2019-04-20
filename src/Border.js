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

class Border extends React.Component {

  render() {

      let border = <Row as={'header'}><Col className="c">Grocery Cloud</Col></Row>;

      if ( this.props.borderStyle === 'header') {
            border = <Row as={'header'}><Col className="c"><Image fluid src={grocerycloud3} ></Image></Col></Row>;
        } else {

          //<Row><Col>support@grocerycloud.com</Col><Col className="d-flex justify-content-center">Contact Us</Col><Col className="d-flex justify-content-end">About Us</Col></Row>
            border = (
                      <Row as={'footer'}>
                        <Col>
                          <Container>
                            <Row><Col className="l"><Nav.Link className="activelink" href="mailto:support@grocerycloud.com">support@grocerycloud.com</Nav.Link></Col><Col className="c"><NavLink className="activelink nav-link" to="/contactus">Contact Us</NavLink></Col><Col className="r"><NavLink className="activelink nav-link" to="/aboutus">About Us</NavLink></Col></Row>
                            <Row><Col className="c">Grocery Cloud</Col></Row>
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
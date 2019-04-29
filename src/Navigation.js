
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import Image from 'react-bootstrap/Image';
import grocerycloud3 from './grocerycloud3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

class Navigation extends React.Component {

  render() {

    let totalQuantity = 0;
    this.props.cart.forEach((cartItem)=>{
      totalQuantity += cartItem.quantity;
  });

    //lg
//React-Bootstrap
//Cart

/*
<Nav.Link><NavLink to={{pathname: "/category"}}>Shop All</NavLink></Nav.Link>
*/
/*
          <Nav.Link><NavLink to={{pathname: "/"}}>Home</NavLink></Nav.Link>
          <Nav.Link><NavLink to={{pathname: "/shopping"}}>Shop All</NavLink></Nav.Link>
          <NavLink to={{pathname: "/"}}>Home</NavLink>
          <NavLink to={{pathname: "/shopping"}}>Shop All</NavLink>
          <span class="fa-layers-counter fa-2x centerCounter" data-fa-transform="right-100">{totalQuantity}</span>

                  <Nav.Link>
          <NavLink to={{pathname: "/cart"}}>
          <span className="fa-layers fa-fw">
            <FontAwesomeIcon icon={faShoppingCart} size="2x" color="#77a2d0" />
            <span className="fa-layers-counter fa-2x centerCounter" data-fa-transform="right-100">{totalQuantity}</span>
          </span>
        </NavLink>
        </Nav.Link>
*/

    /*rubric13*home page is accessible at http://localhost:8080/#*/
    /*rubric34*shopping page is accessible at http://localhost:8080/#/shopping*/
    /*rubric65*user should see link to home page*/
    /*rubric66*user should see link to shopping page*/
    /*rubric67*user should see link to cart page*/
    /*rubric69*user clicks on home page link takes them to home page*/
    /*rubric69*user clicks on shopping page link takes them to shopping page*/
    /*rubric69*user clicks on cart page link takes them to cart page*/
    return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand ><Image src={grocerycloud3} width="auto" height="30px" className="d-inline-block align-top"></Image></Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink className="nav-link linkColor" to={{pathname: "/"}}>Home</NavLink>
          <NavLink className="nav-link linkColor" to={{pathname: "/shopping"}}>Shop All</NavLink>
        </Nav>
        <Nav className="justify-content-end">
          <NavLink className="nav-link" to={{pathname: "/cart"}}>
            <span className="fa-layers fa-fw">
              <FontAwesomeIcon icon={faShoppingCart} size="2x" color="#77a2d0" />
              <span className="fa-layers-counter fa-2x centerCounter" data-fa-transform="right-100">{totalQuantity}</span>
            </span>
          </NavLink>
        </Nav>
      </Navbar>);

  }

}

export default Navigation;
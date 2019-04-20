
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import Image from 'react-bootstrap/Image';
import grocerycloud3 from './grocerycloud3.png';

class Navigation extends React.Component {

  render() {
//lg
//React-Bootstrap
    return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand ><Image src={grocerycloud3} width="auto" height="30px" className="d-inline-block align-top"></Image></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link><NavLink to={{pathname: "/"}}>Home</NavLink></Nav.Link>
          <Nav.Link><NavLink to={{pathname: "/category"}}>Shop All</NavLink></Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
        <Nav.Link><NavLink to={{pathname: "/shoppingcart"}}>Cart</NavLink></Nav.Link>
        </Nav>
      </Navbar>);

  }

}

export default Navigation;
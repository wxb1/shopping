
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Navigation extends React.Component {

  render() {

    return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/category">Go Shopping</Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link href="/shoppingcart">Cart</Nav.Link>
        </Nav>
      </Navbar>);

  }

}

export default Navigation;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Category.css';

/*
    2a. Shopping Page will contain a collapsible category menu
*/

class Category extends React.Component {

  render() {
      
    return ( 
        <Container fluid={true} >
            <Row>
                <Col xl={2}>
                    <Container>
                        <Row>
                            <Col>
                                <Dropdown>
                                    <Dropdown.Toggle>
                                        Household and Beauty
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item eventKey="2">Baby Care</Dropdown.Item>
                                        <Dropdown.Item eventKey="3">Drug Store</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Health and Personal Care</Dropdown.Item>
                                        <Dropdown.Item eventKey="3">Household Supplies</Dropdown.Item>                   
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <Dropdown>
                            <Dropdown.Toggle>
                            Pantry Items
                                    </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey="2">Beverages</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Canned Food</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Cooking and Baking Needs</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Pasta and Noodles</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Snacks</Dropdown.Item>                     
                                </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col xl={10}>
                    <CardColumns>
                        <Card>
                            <Card.Header>Baby Bottle</Card.Header>
                            <Card.Img/>
                            <Card.Footer><Button variant="primary">Add</Button></Card.Footer>
                        </Card>
                        <Card>
                            <Card.Header>Baby Suit</Card.Header>
                            <Card.Img/>
                            <Card.Footer><Button variant="primary">Add</Button></Card.Footer>
                        </Card>
                        <Card>
                            <Card.Header>Baby Girl Suit</Card.Header>
                            <Card.Img/>
                            <Card.Footer><Button variant="primary">Add</Button></Card.Footer>
                        </Card>
                        <Card>
                            <Card.Header>Baby Girl Stroller</Card.Header>
                            <Card.Img/>
                            <Card.Footer><Button variant="primary">Add</Button></Card.Footer>
                        </Card>
                    </CardColumns>
                </Col>
            </Row>
        </Container>
  );

  }

}

export default Category;
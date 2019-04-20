import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Category.css';
import Form from 'react-bootstrap/FormControl';
import FormCheck from 'react-bootstrap/FormCheck';


/*
    2a. Shopping Page will contain a collapsible category menu
*/

export class Category extends React.Component {

  render() {

      let categories = Object.keys(this.props.categorized).map((category)=>{

            let subCategories = Object.keys(this.props.categorized[category]).map((subCategory)=>{
                return (<Dropdown.Item eventKey="2" onClick={(e)=>{
                    e.preventDefault();
                    this.props.onSetCurrentCategory(category,subCategory);
                }}>{subCategory}</Dropdown.Item>);
            });

            return (<Row>
            <Col>
                <Dropdown>
                    <Dropdown.Toggle>
                        {category}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {subCategories}           
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
        </Row>);
      })

    let categoryItems = this.props.currentCategory.map((id)=>{
        let item = this.props.all[id];
        return (
        <Card>
            <Card.Header>{item.description}</Card.Header>
            <Card.Img src={item.imagelink} className="cardSize" />
            <Card.Footer><Button variant="primary" onClick={(e)=>{
                                e.preventDefault();
                                this.props.onAddItemToCart(item.id);
                            }}>Add</Button></Card.Footer>
        </Card>
        );
    });

    let sortOptions = this.props.sortAction.map((sortOption)=>{
        return (<Dropdown.Item onClick={(e)=>{
            e.preventDefault();
            this.props.onSortCurrentCategoryItems(sortOption.sortNumber);
        }}>{sortOption.sortName}</Dropdown.Item>);
    });

    return ( 
        <Container fluid={true} >
            <Row>
                <Col xl={2}>
                    <Container>
                        {categories}
                    </Container>
                </Col>
                <Col xl={10}>
                    <Container>
                        <Row>
                            <Col>
                            <FormCheck.Label>In Stock Only</FormCheck.Label><FormCheck.Input type="checkbox" onChange={(e)=>{
                                
                                let checked = e.target.checked;
                                
                                if ( checked ) {
                                    this.props.onFilterCurrentCategoryItems();
                                } else {
                                    this.props.onUnfilterCurrentCategoryItems();
                                }

                            }}/>
                            </Col>
                            <Col>
                                <Dropdown>
                                    <Dropdown.Toggle>
                                        Sort By
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {sortOptions}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <CardColumns>
                                    {categoryItems}
                                </CardColumns>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
  );

  }

}

//export default Category;

/*
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
*/
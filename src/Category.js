import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Category.css';
import FormCheck from 'react-bootstrap/FormCheck';
import { NavLink } from 'react-router-dom';

/*
    2a. Shopping Page will contain a collapsible category menu
    2b. Shopping page will display items based on the selected category and filters 
    2c. Shopping page will contain a settings bar that allows the user to do the following: 
    2i. Sort items by price 
    2ii. Show only stocked items 
    2iii. Filter items by price (not in rubric?)
*/

export class Category extends React.Component {

  render() {

      /*rubric19*user shall see category menu that displays all the categories*/
      let categories = Object.keys(this.props.categorized).map((category)=>{

            let subCategories = Object.keys(this.props.categorized[category]).map((subCategory)=>{

                /*rubric26*user clicks subcategory repopulates grid with subcategory items*/
                return (<Dropdown.Item key={subCategory} eventKey="2" onClick={(e)=>{
                    e.preventDefault();
                    this.props.onSetCurrentCategory(category,subCategory);
                }}>{subCategory}</Dropdown.Item>);
            });

            /*rubric25*user clicks on category name toggles a subcategory dropdown*/
            return (<Row key={category}>
            <Col>
                <Dropdown >
                    <Dropdown.Toggle variant="link">
                        {category}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="categoryDropdownMenu">
                        {subCategories}           
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
        </Row>);
      })

      //<Card.Header>{item.description}</Card.Header>
      //<NavLink to={{ pathname: "/productdetail", search: `?id=${item.id}` }}>{item.name}</NavLink>
  //<NavLink to={{ pathname: "/productdetail", search: `?id=${item.id}` }}> 

    /*rubric21*users shall see name of product displayed*/
    /*rubric22*users shall see price of product displayed*/
    /*rubric23*users shall see image of product displayed*/
    /*rubric24*users shall see a button labeled Add displayed*/
    /*rubric30*user clicks add button and 1 unit product added*/
    /*rubric31*user clicks on product image taken to product page with details shown*/
    /*rubric32*user clicks on product name taken to product page with details shown*/
    /*rubric46*shopping page is accessible at http://localhost:8080/#/product?name=productname*/
    let categoryItems = this.props.currentCategory.map((id)=>{

        let item = this.props.all[id];
        return (
        <Card className="cardBox">
            <Card.Title className="cardTitle">
                <NavLink to={{ pathname: "/product", search: `?id=${item.id}` }}>{item.name}</NavLink>
            </Card.Title>
            <Card.Subtitle className="cardSubtitle">{item.description}</Card.Subtitle>
            <NavLink to={{ pathname: "/product", search: `?id=${item.id}` }}> 
                <Card.Img src={item.imagelink} className="cardSize" />
            </NavLink>
            <Card.Footer><Card.Text>{item.price}</Card.Text><Button variant="primary" onClick={(e)=>{
                                e.preventDefault();
                                this.props.onAddItemToCart(item.id);
                            }}>Add</Button></Card.Footer>
        </Card>
        );
    });

    /*rubric18*user shall see drop down list labeled SortBy with options (None,Price,Alphabetical,Rating)*/
    let sortOptions = this.props.sortAction.map((sortOption)=>{
        /*rubric33*user select sort method and should recorder products grid*/
        return (<Dropdown.Item key={sortOption.sortName} onClick={(e)=>{
            e.preventDefault();
            this.props.onSortCurrentCategoryItems(sortOption.sortNumber);
        }}>{sortOption.sortName}</Dropdown.Item>);
    });

    /*rubric15*user shall see control bar section that shows the categeory name*/
    /*rubric16*user shall see control bar section that displays total number of items in category*/
    /*rubric27*user clicks subcategory name of selected category shows in control bar*/
    /*rubric28*user shall see number of items of total items in category when subcategory or in stock selected*/
    /*rubric29*user clicks "in stock only" then only in stock items should display*/
    let category = this.props.currentCategoryInfo.category;
    let subCategory = this.props.currentCategoryInfo.subCategory;      
    let categoryInformation = (category.length > 0) ? `Showing ${this.props.currentCategory.length} of ${this.props.categorized[category][subCategory].length} in ${subCategory}` : "";

    let sortNumber = this.props.sortNumber;
    let sortAction = this.props.sortAction[sortNumber];
    let sortName = sortAction.sortName;

    /*rubric14*user shall see a controls bar*/
    /*rubric17*user shall see toggle switch labeled "In Stock Only"*/
    /*rubric20*user shall see a grid products of selected category*/
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
                            {categoryInformation}
                            </Col>
                            <Col>
                            <FormCheck.Input type="checkbox" onChange={(e)=>{
                                
                                let checked = e.target.checked;
                                
                                if ( checked ) {
                                    this.props.onFilterCurrentCategoryItems();
                                } else {
                                    this.props.onUnfilterCurrentCategoryItems();
                                }

                            }}/><FormCheck.Label>In Stock Only</FormCheck.Label>
                            </Col>
                            <Col>
                                <Dropdown>
                                    <Dropdown.Toggle variant="link">
                                        Sort By - {sortName}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {sortOptions}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <CardColumns className="cardsContainter">
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
 <FormCheck.Input className="toggleLeft" type="checkbox" onChange={(e)=>{
                                    
                                  
                                    let checked = e.target.checked;
                                    
                                    if ( checked ) {
                                        this.props.onPlayCarousel();
                                    } else {  
                                        this.props.onPauseCarousel();
                                    }

                                }}/> <FormCheck.Label className="toggleLabelLeft">Toggle Slide Show</FormCheck.Label>




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
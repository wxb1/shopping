import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './Home.css';
import { NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/FormControl';
import FormCheck from 'react-bootstrap/FormCheck';

/*
1a. Home page will contain a carousel that cycles through featured products
1b. Home page will contain a button that links to the Shopping Page 
*/

/*
        return (<Carousel.Item key={item.id} className="carouselborder">
            <a href ={`/productdetail?id=${item.id}`} >                        
                <img className="d-block h-100 carouselimage" src={item.imagelink} alt="First slide" />
            </a>
        </Carousel.Item>);

        <NavLink className="buttonLocation" to={{pathname: "/category"}}>
*/
export class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        if ( this.props.preview === null || this.props.preview.length === 0 ) {
            this.props.onAddInventoryItems();
        }
    }
//<img className="d-block w-100" src={item.imageLink} alt="First slide" />
//<NavLink to={{ pathname: "/productdetail", search: `?id=${item.id}` }}> 

  /*rubric09*users clicks on product page then taken to details page*/
  /*rubric46*shopping page is accessible at http://localhost:8080/#/product?name=productname*/
  render() {
        let CarouselItems = this.props.preview.map((item)=>{
        let href = `/productdetail?id=${item.id}`;
        return (<Carousel.Item key={item.id} className="carouselborder">
            <NavLink to={{ pathname: "/product", search: `?id=${item.id}` }}>                        
                <img className="d-block h-100 carouselimage" src={item.imagelink} alt="First slide" />
            </NavLink>
        </Carousel.Item>);
    });

    /*rubric01*user should see carousel with >=3 slides, with 1-4 images*/
    /*rubric02*user should see left arrow button left of carousel*/
    /*rubric03*user should see right arrow button right of carousel*/
    /*rubric04*user should see text welcoming you to website*/
    /*rubric05*user should see button labeled "Shop All"*/
    /*rubric06*user should see a toggle labeled "Toggle Slide Show"*/
    /*rubric07*user clicks right arrow should move product carousel 1 slide forward*/
    /*rubric08*user clicks left arrow should move product carousel 1 slide back*/
    /*rubric11*product slides change in an animated way*/
    /*rubric12*user clicks "Shop All" then is taken to the shopping page*/
    /*rubric34*shopping page is accessible at http://localhost:8080/#/shopping*/
    return ( 
        <Container fluid={true} >
            <Row>
                <Col>
                   <FormCheck.Input className="toggleLeft" type="checkbox" onChange={(e)=>{
                                    
                                    /*rubricd10*if toggle slide show checked then slide will move forward 1 per 3s*/
                                    let checked = e.target.checked;
                                    
                                    if ( checked ) {
                                        this.props.onPlayCarousel();
                                    } else {  
                                        this.props.onPauseCarousel();
                                    }

                                }}/> <FormCheck.Label className="toggleLabelLeft">Toggle Slide Show</FormCheck.Label>           
                </Col>
            </Row>
            <Row>
                <Col>
                    <Carousel className="carouseldim" interval={this.props.carouselInterval} >
                        {CarouselItems}
                    </Carousel>
                </Col>
            </Row>
            <Row>
                <Col className="centerWelcome">
                                Welcome to Grocery Cloud!
                </Col>
            </Row>
            <Row>
                <Col className="buttonContainer">
                    <NavLink className="buttonLocation" to={{pathname: "/shopping"}}>
                        <Button variant="primary" >Shop All</Button>
                    </NavLink>
                </Col>
            </Row>
        </Container>
  );

  }

}

//export default Home;
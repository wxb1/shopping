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
  render() {
        let CarouselItems = this.props.preview.map((item)=>{
        let href = `/productdetail?id=${item.id}`;
        return (<Carousel.Item key={item.id} className="carouselborder">
            <NavLink to={{ pathname: "/productdetail", search: `?id=${item.id}` }}>                        
                <img className="d-block h-100 carouselimage" src={item.imagelink} alt="First slide" />
            </NavLink>
        </Carousel.Item>);
    });

    return ( 
        <Container fluid={true} >
            <Row>
                <Col>
                   <FormCheck.Input className="toggleLeft" type="checkbox" onChange={(e)=>{
                                    
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
                    <NavLink className="buttonLocation" to={{pathname: "/category"}}>
                        <Button variant="primary" >Shop All</Button>
                    </NavLink>
                </Col>
            </Row>
        </Container>
  );

  }

}

//export default Home;
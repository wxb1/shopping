import React from 'react';
import './Main.css';
//import Home from  './Home';
import HomeContainer from  './HomeContainer';
//import Category from './Category';
import CategoryContainer from './CategoryContainer';
import Product from './Product';
//import ProductDetail from './ProductDetail';
import ProductDetailContainer from './ProductDetailContainer';
//import ShoppingCart from './ShoppingCart';
import ShoppingCartContainer from './ShoppingCartContainer';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Switch, Route } from 'react-router-dom';

//return (<main className="row"><div className="col-lg"><Home/></div></main>);

class Main extends React.Component {

  render() {
  
    //                      <Route path="/shoppingcart" component={ShoppingCart} />
    //let screen  = [<Home/>,<Category/>,<Product/>,<ProductDetail/>,<ShoppingCart/>];
//<Route component={Home} />
//<Route exact path="/" component={Home} />
//                      <Route path="/productdetail" component={ProductDetail} />
//                      <Route path="/category" component={Category} />
    return (<Row as={'main'}>
              <Col>
                    <Switch>
                      <Route exact path="/" component={HomeContainer} />
                      <Route path="/category" component={CategoryContainer} />
                      <Route path="/product" component={Product} />
                      <Route path="/productdetail" component={ProductDetailContainer} />
                      <Route path="/shoppingcart" component={ShoppingCartContainer} />
                      <Route path="/contactus" component={ContactUs} />
                      <Route path="/aboutus" component={AboutUs} />
                      <Route component={HomeContainer} />
                    </Switch>
              </Col>
            </Row>);

  }

}

export default Main;

//return (<main>Main</main>);
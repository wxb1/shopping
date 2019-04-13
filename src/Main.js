import React from 'react';
import './Main.css';
import Home from  './Home';
import Category from './Category';
import Product from './Product';
import ProductDetail from './ProductDetail';
import ShoppingCart from './ShoppingCart';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Switch, Route } from 'react-router-dom';

//return (<main className="row"><div className="col-lg"><Home/></div></main>);

class Main extends React.Component {

  render() {
      
    //let screen  = [<Home/>,<Category/>,<Product/>,<ProductDetail/>,<ShoppingCart/>];

    return (<Row as={'main'}>
              <Col>
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path="/category" component={Category} />
                      <Route path="/product" component={Product} />
                      <Route path="/productdetail" component={ProductDetail} />
                      <Route path="/shoppingcart" component={ShoppingCart} />
                      <Route path="/contactus" component={ContactUs} />
                      <Route path="/aboutus" component={AboutUs} />
                      <Route component={Home} />
                    </Switch>
              </Col>
            </Row>);

  }

}

export default Main;

//return (<main>Main</main>);
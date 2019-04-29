import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Border  from './Border';
//import Navigation from './Navigation';
import NavigationContainer from './NavigationContainer';
import Main  from './Main';
import Container from 'react-bootstrap/Container';
import {BrowserRouter} from 'react-router-dom';
//import { addInventoryItemsAsync } from "./addInventoryItemsAsync";

//<Navigation/>

//export class App extends Component {
class App extends Component {

  componentDidMount() {
    
            /*if ( this.props.preview === null || this.props.preview.length === 0 ) {
                this.props.onAddInventoryItems();
            }*/
            
  }

   /*rubric68*header bar should always be at top of page*/
   /*rubric72*footer bar should always be at bottom of page*/
  render() {
    return (
      <Container fluid={true}>
        <BrowserRouter>
        <Border borderStyle="header" />
        <NavigationContainer/>
        <Main/>
        <Border borderStyle="footer" />
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;

/*

class App extends Component {
  render() {
    return (
      <div className="App">
        <Border borderStyle="header" />
        <Main/>
        <Border borderStyle="footer" />
      </div>
    );
  }
}

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Start from './Start';

import * as serviceWorker from './serviceWorker';

/*
call the  webservice as soon as the page loads
reset errors on the check out and contact form to non error state..
carousel doesn't rotate allways when check?
toggle does not stay checked
use flex box for shop all
check the checks..
SortBy should sho what is sorting by
format the totals in check ouit and alert...
on contact alret.. add grocery cloud
add copyrigh symbol
hover over  blocks in abouts and scale up/scale back down
validate costs on checkout page
format the screen for mobile
*/

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Start />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

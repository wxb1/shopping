import React from 'react'
import App from './App';
//import AppContainer from './AppContainer';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
import thunk from 'redux-thunk';
import { addInventoryItemsAsync } from "./addInventoryItemsAsync";


export const store = createStore(reducer,applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState());
  });

store.dispatch(addInventoryItemsAsync());

const Start = () => {

  return (
    <Provider store={store}>
      <App />
    </Provider>
  )

}

export default Start;

/*
    <Provider store={store}>
      <App />
    </Provider>
*/

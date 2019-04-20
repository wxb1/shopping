import React from 'react'
import App from './App';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
import thunk from 'redux-thunk';

export const store = createStore(reducer,applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState());
  });

const Start = () => {

  return (
    <Provider store={store}>
      <App />
    </Provider>
  )

}

export default Start
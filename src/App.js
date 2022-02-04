import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";

//store- stores data, think of state
//reducer-fucntion that used to update store
//reducer takes two arguments, state and action
//state-old state/state before update
//action-what happend/what update
//return updated or old state
//dispatch method- send actions to the store
//actions (object)- must have type property-what kind of actions
//don't immutate state- redux built on immutability

import { createStore } from 'redux'
import { Provider } from "react-redux";
import { reducer } from "./reducer";

//react-redux- Provider-wraps the whole app, connect- used in components to acces the state info

//intial store or state
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0
}

//store.getState();  returns the latest state

const store = createStore(reducer, initialStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// console.log(store.getState());

function App() {
  // cart setup
  //every component wrapped in a provider can access the store, 
  //can access the dispatch method(means setup the actions/dispatch the actions)
  //after setting everything up using connect fucntions in every component
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;

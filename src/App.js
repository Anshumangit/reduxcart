import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

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

import { INCREASE, DECREASE, RESET } from "./actions";
import { reducer } from "./reducer";

//react-redux- Provider-wraps app, connect- used in components

//intial store or state
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0
}

//store.getState();  returns the latest state

const store = createStore(reducer, initialStore)
console.log(store.getState());

function App() {
  // cart setup

  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;

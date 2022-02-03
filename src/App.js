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

//intial store or state
const initialStore = {
  count: 0,
  name: 'anshu'
}

//store.getState();  returns the latest state

//reducer
const reducer = (state, action) => {
  console.log({ state, action });
  if (action.type === DECREASE) {
    // state.count = state.count - 1; wrong because redux built on immutability and always return new state
    return { ...state, count: state.count - 1 }
  }
  if (action.type === INCREASE) {
    return { ...state, count: state.count + 1 }
  }
  if (action.type === RESET) {
    return { ...state, count: 0, name: "bob" }
  }
  if (action.type === "CHANGE_NAME") {
    return { ...state, name: 'anshuman' }
  }
  return state;
}

const store = createStore(reducer, initialStore)
store.dispatch({ type: "DECREASE" })
store.dispatch({ type: "INCREASE" })
store.dispatch({ type: "RESET" })
store.dispatch({ type: "CHANGE_NAME" })

console.log(store.getState());

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;

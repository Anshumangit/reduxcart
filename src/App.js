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

import { createStore } from 'redux'

//intial store or state
const initialStore = {
  count: 0
}

//store.getState();  returns the latest state

//reducer
const reducer = (state, action) => {
  console.log({ state, action });
  return state;
}

const store = createStore(reducer, initialStore)
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

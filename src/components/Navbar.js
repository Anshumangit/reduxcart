import React from "react";
import { connect } from "react-redux";

const Navbar = ({ amount }) => {
  return (
    <nav>
      <div className="nav-center">
        <h3>ReduxGear</h3>
        <div className="nav-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
          </svg>
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (statee) => {
  console.log(statee); //have access to the store/state (all data)
  return {
    amount: statee.amount //here we're mapping our state(here- amount) to props of a Navbar component
  }
}

export default connect(mapStateToProps)(Navbar);

//connect is used to access the store data, and that's why, it is used in every component
//connect is a HOC, it means it returns a component
//here it is returning Navbar component
//here in redux, connect also accepts to argumemts
//1. mapStateToProps 2. mapDispatchToProps and both are functions, accepts parameter, and as a
//parameter you'll have access to the store
//mapStateToProps means you map our state(store) to a props of component(here: Navbar)
//after wrapping the Navbar in connect, we have access to the state(store) and dispatch methods

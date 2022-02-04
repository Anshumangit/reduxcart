import React from "react";
import { connect } from "react-redux";
import { REMOVE, INCREASE, DECREASE } from "../actions";

const CartItem = ({ img, title, price, amount, id, remove, dispatch }) => {
  return (
    <div className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => { remove() }}>remove</button>
        {/* <button className="remove-btn" onClick={() => { dispatch({ type: REMOVE, payload: id }) }}>remove</button> */}

      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button className="amount-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // console.log(dispatch);
  console.log(ownProps);
  const { id } = ownProps;
  return {
    remove: () => { dispatch({ type: REMOVE, payload: { id: id } }) }
  }
}

export default connect(null, mapDispatchToProps)(CartItem);







// const mapStateToProps = (st) => {
//   console.log(st);
//   return {

//   }
// }
// export default connect(mapStateToProps)(CartItem);
//you can use mapStateToProps for dispatch as it is already available
//by default as props in the componen but it is not a good pratcice
//so we use separate mapDispatchToProps to pass the dispatch method as props in component

/* eslint-disable no-debugger */
/* eslint-disable no-return-assign */
/* eslint-disable no-case-declarations */
import actionTypes from '../actions/actionTypes';

function cartReducer(cartProducts = [], action) {
  // let newCartProducts = [...cartProducts];

  switch (action.type) {
    case actionTypes.LOAD_CART:
      return cartProducts;

    case actionTypes.ADD_TO_CART:
      debugger;
      return action.newCart;

    default:
      return cartProducts;
  }
}

export default cartReducer;
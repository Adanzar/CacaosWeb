import actionTypes from '../actions/actionTypes';

function cartReducer(cartProducts = [], action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return action.newCart;

    case actionTypes.DELETE_FROM_CART:
      return action.newCart;
    default:
      return cartProducts;
  }
}

export default cartReducer;

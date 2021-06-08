import actionTypes from '../actions/actionTypes';

function productsReducer(products = [], action) {
  switch (action.type) {
    case actionTypes.GET_ALL_PRODUCT:
      return action.products;
    default:
      return products;
  }
}

export default productsReducer;

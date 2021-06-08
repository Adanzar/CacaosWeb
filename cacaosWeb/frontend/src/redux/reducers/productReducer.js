import actionTypes from '../actions/actionTypes';

function productReducer(product = {}, action) {
  switch (action.type) {
    case actionTypes.CREATE_PRODUCT:
      return action.product;
    case actionTypes.UPDATE_PRODUCT:
      return action.product;
    case actionTypes.GET_ONE_PRODUCT:
      return action.product;
    case actionTypes.DELETE_PRODUCT:
      return action.product;
    default:
      return product;
  }
}

export default productReducer;

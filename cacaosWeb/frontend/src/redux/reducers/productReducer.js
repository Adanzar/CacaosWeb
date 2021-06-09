import actionTypes from '../actions/actionTypes';

function productReducer(product = {}, action) {
  switch (action.type) {
    case actionTypes.CREATE_PRODUCT:
      return action.response;
    case actionTypes.UPDATE_PRODUCT:
      return action.response;
    case actionTypes.GET_ONE_PRODUCT:
      return action.response;
    case actionTypes.DELETE_PRODUCT:
      return action.response;
    default:
      return product;
  }
}

export default productReducer;

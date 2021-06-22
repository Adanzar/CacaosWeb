import actionTypes from './actionTypes';

export function addToCart(product, cart) {
  const newCart = [...cart, product];
  return {
    type: actionTypes.ADD_TO_CART,
    newCart
  };
}

export function deleteInCart(index, cart) {
  const newCart = [...cart];
  newCart.splice(index, 1);
  return (dispatch) => {
    dispatch({
      type: actionTypes.DELETE_FROM_CART,
      newCart
    });
  };
}

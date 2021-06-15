/* eslint-disable no-debugger */
import actionTypes from './actionTypes';

export default function addToCart(product, cart) {
  const newCart = [...cart, product];
  return {
    type: actionTypes.ADD_TO_CART,
    newCart
  };
}

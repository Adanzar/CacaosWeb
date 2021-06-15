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
      // let productToAdd;
      // const item = newCartProducts
      //   .find(({ _id }) => action.product._id === _id);

      // if (item) {
      //   newCartProducts = newCartProducts.map(
      //     (product) => (action.product._id === product._id
      //       ? { ...product, quantity: item.quantity += 1 }
      //       : product)
      //   );
      // } else {
      //   productToAdd = { ...action.product, quantity: 1 };
      //   newCartProducts = [...newCartProducts, productToAdd];
      // }

    default:
      return cartProducts;
  }
}

export default cartReducer;

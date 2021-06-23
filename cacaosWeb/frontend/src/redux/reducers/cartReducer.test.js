import actionTypes from '../actions/actionTypes';
import cartReducer from './cartReducer';

describe('Given cartReducer', () => {
  describe('When action.type equals actionTypes.ADD_TO_CART', () => {
    test('return action.newCart', () => {
      const cartProducts = [];
      const action = {
        type: actionTypes.ADD_TO_CART,
        cartProducts
      };
      const result = cartReducer(cartProducts, action);
      expect(result).toEqual(action.newCart);
    });
  });
  describe('When action.type equals actionTypes.ADD_TO_CART', () => {
    test('return products', () => {
      const cartProducts = [];
      const action = {
        type: actionTypes.ADD_TO_CART,
        cartProducts
      };
      const result = cartReducer(cartProducts, action);
      expect(result).toEqual(action.newCart);
    });
  });

  describe('When action.type equals actionTypes.DELETE_FROM_CART', () => {
    test('return action.newCart', () => {
      const cartProducts = [];
      const action = {
        type: actionTypes.DELETE_FROM_CART,
        cartProducts
      };
      const result = cartReducer(cartProducts, action);
      expect(result).toEqual(action.newCart);
    });
  });
  describe('When action.type equals actionTypes.DELETE_FROM_CART', () => {
    test('return products', () => {
      const cartProducts = [];
      const action = {
        type: actionTypes.DELETE_FROM_CART,
        cartProducts
      };
      const result = cartReducer(cartProducts, action);
      expect(result).toEqual(action.newCart);
    });
  });
});

import actionTypes from '../actions/actionTypes';
import productsReducer from './productsReducer';

describe('Given productsReducer', () => {
  describe('When action.type equals actionTypes.GET_ALL ', () => {
    test('return action.products', () => {
      const products = [];
      const action = {
        type: actionTypes.GET_ALL_PRODUCT,
        products
      };
      const result = productsReducer(products, action);
      expect(result).toEqual(action.products);
    });
  });
  describe('When action.type equals actionTypes.GET_ALL ', () => {
    test('return products', () => {
      const products = [];
      const action = {
        type: 'default case',
        products
      };
      const result = productsReducer(products, action);
      expect(result).toEqual(products);
    });
  });
  describe('When action.type equals actionTypes.GET_ALL ', () => {
    test('return action.products', () => {
      const action = {
        type: actionTypes.GET_ALL_PRODUCT
      };
      const result = productsReducer(undefined, action);
      expect(result).toEqual(action.products);
    });
  });
});

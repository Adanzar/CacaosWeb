import actionTypes from '../actions/actionTypes';
import productReducer from './productReducer';

describe('Given productReducer', () => {
  describe('When action.type equals actionTypes.GET_ONE_PRODUCT ', () => {
    test('return action.product', () => {
      const product = {};
      const action = {
        type: actionTypes.GET_ONE_PRODUCT,
        product
      };
      const result = productReducer(product, action);
      expect(result).toEqual(action.product);
    });
  });
  describe('When action.type equals actionTypes.UPDATE_PRODUCT ', () => {
    test('return action.product', () => {
      const product = {};
      const action = {
        type: actionTypes.UPDATE_PRODUCT,
        product
      };
      const result = productReducer(product, action);
      expect(result).toEqual(action.product);
    });
  });
  describe('When action.type equals actionTypes.DELETE_PRODUCT ', () => {
    test('return action.product', () => {
      const product = {};
      const action = {
        type: actionTypes.DELETE_PRODUCT,
        product
      };
      const result = productReducer(product, action);
      expect(result).toEqual({ undefined });
    });
  });
  describe('When action.type equals actionTypes.CREATE_PRODUCT ', () => {
    test('return action.product', () => {
      const product = {};
      const action = {
        type: actionTypes.CREATE_PRODUCT,
        product
      };
      const result = productReducer(product, action);
      expect(result).toEqual({ undefined });
    });
  });
});

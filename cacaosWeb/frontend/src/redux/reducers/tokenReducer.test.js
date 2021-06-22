import actionTypes from '../actions/actionTypes';
import tokenReducer from './tokenReducer';

describe('Given tokenReducer', () => {
  describe('When action.type equals actionTypes.GET_PROFILE ', () => {
    test('return action.token', () => {
      const token = {};
      const action = {
        type: actionTypes.GET_PROFILE,
        token
      };
      const result = tokenReducer(token, action);
      expect(result).toEqual({ accesstoken: undefined });
    });
  });
  describe('When action.type equals default', () => {
    test('return action.token', () => {
      let token;
      const action = {
        type: '',
        token
      };
      const result = tokenReducer(token, action);
      expect(result).toEqual({});
    });
  });
});

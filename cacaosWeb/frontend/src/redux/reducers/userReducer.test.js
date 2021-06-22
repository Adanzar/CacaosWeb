import actionTypes from '../actions/actionTypes';
import userReducer from './userReducer';

describe('Given userReducer', () => {
  describe('When action.type equals actionTypes.LOG_IN ', () => {
    test('return action.user', () => {
      const user = { email: 'adan@gmail.com' };
      const action = {
        type: actionTypes.LOG_IN,
        user
      };
      const result = userReducer(user, action);
      expect(result).toEqual(user);
    });
  });
  describe('When action.type equals actionTypes.LOG_OUT ', () => {
    test('return action.user', () => {
      const user = {};
      const action = {
        type: actionTypes.LOG_OUT,
        user
      };
      const result = userReducer(user, action);
      expect(result).toEqual(undefined);
    });
  });
  describe('When action.type equals actionTypes.SIGN_UP ', () => {
    test('return action.user', () => {
      const user = {};
      const action = {
        type: actionTypes.SIGN_UP,
        user: {}
      };
      const result = userReducer(user, action);
      expect(result).toEqual(user);
    });
  });
  describe('When action.type equals default', () => {
    test('return action.user', () => {
      const user = {};
      const action = {
        type: '',
        user
      };
      const result = userReducer(user, action);
      expect(result).toEqual(action.user);
    });
  });
  describe('When action.type equals default', () => {
    test('return action.user', () => {
      let user;
      const action = {
        type: '',
        user
      };
      const result = userReducer(user, action);
      expect(result).toEqual({});
    });
  });
});

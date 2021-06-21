/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';

function userReducer(user = {}, action) {
  const newData = action.user;
  switch (action.type) {
    case actionTypes.LOG_IN:
      return { ...user, ...newData };
    case actionTypes.LOG_OUT:
      return action.data;
    case actionTypes.SIGN_UP:
      return { ...user, ...newData };
    default:
      return user;
  }
}
export default userReducer;

import actionTypes from '../actions/actionTypes';

function userReducer(user = {}, action) {
  switch (action.type) {
    case 'LOG_IN':
      return { ...user, user: action.user };
    case 'LOG_OUT':
      return actionTypes.LOG_OUT;
    case 'SIGN_UP':
      return { ...user, user: action.user };
    default:
      return user;
  }
}
export default userReducer;

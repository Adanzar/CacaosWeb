import actionTypes from '../actions/actionTypes';

function tokenReducer(accesstoken = {}, action) {
  const newData = action.accesstoken;
  switch (action.type) {
    case actionTypes.GET_PROFILE:
      return { ...accesstoken, ...newData };
    default:
      return accesstoken;
  }
}
export default tokenReducer;

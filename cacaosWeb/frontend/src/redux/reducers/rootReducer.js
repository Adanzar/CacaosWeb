import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productReducer from './productReducer';
import productsReducer from './productsReducer';
import tokenReducer from './tokenReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  product: productReducer,
  products: productsReducer,
  user: userReducer,
  accesstoken: tokenReducer,
  cart: cartReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productReducer from './productReducer';
import productsReducer from './productsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  product: productReducer,
  products: productsReducer,
  user: userReducer,
  cart: cartReducer
});

export default rootReducer;

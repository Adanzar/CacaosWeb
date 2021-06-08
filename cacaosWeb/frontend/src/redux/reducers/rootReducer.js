import { combineReducers } from 'redux';
import productReducer from './productReducer';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
  product: productReducer,
  products: productsReducer
});

export default rootReducer;

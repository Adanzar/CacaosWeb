import axios from 'axios';
import actionTypes from './actionTypes';

const url = process.env.REACT_APP_API_URL;

export function getProducts() {
  return async (dispatch) => {
    try {
      const { response } = await axios(url);
      dispatch({
        type: actionTypes.GET_ALL_PRODUCT,
        response
      });
    } catch (error) {
      dispatch({
        type: actionTypes.PRODUCT_ERROR
      });
    }
  };
}
export function getOneProduct(productId) {
  return async (dispatch) => {
    try {
      const { response } = await axios(`${url}/${productId}`);
      dispatch({
        type: actionTypes.GET_ALL_PRODUCT,
        response
      });
    } catch (error) {
      dispatch({
        type: actionTypes.PRODUCT_ERROR
      });
    }
  };
}
export function createProduct(product) {
  return async (dispatch) => {
    try {
      const { response } = await axios.post(url, product);
      dispatch({
        type: actionTypes.CREATE_PRODUCT,
        response
      });
    } catch (error) {
      dispatch({
        type: actionTypes.PRODUCT_ERROR
      });
    }
  };
}
export function modifyProduct(productId, itemToModify) {
  return async (dispatch) => {
    const { response } = await axios.put(`${url}/${productId}`, itemToModify);
    dispatch({
      type: actionTypes.UPDATE_PRODUCT,
      response
    });
  };
}
export function deleteProduct(productId) {
  return async (dispatch) => {
    const { response } = await axios.delete(`${url}/${productId}`);
    dispatch({
      type: actionTypes.DELETE_PRODUCT,
      response
    });
  };
}

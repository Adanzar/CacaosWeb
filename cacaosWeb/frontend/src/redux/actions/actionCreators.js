import axios from 'axios';
import actionTypes from './actionTypes';

const url = process.env.REACT_APP_API_URL;
const urlLogin = 'http://localhost:4000/login';
const urlSignUp = 'http://localhost:4000/signup';
const urlLogout = 'http://localhost:4000/logout';
const urlProfile = 'http://localhost:4000/user/profile';

export function getToken(token) {
  return async (dispatch) => {
    try {
      const { data } = await axios(urlProfile, { headers: { authorization: `Bearer ${token}` } });
      dispatch({
        type: actionTypes.GET_PROFILE,
        accesstoken: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_PROFILE,
        accesstoken: []
      });
    }
  };
}
export function login(email, password) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(urlLogin, { email, password });
      dispatch({
        type: actionTypes.LOG_IN,
        user: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOG_IN,
        user: []
      });
    }
  };
}
export function logout() {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(urlLogout);
      dispatch({
        type: actionTypes.LOG_OUT,
        data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.ERROR
      });
    }
  };
}
export function signup(email, password, name, lastName) {
  return async (dispatch) => {
    const { data } = await axios.post(urlSignUp, {
      email, password, name, lastName
    });
    dispatch({
      type: actionTypes.SIGN_UP,
      user: data
    });
  };
}

export function getProducts(token) {
  return async (dispatch) => {
    try {
      const { data } = await axios(url, token);
      dispatch({
        type: actionTypes.GET_ALL_PRODUCT,
        products: data
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
      const { data } = await axios(`${url}/${productId}`);
      dispatch({
        type: actionTypes.GET_ONE_PRODUCT,
        product: data
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
      const { data } = await axios.post(url, product);
      dispatch({
        type: actionTypes.CREATE_PRODUCT,
        product: data
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
    const { data } = await axios.put(`${url}/${productId}`, itemToModify);
    dispatch({
      type: actionTypes.UPDATE_PRODUCT,
      product: data
    });
  };
}
export function modifyStock(productId, itemToModify) {
  return async (dispatch) => {
    const { data } = await axios.put(`${url}/${productId}`, itemToModify);
    dispatch({
      type: actionTypes.UPDATE_PRODUCT,
      product: data
    });
  };
}
export function deleteProduct(productId) {
  return async (dispatch) => {
    const { data } = await axios.delete(`${url}/${productId}`);
    dispatch({
      type: actionTypes.DELETE_PRODUCT,
      product: data
    });
  };
}

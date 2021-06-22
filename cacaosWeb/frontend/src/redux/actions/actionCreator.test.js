import axios from 'axios';
import {
  login,
  logout,
  signup,
  getProducts,
  getOneProduct,
  createProduct,
  modifyProduct,
  deleteProduct,
  modifyStock,
  getToken
} from './actionCreators';
import actionTypes from './actionTypes';

jest.mock('axios');

describe('Given getToken function', () => {
  describe('When is invoked', () => {
    test('Then it should call dispatch', async () => {
      const dispatch = jest.fn();
      axios.mockResolvedValueOnce({
        type: actionTypes.GET_PROFILE,
        user: { token: '123' }
      });
      await getToken()(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
  test('getAccessToken should throw error', async () => {
    const dispatch = jest.fn();
    axios.mockRejectedValueOnce('error');
    try {
      await getToken()(dispatch);
    } catch (error) {
      expect(error).toBe('error');
    }
  });
});

describe('Given login function', () => {
  describe('When is invoked', () => {
    test('Then it should call dispatch', async () => {
      const dispatch = jest.fn();
      axios.post.mockResolvedValueOnce({
        type: actionTypes.LOG_IN,
        user: { email: 'a@email.com', password: '******' }
      });
      await login()(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
  test('login should throw error', async () => {
    const dispatch = jest.fn();
    axios.post.mockRejectedValueOnce('error');
    try {
      await login()(dispatch);
    } catch (error) {
      expect(error).toBe('error');
    }
  });
});

describe('Given logout function', () => {
  describe('When is invoked', () => {
    test('Then it should call dispatch', async () => {
      const dispatch = jest.fn();
      axios.post.mockResolvedValueOnce({
        type: actionTypes.LOG_IN,
        user: 'logout scucesfully'
      });
      await logout()(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
  test('logout should throw error', async () => {
    const dispatch = jest.fn();
    axios.post.mockRejectedValueOnce('error');
    try {
      await logout()(dispatch);
    } catch (error) {
      expect(error).toBe('error');
    }
  });
});

describe('Given signUp function', () => {
  describe('When is invoked', () => {
    test('Then it should call dispatch', async () => {
      const dispatch = jest.fn();
      axios.post.mockResolvedValueOnce({
        type: actionTypes.LOG_IN,
        user: { email: 'a@email.com', password: '123456' }
      });
      await signup()(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});

jest.mock('axios');
describe('Given a getProducts fn', () => {
  describe('When its invoked', () => {
    test('Then should call getProducts with dispatch', async () => {
      const dispatch = jest.fn();
      axios.mockResolvedValueOnce({
        products: {
          type: actionTypes.GET_ALL_PRODUCT,
          name: ''
        }
      });
      await getProducts()(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });

    test('getProducts should throw error', async () => {
      const dispatch = jest.fn();
      axios.mockRejectedValueOnce('error');

      try {
        await getProducts()(dispatch);
      } catch (error) {
        expect(error).toBe('error');
      }
    });
  });
});

describe('Given createProduct fn', () => {
  describe('When its invoked', () => {
    test('Then should call createProduct with dispatch', async () => {
      const dispatch = jest.fn();
      const product = { name: 'Cacao' };
      axios.post.mockResolvedValue({
        type: actionTypes.CREATE_PRODUCT,
        data: 'Cacao'

      });
      await createProduct(product)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });

    test('createProduct should throw error', async () => {
      const dispatch = jest.fn();
      axios.post.mockRejectedValueOnce('error');

      try {
        await createProduct()(dispatch);
      } catch (error) {
        expect(error).toBe('error');
      }
    });
  });
});

describe('Given deleteProduct fn', () => {
  describe('When its invoked', () => {
    test('Then should call deleteProduct with dispatch', async () => {
      const dispatch = jest.fn();
      const product = { name: 'cacao' };
      axios.delete.mockResolvedValue({
        type: actionTypes.DELETE_PRODUCT,
        data: '1213434'

      });
      await deleteProduct(product)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });

    test('deleteProduct should throw error', async () => {
      const dispatch = jest.fn();
      axios.delete.mockRejectedValueOnce('error');

      try {
        await deleteProduct()(dispatch);
      } catch (error) {
        expect(error).toBe('error');
      }
    });
  });
});

describe('Given modifyProduct fn', () => {
  describe('When its invoked', () => {
    test('Then should call modifyProduct with dispatch', async () => {
      const dispatch = jest.fn();
      const product = { name: 'cacao' };
      axios.put.mockResolvedValue({
        type: actionTypes.UPDATE_PRODUCT,
        data: 'cacao'

      });
      await modifyProduct(product)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
describe('Given getOneProduct fn', () => {
  describe('When its invoked', () => {
    test('Then should call getOneProduct with dispatch', async () => {
      const dispatch = jest.fn();
      const product = { name: 'cacao' };
      axios.mockResolvedValue({
        type: actionTypes.GET_ONE_PRODUCT,
        data: 'cacao'

      });
      await getOneProduct(product)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });

    test('getOneProduct should throw error', async () => {
      const dispatch = jest.fn();
      axios.mockRejectedValueOnce('error');

      try {
        await getOneProduct()(dispatch);
      } catch (error) {
        expect(error).toBe('error');
      }
    });
  });
});

describe('Given modifyStock fn', () => {
  describe('When its invoked', () => {
    test('Then should call modifyStock with dispatch', async () => {
      const dispatch = jest.fn();
      const product = { stock: 4 };
      axios.put.mockResolvedValue({
        type: actionTypes.DELETE_FROM_CART,
        data: 4

      });
      await modifyStock(product)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});

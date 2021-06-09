import axios from 'axios';
import {
  getProducts, getOneProduct, createProduct, modifyProduct, deleteProduct
} from './actionCreators';
import actionTypes from './actionTypes';

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

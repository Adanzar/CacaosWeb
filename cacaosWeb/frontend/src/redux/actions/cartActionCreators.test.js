import { addToCart, deleteFromCart } from './cartActionCreators';
import actionTypes from './actionTypes';

describe('Given addToCart function', () => {
  describe('When is invoked', () => {
    test('Then it should be call with cart and product', () => {
      const cart = [];
      const product = { stock: 'product' };
      const newCart = [...cart, product];
      addToCart.mockReturnValueOnce({
        type: actionTypes.ADD_TO_CART,
        newCart

      });

      expect(addToCart()).toHaveBeenCalledWith(cart, product);
    });
  });
});

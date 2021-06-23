/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Cart from './cart';
import { modifyStock } from '../../redux/actions/actionCreators';
import { render } from '../utils/test-utils';

jest.mock('../../redux/actions/actionCreators');

describe('Details component', () => {
  describe('Given a modifyStock function', () => {
    describe('When is invoked', () => {
      test('Then it not should be called', () => {
        modifyStock.mockReturnValueOnce({ type: '' });
        render(<Cart />, {
          initialState: {
            products: [{
              name: 'chocolate',
              price: { amount: 3, currency: '$' },
              weight: { quantity: 100, measure: 'g' },
              stock: 50,
              ingredients: ['coco', 'sugar'],
              briefDescription: 'whatever',
              description: '70% chocolate',
              imagesUrls: 'http://etc',
              isAdmin: true,
              nutritionalValue: 'sugar 10%'
            }]
          }
        });
        const productId = 123123;
        jest.mock('React', () => ({
          ...jest.requireActual('React'),
          useEffect: jest.fn()
        }));
        modifyStock(productId);
        expect(modifyStock).toHaveBeenCalled();
      });
    });
  });
});

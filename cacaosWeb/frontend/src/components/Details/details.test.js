/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Details from './details';
import { getOneProduct } from '../../redux/actions/actionCreators';
import { render } from '../utils/test-utils';

jest.mock('../../redux/actions/actionCreators');

describe('Details component', () => {
  describe('Given a getOneProduct function', () => {
    describe('When is invoked', () => {
      test('Then it not should be called', () => {
        getOneProduct.mockReturnValueOnce({ type: '' });
        render(<Details />, {
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
        getOneProduct(productId);
        expect(getOneProduct).toHaveBeenCalled();
      });
    });
  });
});

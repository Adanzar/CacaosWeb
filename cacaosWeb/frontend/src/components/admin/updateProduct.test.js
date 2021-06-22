/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import AddProduct from './createProduct';
import { createProduct } from '../../redux/actions/actionCreators';
import { fireEvent, render, screen } from '../utils/test-utils';

jest.mock('../../redux/actions/actionCreators');

describe('createProduct component', () => {
  describe('Given a createProduct function', () => {
    describe('When is invoked', () => {
      test('Then it not should be called', () => {
        createProduct.mockReturnValueOnce({ type: '' });
        render(
          <MemoryRouter>
            <AddProduct />
          </MemoryRouter>,
          {
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
          }
        );
        const inputName = screen.getByTestId('input-name');
        fireEvent.change(inputName, { target: { value: 'chocolate' } });

        const inputPriceAmount = screen.getByTestId('input-price-amount');
        fireEvent.change(inputPriceAmount, { target: { value: 3 } });

        const inputPriceCurrency = screen.getByTestId('input-price-currency');
        fireEvent.change(inputPriceCurrency, { target: { value: '$' } });

        const inputWeightQuantity = screen.getByTestId('input-weight-quantity');
        fireEvent.click(inputWeightQuantity, { target: { value: 100 } });

        const inputWeightMeasure = screen.getByTestId('input-weight-measure');
        fireEvent.click(inputWeightMeasure, { target: { value: 'g' } });

        const inputStock = screen.getByTestId('input-stock');
        fireEvent.click(inputStock, { target: { value: 20 } });

        const inputIngredients = screen.getByTestId('input-ingredients');
        fireEvent.click(inputIngredients, { target: { value: 'sugar' } });

        const buttonAdd = screen.getByTestId('add-btn');
        fireEvent.click(buttonAdd);
        createProduct();
        expect(createProduct).toHaveBeenCalled();
      });
    });
  });
});

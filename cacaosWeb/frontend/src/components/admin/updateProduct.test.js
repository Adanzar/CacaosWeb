/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import UpdateProduct from './updateProduct';
import { modifyProduct } from '../../redux/actions/actionCreators';
import { fireEvent, render, screen } from '../utils/test-utils';

jest.mock('../../redux/actions/actionCreators');

describe('modifyProduct component', () => {
  describe('Given a modifyProduct function', () => {
    describe('When is invoked', () => {
      test('Then it not should be called', () => {
        modifyProduct.mockReturnValueOnce({ type: '' });
        render(
          <MemoryRouter>
            <UpdateProduct />
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
        fireEvent.change(inputWeightQuantity, { target: { value: 100 } });

        const inputWeightMeasure = screen.getByTestId('input-weight-measure');
        fireEvent.change(inputWeightMeasure, { target: { value: 'g' } });

        const inputStock = screen.getByTestId('input-stock');
        fireEvent.change(inputStock, { target: { value: 20 } });

        const inputBriefDescription = screen.getByTestId('input-caption');
        fireEvent.change(inputBriefDescription, { target: { value: 'whatever and more' } });

        const inputDescription = screen.getByTestId('input-description');
        fireEvent.change(inputDescription, { target: { value: 'whatever' } });

        const inputCategory = screen.getByTestId('input-category');
        fireEvent.change(inputCategory, { target: { value: 'chocolate' } });

        const inputIngredients = screen.getByTestId('input-ingredients');
        fireEvent.change(inputIngredients, { target: { value: 'sugar' } });

        const inputImagesUrls = screen.getByTestId('input-image');
        fireEvent.change(inputImagesUrls, { target: { value: 'http//loquesea' } });

        const inputNutritionalValue = screen.getByTestId('input-nutritionalValue');
        fireEvent.change(inputNutritionalValue, { target: { value: 'http//loquesea' } });

        const buttonAdd = screen.getByTestId('add-btn');
        fireEvent.click(buttonAdd);
        modifyProduct();
        expect(modifyProduct).toHaveBeenCalled();
      });
    });
  });
});

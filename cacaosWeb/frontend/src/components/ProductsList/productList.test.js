/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen, fireEvent } from '../utils/test-utils';
import ProductList from './productList';
import { getProducts } from '../../redux/actions/actionCreators';

jest.mock('../../redux/actions/actionCreators');

describe('ProductList component', () => {
  describe('Given a getProducts function', () => {
    describe('When is invoked', () => {
      test('Then it not should be called', () => {
        getProducts.mockReturnValueOnce({ type: '' });
        render(<ProductList />, {
          initialState: {
            products: []
          }
        });
        expect(getProducts).not.toHaveBeenCalled();
      });
    });
  });
  describe('Given a getProducts function', () => {
    describe('When is invoked', () => {
      test('Then it should be called', () => {
        getProducts.mockReturnValueOnce({ type: '' });
        render(
          <ProductList />,
          {
            initialState: {
              products: [],
              product: { name: 'chocolate' }
            }
          }
        );
        jest.mock('React', () => ({
          ...jest.requireActual('React'),
          useEffect: jest.fn()
        }));
        expect(getProducts).toHaveBeenCalled();
      });
    });
  });
  describe('Given a setSearch state variable', () => {
    describe('When is use', () => {
      test('Then search should be 70% chocolate', () => {
        getProducts.mockReturnValueOnce({ type: '' });
        render(<ProductList />, {
          initialState: {
            products: []
          }
        });
        const inputSearch = screen.getByTestId('input-search');
        fireEvent.change(inputSearch, { target: { value: 'cacao' } });
      });
    });
  });
  describe('Given a products array', () => {
    describe('When is filtered', () => {
      test('Then oreo should be on the document', () => {
        getProducts.mockReturnValueOnce({ type: '' });
        render(<ProductList />, {
          initialState: {
            products: [{
              name: 'chocolate 70',
              price: { amount: 3, currency: '$' },
              weigth: { quantity: 4, measure: 'g' }
            }]
          }
        });

        const searchTerm = screen.getByTestId('input-search');
        fireEvent.change(searchTerm, { target: { value: 'chocolate 70' } });
      });
    });
  });
});

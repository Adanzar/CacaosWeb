/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Login from './login';
import { render, screen, fireEvent } from '../utils/test-utils';
import * as actions from '../../redux/actions/actionCreators';

jest.mock('../../redux/actions/actionCreators');

describe('Login component', () => {
  describe('Given a setEmail function', () => {
    describe('When is invoked', () => {
      test('Then email should be adan@gmail.com', () => {
        render(<Login />,
          {
            initialState: {
              user: { token: '123' }
            }
          });
        const email = screen.getByTestId('input-email');
        fireEvent.change(email, { target: { value: 'adan@gmail.com' } });
        expect(screen.getByText(/Sign/i)).toBeInTheDocument();
      });
    });
  });
  describe('Given a setPassword function', () => {
    describe('When is invoked', () => {
      test('Then password should be 123', () => {
        render(<Login />);
        const password = screen.getByTestId('input-password');
        fireEvent.change(password, { target: { value: '123' } });
        expect(screen.getByText(/Sign/i)).toBeInTheDocument();
      });
    });
  });
  describe('Given a sendLogIn function', () => {
    describe('When is invoked', () => {
      test('Then login should be invoked', () => {
        jest.spyOn(actions, 'login').mockReturnValueOnce({ type: 'LOG_IN', action: { user: 'carlos' } });
        render(<Login />);
        const email = screen.getByTestId('input-email');
        fireEvent.change(email, { target: { value: 'adan@gmail.com' } });
        const password = screen.getByTestId('input-password');
        fireEvent.change(password, { target: { value: '1234' } });
        const button = screen.getByTestId('login-btn');
        fireEvent.click(button);
        expect(screen.getByText(/Sign/i)).toBeInTheDocument();
      });
    });
  });
});

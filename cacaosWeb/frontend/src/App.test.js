/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h1', () => {
  render(<App />);
  const linkElement = screen.getByText(/h1/i);
  expect(linkElement).toBeInTheDocument();
});

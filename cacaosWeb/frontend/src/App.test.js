/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders rights link', () => {
  render(<App />);
  const linkElement = screen.getByText(/RIGHTS/i);
  expect(linkElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import * as React from 'react'
import '@testing-library/jest-dom'
import { ListTrips } from './components/ListTrips';
import App from './App'



test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/Listing Trips/i);
  // expect(linkElement).toBeInTheDocument();
});

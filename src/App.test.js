import { render, screen } from '@testing-library/react';
import App from './App';

test('renders application header and dropdown options', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', {
      name: /frontend interview questions/i,
    })
  ).toBeInTheDocument();

  expect(screen.getByRole('combobox')).toBeInTheDocument();
  expect(screen.getByText(/react\.json/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/search question or answer/i)).toBeInTheDocument();
});

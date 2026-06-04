import { fireEvent, render, screen } from '@testing-library/react';
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
  expect(screen.getByRole('button', { name: /difference between/i })).toBeInTheDocument();
});

test('combines search and difference-only filter when button is clicked', () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/search question or answer/i);
  const button = screen.getByRole('button', {
    name: /difference between/i,
  });

  fireEvent.change(input, { target: { value: 'React' } });

  expect(screen.getAllByText(/what is react\?/i).length).toBeGreaterThan(0);
  expect(
    screen.getByText(/what is the difference between html and react event handling\?/i)
  ).toBeInTheDocument();

  fireEvent.click(button);

  expect(
    screen.getByText(/what is the difference between html and react event handling\?/i)
  ).toBeInTheDocument();
  expect(screen.queryAllByText(/what is react\?/i).length).toBe(0);
});

test('search only checks question text, not answer content', () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/search question or answer/i);
  fireEvent.change(input, { target: { value: 'Jordan Walke' } });

  expect(screen.queryByText(/what are the major features of react\?/i)).not.toBeInTheDocument();
  expect(screen.getByText(/no question found/i)).toBeInTheDocument();
});

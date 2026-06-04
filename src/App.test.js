import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders header, dropdown, search input, and difference button', () => {
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

  test('toggles theme text when theme button is clicked', () => {
    render(<App />);

    const themeButton = screen.getByRole('button', { name: /☀ light/i });
    expect(themeButton).toBeInTheDocument();

    fireEvent.click(themeButton);

    expect(screen.getByRole('button', { name: /🌙 dark/i })).toBeInTheDocument();
  });

  test('renders introduction and project sections when navigation buttons are clicked', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: /my introduction/i }));
    expect(screen.getByRole('heading', { name: /hello, my name is nishant kumar/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /last project/i }));
    expect(screen.getByText(/interview master platform/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /all ques & ans/i }));
    expect(screen.getByPlaceholderText(/search question or answer/i)).toBeInTheDocument();
  });

  test('opens and closes the test report view', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: /view test report/i }));
    expect(screen.getByRole('heading', { name: /test report/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /← back to app/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /← back to app/i }));
    expect(screen.getByRole('heading', { name: /frontend interview questions/i })).toBeInTheDocument();
  });

  test('keeps question search limited to question text only', () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/search question or answer/i);
    fireEvent.change(input, { target: { value: 'Jordan Walke' } });

    expect(screen.queryByText(/what are the major features of react\?/i)).not.toBeInTheDocument();
    expect(screen.getByText(/no question found/i)).toBeInTheDocument();
  });

  test('shows comparison-only results when filter button is active', () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/search question or answer/i);
    const button = screen.getByRole('button', {
      name: /difference between/i,
    });

    fireEvent.change(input, { target: { value: 'React' } });
    fireEvent.click(button);

    expect(
      screen.getByText(/what is the difference between html and react event handling\?/i)
    ).toBeInTheDocument();
    expect(screen.queryAllByText(/what is react\?/i).length).toBe(0);
  });
});

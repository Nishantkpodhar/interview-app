import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './index';

describe('SearchBar', () => {
  test('renders input and calls onChange', () => {
    const handleChange = jest.fn();

    render(
      <SearchBar searchText="" onChange={handleChange} />
    );

    const input = screen.getByPlaceholderText(/search question or answer/i);
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'React' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('displays the controlled search text value', () => {
    const handleChange = jest.fn();

    render(
      <SearchBar searchText="JavaScript" onChange={handleChange} />
    );

    const input = screen.getByDisplayValue(/javascript/i);
    expect(input).toBeInTheDocument();
  });

  test('shows a clear button and calls onClear when search text exists', () => {
    const handleClear = jest.fn();

    render(
      <SearchBar
        searchText="JavaScript"
        onChange={jest.fn()}
        onClear={handleClear}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: /clear search/i }));
    expect(handleClear).toHaveBeenCalledTimes(1);
  });

  test('renders a voice-search control', () => {
    render(<SearchBar searchText="" onChange={jest.fn()} onClear={jest.fn()} />);

    expect(screen.getByRole('button', { name: /search by voice/i })).toBeInTheDocument();
  });
});

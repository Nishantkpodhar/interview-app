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
});

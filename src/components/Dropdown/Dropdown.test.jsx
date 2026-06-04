import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './index';

describe('Dropdown', () => {
  const options = [
    { value: 'all', label: 'All' },
    { value: 'react', label: 'React.json' },
  ];

  test('renders options and handles change events', () => {
    const handleChange = jest.fn();

    render(
      <Dropdown
        options={options}
        selectedFile="all"
        onChange={handleChange}
      />
    );

    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
    expect(screen.getByText('React.json')).toBeInTheDocument();

    fireEvent.change(select, { target: { value: 'react' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('shows the selected option value', () => {
    const handleChange = jest.fn();

    render(
      <Dropdown
        options={options}
        selectedFile="react"
        onChange={handleChange}
      />
    );

    expect(screen.getByRole('combobox').value).toBe('react');
  });
});

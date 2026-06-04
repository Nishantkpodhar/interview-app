import { render, screen } from '@testing-library/react';
import LastProject from './index';

describe('LastProject', () => {
  test('renders last project details with metrics and feature cards', () => {
    render(<LastProject />);

    expect(screen.getByRole('heading', { name: /interview master platform/i })).toBeInTheDocument();
    expect(screen.getByText(/smart search/i)).toBeInTheDocument();
    expect(screen.getByText(/500\+/i)).toBeInTheDocument();
    expect(screen.getByText(/99%/i)).toBeInTheDocument();
  });
});

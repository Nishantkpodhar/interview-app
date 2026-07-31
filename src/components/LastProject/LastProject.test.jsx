import { render, screen } from '@testing-library/react';
import LastProject from './index';

describe('LastProject', () => {
  test('renders last project details with metrics and feature cards', () => {
    render(<LastProject />);

    expect(screen.getByRole('heading', { name: /wells fargo enterprise onboarding platform/i })).toBeInTheDocument();
    expect(screen.getByText(/customer search/i)).toBeInTheDocument();
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/dynamic forms/i)).toBeInTheDocument();
  });
});

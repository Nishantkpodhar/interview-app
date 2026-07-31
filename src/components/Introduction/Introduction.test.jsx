import { render, screen } from '@testing-library/react';
import Introduction from './index';

describe('Introduction', () => {
  test('renders introduction content with skills and experience', () => {
    render(<Introduction />);

    expect(screen.getByRole('heading', { name: /hello, i'm nishant kumar/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /💼 technical skills/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /💼 professional experience/i })).toBeInTheDocument();
    expect(screen.getByText(/7\+ years of professional experience/i)).toBeInTheDocument();
  });
});

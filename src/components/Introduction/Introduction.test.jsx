import { render, screen } from '@testing-library/react';
import Introduction from './index';

describe('Introduction', () => {
  test('renders introduction content with skills and experience', () => {
    render(<Introduction />);

    expect(screen.getByRole('heading', { name: /hello, my name is nishant kumar/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /💼 skills/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /🎓 experience/i })).toBeInTheDocument();
    expect(screen.getByText(/built 15\+ production-ready applications/i)).toBeInTheDocument();
  });
});

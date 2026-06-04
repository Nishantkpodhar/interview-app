import { fireEvent, render, screen } from '@testing-library/react';
import Navigation from './index';

describe('Navigation', () => {
  test('renders section buttons and highlights active button', () => {
    const handleSectionChange = jest.fn();

    render(
      <Navigation activeSection="project" onSectionChange={handleSectionChange} />
    );

    expect(screen.getByRole('button', { name: /my introduction/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /last project/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /all ques & ans/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /last project/i })).toHaveClass('active');
  });

  test('calls onSectionChange when buttons are clicked', () => {
    const handleSectionChange = jest.fn();

    render(<Navigation activeSection="questions" onSectionChange={handleSectionChange} />);

    fireEvent.click(screen.getByRole('button', { name: /my introduction/i }));
    fireEvent.click(screen.getByRole('button', { name: /last project/i }));
    fireEvent.click(screen.getByRole('button', { name: /all ques & ans/i }));

    expect(handleSectionChange).toHaveBeenCalledTimes(3);
    expect(handleSectionChange).toHaveBeenNthCalledWith(1, 'intro');
    expect(handleSectionChange).toHaveBeenNthCalledWith(2, 'project');
    expect(handleSectionChange).toHaveBeenNthCalledWith(3, 'questions');
  });
});

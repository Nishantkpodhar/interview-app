import { fireEvent, render, screen } from '@testing-library/react';
import QuestionTable from './index';

describe('QuestionTable interactions', () => {
  const data = [
    {
      question: 'What is React?',
      category: 'Basics',
      answer: {
        definition: 'A UI library.',
        points: ['Component-based', 'Declarative'],
        comparison: [{ feature: 'State', first: 'Class', second: 'Hooks' }],
        example: 'Example content',
        syntax: 'const app = <div />;',
      },
    },
  ];

  test('expands and collapses answers, and opens the example modal', () => {
    render(<QuestionTable data={data} />);

    const toggle = screen.getByRole('button', { name: /what is react/i });
    fireEvent.click(toggle);

    expect(screen.getByText('Definition')).toBeInTheDocument();
    expect(screen.getByText('A UI library.')).toBeInTheDocument();
    expect(screen.getByText('Component-based')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /example/i }));
    expect(screen.getByText(/example for: what is react/i)).toBeInTheDocument();
    expect(screen.getByText('Example content')).toBeInTheDocument();
  });
});

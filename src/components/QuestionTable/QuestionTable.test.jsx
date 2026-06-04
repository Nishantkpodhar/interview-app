import { render, screen } from '@testing-library/react';
import QuestionTable from './index';

describe('QuestionTable', () => {
  test('renders no data message when list is empty', () => {
    render(<QuestionTable data={[]} />);
    expect(screen.getByText(/no question found/i)).toBeInTheDocument();
  });

  test('renders question rows with labels and answer details', () => {
    const data = [
      {
        question: 'What is React?',
        category: 'react',
        answer: {
          definition: 'A UI library.',
          points: ['Component-based', 'Declarative'],
          comparisonTitle1: 'React',
          comparisonTitle2: 'Angular',
          comparison: [
            { feature: 'Binding', first: 'One-way', second: 'Two-way' },
          ],
        },
      },
    ];

    render(<QuestionTable data={data} />);

    expect(screen.getByText(/what is react\?/i)).toBeInTheDocument();
    expect(
      screen.getByText('react', {
        selector: 'span.question-label',
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/a ui library\./i)).toBeInTheDocument();
    expect(screen.getByText(/Component-based/i)).toBeInTheDocument();
    expect(screen.getByText(/One-way/i)).toBeInTheDocument();
  });

  test('renders comparison table when comparison data exists', () => {
    const data = [
      {
        question: 'How do React and Vue differ?',
        category: 'javascript',
        answer: {
          comparisonTitle1: 'React',
          comparisonTitle2: 'Vue',
          comparison: [
            { feature: 'Rendering', first: 'JSX', second: 'Templates' },
          ],
        },
      },
    ];

    render(<QuestionTable data={data} />);

    expect(screen.getByText(/differences table/i)).toBeInTheDocument();
    expect(screen.getByText(/jsX/i)).toBeInTheDocument();
    expect(screen.getByText(/templates/i)).toBeInTheDocument();
  });
});

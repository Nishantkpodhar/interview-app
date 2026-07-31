import { filterQuestions } from './questionUtils';

describe('filterQuestions', () => {
  const questions = [
    {
      question: 'What is React?',
      category: 'Basics',
      answer: { comparison: [{ feature: 'State', first: 'Class', second: 'Hooks' }] },
    },
    {
      question: 'What is useMemo?',
      category: 'Hooks',
      answer: { comparison: [] },
    },
  ];

  it('filters by category, search text, and comparison flag', () => {
    const result = filterQuestions({
      questions,
      selectedCategory: 'Basics',
      searchText: 'react',
      showComparisonOnly: true,
    });

    expect(result).toHaveLength(1);
    expect(result[0].question).toBe('What is React?');
  });

  it('returns all items for empty search text', () => {
    const result = filterQuestions({
      questions,
      selectedCategory: 'all',
      searchText: '',
      showComparisonOnly: false,
    });

    expect(result).toHaveLength(2);
  });
});

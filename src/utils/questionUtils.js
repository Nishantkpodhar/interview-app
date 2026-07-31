export const normalizeSearchText = (value = '') => value.trim().toLowerCase();

export const filterQuestions = ({
  questions,
  selectedCategory = 'all',
  searchText = '',
  showComparisonOnly = false,
}) => {
  const normalizedSearchText = normalizeSearchText(searchText);
  const comparisonFilter = (item) => item.answer?.comparison?.length > 0;

  const categoryData =
    selectedCategory === 'all'
      ? questions
      : questions.filter((item) => item.category === selectedCategory);

  const normalizedData = showComparisonOnly
    ? categoryData.filter(comparisonFilter)
    : categoryData;

  if (!normalizedSearchText) {
    return normalizedData;
  }

  return normalizedData.filter((item) => {
    const questionMatch = item.question?.toLowerCase().includes(normalizedSearchText);
    return questionMatch;
  });
};

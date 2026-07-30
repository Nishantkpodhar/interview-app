import jsonFiles, {
  categoryOptionsByTechnology,
  technologyOptions,
} from './jsonFiles';

describe('jsonFiles data module', () => {
  test('exports technology groups and all questions', () => {
    expect(jsonFiles).toHaveProperty('all');
    expect(jsonFiles).toHaveProperty('react');
    expect(jsonFiles).toHaveProperty('javascript');
    expect(jsonFiles).toHaveProperty('nextjs');
    expect(jsonFiles).toHaveProperty('css');
    expect(jsonFiles).toHaveProperty('node');

    expect(Array.isArray(jsonFiles.all)).toBe(true);
    expect(jsonFiles.all.length).toBeGreaterThan(0);
  });

  test('each item in all includes a category field', () => {
    jsonFiles.all.forEach((item) => {
      expect(item).toHaveProperty('category');
      expect(typeof item.category).toBe('string');
    });
  });

  test('creates unique category lists from each technology JSON file', () => {
    technologyOptions.slice(1).forEach(({ value }) => {
      const categories = categoryOptionsByTechnology[value];
      const normalizedCategories = categories.map(({ value: category }) =>
        category.toLowerCase()
      );

      expect(new Set(normalizedCategories).size).toBe(normalizedCategories.length);
      expect(categories.reduce((total, category) => total + category.count, 0)).toBe(
        jsonFiles[value].length
      );
    });
  });
});

import jsonFiles from './jsonFiles';

describe('jsonFiles data module', () => {
  test('exports category groups and all array', () => {
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

  test('all items use a valid category key', () => {
    const validCategories = Object.keys(jsonFiles);
    jsonFiles.all.forEach((item) => {
      expect(validCategories).toContain(item.category);
    });
  });
});

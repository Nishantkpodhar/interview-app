import { render, screen, within } from '@testing-library/react';
import TestReport from './index';

describe('TestReport', () => {
  const sampleData = [
    {
      id: 'TR-001',
      name: 'First test',
      file: 'src/first.test.js',
      status: 'pass',
      log: 'Worked as expected.',
    },
    {
      id: 'TR-002',
      name: 'Second test',
      file: 'src/second.test.js',
      status: 'fail',
      log: 'Failed with a runtime error.',
    },
  ];

  test('renders a dynamic summary and rows from provided data', () => {
    render(<TestReport testCases={sampleData} onBack={jest.fn()} />);

    expect(screen.getByRole('heading', { name: /test report/i })).toBeInTheDocument();
    expect(screen.getByText('Total Tests')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('Passed')).toBeInTheDocument();
    expect(screen.getByText('Failed')).toBeInTheDocument();

    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(3);
    expect(screen.getByText('First test')).toBeInTheDocument();
    expect(screen.getByText('Second test')).toBeInTheDocument();
    expect(screen.getByText('Failed with a runtime error.')).toBeInTheDocument();
  });

  test('updates when new data is passed in', () => {
    const { rerender } = render(<TestReport testCases={sampleData} onBack={jest.fn()} />);

    expect(screen.getAllByText('1').length).toBeGreaterThan(0);

    const updatedData = [
      ...sampleData,
      {
        id: 'TR-003',
        name: 'Third test',
        file: 'src/third.test.js',
        status: 'pass',
        log: 'Added dynamically.',
      },
    ];

    rerender(<TestReport testCases={updatedData} onBack={jest.fn()} />);

    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('Third test')).toBeInTheDocument();
  });
});

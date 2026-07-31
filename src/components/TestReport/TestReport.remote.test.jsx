import { render, screen } from '@testing-library/react';
import TestReport from './index';

describe('TestReport remote-style rendering', () => {
  test('renders summary from externally supplied data', () => {
    const testCases = [
      { id: 'R1', name: 'Render', file: 'src/ui.js', status: 'pass', log: 'Rendered' },
      { id: 'R2', name: 'Interaction', file: 'src/ui.js', status: 'fail', log: 'Interaction failed' },
      { id: 'R3', name: 'API call', file: 'src/api.js', status: 'pass', log: 'API ok' },
    ];

    render(<TestReport testCases={testCases} onBack={jest.fn()} />);

    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Render')).toBeInTheDocument();
    expect(screen.getByText('Interaction failed')).toBeInTheDocument();
  });
});

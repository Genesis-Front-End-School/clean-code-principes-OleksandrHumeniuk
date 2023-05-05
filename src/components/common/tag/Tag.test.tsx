import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import Tag from './Tag';

describe('Tag', () => {
  const testLabel = 'Test label';
  beforeEach(() => render(<Tag label={testLabel} />));

  it('should render label correctly', () => {
    expect(screen.getByText(testLabel)).toBeInTheDocument();
  });
});

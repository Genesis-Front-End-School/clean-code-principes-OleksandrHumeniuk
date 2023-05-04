import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import Header from './Header';

describe('Header', () => {
  beforeEach(() => render(<Header />));

  it('should render title correctly', () => {
    expect(screen.getByText('Learnify')).toBeInTheDocument();
  });

  it('should render link correctly', () => {
    expect(screen.queryByRole('link')).toHaveAttribute('href', '/');
  });
});

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import Page from './Page';

describe('Page', () => {
  beforeEach(() =>
    render(
      <Page>
        <div>Testing</div>
      </Page>,
    ),
  );

  it('should render page header correctly', () => {
    expect(screen.getByText('Learnify')).toBeInTheDocument();
  });

  it('should render page children correctly', () => {
    expect(screen.getByText('Testing')).toBeInTheDocument();
  });
});

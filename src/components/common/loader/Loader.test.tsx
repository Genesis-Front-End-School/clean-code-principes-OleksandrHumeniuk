import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import Loader from './Loader';

describe('Loader', () => {
  beforeEach(() => render(<Loader />));

  it('should render loader correctly', () => {
    const loaderSvg = document.querySelector('svg');
    expect(loaderSvg).toBeInTheDocument();
  });

  it('should have correct size', () => {
    const loaderSpan = document.querySelector('span');
    expect(loaderSpan).toHaveStyle(`width: 100px`);
    expect(loaderSpan).toHaveStyle(`height: 100px`);
  });
});

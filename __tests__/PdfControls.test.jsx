import React from 'react';
import { render } from '@testing-library/react';
import PdfControls from './PdfControls';

describe('PdfControls', () => {
  it('renders the correct number of pages', async () => {
    const numPages = 3;
    const { findAllByTestId } = render(<PdfControls numPages={numPages} />);
    const pages = await findAllByTestId('page');
    expect(pages).toHaveLength(numPages);
  });

  it('calls PassUpText with the correct arguments', async () => {
    const PassUpText = jest.fn();
    const numPages = 3;
    const { findAllByTestId } = render(
      <PdfControls numPages={numPages} PassUpText={PassUpText} />,
    );
    const pages = await findAllByTestId('page');
    const items = ['item1', 'item2', 'item3'];
    pages.forEach((page, index) => {
      page.props.onGetTextSuccess(items);
      expect(PassUpText).toHaveBeenCalledWith({ [index + 1]: items }, index + 1);
    });
  });
});

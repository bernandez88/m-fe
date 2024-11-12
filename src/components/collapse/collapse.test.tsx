import { fireEvent, render, screen } from '@testing-library/react';

import { TestWrapper } from 'tests/utils';

import Collapse from './collapse';

describe('collapse component', () => {
  it('renders children correctly', () => {
    render(
      <TestWrapper>
        <Collapse collapsedSection={<div>Collapsed Content</div>}>Click me</Collapse>
      </TestWrapper>,
    );

    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('toggles the collapsed section when the button is clicked', () => {
    render(
      <TestWrapper>
        <Collapse collapsedSection={<div>Collapsed Content</div>}>Click me</Collapse>
      </TestWrapper>,
    );

    const toggleButton = screen.getByLabelText('collapse-trigger');

    fireEvent.click(toggleButton);

    const collapseSection = screen.getByLabelText('collapse-section');

    expect(collapseSection).toHaveAttribute('aria-hidden', 'false');
  });

  it('renders the icon correctly', () => {
    render(
      <TestWrapper>
        <Collapse icon={<span>Icon</span>} collapsedSection={<div>Collapsed Content</div>}>
          Click me
        </Collapse>
      </TestWrapper>,
    );

    expect(screen.getByText('Icon')).toBeInTheDocument();
  });

  it('applies the correct className based on slotsStyle props', () => {
    const slotsStyle = {
      container: 'container-class',
      triggersContainer: 'triggers-container-class',
      collapseContainer: 'collapse-container-class',
    };

    render(
      <TestWrapper>
        <Collapse slotsStyle={slotsStyle} collapsedSection={<div>Collapsed Content</div>}>
          Click me
        </Collapse>
      </TestWrapper>,
    );

    const container = screen.getByLabelText('collapse-container');
    const collapseSection = screen.getByLabelText('collapse-section');

    expect(container).toHaveClass('container-class');
    expect(collapseSection).toHaveClass('collapse-container-class');
  });
});

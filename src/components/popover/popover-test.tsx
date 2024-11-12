import { fireEvent, render, screen } from '@testing-library/react';

import { TestWrapper } from 'tests/utils';

import Popover from './popover';

describe('Popover component', () => {
  it('renders children correctly', () => {
    render(
      <TestWrapper>
        <Popover>Click me</Popover>
      </TestWrapper>,
    );

    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('toggles the dropdown when the button is clicked', () => {
    render(
      <TestWrapper>
        <Popover>Click me</Popover>
      </TestWrapper>,
    );

    const button = screen.getByText('Click me');

    fireEvent.click(button);

    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('disables the button when the disabled prop is true', () => {
    render(
      <TestWrapper>
        <Popover disabled>Click me</Popover>
      </TestWrapper>,
    );

    const button = screen.getByText('Click me');

    expect(button).toBeDisabled();
  });
});

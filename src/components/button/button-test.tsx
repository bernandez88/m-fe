import { render, screen } from '@testing-library/react';

import Button from './button';

describe('Button component', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);

    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies the correct className based on props', () => {
    render(<Button className="test-class" size="large" variant="primary" />);

    const button = screen.getByRole('button');

    expect(button).toHaveClass('test-class');
  });

  it('disables the button when loading is true', () => {
    render(<Button loading>Click me</Button>);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('renders startAdornment and endAdornment correctly', () => {
    render(
      <Button startAdornment={<span>Start</span>} endAdornment={<span>End</span>}>
        Click me
      </Button>,
    );

    expect(screen.getByText('Start')).toBeInTheDocument();
    expect(screen.getByText('End')).toBeInTheDocument();
  });
});

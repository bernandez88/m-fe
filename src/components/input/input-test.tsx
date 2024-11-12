import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from './input';

describe('components/Input', () => {
  test('renders without errors', () => {
    render(<Input />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('renders with label', () => {
    render(<Input label="Username" />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
  });

  test('renders with label as ReactNode', () => {
    render(<Input label={<div>Label</div>} />);
    expect(screen.getByText('Label')).toBeInTheDocument();
  });

  test('renders with value', () => {
    render(<Input value="Hello" onChange={vi.fn()} />);
    expect(screen.getByDisplayValue('Hello')).toBeInTheDocument();
  });

  test('renders with value and required asterisk', () => {
    render(<Input value="Hello" onChange={vi.fn()} label="Label" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  test('renders with start adornment', () => {
    render(<Input startAdornment={<span>@</span>} />);
    expect(screen.getByText('@')).toBeInTheDocument();
  });

  test('renders with end adornment', () => {
    render(<Input endAdornment={<span>.com</span>} />);
    expect(screen.getByText('.com')).toBeInTheDocument();
  });

  test('renders with helper text', () => {
    render(<Input helper="Helper Text" />);
    expect(screen.getByText('Helper Text')).toBeInTheDocument();
  });

  test('renders disabled', () => {
    render(<Input value="Hello" onChange={vi.fn()} disabled />);
    expect(screen.getByDisplayValue('Hello')).toBeDisabled();
  });

  test('renders error', () => {
    render(<Input value="Hello" onChange={vi.fn()} error />);
    expect(screen.getByDisplayValue('Hello')).toHaveClass('placeholder-red-400');
  });

  test('renders loader', () => {
    const { container } = render(<Input value="Hello" onChange={vi.fn()} loading />);

    expect(container.childNodes[0].childNodes[0]).toHaveClass('skeleton-linear');
  });

  test('renders with inputContainerProps', () => {
    const { container } = render(<Input value="Hello" onChange={vi.fn()} inputContainerProps={{ className: 'text-red' }} />);

    expect(container.childNodes[0].childNodes[0]).toHaveClass('text-red');
  });

  test('renders with containerProps', () => {
    render(<Input value="Hello" onChange={vi.fn()} containerProps={{ 'aria-label': 'test prop' }} />);

    expect(screen.getByLabelText('test prop')).toBeInTheDocument();
  });

  test('renders with labelProps', () => {
    render(<Input value="Hello" onChange={vi.fn()} label="test" labelProps={{ className: 'text-red' }} />);

    expect(screen.getByText('test')).toHaveClass('text-red');
  });

  test('renders with helperProps', () => {
    render(<Input value="Hello" onChange={vi.fn()} helper="required" helperProps={{ className: 'text-red-200' }} />);

    expect(screen.getByText('required')).toHaveClass('text-red-200');
  });

  test('calls onChange callback when input value changes', async () => {
    const onChange = vi.fn();

    render(<Input onChange={onChange} />);

    const input = screen.getByRole('textbox');

    await userEvent.type(input, 'Hello');

    const inputRefresh = screen.getByRole('textbox');

    expect(onChange).toHaveBeenCalledTimes(5);
    expect(inputRefresh).toHaveValue('Hello');
  });
});

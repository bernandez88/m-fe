import { createRef } from 'react';
import type { ForwardedRef, ReactNode } from 'react';

import { render, screen } from '@testing-library/react';

import withForwardRef from './with-forward-ref';

type ComponentProps = {
  children?: ReactNode;
  ref?: ForwardedRef<HTMLDivElement>;
};

describe('utils/withForwardRef', () => {
  it('should render the component with forwardRef', () => {
    const Component = () => <div>Component</div>;
    const EnhancedComponent = withForwardRef(Component);

    render(<EnhancedComponent />);

    const component = screen.getByText('Component');

    expect(component).toBeInTheDocument();
  });

  it('should forward the ref to the component', () => {
    const Component = (props: ComponentProps, ref: ForwardedRef<HTMLDivElement>) => {
      const { children, ...restOfProps } = props;

      return (
        <div {...restOfProps} ref={ref}>
          {children}
        </div>
      );
    };

    const EnhancedComponent = withForwardRef(Component);

    const ref = createRef<HTMLDivElement>();

    const { container } = render(<EnhancedComponent ref={ref} />);

    expect(container).toBeInTheDocument();
    expect(ref.current).toBe(container.firstChild);
  });
});

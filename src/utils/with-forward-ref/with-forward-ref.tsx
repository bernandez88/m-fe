import { forwardRef } from 'react';
import type { ForwardRefRenderFunction, PropsWithoutRef } from 'react';

import type { ForwardedProps } from './with-forward-ref-types';

/**
 * A higher-order component that forwards the ref to the wrapped component.
 * @param Component - The component to wrap.
 * @returns Wrapped component with ref forwarding.
 */
function withForwardRef<P, R>(Component: ForwardRefRenderFunction<R, PropsWithoutRef<P>>) {
  return forwardRef<R, P>(Component) as (props: ForwardedProps<P, R>) => JSX.Element;
}

export default withForwardRef;

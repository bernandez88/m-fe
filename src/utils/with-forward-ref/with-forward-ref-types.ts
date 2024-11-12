import type { ForwardedRef } from 'react';

export type ForwardedProps<P, R> = P & {
  /**
   * The ref to the root element.
   */
  ref?: ForwardedRef<R>;
};

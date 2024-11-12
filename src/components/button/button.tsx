import type { ForwardedRef } from 'react';

import { withForwardRef } from 'utils';

import buttonStyles from './button-styles';

import type { ButtonProps } from './button-types';

function Component(props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) {
  const { children, className, size, variant, loading, startAdornment, endAdornment, ...restOfProps } = props;

  return (
    <button
      type="button"
      disabled={loading}
      {...restOfProps}
      className={buttonStyles({ loading, size, variant, className })}
      ref={ref}>
      {startAdornment}

      {children}

      {endAdornment}
    </button>
  );
}

Component.displayName = 'Button';

const Button = withForwardRef(Component);

export default Button;

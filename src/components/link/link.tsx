import { Link as ReactRouterLink } from 'react-router-dom';

import LinkStyles from './link-styles';

import type { LinkProps } from './link-types';

function Link(props: LinkProps) {
  const { children, className, size, variant, loading, startAdornment, endAdornment, ...restOfProps } = props;

  return (
    <ReactRouterLink {...restOfProps} className={LinkStyles({ loading, size, variant, className })}>
      {startAdornment}

      {children}

      {endAdornment}
    </ReactRouterLink>
  );
}

export default Link;

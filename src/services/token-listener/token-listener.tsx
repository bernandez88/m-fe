import { memo } from 'react';

import type { TokenListenerProps } from './token-listener-types';

function Component(props: TokenListenerProps) {
  const { children } = props;

  return children;
}

const TokenListener = memo(Component);

export default TokenListener;

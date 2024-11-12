import type { PropsWithChildren } from 'react';

import { MsalProvider } from '@azure/msal-react';

import { msalInstance } from './msal-browser-config';

export function MsalBrowserProvider(props: PropsWithChildren) {
  const { children } = props;

  return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
}

export default MsalBrowserProvider;

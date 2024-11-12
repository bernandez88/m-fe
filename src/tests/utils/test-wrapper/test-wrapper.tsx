import type { PropsWithChildren } from 'react';

import { MantineProvider } from '@mantine/core';
import { I18nextProvider } from 'react-i18next';

import { i18n } from 'config';

export function TestWrapper(props: PropsWithChildren) {
  const { children } = props;

  return (
    <MantineProvider>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </MantineProvider>
  );
}

export default TestWrapper;

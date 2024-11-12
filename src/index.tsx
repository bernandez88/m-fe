import { StrictMode } from 'react';

import { MantineProvider } from '@mantine/core';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';

import './index.css';
import { i18n } from './config';
import { MsalBrowserProvider, ReactQueryProvider } from './providers';
import { router } from './router';

const root = document.querySelector('#root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <ReactQueryProvider>
          <MsalBrowserProvider>
            <MantineProvider>
              <RouterProvider router={router} />
            </MantineProvider>
          </MsalBrowserProvider>
        </ReactQueryProvider>
      </I18nextProvider>
    </StrictMode>,
  );
}

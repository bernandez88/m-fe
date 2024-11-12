import { createBrowserRouter } from 'react-router-dom';

import { Auth } from 'auth';

import { PRIVATE } from './router-private';
import { PUBLIC } from './router-public';

const { PUBLIC_URL = '/' } = process.env;

export const router = createBrowserRouter(
  [
    {
      element: <Auth />,
      children: [...PRIVATE, ...PUBLIC],
    },
  ],
  {
    basename: PUBLIC_URL,
  },
);

export default router;

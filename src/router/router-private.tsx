import { Private } from 'auth';
import { ROUTES } from 'constants/routes';
import { Home } from 'pages';

import type { RouteObject } from 'react-router-dom';

export const PRIVATE: RouteObject[] = [
  {
    id: 'private',
    element: <Private />,
    errorElement: <Private />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: '*',
        element: <div>not found</div>,
      },
    ],
  },
];

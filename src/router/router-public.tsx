import { Public } from 'auth';
import { ROUTES } from 'constants/routes';
import { Login } from 'pages';

import type { RouteObject } from 'react-router-dom';

export const PUBLIC: RouteObject[] = [
  {
    id: 'public',
    errorElement: <div />,
    children: [
      {
        element: <Public />,
        children: [
          {
            path: ROUTES.LOGIN,
            element: <Login />,
          },
        ],
      },
      {
        path: ROUTES.EMPTY,
        element: <div />,
      },
    ],
  },
];

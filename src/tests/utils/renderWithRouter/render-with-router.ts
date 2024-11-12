import type { ReactElement } from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import type { RenderWithRouter, RenderWithRouterOptions } from './render-with-router-types';

/**
 * Renders a React component with a specified router configuration.
 *
 * @param ui - The React component to render.
 * @param options - Optional configuration options for rendering.
 * @returns An object containing the rendered component and additional utilities.
 */
function renderWithRouter(ui: ReactElement, options?: RenderWithRouterOptions): RenderWithRouter {
  const { route = '/', ...restOfOptions } = options || {};

  window.history.pushState({}, '', route);

  return {
    user: userEvent.setup(),
    ...render(ui, {
      wrapper: BrowserRouter,
      ...restOfOptions,
    }),
  };
}

export default renderWithRouter;

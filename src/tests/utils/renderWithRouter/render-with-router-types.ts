import type { RenderOptions, RenderResult } from '@testing-library/react';
import type { UserEvent } from '@testing-library/user-event';

export type RenderWithRouterOptions = RenderOptions & {
  route?: string;
};

export type RenderWithRouter = RenderResult & {
  user: UserEvent;
};

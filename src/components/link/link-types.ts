import type { ReactNode } from 'react';

import type LinkStyles from './link-styles';
import type { LinkProps as ReactRouterLinkProps } from 'react-router-dom';
import type { VariantProps } from 'tailwind-variants';

export type LinkProps = VariantProps<typeof LinkStyles> & {
  endAdornment?: ReactNode;
  startAdornment?: ReactNode;
} & ReactRouterLinkProps;

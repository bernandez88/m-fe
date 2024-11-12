import type { ButtonHTMLAttributes, ReactNode } from 'react';

import type ButtonStyles from './button-styles';
import type { VariantProps } from 'tailwind-variants';

export type ButtonProps = VariantProps<typeof ButtonStyles> & {
  endAdornment?: ReactNode;
  startAdornment?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

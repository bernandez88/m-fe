import type { HTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react';

import type inputStyles from './input-styles';
import type { VariantProps } from 'tailwind-variants';

export type InputBase = {
  label?: ReactNode;
  helper?: ReactNode;
  endAdornment?: ReactNode;
  startAdornment?: ReactNode;
  fixedHeightWithHelperText?: boolean;
  error?: boolean;
};

export type InputProps = VariantProps<typeof inputStyles> & {
  containerProps?: HTMLAttributes<HTMLDivElement>;
  helperProps?: HTMLAttributes<HTMLDivElement>;
  inputContainerProps?: HTMLAttributes<HTMLDivElement>;
  labelProps?: HTMLAttributes<HTMLLabelElement>;
} & InputBase &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>;

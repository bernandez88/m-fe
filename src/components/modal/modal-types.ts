import type { HTMLAttributes, ReactNode } from 'react';

import type ModalStyles from './modal-styles';
import type { UseState } from 'types';
import type { VariantProps } from 'utils';

export type ModalProps = VariantProps<typeof ModalStyles> & {
  logo?: ReactNode;
  title?: ReactNode;
  subTitle?: ReactNode;
  content?: ReactNode;
  okButtonContent?: ReactNode;
  cancelButtonContent?: ReactNode;
  transitionDuration?: number;
  hideCloseButton?: boolean;
  disableCloseOnEscape?: boolean;
  disableCloseOnBackdrop?: boolean;
  setOpen?: UseState<boolean>;
  onClose?: () => void;
  onCancel?: () => void;
  onOk?: () => void;
} & HTMLAttributes<HTMLDialogElement>;

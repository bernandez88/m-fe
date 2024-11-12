import { useEffect, useId, useRef, useState } from 'react';
import type { CSSProperties, KeyboardEvent, MouseEvent } from 'react';

import { useTranslation } from 'react-i18next';

import { Button } from '../button';

import ModalStyles from './modal-styles';

import type { ModalProps } from './modal-types';

const {
  root,
  container,
  body,
  footer,
  okButton,
  cancelButton,
  logo: logoStyle,
  title: titleStyle,
  subTitle: subTitleStyle,
} = ModalStyles();

function Modal(props: ModalProps) {
  const { t } = useTranslation();

  const {
    open,
    logo,
    title,
    style,
    content,
    subTitle,
    className,
    fullScreen,
    blurBackdrop,
    id: idByProps,
    variant = 'info',
    children = content,
    transparentBackground,
    disableCloseOnBackdrop,
    disableCloseOnEscape,
    okButtonContent = t('components.modal.confirm'),
    cancelButtonContent = t('components.modal.cancel'),
    transitionDuration = 300,
    onOk,
    onClose,
    onCancel,
    setOpen,
    ...restOfProps
  } = props;

  const [internalOpen, setInternalOpen] = useState(false);

  const rootRef = useRef<HTMLDialogElement>(null);

  const idByUseId = useId().replaceAll(/\W+/g, '');
  const id = `modal-${idByProps || idByUseId}`;

  const onCloseClick = () => {
    setInternalOpen(false);

    setTimeout(() => {
      onClose?.();
      setOpen?.(false);
    }, transitionDuration);
  };

  const onCancelClick = () => {
    onCancel?.();
    onCloseClick();
  };

  const onOkClick = () => {
    onOk?.();
    onCloseClick();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    restOfProps?.onKeyDown?.(event);

    if (!disableCloseOnEscape && event.key === 'Escape') {
      onCloseClick();
    }
  };

  const onClick = (event: MouseEvent<HTMLDialogElement>) => {
    restOfProps?.onClick?.(event);

    const target = event?.target as HTMLElement;
    const currentTarget = event?.currentTarget;

    if (!disableCloseOnBackdrop && target?.tagName === 'DIALOG' && target?.id === currentTarget?.id) {
      onCloseClick();
    }
  };

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => {
        setInternalOpen(true);
        rootRef.current?.focus();
      });
    }
  }, [open]);

  const internalStyle = {
    ...style,
    '--modal-transition-duration': `${transitionDuration}ms`,
  } as CSSProperties;

  return open ? (
    <dialog
      {...restOfProps}
      id={id}
      style={internalStyle}
      className={root({ open: internalOpen, blurBackdrop, className })}
      onKeyDown={onKeyDown}
      onClick={onClick}
      ref={rootRef}>
      <div className={container({ fullScreen, variant, transparentBackground })}>
        {variant === 'info' ? (
          <>
            {logo ? <div className={logoStyle()}>{logo}</div> : undefined}

            {title ? <div className={titleStyle()}>{title}</div> : undefined}

            {subTitle ? <div className={subTitleStyle()}>{subTitle}</div> : undefined}

            <div className={body()}>{children}</div>
          </>
        ) : undefined}

        {onCancel || onOk ? (
          <div className={footer()}>
            {onCancel ? (
              <Button onClick={onCancelClick} className={cancelButton()} variant="secondary">
                {cancelButtonContent}
              </Button>
            ) : undefined}

            {onOk ? (
              <Button onClick={onOkClick} className={okButton()} variant="primary">
                {okButtonContent}
              </Button>
            ) : undefined}
          </div>
        ) : undefined}
      </div>
    </dialog>
  ) : undefined;
}

export default Modal;

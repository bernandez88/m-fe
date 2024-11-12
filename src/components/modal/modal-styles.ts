import { tv } from 'utils';

const ModalStyles = tv({
  slots: {
    root: [
      'absolute inset-0 z-[999999] flex h-dvh w-dvw flex-col items-center justify-center bg-[#1A1E26C4]',
      'transition-all duration-[var(--modal-transition-duration)]',
    ],
    container: 'relative flex w-[29rem] flex-col gap-4 rounded-lg bg-white',
    header: 'flex',
    body: 'flex flex-col',
    footer: 'flex justify-center gap-6 pt-4',
    okButton: 'min-w-40',
    cancelButton: 'min-w-40',
    closeButton: 'absolute right-2 top-2 p-0.5',
    title: 'flex',
    subTitle: 'flex',
    logo: 'flex max-h-16',
  },
  variants: {
    variant: {
      info: {
        container: 'items-center px-8 py-10 text-center',
        title: 'text-heading-h5',
        subTitle: 'text-body-s-regular text-[#475467]', // TODO: wrong color, add to design system
      },
    },
    blurBackdrop: {
      true: {
        root: 'backdrop-blur-sm backdrop-filter',
      },
    },
    fullScreen: {
      true: {
        container: 'size-full max-h-[unset] max-w-[unset] rounded-none',
      },
    },
    open: {
      true: {
        root: 'opacity-100',
      },
      false: {
        root: 'opacity-0',
      },
    },
    transparentBackground: {
      true: {
        container: 'bg-transparent',
      },
    },
  },
  defaultVariants: {
    open: false,
    variant: 'info',
  },
});

export default ModalStyles;

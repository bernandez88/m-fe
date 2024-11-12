import { tv } from 'utils';

const inputStyles = tv({
  slots: {
    adornment: 'flex items-center justify-center fill-inherit text-inherit',
    container: 'group flex flex-col text-gray-950',
    helper: 'text-body-xxs-regular leading-5 text-inherit',
    input: 'w-full text-ellipsis bg-transparent leading-6 text-inherit placeholder-gray-200 outline-none disabled:opacity-50',
    inputContainer: [
      'flex items-center gap-2 rounded-lg',
      'outline outline-1 -outline-offset-1 outline-gray-400 hover:outline-gray-500',
    ],
    label: [
      'text-inherit transition-all duration-100 ease-in-out',
      'absolute left-4 z-[1] align-middle text-body-xs-regular leading-4 text-gray-600',
      'group-focus-within:-top-1.5 group-focus-within:px-px group-focus-within:text-[12px] group-focus-within:leading-3',
      'group-focus-within:left-3 group-focus-within:bg-[linear-gradient(transparent_6px,_white_0px_7px,_transparent_0px)]',
    ],
    labelAsFieldset: [
      '-top-1.5 left-3 px-px text-[12px] leading-3',
      'bg-[linear-gradient(transparent_6px,_white_0px_7px,_transparent_0px)]',
    ],
    labelRequired: 'pl-1 text-red-600',
  },
  variants: {
    disabled: {
      true: {
        container: 'opacity-50 hover:text-gray-400',
        input: 'placeholder-gray-400',
        inputContainer: 'hover:text-gray-400 hover:outline-gray-400',
      },
    },
    error: {
      true: {
        input: 'placeholder-red-400 hover:text-red-500',
        inputContainer: [
          'text-red-500 outline-red-500',
          'hover:text-red-500 hover:outline-red-500',
          'focus-within:text-red-500 focus-within:outline-red-500',
        ],
        helper: 'text-red-500',
        label: 'text-red-500',
      },
    },
    loading: {
      true: {
        input: 'cursor-progress',
        inputContainer: 'skeleton-linear cursor-progress',
      },
    },
    resize: {
      true: {
        input: 'resize',
        inputContainer: 'w-fit',
      },
      false: {
        input: 'resize-none',
      },
    },
    size: {
      medium: {
        inputContainer: 'px-4 py-2',
        label: 'top-3',
      },
      large: {
        inputContainer: 'px-4 py-3',
        label: 'top-4',
      },
    },
  },
  defaultVariants: {
    disabled: false,
    error: false,
    loading: false,
    resize: false,
    size: 'large',
  },
});

export default inputStyles;

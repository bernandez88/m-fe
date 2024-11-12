import { tv } from 'utils';

const ButtonStyles = tv({
  base: [
    'text-button-medium group flex items-center justify-center gap-2 rounded-[100px] px-4 py-2.5 text-white',
    'disabled:pointer-events-none disabled:translate-y-0 disabled:cursor-not-allowed disabled:shadow-none',
    'focus-visible:outline-none active:translate-y-px',
  ],
  variants: {
    loading: {
      true: 'skeleton-linear cursor-progress',
    },
    size: {
      medium: 'h-10',
      large: 'h-12',
    },
    variant: {
      'no-style': '',
      primary: [
        'bg-cardinal-700 hover:bg-cardinal-500 hover:shadow-m3-elevation-light-1 focus:shadow-m3-elevation-light-1',
        'focus:bg-cardinal-800 focus-visible:bg-cardinal-700 disabled:bg-gray-200',
      ],
      secondary: [
        'text-button-small text-gray-900 outline outline-1 -outline-offset-1 outline-gray-900 hover:bg-neutral-100',
        'focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-gray-900',
        'focus:bg-neutral-200 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-800',
        'disabled:bg-neutral-200 disabled:text-gray-300 disabled:outline-gray-200',
      ],
      tertiary: 'text-cardinal-600 hover:bg-cardinal-100 disabled:text-gray-300',
      icon: [
        'aspect-square h-[unset] p-2',
        'bg-cardinal-700 hover:bg-cardinal-500 hover:shadow-m3-elevation-light-1 focus:shadow-m3-elevation-light-1',
        'focus:bg-cardinal-800 focus-visible:bg-cardinal-700 disabled:bg-gray-200',
      ],
      'icon-dark': [
        'aspect-square h-[unset] p-2',
        'bg-neutral-300 text-gray-500 hover:bg-neutral-400 hover:shadow-m3-elevation-light-1 focus:shadow-m3-elevation-light-1',
        'focus:bg-neutral-400 focus-visible:bg-neutral-400 disabled:bg-gray-200',
      ],
      collapse: 'h-auto justify-start p-0 text-gray-900 [&_svg]:size-6 group-data-[open=true]:[&_svg]:text-cardinal-600',
    },
  },
  defaultVariants: {
    size: 'medium',
    variant: 'primary',
  },
});

export default ButtonStyles;

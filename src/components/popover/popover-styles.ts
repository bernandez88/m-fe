import { tv } from 'tailwind-variants';

const PopoverStyles = tv({
  slots: {
    target: 'rounded-full px-3 py-1.5 text-button-small',
    dropdown: 'bg-neutral-50 shadow',
  },
  variants: {
    variant: {
      primary: {
        target:
          'hover: border border-gray-400 bg-neutral-50 text-gray-900 hover:bg-neutral-200 disabled:border-gray-200 disabled:text-gray-300 aria-expanded:border-cardinal-700 aria-expanded:text-cardinal-700',
        dropdown: 'rounded-md p-6',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export default PopoverStyles;

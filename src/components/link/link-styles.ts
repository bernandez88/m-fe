import { tv } from 'utils';

const LinkStyles = tv({
  base: [
    'group flex items-center justify-start gap-2 text-body-xs-regular text-gray-900',
    'disabled:pointer-events-none disabled:translate-y-0 disabled:cursor-not-allowed disabled:shadow-none',
    'transition-colors focus-visible:outline-none active:translate-y-px',
  ],
  variants: {
    loading: {
      true: 'skeleton-linear cursor-progress',
    },
    size: {
      medium: 'p-4',
    },
    variant: {
      default:
        'justify-start border-b border-gray-200 hover:rounded-br-full hover:rounded-tr-full hover:border-b-0 hover:bg-neutral-50 [&_svg]:size-6 [&_svg]:hover:text-cardinal-600',
      collapsed:
        'flex-col justify-start border-b border-gray-200 text-[8px] hover:rounded-br-full hover:rounded-tr-full hover:border-b-0 hover:bg-neutral-50 [&_svg]:size-6 [&_svg]:hover:text-cardinal-600',
      list: 'justify-start border-b border-b-gray-200 px-0 data-[last=true]:border-b-0 [&_svg]:size-6',
      'list-collapsed': 'flex-col border-b border-b-gray-200 px-0 text-[8px] data-[last=true]:border-b-0 [&_svg]:size-6',
    },
  },
  defaultVariants: {
    size: 'medium',
    variant: 'default',
  },
});

export default LinkStyles;

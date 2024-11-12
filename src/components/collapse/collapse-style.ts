import { tv } from 'utils';

const CollapseStyle = tv({
  slots: {
    container: 'flex flex-col gap-3.5 border-b border-b-gray-200 data-[open=true]:border-b-0',
    triggersContainer:
      'group flex items-center justify-between gap-3.5 rounded-br-full rounded-tr-full px-4 py-2 text-body-xs-regular data-[open=true]:bg-neutral-50 data-[open=true]:text-body-xs-bold',

    collapseContainer: 'px-6',
  },

  variants: {
    variant: {
      'no-underline': {
        container: 'border-b-0',
      },
    },
  },
});

export default CollapseStyle;

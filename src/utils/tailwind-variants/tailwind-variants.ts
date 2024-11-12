import { createTV } from 'tailwind-variants';

import tailwindConfig from '../../../tailwind.config';

const tv = createTV({
  twMergeConfig: {
    extend: {
      classGroups: {
        'font-size': [
          {
            text: Object.keys({ ...tailwindConfig.theme?.fontSize }),
          },
        ],
      },
    },
  },
});

export default tv;

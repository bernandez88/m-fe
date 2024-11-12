import { tv } from 'utils';

export const containerStyles = tv({
  base: [
    'mb-[16px] flex h-[194px] flex-col items-start rounded-[27px] bg-cover bg-[center_top_60%] bg-no-repeat bg-origin-border',
  ],
});

export const heroButtonStyles = tv({
  base: ['flex h-full w-[301px] items-center rounded-[12px] bg-white py-[16px] text-body-s-semibold text-neutral-900'],
});

export const innerContainerStyles = tv({
  base: ['pl-[35px] pt-[41px]'],
});

export const titleStyles = tv({
  base: ['text-[38px] font-bold leading-[45.6px] text-white'],
});

export const buttonsContainerStyles = tv({
  base: ['mt-[15px] flex gap-[21px]'],
});

export const iconStyles = tv({
  base: ['cls-1 h-[33px] w-1/4'],
});

export const heroButtonIconStyles = tv({
  base: ['cls-1 w-1/4'],
});
export const separatorStyles = tv({
  base: ['absolute left-[69px] h-full w-[1px] bg-gray-200'],
});

export const textStyles = tv({
  base: ['w-1/2'],
});

import { tv } from 'tailwind-variants';

export const mainContainer = tv({
  base: 'flex h-screen',
});

export const leftSection = tv({
  base: 'bg-white-100 flex w-1/2 flex-col justify-between p-8',
});

export const logoContainer = tv({
  base: 'flex justify-start',
});

export const textContainer = tv({
  base: 'flex max-w-[500px] flex-1 flex-col items-start justify-center',
});

export const welcomeHeaderStyle = tv({
  base: 'w-full text-left text-[60px] font-normal leading-[60px]',
});

export const headerStyles = tv({
  base: 'w-full text-left text-[60px] font-bold leading-[60px]',
});

export const subheaderStyles = tv({
  base: 'text-lg mt-2 w-full text-left text-[20px] leading-[60px] text-[#475467]',
});
export const footerText = tv({
  base: 'text-sm text-center text-[18px] text-gray-900',
});

export const rightSection = tv({
  base: 'h-full w-1/2 bg-cover bg-bottom',
});

import tv from './tailwind-variants';

const tvStyles = tv({
  slots: {
    stringTest: 'text-body-l-regular text-red-500',
    arrayTest: ['text-body-l-regular', 'text-red-300', 'text-red-400'],
  },
});

const { arrayTest, stringTest } = tvStyles();

describe('utils/tailwindVariants', () => {
  it('should join all string classes', () => {
    expect(stringTest()).toBe('text-body-l-regular text-red-500');
  });

  it('should join all array classes', () => {
    expect(arrayTest()).toBe('text-body-l-regular text-red-400');
  });
});

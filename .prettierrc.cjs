/**
 * @type {import("prettier").Config}
 */
const config = {
  bracketSameLine: true,
  endOfLine: 'lf',
  printWidth: 128,
  singleQuote: true,
  tabWidth: 2,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: './tailwind.config.ts',
  tailwindFunctions: ['tv'],
  overrides: [
    {
      files: ['**/constants/**', '**/locales/**'],
      options: {
        quoteProps: 'consistent',
        printWidth: 256,
      },
    },
  ],
};

module.exports = config;

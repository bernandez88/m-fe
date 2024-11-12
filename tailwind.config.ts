/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/components/**/*.{ts,tsx}', './src/pages/**/*.{ts,tsx}', './src/layout/**/*.{ts,tsx}'],
  theme: {
    fontSize: {
      display: [
        '80px',
        {
          fontWeight: 700,
          lineHeight: '96px',
          letterSpacing: '-0.01em',
        },
      ],
      'body-l-regular': [
        '26px',
        {
          fontWeight: 400,
          lineHeight: '36.4px',
          letterSpacing: 'normal',
        },
      ],
      'body-l-semibold': [
        '26px',
        {
          fontWeight: 600,
          lineHeight: '36.4px',
          letterSpacing: 'normal',
        },
      ],
      'body-l-bold': [
        '26px',
        {
          fontWeight: 700,
          lineHeight: '36.4px',
          letterSpacing: 'normal',
        },
      ],
      'body-m-regular': [
        '21px',
        {
          fontWeight: 400,
          lineHeight: '29.4px',
          letterSpacing: 'normal',
        },
      ],
      'body-m-semibold': [
        '21px',
        {
          fontWeight: 600,
          lineHeight: '29.4px',
          letterSpacing: 'normal',
        },
      ],
      'body-m-bold': [
        '21px',
        {
          fontWeight: 700,
          lineHeight: '29.4px',
          letterSpacing: 'normal',
        },
      ],
      'body-s-regular': [
        '18px',
        {
          fontWeight: 400,
          lineHeight: '25.2px',
          letterSpacing: 'normal',
        },
      ],
      'body-s-semibold': [
        '18px',
        {
          fontWeight: 600,
          lineHeight: '25.2px',
          letterSpacing: 'normal',
        },
      ],
      'body-s-bold': [
        '18px',
        {
          fontWeight: 700,
          lineHeight: '25.2px',
          letterSpacing: 'normal',
        },
      ],
      'body-xs-regular': [
        '16px',
        {
          fontWeight: 400,
          lineHeight: '22.4px',
          letterSpacing: 'normal',
        },
      ],
      'body-xs-semibold': [
        '16px',
        {
          fontWeight: 600,
          lineHeight: '22.4px',
          letterSpacing: 'normal',
        },
      ],
      'body-xs-bold': [
        '16px',
        {
          fontWeight: 700,
          lineHeight: '22.4px',
          letterSpacing: 'normal',
        },
      ],
      'body-xxs-regular': [
        '12px',
        {
          fontWeight: 400,
          lineHeight: '16.8px',
          letterSpacing: 'normal',
        },
      ],
      'button-large': [
        '20px',
        {
          fontWeight: 600,
          lineHeight: '28px',
          letterSpacing: 'normal',
        },
      ],
      'button-small': [
        '18px',
        {
          fontWeight: 600,
          lineHeight: '25.2px',
          letterSpacing: 'normal',
        },
      ],
      'caption-regular': [
        '14px',
        {
          fontWeight: 400,
          lineHeight: '19.6px',
          letterSpacing: 'normal',
        },
      ],
      'caption-semibold': [
        '14px',
        {
          fontWeight: 600,
          lineHeight: '19.6px',
          letterSpacing: 'normal',
        },
      ],
      'caption-bold': [
        '14px',
        {
          fontWeight: 700,
          lineHeight: '19.6px',
          letterSpacing: 'normal',
        },
      ],
      'heading-h1': [
        '50px',
        {
          fontWeight: 700,
          lineHeight: '60px',
          letterSpacing: '-0.01em',
        },
      ],
      'heading-h2': [
        '42px',
        {
          fontWeight: 600,
          lineHeight: '58.8px',
          letterSpacing: '-0.01em',
        },
      ],
      'heading-h3': [
        '36px',
        {
          fontWeight: 600,
          lineHeight: '43.2px',
          letterSpacing: '-0.01em',
        },
      ],
      'heading-h4': [
        '28px',
        {
          fontWeight: 600,
          lineHeight: '33.6px',
          letterSpacing: '-0.01em',
        },
      ],
      'heading-h5': [
        '24px',
        {
          fontWeight: 600,
          lineHeight: '28.8px',
          letterSpacing: '-0.01em',
        },
      ],
      'subheading-1': [
        '30px',
        {
          fontWeight: 600,
          lineHeight: '42px',
          letterSpacing: 'normal',
        },
      ],
      'subheading-2': [
        '22px',
        {
          fontWeight: 600,
          lineHeight: '26.4px',
          letterSpacing: 'normal',
        },
      ],
      'subheading-3': [
        '16px',
        {
          fontWeight: 600,
          lineHeight: '19.2px',
          letterSpacing: 'normal',
        },
      ],
    },
    extend: {
      boxShadow: {
        'm3-elevation-light-1': '0px 1px 3px 1px #00000026, 0px 1px 2px 0px #0000004D',
      },
      colors: {
        cardinal: {
          50: '#FFF4F4',
          100: '#FEE5E5',
          200: '#FBD0D1',
          300: '#F8A9AB',
          400: '#F4787E',
          500: '#EA4954',
          600: '#CA2539',
          700: '#B51B32',
          800: '#981930',
          900: '#82192F',
          950: '#480915',
        },
        gray: {
          100: '#AFB0B1',
          200: '#D3D3D3',
          300: '#AFB0B1',
          400: '#878889',
          500: '#6D6E70',
          600: '#5C5D5E',
          800: '#444446',
          900: '#3C3C3D',
          950: '#262626',
        },
        neutral: {
          50: '#FFFFFF',
          100: '#FDFDFE',
          200: '#F5F7FD',
          300: '#E0E5F1',
          400: '#C0C6D2',
          500: '#808AA0',
          600: '#697185',
          700: '#545A69',
          800: '#303745',
          900: '#14171D',
          950: '#000000',
        },
        negative: {
          400: '#FF6464',
          500: '#FF4949',
          600: '#ED1515',
          700: '#C80D0D',
          800: '#A50F0F',
        },
        warning: {
          300: '#FFE949',
          400: '#FFDA1F',
          500: '#FABB09',
          600: '#DD8F02',
          700: '#B86705',
        },
        success: {
          50: '#EEFFF4',
          100: '#D8FFE9',
          200: '#B3FFD4',
          300: '#36F289',
          400: '#0CDB67',
          500: '#03AF4F',
          600: '#078E43',
          700: '#0B7038',
        },
        info: {
          500: '#14AFFF',
          700: '#0077FF',
          800: '#0067DD',
          900: '#0852A0',
          950: '#0A3261',
        },
      },
    },
  },
  plugins: [],
};

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3C8CCD',
        secondary: '#03CEA4',
        tertiary: '#B2CEDE',
        primary_light: '#b1d1eb',
        primary_dark: '#183852',
        'grey-light-1': '#F6F8FB',
        'grey-light-2': '#e6e9ed',
        accents_0: '#f8f9fa',
        accents_1: '#f1f3f5',
        accents_2: '#e9ecef',
        accents_3: '#dee2e6',
        accents_4: '#ced4da',
        accents_5: '#adb5bd',
        accents_6: '#868e96',
        accents_7: '#495057',
        accents_8: '#343a40',
        accents_9: '#212529',
      },
      fontSize: {
        'main-heading': ['40px', { lineHeight: '1.35' }],
      },
      borderRadius: {
        circle: '50%',
      },
      boxShadow: {
        custom: '0 6px 12px 0 rgba(0, 0, 0, 0.25);',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    lineHeight: {
      3: '0.75rem !important',
      4: '1rem !important',
      5: '1.25rem !important',
      6: '1.5rem !important',
      7: '1.75rem !important',
      8: '2rem !important',
      9: '2.25rem !important',
      10: '2.5rem !important',
      loose: '2 !important',
      relaxed: '1.625 !important',
      normal: '1.5 !important',
      snug: '1.375 !important',
      tight: '1.25 !important',
      none: '1 !important',
    },
    screens: {
      xs: { max: '320px' },
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}

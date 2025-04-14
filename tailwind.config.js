export default {
  content: [
    "./index.html",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    },
    colors: {
      // Gray scalse
      gray_50: '#F9FAFB', // gray-10
      gray_100: '#F3F4F6', // gray-100
      gray_200: '#E5E7EB', // gray-200
      gray_300: '#D1D5DB',
      gray_400: 'rgba(156, 163, 175, 1)',
      gray_500: '#6B7280', // gray-500
      gray_600: '#4B5563', // gray-600
      gray_700: '#374151', // gray-700
      gray_800: '#1F2A37',
      gray_900: '#111928',
      dark: '#0E1420',
      black: '#000000',
      white: '#FFFFFF',
      transparent: 'transparent',

      // Primary colors
      primary: '#3F83F8',
      parimary_50: '#EBF5FF',
      primary_100: '#E1EFFE',
      primary_200: '#C3DDFD',
      primary_300: '#A4CAFE',
      primary_400: '#76A9FA',
      primary_500: '#3F83F8',
      primary_600: '#1C64F2',
      primary_700: '#1A56DB',
      primary_800: '#1E429F',
      primary_900: '#233876',

      // Green colors
      green_50: '#F3FAF7',
      green_100: '#DEF7EC',
      green_200: '#BCF0DA',
      green_300: '#4CFFBE',
      green_400: '#31C48D',
      green_500: '#0E9F6E',
      green_600: '#057A55',
      green_700: '#046C4E',
      green_800: '#03543F',
      green_900: '#014737',

      // Red colors
      red_50: '#FDF2F2',
      red_100: '#FDE8E8',
      red_200: '#FBD5D5',
      red_300: '#F8B4B4',
      red_400: '#F98080',
      red_500: '#F05252',
      red_600: '#E02424',
      red_700: '#C81E1E',
      red_800: '#9B1C1C',
      red_900: '#771D1D',
    },
    screens: {
      mobile: '250px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      dsk: '1920px',

    }
  },
  plugins: [],
};
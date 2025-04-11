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
      screens: {
        '3xl': '1900px',
        'responsivew': '1024px',
        'md': '768px'
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
      dark_dark: '#0E1420', // Duplicate but added for reference
      black: '#000000',
      white: '#FFFFFF',

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

      // Orange colors
      orange_50: '#FFF8F1',
      orange_100: '#FEECDC',
      orange_200: '#FCD9BD',
      orange_300: '#FDBA8C',
      orange_400: '#FF8A4C',
      orange_500: '#FF5A1F',
      orange_600: '#D03801',
      orange_700: '#B43403',
      orange_800: '#8A2C0D',
      orange_900: '#771D1D',

      // Indigo colors
      indigo_50: '#F0F5FF',
      indigo_100: '#E5EDFF',
      indigo_200: '#CDDBFE',
      indigo_300: '#B4C6FC',
      indigo_400: '#8DA2FB',
      indigo_500: '#6875F5',
      indigo_600: '#5850EC',
      indigo_700: '#5145CD',
      indigo_800: '#42389D',
      indigo_900: '#362F78',

      // Pink colors
      pink_50: '#FDF2F8',
      pink_100: '#FCE8F3',
      pink_200: '#FAD1E8',
      pink_300: '#F8B4D9',
      pink_400: '#F17EB8',
      pink_500: '#E74694',
      pink_600: '#D61F69',
      pink_700: '#BF125D',
      pink_800: '#99154B',
      pink_900: '#751A3D',

      // Purple colors
      purple_50: '#F6F5FF',
      purple_100: '#EDEBFE',
      purple_200: '#DCD7FE',
      purple_300: '#CABFFD',
      purple_400: '#AC94FA',
      purple_500: '#9061F9',
      purple_600: '#7E3AF2',
      purple_700: '#6C2BD9',
      purple_800: '#5521B5',
      purple_900: '#4A1D96',

      // Teal colors
      teal_50: '#EDFAFA',
      teal_100: '#D5F5F6',
      teal_200: '#AFECEF',
      teal_300: '#7EDCE2',
      teal_400: '#16BDCA',
      teal_500: '#0694A2',
      teal_600: '#047481',
      teal_700: '#036672',
      teal_800: '#05505C',
      teal_900: '#014451',

      // Yellow colors
      yellow_50: '#FDFDEA',
      yellow_100: '#FDF6B2',
      yellow_200: '#FCE96A',
      yellow_300: '#FACA15',
      yellow_400: '#E3A008',
      yellow_500: '#C27803',
      yellow_600: '#9F580A',
      yellow_700: '#8E4B10',
      yellow_800: '#723B13',
      yellow_900: '#633112',

      // Shiraz colors
      shiraz_50: '#FFF0F2',
      shiraz_100: '#FFE1E5',
      shiraz_200: '#FFC8D1',
      shiraz_300: '#FF9BAB',
      shiraz_400: '#FF6380',
      shiraz_500: '#FF2D59',
      shiraz_600: '#F50945',
      shiraz_700: '#CF013A',
      shiraz_800: '#AF0439',
      shiraz_900: '#940738',
      shiraz_950: '#530019',

      // Additional colors
      titles: '#E5E7EB', // gray-200 //
      subTitles: '#9CA3AF', //
      inactive: '#1F2A37', //
      success: '#4CFFBE', //
      warning: '#FDBA8C', //
      error: '#F05252', //
      disabled: '#4B5563', //
      disabledText: '#9CA3AF', //
      inputError: '#F05252', //
      light: '#F3F4F6', //
      transparent: 'transparent', //
      buttonDetail: "#1a56db"
    },
    },
  },
  plugins: [],
};
import { theme } from '@chakra-ui/core';

import icons from './icons';

export default {
    ...theme,
    fonts: {
        ...theme.fonts,
        heading: '"Lilita One", sans-serif',
        body: "Nunito, sans-serif"
    },
    fontSizes: {
        ...theme.fontSizes,
        '7xl': '84px',
        '8xl': '108px',
        '9xl': '136px'
    },
    fontWeights: {
        ...theme.fontWeights,
        thin: 300
    },
    colors: {
        ...theme.colors,
        petcode: {
            blue: {
              50: '#B5E3EF',
              100: '#9CD9EA',
              200: '#84D0E5',
              300: '#6BC6E0',
              400: '#51BCDA',
              500: '#2FAFD3',
              600: '#197a94',
              700: '#2693B1',
              800: '#1E768E',
              900: '#17586A',
            },
            yellow: '#FBC658',
            teal: '#51CBCE',
            neutral: {
                100: '#F7FAFC',
                200: '#EDF2F7',
                300: '#E2E8F0',
                400: '#CBD5E0',
                500: '#A0AEC0',
                600: '#718096',
                700: '#4A5568'
            }
        }
    },
    icons
};

import React from 'react';

import { theme } from '@chakra-ui/core';

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
    icons: {
        username: { path: <path fill="currentColor" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"/> },
        password: { path: <path fill="currentColor" d="M7 10V7a5 5 0 1 1 10 0v3h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h2zm2 0h6V7a3 3 0 0 0-6 0v3zm-4 2v8h14v-8H5zm7 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1z"/> },
        hashtag: { path: <path fill="currentColor" d="M11.03 8h3.94l1.06-4.24a1 1 0 1 1 1.94.48L17.03 8H20a1 1 0 0 1 0 2h-3.47l-1 4H18a1 1 0 1 1 0 2h-2.97l-1.06 4.25a1 1 0 1 1-1.94-.49l.94-3.76H9.03l-1.06 4.25a1 1 0 1 1-1.94-.49L6.97 16H4a1 1 0 0 1 0-2h3.47l1-4H6a1 1 0 0 1 0-2h2.97l1.06-4.24a1 1 0 1 1 1.94.48L11.03 8zm-.5 2l-1 4h3.94l1-4h-3.94z"/> },
        template: { path: <path stroke="currentColor" fill="transparent" d="M.667 2.083a.917.917 0 0 1 .916-.916h12.834a.917.917 0 0 1 .916.916v1.834a.917.917 0 0 1-.916.916H1.583a.917.917 0 0 1-.916-.916V2.083zm0 7.334a.917.917 0 0 1 .916-.917h5.5A.917.917 0 0 1 8 9.417v5.5a.916.916 0 0 1-.917.916h-5.5a.917.917 0 0 1-.916-.916v-5.5zm11 0a.917.917 0 0 1 .916-.917h1.834a.917.917 0 0 1 .916.917v5.5a.917.917 0 0 1-.916.916h-1.834a.917.917 0 0 1-.916-.916v-5.5z" stroke-linecap="round" stroke-linejoin="round"/> },
        'user-circle': { path: <path stroke="currentColor" fill="transparent" d="M2.694 14.82A12.775 12.775 0 0 1 9 13.167c2.292 0 4.443.6 6.306 1.653M11.75 7.667a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0zm5.5 1.833a8.25 8.25 0 1 1-16.5 0 8.25 8.25 0 0 1 16.5 0z" stroke-linecap="round" stroke-linejoin="round"/> }
    }
};

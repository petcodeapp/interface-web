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
              50: '#ddfaff',
              100: '#b8e8f6',
              200: '#91d8eb',
              300: '#69c6e1',
              400: '#42b6d7',
              500: '#289dbd',
              600: '#197a94',
              700: '#09576b',
              800: '#003542',
              900: '#00131b',
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
        password: { path: <path fill="currentColor" d="M7 10V7a5 5 0 1 1 10 0v3h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h2zm2 0h6V7a3 3 0 0 0-6 0v3zm-4 2v8h14v-8H5zm7 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1z"/> }
    }
};

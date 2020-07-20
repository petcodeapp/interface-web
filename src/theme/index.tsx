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
        template: {
            path: <path stroke="currentColor" fill="transparent" d="M.667 2.083a.917.917 0 0 1 .916-.916h12.834a.917.917 0 0 1 .916.916v1.834a.917.917 0 0 1-.916.916H1.583a.917.917 0 0 1-.916-.916V2.083zm0 7.334a.917.917 0 0 1 .916-.917h5.5A.917.917 0 0 1 8 9.417v5.5a.916.916 0 0 1-.917.916h-5.5a.917.917 0 0 1-.916-.916v-5.5zm11 0a.917.917 0 0 1 .916-.917h1.834a.917.917 0 0 1 .916.917v5.5a.917.917 0 0 1-.916.916h-1.834a.917.917 0 0 1-.916-.916v-5.5z" stroke-linecap="round" stroke-linejoin="round"/>,
            viewBox: '0 0 16 17'
        },
        'user-circle': {
            path: <path stroke="currentColor" fill="transparent" d="M2.694 14.82A12.775 12.775 0 0 1 9 13.167c2.292 0 4.443.6 6.306 1.653M11.75 7.667a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0zm5.5 1.833a8.25 8.25 0 1 1-16.5 0 8.25 8.25 0 0 1 16.5 0z" stroke-linecap="round" stroke-linejoin="round"/>,
            viewBox: '0 0 18 19'
        },
        messages: {
            path: <path stroke="currentColor" fill="transparent" d="M37.792 12.667h4.916a4.917 4.917 0 0 1 4.917 4.916v14.75a4.916 4.916 0 0 1-4.917 4.917h-4.916v9.833l-9.834-9.833h-9.833a4.904 4.904 0 0 1-3.476-1.44m0 0l8.393-8.393h9.833a4.917 4.917 0 0 0 4.917-4.917V7.75a4.917 4.917 0 0 0-4.917-4.917H8.292A4.917 4.917 0 0 0 3.375 7.75V22.5a4.917 4.917 0 0 0 4.917 4.917h4.916v9.833l1.44-1.44z" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>,
            viewBox: '0 0 51 50'
        },
        clipboard: {
            path: <path stroke="currentColor" fill="transparent" d="M13.125 7.5H8.208a4.875 4.875 0 0 0-3.476 1.464 5.043 5.043 0 0 0-1.44 3.536v30c0 1.326.518 2.598 1.44 3.535A4.875 4.875 0 0 0 8.208 47.5h24.584a4.876 4.876 0 0 0 3.476-1.465 5.043 5.043 0 0 0 1.44-3.535v-30a5.043 5.043 0 0 0-1.44-3.536A4.876 4.876 0 0 0 32.792 7.5h-4.917m-14.75 0c0 1.326.518 2.598 1.44 3.536a4.876 4.876 0 0 0 3.477 1.464h4.916a4.875 4.875 0 0 0 3.477-1.464 5.043 5.043 0 0 0 1.44-3.536m-14.75 0c0-1.326.518-2.598 1.44-3.536A4.876 4.876 0 0 1 18.042 2.5h4.916c1.304 0 2.555.527 3.477 1.464a5.043 5.043 0 0 1 1.44 3.536M20.5 25h7.375M20.5 35h7.375m-14.75-10h.025m-.025 10h.025" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>,
            viewBox: '0 0 41 50'
        },
        flag: {
            path: <path stroke="currentColor" fill="transparent" d="M25 4.604v13.521m-21.75 29.5v-9.833 9.833zm0-9.833v-29.5a4.96 4.96 0 0 1 1.416-3.477 4.792 4.792 0 0 1 3.417-1.44h15.709l2.416 2.458H46.75l-7.25 14.75 7.25 14.75H26.208l-2.416-2.458H8.083a4.792 4.792 0 0 0-3.417 1.44 4.96 4.96 0 0 0-1.416 3.477z" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>,
            viewBox: '0 0 50 51'
        },
        link: {
            path: <path stroke="currentColor" fill="transparent" d="M29.418 20.43c-1.813-1.875-4.271-2.928-6.834-2.928-2.564 0-5.022 1.053-6.835 2.928l-9.667 10a10.017 10.017 0 0 0-2.166 3.246 10.303 10.303 0 0 0-.065 7.734 10.032 10.032 0 0 0 2.112 3.284 9.65 9.65 0 0 0 3.175 2.184 9.385 9.385 0 0 0 7.475-.067 9.665 9.665 0 0 0 3.138-2.241l2.663-2.752M20.582 29.57c1.813 1.875 4.271 2.928 6.835 2.928 2.563 0 5.021-1.053 6.834-2.928l9.667-10c1.76-1.886 2.735-4.412 2.713-7.034-.022-2.622-1.039-5.13-2.831-6.984s-4.217-2.906-6.751-2.929c-2.535-.022-4.977.985-6.8 2.807l-2.658 2.75" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>,
            viewBox: '0 0 50 51'
        }
    }
};

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    mode: "jit",
    content: [
        './public/index.html',
        './public/js/custom.js',
    ],
    theme: {
        fontFamily: {
        sans: ['"SF-Pro-Display"', ...defaultTheme.fontFamily.sans]
        },
        colors: {
            primary: {
                black: '#000000',
                bg: '#1D1D1D',
                DEFAULT: '#252525',
            },
            secondary: {
                text: '#F6F6F6',
                DEFAULT: '#CCCCCC',
                bg: '#F0EFEF',
            },
            white: '#FFFFFF',
            golden: {
                light: '#C9BEB3',
                DEFAULT: '#C49C74',
            },
            inherit: colors.inherit,
            transparent: colors.transparent,
        },
        container: {
        center: true,
        padding: {
            DEFAULT: '1rem',
            sm: '2rem',
        }
        },
        screens: {
        '3xs': '360px',
        '2xs': '400px',
        xs: '500px',
        sm: '640px',
        md: '768px',
        'max-md': {'max': '768px'},
        lg: '1024px',
        xl: '1280px',
        'wh-xl': {'raw': '(min-width: 1280px) and (max-height: 767px)'},
        'wh-xl2': {'raw': '(min-width: 1280px) and (min-height: 900px)'},
        'max-xl': {'max': '1279px'},
        'wh-2xl': {'raw': '(min-width: 1440px) and (min-height: 900px)'},
        '2xl': '1400px',
        '3xl': '1494px',
        '4xl': '1624px',
        '5xl': '1792px',
        'h-sm': {'raw': '(min-height: 600px)'},
        'h-md': {'raw': '(min-height: 700px)'},
        'h-xl': {'raw': '(min-height: 800px)'},
        'h-2xl': {'raw': '(min-height: 900px)'},
        'h-3xl': {'raw': '(min-height: 1024px)'},
        },
        extend: {
            fontFamily: {
                'manrope': ['"Manrope"', ...defaultTheme.fontFamily.sans]
            }
        },
    },
    plugins: [],
}

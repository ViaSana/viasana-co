/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './_includes/**/*.{html,js,md}',
        './_layouts/**/*.{html,js,md}',
        './_*/*.{html,js,md}',
        './*.{html,js,md}'
    ],
    theme: {
        fontFamily: {
            sans: ['Source Sans 3', 'sans-serif'],
            serif: ['Libre Bodoni', 'serif'],
        },
        extend: {
            spacing: {
                '5p': '5%',
                '10p': '10%',
                '15p': '15%',
            },
            aspectRatio: {
                'landscape': '2 / 1 ',
                'portrait': '3 / 4',
                'portrait-tall': '3 / 5',
            },
            minHeight:{
                '100': '100vh',
                '90': '90vh',
                '80': '80vh',
                '70': '70vh',
                '60': '60vh',
                '50': '50vh',
            },
        },
    },
    daisyui: {
        themes: [
            {
            mytheme: {
                "primary": "#014b64",
                "secondary": "#3e97a1",
                "accent": "#731c53",
                "neutral": "#3d4451",
                "base-100": "#DDDEE0",
                "info": "#ccbcdf",
                "success":"#47494e",
            }
            },
        ],
    },
    plugins: [
        require('@tailwindcss/typography'),
        require("daisyui"),
    ],
}
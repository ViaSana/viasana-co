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
            colors:{
                'green': '#014B64',
                'moonstone': '#3E97A1',
                'magenta': '#731C53',
                'thistle': '#CCBCDF',
                'platinum': '#DDDEE0',
                'grey': '#7C7d81',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}

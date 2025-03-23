/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            colors: {
                background: '#0F0F0F',
                paragraph: '#909090',
                primary: {
                    yellow: '#EACA29',
                    orange: '#EA8035',
                    DEFAULT: '#EACA29', // Default primary color
                },
            },
            fontSize: {
                // Custom heading sizes
                h1: ['80px', { lineHeight: '1.1', fontWeight: '500' }],
                h2: ['64px', { lineHeight: '1.1', fontWeight: '500' }],
                h3: ['48px', { lineHeight: '1.2', fontWeight: '500' }],
                h4: ['36px', { lineHeight: '1.2', fontWeight: '500' }],
                h5: ['24px', { lineHeight: '1.3', fontWeight: '500' }],
                h6: ['20px', { lineHeight: '1.3', fontWeight: '500' }],
            },
        },
    },
    plugins: [],
}
// tailwind.config.js
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                customBlue: '#1E40AF',
                customRed: '#DC2626',
                // add your custom colors here
            },
            fontFamily: {
                playfair: ['Playfair Display', 'serif'],
                mont: ['Montserrat', 'sans-serif'],
                sen: ['Sen', 'sans-serif'],
                abel: ['Abel', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'public-sans': 'Public Sans'
            },
            colors: {
                'dark-blue': 'hsl(233, 26%, 24%)',
                'lime-green': 'hsl(136, 65%, 51%)',
                'bright-cyan': 'hsl(192, 70%, 51%)',
                'light-gray': 'hsl(0, 0%, 98%)'
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
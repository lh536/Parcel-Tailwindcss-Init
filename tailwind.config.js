module.exports = {
    purge: [{
        // './src/**/*.html',
        // './src/**/*.vue',
        // './src/**/*.jsx',
        // enabled: true,
        // content: ['./src/**/*.html'],
        // mode: 'all',
        // content: ['./src/**/*.html'],
    }],
    theme: {
        fontFamily: {
            montserrat: ['Montserrat', 'sans-serif']
        },
        extend: {
            colors: {
                magentaSM: '#E92197',
                grisSM: '#B6BAD0',
                prueba: {
                    100: '#000',
                    200: '#fff',
                    300: '#E92197',
                },
            },
            gridTemplateColumns: {
                '16': 'repeat(16, minmax(0, 1fr))',
            },
        },
    },
    variants: {},
    plugins: [],
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true
    },
}
module.exports = {
    // parser: 'sugarss',
    from: './src/scss/main.scss',
    to: './build/assets/css/main.min.css',
    plugins: {
        'postcss-preset-env': {},
        'cssnano': {},
        'autoprefixer': {}
    }
}
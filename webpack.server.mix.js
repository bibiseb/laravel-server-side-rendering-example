const mix = require('laravel-mix');

mix.js('resources/js/app-server.js', 'public/js')
    .webpackConfig({ target: 'node' })
    .vue({ useVueStyleLoader: true })
    .options({ manifest: false });

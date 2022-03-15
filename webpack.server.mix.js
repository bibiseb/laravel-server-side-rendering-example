const mix = require('laravel-mix');
const {webpackConfig} = require("laravel-mix");

mix.js('resources/js/app-server.js', 'public/js')
    .webpackConfig({ target: 'node' })
    .vue()
    .options({ manifest: false });

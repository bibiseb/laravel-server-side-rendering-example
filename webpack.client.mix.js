const mix = require('laravel-mix');

mix.js('resources/js/app-client.js', 'public/js')
    .vue()
    .extract();

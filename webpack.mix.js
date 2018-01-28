let mix = require('laravel-mix');
let config = require('./.env.json');
let compile = require('./src/compile.json');

// Notifications
if (! config.notifications) {
    mix.disableNotifications();
}

// Sourcemaps
mix.sourceMaps();

// Javascript
mix.js('src/javascripts/app.js', 'dist/javascripts');

// Stylesheet
mix.sass('src/styles/stylesheet.scss', 'dist/stylesheets')
    .options({
        processCssUrls: false
    });

// Modernizr
mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.modernizrrc.js$/,
                use: [ 'modernizr-loader' ]
            },
            {
                test: /\.modernizrrc(\.json)?$/,
                use: [ 'modernizr-loader', 'json-loader' ]
            }
        ]
    },
    resolve: {
        alias: {
            modernizr$: path.resolve(__dirname, "src/.modernizrrc")
        }
    }
});

// Font
mix.copy(compile.fonts, 'dist/fonts/');

// Browser sync
mix.browserSync({
    proxy: config.proxy,
    files: ['dist/javascripts/*.js', 'dist/stylesheets/*.css']
});

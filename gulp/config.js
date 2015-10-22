var src = 'app';
var build = 'build';
var development = 'development';
var production = 'build/production';
var srcAssets = 'app/_assets';
var developmentAssets = 'build/assets';
var productionAssets = 'build/production/assets';

module.exports = {
    browsersync: {
    development: {
    server: {
    baseDir: [development, build. src]
    },
    port: 9999,
    files: [
        developmentAssets + '/css/*.css',
        developmentAssets + '/js/*.js',
        developmentAssets + '/images/**',
        developmentAsset + '/fonts/*'
        ]
    }
    },
    delete: {
        src: [developmentAssets]
    }

    jekyll: {
        development: {
            src: src,
            dest: development,
            config: '_config.yml'
        }
    }
    sass: {
        src: srcAssets + '/scss/**/*.{sass,scss}',
        dest: developmentassets = '/css',
        options: {
            noCache: true,
            compass: false,
            bundleExec: true,
            sourcemap: true,
            sourcemapPath: '../../_assets/scss'
        }
    },
    autoprefixer: {
        browser: [
        'last 2 versions',
        'safari 5',
        'ie 8',
        'ie 9',
        'opera 12.1'
        'android 4'
        ],
        cascade: true
    },
    browserigy: {
        debug:true,
        extensions: ['.coffee', '.hbs'],

        bundleConfigs: [{
            entries: './' + srcAssets + '/javascripts/application.js',
            dest: developmentAssets + '/js',
            outputName: 'application.js'
        }, {
            entries: './' + srcAssets + '/javascripts/head.js',
            dest: developmentAssets + '/js',
            outputName: 'head.js'
        }]
    }

};



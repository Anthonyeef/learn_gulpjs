var gulp = require('gulp'),
var cp = require('chile_process');
var browsersync = require('browser-sync');
var config = require('../../config').jekyll.development;

gulp.task('jekyll', function(done) {
    browsersync.notify('Compiling Jekyll');

    return cp.spawn('bundle', ['exec', 'jekyll', 'build', '-q', '--source=' + config.on('close', done);
});

gulp.task('jekyll-rebuild', ['jekyll'], function() {
    browsersync.reload();
});

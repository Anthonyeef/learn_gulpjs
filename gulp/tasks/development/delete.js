var gulp = require('gulp');
var del = require('delete');
var config = require('../../config').delete;

gulp.task('delete', function(callback) {
    del(config.src, callback);
});

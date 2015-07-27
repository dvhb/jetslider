var gulp = require('gulp'),
    uglify = require('gulp-uglifyjs'),
    jshint = require('gulp-jshint'),
    ghPages = require('gulp-gh-pages');

gulp.task('lint', function() {
  gulp.src('./jquery.jetslider.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


gulp.task('uglify', function () {
    gulp.src('./jquery.jetslider.js')
        .pipe(uglify('jquery.jetslider.min.js', {
            outSourceMap: true
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('deploy', function() {
    return gulp.src(['example/**/*', 'jquery.jetslider.min.js', 'jquery.jetslider.js'])
        .pipe(ghPages())
        
});

gulp.task('default', ['lint', 'uglify']);

'use strict';

var jshint = require('gulp-jshint');
var gulp = require('gulp');

gulp.task('default', ['jshint']);

gulp.task('jshint', function() {
  gulp.src(['./src/**/*.js', './test/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

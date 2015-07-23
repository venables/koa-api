'use strict';

var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var gulp = require('gulp');
var src = ['./*.js', './src/**/*.js', './test/**/*.js'];

gulp.task('default', ['jshint', 'jscs']);

gulp.task('jshint', function() {
  gulp.src(src)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('jscs', function() {
  gulp.src(src)
    .pipe(jscs());
});

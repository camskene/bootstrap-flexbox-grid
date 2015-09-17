/*!
 * gulp
 * $ npm install gulp-plumber gulp-sass gulp-autoprefixer gulp-minify-css gulp-rename gulp-livereload --save-dev
 */

// Load plugins
var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  rename = require('gulp-rename'),
  minifycss = require('gulp-minify-css'),
  livereload = require('gulp-livereload');

// sass
gulp.task('sass', function() {
  return gulp.src('src/css/**/*.scss')
    .pipe(plumber())
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css'))
});

// watch
gulp.task('watch', function() {
  gulp.watch('src/css/**', ['css']);
  livereload.listen();
  gulp.watch(['dist/css/**', '*.html']).on('change', livereload.changed);
});

// default
gulp.task('default', ['sass']);

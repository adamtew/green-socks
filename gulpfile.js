var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var connect = require('gulp-connect');
var cleanCss = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

var scssPath = './assets/scss/style.scss';
var cssPath = './assets/css';
var watchPath = './assets/scss/**/*.scss'

console.log('watchPath', watchPath)
console.log('scssPath', scssPath)
console.log('cssPath', cssPath)

// tasks
gulp.task('style', function() {
  gulp.src(scssPath)
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())   
    .pipe(gulp.dest(cssPath));
});

gulp.task('server', function() {
  connect.server({ port: 3001, livereload: true });
});

gulp.task('watch', function() {
  gulp.watch(watchPath, ['style']);
});

gulp.task('default', [ 'server', 'watch']);


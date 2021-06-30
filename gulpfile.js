const { src, dest, series, parallel, watch } = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
sass.compiler = require('sass');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');


function htmlPug () {
  return src('./src/pug/*.pug')
    .pipe(pug())
    .pipe(dest('./build'))
    .on('end', browserSync.reload);

}


function css() {
  return src('./src/static/styles/style.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(dest('./build/css'))
  .pipe(browserSync.stream());
}


function serve   () {
  browserSync.init ({
    server: "./build"
  });
}

function watchFiles () {
  // следим за изменениями scss
  watch('./src/static/styles/**/*.scss', series(css));
  // следим за
  watch('./src/pug/**/*.pug', series(htmlPug));
  watch('./src/static/img/**/*', series(images));
  watch('./src/static/js/**/*', series(script));
  
}
function images() {
  return src('./src/static/img/**/*')
         .pipe(dest('./build/img'))
}
function script () {
  return src('./src/static/js/**/*')
         .pipe(dest('./build/js'))
}










exports.htmlPug = htmlPug
exports.css = css
exports.serve = serve
exports.watchFiles = watchFiles
exports.images = images
exports.script = script


exports.default = series(htmlPug, css, images, script, parallel(watchFiles, serve));

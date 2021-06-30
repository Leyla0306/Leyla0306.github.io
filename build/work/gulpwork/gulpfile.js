const { src, dest, series, parallel, watch } = require('gulp');
const rename = require('gulp-rename');
const nunjucks = require('gulp-nunjucks');
const sass = require('gulp-sass');
sass.compiler = require('sass');


const clean = require('gulp-clean');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');

function html() {
  return src('./src/html/*.njk')
    .pipe(nunjucks.compile())
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(dest('./build'))
    .on('end', browserSync.reload);

}
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
  watch('./src/html/**/*.njk', series(html));
  watch('./src/pug/**/*.pug', series(htmlPug));
  watch('./src/static/img/**/*', series(images));
  
}
function images() {
  return src('./src/static/img/**/*')
         .pipe(dest('./build/img'))
}
function fonts() {
  return src('./src/static/fonts/**/*')
         .pipe(dest('./build/fonts'))
}










exports.html = html
exports.htmlPug = htmlPug
exports.css = css
exports.serve = serve
exports.watchFiles = watchFiles
exports.images = images
exports.fonts = fonts

exports.default = series(parallel(htmlPug, css, images, fonts), parallel(watchFiles, serve));

const gulp = require("gulp");
const sass = require("gulp-dart-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssSorter = require("css-declaration-sorter");
const mmq = require("gulp-merge-media-queries");

function compileSass() {
  return gulp
    .src("./src/assets/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer(), cssSorter()]))
    .pipe(mmq())
    .pipe(gulp.dest("./public/assets/css/"));
}

function watch() {
  gulp.watch("./src/assets/sass/**/*.scss", compileSass);
}

exports.default = watch;

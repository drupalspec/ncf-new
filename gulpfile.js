var sources, destinations, lr, gulp, gutil, jade, styl, browserSync, reload, concat;

gulp = require('gulp');
jade = require('gulp-jade');
gutil = require('gulp-util');
styl = require('gulp-stylus');
imagemin = require('gulp-imagemin');
pngquant = require('imagemin-pngquant');
uglify = require('gulp-uglify');
browserSync = require('browser-sync');
concat = require('gulp-concat');
reload = browserSync.reload;

sources = {
  jade: "src/jade/**/*.jade",
  styl: "src/styl/**/*.styl",
  css: "src/styl/**/*.css",
  img: "src/img/*.*",
  fonts: "src/fonts/*.*",
  js: "src/js/*.*",
  plugins: "src/plugins/**/**"
};

destinations = {
  html: "build",
  css: "build/css",
  img: "build/img",
  fonts: "build/fonts",
  js: "build/js",
  plugins: "build/plugins"
};

gulp.task("jade", function(event) {
  return gulp.src(sources.jade).pipe(jade({
    pretty: true
  }))
  .pipe(gulp.dest(destinations.html))
});

gulp.task("styl", function(event) {
  return gulp.src(sources.styl)
  .pipe(styl({
    style: "compressed",
    compress: true
  }))
  .pipe(concat('main.css'))
  .pipe(gulp.dest(destinations.css));
});

gulp.task('css', function () {
    return gulp.src(sources.css)
    .pipe(gulp.dest(destinations.css));
});

gulp.task('plugins', function () {
    gulp.src(sources.plugins)
      .pipe(gulp.dest(destinations.plugins))
});

gulp.task('img', function () {
  gulp.src(sources.img) //Выберем наши картинки
    // .pipe(imagemin({ //Сожмем их
    //     progressive: true,
    //     svgoPlugins: [{removeViewBox: false}],
    //     use: [pngquant()],
    //     interlaced: true
    // }))
    .pipe(gulp.dest(destinations.img)) //И бросим в build
});

gulp.task('fonts', function() {
    gulp.src(sources.fonts)
      .pipe(gulp.dest(destinations.fonts))
});

gulp.task('js', function() {
    gulp.src(sources.js)
      // .pipe(uglify()) //Сожмем наш js
      .pipe(gulp.dest(destinations.js))
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: "./build"
    },
    open: true,
    notify: false
  });
});

gulp.task("watch", function() {
  gulp.watch(sources.jade, ["jade"]);
  gulp.watch(sources.styl, ["styl"]);
  gulp.watch(sources.css, ["css"]);
  gulp.watch(sources.img, ["img"]);
  gulp.watch(sources.fonts, ["fonts"]);
  gulp.watch(sources.plugins, ["plugins"]);
  gulp.watch(sources.js, ["js"]);
  gulp.watch('build/**/*', reload);
});


gulp.task("default", ["jade", "styl", "watch", "fonts", "js", "browserSync", "img", "css", "plugins"]);


var gulp = require('gulp')
var webpack = require('webpack-stream')
var named = require('vinyl-named')
var config = require('./webpack.config.js')
var sass = require('gulp-sass')
gulp.task('default', () =>
  gulp.run(['build-scss', 'build-html', 'build-js'])
)

gulp.task('build-js', () =>
  gulp.src(['src/*.js'])
    .pipe(named())
    .pipe(webpack(config))
    .pipe(gulp.dest('public'))
)

gulp.task('build-scss', () =>
  gulp.src(['src/**/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('src/'))
)

gulp.task('build-html', () =>
  gulp.src(['src/*.html'])
    .pipe(gulp.dest('views'))
)

gulp.task('watch', () => {
  gulp.watch(['src/**/*.html', 'src/**/*.js', 'src/**/*.scss'], ['default'])
})

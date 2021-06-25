const gulp = require('gulp')
const series = gulp.series
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')


function padrao(callback) {
    gulp.src('src/**/*.js')
        .pipe(babel()) // configurações no JSON babel.config
        .pipe(uglify())
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))

    return callback()
}

exports.default = series(padrao)
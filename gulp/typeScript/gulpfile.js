const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')

/* const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel') */

function transformaTS() {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(uglify())
        .pipe(gulp.dest('build'))
}

exports.default = series(transformaTS)
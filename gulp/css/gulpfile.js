const { series } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')


function transformaCSS() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({"uglifyComments": true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function copiarHTML() {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('build'))
}

exports.default = series(transformaCSS, copiarHTML )












/* const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')

const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel') 

function transformaTS() {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(uglify())
        .pipe(gulp.dest('build'))
}

exports.default = series(transformaTS) */
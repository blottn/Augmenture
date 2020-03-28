const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const gulp = require('gulp');
const gulpBabel = require('gulp-babel');
const gulpESLint = require('gulp-eslint');
const gulpSass = require('gulp-sass');
const gulpTS = require('gulp-typescript');
const project = gulpTS.createProject('tsconfig.json');
const del = require('del');

const outDir = 'dist';
gulpSass.compiler = require('sass');


function lint() {
    return gulp.src(['./src/**/*.ts', './src/**/*.tsx', './src/**/*.js'])
        .pipe(gulpESLint('./.eslintrc.json'))
        .pipe(gulpESLint.format())
        .pipe(gulpESLint.failAfterError());
}

function build() {
    return project.src()
        .pipe(project())
        .js
        .pipe(gulp.dest('dist'));
}

function bundle(callback) {
    var fs = require('fs');
    var files = fs.readdirSync('./dist/');
    webpack(webpackConfig, callback)
}

function clean() {
    return del(['./dist/**/*']);
}

function css() {
    return gulp.src(['./src/**/*.scss'], {base: './src/' })
        .pipe(gulpSass({includePaths: './node_modules/bootstrap/scss'}).on('error', gulpSass.logError))
        .pipe(gulp.dest('./dist/'));
}

function resources() {
    return gulp.src(['./src/static/*.png'], {base: './src/' })
        .pipe(gulp.dest('./dist/'));
}
exports.lint = lint;
exports.bundle = bundle;
exports.css = css;
exports.build = build;
exports.clean = clean;
exports.resources = resources;
exports.dev = gulp.series(clean, build, css, bundle, resources);
exports.default = gulp.series(clean, lint, build, css, bundle, resources);

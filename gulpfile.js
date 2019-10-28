const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const gulp = require('gulp');
const gulpTS = require('gulp-typescript');
const gulpBabel = require('gulp-babel');
const gulpESLint = require('gulp-eslint');
const gulpSass = require('gulp-sass');
const project = gulpTS.createProject('tsconfig.json');
const del = require('del');

const outDir = 'dist';
gulpSass.compiler = require('node-sass');


function lint(callback) {
    gulp.src(['./src/**/*.ts', './src/**/*.tsx', './src/**/*.js'])
        .pipe(gulpESLint('./.eslintrc.json'))
        .pipe(gulpESLint.format())
        .pipe(gulpESLint.failAfterError());
    callback();
}

function build(callback) {
    project.src()
        .pipe(project())
        .js
        .pipe(gulp.dest('dist'));
    callback();
}

function bundle(callback) {
    var fs = require('fs');
    var files = fs.readdirSync('./dist/');
    webpack(webpackConfig, (err, stats) => {
        if (err) {
            console.log(err);
        }
        else {
            callback();
        }
    });
}

function clean(callback) {
    del(['./dist/**/*']);
    callback();
}

function css(callback) {
    gulp.src(['./src/**/*.scss'], {base: './src/' })
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(gulp.dest('./dist/'));
    callback();
}

exports.lint = lint;
exports.bundle = bundle;
exports.css = css;
exports.build = build;
exports.clean = clean;
exports.default = gulp.series(clean, lint, build, css, bundle);

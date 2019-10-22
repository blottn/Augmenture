const gulp = require('gulp');
const gulpTS = require('gulp-typescript');
const gulpBabel = require('gulp-babel');
const project = gulpTS.createProject('tsconfig.json');
const del = require('del');

const outDir = 'dist';

function build(callback) {
    project.src()
        .pipe(project())
        .js
        .pipe(gulp.dest('dist'));
    callback();
}

function clean(callback) {
    del(['./dist/**/*']);
    callback();
}

function views(callback) {
    gulp.src('./templates/**/*', { base: './frontend/' })
        .pipe(gulp.dest('./dist/'));
    callback();
}

function static_files(callback) {
    gulp.src('./frontend/static/**/*', { base: './frontend/' })
        .pipe(gulp.dest('./dist/'));
    callback();
}

function frontend(callback) {
    const babel = {
        presets: ['@babel/preset-react', '@babel/preset-env']
    };
    gulp.src('./frontend/static/app/**/*.jsx', { base: './frontend/' })
        .pipe(gulpBabel(babel))
        .pipe(gulp.dest('./dist/'))
    callback();
}

exports.views = views;

exports.build = build;
exports.clean = clean;
exports.default = gulp.series(clean, build, frontend, views);

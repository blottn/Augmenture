const gulp = require('gulp');
const gulpTS = require('gulp-typescript');
const project = gulpTS.createProject('tsconfig.json');

const outDir = 'dist';

function build(callback) {
    project.src()
        .pipe(project())
        .js
        .pipe(gulp.dest('dist'));
    callback();
}

function move(callback) {
    gulp.src(['./frontend/**/*'], { base: './frontend/' })
        .pipe(gulp.dest('./dist/'));
    callback();
}

exports.move = move;

exports.build = build;
exports.default = gulp.series(build, move);

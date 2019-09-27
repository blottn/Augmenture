const gulp = require('gulp');
const gulpTS = require('gulp-typescript')
const project = gulpTS.createProject('tsconfig.json');


function build(callback) {
    project.src()
        .pipe(project())
        .js.pipe(gulp.dest('dist'));
    callback();
}

exports.build = build;
exports.default = build;

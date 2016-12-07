/**
 * Created by pc on 2016/12/5.
 */
"use strict";

var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');


gulp.task('pc', function() {
    // 将你的默认的任务代码放在这
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('dist', function() {
    // 将你的默认的任务代码放在这
    gulp.watch('src/index.html',['pc']);
    gulp.watch('src/style.less',['less']);
});

gulp.task('less', function() {
    // 将你的默认的任务代码放在这
    gulp.src('src/style.less')
        .pipe(less())
        .pipe(cssnano())
        .pipe(gulp.dest('dist'));
});
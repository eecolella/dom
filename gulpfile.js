'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
$.browserSync = require('browser-sync');

/* ============================================================ */
/* =================================================== Paths == */
/* ============================================================ */

function Path(str) {
    var p = str,
        f = function () {
            return p;
        };

    f.slash = function(str2){
        return new Path(str + str2);
    };

    return f;
}


var path = new Path('./');

path.src                        = path.slash('src/');
path.src.scripts                = path.src.slash('');


path.dist                       = path.slash('dist/');
path.dist.scripts               = path.dist.slash('');

path.test                       = path.slash('test/');
path.test.spec                  = path.test.slash('spec/');


$.path = path;


/* ============================================================ */
/* ================================================= getTask == */
/* ============================================================ */

/* function for load external gulp module */
$.getTask = function (task) { return require('./gulp/' + task).bind(this, gulp, $); };


/* ============================================================ */
/* =================================================== Tasks == */
/* ============================================================ */

gulp.task('serve-test', $.getTask('serve-test'));
gulp.task('scripts', $.getTask('scripts'));
gulp.task('build', ['scripts']);
gulp.task('default', ['scripts']);
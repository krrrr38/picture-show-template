var gulp = require('gulp'),
    watch = require('gulp-watch'),
    shell = require('gulp-shell'),
    livereload = require('gulp-livereload');

gulp.task('start', shell.task([
    'pshow'
]));

gulp.task('watch', function() {
    gulp.run('start');
    var server = livereload();
    gulp.watch('./slide/slide.md', function(event) {
        server.changed('http://localhost:3000');
    });
});

gulp.task('export', shell.task([
    'pshow --offline'
]));

gulp.task('default', ['start']);

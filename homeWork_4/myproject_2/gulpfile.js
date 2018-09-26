var gulp        = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('mytask', function () {
    return gulp.src('source-files')
    .pipe(Plugin())
    .pipe(gulp.dest('folder'))
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    })
})

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/css/main.css', browserSync.reload);
    gulp.watch('app/js/*.js', browserSync.reload);
})

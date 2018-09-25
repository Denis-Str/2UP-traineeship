var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('mytask', function () {
    return gulp.src('source-files')
    .pipe(Plugin())
    .pipe(gulp.dest('folder'))
});

gulp.task('sass', function () {
    return gulp.src('app/sass/main.sass')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    })
})

gulp.task('watch', ['browser-sync', 'sass'], function () {
    gulp.watch('app/sass/main.sass', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/*.js', browserSync.reload);
})

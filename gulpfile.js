const gulp       = require('gulp'),
      sass       = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', () => {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'));
});
gulp.task('sass-with-map', () => {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('app/css'));
});

gulp.task('watch', () => {
    gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
});
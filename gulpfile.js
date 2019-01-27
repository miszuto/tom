var gulp = require('gulp');

var browserSync = require('browser-sync');

var sass = require('gulp-sass');

//var sourcemaps = require('gulp-sourcemap');

gulp.task('reload', function () {
    browserSync.reload();
});

gulp.task('serve',['sass'], function(){
   browserSync({
       server: 'src'
   });

   gulp.watch('tom/*.html', ['reload']);
   gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
        //.pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    jade = require('gulp-jade'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp.src('./css/*.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

gulp.task('jade', function() {
    return gulp.src('./*.jade')
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
})

gulp.task('java', function(){
    return gulp.src('./js/*.js')
    .pipe(gulp.dest('./js'))
    .pipe(browserSync.stream());
})

gulp.task('watch', function () {
    
    gulp.watch('./css/*.sass',['sass']);
    
    gulp.watch('./*.jade',['jade']);
    
    gulp.watch('./js/*.js',['java']);
});

gulp.task('autoprefixer', function () {
	return gulp.src('./css/**/*.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./css'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('default', ['sass', 'jade', 'autoprefixer', 'java', 'browser-sync', 'watch']);

/* gulpfire.js initial build 1.0.0*/
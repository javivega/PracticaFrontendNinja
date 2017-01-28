var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var browserSync = require('browser-sync').create();
var browserify = require('browserify');
var tap = require('gulp-tap');
var buffer = require('gulp-buffer');



//Compilamos SASS
gulp.task('compile-sass', function(){
	gulp.src('./src/scss/style.scss')
	.pipe(sass().on('error', function(error){
		return notify().write(error);
	}))
	.pipe(gulp.dest('./dist'))
	.pipe(browserSync.stream())
	.pipe(notify("Sass Compilado"));
});

//concatenamos js

gulp.task('concat-js', function(){
    gulp.src('./src/js/main.js')
    .pipe(tap(function(file){
        file.contents = browserify(file.path, {debug:true}).bundle().on('error', function(error){
            return notify().write(error);
        });
    }))
    .pipe(buffer())
    .pipe(gulp.dest('./dist/'))
    .pipe(notify("JS concatenado"))
    .pipe(browserSync.stream());
})

//tarea por defecto

gulp.task('default', ['compile-sass', 'concat-js'], function(){
	browserSync.init({
		server: "./"
	});
	//Vigila todos los archivos scss y cuando haya cambios lanza compile-sass
	gulp.watch('./src/scss/*.scss', ['compile-sass']);
	//Cualquier cambio en el html recarga el navegador
	gulp.watch('./*.html', function(){
		browserSync.reload();
	});

});




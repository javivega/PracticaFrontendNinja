var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var browserSync = require('browser-sync').create();



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

//tarea por defecto

gulp.task('default', ['compile-sass'], function(){
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




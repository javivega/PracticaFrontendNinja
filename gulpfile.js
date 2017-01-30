var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var browserSync = require('browser-sync').create();
var browserify = require('browserify');
var tap = require('gulp-tap');
var buffer = require('gulp-buffer');


//Config

var sassConfig = {
    compileSassTaskName: 'compile-sass',
    watchFiles: './src/scss/*.scss',
    entryPoint: './src/scss/style.scss',
    dest: './dist/'
};

var jsConfig = {
    concatJsTaskName: 'concat-js',
    watchFiles: './src/js/*.js',
    entryPoint: './src/js/main.js',
    concatFile: 'main.js',
    dest: './dist/'
};

//Compilamos SASS
gulp.task(sassConfig.compileSassTaskName, function(){
	gulp.src(sassConfig.entryPoint)
	.pipe(sass().on('error', function(error){
		return notify().write(error);
	}))
	.pipe(gulp.dest(sassConfig.dest))
	.pipe(browserSync.stream())
	.pipe(notify("Sass Compilado"));
});

//concatenamos js

gulp.task(jsConfig.concatJsTaskName, function(){
    gulp.src(jsConfig.entryPoint)
    .pipe(tap(function(file){
        file.contents = browserify(file.path, {debug:true}).bundle().on('error', function(error){
            return notify().write(error);
        });
    }))
    .pipe(buffer())
    .pipe(gulp.dest(jsConfig.dest))
    .pipe(notify("JS concatenado"))
    .pipe(browserSync.stream());
})

//tarea por defecto

gulp.task('default', [sassConfig.compileSassTaskName, jsConfig.concatJsTaskName], function(){
	browserSync.init({
		server: "./"
	});
	//Vigila todos los archivos scss y cuando haya cambios lanza compile-sass
	gulp.watch(sassConfig.watchFiles, sassConfig.compileSassTaskName);
	//Cualquier cambio en el html recarga el navegador
	gulp.watch('./*.html', function(){
		browserSync.reload();
	});

    gulp.watch(jsConfig.watchFiles, [jsConfig.concatJsTaskName]);

});




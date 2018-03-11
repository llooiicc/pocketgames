var gulp = require('gulp');

// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json

var imagemin = require('gulp-imagemin');
var sequence = require('gulp-sequence');

var src = './public/';
var dist = './dist/';


gulp.task('minify-css', function () {

    gulp.src(src + '/template/css/*.css')
        .pipe(plugins.csso())
        .pipe(plugins.rename({
            sufix: '.min'
        }))
        .pipe(gulp.dest(dist +'template/css/'));

    gulp.src(src + '/stylesheets/*.css')
        .pipe(plugins.csso())
        .pipe(plugins.rename({
            sufix: '.min'
        }))
        .pipe(gulp.dest(dist +'stylesheets/css/'));
});

gulp.task('uglify-js', function () {

    gulp.src(src + '/javascripts/*.js')
        .pipe(plugins.uglify())
        .pipe(gulp.dest(dist + '/javascripts/'));

    gulp.src(src + '/template/js/*.js')
        .pipe(plugins.uglify())
        .pipe(gulp.dest(dist + '/template/js/'));
});

gulp.task('minify-images', function () {

    gulp.src(src + '/images/app/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest(dist + '/images/app/'));

    gulp.src(src + '/images/app/*.ico')
        .pipe(imagemin())
        .pipe(gulp.dest(dist + '/images/app/'));

    gulp.src(src + 'template/images/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest(dist + 'template/images/'));

});

gulp.task('minify-json', function () {

    gulp.src(src + '/*.json')
        .pipe(plugins.jsonminify())
        .pipe(gulp.dest(dist));
});

gulp.task('move', function () {

    gulp.src(src + 'sw.js')
        .pipe(plugins.uglify())
        .pipe(gulp.dest(dist));
});

gulp.task('build', function (cb) {

    sequence(['minify-css', 'uglify-js', 'minify-images', 'minify-json', 'move'])(cb);
});
var gulp = require('gulp');
var gutil = require('gulp-util');
var browserSync = require('browser-sync').create();


var files = {
  html: ['./src/*.html'],
  img: ['./src/images/*'],
  sass: ['./src/styles/*.scss'],
  addl: ['.htaccess']
};

files.all = files.html.concat(files.img).concat(files.addl);

gulp.task('compileStyle', function(){
  var sass = require('gulp-sass');
  var minifyCSS = require('gulp-minify-css');
  return gulp.src(files.sass)
    .pipe(sass({
        // includePaths: require('node-normalize-scss').with('other/path', 'another/path') 
        // - or - 
        includePaths: require('node-normalize-scss').includePaths
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/styles'))
    .pipe(browserSync.stream());
});

gulp.task('copyAssets', function() {
  return gulp.src(files.all, { 'base' : './src/' })
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream());
});

gulp.task('fileWatch', ['copyAssets'], browserSync.reload);

gulp.task('server', ['compileStyle', 'copyAssets'], function() {
  browserSync.init({
    browser: 'google chrome',
    server: {
      baseDir: './dist/'
    }
  });
  gulp.watch(files.sass, ['compileStyle']);
  gulp.watch(files.all, ['fileWatch']);
});


gulp.task('build', ['copyAssets', 'compileStyle']);

gulp.task('default', ['server']);

gulp.task('deploy', ['build'] ,function() {
  var minimist = require('minimist');
  var args = minimist(process.argv.slice(2));
  var ftp = require('vinyl-ftp');
  var remotePath = '/designbymorgan.com/';
  var conn = ftp.create({
    host: 'designbymorgan.com',
    user: args.user,
    password: args.password,
    log: gutil.log
  });

  return gulp.src(['./dist/*', './dist/**/*'])
    .pipe(conn.newer(remotePath))
    .pipe(conn.dest(remotePath));
});
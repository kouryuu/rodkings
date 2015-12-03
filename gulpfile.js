var gulp = require('gulp');
// Live reaload
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var exec = require('child_process').exec;
// FS magic
var fs = require('fs');
var sys = require('sys');
var exec = require('child_process').exec;
var colors = require('colors');
var child;



gulp.task('metalsmith', function() {
  exec('node_modules/metalsmith/bin/metalsmith', function (err, stdout, stderr) {
    console.log(stdout.yellow);
    console.log(stderr.red);

  });
});
gulp.task('compress',function() {
  console.log('[compressing] '+'JS'.yellow);
  gulp.src('scripts/*.js')
  .pipe(gulp.dest('build/scripts/'));
  gulp.src('scripts/*.map')
  .pipe(gulp.dest('build/scripts/'));
  console.log('[compressing] '+'Styles'.yellow);
  gulp.src('styles/*.css')
  .pipe(gulp.dest('build/styles/'));
  console.log('[copying] '+'Fonts'.yellow);
  gulp.src('fonts/**')
  .pipe(gulp.dest('build/fonts/'));

});
gulp.task('imgcopy',function() {
  gulp.src('imgs/*')
  .pipe(gulp.dest('build/imgs/'));
});
gulp.task('generate',['metalsmith','compress','imgcopy']);
gulp.task('serve', function(){
  browserSync({
    port: 8081,
    server: {

      baseDir: './build'
    }
  });
  gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd: './build'}, ['metalsmith','compress',reload]);
  gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd: '.'}, ['metalsmith','compress',reload]);
  gulp.watch(['templates/*.jade'],{cwd:'./templates'},['metalsmith','compress',reload]);
  gulp.watch(['contents/*.md'],{cwd:'./templates'},['metalsmith','compress',reload]);
});

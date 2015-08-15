var gulp = require('gulp');
// Live reaload
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var jade = require('gulp-jade');
var markdown = require('gulp-markdown');
// FS magic
var fs = require('fs');
var sys = require('sys');
var exec = require('child_process').exec;
var colors = require('colors');
var child;

// Function that cleans the names to put in the JSON file
var cleanName = (function(dirty){
  clean = dirty.split('/');
  clean = clean[clean.length - 1];
  clean = clean.split('.md');
  clean = clean[0];
  return clean;
});

gulp.task('compileJade', function() {
  console.log('compiling..');
  gulp.src('templates/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('build/'));
});

gulp.task('compileMarkdown',function(){
  gulp.src('./posts/*.md')
  .pipe(markdown())
  .pipe(gulp.dest('build/posts/'));

})
gulp.task('generateJSON',function() {

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
});
gulp.task('imgcopy',function() {
  gulp.src('imgs/*')
  .pipe(gulp.dest('build/imgs/'));
});
gulp.task('serve', function(){
  browserSync({
    port: 8081,
    server: {

      baseDir: './build'
    }
  });
  gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd: './build'}, ['compress',reload]);
  gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd: '.'}, ['compress',reload]);
  gulp.watch(['*.jade'],{cwd:'./templates'},['compileJade','compress']);
});

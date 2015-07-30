var gulp = require('gulp');
// Live reaload
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var jade = require('gulp-jade');
var markdown = require('gulp-markdown');

var tags = require('./tags.json');
// Function that cleans the names to put in the JSON file


gulp.task('compileJade', function() {
  console.log('compiling..');
  gulp.src('templates/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('build/'));
});

gulp.task('compileMarkdown',function(){
  gulp.src('./*/*.md')
  .pipe(markdown())
  .pipe(gulp.dest('build/posts/'));
})

gulp.task('compress',function() {
  console.log('compressing.');
  gulp.src('scripts/*.js')
  .pipe(gulp.dest('build/scripts/'));
  gulp.src('scripts/*.map')
  .pipe(gulp.dest('build/scripts/'));
  gulp.src('styles/*.css')
  .pipe(gulp.dest('build/styles/'));
});
gulp.task('imgcopy',function() {
  gulp.src('imgs/*')
  .pipe(gulp.dest('build/imgs/'));
});
gulp.task('serve', function(){
  browserSync({
    server: {
      baseDir: './build'
    }
  });
  gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd: './build'}, ['compress',reload]);
  gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd: '.'}, ['compress',reload]);
  gulp.watch(['*.jade'],{cwd:'./templates'},['compileJade','compress']);
});

gulp.task('default', function() {
console.log(tags.tags);


});

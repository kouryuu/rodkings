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
var tags = require('./tags.json');
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
  gulp.src('./*/*.md')
  .pipe(markdown())
  .pipe(gulp.dest('build/posts/'));
})
gulp.task('generateJSON',function() {
  post_tags = tags.tags;
  json = '{';
  posts_left = post_tags.length;

  // for(i=0;i < post_tags.length ; i ++){
    console.log('ls -1 ./'+post_tags[0]+'/*.md');
  child = exec('ls -1 ./UX/*.md',function(error,stdout,stderr){
    console.log('i am here');
    var posts = Array();
     posts = stdout.split('\n');
     posts.pop();
     posts = posts.map(cleanName);
     posts_left = posts_left - 1;
     return JSON.stringify(post_tags[i])+':' + JSON.stringify(posts);
  });
  // }
  while(posts_left > 0){
    //console.log(posts_left);

  }
  json += JSON.stringify(child) + '}';
  fs.writeFile('posts.json', json, function (err) {
    if (err) return console.log(err.red);
    console.log('[Wrote] to '.green +'posts.json'.cyan);
  });
  gulp.src('posts.json')
  .pipe(gulp.dest('build/ajax/'));
});
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

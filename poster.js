//Mister Postman
var fs = require('fs');
var sys = require('sys');
var exec = require('child_process').exec;
var colors = require('colors');
var child;

child = exec('ls -1 ./*/*.md',function(error,stdout,stderr){
  var posts = Array();
   posts = stdout.split('\n');
   posts.pop();
   json = '{'+JSON.stringify(posts)+'}';
   fs.writeFile('posts.json', json, function (err) {
  if (err) return console.log(err);
  console.log('Wrote to posts.json'.yellow);
  });

});



// var lala = fs.readdir('UX',function(err,files){console.log(files);});
// Check timestamp  ls -l UX/post1.md | cut -d ' ' -f9,11,12

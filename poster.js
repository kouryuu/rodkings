//Mister Postman
var fs = require('fs');
var sys = require('sys');
var exec = require('child_process').exec;
var child;

child = exec('markdown UX/post1.md',function(error,stdout,stderr){
  console.log(stdout);
});



// var lala = fs.readdir('UX',function(err,files){console.log(files);});
// Check timestamp  ls -l UX/post1.md | cut -d ' ' -f9,11,12

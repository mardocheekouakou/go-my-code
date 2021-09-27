var fs = require("fs");
var path = require('path')

const file = process.argv

var dossier = file[2]
var extension = file[3]

fs.readdir(dossier,function(err, files) {
  if (err) {
    return console.error(err);
 }
 files.forEach( function (file) {
    if(path.extname(file) == "."+extension){
      console.log(file)
    }
    
 });
})
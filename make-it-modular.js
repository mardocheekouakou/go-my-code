const mymodule = require('./mymodule.js');
var fs = require("fs");
var path = require('path')  ;

const file = process.argv

var dossier = file[2]
var extension = file[3]

var myCallback = function(err, files) {
    if (err) { return console.log(err) } 
  
    files.forEach( function (file) {
          console.log(file)
     });  
  };


mymodule(dossier,extension,myCallback)
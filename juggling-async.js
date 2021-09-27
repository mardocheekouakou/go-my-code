var http = require('http');
var bl = require('bl');
var async = require('async');

var q = async.queue(function(task, callback) {
    http.get(task, function handler(res) {
        res.setEncoding('utf8');
        res.pipe(bl(function(err, data) {
            if (err) {
                console.error(err);
            }
            callback(data.toString());
        }));
        res.on('error', console.error);
    });
});

q.push(process.argv.slice(2), console.log);
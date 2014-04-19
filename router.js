var fs   = require('fs');
var path = require('path');

function route(pathname, callback) {
    console.log('About to route a request for ' + pathname);
    fs.readFile('.' + path.normalize(pathname), callback);
}

exports.route = route;

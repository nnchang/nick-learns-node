var http = require("http");
var url  = require("url");

function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        response.writeHead(200, {"Content-Type" : "text/plain"});
        route(pathname, function (err, data) {
            if (err) throw err;
            console.log('writing js to response:', data.toString())
            response.write(data.toString());
            response.end();
        });
        response.write("Hello World\n");
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;

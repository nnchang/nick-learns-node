var http = require("http");
var url  = require("url");

function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(pathname, function (err, data) {
            if (err) {
                console.log(err);
                response.writeHead(400);
                response.write('400 file not found');
                response.end();
                return;
            }
            response.writeHead(200, {"Content-Type" : "text/plain"});
            console.log('writing to response:', data.toString());
            response.write(data.toString());
            response.end();
        });
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;

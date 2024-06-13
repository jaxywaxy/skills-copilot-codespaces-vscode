// Create web server
// Create a simple web server that serves a static file
// with a commit message.

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  fs.readFile('commit.txt', 'utf8', function (err, data) {
    if (err) {
      response.writeHead(500);
      response.write('Error loading commit message');
      response.end();
    } else {
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write(data);
      response.end();
    }
  });
});

// Listen on port 8000, IP defaults to

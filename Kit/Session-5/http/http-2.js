/***
 * The goal of this file is to show How to use http functions;
 *
 *
 * How to run this example:
 * 1. node http-2.js
 * 2. See the message get displayed on prompt.
 */

// Your gateway page. It's a file that Node will serve if a directory is requested.
var gatewayPage = "src/index.html";
var listenPort = 5005;

var http = require('http'),
	fs = require('fs'),
	path = require('path');

var requestConnector = function(req, res) {

	if (req.url === '/') {
		req.url = gatewayPage;
	}
	var file = path.join(__dirname, req.url);

	fs.exists(file, function(exists) {
		if (exists) {
			fs.stat(file, function(error, stats) {
				if (error) {
					throw error;
				}
				if (stats.isFile()) {
					res.writeHead(200, {
						'Content-Type': 'text/html'
					});
					fs.createReadStream(file).pipe(res);
				} else {
					res.writeHead(404);
					res.end('Error 404 Not Found\nThe requested resource could not be found but may be available again in the future.');

				}
			});
		} else {
			res.writeHead(404);
			res.end('Error 404 Not Found\nThe requested resource could not be found but may be available again in the future.');
		}
	});
}

http.createServer(requestConnector).listen(listenPort, function() {
	console.log("\n\n\tServer is connected on localhost:" + listenPort);
});
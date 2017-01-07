/***
 * The goal of this file is to show How to use http functions;
 *
 *
 * How to run this example:
 * 1. node http-2.js
 * 2. http://localhost:5005/
 */

// Your gateway page. It's a file that Node will serve if a directory is requested.
const gatewayPage = "src/index.html";
const listenPort = 5005;

const http = require('http');
const fs = require('fs');
const path = require('path');

const requestConnector = (req, res) => {

	if (req.url === '/') {
		req.url = gatewayPage;
	}
	const file = path.join(__dirname, req.url);

	fs.exists(file, (exists) => {
		if (exists) {
			fs.stat(file, (error, stats) => {
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

http.createServer(requestConnector).listen(listenPort, () => {
	console.log("\n\n\tServer is connected on localhost:" + listenPort);
});
/***
 * The goal of this file is to show How to use http functions;
 *
 *
 * How to run this example:
 * 1. node http-1.js
 * 2. http://localhost:5005/
 */

var http = require('http');

var server = http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	res.end('Hi, My name is Ashwin Hegde\n');
})

server.listen(5005); // 2nd Params is IP, default IP is 127.0.0.1

console.log('Server running at http://127.0.0.1:5005/');
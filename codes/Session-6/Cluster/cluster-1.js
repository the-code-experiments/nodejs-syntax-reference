/***
 * The goal of this file is to show How to use cluster functions;
 *
 *
 * How to run this example:
 * 1. NODE_DEBUG=cluster node cluster-1.js
 * 2. http://localhost:5005/
 */

/** Notes:
 * This feature was introduced recently, and may change in future versions.
 * On Windows, it is not yet possible to set up a named pipe server in a worker.
 */

const cluster = require('cluster');
const http = require('http');
const totalCPUs = require('os').cpus().length;

console.log("Number of CPUs available: ", totalCPUs);

if (cluster.isMaster) {
	/**
	 * fork workers.
	 */
	let i = 0;
	for (; i < totalCPUs; i++) {
		cluster.fork();
	}

	cluster.on('exit', (worker, code, signal) => {
		console.log('Worker: ' + worker.process.id + ' died');
	});
} else {
	/**
	 * worker can share http server.
	 */
	const server = http.createServer((req, res) => {
		res.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		res.end('Hi, My name is Ashwin Hegde\n');
	});

	server.listen(5005); // 2nd Params is IP, default IP is 127.0.0.1
}

console.log('Server running at http://127.0.0.1:5005/');
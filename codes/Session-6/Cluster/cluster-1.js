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
const totalCPUs = require('os').cpus().length; // 4 QuardCore Processor

if (cluster.isMaster) {
	/**
	 * fork workers.
	 * 
	 * Note: Node.js does not automatically manage the number of workers, 
	 * however. It is the application's responsibility to manage 
	 * the worker pool based on its own needs.
	 */
	console.log('I am Master!');

	for (let i = 0; i < totalCPUs; i++) {
		cluster.fork(); // Uses child_process.fork()
	}

} else {
	/**
	 * worker can share http server.
	 */
	const server = http.createServer((req, res) => {
		res.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		res.end('Hi, My name is Ashwin Hegde');
	});

	server.listen(5005); // 2nd Params is IP, default IP is 127.0.0.1
}

cluster.on('fork', (worker) => {
	console.log(`Worker ${worker.id} is forked, up and running on http://localhost:5005`);
});

cluster.on('listening', (worker, { address, port }) => {
	if (address === null) {
		address = 'localhost';
	}
	console.log(`Worker ${worker.id} is now connected to ${address}:${port}`);
});

cluster.on('exit', (worker, code, signal) => {

	if (signal) {
		console.error(`Worker was killed by signal: ${signal}`);
	}
	
	if (!code) {
		console.error(`Worker exited with error code: ${code}`);
	}

	if (worker && worker.exitedAfterDisconnect) {
		console.log('Oh! that was intentional, no worries!')
	}

	// Worker is dead, fork it again
	cluster.fork();
});
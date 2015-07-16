/***
 * The goal of this file is to show How to use https functions;
 *
 *
 * How to run this example:
 * 1. node https-1.js
 * 2. https://localhost:5005/
 */

/** Notes:
 * To create an HTTPS server, you need two things: an SSL certificate, and Node's built-in https module.
 * We need to start out with a word about SSL certificates.
 * Speaking generally, there are two kinds of certificates: those signed by a 'Certificate Authority', or CA, and 'self-signed certificates'.
 * A Certificate Authority is a trusted source for an SSL certificate,
 * and using a certificate from a CA allows your users to be trust the identity of your website.
 *
 * In most cases, you would want to use a CA-signed certificate in a production environment - for testing purposes,
 * however, a self-signed certicate will do just fine.
 *
 *
 * To generate a self-signed certificate, run the following in your shell:
 * Install openssl software on your operating system and execute below commands
 *
 * openssl genrsa -out key.pem
 * openssl req -new -key key.pem -out csr.pem
 * openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
 * rm csr.pem
 *
 * This should leave you with two files, cert.pem (the certificate) and key.pem (the private key).
 * This is all you need for a SSL connection.
 *
 */

var http = require('https');
var fs = require('fs');

var options = {
	key: fs.readFileSync('key.pem'),
	cert: fs.readFileSync('cert.pem')
};

var server = http.createServer(options, function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	res.end('Hi, My name is Ashwin Hegde\n');
})

server.listen(5005); // 2nd Params is IP, default IP is 127.0.0.1

console.log('Server running at http://127.0.0.1:5005/');
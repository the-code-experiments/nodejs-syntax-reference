/***
 * The goal of this file is to know How to URL function;
 *
 *
 * How to run this example:
 * 1. node url-2.js
 * 2. See the message get displayed on prompt.
 */

var url = require('url');

var website = {
	protocol: 'http:',
	slashes: true,
	auth: 'user:pass',
	host: 'host.com:8080',
	port: '8080',
	hostname: 'host.com',
	hash: '#hash',
	search: '?query=string',
	query: 'query=string',
	pathname: '/p/a/t/h',
	path: '/p/a/t/h?query=string',
	href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'
};

/**
 * Take a parsed URL object, and return a formatted URL string.
 */
console.log(url.format(website));

/**
 * Take a base URL, and a href URL, and resolve them as a browser would for an anchor tag.
 */
console.log(url.resolve('/projects/opensource/Backbone', '/Angular'));
console.log(url.resolve('https://www.google.com', '/Backbone'));
console.log(url.resolve('https://www.google.com/Backbone', '/Angular'));
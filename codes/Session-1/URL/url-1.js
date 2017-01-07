/***
 * The goal of this file is to know How to URL function;
 *
 *
 * How to run this example:
 * 1. node url-1.js
 * 2. See the message get displayed on prompt.
 */

const url = require('url');

/**
 * http://user:pass@host.com:8080/p/a/t/h?query=string#hash
 * 
 * Protocol: http:
 * Slashes: true or false
 * Host: host.com:8080
 * Auth: user:pass
 * Hostname: host.com
 * Port: 8080
 * Pathname: /p/a/t/h
 * Search: ?query=string
 * Path: /p/a/t/h?query=string
 * Query: query=string or {'query':'string'}
 * Hash: #hash
 */

let website = "http://user:pass@host.com:8080/p/a/t/h?query=string#hash";

/**
 * url.parse(urlStr[, parseQueryString][, slashesDenoteHost])
 */
console.log(url.parse(website));

console.log(url.parse(website, true))

website = "//projects/opensource";
console.log(url.parse(website));
console.log(url.parse(website, true, true));
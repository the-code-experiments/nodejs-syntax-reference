/***
 * The goal of this file is to know about the query string functions;
 * This module provides utilities for dealing with query strings..
 *
 * How to run this example:
 * 1. node queryString.js
 * 2. See the message get displayed on prompt.
 */

var queryString = require('querystring');
/***
 * 'foo=bar&baz=qux&baz=quux&corge='
 */
var qString = queryString.stringify({
	email: 'ashwinh@cybage.com',
	itemsCode: ['p001', 'p002'],
	payment: true
});

console.log('\n');
console.log(qString);
console.log(typeof qString);

console.log('\n');

/***
 * 'foo:bar;baz:qux'
 */
qString = queryString.stringify({
	firstname: 'Ashwin',
	lastname: 'Hegde'
}, ';', ':');
console.log(qString);
console.log(typeof qString);

console.log('\n');

/***
 * Escape method
 */
qString = queryString.escape('email=ashwinh@cybage.com&itemsCode=p001&itemsCode=p002&payment=true');
console.log(qString);
console.log(typeof qString);

console.log('\n');

/***
 * Parsing foo=bar&baz=qux&baz=quux&corge
 * Note: Options object may contain maxKeys property (equal to 1000 by default), 
 * it'll be used to limit processed keys. 
 * Set it to 0 to remove key count limitation.
 */
qString = queryString.parse('email=ashwinh%40cybage.com&itemsCode=p001&itemsCode=p002&payment=true');
console.log('%j', qString);
console.log(typeof qString);

console.log('\n');

/***
 * Unescape method
 */
qString = queryString.unescape('email=ashwinh%40cybage.com&itemsCode=p001&itemsCode=p002&payment=true');
console.log('%j', qString);
console.log(typeof qString);
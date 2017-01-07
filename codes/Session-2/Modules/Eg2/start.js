/***
 * The goal of this file is to know about the Mobules functions;
 * Here, we are trying to create a small NPM example.
 *
 * How to run this example:
 * 1. node start.js
 * 2. See the message get displayed on prompt.
 */

const square = require('./npm');
const mySquare1 = square(2);
console.log('The area of my square 1 is: ' + mySquare1.area());
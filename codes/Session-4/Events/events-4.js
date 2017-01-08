/***
 * The goal of this file is to show How to use event functions;
 *
 *
 * How to run this example:
 * 1. node event-4.js
 * 2. See the message get displayed on prompt.
 */

const EventEmitter = require('events');

/**
 * myEvent is an instance of EventEmitter
 */
const myEvent = new EventEmitter();

/**
 * When an error occurs within an EventEmitter instance, the typical action is for an 'error' event
 * to be emitted. These are treated as special cases within Node.js
 * 
 * Note: If an EventEmitter does not have at least one listener registered for the 'error' event and 
 * an 'error' is emitted, the error is thrown, a stack trace is printed and the Node.js process exits.
 */
// myEvent.emit('error', new Error('Oops! something went wrong!')); // throw unhandled 'error' event

/**
 * To guard against crashing the Node.js process, a listener can be registered on the process object's
 * uncaughtException or the domain module can be used (domain is deprecated).
 */
process.on('uncaughtException', (error) => {
    console.error('Oops! something went wrong!');
});

myEvent.emit('error', new Error());
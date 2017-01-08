/***
 * The goal of this file is to show How to use event functions;
 *
 *
 * How to run this example:
 * 1. node event-1.js
 * 2. See the message get displayed on prompt.
 */

const EventEmitter = require('events');

/**
 * myEvent is an instance of EventEmitter
 */
const myEvent = new EventEmitter();

/**
 * .on method is used to register listener.
 * a and b are data that are being passed as arguments.
 * 
 * Note: When ES6 arrow function is use as listener. This `this` keyword will no longer
 * reference the EventEmitter instance.
 */
myEvent.on('addition', (a, b) => {
    console.log(`Addition result of ${a} + ${b} is ${a + b}`);

    console.log(this); // output: {}
});

/**
 * .emit method is used to trigger the event
 */
myEvent.emit('addition', 45, 45);

myEvent.emit('addition', 25, 25);
/***
 * The goal of this file is to show How to use event functions;
 *
 *
 * How to run this example:
 * 1. node event-3.js
 * 2. See the message get displayed on prompt.
 */

const EventEmitter = require('events');

/**
 * myEvent is an instance of EventEmitter
 */
const myEvent = new EventEmitter();

/**
 * Handling event onces
 * Once the event is emitted, the listener is unregistered and then called.
 */
myEvent.once('addition', (a, b) => {
    console.log(`Addition result of ${a} + ${b} is ${a + b}`);
});

myEvent.emit('addition', 45, 45);
myEvent.emit('addition', 25, 25);


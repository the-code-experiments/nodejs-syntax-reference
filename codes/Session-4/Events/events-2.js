/***
 * The goal of this file is to show How to use event functions;
 *
 *
 * How to run this example:
 * 1. node event-2.js
 * 2. See the message get displayed on prompt.
 */

const EventEmitter = require('events');

/**
 * myEvent is an instance of EventEmitter
 */
const myEvent = new EventEmitter();

/**
 * Note: The EventListener calls all listener synchronously in the order in which they were registered.
 * This is important to ensure the proper squencing of events and to avoid race conditions or logic errors.
 */
myEvent.on('addition', (a, b) => {
    /**
     * This happens Asynchronously
     * 
     * Note: Listener functions can switch to an asynchronous mode of operation using the
     * setImmediate() or process.nextTick() methods.
     */
    setImmediate(() => {
        console.log(`Addition result of ${a} + ${b} is ${a + b}`);
    });    
});

/**
 * .emit method is used to trigger the event
 */
myEvent.emit('addition', 45, 45);


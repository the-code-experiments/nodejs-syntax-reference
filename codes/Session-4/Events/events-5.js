/***
 * The goal of this file is to show How to use event functions;
 *
 *
 * How to run this example:
 * 1. node event-5.js or node --trace-warnings event-5.js
 * 2. See the message get displayed on prompt.
 */

const EventEmitter = require('events');

/**
 * myEvent is an instance of EventEmitter
 */
const myEvent = new EventEmitter();

const eventName = 'addition';

/**
 * .on method is used to register listener.
 * a and b are data that are being passed as arguments.
 * 
 * Note: When ES6 arrow function is use as listener. This `this` keyword will no longer
 * reference the EventEmitter instance.
 */
myEvent.on(eventName, (a, b) => {
  console.log('listener 1 > ', a + b);
  return a + b;
});

myEvent.on(eventName, (a, b) => {
  console.log('listener 2 > ', a + b);
  return a + b;
});

/**
 * .emit method is used to trigger the event
 */
myEvent.emit(eventName, 45, 45);

myEvent.emit(eventName, 25, 25);

myEvent.emit(eventName, 5, 5);

/**
 * Get listener count
 */
console.log('Listener count: ', myEvent.listenerCount(eventName));

/**
 * Get Max Listener
 */
console.log('Get default Max Listener 1: ', myEvent.getMaxListeners(eventName)); // 10

/**
 * Set Max Listener
 */
myEvent.setMaxListeners(2);
console.log('Change Max Listener to %d, Get Max Listener Again: ', myEvent.getMaxListeners(eventName)); // 2
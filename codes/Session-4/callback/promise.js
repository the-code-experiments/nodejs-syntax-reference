/***
 * The goal of this file is to show How to avoid callback hell 
 * using promise approach
 *
 *
 * How to run this example:
 * 1. node promise.js
 */

const promise = new Promise(function(resolve, reject) {
  if (false) {
    return reject(new Error('something went wrong'));
  }

  setTimeout(() => {
    resolve('resolved');
  }, 2000);
})

promise.then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
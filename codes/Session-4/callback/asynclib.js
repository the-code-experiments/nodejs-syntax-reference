/***
 * The goal of this file is to show How to avoid callback hell 
 * using Async library approach
 *
 *
 * How to run this example:
 * 1. node asynclib.js
 */

const fs = require('fs');
const async = require('async'); // install
const contentFile = __dirname + '/src/content.txt';

async.waterfall([  
  function(callback) {
    fs.readFile(contentFile, 'utf8', callback);
  },
  function(content, callback) {
    content = content + '\nAppended something!';
    fs.writeFile(contentFile, content, callback);
  }
], (error, result) => {
    if(error) {
      return console.log(error);
    }
    console.log('Appended text!');
});
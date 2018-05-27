/***
 * The goal of this file is to show How to avoid callback hell 
 * using Modularize approach
 *
 *
 * How to run this example:
 * 1. node modularize.js
 */

const fs = require('fs');

const contentFile = __dirname + '/src/content.txt';

const notifyUser = (error) => {  
  if(error) return console.log(error);
  console.log('Appended text!');
};

const appendText = (error, content) => {  
  if (error) return console.log(error);

  content = content + '\nAppended something!';
  fs.writeFile(contentFile, content, notifyUser);
}

fs.readFile(contentFile, 'utf8', appendText);  
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

const appendText = (error, content) => {  
  if (error) {
    return console.log(error);
  }

  content = content + '\nAppended something!';

  fs.writeFile(contentFile, content, (error) => {
    if (error) {
      return error;
    }

    console.log(`Here is the file content: \n${content}`);
  });
}

const readFileContent = () => {
  fs.readFile(contentFile, 'utf8', appendText);
}


readFileContent()
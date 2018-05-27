/***
 * The goal of this file is to show How to avoid callback hell 
 * using promise approach
 *
 *
 * How to run this example:
 * 1. node promise.js
 */

const fs = require('fs');

const contentFile = __dirname + '/src/content.txt';

const appendText = (error, content) => {
  return new Promise((resolve, reject) => {

    if (error) {
      return reject(error);
    }

    content = content + '\nAppended something!';

    fs.writeFile(contentFile, content, (error) => {
      if (error) {
        return reject(error);
      }
      resolve(content);
    });

  });
}

const readFileContent = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(contentFile, 'utf8', (error, content) => {
      if (error) {
        return reject(error);
      }
      
      resolve(content);
    })
  })
}

readFileContent()
  .then(content => console.log(`Here is the file content: \n${content}`))
  .catch(error => console.log(`Something went wrong: \n${error}`))
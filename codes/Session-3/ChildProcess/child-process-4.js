/**
 * Don't run this directly, instead run node parent-process-5.js
 */

if (process.send) {
  process.send("Hello Parent!");
}

process.on("message", (message) => {
  console.log(`Message from Parent: ${message}`);
});
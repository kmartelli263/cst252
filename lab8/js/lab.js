/*
 *  Author: Kevin Martelli <kmartelli@csumb.edu>
 *  Created: 27 September 2020
 *  License: Public Domain
 *
 *  JavaScript created with the help of Wes Modes screenshot of code on ilearn.
 *  Used some of Tyler's code for my updated JaveScript
 */

//Test 1 - call/list
firstthing();
secondthing();
thirdthing();

// console.log(""); //linebreak
// document.writeln(""); //linebreak

// Test 2 - timeout
setTimeout(function() {
  console.log("Test 2, firstthing");
  document.writeln("Test 2, firstthing");
}, 1000);

setTimeout(function() {
  console.log("Test 2, secondthing");
  document.writeln("Test 2, secondthing");
}, 3000);

setTimeout(function() {
  console.log("Test 2, thirdthing");
  document.writeln("Test 2, thirdthing");
}, 5000);

// setTimeout(function() {
//  console.log("");
//  document.writeln("");
// }, 5000); //linebreak

// Test 3 - change order via timer
setTimeout(function() {
  console.log("Test 3, firstthing");
  document.writeln("Test 3, firstthing");
}, 15000);

setTimeout(function() {
  console.log("Test 3, secondthing");
  document.writeln("Test 3, secondthing");
}, 8000);

setTimeout(function() {
  console.log("Test 3, thirdthing");
  document.writeln("Test 3, thirdthing");
}, 7000);

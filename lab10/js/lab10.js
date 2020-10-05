/*  Author: Kevin Martelli <kmartelli@csumb.edu
 *  Created: 3 October 2020
 *  License: Public Domain
 *
 */

 // Create a button
//var button = document.getElemetById('my-button');

// Create a function for your name
//function sayMyName(){
    //var name = prompt('What is your name');
    //var h1 = document.querySelector('h1');
    //h1.innerText = "Hello" + name;
//}

// Create the 'click' functionf or the button
// button.addEventListener('click', sayMyName);

//var button = document.getElementById('my-button');
//button.addEventListener('click', function() {
    //inputValue = document.getElementById('my-input').value;
    //console.log("You input:", inputValue);
//});

var button = document.getElementById("myButton");
var input = document.getElementById("input");
var heading = document.getElementById("heading");

function buttonPress() {

  // get input from field
  var inputText = input.value;

  // add input to h1
  heading.innerText = "Hello, " + inputText;

  // clear field value
  input.value = "";

  input.focus();
}

button.addEventListener("click", buttonPress);

/*  Author: Kevin Martelli <kmartelli@csumb.edu
 *  Created: 29 September 2020
 *  License: Public Domain
 *
 */

 // Finding an output and defining a variable

  var outputEl =
    document.getElementById("output");

// First Element

  var new1El =
    document.createElement("p");

      new1El.innerHTML = "I am learning things, wow!";

// Second Element

  var new2El =
    document.createElement("p");

      new2El.innerHTML = "I learned how to do another thing hehe";

// Appends

  document.body.appendChild(new1El)

  document.body.appendChild(new2El)

// CSS
  document.getElementById ("p").style.fontSize = "large";
  document.getElementById ("content").style.backgroundColor = "blue";

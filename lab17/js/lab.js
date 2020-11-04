/*
* Author: Kevin Martelli <kmartelli@csumb.edu>
* Created: 04 November 2020
* License: Public Domain
* Credit to w3schools for helping me to create these functions
*/

// The functions below will change the color of the text when you click them.

  // This changes the "Challenge" section to red.
  $(document).ready(function(){
    $("#challenge-button").click(function(){
        $("#challenge").css({"color": "#ff00d0"});},
    );
  });

    // This changes the "Problems" section to blue.
      $(document).ready(function(){
        $("#problems-button").click(function(){
            $("#problems").css({"color": "#00ff0d"});},
        );
      });

      // This changes the "Results" section to yellow.
        $(document).ready(function(){
          $("#results-button").click(function(){
              $("#results").css({"color": "#ff8800"});},
          );
        });

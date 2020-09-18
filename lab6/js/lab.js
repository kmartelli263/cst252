/*
 *  Author: Kevin Martelli <kmartelli@csumb.edu>
 *  Created: 17 September 2020
 *  License: Public Domain
 */

 // Define Variables
 myTransport = ["Toyota 4Runner", "bike", "Lyft", "skateboard"];

 myMainRide = {
    make: "Toyota",
    model: "4Runner",
    color: "Silver",
    year: 1999,
    age: function() {
        return 2020 - age;
    }
 }

 // Output
 document.writeln("kinds of transportation I use: ", myTransport, "</br>");
 document.writeln("My Main Ride: <pre>",
      JSON.stringify(myMainRide, null, '\t'), "</pre>");

/*
 *  Author: Kevin Martelli <kmartelli@csumb.edu>
 *  Created: 22 September 2020
 *  License: Public Domain
 */

 // sortUserName - a function that takes user input and sorts the letters of
 // their name

 function sortUserName() {
    var userName = window.prompt("Hello. Please tell me your name, so I can
    fix it.");
    console.log("userName =", userName);
    // split string to Array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    // sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    // join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    return nameSorted;
 }

 // Output
 document.writeln("What do you know, I've fixed your name: ",
    sortUserName(), "</br>");



// Resources
// I borrowed some of Wes Modes code to help me structure my JavaScript file

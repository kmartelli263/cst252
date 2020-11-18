/*
* Author: Kevin Martelli <kmartelli@csumb.edu>
* Created: 18 November 2020
* License: Public Domain
* Credit: Wes Modes for helping us setup the JavaScript during their lecture. 
*/

URL = "https://api.nasa.gov/planetary/apod"
    $.ajax({
        url: URL,
        data: {
          api_key: "HfxW4diusQBshk1BFUjCC60o8SFnxjcbdLEsKHRP"
        },
        type: "GET",
    })

    .done(function(data) {
        console.log(data);
        imageUrl = data.url;
        console.log("URL:", imageUrl);
        $("#output").append("<div id='apod'><img src='" + imageUrl + "'>");
        $("#output").append("<div id='date'>" + data.date);
        $("#output").append("<div id='caption'>" + data.explanation);
    })

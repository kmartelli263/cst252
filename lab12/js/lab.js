if (i%105 ==0) {
      newEl.innerHTML = i + " - FizzBuzzBoom";
      outputEl.appendChild(newEl);
      console.log("FizzBuzzBoom");

    } else if (i%35 ==0) {
      newEl.innerHTML = i + " - BoomBuzz";
      outputEl.appendChild(newEl);
      console.log("BoomBuzz");

    } else if (i%21 ==0) {
      newEl.innerHTML = i + " - FizzBoom";
      outputEl.appendChild(newEl);
      console.log("FizzBoom");

    } else if (i%15 ==0) {
      newEl.innerHTML = i + " - FizzBuzz";
      outputEl.appendChild(newEl);
      console.log("FizzBuzz");

    } else if (i%3 == 0) {
      newEl.innerHTML = i + " - Fizz";
      outputEl.appendChild(newEl);
      console.log("Fizz");

    } else if (i%5 ==0) {
      newEl.innerHTML = i + " - Buzz";
      outputEl.appendChild(newEl);
      console.log("Buzz");

    } else if (i%7 ==0) {
      newEl.innerHTML = i + " - Boom";
      outputEl.appendChild(newEl);
      console.log("Boom");

    } else {
      newEl.innerHTML = i;
      outputEl.appendChild(newEl);
      console.log(i);


  }
}

console.log("There is no multiple of 3, 5, and 7 until the number 105");
for (var i=1; i<201; i++) {
    console.log(i);

      if ((i%5==0)&&(i%3==0)&&(i%7==0)) {
        console.log("fizz buzz boom");
        document.getElementById('output').innerHTML += "fizz buzz boom" + "<br>";

      } else if((i%5==0)&&(i%3==0)) {
        console.log("fizz buzz");
        document.getElementById('output').innerHTML += "fizz buzz" + "<br>";

      } else if(i%7==0) {
        console.log("boom");
        document.getElementById('output').innerHTML += "boom" + "<br>";

      } else if(i%3==0) {
        console.log("fizz");
        document.getElelementById('output').innerHTML += "fizz" + "<br>";

      } else if(i%5==0) {
        console.log("buzz");
        document.getElelementById('output').innerHTML += "buzz" + "<br>";

      } else if((i%5!==0)&&(i%3!==0)&&(i%7!==0)) {
        console.log("not a multiple of 3, 5, or 7");
        document.getElementById('output').innerHTML += "not a multiple of 3, 5, or 7" + "<br>";
      }
}

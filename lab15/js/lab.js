class Car {
  constructor(name, make, year, color) {
    this.carname = name;
    this.carmake = make;
    this.caryear = year;
    this.carcolor = color;
  }
  info() {
    return "I drive a " + this.carname + " " + this.carmake + " " + this.caryear + " " + this.carcolor + " ";
    }
  }

  mycar = new Car("Toyota,", "Tacoma,", "1996,", "gray");
  mysecondcar = new Car("Toyota,", "4Runner,", "1999,", "silver");

    document.getElementById("output").innerHTML += "<p>" + mycar.info() + "</p>";
    document.getElementById("output-2").innerHTML += "<p>" + mysecondcar.info() + "</p>";

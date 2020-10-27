// Lab 14: Javascript Classes and objects

function Vehicle(name, make, year, color) {
  this.vehicleName = name;
  this.vehicleMake = make;
  this.vehicleYear = year;
  this.vehicleColor = color;
  this.details = function() {
    return "car details: " + "<br>" +
    this.vehicleName + " " + this.vehicleMake + " " + this.vehicleYear + " " + this.vehicleColor + " ";
  }
}

var firstcar = new Vehicle("Tacoma", "Toyota", "1996", "gray");
var secondcar = new Vehicle("4Runner", "Toyota", "1999", "silver");

var vehicleArray = [firstcar, secondcar];

document.getElementById("output").innerHTML += "<p>" + firstcar.details() + "</p>";
document.getElementById("output-2").innerHTML += "<p>" + secondcar.details() + "</p>";

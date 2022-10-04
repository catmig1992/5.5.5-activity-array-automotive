//this includes the vehicle class as a module
const VehicleModule = require("./vehicle");

//Create a Car class that extends the Vehicle class
//Add a constructor
//Add the super keyword to call the parent class constructor
//Add the properties listed in the Properties chart above
class carA extends VehicleModule {
  constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.maximumPassengers = 0;
    this.passenger = 0;
    this.numberOfWheels = 0;
    this.maximumSpeed = 0;
    this.fuel = 0;
    this.scheduleService = false;
  }
}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle(
  "Mecury",
  "Sedan",
  "1965",
  "color",
  "mileage"
);
console.log(v.make);

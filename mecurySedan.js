//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").Vehicle;

//Create a Car class that extends the Vehicle class
//Add a constructor
//Add the super keyword to call the parent class constructor
//Add the properties listed in the Properties chart above
class carA extends VehicleModule {
  constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.maximumPassengers = 5;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maximumSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
  }

  //if passenger less than maximumPassengers then availableRoom == true
  loadPassenger(num) {
    if (this.passenger <= this.maximumPassengers) {
      if (num + this.passenger > this.maximumPassengers) {
        this.passenger = num;
        return this.passenger;
      } else {
        console.log(
          this.model +
            " " +
            this.make +
            " does not have enough space to take all passengers."
        );
      }
    } else {
      console.log(this.model + " " + this.make + " is at full capacity");
    }
  }

  //if fuel is greater than 0, then start == true
  start() {
    if (this.fuel > 0) {
      console.log("started engine.");
      return this.started == true;
    } else {
      console.log("empty fuel tank.");
      return this.started == false;
    }
  }
  //if mileage is greater than 30000, time for maintenance == true
  maintenance() {
    if (this.mileage > 30000) {
      this.scheduleService = true;
      return this.scheduleService;
    }
  }
}

//this shows how to call from this module...
let v = new carA("Mecury", "Sedan", "1965", "color", "mileage");

v.start();
v.loadPassenger(5);
v.stop();
v.maintenance();

console.log(v.make);

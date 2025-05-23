/** @format */

class Vehicle {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  move() {
    console.log("This is a car class");
  }
}

class Bus extends Vehicle {
  constructor(name, price, seat, ticketPrice) {
    super(name, price);
    this.seat = seat;
    this.ticketPrice = ticketPrice;
  }
}

class Truck extends Vehicle {
  constructor(name, price, load) {
    super(name, price);
    this.load = load;
  }
}

const newTruck = new Truck("newTruck", "145 tk", 10);
console.log(newTruck);

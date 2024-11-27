/** @format */

const products = [
  { id: 1, name: "lenovo", price: 65000 },
  { id: 2, name: "dell", price: 45000 },
  { id: 3, name: "hp", price: 40000 },
  { id: 4, name: "mac", price: 150000 },
];

// has some properties, method
class Product {
  country = "Bangladesh";
  constructor(name) {
    this.name = name;
  }
  speak(talk) {
    console.log(`talking about ${talk}`);
  }
}

const lenovo = new Product();
console.log(lenovo);
lenovo.speak("Something new");

class Teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }
  lecture() {
    console.log("Sir is teaching math");
  }
}

const tapan = new Teacher("Tapon Sir", "Physics");
console.log(tapan);

const rashid = new Teacher("Rashid", "English");
console.log(rashid);
rashid.lecture();

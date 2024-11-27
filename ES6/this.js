/** @format */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sleep() {
    console.log(`Sleeping now ${this.name}`);
  }
}

const avi = new Person("Avi", 25);
const sabbir = new Person("Sabbir", 25);

console.log(avi);
console.log(sabbir);

avi.sleep();
sabbir.sleep();

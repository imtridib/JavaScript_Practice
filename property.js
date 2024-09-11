/** @format */

const person = {
  name: "ramesh",
  age: 25,
  profession: "deVeloper",
  salary: 25000,
  married: true,
  "fav places": ["bandarban", "saintmartin", "kuakata"],
};

// console.log(person);

// dot notation
// dot symbol use diye object er property er value access kora
// console.log(person.profession);
const income = person.salary;
// console.log(income);

// bracket notation
// third bracket diye access kora
console.log(person["age"]);
const boyos = person["age"];
console.log(boyos);

// error
// console.log(person.'fav places')
console.log(person["fav places"]);

const KeyName = "profession";
console.log(person[KeyName]);

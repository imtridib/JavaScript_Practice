/** @format */

const person = {
  name: "ramesh",
  age: 25,
  profession: "deVeloper",
  salary: 25000,
  married: true,
  "fav places": ["bandarban", "saintmartin", "kuakata"],
};

person.salary = 30000;
person["age"] = 26;
person["fav places"] = ["maldives", "bali", "pataya"];

// changing property value using variables
const propName = "profession";
person[propName] = "devops";
console.log(person);

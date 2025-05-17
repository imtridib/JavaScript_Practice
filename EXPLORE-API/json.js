/** @format */
const user = { id: 1, name: "Ononto", job: "actor" };
// JavaScript Object Notation
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);
/*
{ id: 1, name: 'Ononto', job: 'actor' }
{"id":1,"name":"Ononto","job":"actor"}
*/

const shop = {
  owner: "Alia",
  address: {
    street: "Kochukhet",
    city: "Dhaka",
    country: "BD",
  },
  products: ["laptop", "mic", "monitor", "keyboard"],
  revenue: 45000,
  isOpen: true,
  isNew: false,
};

console.log(shop);
const shopJSON = JSON.stringify(shop); // converting an object in JSON format
console.log(shopJSON);

const shopObj = JSON.parse(shopJSON); // converting JSON format to an object format
console.log(shopObj);

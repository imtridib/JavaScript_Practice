/** @format */

let num1 = 5;
let num2 = 7;
function multiply(a, b) {
  a = 27; // primitive will not change though it is resign
  const result = a * b;
  return result;
}

console.log(num1); // primitive will not change though it is resign
multiply(num1, num2);
console.log(num1);

let student1 = { name: "Jalil", partner: "borsha" };
let student2 = { name: "raj", partner: "anika" };

function makeMovie(couple1, couple2) {
  couple1.name = "Ononto"; // non-primitive will change when it is resign
  couple2.partner = "mim";
}

console.log(student1, student2); // non-primitive will change when it is resign
makeMovie(student1, student2); // non-primitive will change when it is resign
console.log(student1, student2); // non-primitive will change when it is resign

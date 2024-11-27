/** @format */

const numbers = [4, 5, 2, 8, 10];

function doubleIt(num) {
  console.log("num now", num);
  return num * 2;
}

const result = numbers.map(doubleIt);
console.log(result);

const double2 = (n) => n * 2;

const output = numbers.map(double2);
console.log(output);

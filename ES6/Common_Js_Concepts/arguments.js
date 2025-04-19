/** @format */

// new
// array like object
function sum(a, b, c) {
  const args = [...arguments]; // converting object to pure array
  args.push(59);
  console.log(args);
  console.log(arguments);
  const result = a + b + c;
  return result;
}

// console.log(arguments);
const total = sum(45, 89, 12, 45, 98, 56);
// console.log(total)
console.log(sum.length);

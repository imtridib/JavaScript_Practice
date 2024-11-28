/**
 * 8 ways to get undefine
 *  1. variable that is not initialized will give undefined
 * 2. function with no return
 * @format
 */

let first;
function second(a, b) {
  const total = a + b;
}

const result = second();

function third(a, b, c, d) {
  const total = a + b + c + d;
  console.log(a, b, c, d);
}

third(2, 5);

console.log(result);

console.log(first);

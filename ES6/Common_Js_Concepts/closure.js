/** @format */

function stopWatch() {
  let counter = 0;
  return function () {
    // New function return inside the function work like new for every function
    counter++;
    return counter;
  };
}

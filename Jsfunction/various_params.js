/**
 * for a given string tell me whether it has even number of characters or not
 *
 * @format
 */

function evenSizedString(str) {
  const size = str.length;
  console.log(str, size);
  if (size % 2 === 0) {
    console.log("even size");
  } else {
    console.log("odd size");
  }
}
// evenSizedString("Taka");

function doubleOrTriple(number, doDouble) {
  if (doDouble === true) {
    const result = number * 2;
    return result;
  } else {
    const result = number * 3;
    return result;
  }
}

// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));

function numberOfElements(numbers) {
  const len = numbers.length;
  return len;
}
console.log(numberOfElements([1, 2, 3]));

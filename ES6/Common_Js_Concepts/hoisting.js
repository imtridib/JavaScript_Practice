/** @format */

print5();
print10();
for (let i = 0; i < 5; i++) {
  // console.log(i);
}
// console.log('outside', i);

function print5() {
  //hoisting effect also worked for function calls
  console.log("inside print5", 5);
}

// it also worked in var 'variable declare' but it wil doesn't consider it as a function but consider it as a variable
var print10 = function () {
  console.log("inside print10", 10);
};

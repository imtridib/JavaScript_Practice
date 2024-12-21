/** @format */

function greeting(greetingHandler, name) {
  greetingHandler(name);
}

function greetingHandler(name) {
  console.log("Good Morning", name);
}

function greetEvening(name) {
  console.log("Good Evening", name);
}

greeting(greetingHandler, "Jack");
greeting(greetingHandler, "Tom");

greeting(greetEvening, "Jery");

// callBack Function uses example
function submitHandler() {
  console.log("submit button clicked");
}

document.getElementById("btn-submit").addEventListener("click", submitHandler);

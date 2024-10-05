/** @format */

// option 1: Directly set on the HTML element
// <button title="This is a Tooltip" onclick="console.log(7)">Click Me</button>

// option 2: add onclick function on the html element
// IMPORTANT: we will use this
// <button onclick="makeRed()">Make Red</button>
function makeRed() {
  document.body.style.background = "red";
}

// option: 3
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.background = "blue";
}

// option 3: another [we will use this sometime]
const purpleButton = document.getElementById("make-purple");
purpleButton.onclick = function makePurple() {
  document.body.style.background = "purple";
};

// option: 4
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

// option: 4 another
const makeGreenButton = document.getElementById("make-green");
makeGreenButton.addEventListener("click", function makeGreen() {
  document.body.style.background = "green";
});

// option: 4 Final
// IMPORTANT: we will use this sometimes
//   document.getElementById('make-goldenrod').addEventListener('click', function(){})
document
  .getElementById("make-goldenrod")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "goldenrod";
  });

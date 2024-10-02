/** @format */

console.log("first file");

const allLi = document.getElementsByTagName("li");
console.log(allLi);

const allTitles = document.getElementsByClassName("section-title");
console.log(allTitles);

const secondSection = document.getElementById("second-section");
console.log(secondSection);
secondSection.style.color = "White";
secondSection.style.backgroundColor = "steelblue";

// document.querySelectorAll
// document.querySelector

// adding new list
const secondList = document.getElementById("second-list");
const li = document.createElement("li");
li.innerText = "My dynamic item";

secondList.appendChild(li);

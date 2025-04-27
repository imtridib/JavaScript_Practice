/** @format */

// 1. Where to add
const placesList = document.getElementById("places-list");
console.log(placesList);

// 2. What to be added
const li = document.createElement('li');
li.innerText = "Rajshahi";

// 3. Add the Child 
placesList.appendChild(li);

// 1. where to add(section)
const mainContainer = document.getElementById("main-container");

// 2. what to be added
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "My Food List";
section.appendChild(h1);

const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "Biryani";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "Kabab";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "Tikka";
ul.appendChild(li3);

const li4 = document.createElement("li");
li4.innerText = "Borhani";
ul.appendChild(li4);

section.appendChild(ul);
mainContainer.appendChild(section);

// set innerHTML directly

const sectionDress = document.createElement("section");
sectionDress.innerHTML = `
<h1>My Dress Section</h1>
<ul>
    <li>T-shirt</li>
    <li>Shirt</li>
    <li>Fotua</li>
    <li>Pants</li>
</ul>
`;

mainContainer.appendChild(sectionDress);

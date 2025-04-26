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
// example:
{/* <p>Add a background color all elements with class="example":</p>
<h2 class="example">A heading</h2>
<p class="example">A paragraph.</p> 

<script>
const nodeList = document.querySelectorAll(".example");
</script> */}

// document.querySelector
// example:
{/* <p>Add a background color to the first element with class="example":</p>

<p class="example">I am a paragraph.</p>
<p class="example">I am a paragraph.</p> 

<script>
document.querySelector(".example").style.backgroundColor = "red";
</script> */}




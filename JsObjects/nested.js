/** @format */

// nested object example
const college = {
  name: "HLC",
  class: ["11", "12"],
  events: ["science fair", "bijoy dibos", "21 Feb"],
  unique: {
    color: "blue",
    result: {
      gpa: 5,
      merit: "top",
    },
  },
};

college.unique.result.merit = "top most";
console.log(college.unique.color);
console.log(college.unique.result.merit);

college.events[1] = "16 December";
console.log(college.events[1]);

console.log(college.events[2]);
console.log(college.events);

delete college.class;
console.log(college);

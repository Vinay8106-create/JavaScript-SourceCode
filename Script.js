 // console.log("hello script !");

/* operators and conditional statements */

// comparision operators

let a = 5; // number
let b = "5"; // String -> number

console.log(a == b);  // equals operator checks only value
console.log(a === b);  // strictly equals operator checks data Type along with value

// conditional statements

let mode = "dark";
let color;

if (mode === "dark") {
  color = "black";
} else if (mode === "light") {
  color = "white";
}

console.log(color);


// ternary operator
let age = 25;

console.log(age>=18? "adult" : "not adult");
;

// alert("hello"); // just a pop-up
// let name = prompt("hello");  // used to take input from user along with displaying message
// console.log(name);

// practice 
// Q-1
// let num = prompt("Enter a number:");
// if (num % 5 === 0) {
//   console.log(num, "is multiple of 5");
// } else {
//   console.log(num, "is not a multiple of 5");
// }


// Q-2 marks - program
let score = prompt("Enter your score to get a Grade:")
let grade;
if (score >= 90 && score <=100) {
  grade = "A";
} else if (score >=70 && score <= 89) {
  grade = "B";
} else if (score >= 60 && score <= 69) {
  grade = "C";
} else if (score >= 50 && score <= 59) {
  grade = "D";
} else if (score >= 0 && score <= 49){
  grade = "E";
}
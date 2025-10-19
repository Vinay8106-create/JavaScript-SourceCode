// Loops are used to execute a piece of code again & again

// for loop
// for (let i = 1; i <= 5; i++){
//   console.log("hi");
// }

// let sum = 0;
// let n = prompt("enter a number to find sum of n numbers:")
// for (let i = 1; i <= n; i++){
//   sum = sum+i;
// }
// console.log(sum);


// while(condition){} loop

// do-while loop


/* for-of loop
for-of loop will help in iterating the Array and Strings */
// let str = "ApnaCollege";
// let size = 0;
// for (let i of str) {   // i is iterartor which will hold one character for each pass
//   console.log(i);  // here we will get each character, we don't have to initialize and update or even stop
//   size++;
// }
// console.log("String size:" ,size);



// for-in loop
// for-in loop is used to iterate through the Object and arrays
// let student = {
//   name: "rahul kumar",
//   age: 20,
//   cgpa: 7.5,
//   isPass: true
// };

// for (let i in student) {
//   console.log(i);  // for-in loop will return keys of an object
//   console.log(student[i]);  // we will get value instead of key
// }
// console.log(student.age);  // another way to get value of a particular key



// practice Q-1
// let n = prompt("Enter a  Number");
// for (i = 0; i <= n; i++) {
//   if (i%2 == 0) {
//      continue;
//   } else console.log(i);
  
// }

// Q-2 number gussing game
let userNum = prompt("Enter a Number between 0 to 100:");
let gameNum = 50;

while (userNum != gameNum) {
  userNum = prompt("you guessed wrong number, try again");
}

console.log("you guessed right number");




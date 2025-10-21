// Functions in js : Block of code that perform a specific TextTrackList, can be invoked whenever needed. reusable block of code
// functions in js can be passed as a parameter
// methods are similar to functions, but  usually methods are binded to some data structure. like .toUpperCase() for only string
// console.log("hello");

// "abc".toUpperCase();

// [1, 2, 3].push(4);


// // function definition
// function functionName() {
//   // do some work
// }

// function functionName(param1, param2) {
//   // do some work
// }

// // function call
// functionName();


// function myFunction() {
//   console.log("hi");
//   console.log("hello");
// }
// myFunction();  // function call statement / function invoke


// function myFunction1(msg) {    // parameter // parameterized function
//   console.log(msg);
// }
// myFunction1("never stop learning");  // argument


// Function => 2 numbers, sun
// function sum(a, b) {
//   // a, b are local variables (block scope)
//   // console.log(a+b);
//   s = a+b;
//   return s;
// }
// let val = sum(4, 5);
// console.log(val);


// // Arrow functions : compact way of writing a function (they are part of modern js)
// // Arrow functions are used to small operations
// // const functionName = (param1, param2...)=>{
// //   // do some work
// // }

// const printHello = ()=> {
//   console.log("Hello");
// }
// printHello();

// // mul function
// // function mul(a, b) {
// //   return a*b;
// // }

// const arrowMul = (a, b)=>{   // arrow function can be stored in a variable called arrowMul
//   return a*b;
// }
// console.log(arrowMul);  // prints entire arrow function definition
// console.log(arrowMul(4, 5));


// practice Q-1
// function countVowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (char === 'a' || char === 'e' || char === 'i' || char == 'o' || char === 'u') {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countVowels("hexa")); // 2
// console.log(countVowels("xyz")); // 0

// same task using arrow function
// const countVow = (str)=>{
//   let countVowel = 0;
//   for (let char of str) {
//     if (char === 'a' || char === 'e' || char === 'i' || char == 'o' || char === 'u') {
//       countVowel++;
//     }
//   }
//   return countVowel;
// }
// console.log(countVow("hexa"));


// Higher order functions/methods : functions which can take another function as a parameter or returning a function
// forEach loop in Arrays
// Array.forEach(callBackFunction)
// callBackFunction : here, it is a function to execute for each element in the array
// A callback is a function passed as an argument to another function
// syntax :   arr.forEach(callBackFunction)
// ex :
// let arr = [1, 2, 3, 4, 5];
// // arr.forEach(function printVal(val) {   // value at each index
// //   console.log(val);
// // })
// // one more way for callBackFunction using arrow function

// arr.forEach((val) => {
//   console.log(val);
// })

// arr.forEach((val, index) => {
//   console.log(val, index);
// })

// arr.forEach((val, index, arr) => {
//   console.log(val, index, arr);
// })


// practice Q-1
// for a given array of numbers, print the square of each value using the forEach loop
// let arr = [4, 58, 6, 7];

// let calcSquare = (val) => {
//   console.log(val*val);
// }

// arr.forEach(calcSquare);  // 1 way

// arr.forEach((val, index, arr) => {   // 2nd way
//   // val**2  this is also used for square in js
//   console.log(val*val, index, arr);
// })


// Map() : creates a new array with the results of some operation.The values its callback returns are used to form new array
// map is similar to forEach()
// // arr.map(callBackFnx(value, index, array))
// let nums = [67, 52, 39];
// // nums.map((val) =>{
// //   console.log(val);
// // })

// let newArr = nums.map((val) =>{
//   return val*val;
// })
// console.log(newArr);


// Filter() : Creates anew array of elements that give true for a condition/filter. ex : give all even numbers
// filter won't change original array.it will create copy of original based on condition and returns new array
// let nums1 = [67, 52, 39];
// let evenArr = nums1.filter((val) => {
//   return val%2 == 0;
// })
// console.log(evenArr);  // 52


// Reduce() : performs some operations & reduces the array to a single value. it returns that single value.
// ex : sum of n num's, avg etc,.
// const array1 = [1, 2, 3, 4];
// // const output = array1.reduce((prev, current) => {
// //   return prev+current;
// // })
// // console.log(output);  // 10
// // to find largest element
// const largest = array1.reduce((prev, curr) => {
//   return prev > curr? prev : curr;
// })
// console.log(largest);



// practice Q-1
// let marks = [87, 90, 91, 45, 99, 87, 67];
// let newMarks = marks.filter((val) => {
//     if (val > 90) {
//       return val;
//     }
// })
// console.log(newMarks);

// Q-2
let n = prompt("Enter a number from:");
let arr = [];

for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}
console.log(arr);
// use reduce to calc sum of all numbers
// let sum = arr.reduce((res, curr) => {
//   return res+curr;
// })
// console.log(sum);

// use reduce to calc product of all numbers (factorial)
let factorial = arr.reduce((res, curr) => {
  return res*curr;
})
console.log(factorial);










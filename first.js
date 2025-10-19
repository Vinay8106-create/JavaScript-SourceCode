// // variables in js
// name = "john wick !";
// age = 23;
// price = 99.99;

// x = null;  // null is also a special value in js

// y = undefined; // it is also special member in js
// console.log(y);

// console.log(x);

// console.log(price);
// console.log(name);

// fullname = 25;
// console.log(fullname);  // works : dynamically typed

// let, const & var : keywords which are used to declare variables (ex : let age = 23;)
// we have to use anyone of these keywords to declare a variable
// 1) let
// let name = "john wich";
// let age = 23;
// let totalPrice = 1000;
// console.log(name);

// var : variable can be re-declared & updated. A global scope variable
// let : variable cannot be re-declared but can be updated. A block scope variable
// const : variable cannot be re-declared or updated. A block scope variable

// in 2015 we got es6 (echma script (new features)) in js, since then we don't use var

// var is a global scope (can be accesed from anywhere in the code)
// var age = 45;
// var age = 45; // re-declaration, this is the reason we don't use var and use let instead since es6 came

// let 
let age = 6;
let a;
console.log(a);  // undefined in output because only declared not initialized
// let age = 5;  // cte
age = 23;  // can be updated but can't re-declare

// let is of block scope (can be accesed in a specific block)
{
  let age = 45;
  console.log(age);
}

{
  let age = 34;
  console.log(age);
}

// const has block scope
// const b; // cte : must be initialized
const name = "john";
name = "john wick";  // here we don't get any error but in console we get error


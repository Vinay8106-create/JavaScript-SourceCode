// Data Types : in js classified into two types  (primitive and Non-primitive)
// primitive (fixed - 7) , Non-primitive (Objects : Arrays, Functions) (Object : collection of primitive values ex: student { name : String, age : number, marks : number, isPass : boolean})
// in Objects data is stored in Key : value; pairs
// Object = {
//   age : 34,
//   name : "rahul"
// }



// Primitive : Number, String, Boolean, Undefined, Null, BigInt, Symbol

let age = 5; // number
let price = 100.5;

let fullName = "john wick"; // String

// undefined : by default all the variables will be undefined till they are initialized
let x;

// null : a special type of value in js
let y = null;  // typeof null; will be an 'Object'
// null means absence of an Object

// BigInt
let z = BigInt("123");

// symbol
let v = "hello";


const student = {    // student is Object
  fullName : "Rahul Kumar",
  age : 20,
  cgpa : 8.2,
  isPass : true
};  
console.log(student);
console.log(student.age);  // this and below both are correct ways to access Object's value
console.log(student["age"]);
console.log(student["isPass"]);

// student (Object) value updation
student["age"] = student["age"] + 1;
console.log(student["age"]);

student["fullName"] = "Rahul Sharma";
console.log(student);

console.log(student["fullName"]);
// we can change Object's key which is declared with const keyword, but we can't change variable declared with const keyword , because Object is a collection of keys : value, pairs



// practice 1 :
const Product = {
  fullName : "parker Jotter Standard CT Ball Pen (Black)",
  rating : 4,
  isDeal : true,
  price : 270,
  discount : 5 
};

console.log(Product);
console.log(typeof Product);  // Object
console.log(typeof Product["fullName"]);



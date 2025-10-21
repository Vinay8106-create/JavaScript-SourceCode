// Arrays in js : collctions of items linearly and Arrays are mutable in js
// let marks = [97, 82, 75, 64, 36];
// console.log(marks);
// console.log(marks.length);  // property

// console.log(typeof marks); // object

// let info = ["rahul", 78, "delhi"];
// console.log(info);  // works

// // Array indices
// console.log(marks[0]); // 97

// marks[2] = 66; 
// console.log(marks);

// looping over an Array
// print all elements of an array
// let heros = ["iron", "john wick", "captaion", "batman"];
// // normal loop
// for (let i = 0; i < heros.length; i++) {
//   console.log(heros[i]);
  
// }
// // using for-of
// for (let element of heros) {
//   console.log(element);
//   console.log(element.toUpperCase());
// }


// practice Q-1
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let i of marks) {
//   sum +=i;
// }
// let avg = sum/marks.length;
// console.log(`avg marks of the class = ${avg}`);

// // Q-2
// let items = [250, 645, 300, 900, 50];
// let index = 0;
// for (let i of items) {
//   console.log(`price at index ${index} = ${i}`);
//   let offer = i/10;
//   items[index] = items[index] - offer;
//   console.log(`price after discount = ${items[index]}`);
  
//   index++;
// }
// console.log(items);

// using for loop
// for(let i = 0; i < items.length; i++) {
//   let offer = items[i] / 10;
//   items[i] -= offer;
// }
// console.log(items);


// Arrays Methods
// push() : add to end (it will add into existing array itself)
// let vegetables = ["potato", "tomato", "okra", "cabbage"];
// vegetables.push("carrot");
// vegetables.push("carrot", "paneer");
// console.log(vegetables);

// pop() : delete from end & return (it will alse change original array)
// let vegetables = ["potato", "tomato", "okra", "cabbage"];
// let deletedItem = vegetables.pop();

// console.log(vegetables);
// console.log(deletedItem);

// toString() : converts array to string (it won't change original array)
// let vegetables = ["potato", "tomato", "okra", "cabbage"];
// console.log(vegetables);  // original array
// console.log(vegetables.toString()); // string format
// console.log(vegetables); // original array


// Concat() : joins multiple arrays & returns result (it won't change existing array)
// let vegetables = ["potato", "tomato", "okra", "cabbage"];
// let heros = ["thor", "spider-man", "batmal"];
// let indianHeros = ["shaktiMan", "krish"]

// let mix = vegetables.concat(heros);
// let mix2 = vegetables.concat(heros, indianHeros);
// console.log(mix2);


// unShift() : add to start
// let heros = ["thor", "spider-man", "batmal"];
// heros.unshift("antman");
// console.log(heros);


// // shift() : delete from start & return
// heros.shift();
// console.log(heros);


// slice() : returns a piece of array (sometimes we use to copy of an array)
// let heros = ["thor", "spider-man", "batmal"];
// console.log(heros.slice(1, 2));  // ending index non-inclusive


// // splice() : changes original array (add, remove, replace)
// let heros = ["thor", "spider-man", "batmal", "dr strange"];
// // console.log(heros.splice(1, 2));  // deletes from original array
// // heros.splice(1, 2, "h", "j");  // deletes from index 1 to 2 and replaces with new two names
// heros.splice(1, 0, 101, "j");   // we can add without deleting at index 1
// console.log(heros);


// practice Q-1
let companies = ["Bloomberg", "Microsoft","Uber","Google","IBM","Netflix"];
// remove the first company from the array
companies.splice(0, 1);
// remove Uber & Add Ola in its place
companies.splice(1, 1, "Ola");
// Add amazon at the end
companies.splice(companies.length, 0, "Amazon");
console.log(companies);








// String : sequence of charaters and Strings are immutable in js
// String creation
// let str = "ApnaCollege";  // 1st way

// let str2 = 'ApnaCollege';  // 2nd way

// in-built properties
// str.length property
// console.log(str.length);
// // indices ( 0 based indexing for Strings)
// console.log(str[10]);  // e
// console.log(str[11]); // undefined


// template literals in js : a way to have embedded expressions in Strings
// `this is a template literal` : it is a special type of string literal
// let specialString = `This is a template literal`;
// console.log(specialString);
// console.log(typeof specialString);


// let obj = {
//   item : "pen",
//   price : 10,
// };
// console.log("the cost of",obj.item,"is",obj.price,"rupees");
// let output = `the cost of ${obj.item} is ${obj.price} rupees`; // using String interpolation instead of string concatination
// console.log(output);


// String interpolation
// to create Strings by doing substitution of placeholders
// `string text ${expression} string text`


// escape character (\n)
// console.log("ApnaCollege"); // same line
// console.log("Apna\nCollege"); // different line
// let str = "Apna\tCollege"; // same line but tab space between two words

// console.log(str.length); // 12

// string methods in js : built-in methods to manipulate the string
// str.toUpperCase()
// let str = "ApnaCollege"
// console.log(str.toUpperCase()); // output is new String object (string methods won't manipulate original string, they will create new String)
// console.log(str);  // ApnaCollege

// // str.toLowerCase()
// console.log(str.toLowerCase());  // apnacollege
// console.log(str);  // ApnaCollege

// // str.trime() // removes whiteSpaces
// let str2 = "  Apna College ";
// console.log(str2.trim());  // ApnaCollege (removes fstarting and end white spaces)


// str.slice(start, end?)  // return part of string
// let str = "abcdef";
// console.log(str.slice(1)); // bcdef
// console.log(str.slice(1, 3)); // it will not include ending value

// str1.concat(str2) // joins str2 with str1
let str1 = "Apna";
let str2 = "College";
console.log(str1.concat(str2));
console.log(str1+str2);  // another way to concat

// str.replace(searchVal, newVal)
let str = "abcdefgde";
console.log(str.replace("de", 45));  // abc45fg  only one time replace will be done
console.log(str.replaceAll("de", 45));  // abc45fg45 multiple time replace will be done

// str.charAt(index)
let str3 = "ILoveJS";
str3 = str3.replace("I", "L")
console.log(str3.charAt(0));


// practice
let fullName = prompt("Enter your full name without spaces: ");
let l = fullName.length;
console.log("Your userName is:", `@${fullName}${l}`);



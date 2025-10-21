// console.dir(document.body);

// accessinh html through id
// let button = document.getElementById("myId");  // this method returns a value, we need to store it
// console.dir(button); // to print object we should use console.dir()


// // accessinh html through id
// let myClass = document.getElementsByClassName("myClass");  // it return HTMLCollection
// console.dir(myClass);
// console.log(myClass);

// // accessing html through tag name
// let paras = document.getElementsByTagName("p");
// console.dir(paras)

// Query Selector()
// let firstElement = document.querySelector("p");  // returns 1st element
// console.dir(firstElement);

// let allElement = document.querySelectorAll("p");  // returns p Nodes List
// console.dir(allElement);


// let myClassElement = document.querySelector(".myClass");  // returns 1st element of myClass element
// console.dir(myClassElement);

// let allmyClassElementa = document.querySelectorAll(".myClass");  // returns all myClass elements
// console.dir(allmyClassElementa);



// let idElement = document.querySelector("#myId");  // returns only 1 element
// console.dir(idElement);





// DOM Manipulation properties :
// 1) console.dir(idElement.tagName);  // p

// console.dir(document.body.firstChild);   // text
// console.dir(document.body.lastChild);  // script

// let firstChild = document.querySelector("div").children;
// console.dir(firstChild)

// 2)
// let div = document.querySelector("div");
// console.dir(div);
// console.dir(div.innerText);  // return inner text of div along with it's children inner text

// // 3)
// console.dir(div.innerHTML);  // return inner HTML of div along with it's children inner HTML(with tags)

// 4) in the above 3 properties we get the text, now here we can set the text
// console.dir(div.innerText="abcd");  // it will erase previous text and set's new text to abcd
// console.dir(div.innerHTML="<div>inner html</div>");    // we can change our html dynamically at run time


let heading = document.querySelector("h1");
// console.dir(heading);
// console.dir(heading.innerText="new heading");
// console.dir(heading.innerHTML="<i>new heading</i>");  // we can write tags in innerHtml

console.dir(heading);  // heading is hidden 
console.dir(heading.textContent);  // it shows even if it is hidden
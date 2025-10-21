// DOM Properties
// attributes : to get attributes value we have
// getAttribute(attr) // to get the attribute value
// setAttribute(attr, value) // to set/update the attribute value


// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);


// let para = document.querySelector("p");
// console.log(para);
// console.log(para.getAttribute("class"));

// // setAttribute(attr, value) : to change attribute name
// console.log(para.setAttribute("class", "newClass" ));  // change will be shown in elements tab not on console


// style : to change style of an element
// syntax : node.style
// first we need to access div
let div = document.querySelector("div");
console.dir(div);
console.log(div.style);
div.style.backgroundColor = "purple";  // we can change css styling using js dynamically at run time
div.style.fontSize = "26px";
div.innerText = "Hello!";
div.style.visibility = "hidden";
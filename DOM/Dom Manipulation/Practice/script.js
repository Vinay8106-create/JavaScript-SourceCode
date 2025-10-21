// practice Q-1
// Create h2 heading element with text-"hello js". append "from apna college students" to thia text using js.
// first access element
// let h2 = document.querySelector("h2");
// console.dir(h2);

// to change text we have two properties : innerText and innerHTML
// console.dir(h2.innerText)  // hello javaScript!
// h2.innerText = h2.innerText + " from Apna College students";  // concatenate



// practice Q-2
// create 3 divs with common class name-"box". access them & add some unique text to each of them.
// access them
let divs = document.querySelectorAll(".box");  // return nodeList, we can access each of the Node with index starting from 0
// console.dir(divs[0]);  // first div    // NodeList will also in the form of array
// console.dir(divs[1]);  // second div
// console.dir(divs[2]);  // third div
// divs[0].innerText="new unique value 1";
// divs[1].innerText="new unique value 2";
// divs[2].innerText="new unique value 3";

// we can also access each div by looping since NodeList is also in the form of array
let index = 1; 
for (let div of divs) {
  console.dir(div.innerText); 
  console.dir(div.innerText = `new unique value ${index}`);   // string interpolation
  index++;
}


console.log('dom js');
// https://www.w3schools.com/js/js_htmldom.asp
// https://www.w3schools.com/jsref/met_node_appendchild.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Element/append

// DOM - Document Object Model
// The DOM stands for Document Object Model. In JavaScript, the DOM is a programming interface that represents 
// the structure of an HTML or XML document as a tree-like structure. It provides a way for JavaScript to interact 
// with and manipulate the content, structure, and style of a web page.

// The DOM treats an HTML or XML document as a structured set of nodes, where each node represents a part of 
// the document, such as an element, attribute, or text.

// Each node can have child nodes, sibling nodes, and a parent node, forming a tree-like structure.



// DOM methods to select HTML elements
// document.getElementById('user-form');
// document.getElementsByTagName();
// document.getElementsByClassName();

// document.querySelector();
// document.querySelectorAll();


// console.log(document.getElementById('user-form'));
let inputs = document.getElementsByTagName('input');    
// console.log(inputs); // returns a HTMLCollection
// console.log(inputs[0]); 
// console.log(inputs[5]);
// console.log(inputs[9]); // undefined
// console.log(typeof inputs); // object
// console.log(inputs.length); // 6

// To iterate through HTMLCollection or NodeList use for..of loop. 
// for...of is loop used for only iterable objects like array, string, HTMLCollection etc..,
for(let value of inputs){
    // console.log(value);
    // console.log(value.attributes);
    // console.log(value.classList);
    // console.log(value.tagName);
    // value.style.borderColor = "red";
}

// console.log(document.querySelector('input'));
// console.log(document.querySelector('input').previousElementSibling);
// console.log(document.querySelectorAll('input')); // returns a NodeList
// console.log(Array.from(document.querySelectorAll('input'))); // returns array

// console.log(document.getElementsByTagName('input')); // returns a HTMLCollection
// console.log(Array.from(document.getElementsByTagName('input'))); // returns array



// DOM properties to select HTML elements

// console.log(document.head);
// console.log(document.body);
// console.log(document.title);
// console.log(document.URL);
// console.log(document.forms);
// console.log(document.anchors);
// console.log(document.scripts);
// console.log(document.images);


// ### DOM Manipulation

let p1 = document.createElement('p')
let text1 = document.createTextNode('third para in div1');
p1.appendChild(text1)
document.querySelector('#first').appendChild(p1);

let p2 = document.createElement('p')
let text2 = document.createTextNode('third para in div2');
p2.appendChild(text2)
document.querySelector('#second').appendChild(p2);

// parent.insertBefore(newElement, selector);
// element.remove();
// parent.removeChild(selector)



// element.getAttribute('src') or  element.getAttribute('id')
// element.setAttribute('class',"valid")
// element.classList.add("error")
// element.classList.remove("error")




















// Element.append() allows you to also append string objects, whereas Node.appendChild() only accepts Node objects. 
// Element.append() can append several nodes and strings, whereas Node.appendChild() can only append one node.

// <!DOCTYPE html>
// <html>
// <body>
// <h1>The Element Object</h1>
// <h2>The appendChild() Method</h2>

// <ul id="myList">
//   <li>Coffee</li>
//   <li>Tea</li>
// </ul>

// <p>Click "Append" to append an item to the end of the list:</p>

// <button onclick="myFunction()">Append</button>

// <script>
// function myFunction() {

// // Create an "li" node:
// const node = document.createElement("li");

// // Create a text node:
// const textnode = document.createTextNode("Water");

// // Append the text node to the "li" node:
// node.appendChild(textnode);

// // Append the "li" node to the list:
// document.getElementById("myList").appendChild(node);
// }
// </script>

// var op = document.createElement('option');
//     op.innerText = value.name;
//     op.setAttribute('value',value.id);
//     document.getElementById('country').appendChild(op);


// </body>
// </html>
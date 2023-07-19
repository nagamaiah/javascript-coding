console.log('data type js');

// Js is dynamically typed language. Data types are decided based on assigned value dynamically

// Primitve
// 1. number (numbers, floats, whole numbers etc....)
// 2. string (series of characters enclosed with single or double quotes)
// 3. boolean (true and false) -> case-sensitive

// Special
// 1. undefined 
// 2. null


// Compound or Composite
// 1. array
// 2. object


// In JavaScript, a variable without a value, has the value undefined. The type is also undefined.
// Any variable can be emptied, by setting the value to undefined. The type will also be undefined.




// we can use typeof operator to find data type of js variable
// typeof "raj"  or typeof (3)

let age = 30.34;
let place = 'bpl';

// typeof {}  --> 'object'
// typeof []  --> 'object'
// typeof function(){} --> 'function'


let para = "here is something you can find \"special\" ";
// console.log(para);

let dis;

// console.log(dis);


let len = null
// console.log(len);
// console.log(typeof len); // object
// typeof null is object


// null data type
// Null is an assignment value. It can be assigned to a variable as a representation of no value. 
// datatype is object

// undefined data type
// Undefined means a variable has been declared but has yet not been assigned a value.
// datatype is undefined

// null is equal to undefined but not identical.
// null == undefined // true
// null === undefined // false



// composite or compound datatypes
// grouping primitive datatypes to form a composite datatype 


let names = ['nag', 'raj', 'samm'];
// console.log(names);
// console.log(typeof names);  // object
// console.log(names.length); // 3


// object contains key value pairs. 
let person = {
    name : "raj",
    age : 35,
    maritalStatus : false,
    kids : ['sasi', 'prem']
}

// console.log(person);
// console.log(typeof person); // object

// JSON.stringify() takes a JavaScript object and transforms it into a JSON string.
// JSON.parse() takes a JSON string and transforms it into a JavaScript object.

let jsonString = JSON.stringify(person);
let jsObject = JSON.parse(jsonString);


console.log(jsonString); // {"name":"raj","age":35,"maritalStatus":false,"kids":["sasi","prem"]}
console.log(typeof jsonString); // string

console.log(jsObject); // {name: 'raj', age: 35, maritalStatus: false, kids: Array(2)}
console.log(typeof jsObject); // object
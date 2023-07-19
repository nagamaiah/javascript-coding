console.log('ES6 features');

// List
// 1. let and const keywords
// 2. Arrow functions
// 3. Classes
// 4. Template literals (Template strings)
// 5. Destructuring syntax
// 6. Spread Operators
// 7. Default parameters
// 8. Promises
// 9. Async/Await
// 10. JS Modules
// 11. Object Property Shorthand
// 12. Rest Parameters




// 1. new keywords let and const. Provides block scope





// 2. Arrow functions --> improved syntax for functions
// defining a function with const keyword is preferable way. so that you cannt change function name

// function getResult()
// {
//     return "result";
// }

const getResult = () => "result";
// console.log(getResult());

// function add(num1,num2)
// {
//     return num1+num2;
// }

const add = (num1,num2) => num1+num2;
// console.log(add(30,20));


// 3. Javascript Classes
class Person {

    constructor(firstname, lastname){
        // console.log('constuctor reached');
        this.fname = firstname;
        this.lname = lastname;
    }

    getFullName(){
        return this.fname+" "+this.lname;
    }
}

let person1 = new Person('Raj', 'Kumar');
let person2 = new Person('Ram', 'Charan');
// console.log(person1.getFullName());
// console.log(person2.getFullName());


// 4. Template literals (Template strings)

// Template literals, also known as template strings, are a feature introduced in ECMAScript 2015 (ES6) that allows 
//for more convenient string interpolation and multi-line strings in JavaScript. They are enclosed by backticks (``) 
// instead of single or double quotes.
// Template literals also support multi-line strings, which can be especially useful when dealing with lengthy or formatted text

const a = 5;
const b = 10;
const result = `The sum of ${a} and ${b} is ${a + b}.`;
// console.log(result);

const message = `
  Dear ${result},

  Thank you for your inquiry. We appreciate your interest in our products.

  Best regards,
  The Team
`;
// console.log(message);








// . Async/Await
// The async.. await syntax in ES6 use to handle the http promises requests




// 6. Destructuring - Destructuring assignment enables extracting values from arrays or objects into separate variables.
// Destructuring means unpacking into separate variables.
// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values 
// from arrays, or properties from objects, into distinct variables.

// const vehicles = ['mustang', 'f-150', 'expedition'];
// const [car, truck, suv] = vehicles;
// console.log(car, truck, suv);


// const vehicles = ['mustang', 'f-150', 'dfg', 'dfg', 'expedition'];
// const [car, truck, suv, ...rem] = vehicles;
// console.log(car, truck, suv);
// console.log(rem);


// const vehicles = ['mustang', 'f-150', 'expedition'];
// const [car,,suv] = vehicles; // array destructuring
// console.log(car, suv);

// const person = {
//     name : 'nag',
//     age : 30,
//     place : 'bpl'
// }
// const {name, place} = person;  // object destructuring {}
// console.log(name, place);

// const vehicleOne = {
//     brand: 'Ford',
//     model: 'Mustang',
//     type: 'car',
//     year: 2021, 
//     color: 'red'
//   }
//   myVehicle(vehicleOne);
//   function myVehicle({year, type, color, brand, model}) {
//     const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.'+' In the year '+year;
//     console.log(message);
//   }

// deep destructuring 
// const vehicleOne = {
//     brand: 'Ford',
//     model: 'Mustang',
//     type: 'car',
//     year: 2021, 
//     color: 'red',
//     registration: {
//       city: 'Houston',
//       state: 'Texas',
//       country: 'USA'
//     }
//   }
//   myVehicle(vehicleOne)
//   function myVehicle({ model, registration: { state, country } }) {
//     const message = 'My ' + model + ' is registered in ' + state + '.'+' In country '+country;
//     console.log(message);
//   }


// 7. Spread Operator  (...data)
// The spread operator expands an iterable object into individual elements.





// 10. JS Modules, Import and Export
// JavaScript modules allow you to break up your code into separate files.
// To break complex or large code into smaller, reusable pieces.
// smaller pieces of code that you can import and export between different parts of an application.
// Uses
// 1. More Organized Code
// 2. Code Reusability
// 3. No Naming Conflicts

// Modules also rely on type="module" in the <script> tag.

{/* <script type="module">
    import message from "./message.js";
    document.getElementById("demo").innerHTML = message();
</script> */}
// (or)

{/* <script type="module" src="./file.js"></script> */}

// Types of File Exports
// 1. Named Exports  and 2. Default Exports
// Named exports are constructed using curly braces. Default exports are not.
// Note that you can only use one default export in a JavaScript file.
// Named exports allow you to share multiple modules from a file, unlike default exports which can only have one in a file.


// const age = 404;
// const name = "Muhammad Alli"
// export default function sayHello(user) {
//   alert(`Hello, ${user}!`);
// }
// export {age, name};

// We can use aliases with export and import statements
// export {sayHello as greet };
// import {userName as name, greet as sayHello} from 'user.js'

// How to Import an Entire Module

// import * as User from 'user.js'
// User.name
// User.sayHi


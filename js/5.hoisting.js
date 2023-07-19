// 'use strict';
console.log('hoisting js');

// ## Hoisting ::
// 1. Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope 
//    (to the top of the current script or the current function).
// 2. Hoisting in Javascript is a mechanism in which the variables and function declarations (not initializations) 
//    are moved to the top of their scope before the execution of the code. The function expressions and arrow 
//    functions cannot be hoisted. 
// 3. Hoisting allows you to use functions and variables before they're declared.
// 4. We can stop hoisting using the "use strict" directive at top; JavaScript strict mode does not allow (hoisting) 
//    undeclared variables.
// 5. In hoisting, variable and function declarations only move to top, not intializations



// Variables defined with let and const are hoisted to the top of the block, but not initialized.
// Using a let variable before it is declared will result in a ReferenceError.

// JavaScript in strict mode does not allow variables to be used if they are not declared.

// console.log(res); // undefined 
// console.log(status); // Uncaught ReferenceError: Cannot access 'status' before initialization

getResult();

function getResult(){
    console.log('result');
}

var res = "passed";
let status = "not eligible";


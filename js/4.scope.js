// 'use strict';
console.log('scope js');

// Scope determines the accessibility (visibility) of variables.

// JavaScript has 3 types of scope:
// 1. Global scope
// 2. Function scope (or) Local scope
// 3. Block scope



// 1. Global Scope
// Variables declared Globally (outside any function) have Global Scope.
// Global variables can be accessed from anywhere in a JavaScript program. Inside fuction or block and outside function or block
let train = 'kakathiya';

// console.log(train);
function getTrain()
{
    // console.log(train);
}

getTrain();

{
    // console.log(train);
}


// If you assign a value to a variable that has not been declared (i.e not a var, let or const), 
// it will automatically become a GLOBAL variable.
// In "Strict Mode", undeclared variables are not automatically global.

function getState()
{
    state = 'AP';
}
getState()
// console.log(state);

// In HTML, the global scope is the window object.
// Global variables defined with the var keyword belong to the window object .  // use window.carName
// Global variables defined with the let keyword do not belong to the window object



// 2. Function scope (or) Local scope
// Variables declared within a JavaScript function, become LOCAL to the function.
// Local variables have Function Scope. They can only be accessed from within the function.
// Variables declared with var, let and const are quite similar when declared inside a function.



// 3. Block Scope
// For if, for, while and so on, variables declared in {...} are also only visible inside
// Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
// ES6 introduced two important new JavaScript keywords: let and const.These two keywords provide Block Scope in JavaScript.
// Variables declared inside a { } block cannot be accessed from outside the block

// Variables declared with the var keyword can NOT have block scope.
if(true){
    var count = 50;
}
// console.log(count); // 50 -> var doesnt have block scope

if(true){
    let age = 50;
}
// console.log(age); // Uncaught ReferenceError: age is not defined. -> let have block scope. cannt acces outside of block



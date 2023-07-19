console.log('operators js');

// Operators are used to perfom operations on operands
// Types of operators in JS
// 1. Arithmetic Operators (+, -, *, %, /, **)
// 2. Assignment Operators (=, +=, -=, %=)
// 3. Comparison Operators (== , === , <, > , >=, <=)
// 4. String Operators ( + , +=)
// 5. Logical Operators ( && , || , !)
// 6. Bitwise Operators (&, |, ~, ^)
// 7. Ternary Operators (?)
// 8. Type Operators (typeof , instanceof)



// Unary operators :: operation performed with one operand
let a = 10;
let b = 15;
// console.log(a++);
// console.log(a--);
// pre-increment ++a
// post-increment a++

// pre-decrement --a
// post-decrement a--


// Binary Operators :: operation performed with two operands
// console.log(a+b);
// console.log(a*b);


// Ternary Operator :: operation performed with three operands
// condition ? expression_1 : expression_2
let age = 16;
let result = (a>=18) ? "eligible" : "not eligible";
// console.log(result);

// let res = null ? "success" : "failure";  // failure
// let res = undefined ? "success" : "failure"; // undefined
// let res = true ? "success" : "failure"; // success
// let res = 1 ? "success" : "failure"; // success
let res = 0 ? "success" : "failure"; // failure
console.log(res);



// JavaScript Nullish Coalescing Operator (??)
// The nullish coalescing operator (??) is a logical operator that accepts two values and returns the second value 
// if the first one is null or undefined
// A nullish value is a value that is either null or undefined

//  let bikeSpeed;
 let bikeSpeed = 120;
 let speed = bikeSpeed ?? 80;
//  console.log(speed);

// equivalent to ::
// const result = value1;
// if(result === null || result === undefined) {
//    result = value2;
// }



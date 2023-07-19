console.log('type_conversionn js');


// Typecasting in JavaScript means converting one data type to another data type i.e., the conversion of a string data type 
// to Boolean or the conversion of an integer data type to string data type. The typecasting in JavaScript is also known as 
// type conversion or type coercion

// 1. Implicit Conversion (Automatically by JavaScript itself)
// 2. Explicit Conversion (By the use of a JavaScript function) (coersion)



// 1. Implicit Conversion
// js will automatically based on operators and operands.
// console.log(12+4); // 16
// console.log(12+"4"); // 124
// console.log(12-"4"); // 8



// 2. Explicit Conversion  by using JS function
// possible converted datatypes -> number, string, boolean

// if you want to convert a js value to nubmer use Number()
let age = "23";
let firstname = "raj";
let status = false;
let status2 = true;
let dateNow = new Date();
console.log(Number(age)); //23
console.log(Number(firstname)); //NaN
console.log(Number(status)); //0
console.log(Number(status2)); //1
console.log(dateNow); // Wed Jun 28 2023 23:10:22 GMT+0530 (India Standard Time)
console.log(typeof dateNow); // Object
console.log(Number(dateNow)); // 1687974071535


// parseFloat()	Parses a string and returns a floating point number
// parseInt()	Parses a string and returns an integer

console.log(parseInt("34.45jfg")); //34
console.log(parseFloat("34.45jfg")); //34.45




// if you want to convert a js value to string use String() fuction. toString() does the same.
console.log(String(100 + 23)); //123

// String(Date())
// Date().toString()

console.log(String(null)); // "null"
console.log(Number(null)); // 0

console.log(Boolean("sdf"));
console.log(Boolean("12"));
console.log(Boolean(1));
console.log(Boolean(true));
console.log(Boolean(false)); // false
console.log(Boolean(-6)); // true
console.log(Boolean(98.99)); // true
console.log(Boolean(0));  // false
console.log(Boolean(''));  // false
console.log(Boolean(null));  // false

console.log('11.functions.js');

// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is `executed` when "something" invokes it (calls it).

// functions are used to reuse code. Write once use many time
// You can use the same code with different arguments, to produce different results.

// Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.
// Local variables are created when a function starts, and deleted when the function is completed.

// function sum(a,b)
// {
//     return a+b
// }
// let result = sum(5,10)
// let result1 = sum;
// console.log(result); // 15
// console.log(result1);  // prints function expression


// Types of functions 
// 1. Named functions
// 2. Anonymous functions (or) Function Expression
// 3. Immediately Invoked Function Expression (IIFE)
// 4. Arrow Functions


// 1. Named functions
// Named functions are defined with a name and can be invoked using that name. They can be declared anywhere in the code, 
// and the entire function is hoisted to the top of its scope.
  
 function functionName(parameters) {
    // Function body
  }


// 2. Anonymous functions (or) Function expression

// Anonymous functions, also known as function expressions, are assigned to variables. They are typically used as callback 
// functions or when creating closures.
// Anonymous functions should end with SEMICOLON ;
let getFullName = function(fname,lname){
    return `${fname} ${lname}`;
};


// console.log(getFullName('Raj', 'Kumar'));


// 3. Immediately Invoked Function Expression (IIFE)

// IIFEs are functions that are executed immediately after they are defined or encountered in the code.
// They are often used to create a private scope and prevent variable pollution.

let sum = (function(a,b){
    return a + b;
})(10, 20);

console.log(sum);

(function(){
    console.log('something');
})();

// (function(a,b){
//     // return a + b;
//     console.log(a+b);
// })(10,20);


// 4. Arrow Functions (shorter syntax for writing js functions)

// Arrow functions provide a concise syntax for writing functions. Arrow functions provide a concise syntax for writing functions. They have implicit returns and lexically bind the this value.
// They have implicit returns and lexically bind the `this` value.

// let something = () => expression

// function getName()
// {
//     console.log("nameee");
// }

let getName = (name) => console.log(name);
getName('NTR');

(()=> console.log('arrow func'))();

((a,b) => {
    console.log(a+b);
})(25,25);
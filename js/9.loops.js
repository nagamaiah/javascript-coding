console.log('loops js');


// if you want to perform or iterate a task multiple times ,then we can use loops
// loops are iterative statements;

// JavaScript supports different kinds of loops:

// 1. for - loops through a block of code a number of times
// 2. for/in - loops through objects, arrays, string
// 3. for/of - loops through the values of an iterable object (arrays, strings, maps, nodelist)
// 4. while - loops through a block of code while a specified condition is true
// 5. do/while - also loops through a block of code while a specified condition is true


// break vs continue
// break - jump out of loop (or) terminate loop
// continue - skip the current iteration and continue with next iteration.


// 1. for loop 

// for(initialization; condition; increment/decrement){
//     code goes here...
// }

// prime number - A number which is divisible by itself and 1 is called prime nubmer
let result = [];
for(let i=1;i<=100;i++){
    let count = 0;
    if(i<2){
        continue;
    }
    for(let j=1;j<=i;j++)
    {
        if(i%j == 0){
            count++
        }
    }
    if(count == 2){
        result.push(i);
    }
}
// console.log(result);

// palidrome number - A number remains the same when its digits are reversed vise versa is called palidrome number.
// use string reverse and compare.

// armstrong number -  An Armstrong number is a number that is equal to the sum of its own digits raised to the power of the number of digits. 
// 153 = 1^3+5^3+3^3   //153, 370, 371, 407 
// 9474 = 9^4+4^4+7^4+4^4 







// for/in loop

// for...in loop used for objects, arrays and strings etc...
// for (key in object) {
    // executes the body for each key among object properties
//   }

// for in statement loops through the properties of an Object, elements of array and chars of a string

let para = "once upon a time there is a king";
for(let key in para){
    // console.log(para[key]);
}


let mobile11 = {
    brand : "moto",
    price : 10000,
    "5g" : true,
    "with screen guard" : "yes",
}

for(let key in mobile11)
{
    // console.log(mobile11.key); // undefined
    // console.log(mobile11[key]);
}

let simpleArray1 = [3,3,4,"msg",true];
for(let i in simpleArray1)
{
    // console.log(simpleArray1[i]);
}

let simpleString1 = "hello world"
for(let strr in simpleString1)
{
    // console.log(simpleString1[strr]);
}


// 3. for/of loop

// The JavaScript for of statement loops through the values of an iterable object.
// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists

// for...of loop used for `sequence data types`  Arrays, Strings, Maps, NodeLists etc
// for...of doesn't work for objects
// for(let value of mobile11)
// {
//     console.log(mobile1[value]); // Uncaught TypeError: mobile11 is not iterable
// }

let list = [2,4,5,6,4,34,45];
for(let value of list){
    // console.log(value);
}
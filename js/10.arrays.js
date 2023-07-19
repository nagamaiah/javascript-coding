console.log('arrays js');

// Array is a variable which holds multiple values. Index starts with 0.
// Total number of elements present in array is called length

// Many programming languages support arrays with named indexes. Arrays with named indexes are called associative arrays (or hashes).
// JavaScript does not support arrays with named indexes. In JavaScript, arrays always use numbered indexes.

// Declare empty array
// let data = [];
// let collection = new Array();

// Declare array 
//  1. let movies = ['rrr','sye','vikram'];
//  2. let person = new Array('raju',30,false);

let movies = ['rrr','sye','vikram']
let person = new Array('raju',30,false)
console.log(movies);
console.log(person);
// console.log(movies.length);

// length = lastindex+1;
// lastindex = length-1;


// Methods on array - push(), pop(), unshift(), shift(), concat(), indexOf(), slice(), splice()

// 1. push() - Adds one or more elements to the end of an array and returns the new length of the array.
// movies.push('pushpa');
// let length = movies.push(false,55.5);
// console.log(movies);
// console.log(length);

// 2. pop - Removes the last element from an array and returns that element.
// const fruits = ['apple', 'banana', 'orange'];
// const lastFruit = fruits.pop();
// console.log(fruits); // ['apple', 'banana']
// console.log(lastFruit); // 'orange'

// 3. unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.
// const fruits = ['banana', 'orange'];
// const length = fruits.unshift('apple', 'kiwi');
// console.log(fruits); // ['apple', 'kiwi', 'banana', 'orange']
// console.log(length); // 4

// 4. shift() - Removes the first element from an array and returns that element.
// const fruits = ['apple', 'banana', 'orange'];
// const firstFruit = fruits.shift();
// console.log(fruits); // ['banana', 'orange']
// console.log(firstFruit); // 'apple'

// 5. concat() - Combines two or more arrays and returns a new array.
// const fruits = ['apple', 'banana'];
// const moreFruits = ['orange', 'kiwi'];
// const allFruits = fruits.concat(moreFruits);
// console.log(allFruits); // ['apple', 'banana', 'orange', 'kiwi']

// 6. indexOf() - finds index of element present in array
// console.log(person.indexOf(false)); // 2
// console.log(person.indexOf('abc')); // -1    abc not present in person

// 7. slice() - Returns a new array containing a portion of the original array.
// slice returns a piece of the array but it doesn't affect the original array
// const fruits = ['apple', 'banana', 'orange', 'kiwi', 'bavii', 'suvii'];
// const slicedFruits = fruits.slice(1, 3);  //1 to 3-1
// const slicedFruits = fruits.slice(0, fruits.length);  //indexes 0, 1, 2, 3, 4, 5
// console.log(slicedFruits); // ['banana', 'orange']


// 8. splice() - Changes the content of an array by adding, removing, or replacing elements
// splice changes the original array by removing, replacing, or adding values and returns the affected values.
// const fruits = ['apple', 'banana', 'orange', 'kiwi'];
// const removedFruits = fruits.splice(1, 2, 'grape', 'pear');
// console.log(fruits); // ['apple', 'grape', 'pear', 'kiwi']
// console.log(removedFruits); // ['banana', 'orange']



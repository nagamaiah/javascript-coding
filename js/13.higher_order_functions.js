console.log('Higher Order Function');

// In JavaScript, functions are treated as first-class citizens. We can treat functions as values and assign them 
// to another variable, pass them as arguments to another function, or even return them from another function.
// This ability of functions to act as first-class functions is what powers higher order functions in JavaScript.

// First class function built with the intension of being passed around to other functions and will do a specific thing
// A Higher-Order function is a function that receives a first class function as an argument or returns the first class
// as output (or) result.

// A function which takes another function as an argument or returns a function is known as a higher order function.


// The forEach() method calls a function (a callback function) once for each array element.


function getInfo()
{
   console.log("information")
}
function getData(info)
{
    console.log('getData function');
    info()
}
// Here getInfo function passed as argument to getData function. getData func is called a higher order function as it takes func as arg.
getData(getInfo);


// Here getFullName function returns a function as result. So, its called HOF as it returns a function
function getFullName(fname, lname)
{
    return fullname(fname, lname)
    
}
function fullname(f,l)
{
    let result = `${f} ${l}`; 
    console.log(result);
}
// getFullName('Siva', 'Shankar');




// ----------------------------------------------------------------------------------------
// HOF examples - forEach, map, filter, reduce


let numbers = [1, 2, 3, 4, 5];

let users = [
    {name:'raj', age:21},
    {name:'suraj', age:14},
    {name:'bajj', age:17},
    {name:'kajj', age:20},
    {name:'sajj', age:18},
    {name:'majj', age:20},
]

// 1. forEach()
// .forEach(), is used to execute the same code on every element in an array but does not change the array 
// and it returns undefined.

// let res = numbers.forEach(ele => console.log(ele))

// console.log(res); // undefined

// 2. map()
// .map() executes the same code on every element in an array and returns a new array with the updated or modified elements.
// .map() doen't change the original array

// let squares = numbers.map(function(element,index,arr){
//         return element**2;
// });

// let squares = numbers.map(ele => ele**2)

let sqrs = ele => ele**2;
let squares = numbers.map(sqrs)

// console.log(squares);



// 3. filter()
// filter() method creates a new array with all elements that pass the test provided by the callback function

let adultList = users.filter(user => user.age>=18);
// console.log(adultList); // returns all matched values


// 4. find()
//  returns the value of first element in the array where pridicate is true, and undefined otherwise

let findAdultList = users.find(user => user.age>=18);
console.log(findAdultList); // returns only first matched value

// 5. findIndex() - returns only first matched array index
// returns the index of the first element in the array where predicate is true, and -1 otherwise


// 6. reduce()
// The reduce() method executes the callback function on each member of the calling array which results
// in a single output value.

// It accepts 2 parameters: reducer function, initial value (optional)

// reducer function accepts 4 parameters: accumulator, currentValue, currentIndex, sourceArray.

// if an initialValue is provided, then the accumulator will be equal to the initialValue and the currentValue
// will be equal to the first element in the array

// if no initialValue is provided, then the accumulator will be equal to the first element in the array and 
// the currentValue will be equal to the second element in the array.

// const sum  = numbers.reduce(function(accumulator, currentValue, currentIndex, sourceArray){
//     // console.log(accumulator);  // 1, 3, 6, 10, 15
//     // console.log(currentValue); // 2, 3, 4, 5
//         return accumulator+currentValue;
// });

const sum  = numbers.reduce(function(accumulator, currentValue, currentIndex, sourceArray){
    // console.log(accumulator);  // 10, 11, 13, 16, 20
    console.log(currentValue); // 1, 2, 3, 4, 5
        return accumulator+currentValue;
}, 10); // initialValue - 10



console.log(sum);

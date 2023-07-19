console.log('variables js');

// we can declare a variable using var, let and const
// Variable names contains only letters(a-z,A-Z), digits(0-9), _, $. No special chars
// variables should starts with letters, $ or _
// variable name are case-sensitive


// In 2015 , let and const are new keywords by Ecmascript (ES6)
// We reassign values for let and var variables
// We cann't reassign for const values
// Whenever we declare a const , then we should provide initial value.
// For let and var declare now, assign values later.
// you cann't redeclare same variable with let keyword b
// Variable Cycle :  Declaration -> Initialization/Assignment  -> Usage
// let and const variables have block level scope



let $distance = '50km'
console.log($distance);

{
    const product = 'tv'
    let age = 30
    var place = 'bpl'
}


console.log(place);
// console.log('222',age);
// console.log(product);














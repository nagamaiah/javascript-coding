
// https://www.w3schools.com/js/js_object_constructors.asp

// Sometimes we need a "blueprint" for creating many objects of the same "type".
// The way to create an "object type", is to use an `object constructor function`.
// Objects of the same type are created by calling the constructor function with the new keyword:
// If you call a function using a new operator, the function acts as a constructor and returns an object

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

function Person(){}

// `this` is not a variable. It is a keyword. You cannot change the value of this.
// In JavaScript, the this keyword refers to an object.
// Which object depends on how this is being invoked (used or called).
// The this keyword refers to different objects depending on how it is used:

// 1. In an object method, this refers to the object being created with new & constructor function
// 2. Alone, this refers to the global object.
// 3. In a function, this refers to the global object.
// 4. In a function, in strict mode, this is undefined.
// 5. In an event, this refers to the element that received the event.
// 6. Methods like call(), apply(), and bind() can refer this to any object.

// Built-in JavaScript Constructors   <<<---
// new String()    // A new String object
// new Number()    // A new Number object
// new Boolean()   // A new Boolean object
// new Object()    // A new Object object
// new Array()     // A new Array object
// new RegExp()    // A new RegExp object
// new Function()  // A new Function object
// new Date()      // A new Date object

// JavaScript has object versions of the primitive data types String, Number, and Boolean. 
// But there is no reason to create complex objects. Primitive values are much faster:

// Use string literals "" instead of new String().
// Use number literals 50 instead of new Number().
// Use boolean literals true / false instead of new Boolean().
// Use object literals {} instead of new Object().
// Use array literals [] instead of new Array().
// Use pattern literals /()/ instead of new RegExp().
// Use function expressions () {} instead of new Function().
console.log("objectt js");


// An object is a collection of properties and methods(state and behavior) in the form of key and value pairs.

// An empty object (“empty cabinet”) can be created using one of two syntaxes:
// let user = new Object(); // "object constructor" syntax
// let user = {};  // "object literal" syntax

// ## Different ways to create a object JS
// 1. Object Litera Syntax -> let obj = {}
// 2. Using a new keyword with Object constructor -> let obj = new Object()
// 3. Using a new keyowrd with Constructor functions -> let obj new Person("raj",23);
// 4. Object.create() method -> let ElectricCar = Object.create(Car)
// 5. Classes



// 1. Object Litera Syntax

let movie = {
    name : "RRR",
    director : "rajamouli",
    budget : 500,
    panindia : true,
}
// console.log(movie);
// console.log(movie.panindia);

// To remove a property, we can use the delete operator:
delete movie.budget;
// console.log(movie);

// The last property in the list may end with a comma
// That is called a “trailing” or “hanging” comma. Makes it easier to add/remove/move around properties, because all lines become alike.
// We can also use multiword property names, but then they must be quoted:
// For multiword properties, the dot access doesn’t work. Need to use square brackers user["likes birds"]
let mobile = {
    brand : "moto",
    price : 10000,
    "5g" : true,
    "with screen guard" : "yes",
}
// let key = "with screen guard";
// console.log(mobile);
// console.log(mobile.with screen guard); // Uncaught SyntaxError: missing ) after argument list
// console.log(mobile['with screen guard']); // yes
// console.log(mobile[key]); // yes
// console.log(mobile.key); // undefined

// console.log(Object.keys(mobile)); // ['brand', 'price', '5g', 'with screen guard']
// console.log(Object.values(mobile)); // ['moto', 10000, true, 'yes']
// console.log(Object.entries(mobile)); //[Array(2), Array(2), Array(2), Array(2)]



//property value shorthand
// function makeUser(name,age){
//     return {
//         name : name,
//         age :age,
//     }
// }
function makeUser(name,age,place){
    return {
        name,
        age,
        location : place,
        active : true,
    }
}
let user2 = makeUser("nag",30,"hyd")
// console.log("name" in user2); // true  // in keyword to check key in a object


// The "for..in" loop
// To walk over all keys of an object, there exists a special form of the loop: for..in
// for (key in object) {
    // executes the body for each key among object properties
//   }
// for...in loop used for both objects,arrays and strings etc...
for(let key in mobile)
{
    // console.log(mobile.key); // undefined
    // console.log(mobile[key]);
}

let simpleArray = [3,3,4,"msg",true];
for(let i in simpleArray)
{
    // console.log(simpleArray[i]);
}

let simpleString = "hello world"
for(let strr in simpleString)
{
    // console.log(simpleString[strr]);
}


// for...of loop used for sequence data types  Arrays, Strings etc
// for(let value of mobile)
// {
//     // console.log(mobile[value]); // Uncaught TypeError: mobile is not iterable
// }






let emptyObject = {}
emptyObject.name = "nag"
emptyObject.age = 23
emptyObject.list = [3,45,"ahe",false,null,undefined]
emptyObject.obj = {
    life : 20,
    brand : "nike"
}
emptyObject.process = function(){
    return this.list
}

// console.log(emptyObject);   
// console.log(emptyObject.process());

// console.log(Object.keys(emptyObject));
// console.log(Object.values(emptyObject));
// console.log(Object.entries(emptyObject)); // array with key value pairs

// console.log(Object.prototype.isPrototypeOf(emptyObject));   //true          
// console.log(Function.prototype.isPrototypeOf(emptyObject.obj)); //false
// console.log(Function.prototype.isPrototypeOf(emptyObject.process)); //true
// console.log(Array.prototype.isPrototypeOf(emptyObject.list));  //true
// console.log(Array.prototype.isPrototypeOf(emptyObject.process));  //false   it's a function here...
// console.log(Array.prototype.isPrototypeOf(emptyObject.process()));  //true   finally it returns array, so true...
// console.log(Object.prototype.isPrototypeOf(Function.prototype)); //true

// console.log(emptyObject.constructor == Object); //true
// console.log(emptyObject.constructor == Function); //false
// console.log(emptyObject.obj.constructor == Function); //false
// console.log(emptyObject.obj.constructor == Object); //true
// console.log(emptyObject.process.constructor == Function); //true
// console.log(emptyObject.list.constructor == Array); //true



// 2 & 3 -> JS built-in Object constructor with new keyword  (or) custom constructor functions
// If you call a function using a new operator, the function acts as a constructor and returns an object
// `this` keyword represents the object being created at that time using new keyword with constructor function

let movie1 = new Object();
movie1.name = "kgf"
movie1.hero = "yash"
// console.log(movie1);

function Student(){
    this.name = "ajay",
    this.age = 23,
    this.fee = 2000
}
let student = new Student();
// console.log(student);


function Employee(a,b,c){
    this.name = a,
    this.age = b,
    this.salary = c
}
let employee = new Employee("sycho",25,40000);
// console.log(employee);



// 4. Object.create()  method , you can extend a object and inherit properties and methods

// In this example, you have created an object called ElectricCar using the Car  object as a prototype, 
//so the ElectricCar object will have all the properties of the Car object.

let Car = {
    model: 'BMW',
    color: 'red',
    process : function(){
        return "process"
    }
}
// You can use the Car object as a prototype to create another object
let ElectricCar = Object.create(Car);
// console.log(ElectricCar);
// console.log(ElectricCar.model);
// console.log(ElectricCar.process());

let superCar1 = Object.create(Car);
// override parent object values
let superCar2 = Object.create(Car, {model:{value:"Jaguar"}, color:{value:"black"}, process:{value: () => "supercar2 process"}});
console.log(superCar1);
console.log(superCar2.process());



// 5. Using javascript classes

// ECMAScript 6 introduced the class keyword to create classes in JavaScript. Now you can use the class attribute to create 
// a class in JavaScript instead of a function constructor, and use the new operator to create an instance.

class CarClass {

    constructor(maker, price) {
        this.maker = maker;
        this.price = price;
    }

    getInfo() {
        console.log(this.maker + " costs : " + this.price);
    }
}

var car1 = new CarClass("BMW", 100);
// car1.getInfo();
var car2 = new CarClass("Audi", 150);
// car2.getInfo();
console.log('promise js');
// https://www.w3schools.com/js/js_promise.asp

// Promise is javascript object.
// Promise constructer function takes resolver as callback function
// Again resolver function takes two callbacks (resolve and reject)

let p = new Promise(function(){});


// Types of promise states (3)
// 1. pending
// 2. fulfilled
// 3. rejected


// whenever we create a promise it's said to be in `pending` state
// whenever we call resolve or success function inside promise callback it's said to be in `fulfilled` state
// whenever we call reject or error function inside promise callback its said to be in `rejected` state

// The Promise object supports two properties: state and result.
// While a Promise object is "pending" (working), the result is undefined.
// When a Promise object is "fulfilled", the result is a value.
// When a Promise object is "rejected", the result is an error object.

// You cannot directly access the Promise properties state and result.
// You must use a Promise method to handle promises.


let callback = (resolve,reject) => {
    let login = false;
    if(login){
        resolve('success');
    } else {
        reject('fail');
    }
}

let promiseObj  = new Promise(callback);

console.log(promiseObj);


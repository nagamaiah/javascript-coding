

// Synchronous : As the name suggests synchronous means to be in a sequence, i.e. every statement of the code gets executed 
// one by one. So, basically a statement has to wait for the earlier (or) previous statement to get executed or completed
// Synchronous - Sequential and blocking code execution

// Asynchronous code execution allows to execution next instructions immediately and doesn't block the flow 
// because of previous instructions. Instructions in asynchronous code can execute in parallel.
// Asynchronous is a non-blocking architecture, which means it doesn’t block further execution while one or more 
// operations are in progress.
// Asynchronous - Paraller and non-blocking code execution

// Async is multi-thread, which means operations or programs can run in parallel. Sync is single-thread, 
// so only one operation or program will run at a time.
// Async is non-blocking, which means it will send multiple requests to a server. Sync is blocking — 
// it will only send the server one request at a time and will wait for that request to be answered by the server.

// Callback and Higher Order Function
// a fuction which is passed as an arugment to another function is called callback function.
// a callback function can run after another function has finished
// a fuction which receives a function as an argument or returns a function is called higher order function


function sum(a,b,callback){
    setTimeout(() => {
        // console.log(a+b);
        var total = a+b;
        callback(total)
    }, 1000);
     
}

let result = sum(5,5,square);

function square(r)
{
    // console.log(r*r);
}



let list5 = [1,2,3,4,5]

let res = list5.map(sqare)
// console.log(res);

function sqare(element,index,arr){
    return element*element;
}




// We achieved asynchronous code execution here using setTimeout function

function sum(){
    let sum = 0;
    for (let index = 0; index < 1000000000; index++) {
        sum = sum+index;
    }
    return sum;
}

setTimeout(() => {
    console.log(sum());
}, 2000);

console.log('oneee');

console.log('twooo');
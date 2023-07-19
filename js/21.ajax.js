console.log('ajax js');

// AJAX - Asynchronous Javascript And XML
// AJAX helps in fetching data asynchronously (without refreshing page) from a web server or API

// XMLHttpRequest (XHR) objects are used to interact with servers.
// You can retrieve data from a URL without having to do a full page refresh. 
// This enables a Web page to update just part of a page without disrupting what the user is doing.

// JS built-in constructor function to interact with servers and api's -> XMLHttpRequest

// let xhr = new XMLHttpRequest();
// xhr.open(method, URL, [async, user, password])

// ex api url -> https://restcountries.com/v3.1/all

// Instance properties are
// 1. XMLHttpRequest.readyState
// 2. XMLHttpRequest.response
// 3. XMLHttpRequest.responseText
// 4. XMLHttpRequest.responseType
// 5. XMLHttpRequest.responseURL
// 6. XMLHttpRequest.responseXML
// 7. XMLHttpRequest.status
// 8. XMLHttpRequest.statusText

// Instance methods are
// 1. XMLHttpRequest.open()
// 2. XMLHttpRequest.send()
// 3. XMLHttpRequest.abort()
// 4. XMLHttpRequest.getAllResponseHeaders()

// Events
// 1. abort or onabort
// 2. error or onerror
// 3. load or onload
// 4. loadend or onloadend
// 5. loadstart or onloadstart
// 6. progress or onprogress
// 7. readystatechange or onreadystatechange
// 8. timeout or ontimeout

// Xhr states
// UNSENT = 0; // initial state
// OPENED = 1; // open called
// HEADERS_RECEIVED = 2; // response headers received
// LOADING = 3; // response is loading (a data packet is received)
// DONE = 4; // request complete



// let xhr = new XMLHttpRequest()

// xhr.open("GET","sample.txt")
// xhr.send()
// xhr.addEventListener("load", function(){
//     // console.log(xhr.status)
//     // console.log(xhr.statusText)
//     // console.log(xhr.response)
//     // console.log(xhr.responseText)

// })

// console.log("afterXhr");


// Access-Control-Allow-Origin is a CORS header. CORS, or Cross Origin Resource Sharing,
// Origin is not just the hostname, but a combination of port, hostname and scheme, such as - http://mysite.example.com:8080/
// Cross-Origin request are always controlled by CORS (Cross Origin Resource Sharing)
// 


// let xhrUser = new XMLHttpRequest()
// xhrUser.open("GET","http://localhost/ajax/user.json")
// xhrUser.setRequestHeader('Access-Control-Allow-Origin', '*');
// xhrUser.send()
// xhrUser.onload = function(){
//     // console.log(xhr.status)
//     // console.log(xhr.statusText)
//     console.log(xhrUser.response)
//     // console.log(xhr.responseText)

// };

let requestObject = new XMLHttpRequest()
let list = document.getElementById('user-list')

requestObject.open("get","info.json")
requestObject.send()
requestObject.onload = function(){

    if(requestObject.status === 200){
        // console.log(requestObject.status)
        // console.log(requestObject.statusText)
        // console.log(typeof requestObject.responseText) // string
        // console.log(typeof JSON.parse(requestObject.responseText)) // object
        let result = JSON.parse(requestObject.responseText)
       
        result.forEach(function(element,index,arrayObj){
            // console.log(element);
            // console.log(index);
            // console.log(arrayObj);
            
            // return "some" // forEach always returns undefined
        });

        result.map((element,index,arrObj) => {
            // console.log(element);
            // console.log(index);
            // console.log(arrObj);

            let listElement = document.createElement('li')
            listElement.innerHTML = element.name
            // console.log(listElement);
            list.append(listElement)
        });

    } else {
        console.log(requestObject.statusText);
    }
}


// let xhrObject = new XMLHttpRequest();
// xhrObject.open('get', 'http://localhost/ajax/index.php');
// xhrObject.send()
// xhrObject.onload = () => {
//     let res = JSON.parse(xhrObject.response);
//     console.log(res);
// }




// let http = new XMLHttpRequest();
// let params = 'orem=ipsum&name=binny';
// http.open('POST', 'http://localhost/ajax/index.php', true);

// //Send the proper header information along with the request
// http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

// http.onreadystatechange = function() {//Call a function when the state changes.
//     if(http.readyState == 4 && http.status == 200) {
//         let res = JSON.parse(http.response);
//         console.log(res);
//     }
// }
// http.send(params);




// let httpXhr = new XMLHttpRequest();
// let data = {
//     'name' : 'nagggg',
//     'age' : 23
//     }

// httpXhr.open('POST', 'http://localhost/ajax/index.php', true);

// //Send the proper header information along with the request
// // httpXhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
// httpXhr.setRequestHeader('Content-Type', 'application/json');
// httpXhr.responseType = 'json';

// httpXhr.onreadystatechange = function() {//Call a function when the state changes.
//     if(httpXhr.readyState == 4 && httpXhr.status == 200) {
//         console.log(httpXhr.response);
//     }   
// }
// httpXhr.send(JSON.stringify(data));



// let xhrObj = new XMLHttpRequest();

// let json = JSON.stringify({
//   name: "John",
//   surname: "Smith"
// });
// xhrObj.open("post", 'http://localhost:80/ajax/post.php')
// xhrObj.responseType = 'json';

// xhrObj.onload = () => {
//     console.log(xhrObj.response);
// }
// xhrObj.send(json);




// We achieved asynchronous code execution here using setTimeout function

// function sum(){
//     let sum = 0;
//     for (let index = 0; index < 1000000000; index++) {
//         sum = sum+index;
//     }
//     return sum;
// }
// setTimeout(() => {
//     console.log(sum());
// }, 2000);
// console.log('oneee');
// console.log('twooo');




console.log('fetch api');

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// fetch() is javascript window object built-in method
// we can make a http request to server using fetch api method
// fetch() will return a promise object. If we want to catch or get promise result or error we need to use then() and catch() methods
// The fetch() method is modern and versatile

// basic syntax
// let promise = fetch(url, [options])


// ex api url -> https://restcountries.com/v3.1/all

// Response provides multiple promise-based methods to access the body in various formats:

// response.text() – read the response and return as text,
// response.json() – parse the response as JSON,
// response.formData() – return the response as FormData object.
// response.blob() – return the response as Blob (binary data with type),
// response.arrayBuffer() – return the response as ArrayBuffer (low-level representation of binary data),
// additionally, response.body is a ReadableStream object


// let countries = fetch('https://restcountries.com/v3.1/name/india', {});
// countries.then(function(response){
//   // console.log(response); // returns a promise
//   // console.log(typeof response); // object
//   return response.json(); // returns a promise
// }).then((json) => {
//   console.log(json);
// });

// countries.catch(function(error){
//   console.log(`error reached`);
//   console.log(error);
// });





let emailList =  document.querySelector("#fetch-users")
let p = fetch("https://jsonplaceholder.typicode.com/users",{})
.then(response => {
    if(response.ok){
        // console.log(response.status); //200
        return response.json() // convert to js object
    } else {
        console.log(response.status);
    }
})
.then(result => {
    // console.log(result)

    result.map((element,index,arrObj) => {
        let listElement = document.createElement('li')
        listElement.innerText = element.email
        console.log(listElement);
        emailList.append(listElement)
    });

})
.catch(error => {
    console.log("error reached");
    console.log(error)
})
// console.log(p);



let postOptions = {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }
  
fetch('https://jsonplaceholder.typicode.com/posts', postOptions)
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.log(error))
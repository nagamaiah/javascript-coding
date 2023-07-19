console.log('form-handling.js');


let countries =  [ 
    { "text": "Afghanistan", "value": "AF" },
    { "text": "Åland Islands", "value": "AX" },
    { "text": "Albania", "value": "AL" },
    { "text": "Algeria", "value": "DZ" },
    { "text": "American Samoa", "value": "AS" },
    { "text": "Andorra", "value": "AD" },
    { "text": "Angola", "value": "AO" },
    { "text": "Bahrain", "value": "BH" },
    { "text": "Bangladesh", "value": "BD" },
    { "text": "Bhutan", "value": "BT" },
    { "text": "Bolivia", "value": "BO" },
    { "text": "Bosnia and Herzegovina", "value": "BA" },
    { "text": "Christmas Island", "value": "CX" },
    { "text": "Cocos (Keeling) Islands", "value": "CC" },
    { "text": "Colombia", "value": "CO" },
    { "text": "Comoros", "value": "KM" },
    { "text": "Cyprus", "value": "CY" },
    { "text": "Czech Republic", "value": "CZ" },
    { "text": "Denmark", "value": "DK" },
    { "text": "Djibouti", "value": "DJ" },
    { "text": "Dominica", "value": "DM" },
    { "text": "Dominican Republic", "value": "DO" },
    { "text": "Ecuador", "value": "EC" },
    { "text": "Egypt", "value": "EG" },
    { "text": "Guam", "value": "GU" },
    { "text": "Guatemala", "value": "GT" },
    { "text": "Honduras", "value": "HN" },
    { "text": "Hong Kong", "value": "HK" },
    { "text": "Hungary", "value": "HU" } 
];

let options = '';
(() => {
let countryDropdown = document.querySelector('#country');
countries.forEach(obj => {
    options += `<option value="${obj.value}">${obj.text}</option>`
});
countryDropdown.innerHTML = options;
})();




let userForm = document.querySelector('#user-form');
userForm.addEventListener('submit', function(e){
    e.preventDefault();
    let data = new FormData(this)
    console.log(data)
});

// $("#user-form").submit((e) => {
//     e.preventDefault();
//     let userData = $("#user-form").serialize();
//     let userDataArr = $("#user-form").serializeArray();
//     console.log(userData);
//     console.log(userDataArr);
//     return;
// });

// $("#user-form").on('submit', (e) => {
//     e.preventDefault();
//     let userData = $("#user-form").serialize();
//     let userDataArr = $("#user-form").serializeArray();
//     console.log(userData);
//     console.log(userDataArr);
//     return;
// });

// function formSubmit(event){
//     event.preventDefault();
//     let userData = $("#user-form").serialize();
//     let userDataArr = $("#user-form").serializeArray();
//     console.log(userData);
//     console.log(userDataArr);
//     return;
// }

let formSubmit = (event) => {
    event.preventDefault();
    let userData = $("#user-form").serialize();
    let userDataArr = $("#user-form").serializeArray();
    console.log(userData);
    console.log(userDataArr);
    return;
}


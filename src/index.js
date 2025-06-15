const formEntry = document.getElementById("formEntry");
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const statusInput = document.getElementById("statusInput");
const emailInput = document.getElementById("emailInput");
const tableBody = document.getElementById("tableBody");

let inputArray = [];
let inputId = 1;

formEntry.addEventListener("submit", function(e){
    e.preventDefault();

   const name = nameInput.value;
   const age = ageInput.value;
   const status = statusInput.value;
   const email = emailInput.value;

   console.log({GuestName: name, guestAge: age, guestStatus: status, guestEmail: email});

//    validating inputs
    if( age <= 0){
        alert('please enter correct inputs')
        return;
    }

    if(true){
        inputArray.push(name, age, status, email)
    }
    
});

// Accessing HTML document using a DOM selector 
const formEntry = document.getElementById("formEntry");
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const statusInput = document.getElementById("statusInput");
const emailInput = document.getElementById("emailInput");
const tableBody = document.getElementById("tableBody");

let inputArray = [];
let inputId = 1;

//  function to add eventlistener
formEntry.addEventListener("submit", function(e){
    e.preventDefault();

   const name = nameInput.value;
   const age = ageInput.value;
   const status = statusInput.value;
   const email = emailInput.value;

   console.log({GuestName: name, guestAge: age, guestStatus: status, guestEmail: email});

//  validating inputs:

    if( age <= 0){
        alert('please enter correct inputs')
        return;
    }

    // Limiting the guest list to 10 people 
        if(inputArray.length >= 10){
            alert('List is full')
            return;
        }

        inputArray.push({
            id: inputId++, nameInput: name, ageInput: age, statusInput: status, emailInput: email, rsvp: "Not Attending"
        })
        renderFormInput();

    formEntry.reset();
});

//  function to rendor info 
    function renderFormInput(){
        tableBody.innerHTML = "";

        inputArray.forEach(item =>{
            tableBody.innerHTML += `
                    <tr>
                        <th>${item.id}</th>
                        <td>${item.nameInput}</td>
                        <td>${item.ageInput}</td>
                        <td>${item.statusInput}</td>
                        <td><a href="mailto:${item.emailInput}">${item.emailInput}</a></td>
                        <td>
                            <span>${item.rsvp}</span>
                            <button onclick="toggleRSVP(${item.id})" class="rsvbButton">
                                Toggle RSVP
                            </button>
                        </td>
                        <td>
                            <button onclick="deleteGuest(${item.id})" class="deleteButton">Delete</button>
                        </td>
                    </tr>
            `
        })
     }

// function to delete guest
     function deleteGuest(id){
        inputArray = inputArray.filter (item => item.id !== id);
        renderFormInput();
     }

// function to add rsvp toggle
     function toggleRSVP(id){
        inputArray = inputArray.map(item => {
            if(item.id === id){
                item.rsvp = item.rsvp === "Attending" ? "Attending" : "Attending";
            }
            return item;
        })
            renderFormInput();
     }

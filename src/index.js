// Accessing HTML document using a DOM selector 
const formEntry = document.getElementById("formEntry");
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const statusInput = document.getElementById("statusInput");
const emailInput = document.getElementById("emailInput");
const tableBody = document.getElementById("tableBody");

let inputArray = [];

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
            alert('list can only hold a max of 10 guests')
            return;
        }

        inputArray.push({
            nameInput: name, ageInput: age, statusInput: status, emailInput: email, rsvp: ""
        })
        renderFormInput();

    formEntry.reset();
});

//  function to rendor info 
    function renderFormInput(){
        tableBody.innerHTML = "";

        inputArray.forEach((guest, idx) =>{
            tableBody.innerHTML += `
                    <tr>
                        <th>${idx + 1}</th>
                        <td>${guest.nameInput}</td>
                        <td>${guest.ageInput}</td>
                        <td>${guest.statusInput}</td>
                        <td><a href="mailto:${guest.emailInput}">${guest.emailInput}</a></td>
                        <td>
                            <span>${guest.rsvp}</span>
                            <button onclick="toggleRSVP(${guest.idx})" class="rsvbButton">
                                Toggle RSVP
                            </button>
                        </td>
                        <td>
                            <button onclick="deleteGuest(${idx})" class="deleteButton">Delete</button>
                        </td>
                    </tr>
            `
        })
     }

// function to add rsvp toggle
     function toggleRSVP(idx){
        inputArray = inputArray.map(guest => {
            if(guest.idx === idx){
                guest.rsvp = guest.rsvp === "false" ? "not attending" : "attending";
            }
            return guest;
        })
            renderFormInput();
     }

// function to add edit button
    //  function editGuest(id){
        
    //  }

// function to delete guest
    //  function deleteGuest(id){
    //     inputArray = inputArray.filter (item => item.id !== id);
    //     renderFormInput();
    //  }

    window.deleteGuest = function(idx) {
      inputArray.splice(idx, 1);
      renderFormInput();
    }

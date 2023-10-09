let myForm = document.getElementById('my-form');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let mssg = document.querySelector('.msg');
let userList = document.getElementById('users');

//Listen for Form Submit
myForm.addEventListener('submit' , onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === "" || emailInput.value === ""){
        //Display an error message
        mssg.classList.add('error');
        mssg.textContent = 'Please enter all fields';

        // Remove error after 3 seconds
        setTimeout(() => mssg.remove(), 3000);
    }else{
        let li = document.createElement('li');
        let details = document.createTextNode(`${nameInput.value} : ${emailInput.value}`);
        li.appendChild(details);
        userList.appendChild(li);

        //Clear Fields
        nameInput.value = '';
        emailInput.value = '';
    }
}

function saveToLocalStorage(event){
    event.preventDefault();

    //get user input values
    let name = event.target.name.value;
    let email = event.target.email.value;

    let user = {
        name,
        email
    };
    localStorage.setItem(user.name , JSON.stringify(user));
}
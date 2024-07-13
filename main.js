'use strict';

// get elements
const mainSection = document.getElementById('main-section')
const firstNameError = document.getElementById('error-first-name')
const firstName = document.getElementById('first-name-input')
const lastName = document.getElementById('last-name-input')
const email = document.getElementById('email-input')
const message = document.getElementById('message-input')
const lastNameError = document.getElementById('error-last-name')
const emailError = document.getElementById('error-email')
const notValidEmail= document.getElementById('error-not-valid-email')
const listError = document.getElementById('error-list')
const messageError = document.getElementById('error-message')
const consentError = document.getElementById('error-consent')
const successMessage = document.getElementById('success')
const submitBtn = document.getElementById('form-btn')
const consentCheckBox = document.getElementById('consent-checkbox')
const successBtn = document.getElementById('success-btn')
const overlay = document.querySelector('.overlay')
const checkBoxs =[]
const options =[]

for(let i =0; i < 2; i++){
    checkBoxs.push(document.getElementById('list-checkbox'+(i+1)));
    options.push(document.querySelector('.option'+(i + 1)))
}
console.log(checkBoxs, options)

// put the elements in an array
const elements = [firstName, lastName, email, message]
// create an array to store the errors
const errors = [firstNameError, lastNameError, emailError, messageError]

submitBtn.addEventListener('click', function checkForEmptyInput (){
    for(let i = 0; i < elements.length; i++){
        if (elements[i].value === '') {
            errors[i].classList.remove('hidden')
        }else if(elements[i].value !== ''){
            errors[i].classList.add('hidden')
        }
    }
    // check if the email is valid
    if (email.value !== '') {
        if (email.value.includes('@') && email.value.includes('.')) {
            notValidEmail.classList.add('hidden')
        }else{
            notValidEmail.classList.remove('hidden')
        }
    }
    // check if list option selected
    if (checkBoxs[0].checked === true || checkBoxs[1].checked === true) {
        listError.classList.add('hidden')
    }else{
        listError.classList.remove('hidden')
    }

    // check if consent is granted
    if (consentCheckBox.checked === true) {
        consentError.classList.add('hidden')
    }else{
        consentError.classList.remove('hidden')
    }

    // check if all errors are hidden
    if (errors.every(error => error.classList.contains('hidden')) && notValidEmail.classList.contains('hidden') && listError.classList.contains('hidden') && consentError.classList.contains('hidden')){
        successMessage.classList.remove('hidden')
        overlay.classList.remove('hidden')
    }


}) 

for(let i = 0; i < options.length; i++){
    options[i].addEventListener('click', function checkForSelected (){
        checkBoxs[i].checked = true
        options[i].classList.add('selected')
        i === 0 ? options[1].classList.remove('selected') : options[0].classList.remove('selected')
    })
}

successBtn.addEventListener('click', function(){
    successMessage.classList.add('hidden')
    overlay.classList.add('hidden')
})
const emailInput = document.querySelector('.email-input');
const errorText = document.querySelector('.error-text')
const submitButton = document.querySelector('button')
const errorIcon = document.querySelector('.error-icon')

errorText.style.color = 'red'


submitButton.addEventListener('click', ()=>{
const emailAddress = emailInput.value.trim()
console.log(emailAddress)

if (!emailInput.checkValidity() || emailAddress == ''){
    errorText.classList.remove('hidden')
    emailInput.classList.add('invalid-input')
    errorIcon.classList.remove('hidden')
}else{
    errorText.classList.add('hidden')
    emailInput.classList.remove('invalid-input')
    errorIcon.classList.add('hidden')
}

})

// form.addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent default form submission
  
//     const emailAddress = emailInput.value.trim();
//     const isValidEmail = validateEmail(emailAddress);
  
//     if (!isValidEmail) {
//       errorText.classList.remove('hidden');
//       emailInput.focus(); // Focus on the input for easier correction
//       return; // Prevent form submission if email is invalid
//     }
  
//     // Submit the form if the email is valid
//     this.submit();
//   });

classList.add('active');

const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message=error');
const responde = document.getElementById('responde');
const showError = ( input, errorElement, message) => {
    input.classList.add('invalid');
    errorElement.textContent = message;
    errorElement.style.display ='block';
};
const clearError = (input, errorElement) => {
    input.classList.remove('invalid');
    errorElement.style.display = 'none';
};
 form.addEventListener('submit, function(e)'); {
    emailError.preventDefault();
    let valid = true; 
    if (nameInput.value.trim() ==='')
 }

 {
    showError(nameInput, nameError 'Por favor, insira seu nome.');
    
 }


    



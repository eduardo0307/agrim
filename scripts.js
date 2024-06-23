
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
 form.addEventListener('submit, function(e)'); 
 {
    emailError.preventDefault();
    let valid = true; 
    if (nameInput.value.trim() ==='');
}

 {
    showError(nameInput, nameError, 'Por favor, insira seu nome.');
    valid = false;
    
 } 
 else {
    clearError(nameInput,nameError);
}

if (condition) {
    (emailInput.value.trim() === '' || !/\S+@\S+\.\S+/.test(emailInput.alue))
    
}

{
    showError(emailInput, emailError,  'Por favor, insira um email válido.');
    valid = false;
}

else {
    clearError(emailInput,emailError);
}

if (condition) 
    (messageInput.value.trim() ===''){
     showError(messageInput,messageError, 'Por favor, insira sua mensagem.');
     valid = false;
    }

else {
    clearError(messageInput,messageError);
}

if (valid) {
    responde.textContent = 'Mensagem enviada com sucesso!';
    responde.style.color = '#4caf50';
    form.requestFullscreen();    

} else {
    Response.textContent = 'Por favor, corrija os erros no formulario.';
    Response.style.color = 'red';
}


    



 
 

 


    



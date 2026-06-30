const form = document.querySelector('.contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

function isValidEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

form.addEventListener('submit', function(event){
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if(name.length === 0){
        event.preventDefault();
        alert('Please enter your name');
        nameInput.focus();
        return;
    }

    if(!isValidEmail(email)){
        event.preventDefault();
        alert('Please enter a valid email address with @ and .');
        emailInput.focus();
        return;
    }

    if(message.length < 15){
        event.preventDefault();
        alert('Describe your project');
        messageInput.focus();
    }
});

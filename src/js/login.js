initializeFirebase();
verifyLoginUser();

document.getElementById('login-button').addEventListener('click', event => {
    event.preventDefault();
    let email = document.getElementById('email-field').value;
    let password = document.getElementById('password-field').value;
    loginUser(email, password);    
})
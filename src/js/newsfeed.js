initializeFirebase();
document.getElementById('log-out-btn').addEventListener('click', event => {
    event.preventDefault();
    singOutUser();
    alert('¡Hasta la próxima Garnacha!');
    location.href = ('../index.html');
});
// Initialize Firebase //
window.initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyA2_g2xx4nNZIKuqwbaUwk3HaA4mEesgCM",
    authDomain: "garnachapp-labo.firebaseapp.com",
    databaseURL: "https://garnachapp-labo.firebaseio.com",
    projectId: "garnachapp-labo",
    storageBucket: "",
    messagingSenderId: "805982016843"
  });
}

window.newAccount = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(() => {
    alert('Registro completado');
    location.href = ('../index.html');
  })
  .catch((error) => {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorMessage);
      if (errorCode === 'auth/invalid-email') {
          alert('Por favor, ingresa un correo electrónico válido.');
        } else if (errorCode === 'auth/weak-password') {
          alert('Por favor, ingresa una contraseña.');
        } else if(errorCode === 'auth/email-already-in-use'){
          alert('Usuario ya registrado, por favor verifica tus datos.');
        }
    }); 
}

window.loginUser = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(() => {
    console.log("siii");
  })
  .catch((error) => {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
      alert('Por favor, verifica tu contraseña.');
    } else if (errorCode === 'auth/user-not-found' || errorCode === 'auth/invalid-email' || errorCode === 'auth/argument-error') {
      alert('Por favor verifica tu usuario o dirigete a Registrarme, donde podrás crear una nueva cuenta.');
    }
  });
}

window.onload = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      location.href = ('views/newsfeed.html');
      let displayName = user.displayName;
      let email = user.email;
      let emailVerified = user.emailVerified;
      let photoURL = user.photoURL;
      let isAnonymous = user.isAnonymous;
      let uid = user.uid;
      let providerData = user.providerData;
      // ...
    } else {
      // User is signed out.

    }
  });
}
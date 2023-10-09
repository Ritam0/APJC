const firebaseConfig = {
  apiKey: "AIzaSyAt7vxNRji2f89kHW59YJ2WVkqFeEx7rXs",
  authDomain: "apjc-b2247.firebaseapp.com",
  projectId: "apjc-b2247",
  storageBucket: "apjc-b2247.appspot.com",
  messagingSenderId: "944539529506",
  appId: "1:944539529506:web:5728e841fdcee6419f757b",
  measurementId: "G-1JJ4Q54PJB"
};

firebase.initializeApp(firebaseConfig);

function signInWithGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
    .then(function (result) {
      var user = result.user;
      console.log("User signed in with Google:", user);
      alert(user.displayName);
      alert(user.email);

      document.getElementById("login-btn").style.display = "none"

      localStorage.setItem("user_uid", user.uid);
      localStorage.setItem("user_name", user.email.split("@")[0]);
      localStorage.setItem("user_email", user.email);
      localStorage.setItem("user_photoURL", user.photoURL);


      // ================ For Contact Form ================
      localStorage.setItem("name", user.displayName);
      localStorage.setItem("email", user.email);
      // Add your custom logic after successful sign in

    })
    .catch(function (error) {
      console.log("Sign in with Google error:", error);
      // Handle sign in errors
    });
}

if (localStorage.getItem("user_name") != null && localStorage.getItem("user_photoURL") != null) {

  document.getElementById("login-btn").style.display = "none"
}


function gauth() {

  if (localStorage.getItem("user_name") != null && localStorage.getItem("user_photoURL") != null) {

    document.getElementById("login-btn").style.display = "none"
  }
  else {

    signInWithGoogle();
  }

}
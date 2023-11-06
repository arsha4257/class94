
var firebaseConfig = {
    apiKey: "AIzaSyB3cUL6MO-W1kXK5l3X61fV4ruj4-TWz8o",
    authDomain: "practiceactivivty.firebaseapp.com",
    databaseURL: "https://practiceactivivty-default-rtdb.firebaseio.com",
    projectId: "practiceactivivty",
    storageBucket: "practiceactivivty.appspot.com",
    messagingSenderId: "396546762942",
    appId: "1:396546762942:web:5a61b84cc1e7c0c00756ef"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  function adduser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose :"add user"
    });
  }
const firebaseConfig = {
    apiKey: "AIzaSyCYqilBc2ZFa91J6DqwOfndpZx7tD1qucM",
    authDomain: "practice-497b4.firebaseapp.com",
    databaseURL: "https://practice-497b4-default-rtdb.firebaseio.com",
    projectId: "practice-497b4",
    storageBucket: "practice-497b4.appspot.com",
    messagingSenderId: "773046147467",
    appId: "1:773046147467:web:bc9be07bcaf0b4120fb78e"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}


//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC-9wIUBc2tbM_NReFrpg6z9Cou7j50uuk",
  authDomain: "kwitter-673bc.firebaseapp.com",
  databaseURL: "https://kwitter-673bc-default-rtdb.firebaseio.com",
  projectId: "kwitter-673bc",
  storageBucket: "kwitter-673bc.appspot.com",
  messagingSenderId: "712559372722",
  appId: "1:712559372722:web:4ff8f90649bcf06935dcab"
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
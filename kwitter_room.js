
//ADD YOUR FIREBASE LINKS HERE
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
firebase.initializeApp = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
 function addRoom()
      {
            room_name = document.getElementById("room_name").value;
            
            firebase.database().ref("/").child(room_name).update({
                  purpose : "adding room name"
            });

            localStorage.setItem("room_name", room_name);

            window.location = "kwitter_room.html";
      }
      function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location = "kwitter_room.html";
      }
      function logout() {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location = "index.html";
      }

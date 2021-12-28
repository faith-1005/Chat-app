// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyB2wbRpVaUyPS_vb8rQgtMcE0z7AnrxWKU",
      authDomain: "kwitter1-27d05.firebaseapp.com",
      databaseURL: "https://kwitter1-27d05-default-rtdb.firebaseio.com",
      projectId: "kwitter1-27d05",
      storageBucket: "kwitter1-27d05.appspot.com",
      messagingSenderId: "779391148513",
      appId: "1:779391148513:web:e0e176e587c2417293b2a0"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

    function addRoom(){

      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({

            purpose:"adding room name"

      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

    }



    function getData() { firebase.database().ref("/").on('value', function(snapshot) 
    { 
          
      document.getElementById("output").innerHTML = ""; 
      snapshot.forEach(function(childSnapshot) 
      { childKey = childSnapshot.key; 
            Room_names = childKey; 
            console.log("Room Name - " + Room_names); 
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
            document.getElementById("output").innerHTML += row; 
      }); }); }

getData();


function redirectToRoomName(name){

console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";

}

function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
      
}
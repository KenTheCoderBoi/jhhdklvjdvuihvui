
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyAr7lc6boBAUinjs0oSoLW1MSgITiITHYo",
      authDomain: "meme-atob.firebaseapp.com",
      databaseURL: "https://meme-atob-default-rtdb.firebaseio.com",
      projectId: "meme-atob",
      storageBucket: "meme-atob.appspot.com",
      messagingSenderId: "429488617509",
      appId: "1:429488617509:web:9d23fc62185644ae0167cc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("username")
    document.getElementById("welcome_name").innerHTML = "welcome,"+user_name+"!"
    //phase 2
function addRoom() {
  room_name = document.getElementById("room_name").value
  firebase.database().ref("/").child(room_name).update({
    purpose:"joining a room boi"
  })
  localStorage.setItem("room_name",room_name)

  window.location = "kwitter_page.html"
}
//phase 3

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redivertToRoomname(this.id)'>#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML += row
      //End code
      });});}
      //phase 4
getData();
function redivertToRoomname(name) {
localStorage.setItem("room_name",name)
window.location = "kwitter_page.html"
}
function logout(){
localStorage.removeItem("room_name")
localStorage.removeItem("user_name")
window.location = "index.html"
}
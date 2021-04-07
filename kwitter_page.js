
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
room_name = localStorage.getItem("room_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      name = message_data['user']
      message = message_data['message']
      likes = message_data['likes']
      console.log(firebase_message_id)
      console.log(message_data)

      row_1 = "<h4>"+name+"   "+"<image class = 'user_tick' src = '1_L_uBUcOn1-NvGPQFZ4XlrQ (1).png'> </h4>"
      row_2 = "<h4 class = 'message_h4'>"+message+"</h4> "
      row_3 = "<button class = 'btn btn-warning' id="+firebase_message_id+  " value="+likes+" onclick = updatelike(this.id)>"
      row_4 = "<span class='glyphicon glyphicon-thumb-up'>likes:"+likes+"</span></button></hr>"
      row = row_1+row_2+row_3+row_4
      document.getElementById("output").innerHTML += row
//End code
      } });  }); }
function updatelike(message_id){
      button_id = message_id
      likes = document.getElementById(button_id).value
      updated_likes = Number(likes)+1
      firebase.database().ref(room_name).child(message_id).update({
            likes: updated_likes
      })
}
getData();
function logout(){
localStorage.removeItem("room_name")
localStorage.removeItem("user_name")
window.location = "index.html"
}


function send(){

msg = document.getElementById("message").value
firebase.database().ref(room_name).push({
      likes:0,
      message:msg,
      user:user_name
})
document.getElementById("message").value = ""
}
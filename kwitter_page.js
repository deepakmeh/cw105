//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBND1ONyb-aEzu24xkT0-pZ-zmc8cxdras",
      authDomain: "anant-8f69b.firebaseapp.com",
      databaseURL: "https://anant-8f69b-default-rtdb.firebaseio.com",
      projectId: "anant-8f69b",
      storageBucket: "anant-8f69b.appspot.com",
      messagingSenderId: "517751273272",
      appId: "1:517751273272:web:750251b10dfc5137d073cd"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(messege_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+"onclick='updateLike(thid.ad)'>";
span_with_tag = "<span class='glyphicon glyphicon_thumbs-up'"+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row; 
//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function update_likes(message_id){
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.likes(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            likes : update_likes
      });
}



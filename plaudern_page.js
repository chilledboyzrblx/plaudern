const firebaseConfig = {
    apiKey: "AIzaSyC7Ekxi6ZL9hcKzAfadb1YBE5qzbpsiMHI",
    authDomain: "plaudern-database.firebaseapp.com",
    databaseURL: "https://plaudern-database-default-rtdb.firebaseio.com",
    projectId: "plaudern-database",
    storageBucket: "plaudern-database.appspot.com",
    messagingSenderId: "448407541233",
    appId: "1:448407541233:web:96863acc6c74989735e050"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
    like_button = "<button class'btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";

    row = name_with_tag + message_with_tag + span_with_tag;
    document.getElementById("output").innerHTML += row;
//End code
 } });  }); }
getData();

function send(){
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
  });
  document.getElementById("msg").value = "";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}
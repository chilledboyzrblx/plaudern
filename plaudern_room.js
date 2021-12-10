var firebaseConfig = {
    apiKey: "AIzaSyC7Ekxi6ZL9hcKzAfadb1YBE5qzbpsiMHI",
    authDomain: "plaudern-database.firebaseapp.com",
    databaseURL: "https://plaudern-database-default-rtdb.firebaseio.com",
    projectId: "plaudern-database",
    storageBucket: "plaudern-database.appspot.com",
    messagingSenderId: "448407541233",
    appId: "1:448407541233:web:96863acc6c74989735e050"
};

// Initialize Firebase
var app = initializeApp(firebaseConfig);

function logout() {
    window.location = "index.html";
}

function addRoom() {
    room_name = document.getElementById("roomNameInput").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "plaudern_page.html";
}

function getData() {
    firebase.database().ref("/").on('value',
        function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
                row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
                //End code
            });
        });
}
getData();
function redirectToRoomName(){
    localStorage.setItem("room_name",room_name);
    
}
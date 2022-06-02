user_name=localStorage("user_name");
room_name=localStorage("room_name");

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name;
        message=msg;
        like:0;

    });
    document.getElementById("msg").value="";
}





// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIYEMHrUwzFiHTq03pJrQI0vZ8CLJXv1I",
  authDomain: "project-90883.firebaseapp.com",
  projectId: "project-90883",
  storageBucket: "project-90883.appspot.com",
  messagingSenderId: "919919289681",
  appId: "1:919919289681:web:9849dfd3c5761c4b53df70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
function addRoom(){
	room_name= document.getElementById("room_name").value;
	firebase.database().ref("/").child(room_name).update({purpose:"add room name"});
}
localStorage.setItem("room_name",room_name);
window.location="kwitter_room.html";

console.log("Room Name -"+Room_names);
row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'># "+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;

function reditectToRoomName(){
		console.log(name);
	localStorage.setItem("room_name",name);
	window.location="kwitter_room.html";
}
      //End code
      });});}
getData();
function updateLike(message_id){
    console.log("clicked on the like -"+message_id);
    button_id=message_id
    updateLike=Number(likes)+1;
    console.log(update_likes);
    console.log(update_likes);
    firebase.database().ref(room_name).child(message_id).update({like:update_likes});
    
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("kwitter.html");
}

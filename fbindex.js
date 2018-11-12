
function submitClick(i){
var person = prompt("Description");

//stores value from website in database
var firebaseRef = firebase.database().ref().child(i); //path to root object
firebaseRef.set(person); //set value to firebaseref

//update in database will update the webpage
var bigOne = document.getElementById('panela');
firebaseRef.on('value', snap =>bigOne.innerText = snap.val());

}

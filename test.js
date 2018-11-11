

var i = 0;
var person = prompt("Description");

//stores value from website in database
var firebaseRef = firebase.database().ref().child(i); //path to root object
i+=1;
var messageText = document.getElementById('obj').textContent;
firebaseRef.set(person); //set value to firebaseref
var firebaseRef = firebase.database().ref().child(i); //path to root object
var messageText1 = document.getElementById('obj1').textContent;
firebaseRef.set(person); //set value to firebaseref

i-=1;
//update in database will update the webpage
var bigOne = document.getElementById('obj1');
var dbRef = firebase.database().ref().child(i);
dbRef.on('value', snap =>g
bigOne.innerText = snap.val()
);
i+=1;

var bigTwo = document.getElementById('obj');
var dbRef = firebase.database().ref().child(i);
dbRef.on('value', snap =>
bigTwo.innerText = snap.val()
);

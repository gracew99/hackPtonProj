








var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submit");

function submitClick(){
  console.log("hello");
  var firebaseRef = firebase.database().ref(); //path to root object
  var messageText = mainText.value;
  firebaseRef.push().set(messageText); //set value to firebaseref
}


var ref = firebase.database().ref();

ref.on("value", function(snapshot) {
   console.log(snapshot.val());
}, function (error) {
   console.log("Error: " + error.code);
});


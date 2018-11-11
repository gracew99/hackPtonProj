








var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submit");



function submitClick(int){
  var firebaseRef = firebase.database().ref().child(int); //path to root object
  var messageText = mainText.value;
  firebaseRef.set(messageText); //set value to firebaseref
}

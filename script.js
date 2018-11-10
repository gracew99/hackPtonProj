document.getElementById("map").addEventListener("click", alert('Hello'));


function addMarker(){
alert('Hey');
var center = {
  lat: -34.397,
  lng: 150.64
};

 marker = new google.maps.Marker({
    position: center,
    map: document.getElementById(map)
  });

}

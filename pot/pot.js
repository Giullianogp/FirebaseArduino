var Firebase = require("firebase");
var five = require("johnny-five");

// Create a new reference of Firebase db
//You can obtain this chunk of code by going to your firebase dashboard and selecting "Add Firebase to your web app"
var config = {
    apiKey: "AIzaSyAm8qez6M3n1daD-1U-YG6R3F4QYOodtUw",
    authDomain: "smarthome-d6ce5.firebaseapp.com",
    databaseURL: "https://smarthome-d6ce5.firebaseio.com",
    projectId: "smarthome-d6ce5",
    storageBucket: "smarthome-d6ce5.appspot.com",
    messagingSenderId: "846625271201"
  };

Firebase.initializeApp(config);

var firebaseRef = Firebase.database().ref();

five.Board().on("ready", function() {
  var led = new five.Led(13);
  // Blink every half second
  led.blink(2000);
});

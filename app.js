 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAGZrqumHYFJhu-FqtgGMePe-e3NZZBn4Y",
    authDomain: "securitysystem-78ab8.firebaseapp.com",
    databaseURL: "https://securitysystem-78ab8.firebaseio.com",
    projectId: "securitysystem-78ab8",
    storageBucket: "securitysystem-78ab8.appspot.com",
    messagingSenderId: "119109846151"
  };
  firebase.initializeApp(config);
  database = firebase.database();

var ref = database.ref('distance');
ref.on('value', gotData, errData);   

function gotData(data) { 
 // console.log(data.val());
  var distance = data.val();
  // Grab the keys to iterate over the object
  var keys = Object.keys(distance);
  console.log(keys);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    // Look at each distance object!
    var distances = distance[key].distances;
    console.log(distances);
  }
}

function errData(err) {
 console.log('Error');
 console.log(err);
}
/* 
// get elements
const preObject = document.getElementById('SECURITY');
const ulList = document.getElementById('list');

//create references
const dbRefObject = firebase.database().ref().child('SECURITY');
const dbRefList = dbRefObject.child('states');

//sync changes
dbRefObject.on('value', snap => {
    preObject.innerText = JSON.stringify(snap.val(), null, 3);
});

//list changes
dbRefList.on('child_added', snap => console.log(snap.val()));

*/

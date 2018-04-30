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

var ref = database.ref("distance);
ref.on("value", gotData, errData);

function gotData(data) {
  var distance = data.val();
  // Grab the keys to iterate over the object
  var keys = Object.keys(distance);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    // Look at each fruit object!
    var distance = distance[key];
  }
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

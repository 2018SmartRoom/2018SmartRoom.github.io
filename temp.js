//Initialize Firebase
  var config = {
    apiKey: "AIzaSyCPAlQ0rX2XkBuc62zKuOqvLOwXLy3n_fo",
    authDomain: "separatetempcontroltest.firebaseapp.com",
    databaseURL: "https://separatetempcontroltest.firebaseio.com",
    projectId: "separatetempcontroltest",
    storageBucket: "separatetempcontroltest.appspot.com",
    messagingSenderId: "177653835432"
  };
  firebase.initializeApp(config);
// create object
const preObject = document.getElementById('humidity');
const preObject = document.getElementById('temperature');

//create references
const dbRefObject = firebase.database().ref().child('humidity');
const dbRefObject = firebase.database().ref().child('temperature');

//sync changes
dbRefObject.on('value', snap => {
    preObject.innerText = JSON.stringify(snap.val(), null, 3);
});
dbRefObject.on('value', snap => {
    preObject.innerText = JSON.stringify(snap.val(), null, 3);
});
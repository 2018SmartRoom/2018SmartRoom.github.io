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

var ref = firebase.database().ref();

ref.on("value", function(snapshot){
    output.innerHTML = JSON.stringify(snapshot.val(), null, 2);
});
// create object
//const preObject = document.getElementById('humidity');
//const preObject1 = document.getElementById('temperature');

//create references
//const dbRefObject = firebase.database().ref().child('humidity');
//const dbRefObject1 = firebase.database().ref().child('temperature');

//sync changes
//dbRefObject.on('value', snap => {
//    preObject.innerText = JSON.stringify(snap.val(), null, 3);
});
//dbRefObject1.on('value', snap => {
//    preObject1.innerText = JSON.stringify(snap.val(), null, 3);
//});

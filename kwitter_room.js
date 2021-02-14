
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyAXhj6YSxaRSR30BBzIJMT6uJvhTaMhEHo",
      authDomain: "kwitter-app-67ffe.firebaseapp.com",
      projectId: "kwitter-app-67ffe",
      storageBucket: "kwitter-app-67ffe.appspot.com",
      messagingSenderId: "1016704081023",
      appId: "1:1016704081023:web:3ca1b86438d60ad394334a",
      measurementId: "G-QZVN934275"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

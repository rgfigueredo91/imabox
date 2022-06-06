console.log('it works')
var firebaseConfig = {
  apiKey: "AIzaSyB-_3cJwipSHk92LPruNvEPd5ZXrNgAdHE",
  authDomain: "imago-rendering-studio.firebaseapp.com",
  databaseURL: "https://imago-rendering-studio-default-rtdb.firebaseio.com/",
  projectId: "imago-rendering-studio",
  storageBucket: "imago-rendering-studio.appspot.com",
  messagingSenderId: "1014080498693",
  appId: "1:1014080498693:web:167d2e1bde1d8998ea006c",
  measurementId: "G-EGER1EWKPX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var files = [];
	document.getElementById("files").addEventListener("change", function(e) {
	  files = e.target.files;
	  for (let i = 0; i < files.length; i++) {
		console.log(files[i]);
	  }
	});
	
	document.getElementById("send").addEventListener("click", function() {
	  //checks if files are selected
	  if (files.length != 0) {
		//Loops through all the selected files
		for (let i = 0; i < files.length; i++) {
		  //create a storage reference
		  var storage = firebase.storage().ref(files[i].name);
	
		  //upload file
		  var upload = storage.put(files[i]);
	
		  //update progress bar
		  upload.on(
			"state_changed",
			function progress(snapshot) {
			  var percentage =
				(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			  document.getElementById("progress").value = percentage;
			},
	
			function error() {
			  alert("error uploading file");
			},
	
			function complete() {
			  document.getElementById(
				"uploading"
			  ).innerHTML += `${files[i].name} uploaded <br />`;
			}
		  );
		}
	  } else {
		alert("No file chosen");
	  }
	});
	
	function getFileUrl(filename) {
	  //create a storage reference
	  var storage = firebase.storage().ref(filename);
	
	  //get file url
	  storage
		.getDownloadURL()
		.then(function(url) {
		  console.log(url);
		})
		.catch(function(error) {
		  console.log("error encountered");
		});
	
	}



/* Log Out for posts page*/

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";

import { getAuth, signOut} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ2tgXiFtl1j-JyL0vz3ihq4YqpjQ6-Ls",
  authDomain: "travel-blog-77d0f.firebaseapp.com",
  projectId: "travel-blog-77d0f",
  storageBucket: "travel-blog-77d0f.appspot.com",
  messagingSenderId: "578563502406",
  appId: "1:578563502406:web:bb538070abb7e8faa1f547"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

  
let btn_log_out =  document.getElementById('btn_log_out');
btn_log_out.addEventListener('click', function(){
	signOut(auth).then(() => {
		// Sign-out successful.
		alert('Log out success')
		window.location.replace("index.html");
	  }).catch((error) => {
		// An error happened.
	  });
})

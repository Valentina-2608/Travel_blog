/* Add posts */

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";

  import { getFirestore, collection, addDoc} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

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
  const db = getFirestore(app);

  let post_btn=document.getElementById('post_btn');
  post_btn.addEventListener('click', addPost);

  function addPost(event){
    let title=document.getElementById('title');
    let post_content=document.getElementById('post_content');
    let my_content=document.querySelector('my_content');
    const dbRef = collection(db, 'Posts')
    const data = {
        title: title.value,
        post_content:post_content.value
      };
     addDoc(dbRef, data)
      .then(()=>{
        alert('Post was added successfully')
     })
      .catch((error)=>{
       alert('Error')
    });
    event.preventDefault();
  }


  let clear_btn=document.getElementById('clear_btn');
  clear_btn.addEventListener('click', clearPost)
  function clearPost(){
    let title=document.getElementById('title');
    let post_content=document.getElementById('post_content');
    title.value='';
    post_content.value='';
  }
/* Show posts */

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";

  import { getFirestore, collection, onSnapshot} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

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
  const dbRef = collection(db, 'Posts')



  onSnapshot(dbRef, docsSnap => {
    docsSnap.forEach(doc => {
      let blog_posts=document.querySelector('.blog_posts');
      let new_post = document.createElement('div');
      new_post.classList.add('new_post')

      let new_post_title = document.createElement('div');
      new_post_title.classList.add('new_post_title')
      new_post_title.innerHTML = doc.data().title;

      let new_post_content = document.createElement('div');
      new_post_content.classList.add('new_post_content')
      new_post_content.innerHTML = doc.data().post_content

    
      new_post.appendChild(new_post_title);
      new_post.appendChild(new_post_content);

      blog_posts.appendChild(new_post);
     
     
    })
    
  })

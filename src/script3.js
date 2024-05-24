/* Add posts */

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";

  import { getFirestore, collection, addDoc, onSnapshot} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

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

  let my_content=document.querySelector('my_content');
  let post_btn=document.getElementById('post_btn');
  post_btn.addEventListener('click', addPost);

  function addPost(event){
    let title=document.getElementById('title');
    let post_content=document.getElementById('post_content');
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



    onSnapshot(dbRef, docsSnap => {
      docsSnap.forEach(doc => {
        console.log(doc.data().title);
        console.log(doc.data().post_content);
        let my_content=document.querySelector('.my_content');
        let new_post = document.createElement('div');
        new_post.classList.add('new_post')
  
        let new_post_title = document.createElement('div');
        new_post_title.classList.add('new_post_title')
        new_post_title.innerHTML = doc.data().title;
  
        let new_post_content = document.createElement('div');
        new_post_content.classList.add('new_post_content')
        new_post_content.innerHTML = doc.data().post_content

        let update_btn=document.createElement('button');
        update_btn.classList.add('update_btn');
        update_btn.innerHTML='Update';

        let delete_btn=document.createElement('button');
        delete_btn.classList.add('delete_btn');
        delete_btn.innerHTML='Delete';
        
        new_post.appendChild(new_post_title);
        new_post.appendChild(new_post_content);
        new_post.appendChild(update_btn);
        new_post.appendChild(delete_btn);

        my_content.appendChild(new_post);



      })
    })
  
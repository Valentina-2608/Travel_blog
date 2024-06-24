/* Add posts */

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";

  import { getFirestore, collection, addDoc, doc,onSnapshot, setDoc} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

  import { getStorage, ref, uploadBytes, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-storage.js";
 
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
  const dbRef = collection(db, 'Posts');
  const storage = getStorage();

  let my_content=document.querySelector('my_content');
  let post_btn=document.getElementById('post_btn');
  post_btn.addEventListener('click', addPost);

  function addPost(event){
    let post_btn=event.target;
    const dbRef = collection(db, 'Posts');
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
    setTimeout(()=>{
      location.reload()
    },1000)
     
   
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
        let my_content=document.querySelector('.my_content');
        let new_post = document.createElement('div');
        new_post.setAttribute("data-id",doc.id);
  
        let new_post_title = document.createElement('input');
        new_post_title.classList.add('new_post_title')
        new_post_title.value = doc.data().title;
  
        let new_post_content = document.createElement('textarea');
        new_post_content.classList.add('new_post_content')
        new_post_content.value = doc.data().post_content


        let update_btn=document.createElement('button');
        update_btn.classList.add('update_btn');
        update_btn.innerHTML = 'Update post';

        let delete_btn=document.createElement('button');
        delete_btn.classList.add('delete_btn'); 
        delete_btn.innerHTML = 'Delete post';

       
        let list_images=document.createElement('div');
        list_images.classList.add('list_images'); 

        new_post.appendChild(new_post_title);
        new_post.appendChild(new_post_content);
        new_post.appendChild(update_btn);
        new_post.appendChild(delete_btn);
        new_post.appendChild(list_images);
        my_content.appendChild(new_post);
      
        
      })
    })
   
   

 
   
    
    
    
    
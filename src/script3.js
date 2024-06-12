/* Add posts */

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";

  import { getFirestore, collection, addDoc, doc,onSnapshot,deleteDoc, updateDoc} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

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
        post_content:post_content.value,
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

  let show_posts=document.getElementById('show_posts');
  show_posts.addEventListener('click', showAllPosts)
  
  function showAllPosts(){
  
  onSnapshot(dbRef, docsSnap => {
      docsSnap.forEach(doc => {
        let my_content=document.querySelector('.my_content');
        let new_post = document.createElement('div');
        new_post.setAttribute("data-id",doc.id);
        console.log(doc.id)
  
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

        

        new_post.appendChild(new_post_title);
        new_post.appendChild(new_post_content);
        new_post.appendChild(update_btn);
        new_post.appendChild(delete_btn);
        my_content.appendChild(new_post);

        let delete_btns = document.querySelectorAll('.delete_btn');
        for(let i=0; i< delete_btns.length; i++){
           delete_btns[i].addEventListener('click',deletePost);
        }
       
        setTimeout(()=>{
          location.reload()
        },1000)
       
      })
    })
  
  }
    function deletePost(event){
      event.stopPropagation();
      let delete_btn=event.target;
      let delete_btn_parent = delete_btn.parentElement;
      let id=delete_btn_parent.getAttribute("data-id");
      const dbRef=doc(db, 'Posts',id);
      deleteDoc(dbRef)
      .then(()=>{
        alert('Post was deleted successfully')
     })
      .catch((error)=>{
       alert('Error')
    });
      
      


    }


  
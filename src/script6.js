/* Update posts */

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

       

        let update_btns = document.querySelectorAll('.update_btn');
        for(let i=0; i< update_btns.length; i++){
           update_btns[i].addEventListener('click', updatePost);
        }


        let delete_btns = document.querySelectorAll('.delete_btn');
        for(let i=0; i< delete_btns.length; i++){
        delete_btns[i].addEventListener('click',deletePost);
          }
       
      })
    })
  
   

  
    function updatePost(event){
      event.stopPropagation();
      let update_btn=event.target;
      let update_btn_parent = update_btn.parentElement;
      let id=update_btn_parent.getAttribute("data-id");
      let post_title = update_btn_parent.children[0].value;
      let post_info = update_btn_parent.children[1].value;
      console.log(post_title);
      console.log(post_info);
      console.log(update_btn_parent)
      const dbRef=doc(db, 'Posts',id);
      const data={
        title:post_title,
        post_content:post_info
      }
      updateDoc(dbRef,data)
      .then(()=>{
        alert('Post was updated successfully')
     })
      .catch((error)=>{
       alert('Error')
    });
    setTimeout(()=>{
      location.reload()
    },1000)
     
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
  setTimeout(()=>{
    location.reload()
    },1000)

}



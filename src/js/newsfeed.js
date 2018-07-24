initializeFirebase();
let db = firebase.firestore();

const printUserPost = () => {
  const postRef = db.collection('posts');
  postRef.get()
    .then(element => {
      let nextPost = '';
      let i = 0;

      element.forEach(post => {
        nextPost += `<div class="container-fluid">
        <div class="card">
          <div class="card-text-sm">
          <span mb-4 mt-3>${post.data().postInput}</span>
          </div>
          <div class="card-body-sm individual-post">
          <strong>${post.data().username}</strong>
          <span class="card-text font-color">
          <i class="fas fa-grin-tongue ml-4" title="Me apetece"></i>
          <i class="fas fa-share ml-4" title="Compartir"></i>
          <i class="fas fa-trash-alt ml-4" title="Eliminar" onclick="deletePost()"></i>
      </span>
          </div>
        </div>
    </div>`
        i++;
      });
      document.getElementById('list-post').innerHTML = nextPost;
    })
};
printUserPost();

document.getElementById('user-post-btn').addEventListener('click', event => {
  event.preventDefault();
  let newPost = document.getElementById('user-post').value;
  addingDataToNewsfeed(newPost);
});

document.getElementById('log-out-btn').addEventListener('click', event => {
  event.preventDefault();
  signOutUser();
  alert('¡Hasta la próxima Garnacha!');
  location.href = ('../index.html');
});
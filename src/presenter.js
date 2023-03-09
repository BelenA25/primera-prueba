import { Post } from './post'

const formPost = document.querySelector("#publicar-post");
const div = document.querySelector("#resultado-div");

formPost.addEventListener("submit", (event) => {
  event.preventDefault();

  const post = new Post (document.getElementById("titulo-post"), document.getElementById("contenido-detallado")); 
  post.mostrarPost();
});

import guardar from './guardar.js'

const formPost = document.querySelector("#publicar-post");
const div = document.querySelector("#resultado-div");

formPost.addEventListener("submit", (event) => {
  event.preventDefault();

  guardar();
});

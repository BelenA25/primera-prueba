import { Post } from './post'

function guardar(){
    if(document.getElementById("titulo-post").value == ''){
        alert("No es posible publicar un post sin titulo");
    }
    else{
        const post = new Post (document.getElementById("titulo-post"), document.getElementById("contenido-detallado")); 
        post.mostrarPost();
    }
    
}
export default guardar;
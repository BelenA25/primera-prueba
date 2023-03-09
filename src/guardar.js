import { Post } from './post'

function guardar(){
    if(document.getElementById("titulo-post").value == ''){
        alert("No es posible publicar un post sin titulo");
    }
    else{
        if (document.getElementById("titulo-post").value.length <= 50){
            if(document.getElementById("contenido-detallado").value.length <= 150){
                const post = new Post (document.getElementById("titulo-post"), document.getElementById("contenido-detallado")); 
                post.mostrarPost();
            }
            else{
                alert("No es posible publicar un post con detalle de mas de 150 caracteres");
            }
        }
        else
        {
            alert("No es posible publicar un post con titulo de mas de 50 caracteres");
        }
    }
}
export default guardar;
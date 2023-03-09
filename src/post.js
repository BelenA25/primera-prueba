export class Post {
    constructor(titulo, detalle) {
        this.titulo = titulo;
        this.detalle = detalle;
    }

    aniadirDetalle(detalle) {
        this.detalle = detalle;
    }
    getTitulo(){
        return this.titulo;
    }
    getDetalle(){
        return this.detalle;
    }
    mostrarPost(){
        document.getElementById("resultado-div").innerHTML = "Titulo del post: " + this.titulo.value;
        document.getElementById("resultado2-div").innerHTML = "Contenido detallado del post: " + this.detalle.value;
         
    }
}
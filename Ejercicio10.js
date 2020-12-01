"use strict;"
class Noticia {

    constructor() {
		var url="http://newsapi.org/v2/top-headlines?" +
          "country=us&" +
          "apiKey=f73146cb78d245e199586af1bce3ebad";
	}
     cargarDatos(){
		 $.ajax({
            dataType: "json",
            url: this.url,
            method: "GET",
            success: function(datos){
                $("pre").text(JSON.stringify(datos, null, 2));
                console.log(datos);
                datos.articles.forEach(function (articulo) {
                    var string = "";
                    string += "<article>";
                    string += "<h3>" + articulo.title + "</h3>";
                    string += "<p> Descripción:" + articulo.description + "</p>";
                    string += "<p>" + articulo.content + "</p>";
                    string += "<p>Imagen del articulo</p><img src='" + articulo.image + "'/>";
                    string += "<p>Nombre de las fuentes: " + articulo.source.name + "</p>";
                    string += "<a href='" + articulo.url + "'>Ver la noticia completa</a>";
                    string += "</article>";
                    $(string).appendTo("#noticias");
                });
            },
            error: function(){
                alert("No se puede cargar la noticia en este momento...");
            }   
        });
	 }
        
    }

var noticia = new Noticia();

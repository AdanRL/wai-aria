
$(document).ready( function(){
  
  $('#enviar').on('click', function(e) {
        e.preventDefault();
        var dataPost = $('#postId').serialize();
        var dataEmail = $('#email').serialize();
        var dataID = $('#id').serialize();
        var dataString = "";

        $(".nuevo").remove();
        if (dataPost != "postId="){
          dataString = dataString + "&" + dataPost;

        }
        if (dataEmail != "email="){

          dataString = dataString + "&" + dataEmail;

        }
        if (dataID != "id="){
          dataString = dataString + "&" + dataID;

        }

      $("#estado").text("ESTADO: Haciendo la petición al servidor. Puede tardar unos segundos...");
      $.ajax({
        type:  'GET',
        url:  "https://jsonplaceholder.typicode.com/comments?" + dataString,
        success: function(response){
          $("#estado").text("ESTADO: ¡Resultado de la petición recibida con éxito!");
          for (var i=0; i<response.length; i++) {
            //falta que haya saltos de línea
            var aux = "PostId: "+ response[i].postId +
            " ID: "  + response[i].id + 
            " Name: " + response[i].name + 
            " Email: " + response[i].email + 
            " Body: " + response[i].body;
            
            //Agregando nodos nuevos al DOM
            var newp = $("<p tabindex=\"0\" class=\"nuevo\"></p>").text(aux);
            console.log(newp);
            $("#datos").append(newp);
            
          }
          
        }
      });
    
    }); 
  
  
});




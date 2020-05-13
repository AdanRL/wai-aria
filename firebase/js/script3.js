
function registrar(){

  var database = firebase.database();
  var referencia = database.ref('Usuarios')  
  
  var Nombre = document.getElementById("nombre").value;
  var Contra = document.getElementById("contraseña").value;
  var Email = document.getElementById("email").value;
  var Edad = document.getElementById("edad").value;
  console.log(Nombre);
  console.log(Contra);
  console.log(Email);
  console.log(Edad);
  
  referencia.child(Nombre).set({
    Nombre: Nombre,
    Contraseña: Contra,
    email: Email,
    edad: Edad,
    });
  
  
  
}
//pregunta 3
function changeCoin() {
  
  var options1 = document.getElementsByName("Money1");
  var options2 = document.getElementsByName("Money2");
  var valor = document.getElementById("valor").value;
  var coin1,coin2;
  for(var i=0; i<options1.length; i++) {
    if( options1[i].checked ){
      coin1 = options1[i].value;
    }
  }
  for(var i=0; i<options1.length; i++) {
    if( options2[i].checked ){
      coin2 = options2[i].value;
    }
  }
  
  var result = 0;
  var string;
  switch (coin1) {
    case "Euros":
      if(coin2 == "Dolars"){
        result = valor * 1.10;
        document.getElementById('Cajasalida').value = result + "$";
      }
      else if(coin2 == "Yuan"){
        result = valor * 7.84;
        document.getElementById('Cajasalida').value = result + "¥";
      }
      else if(coin2 == "Rupias"){
        result = valor * 83.21;
        document.getElementById('Cajasalida').value = result + "₹";
      }
      else{
        result = valor;
        document.getElementById('Cajasalida').value = result + "€";
      }break;
    case "Dolars":
      if(coin2 == "Euros"){
        result = valor * 0.92;
        document.getElementById('Cajasalida').value = result + "€";
      }
      else if(coin2 == "Yuan"){
        result = valor * 7.10;
        document.getElementById('Cajasalida').value = result + "¥";
      }
      else if(coin2 == "Rupias"){
        result = valor * 76.59;
        document.getElementById('Cajasalida').value = result + "₹";
      }
      else{
        result = valor;
        document.getElementById('Cajasalida').value = result + "$";
      }break;
    case "Rupias":
      if(coin2 == "Euros"){
        result = valor * 0.012;
        document.getElementById('Cajasalida').value = result + "€";
      }
      else if(coin2 == "Dolars"){
        result = valor * 0.013;
        document.getElementById('Cajasalida').value = result + "$";
      }
      else if(coin2 == "Yuan"){
        result = valor * 0.093;
        document.getElementById('Cajasalida').value = result + "¥";
      }
      else{
        result = valor;
        document.getElementById('Cajasalida').value = result + "₹";
      }break;
      case "Yuan":
      if(coin2 == "Euros"){
        result = valor * 0.013;
        document.getElementById('Cajasalida').value = result + "€";
      }
      else if(coin2 == "Dolars"){
        result = valor * 0.014;
        document.getElementById('Cajasalida').value = result + "$";
      }
      else if(coin2 == "Rupias"){
        result = valor * 10.79;
        document.getElementById('Cajasalida').value = result + "₹";
      }
      else{
        result = valor;
        document.getElementById('Cajasalida').value = result + "¥";
      }break;
  }
}


//pregunta 4
function calcUser(user) {
  //***contenido de json***
  var empresa = {
    "usuarios":[
      {
        "nombre": "Pepe Benavente",
        "DNI": "1111111A",
        "fechaNacimiento":
          {
            "año": 1954,
            "mes": 1,
            "dia": 29
          }
        ,
        "fechaInicio":
          {
            "año": 2003,
            "mes": 3,
            "dia": 12
          }
        ,
        "plusProductividad": 20,
        "plusAntiguedad": 600,
        "sueldoBase": 1600
      },{
        "nombre": "Batman",
        "DNI": "222222A",
        "fechaNacimiento": 
          {
            "año": 1993,
            "mes": 8,
            "dia": 8
          }
        ,
        "fechaInicio": 
          {
            "año": 2015,
            "mes": 9,
            "dia": 8
          }
        ,
        "plusProductividad": 60,
        "plusAntiguedad": 0,
        "sueldoBase": 2800
      } 
    ],
    "calcDatos": function() {
      var fecha = new Date();
      var añosTrabajados = fecha.getFullYear() - empresa.usuarios[user].fechaInicio.año;

      var sueldoBase = empresa.usuarios[user].sueldoBase;
      var plusProd = (empresa.usuarios[user].plusProductividad * sueldoBase) / 100;  //!-- Valor variable -->
      var plusAntig = empresa.usuarios[user].plusAntiguedad; //!-- Valor fijo --
      var sueldo = sueldoBase + plusProd + plusAntig;

      console.log(sueldo);
      console.log(plusProd);
      console.log(añosTrabajados);
      document.getElementById('CajaSueldo').value = sueldo;

      var diaActual = fecha.getDate();
      var mesActual = fecha.getMonth();
      var anioActual = fecha.getFullYear();
      
      var diaNacimiento = empresa.usuarios[user].fechaNacimiento.dia;
      var mesNacimiento = empresa.usuarios[user].fechaNacimiento.mes;
      var anioNacimiento = empresa.usuarios[user].fechaNacimiento.año;
      
      var edad = anioActual - anioNacimiento;
      if(mesActual < mesNacimiento){
        edad = edad - 1;
      }
      else if(mesActual == mesNacimiento){
        if(diaActual < diaNacimiento){
          edad = edad - 1;
        }
      }
      
      document.getElementById('CajaEdad').value = edad;
    }
  }
  //*************************************

  empresa.calcDatos();
  
}


//pregunta 5
function contarDom() {
  
  var numeroDivs = document.getElementsByTagName('div').length;
  var numeroEnlaces = document.getElementsByTagName('a').length;
  var numeroh1 = document.getElementsByTagName('h1').length;
  var numeroh2 = document.getElementsByTagName('h2').length;
  var numeroh3 = document.getElementsByTagName('h3').length;
  var numeroP = document.getElementsByTagName('p').length;
  
  /*
  console.log('el numero de div de la página es: ');
  console.log(numeroDivs);
  console.log('el numero de enlaces de la página es: ');
  console.log(numeroEnlaces);
  console.log('el numero de encabezados h1 de la página es: ');
  console.log(numeroh1);
  console.log('el numero de encabezados h2 de la página es: ');
  console.log(numeroh2);
  console.log('el numero de encabezados h3 de la página es: ');
  console.log(numeroh3);
  console.log('el numero de parrafos de la página es: ');
  console.log(numeroP);
  */
  var numeroTotal = numeroDivs + numeroEnlaces + numeroh1 + numeroh2 + numeroh3 + numeroP
  //console.log(numeroTotal);
  document.getElementById('CajaCantidad').value = numeroTotal;
  document.getElementById('CajaDiv').value = numeroDivs;
  document.getElementById('CajaEnlaces').value = numeroEnlaces;
  document.getElementById('CajaH1').value = numeroh1;
  document.getElementById('CajaH2').value = numeroh2;
  document.getElementById('CajaH3').value = numeroh3;
  document.getElementById('CajaParra').value = numeroP;
  
}



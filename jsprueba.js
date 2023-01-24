function validaciones() {
  let x = document.forms["myForm"]["Name"].value;
  if (x == "") {
    alert("Rellene los campos por favor");
    return false;
  }
  let y = document.forms["myForm"]["apellidos"].value;
  if (y == "") {
    alert("Rellene apellidos por favor");
    return false;
  }
  let dni = document.forms["myForm"]["dni"].value;
  if (dni == "")
  dni = prompt("Introduzca un número de DNI: 8 números y una letra");
  while (!/^\d{8}[a-zA-Z]$/.test(dni)) {
  }

  //Se separan los números de la letra
  var letraDNI = dni.substring(8, 9).toUpperCase();
  var numDNI = parseInt(dni.substring(0, 8));

  //Se calcula la letra correspondiente al número
  var letras = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
    "T",
  ];
  var letraCorrecta = letras[numDNI % 23];

  if (letraDNI != letraCorrecta) {
    alert(
      "Has introducido una letra incorrecta\nTu letra debería ser: " +
        letraCorrecta
    );
  } else {
    alert("Enhorabuena hemos podido validar tu DNI");
  }
}

/*  var fecha = document.getElementById("born").value;
    var edad = calcularEdad(fecha);
if(edad > 15){
    // aqui haces lo que quieras con la validacion de si es mayor a 15
    alert("El usuario es mayor a 15 años");
}
function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}*/

function validar(){
let inv = document.forms["formulario"]["n1"].value;
if (inv<15);
    alert("Campo requerido");
    return false;
  }
  
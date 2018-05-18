function Valider() {
var premier_nombre = document.getElementById('premier_nombre').value
var deuxieme_nombre = document.getElementById('deuxieme_nombre').value

  var resultat = Math.floor(premier_nombre) * deuxieme_nombre;

  alert(resultat);
}

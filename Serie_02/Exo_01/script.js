function surfaceRectagle() {
  var largeur = prompt("Largeur du rectangle?")
  var longueur = prompt("Longueur du rectangle")

  var resultat = largeur*longueur
  alert("La surface du rectangle est de " + resultat);

}
function periRectangle() {
  var stringLargeur = prompt("Largeur du rectangle?")
  var largeur = Number(stringLargeur)
  var stringLongueur = prompt("Longueur du rectangle")
  var longueur = Number(stringLongueur)

  var resultat = (largeur + longueur)*2
  alert("Le périmetre du rectangle est de " + resultat);
}

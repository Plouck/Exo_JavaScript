function faireChoix() {
var stringX = prompt("Faites votre choix de 1 à 3");
var x = Number(stringX);
switch (x) {
  case 1:
    alert("1.Merci.");
    break;
  case 2:
    alert("2.Bonjour.");
    break;
  case 3:
    alert("3.Au revoir.");
    break;
  default:
    alert("Pardon, que voulez-vous ?");
}
}

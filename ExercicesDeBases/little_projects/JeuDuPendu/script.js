let tabAnswer = ["B", "O", "N", "J", "O", "U", "R"];
let tabPlayer = ["","","","","","",""];
let maxEssaie = 15;
let guestValue;
let valeur;
function guessLetter () {
    guestValue.addEventListener('click', () => {
        guestValue = document.getElementById("pendu");
        valeur= window.prompt("Entrez une lettre: ").toUpperCase;
        
    })

}
guessLetter();

// var lettresMot = [];
// var lettresDevinees = [];
// var uneLettre = "";
// var lettreCorrect = "";
// var lettreDevineesChaine = "";
// var texte = "a" ;
// var texteChaine = "";
// texte = prompt("Ecrivez un mot (MAJUSCLES)");
// lettresMot = texte.split('');
// texteChaine = texte.split('');
// for (let i = 0; i < lettresMot.length; i++) {
//   lettresDevinees.push(" _ ");
//   }
// console.log("Le mot est " + lettresDevinees);
// function guessLetter() {
//   uneLettre = prompt("Ecrivez une lettre (MAJUSCLE)");
//   for (let i = 0; i < lettresMot.length; i++) {
//     if (lettresMot[i] == uneLettre) {
//       lettresDevinees.splice(i, 1, uneLettre);
//       lettreCorrect = lettreCorrect + uneLettre + ",";
//       console.log("Les lettres correctes sont " + lettreCorrect);
//     } else {
//     }
//   }
//   console.log("Le mot est " + lettresDevinees);
//   lettreDevineesChaine = lettresDevinees.toString();
//   texteChaine = texteChaine.toString();
//   if (texteChaine == lettreDevineesChaine) {
//   console.log("BRAVO !");
//   alert("BRAVO !");
// }
// }
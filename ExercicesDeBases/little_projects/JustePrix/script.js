function jeu() {
    function nb_aleatoire(min, max) // on peut aussi def la fonction en dehors 
    {
        let nb = min + (max-min+1)*Math.random();
        return Math.floor(nb);
    }
    let nb_coup = 1;
    let min = 1;
    let max = 100;
    let nb = nb_aleatoire(min, max);
    let claudiu = true;
     
    while(claudiu) {
        let nombre = window.prompt("Entrer un nombre compris entre 1 et 100");
        nb;
        if(nombre < nb) {
            alert("C'est plus !");
            nb_coup ++;
        }
         else if(nombre > nb) {
            alert("C'est moins !");
            nb_coup ++;
        }
        else if(nombre == nb) {
            window.alert("Bravo tu as trouvé le nombre "+ nb + "\n" +
             "tu as gagné en " + nb_coup + " coups");
            claudiu = false;
        }
    }
}

var texte = document.getElementById("texte")
		let buttons = document.getElementsByClassName("color");
		let greenButton = buttons[0];
		let redButton = buttons[1];
		let blueButton = buttons[2];
		greenButton.addEventListener('click', () => {changeColor("green");})
		redButton.addEventListener('click', () => {changeColor("red");})
		blueButton.addEventListener('click', () => {changeColor("blue");})
		function changeColor (couleur) {
			texte.style.color = couleur;
		}
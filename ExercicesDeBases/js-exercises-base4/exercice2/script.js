let show = document.querySelector("a[name='afficher']");
let hide = document.querySelector("a[name='masquer']");
let text = document.getElementById('texte');
show.addEventListener("click", () => {
    document.getElementById('texte').style.display = 'block';
});
hide.addEventListener("click", () => {
    document.getElementById('texte').style.display = 'none';
});


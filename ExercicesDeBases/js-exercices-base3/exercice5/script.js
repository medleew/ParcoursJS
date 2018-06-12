// var img = document.getElementById('img'); 
// for(let i = 0; i<= 5; i++){ 
//     img[i].addEventListener('mouseover', () => { 
//         let x = i + 1
//         this.src="images/image" + x + "_2.jpg"; 
//         }
//     )
// }         



var images = document.getElementsByClassName('img'); 
for(let i = 0; i<images.length; i++){ 
    let x = i + 1
    images[i].onmouseenter = function(){ 
        this.src="images/image" + x + "_2.jpg"; }
}
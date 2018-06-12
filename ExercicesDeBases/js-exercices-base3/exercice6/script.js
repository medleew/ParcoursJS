var images = document.getElementsByClassName('img'); 
for(let i = 0; i<images.length; i++){ 
    let x = i + 1
    images[i].onmouseenter = function(){ 
        this.src="images/image" + x + "_2.jpg"; }
    images[i].onmouseout = function (){
        this.src="images/image" + x + ".jpg";
    }
}
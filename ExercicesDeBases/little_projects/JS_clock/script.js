const secondHand = document.querySelector('.secondHand');
const minHand = document.querySelector('.minHand');
const hourHand = document.querySelector('.hourHand');
// let utcDate = new Date (Date.UTC(2018,6,17,21,10));
let utcDate = new Date (Date.UTC);
function setDate () {
    // const now = utcDate; 
    const now = new Date ();
    const seconds = now.getSeconds();
    const secondsDegrees = (( seconds/60 ) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    const minuts = now.getMinutes();
    const minutsDegrees = ((minuts/60) * 360) + 90;
    minHand.style.transform = `rotate(${minutsDegrees}deg)`;
    const hours = now.getHours();
    const hoursDegrees = ((hours/60) * 360 ) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval (setDate,1000);

let PNJ = 'PNJ';
let Character = {
    name : "character1",
    age : 12000,
    itemToGive : ['stick', 'rock', 'water', 'fire']
};

for (const prop in Character) {
    console.log(`Character.${prop} = ${Character[prop]}`);
  }
  
function giveItem () {
    for (let i = 0; i < Character.itemToGive.length; i++) {
        let randomObject = Character.itemToGive[Math.floor(Math.random() *
            Character.itemToGive.length)];
            if (randomObject == 'stick') {
                alert('The ' + PNJ + ' gave you a ' + randomObject );
            } else if (randomObject == 'water') {
                alert('The ' + PNJ + ' gave you some ' + randomObject );
            } else if (randomObject == 'rock') {
                alert('The ' + PNJ + ' gave you a ' + randomObject );

            } else if (randomObject == 'fire') {
                alert('The ' + PNJ + ' gave you some ' + randomObject );
            }
            break;
    }
}

giveItem();


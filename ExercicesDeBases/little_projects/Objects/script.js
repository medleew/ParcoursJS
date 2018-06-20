
// let PNJ = 'PNJ';
// let Character = {
//     name : "character1",
//     age : 12000,
//     itemToGive : ['stick', 'rock', 'water', 'fire']
// };

// for (const prop in Character) {
//     console.log(`${prop} = ${Character[prop]}`);
//   }
  
// function giveItem () {
//     let randomObject = Character.itemToGive[Math.floor(Math.random() *
//         Character.itemToGive.length)];
//         if (randomObject == 'stick') {
//             alert('The ' + PNJ + ' gave you a ' + randomObject );
//         } else if (randomObject == 'water') {
//             alert('The ' + PNJ + ' gave you some ' + randomObject );
//         } else if (randomObject == 'rock') {
//             alert('The ' + PNJ + ' gave you a ' + randomObject );

//         } else if (randomObject == 'fire') {
//             alert('The ' + PNJ + ' gave you some ' + randomObject );
//         }

//         // ajout switch dans 6 mois
//     }

//  giveItem();

// let objects = [ {Description: 'Sword', Name: 'Masamune', Physic: 45, Magic: 5, minlvl:5, Available: true },
//                 {Description: 'Axe', Name:'Leviathan', Physic:50, Magic:15, minlvl:20, Available:false},   
//                 {Description: 'Staff', Name:'Benediction', Physic:5, Magic:40, minlvl:20, Available:true},
//     ];
//     // console.log(objects[0].Description); ---> pour afficher premier object à la première position 
//     for (let object of objects) {
//         console.log(object.Description); // plus direct et sûr
//     }
//     // for (let i = 0; i< 3; i++) {
//     //     let object = objects[i].Description; // bon mais il y a plus simple et plus rapide ( plus haut )
//     //     console.log(object);
//     // }

//     function objectAvailable () {
//         for (let object of objects) {
//             if (object.Available == true) {
//                 console.log("The " + object.Description + " is available");                 
//             } else {
//                 console.log("The " + object.Description + " is not available");
//             }
//         }
//     }
//     objectAvailable();

//     function stuffLvlMin () {
//         for (let object of objects) {   
//             if (object.minlvl > 10) {
//                 console.log("You have the lvl required to have " + object.Description);
//             } else {
//                 console.log("This " + object.Description + " is not available for your lvl");
//             }
//         }    
//     }
//     stuffLvlMin();

// let mainCharacter = {
//     name : "medlee",
//     lvl : 1,
//     life : 10,
//     weapon : {
//         name : "noobator",
//         damage : 1,
//     },
//     attack : function () {
//         console.log(this.name + " attaque avec l'arme " + this.weapon.name + " les dégâts sont " + (this.lvl * this.weapon.damage));
//     }
// }
// mainCharacter.attack();

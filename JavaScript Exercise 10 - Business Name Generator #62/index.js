/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/
let adjRandom = Math.floor(Math.random() * 3);
let adjective;
if(adjRandom === 0) adjective = "Crazy";
else if(adjRandom === 1) adjective = "Amazing";
else adjective = "Fire";


let ShopRandom = Math.floor(Math.random() * 3);
let ShopName;
if(ShopRandom === 0) ShopName = "Engine";
else if(ShopRandom === 1) ShopName = "Foods";
else ShopName = "Garments";


let AnotherRandom = Math.floor(Math.random() * 3);
let AnotherWord;
if(AnotherRandom === 0) AnotherWord = "Bros";
else if(AnotherRandom === 1) AnotherWord = "Limited";
else AnotherWord = "Hub";

let businessName = adjective + " " + ShopName + " " + AnotherWord;
console.log("Your business name: " + businessName);






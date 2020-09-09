let superheroes = require('superheroes');
let supervillains = require('supervillains');

//SUPERHEROES
//console.log(superheroes.all);
//console.log(superheroes.random());
//superheroes.all.forEach(hero => {
//    console.log(hero);
//});

//SUPERVILLAINS
//console.log(supervillains.all);
//console.log(supervillains.random());
//console.log("There are " + supervillains.all.length + " supervillains.");
//superheroes.all.forEach(villain => {
//    console.log(villain);
//});

//FIGHT
let randHero = superheroes.random();
let randVillain = supervillains.random();
console.log(`${randHero} fights ${randVillain}.`);

const rnd = Math.round(Math.random(0, 2));

if (rnd == 0) {
    console.log(randHero + " wins!");
} else if (rnd == 1) {
    console.log(randVillain + " wins!");
}
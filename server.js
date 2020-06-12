//const express = require("express");
//const app = express();
const superheroes = require("superheroes");
const supervillains = require("supervillains");

//console.log(superheroes.all);
//console.log(superheroes.random());
console.log(supervillains.random());

supervillains.all.forEach(supervillain => {
    console.log("My super villain is", supervillain);
});

console.log("There are " + supervillains.all.length + " supervillains.");
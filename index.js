// const add = require('./iife');
// console.log(__filename);

// (function () {
//     const movie = 'the nun';
//     console.log(movie);
// })();

// (function () {
//     const movie = 'the conjuring';
//     console.log(movie);
// })();

// console.log('hello from index.js');

// const sum = add(1, 2);
// console.log(sum);

const superHero = require('./test');
superHero.logName();
superHero.setName('Hulk');

const newSuperHero = require('./test');
newSuperHero.logName();
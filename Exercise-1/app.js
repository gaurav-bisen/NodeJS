//common js
// const add = require('./math.js');
// console.log(add(5,10));

// const {add} = require('./math');
// console.log(add(5,10));


//multiple exports
const {add, mul, sub, div} = require('./math.js');
console.log(add(5,10));
console.log(sub(5,10));

// const math = require('./math.js');
// console.log(math.add(5,10));

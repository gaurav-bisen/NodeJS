const util = require("util")
const fs = require("fs");

//util promisify

//basically used for converting callback based function into promise based function
const readFileSync = util.promisify(fs.readFile);

readFileSync('test.txt', 'utf-8')
    .then(data => console.log(data))
    .catch(err => console.log(err));

//util format

// formatting string by passing parameters
const formattedText = util.format('%s is %d tax holder', 'Gaurav', 150000);
// console.log(formattedText);

//util inspect

//to inspect in real time 
const obj = {
    name: 'Gaurav',
    age: 21,
    dob: '11 may 2004'
}

const inspectObj = util.inspect(obj, { depth: null, colors: true });

console.log(inspectObj);
console.log(obj);


//util.inherit - bind event and inherit events

//util.deprecate
const oldFn = util.deprecate(
    () => console.log("Old function"),
    "This function is deprecated"
);

oldFn();
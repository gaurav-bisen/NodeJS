//manipulates file paths

const path = require("path");

// console.log(path);
// console.log(__filename);
// console.log(__dirname);

const filePath = path.join("Path-Module","Methods","path.txt");
console.log(filePath);

console.log(path.parse(filePath));
// console.log(path.resolve(filePath));
// console.log(path.extname(filePath));
// console.log(path.basename(filePath));
// console.log(path.dirname(filePath));
// console.log(path.sep);

//check path type
console.log(path.isAbsolute(filePath));

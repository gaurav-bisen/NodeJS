const path = require("path");

const fileName = "learning.txt";
const year = "2026";
const month = "January";

const uploadDir = path.join(__dirname,"uploads",year,month);
const fullPath = path.join(uploadDir,fileName);

console.log(fullPath);
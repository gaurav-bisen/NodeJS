const os = require("os");

console.log("Platform: ", os.platform());
console.log("User: ", os.userInfo());
console.log("Architecture: ", os.arch());
console.log("Free Memory: ", os.freemem());
console.log("Total Memory: ", os.totalmem());
console.log("uptime: ", os.uptime());
console.log("Home directory: ", os.homedir());
console.log("Host Name: ", os.hostname());
console.log("Network Interfaces: ",os.networkInterfaces());
console.log("Detail of logical CPU: ",os.cpus());
console.log("Default directory for temp file: ",os.tmpdir());





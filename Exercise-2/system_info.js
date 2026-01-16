//retrieves system info.
const os = require("os");

console.log("System: ", os.type());
console.log("Host name: ", os.hostname());
console.log("Platform: ",os.platform());
console.log("Architecture: ",os.arch());
console.log("CPU Info: ", os.cpus()[0].model);
console.log("TotaL Memory: ", os.totalmem(), "bytes");
console.log("Free Memory: ", os.freemem(), "bytes");
console.log("System uptime: ", os.uptime());
console.log("Current User Info: ", os.userInfo());
console.log("Home Directory: ", os.homedir());

console.log("Number of Cores:", os.cpus().length);

// console.log("Total Memory (GB):", (os.totalmem() / 1024 ** 3).toFixed(2));
// console.log("Free Memory (GB):", (os.freemem() / 1024 ** 3).toFixed(2));
// console.log("System Uptime (hours):", (os.uptime() / 3600).toFixed(2));



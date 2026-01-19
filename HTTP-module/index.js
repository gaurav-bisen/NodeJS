const http = require("http");
const fs = require("fs");
const url =require("url")

//creates web server | arrow function responsible for incoming request | When incomming request come callback handles it
const myServer = http.createServer((req, res) => {
    if(req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()}: ${req.url} New Req Received \n`;
    const myUrl = url.parse(req.url, true); // true- we want to pass query parameter
    console.log(myUrl);
    
    fs.appendFile('log.txt', log, (err, data) => {
        // res.end("Hello from server!");
        switch (myUrl.pathname) {
            case '/': res.end("HomePage!");
                break;
            case '/about': 
            const username = myUrl.query.myname;
            res.end(`Hi, ${username} !`);
                break;
            default: res.end("404 OOPS! url not found!");
                 
        }
    });
});


//to run server we want ports
myServer.listen(8080, () => {
    console.log("Server started!");
});


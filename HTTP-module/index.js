const http = require("http");
const fs = require("fs");

//creates web server | arrow function responsible for incoming request | When incomming request come callback handles it
const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Req Received \n`;
    fs.appendFile('log.txt', log, (err, data) => {
        // res.end("Hello from server!");
        switch (req.url) {
            case '/': res.end("HomePage!");
                break;
            case '/about': res.end("About Page!");
                break;
            default: res.end("404 OOPS! url not found!");
                 
        }
    });
});


//to run server we want ports
myServer.listen(8080, () => {
    console.log("Server started!");
});


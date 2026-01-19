const http = require("http");

//web server
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.setHeader("Content-Type", "text/plain");
        res.end("I'm HTTP Server!");
    }
    else if (req.method === "POST" && req.url === "/data") {
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        })

        req.on("end", () => {
            const parsedData = JSON.parse(body);

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                message: "Data recieved successfully",
                receivedData: parsedData
            }))
        })
    }
    else if (req.url === "/about") {
        res.end("Hello I'm Http Server about page");
    } else {
        res.end("OOPs this page not defined/available on HTTP Server!")
    }
});


const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server Listening on ${PORT}`);
})
const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    fs.appendFile("logs.txt", `New request at time ${Date.now()} on route ${req.url}\n`, (err, data) => {
        if (req.url === "/") {
            res.end("Home Page");
        } else if (req.url === "/about") {
            res.end("About page");
        } else {
            res.end("404 Bad request");
        }
    });
})

myServer.listen(8080, () => {
    console.log("Server started on port 8080");
})
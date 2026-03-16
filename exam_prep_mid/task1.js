const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const LOG_FILE = path.join(__dirname, "server.log");
const myServer = http.createServer((req, res) => {
    fs.appendFile(LOG_FILE, `Route: ${req.url} HTTP Method: ${req.method} Date and time: ${Date.now().toLocaleString()}\n`, (err, data) => {
        if (req.url === "/") {
            res.end("Welcome to my server");
        } else if (req.url === "/about") {
            res.end("About page");
        } else if (req.url === "/contact") {
            res.end("Contact us");
        }
    });
})

myServer.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
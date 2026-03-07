const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const file = path.join(__dirname, "file.txt");

const server = http.createServer((req, res) => {
    const pathname = req.url;
    const data = `${pathname} : ${req.method} : ${Date.now()}\n`
    if (pathname === "/") {
        fs.appendFile(file, data, (err) => {
            if (err) {
                res.end("Error writing");
            } else {
                res.end("Log success Home page")
            }
        })
    }
    if (pathname === "/about") {
        fs.appendFile(file, data, (err) => {
            if (err) {
                res.end("Error writing");
            } else {
                res.end("Log success About page")
            }
        })
    }
    if (pathname === "/contact") {
        fs.appendFile(file, data, (err) => {
            if (err) {
                res.end("Error writing");
            } else {
                res.end("Log success Contact page")
            }
        })
    }
})

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
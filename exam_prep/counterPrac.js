const http = require("http");
const path = require("path");
const fs = require("fs");

const PORT = 3000;
const count = path.join(__dirname, "count.txt");

fs.writeFileSync(count, "0");
const server = http.createServer((req, res) => {
    const pathname = req.url;
    if (pathname === "/") {
        res.end("Welcome to counter wub app");
    } else if (pathname === "/visit") {
        fs.readFile(count, "utf8", (err, data) => {
            let visit = 0;
            if (err) {
                res.end("Error reading");
            } else {
                visit = parseInt(data) || 0;
            }

            visit++;

            fs.writeFile(count, visit.toString(), (err) => {
                if (err) {
                    res.end("Error writing");
                } else {
                    res.end("Visit successfull");
                }
            });
        });
    } else if (pathname === "/count") {
        fs.readFile(count, "utf8", (err, data) => {
            if (err) {
                res.end("Error reading count");
            } else {
                res.end(data);
            }
        });
    } else if (pathname === "/reset") {
        fs.writeFile(count, "0", (err) => {
            if (err) {
                res.end("Error resetting");
            } else {
                res.end("Write successfull");
            }
        });
    }
});

server.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
})
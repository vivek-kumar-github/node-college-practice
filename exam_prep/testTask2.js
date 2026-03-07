const http = require("http");
const path = require("path");
const fs = require("fs");
const url = require("url");
const os = require("os");

const PORT = 3000;
const notes = path.join(__dirname, "notes.txt");
const notesBackup = path.join(__dirname, "notesBackup.txt");
const sysinfo = path.join(__dirname, "sysinfo.txt");

const server = http.createServer((req, res) => {
    const fullUrl = new URL(req.url, `http://${req.headers.host}`)
    const path = fullUrl.pathname;
    const content = `${fullUrl.searchParams.get("note")}\n`;

    if (path === "/") {
        res.end("Welcome to note taking web app");
    }
    else if (path === "/add") {
        fs.appendFile(notes, content, (err) => {
            if (err) {
                res.end("Error writing note");
            } else {
                res.end("Noted successfully");
            }
        });
    } else if (path === "/notes") {
        fs.readFile(notes, "utf8", (err, data) => {
            if (err) {
                res.end("Notes empty");
            } else {
                res.end(data);
            }
        });
    } else if (path === "/clear") {
        fs.unlink(notes, (err) => {
            if (err) {
                res.end("Error removing");
            } else {
                res.end("Removed successfully");
            }
        })
    } else if (path === "/backup") {
        fs.copyFile(notes, notesBackup, (err) => {
            if (err) {
                res.end("Error copying");
            } else {
                res.end("Backup created");
            }
        })
    } else if (path === "/readbackup") {
        fs.readFile(notesBackup, "utf8", (err, data) => {
            if (err) {
                res.end("error reading backup");
            } else {
                res.end(data);
            }
        })
    } else if (path === "/sysinfo") {
        fs.writeFile(sysinfo, `${os.arch} | ${JSON.stringify(os.cpus())} | ${os.freemem()} | ${os.totalmem()}\n`, (err) => {
            if (err) {
                res.end("Error");
            }
        })
        fs.readFile(sysinfo, "utf8", (err, data) => {
            if (err) {
                res.end("Error ");
            } else {
                res.end(data);
            }
        })
    }
    else {
        res.end("404 Bad request");
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
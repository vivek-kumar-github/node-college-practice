const http = require("http");
const path = require("path");
const fs = require("fs");

const PORT = 3000;
const notes = path.join(__dirname, "notes.txt");

const server = http.createServer((req, res) => {
    const fullUrl = new URL(req.url, `http://${req.headers.host}`);
    const pathName = fullUrl.pathname;
    const noteContent = fullUrl.searchParams.get("note");

    if (pathName === "/") {
        res.end("Welcome to note taking WebApp");
    } else if (pathName === "/add") {
        if (!noteContent) {
            res.statusCode(404);
            res.end("Bad request Please provide note content");
        }
        fs.appendFile(notes, `${noteContent} \n`, (err) => {
            if (!err) {
                res.end("Note added successfully");
            } else {
                res.end("Error writing note");
            }
        });
    } else if (pathName === "/notes") {
        const cnt = fs.readFile(notes, "utf8", (err, data) => {
            if (err) {
                res.end("Error reading notes");
            } else if (!data) {
                res.end("Notes is empty");
            } else {
                res.end(data);
            }
        });
    } else if (pathName === "/clear") {
        fs.unlink(notes, (err) => {
            if (err) {
                res.end("Error clearing");
            } else {
                res.end("Notes cleared");
            }
        })
    } else {
        res.end("404 Bad request");
    }
});

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
const os = require("os");
const http = require("http");

const server = http.createServer((request, response) => {
    const requestUrl = request.url;
    console.log("Request URL ", requestUrl);
    const requestMethod = request.method;
    console.log("Request Method ", requestMethod);

    if (requestUrl === "/") {
        response.end("Default Page");
    }
    if (requestUrl === "/home") {
        response.end("Home Page");
    }
    if (requestUrl === "/users") {
        response.end("List of Users");
    }
    if (requestUrl === "/sc") {
        const freeMem = `Free RAM: ${os.freemem() / 1024 / 1024 / 1024}`;
        response.end(freeMem);
    }
});

server.listen(3000);

//Create a log file if not present and log requests
//Keep on adding next requests
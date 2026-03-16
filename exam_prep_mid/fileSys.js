const fs = require("fs");

//Sync write
// fs.writeFileSync("text.txt", "Hey there");

//asyn write
// fs.writeFile("text.txt", "Hello there", (err) => {});

//sync read
// const res = fs.readFileSync("text.txt", "utf-8");
// console.log(res);

//async read
// fs.readFile("text.txt", "utf-8", (err, res) => {
//     if (err) {
//         console.error("Error reading file:", err);
//     } else {
//         console.log(res);
//     }
// })

//append file sync
// fs.appendFileSync("text.txt", "\nthis is dev 4");

//append file async
// fs.appendFile("text.txt", "\nthis is dev 5", (err) => {});

//copy file
// fs.cpSync("text.txt", "copy.txt");

//delete/unlink file
// fs.unlinkSync("copy.txt");

//file stats
// const stats = fs.statSync("text.txt");
// console.log(stats);
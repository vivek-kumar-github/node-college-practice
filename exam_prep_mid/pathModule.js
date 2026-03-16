const path = require("path");

console.log(__dirname);
console.log(__filename);

const pt = path.join("C", "folder1", "folder2", "file.js");
console.log(pt);
console.log(path.parse(pt));
console.log(path.extname(pt));
console.log(path.basename(pt));
console.log(path.resolve(pt));
console.log(path.dirname(pt));
console.log(path.sep);
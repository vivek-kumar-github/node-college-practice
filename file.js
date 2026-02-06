// import os from "os";

// console.log("Platform ", os.platform());
// console.log("Architecture ", os.arch());
// console.log("Memory", os.freemem());

// const freeMemGB = (os.freemem() / 1024 / 1024 / 1024);

// console.log(freeMemGB);
// console.log("CPU ", os.cpus());

// const functions = require("./modules");

// import { Add, Multi } from "./modules.js";

const {Add, Multi} = require("./modules");

console.log("Add ", Add(1, 2));
console.log("Multiply ", Multi(2, 3));
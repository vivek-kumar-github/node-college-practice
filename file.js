// import os from "os";

// console.log("Platform ", os.platform());
// console.log("Architecture ", os.arch());
// console.log("Memory", os.freemem());

// const freeMemGB = (os.freemem() / 1024 / 1024 / 1024);

// console.log(freeMemGB);
// console.log("CPU ", os.cpus());

// const functions = require("./modules");

// import { Add, Multi } from "./modules.js";

// const {Add, Multi} = require("./modules");

// console.log("Add ", Add(1, 2));
// console.log("Multiply ", Multi(2, 3));

// const value = require("./counter");
// const funInPage2 = require("./newfile");
// console.log("Value ", value);
// funInPage2();

// //Wrapper class of js files
// (exports, module, require, __dirname, __filename) = () => {
//     //all out code
// }


// const a = () => {
//     b();
//     console.log(`a : a`);
// }

// const b = () => {
//     console.log(`b : b`);
// }

// a();

//Empty stack

// a is pushed
// b is pushed
// b is executed
// b is popped
// a is executed
// a is popped


// const a = () => {
//     b();
//     console.log(`a : a`);
// }

// const b = () => {
//     console.log(`b init`);
//     setTimeout(() => {
//         console.log("b first");
//     }, 100000);
//     setTimeout(() => {
//         console.log("b second");
//     }, 0);
//     console.log(`b ended`);
// };

// a();
// console.log(`Ended`);

// a is pushed
// b is pushed
// b is executed
// Registering callback
// b is popped
// a is executed
// a is popped
// last line is pushed
// last line is executed
// last line is popped

//Stack overload
// const crash = () => {
//     crash();
// }
// crash();

//call stack --> event loop --> registered call back


const a = () => {
    b();
    console.log(`a : a`);
}

const b = () => {
    console.log(`b init`);

    setTimeout(() => {                     //Micro task lower priority
        console.log("b first");
    }, 0);

    setTimeout(() => {
        console.log("b second");
    }, 0);

    Promise.resolve().then(() => {         //Macro task Higher priority
        console.log(`b Promise Portion`);
    });

    console.log(`b ended`);
};

a();
console.log(`Ended`);